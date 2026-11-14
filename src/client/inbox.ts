// 0.9.9.9.6: Messages — a small messenger. Your conversations on the left (friends, and the Kanji Wizards team:
// your Feedback lands there and the team answers there), the open one on the right (on a phone: one at a time).
// Admins also have the team's side ("Team inbox"): every player's conversation with the team, answered as the team.
// New messages come over the game's connection ('dm'); the ✉ button in the menu shows how many are unread.
//
// 0.9.9.9.6.4, like Telegram: tap a message for its menu (react, reply, copy, forward, edit, delete) — on a computer
// a smiley shows beside it on hover for a quick reaction; "edited"; photos (photopick.ts); group chats (groupui.ts)
// with "7 members, 3 online" under the name; "typing…"; a friend's status under their name (tap it for their
// profile); "@" suggests friends; the bell: all messages, only @mentions, or nothing.
import { api, type Conversation, type GroupInfo, type NotifyMode } from './api';
import type { DmView } from '../shared/protocol';
import { locale, tr } from './i18n';
import * as ui from './ui';
import * as audio from './audio';
import { knowPlayer, mentionsMe, withMentions } from './mentions';
import { emojiPanel, insertAtCaret, QUICK_REACTIONS, useEmoji } from './emojis';
import { attachMentionSuggest, type Mentionable } from './mentionsuggest';
import { openPhotoSheet, viewPhoto } from './photopick';
import { openGroupInfo, openNewGroup } from './groupui';
import { knownFriends } from './friendrail';
import { showPlayer } from './playerview';

const $ = ui.$;
const SUPPORT = 'support';
const isGroup = (id: string) => id.startsWith('g:');
function h(tag: string, cls = '', text?: string): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}
const button = (cls: string, html: string, label: string, fn: (e: MouseEvent) => void) => {
  const b = h('button', cls) as HTMLButtonElement;
  b.type = 'button'; b.innerHTML = html; b.title = label; b.setAttribute('aria-label', label);
  b.onclick = fn;
  return b;
};

let me = '';
let isAdmin = false;
let side: 'me' | 'support' = 'me';
let convs: Conversation[] = [];
let openId = '';
let openWith: Conversation | null = null;
let log: DmView[] = [];
/** who's who in the open group (and anyone we've seen write) */
const people = new Map<string, { name: string; pic: string | null; login?: string }>();
let unreadMine = 0, unreadTeam = 0;
let loading = false;
let sendWs: (msg: { type: 'dm_typing'; to: string; on: boolean }) => void = () => {};
/** main.ts: the game's connection (for "typing…") */
export function setInboxSocket(fn: typeof sendWs) { sendWs = fn; }

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
const clock = (at: number) => new Date(at).toLocaleTimeString(locale(), { hour: '2-digit', minute: '2-digit' });
const myId = () => (side === 'support' ? SUPPORT : me);
const nameOf = (id: string) => (id === me ? tr('You') : people.get(id)?.name ?? convs.find((c) => c.id === id)?.name ?? '?');

const GROUP_ICON = '<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.5-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 19.2C2 16 5 13.5 9 13.5s7 2.5 7 5.7c0 .5-.4.8-.9.8H2.9c-.5 0-.9-.3-.9-.8Zm15.3.8c.1-.3.2-.5.2-.8 0-1.9-.8-3.6-2.2-4.9.4-.1.8-.1 1.2-.1 3.4 0 5.5 2 5.5 4.6 0 .7-.4 1.2-1 1.2Z"/></svg>';
function avatar(c: Pick<Conversation, 'pic' | 'name' | 'support' | 'online'> & { group?: unknown }) {
  const a = h('span', `msg-av${c.support ? ' team' : ''}${c.group ? ' grp' : ''}`);
  if (c.support) a.textContent = '魔';
  else { const img = ui.picEl(c.pic, 'pic fill'); if (img) a.append(img); else a.textContent = (c.name || '?').slice(0, 1).toUpperCase(); }
  if (c.online && !c.support && !c.group) a.append(h('i', 'msg-on'));
  return a;
}

// ── "typing…" ──
const typingIn = new Map<string, Map<string, { name: string; until: number }>>();
function typers(conv: string): string[] {
  const m = typingIn.get(conv);
  if (!m) return [];
  const now = Date.now();
  for (const [k, v] of m) if (v.until < now) m.delete(k);
  return [...m.values()].map((v) => v.name);
}
function typingText(conv: string): string {
  const t = typers(conv);
  if (!t.length) return '';
  if (!isGroup(conv)) return tr('typing…');
  return t.length === 1 ? `${t[0]} ${tr('is typing…')}` : `${t.length} ${tr('people are typing…')}`;
}
export function onDmTyping(conv: string, from: string, name: string, on: boolean) {
  if (from === me) return;
  const m = typingIn.get(conv) ?? new Map();
  if (on) m.set(from, { name, until: Date.now() + 6000 }); else m.delete(from);
  typingIn.set(conv, m);
  const repaint = () => { if ($('inbox').hidden) return; if (conv === openId) renderHead(); paintTyping(conv); };
  repaint();
  setTimeout(repaint, 6100);
}
function paintTyping(conv: string) {
  const row = $('msgList').querySelector<HTMLElement>(`.msg-conv[data-id="${CSS.escape(conv)}"] .msg-c-last`);
  const c = convs.find((x) => x.id === conv);
  if (!row || !c) return;
  const t = typingText(conv);
  row.classList.toggle('typing', !!t);
  row.textContent = t || previewOf(c);
}
// mine: tell the other side while I type (once every few seconds), and that I stopped
let typingTo = '', typingAt = 0, typingStop = 0;
function iAmTyping() {
  if (!openId || openId === SUPPORT || side === 'support') return;
  const now = Date.now();
  if (typingTo !== openId || now - typingAt > 3500) { if (typingTo && typingTo !== openId) stopTyping(); sendWs({ type: 'dm_typing', to: openId, on: true }); typingTo = openId; typingAt = now; }
  clearTimeout(typingStop);
  typingStop = window.setTimeout(stopTyping, 4500);
}
function stopTyping() {
  clearTimeout(typingStop);
  if (typingTo) sendWs({ type: 'dm_typing', to: typingTo, on: false });
  typingTo = ''; typingAt = 0;
}
/** main.ts: Messages closed */
export function inboxLeft() { stopTyping(); closeMenus(); }

