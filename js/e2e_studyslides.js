/* E2E (opt-in, não corre em CI): cartão "Subsections to Study" -> slides.
 *
 * Cobre o fluxo de estudo: render do cartão no index, clique/teclado na linha,
 * navegação com ?backTo + #hash, aterragem a 80px (abaixo do header fixo, com
 * a tira "Section X | n of m" visível) e controlo negativo sem fragmento.
 *
 * Requisitos (uma vez):
 *   npm i -D playwright && npx playwright install chromium
 *
 * Uso:
 *   node js/e2e_studyslides.js               # serve este repo localmente e testa
 *   node js/e2e_studyslides.js <baseURL>     # testa um site publicado
 *   node js/e2e_studyslides.js --help
 *
 * Sai com 0 = tudo passou, 1 = falha.
 */
const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');

const USAGE = `E2E do cartão "Subsections to Study" -> slides.

  node js/e2e_studyslides.js              serve o repo localmente (porta livre) e testa
  node js/e2e_studyslides.js <baseURL>    testa um site publicado (ex.: https://athenova-tools.github.io/qa-studies)

Requisitos: playwright instalado (npm i -D playwright && npx playwright install chromium)
            ou uma cache do npx já populada (npx playwright --version)`;

function loadPlaywright() {
  const dirs = [];
  for (const name of ['playwright', 'playwright-core']) {
    try {
      dirs.push(path.dirname(require.resolve(name + '/package.json')));
    } catch (e) { /* não instalado localmente */ }
  }
  try {
    const npx = path.join(os.homedir(), '.npm', '_npx');
    for (const entry of fs.readdirSync(npx)) {
      for (const name of ['playwright', 'playwright-core']) {
        const dir = path.join(npx, entry, 'node_modules', name);
        if (fs.existsSync(path.join(dir, 'package.json'))) dirs.push(dir);
      }
    }
  } catch (e) { /* sem cache do npx */ }
  for (const dir of dirs) {
    try {
      const mod = require(dir);
      if (mod && mod.chromium) return mod;
    } catch (e) { /* candidato inválido */ }
  }
  console.error('E2E: módulo playwright não encontrado.\n' +
    '  A: npm i -D playwright && npx playwright install chromium\n' +
    '  B: npx playwright --version  (popula a cache do npx) e volta a correr');
  process.exit(1);
}

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json',
};

