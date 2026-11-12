import type { DeckEvent, DeckView } from './deck';
// Single source of truth for everything that crosses the wire.
export type PlayerId = string; // = the player's account id

/** KANA = hiragana, KATA = katakana practice (answered in romaji); N5–N1 = JLPT vocabulary (answered with the reading). */
export const LEVELS = ['KANA', 'KATA', 'N5', 'N4', 'N3', 'N2', 'N1'] as const;
/** ONO (0.9.9.4.4): onomatopoeia — studied in their own deck and quiz, never in battle (so not in LEVELS) */
export type Level = (typeof LEVELS)[number] | 'ONO';
export const LEVEL_LABEL: Record<Level, string> = { KANA: 'ひらがな', KATA: 'カタカナ', N5: 'N5', N4: 'N4', N3: 'N3', N2: 'N2', N1: 'N1', ONO: 'オノマトペ' };
/** The three kinds of onomatopoeia: 擬声語 (a sound or voice), 擬態語 (a state or manner), 擬情語 (a feeling). */
export type OnoType = 'sei' | 'tai' | 'jo';
export const ONO_TYPES: Record<OnoType, { ja: string; romaji: string; en: string }> = {
  sei: { ja: '擬声語', romaji: 'giseigo', en: 'sound' },
  tai: { ja: '擬態語', romaji: 'gitaigo', en: 'state / manner' },
  jo: { ja: '擬情語', romaji: 'gijōgo', en: 'feeling' },
};

export const MODES = ['reading', 'writing', 'boss', 'rapid', 'deck'] as const;
export type GameMode = (typeof MODES)[number];
export const MODE_LABEL: Record<GameMode, string> = {
  reading: '1v1 Kanji Reading',
  writing: '1v1 Kanji Writing',
  boss: 'Boss Elimination',
  rapid: '1v1 Rapid',
  deck: 'Deck Duel',
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
  difficulty: number; // 0–100, drives damage; level + stroke count + word length (scripts/build-vocab.ts)
  strokes?: number; // total stroke count of the kanji in the word
  altReadings?: string[];
  jlpt?: Level; // the word's JLPT list (its `level` is re-sorted by stroke count, src/server/vocab.ts)
  ono?: OnoType; // level ONO: which kind of onomatopoeia
}

/** Study spells (0.9.9.4.3) uses the word's real JLPT list; the games keep the stroke-count levels. */
export const studyLevelOf = (v: { level: Level; jlpt?: Level }): Level => v.jlpt ?? v.level;

/** What the client sees during the study phase. Never sent during battle. */
export interface StudyItem { kanji: string; reading: string; meaning: string; level: Level; /** 0.9.9.4.4.2: a word from your own All spells */ mine?: boolean }

export type Role = 'user' | 'admin';
/** `username` is the login; `name` (0.9.9.6) what others see — your nickname, or the login when you have none */
export interface PublicUser { id: string; username: string; role: Role; name?: string; nickname?: string | null }
export interface AdminUserRow extends PublicUser {
  banned: boolean; createdAt: string;
  xp?: number; level?: number; crit?: number; learned?: number; cards?: number;
  /** connected right now; what they're doing; since when (or, offline: last seen since the server started) */
  online?: boolean; away?: boolean; activity?: string; onlineSince?: number; lastSeen?: number; loginDay?: string | null;
}

export type Avatar = 'goblin' | 'kid' | 'human' | 'knight' | 'witch' | 'wizard';

export interface PlayerView {
  id: PlayerId;
  name: string;
  hp: number;
  maxHp: number;
  combo: number;
  levels: Level[];
  online: boolean;
  avatar: Avatar; // 0.9.9.9.5.2: the character they picked in Customize (it was decided by the hardest level picked)
  crit: number; // 0–0.5, from learned flashcards
  level: number; // account level (XP)
  ready: boolean; // Deck Duel lobby: starts when everyone is ready
  bot: 'BEGINNER' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1' | null; // AI player and its knowledge level
  pic: string | null; // profile picture URL
  flame: string; // colour of their combo flames ('blue' | 'purple')
  staff?: string; // magic staff skin
  border?: string; // avatar border (0.9.9.3)
  pose?: string; // 0.9.9.7: combo pose (Customize)
}

/** sys (0.9.9.9.5.5): a line from the game — someone joined or left the lobby (`name` is who) */
/** 0.9.9.9.6: one message of the messenger (`from` / `to`: a player's id or 'support', the team) */
export interface DmView { id: string; from: string; to: string; text: string; at: number; read: boolean; kind?: string; by?: string }
export interface ChatMessage { id: number; from: PlayerId; name: string; text: string; at: number; sys?: 'join' | 'leave' }
export const CHAT_MAX_LENGTH = 140;

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

