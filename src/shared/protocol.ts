// Single source of truth for everything that crosses the wire.
export type PlayerId = string;

/** KANA = hiragana practice (answered in romaji); N5–N1 = JLPT vocabulary (answered with the reading). */
export const LEVELS = ['KANA', 'N5', 'N4', 'N3', 'N2', 'N1'] as const;
export type Level = (typeof LEVELS)[number];
export const LEVEL_LABEL: Record<Level, string> = { KANA: 'かな', N5: 'N5', N4: 'N4', N3: 'N3', N2: 'N2', N1: 'N1' };

/** How a word must be answered: its kana reading (IME or romaji), or romaji only (hiragana practice). */
export type AnswerMode = 'reading' | 'romaji';

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

export interface PlayerView {
  id: PlayerId;
  name: string;
  hp: number;
  maxHp: number;
  combo: number;
  levels: Level[];
}

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

export type GameOverReason = 'ko' | 'time' | 'forfeit';

/** Broadcast so both players see what happened on the field. */
export type BattleEvent =
  | { kind: 'hit'; playerId: PlayerId; targetId: PlayerId; kanji: string; damage: number; combo: number }
  | { kind: 'miss'; playerId: PlayerId; kanji: string };

export type ClientMessage =
  | { type: 'create'; name: string; levels?: Level[] }
  | { type: 'join'; code: string; name: string; levels?: Level[] }
  | { type: 'levels'; levels: Level[] }
  | { type: 'leave' }
  | { type: 'start' }
  | { type: 'ready' }
  | { type: 'answer'; challengeId: number; text: string }
  | { type: 'skip'; challengeId: number }
  | { type: 'rematch' };

export type ServerMessage =
  | { type: 'joined'; code: string; you: PlayerId }
  | { type: 'left' }
  | { type: 'lobby'; players: PlayerView[]; hostId: PlayerId; maxPlayers: number }
  | { type: 'prep'; pool: StudyItem[]; durationMs: number }
  | { type: 'prep_ready'; readyIds: PlayerId[] }
  | { type: 'battle_start'; players: PlayerView[]; durationMs: number; countdownMs: number }
  | { type: 'challenge'; id: number; kanji: string; answer: AnswerMode; timeLimitMs: number }
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
    }
  | { type: 'battle_update'; players: PlayerView[]; event: BattleEvent }
  | {
      type: 'game_over';
      winnerId: PlayerId | null;
      reason: GameOverReason;
      players: PlayerView[];
      stats: Record<PlayerId, PlayerStats>;
    }
  | { type: 'rematch_status'; votes: PlayerId[] }
  | { type: 'error'; message: string };
