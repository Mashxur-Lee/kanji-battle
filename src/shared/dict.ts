// The dictionary's search (0.9.9.7.1: shared — it runs in the app itself, offline, over public/dict.json).
// Type a word in kanji, kana, romaji, English or Russian; matches come best first, Takoboto-style: the word
// itself → words starting with it → words containing it → words sharing its kanji / sounding nearly the same.
import { answerVariants, katakanaToHiragana, toRomaji } from './kana';
import { deinflect } from './deinflect';
import type { Level } from './protocol';
import type { VocabEntry } from './protocol';

/** [parts of speech, English meanings, field / usage tags, a note] */
export type DictSense = [string[], string, string[], string];
export interface DictRaw { k: string[]; r: string[]; s: DictSense[]; ru?: string[]; c?: 1; x?: 1 }
export interface DictData { tags: Record<string, string>; words: DictRaw[] }
export interface DictEntry {
  /** index in the dictionary (stable for one build) */
  i: number;
  kanji: string[]; kana: string[]; romaji: string;
  senses: DictSense[]; ru: string[]; common: boolean;
  /** one of the game's words: its id and level */
  vocabId?: string; level?: Level;
  /** 0.9.9.7.2: an expression / phrase */
  phrase?: boolean;
  /** found as a form of this word: "negative", "polite past" … (you typed 呼ばない, this is 呼ぶ) */
  form?: string;
  /** found as a near miss: the positions in its first reading that differ from what you typed (shown in red) */
  typo?: number[];
}

const HAN = /\p{Script=Han}/u;
/** parts of speech that have forms (verbs, i-adjectives, する nouns) */
const VERBISH = /^(v[15ksz]|vs|adj-i)/;
const JA = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}ー々]/u;
const CYR = /[а-яё]/i;
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const stripNotes = (g: string) => g.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s*\{[^}]*\}\s*/g, ' ').trim();
/** long vowels folded, so ちょうど ≈ ちょど, せんせい ≈ せんせえ (near readings) */
const fold = (s: string) => s.replace(/[うおー]/g, '').replace(/(?<=[えけげせぜてでねへべぺめれ])い/g, '');

/**
 * The positions in `r` that differ from `q` when they are at most `max` sounds apart (a sound changed, added or
 * dropped), else null. Used to show the near miss in red (koshujin → [ご]しゅじん).
 */
export function nearMiss(q: string, r: string, max: number): number[] | null {
  if (q === r) return null;
  const n = q.length, m = r.length;
  const d: number[][] = Array.from({ length: n + 1 }, (_, i) => Array.from({ length: m + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)));
  for (let i = 1; i <= n; i++) {
    let best = Infinity;
    for (let j = 1; j <= m; j++) {
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (q[i - 1] === r[j - 1] ? 0 : 1));
      best = Math.min(best, d[i][j]);
    }
    if (best > max) return null;
  }
  if (d[n][m] > max) return null;
  // walk back: the sounds of r that were changed or added
  const marks: number[] = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && d[i][j] === d[i - 1][j - 1] + (q[i - 1] === r[j - 1] ? 0 : 1)) { if (q[i - 1] !== r[j - 1]) marks.push(j - 1); i--; j--; }
    else if (j > 0 && d[i][j] === d[i][j - 1] + 1) { marks.push(j - 1); j--; }
    else i--;
  }
  return marks.reverse(); // (empty: a sound was only dropped)
}

export class Dictionary {
  readonly words: DictRaw[];
  readonly tags: Record<string, string>;
  private ours = new Map<string, { id: string; level: Level }>();
  private kanas: string[][]; // readings in hiragana, per word

  constructor(data: DictData, vocab: readonly VocabEntry[]) {
    this.words = data.words; this.tags = data.tags;
    for (const v of vocab) {
      if (v.level === 'KANA' || v.level === 'KATA') continue;
      this.ours.set(`${v.kanji}|${v.reading}`, { id: v.id, level: v.level });
      if (!HAN.test(v.kanji)) this.ours.set(`kana:${katakanaToHiragana(v.kanji)}`, { id: v.id, level: v.level }); // ドキドキ, きらきら
    }
    this.kanas = this.words.map((w) => w.r.map(katakanaToHiragana));
  }