/** Another player's public card (shown when you click their name). */
export interface MissedWord { id: string; kanji: string; reading: string; meaning: string; level: Level; added: boolean }
export interface PublicProfile { id: string; name: string; /** the login under the nickname (0.9.9.6) */ login?: string; level: number; wins: number; losses: number; learned: number; pic: string | null; since: string; streak: number; bestStreak: number; badges?: string[]; border?: string;
  /** 0.9.9.9.5.5: what they wear (Customize) and the achievements they have (ids) */
  look?: ProfileLook; achievements?: string[] }
export interface ProfileLook { character: string; staff: string; arena: string; flame: string; pose: string; border: string }

/** One line of your match history. `character`: Deck Duel hero, otherwise the wizard avatar you played. */
export interface MatchSummary {
  id: string;
  mode: GameMode;
  outcome: 'win' | 'loss' | 'draw';
  character: string;
  at: number; // epoch ms
  opponents: Array<{ id: string; name: string; bot: boolean; character: string }>;
}
/** …and everything the results screen needs to show it again. */
export interface MatchDetail extends MatchSummary {
  you: PlayerId;
  players: PlayerView[];
  winnerId: PlayerId | null;
  teamWon: boolean | null;
  reason: GameOverReason;
  stats: Record<PlayerId, PlayerStats>;
}

/** Broadcast so everyone sees what happened on the field. targetId 'boss' = the dragon. */
export type BattleEvent =
  | { kind: 'hit'; playerId: PlayerId; targetId: PlayerId | 'boss'; kanji: string; damage: number; combo: number; crit?: boolean }
  | { kind: 'miss'; playerId: PlayerId; kanji: string }
  | { kind: 'claw'; playerId: PlayerId; damage: number }
  | { kind: 'breath_warning'; inMs: number }
  /** immune: players on fire (5+ combo) shrug the flames off */
  | { kind: 'breath'; damage: number; immune: PlayerId[]; /** 0.9.9.6: who was hit (the ones still standing) */ victims?: PlayerId[] };

/** One handwritten character = list of strokes, each a list of [x, y] points. */
export type DrawnChar = Array<Array<[number, number]>>;

export type ClientMessage =
  | { type: 'hello'; token: string }
  | { type: 'create'; mode: GameMode; levels?: Level[]; /** the tutorial's short first battle */ tutorial?: boolean }
  | { type: 'join'; code: string; levels?: Level[] }
  | { type: 'levels'; levels: Level[] }
  | { type: 'leave' }
  | { type: 'pause'; on: boolean }
  | { type: 'forfeit' }
  /** 0.9.9.8: the only human in the room leaves the game (back to the lobby, no forfeit) */
  | { type: 'leave_game' }
  /** 0.9.9.9: the app went to the background (true) or came back (false) */
  | { type: 'away'; on: boolean }
  | { type: 'deck_character'; character: string }
  | { type: 'deck_pick'; cardId: string }
  | { type: 'deck_play'; cardId: string }
  | { type: 'deck_ability' }
  | { type: 'deck_cast_ready'; castId: number }
  | { type: 'deck_cast_go'; castId: number }
  /** Deck Duel: what you have drawn so far on the pad (the opponent watches it live) */
  | { type: 'deck_ink'; castId: number; strokes: unknown; cells: number }
  | { type: 'back_to_lobby' }
  | { type: 'start' }
  | { type: 'ready' }
  | { type: 'lobby_ready'; ready: boolean }
  | { type: 'add_bot'; level: string }
  | { type: 'queue'; modes: string[]; levels?: string[] }
  | { type: 'queue_cancel' }
  | { type: 'queue_accept'; matchId: number }
  | { type: 'remove_bot'; id: string }
  /** invite a friend into the room you're in (lobby) */
  | { type: 'invite'; friendId: string }
  /** 0.9.9.9.5: "Decline" on a friend's invite — they can't invite you again for 5 minutes */
  | { type: 'invite_decline'; fromId: string }
  | { type: 'chat'; text: string }
  /** 0.9.9.9.5.5: typing in the lobby chat (the others see "Ann is typing…") */
  | { type: 'chat_typing'; on: boolean }
  /** 0.9.9.9.5.5: the host opens the lobby to friends (they can join from your profile) or closes it (invite / code only) */
  | { type: 'set_open'; open: boolean }
  /** 3D mouse look: where you are looking (radians; + = left / up), sent a few times a second */
  | { type: 'look'; yaw: number; pitch: number }
  /** 0.9.9.7.2: you started / stopped typing or writing (the others see your staff move only then) */
  | { type: 'typing'; on: boolean }
  | { type: 'pong'; t: number }
  /** which part of the game you're in outside rooms (0.9.9.4.3: friends and admins see "Studying spells") */
  | { type: 'where'; screen: string }
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
  /** writing mode: the kanji is flashed briefly, then only the reading + meaning stay */
  meaning?: string;
  reading?: string;
  charCount?: number;
  flashMs?: number;
  /** 0.9.9.4.4.2 (Rapid): whose All spells the word comes from — 'you', a player's name, or none (a random word) */
  from?: string;
  /** 0.9.9.9.6: the tutorial's first battle — the answer, shown under the word */
  hint?: { kana: string; romaji: string; meaning: string };
}

