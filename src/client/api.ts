import type { AdminUserRow, Level, PublicUser } from '../shared/protocol';
import type { BackgroundId } from '../shared/progress';
import type { CardState, Rating } from '../shared/srs';

export interface Profile { xp: number; level: number; crit: number; learned: number; background: BackgroundId; studyLevels: Level[] }
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
  me: () => call<{ user: PublicUser; profile: Profile }>('GET', '/api/me'),
  setBackground: (background: BackgroundId) => call<{ profile: Profile }>('PUT', '/api/me/background', { background }),
  study: () => call<StudySummary>('GET', `/api/study?today=${today()}`),
  setStudyLevels: (levels: Level[]) => call<StudySummary>('PUT', '/api/study/levels', { levels, today: today() }),
  queue: (deck: 'all' | 'struggling') => call<{ cards: StudyCard[] }>('GET', `/api/study/queue?deck=${deck}`),
  review: (vocabId: string, rating: Rating) => call<{ crit: number }>('POST', '/api/study/review', { vocabId, rating }),
  users: () => call<{ users: AdminUserRow[] }>('GET', '/api/admin/users'),
  setBanned: (id: string, banned: boolean) => call<{ user: AdminUserRow }>('POST', `/api/admin/users/${encodeURIComponent(id)}/ban`, { banned }),
};
