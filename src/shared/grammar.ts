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
import { N5B } from './grammar-n5b';
import { N4B } from './grammar-n4b';
import { N3B } from './grammar-n3b';
import { N2B } from './grammar-n2b';
import { N1B } from './grammar-n1b';

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

// (0.9.9.9.9.7: and each level's part two — the rest of its core points)
export const GRAMMAR: GrammarPoint[] = [...N5, ...N5B, ...N4, ...N4B, ...N3, ...N3B, ...N2, ...N2B, ...N1, ...N1B]; // (round 5: N3, N2 and N1 too)
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
/**
 * 0.9.9.9.9.7 (round 4, the owner: "grammar topics that are kanji only need furigana above them"): each kanji word that
 * appears in a pattern, with its reading — patternFurigana gives a pattern in the {漢字|かんじ} form the lines use
 */
const PATTERN_WORDS: Record<string, string> = {
  好き: '{好|す}き', 上手: '{上手|じょうず}', 分かる: '{分|わ}かる', 行く: '{行|い}く', 来る: '{来|く}る', 一番: '{一番|いちばん}', 何: '{何|なに}',
  思う: '{思|おも}う', 一方: '{一方|いっぽう}', 方: '{方|かた}', 始める: '{始|はじ}める', 終わる: '{終|お}わる', 言う: '{言|い}う', 代わって: '{代|か}わって',
  限らず: '{限|かぎ}らず', 関して: '{関|かん}して', 対して: '{対|たい}して', 比べて: '{比|くら}べて', 従って: '{従|したが}って', 違いない: '{違|ちが}いない',
  限り: '{限|かぎ}り', 以上: '{以上|いじょう}', 沿って: '{沿|そ}って', 反して: '{反|はん}して', 応じて: '{応|おう}じて', 伴って: '{伴|ともな}って',
  上で: '{上|うえ}で', 先立って: '{先立|さきだ}って', 抜き: '{抜|ぬ}き', 次第: '{次第|しだい}', 最中: '{最中|さいちゅう}', 得ない: '{得|え}ない',
  基づいて: '{基|もと}づいて', 否: '{否|いな}', 難くない: '{難|かた}くない', 早いか: '{早|はや}いか', 禁じ: '{禁|きん}じ', 余儀: '{余儀|よぎ}',
  足る: '{足|た}る', 足りない: '{足|た}りない', 最後: '{最後|さいご}', 即して: '{即|そく}して', 皮切り: '{皮切|かわき}り', 極まり: '{極|きわ}まり',
  極まる: '{極|きわ}まる', 過ぎない: '{過|す}ぎない',
};
const PATTERN_RE = new RegExp(Object.keys(PATTERN_WORDS).sort((a, b) => b.length - a.length).join('|'), 'g');
export const patternFurigana = (pattern: string) => pattern.replace(PATTERN_RE, (w) => PATTERN_WORDS[w]);
export const plainJp = (s: string, reading = false) => s.replace(/\{([^|}]+)\|([^}]+)\}/g, (_m, k, r) => (reading ? r : k));

/** 0.9.9.9.9.6 (round 7): the question's sentence with the right answer in its gap (read aloud once you have answered) */
export const filledQuestion = (q: GrammarQuestion) => q.jp.replace(/＿＿/, q.options[0]);
