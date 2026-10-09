// Deck Duel rules shared by server (authoritative) and client (display).

export const CARD_COLORS = ['lightblue', 'blue', 'yellow', 'green', 'red'] as const;
export type CardColor = (typeof CARD_COLORS)[number];

export interface CardSpec { label: string; kind: 'attack' | 'heal' | 'mana'; amount: number; cost: number }
/** Easiest words → light blue … hardest → red (rank by difficulty, which includes level + stroke count). */
export const CARD_SPECS: Record<CardColor, CardSpec> = {
  lightblue: { label: 'Bolt', kind: 'attack', amount: 100, cost: 10 },
  blue: { label: 'Frost', kind: 'attack', amount: 120, cost: 25 },
  yellow: { label: 'Mana', kind: 'mana', amount: 60, cost: 0 },
  green: { label: 'Heal', kind: 'heal', amount: 100, cost: 40 },
  red: { label: 'Inferno', kind: 'attack', amount: 250, cost: 70 },
};

export const DECK_CHARACTERS = ['goblin', 'knight', 'witch', 'wizard'] as const;
export type DeckCharacter = (typeof DECK_CHARACTERS)[number];
export const CHARACTER_INFO: Record<DeckCharacter, { name: string; power: string; passive?: boolean }> = {
  goblin: { name: 'Goblin', power: 'Frenzy: play 2 cards in a row this turn. 100 mana, then 4 turns cooldown.' },
  knight: { name: 'Knight', power: 'Bulwark: take 30% less damage and heal 30% more for 2 turns. 100 mana, then 4 turns cooldown.' },
  witch: { name: 'Witch', power: 'Sight: see the kanji and reading of all your cards for 2 turns (and the kanji stays visible while casting). 100 mana, then 4 turns cooldown.' },
  wizard: { name: 'Wizard', power: 'Arcane reserve (passive): out of cards → draw 2 random cards before a new draft; out of mana → +30 mana. Once each.', passive: true },
};

export const DECK_RULES = {
  hp: 1000,
  maxMana: 200, // and you start full
  manaPerTurn: 10,
  handSize: 10,
  cardsPerLevel: 4,
  picksPerTurn: 2,
  pickMs: 20_000,
  characterMs: 30_000,
  chooseMs: 15_000, // pick which card to play
  castMs: 38_500, // then write its kanji: 3.5 s flash + 35 s
  castFlashMs: 3500,
  matchMs: 8 * 60_000, // then overtime
  overtimeCardMs: 38_500, // 3.5 s flash + 35 s
  knightDamageTaken: 0.7,
  knightHealBonus: 1.3,
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
}

export interface DeckCastView {
  castId: number;
  ownerId: string;
  card: DeckCardView & { kanji: string; reading: string; meaning: string };
  flashMs: number | null; // ms the kanji stays visible; null = stays (Witch's Sight)
  deadlineMs: number; // time left
  overtime: boolean;
}

export interface DeckView {
  phase: DeckPhase;
  you: string;
  players: DeckPlayerView[];
  hand: DeckCardView[]; // your cards (hidden faces unless revealed)
  draft: { pool: Array<{ cardId: string; color: CardColor; takenBy: string | null }>; picker: string | null; picksLeft: number; coinWinner: string | null; deadlineMs: number } | null;
  turn: { active: string; castsLeft: number; deadlineMs: number; stage: 'choose' | 'cast' } | null;
  /** 1 for the opening draft; +1 every time someone runs out of cards and a new draft starts */
  round: number;
  /** While it's NOT your turn: the kanji in your hand, sorted (so you can't tell which card is which). */
  deckList: Array<{ kanji: string; reading: string; meaning: string }> | null;
  casting: DeckCastView | null;
  matchLeftMs: number;
  overtimeLeft: number; // cards left in overtime
}

export type DeckEvent =
  | { kind: 'coin'; winner: string; round: number }
  | { kind: 'redraft'; playerId: string; round: number }
  | { kind: 'pick'; playerId: string; color: CardColor }
  | { kind: 'ability'; playerId: string; character: DeckCharacter }
  | { kind: 'wizard'; playerId: string; what: 'cards' | 'mana' }
  | { kind: 'cast'; playerId: string; color: CardColor; kanji: string }
  | { kind: 'resolve'; playerId: string; color: CardColor; kanji: string; reading: string; meaning: string; ok: boolean; amount: number; targetId: string; refund?: number; recognized?: string; overtime: boolean }
  | { kind: 'overtime' }
  | { kind: 'stuck'; playerId: string; why: 'no_cards' | 'no_mana' };
