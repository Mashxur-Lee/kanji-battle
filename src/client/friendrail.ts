// The friends rail (like Valorant's): on the right edge of the menus, only pictures while it's narrow;
// hover (or tab into) it and it opens to show names, levels and what everyone is doing. Click a friend for
// their profile. At the bottom: Add friend and Friend requests, which open a small window.

import { api, type Friend } from './api';
import * as ui from './ui';
import { swallowNextClick } from './taps';
import { tr } from './i18n';

const $ = ui.$;
const el = (tag: string, cls = '', text?: string | number) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
};

/** Screens where the rail shows (not in games, not on the login page). */
const RAIL_SCREENS = new Set(['menu', 'queue', 'admin', 'private', 'modes', 'lobby', 'results', 'study', 'review', 'passage', 'dict', 'customize', 'history', 'progress', 'daily', 'friends', 'inbox', 'quizzes', 'kana']); // (0.9.9.9.6.1: and Messages)
let friends: Friend[] = [];
let signedIn = false;
let timer = 0;
let collapsed: Record<'online' | 'offline', boolean> = { online: false, offline: true };

/** 0.9.9.9.6: the friends list as last fetched (a profile card opens with it at once) */
export const knownFriends = () => (friendsAt ? { friends, at: friendsAt } : null);
let friendsAt = 0;
/** 0.9.9.9.6.3: who you are (a friend in your room is "Playing with you") */
let meId = '';
export function setRailMe(id: string) { if (meId === id) return; meId = id; if (friends.length) render(); } // (re-drawn: the list may have come first)
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
  $('railFab').classList.toggle('panel-open', on); // 0.9.9.9: the round button hides while its panel is out
}
$('railFab').onclick = (e) => { e.stopPropagation(); setOpen(!$('friendRail').classList.contains('open')); };
$('railClose').onclick = (e) => { e.stopPropagation(); setOpen(false); };
document.addEventListener('pointerdown', (e) => {
  const t = e.target as HTMLElement;
  if ($('friendRail').classList.contains('open') && !t.closest('#friendRail, #railFab, #friendDialog, #otherPop, .csel-menu')) { setOpen(false); swallowNextClick(); }
});

export async function refreshRail() {
  try { friends = (await api.friends()).friends; friendsAt = Date.now(); } catch { return; }
  render();
}

const avatar = (f: Friend) => {
  const a = el('span', 'fr-av');
  if (f.pic) { const img = el('img') as HTMLImageElement; img.src = f.pic; img.alt = ''; a.append(img); }
  else a.textContent = (f.name ?? f.username).slice(0, 1).toUpperCase();
  a.append(f.online ? deviceBadge(f) : el('i', 'fr-dot'));
  return a;
};

// 0.9.9.9.2: an online friend's dot is a small icon of where they play — a globe (the website), a monitor (the PC
// app) or a phone (the Android app); green, orange while away
// (0.9.9.9.3: plain filled silhouettes — no circle behind them; green, with a dark outline so they read on any picture)
const DEVICE_SVG: Record<string, string> = {
  web: '<path fill-rule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.6 2.2C8.9 6 8 8.6 7.9 11H4.1a8 8 0 0 1 6.3-6.8Zm3.2 0A8 8 0 0 1 19.9 11h-3.8c-.1-2.4-1-5-2.5-6.8ZM12 4.6c1.3 1.6 2 3.9 2.1 6.4H9.9c.1-2.5.8-4.8 2.1-6.4ZM4.1 13h3.8c.1 2.4 1 5 2.5 6.8A8 8 0 0 1 4.1 13Zm5.8 0h4.2c-.1 2.5-.8 4.8-2.1 6.4-1.3-1.6-2-3.9-2.1-6.4Zm6.2 0h3.8a8 8 0 0 1-6.3 6.8c1.5-1.8 2.4-4.4 2.5-6.8Z"/>',
  pc: '<path d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v10a1.5 1.5 0 0 1-1.5 1.5H14l.6 3H17a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h2.4l.6-3H4.5A1.5 1.5 0 0 1 3 14.5Z"/>',
  phone: '<path fill-rule="evenodd" d="M8 1.5h8A2.5 2.5 0 0 1 18.5 4v16a2.5 2.5 0 0 1-2.5 2.5H8A2.5 2.5 0 0 1 5.5 20V4A2.5 2.5 0 0 1 8 1.5Zm2.5 17.2a.9.9 0 0 0 0 1.8h3a.9.9 0 0 0 0-1.8Z"/>',
};
const DEVICE_NAME: Record<string, string> = { web: 'On the website', pc: 'On the PC app', phone: 'On the phone app' };
export function deviceBadge(f: Friend, cls = 'fr-dev') {
  const d = f.device ?? 'web';
  const i = el('i', `${cls} dev-${d}`);
  i.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">${DEVICE_SVG[d] ?? DEVICE_SVG.web}</svg>`;
  i.title = tr(DEVICE_NAME[d] ?? DEVICE_NAME.web);
  return i;
}

