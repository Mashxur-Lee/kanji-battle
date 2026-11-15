/**
 * 0.9.9.9.6.6: sending an email (only ever a password-reset code). Two ways, from the environment:
 *
 *   SMTP_URL=smtps://user:password@smtp.gmail.com:465   any mail server over TLS (port 465) — e.g. a Gmail
 *                                                      account with an app password
 *   RESEND_API_KEY=re_…                                Resend's HTTP API (resend.com)
 *   MAIL_FROM="Kanji Wizards <you@example.com>"        the sender (default: the SMTP user)
 *
 * Neither set: mail is off, and the reset code goes to the admin's inbox instead (router.ts).
 * No package needed: SMTP is a short conversation over node:tls.
 */
import { connect, type TLSSocket } from 'node:tls';
import { randomBytes } from 'node:crypto';

export interface Mailer { readonly enabled: boolean; readonly how: string; send(to: string, subject: string, text: string): Promise<void> }

const b64 = (s: string) => Buffer.from(s, 'utf8').toString('base64');
/** a header with non-ASCII text in it (Russian subjects) */
const word = (s: string) => (/^[\x20-\x7e]*$/.test(s) ? s : `=?UTF-8?B?${b64(s)}?=`);

export function createMailer(env: NodeJS.ProcessEnv = process.env): Mailer {
  if (env.RESEND_API_KEY) {
    const from = env.MAIL_FROM || 'Kanji Wizards <onboarding@resend.dev>';
    return {
      enabled: true, how: 'resend',
      async send(to, subject, text) {
        const r = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ from, to: [to], subject, text }),
          signal: AbortSignal.timeout(15_000),
        });
        if (!r.ok) throw new Error(`Resend refused the email (${r.status}): ${(await r.text()).slice(0, 200)}`);
      },
    };
  }
  if (env.SMTP_URL) {
    const u = new URL(env.SMTP_URL);
    if (u.protocol !== 'smtps:') throw new Error('SMTP_URL must start with smtps:// (TLS, usually port 465)');
    const user = decodeURIComponent(u.username), pass = decodeURIComponent(u.password);
    const from = env.MAIL_FROM || `Kanji Wizards <${user}>`;
    return { enabled: true, how: `smtp ${u.hostname}`, send: (to, subject, text) => smtpSend({ host: u.hostname, port: Number(u.port || 465), user, pass, from }, to, subject, text) };
  }
  return { enabled: false, how: 'off', async send() { throw new Error('Email is not set up on this server'); } };
}

interface SmtpOpts { host: string; port: number; user: string; pass: string; from: string }

/** one email over SMTP with implicit TLS: EHLO, AUTH LOGIN, MAIL FROM, RCPT TO, DATA, QUIT */
export function smtpSend(o: SmtpOpts, to: string, subject: string, text: string, open: (o: SmtpOpts) => TLSSocket = (x) => connect({ host: x.host, port: x.port, servername: x.host })): Promise<void> {
  const addr = (s: string) => /<([^>]+)>/.exec(s)?.[1] ?? s;
  if (/[\r\n]/.test(to + subject + o.from)) return Promise.reject(new Error('Bad header'));
  return new Promise((resolve, reject) => {
    const sock = open(o);
    sock.setEncoding('utf8');
    sock.setTimeout(20_000, () => { sock.destroy(); reject(new Error('The mail server did not answer')); });
    let buf = '';
    const waiting: Array<(code: number, text: string) => void> = [];
    sock.on('data', (chunk: string) => {
      buf += chunk;
      // a reply is done on a line "250 …" (a space after the code); "250-…" lines continue it
      let m: RegExpExecArray | null;
      while ((m = /^(\d{3}) [^\r\n]*\r?\n/m.exec(buf))) {
        const end = m.index + m[0].length;
        const reply = buf.slice(0, end);
        buf = buf.slice(end);
        waiting.shift()?.(Number(m[1]), reply.trim());
      }
    });
    sock.on('error', (e) => reject(e));
    const reply = () => new Promise<{ code: number; text: string }>((ok) => waiting.push((code, t) => ok({ code, text: t })));
    const say = async (line: string, want: number) => {
      const r = reply();
      sock.write(`${line}\r\n`);
      const { code, text: t } = await r;
      if (code !== want) throw new Error(`The mail server said: ${t.slice(0, 160)}`);
    };
    (async () => {
      const hello = await reply();
      if (hello.code !== 220) throw new Error(`The mail server said: ${hello.text.slice(0, 160)}`);
      await say('EHLO kanji-wizards', 250);
      await say('AUTH LOGIN', 334);
      await say(b64(o.user), 334);
      await say(b64(o.pass), 235);
      await say(`MAIL FROM:<${addr(o.from)}>`, 250);
      await say(`RCPT TO:<${to}>`, 250);
      await say('DATA', 354);
      const id = `<${randomBytes(12).toString('hex')}@${o.host}>`;
      const body = b64(text).replace(/.{1,76}/g, '$&\r\n');
      const msg = [
        `From: ${o.from}`, `To: <${to}>`, `Subject: ${word(subject)}`, `Date: ${new Date().toUTCString()}`, `Message-ID: ${id}`,
        'MIME-Version: 1.0', 'Content-Type: text/plain; charset=utf-8', 'Content-Transfer-Encoding: base64', '', body,
      ].join('\r\n');
      await say(`${msg}\r\n.`, 250);
      sock.write('QUIT\r\n');
      sock.end();
      resolve();
    })().catch((e) => { sock.destroy(); reject(e); });
  });
}
