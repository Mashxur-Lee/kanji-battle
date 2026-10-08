import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';

// scrypt from Node's standard library: memory-hard, salted, no extra dependency.
const KEYLEN = 64;
const scryptAsync = (pw: string, salt: Buffer) =>
  new Promise<Buffer>((res, rej) => scrypt(pw, salt, KEYLEN, { N: 16384, r: 8, p: 1 }, (e, k) => (e ? rej(e) : res(k))));

/** Returns "scrypt$<salt b64>$<hash b64>". */
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const key = await scryptAsync(password, salt);
  return `scrypt$${salt.toString('base64')}$${key.toString('base64')}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [algo, saltB64, hashB64] = stored.split('$');
  if (algo !== 'scrypt' || !saltB64 || !hashB64) return false;
  const expected = Buffer.from(hashB64, 'base64');
  const key = await scryptAsync(password, Buffer.from(saltB64, 'base64'));
  return key.length === expected.length && timingSafeEqual(key, expected);
}
