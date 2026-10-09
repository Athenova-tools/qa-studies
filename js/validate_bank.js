/**
 * Structural validation for the ISTQB CTFL v4.0.1 question bank.
 * Usage: node validate_bank.js [path/to/questions.js]
 */
const fs = require('fs');
const path = require('path');

const FILE = process.argv[2] || path.join(__dirname, 'questions.js');
const src = fs.readFileSync(FILE, 'utf8');

const errors = [];
const warnings = [];
const fail = m => errors.push(m);
const warn = m => warnings.push(m);

/* 1. The file must parse as JavaScript and expose the bank. */
global.window = {};
try {
  // eslint-disable-next-line no-eval
  (0, eval)(src);
} catch (e) {
  console.error('FATAL: questions.js does not parse — ' + e.message);
  process.exit(1);
}
const bank = global.window.questionSets;
if (!bank || typeof bank !== 'object') {
  console.error('FATAL: window.questionSets missing');
  process.exit(1);
}

/* 2. Compare against the pre-audit backup for ID and count integrity. */
const BACKUP = path.join(__dirname, 'questions.backup_pre_audit.txt');
let backupIds = null;
let backupCount = null;
if (fs.existsSync(BACKUP)) {
  global.window = {};
  // eslint-disable-next-line no-eval
  (0, eval)(fs.readFileSync(BACKUP, 'utf8'));
  const prev = global.window.questionSets;
  backupIds = new Set();
  backupCount = 0;
  for (const set of Object.keys(prev)) {
    for (const q of prev[set]) {
      backupIds.add(q.id);
      backupCount++;
    }
  }
}

/* 3. Field-by-field validation. */
const REQUIRED = [
  'id', 'statement', 'options', 'correctAnswer', 'explanation',
  'correctFeedback', 'incorrectFeedback', 'optionExplanations',
  'chapter', 'section', 'subsection', 'learningObjective',
  'kLevel', 'difficulty', 'keywords', 'examTip', 'memoryAid',
];
const LETTERS = ['A', 'B', 'C', 'D'];
const VALID_K = ['K1', 'K2', 'K3'];
const VALID_DIFF = ['Easy', 'Medium', 'Hard'];

const ids = [];
const idsSeen = new Set();
const stmtSeen = new Map();
let total = 0;
const keyDist = {};
const loCount = {};

const norm = s =>
  String(s || '').replace(/^[^:]*:\s*/, '').replace(/[^a-z0-9]/gi, '').toLowerCase();

