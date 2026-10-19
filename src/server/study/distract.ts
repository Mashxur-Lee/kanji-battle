// 0.9.9.3.4: JLPT-quiz wrong answers that look like the right one — readings that share kana and length,
// kanji compounds that share a character, meanings of the same kind ("to …" verbs with verbs) and romaji
// with the same vowel or consonant. Random wrong answers were too easy to rule out at a glance.

export type QuizField = 'reading' | 'meaning' | 'kanji' | 'romaji';

const isKanji = (c: string) => /[一-鿿㐀-䶿々]/.test(c);
const chars = (s: string) => [...s];
/** How many characters two strings share (as multisets). */
function shared(a: string, b: string, keep: (c: string) => boolean = () => true) {
  const left = new Map<string, number>();
  for (const c of chars(a)) if (keep(c)) left.set(c, (left.get(c) ?? 0) + 1);
  let n = 0;
  for (const c of chars(b)) { const k = left.get(c); if (k) { n++; left.set(c, k - 1); } }
  return n;
}
const STOP = new Set(['a', 'an', 'the', 'of', 'to', 'in', 'on', 'one', 'one\'s', 'be', 'or', 'and', 'for', 'with', 'at', 'by', 'something', 'someone', 'etc', 'is', 'as']);
const words = (m: string) => m.toLowerCase().replace(/\([^)]*\)/g, ' ').split(/[^a-z']+/).filter((w) => w.length > 2 && !STOP.has(w));
/** The first gloss, without notes: "to call (one's name); to invite" → "to call". */
export const firstGloss = (m: string) => m.split(/[;,]/)[0].replace(/\([^)]*\)/g, '').trim().toLowerCase();
const kindOf = (m: string) => { const g = firstGloss(m); return g.startsWith('to ') ? 'verb' : /ly$/.test(g) ? 'adverb' : 'noun'; };
/** Part of speech from the written word: 呼ぶ → verb, 明るい → adjective, 学校 → noun. */
export const posOf = (kanji: string, meaning = '') =>
  /^to /.test(firstGloss(meaning)) || /[うくぐすつぬぶむる]$/.test(kanji) && /[\u4e00-\u9fff]/.test(kanji) ? 'verb'
    : /い$/.test(kanji) && /[\u4e00-\u9fff]/.test(kanji) ? 'adj' : kindOf(meaning);

/** A similarity score of a candidate answer to the right one (higher = more alike). */
export function similarity(field: QuizField, right: string, x: string): number {
  const len = Math.abs(chars(right).length - chars(x).length);
  switch (field) {
    case 'reading': {
      let s = shared(right, x) * 2 - len * 1.5;
      if (right[0] === x[0]) s += 2;
      if (right.at(-1) === x.at(-1)) s += 1.5;
      return s;
    }
    case 'kanji': {
      let s = shared(right, x, isKanji) * 4 + shared(right, x, (c) => !isKanji(c)) * 1.5 - len * 1.5;
      if (chars(right).filter(isKanji).length === chars(x).filter(isKanji).length) s += 1;
      if (!isKanji(right.at(-1)!) && right.at(-1) === x.at(-1)) s += 2; // same ending: 呼ぶ / 飛ぶ, 明るい / 暗い
      return s;
    }
    case 'romaji': {
      let s = -len * 2;
      if (right.at(-1) === x.at(-1)) s += 3; // same vowel: ka / sa / ta
      if (right[0] === x[0]) s += 3; // same row: ka / ki / ku
      return s;
    }
    case 'meaning': {
      const a = new Set(words(right)), b = words(x);
      let s = b.filter((w) => a.has(w)).length * 2;
      if (kindOf(right) === kindOf(x)) s += 3;
      s -= Math.min(4, Math.abs(firstGloss(right).length - firstGloss(x).length) / 4);
      s -= Math.min(3, Math.abs(right.length - x.length) / 15);
      return s;
    }
  }
}

/**
 * Three wrong answers for `right`, picked from `pool` (candidate answer strings, already filtered for
 * level and for being a correct answer too). The best-scoring few are shuffled, so the same word does
 * not always get the same three.
 */
export function pickDistractors(field: QuizField, right: string, pool: string[], rng: () => number = Math.random, count = 3,
  /** part of speech of a pool entry, and of the right answer: same-kind answers score higher */
  pos?: { right: string; of: (x: string) => string | undefined }): string[] {
  const seen = new Set<string>([right]);
  const bad = field === 'meaning' ? firstGloss(right) : null;
  const scored: { x: string; s: number }[] = [];
  for (const x of pool) {
    if (seen.has(x)) continue;
    seen.add(x);
    if (bad !== null && firstGloss(x) === bad) continue; // a synonym would be a second right answer
    scored.push({ x, s: similarity(field, right, x) + (pos && pos.of(x) === pos.right ? 4 : 0) + rng() * 1.5 });
  }
  scored.sort((p, q) => q.s - p.s);
  const top = scored.slice(0, Math.max(count, 8));
  for (let i = top.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [top[i], top[j]] = [top[j], top[i]]; }
  return top.slice(0, count).map((t) => t.x);
}
