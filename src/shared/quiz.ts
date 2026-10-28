// The JLPT-style quiz (shared since 0.9.9.4 so it also runs offline in the app): reading, meaning or
// "which kanji" questions about words you studied, 4 choices each, the wrong ones looking like the right one.

import { pickDistractors, posOf } from './distract';
import { ONO_TYPES, type Level, type OnoType, type VocabEntry } from './protocol';
import { displayReading } from './vocab';

export interface QuizWord { id: string; kanji: string; reading: string; meaning: string; level: Level }
export interface QuizQuestion {
  kind: 'reading' | 'meaning' | 'kanji' | OnoKind; vocabId: string; level: Level; prompt: string; sub?: string; choices: string[]; answer: number;
  /** shown after answering (0.9.9.4): the whole word, so a right guess still teaches its meaning */
  word?: { kanji: string; reading: string; meaning: string };
}

const shuffle = <T>(a: T[], rng: () => number) => {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};
// a single hiragana (meaning "hiragana", "hiragana (voiced)" …) is asked by its romaji — their "meanings"
// are all alike, so a meaning question had one choice, or several that only differed in "(voiced)"
const kanaChar = (v: { meaning: string; romaji?: string }) => !!v.romaji && /^(hiragana|katakana)/.test(v.meaning);

/** Questions for `words` (already picked and shuffled), wrong answers from `vocab`. */
export function buildQuiz(words: QuizWord[], vocab: readonly VocabEntry[], rng: () => number = Math.random, byId?: (id: string) => VocabEntry | undefined): QuizQuestion[] {
  const find = byId ?? ((id: string) => vocab.find((v) => v.id === id));
  const kinds: QuizQuestion['kind'][] = ['reading', 'meaning', 'kanji'];
  return words.map((w, i) => {
    const ve = find(w.id);
    const asRomaji = !!ve && kanaChar(ve);
    const kind = asRomaji ? 'reading' : w.kanji === w.reading ? 'meaning' : kinds[i % 3];
    const field = kind === 'reading' ? 'reading' : kind === 'meaning' ? 'meaning' : 'kanji';
    const right = asRomaji ? ve!.romaji! : w[field];
    const same = asRomaji ? vocab.filter(kanaChar) : vocab.filter((v) => v.level === w.level && v.id !== w.id && (field !== 'meaning' || !kanaChar(v)));
    const base = same.length > 20 ? same : vocab.filter((x) => !kanaChar(x) && x.id !== w.id);
    // wrong answers that look like the right one (shared kana / kanji, same kind of meaning)
    const pool = base
      .filter((v) => field !== 'kanji' || (v.kanji !== v.reading && v.reading !== w.reading)) // no kana-only words; no homophones
      .filter((v) => field !== 'reading' || v.kanji !== w.kanji);
    const text = (v: VocabEntry) => asRomaji ? v.romaji! : field === 'reading' ? displayReading(v) : v[field];
    const posBy = new Map(pool.map((v) => [text(v), posOf(v.kanji, v.meaning)]));
    const wrong = pickDistractors(asRomaji ? 'romaji' : field, right, pool.map(text), rng, 3, asRomaji ? undefined : { right: posOf(w.kanji, w.meaning), of: (x) => posBy.get(x) });
    const choices = shuffle([right, ...wrong], rng);
    return {
      kind, vocabId: w.id, level: w.level, choices, answer: choices.indexOf(right),
      prompt: kind === 'kanji' ? w.reading : w.kanji,
      sub: kind === 'kanji' ? w.meaning : undefined,
      word: { kanji: w.kanji, reading: asRomaji ? `${w.reading} · ${ve!.romaji}` : w.reading, meaning: w.meaning },
    };
  });
}

// ── the onomatopoeia quiz (0.9.9.4.4) ────────────────────────────────────────
/** what it means · which word means this · which kind it is (擬声語 / 擬態語 / 擬情語) · which word fits the sentence */
export type OnoKind = 'onomean' | 'onoword' | 'onotype' | 'onoctx';
export const onoTypeLabel = (t: OnoType) => `${ONO_TYPES[t].ja} (${ONO_TYPES[t].romaji}) — ${ONO_TYPES[t].en}`;

/**
 * Questions about onomatopoeia `words` (picked and shuffled), wrong answers from the other onomatopoeia in `vocab`.
 * `examples` (vocab id → sentence with the word in 【】) adds "which word fits" questions.
 */
export function buildOnoQuiz(words: readonly VocabEntry[], vocab: readonly VocabEntry[], rng: () => number = Math.random, examples?: ReadonlyMap<string, string>): QuizQuestion[] {
  const ono = vocab.filter((v) => v.level === 'ONO');
  const kinds: OnoKind[] = ['onomean', 'onoword', 'onoctx', 'onotype'];
  return words.map((w, i) => {
    let kind = kinds[i % kinds.length];
    const ex = examples?.get(w.id);
    if (kind === 'onoctx' && !ex) kind = 'onoword';
    const others = shuffle(ono.filter((v) => v.id !== w.id && v.reading !== w.reading && v.meaning !== w.meaning), rng);
    // wrong words of the same kind first (harder), then any
    const near = [...others.filter((v) => v.ono === w.ono), ...others.filter((v) => v.ono !== w.ono)];
    const word = { kanji: w.kanji, reading: `${w.romaji ?? w.reading} · ${onoTypeLabel(w.ono ?? 'tai')}`, meaning: w.meaning };
    if (kind === 'onotype') {
      const choices = (['sei', 'tai', 'jo'] as OnoType[]).map(onoTypeLabel);
      return { kind, vocabId: w.id, level: w.level, prompt: w.kanji, sub: w.meaning, choices, answer: choices.indexOf(onoTypeLabel(w.ono ?? 'tai')), word };
    }
    const right = kind === 'onomean' ? w.meaning : w.kanji;
    const pick = (kind === 'onomean' ? near.map((v) => v.meaning) : near.map((v) => v.kanji)).filter((x, k, a) => x !== right && a.indexOf(x) === k).slice(0, 3);
    const choices = shuffle([right, ...pick], rng);
    const prompt = kind === 'onomean' ? w.kanji : kind === 'onoword' ? w.meaning : (ex ?? '').replace(/【[^】]+】/, '＿＿＿');
    return { kind, vocabId: w.id, level: w.level, prompt, sub: kind === 'onoctx' ? w.meaning : undefined, choices, answer: choices.indexOf(right), word };
  });
}
