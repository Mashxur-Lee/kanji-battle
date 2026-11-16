const L = require('./lib.cjs');
(async () => {
  const tok = {}, id = {};
  for (const n of ['hikari', 'sakura', 'kenji', 'mika', 'yuto']) { const r = await L.login(n); tok[n] = r.token; id[n] = r.user.id; }
  const say = (from, to, text) => L.api('POST', `/api/messages/${to}`, { text }, tok[from]);
  await say('sakura', id.hikari, 'ready for the daily? I got 10/10 today');
  const mine = (await say('hikari', id.sakura, 'not yet! those N2 readings got me yesterday')).message;
  if (mine) await L.api('PUT', `/api/messages/m/${mine.id}/react`, { emoji: '🔥' }, tok.sakura);
  await say('sakura', id.hikari, 'rematch in Rapid after? 速');
  await say('yuto', id.hikari, 'gg — that x12 combo was unfair');
  const g = await L.api('POST', '/api/groups', { name: 'N2 study club', members: [id.sakura, id.kenji, id.mika] }, tok.hikari);
  console.log('group', JSON.stringify(g).slice(0, 120));
  if (g && g.id) {
    const gid = encodeURIComponent(g.id);
    await L.api('POST', `/api/messages/${gid}`, { text: 'who is up for Boss tonight? 竜' }, tok.kenji);
    await L.api('POST', `/api/messages/${gid}`, { text: 'me! bringing my Abyss staff' }, tok.mika);
    await L.api('POST', `/api/messages/${gid}`, { text: 'castle arena at sunset?' }, tok.sakura);
  }
  process.exit(0);
})();
