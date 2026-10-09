import type { DrawnChar } from '../../shared/protocol';

/**
 * Splits one drawing of a whole word (written left to right on a wide pad) into its characters.
 *
 * Each candidate split is scored by geometry only: every character should sit roughly in its share of
 * the word's width, be about one share wide, and not overlap its neighbours. Strokes are tried in the
 * order they were drawn (characters are written one after another) and, as a fallback for players who
 * go back to add a dot, in left-to-right order. The judge then recognises the best few splits and keeps
 * the one that reads best — so geometry only has to get the right answer into the shortlist.
 */
export function segmentCandidates(strokes: DrawnChar, k: number, limit = 6): DrawnChar[][] {
  const drawn = strokes.filter((s) => s.length > 0);
  if (k <= 1) return drawn.length ? [[drawn]] : [];
  if (drawn.length < k) return [];

  const byTime = drawn;
  const center = (s: Array<[number, number]>) => { const xs = s.map((p) => p[0]); return (Math.min(...xs) + Math.max(...xs)) / 2; };
  const byX = [...drawn].sort((a, b) => center(a) - center(b));

  const seen = new Set<string>();
  const out: Array<{ cost: number; groups: DrawnChar[] }> = [];
  for (const order of [byTime, byX]) {
    for (const c of bestSplits(order, k, limit)) {
      const key = c.groups.map((g) => g.map((s) => drawn.indexOf(s)).sort((a, b) => a - b).join(',')).join('|');
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(c);
    }
  }
  return out.sort((a, b) => a.cost - b.cost).slice(0, limit).map((c) => c.groups);
}

interface Partial { cost: number; ends: number[]; lastMax: number }

/** Beam search over contiguous splits of `order` into k groups, lowest geometric cost first. */
function bestSplits(order: DrawnChar, k: number, limit: number, beamWidth = 300): Array<{ cost: number; groups: DrawnChar[] }> {
  const n = order.length;
  const minX = order.map((s) => Math.min(...s.map((p) => p[0])));
  const maxX = order.map((s) => Math.max(...s.map((p) => p[0])));
  const left = Math.min(...minX);
  const width = Math.max(1, Math.max(...maxX) - left);
  const cell = width / k;

  // range min/max of a contiguous run of strokes [a, b)
  const range = (a: number, b: number) => {
    let lo = Infinity, hi = -Infinity;
    for (let i = a; i < b; i++) { lo = Math.min(lo, minX[i]); hi = Math.max(hi, maxX[i]); }
    return [lo, hi] as const;
  };
  const groupCost = (g: number, lo: number, hi: number) => {
    const pos = ((lo + hi) / 2 - (left + (g + 0.5) * cell)) / cell;
    const size = (hi - lo - 0.8 * cell) / cell;
    return pos * pos + 0.5 * size * size;
  };

  let beam: Partial[] = [{ cost: 0, ends: [0], lastMax: -Infinity }];
  for (let g = 0; g < k; g++) {
    const next: Partial[] = [];
    for (const p of beam) {
      const start = p.ends[p.ends.length - 1];
      const lastGroup = g === k - 1;
      const maxEnd = lastGroup ? n : n - (k - 1 - g); // leave at least one stroke per remaining char
      for (let end = lastGroup ? n : start + 1; end <= maxEnd; end++) {
        const [lo, hi] = range(start, end);
        const overlap = Math.max(0, p.lastMax - lo) / cell;
        next.push({ cost: p.cost + groupCost(g, lo, hi) + 4 * overlap * overlap + 2 * overlap, ends: [...p.ends, end], lastMax: hi });
      }
    }
    next.sort((a, b) => a.cost - b.cost);
    beam = next.slice(0, beamWidth);
  }
  return beam.slice(0, limit).map((p) => ({
    cost: p.cost,
    groups: p.ends.slice(1).map((end, i) => order.slice(p.ends[i], end)),
  }));
}
