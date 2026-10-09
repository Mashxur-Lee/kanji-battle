import type { Level, VocabEntry } from './protocol';

// Starting difficulty per level (spec §8). These are placeholders: JLPT is a filter, and real
// difficulty should later be learned from player performance (spec §47). JLPT tags are approximate —
// there is no official JLPT word list.
export const LEVEL_DIFFICULTY: Record<Level, number> = { KANA: 6, N5: 15, N4: 28, N3: 40, N2: 57, N1: 75 };

type Row = [kanji: string, reading: string, meaning: string, difficulty?: number];

const N5: Row[] = [
  ['山', 'やま', 'mountain', 10], ['川', 'かわ', 'river', 10], ['水', 'みず', 'water', 10],
  ['花', 'はな', 'flower', 12], ['犬', 'いぬ', 'dog', 12], ['魚', 'さかな', 'fish', 14],
  ['雨', 'あめ', 'rain', 12], ['空', 'そら', 'sky', 12], ['海', 'うみ', 'sea', 12],
  ['雪', 'ゆき', 'snow', 12], ['風', 'かぜ', 'wind', 12], ['目', 'め', 'eye', 10],
  ['耳', 'みみ', 'ear', 10], ['口', 'くち', 'mouth', 10], ['手', 'て', 'hand', 10],
  ['足', 'あし', 'foot; leg', 12], ['人', 'ひと', 'person', 10], ['男', 'おとこ', 'man', 12],
  ['女', 'おんな', 'woman', 12], ['車', 'くるま', 'car', 12], ['道', 'みち', 'road; way', 12],
  ['駅', 'えき', 'station', 14], ['店', 'みせ', 'shop', 12], ['本', 'ほん', 'book', 10],
  ['春', 'はる', 'spring', 12], ['夏', 'なつ', 'summer', 12], ['秋', 'あき', 'autumn', 12],
  ['冬', 'ふゆ', 'winter', 12], ['朝', 'あさ', 'morning', 12], ['夜', 'よる', 'night', 12],
  ['肉', 'にく', 'meat', 12], ['お茶', 'おちゃ', 'green tea', 12],
  ['学校', 'がっこう', 'school'], ['先生', 'せんせい', 'teacher'], ['学生', 'がくせい', 'student'],
  ['電車', 'でんしゃ', 'train'], ['天気', 'てんき', 'weather'], ['友達', 'ともだち', 'friend'],
  ['時間', 'じかん', 'time; hours'], ['毎日', 'まいにち', 'every day'], ['会社', 'かいしゃ', 'company'],
  ['新聞', 'しんぶん', 'newspaper', 18], ['名前', 'なまえ', 'name'], ['外国', 'がいこく', 'foreign country', 18],
  ['来週', 'らいしゅう', 'next week', 18], ['子供', 'こども', 'child'], ['牛乳', 'ぎゅうにゅう', 'milk', 18],
  ['自転車', 'じてんしゃ', 'bicycle', 18], ['病院', 'びょういん', 'hospital', 18], ['銀行', 'ぎんこう', 'bank'],
  ['大学', 'だいがく', 'university'], ['部屋', 'へや', 'room', 18], ['写真', 'しゃしん', 'photograph'],
  ['料理', 'りょうり', 'cooking; dish'], ['休み', 'やすみ', 'rest; holiday'], ['今年', 'ことし', 'this year', 18],
  ['去年', 'きょねん', 'last year', 18], ['仕事', 'しごと', 'work; job'], ['電話', 'でんわ', 'telephone'],
  ['音楽', 'おんがく', 'music'], ['飲み物', 'のみもの', 'drink'], ['買い物', 'かいもの', 'shopping'],
  ['動物', 'どうぶつ', 'animal'], ['日本語', 'にほんご', 'Japanese language'], ['新しい', 'あたらしい', 'new'],
  ['高い', 'たかい', 'tall; expensive'], ['安い', 'やすい', 'cheap'], ['大きい', 'おおきい', 'big'],
  ['小さい', 'ちいさい', 'small'], ['食べる', 'たべる', 'to eat'], ['飲む', 'のむ', 'to drink'],
  ['書く', 'かく', 'to write'], ['読む', 'よむ', 'to read'], ['行く', 'いく', 'to go'],
  ['来る', 'くる', 'to come'], ['見る', 'みる', 'to see; to watch'],
];

