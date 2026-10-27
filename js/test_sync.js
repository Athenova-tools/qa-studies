/**
 * Node test harness for the attempt export/import sync logic.
 * Usage: node js/test_sync.js [path/to/statistics.js] [path/to/grading.js]
 *
 * Mocks just enough browser surface (localStorage, document, navigator,
 * Blob/URL, download anchors) to exercise ExamStats/ExamGrading.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const vm = require('vm');

const STATS_FILE = process.argv[2] || path.join(__dirname, 'statistics.js');
const GRADING_FILE = process.argv[3] || path.join(__dirname, 'grading.js');

/* ------------------------------------------------------------------ */
/* Browser environment mocks                                          */
/* ------------------------------------------------------------------ */

function makeLocalStorage() {
  const map = new Map();
  return {
    getItem: k => (map.has(String(k)) ? map.get(String(k)) : null),
    setItem: (k, v) => { map.set(String(k), String(v)); },
    removeItem: k => { map.delete(String(k)); },
    clear: () => map.clear(),
    key: i => Array.from(map.keys())[i] || null,
    get length() { return map.size; },
  };
}

global.localStorage = makeLocalStorage();
global.window = global;
global.navigator = { userAgent: 'Mozilla/5.0 (X11; Linux x86_64) Chrome/120.0' };

const createdElements = [];
function mkEl(tag) {
  const el = {
    tagName: tag,
    style: {},
    children: [],
    className: '',
    textContent: '',
    innerHTML: '',
    dataset: {},
    get firstChild() { return this.children[0] || null; },
    setAttribute: function (k, v) { this[k] = v; },
    appendChild: function (c) { this.children.push(c); return c; },
    removeChild: function (c) { this.children = this.children.filter(x => x !== c); },
    addEventListener: function (type, fn) { this['on_' + type] = fn; },
    click: function () { this._clicked = true; },
  };
  createdElements.push(el);
  return el;
}
global.document = {
  readyState: 'loading',
  addEventListener: () => {},
  removeEventListener: () => {},
  getElementById: () => null,
  querySelector: () => null,
  createElement: (tag) => mkEl(tag),
  createTextNode: (t) => ({ nodeType: 3, textContent: String(t), children: [] }),
  body: { appendChild: () => {}, removeChild: () => {} },
};

/* Capture Blob downloads */
const downloaded = [];
class CapturedBlob {
  constructor(parts, opts) { this.parts = parts; this.type = (opts || {}).type || ''; }
  async text() { return this.parts.join(''); }
}
global.Blob = CapturedBlob;
global.URL.createObjectURL = (blob) => { downloaded.push(blob); return 'blob:fake-url'; };
global.URL.revokeObjectURL = () => {};

/* Unique ids from Date.now during the test run */
let clock = 1760000000000;
Date.now = () => ++clock;

/* Question bank fixture */
global.questionSets = {
  exam1: [
    { id: 'Q001', statement: 'Statement one?', options: { A: 'a1', B: 'b1', C: 'c1', D: 'd1' },
      correctAnswer: 'A', explanation: 'Expl 1', chapter: 1, section: '1.1', subsection: '1.1.1',
      learningObjective: 'FL-1.1.1', kLevel: 'K1', keywords: ['k'], examTip: 'tip', memoryAid: 'aid' },
    { id: 'Q002', statement: 'Statement two?', options: { A: 'a2', B: 'b2', C: 'c2', D: 'd2' },
      correctAnswer: 'D', explanation: 'Expl 2', chapter: 2, section: '2.1', subsection: '2.1.1',
      learningObjective: 'FL-2.1.1', kLevel: 'K2', keywords: ['k'], examTip: 'tip', memoryAid: 'aid' },
  ],
};

/* Load app modules; keep their const bindings on globalThis */
function load(file, globalName) {
  const src = fs.readFileSync(file, 'utf8');
  (0, eval)(src + '\n;globalThis.' + globalName + ' = ' + globalName + ';');
}
load(GRADING_FILE, 'ExamGrading');
load(STATS_FILE, 'ExamStats');

const EG = global.ExamGrading;
const ES = global.ExamStats;

const STORAGE_KEY = 'istqb_ctfl_attempts';
const FULL_KEY_PREFIX = 'istqb_ctfl_full_';

/* Capture what the Android bridge would receive */
let bridgeCapture = null;

/* ------------------------------------------------------------------ */
/* Tests                                                               */
/* ------------------------------------------------------------------ */

let passed = 0;
async function ok(name, fn) {
  try {
    const r = fn();
    if (r && typeof r.then === 'function') await r;
    passed++;
    console.log('  PASS  ' + name);
  } catch (e) {
    console.log('  FAIL  ' + name);
    console.log('        ' + (e && e.message ? e.message : e));
    if (e && e.stack) console.log(e.stack.split('\n').slice(0, 5).join('\n'));
    process.exitCode = 1;
  }
}

function getAttemptsRaw() {
  const d = localStorage.getItem(STORAGE_KEY);
  return d ? JSON.parse(d) : [];
}

function makeResults(opts) {
  opts = opts || {};
  const answers = opts.answers || { 0: 'A', 1: 'D' };
  const flagged = new Set(opts.flagged || []);
  const notes = opts.notes || {};
  const results = EG.calculateResults(answers, global.questionSets.exam1, flagged, notes);
  results.examId = opts.examId || 1;
  results.timeSpent = '10:00';
  results.chapterPerformance = { 'Chapter 1': { correct: 1, total: 1 }, 'Chapter 2': { correct: 1, total: 1 } };
  return results;
}