// ── the list ──
function sysText(m: DmView): string {
  const [ev, detail = ''] = m.text.split('\n');
  const who = nameOf(m.from);
  switch (ev) {
    case 'created': return `${who} ${tr('created the group')} «${detail}»`;
    case 'added': return `${who} ${tr('added')} ${detail}`;
    case 'removed': return `${who} ${tr('removed')} ${detail}`;
    case 'left': return `${who} ${tr('left the group')}`;
    case 'renamed': return `${who} ${tr('renamed the group to')} «${detail}»`;
    case 'photo': return `${who} ${tr('changed the group picture')}`;
    case 'admin': return `${who} ${tr('made an admin:')} ${detail}`;
    case 'unadmin': return `${who} ${tr('took admin away from')} ${detail}`;
    case 'owner': return `${who} ${tr('gave the group to')} ${detail}`;
    case 'perms': return `${who} ${tr('changed what members can do')}`;
    default: return m.text;
  }
}
function previewOf(c: Conversation): string {
  const m = c.last;
  if (!m.at) return c.group ? tr('No messages yet') : tr(m.text);
  if (m.kind === 'sys') return sysText(m);
  if (m.deleted) return tr('Message deleted');
  const body = m.kind ? m.text.replace(/\n/, ' — ') : (splitQuote(m.text).body || m.text);
  const what = m.media ? `📷 ${body || tr('Photo')}` : body;
  const who = m.from === myId() ? `${tr('You')}: ` : c.group ? `${nameOf(m.from)}: ` : '';
  return who + what;
}
const BELL_MENTION = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3.6"/><path d="M15.6 12v1.4a2.6 2.6 0 0 0 5.2 0V12a8.8 8.8 0 1 0-3.5 7"/></svg>';
function renderList() {
  const list = $('msgList');
  if (!convs.length) { list.replaceChildren(h('p', 'hint msg-empty', side === 'support' ? 'No messages to the team yet.' : 'No messages yet — write to a friend from their profile.')); return; }
  list.replaceChildren(...convs.map((c) => {
    const b = h('button', `msg-conv${c.id === openId ? ' on' : ''}${c.unread ? ' unread' : ''}`) as HTMLButtonElement;
    b.type = 'button'; b.dataset.id = c.id;
    const txt = h('span', 'msg-c-txt');
    const top = h('span', 'msg-c-top');
    const nm = h('b', 'msg-c-name', c.support ? tr('Kanji Wizards team') : c.name);
    if (c.group) { const gi = h('i', 'msg-c-grp'); gi.innerHTML = GROUP_ICON; nm.prepend(gi); }
    top.append(nm, h('time', 'msg-c-time', time(c.last.at)));
    const t = typingText(c.id);
    txt.append(top, h('span', `msg-c-last${t ? ' typing' : ''}`, t || previewOf(c)));
    b.append(avatar(c), txt);
    if (c.notify === 'none' || c.muted) { const m = h('span', 'msg-c-muted'); m.innerHTML = BELL_OFF; m.title = tr('Muted'); b.append(m); }
    else if (c.notify === 'mentions') { const m = h('span', 'msg-c-muted'); m.innerHTML = BELL_MENTION; m.title = tr('Only @mentions'); b.append(m); }
    if (c.unread) b.append(h('span', `badge msg-c-n${c.muted || c.notify === 'none' ? ' muted' : ''}`, String(c.unread)));
    b.onclick = () => void openThread(c.id);
    return b;
  }));
}

async function loadList() {
  loading = true;
  const which = side;
  // what we had (this session, or saved on this device) is shown at once; "Loading…" only the very first time
  const had = listCache.get(which);
  if (had) { convs = had; paintTop(); renderList(); }
  else if (!convs.length) $('msgList').replaceChildren(h('p', 'hint msg-empty', tr('Loading…')));
  try { const c = await fetchList(which); if (side !== which) return; convs = c; paintTop(); }
  catch (e) { if (!had) $('msgList').replaceChildren(h('p', 'hint msg-empty', (e as Error).message)); return; }
  finally { loading = false; }
  renderList();
  // (the open conversation's row may have changed: a group's name, how many are online)
  if (openId) { const c = convs.find((x) => x.id === openId); if (c && openWith) { openWith = { ...openWith, ...c, status: openWith.status }; renderHead(); } }
}

// ── one message ──
// 0.9.9.9.6.1: a message can quote another — its first lines start with "> "
function splitQuote(text: string): { quote: string; body: string } {
  const lines = text.split('\n');
  let i = 0;
  while (i < lines.length && lines[i].startsWith('> ')) i++;
  return { quote: lines.slice(0, i).map((l) => l.slice(2)).join('\n'), body: lines.slice(i).join('\n') };
}
const canEdit = (m: DmView) => m.from === myId() && !m.deleted && m.kind !== 'sys' && !m.fwd && Date.now() - m.at < 48 * 3600_000;
const canDelete = (m: DmView) => !m.deleted && m.kind !== 'sys' && (m.from === myId() || (!!openWith?.group && openWith.group.role !== 'member'));

