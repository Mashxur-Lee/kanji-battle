import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { AuthService, emailVerified, type ResetMail } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { hashPassword } from '../src/server/auth/passwords';
import { MemoryStore } from '../src/server/db/Store';
import { VERSION } from '../src/shared/version';

const src = (f: string) => readFileSync(f, 'utf8');
const box = () => { const sent: ResetMail[] = []; return { sent, mail: async (m: ResetMail) => { sent.push(m); } }; };

test('0.9.9.9.7 version and patch notes', () => {
  assert.equal(VERSION, '0.9.9.9.7');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.7'/);
});

test('0.9.9.9.7 an email is the account\'s only after its code: someone else\'s address can\'t be taken (or spammed with resets)', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  const { sent, mail } = box();
  // a prankster signs up with someone else's address — it isn't theirs: no reset mail ever goes there
  const p = await auth.register('prankster', 'secret12', 'victim@gmail.com', mail);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].kind, 'confirm');
  assert.equal(p.user.email, null);
  const resets = box();
  await auth.forgot('prankster', resets.mail);
  await auth.forgot('victim@gmail.com', resets.mail);
  assert.equal(resets.sent.length, 0, 'nothing to an unconfirmed address');
  // the real owner signs up with it, confirms — it's theirs
  const owner = await auth.register('owner', 'secret12', 'victim@gmail.com', mail);
  const code = sent.at(-1)!.code;
  await assert.rejects(auth.confirmEmail(await auth.authenticate(owner.token), code === '000000' ? '111111' : '000000'), /wrong or has expired/);
  const me = await auth.confirmEmail(await auth.authenticate(owner.token), code);
  assert.equal(me.user.emailVerified, true);
  // the prankster's old code is no good now
  await assert.rejects(auth.confirmEmail(await auth.authenticate(p.token), sent[0].code), /already has an account/);
  await auth.forgot('victim@gmail.com', resets.mail);
  assert.equal(resets.sent.length, 1);
  assert.equal(resets.sent[0].kind, 'reset');
});

test('0.9.9.9.7 codes: 15 minutes, 5 tries, one a minute, and at most 3 an hour to any one mailbox', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  const { sent, mail } = box();
  const t0 = Date.now();
  const a = await store.create({ username: 'alpha', passwordHash: await hashPassword('secret12'), role: 'user' });
  await auth.setEmail(a, 'target@mail.ru', '', mail, t0);
  await assert.rejects(auth.setEmail(a, 'other@mail.ru', '', mail, t0 + 10_000), /Wait a minute/);
  assert.equal((await auth.setEmail(a, 'target@mail.ru', '', mail, t0 + 10_000)).pending, 'ta••••@mail.ru', 'the same address within a minute: no second mail');
  assert.equal(sent.length, 1);
  await assert.rejects(auth.confirmEmail(a, sent[0].code, t0 + 16 * 60_000), /wrong or has expired/, 'too late');
  // three accounts can't flood one inbox
  for (const [i, n] of ['b1', 'b2', 'b3'].entries()) {
    const u = await store.create({ username: n, passwordHash: await hashPassword('secret12'), role: 'user' });
    const r = auth.setEmail(u, 'target@mail.ru', '', mail, t0 + 120_000 + i);
    if (i < 2) await r; else await assert.rejects(r, /try again in an hour/);
  }
  // five wrong tries and the code is gone
  const c = await store.create({ username: 'gamma', passwordHash: await hashPassword('secret12'), role: 'user' });
  await auth.setEmail(c, 'g@mail.ru', '', mail, t0);
  const code = sent.at(-1)!.code, wrong = code === '123456' ? '654321' : '123456';
  for (let i = 0; i < 5; i++) await assert.rejects(auth.confirmEmail(c, wrong, t0 + 1000));
  await assert.rejects(auth.confirmEmail(c, code, t0 + 2000), /wrong or has expired/);
});

test('0.9.9.9.7 an email from before (never confirmed): "Send me a code" goes to it; confirmed, resets work again', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  const { sent, mail } = box();
  const old = await store.create({ username: 'veteran', passwordHash: await hashPassword('secret12'), role: 'user', email: 'vet@gmail.com', emailKey: 'vet@gmail.com' });
  assert.equal(emailVerified(old), false);
  await auth.forgot('veteran', mail);
  assert.equal(sent.length, 0);
  assert.equal((await auth.resendConfirm(old, mail)).pending, 've•••@gmail.com');
  const u = await auth.confirmEmail(old, sent[0].code);
  assert.equal(u.user.emailVerified, true);
  await auth.forgot('veteran', mail);
  assert.equal(sent.at(-1)!.kind, 'reset');
});

test('0.9.9.9.7 the client: a code box after sign-up, a new email and saving a guest; older emails are asked to confirm', () => {
  const acc = src('src/client/account.ts');
  assert.match(acc, /export function codeDialog\(/);
  assert.match(acc, /if \(r\.pending\) codeDialog\(\{ to: r\.pending, onDone: opts\.onDone \}\);/);
  const main = src('src/client/main.ts');
  assert.match(main, /if \(pending\) \{ emailAsked = true; codeDialog\(/);
  assert.match(main, /if \(user\.email && !user\.emailVerified\) \{ emailAsked = true; codeDialog\(\{ to: user\.email, ask: true/);
  const router = src('src/server/router.ts');
  assert.match(router, /url === '\/api\/me\/email\/confirm'/);
  assert.match(router, /url === '\/api\/me\/email\/resend'/);
});

test('0.9.9.9.7 the 3D arena: a hit rocks them back and a step away; the fly-in counts drawn frames, not the clock', () => {
  const a3 = src('src/client/arena3d.ts');
  assert.match(a3, /function react\(f: Fighter, from: THREE\.Vector3 \| null, pow: number\)/);
  assert.match(a3, /if \(lean > 0\) \{ m\.body\.rotation\.x -= 0\.5 \* lean;/);
  assert.match(a3, /m\.root\.position\.x = f\.hitDir\.x \* 0\.4 \* step;/);
  assert.match(a3, /react\(t, start, o\.crit \? 1\.5/);
  assert.match(a3, /if \(cine\) cine\.t \+= dt;/);
  assert.match(a3, /startCine\(\{ kind: 'intro', t: 0, dur: 3 \}\)/);
});

test('0.9.9.9.7 messages come back by themselves when the connection does', () => {
  assert.match(src('src/client/main.ts'), /if \(wasDown && user\) \{ void refreshProfile\(\); inboxReconnected\(\); \}/);
  const ib = src('src/client/inbox.ts');
  assert.match(ib, /export function inboxReconnected\(\)/);
  assert.match(ib, /if \(listRetry < 8\)/);
});
