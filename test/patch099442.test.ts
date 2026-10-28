import assert from 'node:assert/strict';
import { test } from 'node:test';
import { VOCAB } from '../src/server/vocab';
import { pickPoolFrom } from '../src/server/VocabPool';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService, STUDY_XP, STUDY_XP_DAILY } from '../src/server/study/StudyService';

test('battle pools come from your own All spells (of the chosen levels), random words fill the rest', () => {
  const n4 = VOCAB.filter((v) => v.level === 'N4');
  const mine = new Set(n4.slice(0, 6).map((v) => v.id));
  const pool = pickPoolFrom(['N4', 'N3'], 10, mine);
  assert.equal(pool.length, 10);
  assert.equal(pool.filter((v) => mine.has(v.id)).length, 6, 'all 6 of your N4 words are in');
  assert.ok(pool.every((v) => v.level === 'N4' || v.level === 'N3'));
  // more of your words than fit: only yours
  const many = new Set(n4.slice(0, 40).map((v) => v.id));
  assert.ok(pickPoolFrom(['N4'], 10, many).every((v) => many.has(v.id)));
  // no deck: random words, as before
  assert.equal(pickPoolFrom(['N5'], 10, undefined).length, 10);
});

test('each answered study card gives 5 XP (up to the daily cap); undo takes it back', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'xpcards', passwordHash: 'x', role: 'user' });
  await study.setDailyLevels(u, { N5: 10 }, '2026-10-28');
  const q = await study.queue((await store.findById(u.id))!, 'all');
  const before = (await store.findById(u.id))!.xp;
  const r = await study.review(u, q[0].vocabId, 'again', undefined, '2026-10-28');
  assert.equal(r.xp, STUDY_XP);
  assert.equal((await store.findById(u.id))!.xp, before + STUDY_XP);
  await study.undo(u, q[0].vocabId, 'all');
  assert.equal((await store.findById(u.id))!.xp, before);
  const s = await study.summary((await store.findById(u.id))!, '2026-10-28');
  assert.equal(s.studyXpToday, 0);
  assert.ok(STUDY_XP_DAILY >= 100 * STUDY_XP);
});
