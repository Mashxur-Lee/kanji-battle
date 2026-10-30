// Reading passage stories (0.9.9.4.4.1): a small AI (Gemini, Claude or an OpenAI-compatible model) writes ONE short story
// that uses all of the player's words, with furigana over the kanji and English + Russian translations.
// 0.9.9.4.4.5: the words are woven into one flowing story (a sentence may hold two of them, or none) instead of
// one sentence per word, and the answer is repaired where it can be rather than thrown away. When there is no
// story, the reason ('off', 'limit', 'timeout' …) goes back to the app, which says so and uses the words'
// example sentences instead. Without an API key the feature is simply off.

import { VOCAB_BY_ID } from '../vocab';

export interface StoryWord { id?: string; kanji: string; reading: string; meaning: string }
/** a sentence of the story; `words` are the words its 【】 blanks hold, in order (indexes into the word list) */
export interface StoryLine { ja: string; en: string; ru: string; words: number[] }
export interface Story { title: { ja: string; en: string; ru: string }; lines: StoryLine[] }

const HAN = /[\p{Script=Han}々]/u;
const RUBY = /\[([^\]|]+)\|([^\]]+)\]/g;
const KANA = /^[぀-ゟ゠-ヿー]+$/;
/** the start of a word as it is written in any form: its kanji and the kana between them (祈る → 祈, 静か → 静, お金持ち → お金持) */
const stemOf = (kanji: string) => {
  const last = Math.max(...[...kanji].map((c, i) => (HAN.test(c) ? i : -1)));
  return last < 0 ? kanji.replace(/[るうくすつぬむぶぐいだなした]$/, '') || kanji : [...kanji].slice(0, last + 1).join('');
};

/**
 * 0.9.9.4.4.5: one story, as many sentences as it needs. Makes a model's answer usable when it can — ruby with a
 * bad reading becomes plain text, a 【】 around something that isn't one of the words is unwrapped, a word marked
 * twice keeps its first blank — and says why when it can't (a word is missing, no text …).
 */
export function normalizeStory(s: unknown, words: readonly StoryWord[]): Story | string {
  const st = s as { title?: { ja?: unknown; en?: unknown; ru?: unknown }; lines?: unknown };
  if (!st || typeof st !== 'object' || !Array.isArray(st.lines) || !st.lines.length) return 'no lines';
  if (st.lines.length > 40) return 'too many lines';
  const str = (x: unknown) => (typeof x === 'string' ? x.trim() : '');
  const fixRuby = (t: string) => t.replace(RUBY, (m, base: string, rt: string) => (HAN.test(base) && KANA.test(rt) ? m : base));
  const stems = words.map((w) => stemOf(w.kanji));
  const used = new Set<number>();
  const lines: StoryLine[] = [];
  for (const raw of st.lines as Array<Record<string, unknown>>) {
    let ja = fixRuby(str(raw?.ja));
    const en = str(raw?.en), ru = str(raw?.ru) || en;
    if (!ja) continue;
    if (ja.length > 240) return 'too long';
    const ws: number[] = [];
    ja = ja.replace(/【([^】]*)】/g, (m, inner: string) => {
      const written = inner.replace(RUBY, '$1');
      // the word this blank holds: the one whose kanji the text starts with (the longest match wins)
      let best = -1;
      words.forEach((_, i) => { if (!used.has(i) && stems[i] && written.startsWith(stems[i]) && (best < 0 || stems[i].length > stems[best].length)) best = i; });
      if (best < 0) return inner; // not one of the words (or one already used): plain text
      used.add(best); ws.push(best);
      return m;
    });
    lines.push({ ja, en, ru, words: ws });
  }
  const missing = words.map((w, i) => (used.has(i) ? '' : w.kanji)).filter(Boolean);
  if (missing.length) return `missing ${missing.join(' ')}`;
  const t = st.title ?? {};
  return { title: { ja: fixRuby(str(t.ja)), en: str(t.en), ru: str(t.ru) || str(t.en) }, lines };
}

