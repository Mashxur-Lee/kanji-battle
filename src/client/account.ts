// 0.9.9.9.6.6: your account's email — given when you register, added once by older accounts — and "Forgot
// password?": a 6-digit code by email, then a new password. Nobody else ever sees your email.
import { api, setToken } from './api';
import type { PublicUser } from '../shared/protocol';
import { tr } from './i18n';

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}
function field(label: string, type: string, ac: AutoFill, opts: { max?: number; mode?: string } = {}) {
  const l = el('label', 'pw-field');
  const i = el('input');
  i.type = type; i.autocomplete = ac; i.required = true; i.maxLength = opts.max ?? 254;
  if (opts.mode) i.inputMode = opts.mode;
  l.append(tr(label), i);
  return { l, i };
}
function dialog(cls: string, closable = true) {
  const d = el('dialog', `friend-dialog pw-dialog ${cls}`);
  const f = el('form');
  d.append(f);
  d.addEventListener('close', () => d.remove());
  if (!closable) d.addEventListener('cancel', (e) => e.preventDefault()); // (Esc can't skip it)
  document.body.append(d);
  return { d, f };
}
const msgLine = () => { const m = el('p', 'hint pw-msg'); m.setAttribute('role', 'status'); return m; };
const err = (e: unknown) => (e instanceof Error ? e.message : tr('Something went wrong'));

/**
 * Add or change your email (your password first). `required`: an older account without one — it can't be
 * skipped, only "Log out"; `onDone` gets you back with the email masked.
 */
export function emailDialog(opts: { required: boolean; current?: string | null; onDone: (u: PublicUser) => void; onLogout?: () => void }) {
  const { d, f } = dialog('email-dialog', !opts.required);
  const h3 = el('h3', '', tr(opts.required ? 'Add your email' : opts.current ? 'Change your email' : 'Add your email'));
  const why = el('p', 'hint', tr('Every account has an email now: it is how you get back in if you forget your password, and one account per person. We send nothing else, and nobody else sees it.'));
  const now = opts.current ? el('p', 'hint em-now', `${tr('Now:')} ${opts.current}`) : null;
  const mail = field('Email', 'email', 'email', { mode: 'email' });
  const pass = field('Your password', 'password', 'current-password', { max: 72 });
  const msg = msgLine();
  const row = el('div', 'fb-actions');
  const ok = el('button', 'big', tr('Save'));
  ok.type = 'submit';
  if (opts.required) {
    const out = el('button', 'pill', tr('Log out'));
    out.type = 'button';
    out.onclick = () => { d.close(); opts.onLogout?.(); };
    row.append(out, ok);
  } else {
    const cancel = el('button', 'pill', tr('Cancel'));
    cancel.type = 'button'; cancel.onclick = () => d.close();
    row.append(cancel, ok);
  }
  f.append(h3, why, ...(now ? [now] : []), mail.l, pass.l, msg, row);
  f.onsubmit = async (e) => {
    e.preventDefault();
    ok.disabled = true; msg.textContent = '';
    try {
      const r = await api.setEmail(mail.i.value.trim(), pass.i.value);
      d.close();
      opts.onDone(r.user);
    } catch (x) { msg.textContent = err(x); ok.disabled = false; }
  };
  d.showModal();
  mail.i.focus();
}

/** "Forgot password?": your login or email → a code by email → a new password (and you're in) */
export function forgotDialog(prefill: string, onSignedIn: (token: string, u: PublicUser) => void) {
  const { d, f } = dialog('forgot-dialog');
  const h3 = el('h3', '', tr('Forgot your password?'));
  const step1 = el('div', 'fg-step');
  const who = field('Your login or email', 'text', 'username', { max: 254 });
  who.i.value = prefill;
  step1.append(el('p', 'hint', tr('We send a 6-digit code to the email of your account.')), who.l);
  const step2 = el('div', 'fg-step');
  step2.hidden = true;
  const code = field('Code from the email', 'text', 'one-time-code', { max: 8, mode: 'numeric' });
  const p1 = field('New password', 'password', 'new-password', { max: 72 });
  const p2 = field('New password again', 'password', 'new-password', { max: 72 });
  [code.i, p1.i, p2.i].forEach((i) => { i.required = false; });
  p1.i.minLength = 6; p2.i.minLength = 6;
  const sentNote = el('p', 'hint', tr('If that account has an email, the code is on its way (check spam too). It works for 30 minutes.'));
  const again = el('button', 'link', tr('Send a new code'));
  again.type = 'button';
  step2.append(sentNote, code.l, p1.l, p2.l, again);
  const msg = msgLine();
  const row = el('div', 'fb-actions');
  const cancel = el('button', 'pill', tr('Cancel'));
  cancel.type = 'button'; cancel.onclick = () => d.close();
  const ok = el('button', 'big', tr('Send the code'));
  ok.type = 'submit';
  row.append(cancel, ok);
  f.append(h3, step1, step2, msg, row);
  const send = async () => {
    msg.textContent = '';
    ok.disabled = true;
    try {
      await api.forgotPassword(who.i.value.trim());
      step1.hidden = true; step2.hidden = false;
      who.i.required = false;
      [code.i, p1.i, p2.i].forEach((i) => { i.required = true; });
      ok.textContent = tr('Set the new password');
      code.i.focus();
    } catch (x) { msg.textContent = err(x); }
    ok.disabled = false;
  };
  again.onclick = () => { step1.hidden = false; step2.hidden = true; ok.textContent = tr('Send the code'); [code.i, p1.i, p2.i].forEach((i) => { i.required = false; }); who.i.required = true; who.i.focus(); };
  f.onsubmit = async (e) => {
    e.preventDefault();
    if (!step1.hidden) { await send(); return; }
    if (p1.i.value !== p2.i.value) { msg.textContent = tr('The new passwords don’t match'); return; }
    ok.disabled = true; msg.textContent = '';
    try {
      const r = await api.resetPassword(who.i.value.trim(), code.i.value.trim(), p1.i.value);
      setToken(r.token);
      d.close();
      onSignedIn(r.token, r.user);
    } catch (x) { msg.textContent = err(x); ok.disabled = false; }
  };
  d.showModal();
  (prefill ? ok : who.i).focus();
}