function bubble(m: DmView, prev?: DmView, next?: DmView) {
  const newDay = !prev || new Date(prev.at).toDateString() !== new Date(m.at).toDateString();
  const row = renderRow(m, prev && !newDay ? prev : undefined, next && new Date(next.at).toDateString() === new Date(m.at).toDateString() ? next : undefined);
  if (!newDay) return row;
  const day = h('div', 'msg-day', new Date(m.at).toLocaleDateString(locale(), { weekday: 'short', day: 'numeric', month: 'long' }));
  const wrap = h('div', 'msg-day-wrap'); wrap.append(day);
  row.dataset.day = '1';
  const frag = h('div', 'msg-group'); frag.append(wrap, row);
  return frag;
}
const hue = (id: string) => { let x = 0; for (const c of id) x = (x * 31 + c.charCodeAt(0)) % 360; return x; };
const SMILE = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 14.5s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="9.5" r=".6" fill="currentColor"/><circle cx="15" cy="9.5" r=".6" fill="currentColor"/></svg>';
function renderRow(m: DmView, prev?: DmView, next?: DmView): HTMLElement {
  if (m.kind === 'sys') { const r = h('div', 'msg-sys'); r.append(h('span', '', sysText(m))); return r; }
  const mine = m.from === myId();
  const grp = !!openWith?.group;
  const row = h('div', `msg-row${mine ? ' mine' : ''}${m.kind ? ` k-${m.kind}` : ''}${m.deleted ? ' gone' : ''}`);
  row.dataset.id = m.id;
  // in a group: their picture by the last of a run, their name on the first
  const firstOfRun = !prev || prev.from !== m.from || prev.kind === 'sys' || m.at - prev.at > 5 * 60_000;
  const lastOfRun = !next || next.from !== m.from || next.kind === 'sys' || next.at - m.at > 5 * 60_000;
  if (grp && !mine) {
    const p = people.get(m.from);
    const av = h('span', `msg-pav${lastOfRun ? '' : ' blank'}`);
    if (lastOfRun) { const img = ui.picEl(p?.pic ?? null, 'pic fill'); if (img) av.append(img); else av.textContent = (p?.name ?? '?').slice(0, 1).toUpperCase(); av.dataset.profile = m.from; av.dataset.name = p?.name ?? ''; }
    row.append(av);
  }
  const b = h('div', 'msg-b');
  if (grp && !mine && firstOfRun) { const n = h('span', 'msg-from', people.get(m.from)?.name ?? '?'); n.dataset.profile = m.from; n.dataset.name = people.get(m.from)?.name ?? ''; n.style.setProperty('--hue', String(hue(m.from))); b.append(n); }
  if (m.deleted) {
    b.append(h('i', 'msg-deleted', tr('Message deleted')), h('span', 'msg-meta', clock(m.at)));
    row.append(b);
    return row;
  }
  if (m.fwd) { const f = h('span', 'msg-fwd'); f.append(h('small', '', tr('Forwarded from')), h('b', '', m.fwd)); b.append(f); }
  const { quote, body } = splitQuote(m.text);
  if (quote) b.append(h('span', 'msg-quote', quote));
  if (m.media) {
    const img = document.createElement('img');
    img.className = 'msg-photo'; img.src = m.media; img.alt = tr('Photo'); img.loading = 'lazy'; img.decoding = 'async';
    img.onclick = (e) => { e.stopPropagation(); viewPhoto(m.media!); };
    img.onload = () => { const box = $('msgLog'); if (box.scrollHeight - box.scrollTop - box.clientHeight < 400) box.scrollTop = box.scrollHeight; };
    b.append(img);
    b.classList.add('has-photo');
  }
  const [first, ...rest] = body.split('\n');
  // 0.9.9.9.6.3: "@admin" — tap it for their card; a message that names you is marked
  const said = (t: string) => { const sp = h('span', 'msg-txt'); sp.append(withMentions(t)); return sp; };
  if (m.kind) { b.append(h('b', 'msg-kind', first)); if (rest.length) b.append(said(rest.join('\n'))); }
  else if (body) b.append(said(body));
  if (!mine && mentionsMe(body)) row.classList.add('to-me');
  // edited · time · ✓ sent, ✓✓ read
  const meta = h('span', 'msg-meta');
  if (m.edited) meta.append(h('span', 'msg-edited', tr('edited')));
  meta.append(document.createTextNode(clock(m.at)));
  if (mine) { const t = h('span', `msg-tick${m.read ? ' read' : ''}`, m.read ? '✓✓' : '✓'); t.title = tr(m.read ? 'Read' : 'Sent'); meta.append(t); }
  b.append(meta);
  // reactions under it (yours lit; tap one to add the same, or take yours back)
  if (m.reactions && Object.keys(m.reactions).length) {
    const rx = h('div', 'msg-rx');
    for (const [e, ids] of Object.entries(m.reactions)) {
      const chip = h('button', `msg-rx-c${ids.includes(myId()) ? ' mine' : ''}`) as HTMLButtonElement;
      chip.type = 'button';
      chip.append(h('span', 'msg-rx-e', e), h('b', '', String(ids.length)));
      chip.title = ids.map((id) => (id === myId() ? tr('You') : id === SUPPORT ? tr('Kanji Wizards team') : nameOf(id))).join(', ');
      chip.onclick = (ev) => { ev.stopPropagation(); void react(m, e); };
      rx.append(chip);
    }
    b.append(rx);
  }
  b.onclick = (e) => {
    if ((e.target as HTMLElement).closest('a, .mention, .msg-from, [data-profile], .msg-rx, .msg-photo')) return;
    if (getSelection()?.toString()) return; // (selecting text to copy)
    if (row.dataset.swiped) return;
    openMenu(m, b);
  };
  b.oncontextmenu = (e) => { e.preventDefault(); openMenu(m, b); };
  // a computer: a smiley beside it on hover — a quick reaction
  const quick = button('msg-react-btn', SMILE, tr('React'), (e) => { e.stopPropagation(); openReactBar(m, quick); });
  // quote it in your answer (and swipe left on a phone)
  const q = h('button', 'msg-qbtn', '↩') as HTMLButtonElement;
  q.type = 'button'; q.title = tr('Reply'); q.setAttribute('aria-label', tr('Reply'));
  q.onclick = (e) => { e.stopPropagation(); setQuote(body.replace(/^🐞 Bug report\n|^💡 Suggestion\n/, '') || (m.media ? tr('Photo') : '')); };
  row.append(b, ...(m.kind ? [] : [quick]), q);
  return row;
}

