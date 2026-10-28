// Reading passage stories (0.9.9.4.4.1): a small AI (Gemini, Claude or an OpenAI-compatible model) writes ONE short story
// that uses all of the player's words — each in its own sentence, in a natural context — with furigana over
// every kanji and English + Russian translations. Every answer is checked before it is used (the words are
// there and marked, every kanji has a reading, the target's reading fits the word); anything off and the app
// falls back to the words' example sentences. Without an API key the feature is simply off.

import { VOCAB_BY_ID } from '../vocab';

export interface StoryWord { id?: string; kanji: string; reading: string; meaning: string }
export interface StoryLine { word: number; ja: string; en: string; ru: string }
export interface Story { title: { ja: string; en: string; ru: string }; lines: StoryLine[] }

const HAN = /[\p{Script=Han}々]/u;
const RUBY = /\[([^\]|]+)\|([^\]]+)\]/g;
const kata2hira = (s: string) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));

/** Is this generated story usable for these words? Returns the reason when it isn't. */
export function checkStory(s: unknown, words: readonly StoryWord[]): string | null {
  const st = s as Story;
  if (!st || typeof st !== 'object' || !Array.isArray(st.lines)) return 'no lines';
  if (!st.title || typeof st.title.ja !== 'string' || HAN.test(st.title.ja.replace(RUBY, ''))) return 'title';
  if (st.lines.length !== words.length) return 'line count';
  const seen = new Set<number>();
  for (const l of st.lines) {
    if (!l || typeof l.ja !== 'string' || typeof l.en !== 'string' || typeof l.ru !== 'string' || !l.en.trim() || !l.ru.trim()) return 'fields';
    if (!Number.isInteger(l.word) || l.word < 0 || l.word >= words.length || seen.has(l.word)) return 'word index';
    seen.add(l.word);
    if (l.ja.length > 120) return 'too long';
    const marks = l.ja.match(/【[^】]+】/g) ?? [];
    if (marks.length !== 1) return `marks in ${l.ja}`;
    const bare = l.ja.replace(RUBY, '');
    if (HAN.test(bare)) return `kanji without furigana: ${l.ja}`;
    for (const m of l.ja.matchAll(RUBY)) if (!HAN.test(m[1]) || !/^[぀-ゟ゠-ヿー]+$/.test(m[2])) return `bad ruby ${m[0]}`;
    // the target: written like the word (its kanji, then any okurigana / conjugation) and read like it
    const w = words[l.word];
    const inner = marks[0].slice(1, -1);
    const written = inner.replace(RUBY, '$1');
    const stem = [...w.kanji].filter((c, i, a) => HAN.test(c) || a.slice(0, i).every((x) => !HAN.test(x))).join('').replace(/[぀-ゟ]+$/, '');
    if (!written.startsWith(stem)) return `target ${written} ≠ ${w.kanji}`;
    // the furigana over the word's kanji must start the word's reading (祈 いの → いのる; a noun: all of it)
    const reading = kata2hira(inner.replace(RUBY, '$2'));
    const lead = kata2hira(inner.split('[')[0]); // kana before the kanji (お金持ち: お)
    const want = kata2hira(w.reading).replace(new RegExp(`^${lead}`), '');
    const kanjiPart = kata2hira([...inner.matchAll(RUBY)].map((m) => m[2]).join(''));
    if (kanjiPart && !want.startsWith(kanjiPart) && !(kanjiPart.length > 2 && want.startsWith(kanjiPart.slice(0, -1)))) return `reading ${reading} ≠ ${want}`;
    if (!kanjiPart && !reading.startsWith(want.slice(0, Math.max(1, want.length - 2)))) return `reading ${reading} ≠ ${want}`;
  }
  return null;
}

