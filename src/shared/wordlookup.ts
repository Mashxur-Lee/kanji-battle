// 0.9.9.9.9.7: a tapped word (a kanji word with its reading over it, and the kana that follow it) → the word in the
// dictionary. The owner: "a lot of words from the voice lines are not in the dictionary". They were — written in a
// conjugated form: 勝った, 化けた, 住んでいた, 隠れた. The kana after the word are now turned back into the
// dictionary forms they may come from (った → つ / う / る, んで → む / ぶ / ぬ, い-adjective endings, ichidan た → る …)
// and each is looked up whole, before the old "starts with" guesses.

export interface LookupVocab { id: string; kanji: string; reading: string; meaning: string }
export interface LookupDictWord { kanji: string[]; kana: string[] }

/** the dictionary forms the kana after a word could be the ending of (most likely first) */
export function dictionaryEndings(after: string): string[] {
  const a = after.replace(/[^぀-ゟ]/g, '');
  const out: string[] = [];
  const add = (...xs: string[]) => { for (const x of xs) if (!out.includes(x)) out.push(x); };
  // godan past / te forms
  if (/^(った|って|っ)/.test(a)) add('つ', 'う', 'る', 'く');
  if (/^(んだ|んで)/.test(a)) add('む', 'ぶ', 'ぬ');
  if (/^(いた|いて)/.test(a)) add('く', 'いる');
  if (/^(いだ|いで)/.test(a)) add('ぐ');
  if (/^(した|して)/.test(a)) add('す', 'する');
  // polite, negative, volitional, potential, passive, causative, conditional (godan: the i / a / e / o row)
  const row: Record<string, string> = { き: 'く', ぎ: 'ぐ', し: 'す', ち: 'つ', に: 'ぬ', び: 'ぶ', み: 'む', り: 'る', い: 'う', か: 'く', が: 'ぐ', さ: 'す', た: 'つ', な: 'ぬ', ば: 'ぶ', ま: 'む', ら: 'る', わ: 'う', け: 'く', げ: 'ぐ', せ: 'す', て: 'つ', ね: 'ぬ', べ: 'ぶ', め: 'む', れ: 'る', え: 'う', こ: 'く', ご: 'ぐ', そ: 'す', と: 'つ', の: 'ぬ', ぼ: 'ぶ', も: 'む', ろ: 'る', お: 'う' };
  if (a[0] && row[a[0]] && (/^.(ます|ません|まし|ない|なかっ|なく|なけ|なきゃ|ぬ|ず|ざ|う|よう|れ|せ|ば|た|て|に|る|そう|ながら|たい|やす|にく|すぎ|なさ|つつ|っぽ|がち|かた|の)/.test(a) || /^.[、。！？\u4e00-\u9fff]/.test(after))) add(row[a[0]]);
  // (ichidan, its stem alone at the end or before a kanji: 忘|れ, 食|べ, 貯|めて → 忘れる, 食べる, 貯める; `after` still has the kanji and punctuation that `a` lost)
  if (a.length === 1 || /^.[、。！？\u4e00-\u9fff]/.test(after)) add(a[0] + 'る');
  if (a.length >= 2 && /^(て|た|ない|ます|られ|させ)/.test(a.slice(1))) add(a[0] + 'る');
  // ichidan (食べた, 化けた, 見ます): the ending dropped, る back
  if (/^(た|て|ない|なかっ|ます|ません|まし|られ|させ|よう|れば|ろ)/.test(a)) add('る');
  // i-adjectives (悪くない, 高かった, 寒くて, 早ければ) and な / する words
  if (/^(く|かっ|けれ|さ)/.test(a)) add('い');
  if (a.startsWith('い')) add('い');
  if (/^そう/.test(a)) add('い'); // (怖そうだ: 怖い)
  if (a.length === 1 && row[a]) add(row[a]); // (the stem alone, a list: 飛び、怒り → 飛ぶ, 怒る)
  if (/^(する|して|した|します|しない)/.test(a)) add('する');
  // (the kana of the word's own stem first, then the ending: 食|べません → 食べる, 隠|れた → 隠れる, 楽|しかった → 楽しい)
  for (const k of [1, 2]) {
    if (a.length <= k) continue;
    const pre = a.slice(0, k), c = a[k];
    add(pre + 'る', pre + 'い');
    if (row[c]) add(pre + row[c]);
    if (/^(った|って)/.test(a.slice(k))) add(pre + 'つ', pre + 'う', pre + 'る');
    if (/^(んだ|んで)/.test(a.slice(k))) add(pre + 'む', pre + 'ぶ');
  }
  // the plain form itself (書く, 見る, 高い): the first kana or two
  for (const n of [1, 2, 3]) if (a.length >= n) add(a.slice(0, n));
  return out;
}

