// Deck Duel rules shared by server (authoritative) and client (display).

export const CARD_COLORS = ['lightblue', 'blue', 'yellow', 'green', 'red'] as const;
export type CardColor = (typeof CARD_COLORS)[number];

export interface CardSpec { label: string; kind: 'attack' | 'heal' | 'mana'; amount: number; cost: number }
/**
 * Easiest words → light blue … hardest → red (rank by difficulty, which includes level + stroke count).
 * v0.8 balance (tuned with ~150k simulated duels): a harder card is worth more per card played, so
 * drafting and writing hard kanji pays off.
 */
export const CARD_SPECS: Record<CardColor, CardSpec> = {
  lightblue: { label: 'Bolt', kind: 'attack', amount: 90, cost: 10 },
  blue: { label: 'Frost', kind: 'attack', amount: 150, cost: 20 },
  yellow: { label: 'Mana', kind: 'mana', amount: 60, cost: 0 },
  green: { label: 'Heal', kind: 'heal', amount: 140, cost: 30 },
  red: { label: 'Inferno', kind: 'attack', amount: 340, cost: 45 },
};

export const DECK_CHARACTERS = ['goblin', 'knight', 'witch', 'wizard'] as const;
export type DeckCharacter = (typeof DECK_CHARACTERS)[number];
export const CHARACTER_INFO: Record<DeckCharacter, { name: string; power: string; passive?: boolean }> = {
  goblin: { name: 'Goblin', power: 'Frenzy: play 2 cards in a row this turn (the second costs 1.5× mana). 100 mana, then 5 turns cooldown.' },
  knight: { name: 'Knight', power: 'Bulwark: take 45% less damage and heal 50% more for 2 turns. 100 mana, then 4 turns cooldown.' },
  witch: { name: 'Witch', power: 'Sight: for 2 turns see the kanji and reading of all your cards, and your attacks hit 35% harder (the card you write still hides its kanji). 100 mana, then 4 turns cooldown.' },
  wizard: { name: 'Wizard', power: 'Arcane reserve (passive): out of cards → draw 2 random cards before a new draft; out of mana → +30 mana. Once each.', passive: true },
};

export const DECK_RULES = {
  hp: 800,
  maxMana: 200, // and you start full
  manaPerTurn: 10,
  handSize: 10,
  cardsPerLevel: 4,
  picksPerTurn: 2,
  pickMs: 20_000,
  characterMs: 30_000,
  chooseMs: 15_000, // pick which card to play
  // casting your card, in three steps: read the meaning → see the kanji → write it from memory
  castMs: 60_000, // one minute for all three steps
  castReadMs: 15_000, // reading + meaning only; press Ready (or after 15 s) to see the kanji
  revealMs: 2_000, // after a cast the correct kanji shows; nothing can be played meanwhile
  skipPenaltyHp: 100, // letting the choose clock run out without playing a card
  matchMs: 8 * 60_000, // then overtime
  // overtime is a 1v1 Rapid duel: the cards are gone; random kanji (N5–N1), first to type the reading hits
  overtimeCardMs: 12_000, // per kanji
  overtimeGapMs: 2_200, // the answer stays up before the next kanji
  overtimeMaxMs: 3 * 60_000, // then the higher HP wins
  witchSightDamage: 1.35, // Witch's attack spells hit harder while Sight is on
  goblinSecondCost: 1.5, // Frenzy's second card costs this much more mana
  goblinCooldown: 5, // Frenzy rests this many of your turns (the others: abilityCooldown)
  knightDamageTaken: 0.55,
  knightHealBonus: 1.5,
  abilityTurns: 2,
  manaRefund: 0.5, // a successful spell gives back half its mana cost
  abilityCost: 100, // mana to fire your hero's power
  abilityCooldown: 4, // your turns until it can be used again
  wizardBonusCards: 2,
  wizardBonusMana: 30,
};

export type DeckPhase = 'characters' | 'draft' | 'battle' | 'overtime' | 'over';

