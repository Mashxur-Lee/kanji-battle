// Closed-beta support: the game reports its own errors to the admin's Inbox, players can send bug reports
// and suggestions (Menu → Feedback), "About" shows the credits and the privacy note, and the menu shows how
// many players are online.

import { api, getToken } from './api';
import { VERSION } from '../shared/version';
import * as ui from './ui';

const $ = ui.$;
const device = () => `${navigator.userAgent} · ${innerWidth}×${innerHeight} · zoom ${getComputedStyle(document.documentElement).getPropertyValue('--ui-zoom') || '1'}`;

// ── errors ──────────────────────────────────────────────────────────────────
let sent = 0;
const seen = new Set<string>();
function report(message: string, stack = '') {
  if (sent >= 8 || seen.has(message)) return; // a few per page load, each once
  seen.add(message);
  sent++;
  const details = `v${VERSION} · screen ${ui.currentScreen() ?? '?'}\n${device()}\n${stack}`.slice(0, 2000);
  void fetch('/api/errors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}) },
    body: JSON.stringify({ message, details }),
    keepalive: true,
  }).catch(() => {});
}
addEventListener('error', (e) => {
  if (!e.message || /ResizeObserver loop/.test(e.message)) return; // harmless browser noise
  report(e.message, e.error?.stack ?? `${e.filename}:${e.lineno}:${e.colno}`);
});
addEventListener('unhandledrejection', (e) => {
  const r = e.reason as { message?: string; stack?: string } | undefined;
  const msg = r?.message ?? String(e.reason);
  if (/Failed to fetch|NetworkError|Load failed/.test(msg)) return; // offline for a moment, not a bug
  report(msg, r?.stack ?? '');
});

// ── feedback ────────────────────────────────────────────────────────────────
export function openFeedback(kind: 'bug' | 'suggestion' = 'bug') {
  const d = $<HTMLDialogElement>('feedbackDialog');
  for (const i of d.querySelectorAll<HTMLInputElement>('input[name="fbKind"]')) { i.checked = i.value === kind; i.closest('label')?.classList.toggle('on', i.checked); }
  $('fbMsg').textContent = '';
  $<HTMLButtonElement>('fbSend').disabled = false;
  d.showModal();
  setTimeout(() => $<HTMLTextAreaElement>('fbText').focus(), 30);
}
for (const i of document.querySelectorAll<HTMLInputElement>('input[name="fbKind"]')) {
  i.addEventListener('change', () => { for (const x of document.querySelectorAll<HTMLInputElement>('input[name="fbKind"]')) x.closest('label')?.classList.toggle('on', x.checked); });
}
$('feedbackForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const kind = document.querySelector<HTMLInputElement>('input[name="fbKind"]:checked')?.value === 'suggestion' ? 'suggestion' : 'bug';
  const text = $<HTMLTextAreaElement>('fbText').value.trim();
  if (text.length < 3) { $('fbMsg').textContent = 'Write a few words first.'; return; }
  $<HTMLButtonElement>('fbSend').disabled = true;
  try {
    await api.feedback(kind, text, `v${VERSION} · ${device()}`);
    $<HTMLTextAreaElement>('fbText').value = '';
    $<HTMLDialogElement>('feedbackDialog').close();
    ui.toast(kind === 'bug' ? 'Bug report sent — thank you!' : 'Suggestion sent — thank you!', 4000);
  } catch (err) {
    $('fbMsg').textContent = (err as Error).message;
    $<HTMLButtonElement>('fbSend').disabled = false;
  }
});
$('fbCancel').onclick = () => $<HTMLDialogElement>('feedbackDialog').close();
$('feedbackBtn').onclick = () => openFeedback();

// ── about ───────────────────────────────────────────────────────────────────
$('aboutBtn').onclick = () => { $('aboutVersion').textContent = `v${VERSION}`; $<HTMLDialogElement>('aboutDialog').showModal(); };

// ── players online (menu) ───────────────────────────────────────────────────
export async function refreshOnline() {
  try {
    const { online } = await api.online();
    const pill = $('onlineCount');
    pill.hidden = online < 1;
    pill.textContent = `${online} online`;
  } catch { /* offline */ }
}
setInterval(() => { if (getToken() && ['menu', 'queue'].includes(ui.currentScreen() ?? '')) void refreshOnline(); }, 30_000);
