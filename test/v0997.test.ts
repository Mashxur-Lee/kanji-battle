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
  await assert.rejects(() => study.setPose(u, 'twohand'), /learned 100 spells/); // 0.9.9.8.2: Channel at 100, Levitation at 300
  await assert.rejects(() => study.setPose(u, 'lotus'), /Unknown/);
  // 150 learned (cards out of "new"): Channel yes, Duelist not yet
  const now = Date.now();
  await store.addCards(u.id, VOCAB.filter((v) => v.level === 'N5').slice(0, 150).map((v) => ({ vocabId: v.id, deck: 'all' as const, addedAt: now, state: 'review' as const, step: 0, ease: 2500, intervalDays: 3, due: now + 86_400_000 })));
  await study.setPose((await store.findById(u.id))!, 'twohand');
  assert.equal(poseOf((await store.findById(u.id))!.unlocks), 'twohand');
  await assert.rejects(async () => study.setPose((await store.findById(u.id))!, 'float'), /300/);
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

test('0.9.9.7.2: a game made by the queue waits for both players’ own words (it used to start with random ones)', async () => {
  const { Room, DEFAULT_ROOM_OPTIONS } = await import('../src/server/Room');
  const mine = new Set(VOCAB.filter((v) => v.level === 'N2').slice(0, 30).map((v) => v.id));
  const room = new Room('QQQQ', 'reading', { onEmpty: () => {}, spellIds: () => new Promise((ok) => setTimeout(() => ok(mine), 30)) }, DEFAULT_ROOM_OPTIONS);
  const got: Array<{ type: string; pool?: Array<{ vocabId?: string; id?: string; kanji: string }> }> = [];
  const send = (m: never) => { got.push(m); };
  room.join('a', 'A', { send } as never, ['N2']); room.join('b', 'B', { send: () => {} } as never, ['N2']);
  room.start('a'); // straight away, as the matchmaker does
  assert.ok(!got.some((m) => m.type === 'prep'), 'not before the words are in');
  await new Promise((ok) => setTimeout(ok, 80));
  const prep = got.find((m) => m.type === 'prep')!;
  assert.ok(prep, 'started once they arrived');
  const pool = prep.pool as unknown as Array<{ kanji: string; mine?: boolean }>;
  assert.ok(pool.length > 0 && pool.every((w) => w.mine), `own words: ${pool.map((w) => w.kanji + (w.mine ? '★' : '')).join(' ')}`);
});

test('0.9.9.7.2: dictionary — verb forms find the word, near misses are marked, phrases', async () => {
  const { deinflect } = await import('../src/shared/deinflect');
  const { nearMiss } = await import('../src/shared/dict');
  assert.ok(deinflect('呼ばない').some((d) => d.word === '呼ぶ' && d.form === 'negative'));
  assert.ok(deinflect('たべたかった').some((d) => d.word === 'たべる'));
  assert.ok(deinflect('べんきょうします').some((d) => d.word === 'べんきょう'));
  assert.deepEqual(nearMiss('こしゅじん', 'ごしゅじん', 1), [0]);
  assert.equal(nearMiss('こしゅじん', 'たべる', 1), null);
  const d = new DictService();
  for (const [q, want, form] of [['yobanai', '呼ぶ', 'negative'], ['呼ばない', '呼ぶ', 'negative'], ['よびました', '呼ぶ', 'polite past'], ['benkyoushimasu', '勉強', 'polite'], ['高くない', '高い', 'negative']] as const) {
    const hit = d.search(q, 5).find((e) => e.kanji[0] === want);
    assert.ok(hit, `${q} → ${want}`);
    assert.equal(hit.form, form, q);
  }
  const near = d.search('koshujin', 5);
  assert.equal(near[0].kanji[0], 'ご主人');
  assert.deepEqual(near[0].typo, [0]);
  assert.ok(!d.search('shinyou', 10).some((e) => e.typo), 'no near misses when there are real matches');
  const yobu = d.search('呼ぶ', 1)[0];
  const ph = (d as unknown as { d(): { phrasesWith(e: unknown, n: number): Array<{ kanji: string[]; phrase?: boolean }> } }).d().phrasesWith(yobu, 10);
  assert.ok(ph.length > 3 && ph.every((p) => p.phrase && p.kanji[0].includes('呼')), ph.map((p) => p.kanji[0]).join(' '));
});
