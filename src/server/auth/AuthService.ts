import { createHash, randomBytes, randomInt, timingSafeEqual } from 'node:crypto';
import { displayName } from '../db/Store';
import { dailyCrit } from '../../shared/progress';
import type { AdminUserRow, PublicUser, Role } from '../../shared/protocol';
import { hashPassword, verifyPassword } from './passwords';
import type { TokenSigner } from './tokens';
import { EmailTakenError, UsernameTakenError, type Store, type UserRecord } from '../db/Store';
import { cleanEmail, EmailError, emailKey, maskEmail } from './email';

export class AuthError extends Error {
  constructor(message: string, readonly status = 400) { super(message); }
}

/** 0.9.9.9.6.6: when the email was last set — it can change once a week */
const EMAIL_MARK = 'emailat:';
const EMAIL_GAP_MS = 7 * 86_400_000;
export const emailChangedAt = (u: { unlocks?: string[] }) => Number((u.unlocks ?? []).find((x) => x.startsWith(EMAIL_MARK))?.slice(EMAIL_MARK.length)) || 0;

/** 0.9.9.9.6.5: when the password last changed (a marker among the account's unlocks) */
const PW_MARK = 'pwat:';
export const passwordChangedAt = (u: { unlocks?: string[] }) => Number((u.unlocks ?? []).find((x) => x.startsWith(PW_MARK))?.slice(PW_MARK.length)) || 0;

/** 0.9.9.9.6.9: a guest — playing without an account (no email, no password of their own) until they save it */
export const GUEST_MARK = 'guest';
export const isGuest = (u: { unlocks?: string[] }) => (u.unlocks ?? []).includes(GUEST_MARK);
/** a guest who hasn't been seen for this long is removed (their progress was never saved to an account) */
export const GUEST_TTL_MS = 30 * 86_400_000;

/** The seeded admin account (index.ts): it can never lose its admin role. */
export const OWNER = 'admin';
const USERNAME_RE = /^[a-zA-Z0-9_.-]{3,32}$/;
export const toPublic = (u: UserRecord): PublicUser => ({ id: u.id, username: u.username, role: u.role, name: displayName(u), nickname: u.nickname ?? null });
/** 0.9.9.9.6.6: you, to yourself — with your email (masked: "fr•••@gmail.com"; null: none yet) */
/**
 * 0.9.9.9.7: an email belongs to an account only once it's confirmed with a code sent to it — otherwise anyone could
 * type someone else's address and send them "Forgot password?" mails. (Emails given before 0.9.9.9.7 aren't confirmed:
 * no reset mail goes to them until they are.)
 */
const VERIFIED = 'emailok';
export const emailVerified = (u: { email?: string | null; unlocks?: string[] }) => !!u.email && (u.unlocks ?? []).includes(VERIFIED);
export const toSelf = (u: UserRecord): PublicUser => ({ ...toPublic(u), email: maskEmail(u.email), emailVerified: emailVerified(u), ...(isGuest(u) ? { guest: true } : {}) });
/** a password-reset code: 6 digits, half an hour, 5 tries */
const RESET_MS = 30 * 60_000, RESET_TRIES = 5, RESET_GAP_MS = 60_000;
const sha = (s: string) => createHash('sha256').update(s).digest();
export interface ResetMail { user: UserRecord; email: string; code: string; lang: 'en' | 'ru'; /** 0.9.9.9.7: a reset code, or a code to confirm an email */ kind?: 'reset' | 'confirm' }
const CONFIRM_MS = 15 * 60_000, CONFIRM_TRIES = 5, CONFIRM_GAP_MS = 60_000, CONFIRM_PER_DAY = 6, CONFIRM_PER_ADDRESS_HOUR = 3;

export class AuthService {
  private banListeners: Array<(userId: string) => void> = [];

  constructor(readonly store: Store, private readonly tokens: TokenSigner) {}

