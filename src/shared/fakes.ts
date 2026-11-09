// 0.9.9.9.5: JLPT-style made-up wrong answers. The real test's wrong answers are rarely other words — they are
// near misses: 対戦 (たいせん) → 戦対, 大線, 大戦; its reading → だいせん, たいせい, たいぜん. We build those from
// each kanji's dictionary readings (KANJIDIC on/kun) and parts (KanjiVG): the word is split into its kanji and
// the kana each one reads as, then one or two pieces are swapped for a same-sounding or same-looking kanji, or
// the reading is bent the ways learners slip (voicing, long vowels, っ, ゅ/ょ, another reading of the kanji).

/** A kanji's readings and parts (server: data/kanji/base.json, app: kanji.json). */
export interface KanjiFacts { on: string[]; kun: string[]; parts: string[]; strokes: number }
export type FactsOf = (ch: string) => KanjiFacts | undefined;
/** a word as the quiz knows it */
interface Word { kanji: string; reading: string; meaning?: string }

const HAN = /^[一-鿿㐀-䶿]$/;
const isHan = (c: string) => HAN.test(c);
const SMALL_START = /^[ゃゅょぁぃぅぇぉゎっんー]/;
const hira = (s: string) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));

// ── sound changes ────────────────────────────────────────────────────────────
const VOICE: Record<string, string> = {};
const UNVOICE: Record<string, string> = {};
for (const [a, b] of ['かが', 'きぎ', 'くぐ', 'けげ', 'こご', 'さざ', 'しじ', 'すず', 'せぜ', 'そぞ', 'ただ', 'ちぢ', 'つづ', 'てで', 'とど', 'はば', 'ひび', 'ふぶ', 'へべ', 'ほぼ']) { VOICE[a] = b; UNVOICE[b] = a; }
for (const [a, b] of ['はぱ', 'ひぴ', 'ふぷ', 'へぺ', 'ほぽ']) { UNVOICE[b] = a; }
const PSOUND: Record<string, string> = { は: 'ぱ', ひ: 'ぴ', ふ: 'ぷ', へ: 'ぺ', ほ: 'ぽ' };
/** a reading as it can sound inside a word: 人 ひと → びと (rendaku), 学 がく → がっ, 発 はつ → はっ/ぱつ */
function surfaceForms(r: string, first: boolean): string[] {
  const out = new Set([r]);
  const head = r[0];
  if (!first) {
    if (VOICE[head]) out.add(VOICE[head] + r.slice(1));
    if (PSOUND[head]) out.add(PSOUND[head] + r.slice(1));
  }
  for (const f of [...out]) if (f.length > 1 && /[くつちき]$/.test(f)) out.add(f.slice(0, -1) + 'っ');
  return [...out];
}
interface Reading { r: string; on: boolean; kun?: string }
/** the readings a kanji has inside words: on, and kun stems with their okurigana (あ.う → あ + あ.う) */
function readingsOf(f: KanjiFacts): Reading[] {
  const out = new Map<string, Reading>();
  for (const x of f.on) { const r = hira(x.replace(/[-.]/g, '')); if (r && !out.has(r)) out.set(r, { r, on: true }); }
  for (const x of f.kun) {
    const kun = hira(x.replace(/^-|-$/g, ''));
    const r = kun.split('.')[0];
    if (r && !out.has(r)) out.set(r, { r, on: false, kun });
  }
  return [...out.values()];
}

/** one kanji (or kana) of a word and the kana it reads as; `base` = its dictionary reading, `on` = on'yomi */
export interface Piece { ch: string; r: string; base?: string; on?: boolean; kun?: string }
/**
 * 対戦 / たいせん → [対 たい][戦 せん]; 会う / あう → [会 あ][う う]; 人々 / ひとびと → [人 ひと][々 びと].
 * null when the readings we know can't spell the word (an unusual reading, 今日 きょう) — then only real words
 * are used as wrong answers.
 */
