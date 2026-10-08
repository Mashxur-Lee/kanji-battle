// Single source of truth for everything that crosses the wire.
export type PlayerId = string;

export interface PlayerView { id: PlayerId; name: string; hp: number }
export interface KanjiEntry { kanji: string; kana: string; romaji: string; meaning: string }
export type RoundOutcome = 'correct' | 'wrong';
export interface RoundRecord {
  entry: KanjiEntry;
  winnerId: PlayerId | null;
  outcomes: Record<PlayerId, RoundOutcome>;
}

export type ClientMessage =
  | { type: 'create'; name: string }
  | { type: 'join'; code: string; name: string }
  | { type: 'answer'; text: string };

export type ServerMessage =
  | { type: 'joined'; code: string; you: PlayerId; players: PlayerView[] }
  | { type: 'lobby'; players: PlayerView[] }
  | { type: 'round'; number: number; kanji: string; durationMs: number; players: PlayerView[] }
  | { type: 'wrong' }
  | { type: 'round_end'; winnerId: PlayerId | null; entry: KanjiEntry; players: PlayerView[] }
  | { type: 'game_over'; winnerId: PlayerId | null; players: PlayerView[]; history: RoundRecord[] }
  | { type: 'error'; message: string };
