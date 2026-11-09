import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { VOCAB_BY_ID } from '../src/server/vocab';

const TODAY = '2026-10-28';
const player = (store: MemoryStore) => store.create({ username: `p${Math.random().toString(36).slice(2, 8)}`, passwordHash: 'x', role: 'user' });
const lvl = (id: string) => { const v = VOCAB_BY_ID.get(id)!; return v.jlpt ?? v.level; };

test('unticking "I\'ve mastered hiragana" keeps your daily plan (0.9.9.9.5: kana live in the Kana section)', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await player(store);
  await study.setDailyLevels(u, { N5: 10, N3: 5 }, TODAY);
  await study.setKanaMastered((await store.findById(u.id))!, false);
  let me = (await store.findById(u.id))!;
  let s = await study.summary(me, TODAY);
  assert.deepEqual(s.dailyByLevel, { N5: 10, N3: 5 }, 'the preset is kept');
  assert.deepEqual(s.studyLevels, ['N5', 'N3'], 'the kanji levels keep adding words');
  // kana numbers sent by an older app are ignored
  await study.setDailyLevels(me, { KANA: 6, N5: 10, N3: 5 }, TODAY);
  me = (await store.findById(u.id))!;
  s = await study.summary(me, TODAY);
  assert.deepEqual(s.dailyByLevel, { N5: 10, N3: 5 });
  // the next day: no kana enter All spells
  const before = (await store.cards(u.id)).filter((c) => c.deck === 'all').length;
  await study.summary(me, '2026-10-29');
  const fresh = (await store.cards(u.id)).filter((c) => c.deck === 'all').slice(before);
  assert.equal(fresh.length, 15);
  assert.ok(fresh.every((c) => ['N5', 'N3'].includes(lvl(c.vocabId))));
  await study.setKanaMastered((await store.findById(u.id))!, true);
  s = await study.summary((await store.findById(u.id))!, '2026-10-29');
  assert.deepEqual(s.studyLevels, ['N5', 'N3']);
});

test('a brand-new beginner (no plan yet) gets no kana in All spells — they learn them in the Kana section', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await player(store);
  await study.setDailyLevels(u, {}, TODAY);
  await study.setKanaMastered((await store.findById(u.id))!, false);
  const s = await study.summary((await store.findById(u.id))!, TODAY);
  assert.ok(!Object.keys(s.dailyByLevel ?? {}).some((l) => l === 'KANA' || l === 'KATA'));
  assert.ok(!(await store.cards(u.id)).some((c) => /^(kana|kata):/.test(c.vocabId)));
});