function prompt(words: readonly StoryWord[]) {
  const list = words.map((w, i) => `${i}. ${w.kanji} (${w.reading}) — ${w.meaning}`).join('\n');
  return `Write a short, simple, coherent story in Japanese for a learner. It must use each of these ${words.length} words exactly once, one word per sentence, in a natural context that shows what the word means (e.g. 寺で【祈る】 for "to pray"). Keep the grammar simple and the sentences short (under 40 characters). One character or a small cast, one setting, a clear little plot from beginning to end — the sentences must follow on from each other.

Words:
${list}

Format rules for the "ja" text (very important):
- Write every kanji with its furigana as [漢字|かんじ] — e.g. [今日|きょう]は[寺|てら]で — and NEVER write a kanji outside these brackets.
- Kana (hiragana, katakana) is written as it is, never in brackets.
- Wrap the target word of the sentence, with its okurigana or conjugation, in 【】 — e.g. 【[祈|いの]った】 or 【[静|しず]かな】. Exactly one 【】 per sentence, nothing else in 【】.

Answer with JSON only, no other text:
{"title":{"ja":"…","en":"…","ru":"…"},"lines":[{"word":<number of the word above>,"ja":"…","en":"English translation","ru":"Russian translation"}]}
The title's "ja" uses the same furigana format and has no 【】. The lines are in story order (any order of the words).`;
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

/** One prompt → the model's text answer. */
async function complete(p: StoryProvider, text: string, signal: AbortSignal): Promise<string> {
  const post = async (url: string, headers: Record<string, string>, body: unknown) => {
    const r = await fetch(url, { method: 'POST', signal, headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body) });
    if (!r.ok) throw new Error(`${p.kind} API ${r.status}: ${(await r.text()).slice(0, 200)}`);
    return r.json() as Promise<any>;
  };
  if (p.kind === 'gemini') {
    const d = await post(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(p.model)}:generateContent`, { 'x-goog-api-key': p.key },
      { contents: [{ role: 'user', parts: [{ text }] }], generationConfig: { responseMimeType: 'application/json', temperature: 0.9, maxOutputTokens: 3000 } });
    return (d.candidates?.[0]?.content?.parts ?? []).map((x: { text?: string }) => x.text ?? '').join('');
  }
  if (p.kind === 'anthropic') {
    const d = await post('https://api.anthropic.com/v1/messages', { 'x-api-key': p.key, 'anthropic-version': '2023-06-01' },
      { model: p.model, max_tokens: 2000, messages: [{ role: 'user', content: text }] });
    return d.content?.find((c: { type: string }) => c.type === 'text')?.text ?? '';
  }
  const d = await post(`${p.baseUrl}/chat/completions`, { authorization: `Bearer ${p.key}` },
    { model: p.model, messages: [{ role: 'user', content: text }], response_format: { type: 'json_object' }, temperature: 0.9 });
  return d.choices?.[0]?.message?.content ?? '';
}

export class StoryService {
  private readonly cache = new Map<string, Story>();
  private readonly used = new Map<string, { day: string; n: number }>();
  private all = { day: '', n: 0 };
  constructor(private readonly provider: StoryProvider | null = providerFromEnv(), private readonly perDay = 40, private readonly allPerDay = Number(process.env.STORY_DAILY_MAX) || 400) {}
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

  async story(userId: string, words: StoryWord[], today: string): Promise<Story | null> {
    if (!this.enabled || words.length < 2) return null;
    const key = words.map((w) => w.id ?? w.kanji).sort().join(',');
    const hit = this.cache.get(key);
    if (hit) return hit;
    const u = this.used.get(userId);
    if (u && u.day === today && u.n >= this.perDay) return null;
    // a cap for everyone together keeps a free API plan within its daily quota
    if (this.all.day !== today) this.all = { day: today, n: 0 };
    if (this.all.n >= this.allPerDay) return null;
    this.all.n++;
    this.used.set(userId, { day: today, n: (u?.day === today ? u.n : 0) + 1 });
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const s = await this.ask(words);
        const why = checkStory(s, words);
        if (!why) {
          if (this.cache.size > 500) this.cache.delete(this.cache.keys().next().value!);
          this.cache.set(key, s!);
          return s;
        }
        console.warn('story rejected:', why);
      } catch (e) { console.warn('story failed:', (e as Error).message); }
    }
    return null;
  }

  private async ask(words: readonly StoryWord[]): Promise<Story | null> {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 25_000);
    try {
      const text = await complete(this.provider!, prompt(words), ctl.signal);
      const json = text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1);
      return JSON.parse(json) as Story;
    } finally { clearTimeout(t); }
  }
}
