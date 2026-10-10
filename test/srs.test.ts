import assert from 'node:assert/strict';
import { test } from 'node:test';
import { answer, formatInterval, newCard, previewIntervals } from '../src/shared/srs';
import { avatarFor, critFor, dailyCrit, nextLocalMidnight, levelOf, levelXp, unlocked, xpFor, xpForLevel } from '../src/shared/progress';

const T = 1_700_000_000_000, MIN = 60_000, DAY = 86_400_000;

test('SRS follows Anki defaults: 1m/10m steps, graduate 1d, easy 4d', () => {
  const c = newCard('x', T);
  assert.deepEqual(previewIntervals(c, T), { again: '1m', hard: '6m', good: '10m', easy: '4d' });
  const a = answer(c, 'good', T);
  assert.deepEqual([a.state, a.due - T], ['learning', 10 * MIN]);
  const g = answer(a, 'good', a.due);
  assert.deepEqual([g.state, g.intervalDays], ['review', 1]);
  const g2 = answer(g, 'good', g.due);
  assert.equal(g2.intervalDays, 3, '1 day × 250% ≈ 3');
  const e = answer(g2, 'easy', g2.due);
  assert.ok(e.intervalDays >= 9 && e.ease === 2650, `easy grows interval and ease (${e.intervalDays}d)`);
});

test('SRS lapse: again → relearn 10m, ease −20%, back to review', () => {
  let c = answer(answer(newCard('x', T), 'easy', T), 'good', T + 4 * DAY);
  const lapse = answer(c, 'again', c.due);
  assert.deepEqual([lapse.state, lapse.lapses, lapse.ease, lapse.due - c.due], ['relearning', 1, 2300, 10 * MIN]);
  const back = answer(lapse, 'good', lapse.due);
  assert.equal(back.state, 'review');
  assert.equal(formatInterval(45 * DAY), '1.5mo');
});

test('progress: XP, levels, crit, backgrounds, characters', () => {
  assert.equal(xpFor('win', 0.86, 'reading'), 386);
  assert.equal(xpFor('loss', 0.5, 'boss'), 100);
  assert.equal(xpFor('win', 1, 'deck'), 4000);
  assert.equal(xpFor('loss', 1, 'deck'), 1500);
  // each level costs 1000 more: 1000 → Lv 1, +2000 → Lv 2 (3000), +3000 → Lv 3 (6000) …
  assert.deepEqual([levelOf(999), levelOf(1000), levelOf(2999), levelOf(3000), levelOf(5999), levelOf(6000)], [0, 1, 1, 2, 2, 3]);
  assert.deepEqual(levelXp(1500), { level: 1, into: 500, need: 2000 });
  assert.deepEqual([xpForLevel(5), xpForLevel(20)], [15_000, 210_000]);
  for (let n = 0; n <= 60; n++) assert.equal(levelOf(xpForLevel(n)), n);
  // daily crit: 1% base, +1% per spell learned today, max 50%, back to 1% after midnight
  assert.equal(critFor(0), 0.01);
  assert.equal(Math.round(critFor(37) * 100), 38);
  assert.equal(critFor(49), 0.5);
  assert.equal(critFor(5000), 0.5, 'capped');
  const midnight = nextLocalMidnight('2026-10-09', -300); // Tashkent (UTC+5)
  assert.equal(new Date(midnight).toISOString(), '2026-10-09T19:00:00.000Z');
  assert.equal(Math.round(dailyCrit(10, midnight, midnight - 1) * 100), 11);
  assert.equal(dailyCrit(10, midnight, midnight), 0.01, 'resets at midnight');
  assert.ok(unlocked('forest', 0) && !unlocked('swamp', 14_999) && unlocked('swamp', 15_000));
  assert.deepEqual([avatarFor(['KANA']), avatarFor(['N5', 'KANA']), avatarFor(['N4']), avatarFor(['N3', 'N5']), avatarFor(['N1']), avatarFor(['N2', 'N3'])], ['goblin', 'kid', 'human', 'knight', 'wizard', 'witch']);
});

test('study: each passed card adds +1% crit once a day; Again does not; next day starts at 1%', async () => {
  const { MemoryStore } = await import('../src/server/db/Store');
  const { StudyService } = await import('../src/server/study/StudyService');
  const { newCard: nc } = await import('../src/shared/srs');
  const store = new MemoryStore();
  const u = await store.create({ username: 'crit', passwordHash: 'h', role: 'user' });
  await store.addCards(u.id, ['a', 'b', 'c'].map((id) => nc(id, 0)));
  const study = new StudyService(store);
  const day = Date.parse('2026-10-09T06:00:00Z'); // 11:00 in Tashkent
  const review = async (id: string, r: any, t = day) => (await study.review((await store.findById(u.id))!, id, r, t, '2026-10-09', -300)).crit;
  assert.equal(await study.crit(u.id, day), 0.01, 'base 1%');
  assert.equal(await review('a', 'again'), 0.01);
  assert.equal(Math.round((await review('a', 'good')) * 100), 2);
  assert.equal(Math.round((await review('a', 'good', day + 60_000)) * 100), 2, 'same card counts once a day');
  assert.equal(Math.round((await review('b', 'hard')) * 100), 3);
  assert.equal(Math.round((await review('c', 'easy')) * 100), 4);
  assert.equal(await study.crit(u.id, Date.parse('2026-10-09T19:00:00Z')), 0.01, 'midnight in Tashkent: back to 1%');
});