export function align(w: Word, of: FactsOf): Piece[] | null {
  const chars = [...w.kanji];
  let reading = hira(w.reading);
  // some entries read "…する" without writing it (生活 せいかつする)
  if (reading.endsWith('する') && !w.kanji.endsWith('する')) reading = reading.slice(0, -2);
  let steps = 0;
  const go = (i: number, pos: number, prev: string): Piece[] | null => {
    if (++steps > 4000) return null;
    if (i === chars.length) return pos === reading.length ? [] : null;
    const ch = chars[i];
    if (!isHan(ch) && ch !== '々') {
      const k = hira(ch);
      if (reading[pos] !== k) return null;
      const rest = go(i + 1, pos + 1, '');
      return rest && [{ ch, r: k }, ...rest];
    }
    const facts = of(ch === '々' ? prev : ch);
    if (!facts) return null;
    const tried = new Set<string>();
    const bases = readingsOf(facts).sort((a, b) => b.r.length - a.r.length);
    for (const b of bases) {
      for (const f of surfaceForms(b.r, i === 0)) {
        if (tried.has(f) || !reading.startsWith(f, pos)) continue;
        tried.add(f);
        const rest = go(i + 1, pos + f.length, ch === '々' ? prev : ch);
        // a kun reading with its okurigana right after it (会う: あ + う) is the kun word itself
        const kun = !b.on && b.kun?.includes('.') && w.kanji.slice(i + 1).startsWith(b.kun.split('.')[1]) ? b.kun : undefined;
        if (rest) return [{ ch, r: f, base: b.r, on: b.on, kun }, ...rest];
      }
    }
    return null;
  };
  const out = go(0, 0, '');
  return out && out.length ? out : null;
}

// ── which kanji sound or look alike ─────────────────────────────────────────
interface Index { size: number; byOn: Map<string, string[]>; byKun: Map<string, string[]>; byStem: Map<string, string[]>; uses: Map<string, number>; all: string[] }
const indexes = new WeakMap<object, Index>();
/** kanji used in the word list, how often, and by reading — built once per word list */
function indexOf(vocab: readonly Word[], of: FactsOf): Index {
  const hit = indexes.get(vocab);
  // (in the app the word list and the kanji facts load later: an index built before they did is built again)
  if (hit && hit.size === vocab.length && hit.all.length) return hit;
  const uses = new Map<string, number>();
  for (const v of vocab) for (const c of v.kanji) if (isHan(c)) uses.set(c, (uses.get(c) ?? 0) + 1);
  const byOn = new Map<string, string[]>(), byKun = new Map<string, string[]>(), byStem = new Map<string, string[]>();
  const add = (m: Map<string, string[]>, k: string, c: string) => { const l = m.get(k); if (!l) m.set(k, [c]); else if (!l.includes(c)) l.push(c); };
  const all = [...uses.keys()].filter((c) => of(c)).sort((a, b) => uses.get(b)! - uses.get(a)!);
  for (const c of all) {
    for (const x of of(c)!.on) add(byOn, hira(x.replace(/[-.]/g, '')), c);
    for (const x of of(c)!.kun) { const kun = hira(x.replace(/^-|-$/g, '')); add(byKun, kun, c); add(byStem, kun.split('.')[0], c); }
  }
  const idx = { size: vocab.length, byOn, byKun, byStem, uses, all };
  indexes.set(vocab, idx);
  return idx;
}
const pickFrom = <T>(a: T[], rng: () => number, top = 8): T | undefined => (a.length ? a[Math.floor(rng() * Math.min(top, a.length))] : undefined);
/** the more common ones first: rare kanji make poor wrong answers (nobody would pick them) */
const common = (list: string[], idx: Index) => { const c = list.filter((x) => (idx.uses.get(x) ?? 0) >= 3); return c.length >= 3 ? c : list; };
/**
 * Common kanji read the same way: on'yomi with on'yomi (対 たい → 大, 体, 待), kun with kun and the same
 * okurigana (呼ぶ よ.ぶ → 喚ぶ) or at least a same long stem. A one-kana kun stem (よ, ま) matches too much — none.
 */
