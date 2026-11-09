// 0.9.9.9.5: the Kana section — hiragana and katakana learned on their own (they left the "All spells" deck).
// The chart (basic 46, voiced 25, combinations 33 of each script), the look-alikes that make good wrong answers,
// what a player's progress looks like, and the practice itself (pure logic: the screen in client/kanaui.ts drives it).

export type KanaScript = 'hira' | 'kata';
export type KanaSet = 'basic' | 'voiced' | 'combo';
export const KANA_SCRIPTS: readonly KanaScript[] = ['hira', 'kata'];
export const KANA_SETS: readonly KanaSet[] = ['basic', 'voiced', 'combo'];

export interface KanaCell { ch: string; romaji: string; row: string; set: KanaSet; script: KanaScript }
export interface KanaRow { row: string; set: KanaSet; cells: Array<KanaCell | null> }

// hiragana rows: [row name, kana with romaji, '' = an empty slot in the chart]
const BASIC: Array<[string, Array<[string, string] | null>]> = [
  ['a', [['あ', 'a'], ['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o']]],
  ['ka', [['か', 'ka'], ['き', 'ki'], ['く', 'ku'], ['け', 'ke'], ['こ', 'ko']]],
  ['sa', [['さ', 'sa'], ['し', 'shi'], ['す', 'su'], ['せ', 'se'], ['そ', 'so']]],
  ['ta', [['た', 'ta'], ['ち', 'chi'], ['つ', 'tsu'], ['て', 'te'], ['と', 'to']]],
  ['na', [['な', 'na'], ['に', 'ni'], ['ぬ', 'nu'], ['ね', 'ne'], ['の', 'no']]],
  ['ha', [['は', 'ha'], ['ひ', 'hi'], ['ふ', 'fu'], ['へ', 'he'], ['ほ', 'ho']]],
  ['ma', [['ま', 'ma'], ['み', 'mi'], ['む', 'mu'], ['め', 'me'], ['も', 'mo']]],
  ['ya', [['や', 'ya'], null, ['ゆ', 'yu'], null, ['よ', 'yo']]],
  ['ra', [['ら', 'ra'], ['り', 'ri'], ['る', 'ru'], ['れ', 're'], ['ろ', 'ro']]],
  ['wa', [['わ', 'wa'], null, null, null, ['を', 'wo']]],
  ['n', [['ん', 'n'], null, null, null, null]],
];
const VOICED: Array<[string, Array<[string, string]>]> = [
  ['ga', [['が', 'ga'], ['ぎ', 'gi'], ['ぐ', 'gu'], ['げ', 'ge'], ['ご', 'go']]],
  ['za', [['ざ', 'za'], ['じ', 'ji'], ['ず', 'zu'], ['ぜ', 'ze'], ['ぞ', 'zo']]],
  ['da', [['だ', 'da'], ['ぢ', 'ji'], ['づ', 'zu'], ['で', 'de'], ['ど', 'do']]],
  ['ba', [['ば', 'ba'], ['び', 'bi'], ['ぶ', 'bu'], ['べ', 'be'], ['ぼ', 'bo']]],
  ['pa', [['ぱ', 'pa'], ['ぴ', 'pi'], ['ぷ', 'pu'], ['ぺ', 'pe'], ['ぽ', 'po']]],
];
const COMBO_ROWS: Array<[string, string, string]> = [
  ['kya', 'き', 'ky'], ['sha', 'し', 'sh'], ['cha', 'ち', 'ch'], ['nya', 'に', 'ny'], ['hya', 'ひ', 'hy'], ['mya', 'み', 'my'],
  ['rya', 'り', 'ry'], ['gya', 'ぎ', 'gy'], ['ja', 'じ', 'j'], ['bya', 'び', 'by'], ['pya', 'ぴ', 'py'],
];

/** hiragana → katakana (the same letters, 0x60 further on); ー etc. stay */
export const toKatakana = (s: string) => s.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));

function build(script: KanaScript): KanaRow[] {
  const conv = (s: string) => (script === 'kata' ? toKatakana(s) : s);
  const cell = (ch: string, romaji: string, row: string, set: KanaSet): KanaCell => ({ ch: conv(ch), romaji, row, set, script });
  return [
    ...BASIC.map(([row, cells]) => ({ row, set: 'basic' as const, cells: cells.map((c) => (c ? cell(c[0], c[1], row, 'basic') : null)) })),
    ...VOICED.map(([row, cells]) => ({ row, set: 'voiced' as const, cells: cells.map((c) => cell(c[0], c[1], row, 'voiced')) })),
    ...COMBO_ROWS.map(([row, base, r]) => ({
      row, set: 'combo' as const,
      cells: [['ゃ', 'a'], ['ゅ', 'u'], ['ょ', 'o']].map(([small, v]) => cell(base + small, r + v, row, 'combo')), // kya, sha, cha, ja …
    })),
  ];
}

