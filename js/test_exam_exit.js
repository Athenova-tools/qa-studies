/* Focused regression test for the active-exam beforeunload guard. */
'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function makeElement(tagName) {
  const listeners = {};
  const el = {
    tagName: tagName.toUpperCase(),
    children: [],
    attributes: {},
    style: {},
    className: '',
    textContent: '',
    innerHTML: '',
    value: '',
    disabled: false,
    parentNode: null,
    classList: {
      add: function () {},
      remove: function () {},
      toggle: function () {},
    },
    get firstChild() { return this.children[0] || null; },
    setAttribute: function (name, value) {
      this.attributes[name] = value;
      if (name === 'id') this.id = value;
    },
    appendChild: function (child) {
      this.children.push(child);
      child.parentNode = this;
      return child;
    },
    removeChild: function (child) {
      this.children = this.children.filter(function (candidate) { return candidate !== child; });
      child.parentNode = null;
      return child;
    },
    addEventListener: function (type, callback) { listeners[type] = callback; },
    removeEventListener: function (type) { delete listeners[type]; },
    click: function () { if (listeners.click) listeners.click({ target: this }); },
    focus: function () {},
  };
  return el;
}

const app = makeElement('div');
app.id = 'app';
const body = makeElement('body');
const windowListeners = new Map();
const intervals = new Map();
let nextIntervalId = 1;

function walk(element, callback) {
  if (!element || typeof element !== 'object') return;
  callback(element);
  (element.children || []).forEach(function (child) { walk(child, callback); });
}

const document = {
  readyState: 'complete',
  body: body,
  addEventListener: function () {},
  removeEventListener: function () {},
  createElement: makeElement,
  createTextNode: function (text) { return { nodeType: 3, textContent: String(text), children: [] }; },
  getElementById: function (id) {
    let result = null;
    [app, body].forEach(function (root) {
      walk(root, function (element) { if (!result && element.id === id) result = element; });
    });
    return result;
  },
  querySelector: function () { return null; },
};

const questionSets = {
  exam1: Array.from({ length: 40 }, function (_, index) {
    return {
      id: 'Q' + String(index + 1).padStart(3, '0'),
      statement: 'Question ' + (index + 1) + '?',
      options: { A: 'A', B: 'B', C: 'C', D: 'D' },
      correctAnswer: 'A',
      chapter: 1,
    };
  }),
};
const realBankContext = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf8'), realBankContext);
questionSets.exam5 = realBankContext.window.questionSets.exam5;

const context = {
  document: document,
  console: console,
  Math: Math,
  Date: Date,
  Set: Set,
  Map: Map,
  questionSets: questionSets,
  ExamStats: {
    keepScreenAwake: function () {},
    saveAttempt: function () {},
  },
  ExamGrading: {
    formatStatement: function (text) { return String(text); },
    calculateResults: function () { return { score: 0, total: 40, details: [] }; },
    generateResultsHTML: function () { return makeElement('div'); },
  },
  setInterval: function (callback) {
    const id = nextIntervalId++;
    intervals.set(id, callback);
    return id;
  },
  clearInterval: function (id) { intervals.delete(id); },
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  scrollTo: function () {},
  addEventListener: function (type, callback) {
    const list = windowListeners.get(type) || [];
    list.push(callback);
    windowListeners.set(type, list);
  },
  removeEventListener: function (type, callback) {
    windowListeners.set(type, (windowListeners.get(type) || []).filter(function (fn) { return fn !== callback; }));
  },
};
context.window = context;
context.globalThis = context;

const engineSource = fs.readFileSync(path.join(__dirname, 'engine.js'), 'utf8');
vm.runInNewContext(engineSource + '\n;globalThis.ExamEngine = ExamEngine;', context);

for (let examId = 1; examId <= 13; examId++) {
  const page = fs.readFileSync(path.join(__dirname, '..', 'exam' + examId + '.html'), 'utf8');
  assert(page.includes('src="js/engine.js?v=3"'),
    'exam' + examId + '.html should load the updated exit guard instead of a cached engine');
  assert(page.includes('src="js/questions.js?v=3"'),
    'exam' + examId + '.html should load the new question-bank revision');
  assert(page.includes('src="js/grading.js?v=4"') && page.includes('src="js/statistics.js?v=4"') &&
    page.includes('src="js/slides.js?v=2"'),
    'exam' + examId + '.html should invalidate cached grading, history, and slide code');
}

context.ExamEngine.initExam(1);
assert.strictEqual((windowListeners.get('beforeunload') || []).length, 0,
  'the setup screen should not warn before the exam starts');

let startButton = null;
walk(app, function (element) { if (element.textContent === 'Start Exam') startButton = element; });
assert(startButton, 'exam start button should be rendered');
startButton.click();

const state = context.ExamEngine.getState();
assert.strictEqual(state.configDone, true, 'exam should be active after starting');
const unloadHandlers = windowListeners.get('beforeunload') || [];
assert.strictEqual(unloadHandlers.length, 1, 'one beforeunload guard should be installed');

let prevented = false;
const unloadEvent = {
  preventDefault: function () { prevented = true; },
  returnValue: undefined,
};
unloadHandlers[0](unloadEvent);
assert.strictEqual(prevented, true, 'leaving during an active exam should be blocked pending browser confirmation');
assert.match(unloadEvent.returnValue, /sair do exame em curso/i);
assert.strictEqual(state.submitted, false, 'requesting the exit confirmation must not submit the exam');

state.remaining = 1;
const tick = intervals.get(state.interval);
assert(tick, 'exam timer should be running');
tick();
assert.strictEqual(state.submitted, true, 'timer completion should finish the exam');
assert.strictEqual((windowListeners.get('beforeunload') || []).length, 0,
  'completed exams should remove the exit guard');

const pinnedPositions = new Set();
const randomValues = [0, 0.1, 0.25, 0.5, 0.75, 0.9, 0.99, 0.33, 0.66, 0.2, 0.8, 0.45];
for (const randomValue of randomValues) {
  context.Math = { floor: Math.floor, random: function () { return randomValue; } };
  context.ExamEngine.initExam(5);
  const selected = context.ExamEngine.getState().questions;
  assert.strictEqual(selected.length, 40, 'chapter 5 exam stays at 40 questions');
  const position = selected.findIndex(question => question.id === 'Q1170');
  assert.notStrictEqual(position, -1, 'Q1170 / FL-5.1.2 must appear in every chapter 5 test');
  pinnedPositions.add(position);
}
assert(pinnedPositions.size > 1, 'FL-5.1.2 should move to a random position among the questions');

console.log('PASS  exit guard and chapter-5 FL-5.1.2 randomized placement');
