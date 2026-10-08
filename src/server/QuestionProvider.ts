import { KANJI } from '../shared/kanji';
import type { KanjiEntry } from '../shared/protocol';

// Strategy pattern: swap this to change what gets asked (hiragana mode, JLPT levels, a DB...).
export interface QuestionProvider { next(): KanjiEntry }

export class DeckQuestionProvider implements QuestionProvider {
  private deck: KanjiEntry[] = [];
  constructor(private readonly pool: readonly KanjiEntry[] = KANJI) {}

  next(): KanjiEntry {
    if (this.deck.length === 0) this.deck = shuffle([...this.pool]); // no repeats until deck is used up
    return this.deck.pop()!;
  }
}

function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
