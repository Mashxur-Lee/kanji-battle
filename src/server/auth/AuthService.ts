import { displayName } from '../db/Store';
import { dailyCrit } from '../../shared/progress';
import type { AdminUserRow, PublicUser, Role } from '../../shared/protocol';
import { hashPassword, verifyPassword } from './passwords';
import type { TokenSigner } from './tokens';
import { UsernameTakenError, type Store, type UserRecord } from '../db/Store';

export class AuthError extends Error {
  constructor(message: string, readonly status = 400) { super(message); }
}

/** The seeded admin account (index.ts): it can never lose its admin role. */
export const OWNER = 'admin';
const USERNAME_RE = /^[a-zA-Z0-9_.-]{3,32}$/;
export const toPublic = (u: UserRecord): PublicUser => ({ id: u.id, username: u.username, role: u.role, name: displayName(u), nickname: u.nickname ?? null });

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

  /**
   * 0.9.9.6: the name others see. 2–24 characters (letters of any script, digits, spaces and _ . - ' ), not
   * someone else's login; empty clears it (the login shows again).
   */
  async setNickname(u: UserRecord, raw: unknown): Promise<PublicUser> {
    const nick = String(raw ?? '').normalize('NFKC').replace(/\s+/g, ' ').trim();
    if (nick && !/^[\p{L}\p{N} _.'\-]{2,24}$/u.test(nick)) throw new AuthError('A nickname is 2–24 letters, numbers, spaces or _ . - \'');
    // 0.9.9.6.1: a nickname may match anyone's login or nickname — players are told apart by their logins.
    const rec = (await this.store.update(u.id, { nickname: nick || null }))!;
    return toPublic(rec);
  }

  async listUsers(): Promise<AdminUserRow[]> {
    return (await this.store.list()).map((u) => ({ ...toPublic(u), banned: u.banned, createdAt: u.createdAt, xp: u.xp, crit: dailyCrit(u.critCount, u.critExpires), loginDay: u.loginDay ?? null }));
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

  /** Delete an account for good (test accounts). Not yourself, not another admin; they are logged out at once. */
  async deleteUser(admin: UserRecord, targetId: string): Promise<void> {
    const target = await this.store.findById(targetId);
    if (!target) throw new AuthError('No such user', 404);
    if (target.id === admin.id) throw new AuthError("You can't delete yourself");
    if (target.role === 'admin') throw new AuthError('Admins can’t be deleted — take away their admin role first');
    for (const l of this.banListeners) l(targetId); // kick their open sessions
    await this.store.deleteUser(targetId);
  }

  /** Promote a player to admin, or take it back. The main "admin" account can't be demoted, and nobody
   *  changes their own role (so the last admin can't lock everyone out). */
  async setRole(admin: UserRecord, targetId: string, role: Role): Promise<AdminUserRow> {
    if (role !== 'admin' && role !== 'user') throw new AuthError('Role: admin or user');
    const target = await this.store.findById(targetId);
    if (!target) throw new AuthError('No such user', 404);
    if (target.id === admin.id) throw new AuthError("You can't change your own role");
    if (target.username.toLowerCase() === OWNER) throw new AuthError('The main admin account stays an admin');
    if (target.banned && role === 'admin') throw new AuthError('Unban this player first');
    const rec = (await this.store.update(targetId, { role }))!;
    return { ...toPublic(rec), banned: rec.banned, createdAt: rec.createdAt };
  }

  onBan(listener: (userId: string) => void) { this.banListeners.push(listener); }
}
