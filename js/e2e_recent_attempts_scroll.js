/* Browser regression: Recent Attempts controls must not move the viewport. */
'use strict';

const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');

function loadPlaywright() {
  const dirs = [];
  for (const name of ['playwright', 'playwright-core']) {
    try { dirs.push(path.dirname(require.resolve(name + '/package.json'))); } catch (_) {}
  }
  try {
    const npx = path.join(os.homedir(), '.npm', '_npx');
    for (const entry of fs.readdirSync(npx)) {
      for (const name of ['playwright', 'playwright-core']) {
        const dir = path.join(npx, entry, 'node_modules', name);
        if (fs.existsSync(path.join(dir, 'package.json'))) dirs.push(dir);
      }
    }
  } catch (_) {}
  for (const dir of dirs) {
    try {
      const playwright = require(dir);
      if (playwright.chromium) return playwright;
    } catch (_) {}
  }
  throw new Error('Playwright is required (available in the local npx cache or as a project dependency).');
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

function startServer(root) {
  const server = http.createServer((request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      const relative = pathname === '/' ? '/index.html' : pathname;
      const file = path.normalize(path.join(root, relative));
      if (file !== root && !file.startsWith(root + path.sep)) {
        response.writeHead(403).end('403');
        return;
      }
      response.writeHead(200, {
        'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
      });
      response.end(fs.readFileSync(file));
    } catch (_) {
      response.writeHead(404).end('404');
    }
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

async function main() {
  const { chromium } = loadPlaywright();
  const root = path.resolve(__dirname, '..');
  const server = await startServer(root);
  const address = server.address();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const attempts = Array.from({ length: 40 }, (_, index) => ({
      id: index + 1,
      date: '2026-10-30',
      examId: index < 20 ? 4 : 5,
      score: 30 + (index % 10),
      total: 40,
      percentage: 75,
      passed: true,
      correctCount: 30,
      incorrectCount: 10,
      unansweredCount: 0,
      timeSpent: '20:00',
      chapterPerformance: { 'Chapter 1': { correct: 3, total: 4 } },
      origin: 'web',
    }));
    await page.addInitScript(data => localStorage.setItem('istqb_ctfl_attempts', JSON.stringify(data)), attempts);
    await page.goto('http://127.0.0.1:' + address.port + '/index.html');
    await page.waitForFunction(() => document.querySelectorAll('#stats-dashboard tbody tr').length === 5);

    await page.evaluate(() => {
      const heading = Array.from(document.querySelectorAll('#stats-dashboard h3'))
        .find(element => element.textContent.trim() === 'Recent Attempts');
      const originalBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, window.scrollY + heading.getBoundingClientRect().top - 120);
      document.documentElement.style.scrollBehavior = originalBehavior;
    });

    async function viewportPosition() {
      return page.evaluate(() => {
        const heading = Array.from(document.querySelectorAll('#stats-dashboard h3'))
          .find(element => element.textContent.trim() === 'Recent Attempts');
        return { y: window.scrollY, headingTop: heading.getBoundingClientRect().top };
      });
    }

    async function assertNoScroll(action, label) {
      const before = await viewportPosition();
      await action();
      await page.waitForTimeout(100);
      const after = await viewportPosition();
      if (Math.abs(after.y - before.y) > 1 || Math.abs(after.headingTop - before.headingTop) > 1) {
        throw new Error(label + ' moved the page: before=' + JSON.stringify(before) + ' after=' + JSON.stringify(after));
      }
      console.log('PASS  ' + label + ' keeps the viewport stationary at Recent Attempts');
    }

    await assertNoScroll(
      () => page.getByRole('button', { name: 'Next page' }).click(),
      'Pagination',
    );
    await assertNoScroll(
      () => page.locator('#stats-dashboard select').nth(0).selectOption('4'),
      'Exam filter',
    );
    await assertNoScroll(
      () => page.locator('#stats-dashboard select').nth(1).selectOption('10'),
      'Page-size filter',
    );
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
