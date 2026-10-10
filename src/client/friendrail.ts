// The friends rail (like Valorant's): on the right edge of the menus, only pictures while it's narrow;
// hover (or tab into) it and it opens to show names, levels and what everyone is doing. Click a friend for
// their profile. At the bottom: Add friend and Friend requests, which open a small window.

import { api, type Friend } from './api';
import * as ui from './ui';

const $ = ui.$;
const el = (tag: string, cls = '', text?: string | number) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};

/** Screens where the rail shows (not in games, not on the login page). */
const RAIL_SCREENS = new Set(['menu', 'queue', 'admin', 'modes', 'lobby', 'results', 'study', 'customize', 'history', 'progress', 'daily', 'friends']);
let friends: Friend[] = [];
let signedIn = false;
let timer = 0;
let collapsed: Record<'online' | 'offline', boolean> = { online: false, offline: true };

export function setRailUser(on: boolean) {
  signedIn = on;
  if (!on) { $('friendRail').hidden = true; $('railFab').hidden = true; clearInterval(timer); }
}

/** Called on every screen change. */
export function railScreen(screen: string) {
  const show = signedIn && RAIL_SCREENS.has(screen);
  $('friendRail').hidden = !show;
  $('railFab').hidden = !show;
  setOpen(false);
  document.body.classList.toggle('has-rail', show);
  clearInterval(timer);
  if (show) { void refreshRail(); timer = window.setInterval(() => void refreshRail(), 20_000); }
}

// phones: no hover — a round Friends button (bottom-right) slides the list in and out
function setOpen(on: boolean) {
  $('friendRail').classList.toggle('open', on);
  $('railFab').setAttribute('aria-expanded', String(on));
}
$('railFab').onclick = (e) => { e.stopPropagation(); setOpen(!$('friendRail').classList.contains('open')); };
document.addEventListener('pointerdown', (e) => {
  const t = e.target as HTMLElement;
  if ($('friendRail').classList.contains('open') && !t.closest('#friendRail, #railFab, #friendDialog, #otherPop')) setOpen(false);
});

export async function refreshRail() {
  try { friends = (await api.friends()).friends; } catch { return; }
  render();
}

const avatar = (f: Friend) => {
  const a = el('span', 'fr-av');
  if (f.pic) { const img = el('img') as HTMLImageElement; img.src = f.pic; img.alt = ''; a.append(img); }
  else a.textContent = f.username.slice(0, 1).toUpperCase();
  a.append(el('i', 'fr-dot'));
  return a;
};

function render() {
  const accepted = friends.filter((f) => f.status === 'accepted').sort((a, b) => a.username.localeCompare(b.username));
  const online = accepted.filter((f) => f.online), offline = accepted.filter((f) => !f.online);
  const incoming = friends.filter((f) => f.status === 'incoming').length;
  const section = (key: 'online' | 'offline', title: string, list: Friend[]) => {
    const head = el('button', 'fr-sec', '') as HTMLButtonElement;
    head.append(el('b', 'fr-count', list.length), el('span', 'fr-sec-name', title), el('span', 'fr-chev', collapsed[key] ? '▾' : '▴'));
    head.setAttribute('aria-expanded', String(!collapsed[key]));
    head.onclick = () => { collapsed[key] = !collapsed[key]; render(); };
    const rows = collapsed[key] ? [] : list.map((f) => {
      const r = el('div', 'fr-row' + (f.online ? ' online' : ''));
      ui.markProfile(r, { id: f.id, name: f.username, bot: null });
      r.title = `${f.username} — view profile`;
      const txt = el('span', 'fr-txt');
      txt.append(el('span', 'fr-name', f.username), el('small', 'fr-status', f.online ? f.activity ?? 'Online' : 'Offline'));
      r.append(avatar(f), txt, el('span', 'fr-lv', `Lv ${f.level ?? 0}`));
      return r;
    });
    return [head, ...rows];
  };
  const list = $('railList');
  list.replaceChildren(
    ...section('online', 'Online', online),
    ...section('offline', 'Offline', offline),
    ...(accepted.length ? [] : [el('p', 'fr-empty', 'No friends yet — add someone below.')]),
  );
  $('railOnline').textContent = String(online.length);
  $('railFabCount').textContent = String(online.length);
  $('railFab').classList.toggle('alert', incoming > 0);
  const badge = $('railReqBadge');
  badge.hidden = incoming === 0;
  badge.textContent = String(incoming);
}

// ── the small window: Add friend / Friend requests ──────────────────────────
function openDialog(tab: 'add' | 'requests') {
  const d = $<HTMLDialogElement>('friendDialog');
  for (const b of d.querySelectorAll<HTMLButtonElement>('[data-ftab]')) b.classList.toggle('on', b.dataset.ftab === tab);
  $('fdAdd').hidden = tab !== 'add';
  $('fdRequests').hidden = tab !== 'requests';
  $('fdMsg').textContent = '';
  renderRequests();
  if (!d.open) d.showModal();
  if (tab === 'add') setTimeout(() => $<HTMLInputElement>('fdName').focus(), 30);
}

function renderRequests() {
  const box = $('fdReqList');
  const incoming = friends.filter((f) => f.status === 'incoming');
  const outgoing = friends.filter((f) => f.status === 'outgoing');
  const act = (text: string, cls: string, fn: () => Promise<{ friends: Friend[] }>) => {
    const b = el('button', `pill ${cls}`, text) as HTMLButtonElement;
    b.onclick = async () => { b.disabled = true; try { friends = (await fn()).friends; render(); renderRequests(); } catch (e) { ui.toast((e as Error).message); b.disabled = false; } };
    return b;
  };
  const row = (f: Friend, buttons: HTMLElement[], note: string) => {
    const r = el('div', 'fd-row');
    const t = el('span', 'fr-txt'); t.append(el('span', 'fr-name', f.username), el('small', 'fr-status', note));
    r.append(avatar(f), t, ...buttons);
    return r;
  };
  box.replaceChildren(
    ...(incoming.length ? [el('h4', '', `Requests (${incoming.length})`), ...incoming.map((f) => row(f, [act('Accept', 'primary', () => api.acceptFriend(f.id)), act('Decline', '', () => api.removeFriend(f.id))], 'wants to be friends'))] : [el('p', 'hint', 'No friend requests right now.')]),
    ...(outgoing.length ? [el('h4', '', 'Sent requests'), ...outgoing.map((f) => row(f, [act('Cancel', '', () => api.removeFriend(f.id))], 'request sent'))] : []),
  );
}

$('railAdd').onclick = () => openDialog('add');
$('railReq').onclick = () => openDialog('requests');
for (const b of document.querySelectorAll<HTMLButtonElement>('#friendDialog [data-ftab]')) b.onclick = () => openDialog(b.dataset.ftab as 'add' | 'requests');
$('fdClose').onclick = () => $<HTMLDialogElement>('friendDialog').close();
$('fdAdd').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = $<HTMLInputElement>('fdName');
  const name = input.value.trim();
  if (!name) return;
  try {
    const r = await api.addFriend(name);
    friends = r.friends;
    $('fdMsg').textContent = r.result === 'accepted' ? `You and ${name} are now friends!` : r.result === 'exists' ? `You already asked ${name}.` : `Request sent to ${name}.`;
    input.value = '';
    render();
  } catch (err) { $('fdMsg').textContent = (err as Error).message; }
});
// clicking a friend opens their profile (main.ts handles [data-profile]); close the window first
$('railList').addEventListener('click', () => $<HTMLDialogElement>('friendDialog').close());
