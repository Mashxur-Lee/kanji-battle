// UI size: the whole interface is drawn at a chosen zoom (default 80% on computers, so Deck Duel's HP and
// mana stay on screen even with the IME candidate list open). The 3D arena stays full-screen.
//
// CSS `zoom` also shrinks vh/vw lengths, so style.css uses var(--vh) / var(--vw) / var(--dvh), scaled back
// up by --vfix (measured here, so a browser that doesn't zoom viewport units isn't over-corrected).
// Code that positions things from getBoundingClientRect (visual pixels) uses zrect() to get the page's own
// CSS pixels.

const KEY = 'kb:uizoom';
export const UI_ZOOMS = [0.7, 0.8, 0.9, 1] as const;

let scale = 1; // the zoom actually in effect (1 where the browser has no CSS zoom)
export const uiScale = () => scale;

export function uiZoomPref(): number {
  try {
    const v = Number(localStorage.getItem(KEY));
    if (UI_ZOOMS.includes(v as (typeof UI_ZOOMS)[number])) return v;
  } catch { /* private mode */ }
  return innerWidth >= 900 ? 0.8 : 1; // phones and small windows stay at 100%
}

export function setUiZoomPref(z: number) {
  try { localStorage.setItem(KEY, String(z)); } catch { /* private mode */ }
  applyUiZoom(z);
}

export function applyUiZoom(z = uiZoomPref()) {
  const root = document.documentElement;
  root.style.setProperty('--ui-zoom', String(z));
  root.style.setProperty('--vfix', '1');
  // measure what the browser really does
  const probe = document.createElement('div');
  probe.style.cssText = 'position:absolute;left:0;top:0;width:100px;height:100vh;visibility:hidden;pointer-events:none';
  document.body.append(probe);
  const r = probe.getBoundingClientRect();
  probe.remove();
  scale = r.width > 0 ? r.width / 100 : 1;
  const vfix = r.height > 0 ? innerHeight / r.height : 1;
  root.style.setProperty('--vfix', String(Math.round(vfix * 1000) / 1000));
}

/** getBoundingClientRect in the page's own CSS pixels (for positioning things inside the zoomed page). */
export function zrect(el: Element) {
  const r = el.getBoundingClientRect();
  const s = scale;
  return { left: r.left / s, top: r.top / s, right: r.right / s, bottom: r.bottom / s, width: r.width / s, height: r.height / s };
}
/** The window size in the page's own CSS pixels. */
export const viewW = () => innerWidth / scale;
export const viewH = () => innerHeight / scale;
