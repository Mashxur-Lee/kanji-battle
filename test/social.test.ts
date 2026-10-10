import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { DAILY_WORD_MS, DAILY_WORDS, DailyService, dailyWords } from '../src/server/study/DailyService';
import { ProgressService } from '../src/server/study/ProgressService';
import { StudyService } from '../src/server/study/StudyService';
import { MONTH_GOALS, flameUnlocked, modeUnlocked, staffUnlocked, xpForLevel } from '../src/shared/progress';

test('daily challenge: the same 10 words for everyone (N5 → N1), checked on the server, one try, ranked', async () => {
  const store = new MemoryStore();
  let now = Date.parse('2026-10-11T08:00:00Z');
  const daily = new DailyService(store, new ProgressService(store), () => now);
  const words = dailyWords('2026-10-11');
  assert.equal(words.length, DAILY_WORDS);
  assert.deepEqual(dailyWords('2026-10-11').map((w) => w.id), words.map((w) => w.id), 'deterministic');
  assert.notDeepEqual(dailyWords('2026-10-12').map((w) => w.id), words.map((w) => w.id), 'a new set each day');
  assert.deepEqual(words.map((w) => w.level), ['N5', 'N5', 'N4', 'N4', 'N3', 'N3', 'N2', 'N2', 'N1', 'N1']);

  const u = await store.create({ username: 'daily1', passwordHash: 'x', role: 'user' } as any);
  const first = await daily.start(u);
  assert.equal(first.kanji, words[0].kanji);
  assert.equal((first as any).reading, undefined, 'no answers are sent ahead');
  let r = await daily.answer(u, words[0].reading); // right, fast
  assert.equal(r.correct, true);
  now += 2000;
  r = await daily.answer(u, 'zzz'); // wrong
  assert.equal(r.correct, false);
  // left the page on word 3 for too long: it counts as missed when they come back
  now += DAILY_WORD_MS + 5000;
  const back = await daily.start(u);
  assert.equal(back.index, 3);
  for (let i = 3; i < DAILY_WORDS; i++) r = await daily.answer(u, words[i].reading);
  assert.ok(r.done);
  assert.equal(r.done!.correct, 1 + 7);
  assert.equal(r.done!.rank, 1);
  assert.equal(r.done!.xp, 8 * 30);
  await assert.rejects(daily.start(u), /already played/);
  const o = await daily.overview(u);
  assert.equal(o.mine!.correct, 8);
  assert.equal(o.words!.length, 10, 'the words with readings are shown after you played');
  assert.equal(o.board[0].name, 'daily1');
});

test('monthly goals: play 12 days, win 10, pass 150 cards → the month\'s reward unlocks once', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'seasoned', passwordHash: 'x', role: 'user' } as any);
  for (let d = 1; d <= 12; d++) await study.progress.record(u.id, `2026-10-${String(d).padStart(2, '0')}`, { login: true });
  await study.progress.record(u.id, '2026-10-13', { wins: 10, games: 10 });
  let m = await study.progress.month((await store.findById(u.id))!, '2026-10-20');
  assert.deepEqual(m.goals.map((g) => g.value), [13, 10, 0].map((v, i) => Math.min(v, MONTH_GOALS[i].target)));
  assert.equal(m.done, false);
  const reward = await study.progress.record(u.id, '2026-10-14', { reviews: 150 });
  assert.equal(reward, 'flame:harvest', 'October gives the Harvest flame');
  assert.equal(await study.progress.record(u.id, '2026-10-15', { reviews: 1 }), null, 'only once');
  const rec = (await store.findById(u.id))!;
  assert.ok(flameUnlocked('harvest', 0, rec.unlocks));
  await study.setFlame(rec, 'harvest');
  await assert.rejects(study.setStaff(rec, 'maple'), /monthly reward/);
  assert.ok(!staffUnlocked('maple', 99, rec.unlocks), 'a long streak does not unlock seasonal staffs');
  // a new month starts from zero
  m = await study.progress.month(rec, '2026-11-02');
  assert.deepEqual([m.name, m.reward, m.done], ['Maple', 'staff:maple', false]);
});

test('gradual unlocks: Reading and Rapid from the start, Writing and Boss at level 1, Deck Duel at level 2', () => {
  assert.ok(modeUnlocked('reading', 0) && modeUnlocked('rapid', 0));
  assert.ok(!modeUnlocked('writing', 0) && !modeUnlocked('boss', 0) && !modeUnlocked('deck', xpForLevel(1)));
  assert.ok(modeUnlocked('boss', xpForLevel(1)) && modeUnlocked('deck', xpForLevel(2)));
  assert.ok(modeUnlocked('deck', 0, true), 'admins have everything');
});
