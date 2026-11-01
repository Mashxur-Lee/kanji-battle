// The in-game dictionary (0.9.9.7), Takoboto-style: type a word in kanji, kana, romaji or English and get every
// match — readings, JLPT level, all meanings by part of speech (English and Russian), and whether it's one of the
// game's words. Data: data/dict.json (scripts/build-dict.mjs, from JMdict — every common word plus all of ours).
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { answerVariants, katakanaToHiragana, toRomaji } from '../../shared/kana';
import type { Level } from '../../shared/protocol';
import { VOCAB } from '../vocab';

/** [parts of speech, English meanings, field / usage tags, a note] */
export type DictSense = [string[], string, string[], string];
interface Raw { k: string[]; r: string[]; s: DictSense[]; ru?: string[]; c?: 1 }
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

export class DictService {
  private words: Raw[] = [];
  private tags: Record<string, string> = {};
  private ours = new Map<string, { id: string; level: Level }>();
  private ready = false;

  constructor(private readonly file = path.resolve(__dirname, '../../../data/dict.json')) {}

  private load() {
    if (this.ready) return;
    this.ready = true;
    try {
      const d = JSON.parse(readFileSync(this.file, 'utf8')) as { tags: Record<string, string>; words: Raw[] };
      this.words = d.words; this.tags = d.tags;
    } catch { this.words = []; }
    for (const v of VOCAB) {
      if (v.level === 'KANA' || v.level === 'KATA') continue;
      this.ours.set(`${v.kanji}|${v.reading}`, { id: v.id, level: v.level });
      if (!HAN.test(v.kanji)) this.ours.set(`kana:${katakanaToHiragana(v.kanji)}`, { id: v.id, level: v.level }); // ドキドキ, きらきら
    }
  }
  private mineOf(w: Raw) {
    return w.k.flatMap((k) => w.r.map((r) => this.ours.get(`${k}|${r}`))).find(Boolean)
      ?? (w.k.length ? undefined : w.r.map((r) => this.ours.get(`kana:${katakanaToHiragana(r)}`)).find(Boolean));
  }

  /** what the part-of-speech / usage tags mean ("v5r" → "Godan verb with 'ru' ending") */
  tagNames() { this.load(); return this.tags; }

  private entry(i: number): DictEntry {
    const w = this.words[i];
    const mine = this.mineOf(w);
    return { i, kanji: w.k, kana: w.r, romaji: toRomaji(w.r[0] ?? ''), senses: w.s, ru: w.ru ?? [], common: !!w.c, ...(mine ? { vocabId: mine.id, level: mine.level } : {}) };
  }

  get(i: number): DictEntry | null { this.load(); return Number.isInteger(i) && i >= 0 && i < this.words.length ? this.entry(i) : null; }

  /**
   * Matches, best first: the exact word (as written, its reading, or romaji / English) → words starting with it →
   * words containing it. Within each: common words and the game's own words first, then shorter ones.
   */
  search(raw: unknown, limit = 30): DictEntry[] {
    this.load();
    const q = String(raw ?? '').normalize('NFKC').trim().toLowerCase().slice(0, 40);
    if (!q) return [];
    const scored: Array<[number, number]> = [];
    const ja = JA.test(q);
    const kanaQs = ja ? [katakanaToHiragana(q)] : answerVariants(q).filter((x) => !/[a-z]/.test(x));
    const enRe = ja ? null : new RegExp(`(^|[^a-z])${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^a-z])`);
    for (let i = 0; i < this.words.length; i++) {
      const w = this.words[i];
      let s = 0;
      if (ja) {
        const kanas = w.r.map(katakanaToHiragana);
        if (w.k.includes(q) || kanas.includes(kanaQs[0])) s = 100;
        else if (w.k.some((k) => k.startsWith(q)) || kanas.some((r) => r.startsWith(kanaQs[0]))) s = 60;
        else if (w.k.some((k) => k.includes(q)) || (q.length > 1 && kanas.some((r) => r.includes(kanaQs[0])))) s = 30;
      } else {
        const kanas = w.r.map(katakanaToHiragana);
        if (kanaQs.some((x) => kanas.includes(x))) s = 100;
        else if (q.length > 2 && kanaQs.some((x) => kanas.some((r) => r.startsWith(x)))) s = 45;
        const en = w.s[0]?.[1].toLowerCase() ?? '';
        const gl = en.split('; ').map((g) => g.replace(/\s*\([^)]*\)\s*/g, ' ').trim());
        if (gl[0] === q || gl[0] === `to ${q}`) s = Math.max(s, 98);
        else if (gl.some((g) => g === q || g === `to ${q}`)) s = Math.max(s, 90);
        else if (enRe!.test(en)) s = Math.max(s, 70);
        else if (w.s.slice(1).some((x) => enRe!.test(x[1].toLowerCase()))) s = Math.max(s, 40);
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
    this.load();
    if (!HAN.test(ch)) return [];
    const out: Array<[number, number]> = [];
    for (let i = 0; i < this.words.length; i++) {
      const w = this.words[i];
      if (!w.k.some((k) => k.includes(ch))) continue;
      const mine = w.k.some((k) => w.r.some((r) => this.ours.has(`${k}|${r}`)));
      out.push([(w.c ? 10 : 0) + (mine ? 8 : 0) - (w.k[0]?.length ?? 9), i]);
    }
    out.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    return out.slice(0, limit).map(([, i]) => this.entry(i));
  }
}
