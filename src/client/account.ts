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
  const h3 = el('h3', '', tr(opts.current ? 'Change your email' : 'Add your email'));
  const why = el('p', 'hint', tr('Every account has an email now: it is how you get back in if you forget your password, and one account per person. We send nothing else, and nobody else sees it.'));
  const now = opts.current ? el('p', 'hint em-now', `${tr('Now:')} ${opts.current}`) : null;
  const mail = field('Email', 'email', 'email', { mode: 'email' });
  // (only changing an email asks for the password — and it changes at most once a week)
  const changing = !!opts.current;
  const pass = field('Your password', 'password', 'current-password', { max: 72 });
  pass.i.required = changing;
  const weekly = el('p', 'hint', tr('You can change your email once a week.'));
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
  f.append(h3, why, ...(now ? [now] : []), mail.l, ...(changing ? [pass.l, weekly] : []), msg, row);
  f.onsubmit = async (e) => {
    e.preventDefault();
    ok.disabled = true; msg.textContent = '';
    try {
      const r = await api.setEmail(mail.i.value.trim(), pass.i.value);
      d.close();
      // 0.9.9.9.7: a code went to it — the email is yours once you enter it
      if (r.pending) codeDialog({ to: r.pending, onDone: opts.onDone });
      else opts.onDone(r.user);
    } catch (x) { msg.textContent = err(x); ok.disabled = false; }
  };
  d.showModal();
  mail.i.focus();
}

/**
 * 0.9.9.9.6.9: a guest keeps what they've done — a login, a password and an email turn the guest into an account
 * (same XP, spells and everything). `why`: the line on top (e.g. what needs an account).
 */
/**
 * 0.9.9.9.7: confirm an email — the 6-digit code that went to it. `to`: the address, masked; `ask`: an older email that
 * was never confirmed — the code goes out only when you press "Send me a code" (no mail to an address that may not be yours).
 */
export function codeDialog(opts: { to: string; ask?: boolean; onDone: (u: PublicUser) => void; onChange?: () => void }) {
  const { d, f } = dialog('code-dialog');
  const h3 = el('h3', '', tr('Confirm your email'));
  const line = el('p', 'hint');
  const setLine = (sent: boolean) => { line.textContent = sent ? `${tr('We sent a 6-digit code to')} ${opts.to}. ${tr('Enter it here - it works for 15 minutes.')}` : `${tr('Your email')} ${opts.to} ${tr('is not confirmed yet. Confirm it, so a password reset can reach you.')}`; };
  const code = el('input', 'code-input');
  code.inputMode = 'numeric'; code.autocomplete = 'one-time-code'; code.maxLength = 6; code.pattern = '[0-9]{6}'; code.placeholder = '000000';
  code.required = true;
  const msg = msgLine();
  const again = el('button', 'pill', tr('Send it again'));
  again.type = 'button';
  const change = el('button', 'pill', tr('A different email'));
  change.type = 'button';
  const later = el('button', 'pill', tr('Later'));
  later.type = 'button'; later.onclick = () => d.close();
  const ok = el('button', 'big', tr('Confirm'));
  ok.type = 'submit';
  const send = el('button', 'big', tr('Send me a code'));
  send.type = 'button';
  const extra = el('div', 'code-extra');
  // 0.9.9.9.7.4: what "Later" means, said before it's pressed — the email is the account's only once it is confirmed,
  // so until then "Forgot password?" has nowhere to send a code
  const laterNote = el('p', 'hint code-later', tr('Later: you can play now, but until your email is confirmed “Forgot password?” can’t send you a code - a forgotten password couldn’t be recovered.'));
  const row = el('div', 'fb-actions');
  // "Send it again": once a minute
  let wait = 0, timer = 0;
  const tick = () => { again.disabled = wait > 0; again.textContent = wait > 0 ? `${tr('Send it again')} (${wait})` : tr('Send it again'); if (wait-- > 0) timer = window.setTimeout(tick, 1000); };
  const sending = async () => {
    msg.textContent = '';
    try { const r = await api.resendEmail(); opts.to = r.pending; showInput(); wait = 60; tick(); }
    catch (x) { msg.textContent = err(x); }
  };
  const showInput = () => { setLine(true); code.hidden = false; send.hidden = true; ok.hidden = false; again.hidden = false; code.focus(); };
  again.onclick = () => void sending();
  send.onclick = () => void sending();
  change.onclick = () => { d.close(); opts.onChange?.(); };
  if (!opts.onChange) change.hidden = true;
  extra.append(again, change);
  row.append(later, send, ok);
  f.append(h3, line, code, msg, extra, laterNote, row);
  if (opts.ask) { setLine(false); code.hidden = true; ok.hidden = true; again.hidden = true; }
  else { setLine(true); send.hidden = true; wait = 60; tick(); }
  code.addEventListener('input', () => { code.value = code.value.replace(/\D/g, '').slice(0, 6); if (code.value.length === 6) f.requestSubmit(); });
  f.onsubmit = async (e) => {
    e.preventDefault();
    if (code.hidden) return;
    ok.disabled = true; msg.textContent = '';
    try {
      const r = await api.confirmEmail(code.value);
      d.close();
      opts.onDone(r.user);
    } catch (x) { msg.textContent = err(x); ok.disabled = false; code.select(); }
  };
  d.addEventListener('close', () => clearTimeout(timer));
  d.showModal();
  if (!opts.ask) code.focus();
}

