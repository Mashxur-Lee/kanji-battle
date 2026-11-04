// Verb and adjective forms back to the dictionary form (0.9.9.7.2) — so the dictionary finds 呼ぶ when you type
// 呼ばない / yobanai / よびました. Each rule swaps an ending; rules chain (呼ばなかった → 呼ばない → 呼ぶ). Works
// the same on kana and on kanji spellings, as only the kana ending changes.

/** [ending, replacement, what that form is] */
type Rule = [string, string, string];
const GODAN: Array<[a: string, i: string, e: string, o: string, u: string, te: string, ta: string]> = [
  ['わ', 'い', 'え', 'お', 'う', 'って', 'った'], ['か', 'き', 'け', 'こ', 'く', 'いて', 'いた'], ['が', 'ぎ', 'げ', 'ご', 'ぐ', 'いで', 'いだ'],
  ['さ', 'し', 'せ', 'そ', 'す', 'して', 'した'], ['た', 'ち', 'て', 'と', 'つ', 'って', 'った'], ['な', 'に', 'ね', 'の', 'ぬ', 'んで', 'んだ'],
  ['ば', 'び', 'べ', 'ぼ', 'ぶ', 'んで', 'んだ'], ['ま', 'み', 'め', 'も', 'む', 'んで', 'んだ'], ['ら', 'り', 'れ', 'ろ', 'る', 'って', 'った'],
];
const RULES: Rule[] = [];
for (const [a, i, e, o, u, te, ta] of GODAN) {
  RULES.push(
    [`${a}ない`, u, 'negative'], [`${i}ます`, u, 'polite'], [`${i}ません`, u, 'polite negative'], [`${i}ました`, u, 'polite past'],
    [`${i}ませんでした`, u, 'polite past negative'], [`${i}たい`, u, 'want to'], [`${i}ながら`, u, 'while'], [te, u, 'te form'], [ta, u, 'past'],
    [`${ta}ら`, u, 'conditional (tara)'], [`${e}ば`, u, 'conditional (ba)'], [`${e}る`, u, 'potential'], [`${a}れる`, u, 'passive'],
    [`${a}せる`, u, 'causative'], [`${o}う`, u, 'volitional'],
  );
}
RULES.push(['行って', '行く', 'te form'], ['行った', '行く', 'past'], ['いって', 'いく', 'te form'], ['いった', 'いく', 'past']);
// ichidan (食べる, 見る) — marked, as their stem ends in an i- or e-sound (食べ, 見), never 割 (わて is not 割る)
const ICHIDAN_FROM = RULES.length;
RULES.push(
  ['ない', 'る', 'negative'], ['ます', 'る', 'polite'], ['ません', 'る', 'polite negative'], ['ました', 'る', 'polite past'],
  ['ませんでした', 'る', 'polite past negative'], ['たい', 'る', 'want to'], ['ながら', 'る', 'while'], ['て', 'る', 'te form'], ['た', 'る', 'past'],
  ['たら', 'る', 'conditional (tara)'], ['れば', 'る', 'conditional (ba)'], ['られる', 'る', 'potential / passive'], ['させる', 'る', 'causative'],
  ['よう', 'る', 'volitional'], ['ろ', 'る', 'imperative'],
);
const ICHIDAN = new Set(RULES.slice(ICHIDAN_FROM));
const IE = /[いきぎしじちぢにひびぴみりえけげせぜてでねへべぺめれ]$/;
// する, 来る
for (const [form, label] of [['しない', 'negative'], ['します', 'polite'], ['しません', 'polite negative'], ['しました', 'polite past'], ['して', 'te form'], ['した', 'past'], ['したい', 'want to'], ['すれば', 'conditional (ba)'], ['できる', 'potential'], ['される', 'passive'], ['させる', 'causative'], ['しよう', 'volitional'], ['しろ', 'imperative']] as const) RULES.push([form, 'する', label]);
for (const [form, label] of [['こない', 'negative'], ['きます', 'polite'], ['きて', 'te form'], ['きた', 'past'], ['こられる', 'potential'], ['こよう', 'volitional'], ['こい', 'imperative'], ['来ない', 'negative'], ['来ます', 'polite'], ['来て', 'te form'], ['来た', 'past']] as const) RULES.push([form, form.startsWith('来') ? '来る' : 'くる', label]);
// i-adjectives (高い)
RULES.push(['くない', 'い', 'negative'], ['かった', 'い', 'past'], ['くなかった', 'い', 'past negative'], ['くて', 'い', 'te form'], ['ければ', 'い', 'conditional']);
// chains: whatever ends in ない / たい is an adjective-like form itself
RULES.push(['なかった', 'ない', 'past'], ['なくて', 'ない', 'te form'], ['なければ', 'ない', 'conditional'], ['たかった', 'たい', 'past'], ['たくない', 'たい', 'negative']);
RULES.sort((x, y) => y[0].length - x[0].length);

export interface Deinflected { word: string; form: string }

/** Every dictionary form the input could be a form of (up to three steps back), with what form it is. */
export function deinflect(s: string): Deinflected[] {
  const out = new Map<string, string>();
  const walk = (cur: string, labels: string[], depth: number) => {
    if (depth >= 3) return;
    for (const rule of RULES) {
      const [end, rep, label] = rule;
      if (!cur.endsWith(end)) continue;
      const stem = cur.slice(0, -end.length);
      if (!stem && !['する', 'くる', '来る', '行く', 'いく'].includes(rep)) continue; // (ない alone is not a verb)
      if (ICHIDAN.has(rule) && /[ぁ-ゖ]$/.test(stem) && !IE.test(stem)) continue; // 0.9.9.8
      const base = stem + rep;
      if (!base || base === cur) continue;
      const all = [label, ...labels];
      if (!out.has(base)) out.set(base, all.join(' · '));
      if (/(ない|たい)$/.test(base)) walk(base, all, depth + 1); // only these are forms themselves (呼ばなかった → 呼ばない → 呼ぶ)
      // a する verb is its noun in the dictionary (勉強します → 勉強する → 勉強)
      if (base.endsWith('する') && base.length > 2 && !out.has(base.slice(0, -2))) out.set(base.slice(0, -2), all.join(' · '));
    }
  };
  walk(s, [], 0);
  out.delete(s);
  return [...out].map(([word, form]) => ({ word, form }));
}