// ── a message's menu, and reactions ──
function closeMenus() { document.querySelectorAll('.msg-menu, .msg-rbar').forEach((x) => x.remove()); }
/** a small pop-up by `r` (above it when there's room, else below), closed by a tap elsewhere */
function placeAt(pop: HTMLElement, r: DOMRect) {
  document.body.append(pop);
  const w = pop.offsetWidth, hh = pop.offsetHeight;
  const left = Math.max(8, Math.min(innerWidth - w - 8, r.left + r.width / 2 - w / 2));
  const top = r.top - hh - 8 > 8 ? r.top - hh - 8 : Math.max(8, Math.min(innerHeight - hh - 8, r.bottom + 8));
  pop.style.left = `${left}px`; pop.style.top = `${top}px`;
  setTimeout(() => document.addEventListener('pointerdown', function away(e) {
    if (!pop.isConnected) { document.removeEventListener('pointerdown', away, true); return; }
    if (!pop.contains(e.target as Node)) { pop.remove(); document.removeEventListener('pointerdown', away, true); }
  }, true));
}
const place = (pop: HTMLElement, anchor: HTMLElement) => placeAt(pop, anchor.getBoundingClientRect());
function reactRow(m: DmView, done: () => void) {
  const bar = h('div', 'msg-rrow');
  const mineNow = Object.entries(m.reactions ?? {}).find(([, ids]) => ids.includes(myId()))?.[0];
  for (const e of QUICK_REACTIONS) {
    const b = h('button', `msg-rq${e === mineNow ? ' on' : ''}`, e) as HTMLButtonElement;
    b.type = 'button';
    b.onclick = (ev) => { ev.stopPropagation(); done(); useEmoji(e); void react(m, e); };
    bar.append(b);
  }
  const more = h('button', 'msg-rq more', '+') as HTMLButtonElement;
  more.type = 'button'; more.title = tr('More emoji'); more.setAttribute('aria-label', tr('More emoji'));
  more.onclick = (ev) => {
    ev.stopPropagation();
    const r = (bar.closest('.msg-menu, .msg-rbar') ?? bar).getBoundingClientRect();
    done();
    const pop = h('div', 'msg-rbar big');
    pop.append(emojiPanel((e) => { pop.remove(); void react(m, e); }));
    placeAt(pop, r);
  };
  bar.append(more);
  return bar;
}
function openReactBar(m: DmView, anchor: HTMLElement) {
  closeMenus();
  const pop = h('div', 'msg-rbar');
  pop.append(reactRow(m, () => pop.remove()));
  place(pop, anchor);
}
const ICON = {
  reply: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 5 5v6"/></svg>',
  copy: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>',
  fwd: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 14 5-5-5-5"/><path d="M20 9H9a5 5 0 0 0-5 5v6"/></svg>',
  edit: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/></svg>',
  del: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/></svg>',
};
function openMenu(m: DmView, anchor: HTMLElement) {
  closeMenus();
  if (m.deleted || m.kind === 'sys') return;
  const pop = h('div', 'msg-menu');
  pop.setAttribute('role', 'menu');
  if (!m.kind) pop.append(reactRow(m, () => pop.remove()));
  const item = (icon: string, label: string, fn: () => void, danger = false) => {
    const b = h('button', `msg-mi${danger ? ' danger' : ''}`) as HTMLButtonElement;
    b.type = 'button'; b.setAttribute('role', 'menuitem');
    const i = h('span', 'msg-mi-i'); i.innerHTML = icon;
    b.append(i, h('span', '', label));
    b.onclick = (e) => { e.stopPropagation(); pop.remove(); fn(); };
    pop.append(b);
  };
  const { body } = splitQuote(m.text);
  item(ICON.reply, tr('Reply'), () => setQuote(body || (m.media ? tr('Photo') : '')));
  if (body) item(ICON.copy, tr('Copy'), () => { void navigator.clipboard?.writeText(body).then(() => ui.toast(tr('Copied'), 1500)).catch(() => { /* not allowed */ }); });
  if (side === 'me') item(ICON.fwd, tr('Forward'), () => forwardDialog(m));
  if (canEdit(m)) item(ICON.edit, tr('Edit'), () => startEdit(m));
  if (canDelete(m)) item(ICON.del, tr('Delete'), () => void (async () => {
    if (!(await ui.confirmBox(tr('Delete this message?'), tr('It is deleted for everyone in the chat.'), tr('Delete'), tr('Cancel')))) return;
    try { onDmUpdate((await api.deleteMessage(m.id)).message); } catch (e) { ui.toast((e as Error).message); }
  })(), true);
  place(pop, anchor);
}

async function react(m: DmView, emoji: string) {
  try { onDmUpdate((await api.react(m.id, emoji)).message); } catch (e) { ui.toast((e as Error).message); }
}

function forwardDialog(m: DmView) {
  let d = document.getElementById('fwdDialog') as HTMLDialogElement | null;
  if (!d) { d = document.createElement('dialog'); d.id = 'fwdDialog'; d.className = 'friend-dialog fwd-dialog'; d.onclick = (e) => { if (e.target === d) d!.close(); }; document.body.append(d); }
  const dlg = d;
  const chosen = new Set<string>();
  const go = h('button', 'pill primary big', tr('Forward')) as HTMLButtonElement;
  go.type = 'button'; go.disabled = true;
  const list = h('div', 'gp-list');
  for (const c of convs) {
    const r = h('label', 'gp-row');
    const cb = document.createElement('input'); cb.type = 'checkbox';
    cb.onchange = () => { if (cb.checked) { if (chosen.size >= 10) { cb.checked = false; return; } chosen.add(c.id); } else chosen.delete(c.id); go.disabled = !chosen.size; };
    const t = h('span', 'gp-t'); t.append(h('b', '', c.support ? tr('Kanji Wizards team') : c.name), h('small', '', c.group ? tr(c.group.members === 1 ? '1 member' : `${c.group.members} members`) : ''));
    r.append(cb, avatar(c), t);
    list.append(r);
  }
  go.onclick = async () => {
    go.disabled = true;
    try { await api.forward(m.id, [...chosen]); dlg.close(); ui.toast(tr('Forwarded'), 2000); listCache.delete(side); void loadList(); } catch (e) { ui.toast((e as Error).message); go.disabled = false; }
  };
  const x = h('button', 'pill dlg-x', '✕') as HTMLButtonElement; x.type = 'button'; x.onclick = () => dlg.close(); x.setAttribute('aria-label', tr('Close'));
  dlg.replaceChildren(x, h('h3', '', tr('Forward to…')), list, go);
  if (!dlg.open) dlg.showModal();
}

