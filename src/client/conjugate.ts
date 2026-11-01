// Verb and adjective forms for the dictionary (0.9.9.7), from JMdict's part-of-speech tags.
// [label, form] rows; empty when the word doesn't conjugate (or its class is too irregular to guess).

const ROW: Record<string, [a: string, i: string, e: string, o: string, te: string, ta: string]> = {
  う: ['わ', 'い', 'え', 'お', 'って', 'った'], く: ['か', 'き', 'け', 'こ', 'いて', 'いた'], ぐ: ['が', 'ぎ', 'げ', 'ご', 'いで', 'いだ'],
  す: ['さ', 'し', 'せ', 'そ', 'して', 'した'], つ: ['た', 'ち', 'て', 'と', 'って', 'った'], ぬ: ['な', 'に', 'ね', 'の', 'んで', 'んだ'],
  ぶ: ['ば', 'び', 'べ', 'ぼ', 'んで', 'んだ'], む: ['ま', 'み', 'め', 'も', 'んで', 'んだ'], る: ['ら', 'り', 'れ', 'ろ', 'って', 'った'],
};

export type Forms = Array<[string, string]>;

export function conjugate(word: string, pos: readonly string[]): Forms {
  const p = pos.find((x) => /^(v1|v5|vk|vs-i|vs-s|adj-i|adj-ix)/.test(x)) ?? (pos.includes('vs') ? 'vs' : '');
  if (!p) return [];
  if (p === 'vs') return suru(word, 'する');
  if (p.startsWith('vs-')) return word.endsWith('する') ? suru(word.slice(0, -2), 'する') : [];
  if (p === 'vk') {
    const stem = word.slice(0, -2) || word.slice(0, -1).replace(/来$/, '');
    const k = word.endsWith('来る') ? '来' : '';
    return [
      ['Dictionary', word], ['Polite', `${stem}${k || 'き'}ます`], ['Negative', `${stem}${k || 'こ'}ない`], ['Past', `${stem}${k || 'き'}た`],
      ['Te form', `${stem}${k || 'き'}て`], ['Potential', `${stem}${k || 'こ'}られる`], ['Volitional', `${stem}${k || 'こ'}よう`],
      ['Conditional', `${stem}${k || 'く'}れば`], ['Imperative', `${stem}${k || 'こ'}い`],
    ];
  }
  if (p.startsWith('v1')) {
    const s = word.slice(0, -1);
    return [
      ['Dictionary', word], ['Polite', `${s}ます`], ['Negative', `${s}ない`], ['Past', `${s}た`], ['Past negative', `${s}なかった`],
      ['Te form', `${s}て`], ['Polite past', `${s}ました`], ['Potential', `${s}られる`], ['Passive', `${s}られる`], ['Causative', `${s}させる`],
      ['Volitional', `${s}よう`], ['Conditional', `${s}れば`], ['Imperative', `${s}ろ`],
    ];
  }
  if (p.startsWith('v5')) {
    const end = word.slice(-1), s = word.slice(0, -1), r = ROW[end];
    if (!r) return [];
    const iku = p === 'v5k-s'; // 行く: 行って
    const aru = p === 'v5aru'; // いらっしゃる: いらっしゃいます
    const [a, i, e, o] = r;
    const te = iku ? 'って' : r[4], ta = iku ? 'った' : r[5];
    const masu = aru ? 'い' : i;
    return [
      ['Dictionary', word], ['Polite', `${s}${masu}ます`], ['Negative', p === 'v5r-i' ? `${s.replace(/あ$/, '')}ない` : `${s}${a}ない`], ['Past', `${s}${ta}`],
      ['Past negative', `${s}${a}なかった`], ['Te form', `${s}${te}`], ['Polite past', `${s}${masu}ました`], ['Potential', `${s}${e}る`],
      ['Passive', `${s}${a}れる`], ['Causative', `${s}${a}せる`], ['Volitional', `${s}${o}う`], ['Conditional', `${s}${e}ば`], ['Imperative', `${s}${aru ? 'い' : e}`],
    ];
  }
  if (p.startsWith('adj-i')) {
    const ii = p === 'adj-ix'; // いい → よくない
    const s = ii ? word.slice(0, -2) + 'よ' : word.slice(0, -1);
    return [
      ['Dictionary', word], ['Negative', `${s}くない`], ['Past', `${s}かった`], ['Past negative', `${s}くなかった`],
      ['Te form', `${s}くて`], ['Adverb', `${s}く`], ['Conditional', `${s}ければ`], ['Polite', `${word}です`],
    ];
  }
  return [];
}

function suru(stem: string, _s: string): Forms {
  return [
    ['Dictionary', `${stem}する`], ['Polite', `${stem}します`], ['Negative', `${stem}しない`], ['Past', `${stem}した`], ['Past negative', `${stem}しなかった`],
    ['Te form', `${stem}して`], ['Polite past', `${stem}しました`], ['Potential', `${stem}できる`], ['Passive', `${stem}される`], ['Causative', `${stem}させる`],
    ['Volitional', `${stem}しよう`], ['Conditional', `${stem}すれば`], ['Imperative', `${stem}しろ`],
  ];
}