export const KANA_CHART: Record<KanaScript, KanaRow[]> = { hira: build('hira'), kata: build('kata') };
/** every kana of a script (and set), in chart order */
export const kanaCells = (script: KanaScript, set?: KanaSet) => KANA_CHART[script].filter((r) => !set || r.set === set).flatMap((r) => r.cells.filter((c): c is KanaCell => !!c));
export const KANA_BY_CHAR = new Map<string, KanaCell>(KANA_SCRIPTS.flatMap((s) => kanaCells(s)).map((c) => [c.ch, c]));
export const isKanaChar = (ch: unknown): ch is string => typeof ch === 'string' && KANA_BY_CHAR.has(ch);

/**
 * Kana that are easy to mix up — a wrong answer from the same group is a real test (さ/ち/き, ぬ/め/ね, シ/ツ/ソ/ン …).
 * Groups are per script; voiced and small-ya forms take their base kana's group.
 */
const LOOKALIKES: string[][] = [
  ['さ', 'ち', 'き', 'た'], ['ぬ', 'め', 'ね', 'れ', 'わ'], ['は', 'ほ', 'け', 'よ'], ['る', 'ろ', 'そ'], ['い', 'り', 'こ', 'に'],
  ['あ', 'お', 'め', 'の'], ['ま', 'も', 'す'], ['う', 'つ', 'ら', 'ろ'], ['く', 'へ', 'し', 'つ'], ['ふ', 'ぶ', 'う'], ['ひ', 'て', 'へ'],
  ['シ', 'ツ', 'ン', 'ソ', 'ノ'], ['ク', 'ケ', 'タ', 'ワ', 'ウ', 'フ'], ['ス', 'ヌ', 'マ', 'メ', 'ナ'], ['コ', 'ユ', 'ロ', 'ヨ', 'エ'],
  ['チ', 'テ', 'ナ', 'モ'], ['ハ', 'ヘ', 'ル'], ['キ', 'サ', 'セ', 'ヤ'], ['ア', 'マ', 'ム', 'ヲ'], ['オ', 'ホ', 'ネ'], ['ニ', 'ミ', 'ヒ', 'ト'],
];
const GROUP = new Map<string, string[]>();
for (const g of LOOKALIKES) for (const ch of g) GROUP.set(ch, [...new Set([...(GROUP.get(ch) ?? []), ...g])].filter((x) => x !== ch));
/**
 * The look-alikes of a kana, in its own form: for が the voiced forms of か's look-alikes, for きゃ the
 * combinations of き's look-alikes (ちゃ) — never a plain kana among combinations, which would give it away.
 */
export function lookalikes(ch: string): string[] {
  if (GROUP.has(ch)) return GROUP.get(ch)!;
  const first = ch[0], small = ch.slice(1);
  const parts = first.normalize('NFD'); // が → か + ゛
  const base = parts[0], mark = parts.slice(1);
  return (GROUP.get(base) ?? []).map((b) => (b + mark).normalize('NFC') + small).filter((x) => x !== ch && KANA_BY_CHAR.has(x));
}

// ── a player's progress ─────────────────────────────────────────────────────
/** One kana: `s` stars (0–10, a right answer +1, a wrong one −1), `m` mastered (reached the stars you aimed for, once). */
export interface KanaMark { s: number; m?: boolean }
export type KanaProgress = Record<string, KanaMark>;
export const KANA_STAR_MAX = 10;
export const STAR_TARGETS = [1, 3, 5] as const;
export type StarTarget = (typeof STAR_TARGETS)[number];

/** Clean progress from the app (unknown kana dropped, numbers clamped). */
export function cleanKana(raw: unknown): KanaProgress {
  const out: KanaProgress = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const [ch, v] of Object.entries(raw as Record<string, unknown>)) {
    if (!isKanaChar(ch) || !v || typeof v !== 'object') continue;
    const s = Math.max(0, Math.min(KANA_STAR_MAX, Math.round(Number((v as KanaMark).s) || 0)));
    out[ch] = (v as KanaMark).m === true ? { s, m: true } : { s };
  }
  return out;
}
export const masteredCount = (p: KanaProgress | undefined, cells: KanaCell[]) => cells.filter((c) => p?.[c.ch]?.m).length;

// ── practice ────────────────────────────────────────────────────────────────
export type PracticeMode = 'read' | 'pick' | 'mix';
export interface KanaQuestion {
  cell: KanaCell;
  /** read: the kana is shown, the answers are romaji · pick: the romaji is shown (and spoken), the answers are kana */
  kind: 'read' | 'pick';
  /** a new kana: shown with its romaji and one answer (to meet it first) */
  intro: boolean;
  options: string[];
  answer: string;
}

/**
 * One practice run over some kana. New kana come in a few at a time (each met once with its romaji), then are
 * asked among the others in play until each has `target` stars in this run. Wrong answers come from look-alikes
 * and the same row, so guessing doesn't work. Already mastered kana only need one right answer to pass.
 */
