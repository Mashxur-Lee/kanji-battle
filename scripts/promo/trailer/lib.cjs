// Trailer filming helpers (after 0.9.9.9.6.8): Chrome under begin-frame control, the page's clock advanced one frame at a time (30 fps),
// so every frame is drawn in full however slow the software renderer is.
const { chromium } = require('playwright');
const fs = require('fs');
const ROOT = require('path').resolve(__dirname, '../../..');
const BASE = process.env.BASE || 'http://localhost:3130';
const OUT = process.env.OUT || '/tmp/kw-frames';
const FPS = 30, STEP = 1000 / FPS;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const T0 = Date.now();
const log = (s) => console.log(`[${((Date.now() - T0) / 1000).toFixed(0)}s] ${s}`);
const withTimeout = (pr, ms, what) => Promise.race([pr, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout ' + what)), ms))]);
const { toRomaji } = require(ROOT + '/src/shared/kana.ts');
const vocab = JSON.parse(fs.readFileSync(ROOT + '/data/vocab.json', 'utf8'));
const reading = new Map(); for (const v of vocab) if (!reading.has(v.kanji)) reading.set(v.kanji, v.reading);
const strokesOf = new Map(JSON.parse(fs.readFileSync(ROOT + '/data/kanji-patterns.json', 'utf8')).map((e) => [e[0], e[2]]));

const api = async (m, u, b, t) => { try { return await (await fetch(BASE + u, { method: m, headers: { 'Content-Type': 'application/json', ...(t ? { Authorization: `Bearer ${t}` } : {}) }, body: b ? JSON.stringify(b) : undefined })).json(); } catch (e) { return { error: String(e) }; } };
const login = (username, password = 'secret12') => api('POST', '/api/login', { username, password });

const DET_ARGS = ['--deterministic-mode', '--enable-begin-frame-control', '--disable-new-content-rendering-timeout', '--run-all-compositor-stages-before-draw', '--disable-threaded-animation', '--disable-threaded-scrolling', '--disable-checker-imaging', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required', '--no-proxy-server', '--force-color-profile=srgb'];
const launchDet = (dsf = 1.5, w = 1280, h = 720) => chromium.launch({ args: [...DET_ARGS, `--force-device-scale-factor=${dsf}`, `--window-size=${w},${h}`] });

// a timezone that puts the page's clock at the wanted hour (the arenas follow the local time: day / sunset / night)
const tzFor = (hour) => { const utc = new Date().getUTCHours(); let off = ((hour - utc) % 24 + 24) % 24; if (off > 14) off -= 24; return off === 0 ? 'UTC' : `Etc/GMT${off > 0 ? '-' : '+'}${Math.abs(off)}`; };
const HOUR = { day: 11, sunset: 18, night: 22 };

/** opens the game signed in; frames are pumped until vclip takes over the clock */
async function detOpen(browser, token, { w = 1280, h = 720, dsf = 1.5, time = 'day', threeD = true, lang = 'en', store = {}, mobile = false } = {}) {
  const ctx = await browser.newContext({ viewport: null, serviceWorkers: 'block', timezoneId: tzFor(HOUR[time] ?? 11), ...(mobile ? { isMobile: true, hasTouch: true } : {}) });
  await ctx.addInitScript((o) => { try { if (location.origin.startsWith('http')) for (const [k, v] of Object.entries(o)) localStorage.setItem(k, v); } catch { /* about:blank */ } },
    { 'kb:token': token, 'kb:lang': lang, 'kb:seenVersion': 'x', 'kb:3d': threeD ? 'on' : 'off', 'kb:tasksNoticeOff': '1', 'kb:uizoom': '1', 'kb:filming': '1', ...store });
  const p = await withTimeout(ctx.newPage(), 30000, 'newPage');
  p.on('pageerror', (e) => log('pageerror ' + String(e).slice(0, 200)));
  const cdp = await ctx.newCDPSession(p);
  await withTimeout(p.goto(BASE), 90000, 'goto');
  await sleep(6000); // the page loads first: a frame begun in the first moments of the load never comes back
  const st = { pumping: true, n: 0 };
  st.pump = (async () => { while (st.pumping) { const t = Date.now(); try { await cdp.send('HeadlessExperimental.beginFrame', { interval: 33 }); st.n++; const d = Date.now() - t; if (d > 8000) log(`pump frame ${st.n} took ${(d / 1000).toFixed(1)}s`); } catch (e) { log('pump err: ' + String(e).slice(0, 140)); await sleep(1000); } await sleep(15); } })();
  st.watch = setInterval(() => { st.seen = st.seen === st.n ? (st.same = (st.same || 0) + 1, st.n) : (st.same = 0, st.n); if (st.pumping && st.same && st.same % 6 === 0) log(`pump: no new frame for ${st.same * 5}s (at ${st.n})`); if (st.pumping && st.same >= 18) { log('stuck: giving up'); process.exit(3); } }, 5000);
  st.watch.unref();
  let ok = false;
  for (let i = 0; i < 60 && !ok; i++) { ok = await withTimeout(p.evaluate(() => document.body?.dataset.screen === 'menu' && !document.getElementById('menu').hidden), 15000, 'eval').catch(() => false); if (!ok) await sleep(1000); }
  log('menu ' + ok); if (!ok) throw new Error('no menu: ' + await withTimeout(p.evaluate(() => document.body?.dataset.screen), 5000, 'ev').catch(() => '?'));
  await sleep(2500);
  await p.evaluate(() => { for (const d of document.querySelectorAll('dialog[open]')) d.close(); });
  return { ctx, p, cdp, st, w, h, dsf };
}

/** films `frames` frames into OUT/<name>/NNNNN.jpg; onFrame(f) runs before each */
async function vclip(o, name, frames, onFrame) {
  if (o.st.pumping) { o.st.pumping = false; clearInterval(o.st.watch); await withTimeout(o.st.pump, 400000, 'pump end'); log('pump ended at frame ' + o.st.n); await o.cdp.send('Emulation.setVirtualTimePolicy', { policy: 'pause' }); o.ticks = Number(process.hrtime.bigint() / 1000000n) + 2000; }
  const dir = `${OUT}/${name}`; fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(`${dir}/count.txt`, '0'); // (frames are written over; count.txt says how many belong to this take)
  let n = 0, prev = null; const t0 = Date.now();
  for (let f = 0; f < frames; f++) {
    if (onFrame) { const r = await onFrame(f); if (r === 'stop') break; }
    await withTimeout(new Promise((res) => { o.cdp.once('Emulation.virtualTimeBudgetExpired', res); o.cdp.send('Emulation.setVirtualTimePolicy', { policy: o.netPause ? 'pauseIfNetworkFetchesPending' : 'advance', budget: STEP }); }), 120000, 'budget');
    o.ticks += STEP;
    let r = null;
    for (let k = 0; k < 120 && !r; k++) {
      try { r = await withTimeout(o.cdp.send('HeadlessExperimental.beginFrame', { frameTimeTicks: o.ticks, interval: STEP, screenshot: { format: 'jpeg', quality: 93 } }), 180000, 'frame'); }
      catch (e) { if (!/pending/.test(String(e))) throw e; await sleep(300); } // (the last warm-up frame still drawing)
    }
    if (!r) throw new Error('no frame');
    const data = r.screenshotData ? Buffer.from(r.screenshotData, 'base64') : prev;
    if (data) { prev = data; fs.writeFileSync(`${dir}/${String(++n).padStart(5, '0')}.jpg`, data); }
    if (f % 60 === 0) log(`${name} frame ${f}/${frames}, ${((Date.now() - t0) / (f + 1) / 1000).toFixed(2)} s/frame`);
  }
  fs.writeFileSync(`${dir}/count.txt`, String(n));
  log(`${name}: ${n} frames`);
  return n;
}

/** the player, frame by frame: a new word -> read it for a moment, type it a letter every `per` frames, Enter */
function typist(p, { think = 16, per = 3, miss = () => false } = {}) {
  let plan = null, last = '';
  const got = [];
  const fn = async (f) => {
    if (f % 45 === 20) await p.evaluate(() => { const b = document.getElementById('resumeBtn'); if (b && b.offsetParent) b.click(); });
    if (!plan) {
      if (f % 2) return;
      const st = await p.evaluate(() => { const i = document.getElementById('answer'); return { k: document.getElementById('kanji').textContent.trim(), ok: !!i && !i.disabled && i.dataset.locked !== '1' && document.body.dataset.screen === 'battle' }; });
      if (st.ok && st.k && st.k !== last) { last = st.k; const r = reading.get(st.k); plan = { text: r ? toRomaji(r) : 'nani', at: f + think, k: st.k }; }
    } else if (f >= plan.at) {
      const i = Math.floor((f - plan.at) / per);
      if (i <= plan.text.length) await p.evaluate((v) => { const el = document.getElementById('answer'); if (el.value !== v) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); } }, plan.text.slice(0, i));
      if (i === plan.text.length + 2) { await p.evaluate(() => document.getElementById('answer').dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))); got.push(plan.k); plan = null; }
    }
  };
  fn.got = got;
  return fn;
}

