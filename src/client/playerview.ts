// 0.9.9.9.5.5: "View profile" — a friend's (or anyone's) whole profile: their picture, level and badges, what they wear
// (their Customize: character, staff, arena, flames, pose, border) and every achievement they have.
import type { PublicProfile } from '../shared/protocol';
import { ACH_PREFIX, ACHIEVEMENTS } from '../shared/achievements';
import { badgeRow, renderAchievements } from './achievements';
import { lookCard } from './study';
import * as ui from './ui';
import { api } from './api';
import { reportDialog } from './account';
import { tr } from './i18n';

function h(tag: string, cls = '', text?: string | number): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  return e;
}

// ── 0.9.9.9.7.4: block and report — on someone else's card, for a signed-in player (not a guest) ──
const ICON_BLOCK = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M6 18 18 6" stroke="currentColor" stroke-width="2.2"/></svg>';
const ICON_FLAG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 21V4m0 1h11l-2.5 4L17 13H6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/></svg>';
export interface Viewer { id: string; guest: boolean; blocked(): string[]; setBlocked(ids: string[]): void }
let viewer: () => Viewer | null = () => null;
export function setPlayerViewer(fn: () => Viewer | null) { viewer = fn; }
/** 0.9.9.9.9.2: on the player's card (where Add friend and Message are), with icons — it was down in View profile, among their looks */
export function safetyRow(p: PublicProfile): HTMLElement | null {
  const v = viewer();
  if (!v || v.guest || v.id === p.id) return null;
  const row = h('div', 'pv-safety');
  const blk = h('button', 'pill pv-btn pp-icon') as HTMLButtonElement;
  blk.type = 'button';
  const paint = () => { const t = tr(v.blocked().includes(p.id) ? 'Unblock' : 'Block'); blk.innerHTML = `<i class="pp-ic">${ICON_BLOCK}</i><span class="sr"></span>`; blk.querySelector('span')!.textContent = t; blk.title = t; blk.setAttribute('aria-label', t); blk.classList.toggle('on', v.blocked().includes(p.id)); };
  paint();
  blk.onclick = async () => {
    const on = !v.blocked().includes(p.id);
    if (on && !confirm(tr('Block this player? They can’t message you, add you as a friend or invite you, and they stop being your friend. They aren’t told.'))) return;
    blk.disabled = true;
    try { const r = await api.block(p.id, on); v.setBlocked(r.blocked); paint(); ui.toast(tr(on ? 'Blocked' : 'Unblocked'), 2000); }
    catch (e) { ui.toast((e as Error).message); }
    finally { blk.disabled = false; }
  };
  const rep = h('button', 'pill pv-btn pp-icon') as HTMLButtonElement;
  rep.type = 'button';
  rep.innerHTML = `<i class="pp-ic">${ICON_FLAG}</i><span class="sr"></span>`; rep.querySelector('span')!.textContent = tr('Report'); rep.title = tr('Report'); rep.setAttribute('aria-label', tr('Report'));
  rep.onclick = () => reportDialog({ id: p.id, name: p.name }, () => ui.toast(tr('Thanks - the team will look at it'), 3000));
  row.append(blk, rep);
  return row;
}

export function showPlayer(p: PublicProfile, extra?: HTMLElement) {
  const d = ui.$<HTMLDialogElement>('playerDialog');
  const pic = h('div', 'pp-pic big' + (p.pic ? ' has-pic' : '') + ui.borderCls(p.border), p.pic ? '' : p.name.slice(0, 1).toUpperCase());
  const img = ui.picEl(p.pic, 'pic fill');
  if (img) pic.append(img);
  const meta = h('div', 'pv-meta');
  meta.append(h('div', 'pp-name', p.name));
  if (p.login) meta.append(h('div', 'pp-login', `@${p.login}`));
  if (p.status) meta.append(ui.statusLine(p.status)); // 0.9.9.9.6.4
  meta.append(h('div', 'pp-level', `Lv ${p.level}`));
  const lg = ui.leagueChip(p.league); // 0.9.9.9.6.4: their Daily challenge league
  if (lg) meta.append(lg);
  const rk = ui.rankChip(p.rank); // 0.9.9.9.9: ranked
  if (rk) meta.append(rk);
  const row = badgeRow(p.badges);
  if (row) meta.append(row);
  const head = h('div', 'pv-head');
  head.append(pic, meta);
  const body: HTMLElement[] = [head];
  if (extra) body.push(extra);
  if (p.look) {
    const sec = h('section', 'pv-sec');
    sec.append(h('h3', '', 'Their look'), lookCard(p.look, p.pic, p.name));
    body.push(sec);
  }
  const ach = h('section', 'pv-sec ach-box');
  const have = new Set(p.achievements ?? []);
  renderAchievements(ach, [...have].filter((id) => ACHIEVEMENTS.some((a) => a.id === id)).map((id) => ACH_PREFIX + id), p.badges ?? [], undefined, null);
  body.push(ach);
  ui.$('playerBody').replaceChildren(...body);
  ui.$('playerClose').onclick = () => d.close();
  d.onclick = (e) => { if (e.target === d) d.close(); };
  ui.hideProfileCard();
  if (!d.open) d.showModal();
  ui.$('playerBody').scrollTop = 0;
}
