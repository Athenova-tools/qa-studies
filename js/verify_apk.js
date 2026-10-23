/* Verificador de igualdade do APK entre canais: release, site (Pages),
 * emulador e build local.
 *
 * Garante duas coisas em níveis distintos:
 *   - byte-a-byte  : release <-> site <-> APK instalado (o MESMO artefacto a
 *                    circular por todos os canais);
 *   - por conteúdo : build local novo vs release (entradas do zip com hashes) —
 *                    builds não são byte-reprodutíveis (timestamps/assinatura),
 *                    mas o conteúdo do mesmo commit é.
 *
 * Uso:
 *   node js/verify_apk.js           # todos os canais (emulador/build se existirem)
 *   node js/verify_apk.js --ci      # só release vs site (com retries) — para CI
 *   node js/verify_apk.js --help
 *
 * Sai com 0 = tudo igual, 1 = divergência ou erro.
 */
const crypto = require('crypto');
const fs = require('fs');
const http = require('http');
const https = require('https');
const os = require('os');
const path = require('path');
const zlib = require('zlib');
const { execFileSync } = require('child_process');

const REPO = process.env.APK_REPO || 'Athenova-tools/qa-studies';
const RELEASE_URL = process.env.APK_RELEASE_URL ||
  `https://github.com/${REPO}/releases/latest/download/istqb-ctfl.apk`;
const SITE_URL = process.env.APK_SITE_URL ||
  'https://athenova-tools.github.io/qa-studies/android/app/src/main/assets/www/APK/app-debug.apk';
const LOCAL_APK = path.join(__dirname, '..', 'android', 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk');

const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const sha256 = buf => crypto.createHash('sha256').update(buf).digest('hex');
const short = h => (h || '').slice(0, 32);

const USAGE = `Verificador de igualdade do APK (release / site / emulador / build local)

  node js/verify_apk.js          todos os canais disponíveis
  node js/verify_apk.js --ci     só release vs site, com retries (CI)
  node js/verify_apk.js --help

Variáveis: APK_REPO, APK_RELEASE_URL, APK_SITE_URL (sobrepõem os defaults)`;

/* ---------------- downloads ---------------- */
function fetchBuffer(url, redirects = 5) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'user-agent': UA } }, res => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        res.resume();
        if (redirects <= 0) return reject(new Error('redirecionamentos a mais: ' + url));
        return resolve(fetchBuffer(new URL(res.headers.location, url).toString(), redirects - 1));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} em ${url}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
    req.setTimeout(60000, () => req.destroy(new Error('timeout: ' + url)));
  });
}

/* Suporte a cache-busting + retries (o Pages pode demorar a propagar). */
async function fetchWithRetries(url, { attempts = 1, delayMs = 0, bust = false } = {}) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    const u = bust ? `${url}${url.includes('?') ? '&' : '?'}v=${Date.now()}-${i}` : url;
    try { return await fetchBuffer(u); } catch (e) {
      lastErr = e;
      if (delayMs) await new Promise(r => setTimeout(r, delayMs));
    }
  }
  throw lastErr;
}

/* ---------------- zip (central directory + inflate) ---------------- */
function zipEntries(buf) {
  const sig = Buffer.from([0x50, 0x4b, 0x05, 0x06]);
  const eocd = buf.lastIndexOf(sig);
  if (eocd < 0) throw new Error('EOCD não encontrado — não é um zip/APK válido');
  const cdSize = buf.readUInt32LE(eocd + 12);
  const cdOff = buf.readUInt32LE(eocd + 16);
  const entries = new Map();
  let p = cdOff;
  const end = Math.min(cdOff + cdSize, buf.length);
  while (p + 46 <= end && buf.readUInt32LE(p) === 0x02014b50) {
    const method = buf.readUInt16LE(p + 10);
    const compSize = buf.readUInt32LE(p + 20);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const localOff = buf.readUInt32LE(p + 42);
    const name = buf.toString('utf8', p + 46, p + 46 + nameLen);
    const lNameLen = buf.readUInt16LE(localOff + 26);
    const lExtraLen = buf.readUInt16LE(localOff + 28);
    const dataStart = localOff + 30 + lNameLen + lExtraLen;
    const data = buf.subarray(dataStart, dataStart + compSize);
    const raw = method === 0 ? Buffer.from(data) : zlib.inflateRawSync(data);
    entries.set(name, { sha: sha256(raw), size: raw.length });
    p += 46 + nameLen + extraLen + commentLen;
  }
  if (!entries.size) throw new Error('directório de zip vazio/illegível');
  return entries;
}

/* Conteúdo igual = mesmas entradas e mesmos hashes por entrada. */
function compareContent(a, b) {
  const A = zipEntries(a), B = zipEntries(b);
  const onlyA = [...A.keys()].filter(k => !B.has(k));
  const onlyB = [...B.keys()].filter(k => !A.has(k));
  const changed = [...A.keys()].filter(k => B.has(k) && A.get(k).sha !== B.get(k).sha);
  return { equal: !onlyA.length && !onlyB.length && !changed.length, onlyA, onlyB, changed, n: A.size };
}

/* ---------------- emulador ---------------- */
function findAdb() {
  const cands = [];
  for (const env of ['ANDROID_HOME', 'ANDROID_SDK_ROOT']) {
    if (process.env[env]) cands.push(path.join(process.env[env], 'platform-tools', 'adb'));
  }
  cands.push(path.join(os.homedir(), 'Android', 'Sdk', 'platform-tools', 'adb'));
  return cands.find(p => fs.existsSync(p)) || null;
}