// ── reply / edit bars over the box ──
let quoteText = '';
function setQuote(text: string) {
  if (editing) cancelEdit();
  quoteText = text.trim().slice(0, 240);
  const bar = $('msgQuote');
  bar.hidden = !quoteText;
  bar.classList.remove('editing');
  if (quoteText) {
    const x = h('button', 'msg-q-x', '✕') as HTMLButtonElement;
    x.type = 'button'; x.setAttribute('aria-label', tr('Remove the quote'));
    x.onclick = () => setQuote('');
    bar.replaceChildren(h('span', 'msg-q-lbl', tr('Replying to')), h('span', 'msg-q-text', quoteText), x);
    $<HTMLTextAreaElement>('msgInput').focus();
  }
}
let editing: DmView | null = null;
let editQuote = '';
function startEdit(m: DmView) {
  setQuote('');
  editing = m;
  const { quote, body } = splitQuote(m.text);
  editQuote = quote;
  const bar = $('msgQuote');
  bar.hidden = false; bar.classList.add('editing');
  const x = h('button', 'msg-q-x', '✕') as HTMLButtonElement;
  x.type = 'button'; x.setAttribute('aria-label', tr('Cancel'));
  x.onclick = () => cancelEdit();
  bar.replaceChildren(h('span', 'msg-q-lbl', tr('Editing')), h('span', 'msg-q-text', body || tr('Photo')), x);
  const i = $<HTMLTextAreaElement>('msgInput');
  i.value = body; grow(); i.focus();
  i.selectionStart = i.selectionEnd = i.value.length;
}
function cancelEdit() {
  editing = null; editQuote = '';
  const bar = $('msgQuote'); bar.hidden = true; bar.classList.remove('editing');
  const i = $<HTMLTextAreaElement>('msgInput'); i.value = ''; grow();
}

// 0.9.9.9.6.1: muted — all your messages; 0.9.9.9.6.4: each conversation: all, only @mentions, or nothing
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
const NEW_GROUP = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 19.5c.6-3.4 3.3-5.5 6.5-5.5 1.4 0 2.7.4 3.8 1.1"/><path d="M18 13v7M14.5 16.5h7"/></svg>';
function paintTop() {
  const slot = $('msgMuteAll');
  const ng = button('pill msg-newgroup', NEW_GROUP, tr('New group'), () => void openNewGroup((id) => { listCache.delete('me'); void loadList().then(() => openThread(id)); }));
  ng.append(h('span', 'msg-ng-t', tr('New group')));
  slot.replaceChildren(ng, muteButton(mutedAll, ['Mute all messages', 'Messages muted — tap to unmute'], async () => {
    try { await api.muteMessages('all', !mutedAll); mutedAll = !mutedAll; paintTop(); ui.toast(tr(mutedAll ? 'All messages muted' : 'Messages unmuted'), 2500); } catch (e) { ui.toast((e as Error).message); }
  }));
  slot.hidden = side === 'support';
}
/** Discord's bell: a little menu — all messages, only @mentions, mute */
function notifyButton(c: Conversation) {
  const mode: NotifyMode = c.notify ?? (c.muted ? 'none' : 'all');
  const b = h('button', `pill msg-mute${mode !== 'all' ? ' on' : ''}`) as HTMLButtonElement;
  b.type = 'button';
  b.innerHTML = mode === 'none' ? BELL_OFF : mode === 'mentions' ? BELL_MENTION : BELL;
  b.title = tr(mode === 'none' ? 'Muted' : mode === 'mentions' ? 'Only @mentions' : 'Notifications'); b.setAttribute('aria-label', b.title);
  b.onclick = (e) => {
    e.stopPropagation();
    closeMenus();
    const pop = h('div', 'msg-menu msg-notify');
    for (const [m, label, icon] of [['all', 'All messages', BELL], ['mentions', 'Only @mentions', BELL_MENTION], ['none', 'Mute', BELL_OFF]] as const) {
      const it = h('button', `msg-mi${m === mode ? ' on' : ''}`) as HTMLButtonElement;
      it.type = 'button';
      const i = h('span', 'msg-mi-i'); i.innerHTML = icon;
      it.append(i, h('span', '', tr(label)), h('span', 'msg-mi-check', m === mode ? '✓' : ''));
      it.onclick = async () => { pop.remove(); await setNotify(c.id, m).catch((err) => ui.toast((err as Error).message)); };
      pop.append(it);
    }
    place(pop, b);
  };
  return b;
}
async function setNotify(id: string, mode: NotifyMode) {
  await api.setNotify(id, mode);
  for (const c of [...convs, ...(openWith && openWith.id === id ? [openWith] : [])]) if (c.id === id) { c.notify = mode === 'all' ? undefined : mode; c.muted = mode === 'none'; }
  listCache.set(side, convs);
  renderHead(); renderList();
}

export function onDmRead(reader: string) {
  // (on the team's side the reader is the player; on yours it's them, or the team; a group: g:<id>)
  if (!openId || openId !== reader) return;
  let changed = false;
  for (const m of log) if (m.from === myId() && !m.read) { m.read = true; changed = true; }
  if (changed) renderLog(false);
}

