import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';

const TODAY = '2026-10-28';

test('"learned in total" counts the words you learned today too (and Undo takes one back)', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'learner1', passwordHash: 'x', role: 'user' });
  await study.setDailyLevels(u, { N5: 5 }, TODAY);
  const q = await study.queue((await store.findById(u.id))!, 'all');
  await study.review(u, q[0].vocabId, 'good');
  await study.review(u, q[1].vocabId, 'again');
  let p = await study.profile((await store.findById(u.id))!);
  assert.equal(p.learnedToday, 1);
  assert.equal(p.learned, 1, 'a new word answered right today counts, one only missed does not');
  await study.undo((await store.findById(u.id))!, q[1].vocabId, 'all');
  await study.undo((await store.findById(u.id))!, q[0].vocabId, 'all');
  p = await study.profile((await store.findById(u.id))!);
  assert.equal(p.learned, 0);
});