/** a game word (the word lists) first, exactly or in its dictionary form; else null (then the full dictionary) */
export function findInVocab<V extends LookupVocab>(vocab: readonly V[], base: string, reading: string, after: string): V | null {
  if (base === '来' && /^[きこく]$/.test(reading)) { const k = vocab.find((v) => v.kanji === '来る'); if (k) return k; } // (来た, 来ない, 来ます: くる)
  const exact = vocab.find((v) => v.kanji === base && v.reading === reading);
  if (exact) return exact;
  // its dictionary form: the kanji + an ending the kana after it can come from, the reading starting with the furigana
  for (const end of dictionaryEndings(after)) {
    const w = vocab.find((v) => v.kanji === base + end && v.reading.startsWith(reading));
    if (w) return w;
  }
  // (older guess, kept for words the endings miss: the same kanji + kana, reading starting with the furigana)
  const near = vocab.filter((v) => v.kanji.startsWith(base) && v.reading.startsWith(reading) && v.kanji.length <= base.length + 3 && !/[一-鿿]/.test(v.kanji.slice(base.length)));
  return near.find((v) => after.startsWith(v.kanji.slice(base.length))) ?? (reading ? near.find((v) => v.kanji === base) ?? null : null);
}

/** the full dictionary: the queries to try, longest first (its dictionary forms, then as written, then the kanji alone) */
export function dictionaryQueries(base: string, after: string): string[] {
  const kana = after.replace(/[^぀-ゟ]/g, '');
  const qs = [...dictionaryEndings(after).map((e) => base + e), base + kana.slice(0, 4), base + kana.slice(0, 2), base];
  return [...new Set(qs)];
}
/** which of the dictionary's hits is the word (the kanji written so, its reading starting with the furigana) */
export function pickDictWord<W extends LookupDictWord>(hits: readonly W[], query: string, base: string, reading: string): W | null {
  const hira = (r: string) => r.replace(/[ァ-ン]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
  // (a word in a compound may start voiced: 予算不足 — ぶそく for ふそく)
  const unvoice = (r: string) => r.normalize('NFD').replace(/^(.)[\u3099\u309a]/, '$1').normalize('NFC');
  const fits = (w: W) => w.kanji.some((k) => k.startsWith(base)) && (!reading || w.kana.some((r) => hira(r).startsWith(reading) || unvoice(hira(r)).startsWith(unvoice(reading))));
  return hits.find((w) => w.kanji.includes(query) && fits(w)) ?? (query === base ? hits.find((w) => w.kanji[0] === base && fits(w)) ?? null : null);
}

/**
 * words the game's own lines use that the shipped dictionary (common words only) doesn't have — the chess wizards'
 * lines and the grammar sentences (scripts/check-words.ts lists any new one)
 */
export const EXTRA_WORDS: Record<string, { kanji: string; reading: string; en: string; ru: string }> = {
  '小鬼|こおに': { kanji: '小鬼', reading: 'こおに', en: 'imp; goblin; little demon', ru: 'бесёнок; гоблин' },
  '正々堂々|せいせいどうどう': { kanji: '正々堂々', reading: 'せいせいどうどう', en: 'fair and square; open and above board', ru: 'честно и открыто' },
  '悪手|あくしゅ': { kanji: '悪手', reading: 'あくしゅ', en: 'bad move (in chess, shogi, go)', ru: 'плохой ход (в шахматах, сёги, го)' },
  '后|きさき': { kanji: '后', reading: 'きさき', en: 'empress; queen (the chess queen in this game)', ru: 'императрица; королева (ферзь в этой игре)' },
  '欠航|けっこう': { kanji: '欠航', reading: 'けっこう', en: 'cancelled flight / sailing', ru: 'отмена рейса' },
  '少子化|しょうしか': { kanji: '少子化', reading: 'しょうしか', en: 'declining birth rate', ru: 'снижение рождаемости' },
  '田中|たなか': { kanji: '田中', reading: 'たなか', en: 'Tanaka (a family name)', ru: 'Танака (фамилия)' },
  '山田|やまだ': { kanji: '山田', reading: 'やまだ', en: 'Yamada (a family name)', ru: 'Ямада (фамилия)' },
  '夏目漱石|なつめそうせき': { kanji: '夏目漱石', reading: 'なつめそうせき', en: 'Natsume Sōseki (1867-1916), a famous novelist', ru: 'Нацумэ Сосэки (1867-1916), знаменитый писатель' },
  '堅苦|かたくる': { kanji: '堅苦しい', reading: 'かたくるしい', en: 'formal, stiff, ceremonious', ru: 'чопорный, официальный' },
  '先立|さきだ': { kanji: '先立つ', reading: 'さきだつ', en: 'to precede; to come before', ru: 'предшествовать' },
  '貯|た': { kanji: '貯める', reading: 'ためる', en: 'to save (money); to store up', ru: 'копить, накапливать' },
  '合格者|ごうかくしゃ': { kanji: '合格者', reading: 'ごうかくしゃ', en: 'successful candidate; those who passed', ru: 'сдавший экзамен; прошедший отбор' },
};
/** a number with a counter (六時, 十年, 六百年前): not a dictionary word — what it says, made from its parts */
const DIGITS: Record<string, number> = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
const COUNTERS: Record<string, [string, string]> = { 時: ["o'clock", 'часов'], 年: ['years', 'лет'], 分: ['minutes', 'минут'], 人: ['people', 'человек'], 日: ['days', 'дней'], 回: ['times', 'раз'], 歳: ['years old', 'лет (возраст)'], 月: ['months', 'месяцев'], 円: ['yen', 'иен'], 枚: ['(flat things: sheets, tickets)', '(плоских предметов: листов, билетов)'], 時間: ['hours', 'часов'], 日間: ['days', 'дней'], 年間: ['years', 'лет'], 分間: ['minutes', 'минут'], 週間: ['weeks', 'недель'], か月: ['months', 'месяцев'], 本: ['(long things)', '(длинных предметов)'], 冊: ['(books)', '(книг)'], 階: ['(floor)', '(этаж)'] };
export function numberWord(base: string): { en: string; ru: string } | null {
  const m = base.match(/^([一二三四五六七八九十百千万億]+)(時間|日間|年間|分間|週間|か月|[時年分人日回歳月円枚本冊階])(前|後)?$/);
  if (!m) return null;
  let n = 0, cur = 0;
  for (const ch of m[1]) {
    if (DIGITS[ch]) cur = DIGITS[ch];
    else if (ch === '万' || ch === '億') { n = (n + (cur || 1)) * (ch === '万' ? 10_000 : 100_000_000); cur = 0; }
    else { const unit = ch === '十' ? 10 : ch === '百' ? 100 : 1000; n += (cur || 1) * unit; cur = 0; }
  }
  n += cur;
  const [en, ru] = COUNTERS[m[2]];
  const when = m[3] === '前' ? [' ago', ' назад'] : m[3] === '後' ? [' later', ' спустя'] : ['', ''];
  return m[2] === '時' && !m[3] ? { en: `${n} ${en}`, ru: `${n} ${ru}` } : { en: `${n} ${en}${when[0]}`, ru: `${n} ${ru}${when[1]}` };
}

/** words written with a prefix kept outside the furigana (ご{飯|はん}, お{客様|きゃくさま}) */
export const PREFIXED: Record<string, string> = { '飯|はん': 'ご飯', '客様|きゃくさま': 'お客様', '土産|みやげ': 'お土産', '金|かね': 'お金', '茶|ちゃ': 'お茶' };
/**
 * a compound not in the dictionary as one word (参加費, 記憶力, 説明会): split where both halves are words —
 * `known` gives a half's meaning (or null); the longest first half wins
 */
export function splitCompound(base: string, known: (part: string) => string | null): { parts: string[]; meanings: string[] } | null {
  const chars = [...base];
  if (chars.length < 3 || !/^\p{Script=Han}+$/u.test(base)) return null;
  for (let i = chars.length - 1; i >= 1; i--) {
    const a = chars.slice(0, i).join(''), b = chars.slice(i).join('');
    const ma = known(a), mb = known(b);
    if (ma && mb) return { parts: [a, b], meanings: [ma, mb] };
  }
  return null;
}
