// Customize (the Hero Locker) as stills from an ordinary window: its WebGL previews stall under begin-frame control
const L = require('./lib.cjs');
(async () => {
  const me = await L.login('rin');
  await L.api('PUT', '/api/me/background', { background: 'worldtree' }, me.token);
  const b = await L.chromium.launch({ args: ['--no-proxy-server', '--force-color-profile=srgb'] });
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1.5, serviceWorkers: 'block', timezoneId: L.tzFor(18) });
  await ctx.addInitScript((o) => { try { if (location.origin.startsWith('http')) for (const [k, v] of Object.entries(o)) localStorage.setItem(k, v); } catch {} }, { 'kb:token': me.token, 'kb:lang': 'en', 'kb:seenVersion': 'x', 'kb:3d': 'on', 'kb:tasksNoticeOff': '1', 'kb:uizoom': '1', 'kb:filming': '1' });
  const p = await ctx.newPage();
  await p.goto(L.BASE);
  for (let i = 0; i < 40; i++) { if (await p.evaluate(() => document.body?.dataset.screen === 'menu')) break; await L.sleep(500); }
  await L.sleep(1500);
  const out = (process.env.OUT || '/tmp/kw-frames') + '/still-customize'; L.fs.mkdirSync(out, { recursive: true });
  const shot = async (n) => { await p.screenshot({ path: `${out}/${n}.jpg`, type: 'jpeg', quality: 93, timeout: 120000 }); L.log('still ' + n); };
  const click = (sel, i = 0) => p.evaluate(([s, i]) => [...document.querySelectorAll(s)].filter((x) => x.offsetParent)[i]?.click(), [sel, i]);
  await click('#customizeBtn'); await L.sleep(16000); await shot(1);
  await click('#lkLeft .lk-slot', 0); await L.sleep(5000); await shot(2);
  await click('#lkTray button', 1); await L.sleep(7000); await shot(3);
  await click('#lkTray button', 3); await L.sleep(7000); await shot(4);
  await click('#lkLeft .lk-slot', 1); await L.sleep(5000); await click('#lkTray button', 4); await L.sleep(7000); await shot(5);
  await click('#lkLeft .lk-slot', 2); await L.sleep(5000); await click('#lkTray button', 3); await L.sleep(8000); await shot(6);
  await b.close(); process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