const N4: Row[] = [
  ['経験', 'けいけん', 'experience'], ['意見', 'いけん', 'opinion'], ['準備', 'じゅんび', 'preparation', 30],
  ['説明', 'せつめい', 'explanation'], ['約束', 'やくそく', 'promise'], ['研究', 'けんきゅう', 'research', 30],
  ['自由', 'じゆう', 'freedom'], ['習慣', 'しゅうかん', 'habit; custom', 32], ['相談', 'そうだん', 'consultation'],
  ['興味', 'きょうみ', 'interest'], ['機会', 'きかい', 'opportunity'], ['世界', 'せかい', 'world', 24],
  ['試合', 'しあい', 'match; game'], ['理由', 'りゆう', 'reason'], ['安心', 'あんしん', 'relief; peace of mind'],
  ['特別', 'とくべつ', 'special'], ['運動', 'うんどう', 'exercise'], ['心配', 'しんぱい', 'worry'],
  ['文化', 'ぶんか', 'culture'], ['必要', 'ひつよう', 'necessary'], ['運転', 'うんてん', 'driving'],
  ['会議', 'かいぎ', 'meeting'], ['地図', 'ちず', 'map', 24], ['空港', 'くうこう', 'airport'],
  ['旅行', 'りょこう', 'travel; trip'], ['予定', 'よてい', 'plan; schedule'], ['連絡', 'れんらく', 'contact'],
  ['返事', 'へんじ', 'reply'], ['趣味', 'しゅみ', 'hobby'], ['質問', 'しつもん', 'question'],
  ['答え', 'こたえ', 'answer', 24], ['計画', 'けいかく', 'plan; project'], ['生活', 'せいかつ', 'daily life'],
  ['社会', 'しゃかい', 'society'], ['経済', 'けいざい', 'economy', 32], ['政治', 'せいじ', 'politics', 32],
  ['事故', 'じこ', 'accident'], ['火事', 'かじ', 'fire (disaster)'], ['地震', 'じしん', 'earthquake'],
  ['台風', 'たいふう', 'typhoon'], ['技術', 'ぎじゅつ', 'technology; skill', 32], ['産業', 'さんぎょう', 'industry', 32],
  ['輸出', 'ゆしゅつ', 'export', 32], ['輸入', 'ゆにゅう', 'import', 32], ['引っ越し', 'ひっこし', 'moving house'],
  ['留守', 'るす', 'being away from home', 32], ['景色', 'けしき', 'scenery', 30], ['季節', 'きせつ', 'season'],
  ['味', 'あじ', 'taste', 24], ['形', 'かたち', 'shape', 24], ['気分', 'きぶん', 'mood; feeling'],
  ['熱', 'ねつ', 'fever; heat', 24], ['怪我', 'けが', 'injury', 32], ['注意', 'ちゅうい', 'caution; attention'],
  ['残念', 'ざんねん', 'regrettable; too bad'], ['丁寧', 'ていねい', 'polite; careful', 32], ['複雑', 'ふくざつ', 'complicated', 32],
  ['簡単', 'かんたん', 'simple; easy'], ['急ぐ', 'いそぐ', 'to hurry'], ['届ける', 'とどける', 'to deliver'],
  ['集める', 'あつめる', 'to collect'], ['調べる', 'しらべる', 'to investigate'], ['覚える', 'おぼえる', 'to memorise'],
];