async function main() {
  console.log('Test suite: attempt export/import sync');
  console.log('  stats:    ' + STATS_FILE);
  console.log('  grading:  ' + GRADING_FILE);
  console.log('');

  /* ---- T1: calculateResults emits compact answers ---- */
  await ok('calculateResults emits compact answers with qid/selection/flag/note', () => {
    const r = makeResults({ answers: { 0: 'B', 1: null }, flagged: [0], notes: { 0: 'my note' } });
    assert(Array.isArray(r.answers), 'answers missing');
    assert.strictEqual(r.answers.length, 2);
    assert.strictEqual(r.answers[0].i, 0);
    assert.strictEqual(r.answers[0].qid, 'Q001');
    assert.strictEqual(r.answers[0].sel, 'B');
    assert.strictEqual(r.answers[0].f, true);
    assert.strictEqual(r.answers[0].n, 'my note');
    assert.strictEqual(r.answers[1].qid, 'Q002');
    assert.strictEqual(r.answers[1].sel, null);
    assert.strictEqual(r.answers[1].f, undefined, 'f should be omitted when false');
    assert.strictEqual(r.answers[1].n, undefined, 'n should be omitted when empty');
    assert.strictEqual(r.score, 0);
    assert.strictEqual(r.unansweredCount, 1);
    assert.strictEqual(r.incorrectCount, 1);
  });

  /* ---- T2: saveAttempt stores compact answers, origin, stamped id; no eviction ---- */
  await ok('saveAttempt stores answers (not details), stamps result.id, sets origin, never evicts', () => {
    /* Seed a legacy full record + its summary (old id) */
    const legacyId = 111;
    const legacyAttempt = { id: legacyId, date: '1/1/2026 10:00 AM', examId: 1, score: 30,
      total: 40, percentage: 75, passed: true, correctCount: 30, incorrectCount: 10,
      unansweredCount: 0, timeSpent: '40:00', origin: 'web' };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([legacyAttempt]));
    localStorage.setItem(FULL_KEY_PREFIX + legacyId, JSON.stringify({ id: legacyId, details: [{ index: 0, question: 'old' }] }));

    const r = makeResults();
    ES.saveAttempt(r);

    assert(typeof r.id === 'number', 'result.id not stamped');
    const attempts = getAttemptsRaw();
    assert.strictEqual(attempts.length, 2, 'attempt not appended');
    const saved = attempts.find(a => a.id === r.id);
    assert(saved, 'saved summary missing');
    assert.strictEqual(saved.origin, 'web', 'origin missing on new attempt');
    assert.strictEqual(saved.score, 2);

    const full = JSON.parse(localStorage.getItem(FULL_KEY_PREFIX + r.id));
    assert(full, 'full record missing');
    assert(Array.isArray(full.answers), 'answers missing in full record');
    assert.strictEqual(full.answers.length, 2);
    assert(!('details' in full), 'details should not be stored for new attempts');
    assert.strictEqual(full.id, r.id);

    const legacyFull = localStorage.getItem(FULL_KEY_PREFIX + legacyId);
    assert(legacyFull !== null, 'legacy full record was evicted!');
  });

  /* ---- T3: getAttempts backfills origin on legacy records ---- */
  await ok('getAttempts backfills origin for records created before the feature', () => {
    localStorage.clear();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([{ id: 1, date: 'd', examId: 1, score: 1 }]));
    const list = ES.getAttempts();
    assert.strictEqual(list.length, 1);
    assert.strictEqual(list[0].origin, 'web', 'backfill failed');
    const persisted = getAttemptsRaw();
    assert.strictEqual(persisted[0].origin, 'web', 'backfill not persisted');
  });

  /* ---- T4: rebuildDetails reconstructs the review from answers ---- */
  await ok('rebuildDetails rebuilds per-question details from compact answers', () => {
    const answers = [
      { i: 0, qid: 'Q001', sel: 'B', f: true, n: 'note!' },
      { i: 1, qid: 'Q002', sel: null },
    ];
    const d = EG.rebuildDetails(answers);
    assert(Array.isArray(d) && d.length === 2);
    assert.strictEqual(d[0].question, 'Statement one?');
    assert.strictEqual(d[0].selectedAnswer, 'B');
    assert.strictEqual(d[0].correctAnswer, 'A');
    assert.strictEqual(d[0].isCorrect, false);
    assert.strictEqual(d[0].flagged, true);
    assert.strictEqual(d[0].note, 'note!');
    assert.strictEqual(d[0].explanation, 'Expl 1');
    assert.strictEqual(d[1].selectedAnswer, null);
    assert.strictEqual(d[1].isCorrect, false);
    assert.strictEqual(d[1].isCorrect, false);
    assert.strictEqual(d[1].flagged, false);
    assert.strictEqual(EG.rebuildDetails([{ i: 0, qid: 'QXXX', sel: 'A' }]), null, 'unknown qid must fail');
    assert.strictEqual(EG.rebuildDetails(null), null);
    assert.strictEqual(EG.rebuildDetails([]), null);
  });

  /* ---- T5: export payload contains all attempts and review records ---- */
  await ok('buildExportPayload exports every attempt with its review record', () => {
    localStorage.clear();
    const ids = [];
    for (let i = 0; i < 7; i++) ids.push(ES.saveAttempt(makeResults({ examId: (i % 3) + 1 })) || undefined);
    const attempts = ES.getAttempts();
    assert.strictEqual(attempts.length, 7, 'expected 7 attempts');
    const payload = ES.buildExportPayload(null);
    assert.strictEqual(payload.format, 'istqb-attempts');
    assert.strictEqual(payload.version, 1);
    assert.strictEqual(payload.attempts.length, 7);
    assert.strictEqual(Object.keys(payload.fullResults).length, 7, 'every attempt must carry review data');
    attempts.forEach(a => {
      assert(payload.fullResults[a.id], 'missing full for ' + a.id);
      assert(Array.isArray(payload.fullResults[a.id].answers), 'answers missing');
      assert.strictEqual(a.origin, 'web');
    });
    /* single-attempt export */
    const single = ES.buildExportPayload([attempts[3].id]);
    assert.strictEqual(single.attempts.length, 1);
    assert.strictEqual(Object.keys(single.fullResults).length, 1);
  });

  /* ---- T6: download via Android bridge (base64) and via web Blob ---- */
  await ok('downloadJSON uses the Android bridge when available', async () => {
    localStorage.clear();
    ES.saveAttempt(makeResults({ examId: 9 }));
    const captured = [];
    global.window.IstqbNative = {
      saveJsonFile: (name, b64) => captured.push({ name, b64 }),
    };
    try {
      const okResult = ES.exportAllAttempts();
      assert.strictEqual(okResult, true, 'bridge download failed');
      assert.strictEqual(captured.length, 1, 'bridge not called');
      assert(/^istqb-attempts-all-WEB-\d{8}-\d{6}\.json$/.test(captured[0].name), 'bad WEB filename: ' + captured[0].name);
      /* Android UA -> sigla AND no nome */
      var realUA = global.navigator.userAgent;
      global.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 14) Chrome/120';
      try {
        ES.exportAllAttempts();
      } finally {
        global.navigator.userAgent = realUA;
      }
      assert.strictEqual(captured.length, 2, 'second export did not use the bridge');
      assert(/^istqb-attempts-all-AND-\d{8}-\d{6}\.json$/.test(captured[1].name), 'bad AND filename: ' + captured[1].name);
      const decoded = JSON.parse(Buffer.from(captured[0].b64, 'base64').toString('utf8'));
      assert.strictEqual(decoded.format, 'istqb-attempts');
      assert.strictEqual(decoded.attempts.length, 1, 'expected the single seeded attempt');
      assert(decoded.fullResults[String(decoded.attempts[0].id)], 'review record missing in bridge payload');
    } finally {
      delete global.window.IstqbNative;
    }
  });

  await ok('downloadJSON falls back to a Blob <a download> (web)', async () => {
    downloaded.length = 0;
    createdElements.length = 0;
    const okResult = ES.exportAllAttempts();
    assert.strictEqual(okResult, true);
    assert.strictEqual(downloaded.length, 1, 'blob not created');
    const json = JSON.parse(await downloaded[0].text());
    assert.strictEqual(json.format, 'istqb-attempts');
    const anchor = createdElements.filter(e => e.tagName === 'a').pop();
    assert(anchor, 'anchor not created');
    assert(/^istqb-attempts-all-WEB-\d{8}-\d{6}\.json$/.test(anchor.download), 'bad WEB filename: ' + anchor.download);
    assert(anchor._clicked, 'download not triggered');
  });

  /* ---- T7: incremental import — the core rules ---- */
  await ok('importParsed: add new, overwrite previously imported, keep local, heal review data', () => {
    localStorage.clear();

    /* Local attempt taken on this device (never in any file) */
    const localId = 1000;
    const localSummary = { id: localId, date: '1/2/2026 09:00 AM', examId: 2, score: 31,
      total: 40, percentage: 78, passed: true, correctCount: 31, incorrectCount: 9,
      unansweredCount: 0, timeSpent: '45:00', origin: 'web' };
    const localFull = { id: localId, score: 31, details: [{ index: 0, question: 'local detail' }] };
    /* Local summary without review data (to test healing) */
    const healId = 1500;
    const healSummary = { id: healId, date: '1/2/2026 10:00 AM', examId: 3, score: 20,
      total: 40, percentage: 50, passed: false, correctCount: 20, incorrectCount: 20,
      unansweredCount: 0, timeSpent: '50:00', origin: 'web' };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([localSummary, healSummary]));
    localStorage.setItem(FULL_KEY_PREFIX + localId, JSON.stringify(localFull));

    /* File from another device */
    const file = {
      format: 'istqb-attempts', version: 1, origin: 'android',
      attempts: [
        { id: localId, date: 'CHANGED', examId: 2, score: 99, total: 40, percentage: 99,
          passed: true, correctCount: 99, incorrectCount: 0, unansweredCount: 0, timeSpent: '1:00' },
        { id: healId, date: 'heal-file', examId: 3, score: 21 },
        { id: 2000, date: 'phone attempt', examId: 5, score: 35, total: 40, percentage: 88,
          passed: true, correctCount: 35, incorrectCount: 5, unansweredCount: 0, timeSpent: '30:00' },
        { id: 'bad-entry' },
      ],
      fullResults: {
        1000: { id: 1000, score: 99, details: [{ index: 0, question: 'SHOULD NOT REPLACE' }] },
        1500: { id: 1500, score: 21, answers: [{ i: 0, qid: 'Q001', sel: 'A' }, { i: 1, qid: 'Q002', sel: 'D' }] },
        2000: { id: 2000, score: 35, answers: [{ i: 0, qid: 'Q001', sel: 'A' }, { i: 1, qid: 'Q002', sel: 'D' }] },
        3000: { id: 3000, orphan: true },
      },
    };

    const report = ES.importParsed(JSON.parse(JSON.stringify(file)));
    assert.strictEqual(report.added, 1, 'added');
    assert.strictEqual(report.updated, 0, 'updated');
    assert.strictEqual(report.kept, 2, 'kept (local 1000 + 1500)');
    assert.strictEqual(report.invalid, 1, 'invalid entry skipped');
    assert.strictEqual(report.orphans, 1, 'orphan full skipped');
    assert.strictEqual(report.fullAdded, 2, 'fullAdded (1500 heal + 2000)');
    assert.strictEqual(report.fullUpdated, 0, 'fullUpdated');

    let attempts = getAttemptsRaw();
    assert.strictEqual(attempts.length, 3);
    const nowLocal = attempts.find(a => a.id === localId);
    assert.deepStrictEqual(nowLocal, localSummary, 'LOCAL attempt was modified!');
    const nowHeal = attempts.find(a => a.id === healId);
    assert.strictEqual(nowHeal.score, 20, 'local heal summary must stay');
    const imported = attempts.find(a => a.id === 2000);
    assert(imported, 'new attempt missing');
    assert.strictEqual(imported.imported, true, 'imported flag missing');
    assert.strictEqual(imported.origin, 'android', 'origin from file not preserved');

    /* order ascending */
    const ids = attempts.map(a => a.id);
    assert.deepStrictEqual(ids, ids.slice().sort((a, b) => a - b), 'not sorted by id');

    /* local full untouched, heal added, imported stored */
    const localFullNow = JSON.parse(localStorage.getItem(FULL_KEY_PREFIX + localId));
    assert.deepStrictEqual(localFullNow, localFull, 'local review data overwritten!');
    const healedFull = JSON.parse(localStorage.getItem(FULL_KEY_PREFIX + healId));
    assert(Array.isArray(healedFull.answers), 'heal failed');
    const importedFull = JSON.parse(localStorage.getItem(FULL_KEY_PREFIX + 2000));
    assert(Array.isArray(importedFull.answers), 'imported answers missing');
    assert(localStorage.getItem(FULL_KEY_PREFIX + 3000) === null, 'orphan stored');

    /* Re-import the SAME file: imported records are overwritten, locals kept, nothing added */
    const report2 = ES.importParsed(JSON.parse(JSON.stringify(file)));
    assert.strictEqual(report2.added, 0, 're-import must add nothing new');
    assert.strictEqual(report2.updated, 1, 're-import must overwrite the imported record');
    assert.strictEqual(report2.kept, 2);
    attempts = getAttemptsRaw();
    assert.strictEqual(attempts.length, 3);

    /* A file with CHANGED content for an imported id updates it */
    const file2 = JSON.parse(JSON.stringify(file));
    file2.attempts = file2.attempts.filter(a => a.id === 2000);
    file2.attempts[0].score = 36;
    file2.attempts[0].percentage = 90;
    delete file2.fullResults[1000]; delete file2.fullResults[1500]; delete file2.fullResults[3000];
    const report3 = ES.importParsed(file2);
    assert.strictEqual(report3.added, 0);
    assert.strictEqual(report3.updated, 1);
    const updated = getAttemptsRaw().find(a => a.id === 2000);
    assert.strictEqual(updated.score, 36, 'imported record not refreshed from file');
    assert.strictEqual(updated.imported, true);
    const localAfter = getAttemptsRaw().find(a => a.id === localId);
    assert.deepStrictEqual(localAfter, localSummary, 'local attempt changed during re-import');
  });

  /* ---- T8: invalid files throw before touching storage ---- */
  await ok('importParsed rejects invalid files without modifying storage', () => {
    localStorage.clear();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([{ id: 42, origin: 'web' }]));
    const before = localStorage.getItem(STORAGE_KEY);
    assert.throws(() => ES.importParsed({ nope: true }), /unrecognized file format/);
    assert.throws(() => ES.importParsed({ attempts: 'x' }), /unrecognized file format/);
    assert.throws(() => ES.importParsed({ attempts: [], fullResults: [] }), /invalid fullResults/);
    assert.throws(() => ES.importParsed('not json object'), /unrecognized/);
    assert.strictEqual(localStorage.getItem(STORAGE_KEY), before, 'storage touched on invalid import');
  });

  /* ---- T9: full round trip device A -> device B ---- */
  await ok('round trip: A exports, B imports, B can rebuild every review', async () => {
    /* Device A */
    localStorage.clear();
    for (let i = 0; i < 3; i++) ES.saveAttempt(makeResults({ examId: 4, answers: { 0: 'A', 1: null } }));
    const payloadA = ES.buildExportPayload(null);
    const file = JSON.stringify(payloadA, null, 2);

    /* Device B (fresh storage) */
    localStorage.clear();
    const report = ES.importParsed(JSON.parse(file));
    assert.strictEqual(report.added, 3);
    assert.strictEqual(report.fullAdded, 3);
    const attemptsB = ES.getAttempts();
    assert.strictEqual(attemptsB.length, 3);
    attemptsB.forEach(a => {
      assert.strictEqual(a.imported, true);
      const full = JSON.parse(localStorage.getItem(FULL_KEY_PREFIX + a.id));
      const rebuilt = EG.rebuildDetails(full.answers);
      assert(rebuilt && rebuilt.length === 2, 'review not rebuildable for ' + a.id);
      assert.strictEqual(rebuilt[0].question, 'Statement one?');
      assert.strictEqual(rebuilt[1].selectedAnswer, null);
    });
    /* B re-exports: same content round-trips */
    const payloadB = ES.buildExportPayload(null);
    assert.strictEqual(payloadB.attempts.length, 3);
    assert.strictEqual(Object.keys(payloadB.fullResults).length, 3);
  });

  /* ---- T10: exportAttempt builds a single-exam file from memory fallback ---- */
  await ok('exportAttempt exports a single exam (storage + in-memory fallback)', () => {
    localStorage.clear();
    const r = makeResults({ examId: 7 });
    ES.saveAttempt(r);
    downloaded.length = 0;
    createdElements.length = 0;
    const okResult = ES.exportAttempt(r.id, r);
    assert.strictEqual(okResult, true);
    assert.strictEqual(downloaded.length, 1);
    /* No storage at all, memory fallback */
    localStorage.clear();
    downloaded.length = 0;
    createdElements.length = 0;
    const okResult2 = ES.exportAttempt(undefined, r);
    assert.strictEqual(okResult2, true, 'memory fallback export failed');
    assert.strictEqual(downloaded.length, 1);
  });


  /* ---- T11: rendering smoke — dashboard, buttons, origin icons ---- */
  await ok('renderStatsDashboard renders export/import buttons and origin icons', () => {
    localStorage.clear();
    for (let i = 0; i < 3; i++) ES.saveAttempt(makeResults({ examId: 5 }));

    const container = mkEl('div');
    const prevGet = document.getElementById;
    const withDashboard = (c) => (id) => (id === 'stats-dashboard' ? c : null);
    document.getElementById = withDashboard(container);
    try {
      ES.renderStatsDashboard();
    } finally {
      document.getElementById = prevGet;
    }

    const els = [];
    (function walk(e) { els.push(e); (e.children || []).forEach(walk); })(container);
    const texts = new Set(els.map(e => e.textContent));
    assert(texts.has('Recent Attempts'), 'missing Recent Attempts heading');
    assert(texts.has('\u2913 Export All JSON'), 'missing Export All button');
    assert(texts.has('\u2912 Import JSON'), 'missing Import button');
    const origins = els.filter(e => e.className === 'attempt-origin');
    assert.strictEqual(origins.length, 3, 'expected 3 origin icons, got ' + origins.length);
    origins.forEach(o => assert.strictEqual(o.title, 'Origin: Web'));

    /* Click Export All -> Blob download happens */
    downloaded.length = 0;
    const exportBtn = els.find(e => e.textContent === '\u2913 Export All JSON');
    assert(exportBtn && exportBtn.on_click, 'Export button has no click handler');
    assert.strictEqual(exportBtn.disabled, false, 'Export All should be enabled when attempts exist');
    exportBtn.on_click();
    assert.strictEqual(downloaded.length, 1, 'Export button did not trigger download');

    /* Click Import -> hidden file input created and clicked */
    const importBtn = els.find(e => e.textContent === '\u2912 Import JSON');
    assert(importBtn && importBtn.on_click, 'Import button has no click handler');
    importBtn.on_click();
    const inputs = createdElements.filter(e => e.tagName === 'input');
    assert(inputs.length >= 1, 'hidden file input not created');
    assert.strictEqual(inputs[0].type, 'file');
    assert(inputs[0]._clicked, 'file input not clicked');

    /* Empty state still shows the sync buttons */
    localStorage.clear();
    const container2 = mkEl('div');
    document.getElementById = withDashboard(container2);
    try {
      ES.renderStatsDashboard();
    } finally {
      document.getElementById = prevGet;
    }
    const els2 = [];
    (function walk2(e) { els2.push(e); (e.children || []).forEach(walk2); })(container2);
    const t2 = new Set(els2.map(e => e.textContent));
    assert(t2.has('\u2913 Export All JSON'), 'empty state missing Export All');
    assert(els2.some(e => e.className === 'stats-empty-state__message'), 'empty-state message should use compact spacing');
    assert(els2.some(e => e.className === 'stats-empty-state__actions'), 'empty-state actions should have no extra bottom gap');
    const emptyExportBtn = els2.find(e => e.textContent === '\u2913 Export All JSON');
    assert.strictEqual(emptyExportBtn.disabled, true, 'Export All should be disabled without attempts');
    assert(t2.has('\u2912 Import JSON'), 'empty state missing Import');
  });

  await ok('Recent Attempts page-size selector supports 10 and resets pagination', () => {
    localStorage.clear();
    for (let i = 0; i < 21; i++) ES.saveAttempt(makeResults({ examId: 5 }));

    const container = mkEl('div');
    const prevGet = document.getElementById;
    document.getElementById = id => id === 'stats-dashboard' ? container : null;
    try {
      ES.renderStatsDashboard();
      const all = [];
      (function walk(e) { all.push(e); (e.children || []).forEach(walk); })(container);
      const pageSize = all.filter(e => e.className === 'recent-page-size').pop();
      assert(pageSize, 'page-size selector missing');
      assert.deepStrictEqual(pageSize.children.map(option => option.textContent), ['--', '10', '20', '30', '50', '100']);
      const dashboardControls = all.find(e => e.children.includes(pageSize));
      const filterRow = all.find(e => e.children.some(child => child.textContent === 'Filter by exam:'));
      assert(filterRow && filterRow.style.includes('grid-column:1 / span 3'),
        'Filter by exam should occupy the left side of the shared controls row');
      assert(pageSize.style.includes('grid-column:7'),
        'page-size selector should share the Filter by exam row at its right side');
      const pageNav = all.find(e => e.children.some(child => child.textContent === '1/5'));
      assert(pageNav && pageNav.style.includes('grid-column:4'),
        'page indicator should align with the Percentage column');
      const pagination = all.find(e => e.children.includes(pageNav));
      assert(pagination && pagination.style.includes('display:contents'),
        'pagination should participate in the shared Filter by exam row');
      const table = all.find(e => e.tagName === 'table');
      assert(table && table.style.includes('table-layout:fixed'), 'table should use fixed tracks matching the controls');
      const columns = all.find(e => e.tagName === 'colgroup');
      assert.deepStrictEqual(columns.children.map(col => col.style.width), ['15%', '14%', '10%', '11%', '18%', '10%', '22%']);
      const filter = all.find(e => e.children.some(child => child.textContent === 'Filter by exam:'));
      assert(filter && all.indexOf(filter) < all.indexOf(pagination),
        'Filter by exam should appear before pagination controls');
      assert(dashboardControls.children.includes(filterRow) &&
        dashboardControls.children.includes(pagination) && dashboardControls.children.includes(pageSize),
        'Filter by exam, pagination and page-size selector should share one aligned row');
      const tbody = all.filter(e => e.tagName === 'tbody').pop();
      assert.strictEqual(tbody.children.length, 5, 'default page size remains five');

      pageSize.value = '10';
      assert.strictEqual(typeof pageSize.on_change, 'function', 'selector change handler missing');
      pageSize.on_change();
      const after = [];
      (function walk(e) { after.push(e); (e.children || []).forEach(walk); })(container);
      assert.strictEqual(after.filter(e => e.tagName === 'tbody').pop().children.length, 10,
        'selecting 10 should render ten attempts');
    } finally { document.getElementById = prevGet; }
  });

  await ok('Per-Chapter Performance sorts chapters numerically', () => {
    localStorage.clear();
    const result = makeResults({ examId: 5 });
    result.chapterPerformance = {
      'Chapter 6': { correct: 1, total: 1 },
      'Chapter 2': { correct: 1, total: 1 },
      'Chapter 10': { correct: 1, total: 1 },
      'Chapter 1': { correct: 1, total: 1 },
    };
    ES.saveAttempt(result);

    const container = mkEl('div');
    const prevGet = document.getElementById;
    document.getElementById = id => id === 'stats-dashboard' ? container : null;
    try { ES.renderStatsDashboard(); } finally { document.getElementById = prevGet; }

    const rows = [];
    (function walk(e) {
      if (e.children && e.children.length === 5 && /^Chapter \d+$/.test(e.children[0].textContent)) {
        rows.push(e.children[0].textContent);
      }
      (e.children || []).forEach(walk);
    })(container);
    assert.deepStrictEqual(rows.slice(0, 4), ['Chapter 1', 'Chapter 2', 'Chapter 6', 'Chapter 10']);
  });


  /* ---- T13: buildStudyPlan — subsections asc para rever ---- */
  await ok('buildStudyPlan agrupa respostas erradas por subsection em ordem ascendente', () => {
    const mk = (subsection, lo, isCorrect) => ({ subsection, learningObjective: lo, isCorrect });
    const results = { details: [
      mk('1.10.1', 'FL-1.10.1', false),
      mk('1.2.9', 'FL-1.2.9', false),
      mk('1.2.10', 'FL-1.2.10', false),
      mk('1.2.9', 'FL-1.2.9', false),
      mk('2.1.1', 'FL-2.1.1', true),
      mk('', '', false),
      { isCorrect: false },
    ]};
    const plan = EG.buildStudyPlan(results);
    assert.deepStrictEqual(plan.map(p => p.subsection), ['1.2.9', '1.2.10', '1.10.1'],
      'ordem numerica ascendente (1.10.1 por ultimo, nao lexicografica)');
    assert.strictEqual(plan[0].count, 2);
    assert.strictEqual(plan[1].count, 1);
    assert.deepStrictEqual(plan[0].objectives, ['FL-1.2.9']);
    assert.deepStrictEqual(EG.buildStudyPlan({}), []);
    assert.deepStrictEqual(EG.buildStudyPlan(null), []);
  });

  /* ---- T14: attemptSortValue para ordenar a tabela ---- */
  await ok('attemptSortValue compara data, tempo, exame e resultado', () => {
    assert.strictEqual(typeof ES.attemptSortValue({ date: '1/2/2026 09:00 AM' }, 'date'), 'number');
    assert(ES.attemptSortValue({ date: '1/2/2026 09:00 AM' }, 'date') <
           ES.attemptSortValue({ date: '1/3/2026 09:00 AM' }, 'date'), 'date asc failed');
    assert.strictEqual(ES.attemptSortValue({ timeSpent: '1:30' }, 'time'), 90);
    assert(ES.attemptSortValue({ timeSpent: '2:00' }, 'time') > ES.attemptSortValue({ timeSpent: '1:30' }, 'time'));
    assert.strictEqual(ES.attemptSortValue({ examId: 4 }, 'exam'), 4);
    assert(ES.attemptSortValue({ passed: true }, 'result') > ES.attemptSortValue({ passed: false }, 'result'));
    assert.strictEqual(ES.attemptSortValue({ percentage: '83%' }, 'percentage'), 83);
  });

  /* ---- T15: grelha do study plan + click abre Study Slides com backTo ---- */
  await ok('study plan em grelha e click abre slides da chapter com backTo', () => {
    const prevLocation = global.location;
    global.location = { href: 'review.html?id=7', search: '?id=7' };
    try {
      const mk = (subsection, lo) => ({
        subsection, learningObjective: lo, isCorrect: false,
        question: 'Q', options: ['A', 'B', 'C', 'D'], selectedAnswer: 'A', correctAnswer: 'B',
        optionExplanations: {},
      });
      const results = { details: [mk('1.4.1', 'FL-1.4.1'), mk('3.2.1', 'FL-3.2.1')] };
      const el = EG.generateResultsHTML(results);
      const els = [];
      (function walk(e) { els.push(e); (e.children || []).forEach(walk); })(el);
      const grids = els.filter(e => e.className === 'study-plan__grid');
      assert.strictEqual(grids.length, 1, 'grelha study-plan__grid presente');
      const items = grids[0].children;
      assert.strictEqual(items.length, 2, 'dois subsections na grelha');
      assert.strictEqual(items[0].role, 'button', 'item com role button');
      assert.strictEqual(typeof items[0].on_click, 'function', 'item clicavel');
      items[0].on_click({});
      assert.strictEqual(global.location.href,
        'slides/chapter1.html?backTo=review.html%3Fid%3D7#1.4',
        'click navega para chapter1 com backTo e ancora 1.4');
      global.location.href = 'review.html?id=7'; /* simula regresso ao review */
      items[1].on_click({});
      assert.strictEqual(global.location.href,
        'slides/chapter3.html?backTo=review.html%3Fid%3D7#3.2',
        'click subsection 3.2.1 abre chapter3 ancora 3.2');
    } finally {
      if (prevLocation === undefined) delete global.location; else global.location = prevLocation;
    }
  });

  /* ---- T16: cartão expansível da Question Review (default expandido) ---- */
  await ok('Question Review: cartão expansível com as 4 opções e Why inline', () => {
    const results = {
      details: [{
        index: 0,
        question: 'Given the following code: if (a > 10) ... minimum number of test cases for 100% branch coverage?',
        /* ordem propositalmente desordenada, como no banco de perguntas */
        options: { B: '3', C: '4', D: '2', A: '1' },
        selectedAnswer: null,
        correctAnswer: 'D',
        isCorrect: false,
        flagged: false,
        note: '',
        explanation: 'x',
        optionExplanations: {},
        chapter: 4, section: '4.3', subsection: '4.3.2',
        learningObjective: 'FL-4.3.2', kLevel: 'K2',
        keywords: [], examTip: '', memoryAid: '',
      }],
    };
    const el = EG.generateResultsHTML(results);
    const all = [];
    (function walk(e) { all.push(e); (e.children || []).forEach(walk); })(el);

    /* chevron de expand/collapse no header (substitui o "?" antigo) */
    const chevrons = all.filter(e => e.className === 'results-item__chevron');
    assert.strictEqual(chevrons.length, 1, 'um chevron por questão');
    assert.strictEqual(chevrons[0].textContent, '▲', 'começa expandido');
    assert.strictEqual(chevrons[0]['aria-expanded'], 'true', 'aria-expanded true por default');

    const bodies = all.filter(e => e.className === 'results-item__body');
    assert.strictEqual(bodies.length, 1, 'corpo do cartão criado');
    assert.strictEqual(bodies[0].style.display, 'block', 'corpo visível por default (expand)');
    const previews = all.filter(e => e.className === 'results-item__preview');
    assert.strictEqual(previews.length, 1, 'preview curto no header');
    assert.strictEqual(previews[0].style.display, 'none', 'preview escondido quando expandido');
    assert.strictEqual(chevrons[0]['aria-controls'], bodies[0].id, 'aria-controls liga ao corpo');

    const panels = all.filter(e => e.className === 'results-item__options');
    assert.strictEqual(panels.length, 1, 'painel de opções criado');
    assert.strictEqual(panels[0].hidden, false, 'opções visíveis por default (dentro do expand)');

    /* cada opção é um bloco com a linha + Why inline */
    const blocks = panels[0].children.filter(e =>
      String(e.className).indexOf('results-item__opt-block') === 0);
    assert.strictEqual(blocks.length, 4, 'quatro blocos de opção');
    const letters = blocks.map(b => b.children[0].children[0].textContent);
    assert.deepStrictEqual(letters, ['A', 'B', 'C', 'D'], 'opções ordenadas A-D');
    const texts = blocks.map(b => b.children[0].children[1].textContent);
    assert.deepStrictEqual(texts, ['1', '3', '4', '2'], 'texto das opções');
    const correctBlock = blocks.find(b => String(b.className).indexOf('--correct') !== -1);
    assert(correctBlock, 'a opção correta está marcada');
    assert(String(correctBlock.children[0].className).indexOf('--selected') === -1, 'sem resposta não fica marcada como escolhida');
    assert.strictEqual(correctBlock.children[0].children[2].children[0].textContent, '✓ Correct', 'badge "✓ Correct" na opção D');
    blocks.forEach(b => {
      const why = b.children[1];
      assert(String(why.className).indexOf('results-item__opt-why') === 0, 'Why inline por opção');
      assert(why.children[0].textContent.indexOf('Why option ') === 0, 'rótulo "Why option X..."');
    });
    assert(blocks[3].children[1].children[0].textContent.indexOf('is correct:') !== -1, 'Why da correta diz "is correct"');
    assert(blocks[0].children[1].children[0].textContent.indexOf('is incorrect:') !== -1, 'Why da errada diz "is incorrect"');

    /* título da explicação passou a "📖 Explanation" */
    const expl = all.filter(e => String(e.className).indexOf('results-item__explanation') === 0);
    assert(expl.length >= 1, 'caixa de explicação existe');
    assert(expl[0].innerHTML.indexOf('Explanation') !== -1, 'título "Explanation"');
    assert(expl[0].innerHTML.indexOf('Why option A is incorrect') === -1, 'Whys por opção saíram da explicação (estão inline)');

    /* linhas "Your answer"/"Correct answer" removidas — só badges nos cartões */
    const answers = all.filter(e =>
      e.className === 'results-item__answer' ||
      String(e.className).indexOf('results-item__answer ') === 0);
    assert.strictEqual(answers.length, 0, 'sem linhas "Your answer"/"Correct answer" (badges chegam)');

    /* click no chevron colapsa / volta a expandir */
    chevrons[0].on_click({ stopPropagation: () => {} });
    assert.strictEqual(bodies[0].style.display, 'none', 'click colapsa o cartão');
    assert.strictEqual(previews[0].style.display, '', 'preview mostra no collapse');
    assert.strictEqual(chevrons[0]['aria-expanded'], 'false', 'aria-expanded passa a false');
    assert.strictEqual(chevrons[0].textContent, '▼', 'ícone passa a ▼');
    chevrons[0].on_click({ stopPropagation: () => {} });
    assert.strictEqual(bodies[0].style.display, 'block', 'segundo click volta a expandir');
    assert.strictEqual(previews[0].style.display, 'none', 'preview esconde no expand');
    assert.strictEqual(chevrons[0]['aria-expanded'], 'true', 'aria-expanded volta a true');
  });

  /* ---- T16b: sem linhas "Your answer"/"Correct answer" — só badges ---- */
  await ok('Question Review: badges indicam tudo, sem linhas redundantes', () => {
    const results = {
      details: [{
        index: 0, question: 'Q?',
        options: { A: '1', B: '2', C: '3', D: '4' },
        selectedAnswer: 'B',
        correctAnswer: 'B',
        isCorrect: true,
        flagged: false, note: '',
        explanation: 'x', optionExplanations: {},
        chapter: '', section: '', subsection: '',
        learningObjective: '', kLevel: '', keywords: [],
        examTip: '', memoryAid: '',
      }],
    };
    const el = EG.generateResultsHTML(results);
    const all = [];
    (function walk(e) { all.push(e); (e.children || []).forEach(walk); })(el);
    const answers = all.filter(e =>
      e.className === 'results-item__answer' ||
      String(e.className).indexOf('results-item__answer ') === 0);
    assert.strictEqual(answers.length, 0, 'nem certa nem errada têm linhas (só badges)');
    const badges = [];
    (function walk2(e) {
      if (String(e.className || '').indexOf('results-item__option-badge') === 0) badges.push(e);
      (e.children || []).forEach(walk2);
    })(el);
    const texts = badges.map(b => b.textContent);
    assert(texts.indexOf('✓ Your answer') !== -1, 'badge "✓ Your answer" na opção certa escolhida');
  });

  /* ---- T17: tentativas antigas sem opções não rebentam o review ---- */
  await ok('Question Review degrada sem crash quando faltam as opções', () => {
    const results = {
      details: [{
        index: 0, question: 'Sem opções guardadas?',
        options: undefined,
        selectedAnswer: 'A',
        correctAnswer: 'B',
        isCorrect: false,
        flagged: false, note: '',
        explanation: '', optionExplanations: {},
        chapter: '', section: '', subsection: '',
        learningObjective: '', kLevel: '', keywords: [],
        examTip: '', memoryAid: '',
      }],
    };
    const el = EG.generateResultsHTML(results);
    const all = [];
    (function walk(e) { all.push(e); (e.children || []).forEach(walk); })(el);
    const panels = all.filter(e => e.className === 'results-item__options');
    assert.strictEqual(panels.length, 1, 'painel criado mesmo sem opções');
    assert.strictEqual(panels[0].children.length, 2, 'título + aviso de opções indisponíveis');
    assert(panels[0].children[1].textContent.indexOf('not available') !== -1, 'aviso legível');
    const answers = all.filter(e =>
      e.className === 'results-item__answer' ||
      String(e.className).indexOf('results-item__answer ') === 0);
    assert.strictEqual(answers.length, 0, 'sem linhas redundantes mesmo sem opções');
    const cards = all.filter(e => String(e.className || '').indexOf('results-item') === 0);
    assert(cards.length >= 1, 'cartão da questão existe');
    const dump = JSON.stringify(cards);
    assert(dump.indexOf('undefined') === -1, 'sem "undefined" no cartão da questão');
  });

  /* ---- T18: ensureQuestionBank é no-op síncrono com banco presente ---- */
  await ok('ensureQuestionBank chama de volta de imediato com banco presente', () => {
    assert.strictEqual(typeof ES.ensureQuestionBank, 'function', 'helper exposto');
    let called = 0;
    ES.ensureQuestionBank(function () { called++; });
    assert.strictEqual(called, 1, 'callback síncrono quando questionSets existe');
  });

  /* ---- T19: título "Question Review" acima do cartão de score ---- */
  await ok('Título "Question Review" acima do resumo (não escondido)', () => {
    const results = {
      score: 1, total: 40, percentage: 3, passed: false,
      correctCount: 1, incorrectCount: 2, unansweredCount: 37,
      timeSpent: '00:12',
      details: [{
        index: 0, question: 'Q?',
        options: { A: '1', B: '2', C: '3', D: '4' },
        selectedAnswer: null, correctAnswer: 'D', isCorrect: false,
        flagged: false, note: '',
        explanation: 'x', optionExplanations: {},
        chapter: '', section: '', subsection: '',
        learningObjective: '', kLevel: '', keywords: [],
        examTip: '', memoryAid: '',
      }],
    };
    const el = EG.generateResultsHTML(results);
    assert.strictEqual(el.children[0].className, 'results-list', 'primeiro bloco é a moldura do título');
    assert.strictEqual(el.children[0].children[0].textContent, 'Question Review', 'label "Question Review" primeiro');
    assert(el.children[1].className.indexOf('results__card') === 0, 'cartão de score depois do título');
  });

  /* ---- T20: cada alvo do plano de estudo existe nos slides ---- */
  await ok('Plano de estudo: subsection aponta para uma secção real dos slides', () => {
    const load = file => {
      const ctx = { window: {} };
      vm.createContext(ctx);
      vm.runInContext(fs.readFileSync(file, 'utf8'), ctx);
      return ctx.window;
    };
    const sectionIds = new Set();
    const walk = o => {
      if (!o || typeof o !== 'object') return;
      if (typeof o.id === 'string') sectionIds.add(o.id);
      Object.keys(o).forEach(k => walk(o[k]));
    };
    walk(load(path.join(__dirname, 'slides.js')));

    const htmlIds = {};
    for (let ch = 1; ch <= 6; ch++) {
      const src = fs.readFileSync(path.join(__dirname, '..', 'slides', 'chapter' + ch + '.html'), 'utf8');
      const ids = new Set();
      const re = /^\s*id:\s*"([0-9.]+)",?\s*$/gm;
      let m;
      while ((m = re.exec(src)) !== null) ids.add(m[1]);
      htmlIds[ch] = ids;
    }

    const bank = load(path.join(__dirname, 'questions.js'));
    const targets = new Set();
    Object.keys(bank.questionSets || {}).forEach(set => {
      (bank.questionSets[set] || []).forEach(q => {
        targets.add(String(q.subsection || '').split('.').slice(0, 2).join('.'));
      });
    });
    assert(targets.size > 0, 'banco de questões lido');

    const missing = Array.from(targets).filter(t => {
      const ch = parseInt(String(t).split('.')[0], 10);
      return !sectionIds.has(t) || !htmlIds[ch] || !htmlIds[ch].has(t);
    });
    assert.deepStrictEqual(missing, [], 'subsections sem secção nos slides: ' + missing.join(', '));
  });

  /* ---- T21: os slides fazem scroll para o #hash depois do render ---- */
  await ok('Slides: #hash faz scroll depois do render dinâmico', () => {
    for (let ch = 1; ch <= 6; ch++) {
      const html = fs.readFileSync(path.join(__dirname, '..', 'slides', 'chapter' + ch + '.html'), 'utf8');
      const render = html.indexOf('app.innerHTML = h;');
      const hash = html.indexOf('window.location.hash');
      assert(render !== -1, 'chapter' + ch + ' renderiza para #app');
      assert(hash !== -1, 'chapter' + ch + ' não trata o #hash');
      assert(hash > render, 'chapter' + ch + ' trata o #hash depois de renderizar');
      assert(html.indexOf('scrollIntoView') > render, 'chapter' + ch + ' usa scrollIntoView');
    }
    ['css/style.css', 'android/app/src/main/assets/www/css/style.css'].forEach(f => {
      const css = fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
      assert(/\.flashcard\s*\{[^}]*scroll-margin-top:/.test(css),
        f + ' sem scroll-margin-top em .flashcard (secção tapada pelo header fixo)');
    });
  });

  /* ---- T22: espelho android byte-a-byte igual ao web ---- */
  await ok('Android: www espelha o web (questions, slides e capítulos)', () => {
    const files = ['js/questions.js', 'js/slides.js', 'slides/chapter1.html', 'slides/chapter2.html',
      'slides/chapter3.html', 'slides/chapter4.html', 'slides/chapter5.html', 'slides/chapter6.html'];
    const androidRoot = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'assets', 'www');
    if (!fs.existsSync(androidRoot)) return;
    files.forEach(f => {
      const web = fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
      const mirrored = fs.readFileSync(path.join(androidRoot, f), 'utf8');
      assert.strictEqual(mirrored, web, f + ' difere no espelho android');
    });
    const webStats = fs.readFileSync(path.join(__dirname, 'statistics.js'), 'utf8');
    const androidStats = fs.readFileSync(path.join(androidRoot, 'js/statistics.js'), 'utf8');
    const webCss = fs.readFileSync(path.join(__dirname, '..', 'css/style.css'), 'utf8');
    const androidCss = fs.readFileSync(path.join(__dirname, '..', 'android/app/src/main/assets/www/css/style.css'), 'utf8');
    const webIndex = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    const androidIndex = fs.readFileSync(path.join(__dirname, '..', 'android/app/src/main/assets/www/index.html'), 'utf8');
    const webUpdates = fs.readFileSync(path.join(__dirname, 'updates.js'), 'utf8');
    const androidUpdates = fs.readFileSync(path.join(androidRoot, 'js/updates.js'), 'utf8');
    assert.strictEqual(androidUpdates, webUpdates, 'updates.js must be mirrored into Android');
    assert(webIndex.includes("platform: 'web'") && webIndex.includes('id="updates-dialog"') &&
      webIndex.includes('id="updates-download"') && webIndex.includes('js/updates.js'),
      'web landing page should configure a popup with a direct APK download');
    assert(webIndex.includes('data-i18n-aria-label="hero.apk"') && webUpdates.includes('download-apk-badge'),
      'web APK download button should carry the new-release badge');
    const directApkUrl = 'releases/latest/download/istqb-ctfl.apk';
    assert(webIndex.includes(directApkUrl) && androidIndex.includes(directApkUrl) && webUpdates.includes(directApkUrl),
      'update popup and APK badge should point directly to the APK asset');
    assert(androidIndex.includes("platform: 'android'") && androidIndex.includes('id="updates-dialog"') &&
      androidIndex.includes('id="updates-download"') && androidIndex.includes('js/updates.js'),
      'Android landing page should configure a popup with a direct APK download');
    ['exportBtn.disabled = getAttempts().length === 0;', 'if (exportBtn.disabled) return;', 'dashboardControls.appendChild(paginationWrap);']
      .forEach(marker => {
        assert(webStats.includes(marker), 'web statistics missing ' + marker);
        assert(androidStats.includes(marker), 'Android statistics missing ' + marker);
      });
    assert(androidStats.includes('/* Android layout: keep filter and pagination in simple, wrap-safe rows. */'),
      'Android should use the wrap-safe control layout');
    assert(androidStats.includes('paginationWrap.appendChild(pageSize);'),
      'Android page-size selector should stay with the flex pagination controls');
    assert(androidStats.includes('flex-direction:column;align-items:flex-start;'),
      'Android Filter by exam selector should be stacked under its label');
    assert(androidStats.includes('gap:var(--space-xs);\'') && androidStats.includes('min-width:48px'),
      'Android pagination arrows should sit close to the page number');
    assert(androidStats.includes('justify-content:space-between') && androidStats.includes('flex-wrap:wrap;'),
      'Android filter and pagination should wrap responsively');
    assert(androidStats.includes("createEl('table', null") &&
      androidStats.includes("createEl('div', 'chapter-performance-row'"),
      'Android Recent Attempts should use its previous table layout while retaining compact chapter rows');
    assert(!androidStats.includes('recent-attempts-table') && !androidStats.includes('data-label') &&
      !androidCss.includes('.recent-attempts-table') && androidCss.includes('.chapter-performance-row'),
      'Android should revert attempt cards while keeping compact chapter rows');
    assert(!androidStats.includes('table-layout:fixed') && !androidStats.includes('display:contents'),
      'Android table and controls should not use the broken fixed-grid layout');
    assert(webCss.includes('.hero {\n  padding: var(--header-height) 0 var(--space-md);'), 'web hero top spacing not reduced');
    assert(androidCss.includes('.hero {\n  padding: var(--header-height) 0 var(--space-md);'), 'Android hero top spacing not reduced');
    ['.stats-empty-state__message', '#stats-section .section__header', '#stats-section + #slides-section']
      .forEach(selector => {
        assert(webCss.includes(selector), 'web missing compact statistics spacing rule: ' + selector);
        assert(androidCss.includes(selector), 'Android missing compact statistics spacing rule: ' + selector);
      });
    assert(!webCss.includes('calc(var(--header-height) + var(--space-2xl))') &&
      !androidCss.includes('calc(var(--header-height) + var(--space-2xl))'),
      'mobile hero should not restore the former large top gap');
    assert(webCss.includes('.stats-empty-state__message') && androidCss.includes('.stats-empty-state__message'),
      'statistics empty state should use the reduced spacing styles on both platforms');
    assert(webIndex.includes('id="updates-open"') && androidIndex.includes('id="updates-open"'),
      'both landing pages should expose the update badge trigger');
  });

  await ok('Release update notice reports unseen newer releases', () => {
    const context = { window: {} };
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(path.join(__dirname, 'updates.js'), 'utf8'), context);
    const updates = context.window.AppUpdates;
    assert.strictEqual(updates.shouldAnnounce('v1.1.15', null), true,
      'current latest release should be announced against the web baseline');
    assert.strictEqual(updates.shouldAnnounce('v1.1.15', 'v1.1.15'), false,
      'already-seen release should not be announced again');
    assert.strictEqual(updates.shouldAnnounce('v1.1.16', 'v1.1.15'), true,
      'newer release should be announced');
    assert.strictEqual(updates.shouldAnnounce('v1.1.10', 'v1.1.15'), false,
      'older release should not be announced');
    const summary = updates.summarizeRelease('## Changes\n- **Android:** Restore the previous attempts table.\n- Web: Add update notices.\n- Avoid raw HTML <b>tags</b> in the summary.\n\n## Verification\n- This section should not be shown.');
    assert.strictEqual(summary.join('|'),
      'Android: Restore the previous attempts table.|Web: Add update notices.|Avoid raw HTML tags in the summary.',
      'release summary should extract plain text bullets from only the first section');
  });

  console.log('');
  console.log(process.exitCode ? 'RESULT: FAILURES' : 'RESULT: ALL ' + passed + ' TESTS PASSED');
}

main().then(() => process.exit(process.exitCode || 0))
      .catch(e => { console.error(e); process.exit(1); });
