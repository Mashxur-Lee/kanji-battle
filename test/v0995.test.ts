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