const N3: Row[] = [
  ['表現', 'ひょうげん', 'expression'], ['感情', 'かんじょう', 'emotion; feeling'], ['状態', 'じょうたい', 'condition; state'],
  ['影響', 'えいきょう', 'influence', 44], ['努力', 'どりょく', 'effort'], ['判断', 'はんだん', 'judgement'],
  ['原因', 'げんいん', 'cause'], ['結果', 'けっか', 'result'], ['責任', 'せきにん', 'responsibility'],
  ['期待', 'きたい', 'expectation'], ['解決', 'かいけつ', 'solution; resolution'], ['関係', 'かんけい', 'relationship', 36],
  ['印象', 'いんしょう', 'impression'], ['現在', 'げんざい', 'the present; now'], ['不安', 'ふあん', 'anxiety'],
  ['信頼', 'しんらい', 'trust', 46], ['緊張', 'きんちょう', 'tension; nervousness', 46], ['我慢', 'がまん', 'patience; endurance', 44],
  ['想像', 'そうぞう', 'imagination'], ['違反', 'いはん', 'violation'], ['経営', 'けいえい', 'management'],
  ['環境', 'かんきょう', 'environment'], ['資源', 'しげん', 'resources'], ['情報', 'じょうほう', 'information', 36],
  ['政府', 'せいふ', 'government'], ['制度', 'せいど', 'system; institution'], ['条件', 'じょうけん', 'condition; terms'],
  ['証明', 'しょうめい', 'proof'], ['許可', 'きょか', 'permission'], ['命令', 'めいれい', 'order; command'],
  ['協力', 'きょうりょく', 'cooperation'], ['競争', 'きょうそう', 'competition'], ['成功', 'せいこう', 'success', 36],
  ['失敗', 'しっぱい', 'failure', 36], ['目的', 'もくてき', 'purpose'], ['方法', 'ほうほう', 'method', 36],
  ['手段', 'しゅだん', 'means'], ['効果', 'こうか', 'effect'], ['価値', 'かち', 'value'],
  ['平和', 'へいわ', 'peace', 36], ['戦争', 'せんそう', 'war', 36], ['自然', 'しぜん', 'nature', 36],
  ['事実', 'じじつ', 'fact'], ['意識', 'いしき', 'consciousness; awareness', 44], ['記憶', 'きおく', 'memory', 44],
  ['感謝', 'かんしゃ', 'gratitude'], ['尊敬', 'そんけい', 'respect', 44], ['孤独', 'こどく', 'loneliness', 46],
  ['恐怖', 'きょうふ', 'fear', 46], ['興奮', 'こうふん', 'excitement', 44], ['退屈', 'たいくつ', 'boredom', 44],
  ['素直', 'すなお', 'honest; obedient', 44], ['正直', 'しょうじき', 'honest'], ['得意', 'とくい', 'good at; strong point'],
  ['苦手', 'にがて', 'weak at; poor at'], ['迷う', 'まよう', 'to get lost; to hesitate'], ['疑う', 'うたがう', 'to doubt'],
  ['許す', 'ゆるす', 'to forgive; to allow'], ['諦める', 'あきらめる', 'to give up', 46],
];

