/* Release badge and safe summary popup for web and the Android WebView. */
window.AppUpdates = (function () {
  'use strict';

  var RELEASE_API = 'https://api.github.com/repos/Athenova-tools/qa-studies/releases/latest';
  var APK_URL = 'https://github.com/Athenova-tools/qa-studies/releases/latest/download/istqb-ctfl.apk';
  var CONFIG = window.ISTQB_RELEASE_UPDATE_CONFIG || {};
  var PLATFORM = CONFIG.platform || (window.location && window.location.protocol === 'file:' ? 'android' : 'web');
  var BASELINE = CONFIG.baseline || 'v1.1.14';
  var FALLBACK_TAG = CONFIG.current || BASELINE;
  var FALLBACK_SUMMARY = CONFIG.fallbackSummary || {
    web: { en: ['A new website update and Android APK are available.'], pt: ['Há uma nova actualização do site e APK Android.'] },
    android: { en: ['A new Android APK is available for direct download.'], pt: ['Está disponível um novo APK Android para download directo.'] },
  };
  var SEEN_KEY = 'istqb_ctfl_seen_release_' + PLATFORM;
  var CACHE_KEY = 'istqb_ctfl_latest_release_cache_' + PLATFORM;
  var CACHE_TTL_MS = 60 * 60 * 1000;
  var currentRelease = null;
  var modal = null;
  var lastFocus = null;

  function versionParts(tag) {
    return String(tag || '').replace(/^v/i, '').split('.').map(function (part) {
      var n = parseInt(part, 10);
      return isNaN(n) ? 0 : n;
    });
  }

  function compareVersions(a, b) {
    var av = versionParts(a);
    var bv = versionParts(b);
    var length = Math.max(av.length, bv.length);
    for (var i = 0; i < length; i++) {
      var diff = (av[i] || 0) - (bv[i] || 0);
      if (diff) return diff > 0 ? 1 : -1;
    }
    return 0;
  }

  function shouldAnnounce(latestTag, seenTag, baselineTag) {
    return compareVersions(latestTag, seenTag || baselineTag || BASELINE) > 0;
  }

  function plainText(markdown) {
    return String(markdown || '')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/<[^>]*>/g, '')
      .replace(/\*\*|__|`/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function summarizeRelease(body) {
    var sections = {
      web: { en: [], pt: [] },
      android: { en: [], pt: [] },
    };
    var currentSection = '';
    var currentLanguage = 'pt';
    var allowTaggedTopics = true;
    String(body || '').split(/\r?\n/).forEach(function (line) {
      var heading = line.match(/^\s*#{1,3}\s+(.+)/);
      if (heading) {
        var name = plainText(heading[1]).toLowerCase();
        currentSection = /android|apk|mobile/.test(name) ? 'android' : (/web|website|site/.test(name) ? 'web' : '');
        currentLanguage = /\b(en|eng|english)\b/.test(name) ? 'en' : (/\bpt(?:-pt)?\b|portugu/.test(name) ? 'pt' : 'pt');
        allowTaggedTopics = !/verific|validat|test results|checks/.test(name);
        return;
      }
      var bullet = line.match(/^\s*[-*]\s+(.+)/);
      if (bullet) {
        var text = plainText(bullet[1]);
        if (!text) return;
        if (currentSection) {
          sections[currentSection][currentLanguage].push(text);
          return;
        }
        if (!allowTaggedTopics) return;
        var tagged = text.match(/^(web\s+(?:and|e)\s+android|android|apk|web|website)\s*:\s*(.*)$/i);
        if (tagged) {
          var label = tagged[1].toLowerCase();
          var content = tagged[2] || text;
          if (/web\s+and\s+android/.test(label)) {
            sections.web.pt.push(content);
            sections.android.pt.push(content);
          } else if (/web\s+e\s+android/.test(label)) {
            sections.web.pt.push(content);
            sections.android.pt.push(content);
          } else {
            sections[/android|apk/.test(label) ? 'android' : 'web'].pt.push(content);
          }
        }
      }
    });
    return sections;
  }

  function readSeenTag() {
    try { return localStorage.getItem(SEEN_KEY); } catch (e) { return null; }
  }

  function markSeen(tag) {
    if (!tag) return;
    try { localStorage.setItem(SEEN_KEY, tag); } catch (e) { /* storage may be disabled */ }
  }

  function readCache() {
    try {
      var value = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
      if (value && value.savedAt && Date.now() - value.savedAt < CACHE_TTL_MS && value.release) return value.release;
    } catch (e) { /* ignore stale or unavailable storage */ }
    return null;
  }

  function writeCache(release) {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), release: release })); }
    catch (e) { /* notification still works without storage */ }
  }

  function translate(key, fallback) {
    try {
      var dict = window.AppI18n.DICT[window.AppI18n.getLang()];
      return dict && dict[key] || fallback;
    } catch (e) { return fallback; }
  }

  function clearList(list) {
    while (list && list.firstChild) list.removeChild(list.firstChild);
  }

  function cloudDownloadIcon() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'apk-download-icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    var cloud = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    cloud.setAttribute('d', 'M7 18H6a4 4 0 1 1 .8-7.92A5.5 5.5 0 0 1 17 8.5a4.75 4.75 0 0 1 1 9.42h-1');
    var arrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arrow.setAttribute('d', 'M12 12v9m-4-4 4 4 4-4');
    svg.appendChild(cloud);
    svg.appendChild(arrow);
    return svg;
  }

  function applyCloudDownloadIcons() {
    var heroIcon = document.querySelector('.hero__apk-icon');
    var androidIcon = document.querySelector('.updates-apk-link .updates-link__icon');
    [heroIcon, androidIcon].forEach(function (container) {
      if (!container) return;
      clearList(container);
      container.appendChild(cloudDownloadIcon());
    });
    var dialogDownload = document.getElementById('updates-download');
    if (dialogDownload && !dialogDownload.querySelector('.apk-download-icon')) {
      dialogDownload.insertBefore(cloudDownloadIcon(), dialogDownload.firstChild);
    }
  }

  function renderSummary(release) {
    var title = document.getElementById('updates-title');
    var webSummary = document.getElementById('updates-summary-web');
    var androidSummary = document.getElementById('updates-summary-android');
    var download = document.getElementById('updates-download');
    if (title) title.textContent = translate('updates.title', 'What changed');
    var items = summarizeRelease(release.body);
    var language = 'en';
    try { language = window.AppI18n.getLang() === 'pt' ? 'pt' : 'en'; } catch (e) {}
    var fallbackWeb = FALLBACK_SUMMARY.web && FALLBACK_SUMMARY.web[language];
    var fallbackAndroid = FALLBACK_SUMMARY.android && FALLBACK_SUMMARY.android[language];
    var webItems = items.web[language].length ? items.web[language] : (fallbackWeb || []);
    var androidItems = items.android[language].length ? items.android[language] : (fallbackAndroid || []);
    [[webSummary, webItems], [androidSummary, androidItems]].forEach(function (group) {
      var list = group[0];
      clearList(list);
      if (list) group[1].forEach(function (text) {
        var item = document.createElement('li');
        item.textContent = text;
        list.appendChild(item);
      });
    });
    if (download) {
      download.href = APK_URL;
      download.target = PLATFORM === 'android' ? '_self' : '_blank';
      download.rel = 'noopener';
    }
  }

  function renderControls(release) {
    if (!release || !release.tag_name) return;
    currentRelease = release;
    var openButton = document.getElementById('updates-open');
    var badge = document.getElementById('updates-badge');
    var downloadButton = document.querySelector('[data-i18n-aria-label="hero.apk"]');
    var apkBadge = document.getElementById('download-apk-badge');
    var announce = shouldAnnounce(release.tag_name, readSeenTag());
    [badge, apkBadge].forEach(function (el) {
      if (el) {
        el.hidden = !announce;
        el.textContent = translate('updates.new', 'NEW');
      }
    });
    if (openButton) {
      openButton.classList.toggle('updates-link--new', announce);
      openButton.setAttribute('aria-label', announce
        ? 'New project update. View summary'
        : 'View project release summary');
      openButton.title = translate('updates.aria', 'View project release summary');
    }
    if (downloadButton && apkBadge) downloadButton.classList.toggle('hero__apk--new', announce);
    renderSummary(release);
  }

  function openDialog() {
    if (!modal || !currentRelease) return;
    lastFocus = document.activeElement;
    markSeen(currentRelease.tag_name);
    renderControls(currentRelease);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    var closeButton = document.getElementById('updates-close');
    if (closeButton) closeButton.focus();
  }

  function closeDialog() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function init() {
    var openButton = document.getElementById('updates-open');
    var badge = document.getElementById('updates-badge');
    var apkBadge = document.getElementById('download-apk-badge');
    var downloadButton = document.querySelector('[data-i18n-aria-label="hero.apk"]');
    modal = document.getElementById('updates-dialog');
    if (!openButton || !modal) return;
    applyCloudDownloadIcons();

    if (downloadButton && !apkBadge) {
      apkBadge = document.createElement('span');
      apkBadge.className = 'hero__apk-badge';
      apkBadge.id = 'download-apk-badge';
      apkBadge.setAttribute('aria-hidden', 'true');
      apkBadge.hidden = true;
      apkBadge.textContent = translate('updates.new', 'NEW');
      downloadButton.appendChild(apkBadge);
    }
    if (downloadButton) downloadButton.id = 'download-apk';
    var fallbackRelease = {
      tag_name: FALLBACK_TAG,
      name: FALLBACK_TAG + ' — Updates',
      body: '',
    };
    renderControls(fallbackRelease);
    openButton.addEventListener('click', openDialog);
    modal.querySelectorAll('[data-updates-close]').forEach(function (element) {
      element.addEventListener('click', closeDialog);
    });
    document.addEventListener('keydown', function (event) {
      if (!modal.hidden && event.key === 'Escape') closeDialog();
    });

    var cached = readCache();
    if (cached && compareVersions(cached.tag_name, FALLBACK_TAG) > 0) renderControls(cached);

    if (downloadButton) {
      downloadButton.addEventListener('click', function () {
        if (!currentRelease) return;
        markSeen(currentRelease.tag_name);
        renderControls(currentRelease);
      });
    }
    fetch(RELEASE_API + '?_=' + Date.now(), {
      cache: 'no-store',
      headers: { Accept: 'application/vnd.github+json' },
    }).then(function (response) {
      if (!response.ok) throw new Error('GitHub releases API returned ' + response.status);
      return response.json();
    }).then(function (release) {
      if (!release || !release.tag_name) return;
      writeCache(release);
      renderControls(compareVersions(release.tag_name, FALLBACK_TAG) >= 0 ? release : fallbackRelease);
    }).catch(function () {
      /* Static fallback keeps the notice and direct APK download available offline. */
    });
  }

  return {
    init: init,
    shouldAnnounce: shouldAnnounce,
    summarizeRelease: summarizeRelease,
  };
})();
