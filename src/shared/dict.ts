// The dictionary's search (0.9.9.7.1: shared — it runs in the app itself, offline, over public/dict.json).
// Type a word in kanji, kana, romaji, English or Russian; matches come best first, Takoboto-style: the word
// itself → words starting with it → words containing it → words sharing its kanji / sounding nearly the same.
import { answerVariants, isRomajiInput, katakanaToHiragana, toRomaji } from './kana';
import { deinflect } from './deinflect';
import type { Level } from './protocol';
import type { VocabEntry } from './protocol';

/** [parts of speech, English meanings, field / usage tags, a note] */
export type DictSense = [string[], string, string[], string];
/** (0.9.9.9.9.6: `a` its antonyms, `y` related words — JMdict's links, by spelling) */
export interface DictRaw { k: string[]; r: string[]; s: DictSense[]; ru?: string[]; c?: 1; x?: 1; a?: string[]; y?: string[] }
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
  /** 0.9.9.9.9.6: antonyms and related words (JMdict), by spelling */
  antonyms?: string[]; related?: string[];
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
/**
 * 0.9.9.9: is this word exactly what was typed — one of its meanings word for word (English or Russian, "to " and
 * notes aside), or its spelling or reading? (the dictionary makes such a result glow)
 */
export function exactMatch(w: DictEntry, raw: string, ruMeanings?: readonly string[] | null): boolean {
  const q = raw.trim().toLowerCase();
  if (!q) return false;
  if (w.kanji.includes(raw.trim()) || w.kana.includes(raw.trim())) return true;
  // 0.9.9.9.4: typed in romaji ("sensei"): the reading, the same as typing せんせい
  // (compared in romaji: コーヒー is "koohii"; "kou" and "koo" both count for こう)
  if (isRomajiInput(q)) {
    const nr = (r: string) => r.toLowerCase().replace(/[\s'-]/g, '').replace(/ou/g, 'oo');
    const want = nr(q);
    if (want && w.kana.some((k) => nr(toRomaji(k)) === want)) return true;
  }
  const bare = (g: string) => stripNotes(g.toLowerCase()).replace(/^to /, '').trim();
  const qb = q.replace(/^to /, '');
  const glosses = [...w.senses.flatMap((x) => x[1].split(/;\s*/)), ...(ruMeanings ?? []).flatMap((m) => m.split(/[;,]\s*/))];
  return glosses.some((g) => bare(g) === qb);
}

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
    return { i, kanji: w.k, kana: w.r, romaji: toRomaji(w.r[0] ?? ''), senses: w.s, ru: w.ru ?? [], common: !!w.c, ...(w.x ? { phrase: true } : {}), ...(w.a ? { antonyms: w.a } : {}), ...(w.y ? { related: w.y } : {}), ...(mine ? { vocabId: mine.id, level: mine.level } : {}) };
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
    // 0.9.9.8: half-typed romaji (tabem → たべ…): the kana of what's complete, matched as the start of a reading
    const cut = !ja && !ru ? q.replace(/[^aeiou'\s-]+$/, '') : '';
    const partQs = !cut ? [] : cut !== q ? answerVariants(cut).filter((x) => x && !/[a-z]/.test(x)) : kanaQs;
    /** a meaning that starts with what you typed: the closer to the whole meaning, the better (wat → water, not waterfall) */
    const near1 = (g: string) => Math.max(0, 8 - (g.length - q.length));
    const word = ru ? new RegExp(`(^|[^а-яё])${esc(q)}`, 'i') : ja ? null : new RegExp(`(^|[^a-z])${esc(q)}($|[^a-z])`);
    // 0.9.9.7.2: the dictionary forms of what you typed (呼ばない → 呼ぶ, yobimashita → よぶ)
    const bases = new Map<string, string>();
    if (!ru) for (const x of ja ? [q, qKana] : kanaQs) for (const d of deinflect(x)) if (!bases.has(d.word)) bases.set(d.word, d.form);
    // 0.9.9.8: half-typed forms too (tabemas → たべま… → たべます → 食べる)
    const guess = new Set<string>(); // (a guess: ranked below what you actually typed)
    if (!bases.size) for (const x of partQs.filter((x) => x.length >= 3)) for (const end of ['す', 'した', 'せん', 'ん', 'い', 'た', 'て', 'る', 'ない', 'ます']) for (const d of deinflect(x + end)) if (!bases.has(d.word)) { bases.set(d.word, d.form); guess.add(d.word); }
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
          const pre = glosses.find((g) => g.startsWith(q));
          if (glosses.includes(q)) s = Math.max(s, n === 0 ? 96 : 88);
          else if (pre) s = Math.max(s, (n === 0 ? 70 : 60) + near1(pre));
          else if (word!.test(w.ru![n])) s = Math.max(s, 40);
        }
      } else {
        if (kanaQs.some((x) => kanas.includes(x))) s = 100;
        else if (q.length >= 2 && kanaQs.some((x) => kanas.some((r) => r.startsWith(x)))) {
          // the closer to the whole word, the better (kawai → かわいい before かわいそう)
          const gap = Math.min(...kanaQs.flatMap((x) => kanas.filter((r) => r.startsWith(x)).map((r) => r.length - x.length)));
          s = 45 + Math.max(0, 4 - gap);
        }
        else if (partQs.some((x) => kanas.some((r) => r.startsWith(x) && r.length > x.length))) s = 42;
        else if (q.length > 3 && qFold.some((x) => kanas.some((r) => fold(r) === x))) s = 32;
        const gl = (w.s[0]?.[1].toLowerCase() ?? '').split('; ').map(stripNotes);
        const bare = (g: string) => g.replace(/^to /, '');
        const pre = q.length >= 2 ? gl.find((g) => bare(g).startsWith(q)) : undefined;
        if (gl[0] === q || gl[0] === `to ${q}`) s = Math.max(s, 98);
        else if (gl.some((g) => g === q || g === `to ${q}`)) s = Math.max(s, 90);
        else if (word!.test(w.s[0]?.[1].toLowerCase() ?? '')) s = Math.max(s, 70);
        // 0.9.9.8: while you type (wat → water): a meaning that starts with it
        else if (pre) s = Math.max(s, (pre === gl[0] ? 64 : 54) + near1(bare(pre)));
        else if (w.s.slice(1).some((x) => word!.test(x[1].toLowerCase()))) s = Math.max(s, 40);
        else if (q.length >= 3 && w.s.slice(0, 3).some((x) => x[1].toLowerCase().split('; ').some((g) => bare(stripNotes(g)).startsWith(q)))) s = Math.max(s, 30);
      }
      if (s < 90 && bases.size && w.s[0]?.[0].some((p) => VERBISH.test(p))) {
        const hit = [...w.k, ...kanas].find((x) => bases.has(x));
        if (hit) { s = guess.has(hit) ? Math.max(s, 44) : 92; forms.set(i, bases.get(hit)!); }
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

  // ── 0.9.9.9.9.6: synonyms, antonyms and related words ───────────────────────────────────────────────────────────
  /** a word by its spelling (kanji first, then kana) — JMdict's links name words that way; the common one first */
  private shortK: Map<string, string> | null = null;
  private byK: Map<string, number> | null = null;
  private byR: Map<string, number> | null = null;
  /**
   * 0.9.9.9.9.6 (round 4): a word by its exact spelling (else its reading) — the common entry and the game's own
   * first. Indexed once, so an import of hundreds of words is quick (byText reads the whole dictionary each time).
   */
  lookup(t: string): DictEntry | null {
    if (!this.byK || !this.byR) {
      const k = new Map<string, number>(), r = new Map<string, number>();
      const score = (i: number) => (this.words[i].c ? 5 : 0) + (this.mineOf(this.words[i]) ? 3 : 0);
      for (let i = 0; i < this.words.length; i++) {
        const w = this.words[i];
        for (const [map, list] of [[k, w.k], [r, w.r]] as const) for (const s of list) { const at = map.get(s); if (at === undefined || score(i) > score(at)) map.set(s, i); }
      }
      this.byK = k; this.byR = r;
      // one kanji's shortest reading (in a compound it is mostly the Chinese one: 電 でん, 脳 のう)
      const sh = new Map<string, string>();
      for (const w of this.words) for (const s of w.k) if ([...s].length === 1 && HAN.test(s)) for (const rd of w.r) { const at = sh.get(s); if (!at || rd.length < at.length) sh.set(s, rd); }
      this.shortK = sh;
    }
    const i = this.byK.get(t) ?? this.byR.get(t);
    return i === undefined ? null : this.entry(i);
  }
  /** 0.9.9.9.9.6 (round 4): a kanji's reading inside a compound, for a guess (its shortest) */
  kanjiReading(ch: string): string | null { if (!this.shortK) this.lookup(''); return this.shortK!.get(ch) ?? null; }
  byText(t: string): DictEntry | null {
    let best = -1, bestScore = -1;
    for (let i = 0; i < this.words.length; i++) {
      const w = this.words[i];
      const hit = w.k.includes(t) ? 2 : w.r.includes(t) ? 1 : 0;
      if (!hit) continue;
      const score = hit * 10 + (w.c ? 5 : 0) + (this.mineOf(w) ? 3 : 0);
      if (score > bestScore) { best = i; bestScore = score; }
    }
    return best < 0 ? null : this.entry(best);
  }
  /**
   * Words meaning the same: their first meaning matches one of this word's first meanings word for word (notes
   * aside, "to " kept: 始める "to begin" ~ 開始する "to begin"). Common words and the game's own first.
   */
  synonymsOf(e: DictEntry, limit = 8): DictEntry[] {
    const key = (g: string) => g.split(';').map((x) => stripNotes(x).toLowerCase().trim()).filter((x) => x.length > 1);
    const mine = new Set(key(e.senses[0]?.[1] ?? '').slice(0, 3));
    if (!mine.size) return [];
    const pos0 = (e.senses[0]?.[0] ?? [])[0]?.slice(0, 2);
    const out: Array<[number, number]> = [];
    for (let i = 0; i < this.words.length; i++) {
      if (i === e.i) continue;
      const w = this.words[i];
      const first = key(w.s[0]?.[1] ?? '');
      if (!first.length || !mine.has(first[0])) continue;
      if (w.k[0] && e.kanji[0] && w.k[0] === e.kanji[0]) continue;
      const samePos = pos0 && (w.s[0]?.[0] ?? [])[0]?.slice(0, 2) === pos0 ? 4 : 0;
      out.push([(w.c ? 10 : 0) + (this.mineOf(w) ? 6 : 0) + samePos - (w.x ? 8 : 0), i]);
    }
    out.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    return out.slice(0, limit).map(([, i]) => this.entry(i));
  }
}
/** 0.9.9.9.9.6: common opposites JMdict doesn't link (it has antonyms for only ~550 words) — both ways */
const OPPOSITES: ReadonlyArray<[string, string]> = [
  ['大きい', '小さい'], ['大きな', '小さな'], ['高い', '低い'], ['高い', '安い'], ['長い', '短い'], ['広い', '狭い'], ['多い', '少ない'],
  ['新しい', '古い'], ['早い', '遅い'], ['速い', '遅い'], ['暑い', '寒い'], ['熱い', '冷たい'], ['暖かい', '涼しい'], ['重い', '軽い'],
  ['強い', '弱い'], ['明るい', '暗い'], ['易しい', '難しい'], ['優しい', '厳しい'], ['近い', '遠い'], ['太い', '細い'], ['厚い', '薄い'],
  ['深い', '浅い'], ['良い', '悪い'], ['正しい', '間違い'], ['嬉しい', '悲しい'], ['楽しい', 'つまらない'], ['甘い', '辛い'], ['若い', '年寄り'],
  ['好き', '嫌い'], ['上手', '下手'], ['静か', '賑やか'], ['安全', '危険'], ['簡単', '複雑'], ['便利', '不便'], ['有名', '無名'], ['元気', '病気'],
  ['上', '下'], ['右', '左'], ['前', '後ろ'], ['内', '外'], ['中', '外'], ['東', '西'], ['南', '北'], ['表', '裏'], ['朝', '夜'], ['昼', '夜'],
  ['男', '女'], ['男性', '女性'], ['父', '母'], ['兄', '弟'], ['姉', '妹'], ['夫', '妻'], ['大人', '子供'], ['先生', '生徒'], ['客', '店員'],
  ['入る', '出る'], ['入口', '出口'], ['開ける', '閉める'], ['開く', '閉まる'], ['始める', '終える'], ['始まる', '終わる'], ['行く', '来る'],
  ['売る', '買う'], ['貸す', '借りる'], ['教える', '習う'], ['勝つ', '負ける'], ['押す', '引く'], ['上がる', '下がる'], ['上げる', '下げる'],
  ['増える', '減る'], ['生まれる', '死ぬ'], ['寝る', '起きる'], ['乗る', '降りる'], ['着る', '脱ぐ'], ['覚える', '忘れる'], ['付ける', '消す'],
  ['出発', '到着'], ['成功', '失敗'], ['勝利', '敗北'], ['賛成', '反対'], ['輸入', '輸出'], ['入学', '卒業'], ['過去', '未来'], ['以上', '以下'],
  ['最初', '最後'], ['全部', '一部'], ['天国', '地獄'], ['光', '影'], ['白', '黒'], ['天', '地'], ['山', '海'], ['夏', '冬'], ['春', '秋'],

  // (round 2: the owner found none on most words — many more pairs, everyday words first)
  ['美しい', '醜い'], ['綺麗', '汚い'], ['清潔', '不潔'], ['丸い', '四角い'], ['固い', '柔らかい'], ['硬い', '柔らかい'], ['堅い', '柔らかい'],
  ['乾く', '濡れる'], ['乾いた', '濡れた'], ['明るい', '暗い'], ['騒がしい', '静か'], ['うるさい', '静か'], ['忙しい', '暇'], ['豊か', '貧しい'],
  ['金持ち', '貧乏'], ['安心', '心配'], ['得意', '苦手'], ['得意', '不得意'], ['積極的', '消極的'], ['主観', '客観'], ['主観的', '客観的'],
  ['具体', '抽象'], ['具体的', '抽象的'], ['理論', '実践'], ['原因', '結果'], ['義務', '権利'], ['需要', '供給'], ['収入', '支出'],
  ['黒字', '赤字'], ['利益', '損失'], ['得', '損'], ['長所', '短所'], ['利点', '欠点'], ['肯定', '否定'], ['肯定的', '否定的'],
  ['許可', '禁止'], ['合格', '不合格'], ['正解', '不正解'], ['可能', '不可能'], ['必要', '不要'], ['自然', '人工'], ['天然', '人工'],
  ['都会', '田舎'], ['都市', '農村'], ['国内', '国外'], ['国内', '海外'], ['和食', '洋食'], ['和室', '洋室'], ['和風', '洋風'],
  ['上り', '下り'], ['登る', '下りる'], ['上る', '下る'], ['浮く', '沈む'], ['昇る', '沈む'], ['満ちる', '欠ける'], ['集まる', '散る'],
  ['集める', '配る'], ['拾う', '捨てる'], ['与える', '奪う'], ['送る', '受け取る'], ['渡す', '受け取る'], ['預ける', '引き出す'],
  ['貯める', '使う'], ['増やす', '減らす'], ['伸びる', '縮む'], ['広がる', '狭まる'], ['太る', '痩せる'], ['濃い', '薄い'],
  ['温かい', '冷たい'], ['温める', '冷やす'], ['暖める', '冷やす'], ['燃える', '消える'], ['点ける', '消す'], ['点く', '消える'],
  ['出す', '入れる'], ['出る', '入る'], ['出席', '欠席'], ['入場', '退場'], ['入院', '退院'], ['就職', '退職'], ['結婚', '離婚'],
  ['生', '死'], ['生きる', '死ぬ'], ['誕生', '死亡'], ['健康', '病気'], ['元気', '病気'], ['平和', '戦争'], ['味方', '敵'],
  ['友', '敵'], ['勝ち', '負け'], ['表す', '隠す'], ['現れる', '消える'], ['見える', '隠れる'], ['覚める', '眠る'], ['起こす', '寝かせる'],
  ['笑う', '泣く'], ['喜ぶ', '悲しむ'], ['愛', '憎しみ'], ['愛する', '憎む'], ['好む', '嫌う'], ['褒める', '叱る'], ['許す', '罰する'],
  ['守る', '攻める'], ['攻撃', '防御'], ['加える', '除く'], ['足す', '引く'], ['掛ける', '割る'], ['合う', '違う'], ['同じ', '違う'],
  ['等しい', '異なる'], ['似る', '異なる'], ['賛成する', '反対する'], ['許可する', '禁止する'], ['開始', '終了'], ['開店', '閉店'],
  ['開会', '閉会'], ['始発', '終電'], ['先', '後'], ['以前', '以後'], ['過去', '現在'], ['昨日', '明日'], ['去年', '来年'],
  ['先週', '来週'], ['先月', '来月'], ['朝', '晩'], ['午前', '午後'], ['早朝', '深夜'], ['日の出', '日の入り'], ['夜明け', '日暮れ'],
  ['晴れ', '雨'], ['暑さ', '寒さ'], ['夏休み', '冬休み'], ['陸', '海'], ['陸地', '海'], ['空', '地'], ['天井', '床'], ['頂上', 'ふもと'],
  ['上着', '下着'], ['上司', '部下'], ['先輩', '後輩'], ['年上', '年下'], ['目上', '目下'], ['親', '子'], ['祖父', '祖母'],
  ['息子', '娘'], ['夫婦', '親子'], ['王', '女王'], ['王子', '王女'], ['神', '悪魔'], ['善', '悪'], ['正義', '悪'], ['真実', '嘘'],
  ['本当', '嘘'], ['本物', '偽物'], ['正直', '嘘つき'], ['賢い', '愚か'], ['利口', '馬鹿'], ['頭がいい', '頭が悪い'], ['丁寧', '乱暴'],
  ['親切', '不親切'], ['優しい', '意地悪'], ['勇敢', '臆病'], ['勤勉', '怠惰'], ['真面目', '不真面目'], ['素直', '頑固'],
  ['楽', '苦'], ['楽しむ', '苦しむ'], ['幸せ', '不幸'], ['幸福', '不幸'], ['幸運', '不運'], ['満足', '不満'], ['安定', '不安定'],
  ['安い', '高価'], ['安価', '高価'], ['無料', '有料'], ['新品', '中古'], ['新鮮', '古い'], ['生もの', '加工品'], ['甘口', '辛口'],
  ['満腹', '空腹'], ['満員', '空席'], ['満タン', '空'], ['空く', '混む'], ['空いている', '混んでいる'], ['重要', '些細'], ['大切', 'どうでもいい'],
  ['主', '副'], ['表面', '内部'], ['外側', '内側'], ['外国', '自国'], ['外国人', '日本人'], ['他人', '自分'], ['相手', '自分'],
  ['公', '私'], ['公共', '個人'], ['公立', '私立'], ['国立', '私立'], ['団体', '個人'], ['全体', '部分'], ['多数', '少数'],
  ['最大', '最小'], ['最高', '最低'], ['最上', '最下'], ['最良', '最悪'], ['最善', '最悪'], ['最多', '最少'], ['上等', '下等'],
  ['上品', '下品'], ['上級', '初級'], ['上級', '下級'], ['中級', '初級'], ['先進国', '発展途上国'], ['都心', '郊外'], ['近所', '遠方'],
  ['急ぐ', 'ゆっくり'], ['急', '緩やか'], ['速度', '遅さ'], ['速い', 'のろい'], ['静止', '運動'], ['動く', '止まる'], ['走る', '止まる'],
  ['進む', '戻る'], ['前進', '後退'], ['進歩', '退歩'], ['発展', '衰退'], ['成長', '衰退'], ['上昇', '下降'], ['増加', '減少'],
  ['拡大', '縮小'], ['膨張', '収縮'], ['建設', '破壊'], ['創造', '破壊'], ['作る', '壊す'], ['建てる', '壊す'], ['直す', '壊す'],
  ['結ぶ', '解く'], ['締める', '緩める'], ['付ける', '外す'], ['着ける', '外す'], ['履く', '脱ぐ'], ['被る', '脱ぐ'], ['閉じる', '開く'],
  ['表', '裏'], ['プラス', 'マイナス'], ['オン', 'オフ'], ['イン', 'アウト'], ['スタート', 'ゴール'], ['ハイ', 'ロー'], ['ホット', 'アイス'],
];
const OPP = new Map<string, string[]>();
for (const [a, b] of OPPOSITES) { OPP.set(a, [...(OPP.get(a) ?? []), b]); OPP.set(b, [...(OPP.get(b) ?? []), a]); }
/** a word's opposites: JMdict's, then the common ones above (by spelling) */
export function antonymsOf(e: DictEntry): string[] {
  const out = new Set(e.antonyms ?? []);
  for (const t of [...e.kanji.slice(0, 2), ...e.kana.slice(0, 1)]) for (const o of OPP.get(t) ?? []) out.add(o);
  return [...out].slice(0, 6);
}
