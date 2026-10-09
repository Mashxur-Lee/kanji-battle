import { dailyCrit } from '../../shared/progress';
import type { AdminUserRow, PublicUser, Role } from '../../shared/protocol';
import { hashPassword, verifyPassword } from './passwords';
import type { TokenSigner } from './tokens';
import { UsernameTakenError, type Store, type UserRecord } from '../db/Store';

export class AuthError extends Error {
  constructor(message: string, readonly status = 400) { super(message); }
}

const USERNAME_RE = /^[a-zA-Z0-9_.-]{3,32}$/;
export const toPublic = (u: UserRecord): PublicUser => ({ id: u.id, username: u.username, role: u.role });

export class AuthService {
  private banListeners: Array<(userId: string) => void> = [];

  constructor(readonly store: Store, private readonly tokens: TokenSigner) {}

  /** Creates the two starter accounts if they don't exist yet. Env vars can override the passwords. */
  async seed(accounts: Array<{ username: string; password: string; role: Role }>) {
    for (const a of accounts) {
      const existing = await this.store.findByUsername(a.username);
      if (!existing) await this.store.create({ username: a.username, passwordHash: await hashPassword(a.password), role: a.role });
      else if (a.role === 'admin' && process.env.ADMIN_PASSWORD && !(await verifyPassword(process.env.ADMIN_PASSWORD, existing.passwordHash))) {
        await this.store.update(existing.id, { passwordHash: await hashPassword(process.env.ADMIN_PASSWORD) }); // rotate to the env password
      }
    }
  }

  async register(username: unknown, password: unknown) {
    const u = String(username ?? '').trim();
    const p = String(password ?? '');
    if (!USERNAME_RE.test(u)) throw new AuthError('Login: 3–32 letters, numbers, _ . or -');
    if (p.length < 6 || p.length > 72) throw new AuthError('Password: at least 6 characters');
    try {
      const rec = await this.store.create({ username: u, passwordHash: await hashPassword(p), role: 'user' });
      return { token: this.tokens.sign(rec.id), user: toPublic(rec) };
    } catch (e) {
      if (e instanceof UsernameTakenError) throw new AuthError('That username is taken', 409);
      throw e;
    }
  }

  async login(username: unknown, password: unknown) {
    const rec = await this.store.findByUsername(String(username ?? '').trim());
    // same message for unknown user and wrong password, so usernames can't be probed
    if (!rec || !(await verifyPassword(String(password ?? ''), rec.passwordHash))) throw new AuthError('Wrong username or password', 401);
    if (rec.banned) throw new AuthError('This account has been banned', 403);
    return { token: this.tokens.sign(rec.id), user: toPublic(rec) };
  }

  /** Resolves a token to an active (not banned) user. */
  async authenticate(token: unknown): Promise<UserRecord> {
    const id = this.tokens.verify(String(token ?? ''));
    if (!id) throw new AuthError('Please log in again', 401);
    const rec = await this.store.findById(id);
    if (!rec) throw new AuthError('Please log in again', 401);
    if (rec.banned) throw new AuthError('This account has been banned', 403);
    return rec;
  }

  async requireAdmin(token: unknown) {
    const rec = await this.authenticate(token);
    if (rec.role !== 'admin') throw new AuthError('Admins only', 403);
    return rec;
  }

  async listUsers(): Promise<AdminUserRow[]> {
    return (await this.store.list()).map((u) => ({ ...toPublic(u), banned: u.banned, createdAt: u.createdAt, xp: u.xp, crit: dailyCrit(u.critCount, u.critExpires) }));
  }

  async setBanned(admin: UserRecord, targetId: string, banned: boolean): Promise<AdminUserRow> {
    const target = await this.store.findById(targetId);
    if (!target) throw new AuthError('No such user', 404);
    if (target.id === admin.id) throw new AuthError("You can't ban yourself");
    if (target.role === 'admin') throw new AuthError("Admins can't be banned");
    const rec = (await this.store.update(targetId, { banned }))!;
    if (banned) for (const l of this.banListeners) l(targetId);
    return { ...toPublic(rec), banned: rec.banned, createdAt: rec.createdAt };
  }

  onBan(listener: (userId: string) => void) { this.banListeners.push(listener); }
}
