import assert from 'node:assert/strict';
import { test } from 'node:test';
import { earnedAchievements } from '../src/shared/achievements';
import { MODE_LEVEL, modeUnlocked } from '../src/shared/progress';
import { MemoryStore } from '../src/server/db/Store';
import { pickDistractors, similarity } from '../src/server/study/distract';
import { StudyService } from '../src/server/study/StudyService';
import { VOCAB } from '../src/server/vocab';
import { newCard } from '../src/shared/srs';

test('0.9.9.3.4: every mode is open from level 0', () => {
  for (const m of Object.keys(MODE_LEVEL) as (keyof typeof MODE_LEVEL)[]) assert.ok(modeUnlocked(m, 0), m);
});

test('quiz distractors resemble the right answer', () => {
  assert.ok(similarity('reading', 'がっこう', 'かっこう') > similarity('reading', 'がっこう', 'みず'));
  assert.ok(similarity('kanji', '学校', '学生') > similarity('kanji', '学校', '天気'));
  assert.ok(similarity('kanji', '呼ぶ', '飛ぶ') > similarity('kanji', '呼ぶ', '安い'));
  assert.ok(similarity('romaji', 'ka', 'ki') > similarity('romaji', 'ka', 'shi'));
  assert.ok(similarity('meaning', 'to call; to invite', 'to call out') > similarity('meaning', 'to call; to invite', 'mountain'));
  const pool = ['学生', '大学', '校長', '天気', '映画', '山', '水', '電車', '時間', '先生', '友達'];
  const three = pickDistractors('kanji', '学校', pool, () => 0.5);
  assert.equal(three.length, 3);
  assert.ok(three.filter((x) => /[学校]/.test(x)).length >= 2, `${three}`);
  assert.ok(!pickDistractors('meaning', 'to go', ['to go; to move', 'to eat', 'to run', 'to see', 'cat']).includes('to go; to move'), 'no synonyms');
});

test('JLPT quiz: no homophone as a wrong kanji answer, 4 different choices', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store, Math.random);
  const u = await store.create({ username: 'quizzer2', passwordHash: 'x', role: 'user' });
  const words = VOCAB.filter((v) => v.level === 'N5' && v.kanji !== v.reading).slice(0, 30);
  await store.addCards(u.id, words.map((v) => ({ ...newCard(v.id, 1, 'all'), reps: 1, state: 'review' as const })));
  for (const q of await study.quiz(u, 30)) {
    assert.equal(new Set(q.choices).size, 4);
    if (q.kind === 'kanji') for (const [i, c] of q.choices.entries()) if (i !== q.answer) assert.ok(!VOCAB.some((v) => v.kanji === c && v.reading === q.prompt), `${c} also reads ${q.prompt}`);
  }
});

test('Kingslayer: win against an admin', () => {
  const base = { wins: 0, level: 0, bestStreak: 0, learned: 0, friends: 0, seasonal: 0 };
  const m = { mode: 'reading', outcome: 'win' as const, accuracy: .5, attempts: 4, bestCombo: 1, forfeited: false };
  assert.deepEqual(earnedAchievements({ ...base, match: m }), []);
  assert.deepEqual(earnedAchievements({ ...base, match: { ...m, beatAdmin: true } }), ['kingslayer']);
  assert.deepEqual(earnedAchievements({ ...base, match: { ...m, outcome: 'loss', beatAdmin: true } }), []);
});
