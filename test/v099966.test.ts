import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { AuthService, toPublic, type ResetMail } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { cleanEmail, emailKey, maskEmail } from '../src/server/auth/email';
import { smtpSend } from '../src/server/mail';
import { hashPassword } from '../src/server/auth/passwords';
import { EventEmitter } from 'node:events';

test('0.9.9.9.6.6 emails: cleaned, one account per mailbox (Gmail dots and +tags), no throwaway inboxes', () => {
  assert.equal(cleanEmail('  John.Doe@Gmail.com '), 'john.doe@gmail.com');
  assert.equal(emailKey('j.o.h.n.doe+kanji@gmail.com'), 'johndoe@gmail.com');
  assert.equal(emailKey('johndoe@googlemail.com'), 'johndoe@gmail.com');
  assert.equal(emailKey('a.b+x@yandex.ru'), 'a.b@yandex.ru', 'dots count outside Gmail');
  assert.throws(() => cleanEmail(''), /Enter your email/);
  assert.throws(() => cleanEmail('not-an-email'), /doesn't look right/);
  assert.throws(() => cleanEmail('a..b@gmail.com'), /doesn't look right/);
  assert.throws(() => cleanEmail('x@mailinator.com'), /temporary/);
  assert.equal(maskEmail('frenzyy@gmail.com'), 'fr•••••@gmail.com');
});

test('0.9.9.9.6.6 sign up needs an email; the same mailbox can\'t make a second account; others never see it', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  await assert.rejects(auth.register('noemail', 'secret12'), /Enter your email/);
  const a = await auth.register('first', 'secret12', 'Jo.Doe@gmail.com');
  assert.equal(a.user.email, 'jo••••@gmail.com', 'you see it masked');
  await assert.rejects(auth.register('second', 'secret12', 'jodoe+alt@gmail.com'), /already has an account/);
  assert.equal(await store.findByUsername('second'), null);
  const rec = (await store.findByUsername('first'))!;
  assert.equal(rec.email, 'jo.doe@gmail.com');
  assert.equal('email' in toPublic(rec), false, 'what other players get has no email');
});

test('0.9.9.9.6.6 an older account adds its email (with its password); a taken mailbox is refused', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  const old = await store.create({ username: 'oldtimer', passwordHash: await hashPassword('secret12'), role: 'user' });
  await auth.register('owner', 'secret12', 'taken@mail.ru');
  await assert.rejects(auth.setEmail(old, 'me@mail.ru', 'wrong'), /password is wrong/);
  await assert.rejects(auth.setEmail(old, 'taken+2@mail.ru', 'secret12'), /already has an account/);
  const u = await auth.setEmail(old, 'Me@Mail.ru', 'secret12');
  assert.equal(u.email, 'me•••@mail.ru');
  assert.equal((await store.findById(old.id))!.emailKey, 'me@mail.ru');
});

test('0.9.9.9.6.6 forgot password: a code by email (by login or email), 30 minutes, 5 tries, then every device is signed out', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  const { token: oldTok } = await auth.register('forgetful', 'secret12', 'forget@gmail.com');
  const sent: ResetMail[] = [];
  const mail = async (m: ResetMail) => { sent.push(m); };
  await auth.forgot('nobody', mail);
  assert.equal(sent.length, 0, 'no such account: nothing sent (and the answer is the same)');
  const t0 = Date.now() + 2000;
  await auth.forgot('f.o.r.g.e.t@gmail.com', mail, t0);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].email, 'forget@gmail.com');
  assert.match(sent[0].code, /^\d{6}$/);
  await auth.forgot('forgetful', mail, t0 + 10_000);
  assert.equal(sent.length, 1, 'one code a minute');
  await assert.rejects(auth.resetPassword('forgetful', '000000' === sent[0].code ? '111111' : '000000', 'newpass12', t0 + 20_000), /wrong or has expired/);
  await assert.rejects(auth.resetPassword('forgetful', sent[0].code, 'newpass12', t0 + 31 * 60_000), /wrong or has expired/, 'too late');
  const r = await auth.resetPassword('forgetful', sent[0].code, 'newpass12', t0 + 60_000);
  assert.ok(r.token);
  await assert.rejects(auth.resetPassword('forgetful', sent[0].code, 'again123', t0 + 61_000), /wrong or has expired/, 'a code works once');
  await assert.rejects(auth.authenticate(oldTok), /password was changed/);
  assert.ok((await auth.login('forgetful', 'newpass12')).token);
});

