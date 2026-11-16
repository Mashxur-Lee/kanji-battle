// 3D battles against the AI that run in the page (offline mode), filmed frame by frame.
const L = require('./lib.cjs');
const SCENES = {
  duel: { who: 'akira', mode: 'reading', bots: 1, level: 'N4', bg: 'plains', time: 'sunset', frames: 380, think: 9, per: 2,
    pan: [[0, 0, 0], [20, -0.85, -0.1], [95, 0.8, -0.25], [150, 0, 0]] },
  boss: { who: 'sora', mode: 'boss', bots: 3, level: 'N4', bg: 'castle', time: 'sunset', frames: 340, think: 9, per: 2,
    pan: [[0, 0, 0], [25, 0.8, -0.3], [100, -0.8, -0.35], [160, 0, -0.1]] },
  // a long run of right answers: the combo counter, On fire at x5
  combo: { who: 'haru', mode: 'reading', bots: 1, level: 'N5', bg: 'worldtree', time: 'night', frames: 450, think: 5, per: 1,
    pan: [[0, 0, 0], [30, 0.45, -0.15], [130, -0.35, -0.1], [210, 0, 0]] },
  rapid: { who: 'kaito', mode: 'rapid', bots: 1, level: 'N5', bg: 'forest', time: 'night', frames: 220, think: 7, per: 2,
    pan: [[0, 0, 0], [15, 0.6, -0.2], [70, -0.5, -0.2], [110, 0, 0]] },
};
(async () => {
  const names = (process.argv[2] || 'duel,boss,rapid').split(',');
  for (const name of names) {
    const s = SCENES[name];
    await L.take(name, async () => {
      const me = await L.login(s.who);
      const r = await L.api('PUT', '/api/me/background', { background: s.bg }, me.token);
      if (r.error) L.log('bg: ' + r.error);
      const b = await L.launchDet();
      try {
        const o = await L.withTimeout(L.detOpen(b, me.token, { time: s.time }), 120000, 'open');
        await L.withTimeout(L.offlineBattle(o, s.mode, s.bots, s.level), 240000, 'battle');
        if ((await o.p.evaluate(() => document.body.dataset.screen)) !== 'battle') throw new Error('not in battle');
        const t = L.typist(o.p, { think: s.think, per: s.per });
        const n = await L.vclip(o, '3d-' + name, Number(process.env.N || s.frames), L.both(L.panner(o.p, s.pan), t));
        L.log(`${name} answered ${t.got.join(' ')}`);
        if (n < Math.min(60, Number(process.env.N || 60))) throw new Error('too few frames');
      } finally { await L.withTimeout(b.close(), 30000, 'close').catch(() => {}); }
    });
  }
  L.log('done'); process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
