// 0.9.9.9.6: a number written in kanji — the streak emblem shows the day count this way (12 → 十二)
const KD = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
/** 12 → 十二, 30 → 三十, 100 → 百, 365 → 三百六十五 (10 000 and up: the digits) */
export function kanjiNumber(n: number): string {
  n = Math.max(0, Math.floor(n));
  if (n < 10) return KD[n];
  if (n >= 10000) return String(n);
  const part = (v: number, unit: string) => (v === 0 ? '' : (v === 1 ? '' : KD[v]) + unit);
  const th = Math.floor(n / 1000), h = Math.floor((n % 1000) / 100), t = Math.floor((n % 100) / 10), u = n % 10;
  return part(th, '千') + part(h, '百') + part(t, '十') + (u ? KD[u] : '');
}
