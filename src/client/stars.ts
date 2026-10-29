// ★ starred words (0.9.9.5): star a word in a deck's word list or on a study card, and the reading passage puts
// it in your stories first. The list lives on the server (your profile); this keeps a copy for drawing the stars.
import { api } from './api';

const stars = new Set<string>();
const listeners = new Set<() => void>();
export const isStarred = (id: string | undefined) => !!id && stars.has(id);
export const starredIds = () => [...stars];
/** the profile's list (on login / profile refresh) */
export function setStarred(ids: readonly string[] | undefined) {
  stars.clear();
  for (const id of ids ?? []) stars.add(id);
  listeners.forEach((f) => f());
}
export const onStarsChanged = (f: () => void) => { listeners.add(f); };

/** ★ / ☆ — flips it on the server; throws (with the server's message) when it can't */
export async function toggleStar(id: string): Promise<boolean> {
  const on = !stars.has(id);
  const r = await api.setStar(id, on);
  setStarred(r.starred);
  return on;
}

/** a small ★ button for a word; keeps itself up to date */
export function starButton(id: string, cls = 'star-btn'): HTMLButtonElement {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = cls;
  let shown = false;
  const draw = () => {
    if (b.isConnected) shown = true; else if (shown) { listeners.delete(draw); return; } // gone from the page
    const on = stars.has(id);
    b.textContent = on ? '★' : '☆';
    b.classList.toggle('on', on);
    b.title = on ? 'Starred — used first in reading passages. Tap to unstar' : 'Star this word — reading passages use starred words first';
    b.setAttribute('aria-pressed', String(on));
  };
  draw();
  listeners.add(draw);
  b.addEventListener('pointerdown', (e) => e.stopPropagation());
  b.onclick = async (e) => {
    e.stopPropagation();
    b.disabled = true;
    try { await toggleStar(id); } catch (err) { (await import('./ui')).toast((err as Error).message); }
    b.disabled = false;
  };
  return b;
}
