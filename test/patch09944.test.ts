import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { VOCAB, VOCAB_BY_ID } from '../src/server/vocab';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService, planOf, splitDaily } from '../src/server/study/StudyService';
import { splitRow } from '../scripts/build-vocab';
import { buildDraftPool } from '../src/server/DeckGame';
import { buildOnoQuiz } from '../src/shared/quiz';
import { toRomaji } from '../src/shared/kana';
import { LEVELS } from '../src/shared/protocol';

const TODAY = '2026-10-28';
async function player(store: MemoryStore) {
  return store.create({ username: `p${Math.random().toString(36).slice(2, 8)}`, passwordHash: 'x', role: 'user' });
}

test('undo: the last answer is taken back (card, review count) and only once', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await player(store);
  await study.setDailyLevels(u, { N5: 10 }, TODAY);
  const q = await study.queue((await store.findById(u.id))!, 'all');
  const id = q[0].vocabId;
  const before = await store.card(u.id, 'all', id);
  await study.review(u, id, 'good');
  assert.notDeepEqual(await store.card(u.id, 'all', id), before);
  await study.undo(u, id, 'all');
  assert.deepEqual(await store.card(u.id, 'all', id), before);
  await assert.rejects(() => study.undo(u, id, 'all'), /Nothing to undo/);
});

test('All spells: new words a day per level', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await player(store);
  const per = await study.setDailyLevels(u, { N5: 10, N3: 5, N1: 0, bogus: 9 }, TODAY);
  assert.deepEqual(per, { N5: 10, N3: 5 });
  const levelOf = (id: string) => VOCAB_BY_ID.get(id)!;
  const cards = (await store.cards(u.id)).filter((c) => c.deck === 'all');
  const by = (l: string) => cards.filter((c) => (levelOf(c.vocabId).jlpt ?? levelOf(c.vocabId).level) === l).length;
  assert.equal(by('N5'), 10);
  assert.equal(by('N3'), 5);
  assert.equal(cards.length, 15);
  // raising one level the same day adds only the difference; the summary reports the plan
  await study.setDailyLevels((await store.findById(u.id))!, { N5: 12, N3: 5 }, TODAY);
  assert.equal((await store.cards(u.id)).filter((c) => c.deck === 'all').length, 17);
  const s = await study.summary((await store.findById(u.id))!, TODAY);
  assert.deepEqual(s.dailyByLevel, { N5: 12, N3: 5 });
  assert.deepEqual(s.studyLevels, ['N5', 'N3']);
  // the next day: a fresh batch of each
  await study.summary((await store.findById(u.id))!, '2026-10-29');
  assert.equal((await store.cards(u.id)).filter((c) => c.deck === 'all').length, 34);
});

test('an account from before 0.9.9.4.4: its levels share its old daily number', () => {
  assert.deepEqual(splitDaily(['N5', 'N4'], 25), { N5: 13, N4: 12 });
  const plan = planOf({ dailyPlan: null, studyLevels: ['N5'], dailyNew: 30, lastNewDate: TODAY, newToday: 30 }, TODAY);
  assert.deepEqual(plan.per, { N5: 30 });
  assert.deepEqual(plan.done, { N5: 30 }, 'what was already added today counts');
});

test('word lists: notes like (する) no longer drop words', () => {
  assert.deepEqual(splitRow('結婚(する)', 'けっこん'), [['結婚', 'けっこん']]);
  for (const k of ['結婚', '散歩', '掃除', '勉強', '練習']) assert.ok(VOCAB.some((v) => v.kanji === k), k);
});

