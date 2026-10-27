/* Release badge and safe summary popup for web and the Android WebView. */
window.AppUpdates = (function () {
  'use strict';

  var RELEASE_API = 'https://api.github.com/repos/Athenova-tools/qa-studies/releases/latest';
  var RELEASES_URL = 'https://github.com/Athenova-tools/qa-studies/releases/latest';
  var APK_URL = 'https://github.com/Athenova-tools/qa-studies/releases/latest/download/istqb-ctfl.apk';
  var CONFIG = window.ISTQB_RELEASE_UPDATE_CONFIG || {};
  var PLATFORM = CONFIG.platform || (window.location && window.location.protocol === 'file:' ? 'android' : 'web');
  var BASELINE = CONFIG.baseline || 'v1.1.14';
  var FALLBACK_TAG = CONFIG.current || BASELINE;
  var FALLBACK_SUMMARY = CONFIG.fallbackSummary || ['Release notes are available from the project release page.'];
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
    var bullets = [];
    String(body || '').split(/\r?\n/).forEach(function (line) {
      var bullet = line.match(/^\s*[-*]\s+(.+)/);
      if (bullet) {
        var text = plainText(bullet[1]);
        if (text) bullets.push(text);
      }
    });
    return bullets;
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

  function renderSummary(release) {
    var title = document.getElementById('updates-title');
    var summary = document.getElementById('updates-summary');
    var download = document.getElementById('updates-download');
    var notes = document.getElementById('updates-notes');
    if (title) title.textContent = translate('updates.title', 'What changed');
    if (summary) {
      clearList(summary);
      var items = summarizeRelease(release.body);
      if (!items.length) items = FALLBACK_SUMMARY;
      items.forEach(function (text) {
        var item = document.createElement('li');
        item.textContent = text;
        summary.appendChild(item);
      });
    }
    if (download) {
      download.href = APK_URL;
      download.target = PLATFORM === 'android' ? '_self' : '_blank';
      download.rel = 'noopener';
    }
    if (notes) {
      notes.href = release.html_url || RELEASES_URL;
      notes.target = PLATFORM === 'android' ? '_self' : '_blank';
      notes.rel = 'noopener';
    }
  }

  function renderControls(release) {
    if (!release || !release.tag_name) return;
    currentRelease = release;
    var openButton = document.getElementById('updates-open');
    var badge = document.getElementById('updates-badge');
    var androidApkLink = document.getElementById('updates-apk-link');
    var androidApkBadge = document.getElementById('updates-apk-badge');
    var downloadButton = document.querySelector('[data-i18n-aria-label="hero.apk"]');
    var apkBadge = document.getElementById('download-apk-badge');
    var announce = shouldAnnounce(release.tag_name, readSeenTag());
    [badge, apkBadge].forEach(function (el) {
      if (el) {
        el.hidden = !announce || PLATFORM === 'android';
        el.textContent = translate('updates.new', 'NEW');
      }
    });
    if (androidApkBadge) androidApkBadge.hidden = !announce;
    if (androidApkLink) {
      androidApkLink.href = APK_URL;
      androidApkLink.target = '_self';
      androidApkLink.classList.toggle('updates-link--new', announce);
    }
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
    var androidApkLink = document.getElementById('updates-apk-link');
    var downloadButton = document.querySelector('[data-i18n-aria-label="hero.apk"]');
    modal = document.getElementById('updates-dialog');
    if (!openButton || !modal) return;

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
      html_url: RELEASES_URL,
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
    if (androidApkLink) {
      androidApkLink.href = APK_URL;
      androidApkLink.addEventListener('click', function () {
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