/** 0.9.9.5: the story's own level — its other words and its grammar (the player picks it, N5–N1) */
export type StoryLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
export const isStoryLevel = (x: unknown): x is StoryLevel => typeof x === 'string' && /^N[1-5]$/.test(x);
const LEVEL_HINT: Record<StoryLevel, string> = {
  N5: 'JLPT N5: only the most basic words and grammar (です・ます, simple particles, short sentences)',
  N4: 'JLPT N4: basic everyday words and grammar (て-form, ～たい, ～から, simple conditionals)',
  N3: 'JLPT N3: intermediate everyday words and grammar (～ようにする, ～ことになる, passive, more natural connections)',
  N2: 'JLPT N2: upper-intermediate words and grammar (newspaper-like expressions, ～わけではない, ～に対して)',
  N1: 'JLPT N1: advanced vocabulary and grammar, natural written Japanese',
};

function prompt(words: readonly StoryWord[], level: StoryLevel = 'N4') {
  const list = words.map((w, i) => `${i + 1}. ${w.kanji} (${w.reading}) — ${w.meaning}`).join('\n');
  return `Write ONE short, simple, coherent story in Japanese for a learner (about ${Math.max(6, words.length + 2)}–${words.length * 2} short sentences). It must use every one of these ${words.length} words, each exactly once, woven naturally into the story so that the context shows what the word means. The words should not each get their own separate sentence — it is one flowing story with a small cast, one setting and a clear little plot from beginning to end; a sentence may hold two of the words, and some sentences may hold none.

Words:
${list}

Format rules for the "ja" text (very important):
- Write every kanji with its furigana as [漢字|かんじ] — e.g. [今日|きょう]は[寺|てら]で — never a kanji outside these brackets.
- Kana is written as it is, never in brackets.
- Wrap each of the words above, where it appears, in 【】 together with its okurigana or conjugation — e.g. 【[祈|いの]った】 or 【[静|しず]かな】. Use 【】 only for those words, once each.
- Write the rest of the story at ${LEVEL_HINT[level]} — the other words and the grammar should be of that level (and easier), so it is a good read for someone studying that level.

Answer with JSON only, no other text:
{"title":{"ja":"…","en":"…","ru":"…"},"lines":[{"ja":"one sentence","en":"its English translation","ru":"its Russian translation"}]}
"lines" are the story's sentences in order. The title's "ja" uses the same furigana format and has no 【】.`;
}

/** Which AI writes the stories, from the environment (0.9.9.4.4.2): Gemini (has a free tier), Claude, or any
 * OpenAI-compatible API (OpenAI, xAI Grok, Groq, OpenRouter …). The first key that is set wins. */
export interface StoryProvider { kind: 'gemini' | 'anthropic' | 'openai'; key: string; model: string; baseUrl?: string }
export function providerFromEnv(env: Record<string, string | undefined> = process.env): StoryProvider | null {
  const model = env.STORY_MODEL || undefined;
  if (env.GEMINI_API_KEY) return { kind: 'gemini', key: env.GEMINI_API_KEY, model: model ?? 'gemini-flash-lite-latest' };
  if (env.ANTHROPIC_API_KEY) return { kind: 'anthropic', key: env.ANTHROPIC_API_KEY, model: model ?? 'claude-haiku-5-5' };
  if (env.OPENAI_API_KEY) return { kind: 'openai', key: env.OPENAI_API_KEY, model: model ?? 'gpt-4o-mini', baseUrl: (env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '') };
  return null;
}