export type ServerMessage =
  | { type: 'welcome'; user: PublicUser }
  | { type: 'ping'; t: number }
  /**
   * online queue: searching (since = server time it started; requeued = the other player didn't accept),
   * found (Match found box: accept within acceptMs), matched (a room is being made), idle (reason: you
   * didn't accept in time / declined)
   */
  | { type: 'queue'; state: 'searching' | 'found' | 'matched' | 'idle'; modes?: GameMode[]; since?: number; now?: number; searching?: number; mode?: GameMode;
      matchId?: number; acceptMs?: number; accepted?: PlayerId[]; requeued?: boolean; reason?: 'missed' | 'declined';
      /** players in the found match; boss: how many are queued for Boss (it needs 4) */ players?: number; boss?: number }
  /** round-trip times in ms per player in your room (null = offline) */
  | { type: 'net'; rtt: Record<PlayerId, number | null> }
  /** friends: someone sent you a request / accepted yours */
  | { type: 'friend'; event: 'request' | 'accepted'; from: string }
  /** 0.9.9.9.5.3: a friend came online / went offline (the friends list and the lobby's invite list update at once) */
  | { type: 'friend_presence'; friendId: string; online: boolean }
  /** a friend invites you to their room */
  | { type: 'invite'; fromId: string; from: string; code: string; mode: GameMode }
  /** 0.9.9.9.5: the friend you invited declined — no inviting them again until `until` (server time) */
  | { type: 'invite_declined'; friendId: string; name: string; until: number }
  | { type: 'chat'; messages: ChatMessage[] }
  /** another player's mouse look (their model turns its head) */
  | { type: 'look'; id: PlayerId; yaw: number; pitch: number }
  /** 0.9.9.7.2: another player is typing / writing (or stopped) */
  | { type: 'typing'; id: PlayerId; on: boolean }
  | { type: 'auth_error'; message: string }
  | { type: 'kicked'; message: string }
  | { type: 'joined'; code: string; you: PlayerId; mode: GameMode }
  | { type: 'left' }
  | { type: 'lobby'; players: PlayerView[]; hostId: PlayerId; maxPlayers: number; minPlayers: number; mode: GameMode; /** 0.9.9.9.5.5 */ open?: boolean }
  /** 0.9.9.9.5.5: someone in the room is typing in the chat (or stopped) */
  | { type: 'chat_typing'; id: PlayerId; name: string; on: boolean }
  /** 0.9.9.9.6: a new message in the messenger (to you — or, for admins, to the team) */
  | { type: 'dm'; message: DmView; fromName: string; /** 0.9.9.9.6.1: you muted this (no note) */ muted?: boolean }
  /** 0.9.9.9.6.1: `reader` read your messages to them (✓ → ✓✓); reader 'support': the team */
  | { type: 'dm_read'; reader: string }
  | { type: 'prep'; pool: StudyItem[]; durationMs: number; readyIds: PlayerId[]; players: PlayerView[] }
  | { type: 'prep_ready'; readyIds: PlayerId[] }
  | {
      type: 'battle_start';
      mode: GameMode;
      players: PlayerView[];
      boss: BossView | null;
      durationMs: number;
      countdownMs: number;
      /** back from a pause: same battle, only the clocks are new (keep the arena, KOs and combos as they are) */
      resume?: boolean;
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
      crit?: boolean;
      retry?: boolean; // rapid: wrong guess, keep trying
      beaten?: boolean; // rapid: the opponent answered first
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
  | { type: 'paused'; on: boolean }
  | { type: 'progress'; gained: number; xp: number; level: number; levelUp: boolean; crit: number; achievements?: string[];
      /** words you missed this game; `added` = they were just put in Struggling spells (the results screen lets you undo or move them) */
      missed?: MissedWord[] }
  | { type: 'notice'; message: string }
  | { type: 'deck_state'; view: DeckView }
  | { type: 'deck_event'; event: DeckEvent }
  | { type: 'deck_ink'; castId: number; strokes: DrawnChar; cells: number }
  | { type: 'error'; message: string };

/** The two kana levels (letters, answered in romaji). */
export const isKanaLevel = (l: string) => l === 'KANA' || l === 'KATA';

/** 0.9.9.9.2: where someone plays — the Android app, the PC app, or a website (friends see a small icon) */
export type Device = 'web' | 'pc' | 'phone';