/** 0.9.9.9.7.4: report a player to the team — why, a few words; the message too, when reporting one */
export function reportDialog(target: { id: string; name: string }, onSent: () => void, messageId?: string) {
  const { d, f } = dialog('report-dialog');
  const h3 = el('h3', '', `${tr('Report')} ${target.name}`);
  const hint = el('p', 'hint', tr('The team reads every report. They aren’t told who reported them.'));
  const reasons: Array<[string, string]> = [['rude', 'Rude or hurtful'], ['spam', 'Spam'], ['cheating', 'Cheating'], ['name', 'Inappropriate name or picture'], ['other', 'Something else']];
  const list = el('div', 'report-reasons');
  for (const [v, label] of reasons) {
    const l = el('label', 'chip');
    const i = el('input'); i.type = 'radio'; i.name = 'reportWhy'; i.value = v; i.required = true;
    l.append(i, document.createTextNode(` ${tr(label)}`));
    list.append(l);
  }
  // (0.9.9.9.9.2: the picked reason lights up — the chips hide their radio button, so a tap seemed to do nothing)
  list.onchange = () => { for (const c of list.querySelectorAll('label')) c.classList.toggle('on', !!c.querySelector('input')?.checked); };
  const more = el('textarea', 'report-text');
  more.maxLength = 500; more.rows = 3; more.placeholder = tr('Anything the team should know (optional)');
  const msg = msgLine();
  const row = el('div', 'fb-actions');
  const cancel = el('button', 'pill', tr('Cancel'));
  cancel.type = 'button'; cancel.onclick = () => d.close();
  const ok = el('button', 'big', tr('Send report'));
  ok.type = 'submit';
  row.append(cancel, ok);
  f.append(h3, hint, list, more, msg, row);
  f.onsubmit = async (e) => {
    e.preventDefault();
    const why = f.querySelector<HTMLInputElement>('input[name="reportWhy"]:checked')?.value;
    if (!why) return;
    ok.disabled = true; msg.textContent = '';
    try { await api.report(target.id, why, more.value, messageId); d.close(); onSent(); }
    catch (x) { msg.textContent = err(x); ok.disabled = false; }
  };
  d.showModal();
}

export function claimDialog(opts: { why?: string; onDone: (token: string, u: PublicUser) => void }) {
  const { d, f } = dialog('claim-dialog');
  const h3 = el('h3', '', tr('Save your progress'));
  const why = el('p', 'hint', opts.why ?? tr('Make this your account: everything you have done so far stays - your level, spells and wizard. Then you can sign in on any device, message friends and get back in if you forget your password.'));
  const login = field('Login', 'text', 'username', { max: 32 });
  login.i.minLength = 3; login.i.pattern = '[A-Za-z0-9_.\\-]{3,32}';
  const pass = field('Password', 'password', 'new-password', { max: 72 });
  pass.i.minLength = 8; // (0.9.9.9.8: 8)
  const mail = field('Email', 'email', 'email', { mode: 'email' });
  const note = el('p', 'hint', tr('Your email is only for getting back in. We send nothing else, and nobody else sees it.'));
  const msg = msgLine();
  const row = el('div', 'fb-actions');
  const cancel = el('button', 'pill', tr('Later'));
  cancel.type = 'button'; cancel.onclick = () => d.close();
  const ok = el('button', 'big', tr('Save'));
  ok.type = 'submit';
  row.append(cancel, ok);
  f.append(h3, why, login.l, pass.l, mail.l, note, msg, row);
  f.onsubmit = async (e) => {
    e.preventDefault();
    ok.disabled = true; msg.textContent = '';
    try {
      const r = await api.claim(login.i.value.trim(), pass.i.value, mail.i.value.trim());
      setToken(r.token);
      d.close();
      opts.onDone(r.token, r.user);
      if (r.pending) codeDialog({ to: r.pending, onDone: (u) => opts.onDone(r.token, u) }); // (0.9.9.9.7: its code)
    } catch (x) { msg.textContent = err(x); ok.disabled = false; }
  };
  d.showModal();
  login.i.focus();
}

/** "Forgot password?": your login or email → a code by email → a new password (and you're in) */
export function forgotDialog(prefill: string, onSignedIn: (token: string, u: PublicUser) => void) {
  const { d, f } = dialog('forgot-dialog');
  const h3 = el('h3', '', tr('Forgot your password?'));
  const step1 = el('div', 'fg-step');
  const who = field('Your login or email', 'text', 'username', { max: 254 });
  who.i.value = prefill;
  step1.append(el('p', 'hint', tr('We send a 6-digit code to the email of your account.')), el('p', 'hint', tr('(Only to a confirmed email - one you entered the code for.)')), who.l); // (0.9.9.9.7.4)
  const step2 = el('div', 'fg-step');
  step2.hidden = true;
  const code = field('Code from the email', 'text', 'one-time-code', { max: 8, mode: 'numeric' });
  const p1 = field('New password', 'password', 'new-password', { max: 72 });
  const p2 = field('New password again', 'password', 'new-password', { max: 72 });
  [code.i, p1.i, p2.i].forEach((i) => { i.required = false; });
  p1.i.minLength = 8; p2.i.minLength = 8;
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