export class KanaPractice {
  private stars = new Map<string, number>();
  private met = new Set<string>();
  private queue: KanaCell[];
  private active: KanaCell[] = [];
  private last = '';
  private readonly window: number;
  readonly total: number;
  /** stars changed in this run, to save */
  readonly changes: KanaProgress = {};

  constructor(cells: KanaCell[], readonly target: StarTarget, readonly mode: PracticeMode, private readonly progress: KanaProgress, private readonly rnd: () => number = Math.random, shuffle = false) {
    this.total = cells.length;
    // mastered kana: one right answer passes; the rest start from their saved stars
    for (const c of cells) {
      const p = progress[c.ch];
      this.stars.set(c.ch, p?.m ? target - 1 : Math.min(target - 1, p?.s ?? 0));
      if (p && (p.m || p.s > 0)) this.met.add(c.ch);
    }
    this.queue = shuffle ? this.shuffled(cells) : [...cells];
    this.window = cells.length <= 6 ? cells.length : 4;
  }

  private shuffled<T>(xs: T[]): T[] { const a = [...xs]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(this.rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  private done(c: KanaCell) { return (this.stars.get(c.ch) ?? 0) >= this.target; }
  starsOf(ch: string) { return this.stars.get(ch) ?? 0; }
  /** how many have reached the target in this run */
  get passed() { let n = 0; for (const v of this.stars.values()) if (v >= this.target) n++; return n; }
  get finished() { return this.passed >= this.total; }

  next(): KanaQuestion | null {
    this.active = this.active.filter((c) => !this.done(c));
    while (this.active.length < this.window && this.queue.length) this.active.push(this.queue.shift()!);
    if (!this.active.length) return null;
    // a kana not met yet: introduce it first
    const fresh = this.active.find((c) => !this.met.has(c.ch));
    if (fresh) return this.ask(fresh, true);
    // otherwise the weakest ones more often, never the same twice in a row (when there's a choice)
    const pool = this.active.length > 1 ? this.active.filter((c) => c.ch !== this.last) : this.active;
    const weights = pool.map((c) => 1 + (this.target - (this.stars.get(c.ch) ?? 0)) * 2);
    let r = this.rnd() * weights.reduce((a, b) => a + b, 0);
    let pick = pool[pool.length - 1];
    for (let i = 0; i < pool.length; i++) { r -= weights[i]; if (r <= 0) { pick = pool[i]; break; } }
    return this.ask(pick, false);
  }

  private ask(cell: KanaCell, intro: boolean): KanaQuestion {
    this.last = cell.ch;
    const kind: 'read' | 'pick' = this.mode === 'mix' ? (this.rnd() < 0.5 ? 'read' : 'pick') : this.mode;
    const answer = kind === 'read' ? cell.romaji : cell.ch;
    if (intro) return { cell, kind, intro, options: [answer], answer };
    return { cell, kind, intro, options: this.shuffled([answer, ...this.distractors(cell, kind)]), answer };
  }

  /** three wrong answers: look-alikes first, then the same row and set, then any kana of the script */
  distractors(cell: KanaCell, kind: 'read' | 'pick'): string[] {
    const all = kanaCells(cell.script);
    const label = (c: KanaCell) => (kind === 'read' ? c.romaji : c.ch);
    const want = label(cell);
    const out: string[] = [];
    const add = (c: KanaCell | undefined) => { if (c && label(c) !== want && !out.includes(label(c)) && out.length < 3) out.push(label(c)); };
    for (const ch of this.shuffled(lookalikes(cell.ch))) add(KANA_BY_CHAR.get(ch));
    // the same row of the same set (きゃ: きゅ きょ), then the same set starting with the same sound
    for (const c of this.shuffled(all.filter((c) => c.set === cell.set && (c.row === cell.row || c.romaji[0] === cell.romaji[0])))) add(c);
    for (const c of this.shuffled(all.filter((c) => c.set === cell.set))) add(c);
    for (const c of this.shuffled(all)) add(c);
    return out;
  }

  /** The answer to a question. Returns whether it was right; the stars move (an intro just marks it as met). */
  answer(q: KanaQuestion, choice: string): boolean {
    if (q.intro) { this.met.add(q.cell.ch); return true; }
    const right = choice === q.answer;
    const ch = q.cell.ch;
    const before = this.stars.get(ch) ?? 0;
    const now = right ? Math.min(this.target, before + 1) : Math.max(0, before - 1);
    this.stars.set(ch, now);
    // the saved progress: a right answer adds a star (up to 10) and reaching the target masters it
    const saved = { ...(this.changes[ch] ?? this.progress[ch] ?? { s: 0 }) };
    saved.s = Math.max(0, Math.min(KANA_STAR_MAX, saved.s + (right ? 1 : -1)));
    if (now >= this.target) saved.m = true;
    this.changes[ch] = saved.m ? { s: saved.s, m: true } : { s: saved.s };
    return right;
  }
}
