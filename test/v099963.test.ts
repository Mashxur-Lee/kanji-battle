import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService, liveStreak } from '../src/server/study/StudyService';
import { runMigrations } from '../src/server/migrations';
import { applyKana, cleanKana, isMasteredMark, kanaPercent, markAfter } from '../src/shared/kanachart';

test('0.9.9.9.6.3 the streak ends at midnight after a missed day (no day of slack)', () => {
  const u = (streakDay: string | null) => ({ streak: 6, streakDay });
  assert.equal(liveStreak(u('2026-11-14'), '2026-11-14'), 6, 'done today');
  assert.equal(liveStreak(u('2026-11-13'), '2026-11-14'), 6, 'done yesterday: still yours until tonight');
  assert.equal(liveStreak(u('2026-11-12'), '2026-11-14'), 0, 'missed yesterday: gone at midnight');
  assert.equal(liveStreak(u(null), '2026-11-14'), 0);
});

test('0.9.9.9.6.3 once: the owner gets a 20-day streak and a clean win/loss record — nobody else, and only once', async () => {
  const store = new MemoryStore();
  const owner = await store.create({ username: 'admin', passwordHash: 'x', role: 'admin' } as never);
  const other = await store.create({ username: 'helper', passwordHash: 'x', role: 'admin' } as never);
  const player = await store.create({ username: 'frenzyy_fan', passwordHash: 'x', role: 'user' } as never);
  for (const u of [owner, other, player]) await store.update(u.id, { wins: 3, losses: 120, streak: 2, streakDay: '2026-11-01', bestStreak: 5 });
  await runMigrations(store, Date.parse('2026-11-14T10:00:00Z'));
  const o = (await store.findById(owner.id))!;
  assert.equal(o.streak, 20); assert.equal(o.wins, 0); assert.equal(o.losses, 0); assert.equal(o.bestStreak, 20);
  assert.equal(liveStreak(o, '2026-11-14'), 20, 'it shows today');
  for (const id of [other.id, player.id]) { const r = (await store.findById(id))!; assert.equal(r.losses, 120); assert.equal(r.streak, 2); }
  // a restart doesn't do it again
  await store.update(owner.id, { losses: 4 });
  await runMigrations(store, Date.parse('2026-11-15T10:00:00Z'));
  assert.equal((await store.findById(owner.id))!.losses, 4);
});

test('0.9.9.9.6.3 kana: 10 stars to master, at most 3 a day, −2 for a miss; mastered until under 7', () => {
  let k = markAfter(undefined, true, '2026-11-01');
  for (let i = 0; i < 6; i++) k = markAfter(k, true, '2026-11-01');
  assert.equal(k.s, 3, 'three a day');
  assert.ok(!isMasteredMark(k));
  for (const d of ['2026-11-02', '2026-11-03']) for (let i = 0; i < 3; i++) k = markAfter(k, true, d);
  assert.equal(k.s, 9);
  k = markAfter(k, true, '2026-11-04');
  assert.equal(k.s, 10); assert.ok(isMasteredMark(k), 'mastered on the fourth day at the soonest');
  k = markAfter(k, false, '2026-11-04'); // 8: still mastered
  assert.ok(isMasteredMark(k));
  k = markAfter(k, false, '2026-11-04'); // 6: not any more
  assert.equal(k.s, 6); assert.ok(!isMasteredMark(k));
  assert.equal(kanaPercent(k), 60);
  // old marks: "mastered" with a few stars isn't; with 7+ it stays
  const old = cleanKana({ 'あ': { s: 3, m: true }, 'い': { s: 8, m: true }, 'う': { s: 10 } });
  assert.ok(!isMasteredMark(old['あ'])); assert.ok(isMasteredMark(old['い'])); assert.ok(isMasteredMark(old['う']));
  // the server holds the app to the rules: no more than 3 stars a day per kana
  const r = applyKana({ 'か': { s: 2 } }, { 'か': { s: 10, m: true } }, '2026-11-05');
  assert.equal(r.kana['か'].s, 5); assert.ok(!isMasteredMark(r.kana['か'])); assert.deepEqual(r.newlyMastered, []);
  const again = applyKana(r.kana, { 'か': { s: 9 } }, '2026-11-05');
  assert.equal(again.kana['か'].s, 5, 'the day\'s three are used up');
  const next = applyKana({ 'か': { s: 9, d: '2026-11-05', g: 3 } }, { 'か': { s: 10 } }, '2026-11-06');
  assert.ok(isMasteredMark(next.kana['か'])); assert.deepEqual(next.newlyMastered, ['か']);
});

test('0.9.9.9.6.3 Study: a paused deck gets no new words (All spells, Onomatopoeia) and no missed words (Struggling)', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'pauser', passwordHash: 'x', role: 'user' } as never);
  await store.update(u.id, { studyLevels: ['N5'], dailyNew: 10 });
  await study.setPaused((await store.findById(u.id))!, 'all', true);
  await study.setOnoDaily((await store.findById(u.id))!, 5, '2026-11-14');
  await study.setPaused((await store.findById(u.id))!, 'ono', true);
  let s = await study.summary((await store.findById(u.id))!, '2026-11-14');
  assert.equal(s.decks.all.total, 0, 'no new words while paused');
  assert.equal(s.decks.ono.new, 0, 'no new onomatopoeia today');
  assert.deepEqual(s.paused, { all: true, ono: true, struggling: false });
  await study.setPaused((await store.findById(u.id))!, 'all', false);
  s = await study.summary((await store.findById(u.id))!, '2026-11-15');
  assert.ok(s.decks.all.total > 0, 'resumed: the day\'s words come in');
  await assert.rejects(study.setPaused(u, 'custom', true), /Pause what/);
});

test('0.9.9.9.6.3 @mentions: logins in chat text, not e-mail addresses; the sentence keeps its full stop', async () => {
  const { mentionsIn, mentionsMe, setMentionSelf, knowPlayer } = await import('../src/client/mentions');
  assert.deepEqual(mentionsIn('hi @admin, gg @Frenzyy_fan.'), ['admin', 'Frenzyy_fan']);
  assert.deepEqual(mentionsIn('mail me at a@b.com'), []);
  assert.deepEqual(mentionsIn('@a.b-c- ok'), ['a.b-c']);
  assert.deepEqual(mentionsIn('@x and @@y'), ['x']);
  setMentionSelf('u1', 'admin', 'Boss');
  assert.ok(mentionsMe('look @ADMIN')); assert.ok(mentionsMe('@boss!'));
  assert.ok(!mentionsMe('@admins')); assert.ok(!mentionsMe('admin'));
  knowPlayer('u1', 'Shown');
  assert.ok(mentionsMe('@shown'), 'the name you show in the lobby counts too');
});

test('0.9.9.9.6.3 a mention opens the card of the player with that login (not banned ones)', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const a = await store.create({ username: 'admin', passwordHash: 'x', role: 'admin' } as never);
  const b = await store.create({ username: 'gone', passwordHash: 'x', role: 'user' } as never);
  await store.update(b.id, { banned: true } as never);
  assert.equal((await study.publicProfileByLogin('Admin'))?.id, a.id);
  assert.equal(await study.publicProfileByLogin('gone'), null);
  assert.equal(await study.publicProfileByLogin('nobody'), null);
});
