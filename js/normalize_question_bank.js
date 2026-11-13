'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const file = path.join(__dirname, 'questions.js');
const source = fs.readFileSync(file, 'utf8');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);
const bank = context.window.questionSets;
const letterOrder = ['A', 'B', 'C', 'D'];
const changes = { optionOrder: 0, feedbackLabels: 0, correctClaims: 0 };
const unresolved = [];

function orderedByLetter(value) {
  const result = {};
  letterOrder.forEach(function (letter) {
    if (Object.prototype.hasOwnProperty.call(value || {}, letter)) result[letter] = value[letter];
  });
  Object.keys(value || {}).filter(function (key) { return !letterOrder.includes(key); })
    .sort().forEach(function (key) { result[key] = value[key]; });
  return result;
}

function normalizeCorrectClaims(text, correctAnswer, questionId, field) {
  return String(text || '').replace(/\b([A-D])\s+is correct\b/gi, function (claim, letter) {
    if (letter === correctAnswer) return claim;
    changes.correctClaims++;
    return correctAnswer + ' is correct';
  });
}

function repairOptionLabel(text, key, options, questionId, field) {
  const match = String(text || '').match(/^(\s*(?:❌\s*Incorrect:\s*)?Option\s+)([A-D])(\s*\(\s*[“"])([\s\S]*?)([”"]\s*\))/i);
  if (!match || match[2] === key) return text;
  const quotedText = match[4].trim().replace(/\s+/g, ' ');
  const keyedText = String(options[key] || '').trim().replace(/\s+/g, ' ');
  if (quotedText !== keyedText) {
    unresolved.push(questionId + '.' + field + '[' + key + '] cites ' + match[2] + ' but quoted text does not match the keyed option');
    return text;
  }
  changes.feedbackLabels++;
  return match[1] + key + match[3] + match[4] + match[5] + String(text).slice(match[0].length);
}

Object.keys(bank).forEach(function (setName) {
  (bank[setName] || []).forEach(function (question) {
    const beforeOrder = Object.keys(question.options || {}).join('');
    question.options = orderedByLetter(question.options);
    if (beforeOrder !== Object.keys(question.options).join('')) changes.optionOrder++;

    ['incorrectFeedback', 'optionExplanations'].forEach(function (field) {
      const entries = question[field] || {};
      Object.keys(entries).forEach(function (key) {
        entries[key] = repairOptionLabel(entries[key], key, question.options, question.id, field);
        entries[key] = normalizeCorrectClaims(entries[key], question.correctAnswer, question.id, field);
      });
      question[field] = orderedByLetter(entries);
    });

    question.explanation = normalizeCorrectClaims(question.explanation, question.correctAnswer, question.id, 'explanation');
    question.correctFeedback = normalizeCorrectClaims(question.correctFeedback, question.correctAnswer, question.id, 'correctFeedback');
    if (/^exam(?:10|11|12|13)$/.test(setName) &&
        /^ASTQB official sample\s*[—-]\s*/i.test(question.examTip || '')) {
      question.examTip = question.examTip.replace(/^ASTQB official sample\s*[—-]\s*/i, 'Practice reference — ');
    }

    question.optionExplanations = orderedByLetter(question.optionExplanations);
    question.incorrectFeedback = orderedByLetter(question.incorrectFeedback);
  });
});

if (unresolved.length) {
  console.error('Unresolved option-label references:');
  unresolved.forEach(function (item) { console.error('  ' + item); });
  process.exitCode = 1;
}

console.log(JSON.stringify({
  questions: Object.values(bank).reduce(function (sum, set) { return sum + set.length; }, 0),
  changes: changes,
  unresolved: unresolved.length,
  mode: process.argv.includes('--write') ? 'write' : 'dry-run',
}, null, 2));

if (process.argv.includes('--write') && !process.exitCode) {
  fs.writeFileSync(file, 'window.questionSets = ' + JSON.stringify(bank, null, 4) + ';\n', 'utf8');
}
