// 0.9.9.9.9.5: light effects on weaker phones — the owner: "very low fps and laggy on medium-end mobiles", and a page
// that scrolled fast showed empty halves for a second. On a phone with few cores or little memory, or one whose frames
// come slowly in the first seconds, body.lowfx switches the costliest effects off (see-through blurred layers, blur
// filters, the drifting kanji behind the menu, big text glows, moving background layers); the choice is remembered.
// 0.9.9.9.9.7 (round 4, the owner: "bring back the transitions and animations and optimise the mobile app"): phones
// had every animation stopped (screen changes, the menu's veil, the painting's drift, the cards, Settings sliding in);
// now only body.lowfx stops them — a phone that keeps up gets all of them. Fairer: only a phone with 4 cores or fewer,
// or 2 GB of memory or less, starts light; the others are measured. A judgement is kept for three days, then the phone
// is measured again (an update, a busy first start). While you play, long frames (the browser's own report of
// frames that took too long) switch the light effects on if they keep coming.
const KEY = 'kb:lowfx';
const KEEP_MS = 3 * 86_400_000;
const coarse = () => matchMedia('(pointer: coarse)').matches;

function set(on: boolean, remember: boolean) {
  document.body.classList.toggle('lowfx', on);
  if (remember) try { localStorage.setItem(KEY, JSON.stringify({ on, at: Date.now() })); } catch { /* private mode */ }
}
function saved(): { on: boolean; at: number } | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw === '1' || raw === '0') return null; // (before round 4: kept for good — measured again now)
    const v = raw ? JSON.parse(raw) as { on?: unknown; at?: unknown } : null;
    return v && typeof v.on === 'boolean' && typeof v.at === 'number' ? { on: v.on, at: v.at } : null;
  } catch { return null; }
}

export function initPerf() {
  const s = saved();
  if (s && Date.now() - s.at < KEEP_MS) { set(s.on, false); if (s.on) return; watch(); return; }
  if (!coarse()) return;
  const nav = navigator as Navigator & { deviceMemory?: number };
  if ((nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) <= 2) { set(true, true); return; }
  // measure: three seconds of frames once the page has settled; under ~45 frames a second → light effects
  setTimeout(() => {
    let n = 0, start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      n++;
      if (t - start < 3000) { requestAnimationFrame(tick); return; }
      if (document.visibilityState !== 'visible') return;
      const slow = n / ((t - start) / 1000) < 45;
      set(slow, true);
      if (!slow) watch();
    };
    requestAnimationFrame(tick);
  }, 4000);
}

/**
 * while the app runs: the browser reports each frame that took too long (long-animation-frame, or long tasks where
 * that isn't known). Eight in six seconds, with the app in front, means the phone can't keep up — light effects.
 * (A report costs nothing: no timer, no frame loop of our own.)
 */
function watch() {
  if (!coarse() || typeof PerformanceObserver === 'undefined') return;
  const types = PerformanceObserver.supportedEntryTypes ?? [];
  const type = types.includes('long-animation-frame') ? 'long-animation-frame' : types.includes('longtask') ? 'longtask' : '';
  if (!type) return;
  const seen: number[] = [];
  const obs = new PerformanceObserver((list) => {
    if (document.visibilityState !== 'visible') return;
    for (const e of list.getEntries()) if (e.duration > 80) seen.push(e.startTime);
    const now = performance.now();
    while (seen.length && now - seen[0] > 6000) seen.shift();
    if (seen.length >= 8) { set(true, true); obs.disconnect(); }
  });
  try { obs.observe({ type, buffered: false }); } catch { /* not supported */ }
}
