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

    for (var i = 0; i < total; i++) {
      var q = questions[i];
      var selected = answers[i] !== undefined ? answers[i] : null;
      var isCorrect = selected !== null && selected === q.correctAnswer;

      if (isCorrect) correctCount++;
      else if (selected === null) unansweredCount++;
      else incorrectCount++;

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
    };
  }

  /* =================================================================
     Generate Results HTML
     ================================================================= */

  function generateResultsHTML(results) {
    var container = createEl('div', 'results');

    /* ---- Question Review List ---- */
    var list = createEl('div', 'results-list');
    var listTitle = createEl('div', 'results-list__title', { text: 'Question Review' });
    list.appendChild(listTitle);

    /* ---- Summary Card (below Question Review title) ---- */
    var card = createEl('div', 'results__card');

    var mainRow = createEl('div', 'results__main-row');

    var iconClass = results.passed ? 'results__icon--pass' : 'results__icon--fail';
    var icon = createEl('div', ['results__icon', iconClass], { text: results.passed ? '\u2713' : '\u2717' });
    mainRow.appendChild(icon);

    var scoreEl = createEl('div', 'results__score', { text: results.score + '/' + results.total });
    mainRow.appendChild(scoreEl);

    var pctClass = results.passed ? 'results__percentage--pass' : 'results__percentage--fail';
    var pctEl = createEl('div', ['results__percentage', pctClass], { text: results.percentage + '%' });
    mainRow.appendChild(pctEl);

    var verdictClass = results.passed ? 'results__verdict--pass' : 'results__verdict--fail';
    var verdictText = results.passed ? 'PASS' : 'FAIL';
    var verdictEl = createEl('div', ['results__verdict', verdictClass], { text: verdictText });
    mainRow.appendChild(verdictEl);

    /* Inline stats */
    var statsData = [
      { label: 'Correct', value: String(results.correctCount), style: 'color:var(--color-success);' },
      { label: 'Incorrect', value: String(results.incorrectCount), style: 'color:var(--color-danger);' },
      { label: 'Unanswered', value: String(results.unansweredCount), style: 'color:var(--color-text-muted);' },
      { label: 'Time', value: results.timeSpent || '\u2014', style: '' },
    ];
    statsData.forEach(function (s) {
      var statEl = createEl('span', 'results__stat-inline');
      var val = createEl('span', 'results__stat-inline-value');
      val.textContent = s.value;
      if (s.style) val.style.cssText = s.style;
      statEl.appendChild(val);
      statEl.appendChild(document.createTextNode(' ' + s.label));
      mainRow.appendChild(statEl);
    });

    card.appendChild(mainRow);
    list.appendChild(card);

    /* ---- Question Review filter bar ---- */
    var filterBar = createEl('div', 'results-filter');

    /* Row 1: Filters (selection list) */
    var filterRow = createEl('div', 'results-filter__row');
    filterRow.appendChild(createEl('span', 'results-filter__label', { text: 'Filters:' }));
    var filterSelect = createEl('select', 'results-filter__select');
    [
      { label: 'All', value: 'all' },
      { label: 'Correct', value: 'correct' },
      { label: 'Incorrect', value: 'incorrect' },
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
    filterBar.appendChild(filterRow);

    /* Row 2: Actions */
    var actionRow = createEl('div', 'results-filter__row');
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
    actionRow.appendChild(expandBtn);

    var pdfBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u2913 Export to PDF' });
    pdfBtn.addEventListener('click', function () {
      window.print();
    });
    actionRow.appendChild(pdfBtn);

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

    /* Row 3: Navigation */
    var navRow = createEl('div', 'results-filter__row results-filter__row--nav');
    var bottomBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u2193 Bottom' });
    bottomBtn.addEventListener('click', function () {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
    navRow.appendChild(bottomBtn);

    var backBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u2190 Back to Home' });
    backBtn.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
    navRow.appendChild(backBtn);
    filterBar.appendChild(navRow);

    list.appendChild(filterBar);

    results.details.forEach(function (d) {
      var resultType = d.isCorrect ? 'correct' : 'incorrect';
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

      pushBold('Correct Answer:');
      push(d.correctAnswer + '. ' + d.options[d.correctAnswer]);
      parts.push('');
      pushBold('Why?');
      push(d.explanation || 'Not specified in the official CTFL v4.0.1 syllabus.');
      if (!d.isCorrect && d.whyWrong) {
        parts.push('');
        pushBold('Why your answer is incorrect:');
        push(d.whyWrong);
      }
      ['A', 'B', 'C', 'D'].forEach(function (letter) {
        parts.push('');
        pushBold('Why option ' + letter + ' is ' + (letter === d.correctAnswer ? 'correct' : 'incorrect') + ':');
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
    PASS_THRESHOLD: PASS_THRESHOLD,
  };
})();
