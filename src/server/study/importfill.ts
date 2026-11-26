// 0.9.9.9.9.6 (round 4): an import's preview, filled in ("if the words aren't in the game's database it just skips
// them"): a word the game knows takes its reading and meaning from the game; any other word from the dictionary
// (JMdict, 200 000 words); one the dictionary doesn't have either gets its reading guessed from its parts (kanji by
// kanji, the longest pieces first) — marked so you check it. Nothing is dropped: whatever is still missing, you type in.
import type { DictEntry } from '../../shared/dict';
import { isCorrectReading, katakanaToHiragana } from '../../shared/kana';
import type { ImportCard } from '../../shared/importlist';
import { VOCAB } from '../vocab';
import type { VocabEntry } from '../../shared/protocol';

export type CardSource = 'game' | 'dict' | 'guess' | 'none';
export interface PreviewCard extends ImportCard { from: CardSource }
export interface Lookup { lookup(t: string): DictEntry | null; kanjiReading?(ch: string): string | null }

const KANA = /^[\p{Script=Hiragana}\p{Script=Katakana}ー]+$/u;
let byKanji: Map<string, VocabEntry[]> | null = null;
function gameWord(kanji: string, reading: string) {
  if (!byKanji) { byKanji = new Map(); for (const v of VOCAB) { if (v.level === 'KANA' || v.level === 'KATA') continue; const l = byKanji.get(v.kanji) ?? []; l.push(v); byKanji.set(v.kanji, l); } }
  return (byKanji.get(kanji) ?? []).find((v) => !reading || isCorrectReading(reading, [v.reading, ...(v.altReadings ?? [])]));
}
const meaningOf = (e: DictEntry, lang: 'en' | 'ru') => (lang === 'ru' && e.ru[0] ? e.ru[0] : (e.senses[0]?.[1] ?? '')).split(/;\s*/).slice(0, 3).join('; ').slice(0, 120);

/** a reading for a word the dictionary doesn't have, from its pieces (the longest the dictionary has first); null: no guess */
export function guessReading(word: string, dict: Lookup): string | null {
  let out = '';
  for (let i = 0; i < word.length;) {
    let took = 0;
    for (let n = Math.min(6, word.length - i); n >= 1; n--) {
      const piece = word.slice(i, i + n);
      if (KANA.test(piece)) { out += katakanaToHiragana(piece); took = n; break; }
      // one kanji alone in a longer word: its short reading (電 でん in 電脳); a longer piece: the word's own
      const one = n === 1 && word.length > 1 ? dict.kanjiReading?.(piece) : null;
      if (one) { out += katakanaToHiragana(one); took = n; break; }
      const e = dict.lookup(piece);
      if (e?.kana[0] && (n > 1 || e.kanji.includes(piece))) { out += katakanaToHiragana(e.kana[0]); took = n; break; }
    }
    if (!took) return null;
    i += took;
  }
  return out || null;
}

/** the cards, with what the game and the dictionary know filled in */
export function fillCards(cards: ImportCard[], dict: Lookup | null, lang: 'en' | 'ru' = 'en'): PreviewCard[] {
  return cards.map((c) => {
    const kanji = c.kanji.normalize('NFKC'), reading = c.reading.normalize('NFKC');
    const g = gameWord(kanji, reading);
    if (g) return { kanji, reading: reading || g.reading, meaning: c.meaning || g.meaning, from: 'game' as const };
    const e = dict?.lookup(kanji) ?? null;
    if (e && (!reading || e.kana.some((r) => katakanaToHiragana(r) === katakanaToHiragana(reading)))) return { kanji, reading: reading || katakanaToHiragana(e.kana[0] ?? ''), meaning: c.meaning || meaningOf(e, lang), from: 'dict' as const };
    if (reading) return { kanji, reading, meaning: c.meaning, from: 'none' as const };
    const guess = dict ? guessReading(kanji, dict) : null;
    return { kanji, reading: guess ?? '', meaning: c.meaning, from: guess ? 'guess' as const : 'none' as const };
  });
}
