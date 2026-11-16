// Customize (the Hero Locker) in motion. Its WebGL previews stall under begin-frame control, so this one is filmed in
// an ordinary headless window with the page's clocks taken over by hand: performance.now, Date.now, requestAnimationFrame
// and the timers move 33⅓ ms a frame, and CSS animations are set to the same time through the Web Animations API.
const L = require('./lib.cjs');
const SHIM = () => {
  const realNow = performance.now.bind(performance), realDate = Date.now.bind(Date);
  const realRaf = window.requestAnimationFrame.bind(window), realCaf = window.cancelAnimationFrame.bind(window);
  const realSetT = window.setTimeout.bind(window), realClrT = window.clearTimeout.bind(window), realSetI = window.setInterval.bind(window), realClrI = window.clearInterval.bind(window);
  let manual = false, v = 0, dOff = 0, seq = 1e9;
  const rafs = new Map(), timers = new Map();
  performance.now = () => (manual ? v : realNow());
  Date.now = () => (manual ? Math.round(v + dOff) : realDate());
  window.requestAnimationFrame = (cb) => { if (!manual) return realRaf(cb); const id = ++seq; rafs.set(id, cb); return id; };
  window.cancelAnimationFrame = (id) => { if (rafs.delete(id)) return; realCaf(id); };
  window.setTimeout = (fn, ms, ...a) => { if (!manual || typeof fn !== 'function') return realSetT(fn, ms, ...a); const id = ++seq; timers.set(id, { fn, a, due: v + Math.max(0, ms || 0), every: 0 }); return id; };
  window.setInterval = (fn, ms, ...a) => { if (!manual || typeof fn !== 'function') return realSetI(fn, ms, ...a); const id = ++seq; timers.set(id, { fn, a, due: v + Math.max(1, ms || 0), every: Math.max(1, ms || 0) }); return id; };
  window.clearTimeout = (id) => { if (timers.delete(id)) return; realClrT(id); };
  window.clearInterval = (id) => { if (timers.delete(id)) return; realClrI(id); };
  const anims = () => { for (const a of document.getAnimations()) { try { if (a.__v0 === undefined) { a.__v0 = v - (Number(a.currentTime) || 0); a.pause(); } a.currentTime = Math.max(0, v - a.__v0); } catch { /* finished */ } } };
  window.__film = {
    start() { v = realNow(); dOff = realDate() - v; manual = true; anims(); },
    step(dt) {
      v += dt;
      for (let guard = 0; guard < 200; guard++) {
        let next = null, nid = 0;
        for (const [id, t] of timers) if (t.due <= v && (!next || t.due < next.due)) { next = t; nid = id; }
        if (!next) break;
        if (next.every) next.due += next.every; else timers.delete(nid);
        try { next.fn(...next.a); } catch (e) { console.error(e); }
      }
      const run = [...rafs.values()]; rafs.clear();
      for (const cb of run) { try { cb(v); } catch (e) { console.error(e); } }
      anims();
    },
  };
};
(async () => {
  const me = await L.login(process.env.WHO || 'rin');
  await L.api('PUT', '/api/me/background', { background: process.env.BG || 'worldtree' }, me.token);
  const b = await L.chromium.launch({ args: ['--no-proxy-server', '--force-color-profile=srgb'] });
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1.5, serviceWorkers: 'block', timezoneId: L.tzFor(18) });
  await ctx.addInitScript(SHIM);
  await ctx.addInitScript((o) => { try { if (location.origin.startsWith('http')) for (const [k, v] of Object.entries(o)) localStorage.setItem(k, v); } catch {} }, { 'kb:token': me.token, 'kb:lang': 'en', 'kb:seenVersion': 'x', 'kb:3d': 'on', 'kb:tasksNoticeOff': '1', 'kb:uizoom': '1', 'kb:filming': '1' });
  const p = await ctx.newPage();
  p.on('pageerror', (e) => L.log('pageerror ' + String(e).slice(0, 200)));
  await p.goto(L.BASE);
  for (let i = 0; i < 40; i++) { if (await p.evaluate(() => document.body?.dataset.screen === 'menu')) break; await L.sleep(500); }
  await L.sleep(1500);
  const click = (sel, i = 0) => p.evaluate(([s, i]) => [...document.querySelectorAll(s)].filter((x) => x.offsetParent)[i]?.click(), [sel, i]);
  await click('#customizeBtn'); await L.sleep(18000);
  const N = Number(process.env.N || 262);
  const dir = `${L.OUT}/v-customize`; L.fs.mkdirSync(dir, { recursive: true }); L.fs.writeFileSync(`${dir}/count.txt`, '0');
  await p.evaluate(() => window.__film.start());
  const t0 = Date.now(); let n = 0;
  for (let f = 0; f < N; f++) {
    if (f === 100) await click('#lkLeft .lk-slot', 0);          // Character
    if (f === 132) await click('#lkTray button', 1);            // the Knight
    if (f === 170) await click('#lkTray button', 3);            // the Wizard
    if (f === 208) await click('#lkLeft .lk-slot', 1);          // Magic staff
    if (f === 232) await click('#lkTray button', 4);            // the Void staff
    await p.evaluate((dt) => window.__film.step(dt), L.STEP);
    await p.screenshot({ path: `${dir}/${String(++n).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 93, timeout: 120000 });
    if (f % 30 === 0) L.log(`customize frame ${f}/${N}, ${((Date.now() - t0) / (f + 1) / 1000).toFixed(2)} s/frame`);
  }
  L.fs.writeFileSync(`${dir}/count.txt`, String(n));
  L.log('customize: ' + n + ' frames');
  await b.close(); process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
