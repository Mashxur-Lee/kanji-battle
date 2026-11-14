// 0.9.9.9.6: Messages — a small messenger. Your conversations on the left (friends, and the Kanji Wizards team:
// your Feedback lands there and the team answers there), the open one on the right (on a phone: one at a time).
// Admins also have the team's side ("Team inbox"): every player's conversation with the team, answered as the team.
// New messages come over the game's connection ('dm'); the ✉ button in the menu shows how many are unread.
import { api, type Conversation } from './api';
import type { DmView } from '../shared/protocol';
import { locale, tr } from './i18n';
import * as ui from './ui';
import * as audio from './audio';
import { mentionsMe, withMentions } from './mentions';

const $ = ui.$;
const SUPPORT = 'support';
function h(tag: string, cls = '', text?: string): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

let me = '';
let isAdmin = false;
let side: 'me' | 'support' = 'me';
let convs: Conversation[] = [];
let openId = '';
let openWith: Conversation | null = null;
let log: DmView[] = [];
let unreadMine = 0, unreadTeam = 0;
let loading = false;
const EMOJI = ['😀', '😂', '🥹', '😊', '😍', '😎', '🤔', '😅', '😭', '😡', '😴', '🤯', '👍', '👎', '👏', '🙏', '💪', '🙌', '🤝', '👋', '❤️', '🔥', '✨', '⭐', '🎉', '🏆', '⚔️', '🛡️', '🐉', '🪄', '📚', '✍️', '🧠', '🍜', '🍵', '🌸', '🗻', '⛩️', '🎌', '✅'];

export function inboxUser(id: string, admin: boolean) {
  const changed = me !== id;
  me = id; isAdmin = admin;
  $('msgSide').hidden = !admin;
  void refreshUnread();
  // 0.9.9.9.6.2: Messages opens at once — the list is fetched in the background soon after the menu is up (and the
  // last one is kept on this device), so the first open never waits on the network
  if (changed) {
    convs = []; threads.clear(); listCache.clear();
    try { const c = JSON.parse(localStorage.getItem(`kb:convs:${id}`) ?? 'null'); if (Array.isArray(c)) listCache.set('me', c); } catch { /* none */ }
    setTimeout(() => { if (me === id) void fetchList('me').catch(() => { /* the open tries again */ }); }, 2500);
  }
}
/** the last list of each side, and the last messages of each conversation (shown at once, then refreshed) */
const listCache = new Map<'me' | 'support', Conversation[]>();
const threads = new Map<string, DmView[]>();
const inflight = new Map<string, Promise<Conversation[]>>();
function fetchList(which: 'me' | 'support') {
  const was = inflight.get(which);
  if (was) return was;
  const p = api.conversations(which === 'support').then((r) => {
    if (r.mutedAll !== undefined) mutedAll = r.mutedAll;
    listCache.set(which, r.conversations);
    if (which === 'me') try { localStorage.setItem(`kb:convs:${me}`, JSON.stringify(r.conversations.slice(0, 30))); } catch { /* full */ }
    return r.conversations;
  }).finally(() => inflight.delete(which));
  inflight.set(which, p);
  return p;
}

/** the ✉ button's number (and the admin's "Team inbox") */
export async function refreshUnread() {
  if (!me) return;
  try {
    const r = await api.messagesUnread();
    unreadMine = r.unread; unreadTeam = r.support ?? 0;
  } catch { return; }
  paintBadges();
}
function paintBadges() {
  const total = unreadMine + (isAdmin ? unreadTeam : 0);
  const dot = $('inboxDot');
  dot.hidden = total === 0; dot.textContent = total > 99 ? '99+' : String(total);
  const td = $('msgTeamDot'); td.hidden = !unreadTeam; td.textContent = String(unreadTeam);
  const md = $('msgMineDot'); md.hidden = !unreadMine; md.textContent = String(unreadMine);
}