for (const setName of Object.keys(bank)) {
  const list = bank[setName];
  if (!Array.isArray(list)) {
    fail(`Set "${setName}" is not an array`);
    continue;
  }
  for (const q of list) {
    total++;
    const where = `${q.id || '<no id>'} (${setName})`;

    /* Required fields present and non-empty. */
    for (const f of REQUIRED) {
      if (!(f in q)) fail(`${where}: missing field "${f}"`);
      else if (q[f] === '' || q[f] === null || q[f] === undefined) {
        fail(`${where}: empty field "${f}"`);
      }
    }

    /* ID integrity. */
    if (idsSeen.has(q.id)) fail(`${where}: duplicate id`);
    idsSeen.add(q.id);
    ids.push(q.id);

    /* Options: exactly A-D, non-empty, distinct. */
    const keys = Object.keys(q.options || {});
    if (keys.length !== 4) {
      fail(`${where}: expected 4 options, found ${keys.length} (${keys.join(',')})`);
    }
    for (const L of LETTERS) {
      if (!(L in (q.options || {}))) fail(`${where}: option "${L}" is missing`);
      else if (typeof q.options[L] !== 'string' || !q.options[L].trim()) {
        fail(`${where}: option "${L}" is empty or not a string`);
      }
    }
    const optVals = LETTERS.map(L => (q.options || {})[L]);
    if (new Set(optVals).size !== optVals.length) fail(`${where}: duplicate option text`);

    /* correctAnswer must be a single existing option letter. */
    const ca = q.correctAnswer;
    if (typeof ca !== 'string') {
      fail(`${where}: correctAnswer is not a string ("${ca}")`);
    } else if (!LETTERS.includes(ca)) {
      fail(`${where}: correctAnswer "${ca}" is not a single option letter`);
    } else if (!(ca in (q.options || {}))) {
      fail(`${where}: correctAnswer "${ca}" has no matching option`);
    } else {
      keyDist[ca] = (keyDist[ca] || 0) + 1;
    }

    /* incorrectFeedback must cover exactly the non-key options. */
    const needWrong = LETTERS.filter(L => L !== ca).sort().join('');
    const gotWrong = Object.keys(q.incorrectFeedback || {}).sort().join('');
    if (needWrong !== gotWrong) {
      fail(`${where}: incorrectFeedback keys "${gotWrong}" but expected "${needWrong}"`);
    }

    /* optionExplanations must cover all four options. */
    const gotOE = Object.keys(q.optionExplanations || {}).sort().join('');
    if (gotOE !== 'ABCD') {
      fail(`${where}: optionExplanations keys "${gotOE}" but expected "ABCD"`);
    }

    /* Feedback must agree with the per-option explanations. */
    if (typeof ca === 'string' && q.optionExplanations && q.correctFeedback) {
      if (norm(q.optionExplanations[ca]) !== norm(q.correctFeedback)) {
        warn(`${where}: correctFeedback differs from optionExplanations["${ca}"]`);
      }
      for (const L of LETTERS) {
        if (L === ca) continue;
        if (norm(q.optionExplanations[L]) !== norm((q.incorrectFeedback || {})[L])) {
          warn(`${where}: incorrectFeedback["${L}"] differs from optionExplanations["${L}"]`);
        }
      }
    }

    /* Enumerated metadata. */
    if (!VALID_K.includes(q.kLevel)) fail(`${where}: kLevel "${q.kLevel}" invalid`);
    if (!VALID_DIFF.includes(q.difficulty)) fail(`${where}: difficulty "${q.difficulty}" invalid`);
    if (!Array.isArray(q.keywords) || !q.keywords.length) {
      fail(`${where}: keywords must be a non-empty array`);
    }
    if (!/^FL-\d+\.\d+\.\d+$/.test(q.learningObjective || '')) {
      fail(`${where}: learningObjective "${q.learningObjective}" malformed`);
    }
    loCount[q.learningObjective] = (loCount[q.learningObjective] || 0) + 1;

    /* learningObjective must match the subsection it claims. */
    if (q.learningObjective !== 'FL-' + q.subsection) {
      fail(`${where}: learningObjective "${q.learningObjective}" does not match subsection "${q.subsection}"`);
    }

    /* No leftover placeholder text. */
    if (/\b(TODO|FIXME|TBD|XXX|Lorem ipsum)\b/i.test(JSON.stringify(q))) {
      fail(`${where}: placeholder text found`);
    }

    /* Statements must be unique across the bank. */
    const normStmt = (q.statement || '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (normStmt.length > 12 && stmtSeen.has(normStmt)) {
      fail(`${where}: duplicate statement text (also ${stmtSeen.get(normStmt)})`);
    } else if (normStmt.length > 12) {
      stmtSeen.set(normStmt, q.id);
    }
  }
}

/* 4. Formatting round-trip: canonical 4-space JSON. */
const rebuilt = 'window.questionSets = ' + JSON.stringify(bank, null, 4) + ';\n';
if (rebuilt !== src) {
  fail('File is not in canonical 4-space JSON format (round-trip mismatch)');
}

/* 5. Integrity against the backup. */
if (backupIds) {
  const nowIds = new Set(ids);
  const missing = [...backupIds].filter(i => !nowIds.has(i));
  const added = ids.filter(i => !backupIds.has(i));
  if (missing.length) fail(`IDs lost during editing: ${missing.join(', ')}`);
  if (added.length) fail(`Unexpected new IDs: ${added.join(', ')}`);
  if (total !== backupCount) fail(`Question count changed: ${backupCount} -> ${total}`);
}

/* 6. Answer-key balance sanity. */
const spread = LETTERS.map(L => keyDist[L] || 0);
if (Math.max(...spread) - Math.min(...spread) > total * 0.1) {
  warn(`Answer key distribution is skewed: ${LETTERS.map((L, i) => L + '=' + spread[i]).join(' ')}`);
}

/* Report. */
console.log('Question bank validation: ' + FILE);
console.log('  sets: ' + Object.keys(bank).length);
console.log('  questions: ' + total);
console.log('  answer key distribution: ' + LETTERS.map(L => L + '=' + (keyDist[L] || 0)).join('  '));
console.log('  distinct learning objectives: ' + Object.keys(loCount).length);
if (backupIds) {
  console.log('  compared against backup: ' + backupCount + ' questions, ' + backupIds.size + ' ids');
}
console.log('');
if (warnings.length) {
  console.log('WARNINGS (' + warnings.length + '):');
  warnings.forEach(w => console.log('  ! ' + w));
  console.log('');
}
if (errors.length) {
  console.log('ERRORS (' + errors.length + '):');
  errors.forEach(e => console.log('  x ' + e));
  process.exit(1);
}
console.log('RESULT: PASS — all structural checks passed.');