/** 0.9.9.9: "Away" when their app is in the background; offline friends show when they were last online */
export function friendStatus(f: Friend): string {
  if (f.online) return f.away ? tr('Away') : f.activity ? tr(f.activity) : tr('Online');
  return f.lastSeen ? `${tr('Last online')} ${seenAgo(f.lastSeen)}` : tr('Offline');
}
function seenAgo(at: number): string {
  const m = Math.max(0, Math.round((Date.now() - at) / 60_000));
  if (m < 1) return tr('just now');
  if (m < 60) return tr(`${m} min ago`);
  const h = Math.round(m / 60);
  if (h < 24) return tr(`${h} h ago`);
  const d = new Date(at);
  const days = Math.round(h / 24);
  const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  if (days === 1) return `${tr('yesterday')} ${time}`;
  return days < 7 ? tr(`${days} days ago`) : d.toLocaleDateString([], { day: 'numeric', month: 'short' });
}

function render() {
  const accepted = friends.filter((f) => f.status === 'accepted').sort((a, b) => a.username.localeCompare(b.username));
  const online = accepted.filter((f) => f.online), offline = accepted.filter((f) => !f.online);
  const incoming = friends.filter((f) => f.status === 'incoming').length;
  const section = (key: 'online' | 'offline', title: string, list: Friend[]) => {
    const head = el('button', 'fr-sec', '') as HTMLButtonElement;
    head.append(el('b', 'fr-count', list.length), el('span', 'fr-sec-name', title), el('span', 'fr-chev', collapsed[key] ? '▾' : '▴'));
    head.setAttribute('aria-expanded', String(!collapsed[key]));
    head.onclick = () => { collapsed[key] = !collapsed[key]; render(); };
    // 0.9.9.9.6.3: friends in the same room stand together under one bracket (like Steam) — "Playing together", or
    // "Playing with you" when you're in it too; "+N" counts only the people in it you don't know
    const groups = new Map<string, Friend[]>();
    if (key === 'online') for (const f of list) { const id = f.party?.id; if (id) groups.set(id, [...(groups.get(id) ?? []), f]); }
    const together = (f: Friend) => { const id = f.party?.id; return !!id && ((groups.get(id)?.length ?? 0) > 1 || !!f.party?.members?.includes(meId)); };
    const ordered = key === 'online' ? [...list.filter(together).sort((a, b) => (a.party!.id! < b.party!.id! ? -1 : a.party!.id! > b.party!.id! ? 1 : 0)), ...list.filter((f) => !together(f))] : list;
    const rowOf = (f: Friend) => {
      const r = el('div', 'fr-row' + (f.online ? ' online' : '') + (f.online && f.away ? ' away' : ''));
      ui.markProfile(r, { id: f.id, name: f.name ?? f.username, bot: null });
      r.title = `${f.name ?? f.username} — view profile`;
      const txt = el('span', 'fr-txt');
      txt.append(el('span', 'fr-name', f.name ?? f.username), el('small', 'fr-status', friendStatus(f)));
      // 0.9.9.9.5.5: in a lobby with others — a lobby icon and "+1" (+3 in a full Boss party); green when it's open to join
      const pt = f.online ? f.party : undefined;
      const known = pt?.members ? pt.members.filter((id) => id === meId || friends.some((x) => x.id === id && x.status === 'accepted')).length : 1;
      const others = pt ? Math.max(0, pt.size - (pt.members ? known : 1)) : 0;
      if (pt && together(f)) {
        // (in a group: the bracket's head says it; a row only adds the people in the room you don't know)
        if (others > 0) { const party = el('small', 'fr-party with'); party.append(el('b', '', `+${others}`), el('span', '', tr(others === 1 ? 'other player' : 'other players'))); txt.append(party); }
      } else if (pt && (pt.size > 1 || pt.code)) {
        const party = el('small', 'fr-party' + (pt.code ? ' open' : ''));
        const ic = el('i', 'fr-party-ic');
        ic.innerHTML = '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.5-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 19.2C2 16 5 13.5 9 13.5s7 2.5 7 5.7c0 .5-.4.8-.9.8H2.9c-.5 0-.9-.3-.9-.8Zm15.3.8c.1-.3.2-.5.2-.8 0-1.9-.8-3.6-2.2-4.9.4-.1.8-.1 1.2-.1 3.4 0 5.5 2 5.5 4.6 0 .7-.4 1.2-1 1.2Z"/></svg>';
        party.append(ic, el('b', '', pt.size > 1 ? `+${pt.size - 1}` : ''), el('span', '', pt.code ? tr('Open lobby') : tr(pt.mode)));
        party.title = `${tr(pt.mode)} · ${pt.size}/${pt.max}${pt.code ? ` · ${tr('Open lobby')}` : ''}`;
        txt.append(party);
      }
      r.append(avatar(f), txt, el('span', 'fr-lv', `Lv ${f.level ?? 0}`));
      return r;
    };
    const rows: HTMLElement[] = [];
    if (!collapsed[key]) {
      for (let i = 0; i < ordered.length; i++) {
        const f = ordered[i];
        if (!together(f)) { rows.push(rowOf(f)); continue; }
        const id = f.party!.id!;
        const members = ordered.filter((x) => x.party?.id === id);
        i += members.length - 1;
        const withMe = !!f.party?.members?.includes(meId);
        const g = el('div', `fr-group${withMe ? ' with-me' : ''}`);
        const gh = el('div', 'fr-group-head');
        gh.append(el('b', '', withMe ? tr('Playing with you') : tr('Playing together')), el('span', '', tr(f.party!.mode)));
        g.append(gh, ...members.map(rowOf));
        rows.push(g);
      }
    }
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
    const t = el('span', 'fr-txt'); t.append(el('span', 'fr-name', f.name ?? f.username), el('small', 'fr-status', note));
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