const time = (at: number) => {
  if (!at) return '';
  const d = new Date(at), now = new Date();
  const same = d.toDateString() === now.toDateString();
  return same ? d.toLocaleTimeString(locale(), { hour: '2-digit', minute: '2-digit' }) : d.toLocaleDateString(locale(), { day: 'numeric', month: 'short' });
};
const myId = () => (side === 'support' ? SUPPORT : me);

function avatar(c: Pick<Conversation, 'pic' | 'name' | 'support' | 'online'>) {
  const a = h('span', `msg-av${c.support ? ' team' : ''}`);
  if (c.support) a.textContent = '魔';
  else { const img = ui.picEl(c.pic, 'pic fill'); if (img) a.append(img); else a.textContent = (c.name || '?').slice(0, 1).toUpperCase(); }
  if (c.online && !c.support) a.append(h('i', 'msg-on'));
  return a;
}

function renderList() {
  const list = $('msgList');
  if (!convs.length) { list.replaceChildren(h('p', 'hint msg-empty', side === 'support' ? 'No messages to the team yet.' : 'No messages yet — write to a friend from their profile.')); return; }
  list.replaceChildren(...convs.map((c) => {
    const b = h('button', `msg-conv${c.id === openId ? ' on' : ''}${c.unread ? ' unread' : ''}`) as HTMLButtonElement;
    b.type = 'button';
    const txt = h('span', 'msg-c-txt');
    const top = h('span', 'msg-c-top');
    top.append(h('b', 'msg-c-name', c.support ? tr('Kanji Wizards team') : c.name), h('time', 'msg-c-time', time(c.last.at)));
    const mine = c.last.from === myId();
    const preview = (mine && c.last.at ? `${tr('You')}: ` : '') + (c.last.kind ? c.last.text.replace(/\n/, ' — ') : (splitQuote(c.last.text).body || c.last.text));
    txt.append(top, h('span', 'msg-c-last', c.last.at ? preview : tr(c.last.text)));
    b.append(avatar(c), txt);
    if (c.muted) { const m = h('span', 'msg-c-muted'); m.innerHTML = BELL_OFF; m.title = tr('Muted'); b.append(m); }
    if (c.unread) b.append(h('span', `badge msg-c-n${c.muted ? ' muted' : ''}`, String(c.unread)));
    b.onclick = () => void openThread(c.id);
    return b;
  }));
}

async function loadList() {
  loading = true;
  const which = side;
  // what we had (this session, or saved on this device) is shown at once; "Loading…" only the very first time
  const had = listCache.get(which);
  if (had) { convs = had; paintMuteAll(); renderList(); }
  else if (!convs.length) $('msgList').replaceChildren(h('p', 'hint msg-empty', tr('Loading…')));
  try { const c = await fetchList(which); if (side !== which) return; convs = c; paintMuteAll(); }
  catch (e) { if (!had) $('msgList').replaceChildren(h('p', 'hint msg-empty', (e as Error).message)); return; }
  finally { loading = false; }
  renderList();
}

