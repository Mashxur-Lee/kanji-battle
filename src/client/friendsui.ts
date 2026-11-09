// Friends: add by name, accept requests, see who is online (and what they're doing), invite them into
// your room from the lobby. Invites arrive as a small card with Join / Decline.

import type { GameMode } from '../shared/protocol';
import { MODE_LABEL } from '../shared/protocol';
import { api, type Friend } from './api';
import { deviceBadge, friendStatus } from './friendrail';
import * as audio from './audio';
import { attention } from './notify';
import * as ui from './ui';

const $ = ui.$;
const el = (tag: string, cls = '', text?: string | number) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};

let friends: Friend[] = [];
let fetchedAt = 0;
let hooks: { send: (m: { type: 'invite'; friendId: string } | { type: 'invite_decline'; fromId: string }) => void; join: (code: string) => void; inRoom: () => boolean };
export function initFriends(h: typeof hooks) { hooks = h; }

async function refresh(force = false) {
  if (!force && Date.now() - fetchedAt < 8000) return friends;
  try { friends = (await api.friends()).friends; fetchedAt = Date.now(); } catch { /* offline */ }
  updateBadge();
  return friends;
}
function updateBadge() {
  const n = friends.filter((f) => f.status === 'incoming').length;
  const b = document.getElementById('friendsBadge'); // (the menu button gave way to the friends list on the right)
  if (!b) return;
  b.hidden = n === 0;
  b.textContent = String(n);
}
export const refreshFriendsBadge = () => void refresh(true);

export async function openFriends() {
  ui.show('friends');
  $('friendMsg').textContent = '';
  await refresh(true);
  render();
}

function render() {
  const list = $('friendList');
  const incoming = friends.filter((f) => f.status === 'incoming');
  const accepted = friends.filter((f) => f.status === 'accepted').sort((a, b) => Number(b.online) - Number(a.online) || a.username.localeCompare(b.username));
  const outgoing = friends.filter((f) => f.status === 'outgoing');
  const section = (title: string, rows: HTMLElement[]) => {
    if (!rows.length) return [];
    const s = el('div', 'fl-section');
    s.append(el('h3', '', title), ...rows);
    return [s];
  };
  const row = (f: Friend, actions: HTMLElement[]) => {
    const r = el('div', 'fl-row' + (f.online ? ' online' : '') + (f.online && f.away ? ' away' : ''));
    const who = el('div', 'fl-who');
    const name = el('span', 'fl-name', f.name ?? f.username);
    ui.markProfile(name, { id: f.id, name: f.name ?? f.username, bot: null });
    who.append(f.status === 'accepted' && f.online ? deviceBadge(f, 'dot dev') : el('i', 'dot'), name, el('small', '', f.status === 'accepted' ? friendStatus(f) : f.status === 'incoming' ? 'wants to be friends' : 'request sent'));
    r.append(who, el('div', 'fl-actions'));
    r.lastElementChild!.append(...actions);
    return r;
  };
  const btn = (text: string, cls: string, fn: () => Promise<{ friends: Friend[] }>) => {
    const b = el('button', `pill ${cls}`, text) as HTMLButtonElement;
    b.onclick = async () => { b.disabled = true; try { friends = (await fn()).friends; fetchedAt = Date.now(); updateBadge(); render(); } catch (e) { ui.toast((e as Error).message); b.disabled = false; } };
    return b;
  };
  const nodes = [
    ...section(`Requests (${incoming.length})`, incoming.map((f) => row(f, [btn('Accept', 'primary', () => api.acceptFriend(f.id)), btn('Decline', '', () => api.removeFriend(f.id))]))),
    ...section(`Friends (${accepted.length}) · ${accepted.filter((f) => f.online).length} online`, accepted.map((f) => row(f, [btn('Remove', 'danger', () => api.removeFriend(f.id))]))),
    ...section('Sent requests', outgoing.map((f) => row(f, [btn('Cancel', '', () => api.removeFriend(f.id))]))),
  ];
  list.replaceChildren(...(nodes.length ? nodes : [el('p', 'hint', 'No friends yet — add someone by their player name above.')]));
}

$('friendAdd').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = $<HTMLInputElement>('friendName');
  const name = input.value.trim();
  if (!name) return;
  try {
    const r = await api.addFriend(name);
    friends = r.friends; fetchedAt = Date.now();
    $('friendMsg').textContent = r.result === 'accepted' ? `You and ${name} are now friends!` : r.result === 'exists' ? `You already asked ${name}.` : `Request sent to ${name}.`;
    input.value = '';
    render();
  } catch (err) { $('friendMsg').textContent = (err as Error).message; }
});
$('friendsBack').onclick = () => ui.show('menu');
$('friendsRefresh').onclick = () => void openFriends();

