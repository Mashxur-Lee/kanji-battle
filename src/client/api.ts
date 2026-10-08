import type { AdminUserRow, PublicUser } from '../shared/protocol';

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
  me: () => call<{ user: PublicUser }>('GET', '/api/me'),
  users: () => call<{ users: AdminUserRow[] }>('GET', '/api/admin/users'),
  setBanned: (id: string, banned: boolean) => call<{ user: AdminUserRow }>('POST', `/api/admin/users/${encodeURIComponent(id)}/ban`, { banned }),
};
