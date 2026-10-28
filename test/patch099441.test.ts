import assert from 'node:assert/strict';
import { test } from 'node:test';
import { normalizeStory, providerFromEnv, StoryService, type StoryWord } from '../src/server/study/StoryService';

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

test('story: a good story is used as it is (0.9.9.4.4.5: any number of sentences, a sentence may hold two words)', () => {
  const st = normalizeStory(good, words);
  assert.ok(typeof st !== 'string');
  assert.deepEqual(st.lines.map((l) => l.words), [[1], [0]]);
  const one = { title: good.title, lines: [{ ja: '[朝|あさ]、【[寺|てら]】で【[祈|いの]った】。', en: 'x', ru: 'y' }, { ja: 'おわり。', en: 'The end.', ru: 'Конец.' }] };
  const st2 = normalizeStory(one, words);
  assert.ok(typeof st2 !== 'string');
  assert.deepEqual(st2.lines.map((l) => l.words), [[1, 0], []]);
});

test('story: small slips are repaired, a missing word is refused', () => {
  const fix = (f: (s: typeof good) => void) => { const s = JSON.parse(JSON.stringify(good)); f(s); return normalizeStory(s, words); };
  // ruby with a non-kana reading → plain text; a 【】 that isn't one of the words → unwrapped; a word marked twice → the first stays
  const a = fix((s) => { s.lines[0].ja = '[朝|morning]、ハルは【[寺|てら]】へ【[行|い]った】。【[寺|てら]】'; });
  assert.ok(typeof a !== 'string');
  assert.equal(a.lines[0].ja, '朝、ハルは【[寺|てら]】へ[行|い]った。[寺|てら]');
  assert.deepEqual(a.lines[0].words, [1]);
  assert.match(fix((s) => { s.lines[1].ja = 'そこで[静|しず]かに[祈|いの]った。'; }) as string, /missing 祈る/);
  assert.match(fix((s) => { s.lines = []; }) as string, /no lines/);
});

test('stories: off without an API key; with one, a checked answer is used and cached', async () => {
  assert.deepEqual(await new StoryService(null).story('u', words, '2026-10-28'), { story: null, why: 'off' });
  let calls = 0;
  const realFetch = globalThis.fetch;
  globalThis.fetch = (async () => { calls++; return new Response(JSON.stringify({ content: [{ type: 'text', text: `Here:\n${JSON.stringify(good)}` }] })); }) as typeof fetch;
  try {
    const svc = new StoryService({ kind: 'anthropic', key: 'k', model: 'm' });
    const s = (await svc.story('u', words, '2026-10-28')).story;
    assert.equal(s?.lines.length, 2);
    assert.equal(svc.usage('u', '2026-10-28').used, 1);
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
    const s = (await new StoryService({ kind: 'gemini', key: 'g', model: 'gemini-flash-lite-latest' }).story('u', words, '2026-10-28')).story;
    assert.equal(s?.lines.length, 2);
    assert.match(url, /generativelanguage.googleapis.com.*gemini-flash-lite-latest:generateContent/);
  } finally { globalThis.fetch = realFetch; }
});

test('stories (0.9.9.4.4.5): the reason comes back when there is no story; only stories you get count', async () => {
  const realFetch = globalThis.fetch;
  let bodies: any[] = [];
  globalThis.fetch = (async (_u: string, init: RequestInit) => {
    const b = JSON.parse(String(init.body)); bodies.push(b);
    // a model that knows neither way of switching thinking off (answers 400 "invalid argument", like Gemini does)
    if (b.generationConfig.thinkingConfig) return new Response('{"error":{"code":400,"message":"Request contains an invalid argument.","status":"INVALID_ARGUMENT"}}', { status: 400 });
    return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: '{"title":{"ja":"x"},"lines":[{"ja":"【[寺|てら]】","en":"a","ru":"b"}]}' }] } }] }));
  }) as unknown as typeof fetch;
  try {
    const svc = new StoryService({ kind: 'gemini', key: 'g', model: 'm' }, 1);
    const r = await svc.story('u', words, '2026-10-28');
    assert.equal(r.story, null);
    assert.match(r.why!, /missing 祈る/);
    assert.deepEqual(bodies.slice(0, 3).map((b) => b.generationConfig.thinkingConfig ?? null), [{ thinkingLevel: 'minimal' }, { thinkingBudget: 0 }, null], 'each way in turn');
    bodies = [];
    await svc.story('u', [...words, { kanji: '山', reading: 'やま', meaning: 'mountain' }], '2026-10-28');
    assert.equal(bodies[0].generationConfig.thinkingConfig, undefined, 'the way that worked is remembered');
    assert.equal(svc.usage('u', '2026-10-28').used, 0, 'a failed story is not counted');
    globalThis.fetch = (async () => new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify(good) }] } }] }))) as unknown as typeof fetch;
    assert.ok((await svc.story('u', words, '2026-10-28')).story);
    assert.deepEqual(await svc.story('u', [{ kanji: '山', reading: 'やま', meaning: 'mountain' }, ...words], '2026-10-28'), { story: null, why: 'limit' });
  } finally { globalThis.fetch = realFetch; }
});
