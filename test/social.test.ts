import { toRomaji } from '../src/shared/kana';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { DAILY_WORD_MS, DAILY_WORDS, DailyService, dailyWords } from '../src/server/study/DailyService';
import { ProgressService } from '../src/server/study/ProgressService';
import { StudyService } from '../src/server/study/StudyService';
import { MONTH_GOALS, flameUnlocked, modeUnlocked, staffUnlocked, xpForLevel } from '../src/shared/progress';
import { beta } from '../src/shared/progress';
beta.open = false; // these tests check the normal unlock rules (the closed beta opens everything)

test('daily challenge: the same 10 words for everyone in a league (0.9.9.7.3: you start in Kana), checked on the server, one try, ranked', async () => {
  const store = new MemoryStore();
  let now = Date.parse('2026-10-11T08:00:00Z');
  const daily = new DailyService(store, new ProgressService(store), () => now);
  const words = dailyWords('2026-10-11', 'KANA');
  assert.equal(words.length, DAILY_WORDS);
  assert.deepEqual(dailyWords('2026-10-11', 'KANA').map((w) => w.id), words.map((w) => w.id), 'deterministic');
  assert.notDeepEqual(dailyWords('2026-10-12', 'KANA').map((w) => w.id), words.map((w) => w.id), 'a new set each day');
  assert.deepEqual(words.map((w) => w.level), ['KANA', 'KANA', 'KANA', 'KANA', 'KANA', 'KATA', 'KATA', 'KATA', 'KATA', 'KATA']);
  assert.ok(dailyWords('2026-10-11', 'N3').every((w) => w.level === 'N3'));
  const ans = (w: { romaji?: string; reading: string }) => w.romaji ?? toRomaji(w.reading); // the kana league: romaji

  const u = await store.create({ username: 'daily1', passwordHash: 'x', role: 'user' } as any);
  const first = await daily.start(u);
  assert.equal(first.kanji, words[0].kanji);
  assert.equal((first as any).reading, undefined, 'no answers are sent ahead');
  assert.equal((await daily.answer(u, words[0].reading)).correct, false, 'kana typed back as kana does not count');
  (daily as any).attempts.get(u.id).index = 0; (daily as any).attempts.get(u.id).marks = ''; // (back to word 1 for the rest of the test)
  let r = await daily.answer(u, ans(words[0])); // right, fast
  assert.equal(r.correct, true);
  now += 2000;
  r = await daily.answer(u, 'zzz'); // wrong
  assert.equal(r.correct, false);
  // left the page on word 3 for too long: it counts as missed when they come back
  now += DAILY_WORD_MS + 5000;
  const back = await daily.start(u);
  assert.equal(back.index, 3);
  for (let i = 3; i < DAILY_WORDS; i++) r = await daily.answer(u, ans(words[i]));
  assert.ok(r.done);
  assert.equal(r.done!.correct, 1 + 7);
  assert.equal(r.done!.rank, 1);
  assert.equal(r.done!.xp, 8 * 30);
  await assert.rejects(daily.start(u), /already played/);
  const o = await daily.overview(u);
  assert.equal(o.mine!.correct, 8);
  assert.equal(o.words!.length, 10, 'the words with readings are shown after you played');
  assert.equal(o.board[0].name, 'daily1');
  assert.equal(o.league, 'KANA');
  assert.equal(o.nextLeague, 'KANA', '8 / 10 is not enough to move up');
});

test('daily challenge leagues (0.9.9.7.3; 7 / 10 since 0.9.9.9.5): 7 / 10 or better moves you up one — Kana → N5 → … → N1', async () => {
  const store = new MemoryStore();
  let now = Date.parse('2026-10-11T08:00:00Z');
  const daily = new DailyService(store, new ProgressService(store), () => now);
  const u = await store.create({ username: 'climber', passwordHash: 'x', role: 'user' } as any);
  const play = async (right: number) => {
    const me = (await store.findById(u.id))!;
    const league = (await daily.overview(me)).nextLeague;
    const words = dailyWords(daily.today(), league);
    await daily.start(me);
    let r;
    for (let i = 0; i < DAILY_WORDS; i++) r = await daily.answer(me, i < right ? ((words[i] as any).romaji ?? words[i].reading) : 'x');
    return r!.done!;
  };
  let d = await play(9);
  assert.deepEqual([d.league, d.promoted], ['KANA', 'N5']);
  assert.equal((await daily.overview((await store.findById(u.id))!)).league, 'KANA', 'today still shows the league you played');
  now += 86_400_000;
  d = await play(10);
  assert.deepEqual([d.league, d.promoted], ['N5', 'N4']);
  now += 86_400_000;
  d = await play(5);
  assert.deepEqual([d.league, d.promoted], ['N4', null]);
  assert.equal((await daily.overview((await store.findById(u.id))!)).nextLeague, 'N4');
  now += 86_400_000;
  d = await play(6);
  assert.deepEqual([d.league, d.promoted], ['N4', null], '6 / 10 stays');
  now += 86_400_000;
  d = await play(7);
  assert.deepEqual([d.league, d.promoted], ['N4', 'N3'], '7 / 10 moves up');
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

test('modes: Reading and Rapid from the start, Writing / Boss / Deck Duel at level 1 (0.9.9.1)', () => {
  assert.ok(modeUnlocked('reading', 0) && modeUnlocked('rapid', 0));
  assert.ok(modeUnlocked('writing', 0) && modeUnlocked('boss', 0) && modeUnlocked('deck', 0), 'every mode is open from the start');
  assert.ok(modeUnlocked('deck', 0, true), 'admins have everything');
});

test('closed beta: every background, flame and staff is open to a brand-new player', () => {
  beta.open = true;
  try {
    assert.ok(flameUnlocked('purple', 0) && flameUnlocked('harvest', 0));
    assert.ok(staffUnlocked('void', 0) && staffUnlocked('maple', 0));
  } finally { beta.open = false; }
  assert.ok(!staffUnlocked('void', 0), 'back to the normal rules');
});

test('daily challenge (0.9.9.3.2): skipping every word counts the time really taken, not 15 s each', async () => {
  const store = new MemoryStore();
  let now = Date.parse('2026-10-16T08:00:00Z');
  const daily = new DailyService(store, new ProgressService(store), () => now);
  const u = await store.create({ username: 'skipper', passwordHash: 'x', role: 'user' } as any);
  await daily.start(u);
  let r;
  for (let i = 0; i < DAILY_WORDS; i++) { now += 1000; r = await daily.answer(u, ''); }
  assert.equal(r!.done!.correct, 0);
  assert.equal(r!.done!.ms, DAILY_WORDS * 1000);
});