function renderLog(stick = true) {
  const box = $('msgLog');
  const atBottom = box.scrollHeight - box.scrollTop - box.clientHeight < 80;
  box.replaceChildren(...log.map((m, i) => bubble(m, log[i - 1], log[i + 1])));
  if (!log.length) box.append(h('p', 'hint msg-empty', openId === SUPPORT ? 'Write to the team — questions, bugs, ideas. We answer here.' : openWith?.group ? tr('Say hi to the group! 👋') : 'Say hi! 👋'));
  if (stick || atBottom) box.scrollTop = box.scrollHeight;
}

function subLine(c: Conversation): { text: string; cls: string } {
  const t = typingText(c.id);
  if (t) return { text: t, cls: 'typing' };
  if (c.support) return { text: side === 'support' ? tr('You answer as the team') : tr('The game’s team — we read every message'), cls: '' };
  if (c.group) return { text: `${tr(c.group.members === 1 ? '1 member' : `${c.group.members} members`)}, ${tr(`${c.group.online} online`)}`, cls: '' };
  if (c.status) return { text: ui.statusText(c.status), cls: c.status.online ? (c.status.away ? 'away' : c.status.activity?.startsWith('Playing') ? 'playing' : 'on') : '' };
  return { text: c.online ? tr('Online') : '', cls: c.online ? 'on' : '' };
}
function renderHead() {
  const head = $('msgHead');
  if (!openWith) { head.replaceChildren(); paintComposer(); return; }
  const w = openWith;
  const back = h('button', 'pill msg-back', '←') as HTMLButtonElement;
  back.type = 'button'; back.setAttribute('aria-label', tr('Back'));
  back.onclick = () => { stopTyping(); openId = ''; document.getElementById('inbox')!.classList.remove('thread-open'); renderList(); };
  // tap the name (or picture): a friend's profile card / the group's page
  const who = h('button', 'msg-who') as HTMLButtonElement;
  who.type = 'button';
  const sub = subLine(w);
  const lines = h('span', 'msg-who-t');
  lines.append(h('b', '', w.support ? tr('Kanji Wizards team') : w.name), h('small', sub.cls, sub.text));
  who.append(avatar(w), lines);
  if (w.group) { who.onclick = () => void showGroup(w.id); who.title = tr('Group info'); }
  else if (!w.support) { who.dataset.profile = w.id; who.dataset.name = w.name; }
  else who.disabled = true;
  head.replaceChildren(back, who);
  if (side === 'me') head.append(notifyButton(w));
  paintComposer();
}
function showGroup(id: string) {
  return openGroupInfo(id, {
    me: () => me,
    view: (uid) => void api.player(uid).then((r) => showPlayer(r.profile)).catch((e) => ui.toast((e as Error).message)),
    changed: (g: GroupInfo) => {
      for (const m of g.members) { people.set(m.id, { name: m.name, pic: m.pic, login: m.login }); knowPlayer(m.id, m.login, m.name); }
      if (g.perms.send === 'admins') groupSendLocked.add(g.id); else groupSendLocked.delete(g.id);
      const patch = { name: g.name, pic: g.pic, group: { members: g.members.length, online: g.members.filter((m) => m.online).length, role: g.role } };
      const c = convs.find((x) => x.id === g.id);
      if (c) Object.assign(c, patch);
      if (openWith?.id === g.id) Object.assign(openWith, patch);
      listCache.set(side, convs);
      renderHead(); renderList();
    },
    left: (gid) => { convs = convs.filter((c) => c.id !== gid); listCache.set(side, convs); if (openId === gid) closeThread(); renderList(); },
    message: (uid) => void openInbox(uid),
    notify: (gid, mode) => setNotify(gid, mode),
  });
}
function closeThread() {
  stopTyping();
  openId = ''; openWith = null; log = [];
  document.getElementById('inbox')!.classList.remove('thread-open');
  $('msgThread').hidden = true;
}
/** groups where only admins may write (a member's box says so) */
const groupSendLocked = new Set<string>();
function paintComposer() {
  const input = $<HTMLTextAreaElement>('msgInput');
  const locked = !!openWith?.group && openWith.group.role === 'member' && groupSendLocked.has(openWith.id);
  input.disabled = locked;
  input.placeholder = tr(locked ? 'Only admins can send messages here' : 'Write a message…');
  for (const id of ['msgSend', 'msgEmoji', 'msgAttach']) { const b = document.getElementById(id) as HTMLButtonElement | null; if (b) b.disabled = locked; }
}

export async function openThread(id: string) {
  if (openId && openId !== id) stopTyping();
  if (editing) cancelEdit();
  closeMenus();
  openId = id;
  document.getElementById('inbox')!.classList.add('thread-open');
  $('msgThread').hidden = false;
  $('msgLog').dataset.more = '';
  openWith = convs.find((c) => c.id === id) ?? (openWith?.id === id ? openWith : null);
  renderHead(); renderList();
  const key = `${side}:${id}`;
  const cached = threads.get(key);
  if (cached) { log = cached; renderLog(); } else $('msgLog').replaceChildren(h('p', 'hint msg-empty', tr('Loading…')));
  try {
    const r = await api.thread(id, side === 'support');
    if (openId !== id) return;
    log = r.messages;
    threads.set(key, log);
    for (const [pid, p] of Object.entries(r.people ?? {})) { people.set(pid, p); knowPlayer(pid, p.login, p.name); }
    openWith = r.with ?? openWith;
    const c = convs.find((x) => x.id === id);
    if (c && c.unread) { if (side === 'support') unreadTeam = Math.max(0, unreadTeam - c.unread); else unreadMine = Math.max(0, unreadMine - c.unread); c.unread = 0; paintBadges(); }
    if (isGroup(id)) void api.group(id).then((g) => {
      if (g.group.perms.send === 'admins') groupSendLocked.add(id); else groupSendLocked.delete(id);
      for (const m of g.group.members) people.set(m.id, { name: m.name, pic: m.pic, login: m.login });
      if (openId === id) paintComposer();
    }).catch(() => { /* later */ });
  } catch (e) { $('msgLog').replaceChildren(h('p', 'hint msg-empty', (e as Error).message)); return; }
  renderHead(); renderList(); renderLog();
  const input = $<HTMLTextAreaElement>('msgInput');
  if (matchMedia('(pointer: fine)').matches && !input.disabled) input.focus();
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
  if (with_) { if (!convs.some((c) => c.id === with_)) openWith = null; await openThread(with_); if (quote) setQuote(quote); }
  else if (matchMedia('(min-width: 761px)').matches && convs[0]) await openThread(convs[0].id);
}