const INVITE_COOLDOWN_MS = 10_000;
const invitedAt = new Map<string, number>();
/** 0.9.9.9.5: friends who declined your invite → until when you can't invite them again (your clock) */
const declinedUntil = new Map<string, number>();
const mmss = (ms: number) => { const s = Math.ceil(ms / 1000); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
let lobbyIds: string[] = [];
let cooldownTimer = 0;
/**
 * Lobby: your friends (not already in the room) with an Invite button — again after 10 s. Online ones first; then
 * (0.9.9.9.5) those with the app closed whose phone gets the invite as a notification. Declined: not for 5 minutes.
 */
export async function renderLobbyInvites(isLobby: boolean, inRoom: string[] = lobbyIds) {
  const box = $('lobbyInvite');
  lobbyIds = inRoom;
  clearTimeout(cooldownTimer);
  if (!isLobby) { box.hidden = true; return; }
  await refresh();
  const mine = friends.filter((f) => f.status === 'accepted' && !lobbyIds.includes(f.id));
  const online = [...mine.filter((f) => f.online && !f.away), ...mine.filter((f) => f.online && f.away), ...mine.filter((f) => !f.online && f.push)];
  box.hidden = online.length === 0;
  if (!online.length) return;
  let soonest = Infinity;
  const now = Date.now();
  box.replaceChildren(el('h4', '', 'Invite friends'), ...online.map((f) => {
    const r = el('div', 'li-row' + (f.online && !f.away ? '' : ' away'));
    const playing = !!f.activity?.startsWith('Playing');
    const wait = INVITE_COOLDOWN_MS - (now - (invitedAt.get(f.id) ?? 0));
    const declined = (declinedUntil.get(f.id) ?? 0) - now;
    if (wait > 0) soonest = Math.min(soonest, wait);
    if (declined > 0) soonest = Math.min(soonest, declined);
    const label = playing ? 'In a game' : declined > 0 ? `Declined · ${mmss(declined)}` : wait > 0 ? `Invited · ${Math.ceil(wait / 1000)}s` : invitedAt.has(f.id) ? 'Invite again' : 'Invite';
    const b = el('button', 'pill primary', label) as HTMLButtonElement;
    b.disabled = playing || wait > 0 || declined > 0;
    b.title = playing ? 'They are playing — invite them when their game is over' : declined > 0 ? 'They declined — you can invite them again in a few minutes' : '';
    b.onclick = () => { hooks.send({ type: 'invite', friendId: f.id }); invitedAt.set(f.id, Date.now()); void renderLobbyInvites(true); };
    // (the app closed: the invite comes as a notification on their phone)
    const where = f.online && !f.away ? f.activity ?? '' : 'Gets a notification on their phone';
    r.append(el('i', 'dot'), el('span', '', f.name ?? f.username), el('small', 'hint', where), b);
    return r;
  }));
  // tick the countdown on the buttons
  if (soonest < Infinity) cooldownTimer = window.setTimeout(() => { if (!box.hidden) void renderLobbyInvites(true); }, Math.min(1000, soonest));
}

/** A friend invites you: a card with Join / Decline (and an alert if the tab is in the background). */
export function onInvite(msg: { fromId: string; from: string; code: string; mode: GameMode }) {
  const box = $('inviteBox');
  const join = el('button', 'big', 'Join') as HTMLButtonElement;
  const no = el('button', 'pill', 'Decline') as HTMLButtonElement;
  const close = () => { box.hidden = true; clearTimeout(t); };
  join.onclick = () => {
    close();
    hooks.join(msg.code); // leaves the room you're in first (lobby / results)
  };
  // 0.9.9.9.5: the friend is told, and can't invite you again for 5 minutes
  no.onclick = () => { close(); hooks.send({ type: 'invite_decline', fromId: msg.fromId }); };
  box.replaceChildren(el('b', '', `${msg.from} invites you`), el('span', '', `to ${MODE_LABEL[msg.mode]} — room ${msg.code}`), el('div', 'ib-actions'));
  box.lastElementChild!.append(join, no);
  box.hidden = false;
  box.classList.remove('ring'); void box.offsetWidth; box.classList.add('ring'); // (the card shakes a little, like a bell)
  audio.sfx.go();
  try { navigator.vibrate?.([90, 70, 90]); } catch { /* no vibration */ }
  attention(`${msg.from} invites you`, `Join their ${MODE_LABEL[msg.mode]} room`);
  const t = window.setTimeout(close, 60_000);
}

/** 0.9.9.8.1: the other player asks for a rematch — the same card as an invite (it was one quiet line of text) */
let rematchClose: (() => void) | null = null;
export function onRematchAsk(from: string, accept: () => void) {
  const box = $('inviteBox');
  const yes = el('button', 'big', 'Rematch') as HTMLButtonElement;
  const no = el('button', 'pill', 'Not now') as HTMLButtonElement;
  const close = () => { box.hidden = true; clearTimeout(t); rematchClose = null; };
  yes.onclick = () => { close(); accept(); };
  no.onclick = close;
  box.replaceChildren(el('b', '', `${from} wants a rematch`), el('span', '', 'Play again with the same settings?'), el('div', 'ib-actions'));
  box.lastElementChild!.append(yes, no);
  box.hidden = false;
  audio.sfx.go();
  attention(`${from} wants a rematch`, 'Play again?');
  const t = window.setTimeout(close, 45_000);
  rematchClose = close;
}
/** the rematch card goes away (the game started, you left, or you already said yes) */
export function closeRematchAsk() { rematchClose?.(); }

export function onFriendEvent(msg: { event: 'request' | 'accepted'; from: string }) {
  ui.toast(msg.event === 'request' ? `${msg.from} wants to be your friend — see Friends` : `${msg.from} accepted your friend request`, 5000);
  void refresh(true).then(() => { if (ui.currentScreen() === 'friends') render(); });
}

/** 0.9.9.9.5: the friend you invited said no — the lobby shows "Declined · 4:59" until you may ask again */
export function onInviteDeclined(msg: { friendId: string; name: string; until: number }) {
  declinedUntil.set(msg.friendId, Date.now() + DECLINE_BLOCK_MS);
  ui.toast(`${msg.name} declined your invite`);
  void renderLobbyInvites(!$('lobbyInvite').hidden || ui.currentScreen() === 'lobby');
}
const DECLINE_BLOCK_MS = 5 * 60_000;
