import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { AuthService, AuthError } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { FileStore, MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { VOCAB } from '../src/server/vocab';
import { newCard } from '../src/shared/srs';

test('admins can promote a player to admin and take it back; the main admin account and yourself are off limits', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  await auth.seed([{ username: 'admin', password: 'adminn123', role: 'admin' }]);
  const owner = (await store.findByUsername('admin'))!;
  const mika = await store.create({ username: 'mika', passwordHash: 'h', role: 'user' });
  const row = await auth.setRole(owner, mika.id, 'admin');
  assert.equal(row.role, 'admin');
  const promoted = (await store.findById(mika.id))!;
  await auth.requireAdmin(new TokenSigner('t').sign(mika.id)); // the new admin gets the Admin page
  await assert.rejects(auth.setRole(promoted, owner.id, 'user'), /main admin/);
  await assert.rejects(auth.setRole(promoted, promoted.id, 'user'), /own role/);
  await auth.setRole(owner, mika.id, 'user');
  assert.equal((await store.findById(mika.id))!.role, 'user');
  await assert.rejects(auth.setRole(owner, mika.id, 'god' as never), AuthError);
});

test('decks: All, Struggling and Custom are separate; lists show when a word was added; words can be removed', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  let u = await store.create({ username: 'decks', passwordHash: 'x', role: 'user' });
  const [a, b] = VOCAB.filter((v) => v.level === 'N5').slice(0, 2);
  await store.addCards(u.id, [newCard(a.id, 1000, 'all')]);
  const r = await study.recordMatch(u.id, 'loss', 0.5, 'reading', [a.id, b.id]);
  assert.deepEqual(r.missed.map((m) => [m.id, m.added]), [[a.id, true], [b.id, true]], 'missed words go to Struggling (pre-ticked)');
  u = (await store.findById(u.id))!;
  const sum = await study.summary(u, '2026-10-15');
  assert.deepEqual([sum.decks.all.total, sum.decks.struggling.total, sum.decks.custom.total], [1, 2, 0], 'struggling words no longer pile into All spells');
  const list = await study.deckList(u, 'struggling');
  assert.equal(list.length, 2);
  assert.ok(list.every((w) => typeof w.addedAt === 'number' && w.kanji && w.meaning));
  // the results screen: untick one → it leaves Struggling; move the other → Custom
  assert.equal(await study.removeFromDeck(u, 'struggling', [b.id]), 1);
  assert.deepEqual(await study.addToDeck(u, 'custom', [a.id, 'not-a-word']), [a.id]);
  assert.deepEqual((await study.deckList(u, 'custom')).map((w) => w.vocabId), [a.id]);
  await assert.rejects(study.deckList(u, 'nope'), /Unknown deck/);
});

test('Custom spells: dictionary words by search or kanji, or your own word with reading and meaning', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'maker', passwordHash: 'x', role: 'user' });
  const known = VOCAB.find((v) => v.level === 'N4' && v.kanji.length === 2)!;
  assert.ok(study.search(known.kanji).some((w) => w.id === known.id), 'search finds a dictionary word by kanji');
  assert.ok(study.search('water').length > 0, '…and by English meaning');
  assert.equal((await study.addCustom(u, { kanji: known.kanji })).word.id, known.id, 'a dictionary word is used as it is');
  await assert.rejects(study.addCustom(u, { kanji: '魔導書' }), /reading in kana/);
  await assert.rejects(study.addCustom(u, { kanji: '魔導書', reading: 'まどうしょ' }), /meaning/);
  const mine = await study.addCustom(u, { kanji: '魔導書', reading: 'まどうしょ', meaning: 'grimoire' });
  assert.ok(mine.added && mine.word.custom && mine.word.id.startsWith('u:'));
  const queue = await study.queue(u, 'custom');
  assert.deepEqual(queue.map((c) => c.kanji).sort(), [known.kanji, '魔導書'].sort(), 'custom words are studied like any other');
  await study.review(u, mine.word.id, 'good', Date.now(), '2026-10-15', 0, 'custom');
  await study.removeFromDeck(u, 'custom', [mine.word.id]);
  assert.equal((await store.customWords(u.id)).length, 0, 'a removed custom word is deleted');
});