  /** Creates the two starter accounts if they don't exist yet. Env vars can override the passwords. */
  /**
   * The built-in accounts. `publicServer` (0.9.9.9.5): a password that isn't from the environment is the one written
   * in the public source code — such an account isn't created there, and an existing one still using it is locked
   * (given a random password nobody knows; set the environment variable to use it again).
   */
  async seed(accounts: Array<{ username: string; password: string; role: Role; fromEnv?: boolean }>, publicServer = false) {
    for (const a of accounts) {
      const existing = await this.store.findByUsername(a.username);
      const known = publicServer && a.fromEnv === false;
      if (!existing) { if (!known) await this.store.create({ username: a.username, passwordHash: await hashPassword(a.password), role: a.role }); }
      else if (known) {
        if (await verifyPassword(a.password, existing.passwordHash)) {
          await this.store.update(existing.id, { passwordHash: await hashPassword(randomBytes(24).toString('base64url')) });
          console.warn(`"${a.username}" still had its built-in default password — locked (set its password in the environment)`);
        }
      } else if (a.fromEnv && !(await verifyPassword(a.password, existing.passwordHash))) {
        await this.store.update(existing.id, { passwordHash: await hashPassword(a.password) }); // rotate to the env password
      }
    }
  }

  async register(username: unknown, password: unknown, email?: unknown, sendMail: (m: ResetMail) => Promise<void> = async () => {}) {
    const u = String(username ?? '').trim();
    const p = String(password ?? '');
    if (!USERNAME_RE.test(u)) throw new AuthError('Login: 3–32 letters, numbers, _ . or -');
    if (/^guest-/i.test(u)) throw new AuthError('Pick a login of your own'); // (0.9.9.9.6.9: those are the guests')
    if (p.length < 6 || p.length > 72) throw new AuthError('Password: at least 6 characters');
    // 0.9.9.9.6.6: an email for every account (to get back in; one account per mailbox)
    const mail = this.emailOrThrow(email);
    const key = emailKey(mail);
    if (await this.store.findByEmailKey(key)) throw new AuthError('That email already has an account — log in, or use "Forgot password?"', 409);
    try {
      // 0.9.9.9.7: the email is the account's once it's confirmed (a code goes to it now)
      const rec = await this.store.create({ username: u, passwordHash: await hashPassword(p), role: 'user' });
      const pending = await this.askConfirm(rec, mail, sendMail);
      return { token: this.tokens.sign(rec.id), user: toSelf(rec), pending };
    } catch (e) {
      if (e instanceof UsernameTakenError) throw new AuthError('That username is taken', 409);
      if (e instanceof EmailTakenError) throw new AuthError('That email already has an account — log in, or use "Forgot password?"', 409);
      throw e;
    }
  }

  /**
   * 0.9.9.9.6.9: play at once, no account — a guest gets a made-up login ("guest-k3x9q2") and a password nobody knows.
   * Everything works (battles, study, the daily), except messages and friends; `claim` turns it into a real account.
   */
  async guest() {
    for (let i = 0; i < 5; i++) {
      const name = `guest-${randomBytes(5).toString('hex').slice(0, 7)}`;
      try {
        const rec = await this.store.create({ username: name, passwordHash: await hashPassword(randomBytes(24).toString('base64url')), role: 'user' });
        const saved = (await this.store.update(rec.id, { unlocks: [...(rec.unlocks ?? []), GUEST_MARK] })) ?? rec;
        return { token: this.tokens.sign(saved.id), user: toSelf(saved) };
      } catch (e) { if (!(e instanceof UsernameTakenError)) throw e; }
    }
    throw new AuthError('Try again in a moment', 503);
  }

