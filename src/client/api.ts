import type { AdminUserRow, Level, MatchDetail, MatchSummary, PublicProfile, PublicUser } from '../shared/protocol';
import type { BackgroundId, FlameId, StaffId } from '../shared/progress';
import type { CardState, Rating } from '../shared/srs';

export interface Profile { xp: number; level: number; crit: number; learned: number; learnedToday: number; wins: number; losses: number; pic: string | null; background: BackgroundId; studyLevels: Level[]; flame: FlameId; staff: StaffId; strugglingDue: number; streak: number; bestStreak: number;
  tutorialDone: boolean; unlocks: string[]; month: MonthProgress }
export interface MonthProgress { month: string; name: string; reward: string; goals: Array<{ id: string; label: string; target: number; value: number }>; done: boolean; unlocked: boolean }
export interface DayActivity { day: string; login: boolean; reviews: number; games: number; wins: number; xp: number }
export interface ProgressPage { activity: DayActivity[]; mastery: Record<Level, Array<[string, number]>>; month: MonthProgress }
export interface DailyWord { index: number; total: number; kanji: string; level: Level; timeLimitMs: number }
export interface DailyDone { correct: number; ms: number; rank: number; players: number; xp: number }
export interface DailyOverview { day: string; total: number; wordMs: number; mine: { correct: number; ms: number } | null; rank: number | null; inProgress: boolean;
  board: Array<{ id: string; name: string; correct: number; ms: number }>; words: Array<{ kanji: string; reading: string; meaning: string; level: Level }> | null }
export interface DailyAnswer { correct: boolean; kanji: string; reading: string; meaning: string; ms: number; next: DailyWord | null; done: DailyDone | null }
export interface Friend { id: string; username: string; status: 'accepted' | 'incoming' | 'outgoing'; online: boolean; activity?: string }
export interface DeckCounts { new: number; learning: number; due: number; total: number }
export interface StudySummary { studyLevels: Level[]; notice: number; decks: { all: DeckCounts; struggling: DeckCounts }; profile: Profile }
export interface StudyCard { vocabId: string; kanji: string; reading: string; meaning: string; level: Level; state: CardState; intervals: Record<Rating, string> }
/** The player's local calendar date (daily new cards follow their day, not the server's). */
export const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };

const TOKEN_KEY = 'kb:token';
export const getToken = () => { try { return localStorage.getItem(TOKEN_KEY) ?? ''; } catch { return ''; } };
export const setToken = (t: string) => { try { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); } catch { /* private mode */ } };

export class ApiError extends Error { constructor(message: string, readonly status: number) { super(message); } }

async function call<T>(method: string, url: string, body?: unknown): Promise<T> {
  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json', ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(data.error ?? `Error ${res.status}`, res.status);
  return data as T;
}

export const api = {
  login: (username: string, password: string) => call<{ token: string; user: PublicUser }>('POST', '/api/login', { username, password }),
  register: (username: string, password: string) => call<{ token: string; user: PublicUser }>('POST', '/api/register', { username, password }),
  me: () => call<{ user: PublicUser; profile: Profile }>('GET', `/api/me?today=${today()}`),
  setAvatar: (image: string) => call<{ profile: Profile }>('PUT', '/api/me/avatar', { image }),
  removeAvatar: () => call<{ profile: Profile }>('DELETE', '/api/me/avatar'),
  setFlame: (flame: FlameId) => call<{ profile: Profile }>('PUT', '/api/me/flame', { flame }),
  setStaff: (staff: StaffId) => call<{ profile: Profile }>('PUT', '/api/me/staff', { staff }),
  setBackground: (background: BackgroundId) => call<{ profile: Profile }>('PUT', '/api/me/background', { background }),
  study: () => call<StudySummary>('GET', `/api/study?today=${today()}`),
  setStudyLevels: (levels: Level[]) => call<StudySummary>('PUT', '/api/study/levels', { levels, today: today() }),
  queue: (deck: 'all' | 'struggling') => call<{ cards: StudyCard[] }>('GET', `/api/study/queue?deck=${deck}`),
  review: (vocabId: string, rating: Rating) => call<{ crit: number }>('POST', '/api/study/review', { vocabId, rating, today: today(), tz: new Date().getTimezoneOffset() }),
  matches: () => call<{ matches: MatchSummary[] }>('GET', '/api/matches'),
  match: (id: string) => call<{ match: MatchDetail }>('GET', `/api/matches/${encodeURIComponent(id)}`),
  player: (id: string) => call<{ profile: PublicProfile }>('GET', `/api/users/${encodeURIComponent(id)}`),
  users: () => call<{ users: AdminUserRow[]; storage: string; persistent: boolean }>('GET', '/api/admin/users'),
  tutorialDone: () => call<{ ok: boolean }>('PUT', '/api/me/tutorial'),
  progress: () => call<ProgressPage>('GET', `/api/progress?today=${today()}`),
  strokes: (chars: string) => call<{ strokes: Record<string, number[][][] | null> }>('GET', `/api/strokes?k=${encodeURIComponent(chars)}`),
  daily: () => call<DailyOverview>('GET', '/api/daily'),
  dailyStart: () => call<{ word: DailyWord }>('POST', '/api/daily/start'),
  dailyAnswer: (text: string) => call<DailyAnswer>('POST', '/api/daily/answer', { text }),
  dailyFinish: () => call<{ done: DailyDone | null }>('POST', '/api/daily/finish'),
  friends: () => call<{ friends: Friend[] }>('GET', '/api/friends'),
  addFriend: (username: string) => call<{ result: 'requested' | 'accepted' | 'exists'; friends: Friend[] }>('POST', '/api/friends', { username }),
  acceptFriend: (id: string) => call<{ friends: Friend[] }>('POST', `/api/friends/${encodeURIComponent(id)}/accept`),
  removeFriend: (id: string) => call<{ friends: Friend[] }>('DELETE', `/api/friends/${encodeURIComponent(id)}`),
  setBanned: (id: string, banned: boolean) => call<{ user: AdminUserRow }>('POST', `/api/admin/users/${encodeURIComponent(id)}/ban`, { banned }),
};
