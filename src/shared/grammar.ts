// 0.9.9.9.9.6 (round 4): Grammar — the JLPT grammar, lesson by lesson ("a new menu card with all grammar N5–N1: the
// wizard explains it, rules, usage, examples, then asks questions, then the lesson is passed"). Each point: its
// pattern, what it means, how it is formed and used, examples (furigana in {漢字|かな} markup, as the chess lines),
// and questions — a sentence with a gap and four choices, the first one right (shuffled when asked). The same
// questions feed Grammar Clash, the quiz battle for 2–8 players.
import { N5 } from './grammar-n5';
import { N4 } from './grammar-n4';
import { N3 } from './grammar-n3';
import { N2 } from './grammar-n2';
import { N1 } from './grammar-n1';

export type GrammarLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
export const GRAMMAR_LEVELS: GrammarLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];
export interface Tr { en: string; ru: string }
export interface GrammarExample extends Tr { jp: string }
/** a sentence with ＿＿ where the answer goes; options[0] is right */
export interface GrammarQuestion { jp: string; options: [string, string, string, string]; en: string; ru: string }
export interface GrammarPoint {
  id: string; level: GrammarLevel;
  /** the pattern, as it is written: 〜は〜です */
  pattern: string;
  meaning: Tr;
  /** how it is formed and used, a line each */
  rules: Tr[];
  examples: GrammarExample[];
  questions: GrammarQuestion[];
}

export const GRAMMAR: GrammarPoint[] = [...N5, ...N4, ...N3, ...N2, ...N1]; // (round 5: N3, N2 and N1 too)
export const grammarOf = (level: GrammarLevel) => GRAMMAR.filter((g) => g.level === level);
export const grammarById = (id: string) => GRAMMAR.find((g) => g.id === id) ?? null;
/** a lesson is passed with this many of its questions right (all but one) */
export const passMark = (g: GrammarPoint) => Math.max(1, g.questions.length - 1);

/** a question's four choices in a random order, and where the right one went */
export function shuffled(q: GrammarQuestion, rnd = Math.random): { options: string[]; answer: number } {
  const order = [0, 1, 2, 3].sort(() => rnd() - 0.5);
  return { options: order.map((i) => q.options[i]), answer: order.indexOf(0) };
}
/** the markup gone: {漢字|かんじ} → 漢字 (or its reading) */
export const plainJp = (s: string, reading = false) => s.replace(/\{([^|}]+)\|([^}]+)\}/g, (_m, k, r) => (reading ? r : k));