/** a private room against the AI that runs in the page (offline mode): from the menu to the battle screen */
async function offlineBattle(o, mode, bots = 1, level = 'N5', screens = ['battle']) {
  const p = o.p;
  await p.context().route('**/api/online', (r) => r.abort());
  // offline mode has to be on before the room is made (or the room is the server's, and runs on the server's clock)
  let off = false;
  for (let i = 0; i < 40 && !off; i++) { if (i % 10 === 0) await p.evaluate(() => window.dispatchEvent(new Event('offline'))); await sleep(500); off = await p.evaluate(() => document.body.classList.contains('offline')); }
  if (!off) throw new Error('offline mode did not start (' + await p.evaluate(() => document.visibilityState) + ')');
  await sleep(800);
  await p.evaluate(() => document.getElementById('privateBtn').click()); await sleep(1500);
  await p.evaluate(() => document.getElementById('create').click()); await sleep(2000);
  await p.evaluate((m) => document.querySelector(`.mode-card[data-mode="${m}"]`)?.click(), mode); await sleep(2500);
  for (let i = 0; i < bots; i++) { await p.evaluate((lv) => { const s = document.getElementById('botLevel'); if (s) s.value = lv; document.getElementById('addBotBtn')?.click(); }, level); await sleep(1500); }
  await p.evaluate(() => document.getElementById('readyBtn')?.click()); await sleep(1200);
  await p.evaluate(() => { const s = document.getElementById('start'); if (s && !s.hidden) s.click(); }); await sleep(2000);
  await p.evaluate(() => document.getElementById('ready')?.click());
  for (let i = 0; i < 90 && !screens.includes(await p.evaluate(() => document.body.dataset.screen)); i++) await sleep(1000);
  log(`${mode}: ${await p.evaluate(() => `${document.body.dataset.screen} 3d=${document.body.classList.contains('has-3d')} ${document.getElementById('error')?.textContent || ''}`)}`);
}