export interface DeckCardView {
  cardId: string;
  color: CardColor;
  /** only when revealed (being cast, already played, or the Witch's Sight) */
  kanji?: string;
  reading?: string;
  meaning?: string;
}

/** Overtime (Rapid duel): a harder word hits harder. The card shows the level's colour. */
export const OVERTIME_DAMAGE = { N5: 60, N4: 80, N3: 100, N2: 130, N1: 170 } as const;
export type OvertimeLevel = keyof typeof OVERTIME_DAMAGE;
export const OVERTIME_COLOR: Record<OvertimeLevel, CardColor> = { N5: 'lightblue', N4: 'blue', N3: 'green', N2: 'yellow', N1: 'red' };

export interface DeckPlayerView {
  id: string;
  name: string;
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
  character: DeckCharacter | null;
  /** your turns until the hero power is ready again (0 = ready) */
  abilityCooldown: number;
  /** turns left on Knight's Bulwark / Witch's Sight; Goblin: casts left this turn */
  abilityActive: number;
  handCounts: Record<CardColor, number>;
  handSize: number;
  wizardCardsUsed: boolean;
  wizardManaUsed: boolean;
  pic: string | null;
  flame: string;
  staff?: string;
}

export type CastStage = 'read' | 'look' | 'write';
export interface DeckCastView {
  castId: number;
  ownerId: string;
  /**
   * kanji is only sent while it may be seen (the "look" step, Witch's Sight, overtime);
   * in overtime the reading and meaning are not sent (that's what you have to type)
   */
  card: DeckCardView & { kanji?: string; reading?: string; meaning?: string };
  stage: CastStage;
  chars: number; // how many characters to write
  /** overtime: type the reading in kana (or romaji), or — for a kana word — in romaji only */
  answer: 'reading' | 'romaji' | null;
  /** overtime: the word's level and how hard it hits */
  rapid: { level: string; damage: number } | null;
  deadlineMs: number; // time left for the whole cast (1 minute)
  readLeftMs: number | null; // "read" step: time until the kanji shows by itself
  overtime: boolean;
}

export interface DeckView {
  phase: DeckPhase;
  you: string;
  players: DeckPlayerView[];
  hand: DeckCardView[]; // your cards (hidden faces unless revealed)
  draft: { pool: Array<{ cardId: string; color: CardColor; takenBy: string | null }>; picker: string | null; picksLeft: number; coinWinner: string | null; deadlineMs: number } | null;
  /** costFactor: what the next card costs compared to normal (Goblin's Frenzy second card: 1.5) */
  turn: { active: string; castsLeft: number; deadlineMs: number; stage: 'choose' | 'cast'; costFactor: number } | null;
  /** 1 for the opening draft; +1 every time someone runs out of cards and a new draft starts */
  round: number;
  /** While it's NOT your turn: the kanji in your hand, sorted (so you can't tell which card is which). */
  deckList: Array<{ kanji: string; reading: string; meaning: string }> | null;
  casting: DeckCastView | null;
  matchLeftMs: number;
  overtimeLeft: number; // ms left in overtime (then the higher HP wins)
}

export type DeckEvent =
  | { kind: 'coin'; winner: string; round: number }
  | { kind: 'redraft'; playerId: string; round: number }
  | { kind: 'pick'; playerId: string; color: CardColor }
  | { kind: 'ability'; playerId: string; character: DeckCharacter }
  | { kind: 'wizard'; playerId: string; what: 'cards' | 'mana' }
  | { kind: 'cast'; playerId: string; color: CardColor }
  | { kind: 'resolve'; playerId: string; color: CardColor; kanji: string; reading: string; meaning: string; ok: boolean; amount: number; targetId: string; refund?: number; recognized?: string; overtime: boolean }
  | { kind: 'overtime' }
  | { kind: 'skip'; playerId: string; damage: number } // didn't play a card in time
  | { kind: 'ot_miss'; playerId: string } // overtime: a wrong guess (the player may try again)
  | { kind: 'stuck'; playerId: string; why: 'no_cards' | 'no_mana' };
