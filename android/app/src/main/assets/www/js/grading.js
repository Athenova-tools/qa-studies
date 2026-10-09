/**
 * ISTQB CTFL v4.0.1 Exam Simulator — Grading & Results Module
 * Computes scores and generates detailed results HTML.
 * All DOM output uses createElement; no innerHTML for untrusted content.
 */
const ExamGrading = (function () {
  'use strict';

  var PASS_THRESHOLD = 65;
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

  function escHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function formatTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  /* =================================================================
     Calculate Results
     ================================================================= */

  function calculateResults(answers, questions, flagged, notes) {
    var total = questions ? questions.length : TOTAL_Q;
    var correctCount = 0;
    var incorrectCount = 0;
    var unansweredCount = 0;
    var details = [];
    var compact = [];

    for (var i = 0; i < total; i++) {
      var q = questions[i];
      var selected = answers[i] !== undefined ? answers[i] : null;
      var isCorrect = selected !== null && selected === q.correctAnswer;

      if (isCorrect) correctCount++;
      else if (selected === null) unansweredCount++;
      else incorrectCount++;

      /* Compact answer record — enough to rebuild details from the question bank */
      var compactEntry = { i: i, qid: q.id || null, sel: selected };
      if (flagged && flagged.has(i)) compactEntry.f = true;
      var qNote = notes ? (notes[i] || '') : '';
      if (qNote) compactEntry.n = qNote;
      compact.push(compactEntry);

      details.push({
        index: i,
        question: q.statement,
        options: q.options,
        selectedAnswer: selected,
        correctAnswer: q.correctAnswer,
        isCorrect: isCorrect,
        flagged: flagged ? flagged.has(i) : false,
        note: notes ? (notes[i] || '') : '',
        explanation: q.explanation || '',
        whyWrong: q.whyWrong || '',
        correctFeedback: q.correctFeedback || '',
        incorrectFeedback: q.incorrectFeedback || {},
        optionExplanations: q.optionExplanations || {},
        chapter: q.chapter || '',
        section: q.section || '',
        subsection: q.subsection || '',
        learningObjective: q.learningObjective || '',
        kLevel: q.kLevel || '',
        keywords: q.keywords || '',
        examTip: q.examTip || '',
        memoryAid: q.memoryAid || '',
        timeSpent: 0,
      });
    }

    /* Estimate time spent — engine will override this after submission */
    var score = correctCount;
    var percentage = Math.round((score / total) * 100);
    var passed = percentage >= PASS_THRESHOLD;

    return {
      score: score,
      total: total,
      percentage: percentage,
      passed: passed,
      correctCount: correctCount,
      incorrectCount: incorrectCount,
      unansweredCount: unansweredCount,
      timeSpent: '—',
      details: details,
      answers: compact,
    };
  }

  /* =================================================================
     Rebuild details from compact answers (question bank lookup)
     Used when a stored/imported attempt has only `answers`.
     ================================================================= */

  var questionIndexCache = null;

  function getQuestionIndex() {
    if (questionIndexCache) return questionIndexCache;
    var idx = {};
    var sets = window.questionSets || {};
    Object.keys(sets).forEach(function (key) {
      (sets[key] || []).forEach(function (q) {
        if (q && q.id) idx[q.id] = q;
      });
    });
    questionIndexCache = idx;
    return idx;
  }

  function rebuildDetails(answers) {
    if (!answers || !answers.length) return null;
    var idx = getQuestionIndex();
    var details = [];
    for (var i = 0; i < answers.length; i++) {
      var a = answers[i];
      var q = a && a.qid ? idx[a.qid] : null;
      if (!q) return null;
      var sel = a.sel !== undefined ? a.sel : null;
      var isCorrect = sel !== null && sel === q.correctAnswer;
      details.push({
        index: typeof a.i === 'number' ? a.i : i,
        question: q.statement,
        options: q.options,
        selectedAnswer: sel,
        correctAnswer: q.correctAnswer,
        isCorrect: isCorrect,
        flagged: !!a.f,
        note: a.n || '',
        explanation: q.explanation || '',
        whyWrong: q.whyWrong || '',
        correctFeedback: q.correctFeedback || '',
        incorrectFeedback: q.incorrectFeedback || {},
        optionExplanations: q.optionExplanations || {},
        chapter: q.chapter || '',
        section: q.section || '',
        subsection: q.subsection || '',
        learningObjective: q.learningObjective || '',
        kLevel: q.kLevel || '',
        keywords: q.keywords || '',
        examTip: q.examTip || '',
        memoryAid: q.memoryAid || '',
        timeSpent: 0,
      });
    }
    return details;
  }

  /* =================================================================
     Study plan — subsections to review (ascending)
     ================================================================= */

  function compareSubsectionCodes(a, b) {
    var pa = a.split('.');
    var pb = b.split('.');
    var len = Math.max(pa.length, pb.length);
    for (var i = 0; i < len; i++) {
      var na = parseInt(pa[i], 10);
      var nb = parseInt(pb[i], 10);
      if (isNaN(na)) na = Number.MAX_SAFE_INTEGER;
      if (isNaN(nb)) nb = Number.MAX_SAFE_INTEGER;
      if (na !== nb) return na - nb;
      if ((pa[i] || '') !== (pb[i] || '')) return String(pa[i] || '').localeCompare(String(pb[i] || ''));
    }
    return 0;
  }

  function buildStudyPlan(results) {
    var details = (results && results.details) || [];
    var bySub = {};
    details.forEach(function (d) {
      if (!d || d.isCorrect) return;
      var key = d.subsection || '';
      if (!key) return;
      if (!bySub[key]) bySub[key] = { subsection: key, count: 0, objectives: [] };
      bySub[key].count++;
      var lo = d.learningObjective || '';
      if (lo && bySub[key].objectives.indexOf(lo) === -1) bySub[key].objectives.push(lo);
    });
    return Object.keys(bySub).sort(compareSubsectionCodes).map(function (k) {
      bySub[k].objectives.sort();
      return bySub[k];
    });
  }

  function openStudySlides(subsection) {
    var parts = String(subsection).split('.');
    var chapter = parseInt(parts[0], 10);
    if (!chapter || chapter < 1 || chapter > 6) chapter = 1;
    var section = parts.slice(0, 2).join('.');
    window.location.href = 'slides/chapter' + chapter + '.html?backTo=' +
      encodeURIComponent(window.location.href) + '#' + section;
  }

  /* =================================================================
     Generate Results HTML
     ================================================================= */

  function generateResultsHTML(results) {
    var container = createEl('div', 'results');

    /* ---- Summary Card (4x2 grid + verdict spanning 4 cols below) ---- */
    var card = createEl('div', 'results__card');

    var grid = createEl('div', 'results__grid');

    /* Row 1: Score | Percentage | Time */
    var scoreEl = createEl('div', ['results__grid-item', 'results__score']);
    var scoreVal = createEl('div', 'results__score-value', { text: results.score + '/' + results.total });
    var scoreLbl = createEl('div', 'results__score-label', { text: 'SCORE' });
    scoreEl.appendChild(scoreVal);
    scoreEl.appendChild(scoreLbl);
    grid.appendChild(scoreEl);

    var pctClass = results.passed ? 'results__percentage--pass' : 'results__percentage--fail';
    var pctEl = createEl('div', ['results__grid-item', 'results__percentage', pctClass]);
    var pctVal = createEl('div', 'results__percentage-value', { text: results.percentage + '%' });
    var pctLbl = createEl('div', 'results__percentage-label', { text: 'PERCENTAGE' });
    pctEl.appendChild(pctVal);
    pctEl.appendChild(pctLbl);
    grid.appendChild(pctEl);

    var timeEl = createEl('div', ['results__grid-item', 'results__time']);
    var timeVal = createEl('div', 'results__time-value', { text: results.timeSpent || '\u2014' });
    var timeLbl = createEl('div', 'results__time-label', { text: 'TIME' });
    timeEl.appendChild(timeVal);
    timeEl.appendChild(timeLbl);
    grid.appendChild(timeEl);

    /* Spacer for column 4 in row 1 */
    var spacer1 = createEl('div', 'results__grid-item results__grid-spacer');
    grid.appendChild(spacer1);

    /* Row 2: Incorrect | Correct | Unanswered | Spacer */
    var incorrectEl = createEl('div', ['results__grid-item', 'results__stat', 'results__stat--incorrect']);
    var incorrectVal = createEl('div', 'results__stat-value', { text: String(results.incorrectCount) });
    var incorrectLbl = createEl('div', 'results__stat-label', { text: 'INCORRECT' });
    incorrectEl.appendChild(incorrectVal);
    incorrectEl.appendChild(incorrectLbl);
    grid.appendChild(incorrectEl);

    var correctEl = createEl('div', ['results__grid-item', 'results__stat', 'results__stat--correct']);
    var correctVal = createEl('div', 'results__stat-value', { text: String(results.correctCount) });
    var correctLbl = createEl('div', 'results__stat-label', { text: 'CORRECT' });
    correctEl.appendChild(correctVal);
    correctEl.appendChild(correctLbl);
    grid.appendChild(correctEl);

    var unansweredEl = createEl('div', ['results__grid-item', 'results__stat', 'results__stat--unanswered']);
    var unansweredVal = createEl('div', 'results__stat-value', { text: String(results.unansweredCount) });
    var unansweredLbl = createEl('div', 'results__stat-label', { text: 'UNANSWERED' });
    unansweredEl.appendChild(unansweredVal);
    unansweredEl.appendChild(unansweredLbl);
    grid.appendChild(unansweredEl);

    /* Spacer for column 4 in row 2 */
    var spacer2 = createEl('div', 'results__grid-item results__grid-spacer');
    grid.appendChild(spacer2);

    /* ---- Verdict: full width spanning all 3 columns ---- */
    var verdictClass = results.passed ? 'results__verdict--pass' : 'results__verdict--fail';
    var verdictText = results.passed ? 'SUCCESS' : 'FAIL';
    var verdictEl = createEl('div', ['results__verdict', verdictClass], { text: verdictText });
    grid.appendChild(verdictEl);

    card.appendChild(grid);

    /* ---- Question Review List ---- */
    var list = createEl('div', 'results-list');
    var listTitle = createEl('div', 'results-list__title', { text: 'Question Review' });
    list.appendChild(listTitle);
    list.appendChild(card);

    /* ---- Subsections to Study (resumo do que rever) ---- */
    var studyPlan = buildStudyPlan(results);
    if (studyPlan.length) {
      var planCard = createEl('div', 'study-plan');
      planCard.appendChild(createEl('div', 'study-plan__title', { text: 'Subsections to Study' }));
      planCard.appendChild(createEl('div', 'study-plan__subtitle', {
        text: 'Review these syllabus areas in ascending order, based on your incorrect and unanswered questions.',
      }));
      var planGrid = createEl('div', 'study-plan__grid');
      studyPlan.forEach(function (item) {
        var row = createEl('div', 'study-plan__item');
        row.setAttribute('role', 'button');
        row.setAttribute('tabindex', '0');
        var top = createEl('div', 'study-plan__top');
        top.appendChild(createEl('span', 'study-plan__code', { text: item.subsection }));
        top.appendChild(createEl('span', 'study-plan__count', {
          text: item.count + (item.count === 1 ? ' question' : ' questions'),
        }));
        top.appendChild(createEl('span', 'study-plan__go', { text: '→' }));
        row.appendChild(top);
        if (item.objectives.length) {
          row.appendChild(createEl('div', 'study-plan__los', {
            text: 'Objectives: ' + item.objectives.join(', '),
          }));
        }
        row.addEventListener('click', function () { openStudySlides(item.subsection); });
        row.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openStudySlides(item.subsection); }
        });
        planGrid.appendChild(row);
      });
      planCard.appendChild(planGrid);
      list.appendChild(planCard);
    }

    /* ---- Question Review filter bar ---- */
    var filterBar = createEl('div', 'results-filter');

    /* Row 1: Filters dropdown + Collapse All on right */
    var filterRow = createEl('div', 'results-filter__row');
    filterRow.appendChild(createEl('span', 'results-filter__label', { text: 'Filters:' }));
    var filterSelect = createEl('select', 'results-filter__select');
    [
      { label: 'All', value: 'all' },
      { label: 'Correct', value: 'correct' },
      { label: 'Incorrect', value: 'incorrect' },
      { label: 'Unanswered', value: 'unanswered' },
      { label: 'Flagged', value: 'flagged' },
    ].forEach(function (f) {
      var opt = createEl('option', null, { text: f.label, value: f.value });
      filterSelect.appendChild(opt);
    });
    filterSelect.addEventListener('change', function () {
      var active = filterSelect.value;
      list.querySelectorAll('.results-item').forEach(function (item) {
        if (active === 'all') {
          item.style.display = '';
        } else if (active === 'flagged') {
          item.style.display = item.dataset.flagged === 'true' ? '' : 'none';
        } else {
          item.style.display = item.dataset.result === active ? '' : 'none';
        }
      });
    });
    filterRow.appendChild(filterSelect);

    /* Collapse All on the right */
    var expandBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u25B2 Collapse All' });
    expandBtn.dataset.expanded = 'true';
    expandBtn.addEventListener('click', function () {
      var expanded = expandBtn.dataset.expanded === 'true';
      list.querySelectorAll('.results-item__explanation').forEach(function (el) {
        el.style.display = expanded ? 'none' : 'block';
      });
      list.querySelectorAll('.results-item__toggle').forEach(function (btn) {
        var detail = btn.closest('.results-item');
        if (detail) {
          var isCorrect = detail.dataset.result === 'correct';
          btn.textContent = expanded ? (isCorrect ? 'Show explanation \u25BC' : 'Show full review \u25BC') : 'Hide explanation \u25B2';
        }
      });
      expandBtn.dataset.expanded = expanded ? 'false' : 'true';
      expandBtn.textContent = expanded ? '\u25BC Expand All' : '\u25B2 Collapse All';
    });
    filterRow.appendChild(expandBtn);
    filterBar.appendChild(filterRow);

    /* Row 2: Export to PDF and Copy below Filters label */
    var actionRow = createEl('div', 'results-filter__row results-filter__row--actions');
    var pdfBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u2913 Export to PDF' });
    pdfBtn.addEventListener('click', function () {
      window.print();
    });
    actionRow.appendChild(pdfBtn);

    /* Export exam as JSON file (before Copy) */
    var exportBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u2913 Export JSON' });
    exportBtn.addEventListener('click', function () {
      if (typeof ExamStats !== 'undefined' && ExamStats.exportAttempt) {
        ExamStats.exportAttempt(results.id, results);
        var origText = exportBtn.textContent;
        exportBtn.textContent = '\u2713 Exported';
        setTimeout(function () { exportBtn.textContent = origText; }, 2000);
      }
    });
    actionRow.appendChild(exportBtn);

    var copyBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u2398 Copy' });
    copyBtn.addEventListener('click', function () {
      var copyText = [];
      var items = list.querySelectorAll('.results-item');
      items.forEach(function (item) {
        if (item.style.display === 'none') return;
        var lines = item.textContent.split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
        copyText.push(lines.join('\n'));
      });
      if (copyText.length === 0) return;
      navigator.clipboard.writeText(copyText.join('\n\n')).then(function () {
        var orig = copyBtn.textContent;
        copyBtn.textContent = '\u2713 Copied!';
        setTimeout(function () { copyBtn.textContent = orig; }, 2000);
      }).catch(function () {});
    });
    actionRow.appendChild(copyBtn);
    filterBar.appendChild(actionRow);

    /* Row 3: Back to Home | Back to Attempts (right) below Filters */
    var navRow = createEl('div', 'results-filter__row results-filter__row--nav');
    var backBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u2190 Back to Home' });
    backBtn.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
    navRow.appendChild(backBtn);

    var backAttemptsBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u2190 Back to Attempts' });
    backAttemptsBtn.addEventListener('click', function () {
      var dash = document.getElementById('stats-dashboard');
      var app = document.getElementById('app');
      if (dash) {
        if (app) app.innerHTML = '';
        dash.style.display = '';
        if (typeof ExamStats !== 'undefined' && ExamStats.renderStatsDashboard) ExamStats.renderStatsDashboard();
      } else {
        window.location.href = 'index.html?goto=attempts#stats-dashboard';
      }
    });
    navRow.appendChild(backAttemptsBtn);
    filterBar.appendChild(navRow);

    /* whyWrong meaning note */
    filterBar.appendChild(createEl('div', null, {
      style: 'font-size:0.75rem;color:var(--color-text-secondary);padding:0 var(--space-sm) var(--space-sm);',
      text: 'Por que a opção está incorreta: princípio que a torna errada (não é a explicação da opção em si)'
    }));

    list.appendChild(filterBar);

    results.details.forEach(function (d) {
      var resultType = d.isCorrect ? 'correct' : (d.selectedAnswer === null ? 'unanswered' : 'incorrect');
      var item = createEl('div', 'results-item');
      item.dataset.result = resultType;
      item.dataset.flagged = d.flagged ? 'true' : 'false';

      /* Header */
      var header = createEl('div', 'results-item__header');
      header.appendChild(createEl('span', 'results-item__number', { text: 'Question ' + (d.index + 1) }));

      var statusClass = 'results-item__status';
      var statusText = '';
      if (d.isCorrect) {
        statusClass += ' results-item__status--correct';
        statusText = '✓ Correct';
      } else if (d.selectedAnswer === null) {
        statusClass += ' results-item__status--incorrect';
        statusText = '— Unanswered';
      } else {
        statusClass += ' results-item__status--incorrect';
        statusText = '✘ Incorrect';
      }
      header.appendChild(createEl('span', statusClass, { text: statusText }));

      /* Flag indicator */
      if (d.flagged) {
        header.appendChild(createEl('span', 'results-item__flag', { text: '⚑ Flagged' }));
      }

      item.appendChild(header);

      /* Question text */
      var qText = createEl('div', 'results-item__question');
       qText.textContent = d.question;
      item.appendChild(qText);

      /* Answers */
      var answersDiv = createEl('div', 'results-item__answers');

      var selectedStr = d.selectedAnswer !== null ? d.selectedAnswer + '. ' + d.options[d.selectedAnswer] : 'Not answered';
      var correctStr = d.correctAnswer + '. ' + d.options[d.correctAnswer];

      var selClass = 'results-item__answer';
      if (d.isCorrect) {
        selClass += ' results-item__answer--user-correct';
      } else if (d.selectedAnswer !== null) {
        selClass += ' results-item__answer--user-incorrect';
      }
      var selEl = createEl('div', selClass);
      selEl.appendChild(document.createTextNode('Your answer: ' + selectedStr));
      answersDiv.appendChild(selEl);

      var corrEl = createEl('div', ['results-item__answer', 'results-item__answer--correct-answer']);
      corrEl.appendChild(document.createTextNode('Correct answer: ' + correctStr));
      answersDiv.appendChild(corrEl);

      item.appendChild(answersDiv);

      /* Time per question */
      if (results.timePerQuestion) {
        var suggested = results.suggestedPerQ || Math.round((results.totalTime || 3600) / 40);
        var spent = results.timePerQuestion[d.index] || 0;
        var timeEl = createEl('div', 'results-item__time');
        var timeColor = 'var(--color-text-muted)';
        if (spent > 0) {
          if (spent > suggested) timeColor = 'var(--color-danger)';
          else if (spent > suggested * 0.8) timeColor = 'var(--color-warning)';
        }
        timeEl.style.color = timeColor;
        timeEl.textContent = 'Suggested: ' + formatTime(suggested) + ' | Spent: ' + formatTime(spent);
        item.appendChild(timeEl);
      }

      /* Note */
      if (d.note) {
        var noteEl = createEl('div', 'results-item__note');
        noteEl.textContent = 'Note: ' + d.note;
        item.appendChild(noteEl);
      }

      /* Toggle button for full explanation */
      var toggleBtn = createEl('button', ['btn', 'btn--ghost', 'btn--sm', 'results-item__toggle'], { text: 'Hide explanation \u25B2' });
      var explEl = createEl('div', 'results-item__explanation');
      explEl.style.display = 'block';

      var parts = [];
      function pushLine(text) { parts.push(text); }
      function pushBold(text) { parts.push('<strong>' + escHtml(text) + '</strong>'); }
      function push(text) { parts.push(escHtml(text)); }

      pushBold('Why?');
      push(d.explanation || 'Not specified in the official CTFL v4.0.1 syllabus.');
      if (d.isCorrect && d.correctFeedback) {
        parts.push('');
        push(d.correctFeedback);
      } else if (!d.isCorrect) {
        var wrongFb = (d.incorrectFeedback && d.selectedAnswer && d.incorrectFeedback[d.selectedAnswer]) || d.whyWrong || '';
        if (wrongFb) {
          parts.push('');
          pushBold('Why your answer is incorrect:');
          push(wrongFb.replace(/^❌\s*Incorrect:\s*/, '❌: '));
        }
      }
      ['A', 'B', 'C', 'D'].forEach(function (letter) {
        parts.push('');
        if (letter === d.correctAnswer) {
          parts.push('<strong style="color:var(--color-success);">' + escHtml('Why option ' + letter + ' is correct:') + '</strong>');
        } else {
          pushBold('Why option ' + letter + ' is incorrect:');
        }
        push(d.optionExplanations[letter] || 'Not specified in the official CTFL v4.0.1 syllabus.');
      });
      parts.push('');
      pushBold('Reference');
      push('Chapter: ' + d.chapter);
      push('Section: ' + d.section);
      push('Subsection: ' + d.subsection);
      push('Learning Objective: ' + d.learningObjective);
      push('K-Level: ' + d.kLevel);
      parts.push('');
      pushBold('Keywords:');
      push(Array.isArray(d.keywords) ? d.keywords.join(', ') : d.keywords);
      parts.push('');
      pushBold('Exam Tip:');
      push(d.examTip);
      parts.push('');
      pushBold('Memory Aid:');
      push(d.memoryAid);

      explEl.innerHTML = parts.join('\n');
      explEl.style.whiteSpace = 'pre-line';

      toggleBtn.addEventListener('click', function () {
        var isHidden = explEl.style.display === 'none';
        explEl.style.display = isHidden ? 'block' : 'none';
        toggleBtn.textContent = isHidden ? 'Hide explanation \u25B2' : (d.isCorrect ? 'Show explanation \u25BC' : 'Show full review \u25BC');
      });

      item.appendChild(toggleBtn);
      item.appendChild(explEl);

      list.appendChild(item);
    });

    container.appendChild(list);

    /* Scroll to top button (appears at the end only) */
    var topGroup = createEl('div', null, { style: 'text-align:center;padding:var(--space-lg) 0;' });
    var topBtn = createEl('button', ['btn', 'btn--primary', 'btn--lg'], { text: '\u2191 Top' });
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    topGroup.appendChild(topBtn);
    container.appendChild(topGroup);

    return container;
  }

  /* =================================================================
     Public API
     ================================================================= */

  return {
    calculateResults: calculateResults,
    generateResultsHTML: generateResultsHTML,
    buildStudyPlan: buildStudyPlan,
    openStudySlides: openStudySlides,
    rebuildDetails: rebuildDetails,
    PASS_THRESHOLD: PASS_THRESHOLD,
  };
})();
