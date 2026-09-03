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
  var MAX_FULL_RESULTS = 5;
  var TOTAL_Q = 40;

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
     localStorage Persistence
     ================================================================= */

  function getAttempts() {
    try {
      var data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
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
    };
    attempts.push(entry);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
    } catch (e) {
      /* localStorage full or unavailable — silently ignore */
    }

    /* Save full result (with details) for review */
    if (result.details && result.details.length) {
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
          details: result.details,
        };
        localStorage.setItem(fullKey, JSON.stringify(fullData));

        /* Clean up old full results beyond MAX_FULL_RESULTS */
        var allIds = attempts.map(function (a) { return a.id; }).sort(function (a, b) { return b - a; });
        allIds.slice(MAX_FULL_RESULTS).forEach(function (oldId) {
          try { localStorage.removeItem(FULL_KEY_PREFIX + oldId); } catch (e) { /* ignore */ }
        });
      } catch (e) {
        /* ignore */
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
    attempts.forEach(function (a) {
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

  /* =================================================================
     Review Saved Attempt
     ================================================================= */

  function reviewAttempt(id) {
    var appEl = document.getElementById('app');
    if (!appEl) {
      appEl = document.getElementById('stats-dashboard');
      if (!appEl) return;
    }
    var dashboard = document.getElementById('stats-dashboard');
    var full = getFullResult(id);

    if (dashboard && appEl.id !== 'stats-dashboard') dashboard.style.display = 'none';
    while (appEl.firstChild) { appEl.removeChild(appEl.firstChild); }

    var backBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u2190 Back to Dashboard' });
    backBtn.addEventListener('click', function () {
      if (dashboard) dashboard.style.display = '';
      while (appEl.firstChild) { appEl.removeChild(appEl.firstChild); }
      if (dashboard) renderStatsDashboard();
    });

    if (full && typeof ExamGrading !== 'undefined') {
      full.chapterPerformance = full.chapterPerformance || {};
      var resultsEl = ExamGrading.generateResultsHTML(full);
      appEl.appendChild(resultsEl);
      var filterBar = appEl.querySelector('.results-filter');
      if (filterBar) filterBar.appendChild(backBtn);
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
      appEl.appendChild(backBtn);
    }
  }

  /* =================================================================
     Render Dashboard
     ================================================================= */

  function renderStatsDashboard() {
    var container = document.getElementById('stats-dashboard');
    if (!container) return;
    clearContainer(container);

    var stats = getOverallStats();

    if (stats.totalAttempts === 0) {
      container.appendChild(createEl('p', null, {
        text: 'No exam attempts yet. Start an exam to see your statistics here.',
        style: 'text-align:center;color:var(--color-text-muted);padding:var(--space-xl) 0;',
      }));
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

    /* ---- Recent Attempts Table ---- */
    var tableTitle = createEl('h3', null, {
      text: 'Recent Attempts',
      style: 'font-size:1.125rem;font-weight:700;color:var(--color-text);margin-bottom:var(--space-md);',
    });
    container.appendChild(tableTitle);

    var tableWrap = createEl('div', null, { style: 'overflow-x:auto;margin-bottom:var(--space-xl);' });
    var table = createEl('table', null, {
      style: 'width:100%;border-collapse:collapse;font-size:0.875rem;',
    });

    /* Header */
    var thead = document.createElement('thead');
    var hRow = document.createElement('tr');
    ['Date', 'Exam', 'Score', 'Percentage', 'Result', 'Time', ''].forEach(function (h) {
      var th = document.createElement('th');
      th.textContent = h;
      th.style.cssText = 'text-align:left;padding:var(--space-sm) var(--space-md);border-bottom:2px solid var(--color-border);color:var(--color-text-muted);font-weight:700;text-transform:uppercase;font-size:0.75rem;letter-spacing:0.04em;';
      hRow.appendChild(th);
    });
    thead.appendChild(hRow);
    table.appendChild(thead);

    /* Body */
    var tbody = document.createElement('tbody');
    stats.recentAttempts.forEach(function (a) {
      var row = document.createElement('tr');
      var cells = [
        a.date,
        'Exam ' + (a.examId || 1),
        a.score + '/' + a.total,
        a.percentage + '%',
        a.passed ? 'PASS' : 'FAIL',
        a.timeSpent || '—',
      ];
      cells.forEach(function (c, ci) {
        var td = document.createElement('td');
        td.textContent = c;
        td.style.cssText = 'padding:var(--space-sm) var(--space-md);border-bottom:1px solid var(--color-border-light);color:var(--color-text-secondary);';
        if (ci === 4) {
          td.style.fontWeight = '700';
          td.style.color = a.passed ? 'var(--color-success)' : 'var(--color-danger)';
        }
        row.appendChild(td);
      });

      /* Action buttons */
      var actionTd = document.createElement('td');
      actionTd.style.cssText = 'padding:var(--space-sm) var(--space-md);border-bottom:1px solid var(--color-border-light);white-space:nowrap;';
      var reviewBtn = createEl('button', ['btn', 'btn--ghost', 'btn--sm'], { text: 'Review' });
      reviewBtn.style.marginRight = 'var(--space-xs)';
      reviewBtn.addEventListener('click', (function (id) {
        return function () { reviewAttempt(id); };
      })(a.id));
      actionTd.appendChild(reviewBtn);
      var delBtn = createEl('button', ['btn', 'btn--danger', 'btn--sm'], { text: 'Delete' });
      delBtn.addEventListener('click', (function (id) {
        return function () {
          showConfirmModal('Delete this attempt? This cannot be undone.', function () {
            deleteAttempt(id);
            renderStatsDashboard();
          });
        };
      })(a.id));
      actionTd.appendChild(delBtn);
      row.appendChild(actionTd);

      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    tableWrap.appendChild(table);
    container.appendChild(tableWrap);

    /* ---- Per-Chapter Bar Chart ---- */
    var chKeys = Object.keys(stats.perChapter);
    if (chKeys.length) {
      var chartTitle = createEl('h3', null, {
        text: 'Per-Chapter Performance',
        style: 'font-size:1.125rem;font-weight:700;color:var(--color-text);margin-bottom:var(--space-md);',
      });
      container.appendChild(chartTitle);

      var chartContainer = createEl('div', null, {
        style: 'display:flex;flex-direction:column;gap:var(--space-md);margin-bottom:var(--space-xl);',
      });

      chKeys.forEach(function (ch) {
        var data = stats.perChapter[ch];
        var pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

        var row = createEl('div', null, { style: 'display:flex;align-items:center;gap:var(--space-md);' });

        var label = createEl('div', null, {
          text: ch,
          style: 'width:100px;flex-shrink:0;font-size:0.8125rem;font-weight:600;color:var(--color-text);',
        });
        row.appendChild(label);

        var barOuter = createEl('div', null, {
          style: 'flex:1;height:24px;background-color:var(--color-bg-alt);border-radius:var(--radius-md);overflow:hidden;position:relative;',
        });
        var barFill = createEl('div', null, {
          style: 'height:100%;width:' + pct + '%;background:linear-gradient(90deg,var(--color-primary),var(--color-accent));border-radius:var(--radius-md);transition:width 0.6s ease;',
        });
        barOuter.appendChild(barFill);

        var pctLabel = createEl('div', null, {
          text: pct + '%',
          style: 'width:50px;flex-shrink:0;font-size:0.8125rem;font-weight:700;color:var(--color-text);text-align:right;',
        });

        row.appendChild(barOuter);
        row.appendChild(pctLabel);
        chartContainer.appendChild(row);
      });

      container.appendChild(chartContainer);
    }

    /* ---- Clear History Button ---- */
    var clearGroup = createEl('div', null, { style: 'text-align:center;padding:var(--space-md) 0;' });
    var clearBtn = createEl('button', ['btn', 'btn--danger', 'btn--sm'], { text: 'Clear All History' });
    clearBtn.addEventListener('click', function () {
      showConfirmModal('Are you sure you want to clear all exam history? This cannot be undone.', function () {
        clearHistory();
        renderStatsDashboard();
      });
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
    getFullResult: getFullResult,
  };
})();
