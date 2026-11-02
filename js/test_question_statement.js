'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const context = { document: { createElement: () => ({}) } };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'grading.js'), 'utf8') +
  '\nglobalThis.ExamGrading = ExamGrading;', context);
const format = context.ExamGrading.formatStatement;

assert.strictEqual(format('A normal statement.'), 'A normal statement.');
assert.strictEqual(format('first\nsecond'), 'first\nsecond');
assert.strictEqual(format('first\\nsecond'), 'first\nsecond');
assert.strictEqual(format('first\\\\nsecond'), 'first\nsecond');
assert.strictEqual(format('first\\r\\nsecond'), 'first\nsecond');
assert.strictEqual(format('first\r\nsecond'), 'first\nsecond');
assert.strictEqual(format('C:\\path\\file'), 'C:\\path\\file');

const bank = { window: {} };
vm.createContext(bank);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf8'), bank);
const q104 = Object.values(bank.window.questionSets).flat().find(q => q.id === 'Q104');
assert(q104, 'Q104 exists');
const rendered = format(q104.statement);
assert(rendered.includes("if (temperature > 100) {\n    print('DANGER: HIGH TEMPERATURE');"));
assert(rendered.includes("print('Temperature reading complete.');\n\nWhat is the minimum"));
assert(!rendered.includes('\\n'));

console.log('Question statement formatting tests passed (including Q104).');
