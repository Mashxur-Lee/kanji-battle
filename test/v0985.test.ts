import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { InsightsService } from '../src/server/study/InsightsService';

test('feedback: bug reports and suggestions reach the inbox, with the player name; at most 5 in 10 minutes', async () => {
  const store = new MemoryStore();
  let now = 1_000_000;
  const ins = new InsightsService(store, () => now);
  const u = await store.create({ username: 'tester', passwordHash: 'x', role: 'user' } as never);
  await ins.feedback(u, 'bug', 'The pad does not clear', 'v0.9.8.5');
  await ins.feedback(u, 'suggestion', 'Add a dark forest background', '');
  const r = await store.reports(10);
  assert.deepEqual(r.map((x) => [x.kind, x.username, x.text, x.done]), [['suggestion', 'tester', 'Add a dark forest background', false], ['bug', 'tester', 'The pad does not clear', false]]);
  await assert.rejects(ins.feedback(u, 'bug', 'x', ''), /few words/);
  for (let i = 0; i < 3; i++) await ins.feedback(u, 'bug', `report ${i}`, '');
  await assert.rejects(ins.feedback(u, 'bug', 'one more', ''), /a lot at once/);
  now += 11 * 60_000;
  await ins.feedback(u, 'bug', 'later', '');
  await store.setReportDone(r[0].id, true);
  assert.equal((await store.reports(10)).find((x) => x.id === r[0].id)!.done, true);
});

test('errors: the same error is kept at most once a minute', async () => {
  const store = new MemoryStore();
  let now = 0;
  const ins = new InsightsService(store, () => now);
  await ins.error('[browser] boom', 'stack', null);
  await ins.error('[browser] boom', 'stack', null);
  now += 61_000;
  await ins.error('[browser] boom', 'stack', null);
  assert.equal((await store.reports(10)).filter((x) => x.kind === 'error').length, 2);
});

test('stats: sign-ups, active players, day-1 return, tutorial funnel, games per mode', async () => {
  const store = new MemoryStore();
  const now = Date.parse('2026-10-11T12:00:00Z');
  const ins = new InsightsService(store, () => now);
  const a = await store.create({ username: 'a1', passwordHash: 'x', role: 'user' } as never);
  const b = await store.create({ username: 'b1', passwordHash: 'x', role: 'user' } as never);
  const users = (await store.list()).map((u) => ({ ...u, createdAt: '2026-10-09T10:00:00.000Z' }));
  await store.addActivity(a.id, '2026-10-09', { login: true });
  await store.addActivity(a.id, '2026-10-10', { login: true, games: 2 });
  await store.addActivity(b.id, '2026-10-09', { login: true });
  for (const id of [a.id, b.id]) { await ins.event(id, 'signup'); await ins.event(id, 'tutorial_start'); }
  await ins.event(a.id, 'tutorial_done');
  await ins.event(a.id, 'game_start:reading'); await ins.event(a.id, 'game_end:reading');
  const s = await ins.stats(users, 3);
  assert.equal(s.onlineNow, 3);
  assert.deepEqual(s.day1, { players: 2, returned: 1 });
  assert.equal(s.daily.find((d) => d.day === '2026-10-09')!.signups, 2);
  assert.equal(s.daily.find((d) => d.day === '2026-10-10')!.active, 1);
  assert.equal(s.funnel.find((f) => f.name === 'tutorial_done')!.players, 1);
  assert.deepEqual(s.modes.reading, { started: 1, finished: 1 });
});
