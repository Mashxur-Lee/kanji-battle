import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { StoryService, type StoryWord } from '../src/server/study/StoryService';

const TODAY = '2026-10-29';

test('★ starred words: set and unset, shown in the deck list and the profile', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'star1', passwordHash: 'x', role: 'user' });
  await study.setDailyLevels(u, { N5: 3 }, TODAY);
  const [row] = await study.deckList((await store.findById(u.id))!, 'all');
  assert.deepEqual(await study.setStar((await store.findById(u.id))!, row.vocabId, true), [row.vocabId]);
  assert.equal((await study.deckList((await store.findById(u.id))!, 'all')).find((r) => r.vocabId === row.vocabId)?.starred, true);
  assert.deepEqual((await study.profile((await store.findById(u.id))!)).starred, [row.vocabId]);
  assert.deepEqual(await study.setStar((await store.findById(u.id))!, row.vocabId, false), []);
  await assert.rejects(() => study.setStar(u, 42, true), /Unknown word/);
});

const words: StoryWord[] = [{ kanji: '寺', reading: 'てら', meaning: 'temple' }, { kanji: '祈る', reading: 'いのる', meaning: 'to pray' }];
const good = JSON.stringify({ title: { ja: '[寺|てら]', en: 'Temple', ru: 'Храм' }, lines: [{ ja: '【[寺|てら]】で【[祈|いの]った】。', en: 'x', ru: 'y' }] });

test('stories: 10 a day for players, 40 for admins; the story level goes into the prompt and the cache key', async () => {
  const realFetch = globalThis.fetch;
  let prompt = '';
  globalThis.fetch = (async (_u: string, init: RequestInit) => {
    prompt = JSON.parse(String(init.body)).contents[0].parts[0].text;
    return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: good }] } }] }));
  }) as unknown as typeof fetch;
  try {
    const svc = new StoryService({ kind: 'gemini', key: 'g', model: 'm' });
    assert.equal(svc.usage('u', TODAY).limit, 10);
    assert.equal(svc.usage('a', TODAY, true).limit, 40);
    assert.ok((await svc.story('u', words, TODAY, { level: 'N2' })).story);
    assert.match(prompt, /JLPT N2/);
    prompt = '';
    await svc.story('u', words, TODAY, { level: 'N2' });
    assert.equal(prompt, '', 'the same words at the same level come from the cache');
    await svc.story('u', words, TODAY, { level: 'N5' });
    assert.match(prompt, /JLPT N5/, 'another level is a new story');
    // a player's cap
    const few = new StoryService({ kind: 'gemini', key: 'g', model: 'm' }, 1);
    assert.ok((await few.story('p', words, TODAY)).story);
    assert.equal((await few.story('p', words, TODAY, { level: 'N1' })).why, 'limit');
    assert.ok((await few.story('adm', words, TODAY, { level: 'N1', admin: true })).story, 'admins have 40');
  } finally { globalThis.fetch = realFetch; }
});

test('stories (0.9.9.5.1): written in the background — a job id at once, the story when it is there', async () => {
  const realFetch = globalThis.fetch;
  let release: () => void = () => {};
  const gate = new Promise<void>((ok) => { release = ok; });
  globalThis.fetch = (async () => { await gate; return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: good }] } }] })); }) as unknown as typeof fetch;
  try {
    const svc = new StoryService({ kind: 'gemini', key: 'g', model: 'm' });
    const id = svc.startJob('u', words, TODAY, { level: 'N3' });
    assert.equal(svc.job('u', id), null, 'still being written');
    assert.equal(svc.job('someone else', id), undefined, 'not yours');
    release();
    for (let i = 0; i < 20 && !svc.job('u', id); i++) await new Promise((ok) => setTimeout(ok, 5));
    assert.ok(svc.job('u', id)?.story);
    assert.equal(svc.usage('u', TODAY).used, 1);
  } finally { globalThis.fetch = realFetch; }
});

test('0.9.9.6: nicknames — others see it, the login stays; a nickname may match another login', async () => {
  const { AuthService } = await import('../src/server/auth/AuthService');
  const { TokenSigner } = await import('../src/server/auth/tokens');
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('secret'));
  const a = await store.create({ username: 'alice', passwordHash: 'x', role: 'user' });
  await store.create({ username: 'bob', passwordHash: 'x', role: 'user' });
  const pub = await auth.setNickname(a, '  Мудрая Сова ');
  assert.equal(pub.name, 'Мудрая Сова');
  assert.equal(pub.username, 'alice');
  // 0.9.9.6.1: a nickname may match another player's login — the logins tell them apart
  assert.equal((await auth.setNickname(a, 'Bob')).name, 'Bob');
  assert.equal((await auth.setNickname(a, 'Bob')).username, 'alice');
  await auth.setNickname(a, 'Мудрая Сова');
  await assert.rejects(() => auth.setNickname(a, 'x'), /2–24/);
  const study = new StudyService(store);
  const p = await study.publicProfile(a.id);
  assert.deepEqual([p?.name, p?.login], ['Мудрая Сова', 'alice']);
  assert.equal((await auth.setNickname((await store.findById(a.id))!, '')).name, 'alice');
});

test('0.9.9.6: reminder status — tasks left, the Daily challenge, reviews due', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'rem1', passwordHash: 'x', role: 'user' });
  const s = await study.notifyStatus(u, TODAY);
  assert.deepEqual([s.tasksLeft, s.tasksTotal, s.challengeDone, s.allDue], [4, 4, false, 0]);
});

test('0.9.9.6: the new achievements are earned from lifetime totals', async () => {
  const { earnedAchievements } = await import('../src/shared/achievements');
  const base = { wins: 0, level: 1, bestStreak: 0, learned: 0, friends: 0, seasonal: 0 };
  assert.deepEqual(earnedAchievements({ ...base, reviews: 60, quizzes: 10, nickname: true }).sort(), ['first-steps', 'quiz-whiz', 'true-name']);
  assert.ok(earnedAchievements({ ...base, bestStreak: 100 }).includes('unbreakable'));
});

test('0.9.9.6.1: achievement progress — every goal names a real achievement; counts follow the facts', async () => {
  const { ACH_GOALS, ACHIEVEMENTS, achCounts } = await import('../src/shared/achievements');
  const ids = new Set(ACHIEVEMENTS.map((a) => a.id));
  for (const [id, [, n]] of Object.entries(ACH_GOALS)) { assert.ok(ids.has(id), id); assert.ok(n > 0, id); }
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'prog1', passwordHash: 'x', role: 'user' });
  const c = achCounts(await study.achFacts(u));
  assert.equal(c.wins, 0);
  assert.equal(c.reviews, 0);
  assert.equal(typeof c.learned, 'number');
  assert.equal(typeof c.starred, 'number');
});