function bubble(m: DmView, prev?: DmView) {
  const mine = m.from === myId();
  const row = h('div', `msg-row${mine ? ' mine' : ''}${m.kind ? ` k-${m.kind}` : ''}`);
  if (!prev || new Date(prev.at).toDateString() !== new Date(m.at).toDateString()) {
    const day = h('div', 'msg-day', new Date(m.at).toLocaleDateString(locale(), { weekday: 'short', day: 'numeric', month: 'long' }));
    const wrap = h('div', 'msg-day-wrap'); wrap.append(day);
    row.dataset.day = '1';
    const frag = h('div', 'msg-group'); frag.append(wrap, row);
    fillBubble(row, m, mine);
    return frag;
  }
  fillBubble(row, m, mine);
  return row;
}
// 0.9.9.9.6.1: a message can quote another — its first lines start with "> "
function splitQuote(text: string): { quote: string; body: string } {
  const lines = text.split('\n');
  let i = 0;
  while (i < lines.length && lines[i].startsWith('> ')) i++;
  return { quote: lines.slice(0, i).map((l) => l.slice(2)).join('\n'), body: lines.slice(i).join('\n') };
}
function fillBubble(row: HTMLElement, m: DmView, mine: boolean) {
  const b = h('div', 'msg-b');
  const { quote, body } = splitQuote(m.text);
  if (quote) b.append(h('span', 'msg-quote', quote));
  const [first, ...rest] = body.split('\n');
  // 0.9.9.9.6.3: "@admin" — tap it for their card; a message that names you is marked
  const said = (t: string) => { const sp = h('span', ''); sp.append(withMentions(t)); return sp; };
  if (m.kind) { b.append(h('b', 'msg-kind', first)); if (rest.length) b.append(said(rest.join('\n'))); }
  else b.append(said(body));
  if (!mine && mentionsMe(body)) row.classList.add('to-me');
  // ✓ sent, ✓✓ read (it turns as soon as they open it)
  const meta = h('span', 'msg-meta', time(m.at));
  if (mine) { const t = h('span', `msg-tick${m.read ? ' read' : ''}`, m.read ? '✓✓' : '✓'); t.title = tr(m.read ? 'Read' : 'Sent'); meta.append(t); }
  b.append(meta);
  // quote it in your answer
  const q = h('button', 'msg-qbtn', '↩') as HTMLButtonElement;
  q.type = 'button'; q.title = tr('Quote'); q.setAttribute('aria-label', tr('Quote'));
  q.onclick = (e) => { e.stopPropagation(); setQuote(body.replace(/^🐞 Bug report\n|^💡 Suggestion\n/, '')); };
  row.append(b, q);
}

let quoteText = '';
function setQuote(text: string) {
  quoteText = text.trim().slice(0, 240);
  const bar = $('msgQuote');
  bar.hidden = !quoteText;
  if (quoteText) {
    const x = h('button', 'msg-q-x', '✕') as HTMLButtonElement;
    x.type = 'button'; x.setAttribute('aria-label', tr('Remove the quote'));
    x.onclick = () => setQuote('');
    bar.replaceChildren(h('span', 'msg-q-lbl', tr('Replying to')), h('span', 'msg-q-text', quoteText), x);
    $<HTMLTextAreaElement>('msgInput').focus();
  }
}

// 0.9.9.9.6.1: muted — all your messages, or one conversation (no notes, no pushes; the number still counts)
let mutedAll = false;
const BELL = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/></svg>';
const BELL_OFF = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.7 3A6 6 0 0 1 18 8c0 2.8.5 4.8 1.1 6.2M17 17H3s3-2 3-9c0-.9.2-1.8.6-2.6"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/><path d="M2 2l20 20"/></svg>';
function muteButton(on: boolean, label: [string, string], toggle: () => void) {
  const b = h('button', `pill msg-mute${on ? ' on' : ''}`) as HTMLButtonElement;
  b.type = 'button';
  b.innerHTML = on ? BELL_OFF : BELL;
  b.title = tr(on ? label[1] : label[0]); b.setAttribute('aria-label', b.title); b.setAttribute('aria-pressed', String(on));
  b.onclick = toggle;
  return b;
}
function paintMuteAll() {
  const slot = $('msgMuteAll');
  slot.replaceChildren(muteButton(mutedAll, ['Mute all messages', 'Messages muted — tap to unmute'], async () => {
    try { await api.muteMessages('all', !mutedAll); mutedAll = !mutedAll; paintMuteAll(); ui.toast(tr(mutedAll ? 'All messages muted' : 'Messages unmuted'), 2500); } catch (e) { ui.toast((e as Error).message); }
  }));
  slot.hidden = side === 'support';
}
export function onDmRead(reader: string) {
  // (on the team's side the reader is the player; on yours it's them, or the team)
  if (!openId || openId !== reader) return;
  let changed = false;
  for (const m of log) if (m.from === myId() && !m.read) { m.read = true; changed = true; }
  if (changed) renderLog(false);
}