  /** 0.9.9.9.6.9: save a guest's progress — a login, a password and an email, the same rules as signing up */
  async claim(u: UserRecord, username: unknown, password: unknown, email: unknown, sendMail: (m: ResetMail) => Promise<void> = async () => {}) {
    if (!isGuest(u)) throw new AuthError('This account is already saved', 409);
    const name = String(username ?? '').trim();
    const p = String(password ?? '');
    if (!USERNAME_RE.test(name)) throw new AuthError('Login: 3–32 letters, numbers, _ . or -');
    if (/^guest-/i.test(name)) throw new AuthError('Pick a login of your own');
    if (p.length < 6 || p.length > 72) throw new AuthError('Password: at least 6 characters');
    const mail = this.emailOrThrow(email);
    const key = emailKey(mail);
    if (await this.store.findByEmailKey(key)) throw new AuthError('That email already has an account — log in, or use "Forgot password?"', 409);
    const other = await this.store.findByUsername(name);
    if (other && other.id !== u.id) throw new AuthError('That username is taken', 409);
    try {
      const rec = await this.store.update(u.id, {
        username: name.toLowerCase(), passwordHash: await hashPassword(p),
        unlocks: (u.unlocks ?? []).filter((x) => x !== GUEST_MARK),
      });
      const pending = await this.askConfirm(rec ?? u, mail, sendMail); // (0.9.9.9.7: the email once it's confirmed)
      return { token: this.tokens.sign(u.id), user: toSelf(rec ?? u), pending };
    } catch (e) {
      if (e instanceof UsernameTakenError) throw new AuthError('That username is taken', 409);
      if (e instanceof EmailTakenError) throw new AuthError('That email already has an account — log in, or use "Forgot password?"', 409);
      throw e;
    }
  }

  /** 0.9.9.9.6.9: guests not seen for a month are removed; returns how many */
  async sweepGuests(now = Date.now()): Promise<number> {
    let n = 0;
    for (const u of await this.store.list()) {
      if (!isGuest(u)) continue;
      const seen = Math.max(Number(u.lastSeen) || 0, Date.parse(u.createdAt) || 0);
      if (now - seen > GUEST_TTL_MS && (await this.store.deleteUser(u.id))) n++;
    }
    return n;
  }

  private emailOrThrow(raw: unknown): string {
    try { return cleanEmail(raw); } catch (e) { if (e instanceof EmailError) throw new AuthError(e.message); throw e; }
  }

  /**
   * 0.9.9.9.6.6: add or change your email. The first one needs nothing more; changing it needs your password (a
   * borrowed phone that's still signed in can't move your account to another inbox and reset the password) and
   * happens at most once a week (no hopping between inboxes).
   */
  async setEmail(u: UserRecord, email: unknown, password: unknown, sendMail: (m: ResetMail) => Promise<void> = async () => {}, now = Date.now()) {
    // (0.9.9.9.7: nothing changes yet — a code goes to the new address; `confirmEmail` makes it the account's)
    const changing = !!u.email;
    if (changing && !(await verifyPassword(String(password ?? ''), u.passwordHash))) throw new AuthError('Your password is wrong', 403);
    const mail = this.emailOrThrow(email);
    const key = emailKey(mail);
    if (changing && key === u.emailKey && emailVerified(u)) return { user: toSelf(u), pending: null };
    const last = emailChangedAt(u) || Date.parse(u.createdAt) || 0; // (given at sign-up: a week from then)
    if (emailVerified(u) && key !== u.emailKey && last && now - last < EMAIL_GAP_MS) {
      const days = Math.max(1, Math.ceil((last + EMAIL_GAP_MS - now) / 86_400_000));
      throw new AuthError(`You can change your email again in ${days} day${days === 1 ? '' : 's'}`, 429);
    }
    const other = await this.store.findByEmailKey(key);
    if (other && other.id !== u.id) throw new AuthError('That email already has an account', 409);
    return { user: toSelf(u), pending: await this.askConfirm(u, mail, sendMail, now) };
  }

