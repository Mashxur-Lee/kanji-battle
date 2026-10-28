import assert from 'node:assert/strict';
import { test } from 'node:test';
import { checkStory, providerFromEnv, StoryService, type StoryWord } from '../src/server/study/StoryService';

const words: StoryWord[] = [
  { kanji: '祈る', reading: 'いのる', meaning: 'to pray' },
  { kanji: '寺', reading: 'てら', meaning: 'temple' },
];
const good = {
  title: { ja: '[寺|てら]の[朝|あさ]', en: 'Morning at the temple', ru: 'Утро в храме' },
  lines: [
    { word: 1, ja: '[朝|あさ]、ハルは【[寺|てら]】へ[行|い]った。', en: 'In the morning Haru went to the temple.', ru: 'Утром Хару пошёл в храм.' },
    { word: 0, ja: 'そこで[静|しず]かに【[祈|いの]った】。', en: 'There he prayed quietly.', ru: 'Там он тихо помолился.' },
  ],
};

test('story check: a good story passes', () => {
  assert.equal(checkStory(good, words), null);
});

test('story check: missing furigana, a missing mark, a wrong word or reading are refused', () => {
  const bad = (f: (s: typeof good) => void) => { const s = JSON.parse(JSON.stringify(good)); f(s); return checkStory(s, words); };
  assert.match(bad((s) => { s.lines[0].ja = '朝、ハルは【[寺|てら]】へ行った。'; })!, /furigana/);
  assert.match(bad((s) => { s.lines[1].ja = 'そこで[静|しず]かに[祈|いの]った。'; })!, /marks/);
  assert.match(bad((s) => { s.lines[1].ja = 'そこで【[願|ねが]った】。'; })!, /target/);
  assert.match(bad((s) => { s.lines[1].ja = 'そこで【[祈|いな]った】。'; })!, /reading/);
  assert.match(bad((s) => { s.lines.pop(); })!, /line count/);
  assert.match(bad((s) => { s.lines[1].word = 1; })!, /word index/);
});

test('stories: off without an API key; with one, a checked answer is used and cached', async () => {
  assert.equal(await new StoryService(null).story('u', words, '2026-10-28'), null);
  let calls = 0;
  const realFetch = globalThis.fetch;
  globalThis.fetch = (async () => { calls++; return new Response(JSON.stringify({ content: [{ type: 'text', text: `Here:\n${JSON.stringify(good)}` }] })); }) as typeof fetch;
  try {
    const svc = new StoryService({ kind: 'anthropic', key: 'k', model: 'm' });
    const s = await svc.story('u', words, '2026-10-28');
    assert.equal(s?.lines.length, 2);
    await svc.story('u', [...words].reverse(), '2026-10-28');
    assert.equal(calls, 1, 'the same words come from the cache');
  } finally { globalThis.fetch = realFetch; }
});

test('stories: Gemini (free tier) first, then Claude, then any OpenAI-compatible API', async () => {
  assert.equal(providerFromEnv({}), null);
  assert.equal(providerFromEnv({ GEMINI_API_KEY: 'g', ANTHROPIC_API_KEY: 'a' })?.kind, 'gemini');
  assert.equal(providerFromEnv({ ANTHROPIC_API_KEY: 'a' })?.kind, 'anthropic');
  const grok = providerFromEnv({ OPENAI_API_KEY: 'x', OPENAI_BASE_URL: 'https://api.x.ai/v1/', STORY_MODEL: 'grok-x' });
  assert.deepEqual(grok, { kind: 'openai', key: 'x', model: 'grok-x', baseUrl: 'https://api.x.ai/v1' });
  const realFetch = globalThis.fetch;
  let url = '';
  globalThis.fetch = (async (u: string) => { url = u; return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify(good) }] } }] })); }) as unknown as typeof fetch;
  try {
    const s = await new StoryService({ kind: 'gemini', key: 'g', model: 'gemini-flash-lite-latest' }).story('u', words, '2026-10-28');
    assert.equal(s?.lines.length, 2);
    assert.match(url, /generativelanguage.googleapis.com.*gemini-flash-lite-latest:generateContent/);
  } finally { globalThis.fetch = realFetch; }
});