function renderLog(stick = true) {
  const box = $('msgLog');
  const atBottom = box.scrollHeight - box.scrollTop - box.clientHeight < 80;
  box.replaceChildren(...log.map((m, i) => bubble(m, log[i - 1])));
  if (!log.length) box.append(h('p', 'hint msg-empty', openId === SUPPORT ? 'Write to the team — questions, bugs, ideas. We answer here.' : 'Say hi! 👋'));
  if (stick || atBottom) box.scrollTop = box.scrollHeight;
}

function renderHead() {
  const head = $('msgHead');
  if (!openWith) { head.replaceChildren(); return; }
  const back = h('button', 'pill msg-back', '←') as HTMLButtonElement;
  back.type = 'button'; back.setAttribute('aria-label', tr('Back'));
  back.onclick = () => { openId = ''; document.getElementById('inbox')!.classList.remove('thread-open'); renderList(); };
  const who = h('span', 'msg-who');
  who.append(h('b', '', openWith.support ? tr('Kanji Wizards team') : openWith.name), h('small', '', openWith.support ? (side === 'support' ? tr('You answer as the team') : tr('The game’s team — we read every message')) : openWith.online ? tr('Online') : ''));
  head.replaceChildren(back, avatar(openWith), who);
  // this conversation: mute it (yours only — not the team's side)
  if (side === 'me') {
    const w = openWith;
    const c = convs.find((x) => x.id === w.id);
    const on = !!c?.muted;
    head.append(muteButton(on, ['Mute this chat', 'This chat is muted — tap to unmute'], async () => {
      try { await api.muteMessages(w.id, !on); if (c) c.muted = !on; w.muted = !on; renderHead(); renderList(); } catch (e) { ui.toast((e as Error).message); }
    }));
  }
}

export async function openThread(id: string) {
  openId = id;
  document.getElementById('inbox')!.classList.add('thread-open');
  $('msgThread').hidden = false;
  openWith = convs.find((c) => c.id === id) ?? null;
  renderHead(); renderList();
  const key = `${side}:${id}`;
  const cached = threads.get(key);
  if (cached) { log = cached; renderLog(); } else $('msgLog').replaceChildren(h('p', 'hint msg-empty', tr('Loading…')));
  try {
    const r = await api.thread(id, side === 'support');
    if (openId !== id) return;
    log = r.messages;
    threads.set(key, log);
    openWith = r.with ?? openWith;
    const c = convs.find((x) => x.id === id);
    if (c && c.unread) { if (side === 'support') unreadTeam = Math.max(0, unreadTeam - c.unread); else unreadMine = Math.max(0, unreadMine - c.unread); c.unread = 0; paintBadges(); }
  } catch (e) { $('msgLog').replaceChildren(h('p', 'hint msg-empty', (e as Error).message)); return; }
  renderHead(); renderList(); renderLog();
  const input = $<HTMLTextAreaElement>('msgInput');
  input.disabled = false;
  if (matchMedia('(pointer: fine)').matches) input.focus();
}

/** the menu's ✉ (or a friend's "Message" button, or a notification): the messenger, maybe at one conversation */
export async function openInbox(with_?: string, asTeam = false, quote = '') {
  side = asTeam && isAdmin ? 'support' : 'me';
  for (const b of document.querySelectorAll<HTMLElement>('#msgSide [data-side]')) b.setAttribute('aria-selected', String(b.dataset.side === side));
  openId = '';
  document.getElementById('inbox')!.classList.remove('thread-open');
  $('msgThread').hidden = true;
  const from = ui.currentScreen();
  if (from !== 'inbox') ui.setLobbyAside(from === 'lobby'); // 0.9.9.9.6.4: from a room's lobby — back leads there
  const aside = from === 'lobby' || (from === 'inbox' && ui.isLobbyAside());
  ui.show('inbox');
  ui.setLobbyAside(aside);
  $('inboxBack').textContent = tr(aside ? '← Back to the room' : '← Menu');
  await loadList();
  setQuote('');
  if (with_) { await openThread(with_); if (quote) setQuote(quote); }
  else if (matchMedia('(min-width: 761px)').matches && convs[0]) await openThread(convs[0].id);
}