  // ── 0.9.9.9.7: confirming an email — a code to it, then it's the account's ──
  private confirms = new Map<string, { email: string; key: string; hash: Buffer; until: number; tries: number; sentAt: number; day: string; today: number }>();
  private sentTo = new Map<string, number[]>();
  /** sends a code to `email` for `u`; returns the address, masked (what the player sees: "a code went to h***@gmail.com") */
  private async askConfirm(u: UserRecord, email: string, sendMail: (m: ResetMail) => Promise<void>, now = Date.now()): Promise<string> {
    const key = emailKey(email);
    const was = this.confirms.get(u.id);
    if (was && was.key === key && now - was.sentAt < CONFIRM_GAP_MS) return maskEmail(email)!; // (the last one is still on its way)
    if (was && now - was.sentAt < CONFIRM_GAP_MS) throw new AuthError('Wait a minute before asking for another code', 429);
    const day = new Date(now).toISOString().slice(0, 10);
    const today = was && was.day === day ? was.today : 0;
    if (today >= CONFIRM_PER_DAY) throw new AuthError('Too many codes today — try again tomorrow', 429);
    // (one mailbox gets at most 3 codes an hour, from all accounts together: nobody can flood someone else's inbox)
    const times = (this.sentTo.get(key) ?? []).filter((t) => now - t < 3_600_000);
    if (times.length >= CONFIRM_PER_ADDRESS_HOUR) throw new AuthError('Too many codes went to that address — try again in an hour', 429);
    this.sentTo.set(key, [...times, now]);
    const code = String(randomInt(0, 1_000_000)).padStart(6, '0');
    this.confirms.set(u.id, { email, key, hash: sha(code), until: now + CONFIRM_MS, tries: 0, sentAt: now, day, today: today + 1 });
    const lang = (u.unlocks ?? []).includes('plang:ru') ? 'ru' : 'en';
    void sendMail({ user: u, email, code, lang, kind: 'confirm' }).catch((e) => console.error('[confirm mail]', e));
    return maskEmail(email)!;
  }
  /** "Send it again": the address waiting for a code — or, for an email from before 0.9.9.9.7, the account's own */
  async resendConfirm(u: UserRecord, sendMail: (m: ResetMail) => Promise<void>, now = Date.now()) {
    const was = this.confirms.get(u.id);
    const email = was && now < was.until + 3_600_000 ? was.email : !emailVerified(u) ? u.email : null;
    if (!email) throw new AuthError('There is no email to confirm — add one first', 400);
    if (was && now - was.sentAt < CONFIRM_GAP_MS) throw new AuthError('Wait a minute before asking for another code', 429);
    return { pending: await this.askConfirm(u, email, sendMail, now) };
  }
  /** the code from the email: the address becomes the account's (and confirmed) */
  async confirmEmail(u: UserRecord, code: unknown, now = Date.now()) {
    const c = this.confirms.get(u.id);
    const bad = new AuthError('That code is wrong or has expired — ask for a new one', 400);
    if (!c || now > c.until || c.tries >= CONFIRM_TRIES) throw bad;
    c.tries++;
    if (!timingSafeEqual(sha(String(code ?? '').replace(/\s/g, '')), c.hash)) throw bad;
    this.confirms.delete(u.id);
    const other = await this.store.findByEmailKey(c.key);
    if (other && other.id !== u.id) throw new AuthError('That email already has an account', 409);
    const fresh = (await this.store.findById(u.id)) ?? u;
    const changed = !!fresh.email && fresh.emailKey !== c.key;
    const unlocks = [...(fresh.unlocks ?? []).filter((x) => x !== VERIFIED && !(changed && x.startsWith(EMAIL_MARK))), VERIFIED, ...(changed ? [`${EMAIL_MARK}${now}`] : [])];
    try {
      const rec = await this.store.update(u.id, { email: c.email, emailKey: c.key, unlocks });
      return { user: toSelf(rec ?? fresh) };
    } catch (e) {
      if (e instanceof EmailTakenError) throw new AuthError('That email already has an account', 409);
      throw e;
    }
  }

