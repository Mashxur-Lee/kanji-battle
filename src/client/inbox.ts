// 0.9.9.9.6: Messages — a small messenger. Your conversations on the left (friends, and the Kanji Wizards team:
// your Feedback lands there and the team answers there), the open one on the right (on a phone: one at a time).
// Admins also have the team's side ("Team inbox"): every player's conversation with the team, answered as the team.
// New messages come over the game's connection ('dm'); the ✉ button in the menu shows how many are unread.
import { api, type Conversation } from './api';
import type { DmView } from '../shared/protocol';
import { locale, tr } from './i18n';
import * as ui from './ui';

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

export function inboxUser(id: string, admin: boolean) {
  me = id; isAdmin = admin;
  $('msgSide').hidden = !admin;
  void refreshUnread();
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
    const preview = (mine && c.last.at ? `${tr('You')}: ` : '') + (c.last.kind ? c.last.text.replace(/\n/, ' — ') : c.last.text);
    txt.append(top, h('span', 'msg-c-last', c.last.at ? preview : tr(c.last.text)));
    b.append(avatar(c), txt);
    if (c.unread) b.append(h('span', 'badge msg-c-n', String(c.unread)));
    b.onclick = () => void openThread(c.id);
    return b;
  }));
}

async function loadList() {
  loading = true;
  try { const r = await api.conversations(side === 'support'); convs = r.conversations; }
  catch (e) { $('msgList').replaceChildren(h('p', 'hint msg-empty', (e as Error).message)); return; }
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
function fillBubble(row: HTMLElement, m: DmView, mine: boolean) {
  const b = h('div', 'msg-b');
  const [first, ...rest] = m.text.split('\n');
  if (m.kind) { b.append(h('b', 'msg-kind', first)); if (rest.length) b.append(h('span', '', rest.join('\n'))); }
  else b.append(h('span', '', m.text));
  const meta = h('span', 'msg-meta', time(m.at) + (mine && m.to !== SUPPORT ? (m.read ? ' ✓✓' : ' ✓') : ''));
  b.append(meta);
  row.append(b);
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
}

export async function openThread(id: string) {
  openId = id;
  document.getElementById('inbox')!.classList.add('thread-open');
  $('msgThread').hidden = false;
  openWith = convs.find((c) => c.id === id) ?? null;
  renderHead(); renderList();
  $('msgLog').replaceChildren(h('p', 'hint msg-empty', tr('Loading…')));
  try {
    const r = await api.thread(id, side === 'support');
    if (openId !== id) return;
    log = r.messages;
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
export async function openInbox(with_?: string, asTeam = false) {
  side = asTeam && isAdmin ? 'support' : 'me';
  for (const b of document.querySelectorAll<HTMLElement>('#msgSide [data-side]')) b.setAttribute('aria-selected', String(b.dataset.side === side));
  openId = '';
  document.getElementById('inbox')!.classList.remove('thread-open');
  $('msgThread').hidden = true;
  ui.show('inbox');
  await loadList();
  if (with_) await openThread(with_);
  else if (matchMedia('(min-width: 761px)').matches && convs[0]) await openThread(convs[0].id);
}

async function send() {
  const input = $<HTMLTextAreaElement>('msgInput');
  const text = input.value.trim();
  if (!text || !openId) return;
  const btn = $<HTMLButtonElement>('msgSend');
  btn.disabled = true;
  try {
    const r = await api.sendMessage(openId, text, side === 'support');
    input.value = '';
    grow();
    add(r.message);
  } catch (e) { ui.toast((e as Error).message, 3500); } finally { btn.disabled = false; }
}
function add(m: DmView) {
  if (log.some((x) => x.id === m.id)) return;
  log.push(m);
  renderLog(m.from === myId());
  // the list: this conversation to the top with its new last line
  const c = convs.find((x) => x.id === openId);
  if (c) { c.last = m; convs = [c, ...convs.filter((x) => x !== c)]; renderList(); } else void loadList();
}
function grow() { const i = $<HTMLTextAreaElement>('msgInput'); i.style.height = 'auto'; i.style.height = `${Math.min(140, i.scrollHeight)}px`; }

/** main.ts: a message came over the game's connection */
export function onDm(m: DmView, fromName: string) {
  const toTeam = isAdmin && m.to !== me && m.from !== me; // (an admin: the team's conversations)
  const viewing = !$('inbox').hidden;
  const otherSide = (sideOf: 'me' | 'support') => (sideOf === 'support' ? (m.from === SUPPORT ? m.to : m.from) : m.from === me ? m.to : m.from);
  const mySide: 'me' | 'support' = toTeam ? 'support' : 'me';
  const other = otherSide(mySide);
  const mineNow = (mySide === 'support' ? m.from === SUPPORT : m.from === me);
  if (viewing && side === mySide && openId === other) {
    add(m);
    if (!mineNow) void api.thread(other, side === 'support').catch(() => {}); // (read now)
    return;
  }
  if (mineNow) { if (viewing && side === mySide) void loadList(); return; }
  if (mySide === 'support') unreadTeam++; else unreadMine++;
  paintBadges();
  if (viewing && side === mySide) void loadList();
  // a small note, outside battles
  if (!['battle', 'deck', 'prep'].includes(ui.currentScreen() ?? '')) ui.toast(`✉ ${mySide === 'support' ? `${fromName} → ${tr('team')}` : fromName}: ${m.text.split('\n').slice(-1)[0].slice(0, 80)}`, 4000);
}

export function initInbox() {
  $('inboxBtn').onclick = () => void openInbox();
  $('inboxBack').onclick = () => ui.show('menu');
  $('msgForm').addEventListener('submit', (e) => { e.preventDefault(); void send(); });
  const input = $<HTMLTextAreaElement>('msgInput');
  input.addEventListener('input', grow);
  // Enter sends (Shift+Enter: a new line) — on a computer; on a phone Enter is a new line and the button sends
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey && matchMedia('(pointer: fine)').matches) { e.preventDefault(); void send(); } });
  for (const b of document.querySelectorAll<HTMLElement>('#msgSide [data-side]')) b.onclick = () => void openInbox(undefined, b.dataset.side === 'support');
  // older messages: scrolled to the top
  $('msgLog').addEventListener('scroll', async () => {
    const box = $('msgLog');
    if (box.scrollTop > 40 || loading || !openId || log.length < 60 || box.dataset.more === 'none') return;
    loading = true;
    try {
      const r = await api.thread(openId, side === 'support', log[0].at);
      if (!r.messages.length) { box.dataset.more = 'none'; return; }
      const h0 = box.scrollHeight;
      log = [...r.messages, ...log];
      renderLog(false);
      box.scrollTop = box.scrollHeight - h0;
    } catch { /* later */ } finally { loading = false; }
  });
  setInterval(() => { if (document.visibilityState === 'visible') void refreshUnread(); }, 120_000);
}
