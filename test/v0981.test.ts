import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ACHIEVEMENTS, earnedAchievements } from '../src/shared/achievements';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';

const base = { wins: 0, level: 0, bestStreak: 0, learned: 0, friends: 0, seasonal: 0 };

test('20 achievements, each with a name, how-to, icon and colour', () => {
  assert.equal(ACHIEVEMENTS.length, 20);
  assert.equal(new Set(ACHIEVEMENTS.map((a) => a.id)).size, 20);
  for (const a of ACHIEVEMENTS) assert.ok(a.name && a.how && a.icon && /^#[0-9a-f]{6}$/i.test(a.color), a.id);
});

test('achievements follow the facts: wins, combos, modes, flawless, streaks, spells', () => {
  assert.deepEqual(earnedAchievements(base), []);
  assert.deepEqual(earnedAchievements({ ...base, wins: 25, bestStreak: 7, learned: 100, friends: 1 }).sort(), ['devoted', 'fellowship', 'first-win', 'scholar', 'veteran']);
  const m = { mode: 'boss', outcome: 'win' as const, accuracy: 1, attempts: 12, bestCombo: 12, forfeited: false };
  assert.deepEqual(earnedAchievements({ ...base, match: m }).sort(), ['combo-10', 'combo-5', 'dragon-slayer', 'flawless']);
  assert.deepEqual(earnedAchievements({ ...base, match: { ...m, forfeited: true } }), [], 'a forfeit earns nothing from the match');
  assert.ok(!earnedAchievements({ ...base, match: { ...m, attempts: 3 } }).includes('flawless'), 'flawless needs 10+ answers');
});

test('the server grants each achievement once and reports only new ones', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'ach', passwordHash: 'x', role: 'user' } as never);
  const first = await study.recordMatch(u.id, 'win', 1, 'rapid', [], false, false);
  assert.ok(first.achievements.includes('first-win') && first.achievements.includes('quickdraw'));
  const again = await study.recordMatch(u.id, 'win', 1, 'rapid', [], false, false);
  assert.deepEqual(again.achievements, []);
  assert.ok((await store.findById(u.id))!.unlocks.includes('ach:quickdraw'));
});