const N2: Row[] = [
  ['懸念', 'けねん', 'concern; worry', 60], ['把握', 'はあく', 'grasp; understanding', 60], ['維持', 'いじ', 'maintenance'],
  ['傾向', 'けいこう', 'tendency'], ['妥協', 'だきょう', 'compromise'], ['範囲', 'はんい', 'scope; range'],
  ['矛盾', 'むじゅん', 'contradiction', 60], ['雰囲気', 'ふんいき', 'atmosphere; mood'], ['抵抗', 'ていこう', 'resistance'],
  ['依頼', 'いらい', 'request'], ['貢献', 'こうけん', 'contribution'], ['克服', 'こくふく', 'overcoming', 60],
  ['拡大', 'かくだい', 'expansion'], ['衝突', 'しょうとつ', 'collision; clash'], ['削除', 'さくじょ', 'deletion'],
  ['偏見', 'へんけん', 'prejudice', 62], ['撤退', 'てったい', 'withdrawal; retreat', 62], ['曖昧', 'あいまい', 'ambiguous; vague', 62],
  ['慎重', 'しんちょう', 'careful; cautious'], ['頻繁', 'ひんぱん', 'frequent', 62], ['促進', 'そくしん', 'promotion; acceleration'],
  ['削減', 'さくげん', 'reduction; cut'], ['頻度', 'ひんど', 'frequency'], ['概念', 'がいねん', 'concept'],
  ['観察', 'かんさつ', 'observation', 52], ['分析', 'ぶんせき', 'analysis'], ['検討', 'けんとう', 'consideration; examination'],
  ['妨害', 'ぼうがい', 'obstruction'], ['尊重', 'そんちょう', 'respect; esteem'], ['誇り', 'ほこり', 'pride'],
  ['勇気', 'ゆうき', 'courage', 50], ['弱点', 'じゃくてん', 'weakness', 52], ['優秀', 'ゆうしゅう', 'excellent'],
  ['強調', 'きょうちょう', 'emphasis'], ['発揮', 'はっき', 'display (of ability)', 60], ['主張', 'しゅちょう', 'claim; assertion'],
  ['批判', 'ひはん', 'criticism'], ['評価', 'ひょうか', 'evaluation', 52], ['承認', 'しょうにん', 'approval'],
  ['拒否', 'きょひ', 'refusal'], ['謙虚', 'けんきょ', 'modest; humble', 62], ['頑固', 'がんこ', 'stubborn'],
  ['臆病', 'おくびょう', 'cowardly; timid', 62], ['贅沢', 'ぜいたく', 'luxury', 62], ['皮肉', 'ひにく', 'irony; sarcasm'],
  ['油断', 'ゆだん', 'carelessness; negligence'], ['腐敗', 'ふはい', 'decay; corruption', 62], ['衰退', 'すいたい', 'decline', 62],
  ['繁栄', 'はんえい', 'prosperity', 60], ['災害', 'さいがい', 'disaster', 52], ['避難', 'ひなん', 'evacuation'],
  ['援助', 'えんじょ', 'assistance; aid'], ['補償', 'ほしょう', 'compensation', 60], ['妥当', 'だとう', 'appropriate; valid'],
  ['著しい', 'いちじるしい', 'remarkable; striking', 64], ['潔い', 'いさぎよい', 'gallant; graceful (in defeat)', 66],
];

const N1: Row[] = [
  ['憂鬱', 'ゆううつ', 'melancholy; gloomy', 92], ['躊躇', 'ちゅうちょ', 'hesitation', 88], ['遂行', 'すいこう', 'execution; carrying out', 70],
  ['斡旋', 'あっせん', 'mediation; good offices', 85], ['顕著', 'けんちょ', 'remarkable; striking'], ['措置', 'そち', 'measure; step'],
  ['是正', 'ぜせい', 'correction; rectification'], ['逸脱', 'いつだつ', 'deviation'], ['漠然', 'ばくぜん', 'vague; obscure'],
  ['払拭', 'ふっしょく', 'wiping out; dispelling', 82], ['杞憂', 'きゆう', 'needless worry', 85], ['吟味', 'ぎんみ', 'scrutiny; careful examination'],
  ['拘束', 'こうそく', 'restraint; binding', 70], ['諦念', 'ていねん', 'resignation; acceptance', 88], ['威嚇', 'いかく', 'intimidation; threat', 82],
  ['怠慢', 'たいまん', 'negligence'], ['懐疑', 'かいぎ', 'skepticism; doubt', 80], ['錯覚', 'さっかく', 'illusion', 70],
  ['煩雑', 'はんざつ', 'complicated; troublesome', 80], ['該当', 'がいとう', 'corresponding; applicable', 68],
  ['慈悲', 'じひ', 'mercy; compassion', 72], ['冒涜', 'ぼうとく', 'blasphemy; desecration', 90], ['蔑む', 'さげすむ', 'to despise', 85],
  ['貪欲', 'どんよく', 'greed; greedy', 80], ['傲慢', 'ごうまん', 'arrogance', 82], ['謙遜', 'けんそん', 'modesty; humility', 78],
  ['寛容', 'かんよう', 'tolerance; generosity', 70], ['狼狽', 'ろうばい', 'consternation; panic', 92], ['邂逅', 'かいこう', 'chance encounter', 95],
  ['刹那', 'せつな', 'moment; instant', 80], ['陶酔', 'とうすい', 'intoxication; rapture', 85], ['渇望', 'かつぼう', 'craving; thirst for', 78],
  ['懺悔', 'ざんげ', 'repentance; confession', 88], ['呪縛', 'じゅばく', 'spell; curse; binding', 85], ['崇拝', 'すうはい', 'worship', 75],
  ['隠蔽', 'いんぺい', 'concealment; cover-up', 85], ['捏造', 'ねつぞう', 'fabrication', 85], ['偽善', 'ぎぜん', 'hypocrisy', 75],
  ['脆弱', 'ぜいじゃく', 'fragile; vulnerable', 85], ['顛末', 'てんまつ', 'the whole story; details', 90], ['覇権', 'はけん', 'hegemony; supremacy', 78],
  ['畏敬', 'いけい', 'reverence; awe', 85], ['羨望', 'せんぼう', 'envy', 82], ['嫉妬', 'しっと', 'jealousy', 72],
  ['焦燥', 'しょうそう', 'impatience; frustration', 88], ['憤慨', 'ふんがい', 'indignation; resentment', 82], ['葛藤', 'かっとう', 'inner conflict; dilemma', 80],
  ['矜持', 'きょうじ', 'pride; dignity', 92], ['蹂躙', 'じゅうりん', 'trampling; overrunning', 95], ['奔走', 'ほんそう', 'running about; making efforts', 80],
  ['逡巡', 'しゅんじゅん', 'hesitation; indecision', 95], ['凌駕', 'りょうが', 'surpassing; outdoing', 90], ['俯瞰', 'ふかん', "bird's-eye view", 88],
];

