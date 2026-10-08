import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

/**
 * Stateless login tokens: "<userId>.<expiresAtMs>.<hmac>". Signed with AUTH_SECRET.
 * Without AUTH_SECRET a random secret is used, which logs everyone out on each server restart.
 */
export class TokenSigner {
  private readonly secret: Buffer;
  readonly ephemeral: boolean;

  constructor(secret = process.env.AUTH_SECRET, private readonly ttlMs = 30 * 24 * 3600_000) {
    this.ephemeral = !secret;
    this.secret = secret ? Buffer.from(secret) : randomBytes(32);
  }

  sign(userId: string, now = Date.now()): string {
    const body = `${userId}.${now + this.ttlMs}`;
    return `${body}.${this.mac(body)}`;
  }

  /** Returns the user id, or null if the token is malformed, forged or expired. */
  verify(token: string, now = Date.now()): string | null {
    const parts = String(token).split('.');
    if (parts.length !== 3) return null;
    const [userId, exp, sig] = parts;
    const expected = Buffer.from(this.mac(`${userId}.${exp}`));
    const given = Buffer.from(sig);
    if (given.length !== expected.length || !timingSafeEqual(given, expected)) return null;
    if (!(Number(exp) > now)) return null;
    return userId;
  }

  private mac(s: string) { return createHmac('sha256', this.secret).update(s).digest('base64url'); }
}