/* Servidor estático mínimo (sem dependências): porta 0 = a livre. */
function startServer(root) {
  const server = http.createServer((req, res) => {
    try {
      const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const rel = urlPath === '/' ? '/index.html' : urlPath;
      const file = path.normalize(path.join(root, rel));
      if (file !== root && !file.startsWith(root + path.sep)) {
        res.writeHead(403); res.end('403'); return;
      }
      const data = fs.readFileSync(file);
      res.writeHead(200, { 'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
      res.end(data);
    } catch (e) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }); res.end('404');
    }
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

const chromium = loadPlaywright().chromium;

const arg = process.argv[2];
if (arg === '--help' || arg === '-h') { console.log(USAGE); process.exit(0); }

let failures = 0;
const check = (cond, label, extra) => {
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${label}${cond || extra === undefined ? '' : '  -> ' + extra}`);
  if (!cond) failures++;
};

/* scroll-behavior: smooth anima o movimento — espera o topo estabilizar. */
const settledTop = async (page, id) => {
  await page.waitForFunction(i => !!document.getElementById(i), id, { timeout: 10000 });
  const start = Date.now();
  let prev = null;
  let stable = 0;
  while (Date.now() - start < 6000) {
    const t = await page.evaluate(
      i => Math.round(document.getElementById(i).getBoundingClientRect().top), id);
    if (prev !== null && t === prev) stable++; else stable = 0;
    prev = t;
    if (stable >= 4) return t;
    await page.waitForTimeout(80);
  }
  return prev;
};

/* Posição final + se a tira "Section X | n of m" fica visível sob o header fixo. */
const landed = async (page, id) => {
  const top = await settledTop(page, id);
  const extra = await page.evaluate(i => {
    const card = document.getElementById(i);
    const strip = card.querySelector('.flashcard__header');
    const fixed = document.querySelector('.header');
    return {
      stripTop: strip ? Math.round(strip.getBoundingClientRect().top) : null,
      fixedBottom: fixed ? Math.round(fixed.getBoundingClientRect().bottom) : null,
    };
  }, id);
  return { top, stripTop: extra.stripTop, fixedBottom: extra.fixedBottom };
};

(async () => {
  const root = path.join(__dirname, '..');
  let server = null;
  let BASE;
  if (arg) {
    BASE = arg.replace(/\/$/, '');
  } else {
    server = await startServer(root);
    BASE = `http://127.0.0.1:${server.address().port}`;
  }
  console.log(`E2E base: ${BASE}`);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  page.on('pageerror', e => console.log('    [pageerror]', String(e).split('\n')[0]));

  console.log('\nC6 — render do cartão "Subsections to Study" no index.html');
  await page.goto(BASE + '/index.html', { waitUntil: 'load' });
  const rendered = await page.evaluate(async () => {
    if (!window.questionSets) {
      const t = await (await fetch('js/questions.js')).text();
      (0, eval)(t);
    }
    const details = [];
    Object.keys(window.questionSets).forEach(set => {
      window.questionSets[set].forEach(q => {
        details.push({
          question: q.statement, options: q.options, selectedAnswer: null,
          correctAnswer: q.correctAnswer, isCorrect: false, flagged: false, note: '',
          explanation: q.correctFeedback || '', optionExplanations: q.optionExplanations || {},
          chapter: q.chapter || '', section: q.section || '', subsection: q.subsection,
          learningObjective: q.learningObjective, kLevel: q.kLevel, keywords: q.keywords || [],
          examTip: q.examTip || '', memoryAid: q.memoryAid || '',
        });
      });
    });
    const results = {
      score: 0, total: details.length, percentage: 0, passed: false,
      correctCount: 0, incorrectCount: details.length, unansweredCount: 0, timeSpent: '00:00',
      details: details,
    };
    const plan = ExamGrading.buildStudyPlan(results);
    let htmlErr = null;
    try {
      const el = ExamGrading.generateResultsHTML(results);
      document.body.appendChild(el);
    } catch (e) { htmlErr = String(e); }

    const rows = document.querySelectorAll('.study-plan__item');
    const codes = Array.from(document.querySelectorAll('.study-plan__code')).map(s => s.textContent);
    const go = document.querySelectorAll('.study-plan__go').length;
    const los = document.querySelector('.study-plan__los');
    return {
      planCount: plan.length, rowCount: rows.length, codes: codes, go: go,
      losText: los ? los.textContent : null, htmlErr: htmlErr,
      firstCodes: codes.slice(0, 6), bankSize: details.length,
    };
  });

  check(rendered.htmlErr === null, 'generateResultsHTML não rebenta', rendered.htmlErr);
  check(rendered.bankSize === 525, 'banco com 525 questões', rendered.bankSize);
  check(rendered.planCount === 63, 'buildStudyPlan devolve 63 linhas', rendered.planCount);
  check(rendered.rowCount === 63, '63 linhas .study-plan__item no DOM', rendered.rowCount);
  check(rendered.go === 63, '63 setas "→" (affordance de navegação)', rendered.go);
  check(rendered.codes.includes('4.5.1') && rendered.codes.includes('4.5.2') &&
        rendered.codes.includes('4.5.3'), 'códigos 4.5.1/4.5.2/4.5.3 presentes');
  check(rendered.codes.includes('1.3') && !rendered.codes.includes('1.3.1'),
        'merge q7: "1.3" sim, "1.3.1" não', rendered.firstCodes.join(', '));
  check(/Objectives: FL-/.test(rendered.losText || ''), 'los por linha com a LO', rendered.losText);

  console.log('\nC7 — clique na linha 4.5.1 leva aos slides e faz scroll');
  await page.evaluate(() => {
    const row = Array.from(document.querySelectorAll('.study-plan__item'))
      .find(r => r.querySelector('.study-plan__code').textContent === '4.5.1');
    row.click();
  });
  await page.waitForURL(/chapter4\.html/, { timeout: 10000 });
  const url = page.url();
  check(/slides\/chapter4\.html\?backTo=/.test(url), 'navega para slides/chapter4.html com backTo', url);
  check(/#4\.5$/.test(decodeURIComponent(url)), 'fragmento #4.5 (3-part -> 2-part)', decodeURIComponent(url));

  const l45 = await landed(page, '4.5');
  check(l45.top >= 40 && l45.top <= 200, `#4.5 aterra fora do header fixo (top=${l45.top}, esperado ~80)`, `top=${l45.top}`);
  check(l45.stripTop !== null && l45.stripTop >= l45.fixedBottom,
    `tira "Section 4.5" visível (strip=${l45.stripTop} >= header=${l45.fixedBottom})`,
    `strip=${l45.stripTop} header=${l45.fixedBottom}`);

  console.log('\nC7 — regressão: âncora pré-existente e controlo negativo');
  await page.goto(BASE + '/slides/chapter1.html#1.3', { waitUntil: 'load' });
  const l13 = await landed(page, '1.3');
  check(l13.top >= 40 && l13.top <= 200, `chapter1 #1.3 aterra a ${l13.top}px`, `top=${l13.top}`);
  check(l13.stripTop >= l13.fixedBottom, `tira "Section 1.3" visível (strip=${l13.stripTop})`,
    `strip=${l13.stripTop} header=${l13.fixedBottom}`);

  await page.goto(BASE + '/slides/chapter6.html#6.2', { waitUntil: 'load' });
  const l62 = await landed(page, '6.2');
  check(l62.top >= 40 && l62.top <= 200, `chapter6 #6.2 aterra a ${l62.top}px`, `top=${l62.top}`);
  check(l62.stripTop >= l62.fixedBottom, `tira "Section 6.2" visível (strip=${l62.stripTop})`,
    `strip=${l62.stripTop} header=${l62.fixedBottom}`);

  await page.goto(BASE + '/slides/chapter4.html', { waitUntil: 'load' });
  const nohash = await settledTop(page, '4.5');
  check(nohash >= 800, `controlo negativo: sem #hash, #4.5 fica abaixo da dobra (top=${nohash})`, `top=${nohash}`);

  console.log('\nC8 — teclado: Tab + Enter na linha do plano');
  await page.goto(BASE + '/index.html', { waitUntil: 'load' });
  await page.evaluate(async () => {
    if (!window.questionSets) { const t = await (await fetch('js/questions.js')).text(); (0, eval)(t); }
    const details = [];
    Object.keys(window.questionSets).forEach(s => window.questionSets[s].forEach(q => {
      details.push({ question: q.statement, options: q.options, selectedAnswer: null,
        correctAnswer: q.correctAnswer, isCorrect: false, flagged: false, note: '',
        explanation: '', optionExplanations: {}, chapter: '', section: '', subsection: q.subsection,
        learningObjective: q.learningObjective, kLevel: q.kLevel, keywords: [], examTip: '', memoryAid: '' });
    }));
    document.body.appendChild(ExamGrading.generateResultsHTML(
      { score: 0, total: details.length, percentage: 0, passed: false, correctCount: 0,
        incorrectCount: details.length, unansweredCount: 0, timeSpent: '00:00', details: details }));
  });
  const kb = await page.evaluate(() => {
    const row = Array.from(document.querySelectorAll('.study-plan__item'))
      .find(r => r.querySelector('.study-plan__code').textContent === '6.2');
    return row ? { role: row.getAttribute('role'), tabindex: row.getAttribute('tabindex') } : null;
  });
  check(kb && kb.role === 'button' && kb.tabindex === '0', 'linha é focável (role=button, tabindex=0)', JSON.stringify(kb));
  await page.focus('.study-plan__item:has(.study-plan__code:text-is("6.2"))');
  await page.keyboard.press('Enter');
  await page.waitForURL(/chapter6\.html/, { timeout: 10000 });
  check(/#6\.2$/.test(decodeURIComponent(page.url())), 'Enter abre #6.2', decodeURIComponent(page.url()));

  await browser.close();
  if (server) server.close();
  console.log(failures === 0 ? '\nRESULT: E2E ALL PASS' : `\nRESULT: E2E FAILURES (${failures})`);
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error('E2E ERRO:', e); process.exit(1); });
