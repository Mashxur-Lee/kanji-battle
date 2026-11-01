// The dictionary's search (0.9.9.7.1: shared — it runs in the app itself, offline, over public/dict.json).
// Type a word in kanji, kana, romaji, English or Russian; matches come best first, Takoboto-style: the word
// itself → words starting with it → words containing it → words sharing its kanji / sounding nearly the same.
import { answerVariants, katakanaToHiragana, toRomaji } from './kana';
import type { Level } from './protocol';
import type { VocabEntry } from './protocol';

/** [parts of speech, English meanings, field / usage tags, a note] */
export type DictSense = [string[], string, string[], string];
export interface DictRaw { k: string[]; r: string[]; s: DictSense[]; ru?: string[]; c?: 1 }
export interface DictData { tags: Record<string, string>; words: DictRaw[] }
export interface DictEntry {
  /** index in the dictionary (stable for one build) */
  i: number;
  kanji: string[]; kana: string[]; romaji: string;
  senses: DictSense[]; ru: string[]; common: boolean;
  /** one of the game's words: its id and level */
  vocabId?: string; level?: Level;
}

const HAN = /\p{Script=Han}/u;
const JA = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}ー々]/u;
const CYR = /[а-яё]/i;
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const stripNotes = (g: string) => g.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s*\{[^}]*\}\s*/g, ' ').trim();
/** long vowels folded, so ちょうど ≈ ちょど, せんせい ≈ せんせえ (near readings) */
const fold = (s: string) => s.replace(/[うおー]/g, '').replace(/(?<=[えけげせぜてでねへべぺめれ])い/g, '');

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
    return { i, kanji: w.k, kana: w.r, romaji: toRomaji(w.r[0] ?? ''), senses: w.s, ru: w.ru ?? [], common: !!w.c, ...(mine ? { vocabId: mine.id, level: mine.level } : {}) };
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
      if (!s) continue;
      if (w.c) s += 12;
      if (this.mineOf(w)) s += 10;
      s -= Math.min(10, (w.k[0] ?? w.r[0] ?? '').length);
      scored.push([s, i]);
    }
    scored.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    return scored.slice(0, limit).map(([, i]) => this.entry(i));
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