  private mineOf(w: DictRaw) {
    return w.k.flatMap((k) => w.r.map((r) => this.ours.get(`${k}|${r}`))).find(Boolean)
      ?? (w.k.length ? undefined : w.r.map((r) => this.ours.get(`kana:${katakanaToHiragana(r)}`)).find(Boolean));
  }
  entry(i: number): DictEntry {
    const w = this.words[i];
    const mine = this.mineOf(w);
    return { i, kanji: w.k, kana: w.r, romaji: toRomaji(w.r[0] ?? ''), senses: w.s, ru: w.ru ?? [], common: !!w.c, ...(w.x ? { phrase: true } : {}), ...(mine ? { vocabId: mine.id, level: mine.level } : {}) };
  }
  get(i: number): DictEntry | null { return Number.isInteger(i) && i >= 0 && i < this.words.length ? this.entry(i) : null; }

  search(raw: unknown, limit = 60): DictEntry[] {
    const q = String(raw ?? '').normalize('NFKC').trim().toLowerCase().slice(0, 40);
    if (!q) return [];
    const ja = JA.test(q), ru = !ja && CYR.test(q);
    const qKana = ja ? katakanaToHiragana(q) : '';
    const kanaQs = ja ? [qKana] : ru ? [] : answerVariants(q).filter((x) => !/[a-z]/.test(x));
    const qChars = ja ? [...new Set([...q].filter((c) => HAN.test(c)))] : [];
    const qFold = kanaQs.map(fold);
    const word = ru ? new RegExp(`(^|[^а-яё])${esc(q)}`, 'i') : ja ? null : new RegExp(`(^|[^a-z])${esc(q)}($|[^a-z])`);
    // 0.9.9.7.2: the dictionary forms of what you typed (呼ばない → 呼ぶ, yobimashita → よぶ)
    const bases = new Map<string, string>();
    if (!ru) for (const x of ja ? [q, qKana] : kanaQs) for (const d of deinflect(x)) if (!bases.has(d.word)) bases.set(d.word, d.form);
    // near misses (koshujin → ごしゅじん): kana of 3+ sounds, one sound off (two for long words)
    const typoQs = ru ? [] : (ja ? [qKana] : kanaQs).filter((x) => x.length >= 3 && !HAN.test(x));
    const forms = new Map<number, string>(), typos = new Map<number, number[]>();
    let sure = 0; // good matches (near misses count only when there are few)
    const near: Array<[number, number]> = [];
    const scored: Array<[number, number]> = [];
    for (let i = 0; i < this.words.length; i++) {
      const w = this.words[i], kanas = this.kanas[i];
      let s = 0;
      if (ja) {
        if (w.k.includes(q) || kanas.includes(qKana)) s = 100;
        else if (w.k.some((k) => k.startsWith(q)) || kanas.some((r) => r.startsWith(qKana))) s = 60;
        else if (w.k.some((k) => k.includes(q)) || (q.length > 1 && kanas.some((r) => r.includes(qKana)))) s = 40;
        // the words that look like it: they share its kanji (信用 → 信頼, 信号, 利用 …)
        else if (qChars.length && w.k.some((k) => qChars.some((c) => k.includes(c)))) s = 14 + 6 * qChars.filter((c) => w.k[0]?.includes(c)).length;
        // … or sound nearly the same (a long vowel more or less)
        else if (qKana.length > 1 && kanas.some((r) => fold(r) === qFold[0])) s = 30;
      } else if (ru) {
        for (let n = 0; n < (w.ru?.length ?? 0); n++) {
          const glosses = w.ru![n].toLowerCase().split(/[;,]\s*|\s*\d+\)\s*/).map(stripNotes).filter(Boolean); // ("1) вода; 2) …")
          if (glosses.includes(q)) s = Math.max(s, n === 0 ? 96 : 88);
          else if (glosses.some((g) => g.startsWith(q))) s = Math.max(s, n === 0 ? 70 : 60);
          else if (word!.test(w.ru![n])) s = Math.max(s, 40);
        }
      } else {
        if (kanaQs.some((x) => kanas.includes(x))) s = 100;
        else if (q.length > 2 && kanaQs.some((x) => kanas.some((r) => r.startsWith(x)))) s = 45;
        else if (q.length > 3 && qFold.some((x) => kanas.some((r) => fold(r) === x))) s = 32;
        const gl = (w.s[0]?.[1].toLowerCase() ?? '').split('; ').map(stripNotes);
        if (gl[0] === q || gl[0] === `to ${q}`) s = Math.max(s, 98);
        else if (gl.some((g) => g === q || g === `to ${q}`)) s = Math.max(s, 90);
        else if (word!.test(w.s[0]?.[1].toLowerCase() ?? '')) s = Math.max(s, 70);
        else if (w.s.slice(1).some((x) => word!.test(x[1].toLowerCase()))) s = Math.max(s, 40);
      }
      if (s < 90 && bases.size && w.s[0]?.[0].some((p) => VERBISH.test(p))) {
        const hit = [...w.k, ...kanas].find((x) => bases.has(x));
        if (hit) { s = 92; forms.set(i, bases.get(hit)!); }
      }
      if (!s && typoQs.length) {
        for (const tq of typoQs) {
          const r = kanas[0];
          if (!r || Math.abs(r.length - tq.length) > 1) continue;
          const marks = nearMiss(tq, r, tq.length >= 6 ? 2 : 1);
          if (marks) { near.push([22 - Math.max(1, marks.length) * 4 + (r.length === tq.length ? 3 : 0) + (w.c ? 12 : 0) + (this.mineOf(w) ? 10 : 0), i]); typos.set(i, marks); break; }
        }
      }
      if (!s) continue;
      if (s >= 40) sure++;
      if (w.c) s += 12;
      if (this.mineOf(w)) s += 10;
      s -= Math.min(10, (w.k[0] ?? w.r[0] ?? '').length);
      scored.push([s, i]);
    }
    if (sure < 3) scored.push(...near); // near misses only when there is little else (koshujin → ご主人)
    scored.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    return scored.slice(0, limit).map(([, i]) => ({ ...this.entry(i), ...(forms.has(i) ? { form: forms.get(i) } : {}), ...(typos.has(i) ? { typo: typos.get(i) } : {}) }));
  }

  /** 0.9.9.7.2: phrases / expressions with this word in them (呼ぶ → 名前を呼ぶ …) */
  phrasesWith(e: DictEntry, limit = 10): DictEntry[] {
    const keys = (e.kanji[0] ? [e.kanji[0]] : [e.kana[0]]).filter((x): x is string => !!x); // the written word (a reading alone matches too much)
    const stem = (k: string) => (k.length > 2 && /[うくぐすつぬぶむるい]$/.test(k) ? k.slice(0, -1) : k); // 呼ぶ → 呼 (呼ばれる, 呼び出す)
    const out: Array<[number, number]> = [];
    for (let i = 0; i < this.words.length; i++) {
      const w = this.words[i];
      if (!w.x || i === e.i) continue;
      const text = e.kanji[0] ? w.k : [...w.k, ...w.r];
      if (!keys.some((k) => text.some((t) => t !== k && t.includes(stem(k))))) continue;
      out.push([(w.c ? 10 : 0) - (w.k[0] ?? w.r[0] ?? '').length, i]);
    }
    out.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    return out.slice(0, limit).map(([, i]) => this.entry(i));
  }

  /** words written with this kanji (common and the game's own first) — "Words with 信" */
  withKanji(ch: string, limit = 12): DictEntry[] {
    if (!HAN.test(ch)) return [];
    const out: Array<[number, number]> = [];
    for (let i = 0; i < this.words.length; i++) {
      const w = this.words[i];
      if (!w.k.some((k) => k.includes(ch))) continue;
      out.push([(w.c ? 10 : 0) + (this.mineOf(w) ? 8 : 0) - (w.k[0]?.length ?? 9), i]);
    }
    out.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    return out.slice(0, limit).map(([, i]) => this.entry(i));
  }
}