  // ── 0.9.9.9.6.6: forgot your password — a code by email ──
  private resets = new Map<string, { hash: Buffer; until: number; tries: number; sentAt: number }>();
  /** sends the code through `mail`; says nothing about whether the account exists (the caller always answers the same) */
  async forgot(login: unknown, mail: (m: ResetMail) => Promise<void>, now = Date.now()): Promise<void> {
    const rec = await this.byLogin(login);
    if (!rec?.email || rec.banned || !emailVerified(rec)) return; // (0.9.9.9.7: only to a confirmed address)
    const was = this.resets.get(rec.id);
    if (was && now - was.sentAt < RESET_GAP_MS) return; // (one a minute)
    const code = String(randomInt(0, 1_000_000)).padStart(6, '0');
    this.resets.set(rec.id, { hash: sha(code), until: now + RESET_MS, tries: 0, sentAt: now });
    const lang = (rec.unlocks ?? []).includes('plang:ru') ? 'ru' : 'en';
    await mail({ user: rec, email: rec.email, code, lang, kind: 'reset' });
  }
  async resetPassword(login: unknown, code: unknown, next: unknown, now = Date.now()) {
    const rec = await this.byLogin(login);
    const r = rec ? this.resets.get(rec.id) : undefined;
    const bad = new AuthError('That code is wrong or has expired — ask for a new one', 400);
    if (!rec || !r || now > r.until || r.tries >= RESET_TRIES) throw bad;
    r.tries++;
    const given = sha(String(code ?? '').replace(/\s/g, ''));
    if (!timingSafeEqual(given, r.hash)) throw bad;
    const p = String(next ?? '');
    if (p.length < 6 || p.length > 72) throw new AuthError('Password: at least 6 characters');
    this.resets.delete(rec.id);
    const at = Math.floor(now / 1000) * 1000;
    const unlocks = [...(rec.unlocks ?? []).filter((x) => !x.startsWith(PW_MARK)), `${PW_MARK}${at}`]; // (every device signed out)
    const fresh = await this.store.update(rec.id, { passwordHash: await hashPassword(p), unlocks });
    if (rec.banned) throw new AuthError('This account has been banned', 403);
    return { token: this.tokens.sign(rec.id, Math.max(now, at)), user: toSelf(fresh ?? rec) };
  }
  /** a login or an email */
  private async byLogin(login: unknown) {
    const s = String(login ?? '').trim().toLowerCase();
    if (!s) return null;
    if (s.includes('@')) { try { return await this.store.findByEmailKey(emailKey(cleanEmail(s))); } catch { return null; } }
    return this.store.findByUsername(s);
  }

  async login(username: unknown, password: unknown) {
    const rec = await this.store.findByUsername(String(username ?? '').trim());
    // same message for unknown user and wrong password, so usernames can't be probed
    if (!rec || !(await verifyPassword(String(password ?? ''), rec.passwordHash))) throw new AuthError('Wrong username or password', 401);
    if (rec.banned) throw new AuthError('This account has been banned', 403);
    return { token: this.tokens.sign(rec.id), user: toSelf(rec) };
  }

  /** Resolves a token to an active (not banned) user. */
  async authenticate(token: unknown): Promise<UserRecord> {
    const id = this.tokens.verify(String(token ?? ''));
    if (!id) throw new AuthError('Please log in again', 401);
    const rec = await this.store.findById(id);
    if (!rec) throw new AuthError('Please log in again', 401);
    if (rec.banned) throw new AuthError('This account has been banned', 403);
    // 0.9.9.9.6.5: a password change signs out every other device (their tokens are older than the change)
    const changed = passwordChangedAt(rec);
    if (changed && (this.tokens.issuedAt(String(token)) ?? 0) < changed) throw new AuthError('Your password was changed — log in again', 401);
    return rec;
  }

  /** 0.9.9.9.6.5: change your password (the current one first); every other device is signed out */
  async changePassword(u: UserRecord, current: unknown, next: unknown) {
    const p = String(next ?? '');
    if (!(await verifyPassword(String(current ?? ''), u.passwordHash))) throw new AuthError('Your current password is wrong', 403);
    if (p.length < 6 || p.length > 72) throw new AuthError('Password: at least 6 characters');
    const at = Math.floor(Date.now() / 1000) * 1000; // (tokens carry whole milliseconds; the new one is issued at or after this)
    const unlocks = [...(u.unlocks ?? []).filter((x) => !x.startsWith(PW_MARK)), `${PW_MARK}${at}`];
    await this.store.update(u.id, { passwordHash: await hashPassword(p), unlocks });
    return { token: this.tokens.sign(u.id, Math.max(Date.now(), at)) };
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
    return (await this.store.list()).map((u) => ({ ...toPublic(u), email: u.email ?? null, banned: u.banned, createdAt: u.createdAt, xp: u.xp, crit: dailyCrit(u.critCount, u.critExpires), loginDay: u.loginDay ?? null }));
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
