/**
 * ISTQB CTFL v4.0.1 Exam Simulator — Statistics & Analytics Module
 * Persists exam attempts to localStorage and renders dashboard.
 * All DOM output uses createElement; no innerHTML for untrusted content.
 *
 * Renders into: #stats-dashboard (if present in the DOM)
 */
const ExamStats = (function () {
  'use strict';

  var STORAGE_KEY = 'istqb_ctfl_attempts';
  var FULL_KEY_PREFIX = 'istqb_ctfl_full_';
  var TOTAL_Q = 40;
  var selectedExamFilter = 'all';
  var PAGE_SIZE = 5;
  var recentCurrentPage = 1;
  /* Ordenação da tabela Recent Attempts: null = default (data desc) */
  var recentSort = { key: null, dir: null };

  function attemptSortValue(a, key) {
    if (key === 'date') {
      var t = Date.parse(a.date);
      return isNaN(t) ? (a.id || 0) : t;
    }
    if (key === 'exam') return Number(a.examId) || 0;
    if (key === 'score') return Number(a.score) || 0;
    if (key === 'percentage') return parseFloat(a.percentage) || 0;
    if (key === 'result') return a.passed ? 1 : 0;
    if (key === 'time') {
      var parts = String(a.timeSpent || '').split(':');
      var secs = 0;
      for (var pi = 0; pi < parts.length; pi++) {
        var n = parseInt(parts[pi], 10);
        if (isNaN(n)) return 0;
        secs = secs * 60 + n;
      }
      return secs;
    }
    return 0;
  }

  window.__inReviewMode = false;

  /* Last import report (shown in the dashboard until it expires) */
  var importReport = null;
  var importReportTimer = null;
  var hiddenFileInput = null;

  /* =================================================================
     Helpers
     ================================================================= */

  function createEl(tag, className, attrs) {
    var el = document.createElement(tag);
    if (className) {
      if (Array.isArray(className)) {
        el.className = className.filter(Boolean).join(' ');
      } else {
        el.className = className;
      }
    }
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === 'text') {
          el.textContent = attrs[k];
        } else if (k === 'html') {
          el.innerHTML = attrs[k];
        } else {
          el.setAttribute(k, attrs[k]);
        }
      });
    }
    return el;
  }

  function getDateStr() {
    var d = new Date();
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  /* =================================================================
     Platform origin detection
     ================================================================= */

  /* =================================================================
     Keep screen awake (Screen Wake Lock API — web).
     Na app Android isto e' garantido por FLAG_KEEP_SCREEN_ON no MainActivity.
     ================================================================= */
  var screenWakeLock = null;
  function keepScreenAwake() {
    if (typeof navigator === 'undefined' || !navigator.wakeLock ||
        typeof navigator.wakeLock.request !== 'function') return;
    if (screenWakeLock) return;
    try {
      navigator.wakeLock.request('screen').then(function (lock) {
        screenWakeLock = lock;
        lock.addEventListener('release', function () { screenWakeLock = null; });
      }).catch(function () { /* permissao negada / nao suportado */ });
    } catch (e) { /* API indisponivel */ }
  }
  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible' && !screenWakeLock) keepScreenAwake();
    });
  }

  function detectOrigin() {
    try {
      if (typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent || '')) {
        return 'android';
      }
    } catch (e) { /* ignore */ }
    return 'web';
  }

  /* =================================================================
     localStorage Persistence
     ================================================================= */

  function getAttempts() {
    try {
      var data = localStorage.getItem(STORAGE_KEY);
      var attempts = data ? JSON.parse(data) : [];
      if (!Array.isArray(attempts)) return [];
      /* Backfill origin for records created before this field existed */
      var changed = false;
      var origin = detectOrigin();
      attempts.forEach(function (a) {
        if (a && !a.origin) { a.origin = origin; changed = true; }
      });
      if (changed && attempts.length) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts)); } catch (e) { /* ignore */ }
      }
      return attempts;
    } catch (e) {
      return [];
    }
  }

  function saveAttempt(result) {
    if (!result) return;
    var attempts = getAttempts();
    var id = Date.now();
    var entry = {
      id: id,
      date: getDateStr(),
      examId: result.examId || 1,
      score: result.score,
      total: result.total || TOTAL_Q,
      percentage: result.percentage,
      passed: result.passed,
      correctCount: result.correctCount,
      incorrectCount: result.incorrectCount,
      unansweredCount: result.unansweredCount,
      timeSpent: result.timeSpent || '—',
      chapterPerformance: result.chapterPerformance || undefined,
      origin: detectOrigin(),
    };
    attempts.push(entry);
    /* Stamp the id on the result so the Review screen can export it */
    result.id = id;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
    } catch (e) {
      /* localStorage full or unavailable — silently ignore */
    }

    /* Save review data for this attempt (compact answers; no eviction —
       every attempt keeps its Question Review data so it can be exported) */
    if ((result.answers && result.answers.length) || (result.details && result.details.length)) {
      try {
        var fullKey = FULL_KEY_PREFIX + id;
        var fullData = {
          id: id,
          date: entry.date,
          examId: entry.examId,
          score: result.score,
          total: result.total || TOTAL_Q,
          percentage: result.percentage,
          passed: result.passed,
          correctCount: result.correctCount,
          incorrectCount: result.incorrectCount,
          unansweredCount: result.unansweredCount,
          timeSpent: entry.timeSpent,
          chapterPerformance: result.chapterPerformance,
        };
        if (result.answers && result.answers.length) {
          fullData.answers = result.answers;
        } else {
          /* Fallback: legacy callers that only provide details */
          fullData.details = result.details;
        }
        localStorage.setItem(fullKey, JSON.stringify(fullData));
      } catch (e) {
        /* ignore — summary is still saved, review falls back to the summary card */
      }
    }
  }

  function getFullResult(id) {
    try {
      var data = localStorage.getItem(FULL_KEY_PREFIX + id);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  function deleteAttempt(id) {
    try {
      var attempts = getAttempts();
      var filtered = [];
      attempts.forEach(function (a) {
        if (a.id === id) {
          try { localStorage.removeItem(FULL_KEY_PREFIX + id); } catch (e) { /* ignore */ }
        } else {
          filtered.push(a);
        }
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    } catch (e) {
      /* ignore */
    }
  }

  function clearHistory() {
    try {
      var attempts = getAttempts();
      attempts.forEach(function (a) {
        try { localStorage.removeItem(FULL_KEY_PREFIX + a.id); } catch (e) { /* ignore */ }
      });
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }
  }

  /* =================================================================
     Export / Import — JSON sync between devices
     Export: single attempt (Review) or all attempts (dashboard).
     Import: strictly additive for local attempts; records previously
     imported are refreshed from the file; new ones are added.
     ================================================================= */

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function fileStamp() {
    var d = new Date();
    return d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate()) +
      '-' + pad2(d.getHours()) + pad2(d.getMinutes()) + pad2(d.getSeconds());
  }

  /* Origin sigla no nome do ficheiro exportado: WEB ou AND */
  function originTag() {
    return detectOrigin() === 'android' ? 'AND' : 'WEB';
  }

  function attemptFromResults(results) {
    return {
      id: results.id || Date.now(),
      date: results.date || getDateStr(),
      examId: results.examId || 1,
      score: results.score,
      total: results.total || TOTAL_Q,
      percentage: results.percentage,
      passed: results.passed,
      correctCount: results.correctCount,
      incorrectCount: results.incorrectCount,
      unansweredCount: results.unansweredCount,
      timeSpent: results.timeSpent || '—',
      chapterPerformance: results.chapterPerformance || undefined,
      origin: detectOrigin(),
    };
  }

  function buildExportPayload(attemptIds) {
    var attempts = getAttempts();
    var wanted = null;
    if (attemptIds) {
      wanted = {};
      attemptIds.forEach(function (id) { wanted[id] = true; });
    }
    var outAttempts = wanted
      ? attempts.filter(function (a) { return wanted[a.id]; })
      : attempts.slice();
    var fullResults = {};
    outAttempts.forEach(function (a) {
      var full = getFullResult(a.id);
      if (full) fullResults[a.id] = full;
    });
    return {
      format: 'istqb-attempts',
      version: 1,
      exportedAt: new Date().toISOString(),
      origin: detectOrigin(),
      attempts: outAttempts,
      fullResults: fullResults,
    };
  }

  function exportAttempt(id, results) {
    var summary = null;
    if (id !== undefined && id !== null) {
      var attempts = getAttempts();
      for (var i = 0; i < attempts.length; i++) {
        if (attempts[i].id === id) { summary = attempts[i]; break; }
      }
    }
    var full = (id !== undefined && id !== null) ? getFullResult(id) : null;

    /* Fallback: attempt not (or no longer) in storage but available in memory */
    if (!summary && results) summary = attemptFromResults(results);
    if (!full && results) {
      full = attemptFromResults(results);
      if (results.answers && results.answers.length) full.answers = results.answers;
      else if (results.details && results.details.length) full.details = results.details;
      else full = null;
    }
    if (!summary && !full) {
      if (typeof alert === 'function') alert('Attempt not found — nothing to export.');
      return false;
    }

    var payload = {
      format: 'istqb-attempts',
      version: 1,
      exportedAt: new Date().toISOString(),
      origin: detectOrigin(),
      attempts: summary ? [summary] : [],
      fullResults: {},
    };
    if (full) payload.fullResults[full.id] = full;
    var examId = (summary && summary.examId) || (full && full.examId) || 1;
    return downloadJSON(payload, 'istqb-exam' + examId + '-' + originTag() + '-' + fileStamp() + '.json');
  }

  function exportAllAttempts() {
    var payload = buildExportPayload(null);
    return downloadJSON(payload, 'istqb-attempts-all-' + originTag() + '-' + fileStamp() + '.json');
  }

  function utf8ToBase64(str) {
    if (typeof TextEncoder !== 'undefined') {
      var bytes = new TextEncoder().encode(str);
      var bin = '';
      var CHUNK = 0x8000;
      for (var i = 0; i < bytes.length; i += CHUNK) {
        bin += String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK));
      }
      return btoa(bin);
    }
    /* Fallback for very old engines */
    return btoa(unescape(encodeURIComponent(str)));
  }

  function downloadJSON(obj, filename) {
    var json;
    try {
      json = JSON.stringify(obj, null, 2);
    } catch (e) {
      return false;
    }
    /* Android WebView: native bridge writes the file via the system save dialog */
    if (typeof window !== 'undefined' && window.IstqbNative &&
        typeof window.IstqbNative.saveJsonFile === 'function') {
      try {
        window.IstqbNative.saveJsonFile(filename, utf8ToBase64(json));
        return true;
      } catch (e) {
        /* fall through to the browser download */
      }
    }
    /* Web: Blob + <a download> */
    try {
      var blob = new Blob([json], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 10000);
      return true;
    } catch (e) {
      return false;
    }
  }

  function sanitizeSummary(fa, fallbackOrigin) {
    var rec = {
      id: fa.id,
      date: typeof fa.date === 'string' ? fa.date : '',
      examId: typeof fa.examId === 'number' ? fa.examId : 1,
      score: typeof fa.score === 'number' ? fa.score : 0,
      total: typeof fa.total === 'number' ? fa.total : TOTAL_Q,
      percentage: typeof fa.percentage === 'number' ? fa.percentage : 0,
      passed: !!fa.passed,
      correctCount: typeof fa.correctCount === 'number' ? fa.correctCount : 0,
      incorrectCount: typeof fa.incorrectCount === 'number' ? fa.incorrectCount : 0,
      unansweredCount: typeof fa.unansweredCount === 'number' ? fa.unansweredCount : 0,
      timeSpent: typeof fa.timeSpent === 'string' ? fa.timeSpent : '—',
    };
    if (fa.chapterPerformance && typeof fa.chapterPerformance === 'object') {
      rec.chapterPerformance = fa.chapterPerformance;
    }
    if (fa.origin === 'android' || fa.origin === 'web') rec.origin = fa.origin;
    else if (fallbackOrigin === 'android' || fallbackOrigin === 'web') rec.origin = fallbackOrigin;
    else rec.origin = detectOrigin();
    return rec;
  }

  function normalizeFull(full, id) {
    var rec = {};
    ['id', 'date', 'examId', 'score', 'total', 'percentage', 'passed',
     'correctCount', 'incorrectCount', 'unansweredCount', 'timeSpent'
    ].forEach(function (k) {
      if (full[k] !== undefined) rec[k] = full[k];
    });
    rec.id = id;
    if (full.chapterPerformance && typeof full.chapterPerformance === 'object') {
      rec.chapterPerformance = full.chapterPerformance;
    }
    if (Array.isArray(full.answers) && full.answers.length) {
      rec.answers = full.answers;
    } else if (Array.isArray(full.details) && full.details.length) {
      rec.details = full.details;
    }
    return rec;
  }

  function normalizeImport(data) {
    if (Array.isArray(data)) data = { attempts: data };
    if (!data || typeof data !== 'object' || !Array.isArray(data.attempts)) {
      throw new Error('unrecognized file format — expected an ISTQB attempts export');
    }
    if (data.fullResults !== undefined &&
        (typeof data.fullResults !== 'object' || data.fullResults === null || Array.isArray(data.fullResults))) {
      throw new Error('invalid fullResults field');
    }
    return data;
  }

  /**
   * Incremental import. Rules:
   *  - id not present locally        -> added (marked imported: true)
   *  - id present and was imported   -> overwritten from the file
   *  - id present and taken locally  -> kept unchanged (never overwritten)
   *  - review data: written when the summary is added/updated; also added
   *    when missing (heal) — never replaces existing local review data.
   */
  function importParsed(raw) {
    var data = normalizeImport(raw);
    var report = { added: 0, updated: 0, kept: 0, invalid: 0, fullAdded: 0, fullUpdated: 0, fullFailed: 0, orphans: 0 };

    var attempts = getAttempts();
    var byId = {};
    attempts.forEach(function (a) { byId[a.id] = a; });

    var mode = {}; /* id -> 'add' | 'update' | 'keep' */

    data.attempts.forEach(function (fa) {
      if (!fa || typeof fa !== 'object' || typeof fa.id !== 'number' || !isFinite(fa.id)) {
        report.invalid++;
        return;
      }
      var local = byId[fa.id];
      if (local) {
        if (local.imported) {
          byId[fa.id] = sanitizeSummary(fa, data.origin);
          byId[fa.id].imported = true;
          mode[fa.id] = 'update';
          report.updated++;
        } else {
          mode[fa.id] = 'keep';
          report.kept++;
        }
      } else {
        var rec = sanitizeSummary(fa, data.origin);
        rec.imported = true;
        byId[fa.id] = rec;
        mode[fa.id] = 'add';
        report.added++;
      }
    });

    /* Review data (full records) */
    var fileFull = data.fullResults || {};
    Object.keys(fileFull).forEach(function (key) {
      var id = parseInt(key, 10);
      if (!isFinite(id)) return;
      var full = fileFull[key];
      if (!full || typeof full !== 'object') return;
      var m = mode[id];
      if (!m) {
        if (byId[id]) m = 'keep'; /* summary exists but was not in the file — only heal */
        else { report.orphans++; return; } /* review data without any summary — skip */
      }
      var exists = localStorage.getItem(FULL_KEY_PREFIX + id) !== null;
      try {
        if (m === 'keep') {
          if (!exists) {
            localStorage.setItem(FULL_KEY_PREFIX + id, JSON.stringify(normalizeFull(full, id)));
            report.fullAdded++;
          }
          /* exists -> leave the local review data untouched */
        } else {
          /* added or updated imported record — file wins */
          localStorage.setItem(FULL_KEY_PREFIX + id, JSON.stringify(normalizeFull(full, id)));
          if (exists) report.fullUpdated++;
          else report.fullAdded++;
        }
      } catch (e) {
        report.fullFailed++;
      }
    });

    /* Persist merged list sorted by id ascending (oldest first) */
    var merged = [];
    Object.keys(byId).forEach(function (k) { merged.push(byId[k]); });
    merged.sort(function (a, b) { return a.id - b.id; });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch (e) {
      report.storageError = true;
    }

    importReport = report;
    if (importReportTimer) clearTimeout(importReportTimer);
    importReportTimer = setTimeout(function () {
      importReport = null;
      renderStatsDashboard();
    }, 30000);
    return report;
  }

  function importFromFile(file) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        importParsed(JSON.parse(String(reader.result)));
        renderStatsDashboard();
      } catch (e) {
        if (typeof alert === 'function') {
          alert('Import failed: ' + (e && e.message ? e.message : e));
        }
      }
    };
    reader.onerror = function () {
      if (typeof alert === 'function') alert('Could not read the selected file.');
    };
    reader.readAsText(file);
  }

  function formatImportReport(r) {
    if (!r) return '';
    var parts = [];
    parts.push('Imported ' + r.added + ' new attempt' + (r.added === 1 ? '' : 's'));
    if (r.updated) parts.push(r.updated + ' updated');
    if (r.kept) parts.push(r.kept + ' kept (taken on this device)');
    var review = (r.fullAdded || 0) + (r.fullUpdated || 0);
    if (review) parts.push(review + ' review record' + (review === 1 ? '' : 's') + ' stored');
    if (r.invalid) parts.push(r.invalid + ' invalid entr' + (r.invalid === 1 ? 'y' : 'ies') + ' skipped');
    if (r.orphans) parts.push(r.orphans + ' orphan record' + (r.orphans === 1 ? '' : 's') + ' skipped');
    if (r.fullFailed) parts.push(r.fullFailed + ' review record(s) not stored (storage full)');
    if (r.storageError) parts.push('WARNING: attempt list could not be saved (storage full)');
    return parts.join(' · ');
  }

  function createSyncButtons() {
    var wrap = createEl('div', null, { style: 'display:flex;gap:var(--space-sm);flex-wrap:wrap;' });
    var exportBtn = createEl('button', ['btn', 'btn--secondary', 'btn--sm'], { text: '⤓ Export All JSON' });
    exportBtn.addEventListener('click', function () {
      exportAllAttempts();
    });
    wrap.appendChild(exportBtn);
    var importBtn = createEl('button', ['btn', 'btn--secondary', 'btn--sm'], { text: '⤒ Import JSON' });
    importBtn.addEventListener('click', function () {
      ensureQuestionBank(function () { pickImportFile(); });
    });
    wrap.appendChild(importBtn);
    return wrap;
  }

  function pickImportFile() {
    if (!hiddenFileInput) {
      hiddenFileInput = document.createElement('input');
      hiddenFileInput.type = 'file';
      hiddenFileInput.accept = '.json,application/json';
      hiddenFileInput.style.display = 'none';
      hiddenFileInput.addEventListener('change', function () {
        var f = hiddenFileInput.files && hiddenFileInput.files[0];
        hiddenFileInput.value = ''; /* allow selecting the same file again */
        if (f) importFromFile(f);
      });
      document.body.appendChild(hiddenFileInput);
    }
    hiddenFileInput.click();
  }

  function originIconEl(a) {
    var span = document.createElement('span');
    span.className = 'attempt-origin';
    if (a.origin === 'android') {
      span.textContent = '\uD83D\uDCF1'; /* 📱 */
      span.title = 'Origin: Android';
    } else if (a.origin === 'web') {
      span.textContent = '\uD83D\uDCBB'; /* 💻 */
      span.title = 'Origin: Web';
    } else {
      span.textContent = '❔';
      span.title = 'Origin: unknown';
    }
    return span;
  }

  /* =================================================================
     Statistics Computation
     ================================================================= */

  function getOverallStats() {
    var attempts = getAttempts();
    if (!attempts.length) {
      return {
        totalAttempts: 0,
        passRate: 0,
        averageScore: 0,
        bestScore: 0,
        worstScore: 0,
        recentAttempts: [],
        perChapter: {},
      };
    }

    var total = attempts.length;
    var passed = 0;
    var sumScore = 0;
    var best = 0;
    var worst = 100;

    attempts.forEach(function (a) {
      if (a.passed) passed++;
      sumScore += a.percentage || 0;
      if (a.percentage > best) best = a.percentage;
      if (a.percentage < worst) worst = a.percentage;
    });

    var recent = attempts.slice(-10).reverse();

    /* Per-chapter breakdown (from saved detail data) */
    var perChapter = {};
    var filteredAttempts = selectedExamFilter === 'all'
      ? attempts
      : attempts.filter(function (a) { return String(a.examId) === String(selectedExamFilter); });
    filteredAttempts.forEach(function (a) {
      if (a.chapterPerformance) {
        Object.keys(a.chapterPerformance).forEach(function (ch) {
          if (!perChapter[ch]) {
            perChapter[ch] = { correct: 0, total: 0 };
          }
          perChapter[ch].correct += a.chapterPerformance[ch].correct || 0;
          perChapter[ch].total += a.chapterPerformance[ch].total || 0;
        });
      }
    });

    return {
      totalAttempts: total,
      passRate: Math.round((passed / total) * 100),
      averageScore: Math.round(sumScore / total),
      bestScore: best,
      worstScore: worst,
      recentAttempts: recent,
      perChapter: perChapter,
    };
  }

  var CHAPTER_WEIGHTS = {
    'Chapter 1': 22.5,
    'Chapter 2': 17.5,
    'Chapter 3': 12.5,
    'Chapter 4': 25,
    'Chapter 5': 15,
    'Chapter 6': 7.5,
  };

  function renderChapterChart(chapterPerformance) {
    var chKeys = Object.keys(chapterPerformance || {});
    if (!chKeys.length) return null;

    var GRID_COLS = '70px 1fr 40px 36px 40px';

    var wrapper = createEl('div', null, {
      style: 'padding:0 var(--space-md);margin-bottom:var(--space-xl);',
    });
    wrapper.appendChild(createEl('h3', null, {
      text: 'Per-Chapter Performance',
      style: 'font-size:1.125rem;font-weight:700;color:var(--color-text);margin-bottom:var(--space-md);',
    }));

    /* Header row */
    var header = createEl('div', null, {
      style: 'display:grid;grid-template-columns:' + GRID_COLS + ';gap:6px;align-items:center;padding:6px 0;border-bottom:2px solid var(--color-border);',
    });
    header.appendChild(createEl('div', null, { text: 'Chapter', style: 'font-size:0.6875rem;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.04em;' }));
    header.appendChild(createEl('div', null, { text: '', style: '' }));
    header.appendChild(createEl('div', null, { text: 'Score', style: 'font-size:0.6875rem;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.04em;text-align:right;' }));
    header.appendChild(createEl('div', null, { text: 'Pct', style: 'font-size:0.6875rem;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.04em;text-align:right;' }));
    header.appendChild(createEl('div', null, { text: 'Wt', style: 'font-size:0.6875rem;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.04em;text-align:right;' }));
    wrapper.appendChild(header);

    /* Data rows */
    var chart = createEl('div', null, {
      style: 'display:flex;flex-direction:column;',
    });
    chKeys.forEach(function (ch) {
      var data = chapterPerformance[ch];
      var pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
      var weight = CHAPTER_WEIGHTS[ch] || 0;
      var row = createEl('div', null, {
        style: 'display:grid;grid-template-columns:' + GRID_COLS + ';gap:6px;align-items:center;padding:8px 0;border-bottom:1px solid var(--color-border-light);',
      });
      row.appendChild(createEl('div', null, {
        text: ch, style: 'font-size:0.8125rem;font-weight:600;color:var(--color-text);white-space:nowrap;',
      }));
      var barOuter = createEl('div', null, {
        style: 'height:32px;background-color:var(--color-bg-alt);border-radius:var(--radius-md);overflow:hidden;',
      });
      barOuter.appendChild(createEl('div', null, {
        style: 'height:100%;width:' + pct + '%;background:linear-gradient(90deg,var(--color-primary),var(--color-accent));border-radius:var(--radius-md);transition:width 0.6s ease;',
      }));
      row.appendChild(barOuter);
      row.appendChild(createEl('div', null, {
        text: data.correct + '/' + data.total, style: 'font-size:0.75rem;font-weight:600;color:var(--color-text);text-align:right;',
      }));
      row.appendChild(createEl('div', null, {
        text: pct + '%', style: 'font-size:0.75rem;font-weight:700;color:' + (pct >= 60 ? 'var(--color-success)' : 'var(--color-danger)') + ';text-align:right;',
      }));
      row.appendChild(createEl('div', null, {
        text: weight > 0 ? weight + '%' : '\u2014', style: 'font-size:0.75rem;color:var(--color-text-muted);font-style:italic;text-align:right;',
      }));
      chart.appendChild(row);
    });
    wrapper.appendChild(chart);
    return wrapper;
  }

  /* =================================================================
     Review Saved Attempt
     ================================================================= */

  /* The question bank (1.3MB) is lazy-loaded on pages that do not
     include it (landing): dashboard paint needs no questions, only
     review/import flows do. No-op when already present. */
  function ensureQuestionBank(cb) {
    cb = cb || function () {};
    try {
      if (typeof window !== 'undefined' && window.questionSets) { cb(); return; }
    } catch (e) { cb(); return; }
    try {
      if (typeof document === 'undefined' || !document.createElement) { cb(); return; }
      var s = document.createElement('script');
      s.src = 'js/questions.js';
      var done = false;
      s.onload = s.onreadystatechange = function () {
        if (done) return;
        var rs = s.readyState;
        if (!rs || rs === 'loaded' || rs === 'complete') { done = true; cb(); }
      };
      s.onerror = function () { if (!done) { done = true; cb(); } };
      (document.head || document.getElementsByTagName('head')[0] || document.body).appendChild(s);
    } catch (e) { cb(); }
  }

  function reviewAttempt(id) {
    ensureQuestionBank(function () { reviewAttemptReady(id); });
  }

  function reviewAttemptReady(id) {
    keepScreenAwake();
    window.__inReviewMode = true;
    var appEl = document.getElementById('app');
    if (!appEl) {
      appEl = document.getElementById('stats-dashboard');
      if (!appEl) return;
    }
    var dashboard = document.getElementById('stats-dashboard');
    var full = getFullResult(id);

    if (dashboard && appEl.id !== 'stats-dashboard') dashboard.style.display = 'none';
    while (appEl.firstChild) { appEl.removeChild(appEl.firstChild); }

    /* Rebuild per-question details from compact answers when needed
       (attempts saved after the compact-answer change, or imported) */
    if (full && !full.details && full.answers && typeof ExamGrading !== 'undefined' && ExamGrading.rebuildDetails) {
      var rebuilt = ExamGrading.rebuildDetails(full.answers);
      if (rebuilt) full.details = rebuilt;
    }

    if (full && full.details && typeof ExamGrading !== 'undefined') {
      full.chapterPerformance = full.chapterPerformance || {};
      var resultsEl = ExamGrading.generateResultsHTML(full);
      appEl.appendChild(resultsEl);
      var chartEl = renderChapterChart(full.chapterPerformance);
      if (chartEl) appEl.appendChild(chartEl);
    } else {
      var attempts = getAttempts();
      var entry = null;
      for (var i = 0; i < attempts.length; i++) {
        if (attempts[i].id === id) { entry = attempts[i]; break; }
      }
      var container = createEl('div', 'results');
      var card = createEl('div', 'results__card');
      card.appendChild(createEl('h2', 'results__score-label', { text: 'Attempt Review' }));
      if (entry) {
        var iconClass = entry.passed ? 'results__icon--pass' : 'results__icon--fail';
        var icon = createEl('div', ['results__icon', iconClass], { text: entry.passed ? '\u2713' : '\u2717' });
        card.appendChild(icon);
        var scoreEl = createEl('div', 'results__score', { text: entry.score + '/' + entry.total });
        card.appendChild(scoreEl);
        var pctEl = createEl('div', 'results__percentage', { text: entry.percentage + '%' });
        card.appendChild(pctEl);
        var verdictEl = createEl('div', 'results__verdict', { text: entry.passed ? 'PASS' : 'FAIL' });
        card.appendChild(verdictEl);
        var breakdown = createEl('div', 'results__breakdown');
        [['Correct', entry.correctCount, 'var(--color-success)'],
         ['Incorrect', entry.incorrectCount, 'var(--color-danger)'],
         ['Unanswered', entry.unansweredCount, 'var(--color-text-muted)'],
         ['Time', entry.timeSpent, '']].forEach(function (s) {
          var stat = createEl('div', 'results__stat');
          var val = createEl('div', 'results__stat-value', { text: String(s[1]) });
          if (s[2]) val.style.color = s[2];
          stat.appendChild(val);
          stat.appendChild(createEl('div', 'results__stat-label', { text: s[0] }));
          breakdown.appendChild(stat);
        });
        card.appendChild(breakdown);
        card.appendChild(createEl('p', null, {
          text: 'Detailed per-question review is not available for attempts created before this feature was added. Take a new exam to enable full review.',
          style: 'font-size:0.8125rem;color:var(--color-text-muted);margin-top:var(--space-lg);text-align:center;',
        }));
      } else {
        card.appendChild(createEl('p', null, { text: 'Attempt data not found.' }));
      }
      container.appendChild(card);
      appEl.appendChild(container);
      if (entry && entry.chapterPerformance) {
        var fallbackChart = renderChapterChart(entry.chapterPerformance);
        if (fallbackChart) appEl.appendChild(fallbackChart);
      }
    }
  }

  /* =================================================================
     Render Dashboard
     ================================================================= */

  function renderStatsDashboard() {
    window.__inReviewMode = false;
    var container = document.getElementById('stats-dashboard');
    if (!container) return;
    clearContainer(container);

    var stats = getOverallStats();

    if (stats.totalAttempts === 0) {
      container.appendChild(createEl('p', null, {
        text: 'No exam attempts yet. Start an exam to see your statistics here.',
        style: 'text-align:center;color:var(--color-text-muted);padding:var(--space-xl) 0;',
      }));
      var emptyRow = createEl('div', null, { style: 'display:flex;justify-content:center;gap:var(--space-sm);flex-wrap:wrap;padding-bottom:var(--space-lg);' });
      emptyRow.appendChild(createSyncButtons());
      container.appendChild(emptyRow);
      if (importReport) {
        container.appendChild(createEl('div', 'sync-status', { text: formatImportReport(importReport) }));
      }
      return;
    }

    /* ---- Summary Cards ---- */
    var summaryGrid = createEl('div', null, {
      style: 'display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:var(--space-md);margin-bottom:var(--space-xl);',
    });

    var cards = [
      { label: 'Attempts', value: String(stats.totalAttempts) },
      { label: 'Pass Rate', value: stats.passRate + '%' },
      { label: 'Avg Score', value: stats.averageScore + '%' },
      { label: 'Best Score', value: stats.bestScore + '%' },
    ];
    cards.forEach(function (c) {
      var card = createEl('div', 'feature-card', { style: 'padding:var(--space-lg);text-align:center;' });
      var val = createEl('div', null, {
        text: c.value,
        style: 'font-size:1.75rem;font-weight:800;color:var(--color-text);line-height:1.2;',
      });
      card.appendChild(val);
      card.appendChild(createEl('div', null, {
        text: c.label,
        style: 'font-size:0.8125rem;color:var(--color-text-muted);margin-top:var(--space-xs);',
      }));
      summaryGrid.appendChild(card);
    });
    container.appendChild(summaryGrid);

    /* ---- Recent Attempts Table (paginated 5 per page) ---- */
    var attemptsHeader = createEl('div', null, {
      style: 'display:flex;align-items:center;justify-content:space-between;gap:var(--space-md);margin-bottom:var(--space-md);flex-wrap:wrap;',
    });
    var tableTitle = createEl('h3', null, {
      text: 'Recent Attempts',
      style: 'font-size:1.125rem;font-weight:700;color:var(--color-text);margin:0;',
    });
    attemptsHeader.appendChild(tableTitle);
    attemptsHeader.appendChild(createSyncButtons());
    container.appendChild(attemptsHeader);

    if (importReport) {
      container.appendChild(createEl('div', 'sync-status', { text: formatImportReport(importReport) }));
    }

    /* Build filtered list from all attempts (newest first) */
    var allForTable = getAttempts().slice().reverse();
    var filteredList = selectedExamFilter === 'all'
      ? allForTable
      : allForTable.filter(function (a) { return String(a.examId) === String(selectedExamFilter); });

    if (recentSort.key) {
      var sortKey = recentSort.key;
      var sortDir = recentSort.dir;
      filteredList = filteredList.slice().sort(function (x, y) {
        var vx = attemptSortValue(x, sortKey);
        var vy = attemptSortValue(y, sortKey);
        var cmp = vx < vy ? -1 : (vx > vy ? 1 : 0);
        return sortDir === 'desc' ? -cmp : cmp;
      });
    }

    var totalItems = filteredList.length;
    var totalPages = Math.ceil(totalItems / PAGE_SIZE) || 1;
    if (recentCurrentPage > totalPages) recentCurrentPage = totalPages;
    if (recentCurrentPage < 1) recentCurrentPage = 1;

    var startIdx = (recentCurrentPage - 1) * PAGE_SIZE;
    var paginatedList = filteredList.slice(startIdx, startIdx + PAGE_SIZE);

    var tableWrap = createEl('div', null, { style: 'overflow-x:auto;margin-bottom:var(--space-sm);' });
    var table = createEl('table', null, {
      style: 'width:100%;border-collapse:collapse;font-size:0.875rem;',
    });

    /* Header */
    var thead = document.createElement('thead');
    var hRow = document.createElement('tr');
    var sortableKeys = ['date', 'exam', 'score', 'percentage', 'result', 'time', null];
    ['Date', 'Exam', 'Score', 'Percentage', 'Result', 'Time', ''].forEach(function (h, hi) {
      var th = document.createElement('th');
      var key = sortableKeys[hi];
      th.style.cssText = 'text-align:left;padding:var(--space-sm) var(--space-md);border-bottom:2px solid var(--color-border);color:var(--color-text-muted);font-weight:700;text-transform:uppercase;font-size:0.75rem;letter-spacing:0.04em;';
      if (!key) {
        th.textContent = h;
        hRow.appendChild(th);
        return;
      }
      var isActive = recentSort.key === key;
      if (isActive) th.style.color = 'var(--color-primary)';
      th.style.cursor = 'pointer';
      th.setAttribute('role', 'button');
      th.setAttribute('aria-label', 'Sort by ' + h);
      th.setAttribute('title', 'Sort: 1st tap A-Z, 2nd tap Z-A, 3rd tap default (by date)');
      th.appendChild(document.createTextNode(h));
      var icon = document.createElement('span');
      icon.className = 'sort-icon';
      icon.textContent = isActive ? (recentSort.dir === 'asc' ? ' \u21C5 A-Z' : ' \u21C5 Z-A') : ' \u21C5';
      icon.style.cssText = 'margin-left:6px;font-size:0.6875rem;letter-spacing:0;text-transform:none;';
      th.appendChild(icon);
      th.addEventListener('click', function () {
        if (recentSort.key !== key) {
          recentSort.key = key;
          recentSort.dir = 'asc';
        } else if (recentSort.dir === 'asc') {
          recentSort.dir = 'desc';
        } else {
          recentSort.key = null;
          recentSort.dir = null;
        }
        recentCurrentPage = 1;
        renderStatsDashboard();
      });
      hRow.appendChild(th);
    });
    thead.appendChild(hRow);
    table.appendChild(thead);

    /* Body */
    var tbody = document.createElement('tbody');
    paginatedList.forEach(function (a) {
      var row = document.createElement('tr');
      var cells = [
        a.date,
        'Exam ' + (a.examId || 1),
        a.score + '/' + a.total,
        a.percentage + '%',
        a.passed ? 'PASS' : 'FAIL',
        a.timeSpent,
      ];
      cells.forEach(function (c, ci) {
        var td = document.createElement('td');
        td.textContent = c;
        td.style.cssText = 'padding:var(--space-sm) var(--space-md);border-bottom:1px solid var(--color-border);color:var(--color-text-secondary);';
        if (ci === 0) td.appendChild(originIconEl(a));
        if (ci === 4) {
          td.style.fontWeight = '700';
          td.style.color = a.passed ? 'var(--color-success)' : 'var(--color-danger)';
        }
        row.appendChild(td);
      });

      /* Action buttons */
      var actionTd = document.createElement('td');
      actionTd.style.cssText = 'padding:var(--space-sm) var(--space-md);border-bottom:1px solid var(--color-border);white-space:nowrap;';
      var reviewBtn = createEl('button', ['btn', 'btn--ghost', 'btn--sm'], { text: 'Review' });
      reviewBtn.style.marginRight = 'var(--space-xs)';
      reviewBtn.addEventListener('click', (function (id) {
        return function () { window.location.href = 'review.html?id=' + id; };
      })(a.id));
      actionTd.appendChild(reviewBtn);
      var delBtn = createEl('button', ['btn', 'btn--danger', 'btn--sm'], { text: 'Delete' });
      delBtn.addEventListener('click', (function (id) {
        return function () {
          if (confirm('Delete this attempt? This cannot be undone.')) {
            deleteAttempt(id);
            /* clamp page after deletion */
            var remaining = getAttempts().filter(function (x) {
              return selectedExamFilter === 'all' ? true : String(x.examId) === String(selectedExamFilter);
            }).length - 1;
            var newTotalPages = Math.ceil(remaining / PAGE_SIZE) || 1;
            if (recentCurrentPage > newTotalPages) recentCurrentPage = newTotalPages;
            renderStatsDashboard();
          }
        };
      })(a.id));
      actionTd.appendChild(delBtn);
      row.appendChild(actionTd);

      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    tableWrap.appendChild(table);
    container.appendChild(tableWrap);

    /* Pagination controls (only when > 1 page) */
    if (totalItems > PAGE_SIZE) {
      var paginationWrap = createEl('div', null, {
        style: 'display:flex;align-items:center;justify-content:center;gap:var(--space-md);margin-bottom:var(--space-xl);flex-wrap:wrap;',
      });

      var prevBtn = createEl('button', ['btn', 'btn--secondary', 'btn--sm'], { text: '\u2039' });
      prevBtn.setAttribute('aria-label', 'Previous page');
      prevBtn.disabled = recentCurrentPage <= 1;
      prevBtn.addEventListener('click', function () {
        if (recentCurrentPage > 1) {
          recentCurrentPage--;
          renderStatsDashboard();
        }
      });
      paginationWrap.appendChild(prevBtn);

      var pageInfo = createEl('span', null, {
        style: 'font-size:0.875rem;font-weight:700;color:var(--color-text);min-width:80px;text-align:center;',
      });
      /* Formato: < 1/2 > — nº de páginas (lista é sempre 5) */
      pageInfo.textContent = recentCurrentPage + '/' + totalPages;
      pageInfo.setAttribute('aria-live', 'polite');
      pageInfo.title = 'Página ' + recentCurrentPage + ' de ' + totalPages + ' · ' + totalItems + ' exames no total';
      paginationWrap.appendChild(pageInfo);

      var nextBtn = createEl('button', ['btn', 'btn--secondary', 'btn--sm'], { text: '\u203A' });
      nextBtn.setAttribute('aria-label', 'Next page');
      nextBtn.disabled = recentCurrentPage >= totalPages;
      nextBtn.addEventListener('click', function () {
        if (recentCurrentPage < totalPages) {
          recentCurrentPage++;
          renderStatsDashboard();
        }
      });
      paginationWrap.appendChild(nextBtn);

      container.appendChild(paginationWrap);
    } else {
      /* keep spacing consistent when no pagination */
      var spacer = createEl('div', null, { style: 'margin-bottom:var(--space-xl);' });
      container.appendChild(spacer);
    }

    /* ---- Per-Chapter Bar Chart with Exam Filter ---- */
    var allAttempts = getAttempts();
    var examIds = [];
    allAttempts.forEach(function (a) {
      if (a.examId && examIds.indexOf(a.examId) === -1) examIds.push(a.examId);
    });
    examIds.sort(function (a, b) { return a - b; });

    if (examIds.length > 0) {
      var filterWrap = createEl('div', null, {
        style: 'padding:0 var(--space-lg);margin-bottom:var(--space-md);display:flex;align-items:center;gap:var(--space-sm);',
      });
      filterWrap.appendChild(createEl('label', null, {
        text: 'Filter by exam:',
        style: 'font-size:0.8125rem;font-weight:600;color:var(--color-text-muted);',
      }));
      var select = createEl('select', null, {
        style: 'padding:var(--space-xs) var(--space-sm);border:1px solid var(--color-border);border-radius:var(--radius-md);font-size:0.8125rem;background:var(--color-bg);color:var(--color-text);',
      });
      var optAll = createEl('option', null, { text: 'All Exams (aggregated)', value: 'all' });
      if (selectedExamFilter === 'all') optAll.setAttribute('selected', 'selected');
      select.appendChild(optAll);
      examIds.forEach(function (eid) {
        var count = allAttempts.filter(function (a) { return String(a.examId) === String(eid); }).length;
        var label = 'Exam ' + eid + (count > 1 ? ' (' + count + ' attempts)' : '');
        var opt = createEl('option', null, { text: label, value: String(eid) });
        if (String(selectedExamFilter) === String(eid)) opt.setAttribute('selected', 'selected');
        select.appendChild(opt);
      });
      select.addEventListener('change', function () {
        selectedExamFilter = this.value;
        recentCurrentPage = 1;
        renderStatsDashboard();
      });
      filterWrap.appendChild(select);
      container.appendChild(filterWrap);
    }

    /* Render per-chapter chart */
    if (selectedExamFilter === 'all') {
      /* Aggregated view: all exams combined */
      var dashboardChart = renderChapterChart(stats.perChapter);
      if (dashboardChart) container.appendChild(dashboardChart);
    } else {
      /* Single exam view: each attempt shown separately with date/time */
      var examAttempts = allAttempts.filter(function (a) {
        return String(a.examId) === String(selectedExamFilter);
      }).slice().reverse();

      if (examAttempts.length > 0) {
        var wrapper = createEl('div', null, {
          style: 'padding:0 var(--space-lg);margin-bottom:var(--space-xl);',
        });
        wrapper.appendChild(createEl('h3', null, {
          text: 'Per-Chapter Performance \u2014 Exam ' + selectedExamFilter,
          style: 'font-size:1.125rem;font-weight:700;color:var(--color-text);margin-bottom:var(--space-md);',
        }));

        examAttempts.forEach(function (attempt) {
          var cp = attempt.chapterPerformance;
          if (!cp || !Object.keys(cp).length) return;

          /* Attempt header with date and score */
          var attemptHeader = createEl('div', null, {
            style: 'display:flex;align-items:center;gap:var(--space-sm);margin-bottom:var(--space-sm);margin-top:var(--space-md);padding:var(--space-xs) var(--space-sm);background:var(--color-bg-alt);border-radius:var(--radius-md);',
          });
          attemptHeader.appendChild(createEl('span', null, {
            text: attempt.date || 'unknown date',
            style: 'font-size:0.8125rem;font-weight:600;color:var(--color-text-secondary);',
          }));
          attemptHeader.appendChild(createEl('span', null, {
            text: '\u2014',
            style: 'color:var(--color-text-muted);',
          }));
          attemptHeader.appendChild(createEl('span', null, {
            text: attempt.score + '/' + attempt.total + ' (' + attempt.percentage + '%)',
            style: 'font-size:0.8125rem;font-weight:700;color:' + (attempt.passed ? 'var(--color-success)' : 'var(--color-danger)') + ';',
          }));
          wrapper.appendChild(attemptHeader);

          /* Chapter bars for this attempt */
          var chKeys = Object.keys(cp);
          var GRID_COLS = '70px 1fr 40px 36px 40px';

          /* Header row */
          var attHeader = createEl('div', null, {
            style: 'display:grid;grid-template-columns:' + GRID_COLS + ';gap:6px;align-items:center;padding:4px 0 var(--space-xs) var(--space-sm);border-bottom:1px solid var(--color-border);',
          });
          attHeader.appendChild(createEl('div', null, { text: 'Chapter', style: 'font-size:0.625rem;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.04em;' }));
          attHeader.appendChild(createEl('div', null, { text: '', style: '' }));
          attHeader.appendChild(createEl('div', null, { text: 'Score', style: 'font-size:0.625rem;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.04em;text-align:right;' }));
          attHeader.appendChild(createEl('div', null, { text: 'Pct', style: 'font-size:0.625rem;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.04em;text-align:right;' }));
          attHeader.appendChild(createEl('div', null, { text: 'Wt', style: 'font-size:0.625rem;font-weight:700;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.04em;text-align:right;' }));
          wrapper.appendChild(attHeader);

          chKeys.forEach(function (ch) {
            var data = cp[ch];
            var pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            var weight = CHAPTER_WEIGHTS[ch] || 0;
            var row = createEl('div', null, {
              style: 'display:grid;grid-template-columns:' + GRID_COLS + ';gap:6px;align-items:center;padding:6px 0 6px var(--space-sm);border-bottom:1px solid var(--color-border-light);',
            });
            row.appendChild(createEl('div', null, {
              text: ch, style: 'font-size:0.75rem;font-weight:600;color:var(--color-text);white-space:nowrap;',
            }));
            var barOuter = createEl('div', null, {
              style: 'height:26px;background-color:var(--color-bg-alt);border-radius:var(--radius-md);overflow:hidden;',
            });
            barOuter.appendChild(createEl('div', null, {
              style: 'height:100%;width:' + pct + '%;background:linear-gradient(90deg,var(--color-primary),var(--color-accent));border-radius:var(--radius-md);transition:width 0.6s ease;',
            }));
            row.appendChild(barOuter);
            row.appendChild(createEl('div', null, {
              text: data.correct + '/' + data.total, style: 'font-size:0.6875rem;font-weight:600;color:var(--color-text);text-align:right;',
            }));
            row.appendChild(createEl('div', null, {
              text: pct + '%', style: 'font-size:0.6875rem;font-weight:700;color:' + (pct >= 60 ? 'var(--color-success)' : 'var(--color-danger)') + ';text-align:right;',
            }));
            row.appendChild(createEl('div', null, {
              text: weight > 0 ? weight + '%' : '\u2014', style: 'font-size:0.6875rem;color:var(--color-text-muted);font-style:italic;text-align:right;',
            }));
            wrapper.appendChild(row);
          });
        });

        container.appendChild(wrapper);
      }
    }

    /* ---- Clear History Button ---- */
    var clearGroup = createEl('div', null, { style: 'text-align:center;padding:var(--space-md) 0;' });
    var clearBtn = createEl('button', ['btn', 'btn--danger', 'btn--sm'], { text: 'Clear All History' });
    clearBtn.addEventListener('click', function () {
      if (confirm('Are you sure you want to clear all exam history? This cannot be undone.')) {
        clearHistory();
        recentCurrentPage = 1;
        renderStatsDashboard();
      }
    });
    clearGroup.appendChild(clearBtn);
    container.appendChild(clearGroup);
  }

  /* =================================================================
     Utility: clear container
     ================================================================= */

  function clearContainer(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  /* =================================================================
     Auto-render on page load if dashboard exists
     ================================================================= */

  function autoRender() {
    var el = document.getElementById('stats-dashboard');
    if (el) {
      renderStatsDashboard();
      try {
        if (window.location && window.location.search && window.location.search.indexOf('goto=attempts') !== -1) {
          var target = document.getElementById('stats-dashboard');
          if (target && target.scrollIntoView) {
            target.scrollIntoView();
            window.scrollBy(0, -70);
          }
        }
      } catch (e) { /* ignore */ }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoRender);
  } else {
    autoRender();
  }

  /* =================================================================
     Public API
     ================================================================= */

  return {
    saveAttempt: saveAttempt,
    getAttempts: getAttempts,
    getOverallStats: getOverallStats,
    renderStatsDashboard: renderStatsDashboard,
    deleteAttempt: deleteAttempt,
    clearHistory: clearHistory,
    reviewAttempt: reviewAttempt,
    ensureQuestionBank: ensureQuestionBank,
    getFullResult: getFullResult,
    exportAttempt: exportAttempt,
    exportAllAttempts: exportAllAttempts,
    buildExportPayload: buildExportPayload,
    importParsed: importParsed,
    importFromFile: importFromFile,
    detectOrigin: detectOrigin,
    keepScreenAwake: keepScreenAwake,
    attemptSortValue: attemptSortValue,
  };
})();