async function send() {
  const input = $<HTMLTextAreaElement>('msgInput');
  const typed = input.value.trim();
  if (!openId) return;
  const btn = $<HTMLButtonElement>('msgSend');
  // editing: save it
  if (editing) {
    const m = editing;
    if (!typed && !m.media) return;
    btn.disabled = true;
    const text = editQuote ? `${editQuote.split('\n').map((l) => `> ${l}`).join('\n')}\n${typed}` : typed;
    try { onDmUpdate((await api.editMessage(m.id, text)).message); cancelEdit(); } catch (e) { ui.toast((e as Error).message, 3500); } finally { btn.disabled = false; }
    return;
  }
  if (!typed) return;
  // (a quote goes first, each line marked "> ")
  const text = quoteText ? `${quoteText.split('\n').map((l) => `> ${l}`).join('\n')}\n${typed}` : typed;
  btn.disabled = true;
  stopTyping();
  try {
    const r = await api.sendMessage(openId, text, side === 'support');
    input.value = '';
    setQuote('');
    grow();
    closeEmoji();
    add(r.message);
  } catch (e) {
    if (/only the group.s admins can write/i.test((e as Error).message) && openId) { groupSendLocked.add(openId); paintComposer(); }
    ui.toast((e as Error).message, 3500);
  } finally { btn.disabled = false; }
}
/** photos from the sheet: each its own message (the caption with the first) */
async function sendPhotos(photos: string[], caption: string) {
  const to = openId;
  if (!to) return;
  for (const [i, data] of photos.entries()) {
    const up = await api.uploadPhoto(data);
    const r = await api.sendMessage(to, i === 0 ? caption : '', side === 'support', up.id);
    if (openId === to) add(r.message);
  }
}
function add(m: DmView) {
  if (log.some((x) => x.id === m.id)) return;
  log.push(m);
  renderLog(m.from === myId());
  // the list: this conversation to the top with its new last line
  const c = convs.find((x) => x.id === openId);
  if (c) { c.last = m; convs = [c, ...convs.filter((x) => x !== c)]; listCache.set(side, convs); renderList(); } else { listCache.delete(side); void loadList(); }
}
// (the box grows with what you write; a scrollbar only once it's at its tallest)
function grow() { const i = $<HTMLTextAreaElement>('msgInput'); i.style.height = 'auto'; i.style.height = `${Math.min(140, i.scrollHeight)}px`; i.style.overflowY = i.scrollHeight > 140 ? 'auto' : 'hidden'; }

/** main.ts: a message came over the game's connection */
export function onDm(m: DmView, fromName: string, muted = false) {
  const grp = isGroup(m.to);
  const toTeam = isAdmin && !grp && m.to !== me && m.from !== me; // (an admin: the team's conversations)
  const viewing = !$('inbox').hidden;
  const mySide: 'me' | 'support' = toTeam ? 'support' : 'me';
  const other = grp ? m.to : mySide === 'support' ? (m.from === SUPPORT ? m.to : m.from) : m.from === me ? m.to : m.from;
  const mineNow = (mySide === 'support' ? m.from === SUPPORT : m.from === me);
  if (grp && !people.has(m.from)) people.set(m.from, { name: fromName, pic: null });
  typingIn.get(other)?.delete(m.from); // (their typing stops with the message)
  if (viewing && side === mySide && openId === other) {
    add(m);
    if (!mineNow && !muted) audio.sfx.message(); // 0.9.9.9.6.3: a soft chime for a new message
    if (!mineNow) void api.thread(other, side === 'support').catch(() => {}); // (read now)
    if (m.kind === 'sys') { listCache.delete(side); void loadList(); }
    return;
  }
  // a conversation not on screen: its kept messages, its row, the number on ✉
  const keep = threads.get(`${mySide}:${other}`);
  if (keep && !keep.some((x) => x.id === m.id)) keep.push(m);
  if (mineNow || m.kind === 'sys') { listCache.delete(mySide); if (viewing && side === mySide) void loadList(); return; }
  if (mySide === 'support') unreadTeam++; else unreadMine++;
  paintBadges();
  if (viewing && side === mySide) { listCache.delete(mySide); void loadList(); }
  // a small note, outside battles (not for a muted chat)
  if (muted || (mutedAll && mySide === 'me') || ['battle', 'deck', 'prep'].includes(ui.currentScreen() ?? '')) return;
  audio.sfx.message();
  const where = grp ? ` · ${convs.find((c) => c.id === m.to)?.name ?? tr('group')}` : '';
  const what = m.media ? `📷 ${m.text || tr('Photo')}` : m.text.split('\n').slice(-1)[0].slice(0, 80);
  ui.toast(`✉ ${mySide === 'support' ? `${fromName} → ${tr('team')}` : fromName + where}: ${what}`, 4000);
}
/** 0.9.9.9.6.4: a message edited, deleted or reacted to */
export function onDmUpdate(m: DmView) {
  for (const list of new Set([log, ...threads.values()])) {
    const i = list.findIndex((x) => x.id === m.id);
    if (i >= 0) list[i] = { ...m, read: list[i].read || m.read };
  }
  const c = convs.find((x) => x.last.id === m.id);
  if (c) { c.last = m; if (!$('inbox').hidden) renderList(); }
  if (!$('inbox').hidden && log.some((x) => x.id === m.id)) {
    const box = $('msgLog');
    const y = box.scrollTop;
    renderLog(false);
    box.scrollTop = y;
  }
}
/** 0.9.9.9.6.4: a group changed — or you're no longer in it */
export function onDmGroup(group: string, event: 'changed' | 'removed') {
  listCache.delete('me');
  if (event === 'removed') {
    convs = convs.filter((c) => c.id !== group);
    if (openId === group) { closeThread(); ui.toast(tr('You’re no longer in this group'), 3500); }
  }
  if (!$('inbox').hidden) void loadList();
  if (event === 'changed' && openId === group) void api.group(group).then((g) => {
    if (g.group.perms.send === 'admins') groupSendLocked.add(group); else groupSendLocked.delete(group);
    if (openWith?.id === group) { openWith.name = g.group.name; openWith.pic = g.group.pic; openWith.group = { members: g.group.members.length, online: g.group.members.filter((x) => x.online).length, role: g.group.role }; }
    for (const x of g.group.members) people.set(x.id, { name: x.name, pic: x.pic, login: x.login });
    renderHead();
  }).catch(() => { /* gone */ });
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
    row = (e.target as HTMLElement).closest<HTMLElement>('.msg-row:not(.gone)');
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
    // (a swipe is not a tap: the menu stays shut)
    if (dir === 'x') { const r = row; r.dataset.swiped = '1'; setTimeout(() => { delete r.dataset.swiped; }, 350); }
    if (armed && e.type === 'pointerup') row.querySelector<HTMLButtonElement>('.msg-qbtn')?.click();
    reset();
  };
  box.addEventListener('pointerup', end);
  box.addEventListener('pointercancel', end);
}