async function send() {
  const input = $<HTMLTextAreaElement>('msgInput');
  const typed = input.value.trim();
  if (!typed || !openId) return;
  // (a quote goes first, each line marked "> ")
  const text = quoteText ? `${quoteText.split('\n').map((l) => `> ${l}`).join('\n')}\n${typed}` : typed;
  const btn = $<HTMLButtonElement>('msgSend');
  btn.disabled = true;
  try {
    const r = await api.sendMessage(openId, text, side === 'support');
    input.value = '';
    setQuote('');
    grow();
    $('msgEmojiPick').hidden = true;
    add(r.message);
  } catch (e) { ui.toast((e as Error).message, 3500); } finally { btn.disabled = false; }
}
function add(m: DmView) {
  if (log.some((x) => x.id === m.id)) return;
  log.push(m);
  renderLog(m.from === myId());
  // the list: this conversation to the top with its new last line
  const c = convs.find((x) => x.id === openId);
  if (c) { c.last = m; convs = [c, ...convs.filter((x) => x !== c)]; listCache.set(side, convs); renderList(); } else void loadList();
}
// (the box grows with what you write; a scrollbar only once it's at its tallest)
function grow() { const i = $<HTMLTextAreaElement>('msgInput'); i.style.height = 'auto'; i.style.height = `${Math.min(140, i.scrollHeight)}px`; i.style.overflowY = i.scrollHeight > 140 ? 'auto' : 'hidden'; }

/** main.ts: a message came over the game's connection */
export function onDm(m: DmView, fromName: string, muted = false) {
  const toTeam = isAdmin && m.to !== me && m.from !== me; // (an admin: the team's conversations)
  const viewing = !$('inbox').hidden;
  const otherSide = (sideOf: 'me' | 'support') => (sideOf === 'support' ? (m.from === SUPPORT ? m.to : m.from) : m.from === me ? m.to : m.from);
  const mySide: 'me' | 'support' = toTeam ? 'support' : 'me';
  const other = otherSide(mySide);
  const mineNow = (mySide === 'support' ? m.from === SUPPORT : m.from === me);
  if (viewing && side === mySide && openId === other) {
    add(m);
    if (!mineNow && !muted) audio.sfx.message(); // 0.9.9.9.6.3: a soft chime for a new message
    if (!mineNow) void api.thread(other, side === 'support').catch(() => {}); // (read now)
    return;
  }
  if (mineNow) { if (viewing && side === mySide) void loadList(); return; }
  if (mySide === 'support') unreadTeam++; else unreadMine++;
  paintBadges();
  if (viewing && side === mySide) void loadList();
  // a small note, outside battles (not for a muted chat)
  if (!muted && !(mutedAll && mySide === 'me') && !['battle', 'deck', 'prep'].includes(ui.currentScreen() ?? '')) audio.sfx.message();
  if (!muted && !(mutedAll && mySide === 'me') && !['battle', 'deck', 'prep'].includes(ui.currentScreen() ?? '')) ui.toast(`✉ ${mySide === 'support' ? `${fromName} → ${tr('team')}` : fromName}: ${m.text.split('\n').slice(-1)[0].slice(0, 80)}`, 4000);
}

