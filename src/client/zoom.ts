// UI size: the whole interface is drawn at a chosen zoom (default 100% since 0.9.9.5; it was 80% on computers, so Deck Duel's HP and
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
  // phones and tablets (touch) and small windows stay at 100%
  return 1; // 0.9.9.5: 100% everywhere by default (it was 80% on computers)
}

export function setUiZoomPref(z: number) {
  try { localStorage.setItem(KEY, String(z)); } catch { /* private mode */ }
  applyUiZoom(z);
}

/**
 * 0.9.9.4.4.1: on a computer the UI keeps the same proportions on every monitor — the chosen size is for a
 * 1920×1080 screen (a browser window about 1920×940) and scales with the window, so a laptop and a 4K monitor
 * show the same layout, just smaller or bigger. Phones, tablets and narrow windows are drawn at the size chosen.
 */
const REF_W = 1920, REF_H = 940;
export function screenFactor(): number {
  if (innerWidth < 900 || matchMedia('(pointer: coarse)').matches) return 1;
  return Math.max(0.72, Math.min(2.2, Math.min(innerWidth / REF_W, innerHeight / REF_H)));
}

let lastPref = 0;
export function applyUiZoom(pref = uiZoomPref()) {
  lastPref = pref;
  const z = Math.round(pref * screenFactor() * 1000) / 1000;
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
  // layout switches that follow the page's own size (not the monitor's): a short page squeezes Deck Duel
  root.classList.toggle('eff-short', viewH() <= 900);
  refit();
}
{
  let t = 0;
  addEventListener('resize', () => { clearTimeout(t); t = window.setTimeout(() => { if (lastPref) applyUiZoom(lastPref); }, 150); });
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

/**
 * 0.9.9.5: at a smaller UI size (70–90%) a page that is shorter than the window sits in the middle of it, not
 * at the top. The battle screens, the main menu and the sign-in page keep their own layouts; at 100% nothing moves.
 */
const KEEP = new Set(['battle', 'deck', 'prep', 'menu', 'auth']);
export function centerScreens() {
  const fit = (el: HTMLElement) => {
    if (el.hidden || KEEP.has(el.id)) return;
    const was = Number(el.dataset.lift ?? 0);
    // how tall the page's content is (the screen itself is at least as tall as the window)
    const top = zrect(el).top;
    let bottom = 0;
    for (const k of el.children) {
      if ((k as HTMLElement).hidden || getComputedStyle(k).position === 'fixed') continue;
      bottom = Math.max(bottom, zrect(k).bottom - top);
    }
    const used = bottom - was + parseFloat(getComputedStyle(el).paddingBottom || '0');
    const extra = lastPref < 1 ? Math.max(0, Math.floor((viewH() - used) / 2)) : 0;
    if (Math.abs(extra - was) < 2) return;
    el.dataset.lift = String(extra);
    el.style.setProperty('--lift', `${extra}px`);
  };
  let queued = 0;
  refit = () => {
    if (queued) return;
    queued = requestAnimationFrame(() => { queued = 0; document.querySelectorAll<HTMLElement>('.screen:not([hidden])').forEach(fit); });
  };
  // a page changes height when its content arrives (or a section opens): fit again, once per frame at most
  for (const s of document.querySelectorAll<HTMLElement>('.screen')) {
    new MutationObserver(refit).observe(s, { attributes: true, attributeFilter: ['hidden'], childList: true, subtree: true });
  }
  addEventListener('resize', refit);
  refit();
}
let refit = () => {};
