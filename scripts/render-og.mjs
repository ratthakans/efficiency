/**
 * Renders src/app/opengraph-image.png — the share card — with real Chrome.
 *
 * Why not next/og: Satori mis-stacks Thai marks. "ที่ทั้งคน" came out as
 * "ทีท้ังคน" (mai ek dropped, mai tho set before mai han-akat), which a Thai
 * reader sees as a misspelling. Chrome shapes Thai with HarfBuzz, so the card
 * is drawn there and committed as a static file Next serves as-is.
 *
 * Re-run after changing BRAND.whatWeDo or the project list:
 *   node scripts/render-og.mjs
 * Needs Google Chrome (override the path with CHROME=...). No npm packages:
 * Node 24's global WebSocket drives Chrome over the DevTools Protocol.
 */
import { spawn } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = resolve(import.meta.dirname, '..');
const OUT = join(ROOT, 'src/app/opengraph-image.png');
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9444;

/* the copy comes from content.js, so the card cannot drift from the site */
const content = readFileSync(join(ROOT, 'src/lib/content.js'), 'utf8');
const whatWeDo = JSON.parse(content.match(/whatWeDo: (\[[^\]]+\])/)[1].replace(/'/g, '"'));
const projects = (content.slice(content.indexOf('export const PROJECTS')).match(/url: 'https?:/g) || []).length;
const stack = JSON.parse(content.match(/HERO_STACK = (\[[^\]]+\])/)[1].replace(/'/g, '"'));
const shot = (key) => pathToFileURL(join(ROOT, 'public/work', `${key}.webp`)).href;

const font = (f) => pathToFileURL(join(ROOT, 'assets/og', f)).href;
/* unicode-range lets Chrome pick the Thai or Latin subset per character */
const THAI = 'U+02D7,U+0303,U+0331,U+0E01-0E5B,U+200C-200D,U+25CC';
const LATIN = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
const face = (file, weight, range) =>
  `@font-face{font-family:Plex;font-weight:${weight};src:url(${font(file)}) format('woff');unicode-range:${range}}`;

const html = `<!doctype html><html lang="th"><head><meta charset="utf-8"><style>
${face('plex-thai-latin-400.woff', 400, LATIN)}${face('plex-thai-thai-400.woff', 400, THAI)}
${face('plex-thai-latin-700.woff', 700, LATIN)}${face('plex-thai-thai-700.woff', 700, THAI)}
/* Spectrum — the direction chosen on 2026-09-26: white paper, the brand
   gradient as light, three real sites fanned over it */
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;background:#fbfbfd;color:#0d0f14;font-family:Plex;position:relative}
.mesh{position:absolute;right:-80px;top:-60px;width:760px;height:760px;filter:blur(60px);opacity:.9;
  background:radial-gradient(circle at 30% 30%,#4f6bff 0,transparent 45%),radial-gradient(circle at 70% 40%,#a35cff 0,transparent 42%),radial-gradient(circle at 55% 75%,#ff7a4d 0,transparent 45%)}
.col{position:absolute;left:72px;top:60px;bottom:56px;width:560px;display:flex;flex-direction:column;justify-content:space-between;z-index:2}
.sq{display:inline-block;width:.3em;height:.3em;margin-left:.08em;background:linear-gradient(120deg,#4f6bff,#a35cff 55%,#ff7a4d)}
.brand{font-size:20px;font-weight:700;letter-spacing:7px;display:flex;align-items:center;gap:9px}
.display{font-size:80px;font-weight:700;line-height:.98;letter-spacing:-1.5px}
.what{font-size:31px;font-weight:700;line-height:1.5;margin-top:26px}
.chips{display:flex;gap:10px;margin-top:22px}
.chips span{font-size:19px;font-weight:700;letter-spacing:1px;padding:6px 16px;border-radius:999px;background:#0d0f14;color:#fff}
.foot{font-size:19px;color:#5b5f6b;display:flex;gap:14px}
.card{position:absolute;width:430px;aspect-ratio:16/10;object-fit:cover;object-position:top;border:8px solid #fff;border-radius:12px;box-shadow:0 24px 50px rgba(40,20,90,.28);display:block}
</style></head><body>
<div class="mesh"></div>
<div class="col">
  <div class="brand">EFFICIENCY<i class="sq"></i></div>
  <div>
    <div class="display">Poetic<br>Engineering<i class="sq"></i></div>
    <div class="what">${whatWeDo[0]}<br>${whatWeDo[1]}</div>
    <div class="chips"><span>SEO</span><span>AEO</span><span>GEO</span></div>
  </div>
  <div class="foot"><span>efficiency.co.th</span><span>·</span><span>โทร 063 859 8423</span><span>·</span><span>ผลงานจริง ${projects} โครงการ</span></div>
</div>
<img class="card" src="${shot(stack[0])}" style="right:170px;top:78px;transform:rotate(-6deg)">
<img class="card" src="${shot(stack[1])}" style="right:40px;top:200px;transform:rotate(4deg)">
<img class="card" src="${shot(stack[2])}" style="right:130px;top:332px;transform:rotate(-1deg)">
</body></html>`;

const dir = mkdtempSync(join(tmpdir(), 'og-'));
const page = join(dir, 'card.html');
writeFileSync(page, html);

const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, '--hide-scrollbars',
  '--allow-file-access-from-files', `--user-data-dir=${join(dir, 'profile')}`, '--no-first-run', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

try {
  let target;
  for (let i = 0; i < 50 && !target; i++) {
    try { const r = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' }); if (r.ok) target = await r.json(); } catch {}
    await sleep(200);
  }
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pending = new Map();
  ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
  const send = (method, params = {}) => new Promise((res) => { const n = ++id; pending.set(n, res); ws.send(JSON.stringify({ id: n, method, params })); });

  await send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });
  await send('Page.enable');
  await send('Page.navigate', { url: pathToFileURL(page).href });
  await sleep(800);
  /* never photograph a fallback face: wait until both Plex subsets are in */
  const loaded = (await send('Runtime.evaluate', {
    expression: `document.fonts.ready.then(()=>Promise.all([...document.images].map(i=>i.decode()))).then(()=>[...document.fonts].filter(f=>f.status==='loaded').length)`,
    awaitPromise: true, returnByValue: true,
  })).result.result.value;
  if (loaded < 4) throw new Error(`only ${loaded}/4 font faces loaded — refusing to render with a fallback`);

  const shot = await send('Page.captureScreenshot', { format: 'png', clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 } });
  writeFileSync(OUT, Buffer.from(shot.result.data, 'base64'));
  console.log(`wrote ${OUT.replace(ROOT + '/', '')} · ${projects} projects · stack ${stack.join(', ')} · fonts ${loaded}/4`);
  ws.close();
} finally {
  chrome.kill();
  await sleep(300);
  rmSync(dir, { recursive: true, force: true });
}
