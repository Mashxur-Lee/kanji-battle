// A private room with real players: the hero makes a Boss room, three friends join with the code from their own
// windows (ordinary, real-time ones), they talk in the lobby chat and get ready. Only the hero's window is filmed.
const L = require('./lib.cjs');
const INIT = (o) => { try { if (location.origin.startsWith('http')) for (const [k, v] of Object.entries(o)) localStorage.setItem(k, v); } catch { /* about:blank */ } };
const click = (p, sel, i = 0) => p.evaluate(([s, i]) => { const e = [...document.querySelectorAll(s)].filter((x) => x.offsetParent)[i]; if (e) e.click(); return !!e; }, [sel, i]);
const setVal = (p, sel, v) => p.evaluate(([s, v]) => { const el = document.querySelector(s); if (!el) return; if (el.value !== v) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); } }, [sel, v]);
const say = async (p, text) => { await setVal(p, '#lobbyChatInput', text); await p.evaluate(() => document.getElementById('lobbyChatForm').requestSubmit()); };
// to the menu, out of any room left over from an earlier take
const home = async (p) => {
  for (let i = 0; i < 60; i++) {
    const sc = await p.evaluate(() => document.body?.dataset.screen);
    if (sc === 'menu') break;
    if (sc === 'lobby') { await click(p, '#leaveLobby'); await L.sleep(400); await click(p, '#confirmYes'); }
    await L.sleep(500);
  }
  await L.sleep(800); await p.evaluate(() => { for (const d of document.querySelectorAll('dialog[open]')) d.close(); });
};
(async () => {
  const hero = await L.login('hikari');
  // a 960x540 window at twice the pixels: the same 1920x1080 picture with everything a third larger (the faces and the chat are small)
  const det = await L.launchDet(2, 960, 540);
  const side = await L.chromium.launch({ args: ['--no-proxy-server'] });
  const friends = {};
  for (const n of ['sakura', 'kenji', 'mika']) {
    const me = await L.login(n);
    const ctx = await side.newContext({ viewport: { width: 1000, height: 640 }, serviceWorkers: 'block' });
    await ctx.addInitScript(INIT, { 'kb:token': me.token, 'kb:lang': 'en', 'kb:seenVersion': 'x', 'kb:3d': 'off', 'kb:tasksNoticeOff': '1' });
    const p = await ctx.newPage(); await p.goto(L.BASE);
    await home(p);
    await click(p, '#privateBtn');
    friends[n] = p;
  }
  { // the hero too may still be in the room of an earlier take
    const ctx = await side.newContext({ viewport: { width: 1000, height: 640 }, serviceWorkers: 'block' });
    await ctx.addInitScript(INIT, { 'kb:token': hero.token, 'kb:lang': 'en', 'kb:seenVersion': 'x', 'kb:3d': 'off', 'kb:tasksNoticeOff': '1' });
    const p = await ctx.newPage(); await p.goto(L.BASE); await home(p); await ctx.close();
  }
  const o = await L.detOpen(det, hero.token, { time: process.env.TIME || 'day' });
  await click(o.p, '#privateBtn'); await L.sleep(1500);
  await click(o.p, '#create'); await L.sleep(2000);
  await click(o.p, '.mode-card[data-mode="boss"]'); await L.sleep(3000);
  const code = (await o.p.evaluate(() => document.getElementById('code').textContent.trim()));
  L.log('room ' + code + ' screen ' + await o.p.evaluate(() => document.body.dataset.screen));
  for (const p of Object.values(friends)) await setVal(p, '#joinCode', code);
  const text = 'the dragon goes down tonight';
  const N = Number(process.env.N || 240);
  const max = await o.p.evaluate(() => Math.max(0, document.scrollingElement.scrollHeight - innerHeight));
  L.log('scroll max ' + max);
  const ease = (t) => t * t * (3 - 2 * t);
  await L.vclip(o, '2d-lobby', N, async (f) => {
    if (f === 12) await click(friends.sakura, '#join');
    if (f === 40) await click(friends.kenji, '#join');
    if (f === 58) await say(friends.sakura, 'hi hi! boss run?');
    if (f === 70) await click(friends.mika, '#join');
    if (f === 92) await say(friends.kenji, 'bringing my Ember staff');
    // down to the chat once everyone is in (the page is taller than the window)
    if (f >= 84 && f <= 118) await o.p.evaluate((y) => { document.scrollingElement.scrollTop = y; }, (await o.p.evaluate(() => Math.max(0, document.scrollingElement.scrollHeight - innerHeight))) * ease((f - 84) / 34));
    if (f > 118 && f % 10 === 0) await o.p.evaluate(() => { document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight; });
    if (f >= 112 && f <= 112 + text.length * 2 && f % 2 === 0) await setVal(o.p, '#lobbyChatInput', text.slice(0, (f - 112) / 2));
    if (f === 112 + text.length * 2 + 8) await o.p.evaluate(() => document.getElementById('lobbyChatForm').requestSubmit());
    if (f === 125) await click(friends.sakura, '#readyBtn');
    if (f === 150) await click(friends.kenji, '#readyBtn');
    if (f === 192) await say(friends.mika, 'ready!!');
    if (f === 204) await click(friends.mika, '#readyBtn');
  });
  await L.withTimeout(side.close(), 20000, 'close').catch(() => {}); await L.withTimeout(det.close(), 20000, 'close').catch(() => {});
  L.log('done'); process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
