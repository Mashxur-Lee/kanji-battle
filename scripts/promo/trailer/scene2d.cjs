// The screens around the battles, filmed frame by frame as the hero (months of study, friends, a league).
// (Customize is not here: its WebGL previews stall under begin-frame control — stills.cjs takes it as stills.)
const L = require('./lib.cjs');
const click = (p, sel, i = 0) => p.evaluate(([s, i]) => { const e = [...document.querySelectorAll(s)].filter((x) => x.offsetParent)[i]; if (e) e.click(); return !!e; }, [sel, i]);
const clickText = (p, sel, re) => p.evaluate(([s, r]) => { const e = [...document.querySelectorAll(s)].filter((x) => x.offsetParent).find((x) => new RegExp(r).test(x.textContent)); if (e) e.click(); return !!e; }, [sel, re]);
const setVal = (p, sel, v) => p.evaluate(([s, v]) => { const el = document.querySelector(s); if (!el) return; el.focus(); if (el.value !== v) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); } }, [sel, v]);
const ease = (t) => t * t * (3 - 2 * t);
const SCENES = {
  menu: { who: 'hikari', frames: 180, run: async (o) => ({ f: async (f) => { if (f === 45 || f === 90 || f === 135) await click(o.p, '.mcc-next'); } }) },
  progress: { who: 'hikari', frames: 400, run: async (o) => {
    await click(o.p, '#progressBtn');
    for (let i = 0; i < 60; i++) { if (await o.p.evaluate(() => document.querySelectorAll('#progKnow *').length > 5 && document.querySelectorAll('#progGrid button, #progGrid .word').length + document.querySelectorAll('#progGrid *').length > 50)) break; await L.sleep(1000); }
    await L.sleep(2500);
    const max = await o.p.evaluate(() => { const se = document.scrollingElement; return Math.max(0, se.scrollHeight - innerHeight); });
    L.log('progress scroll max ' + max);
    // top (this week, what you know, reviews ahead) -> month goals and the calendar -> badges -> mastery grid
    const stops = [[0, 0], [70, 0], [150, Math.min(max, 560)], [185, Math.min(max, 560)], [265, Math.min(max, 1180)], [300, Math.min(max, 1180)], [370, Math.min(max, 1800)], [400, Math.min(max, 1800)]];
    return { f: async (f) => { let a = stops[0], b = stops[stops.length - 1]; for (let i = 0; i + 1 < stops.length; i++) if (f >= stops[i][0] && f <= stops[i + 1][0]) { a = stops[i]; b = stops[i + 1]; break; } const t = b[0] === a[0] ? 1 : ease((f - a[0]) / (b[0] - a[0])); await o.p.evaluate((y) => { document.scrollingElement.scrollTop = y; }, a[1] + (b[1] - a[1]) * t); } };
  } },
  study: { who: 'hikari', frames: 300, run: async (o) => {
    await click(o.p, '#studyBtn'); await L.sleep(3500);
    return { f: async (f) => {
      if (f === 25) await click(o.p, '#studyAll');
      if (f === 85) await click(o.p, '#showAnswer');
      if (f === 125) await click(o.p, '#fcStrokes');
      if (f === 225) await click(o.p, '.rate.good');
      if (f === 262) await click(o.p, '#showAnswer');
    } };
  } },
  kana: { who: 'hikari', frames: 130, run: async (o) => { await click(o.p, '#kanaBtn'); await L.sleep(3500); return { f: async (f) => { if (f === 55) await clickText(o.p, '#kana button', 'カタカナ'); } }; } },
  daily: { who: 'hikari', frames: 130, run: async (o) => { await click(o.p, '#dailyBtn'); await L.sleep(4000); return { f: async () => {} }; } },
  messages: { who: 'hikari', frames: 220, run: async (o) => {
    await click(o.p, '#inboxBtn'); await L.sleep(3500);
    const text = 'count me in — the dragon goes down tonight';
    return { f: async (f) => {
      if (f === 15) await clickText(o.p, '#msgList *', '^.{0,3}N2 study club');
      if (f === 15) await clickText(o.p, '.msg-conv', 'N2 study');
      if (f >= 60 && f <= 60 + text.length * 2 && f % 2 === 0) await setVal(o.p, '#msgInput', text.slice(0, (f - 60) / 2));
      if (f === 60 + text.length * 2 + 12) { await click(o.p, '#msgSend'); }
    } };
  } },
  dict: { who: 'hikari', frames: 190, run: async (o) => {
    const q = 'mahou';
    return { f: async (f) => {
      if (f === 12) await click(o.p, '#dictRailTab');
      if (f >= 45 && f <= 45 + q.length * 6 && f % 6 === 3) await setVal(o.p, '#dictRailQ', q.slice(0, Math.floor((f - 45) / 6) + 1));
      if (f === 130) await click(o.p, '#dictRailBody button, #dictRailBody li, #dictRailBody .dr-hit');
    } };
  } },
  modes: { who: 'hikari', frames: 130, run: async (o) => { await click(o.p, '#privateBtn'); await L.sleep(1500); await click(o.p, '#create'); await L.sleep(3500); return { f: async () => {} }; } },
};
(async () => {
  for (const name of (process.argv[2] || Object.keys(SCENES).join(',')).split(',')) {
    const s = SCENES[name];
    await L.take(name, async () => {
      const me = await L.login(s.who);
      if (s.bg) await L.api('PUT', '/api/me/background', { background: s.bg }, me.token);
      const b = await L.launchDet();
      try {
        const o = await L.withTimeout(L.detOpen(b, me.token, { time: s.time || 'day' }), 120000, 'open');
        const r = await s.run(o);
        await L.vclip(o, '2d-' + name, Number(process.env.N || s.frames), r.f);
      } finally { await L.withTimeout(b.close(), 30000, 'close').catch(() => {}); }
    });
  }
  L.log('done'); process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