module.exports = { chromium, fs, ROOT, BASE, OUT, FPS, STEP, sleep, log, withTimeout, toRomaji, vocab, reading, strokesOf, api, login, launchDet, detOpen, vclip, typist, offlineBattle, tzFor };

/** a slow, eased look around with the game's own mouse-look: keyframes [[frame, x, y], ...] in -1..1 */
function panner(p, keys) {
  const ease = (t) => t * t * (3 - 2 * t);
  return async (f) => {
    if (f > keys[keys.length - 1][0] + 1) return;
    let a = keys[0], b = keys[keys.length - 1];
    for (let i = 0; i + 1 < keys.length; i++) if (f >= keys[i][0] && f <= keys[i + 1][0]) { a = keys[i]; b = keys[i + 1]; break; }
    const t = b[0] === a[0] ? 1 : ease(Math.min(1, Math.max(0, (f - a[0]) / (b[0] - a[0]))));
    const x = a[1] + (b[1] - a[1]) * t, y = a[2] + (b[2] - a[2]) * t;
    await p.evaluate(([x, y]) => window.dispatchEvent(new PointerEvent('pointermove', { pointerType: 'mouse', clientX: (x + 1) / 2 * innerWidth, clientY: (y + 1) / 2 * innerHeight, bubbles: true })), [x, y]);
  };
}
const both = (...fns) => async (f) => { for (const fn of fns) { const r = await fn(f); if (r === 'stop') return r; } };
/** runs a take up to `tries` times in a fresh window (a window under begin-frame control sometimes gets stuck) */
async function take(name, fn, tries = 1) {
  for (let i = 1; i <= tries; i++) {
    try { await fn(); return true; } catch (e) { log(`take ${name} #${i} failed: ${String(e).slice(0, 200)}`); }
  }
  return false;
}
Object.assign(module.exports, { panner, both, take });