// ── the emoji panel by the box ──
let emojiBox: HTMLElement | null = null;
function closeEmoji() { $('msgEmojiPick').hidden = true; }
/** who "@" suggests: your friends, and the people in this group */
function mentionables(): Mentionable[] {
  const out: Mentionable[] = [];
  if (openWith?.group) for (const [id, p] of people) if (id !== me && p.login) out.push({ id, name: p.name, login: p.login, pic: p.pic });
  for (const f of knownFriends()?.friends ?? []) if (f.status === 'accepted') out.push({ id: f.id, name: f.name ?? f.username, login: f.username, pic: f.pic ?? null });
  return out;
}

export function initInbox() {
  swipeToReply($('msgLog'));
  $('inboxBtn').onclick = () => void openInbox();
  $('inboxBack').onclick = () => ui.show(ui.isLobbyAside() ? 'lobby' : 'menu');
  $('msgForm').addEventListener('submit', (e) => { e.preventDefault(); void send(); });
  const input = $<HTMLTextAreaElement>('msgInput');
  input.addEventListener('input', () => { grow(); if (input.value.trim() && !editing) iAmTyping(); else stopTyping(); });
  attachMentionSuggest(input, mentionables); // (its keys first: Enter picks a name while the list is open)
  // Enter sends (Shift+Enter: a new line) — on a computer; on a phone Enter is a new line and the button sends
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey && matchMedia('(pointer: fine)').matches) { e.preventDefault(); void send(); }
    else if (e.key === 'Escape' && editing) { e.preventDefault(); cancelEdit(); }
    else if (e.key === 'ArrowUp' && !input.value && !editing) { const last = [...log].reverse().find(canEdit); if (last) { e.preventDefault(); startEdit(last); } } // (Telegram: ↑ edits your last one)
  });
  // a picture pasted into the box, or dropped on the chat: the photo sheet, with it picked
  input.addEventListener('paste', (e) => {
    const files = [...(e.clipboardData?.files ?? [])].filter((f) => f.type.startsWith('image/'));
    if (files.length && openId && !input.disabled) { e.preventDefault(); openPhotoSheet(sendPhotos, files); }
  });
  const thread = $('msgThread');
  thread.addEventListener('dragover', (e) => { if (e.dataTransfer?.types.includes('Files')) { e.preventDefault(); thread.classList.add('drop'); } });
  thread.addEventListener('dragleave', (e) => { if (e.target === thread) thread.classList.remove('drop'); });
  thread.addEventListener('drop', (e) => {
    thread.classList.remove('drop');
    const files = [...(e.dataTransfer?.files ?? [])].filter((f) => f.type.startsWith('image/'));
    if (files.length && openId && !input.disabled) { e.preventDefault(); openPhotoSheet(sendPhotos, files); }
  });
  for (const b of document.querySelectorAll<HTMLElement>('#msgSide [data-side]')) b.onclick = () => void openInbox(undefined, b.dataset.side === 'support');
  // 0.9.9.9.6.1: emoji — 0.9.9.9.6.4: a bigger panel, in categories
  const pick = $('msgEmojiPick');
  $('msgEmoji').onclick = (e) => {
    e.stopPropagation();
    if (!emojiBox) { emojiBox = emojiPanel((em) => { insertAtCaret($<HTMLTextAreaElement>('msgInput'), em); grow(); }); pick.replaceChildren(emojiBox); }
    pick.hidden = !pick.hidden;
  };
  document.addEventListener('pointerdown', (e) => { if (!pick.hidden && !(e.target as Element).closest('#msgEmojiPick, #msgEmoji')) pick.hidden = true; });
  // photos
  $('msgAttach').onclick = () => { if (openId) openPhotoSheet(sendPhotos); };
  // older messages: scrolled to the top
  $('msgLog').addEventListener('scroll', async () => {
    const box = $('msgLog');
    closeMenus();
    if (box.scrollTop > 40 || loading || !openId || log.length < 60 || box.dataset.more === 'none') return;
    loading = true;
    try {
      const r = await api.thread(openId, side === 'support', log[0].at);
      if (!r.messages.length) { box.dataset.more = 'none'; return; }
      for (const [pid, p] of Object.entries(r.people ?? {})) people.set(pid, p);
      const h0 = box.scrollHeight;
      log = [...r.messages, ...log]; threads.set(`${side}:${openId}`, log);
      renderLog(false);
      box.scrollTop = box.scrollHeight - h0;
    } catch { /* later */ } finally { loading = false; }
  }, { passive: true });
  setInterval(() => { if (document.visibilityState === 'visible') void refreshUnread(); }, 120_000);
}