// 0.9.9.9.6.2: on a phone, swiping a message to the left answers it (the same as its ↩): the bubble follows the
// finger, the ↩ lights up past the point where letting go quotes it; an up-down move is a scroll as before
function swipeToReply(box: HTMLElement) {
  let row: HTMLElement | null = null, id = -1, x0 = 0, y0 = 0, dx = 0, dir: 'x' | 'y' | null = null, armed = false;
  const reset = () => {
    if (row) { row.classList.remove('swiping', 'armed'); row.style.removeProperty('--sw'); }
    row = null; id = -1; dx = 0; dir = null; armed = false;
  };
  box.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' || (e.target as HTMLElement).closest('button, a')) return;
    reset();
    row = (e.target as HTMLElement).closest<HTMLElement>('.msg-row');
    if (!row) return;
    id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
  });
  box.addEventListener('pointermove', (e) => {
    if (!row || e.pointerId !== id) return;
    const mx = e.clientX - x0, my = e.clientY - y0;
    if (!dir) {
      if (Math.abs(mx) < 8 && Math.abs(my) < 8) return;
      dir = Math.abs(mx) > Math.abs(my) * 1.3 && mx < 0 ? 'x' : 'y';
      if (dir === 'y') { reset(); return; }
      row.classList.add('swiping');
    }
    dx = Math.max(-96, Math.min(0, mx));
    row.style.setProperty('--sw', `${dx}px`);
    const now = dx < -58;
    if (now !== armed) { armed = now; row.classList.toggle('armed', armed); if (armed) try { navigator.vibrate?.(12); } catch { /* no buzz */ } }
  });
  const end = (e: PointerEvent) => {
    if (!row || e.pointerId !== id) return;
    if (armed && e.type === 'pointerup') row.querySelector<HTMLButtonElement>('.msg-qbtn')?.click();
    reset();
  };
  box.addEventListener('pointerup', end);
  box.addEventListener('pointercancel', end);
}

export function initInbox() {
  swipeToReply($('msgLog'));
  $('inboxBtn').onclick = () => void openInbox();
  $('inboxBack').onclick = () => ui.show(ui.isLobbyAside() ? 'lobby' : 'menu');
  $('msgForm').addEventListener('submit', (e) => { e.preventDefault(); void send(); });
  const input = $<HTMLTextAreaElement>('msgInput');
  input.addEventListener('input', grow);
  // Enter sends (Shift+Enter: a new line) — on a computer; on a phone Enter is a new line and the button sends
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey && matchMedia('(pointer: fine)').matches) { e.preventDefault(); void send(); } });
  for (const b of document.querySelectorAll<HTMLElement>('#msgSide [data-side]')) b.onclick = () => void openInbox(undefined, b.dataset.side === 'support');
  // 0.9.9.9.6.1: emoji
  const pick = $('msgEmojiPick');
  pick.replaceChildren(...EMOJI.map((e) => {
    const b = h('button', 'msg-emo', e) as HTMLButtonElement;
    b.type = 'button';
    b.onclick = () => {
      const i = $<HTMLTextAreaElement>('msgInput');
      const a = i.selectionStart ?? i.value.length, z = i.selectionEnd ?? a;
      i.value = i.value.slice(0, a) + e + i.value.slice(z);
      i.selectionStart = i.selectionEnd = a + e.length;
      i.focus(); grow();
    };
    return b;
  }));
  $('msgEmoji').onclick = (e) => { e.stopPropagation(); pick.hidden = !pick.hidden; };
  document.addEventListener('pointerdown', (e) => { if (!pick.hidden && !(e.target as Element).closest('#msgEmojiPick, #msgEmoji')) pick.hidden = true; });
  // older messages: scrolled to the top
  $('msgLog').addEventListener('scroll', async () => {
    const box = $('msgLog');
    if (box.scrollTop > 40 || loading || !openId || log.length < 60 || box.dataset.more === 'none') return;
    loading = true;
    try {
      const r = await api.thread(openId, side === 'support', log[0].at);
      if (!r.messages.length) { box.dataset.more = 'none'; return; }
      const h0 = box.scrollHeight;
      log = [...r.messages, ...log]; threads.set(`${side}:${openId}`, log);
      renderLog(false);
      box.scrollTop = box.scrollHeight - h0;
    } catch { /* later */ } finally { loading = false; }
  });
  setInterval(() => { if (document.visibilityState === 'visible') void refreshUnread(); }, 120_000);
}
