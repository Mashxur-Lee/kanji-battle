// Single source of truth for everything that crosses the wire.
export type PlayerId = string; // = the player's account id

/** KANA = hiragana practice (answered in romaji); N5–N1 = JLPT vocabulary (answered with the reading). */
export const LEVELS = ['KANA', 'N5', 'N4', 'N3', 'N2', 'N1'] as const;
export type Level = (typeof LEVELS)[number];
export const LEVEL_LABEL: Record<Level, string> = { KANA: 'かな', N5: 'N5', N4: 'N4', N3: 'N3', N2: 'N2', N1: 'N1' };

export const MODES = ['reading', 'writing', 'boss'] as const;
export type GameMode = (typeof MODES)[number];
export const MODE_LABEL: Record<GameMode, string> = {
  reading: '1v1 Kanji Reading',
  writing: '1v1 Kanji Writing',
  boss: 'Boss Elimination',
};

/** How a word must be answered: kana reading (IME or romaji), romaji only (hiragana practice), or handwriting. */
export type AnswerMode = 'reading' | 'romaji' | 'writing';

/** The primary learning unit: a vocabulary item (single kanji, compound, or kana). */
export interface VocabEntry {
  id: string;
  kanji: string; // what is shown (kanji, or the kana itself for hiragana practice)
  reading: string; // hiragana — what the answer is checked against
  romaji?: string; // set for hiragana practice: shown as the "reading", and answers must be typed in romaji
  meaning: string;
  level: Level; // a filter/category, NOT the difficulty measure
  difficulty: number; // 0–100, drives damage; tune later from real player data
  altReadings?: string[];
}

/** What the client sees during the study phase. Never sent during battle. */
export interface StudyItem { kanji: string; reading: string; meaning: string; level: Level }

export type Role = 'user' | 'admin';
export interface PublicUser { id: string; username: string; role: Role }
export interface AdminUserRow extends PublicUser { banned: boolean; createdAt: string }

export interface PlayerView {
  id: PlayerId;
  name: string;
  hp: number;
  maxHp: number;
  combo: number;
  levels: Level[];
  online: boolean;
}

export interface BossView { name: string; hp: number; maxHp: number }

export interface WordStat {
  kanji: string;
  reading: string;
  meaning: string;
  attempts: number;
  correct: number;
  avgMs: number | null; // average time of correct answers
}

export interface PlayerStats {
  damageDealt: number;
  attempts: number;
  correct: number;
  accuracy: number; // 0–1
  avgResponseMs: number | null;
  bestCombo: number;
  words: WordStat[];
  struggled: string[]; // kanji the player missed at least once, worst first
}

export type GameOverReason = 'ko' | 'time' | 'forfeit' | 'boss_slain' | 'party_wiped';

/** Broadcast so everyone sees what happened on the field. targetId 'boss' = the dragon. */
export type BattleEvent =
  | { kind: 'hit'; playerId: PlayerId; targetId: PlayerId | 'boss'; kanji: string; damage: number; combo: number }
  | { kind: 'miss'; playerId: PlayerId; kanji: string }
  | { kind: 'claw'; playerId: PlayerId; damage: number }
  | { kind: 'breath_warning'; inMs: number }
  | { kind: 'breath'; damage: number };

/** One handwritten character = list of strokes, each a list of [x, y] points. */
export type DrawnChar = Array<Array<[number, number]>>;

export type ClientMessage =
  | { type: 'hello'; token: string }
  | { type: 'create'; mode: GameMode; levels?: Level[] }
  | { type: 'join'; code: string; levels?: Level[] }
  | { type: 'levels'; levels: Level[] }
  | { type: 'leave' }
  | { type: 'start' }
  | { type: 'ready' }
  | { type: 'answer'; challengeId: number; text: string }
  | { type: 'write'; challengeId: number; chars: DrawnChar[] }
  | { type: 'skip'; challengeId: number }
  | { type: 'rematch' };

export interface ChallengeMsg {
  type: 'challenge';
  id: number;
  kanji: string;
  answer: AnswerMode;
  timeLimitMs: number;
  /** writing mode: the kanji is flashed briefly, then only the meaning stays */
  meaning?: string;
  charCount?: number;
  flashMs?: number;
}

export type ServerMessage =
  | { type: 'welcome'; user: PublicUser }
  | { type: 'auth_error'; message: string }
  | { type: 'kicked'; message: string }
  | { type: 'joined'; code: string; you: PlayerId; mode: GameMode }
  | { type: 'left' }
  | { type: 'lobby'; players: PlayerView[]; hostId: PlayerId; maxPlayers: number; minPlayers: number; mode: GameMode }
  | { type: 'prep'; pool: StudyItem[]; durationMs: number; readyIds: PlayerId[]; players: PlayerView[] }
  | { type: 'prep_ready'; readyIds: PlayerId[] }
  | {
      type: 'battle_start';
      mode: GameMode;
      players: PlayerView[];
      boss: BossView | null;
      durationMs: number;
      countdownMs: number;
    }
  | ChallengeMsg
  | {
      type: 'answer_result';
      challengeId: number;
      correct: boolean;
      timedOut: boolean;
      skipped: boolean;
      kanji: string;
      reading: string;
      meaning: string;
      damage: number;
      combo: number;
      responseMs: number | null;
      nextInMs: number;
      /** writing mode: what the recogniser read for each character (best guess) */
      recognized?: string;
    }
  | { type: 'battle_update'; players: PlayerView[]; boss: BossView | null; event: BattleEvent }
  | {
      type: 'game_over';
      mode: GameMode;
      winnerId: PlayerId | null;
      teamWon: boolean | null; // boss mode only
      reason: GameOverReason;
      players: PlayerView[];
      boss: BossView | null;
      stats: Record<PlayerId, PlayerStats>;
    }
  | { type: 'rematch_status'; votes: PlayerId[] }
  | { type: 'error'; message: string };
