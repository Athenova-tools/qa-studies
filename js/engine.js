/**
 * ISTQB CTFL v4.0.1 Exam Simulator — Engine Module
 * Handles question rendering, navigation, timer, submission.
 * Requires: questions.js (window.questionSets), grading.js (ExamGrading), statistics.js (ExamStats)
 *
 * HTML containers expected:
 *   #app          — root container (exam & results render here)
 *   #stats-dashboard — (optional) stats render here, untouched by engine
 */
const ExamEngine = (function () {
  'use strict';

  /* =================================================================
     Constants
     ================================================================= */
  const TOTAL_Q = 40;
  const EXAM_TIME_S = 3600;
  const WARN_S = 300;
  const DANGER_S = 60;

  const UI = {
    prev: '\u2190 Previous', next: 'Next \u2192', submit: 'Submit Exam',
    flag: 'Flag for Review', unflag: 'Unflag', flagged: '\u2605 Flagged',
    flagReview: '\u2606 Flag for Review', qNav: 'Question Navigator',
    current: 'Current', answered: 'Answered', flaggedLabel: 'Flagged',
    unanswered: 'Unanswered', qOf: 'Question {n} of {t}',
    notesLabel: 'My Notes:', notesPlaceholder: 'Add your observations about this question...',
    startExam: 'Start Exam', configTitle: 'Exam Configuration',
    configDesc: 'Configure your exam preferences before starting.',
    timeLabel: 'Time Limit',
    time60: '60 minutes (standard)', time75: '75 minutes (+15 for non-native English)',
    backHome: '\u2190 Back to Home', sidebarAria: 'Toggle question navigator',
    closeAria: 'Close sidebar',
  };

  function tr(key) {
    return UI[key] || key;
  }

  /* =================================================================
     Private State
     ================================================================= */
  let state = {
    questions: [],
    examId: 1,
    index: 0,
    answers: {},
    flagged: new Set(),
    notes: {},
    questionStart: 0,
    entryAnswer: undefined,
    timePerQuestion: {},
    examTime: EXAM_TIME_S,
    remaining: 0,
    interval: null,
    submitted: false,
    results: null,
    reviewMode: false,
    sidebarOpen: false,
    configDone: false,
  };

  let appEl = null;

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

  function clearContainer(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  function formatTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function getAnsweredCount() {
    var count = 0;
    for (var i = 0; i < TOTAL_Q; i++) {
      if (state.answers[i] !== undefined) count++;
    }
    return count;
  }

  /* =================================================================
     Layout Builder
     ================================================================= */

  function buildExamLayout() {
    appEl = document.getElementById('app');
    if (!appEl) return;
    clearContainer(appEl);

    var layout = createEl('div', 'exam-layout');
    var main = createEl('main', 'exam-main');
    var inner = createEl('div', 'exam-main__inner');
    var sidebar = createEl('aside', ['exam-sidebar', 'animate-slide-in-right']);

    /* --- Sidebar --- */
    var sbHeader = createEl('div', 'exam-sidebar__header');
    var sbTitle = createEl('span', 'exam-sidebar__title', { text: tr('qNav') });
    var sbClose = createEl('button', ['exam-sidebar__close', 'btn'], { text: '\u2715' });
    sbClose.setAttribute('aria-label', tr('closeAria'));
    sbClose.addEventListener('click', toggleSidebar);
    sbHeader.appendChild(sbTitle);
    sbHeader.appendChild(sbClose);

    var navGrid = createEl('div', 'question-nav');
    navGrid.id = 'question-nav';

    var legend = buildLegend();

    sidebar.appendChild(sbHeader);
    sidebar.appendChild(navGrid);
    sidebar.appendChild(legend);

    /* --- Timer display (stable, outside question container) --- */
    var timerRow = createEl('div', 'question__timer-row');
    var timerEl = createEl('div', 'timer', { text: formatTime(state.remaining) });
    timerEl.id = 'timer-display';
    timerRow.appendChild(timerEl);
    inner.appendChild(timerRow);

    /* --- Question container --- */
    var qContainer = createEl('div', 'question', { id: 'question-container' });
    inner.appendChild(qContainer);

    /* --- Controls --- */
    var controls = createEl('div', 'exam-controls');
    var leftGroup = createEl('div', 'exam-controls__group');
    var rightGroup = createEl('div', 'exam-controls__group');

    var prevBtn = createEl('button', ['btn', 'btn--secondary', 'btn--sm'], { text: tr('prev') });
    prevBtn.id = 'btn-prev';
    prevBtn.addEventListener('click', prevQuestion);
    var nextBtn = createEl('button', ['btn', 'btn--secondary', 'btn--sm'], { text: tr('next') });
    nextBtn.id = 'btn-next';
    nextBtn.addEventListener('click', nextQuestion);

    var flagBtn = createEl('button', ['btn', 'btn--ghost', 'btn--sm'], { text: tr('flag') });
    flagBtn.id = 'btn-flag';
    flagBtn.addEventListener('click', flagQuestion);

    var submitBtn = createEl('button', ['btn', 'btn--danger'], { text: tr('submit') });
    submitBtn.id = 'btn-submit';
    submitBtn.addEventListener('click', submitExam);

    leftGroup.appendChild(prevBtn);
    leftGroup.appendChild(nextBtn);
    leftGroup.appendChild(flagBtn);
    rightGroup.appendChild(submitBtn);
    controls.appendChild(leftGroup);
    controls.appendChild(rightGroup);
    inner.appendChild(controls);

    /* --- Notes area (after controls, hidden until flagged) --- */
    var notesArea = createEl('div', 'question-notes');
    notesArea.id = 'question-notes';
    notesArea.style.display = 'none';
    var notesLabel = createEl('label', 'question-notes__label', { text: tr('notesLabel') });
    notesLabel.setAttribute('for', 'question-notes-input');
    var notesInput = createEl('textarea', 'question-notes__input');
    notesInput.id = 'question-notes-input';
    notesInput.placeholder = tr('notesPlaceholder');
    notesInput.addEventListener('input', function () {
      var idx = state.index;
      if (notesInput.value) {
        state.notes[idx] = notesInput.value;
      } else {
        delete state.notes[idx];
      }
    });
    notesArea.appendChild(notesLabel);
    notesArea.appendChild(notesInput);
    inner.appendChild(notesArea);

    main.appendChild(inner);
    layout.appendChild(main);
    layout.appendChild(sidebar);
    appEl.appendChild(layout);

    /* --- Overlay for mobile sidebar --- */
    var overlay = createEl('div', 'overlay');
    overlay.id = 'sidebar-overlay';
    overlay.addEventListener('click', toggleSidebar);
    appEl.appendChild(overlay);

    /* --- Sidebar toggle button (mobile) --- */
    var toggleBtn = createEl('button', ['btn', 'sidebar-toggle'], { text: '☰' });
    toggleBtn.setAttribute('aria-label', tr('sidebarAria'));
    toggleBtn.addEventListener('click', toggleSidebar);
    toggleBtn.style.position = 'fixed';
    toggleBtn.style.bottom = 'var(--space-lg)';
    toggleBtn.style.right = 'var(--space-lg)';
    toggleBtn.style.zIndex = '50';
    toggleBtn.style.boxShadow = 'var(--shadow-lg)';
    toggleBtn.style.backgroundColor = 'var(--color-primary)';
    toggleBtn.style.color = 'var(--color-text-inverse)';
    toggleBtn.style.borderRadius = 'var(--radius-full)';
    toggleBtn.style.width = '48px';
    toggleBtn.style.height = '48px';
    toggleBtn.style.fontSize = '1.25rem';
    toggleBtn.id = 'sidebar-toggle-btn';
    appEl.appendChild(toggleBtn);

    /* Store refs */
    window.currentExam = state.questions;
  }

  function buildLegend() {
    var legend = createEl('div', 'sidebar-legend');
    var items = [
      { label: tr('current'), cls: 'sidebar-legend__swatch--current' },
      { label: tr('answered'), cls: 'sidebar-legend__swatch--answered' },
      { label: tr('flaggedLabel'), cls: 'sidebar-legend__swatch--flagged' },
      { label: tr('unanswered'), cls: 'sidebar-legend__swatch--unanswered' },
    ];
    items.forEach(function (item) {
      var li = createEl('div', 'sidebar-legend__item');
      var swatch = createEl('span', ['sidebar-legend__swatch', item.cls]);
      var label = createEl('span', null, { text: item.label });
      li.appendChild(swatch);
      li.appendChild(label);
      legend.appendChild(li);
    });
    return legend;
  }

  function toggleSidebar() {
    state.sidebarOpen = !state.sidebarOpen;
    var sidebar = document.querySelector('.exam-sidebar');
    var overlay = document.getElementById('sidebar-overlay');
    if (sidebar) {
      sidebar.classList.toggle('exam-sidebar--open', state.sidebarOpen);
    }
    if (overlay) {
      overlay.classList.toggle('overlay--visible', state.sidebarOpen);
    }
  }

  /* =================================================================
     Question Rendering
     ================================================================= */

  function renderQuestion(index) {
    if (!state.questions.length || index < 0 || index >= TOTAL_Q) return;

    /* Track time spent on previous question */
    var prevIndex = state.index;
    if (prevIndex !== index && prevIndex >= 0 && state.questionStart > 0) {
      var shouldCount = true;
      var prevEntry = state.entryAnswer;
      var prevHasTime = state.timePerQuestion[prevIndex] !== undefined;
      if (prevHasTime && state.answers[prevIndex] === prevEntry) {
        shouldCount = false;
      }
      if (shouldCount) {
        var spent = state.questionStart - state.remaining;
        if (spent > 0) {
          state.timePerQuestion[prevIndex] = (state.timePerQuestion[prevIndex] || 0) + spent;
        }
      }
    }

    state.index = index;
    if (prevIndex !== index) {
      state.questionStart = state.remaining;
      state.entryAnswer = state.answers[index];
    }

    var q = state.questions[index];
    var container = document.getElementById('question-container');
    if (!container) return;
    clearContainer(container);

    /* Header */
    var header = createEl('div', 'question__header');

    var headerLeft = createEl('div', 'question__header-left');
    var numEl = createEl('span', 'question__number', { text: tr('qOf').replace('{n}', index + 1).replace('{t}', TOTAL_Q) });
    headerLeft.appendChild(numEl);

    header.appendChild(headerLeft);

    var headerCenter = createEl('div', 'question__header-center');

    var answeredEl = createEl('span', 'question__header-answered');
    answeredEl.id = 'question-header-answered';
    headerCenter.appendChild(answeredEl);

    var qPBar = createEl('div', 'question__header-progress');
    var qPFill = createEl('div', 'question__header-progress-fill');
    qPFill.id = 'question-header-progress-fill';
    qPBar.appendChild(qPFill);
    headerCenter.appendChild(qPBar);

    header.appendChild(headerCenter);

    var flagActive = state.flagged.has(index);
    var flagBtn = createEl('button', ['question__flag-btn'].concat(flagActive ? ['question__flag-btn--active'] : []), { text: flagActive ? tr('flagged') : tr('flagReview') });
    flagBtn.id = 'q-flag-btn';
    flagBtn.addEventListener('click', flagQuestion);
    header.appendChild(flagBtn);
    container.appendChild(header);

    /* Per-question recommended time */
    var timeInfo = createEl('div', 'question__time-info');
    timeInfo.id = 'question-time-info';
    container.appendChild(timeInfo);

    /* Question text */
    var qText = createEl('div', 'question__text');
    qText.textContent = q.statement;
    container.appendChild(qText);

    /* Options */
    var optionsEl = createEl('div', 'options');
    var letters = ['A', 'B', 'C', 'D'];
    var selected = state.answers[index];

    letters.forEach(function (letter) {
      var optClasses = ['option'];
      if (selected === letter) optClasses.push('option--selected');
      if (state.submitted || state.reviewMode) {
        optClasses.push('option--disabled');
        if (q.correctAnswer === letter) {
          optClasses.push('option--correct');
        }
        if (selected === letter && selected !== q.correctAnswer) {
          optClasses.push('option--incorrect');
        }
      }

      var opt = createEl('div', optClasses);
      if (!state.submitted && !state.reviewMode) {
        opt.addEventListener('click', function () {
          selectAnswer(letter);
        });
        opt.setAttribute('role', 'radio');
        opt.setAttribute('aria-checked', selected === letter ? 'true' : 'false');
        opt.tabIndex = 0;
        opt.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectAnswer(letter);
          }
        });
      }

      var indicator = createEl('span', 'option__indicator', { text: letter });
      opt.appendChild(indicator);

      var optText = createEl('span', 'option__text');
      optText.textContent = q.options[letter];
      opt.appendChild(optText);

      if (state.submitted || state.reviewMode) {
        var mark = createEl('span', 'option__mark');
        if (q.correctAnswer === letter) {
          mark.textContent = '✓';
        } else if (selected === letter) {
          mark.textContent = '✘';
        }
        opt.appendChild(mark);
      }

      optionsEl.appendChild(opt);
    });

    container.appendChild(optionsEl);

    /* Update nav + progress + buttons + notes */
    updateNavigator();
    updateProgress();
    updateNavButtons();
    updateFlagButton();
    updateQuestionTimeInfo();
    updateNotesArea();
  }

  /* =================================================================
     Answer Selection
     ================================================================= */

  function selectAnswer(option) {
    if (state.submitted || state.reviewMode) return;
    if (state.index < 0 || state.index >= TOTAL_Q) return;

    if (state.answers[state.index] === option) {
      delete state.answers[state.index];
    } else {
      state.answers[state.index] = option;
    }

    renderQuestion(state.index);
  }

  /* =================================================================
     Navigation
     ================================================================= */

  function goToQuestion(index) {
    if (index < 0 || index >= TOTAL_Q) return;
    renderQuestion(index);
  }

  function nextQuestion() {
    if (state.index === TOTAL_Q - 1) {
      var unanswered = getFirstUnanswered();
      if (unanswered >= 0) {
        goToQuestion(unanswered);
      }
    } else if (state.index < TOTAL_Q - 1) {
      goToQuestion(state.index + 1);
    }
  }

  function getFirstUnanswered() {
    for (var i = 0; i < TOTAL_Q; i++) {
      if (state.answers[i] === undefined) return i;
    }
    return -1;
  }

  function prevQuestion() {
    if (state.index > 0) {
      goToQuestion(state.index - 1);
    }
  }

  function updateNavButtons() {
    var prev = document.getElementById('btn-prev');
    var next = document.getElementById('btn-next');
    if (prev) prev.disabled = state.index === 0;
    if (next) {
      var allAnswered = getAnsweredCount() === TOTAL_Q;
      next.disabled = state.index === TOTAL_Q - 1 && allAnswered;
    }
  }

  /* =================================================================
     Flagging
     ================================================================= */

  function flagQuestion() {
    if (state.submitted) return;
    var idx = state.index;
    if (state.flagged.has(idx)) {
      state.flagged.delete(idx);
    } else {
      state.flagged.add(idx);
    }
    updateNavigator();
    updateFlagButton();
    var qFlagBtn = document.getElementById('q-flag-btn');
    if (qFlagBtn) {
      var flagged = state.flagged.has(idx);
      qFlagBtn.innerHTML = '';
      qFlagBtn.appendChild(document.createTextNode(flagged ? tr('flagged') : tr('flagReview')));
      qFlagBtn.classList.toggle('question__flag-btn--active', flagged);
    }
    updateNotesArea();
    if (state.flagged.has(idx)) {
      var notesInput = document.getElementById('question-notes-input');
      if (notesInput) {
        notesInput.focus();
      }
    }
  }

  function updateFlagButton() {
    var flagBtn = document.getElementById('btn-flag');
    if (flagBtn) {
      var isFlagged = state.flagged.has(state.index);
      flagBtn.textContent = isFlagged ? tr('unflag') : tr('flag');
    }
  }

  /* =================================================================
     Navigator Grid
     ================================================================= */

  function updateNavigator() {
    var nav = document.getElementById('question-nav');
    if (!nav) return;
    clearContainer(nav);

    for (var i = 0; i < TOTAL_Q; i++) {
      (function (idx) {
        var classes = ['question-nav__item'];
        if (state.flagged.has(idx) && !state.submitted) {
          classes.push('question-nav__item--flagged');
        }
        if (state.answers[idx] !== undefined) {
          classes.push('question-nav__item--answered');
        }
        if (idx === state.index && !state.submitted) {
          classes.push('question-nav__item--current');
        }

        var item = createEl('button', classes, { text: String(idx + 1) });
        item.setAttribute('aria-label', 'Go to question ' + (idx + 1));
        item.addEventListener('click', function () {
          if (!state.submitted) {
            goToQuestion(idx);
          }
        });

        if (state.flagged.has(idx)) {
          var flagIcon = document.createTextNode('⚑');
          item.appendChild(flagIcon);
        }

        nav.appendChild(item);
      })(i);
    }
  }

  /* =================================================================
     Progress
     ================================================================= */

  function updateProgress() {
    var answered = getAnsweredCount();
    var pct = Math.round((answered / TOTAL_Q) * 100);

    var headerAnswered = document.getElementById('question-header-answered');
    var headerFill = document.getElementById('question-header-progress-fill');

    if (headerAnswered) headerAnswered.textContent = answered + '/' + TOTAL_Q + ' Answered ' + pct + '%';
    if (headerFill) headerFill.style.width = pct + '%';
  }

  /* =================================================================
     Timer
     ================================================================= */

  function startTimer() {
    stopTimer();
    state.remaining = state.examTime;
    state.questionStart = state.examTime;
    state.interval = setInterval(tick, 1000);
    updateTimerDisplay();
  }

  function stopTimer() {
    if (state.interval) {
      clearInterval(state.interval);
      state.interval = null;
    }
  }

  function tick() {
    state.remaining--;
    updateTimerDisplay();
    updateQuestionTimeInfo();
    if (state.remaining <= 0) {
      stopTimer();
      autoSubmit();
    }
  }

  function updateTimerDisplay() {
    var el = document.getElementById('timer-display');
    if (!el) return;
    el.textContent = formatTime(state.remaining);
    el.className = 'timer';
    if (state.remaining <= DANGER_S) {
      el.classList.add('timer--danger');
    } else if (state.remaining <= WARN_S) {
      el.classList.add('timer--warning');
    }
  }

  function updateQuestionTimeInfo() {
    var timeInfoEl = document.getElementById('question-time-info');
    if (!timeInfoEl || state.index < 0) return;
    var suggestedPerQ = Math.round(state.examTime / TOTAL_Q);
    var prevTime = state.timePerQuestion[state.index] || 0;
    var currentSession = state.questionStart > 0 ? Math.max(0, state.questionStart - state.remaining) : 0;
    var totalSpent = prevTime + currentSession;
    var paceStatus = '';
    if (!state.submitted && totalSpent > 0) {
      var answered = getAnsweredCount();
      if (answered > 0) {
        var actualTimeUsed = state.examTime - state.remaining;
        var expectedTimeUsed = answered * suggestedPerQ;
        if (actualTimeUsed <= expectedTimeUsed * 1.15) {
          paceStatus = ' \u2713 On pace';
        } else {
          var remainingPerQ = answered < TOTAL_Q ? state.remaining / (TOTAL_Q - answered) : 0;
          paceStatus = ' \u26A0 Behind - ' + formatTime(Math.round(remainingPerQ)) + '/q left';
        }
      }
    }
    timeInfoEl.innerHTML = 'Suggested: ' + formatTime(suggestedPerQ) + ' | Spent: ' + formatTime(totalSpent);

    /* Pace indicator as a styled span */
    var paceSpan = document.createElement('span');
    paceSpan.id = 'question-pace-span';
    if (paceStatus) {
      paceSpan.textContent = ' ' + paceStatus.trim();
      paceSpan.className = 'timer-pace';
      if (paceStatus.indexOf('On pace') !== -1) {
        paceSpan.classList.add('timer-pace--ok');
      } else {
        paceSpan.classList.add('timer-pace--behind');
      }
    }
    timeInfoEl.appendChild(paceSpan);

    timeInfoEl.style.color = '';
    if (totalSpent > suggestedPerQ) {
      timeInfoEl.style.color = 'var(--color-danger)';
    } else if (totalSpent > suggestedPerQ * 0.8) {
      timeInfoEl.style.color = 'var(--color-warning)';
    }
  }

  function updateNotesArea() {
    var notesArea = document.getElementById('question-notes');
    var notesInput = document.getElementById('question-notes-input');
    if (!notesArea || !notesInput) return;
    var idx = state.index;
    notesInput.value = state.notes[idx] || '';
    notesArea.style.display = state.flagged.has(idx) ? 'block' : 'none';
  }

  function autoSubmit() {
    if (state.submitted) return;
    state.submitted = true;
    stopTimer();
    computeAndShowResults();
  }

  /* =================================================================
     Confirm modal (replaces native confirm())
     ================================================================= */

  function showConfirmModal(message, onConfirm) {
    var existing = document.getElementById('app-confirm-modal');
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    var overlay = createEl('div', 'app-modal', { id: 'app-confirm-modal' });
    var box = createEl('div', 'app-modal__box');
    var body = createEl('div', 'app-modal__body', { text: message });
    var actions = createEl('div', 'app-modal__actions');
    var cancelBtn = createEl('button', ['btn', 'btn--ghost'], { text: 'Cancel' });
    var okBtn = createEl('button', ['btn', 'btn--primary'], { text: 'Confirm' });
    cancelBtn.addEventListener('click', function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    });
    okBtn.addEventListener('click', function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      if (typeof onConfirm === 'function') onConfirm();
    });
    actions.appendChild(cancelBtn);
    actions.appendChild(okBtn);
    box.appendChild(body);
    box.appendChild(actions);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  }
  window.showConfirmModal = showConfirmModal;

  /* =================================================================
     Submission
     ================================================================= */

  function submitExam() {
    if (state.submitted) return;

    var unanswered = TOTAL_Q - getAnsweredCount();
    var msg = 'Are you sure you want to submit your exam?';
    if (unanswered > 0) {
      var unansweredList = [];
      var rangeStart = null;
      for (var i = 0; i < TOTAL_Q; i++) {
        if (state.answers[i] === undefined) {
          if (rangeStart === null) rangeStart = i;
        } else {
          if (rangeStart !== null) {
            unansweredList.push(formatRange(rangeStart, i - 1));
            rangeStart = null;
          }
        }
      }
      if (rangeStart !== null) {
        unansweredList.push(formatRange(rangeStart, TOTAL_Q - 1));
      }
      msg += '\n\nYou have ' + unanswered + ' unanswered question' + (unanswered > 1 ? 's' : '') + ':\n' + unansweredList.join(', ');
    }
    msg += '\n\nOnce submitted, you cannot change your answers.';

    showConfirmModal(msg, function () {
      state.submitted = true;
      stopTimer();
      computeAndShowResults();
    });
  }

  function formatRange(start, end) {
    return start === end ? 'Question ' + (start + 1) : 'Question ' + (start + 1) + '–' + (end + 1);
  }

  function computeAndShowResults() {
    var answered = {};
    for (var i = 0; i < TOTAL_Q; i++) {
      if (state.answers[i] !== undefined) {
        answered[i] = state.answers[i];
      }
    }

    if (typeof ExamGrading !== 'undefined') {
      state.results = ExamGrading.calculateResults(answered, state.questions, state.flagged, state.notes);
      state.results.examId = state.examId;
      state.results.timeSpent = formatTime(state.examTime - state.remaining);
      state.results.timePerQuestion = state.timePerQuestion;
      state.results.suggestedPerQ = Math.round(state.examTime / TOTAL_Q);
      state.results.totalTime = state.examTime;
      state.results.chapterPerformance = getChapterPerformance();
    } else {
      state.results = {
        score: 0,
        total: TOTAL_Q,
        percentage: 0,
        passed: false,
        correctCount: 0,
        incorrectCount: 0,
        unansweredCount: TOTAL_Q,
        timeSpent: formatTime(state.examTime - state.remaining),
        details: [],
      };
    }

    if (typeof ExamStats !== 'undefined') {
      ExamStats.saveAttempt(state.results);
    }

    showResults();
  }

  function getChapterPerformance() {
    var performance = {};

    state.questions.forEach(function (question, index) {
      var chapter = 'Chapter ' + question.chapter;
      if (!performance[chapter]) {
        performance[chapter] = { correct: 0, total: 0 };
      }
      performance[chapter].total++;
      if (state.answers[index] === question.correctAnswer) {
        performance[chapter].correct++;
      }
    });

    return performance;
  }

  /* =================================================================
     Results Display
     ================================================================= */

  function showResults() {
    appEl = document.getElementById('app');
    if (!appEl) return;
    clearContainer(appEl);

    if (typeof ExamGrading !== 'undefined' && state.results) {
      var resultsEl = ExamGrading.generateResultsHTML(state.results);
      appEl.appendChild(resultsEl);
    } else {
      var fallback = createEl('div', 'results');
      var card = createEl('div', 'results__card');
      var icon = createEl('div', ['results__icon', state.results.passed ? 'results__icon--pass' : 'results__icon--fail'], { text: state.results.passed ? '✓' : '✗' });
      card.appendChild(icon);
      var score = createEl('div', 'results__score', { text: state.results.score + '/' + state.results.total });
      card.appendChild(score);
      card.appendChild(createEl('div', 'results__score-label', { text: 'Score' }));
      var pctEl = createEl('div', ['results__percentage', state.results.passed ? 'results__percentage--pass' : 'results__percentage--fail'], { text: state.results.percentage + '%' });
      card.appendChild(pctEl);
      var verdict = createEl('div', ['results__verdict', state.results.passed ? 'results__verdict--pass' : 'results__verdict--fail'], { text: state.results.passed ? 'PASS' : 'FAIL' });
      card.appendChild(verdict);
      fallback.appendChild(card);
      appEl.appendChild(fallback);
    }

    /* Back to Home is rendered by the results toolbar (grading.js) */
  }

  /* =================================================================
     Public API
     ================================================================= */

  function showExamConfig() {
    appEl = document.getElementById('app');
    if (!appEl) return;
    clearContainer(appEl);

    var overlay = createEl('div', 'exam-config');
    var card = createEl('div', 'exam-config__card');

    var title = createEl('h2', 'exam-config__title', { text: tr('configTitle') });
    card.appendChild(title);
    var desc = createEl('p', 'exam-config__desc', { text: tr('configDesc') });
    card.appendChild(desc);

    /* Time selector */
    var timeGroup = createEl('div', 'exam-config__group');
    var timeLabel = createEl('label', 'exam-config__label', { text: tr('timeLabel') });
    var timeSelect = createEl('select', 'exam-config__select');
    timeSelect.id = 'config-time';
    var opt60 = createEl('option', null, { text: tr('time60'), value: '3600' });
    var opt75 = createEl('option', null, { text: tr('time75'), value: '4500' });
    timeSelect.appendChild(opt60);
    timeSelect.appendChild(opt75);
    timeSelect.value = String(state.examTime);
    timeGroup.appendChild(timeLabel);
    timeGroup.appendChild(timeSelect);
    card.appendChild(timeGroup);

    /* Start button */
    var startBtn = createEl('button', ['btn', 'btn--primary', 'btn--lg', 'exam-config__start'], { text: tr('startExam') });
    startBtn.addEventListener('click', function () {
      state.examTime = parseInt(document.getElementById('config-time').value, 10);
      beginExam();
    });
    card.appendChild(startBtn);

    overlay.appendChild(card);
    appEl.appendChild(overlay);
  }

  function beginExam() {
    state.index = 0;
    state.answers = {};
    state.flagged = new Set();
    state.notes = {};
    state.timePerQuestion = {};
    state.questionStart = 0;
    state.entryAnswer = undefined;
    state.submitted = false;
    state.results = null;
    state.reviewMode = false;
    state.sidebarOpen = false;
    state.configDone = true;

    window.currentExam = state.questions;

    buildExamLayout();
    updateNavigator();
    updateProgress();
    renderQuestion(0);
    startTimer();
  }

  return {
    initExam: function (examId) {
      if (!window.questionSets) {
        console.error('questionSets not found. Ensure questions.js is loaded first.');
        return;
      }
      var key = 'exam' + examId;
      if (!window.questionSets[key]) {
        console.error('Exam ' + examId + ' not found in questionSets.');
        return;
      }

      if (!isValidQuestionSet(window.questionSets[key])) {
        console.error('Exam ' + examId + ' has invalid question data.');
        var invalidApp = document.getElementById('app');
        if (invalidApp) {
          invalidApp.textContent = 'This exam cannot start because its question data is invalid.';
        }
        return;
      }

      state.questions = window.questionSets[key];
      state.examId = examId;

      showExamConfig();
    },
    goToQuestion: goToQuestion,
    nextQuestion: nextQuestion,
    prevQuestion: prevQuestion,
    selectAnswer: selectAnswer,
    flagQuestion: flagQuestion,
    submitExam: submitExam,
    getState: function () { return state; },
  };

  function isValidQuestionSet(questions) {
    if (!Array.isArray(questions) || questions.length !== TOTAL_Q) return false;

    return questions.every(function (question) {
      return question &&
        typeof question.id === 'string' &&
        typeof question.statement === 'string' && question.statement.length > 0 &&
        question.options &&
        ['A', 'B', 'C', 'D'].every(function (letter) {
          return typeof question.options[letter] === 'string' && question.options[letter].length > 0;
        }) &&
        ['A', 'B', 'C', 'D'].indexOf(question.correctAnswer) !== -1;
    });
  }
})();
