import { CARD_SPECS, DECK_CHARACTERS, DECK_RULES, type DeckView } from '../shared/deck';
import type { GameMode, Level, PlayerId, VocabEntry } from '../shared/protocol';
import type { GameEvent } from './Game';

/** AI knowledge levels a host can pick in the lobby. */
export const BOT_LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;
export type BotLevel = (typeof BOT_LEVELS)[number];
export const isBotLevel = (x: unknown): x is BotLevel => BOT_LEVELS.includes(x as BotLevel);

/**
 * Chance that an AI of a given knowledge level gets a word of a given JLPT level right.
 * (Hiragana words count as N5.)
 */
export const BOT_ACCURACY: Record<BotLevel, Record<'N5' | 'N4' | 'N3' | 'N2' | 'N1', number>> = {
  N5: { N5: 0.90, N4: 0.50, N3: 0.20, N2: 0.10, N1: 0.05 },
  N4: { N5: 0.92, N4: 0.75, N3: 0.35, N2: 0.15, N1: 0.10 },
  N3: { N5: 0.95, N4: 0.85, N3: 0.70, N2: 0.30, N1: 0.18 },
  N2: { N5: 0.99, N4: 0.90, N3: 0.80, N2: 0.60, N1: 0.30 },
  N1: { N5: 1.00, N4: 0.95, N3: 0.87, N2: 0.70, N1: 0.60 },
};
export function botChance(bot: BotLevel, word: Level): number {
  return BOT_ACCURACY[bot][word === 'KANA' ? 'N5' : word];
}

const NAMES = ['Kitsune', 'Tanuki', 'Tengu', 'Kappa', 'Oni', 'Yuki', 'Ryu', 'Neko'];
export const botName = (i: number, level: BotLevel) => `${NAMES[i % NAMES.length]} (AI ${level})`;

/** What the bot may do — the same actions a player's socket can trigger. */
export interface BotHost {
  mode: () => GameMode;
  peek: (id: PlayerId) => { challengeId: number; entry: VocabEntry } | null;
  deckView: (id: PlayerId) => DeckView | null;
  ready: (id: PlayerId) => void;
  answer: (id: PlayerId, challengeId: number, text: string) => void;
  skip: (id: PlayerId, challengeId: number) => void;
  deckCharacter: (id: PlayerId, ch: string) => void;
  deckPick: (id: PlayerId, cardId: string) => void;
  deckPlay: (id: PlayerId, cardId: string) => void;
  deckAbility: (id: PlayerId) => void;
  deckCastReady: (id: PlayerId, castId: number) => void;
  deckCastGo: (id: PlayerId, castId: number) => void;
}

const WRONG = '×'; // never a valid answer in any mode

/**
 * An AI player. It reacts to the game's own events with human-like delays and answers correctly
 * with the probability from BOT_ACCURACY. It never sees anything a player couldn't (apart from the
 * answer it is "remembering").
 */
export class Bot {
  private timers = new Map<string, ReturnType<typeof setTimeout>>();

  constructor(
    readonly id: PlayerId,
    readonly level: BotLevel,
    private readonly host: BotHost,
    private readonly rng: () => number = Math.random,
  ) {}

  dispose() {
    for (const t of this.timers.values()) clearTimeout(t);
    this.timers.clear();
  }

  /** Every game event in the room passes through here. */
  onEvent(e: GameEvent) {
    switch (e.type) {
      case 'prep':
        if (e.playerId === this.id) this.later('ready', this.between(2_000, 6_000), () => this.host.ready(this.id));
        break;
      case 'challenge':
        if (e.playerId === this.id) this.answerChallenge(e.id);
        break;
      case 'answer_result':
        // Rapid: a wrong answer may retry — the AI gives up on the round instead
        if (e.playerId === this.id && e.retry) this.later(`giveup:${e.challengeId}`, 800, () => this.host.skip(this.id, e.challengeId));
        break;
      case 'deck_state':
        if (e.playerId === this.id) this.onDeck(e.view);
        break;
      case 'game_over':
        this.dispose();
        break;
    }
  }

  private answerChallenge(challengeId: number) {
    const peek = this.host.peek(this.id);
    if (!peek || peek.challengeId !== challengeId) return;
    const mode = this.host.mode();
    const right = this.rng() < botChance(this.level, peek.entry.level);
    // writing takes longer than typing a reading; a wrong answer usually comes a bit later
    const [lo, hi] = mode === 'writing' ? [5_000, 13_000] : mode === 'rapid' ? [1_800, 6_500] : [1_800, 5_500];
    const delay = this.between(lo, hi) * (right ? 1 : 1.25);
    this.later(`ch:${challengeId}`, delay, () => {
      const now = this.host.peek(this.id);
      if (!now || now.challengeId !== challengeId) return; // someone else won the round, or time ran out
      const e = now.entry;
      const text = mode === 'writing' ? e.kanji : e.romaji ?? e.reading;
      this.host.answer(this.id, challengeId, right ? text : WRONG);
    });
  }

