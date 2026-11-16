// The game on a phone (390x844): the menu, a 3D duel with the game's own battle keyboard, the flashcards.
const L = require('./lib.cjs');
const W = 390, H = 844, DSF = 1.5;
const click = (p, sel, i = 0) => p.evaluate(([s, i]) => { const e = [...document.querySelectorAll(s)].filter((x) => x.offsetParent)[i]; if (e) e.click(); return !!e; }, [sel, i]);
// the player on the battle keyboard: reads the word, taps its romaji key by key, then Cast
function thumbs(p, { think = 12, per = 3 } = {}) {
  let plan = null, last = '';
  const tap = (sel, ch) => p.evaluate(([s, c]) => { const b = [...document.querySelectorAll(s)].find((x) => c === null || x.textContent === c); if (b) b.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true })); return !!b; }, [sel, ch]);
  return async (f) => {
    if (f % 45 === 20) await p.evaluate(() => { const b = document.getElementById('resumeBtn'); if (b && b.offsetParent) b.click(); });
    if (!plan) {
      if (f % 2) return;
      const st = await p.evaluate(() => { const i = document.getElementById('answer'); return { k: document.getElementById('kanji').textContent.trim(), ok: !!i && !i.disabled && i.dataset.locked !== '1' && document.body.dataset.screen === 'battle' }; });
      if (st.ok && st.k && st.k !== last) { last = st.k; const r = L.reading.get(st.k); plan = { text: r ? L.toRomaji(r) : 'nani', at: f + think, n: 0 }; }
    } else if (f >= plan.at && (f - plan.at) % per === 0) {
      if (plan.n < plan.text.length) { await tap('#gameKb .gk.ch', plan.text[plan.n]); plan.n++; }
      else { await tap('#gameKb .gk.cast', null); plan = null; }
    }
  };
}
const SCENES = {
  menu: { who: 'yuto', time: 'day', frames: 170, run: async (o) => {
    const ease = (t) => t * t * (3 - 2 * t);
    const max = await o.p.evaluate(() => Math.max(0, document.scrollingElement.scrollHeight - innerHeight));
    return { f: async (f) => { const t = f < 35 ? 0 : f > 135 ? 1 : ease((f - 35) / 100); await o.p.evaluate((y) => { document.scrollingElement.scrollTop = y; }, Math.min(max, 620) * t); } };
  } },
  battle: { who: 'akira', time: 'sunset', frames: 200, run: async (o) => { await L.offlineBattle(o, 'reading', 1, 'N4'); return { f: thumbs(o.p) }; } },
  study: { who: 'yuto', time: 'day', frames: 170, run: async (o) => {
    await click(o.p, '#studyBtn'); await L.sleep(3500); await click(o.p, '#studyAll'); await L.sleep(2500);
    return { f: async (f) => { if (f === 30) await click(o.p, '#showAnswer'); if (f === 70) await click(o.p, '#fcStrokes'); if (f === 140) await click(o.p, '.rate.good'); } };
  } },
};
(async () => {
  for (const name of (process.argv[2] || 'menu,battle,study').split(',')) {
    const s = SCENES[name];
    await L.take(name, async () => {
      const me = await L.login(process.env.WHO || s.who);
      const b = await L.launchDet(DSF, W, H);
      try {
        const o = await L.withTimeout(L.detOpen(b, me.token, { time: s.time, w: W, h: H, dsf: DSF, mobile: true }), 120000, 'open');
        L.log('phone: ' + JSON.stringify(await o.p.evaluate(() => ({ w: innerWidth, h: innerHeight, dpr: devicePixelRatio, coarse: matchMedia('(pointer: coarse)').matches, fine: matchMedia('(any-pointer: fine)').matches }))));
        const r = await s.run(o);
        await L.vclip(o, 'ph-' + name, Number(process.env.N || s.frames), r.f);
      } finally { await L.withTimeout(b.close(), 30000, 'close').catch(() => {}); }
    });
  }
  L.log('done'); process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