function deviceApk() {
  const adb = findAdb();
  if (!adb) return { skip: 'adb não encontrado' };
  const out = execFileSync(adb, ['devices'], { encoding: 'utf8' });
  if (!/^\S+\s+device$/m.test(out.split('\n').slice(1).join('\n'))) return { skip: 'nenhum emulador/dispositivo ligado' };
  const pkg = process.env.APK_PACKAGE || 'com.istqb.ctfl';
  const pkgOut = execFileSync(adb, ['shell', 'pm', 'path', pkg], { encoding: 'utf8' }).trim();
  const m = pkgOut.match(/package:(.+)/);
  if (!m) return { skip: `${pkg} não instalada` };
  const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'verify-apk-')), 'installed.apk');
  execFileSync(adb, ['pull', m[1].trim(), tmp], { stdio: 'ignore' });
  const buf = fs.readFileSync(tmp);
  fs.rmSync(path.dirname(tmp), { recursive: true, force: true });
  return { buf };
}

/* ---------------- relatório ---------------- */
let failures = 0;
const check = (cond, label, extra) => {
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${label}${cond || extra === undefined ? '' : '  -> ' + extra}`);
  if (!cond) failures++;
};
const skip = (label, why) => console.log(`  SKIP  ${label}  (${why})`);

(async () => {
  const mode = process.argv[2];
  if (mode === '--help' || mode === '-h') { console.log(USAGE); process.exit(0); }
  const ci = mode === '--ci';

  console.log(`Verificador de APK  (repo ${REPO}${ci ? ', modo CI' : ''})`);
  const release = await fetchWithRetries(RELEASE_URL, { attempts: ci ? 6 : 1, delayMs: ci ? 15000 : 0 });
  const releaseSha = sha256(release);
  console.log(`\nRelease : ${short(releaseSha)}  ${(release.length / 1e6).toFixed(3)} MB  ${RELEASE_URL}`);

  /* 1. release vs site (byte-a-byte) — a garantia central */
  if (ci) {
    /* Retry também em DIVERGÊNCIA: o Pages pode ainda servir conteúdo velho
       durante a propagação depois do workflow de deploy terminar. */
    let siteBuf = null;
    let lastErr = null;
    for (let i = 0; i < 6; i++) {
      try {
        siteBuf = await fetchWithRetries(SITE_URL, { bust: true });
        lastErr = null;
        if (sha256(siteBuf) === releaseSha) break;
      } catch (e) { lastErr = e; }
      if (i < 5) await new Promise(r => setTimeout(r, 15000));
    }
    if (!siteBuf) {
      check(false, 'site (Pages) responde e é byte-idêntico à release', String(lastErr && lastErr.message || lastErr));
    } else {
      const siteSha = sha256(siteBuf);
      console.log(`Site    : ${short(siteSha)}  ${(siteBuf.length / 1e6).toFixed(3)} MB`);
      check(siteSha === releaseSha, 'site (Pages) é byte-idêntico à release', `site=${short(siteSha)} release=${short(releaseSha)}`);
    }
  } else {
    try {
      const site = await fetchWithRetries(SITE_URL);
      const siteSha = sha256(site);
      console.log(`Site    : ${short(siteSha)}  ${(site.length / 1e6).toFixed(3)} MB  ${SITE_URL}`);
      check(siteSha === releaseSha, 'site (Pages) é byte-idêntico à release', `site=${short(siteSha)} release=${short(releaseSha)}`);
    } catch (e) {
      check(false, 'site (Pages) responde e é byte-idêntico à release', String(e.message || e));
    }

    /* 2. emulador instalado vs release (byte-a-byte) */
    try {
      const dev = deviceApk();
      if (dev.skip) skip('emulador vs release', dev.skip);
      else {
        const devSha = sha256(dev.buf);
        console.log(`Emulador: ${short(devSha)}  ${(dev.buf.length / 1e6).toFixed(3)} MB`);
        check(devSha === releaseSha, 'APK instalado é byte-idêntico à release', `instalado=${short(devSha)}`);
      }
    } catch (e) {
      skip('emulador vs release', String(e.message || e).split('\n')[0]);
    }

    /* 3. build local vs release (por conteúdo — builds não são byte-reprodutíveis) */
    if (fs.existsSync(LOCAL_APK)) {
      try {
        const local = fs.readFileSync(LOCAL_APK);
        const cmp = compareContent(local, release);
        console.log(`Build   : ${short(sha256(local))}  ${(local.length / 1e6).toFixed(3)} MB  ${path.relative(process.cwd(), LOCAL_APK)}`);
        check(cmp.equal, `build local tem o MESMO conteúdo da release (${cmp.n} entradas)`,
          [...cmp.onlyA.map(x => 'só local:' + x), ...cmp.onlyB.map(x => 'só release:' + x),
           ...cmp.changed.map(x => 'diferente:' + x)].slice(0, 6).join(' '));
      } catch (e) {
        check(false, 'build local comparável por conteúdo', String(e.message || e));
      }
    } else {
      skip('build local vs release', 'sem build local (corre assembleDebug primeiro)');
    }
  }

  console.log(failures === 0
    ? '\nRESULT: APK IGUAIS EM TODOS OS CANAIS VERIFICADOS'
    : `\nRESULT: DIVERGENCIAS (${failures})`);
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error('VERIFIER ERRO:', e.message || e); process.exit(1); });
