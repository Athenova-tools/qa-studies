/* Latest published GitHub release indicator for the static landing page. */
window.AppUpdates = (function () {
  'use strict';

  var RELEASE_API = 'https://api.github.com/repos/Athenova-tools/qa-studies/releases/latest';
  var RELEASES_URL = 'https://github.com/Athenova-tools/qa-studies/releases/latest';
  /* Last release already represented by the deployed web page. */
  var SITE_BASELINE = 'v1.1.14';
  var SEEN_KEY = 'istqb_ctfl_seen_release';
  var CACHE_KEY = 'istqb_ctfl_latest_release_cache';
  var CACHE_TTL_MS = 60 * 60 * 1000;

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

  function shouldAnnounce(latestTag, seenTag) {
    return compareVersions(latestTag, seenTag || SITE_BASELINE) > 0;
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
      if (value && value.savedAt && Date.now() - value.savedAt < CACHE_TTL_MS && value.release) {
        return value.release;
      }
    } catch (e) { /* ignore stale or unavailable storage */ }
    return null;
  }

  function writeCache(release) {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), release: release })); }
    catch (e) { /* notification still works without storage */ }
  }

  function render(link, badge, release) {
    if (!release || !release.tag_name) return;
    var tag = release.tag_name;
    var announce = shouldAnnounce(tag, readSeenTag());
    link.href = release.html_url || RELEASES_URL;
    link.title = (release.name || tag) + ' — ' + tag;
    link.classList.toggle('updates-link--new', announce);
    badge.hidden = !announce;
    link.setAttribute('aria-label', announce
      ? 'New project update: ' + tag + '. View release notes'
      : 'View project release notes');
    link.onclick = function () {
      markSeen(tag);
    };
  }

  function init() {
    var link = document.getElementById('updates-link');
    var badge = document.getElementById('updates-badge');
    if (!link || !badge) return;
    link.href = RELEASES_URL;

    var cached = readCache();
    if (cached) render(link, badge, cached);

    fetch(RELEASE_API + '?_=' + Date.now(), {
      cache: 'no-store',
      headers: { Accept: 'application/vnd.github+json' },
    }).then(function (response) {
      if (!response.ok) throw new Error('GitHub releases API returned ' + response.status);
      return response.json();
    }).then(function (release) {
      if (!release || !release.tag_name) return;
      writeCache(release);
      render(link, badge, release);
    }).catch(function () {
      /* Keep the direct Releases link usable when offline or rate-limited. */
    });
  }

  return {
    init: init,
    shouldAnnounce: shouldAnnounce,
  };
})();
