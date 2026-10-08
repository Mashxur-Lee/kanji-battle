import type { JlptLevel, VocabEntry } from './protocol';

// Starting difficulty per JLPT band (spec §8). These are placeholders: JLPT is a filter,
// and real difficulty should later be learned from player performance (spec §47).
export const LEVEL_DIFFICULTY: Record<JlptLevel, number> = { N5: 15, N4: 28, N3: 40, N2: 57, N1: 75 };

type Row = [kanji: string, reading: string, meaning: string, difficulty?: number];

const LISTS: Record<JlptLevel, Row[]> = {
  N5: [
    ['山', 'やま', 'mountain', 10], ['川', 'かわ', 'river', 10], ['水', 'みず', 'water', 10],
    ['花', 'はな', 'flower', 12], ['犬', 'いぬ', 'dog', 12], ['魚', 'さかな', 'fish', 14],
    ['雨', 'あめ', 'rain', 12], ['学校', 'がっこう', 'school'], ['先生', 'せんせい', 'teacher'],
    ['学生', 'がくせい', 'student'], ['電車', 'でんしゃ', 'train'], ['天気', 'てんき', 'weather'],
    ['友達', 'ともだち', 'friend'], ['時間', 'じかん', 'time; hours'], ['毎日', 'まいにち', 'every day'],
    ['会社', 'かいしゃ', 'company'], ['新聞', 'しんぶん', 'newspaper', 18], ['名前', 'なまえ', 'name'],
    ['外国', 'がいこく', 'foreign country', 18], ['来週', 'らいしゅう', 'next week', 18],
  ],
  N4: [
    ['経験', 'けいけん', 'experience'], ['意見', 'いけん', 'opinion'], ['準備', 'じゅんび', 'preparation', 30],
    ['説明', 'せつめい', 'explanation'], ['約束', 'やくそく', 'promise'], ['研究', 'けんきゅう', 'research', 30],
    ['自由', 'じゆう', 'freedom'], ['習慣', 'しゅうかん', 'habit; custom', 32], ['相談', 'そうだん', 'consultation'],
    ['興味', 'きょうみ', 'interest'], ['機会', 'きかい', 'opportunity'], ['世界', 'せかい', 'world', 24],
    ['試合', 'しあい', 'match; game'], ['理由', 'りゆう', 'reason'], ['安心', 'あんしん', 'relief; peace of mind'],
    ['特別', 'とくべつ', 'special'], ['運動', 'うんどう', 'exercise'], ['心配', 'しんぱい', 'worry'],
    ['文化', 'ぶんか', 'culture'], ['必要', 'ひつよう', 'necessary'],
  ],
  N3: [
    ['表現', 'ひょうげん', 'expression'], ['感情', 'かんじょう', 'emotion; feeling'], ['状態', 'じょうたい', 'condition; state'],
    ['影響', 'えいきょう', 'influence', 44], ['努力', 'どりょく', 'effort'], ['判断', 'はんだん', 'judgement'],
    ['原因', 'げんいん', 'cause'], ['結果', 'けっか', 'result'], ['責任', 'せきにん', 'responsibility'],
    ['期待', 'きたい', 'expectation'], ['解決', 'かいけつ', 'solution; resolution'], ['関係', 'かんけい', 'relationship', 36],
    ['印象', 'いんしょう', 'impression'], ['現在', 'げんざい', 'the present; now'], ['不安', 'ふあん', 'anxiety'],
    ['信頼', 'しんらい', 'trust', 46], ['緊張', 'きんちょう', 'tension; nervousness', 46], ['我慢', 'がまん', 'patience; endurance', 44],
    ['想像', 'そうぞう', 'imagination'], ['違反', 'いはん', 'violation'],
  ],
  N2: [
    ['懸念', 'けねん', 'concern; worry', 60], ['把握', 'はあく', 'grasp; understanding', 60], ['維持', 'いじ', 'maintenance'],
    ['傾向', 'けいこう', 'tendency'], ['妥協', 'だきょう', 'compromise'], ['範囲', 'はんい', 'scope; range'],
    ['矛盾', 'むじゅん', 'contradiction', 60], ['雰囲気', 'ふんいき', 'atmosphere; mood'], ['抵抗', 'ていこう', 'resistance'],
    ['依頼', 'いらい', 'request'], ['貢献', 'こうけん', 'contribution'], ['克服', 'こくふく', 'overcoming', 60],
    ['拡大', 'かくだい', 'expansion'], ['衝突', 'しょうとつ', 'collision; clash'], ['削除', 'さくじょ', 'deletion'],
    ['偏見', 'へんけん', 'prejudice', 62], ['撤退', 'てったい', 'withdrawal; retreat', 62], ['曖昧', 'あいまい', 'ambiguous; vague', 62],
    ['慎重', 'しんちょう', 'careful; cautious'], ['頻繁', 'ひんぱん', 'frequent', 62],
  ],
  N1: [
    ['憂鬱', 'ゆううつ', 'melancholy; gloomy', 92], ['躊躇', 'ちゅうちょ', 'hesitation', 88], ['遂行', 'すいこう', 'execution; carrying out', 70],
    ['斡旋', 'あっせん', 'mediation; good offices', 85], ['顕著', 'けんちょ', 'remarkable; striking'], ['措置', 'そち', 'measure; step'],
    ['是正', 'ぜせい', 'correction; rectification'], ['逸脱', 'いつだつ', 'deviation'], ['漠然', 'ばくぜん', 'vague; obscure'],
    ['払拭', 'ふっしょく', 'wiping out; dispelling', 82], ['杞憂', 'きゆう', 'needless worry', 85], ['吟味', 'ぎんみ', 'scrutiny; careful examination'],
    ['拘束', 'こうそく', 'restraint; binding', 70], ['諦念', 'ていねん', 'resignation; acceptance', 88], ['威嚇', 'いかく', 'intimidation; threat', 82],
    ['怠慢', 'たいまん', 'negligence'], ['懐疑', 'かいぎ', 'skepticism; doubt', 80], ['錯覚', 'さっかく', 'illusion', 70],
    ['煩雑', 'はんざつ', 'complicated; troublesome', 80], ['該当', 'がいとう', 'corresponding; applicable', 68],
  ],
};

// Add or edit words in LISTS above — nothing else in the codebase needs to change.
export const VOCAB: readonly VocabEntry[] = (Object.keys(LISTS) as JlptLevel[]).flatMap((jlpt) =>
  LISTS[jlpt].map(([kanji, reading, meaning, difficulty]) => ({
    id: `${kanji}:${reading}`, // stable across reordering; becomes a DB key in Phase 3
    kanji,
    reading,
    meaning,
    jlpt,
    difficulty: difficulty ?? LEVEL_DIFFICULTY[jlpt],
  })),
);