test('0.9.9.9.6.6 reset codes: five wrong tries and the code is gone', async () => {
  const auth = new AuthService(new MemoryStore(), new TokenSigner('s'));
  await auth.register('guesser', 'secret12', 'guess@gmail.com');
  let code = '';
  await auth.forgot('guesser', async (m) => { code = m.code; });
  const wrong = code === '123456' ? '654321' : '123456';
  for (let i = 0; i < 5; i++) await assert.rejects(auth.resetPassword('guesser', wrong, 'newpass12'));
  await assert.rejects(auth.resetPassword('guesser', code, 'newpass12'), /wrong or has expired/);
});

test('0.9.9.9.6.6 SMTP: the conversation (EHLO, AUTH LOGIN, MAIL, RCPT, DATA) with a Russian subject', async () => {
  const said: string[] = [];
  class FakeSock extends EventEmitter {
    setEncoding() {} setTimeout() {} end() {} destroy() {}
    write(s: string) {
      said.push(s);
      const reply = s.startsWith('EHLO') ? '250-smtp.test\r\n250 AUTH LOGIN\r\n' : s.startsWith('AUTH') ? '334 VXNlcm5hbWU6\r\n' : said.length === 3 ? '334 UGFzc3dvcmQ6\r\n' : said.length === 4 ? '235 ok\r\n' : s.startsWith('DATA') ? '354 go\r\n' : s.startsWith('QUIT') ? '221 bye\r\n' : '250 ok\r\n';
      setImmediate(() => this.emit('data', reply));
      return true;
    }
  }
  const sock = new FakeSock();
  setImmediate(() => sock.emit('data', '220 smtp.test ready\r\n'));
  await smtpSend({ host: 'smtp.test', port: 465, user: 'me@test.dev', pass: 'pw', from: 'Kanji Wizards <me@test.dev>' }, 'you@test.dev', 'Код: 123456', 'Привет', () => sock as never);
  assert.equal(said[0], 'EHLO kanji-wizards\r\n');
  assert.equal(said[2], Buffer.from('me@test.dev').toString('base64') + '\r\n');
  assert.ok(said.includes('MAIL FROM:<me@test.dev>\r\n') && said.includes('RCPT TO:<you@test.dev>\r\n'));
  const msg = said.find((x) => x.includes('Subject:'))!;
  assert.match(msg, /Subject: =\?UTF-8\?B\?/);
  assert.ok(msg.endsWith('\r\n.\r\n'));
  await assert.rejects(smtpSend({ host: 'h', port: 465, user: 'u', pass: 'p', from: 'f' }, 'a@b.c\r\nBcc: x', 's', 't', () => sock as never), /Bad header/);
});

import { DailyService } from '../src/server/study/DailyService';
test('0.9.9.9.6.6 Daily challenge: you race the best of your friends who played today\'s ten in your league', async () => {
  const store = new MemoryStore();
  const daily = new DailyService(store);
  const me = await store.create({ username: 'racer', passwordHash: 'x', role: 'user' } as never);
  const a = await store.create({ username: 'slowpoke', passwordHash: 'x', role: 'user' } as never);
  const b = await store.create({ username: 'speedy', passwordHash: 'x', role: 'user' } as never);
  const c = await store.create({ username: 'stranger', passwordHash: 'x', role: 'user' } as never);
  for (const f of [a, b]) { await store.requestFriend(me.id, f.id); await store.acceptFriend(f.id, me.id); }
  assert.equal((await daily.overview(me)).ghost, null, 'nobody played yet');
  const key = daily.keyFor(me);
  await store.saveDaily(key, a.id, 8, 90_000, '1111111100');
  await store.saveDaily(key, b.id, 8, 60_000, '1101111110');
  await store.saveDaily(key, c.id, 10, 30_000, '1111111111');
  const g = (await daily.overview(me)).ghost!;
  assert.equal(g.name, 'speedy', 'the same score, faster — and not the stranger who did better');
  assert.equal(g.marks, '1101111110');
});