test('new spells a day: 10–150, raising it today adds the difference at once', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  let u = await store.create({ username: 'daily', passwordHash: 'x', role: 'user' });
  await study.setStudyLevels(u, ['N5'], '2026-10-15');
  u = (await store.findById(u.id))!;
  assert.equal((await study.summary(u, '2026-10-15')).decks.all.total, 25, 'default 25');
  assert.equal(await study.setDailyNew(u, 60, '2026-10-15'), 60);
  u = (await store.findById(u.id))!;
  assert.equal((await study.summary(u, '2026-10-15')).decks.all.total, 60, 'topped up to 60 today');
  assert.equal(await study.setDailyNew(u, 5, '2026-10-15'), 10, 'at least 10');
  assert.equal(await study.setDailyNew(u, 9999, '2026-10-15'), 150, 'at most 150');
  u = (await store.findById(u.id))!;
  assert.equal((await study.summary(u, '2026-10-16')).decks.all.total, 60 + 90 + 150, 'the next day: a full new batch');
});

test('JLPT quiz: 4 choices with one right answer, from the words you studied', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store, () => 0.3);
  const u = await store.create({ username: 'quizzer', passwordHash: 'x', role: 'user' });
  const words = VOCAB.filter((v) => v.level === 'N5').slice(0, 12);
  await store.addCards(u.id, words.map((v) => ({ ...newCard(v.id, 1, 'all'), reps: 1, state: 'review' as const })));
  const qs = await study.quiz(u, 9);
  assert.equal(qs.length, 9);
  for (const q of qs) {
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4, 'no duplicate choices');
    const w = words.find((v) => v.id === q.vocabId)!;
    const right = q.choices[q.answer];
    assert.ok(q.kind === 'kanji' ? right === w.kanji : q.kind === 'meaning' ? right === w.meaning : right.length > 0);
  }
  assert.deepEqual(new Set(qs.map((q) => q.kind)), new Set(['reading', 'meaning', 'kanji']));
});

test('profile badges: up to 3, only achievements you have', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'badger', passwordHash: 'x', role: 'user' });
  await store.update(u.id, { unlocks: ['ach:first-win', 'ach:combo-10', 'ach:graduate', 'ach:devoted'] });
  const me = (await store.findById(u.id))!;
  assert.deepEqual(await study.setBadges(me, ['combo-10', 'first-win']), ['combo-10', 'first-win']);
  await assert.rejects(study.setBadges(me, ['combo-10', 'first-win', 'graduate', 'devoted']), /up to 3/);
  await assert.rejects(study.setBadges(me, ['eternal']), /earned/);
  assert.deepEqual((await study.publicProfile(u.id))!.badges, ['combo-10', 'first-win']);
});

test('a save from before 0.9.9 keeps every card: struggling words get their own card in Struggling spells', async () => {
  const file = path.join(mkdtempSync(path.join(tmpdir(), 'kw-')), 'db.json');
  const id = '11111111-1111-1111-1111-111111111111';
  const card = (vocabId: string, struggling: boolean) => ({ vocabId, state: 'review', step: 0, ease: 2500, intervalDays: 4, due: 5, reps: 3, lapses: 0, struggling });
  writeFileSync(file, JSON.stringify({ xpScheme: 2, users: [{ id, username: 'old', passwordHash: 'h', role: 'user', banned: false, createdAt: '2026-01-01T00:00:00.000Z', xp: 0 }],
    srs: { [id]: [card('山:やま', true), card('川:かわ', false)] } }));
  const s = new FileStore(file);
  const cards = await s.cards(id);
  assert.deepEqual(cards.map((c) => `${c.deck}:${c.vocabId}`).sort(), ['all:山:やま', 'all:川:かわ', 'struggling:山:やま'].sort());
  assert.equal(cards.find((c) => c.deck === 'struggling')!.state, 'review', 'progress kept');
});
