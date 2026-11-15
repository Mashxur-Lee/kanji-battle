/**
 * 0.9.9.9.6.6: every account has an email — to get back in when the password is forgotten, and one account per
 * person. Nothing is sent to it but a password-reset code, and other players never see it.
 *
 * The "key" is the same mailbox written any way: lower case, and for Gmail without dots or a +tag
 * (j.doe+2@gmail.com and jdoe@gmail.com reach the same inbox, so they are one account).
 */
const EMAIL_RE = /^[a-z0-9._%+-]{1,64}@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,24}$/;
const GMAIL = new Set(['gmail.com', 'googlemail.com']);
/** throwaway inboxes — made in a second, gone in ten minutes: not for an account */
const DISPOSABLE = new Set([
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.net', 'sharklasers.com', 'grr.la', '10minutemail.com', '10minutemail.net',
  'temp-mail.org', 'tempmail.com', 'tempmail.net', 'tempmailo.com', 'temp-mail.io', 'yopmail.com', 'yopmail.net', 'trashmail.com',
  'getnada.com', 'nada.email', 'dispostable.com', 'maildrop.cc', 'mohmal.com', 'throwawaymail.com', 'fakeinbox.com', 'mintemail.com',
  'emailondeck.com', 'spamgourmet.com', 'mailnesia.com', 'tempail.com', 'moakt.com', 'burnermail.io', 'mail.tm', 'tmpmail.org',
  'minuteinbox.com', 'mytemp.email', 'emailfake.com', 'inboxkitten.com', 'trash-mail.com', 'discard.email', 'tempr.email',
]);

export class EmailError extends Error {}

/** the email as it is kept (trimmed, lower case) — or an error to show */
export function cleanEmail(raw: unknown): string {
  const e = String(raw ?? '').trim().toLowerCase();
  if (!e) throw new EmailError('Enter your email');
  if (e.length > 254 || !EMAIL_RE.test(e) || e.includes('..')) throw new EmailError('That email doesn\'t look right');
  const domain = e.split('@')[1];
  if (DISPOSABLE.has(domain)) throw new EmailError('Please use your own email, not a temporary one');
  return e;
}

/** the mailbox behind it: one account per key */
export function emailKey(email: string): string {
  const [local, domain] = email.toLowerCase().split('@');
  if (GMAIL.has(domain)) return `${local.split('+')[0].replace(/\./g, '')}@gmail.com`;
  return `${local.split('+')[0]}@${domain}`;
}

/** for the player's own screens: "fr•••••@gmail.com" */
export function maskEmail(email: string | null | undefined): string | null {
  if (!email) return null;
  const [local, domain] = email.split('@');
  return `${local.slice(0, 2)}${'•'.repeat(Math.max(3, Math.min(8, local.length - 2)))}@${domain}`;
}