  // ── Deck Duel ─────────────────────────────────────────────────────────────

  private onDeck(v: DeckView) {
    const me = v.players.find((p) => p.id === this.id);
    if (!me) return;
    if (v.phase === 'characters' && !me.character) {
      this.later('hero', this.between(1_000, 2_500), () => this.host.deckCharacter(this.id, DECK_CHARACTERS[Math.floor(this.rng() * DECK_CHARACTERS.length)]));
      return;
    }
    if (v.phase === 'draft' && v.draft?.picker === this.id) {
      const taken = v.draft.pool.filter((c) => c.takenBy).length;
      this.later(`pick:${v.round}:${taken}`, this.between(700, 1_800), () => {
        const now = this.host.deckView(this.id);
        const free = now?.draft?.picker === this.id ? now.draft.pool.filter((c) => !c.takenBy) : [];
        if (free.length) this.host.deckPick(this.id, free[Math.floor(this.rng() * free.length)].cardId);
      });
      return;
    }
    const cast = v.casting;
    if (cast && cast.ownerId === this.id && cast.stage === 'read') {
      this.later(`ready:${cast.castId}`, this.between(2_000, 6_000), () => this.host.deckCastReady(this.id, cast.castId)); // reads the meaning…
      return;
    }
    if (cast && cast.ownerId === this.id && cast.stage === 'look') {
      this.later(`go:${cast.castId}`, this.between(1_500, 4_000), () => this.host.deckCastGo(this.id, cast.castId)); // …studies the kanji…
      return;
    }
    if (cast && (cast.ownerId === this.id || (cast.overtime && cast.ownerId === ''))) {
      this.writeCast(cast.castId, cast.overtime); // …and writes it
      return;
    }
    if (v.phase === 'battle' && v.turn?.active === this.id && !cast) {
      this.later(`turn:${v.turn.active}:${v.turn.castsLeft}:${me.handSize}:${v.matchLeftMs > 0 ? Math.round(v.matchLeftMs / 1000) : 0}`, this.between(1_500, 3_500), () => this.playTurn());
    }
  }

  private playTurn() {
    const v = this.host.deckView(this.id);
    if (!v || v.phase !== 'battle' || v.turn?.active !== this.id || v.casting) return;
    const me = v.players.find((p) => p.id === this.id)!;
    // hero power now and then, if it leaves enough mana for a card
    const cheapest = Math.min(...v.hand.map((c) => CARD_SPECS[c.color].cost));
    if (me.character !== 'wizard' && me.abilityCooldown === 0 && me.mana >= DECK_RULES.abilityCost + cheapest && this.rng() < 0.4) {
      this.host.deckAbility(this.id);
    }
    const after = this.host.deckView(this.id) ?? v;
    const mana = after.players.find((p) => p.id === this.id)!.mana;
    const affordable = after.hand.filter((c) => CARD_SPECS[c.color].cost <= mana);
    if (!affordable.length) return; // the server ends the turn / match
    const of = (color: string) => affordable.find((c) => c.color === color);
    const pick =
      (me.hp <= 450 && of('green')) ||
      (mana < 60 && of('yellow')) ||
      (this.rng() < 0.7 && (of('red') || of('blue') || of('lightblue'))) ||
      affordable[Math.floor(this.rng() * affordable.length)];
    this.host.deckPlay(this.id, pick.cardId);
  }

  private writeCast(castId: number, overtime: boolean) {
    this.later(`cast:${castId}`, (overtime ? DECK_RULES.castFlashMs : 0) + this.between(overtime ? 3_000 : 4_000, overtime ? 14_000 : 15_000), () => {
      const peek = this.host.peek(this.id);
      if (!peek || peek.challengeId !== castId) return;
      const right = this.rng() < botChance(this.level, peek.entry.level);
      this.host.answer(this.id, castId, right ? peek.entry.kanji : WRONG);
    });
  }

  // ── helpers ───────────────────────────────────────────────────────────────

  private between(lo: number, hi: number) { return lo + this.rng() * (hi - lo); }

  /** One pending action per key (state broadcasts repeat; don't schedule the same move twice). */
  private later(key: string, ms: number, fn: () => void) {
    if (this.timers.has(key)) return;
    const t = setTimeout(() => { this.timers.delete(key); fn(); }, ms);
    t.unref?.();
    this.timers.set(key, t);
  }
}