function soundAlikes(p: Piece, idx: Index, rng: () => number): string | undefined {
  const base = p.base ?? p.r;
  const list = p.on ? idx.byOn.get(base) ?? [] : p.kun ? idx.byKun.get(p.kun) ?? [] : [];
  let pool = list.filter((c) => c !== p.ch);
  if (!pool.length && !p.on && [...base].length >= 2) pool = (idx.byStem.get(base) ?? []).filter((c) => c !== p.ch);
  return pickFrom(common(pool, idx), rng, 10);
}
/** kanji that share a part and about the stroke count (待 → 持, 特, 侍) */
function lookAlikes(ch: string, idx: Index, of: FactsOf, rng: () => number): string | undefined {
  const me = of(ch);
  if (!me || !me.parts.length) return undefined;
  const scored: Array<{ c: string; s: number }> = [];
  for (const c of idx.all) {
    if (c === ch) continue;
    const f = of(c)!;
    const shared = f.parts.filter((x) => me.parts.includes(x)).length;
    if (!shared) continue;
    if ((idx.uses.get(c) ?? 0) < 2) continue;
    scored.push({ c, s: shared * 3 - Math.abs(f.strokes - me.strokes) + Math.min(2, (idx.uses.get(c) ?? 0) / 10) + rng() });
  }
  scored.sort((a, b) => b.s - a.s);
  return pickFrom(scored.map((x) => x.c), rng, 5);
}

const shuffle = <T>(a: T[], rng: () => number) => {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};

/**
 * Up to `count` made-up ways to write `w` (the "which kanji" question): swapped kanji, a same-sounding kanji in
 * one or both places, a same-looking kanji. Never another correct spelling of the same word.
 */
export function fakeSpellings(w: Word, vocab: readonly Word[], of: FactsOf, rng: () => number = Math.random, count = 3): string[] {
  const pieces = align(w, of);
  const han = pieces ? pieces.map((p, i) => (isHan(p.ch) ? i : -1)).filter((i) => i >= 0) : [...w.kanji].map((c, i) => (isHan(c) ? i : -1)).filter((i) => i >= 0);
  if (!han.length) return [];
  const idx = indexOf(vocab, of);
  const chars = pieces ? pieces.map((p) => p.ch) : [...w.kanji];
  const reading = hira(w.reading);
  const valid = (s: string) => s !== w.kanji && !vocab.some((v) => v.kanji === s && hira(v.reading) === reading);
  // (a substitute already in the word — 一人 → 人人 — is no near miss)
  const build = (sub: Record<number, string | undefined>) => (Object.values(sub).some((x) => !x || chars.includes(x)) ? '' : chars.map((c, i) => sub[i] ?? c).join(''));
  const sound = (i: number) => (pieces ? soundAlikes(pieces[i], idx, rng) : undefined);
  const look = (i: number) => lookAlikes(chars[i], idx, of, rng);
  const ideas: string[] = [];
  // two kanji side by side: 対戦 → 戦対
  if (han.length === 2 && han[1] === han[0] + 1 && chars[han[0]] !== chars[han[1]]) {
    const s = [...chars]; [s[han[0]], s[han[1]]] = [s[han[1]], s[han[0]]];
    ideas.push(s.join(''));
  }
  const at = shuffle([...han], rng);
  ideas.push(build({ [at[0]]: sound(at[0]) }));
  if (at.length > 1) ideas.push(build({ [at[0]]: sound(at[0]), [at[1]]: sound(at[1]) }), build({ [at[1]]: sound(at[1]) }));
  ideas.push(build({ [at[0]]: look(at[0]) }));
  if (at.length > 1) ideas.push(build({ [at[1]]: look(at[1]) }), build({ [at[0]]: sound(at[0]), [at[1]]: look(at[1]) }));
  else ideas.push(build({ [at[0]]: sound(at[0]) }), build({ [at[0]]: look(at[0]) }));
  const out: string[] = [];
  for (const s of ideas) if (s && valid(s) && !out.includes(s)) out.push(s);
  return out.slice(0, count);
}

