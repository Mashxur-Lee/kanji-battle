// Unlock rewards (0.9.9.3): when you come back to the menu having unlocked something new — a background or a
// flame colour (level), a staff (best daily streak), an avatar border (level), a monthly reward — a box shows
// it with a preview, and you can equip it straight away. What you have already seen is remembered per player
// in this browser; the very first time nothing is shown (everything you had is "seen").

import { BACKGROUNDS, BORDERS, borderUnlocked, FLAMES, flameUnlocked, levelOf, STAFFS, staffUnlocked, unlocked, type BackgroundId, type FlameId, type StaffId } from '../shared/progress';
import { api, type Profile } from './api';
import { avatarFor } from '../shared/progress';
import { backgroundThumb, getTimePref, resolveTime } from './backgrounds';
import { pixelStaffSvg } from './pixelstaffs';
import { avatarSvg } from './wizard';
import * as ui from './ui';

interface Reward { key: string; kind: 'arena' | 'flame' | 'staff' | 'border'; id: string; name: string; why: string }

const KEY = (uid: string) => `kb:seenRewards:${uid}`;
const load = (uid: string): string[] | null => { try { const r = localStorage.getItem(KEY(uid)); return r ? JSON.parse(r) : null; } catch { return null; } };
const save = (uid: string, keys: string[]) => { try { localStorage.setItem(KEY(uid), JSON.stringify(keys)); } catch { /* private mode */ } };

function haveNow(p: Profile): Reward[] {
  const lvl = levelOf(p.xp), best = Math.max(p.bestStreak ?? 0, p.streak ?? 0), un = p.unlocks ?? [];
  const out: Reward[] = [];
  for (const b of BACKGROUNDS) if (b.level > 0 && unlocked(b.id, p.xp)) out.push({ key: `arena:${b.id}`, kind: 'arena', id: b.id, name: `${b.name} arena`, why: `You reached level ${b.level}` });
  for (const f of FLAMES) if ((f.level > 0 || f.season) && flameUnlocked(f.id as FlameId, p.xp, un)) out.push({ key: `flame:${f.id}`, kind: 'flame', id: f.id, name: `${f.name} flames`, why: f.season ? 'Monthly goals complete' : `You reached level ${f.level}` });
  for (const s of STAFFS) if ((s.streak || s.season) && staffUnlocked(s.id as StaffId, best, un)) out.push({ key: `staff:${s.id}`, kind: 'staff', id: s.id, name: s.name, why: s.season ? 'Monthly goals complete' : `A ${s.streak}-day daily streak` });
  for (const b of BORDERS) if (b.level > 0 && borderUnlocked(b.id, lvl)) out.push({ key: `border:${b.id}`, kind: 'border', id: b.id, name: `${b.name} border`, why: `You reached level ${b.level}` });
  return out;
}

let queue: Reward[] = [];
let profile: Profile | null = null;
let onEquipped: (p: Profile) => void = () => {};

/** On the menu: anything new since last time? (Admins have everything — no boxes for them.) */
export function checkRewards(uid: string, p: Profile, isAdmin: boolean, equipped: (p: Profile) => void) {
  if (isAdmin) return;
  profile = p; onEquipped = equipped;
  const now = haveNow(p);
  const seen = load(uid);
  save(uid, [...new Set([...(seen ?? []), ...now.map((r) => r.key)])]);
  if (!seen) return; // first visit with this feature: what you have is not news
  const fresh = now.filter((r) => !seen.includes(r.key) && !queue.some((q) => q.key === r.key));
  if (!fresh.length) return;
  queue.push(...fresh);
  if (!ui.$<HTMLDialogElement>('rewardDialog').open) showNext();
}

function preview(r: Reward, p: Profile): HTMLElement {
  const box = document.createElement('div');
  box.className = `rw-preview rw-${r.kind}`;
  if (r.kind === 'arena') box.innerHTML = backgroundThumb(r.id as BackgroundId, resolveTime(getTimePref()));
  else if (r.kind === 'staff') { const w = document.createElement('div'); w.className = 'rw-char'; w.innerHTML = avatarSvg(avatarFor(p.studyLevels), 'me', r.id); const s = document.createElement('div'); s.className = 'pixel-staff big'; s.innerHTML = pixelStaffSvg(r.id); box.append(s, w); }
  else if (r.kind === 'flame') {
    const w = document.createElement('div'); w.className = 'wizard me onfire'; ui.paintFlame(w, r.id);
    const sp = document.createElement('div'); sp.className = 'sprite'; sp.innerHTML = avatarSvg(avatarFor(p.studyLevels), 'me', p.staff);
    const au = document.createElement('div'); au.className = 'aura';
    w.append(au, sp); box.append(w);
  } else {
    const d = document.createElement('div'); d.className = `pp-pic big${p.pic ? ' has-pic' : ''}${ui.borderCls(r.id)}`;
    if (p.pic) { const img = ui.picEl(p.pic, 'pic fill'); if (img) d.append(img); } else d.textContent = (ui.myName() || '✦').slice(0, 1).toUpperCase();
    box.append(d);
  }
  return box;
}

function showNext() {
  const r = queue.shift();
  const d = ui.$<HTMLDialogElement>('rewardDialog');
  if (!r || !profile) { if (d.open) d.close(); return; }
  const p = profile;
  ui.$('rewardWhy').textContent = r.why;
  ui.$('rewardName').textContent = r.name;
  ui.$('rewardPreview').replaceChildren(preview(r, p));
  const equipped = (r.kind === 'arena' && p.background === r.id) || (r.kind === 'flame' && p.flame === r.id) || (r.kind === 'staff' && p.staff === r.id) || (r.kind === 'border' && (p.border ?? 'none') === r.id);
  const eq = ui.$<HTMLButtonElement>('rewardEquip');
  eq.hidden = equipped;
  eq.disabled = false;
  eq.onclick = async () => {
    eq.disabled = true;
    try {
      const res = r.kind === 'arena' ? await api.setBackground(r.id as BackgroundId) : r.kind === 'flame' ? await api.setFlame(r.id as FlameId) : r.kind === 'staff' ? await api.setStaff(r.id as StaffId) : await api.setBorder(r.id);
      profile = res.profile;
      onEquipped(res.profile);
      ui.toast(`${r.name} equipped`);
      showNext();
    } catch (e) { eq.disabled = false; ui.toast((e as Error).message); }
  };
  ui.$('rewardOk').onclick = () => showNext();
  if (!d.open) d.showModal();
  d.classList.remove('pop'); void d.offsetWidth; d.classList.add('pop');
}
