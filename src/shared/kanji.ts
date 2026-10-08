import type { KanjiEntry } from './protocol';

const k = (kanji: string, kana: string, romaji: string, meaning: string): KanjiEntry =>
  ({ kanji, kana, romaji, meaning });

// Add more entries here — nothing else in the codebase needs to change.
export const KANJI: readonly KanjiEntry[] = [
  k('山', 'やま', 'yama', 'mountain'), k('川', 'かわ', 'kawa', 'river'),
  k('水', 'みず', 'mizu', 'water'), k('火', 'ひ', 'hi', 'fire'),
  k('木', 'き', 'ki', 'tree'), k('花', 'はな', 'hana', 'flower'),
  k('犬', 'いぬ', 'inu', 'dog'), k('猫', 'ねこ', 'neko', 'cat'),
  k('魚', 'さかな', 'sakana', 'fish'), k('空', 'そら', 'sora', 'sky'),
  k('海', 'うみ', 'umi', 'sea'), k('雨', 'あめ', 'ame', 'rain'),
  k('雪', 'ゆき', 'yuki', 'snow'), k('風', 'かぜ', 'kaze', 'wind'),
  k('星', 'ほし', 'hoshi', 'star'), k('月', 'つき', 'tsuki', 'moon'),
  k('人', 'ひと', 'hito', 'person'), k('手', 'て', 'te', 'hand'),
  k('目', 'め', 'me', 'eye'), k('耳', 'みみ', 'mimi', 'ear'),
  k('口', 'くち', 'kuchi', 'mouth'), k('足', 'あし', 'ashi', 'foot / leg'),
  k('本', 'ほん', 'hon', 'book'), k('車', 'くるま', 'kuruma', 'car'),
  k('道', 'みち', 'michi', 'road'), k('店', 'みせ', 'mise', 'shop'),
  k('森', 'もり', 'mori', 'forest'), k('町', 'まち', 'machi', 'town'),
  k('肉', 'にく', 'niku', 'meat'), k('米', 'こめ', 'kome', 'rice'),
  k('茶', 'ちゃ', 'cha', 'tea'), k('酒', 'さけ', 'sake', 'alcohol / sake'),
  k('鳥', 'とり', 'tori', 'bird'), k('馬', 'うま', 'uma', 'horse'),
  k('牛', 'うし', 'ushi', 'cow'), k('虫', 'むし', 'mushi', 'insect'),
  k('石', 'いし', 'ishi', 'stone'), k('金', 'かね', 'kane', 'money / gold'),
  k('白', 'しろ', 'shiro', 'white'), k('赤', 'あか', 'aka', 'red'),
  k('青', 'あお', 'ao', 'blue'), k('黒', 'くろ', 'kuro', 'black'),
  k('春', 'はる', 'haru', 'spring'), k('夏', 'なつ', 'natsu', 'summer'),
  k('秋', 'あき', 'aki', 'autumn'), k('冬', 'ふゆ', 'fuyu', 'winter'),
  k('朝', 'あさ', 'asa', 'morning'), k('夜', 'よる', 'yoru', 'night'),
  k('力', 'ちから', 'chikara', 'power'),
];
