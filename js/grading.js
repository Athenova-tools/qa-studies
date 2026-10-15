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
     Answer options panel — "?" toggle next to each reviewed question
     ================================================================= */

  var OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
  var optionsPanelSeq = 0;

  function optionEntries(options) {
    var out = [];
    if (!options) return out;
    if (Array.isArray(options)) {
      for (var i = 0; i < options.length; i++) {
        out.push({ letter: OPTION_LETTERS[i] || String(i + 1), text: options[i] });
      }
      return out;
    }
    Object.keys(options).sort(function (a, b) {
      var ia = OPTION_LETTERS.indexOf(String(a).toUpperCase());
      var ib = OPTION_LETTERS.indexOf(String(b).toUpperCase());
      if (ia === -1 && ib === -1) return String(a).localeCompare(String(b));
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    }).forEach(function (k) {
      out.push({ letter: k, text: options[k] });
    });
    return out;
  }

  function optionText(options, letter) {
    if (!options || letter === null || letter === undefined) return undefined;
    if (Array.isArray(options)) {
      var pos = OPTION_LETTERS.indexOf(String(letter).toUpperCase());
      return pos >= 0 ? options[pos] : options[letter];
    }
    return options[letter];
  }

  /* "A. Text" — degrades to just the letter when the text is unavailable */
  function formatChoice(options, letter) {
    if (letter === null || letter === undefined) return 'Not answered';
    var text = optionText(options, letter);
    if (text === undefined || text === null || text === '') return String(letter);
    return String(letter) + '. ' + text;
  }

  /* Per-option "Why option X is correct/incorrect" shown inline under each
     answer-option card (see TEMP/Respostas.jpeg reference). */
  function optionWhyText(d, letter) {
    var map = d.optionExplanations || {};
    var t = map[letter];
    if (t === undefined || t === null || t === '') return 'Not specified in the official CTFL v4.0.1 syllabus.';
    return String(t);
  }

  function buildOptionsPanel(panel, d) {
    var entries = optionEntries(d.options);
    panel.appendChild(createEl('div', 'results-item__options-title', { text: 'All answer options' }));
    if (!entries.length) {
      panel.appendChild(createEl('div', 'results-item__option', {
        text: 'Answer options are not available for this question.',
      }));
      return;
    }
    entries.forEach(function (entry) {
      var letter = String(entry.letter);
      var isCorrect = letter === String(d.correctAnswer);
      var isSelected = d.selectedAnswer !== null && d.selectedAnswer !== undefined &&
        letter === String(d.selectedAnswer);

      /* Card wrapper — highlighted green (correct) / red (wrong selection) */
      var blockCls = 'results-item__opt-block';
      if (isCorrect) blockCls += ' results-item__opt-block--correct';
      else if (isSelected) blockCls += ' results-item__opt-block--wrong';
      var block = createEl('div', blockCls);

      var cls = 'results-item__option';
      if (isCorrect) cls += ' results-item__option--correct';
      if (isSelected) cls += ' results-item__option--selected';

      var row = createEl('div', cls);
      row.appendChild(createEl('span', 'results-item__option-letter', { text: letter }));
      row.appendChild(createEl('span', 'results-item__option-text', {
        text: entry.text === undefined || entry.text === null || entry.text === '' ? '—' : String(entry.text),
      }));

      var badgeText = '';
      var badgeCls = '';
      if (isSelected && isCorrect) { badgeText = '✓ Your answer'; badgeCls = ' results-item__option-badge--correct'; }
      else if (isSelected) { badgeText = 'Your answer'; badgeCls = ' results-item__option-badge--wrong'; }
      else if (isCorrect) { badgeText = '✓ Correct'; badgeCls = ' results-item__option-badge--correct'; }
      if (badgeText) {
        var badges = createEl('span', 'results-item__option-badges');
        badges.appendChild(createEl('span', 'results-item__option-badge' + badgeCls, { text: badgeText }));
        row.appendChild(badges);
      }
      block.appendChild(row);

      /* Inline "Why option X is correct/incorrect:" directly under the option */
      var why = createEl('div', 'results-item__opt-why');
      var whyLabel = 'Why option ' + letter + (isCorrect ? ' is correct:' : ' is incorrect:');
      var whyStrong = createEl('strong', isCorrect ? 'results-item__opt-why--correct' : null, { text: whyLabel });
      why.appendChild(whyStrong);
      why.appendChild(document.createTextNode(' ' + optionWhyText(d, letter)));
      block.appendChild(why);

      panel.appendChild(block);
    });
  }

  /* =================================================================
     Generate Results HTML
     ================================================================= */

  function generateResultsHTML(results) {
    var container = createEl('div', 'results');

    /* ---- Summary Card (single line) ---- */
    var card = createEl('div', 'results__card');

    var mainRow = createEl('div', 'results__main-row');

    var iconClass = results.passed ? 'results__icon--pass' : 'results__icon--fail';
    var icon = createEl('div', ['results__icon', iconClass], { text: results.passed ? '✓' : '✗' });
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
      { label: 'Time', value: results.timeSpent || '—', style: '' },
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
    container.appendChild(card);

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
      container.appendChild(planCard);
    }

    /* ---- Question Review List ---- */
    var list = createEl('div', 'results-list');
    var listTitle = createEl('div', 'results-list__title', { text: 'Question Review' });
    list.appendChild(listTitle);

    /* Filter buttons */
    var filterBar = createEl('div', 'results-filter');
    var filters = [
      { label: 'All', value: 'all' },
      { label: 'Correct', value: 'correct' },
      { label: 'Incorrect', value: 'incorrect' },
      { label: 'Unanswered', value: 'unanswered' },
      { label: 'Flagged', value: 'flagged' },
    ];
    filters.forEach(function (f) {
      var btn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn', f.value === 'all' ? 'results-filter__btn--active' : ''], { text: f.label });
      btn.dataset.filter = f.value;
      btn.addEventListener('click', function () {
        filterBar.querySelectorAll('.results-filter__btn').forEach(function (b) {
          b.classList.remove('results-filter__btn--active');
        });
        btn.classList.add('results-filter__btn--active');
        var active = btn.dataset.filter;
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
      filterBar.appendChild(btn);
    });

    /* Expand/Collapse All toggle — controls the whole card body
       (question + All answer options + explanation). Default: expanded. */
    var expandBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u25B2 Collapse All' });
    expandBtn.dataset.expanded = 'true';
    expandBtn.addEventListener('click', function () {
      var expanded = expandBtn.dataset.expanded === 'true';
      list.querySelectorAll('.results-item__body').forEach(function (el) {
        el.style.display = expanded ? 'none' : 'block';
      });
      list.querySelectorAll('.results-item__chevron').forEach(function (btn) {
        btn.textContent = expanded ? '\u25BC' : '\u25B2';
        btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      });
      expandBtn.dataset.expanded = expanded ? 'false' : 'true';
      expandBtn.textContent = expanded ? '\u25BC Expand All' : '\u25B2 Collapse All';
    });
    filterBar.appendChild(expandBtn);

    /* Separator */
    var sep = createEl('span', null, { style: 'flex:1;' });
    filterBar.appendChild(sep);

    /* Export to PDF button */
    var pdfBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u2913 Export to PDF' });
    pdfBtn.addEventListener('click', function () {
      window.print();
    });
    filterBar.appendChild(pdfBtn);

    /* Export exam as JSON file (before Copy) */
    var exportBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '⤓ Export JSON' });
    exportBtn.addEventListener('click', function () {
      if (typeof ExamStats !== 'undefined' && ExamStats.exportAttempt) {
        ExamStats.exportAttempt(results.id, results);
        var origText = exportBtn.textContent;
        exportBtn.textContent = '✓ Exported';
        setTimeout(function () { exportBtn.textContent = origText; }, 2000);
      }
    });
    filterBar.appendChild(exportBtn);

    /* Copy to clipboard button */
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
    filterBar.appendChild(copyBtn);

    /* Scroll to bottom button */
    var bottomBtn = createEl('button', ['btn', 'btn--sm', 'results-filter__btn'], { text: '\u2193 Bottom' });
    bottomBtn.addEventListener('click', function () {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
    filterBar.appendChild(bottomBtn);

    list.appendChild(filterBar);

    results.details.forEach(function (d) {
      var resultType = d.isCorrect ? 'correct' : (d.selectedAnswer === null ? 'unanswered' : 'incorrect');
      var item = createEl('div', 'results-item');
      item.dataset.result = resultType;
      item.dataset.flagged = d.flagged ? 'true' : 'false';

      /* Card accent: green when correct, red/pink otherwise (reference design) */
      var cardStateCls = d.isCorrect ? ' results-item--correct' : ' results-item--wrong';
      item.className += cardStateCls;

      /* ---- Collapsible header (default: expanded) ----
         Status circle + "Qn" + state badge + short preview + chevron.
         The old standalone "?" button is folded into this expand/collapse. */
      var header = createEl('div', 'results-item__header');
      header.setAttribute('role', 'button');
      header.setAttribute('tabindex', '0');

      var statusIcon = createEl('span', 'results-item__status-icon' +
        (d.isCorrect ? ' results-item__status-icon--correct' : ' results-item__status-icon--incorrect'),
        { text: d.isCorrect ? '✓' : '✕' });
      statusIcon.setAttribute('aria-hidden', 'true');
      header.appendChild(statusIcon);

      var headMain = createEl('div', 'results-item__head-main');
      var headTop = createEl('div', 'results-item__head-top');
      headTop.appendChild(createEl('span', 'results-item__number', { text: 'Q' + (d.index + 1) }));

      var badgeClass = 'results-item__state-badge';
      var badgeText = '';
      if (d.isCorrect) {
        badgeClass += ' results-item__state-badge--correct';
        badgeText = 'Correct';
      } else if (d.selectedAnswer === null || d.selectedAnswer === undefined) {
        badgeClass += ' results-item__state-badge--unanswered';
        badgeText = 'Not answered';
      } else {
        badgeClass += ' results-item__state-badge--wrong';
        badgeText = 'Incorrect';
      }
      headTop.appendChild(createEl('span', badgeClass, { text: badgeText }));

      /* Flag indicator */
      if (d.flagged) {
        headTop.appendChild(createEl('span', 'results-item__flag', { text: '⚑ Flagged' }));
      }
      headMain.appendChild(headTop);

      var fullQ = String(d.question || '');
      var previewText = fullQ.length > 90 ? fullQ.slice(0, 90).replace(/\s+\S*$/, '') + '...' : fullQ;
      headMain.appendChild(createEl('div', 'results-item__preview', { text: previewText }));
      header.appendChild(headMain);

      var bodyId = 'review-body-' + (++optionsPanelSeq);
      var chevron = createEl('button', 'results-item__chevron', {
        text: '▲',
        type: 'button',
        title: 'Collapse question',
        'aria-label': 'Collapse question ' + (d.index + 1),
        'aria-expanded': 'true',
        'aria-controls': bodyId,
      });
      header.appendChild(chevron);
      item.appendChild(header);

      /* ---- Body (visible by default) ---- */
      var body = createEl('div', 'results-item__body');
      body.id = bodyId;
      body.style.display = 'block';

      function setExpanded(expanded) {
        body.style.display = expanded ? 'block' : 'none';
        chevron.textContent = expanded ? '▲' : '▼';
        chevron.title = expanded ? 'Collapse question' : 'Expand question';
        chevron.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        chevron.setAttribute('aria-label',
          (expanded ? 'Collapse' : 'Expand') + ' question ' + (d.index + 1));
      }
      chevron.addEventListener('click', function (e) {
        if (e && e.stopPropagation) e.stopPropagation();
        setExpanded(body.style.display === 'none');
      });
      header.addEventListener('click', function (e) {
        if (e && e.target === chevron) return;
        setExpanded(body.style.display === 'none');
      });
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target === chevron) return;
          e.preventDefault();
          setExpanded(body.style.display === 'none');
        }
      });

      /* Full question text */
      var qText = createEl('div', 'results-item__question');
      qText.textContent = fullQ;
      body.appendChild(qText);

      /* All answer options — each card carries its own
         "Why option X is correct/incorrect:" inline */
      var optsPanel = createEl('div', 'results-item__options');
      optsPanel.hidden = false;
      buildOptionsPanel(optsPanel, d);
      body.appendChild(optsPanel);

      /* "Your answer:" / "Correct answer:" lines removed — the option
         cards already carry the "✓ Your answer" / "✓ Correct" /
         "Your answer" badges, so the lines were redundant. */

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
        body.appendChild(timeEl);
      }

      /* Note */
      if (d.note) {
        var noteEl = createEl('div', 'results-item__note');
        noteEl.textContent = 'Note: ' + d.note;
        body.appendChild(noteEl);
      }

      /* Explanation box — "📖 Explanation" (per-option whys now live
         inline under each option above, so only the general
         explanation + references remain here). */
      var explEl = createEl('div', ['results-item__explanation', 'results-item__explain-box']);
      explEl.style.display = 'block';

      var parts = [];
      function pushBold(text) { parts.push('<strong>' + escHtml(text) + '</strong>'); }
      function push(text) { parts.push(escHtml(text)); }

      pushBold('📖 Explanation');
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

      body.appendChild(explEl);
      item.appendChild(body);

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
