// Friends: add by name, accept requests, see who is online (and what they're doing), invite them into
// your room from the lobby. Invites arrive as a small card with Join / Decline.

import type { GameMode } from '../shared/protocol';
import { MODE_LABEL } from '../shared/protocol';
import { api, type Friend } from './api';
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
let hooks: { send: (m: { type: 'invite'; friendId: string }) => void; join: (code: string) => void; inRoom: () => boolean };
export function initFriends(h: typeof hooks) { hooks = h; }

async function refresh(force = false) {
  if (!force && Date.now() - fetchedAt < 8000) return friends;
  try { friends = (await api.friends()).friends; fetchedAt = Date.now(); } catch { /* offline */ }
  updateBadge();
  return friends;
}
function updateBadge() {
  const n = friends.filter((f) => f.status === 'incoming').length;
  const b = $('friendsBadge');
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
    const r = el('div', 'fl-row' + (f.online ? ' online' : ''));
    const who = el('div', 'fl-who');
    const name = el('span', 'fl-name', f.username);
    ui.markProfile(name, { id: f.id, name: f.username, bot: null });
    who.append(el('i', 'dot'), name, el('small', '', f.status === 'accepted' ? (f.online ? f.activity ?? 'Online' : 'Offline') : f.status === 'incoming' ? 'wants to be friends' : 'request sent'));
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
let lobbyIds: string[] = [];
let cooldownTimer = 0;
/** Lobby: your online friends (not already in the room) with an Invite button — again after 10 s. */
export async function renderLobbyInvites(isLobby: boolean, inRoom: string[] = lobbyIds) {
  const box = $('lobbyInvite');
  lobbyIds = inRoom;
  clearTimeout(cooldownTimer);
  if (!isLobby) { box.hidden = true; return; }
  await refresh();
  const online = friends.filter((f) => f.status === 'accepted' && f.online && !lobbyIds.includes(f.id));
  box.hidden = online.length === 0;
  if (!online.length) return;
  let soonest = Infinity;
  box.replaceChildren(el('h4', '', 'Invite friends'), ...online.map((f) => {
    const r = el('div', 'li-row');
    const playing = !!f.activity?.startsWith('Playing');
    const wait = INVITE_COOLDOWN_MS - (Date.now() - (invitedAt.get(f.id) ?? 0));
    if (wait > 0) soonest = Math.min(soonest, wait);
    const b = el('button', 'pill primary', playing ? 'In a game' : wait > 0 ? `Invited · ${Math.ceil(wait / 1000)}s` : invitedAt.has(f.id) ? 'Invite again' : 'Invite') as HTMLButtonElement;
    b.disabled = playing || wait > 0;
    b.title = playing ? 'They are playing — invite them when their game is over' : '';
    b.onclick = () => { hooks.send({ type: 'invite', friendId: f.id }); invitedAt.set(f.id, Date.now()); void renderLobbyInvites(true); };
    r.append(el('i', 'dot'), el('span', '', f.username), el('small', 'hint', f.activity ?? ''), b);
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
  no.onclick = close;
  box.replaceChildren(el('b', '', `${msg.from} invites you`), el('span', '', `to ${MODE_LABEL[msg.mode]} — room ${msg.code}`), el('div', 'ib-actions'));
  box.lastElementChild!.append(join, no);
  box.hidden = false;
  audio.sfx.go();
  attention(`${msg.from} invites you`, `Join their ${MODE_LABEL[msg.mode]} room`);
  const t = window.setTimeout(close, 60_000);
}

export function onFriendEvent(msg: { event: 'request' | 'accepted'; from: string }) {
  ui.toast(msg.event === 'request' ? `${msg.from} wants to be your friend — see Friends` : `${msg.from} accepted your friend request`, 5000);
  void refresh(true).then(() => { if (ui.currentScreen() === 'friends') render(); });
}