test('kanji help: every kanji in the word list has a meaning, readings, a Russian meaning and a memory story', () => {
  const base = JSON.parse(readFileSync('data/kanji/base.json', 'utf8')) as { kanji: Record<string, { m: string[]; p: string[]; s?: number[] }> };
  const notes = new Map<string, string[]>();
  for (const f of readdirSync('data/kanji/notes')) for (const l of readFileSync(`data/kanji/notes/${f}`, 'utf8').split('\n')) if (l.trim()) notes.set(l.split('\t')[0], l.split('\t'));
  const used = new Set(VOCAB.flatMap((v) => [...v.kanji].filter((c) => /\p{Script=Han}/u.test(c) && c !== '々')));
  for (const c of used) {
    assert.ok(base.kanji[c], `${c}: no KANJIDIC entry`);
    const n = notes.get(c);
    assert.ok(n && n.length === 4 && n.every((x) => x.trim()), `${c}: no notes`);
    if (base.kanji[c].s) assert.ok(base.kanji[c].s!.every((i) => i >= -1 && i < base.kanji[c].p.length), `${c}: bad stroke parts`);
  }
});

test('onomatopoeia: their own deck (every word, 20 new a session) and never in battle', async () => {
  const ono = VOCAB.filter((v) => v.level === 'ONO');
  assert.ok(ono.length >= 200, `${ono.length} words`);
  for (const v of ono) { assert.ok(v.ono && v.romaji && v.meaning, v.id); assert.ok(!LEVELS.includes(v.level as never)); }
  assert.ok(ono.some((v) => v.ono === 'sei') && ono.some((v) => v.ono === 'tai') && ono.some((v) => v.ono === 'jo'));
  assert.equal(toRomaji('ドキドキ'), 'dokidoki');
  assert.equal(toRomaji('しょんぼり'), 'shonbori');
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await player(store);
  const s = await study.summary(u, TODAY);
  assert.equal(s.decks.ono.total, ono.length);
  const q = await study.queue(u, 'ono');
  assert.equal(q.length, 20);
  assert.ok(q.every((c) => c.level === 'ONO' && c.ono));
  // the JLPT quiz leaves them out
  const words = await study.quiz(u, 10);
  assert.ok(words.every((w) => w.level !== 'ONO'));
});

test('onomatopoeia quiz: four kinds of question, the right answer among the choices', () => {
  const ono = VOCAB.filter((v) => v.level === 'ONO');
  const ex = new Map<string, string>();
  for (const l of readFileSync('data/examples/ono.tsv', 'utf8').split('\n')) if (l) ex.set(l.split('\t')[0], l.split('\t')[1]);
  assert.equal(ex.size, ono.length, 'an example for every onomatopoeia');
  const qs = buildOnoQuiz(ono.slice(0, 12), VOCAB, Math.random, ex);
  assert.deepEqual(new Set(qs.map((q) => q.kind)), new Set(['onomean', 'onoword', 'onoctx']));
  for (const q of qs) {
    assert.ok(q.answer >= 0 && q.answer < q.choices.length);
    assert.equal(new Set(q.choices).size, q.choices.length);
    if (q.kind === 'onoctx') assert.match(q.prompt, /＿＿＿/);
  }
});

test('Deck Duel: the shared pool takes 2 words a level from each player\'s All spells', () => {
  const words = (l: string) => VOCAB.filter((v) => v.level === l && /\p{Script=Han}/u.test(v.kanji));
  const a = new Set<string>(), b = new Set<string>();
  for (const l of ['N5', 'N4', 'N3', 'N2', 'N1']) { words(l).slice(0, 5).forEach((v) => a.add(v.id)); words(l).slice(5, 10).forEach((v) => b.add(v.id)); }
  const pool = buildDraftPool(VOCAB, () => true, Math.random, 4, [a, b]);
  assert.equal(pool.length, 20);
  for (const l of ['N5', 'N4', 'N3', 'N2', 'N1']) {
    const lv = pool.filter((c) => c.entry.level === l);
    assert.equal(lv.length, 4);
    assert.equal(lv.filter((c) => a.has(c.entry.id)).length, 2);
    assert.equal(lv.filter((c) => b.has(c.entry.id)).length, 2);
  }
  // someone with no spells: their share is random words of the level
  const alone = buildDraftPool(VOCAB, () => true, Math.random, 4, [a, new Set()]);
  assert.equal(alone.length, 20);
  assert.equal(alone.filter((c) => a.has(c.entry.id)).length, 10);
});