// Hiragana practice: shown as kana, answered in romaji. [kana, romaji, meaning, difficulty?]
const KANA: Row[] = [
  ...'あa いi うu えe おo かka きki くku けke こko さsa しshi すsu せse そso たta ちchi つtsu てte とto なna にni ぬnu ねne のno はha ひhi ふfu へhe ほho まma みmi むmu めme もmo やya ゆyu よyo らra りri るru れre ろro わwa をwo んn'
    .split(' ').map((s): Row => [s[0], s.slice(1), 'hiragana', 5]),
  ...'がga ぎgi ぐgu げge ごgo ざza じji ずzu ぜze ぞzo だda ぢji づzu でde どdo ばba びbi ぶbu べbe ぼbo ぱpa ぴpi ぷpu ぺpe ぽpo'
    .split(' ').map((s): Row => [s[0], s.slice(1), 'hiragana (voiced)', 6]),
  ...'きゃkya きゅkyu きょkyo しゃsha しゅshu しょsho ちゃcha ちゅchu ちょcho にゃnya ひゃhya みゃmya りゃrya りょryo ぎょgyo じゃja じゅju じょjo びょbyo'
    .split(' ').map((s): Row => [s.slice(0, 2), s.slice(2), 'hiragana (combined)', 8]),
  ['ねこ', 'neko', 'cat', 9], ['いぬ', 'inu', 'dog', 9], ['さかな', 'sakana', 'fish', 10], ['すし', 'sushi', 'sushi', 9],
  ['みず', 'mizu', 'water', 9], ['やま', 'yama', 'mountain', 9], ['ともだち', 'tomodachi', 'friend', 11], ['きっぷ', 'kippu', 'ticket', 11],
  ['がっこう', 'gakkou', 'school', 11], ['にほん', 'nihon', 'Japan', 10], ['ありがとう', 'arigatou', 'thank you', 12], ['おはよう', 'ohayou', 'good morning', 12],
];

/** Hand-written lists. The full vocabulary (data/vocab.json) = these + the open JLPT lists; see scripts/build-vocab.ts. */
export const CURATED: Record<Level, Row[]> = { KANA, N5, N4, N3, N2, N1 };

// Hiragana with two common romanisations of the same sound (ぢ/じ, づ/ず).
export const KANA_ALT: Record<string, string[]> = { ぢ: ['じ'], づ: ['ず'] };

export type { Row as CuratedRow };

/** What players should see as "the reading": romaji for hiragana practice, kana otherwise. */
export const displayReading = (v: Pick<VocabEntry, 'reading' | 'romaji'>) => v.romaji ?? v.reading;