// ── readings ────────────────────────────────────────────────────────────────
const O_ROW = /[おこごそぞとどのほぼぽもよろょ]$/;
const U_ROW = /[うくぐすずつづぬふぶぷむゆるゅ]$/;
const E_ROW = /[えけげせぜてでねへべぺめれ]$/;
/** the ways a reading piece is misremembered: 戦 せん → ぜん, せい; 校 こう → こ; 学 がっ → がく */
function slips(r: string, _first: boolean): string[] {
  const out: string[] = [];
  const head = r[0], tail = r.slice(1);
  if (VOICE[head]) out.push(VOICE[head] + tail);
  if (UNVOICE[head]) out.push(UNVOICE[head] + tail);
  if (r.length > 1 && r.endsWith('う') && (O_ROW.test(r.slice(0, -1)) || U_ROW.test(r.slice(0, -1)))) out.push(r.slice(0, -1));
  else if (O_ROW.test(r) || /ゅ$/.test(r)) out.push(r + 'う');
  if (r.length > 1 && r.endsWith('い') && E_ROW.test(r.slice(0, -1))) out.push(r.slice(0, -1));
  else if (E_ROW.test(r)) out.push(r + 'い');
  if (r.endsWith('ん')) out.push(r.slice(0, -1) + 'い');
  else if (r.length > 1 && r.endsWith('い')) out.push(r.slice(0, -1) + 'ん');
  if (r.includes('ゅ')) out.push(r.replace('ゅ', 'ょ'));
  else if (r.includes('ょ')) out.push(r.replace('ょ', 'ゅ'));
  if (r.endsWith('っ')) out.push(r.slice(0, -1) + 'く', r.slice(0, -1) + 'つ');
  return out;
}
const wellFormed = (s: string) => !!s && !SMALL_START.test(s) && !/っ$|っ[あいうえおなにぬねのまみむめもやゆよらりるれろわをんっ]|[ゃゅょ][ゃゅょ]|^ん/.test(s) && !/(.)\1\1/.test(s);

/**
 * Up to `count` made-up readings of `w` (the "how is it read" question): another reading of one kanji, or a
 * slip in one or two places. Never another real reading of the same written word.
 */
export function fakeReadings(w: Word, vocab: readonly Word[], of: FactsOf, rng: () => number = Math.random, count = 3): string[] {
  const right = hira(w.reading);
  const suru = right.endsWith('する') && !w.kanji.endsWith('する') ? 'する' : '';
  const real = new Set(vocab.filter((v) => v.kanji === w.kanji).map((v) => hira(v.reading)));
  const pieces = align(w, of);
  const ideas: string[][] = [[], [], []]; // other reading · one slip · two slips
  if (pieces) {
    const join = (i: number, r: string) => pieces.map((p, k) => (k === i ? r : p.r)).join('') + suru;
    pieces.forEach((p, i) => {
      if (!isHan(p.ch) && p.ch !== '々') return;
      const f = of(p.ch === '々' ? pieces[i - 1]?.ch ?? '' : p.ch);
      // another reading of the same kind (生 せい → しょう; 上 うえ → かみ), not a one-kana kun stem
      if (f) for (const r of readingsOf(f)) if (r.r !== p.base && r.on === !!p.on && (r.on || r.r.length >= 2) && Math.abs(r.r.length - p.r.length) <= 1) ideas[0].push(join(i, r.r));
      for (const s of slips(p.r, i === 0)) ideas[1].push(join(i, s));
    });
    const han = pieces.map((p, i) => (isHan(p.ch) ? i : -1)).filter((i) => i >= 0);
    if (han.length > 1) {
      for (let n = 0; n < 6; n++) {
        const [a, b] = shuffle([...han], rng);
        const sa = pickFrom(slips(pieces[a].r, a === 0), rng), sb = pickFrom(slips(pieces[b].r, b === 0), rng);
        if (sa && sb) ideas[2].push(pieces.map((p, k) => (k === a ? sa : k === b ? sb : p.r)).join('') + suru);
      }
    }
  } else {
    // no split: slips over the whole reading
    const stem = suru ? right.slice(0, -2) : right;
    for (const s of slips(stem, true)) ideas[1].push(s + suru);
    const mid = [...stem];
    mid.forEach((c, i) => { if (i > 0 && VOICE[c]) ideas[1].push(stem.slice(0, i) + VOICE[c] + stem.slice(i + 1) + suru); });
  }
  const ok = (s: string) => s !== right && !real.has(s) && wellFormed(s) && Math.abs(s.length - right.length) <= 2;
  const pools = ideas.map((list) => shuffle([...new Set(list.filter(ok))], rng));
  const out: string[] = [];
  // a mix like the real test: one of each kind first, then whatever is left
  for (let round = 0; out.length < count && round < 4; round++) {
    for (const p of [pools[1], pools[0], pools[2]]) {
      const x = p.find((s) => !out.includes(s));
      if (x && out.length < count) out.push(x);
    }
  }
  return out;
}
