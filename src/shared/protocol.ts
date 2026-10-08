// Single source of truth for everything that crosses the wire.
export type PlayerId = string;

export const JLPT_LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;
export type JlptLevel = (typeof JLPT_LEVELS)[number];

/** The primary learning unit: a vocabulary item (single kanji or compound). */
export interface VocabEntry {
  id: string;
  kanji: string;
  reading: string; // hiragana
  meaning: string;
  jlpt: JlptLevel; // a filter/category, NOT the difficulty measure
  difficulty: number; // 0–100, drives damage; tune later from real player data
  altReadings?: string[];
}

/** What the client sees during the study phase. Never sent during battle. */
export type StudyItem = Pick<VocabEntry, 'kanji' | 'reading' | 'meaning' | 'jlpt'>;

export interface RoomSettings { levels: JlptLevel[] }

export interface PlayerView { id: PlayerId; name: string; hp: number; maxHp: number; combo: number }

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
  | { type: 'create'; name: string }
  | { type: 'join'; code: string; name: string }
  | { type: 'settings'; levels: JlptLevel[] }
  | { type: 'start' }
  | { type: 'ready' }
  | { type: 'answer'; challengeId: number; text: string }
  | { type: 'rematch' };

export type ServerMessage =
  | { type: 'joined'; code: string; you: PlayerId }
  | { type: 'lobby'; players: PlayerView[]; hostId: PlayerId; settings: RoomSettings; maxPlayers: number }
  | { type: 'prep'; pool: StudyItem[]; durationMs: number }
  | { type: 'prep_ready'; readyIds: PlayerId[] }
  | { type: 'battle_start'; players: PlayerView[]; durationMs: number; countdownMs: number }
  | { type: 'challenge'; id: number; kanji: string; timeLimitMs: number }
  | {
      type: 'answer_result';
      challengeId: number;
      correct: boolean;
      timedOut: boolean;
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
