import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { DictService } from '../src/server/study/DictService';
import { isCorrectReading, toRomaji } from '../src/shared/kana';
import { VOCAB } from '../src/server/vocab';
import { poseOf } from '../src/shared/progress';
import { PausableClock } from '../src/server/clock';

const TODAY = '2026-11-01';

test('0.9.9.7: romaji — n before a vowel or y can be ん (信用 shinyou, 原因 genin, 金曜日 kinyoubi)', () => {
  assert.ok(isCorrectReading('shinyou', ['しんよう']));
  assert.ok(isCorrectReading('genin', ['げんいん']));
  assert.ok(isCorrectReading('kinyoubi', ['きんようび']));
  assert.ok(isCorrectReading('shimbun', ['しんぶん']));
  assert.ok(isCorrectReading('tōkyō', ['とうきょう']));
  assert.ok(isCorrectReading('nyaa', ['ニャー']));
  assert.ok(isCorrectReading('pika', ['ぴかっ']));
  assert.ok(isCorrectReading('kiotsukeru', ['きをつける']));
  assert.ok(isCorrectReading('sensee', ['せんせい']));
  assert.ok(isCorrectReading('shinyou', ['しにょう'])); // the other reading still works too
  assert.ok(!isCorrectReading('shiyou', ['しんよう']));
  assert.ok(!isCorrectReading('kana', ['かんな']));
});

test('0.9.9.7: every word of the game counts when typed in romaji the natural way', () => {
  const bad = [];
  for (const v of VOCAB) for (const r of [v.reading, ...(v.altReadings ?? [])]) {
    const all = [v.reading, ...(v.altReadings ?? [])];
    if (!isCorrectReading(toRomaji(r), all) || !isCorrectReading(r.split('ん').map(toRomaji).join("n'"), all)) bad.push(`${v.kanji} ${r}`);
  }
  assert.deepEqual(bad, []);
});

test('0.9.9.7: Onomatopoeia — no new words until you choose how many a day; then only that many', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'ono1', passwordHash: 'x', role: 'user' });
  let s = await study.summary(u, TODAY);
  assert.equal(s.decks.ono.new, 0);
  assert.equal(s.onoDaily, 0);
  assert.equal((await study.queue(u, 'ono', Date.parse(TODAY), 500, TODAY)).length, 0);
  await study.setOnoDaily((await store.findById(u.id))!, 5, TODAY);
  s = await study.summary((await store.findById(u.id))!, TODAY);
  assert.equal(s.decks.ono.new, 5);
  const q = await study.queue((await store.findById(u.id))!, 'ono', Date.parse(TODAY), 500, TODAY);
  assert.equal(q.length, 5);
  await study.review((await store.findById(u.id))!, q[0].vocabId, 'good', Date.parse(TODAY), TODAY, 0, 'ono');
  s = await study.summary((await store.findById(u.id))!, TODAY);
  assert.equal(s.decks.ono.new, 4);
  // the next day the allowance is full again
  s = await study.summary((await store.findById(u.id))!, '2026-11-02');
  assert.equal(s.decks.ono.new, 5);
  // saving the level plan keeps the Onomatopoeia number
  await study.setDailyLevels((await store.findById(u.id))!, { N5: 3 }, TODAY);
  assert.equal((await study.summary((await store.findById(u.id))!, TODAY)).onoDaily, 5);
});

test('0.9.9.7: dictionary — kanji, kana, romaji and English all find 信用; words with a kanji', () => {
  const d = new DictService();
  for (const q of ['信用', 'しんよう', 'shinyou']) assert.equal(d.search(q, 3)[0]?.kanji[0], '信用', q);
  assert.ok(d.search('trust', 10).some((e) => e.kanji[0] === '信用'));
  const w = d.search('信用', 1)[0];
  assert.equal(w.level, 'N3');
  assert.ok(w.vocabId);
  assert.ok(w.senses.length >= 2);
  assert.equal(d.get(w.i)?.kanji[0], '信用');
  assert.ok(d.withKanji('信').some((e) => e.kanji[0] === '信号'));
  assert.equal(d.search('猫', 1)[0].kana[0], 'ねこ');
  assert.deepEqual(d.search(''), []);
});

test('0.9.9.7.1: combo pose — saved in unlocks, unlocked by spells learned (100 / 200 / 300); Lotus is gone', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'pose1', passwordHash: 'x', role: 'user' });
  await assert.rejects(() => study.setPose(u, 'float'), /learned 100 spells/);
  await assert.rejects(() => study.setPose(u, 'lotus'), /Unknown/);
  // 150 learned (cards out of "new"): Levitation yes, Duelist not yet
  const now = Date.now();
  await store.addCards(u.id, VOCAB.filter((v) => v.level === 'N5').slice(0, 150).map((v) => ({ vocabId: v.id, deck: 'all' as const, addedAt: now, state: 'review' as const, step: 0, ease: 2500, intervalDays: 3, due: now + 86_400_000 })));
  await study.setPose((await store.findById(u.id))!, 'float');
  assert.equal(poseOf((await store.findById(u.id))!.unlocks), 'float');
  const u2 = (await store.findById(u.id))!;
  await assert.rejects(() => study.setPose(u2, 'aim'), /200/);
  assert.equal(poseOf(['pose:lotus']), 'none'); // a saved Lotus falls back to standing
  await study.setPose((await store.findById(u.id))!, 'none');
  assert.equal(poseOf((await store.findById(u.id))!.unlocks), 'none');
});

test('0.9.9.7.1: dictionary in Russian, and the words that look like it', () => {
  const d = new DictService();
  assert.equal(d.search('вода', 3)[0].kanji[0], '水');
  assert.equal(d.search('кошка', 3)[0].kanji[0], '猫');
  const near = d.search('信用', 60).map((e) => e.kanji[0]);
  assert.ok(near.length > 10 && near.includes('信頼') && near.includes('利用'), near.join(' '));
});

test('0.9.9.7: a paused game clock stands still', async () => {
  let t = 1000;
  const c = new PausableClock(() => t);
  const start = c.now();
  c.pause(); t += 5000;
  assert.equal(c.now(), start);
  c.resume(); t += 100;
  assert.equal(c.now(), start + 100);
});