/** which generationConfig worked for a Gemini model (see complete) */
const geminiWay = new Map<string, number>();
/** One prompt → the model's text answer. */
async function complete(p: StoryProvider, text: string, signal: AbortSignal): Promise<string> {
  const post = async (url: string, headers: Record<string, string>, body: unknown) => {
    const r = await fetch(url, { method: 'POST', signal, headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body) });
    if (!r.ok) throw new Error(`${p.kind} API ${r.status}: ${(await r.text()).slice(0, 200)}`);
    return r.json() as Promise<any>;
  };
  if (p.kind === 'gemini') {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(p.model)}:generateContent`;
    // 0.9.9.4.4.6: no "thinking" (a short story doesn't need it, and it makes the answer slow) — but how to
    // switch it off depends on the model: Gemini 3 takes thinkingLevel, 2.5 takes thinkingBudget, and a model
    // answers 400 "invalid argument" to the one it doesn't know. So: try each way in turn, and remember the
    // first that works for this model.
    const base = { temperature: 0.9, maxOutputTokens: 8192 };
    const ways: Array<Record<string, unknown>> = [
      { ...base, responseMimeType: 'application/json', thinkingConfig: { thinkingLevel: 'minimal' } },
      { ...base, responseMimeType: 'application/json', thinkingConfig: { thinkingBudget: 0 } },
      { ...base, responseMimeType: 'application/json' },
      base,
    ];
    let d;
    for (let i = geminiWay.get(p.model) ?? 0; ; i++) {
      try {
        d = await post(url, { 'x-goog-api-key': p.key }, { contents: [{ role: 'user', parts: [{ text }] }], generationConfig: ways[i] });
        geminiWay.set(p.model, i);
        break;
      } catch (e) {
        if (i + 1 >= ways.length || !/ 400:/.test((e as Error).message) || /API[ _]KEY/i.test((e as Error).message)) throw e;
      }
    }
    return (d.candidates?.[0]?.content?.parts ?? []).map((x: { text?: string }) => x.text ?? '').join('');
  }
  if (p.kind === 'anthropic') {
    const d = await post('https://api.anthropic.com/v1/messages', { 'x-api-key': p.key, 'anthropic-version': '2023-06-01' },
      { model: p.model, max_tokens: 4000, messages: [{ role: 'user', content: text }] });
    return d.content?.find((c: { type: string }) => c.type === 'text')?.text ?? '';
  }
  const d = await post(`${p.baseUrl}/chat/completions`, { authorization: `Bearer ${p.key}` },
    { model: p.model, messages: [{ role: 'user', content: text }], response_format: { type: 'json_object' }, temperature: 0.9 });
  return d.choices?.[0]?.message?.content ?? '';
}

export class StoryService {
  private readonly cache = new Map<string, Story>();
  /** per player and day ('user|day'): stories had and AI calls made (0.9.9.4.4.7: failed calls are capped too) */
  private readonly used = new Map<string, { n: number; tries: number }>();
  /** players with a story being written — one at a time each */
  private readonly busy = new Set<string>();
  /** 0.9.9.5.1: stories being written in the background — the app asks every couple of seconds (a phone's network
   * drops a request held open for long, and then the finished story was lost) */
  private readonly jobs = new Map<string, { userId: string; at: number; out: { story: Story | null; why?: string } | null }>();
  private all = { day: '', n: 0 };
  constructor(private readonly provider: StoryProvider | null = providerFromEnv(), private readonly perDay = 10, private readonly allPerDay = Number(process.env.STORY_DAILY_MAX) || 400, private readonly adminPerDay = 40) {}
  get enabled() { return !!this.provider; }
  get describe() { return this.provider ? `${this.provider.kind} · ${this.provider.model}` : 'off'; }

  /** The words as the story should use them (dictionary entries win over what the browser sent). */
  static clean(raw: unknown): StoryWord[] {
    const arr = Array.isArray(raw) ? raw.slice(0, 8) : [];
    return arr.flatMap((x) => {
      const v = x && typeof x.id === 'string' ? VOCAB_BY_ID.get(x.id) : undefined;
      if (v) return [{ id: v.id, kanji: v.kanji, reading: v.reading, meaning: v.meaning }];
      const k = String(x?.kanji ?? '').slice(0, 16), r = String(x?.reading ?? '').slice(0, 32), m = String(x?.meaning ?? '').slice(0, 80);
      return k && r && m ? [{ id: typeof x?.id === 'string' ? x.id.slice(0, 40) : undefined, kanji: k, reading: r, meaning: m }] : [];
    });
  }

  /** Starts writing a story and returns at once with a job id; `job()` gives the result when it's there. */
  startJob(userId: string, words: StoryWord[], today: string, opts: { level?: StoryLevel; admin?: boolean } = {}): string {
    const now = Date.now();
    for (const [k, j] of this.jobs) if (now - j.at > 10 * 60_000) this.jobs.delete(k);
    const id = `${now.toString(36)}${Math.random().toString(36).slice(2, 10)}`;
    const job: { userId: string; at: number; out: { story: Story | null; why?: string } | null } = { userId, at: now, out: null };
    this.jobs.set(id, job);
    void this.story(userId, words, today, opts).then((o) => { job.out = o; }, (e) => { job.out = { story: null, why: (e as Error).message }; });
    return id;
  }
  /** a job's result: null while it's still being written, undefined if there's no such job (or it isn't yours) */
  job(userId: string, id: string): { story: Story | null; why?: string } | null | undefined {
    const j = this.jobs.get(id);
    if (!j || j.userId !== userId) return undefined;
    return j.out;
  }

  /** How many stories this player has had written today, and the cap (0.9.9.4.4.5: shown next to "New passage"). */
  usage(userId: string, today: string, admin = false) {
    return { enabled: this.enabled, used: this.used.get(`${userId}|${today}`)?.n ?? 0, limit: this.limitFor(admin) };
  }
  /** 0.9.9.5: 10 new stories a day for players, 40 for admins */
  private limitFor(admin: boolean) { return admin ? this.adminPerDay : this.perDay; }

  /**
   * One story with these words, or why there isn't one ('off', 'limit', 'busy' — everyone's cap —, or what went
   * wrong). A story already written for the same words comes from the cache and isn't counted.
   */
  async story(userId: string, words: StoryWord[], today: string, opts: { level?: StoryLevel; admin?: boolean } = {}): Promise<{ story: Story | null; why?: string }> {
    const level = opts.level ?? 'N4';
    const cap = this.limitFor(!!opts.admin);
    if (!this.enabled) return { story: null, why: 'off' };
    if (words.length < 2) return { story: null, why: 'few words' };
    const key = `${level}:${words.map((w) => w.id ?? w.kanji).sort().join(',')}`;
    const hit = this.cache.get(key);
    if (hit) return { story: hit };
    const k = `${userId}|${today}`;
    if (!this.used.has(k)) { if (this.used.size > 20_000) this.used.clear(); this.used.set(k, { n: 0, tries: 0 }); }
    const u = this.used.get(k)!;
    if (u.n >= cap || u.tries >= Math.max(20, cap * 3)) return { story: null, why: 'limit' };
    // a cap for everyone together keeps a free API plan within its daily quota — by the server's day (0.9.9.4.4.7:
    // the app's day can be yesterday or tomorrow, and switching between them mustn't reset it)
    const serverDay = new Date().toISOString().slice(0, 10);
    if (this.all.day !== serverDay) this.all = { day: serverDay, n: 0 };
    if (this.all.n >= this.allPerDay) return { story: null, why: 'busy' };
    if (this.busy.has(userId)) return { story: null, why: 'wait' };
    this.busy.add(userId);
    try { return await this.write(u, key, words, level); } finally { this.busy.delete(userId); }
  }

  private async write(u: { n: number; tries: number }, key: string, words: StoryWord[], level: StoryLevel): Promise<{ story: Story | null; why?: string }> {
    let why = '';
    const start = Date.now();
    // a second try only when the first was quick (the app waits about 90 s in all)
    for (let attempt = 0; attempt < 2 && (attempt === 0 || Date.now() - start < 30_000); attempt++) {
      try {
        u.tries++;
        const s = await this.ask(words, level);
        const st = normalizeStory(s, words);
        if (typeof st !== 'string') {
          // only a story you actually get counts
          this.all.n++;
          u.n++;
          if (this.cache.size > 500) this.cache.delete(this.cache.keys().next().value!);
          this.cache.set(key, st);
          return { story: st };
        }
        why = st;
        console.warn('story rejected:', st);
      } catch (e) {
        why = (e as Error).name === 'AbortError' ? 'timeout' : (e as Error).message;
        console.warn('story failed:', why);
        if (/ 4\d\d:/.test(why) && !/ 429:/.test(why)) break; // a bad key / model: trying again won't help
      }
    }
    return { story: null, why: why.slice(0, 300) };
  }

  private async ask(words: readonly StoryWord[], level: StoryLevel): Promise<Story | null> {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 55_000);
    try {
      const text = await complete(this.provider!, prompt(words, level), ctl.signal);
      const json = text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1);
      return JSON.parse(json) as Story;
    } finally { clearTimeout(t); }
  }
}
