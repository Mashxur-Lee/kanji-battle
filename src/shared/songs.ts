// 0.9.9.9.9.7 (round 3): Song lyrics — the owner's own five songs (made by the owner, with their lyrics; the files and
// the words the owner sent: MUSIC in the resources folder). A song plays, its line shows with some words hidden, and you
// type them in romaji as it is sung; the song waits for you at a line's end. Sorted from easy to hard; each says what to
// study first (its words, and its grammar with the lesson that teaches it).
//
// The recordings are short cuts ("TV size", about 90 s) of longer lyrics, so not every line is sung. `times` says where
// each line starts in the recording (seconds), null for a line the cut leaves out. A song with no times yet isn't
// offered to players: an admin times it in the game (Song lyrics → Time this song: tap Space as each line starts) and
// the times are pasted here.
//
// Words in `jp`: {漢字|かんじ} gives a kanji its reading (furigana). `romaji`: the words to type, one per space, in the
// spelling people type (ou, uu for long vowels); any common spelling is accepted (canon below).

export interface SongLine { jp: string; romaji: string; en: string; ru: string; /** the part of the song: Verse 1, Chorus… */ part?: string }
export interface StudyWord { w: string; r: string; en: string; ru: string; level: string }
export interface StudyGrammar { pattern: string; example: string; en: string; ru: string; /** the Grammar lesson that teaches it */ lesson?: string }
export interface Song {
  id: string;
  title: { jp: string; reading: string; romaji: string; en: string; ru: string };
  /** 1 (easiest) to 5 */
  difficulty: 1 | 2 | 3 | 4 | 5;
  level: string;
  bpm: number;
  about: { en: string; ru: string };
  words: StudyWord[];
  grammar: StudyGrammar[];
  lines: SongLine[];
  /** each line's start in the recording (s), null when the cut doesn't sing it; absent: not timed yet */
  times?: Array<number | null>;
  /** the recording's length (s) */
  length: number;
}

const L = (part: string, jp: string, romaji: string, en: string, ru: string): SongLine => ({ part, jp, romaji, en, ru });

export const SONGS: Song[] = [
  {
    id: 'shiroi-tegami',
    title: { jp: '白い手紙', reading: 'しろいてがみ', romaji: 'Shiroi Tegami', en: 'The White Letter', ru: 'Белое письмо' },
    difficulty: 1, level: 'N5-N4', bpm: 72, length: 86.1,
    about: {
      en: 'A slow, gentle ballad on a rainy night: a letter you can\'t bring yourself to write. Almost every word is N5-N4, sung slowly - the best first song.',
      ru: 'Медленная нежная баллада дождливой ночью: письмо, которое никак не написать. Почти все слова уровня N5-N4, поётся медленно - лучшая первая песня.',
    },
    words: [
      { w: '雨', r: 'あめ', en: 'rain', ru: 'дождь', level: 'N5' },
      { w: '静か', r: 'しずか', en: 'quiet', ru: 'тихий', level: 'N5' },
      { w: '呼ぶ', r: 'よぶ', en: 'to call', ru: 'звать', level: 'N5' },
      { w: '痛い', r: 'いたい', en: 'painful', ru: 'больно', level: 'N5' },
      { w: '手紙', r: 'てがみ', en: 'letter', ru: 'письмо', level: 'N5' },
      { w: '心', r: 'こころ', en: 'heart', ru: 'сердце', level: 'N4' },
      { w: '気持ち', r: 'きもち', en: 'feeling', ru: 'чувство', level: 'N4' },
      { w: '消える', r: 'きえる', en: 'to disappear', ru: 'исчезать', level: 'N4' },
      { w: '温める', r: 'あたためる', en: 'to warm up', ru: 'согревать', level: 'N4' },
      { w: '止まる', r: 'とまる', en: 'to stop', ru: 'останавливаться', level: 'N4' },
      { w: '涙', r: 'なみだ', en: 'tears', ru: 'слёзы', level: 'N3' },
    ],
    grammar: [
      { pattern: '〜たい', example: '{見|み}たかった', en: 'want to ~', ru: 'хотеть ~', lesson: 'n5-tai' },
      { pattern: '〜ても', example: 'いなくなっても', en: 'even if ~', ru: 'даже если ~', lesson: 'n4-temo' },
      { pattern: '〜たら', example: '{見|み}えたら', en: 'if / when ~', ru: 'если / когда ~', lesson: 'n4-tara' },
      { pattern: '〜でしょう', example: '{消|き}えないでしょう', en: 'probably ~', ru: 'наверное ~', lesson: 'n5-deshou' },
      { pattern: '〜ばいいのに', example: 'なればいいのに', en: 'I wish ~', ru: 'вот бы ~', lesson: 'n4-ba' },
    ],
    lines: [
      L('Verse 1', '{雨|あめ}の {音|おと}が {聞|き}こえる', 'ame no oto ga kikoeru', 'I can hear the sound of the rain', 'Я слышу шум дождя'),
      L('Verse 1', '{静|しず}かな {夜|よる}の {窓|まど}', 'shizuka na yoru no mado', 'At the window on a quiet night', 'У окна тихой ночью'),
      L('Verse 1', 'あなたの {名前|なまえ}を', 'anata no namae wo', 'Your name', 'Твоё имя'),
      L('Verse 1', '{一人|ひとり}で {呼|よ}んで いた', 'hitori de yonde ita', 'I was calling it, all alone', 'Я звала совсем одна'),
      L('Verse 1', '「{大丈夫|だいじょうぶ}」と {言|い}った けど', 'daijoubu to itta kedo', 'I said "I\'m okay"', 'Я сказала «всё хорошо»'),
      L('Verse 1', '{本当|ほんとう}は {痛|いた}かった', 'hontou wa itakatta', 'But the truth is, it hurt', 'Но на самом деле было больно'),
      L('Verse 1', '{笑|わら}う {顔|かお}の {下|した}で', 'warau kao no shita de', 'Underneath my smiling face', 'Под улыбающимся лицом'),
      L('Verse 1', 'いつも {泣|な}いて いた', 'itsumo naite ita', 'I was always crying', 'Я всегда плакала'),
      L('Pre-Chorus', 'もし {心|こころ}が {見|み}えたら', 'moshi kokoro ga mietara', 'If you could see my heart', 'Если бы ты увидел моё сердце'),
      L('Pre-Chorus', 'あなたは {何|なに}を {言|い}う？', 'anata wa nani wo iu', 'What would you say?', 'Что бы ты сказал?'),
      L('Chorus', '{好|す}きだよ {好|す}きだよ', 'suki da yo suki da yo', 'I love you, I love you', 'Я люблю тебя, люблю'),
      L('Chorus', '{言|い}えない {言葉|ことば}', 'ienai kotoba', 'Words I can\'t say', 'Слова, что не сказать'),
      L('Chorus', '{白|しろ}い {手紙|てがみ}に', 'shiroi tegami ni', 'On a white letter', 'На белом письме'),
      L('Chorus', '{何|なに}も {書|か}けない', 'nani mo kakenai', 'I can\'t write anything', 'Не могу ничего написать'),
      L('Chorus', '{明日|あした} あなたが', 'ashita anata ga', 'Even if tomorrow', 'Даже если завтра'),
      L('Chorus', 'いなく なっても', 'inaku natte mo', 'You\'re gone', 'Тебя не станет'),
      L('Chorus', 'この {気持|きも}ちは', 'kono kimochi wa', 'This feeling', 'Это чувство'),
      L('Chorus', '{消|き}えないでしょう', 'kienai deshou', 'Probably won\'t ever disappear', 'Наверное, не исчезнет'),
      L('Verse 2', '{春|はる}の {花|はな}も {夏|なつ}の {空|そら}も', 'haru no hana mo natsu no sora mo', 'The spring flowers, the summer sky', 'Весенние цветы, летнее небо'),
      L('Verse 2', 'あなたと {見|み}たかった', 'anata to mitakatta', 'I wanted to see them with you', 'Я хотела увидеть с тобой'),
      L('Verse 2', '{冷|つめ}たい この {手|て}を', 'tsumetai kono te wo', 'This cold hand of mine', 'Эту холодную руку'),
      L('Verse 2', 'もう {一度|いちど} {温|あたた}めて', 'mou ichido atatamete', 'Please warm it one more time', 'Согрей ещё раз'),
      L('Verse 2', '「さようなら」は まだ', 'sayounara wa mada', 'Because I don\'t want', 'Ведь «прощай»'),
      L('Verse 2', '{言|い}いたく ないから', 'iitaku nai kara', 'To say "goodbye" yet', 'Я ещё не хочу говорить'),
      L('Verse 2', 'ゆっくり ゆっくり', 'yukkuri yukkuri', 'Slowly, slowly', 'Медленно, медленно'),
      L('Verse 2', '{歩|ある}いて いこう', 'aruite ikou', 'Let\'s keep walking', 'Пойдём дальше'),
      L('Pre-Chorus 2', 'もし {時間|じかん}が {止|と}まったら', 'moshi jikan ga tomattara', 'If time could stop', 'Если бы время остановилось'),
      L('Pre-Chorus 2', 'ずっと ここに いたい', 'zutto koko ni itai', 'I\'d want to stay here forever', 'Я хотела бы остаться здесь навсегда'),
      L('Chorus', '{好|す}きだよ {好|す}きだよ', 'suki da yo suki da yo', 'I love you, I love you', 'Я люблю тебя, люблю'),
      L('Chorus', '{言|い}えない {言葉|ことば}', 'ienai kotoba', 'Words I can\'t say', 'Слова, что не сказать'),
      L('Chorus', '{白|しろ}い {手紙|てがみ}に', 'shiroi tegami ni', 'On a white letter', 'На белом письме'),
      L('Chorus', '{何|なに}も {書|か}けない', 'nani mo kakenai', 'I can\'t write anything', 'Не могу ничего написать'),
      L('Chorus', '{明日|あした} あなたが', 'ashita anata ga', 'Even if tomorrow', 'Даже если завтра'),
      L('Chorus', 'いなく なっても', 'inaku natte mo', 'You\'re gone', 'Тебя не станет'),
      L('Chorus', 'この {気持|きも}ちは', 'kono kimochi wa', 'This feeling', 'Это чувство'),
      L('Chorus', '{消|き}えないでしょう', 'kienai deshou', 'Probably won\'t ever disappear', 'Наверное, не исчезнет'),
      L('Bridge', 'ごめんね ありがとう', 'gomen ne arigatou', 'I\'m sorry, and thank you', 'Прости и спасибо'),
      L('Bridge', 'ちゃんと {言|い}えなくて', 'chanto ienakute', 'I couldn\'t say it properly', 'Что не смогла сказать как следует'),
      L('Bridge', '{涙|なみだ}が {声|こえ}に', 'namida ga koe ni', 'I wish my tears', 'Вот бы мои слёзы'),
      L('Bridge', 'なれば いいのに', 'nareba ii no ni', 'Could become my voice', 'Стали моим голосом'),
      L('Final Chorus', '{好|す}きだよ {好|す}きだよ', 'suki da yo suki da yo', 'I love you, I love you', 'Я люблю тебя, люблю'),
      L('Final Chorus', 'やっと {言|い}えた', 'yatto ieta', 'I finally said it', 'Наконец сказала'),
      L('Final Chorus', '{白|しろ}い {手紙|てがみ}は', 'shiroi tegami wa', 'The white letter', 'Белое письмо'),
      L('Final Chorus', '{涙|なみだ}で ぬれた', 'namida de nureta', 'Is wet with my tears', 'Намокло от слёз'),
      L('Final Chorus', '{明日|あした} あなたが', 'ashita anata ga', 'Even if tomorrow', 'Даже если завтра'),
      L('Final Chorus', 'いなく なっても', 'inaku natte mo', 'You\'re gone', 'Тебя не станет'),
      L('Final Chorus', 'この {気持|きも}ちは', 'kono kimochi wa', 'This feeling', 'Это чувство'),
      L('Final Chorus', 'ずっと ここに', 'zutto koko ni', 'Will always be right here', 'Всегда будет здесь'),
      L('Outro', '{雨|あめ}が やんだ', 'ame ga yanda', 'The rain has stopped', 'Дождь закончился'),
    ],
  },
  {
    id: 'koi-no-mahou',
    title: { jp: '恋の魔法と放課後', reading: 'こいのまほうとほうかご', romaji: 'Koi no Mahou to Houkago', en: 'Love\'s Magic and After School', ru: 'Магия любви после уроков' },
    difficulty: 2, level: 'N4-N3', bpm: 138, length: 88.6,
    about: {
      en: 'A bright, bouncy school love song: a crush, a secret spell, and finally a confession at sunset. Everyday N4-N3 words at a pop tempo.',
      ru: 'Яркая, задорная школьная песня о любви: тайная симпатия, секретное заклинание и наконец признание на закате. Повседневные слова N4-N3 в темпе поп-песни.',
    },
    words: [
      { w: '魔法をかける', r: 'まほうをかける', en: 'to cast a spell', ru: 'наложить заклинание', level: 'N3' },
      { w: '放課後', r: 'ほうかご', en: 'after school', ru: 'после уроков', level: 'N4' },
      { w: '帰り道', r: 'かえりみち', en: 'the way home', ru: 'дорога домой', level: 'N4' },
      { w: '呪文', r: 'じゅもん', en: 'incantation', ru: 'заклинание', level: 'N2' },
      { w: '唱える', r: 'となえる', en: 'to chant', ru: 'произносить (заклинание)', level: 'N2' },
      { w: '映す', r: 'うつす', en: 'to reflect', ru: 'отражать', level: 'N3' },
      { w: '解ける', r: 'とける', en: '(a spell) to wear off', ru: 'развеяться (о чарах)', level: 'N3' },
      { w: '勇気を出す', r: 'ゆうきをだす', en: 'to work up courage', ru: 'набраться смелости', level: 'N3' },
      { w: '図書室', r: 'としょしつ', en: 'school library', ru: 'школьная библиотека', level: 'N4' },
    ],
    grammar: [
      { pattern: '〜なのに', example: '{帰|かえ}り{道|みち}なのに', en: 'even though it\'s ~', ru: 'хотя ~', lesson: 'n3-noni' },
      { pattern: '〜しか〜ない', example: '「ごめんね」しか{言|い}えなかった', en: 'could only ~', ru: 'смогла только ~', lesson: 'n5-shika' },
      { pattern: '〜ようとする', example: '{取|と}ろうとして', en: 'to try to ~', ru: 'пытаться ~' },
      { pattern: '〜てあげる', example: 'かけてあげる', en: 'to do ~ for someone', ru: 'сделать ~ для кого-то', lesson: 'n4-te-ageru' },
      { pattern: '〜ても', example: '{解|と}けても', en: 'even if ~', ru: 'даже если ~', lesson: 'n4-temo' },
    ],
    lines: [
      L('Intro', 'チャイムが {鳴|な}ったら {魔法|まほう}の {時間|じかん}', 'chaimu ga nattara mahou no jikan', 'When the bell rings, it\'s magic time', 'Когда звенит звонок - время магии'),
      L('Verse 1', '{窓|まど}の {外|そと} オレンジ{色|いろ}の {空|そら}', 'mado no soto orenjiiro no sora', 'Outside the window, an orange sky', 'За окном оранжевое небо'),
      L('Verse 1', 'いつもの {帰|かえ}り{道|みち}なのに', 'itsumo no kaerimichi na no ni', 'It\'s just my usual way home, and yet', 'Обычная дорога домой, и всё же'),
      L('Verse 1', '{君|きみ}が「また{明日|あした}」って {笑|わら}うだけで', 'kimi ga mata ashita tte warau dake de', 'Just from you smiling and saying "see you tomorrow"', 'Стоит тебе улыбнуться и сказать «до завтра»'),
      L('Verse 1', '{世界|せかい}が キラキラ {変|か}わってく', 'sekai ga kirakira kawatteku', 'The whole world turns sparkly', 'Весь мир начинает сверкать'),
      L('Pre-Chorus', 'ドキドキが {止|と}まらない', 'dokidoki ga tomaranai', 'My heart won\'t stop pounding', 'Сердце не перестаёт стучать'),
      L('Pre-Chorus', 'これって もしかして', 'kore tte moshikashite', 'Could this be... maybe...?', 'Неужели это...'),
      L('Chorus', '{恋|こい}の {魔法|まほう}を かけてあげる', 'koi no mahou wo kakete ageru', 'I\'ll cast a spell of love on you', 'Я наложу на тебя чары любви'),
      L('Chorus', '{放課後|ほうかご}の {秘密|ひみつ}の {呪文|じゅもん}', 'houkago no himitsu no jumon', 'A secret after-school incantation', 'Тайное заклинание после уроков'),
      L('Chorus', '「{好|す}き」の {二文字|にもじ}が {言|い}えなくて', 'suki no nimoji ga ienakute', 'I can\'t say the word "suki"', 'Не могу сказать слово «нравишься»'),
      L('Chorus', '{今日|きょう}も {心|こころ}で {唱|とな}えてる', 'kyou mo kokoro de tonaeteru', 'So today again, I chant it in my heart', 'И сегодня повторяю его в сердце'),
      L('Chorus', '{星|ほし}より {光|ひか}る {君|きみ}の {目|め}に', 'hoshi yori hikaru kimi no me ni', 'In your eyes that shine brighter than the stars', 'В твоих глазах, что ярче звёзд'),
      L('Chorus', 'いつか {私|わたし}を {映|うつ}してね', 'itsuka watashi wo utsushite ne', 'Someday, please let me be reflected there', 'Когда-нибудь отрази меня'),
      L('Verse 2', '{図書室|としょしつ}で {同|おな}じ {本|ほん}を', 'toshoshitsu de onaji hon wo', 'In the library, the same book', 'В библиотеке одну и ту же книгу'),
      L('Verse 2', '{取|と}ろうとして {手|て}が {触|ふ}れた', 'torou to shite te ga fureta', 'We both reached for it, and our hands touched', 'Мы потянулись - и руки соприкоснулись'),
      L('Verse 2', '{赤|あか}くなった {顔|かお}を {隠|かく}して', 'akaku natta kao wo kakushite', 'Hiding my face that had turned red', 'Пряча покрасневшее лицо'),
      L('Verse 2', '「ごめんね」しか {言|い}えなかった', 'gomen ne shika ienakatta', 'All I could say was "sorry"', 'Смогла сказать только «прости»'),
      L('Chorus', '{恋|こい}の {魔法|まほう}を かけてあげる', 'koi no mahou wo kakete ageru', 'I\'ll cast a spell of love on you', 'Я наложу на тебя чары любви'),
      L('Chorus', '{放課後|ほうかご}の {秘密|ひみつ}の {呪文|じゅもん}', 'houkago no himitsu no jumon', 'A secret after-school incantation', 'Тайное заклинание после уроков'),
      L('Chorus', '「{好|す}き」の {二文字|にもじ}が {言|い}えなくて', 'suki no nimoji ga ienakute', 'I can\'t say the word "suki"', 'Не могу сказать слово «нравишься»'),
      L('Chorus', '{今日|きょう}も {心|こころ}で {唱|とな}えてる', 'kyou mo kokoro de tonaeteru', 'So today again, I chant it in my heart', 'И сегодня повторяю его в сердце'),
      L('Chorus', '{星|ほし}より {光|ひか}る {君|きみ}の {目|め}に', 'hoshi yori hikaru kimi no me ni', 'In your eyes that shine brighter than the stars', 'В твоих глазах, что ярче звёзд'),
      L('Chorus', 'いつか {私|わたし}を {映|うつ}してね', 'itsuka watashi wo utsushite ne', 'Someday, please let me be reflected there', 'Когда-нибудь отрази меня'),
      L('Bridge', 'もしも {魔法|まほう}が {解|と}けても', 'moshimo mahou ga tokete mo', 'Even if the magic wears off', 'Даже если чары развеются'),
      L('Bridge', 'この {気持|きも}ちは {本物|ほんもの}だよ', 'kono kimochi wa honmono da yo', 'This feeling is real', 'Это чувство настоящее'),
      L('Bridge', '{勇気|ゆうき}を {出|だ}して {今|いま} {伝|つた}えたい', 'yuuki wo dashite ima tsutaetai', 'I\'ll be brave, I want to tell you now', 'Наберусь смелости - хочу сказать сейчас'),
      L('Bridge', 'さん に いち', 'san ni ichi', '3, 2, 1...', '3, 2, 1...'),
      L('Final Chorus', '{恋|こい}の {魔法|まほう}は もういらない', 'koi no mahou wa mou iranai', 'I don\'t need love\'s magic anymore', 'Мне больше не нужна магия любви'),
      L('Final Chorus', '{放課後|ほうかご}の {夕日|ゆうひ}の {中|なか}', 'houkago no yuuhi no naka', 'Here in the after-school sunset', 'В закате после уроков'),
      L('Final Chorus', '「{好|す}きです」って やっと{言|い}えたよ', 'suki desu tte yatto ieta yo', 'I finally said it: "I like you"', 'Я наконец сказала: «ты мне нравишься»'),
      L('Final Chorus', '{君|きみ}の {答|こた}えを {聞|き}かせて', 'kimi no kotae wo kikasete', 'Please let me hear your answer', 'Дай услышать твой ответ'),
      L('Final Chorus', '{星|ほし}より {光|ひか}る {君|きみ}の {目|め}に', 'hoshi yori hikaru kimi no me ni', 'In your eyes that shine brighter than the stars', 'В твоих глазах, что ярче звёзд'),
      L('Final Chorus', '{今|いま} {私|わたし}が {映|うつ}ってる', 'ima watashi ga utsutteru', 'Right now, I\'m the one reflected there', 'Сейчас отражаюсь я'),
      L('Outro', 'チャイムが {鳴|な}っても {魔法|まほう}は {続|つづ}く', 'chaimu ga natte mo mahou wa tsuzuku', 'Even after the bell rings, the magic goes on', 'Даже после звонка магия продолжается'),
    ],
  },
  {
    id: 'hakoniwa-no-honoo',
    title: { jp: '箱庭の炎', reading: 'はこにわのほのお', romaji: 'Hakoniwa no Honoo', en: 'Flame in the Miniature Garden', ru: 'Пламя в саду-миниатюре' },
    difficulty: 3, level: 'N3', bpm: 150, length: 83.5,
    about: {
      en: 'Fast, dark, theatrical rock about breaking out of the box called "normal". N3 words and grammar, sung with sudden stops - you will need quick fingers.',
      ru: 'Быстрый, мрачный, театральный рок о том, как вырваться из коробки под названием «нормально». Слова и грамматика N3, с резкими остановками - нужны быстрые пальцы.',
    },
    words: [
      { w: '鏡', r: 'かがみ', en: 'mirror', ru: 'зеркало', level: 'N3' },
      { w: '真似', r: 'まね', en: 'copying', ru: 'подражание', level: 'N3' },
      { w: '包む', r: 'つつむ', en: 'to wrap', ru: 'заворачивать', level: 'N3' },
      { w: '灰', r: 'はい', en: 'ash', ru: 'пепел', level: 'N2' },
      { w: '傷つく', r: 'きずつく', en: 'to get hurt', ru: 'пострадать, ранить себя', level: 'N3' },
      { w: '触れる', r: 'ふれる', en: 'to touch', ru: 'касаться', level: 'N3' },
      { w: '飾る', r: 'かざる', en: 'to decorate', ru: 'украшать', level: 'N3' },
      { w: '汚れる', r: 'よごれる', en: 'to get dirty', ru: 'пачкаться', level: 'N3' },
      { w: '炎', r: 'ほのお', en: 'flame', ru: 'пламя', level: 'N2' },
    ],
    grammar: [
      { pattern: '〜ばかり', example: '{真似|まね}ばかり', en: 'nothing but ~', ru: 'одно лишь ~', lesson: 'n3-bakari' },
      { pattern: '〜さえ', example: '{笑|わら}い{方|かた}さえ', en: 'even ~', ru: 'даже ~', lesson: 'n3-sae' },
      { pattern: '〜てしまえば', example: '{壊|こわ}してしまえば', en: 'if I just (completely) ~', ru: 'если взять и ~', lesson: 'n4-te-shimau' },
      { pattern: '〜そう', example: '{忘|わす}れそうで', en: 'about to ~', ru: 'вот-вот ~', lesson: 'n4-sou-look' },
      { pattern: '〜たびに', example: '{叫|さけ}ぶたびに', en: 'every time ~', ru: 'каждый раз, когда ~', lesson: 'n3-tabi-ni' },
      { pattern: '〜という', example: '「{普通|ふつう}」という{箱|はこ}', en: 'a ~ called ~', ru: '~ под названием ~', lesson: 'n4-to-iu' },
      { pattern: '〜ふりをする', example: '{花|はな}のふりをしていた', en: 'to pretend to be ~', ru: 'притворяться ~' },
      { pattern: '〜ずに', example: '{触|ふ}れずに', en: 'without ~ing', ru: 'не ~я' },
      { pattern: '〜こそ', example: 'この{炎|ほのお}こそ', en: 'this, above all', ru: 'именно это', lesson: 'n2-koso' },
    ],
    lines: [
      L('Intro', '{燃|も}えろ {燃|も}えろ {夜|よ}が {明|あ}けるまで', 'moero moero yo ga akeru made', 'Burn, burn, until the night turns to dawn', 'Гори, гори, пока не наступит рассвет'),
      L('Verse 1', '{鏡|かがみ}の {中|なか}の {私|わたし}は {誰|だれ}かの {真似|まね}ばかり', 'kagami no naka no watashi wa dareka no mane bakari', 'The me in the mirror does nothing but copy someone else', 'Я в зеркале лишь копирую кого-то'),
      L('Verse 1', '{笑|わら}い{方|かた}さえ {決|き}められて {息|いき}ができない', 'waraikata sae kimerarete iki ga dekinai', 'Even the way I laugh is decided for me, and I can\'t breathe', 'Даже то, как смеяться, решают за меня - не могу дышать'),
      L('Verse 1', '{正|ただ}しい {形|かたち}に なれないなら', 'tadashii katachi ni narenai nara', 'If I can\'t become the "right" shape', 'Если не могу стать «правильной» формы'),
      L('Verse 1', '{壊|こわ}してしまえば いいでしょう', 'kowashite shimaeba ii deshou', 'Then I might as well just break it, right?', 'То можно просто всё разбить, правда?'),
      L('Pre-Chorus', '{優|やさ}しい {嘘|うそ}に {包|つつ}まれて', 'yasashii uso ni tsutsumarete', 'Wrapped up in gentle lies', 'Окутанная нежной ложью'),
      L('Pre-Chorus', '{本当|ほんとう}の {声|こえ}を {忘|わす}れそうで', 'hontou no koe wo wasuresou de', 'I feel like I\'m forgetting my real voice', 'Я будто забываю свой настоящий голос'),
      L('Chorus', '{燃|も}やして {燃|も}やして この{胸|むね}を', 'moyashite moyashite kono mune wo', 'Burn it, burn it, this heart of mine', 'Сожги, сожги это сердце'),
      L('Chorus', '{灰|はい}になるまで {愛|あい}してよ', 'hai ni naru made aishite yo', 'Love me until I turn to ash', 'Люби меня, пока я не стану пеплом'),
      L('Chorus', '{誰|だれ}にも{消|け}せない {火|ひ}のように', 'dare ni mo kesenai hi no you ni', 'Like a fire no one can put out', 'Как огонь, который никому не потушить'),
      L('Chorus', '{叫|さけ}ぶたびに {生|い}きていると {分|わ}かるから', 'sakebu tabi ni ikite iru to wakaru kara', 'Because every time I scream, I know I\'m alive', 'Ведь каждый крик напоминает, что я жива'),
      L('Chorus', '{泣|な}いても {泣|な}いても {終|お}わらない', 'naite mo naite mo owaranai', 'No matter how much I cry, it never ends', 'Сколько ни плачь - не кончается'),
      L('Chorus', '{痛|いた}みさえも {私|わたし}のもの', 'itami sae mo watashi no mono', 'Even the pain belongs to me', 'Даже боль - моя'),
      L('Verse 2', '「{普通|ふつう}」という {箱|はこ}の{中|なか}で', 'futsuu to iu hako no naka de', 'Inside a box called "normal"', 'В коробке под названием «нормально»'),
      L('Verse 2', 'きれいに{並|なら}んだ {花|はな}のふりをしていた', 'kirei ni naranda hana no furi wo shite ita', 'I pretended to be one of the neatly lined-up flowers', 'Я притворялась цветком в ровном ряду'),
      L('Verse 2', '{傷|きず}つくことが {怖|こわ}くて', 'kizutsuku koto ga kowakute', 'I was so afraid of getting hurt', 'Мне было так страшно пострадать'),
      L('Verse 2', '{誰|だれ}にも{触|ふ}れずに {生|い}きてきた', 'dare ni mo furezu ni ikite kita', 'That I lived without ever touching anyone', 'Что жила, ни к кому не прикасаясь'),
      L('Pre-Chorus 2', 'それでも {心|こころ}の{奥|おく}の{方|ほう}で', 'soredemo kokoro no oku no hou de', 'And yet, somewhere deep in my heart', 'И всё же где-то глубоко в сердце'),
      L('Pre-Chorus 2', '{小|ちい}さな{火|ひ}が {叫|さけ}んでいた', 'chiisana hi ga sakende ita', 'A small flame was screaming', 'Кричал маленький огонёк'),
      L('Chorus', '{燃|も}やして {燃|も}やして この{胸|むね}を', 'moyashite moyashite kono mune wo', 'Burn it, burn it, this heart of mine', 'Сожги, сожги это сердце'),
      L('Chorus', '{灰|はい}になるまで {愛|あい}してよ', 'hai ni naru made aishite yo', 'Love me until I turn to ash', 'Люби меня, пока я не стану пеплом'),
      L('Chorus', '{誰|だれ}にも{消|け}せない {火|ひ}のように', 'dare ni mo kesenai hi no you ni', 'Like a fire no one can put out', 'Как огонь, который никому не потушить'),
      L('Chorus', '{叫|さけ}ぶたびに {生|い}きていると {分|わ}かるから', 'sakebu tabi ni ikite iru to wakaru kara', 'Because every time I scream, I know I\'m alive', 'Ведь каждый крик напоминает, что я жива'),
      L('Chorus', '{泣|な}いても {泣|な}いても {終|お}わらない', 'naite mo naite mo owaranai', 'No matter how much I cry, it never ends', 'Сколько ни плачь - не кончается'),
      L('Chorus', '{痛|いた}みさえも {私|わたし}のもの', 'itami sae mo watashi no mono', 'Even the pain belongs to me', 'Даже боль - моя'),
      L('Bridge', 'ねえ {私|わたし}を{見|み}て', 'nee watashi wo mite', 'Hey, look at me', 'Эй, посмотри на меня'),
      L('Bridge', '{飾|かざ}らない {私|わたし}を{見|み}て', 'kazaranai watashi wo mite', 'Look at the real me, with nothing to hide behind', 'Посмотри на меня без прикрас'),
      L('Bridge', '{汚|よご}れても {壊|こわ}れても', 'yogorete mo kowarete mo', 'Even if I\'m dirty, even if I\'m broken', 'Пусть грязная, пусть сломанная'),
      L('Bridge', 'これが {私|わたし}だから', 'kore ga watashi da kara', 'This is who I am', 'Это я'),
      L('Final Chorus', '{燃|も}やして {燃|も}やして この{胸|むね}を', 'moyashite moyashite kono mune wo', 'Burn it, burn it, this heart of mine', 'Сожги, сожги это сердце'),
      L('Final Chorus', '{灰|はい}になるまで {愛|あい}してよ', 'hai ni naru made aishite yo', 'Love me until I turn to ash', 'Люби меня, пока я не стану пеплом'),
      L('Final Chorus', '{明日|あした}が{来|こ}なくても {構|かま}わない', 'ashita ga konakute mo kamawanai', 'I don\'t care if tomorrow never comes', 'Пусть завтра не наступит - всё равно'),
      L('Final Chorus', '{今|いま}ここで {生|い}きていると {叫|さけ}ぶから', 'ima koko de ikite iru to sakebu kara', 'Because right here, right now, I\'ll scream that I\'m alive', 'Ведь здесь и сейчас я кричу, что жива'),
      L('Final Chorus', '{泣|な}いても {泣|な}いても {消|き}えない', 'naite mo naite mo kienai', 'No matter how much I cry, it won\'t go out', 'Сколько ни плачь - не погаснет'),
      L('Final Chorus', 'この{炎|ほのお}こそ {私|わたし}のもの', 'kono honoo koso watashi no mono', 'This flame, more than anything, is mine', 'Именно это пламя - моё'),
      L('Outro', '{燃|も}えろ {燃|も}えろ {灰|はい}になるまで', 'moero moero hai ni naru made', 'Burn, burn, until I turn to ash', 'Гори, гори, пока не стану пеплом'),
    ],
  },
  {
    id: 'unmei-wo-tatakiokose',
    title: { jp: '運命を叩き起こせ', reading: 'うんめいをたたきおこせ', romaji: 'Unmei wo Tatakiokose', en: 'Break the Fate', ru: 'Разбуди судьбу' },
    difficulty: 4, level: 'N3-N2', bpm: 176, length: 89.2,
    about: {
      en: 'A full-speed anime-opening rock anthem: doubt, then defiance, then flight. 176 BPM - the words come fast.',
      ru: 'Рок-гимн в духе аниме-опенинга на полной скорости: сомнение, потом вызов, потом полёт. 176 ударов в минуту - слова летят быстро.',
    },
    words: [
      { w: '運命', r: 'うんめい', en: 'fate', ru: 'судьба', level: 'N3' },
      { w: '叩き起こす', r: 'たたきおこす', en: 'to jolt awake', ru: 'растолкать, разбудить', level: 'N2' },
      { w: '震える', r: 'ふるえる', en: 'to tremble', ru: 'дрожать', level: 'N3' },
      { w: '握りしめる', r: 'にぎりしめる', en: 'to grip tightly', ru: 'крепко сжимать', level: 'N2' },
      { w: '迷い', r: 'まよい', en: 'doubt, hesitation', ru: 'сомнение', level: 'N3' },
      { w: '燃え上がる', r: 'もえあがる', en: 'to blaze up', ru: 'вспыхнуть', level: 'N2' },
      { w: '限界', r: 'げんかい', en: 'limit', ru: 'предел', level: 'N2' },
      { w: '掴む', r: 'つかむ', en: 'to grab', ru: 'схватить', level: 'N3' },
      { w: '魂', r: 'たましい', en: 'soul', ru: 'душа', level: 'N2' },
    ],
    grammar: [],
    // (the owner's lyrics for this one are still to come — the guide that came with it has only a few of its lines)
    lines: [],
  },
  {
    id: 'aragae',
    title: { jp: '抗え、宿命なんて', reading: 'あらがえ、しゅくめいなんて', romaji: 'Aragae, Shukumei Nante', en: 'Resist, Never Mind Fate', ru: 'Сопротивляйся, к чёрту судьбу' },
    difficulty: 5, level: 'N2-N1', bpm: 175, length: 86.6,
    about: {
      en: 'The hardest: dark, cool rock at 175 BPM with literary N2+ words (抗う, 刹那, 宿命) and grammar like ざるを得ない. Study the list first.',
      ru: 'Самая сложная: мрачный рок в 175 ударов в минуту с книжной лексикой N2+ (抗う, 刹那, 宿命) и грамматикой вроде ざるを得ない. Сначала выучите список.',
    },
    words: [
      { w: '抗う', r: 'あらがう', en: 'to resist', ru: 'сопротивляться', level: 'N1' },
      { w: '宿命', r: 'しゅくめい', en: 'fate, destiny', ru: 'судьба, рок', level: 'N1' },
      { w: '滲む', r: 'にじむ', en: 'to blur, bleed (light)', ru: 'расплываться', level: 'N1' },
      { w: '虚ろ', r: 'うつろ', en: 'hollow', ru: 'пустой', level: 'N1' },
      { w: '嘲笑う', r: 'あざわらう', en: 'to sneer', ru: 'насмехаться', level: 'N1' },
      { w: '刹那', r: 'せつな', en: 'an instant', ru: 'миг', level: 'N1' },
      { w: '蝕む', r: 'むしばむ', en: 'to eat away at', ru: 'разъедать', level: 'N1' },
      { w: '焦燥', r: 'しょうそう', en: 'restless dread', ru: 'тревожное нетерпение', level: 'N1' },
      { w: '足掻く', r: 'あがく', en: 'to struggle', ru: 'барахтаться, биться', level: 'N1' },
      { w: '業', r: 'ごう', en: 'karma, sin', ru: 'карма, грех', level: 'N1' },
      { w: '儚い', r: 'はかない', en: 'fleeting', ru: 'мимолётный', level: 'N2' },
      { w: '断ち切る', r: 'たちきる', en: 'to cut off', ru: 'перерубить', level: 'N2' },
    ],
    grammar: [
      { pattern: '〜だらけ', example: '{綻|ほころ}びだらけ', en: 'full of ~ (bad)', ru: 'сплошь ~', lesson: 'n1-mamire' },
      { pattern: '〜ままではいられない', example: '{曖昧|あいまい}なままじゃいられない', en: 'can\'t stay ~', ru: 'нельзя оставаться ~', lesson: 'n3-mama' },
      { pattern: '〜ざるを得ない', example: '{選|えら}ばざるを{得|え}ない', en: 'have no choice but to ~', ru: 'приходится ~', lesson: 'n2-zaru-o-enai' },
      { pattern: '〜なんて', example: '{宿命|しゅくめい}なんて', en: 'something like ~ (dismissive)', ru: 'какой-то там ~' },
      { pattern: '〜に過ぎない', example: '{戯言|ざれごと}に{過|す}ぎない', en: 'nothing more than ~', ru: 'не более чем ~' },
      { pattern: '〜たまま', example: '{背負|せお}ったまま', en: 'while still ~', ru: 'всё ещё ~', lesson: 'n3-mama' },
      { pattern: '〜くらいなら', example: '{立|た}ち{止|ど}まるくらいなら', en: 'rather than ~', ru: 'чем ~, лучше' },
      { pattern: '〜ようが', example: '{朽|く}ち{果|は}てようが', en: 'no matter if ~', ru: 'даже если ~' },
      { pattern: '〜てやる', example: '{生|い}きてやる', en: 'I\'ll ~, just watch (defiant)', ru: 'вот увидишь, я ~' },
    ],
    lines: [
      L('Intro', '{誰|た}そ{彼|かれ}の {街|まち}に {鐘|かね}が{鳴|な}る', 'tasogare no machi ni kane ga naru', 'In the twilight city, a bell is ringing', 'В сумеречном городе звонит колокол'),
      L('Verse 1', 'ネオンに{滲|にじ}んだ {虚|うつ}ろな{影|かげ}が', 'neon ni nijinda utsuro na kage ga', 'A hollow shadow, bleeding into the neon', 'Пустая тень, расплывшаяся в неоне'),
      L('Verse 1', '{嘲笑|あざわら}うように {足元|あしもと}を{這|は}う', 'azawarau you ni ashimoto wo hau', 'Crawls at my feet as if it\'s mocking me', 'Ползёт у ног, словно насмехаясь'),
      L('Verse 1', '{綻|ほころ}びだらけの {正義|せいぎ}を{掲|かか}げて', 'hokorobi darake no seigi wo kakagete', 'Holding up a justice that\'s coming apart at the seams', 'Поднимая справедливость, что трещит по швам'),
      L('Verse 1', '{何|なに}を{守|まも}れると {言|い}うのだろうか', 'nani wo mamoreru to iu no darou ka', 'What exactly do I think I can protect?', 'Что же я, по-твоему, могу защитить?'),
      L('Verse 1', '{曖昧|あいまい}なままじゃ いられない', 'aimai na mama ja irarenai', 'I can\'t stay undecided forever', 'Нельзя вечно оставаться в нерешительности'),
      L('Verse 1', '{選|えら}ばざるを{得|え}ない {刹那|せつな}の{狭間|はざま}で', 'erabazaru wo enai setsuna no hazama de', 'Caught in a split second where I have no choice but to choose', 'В миг, когда не выбрать нельзя'),
      L('Pre-Chorus', '{蝕|むしば}むような {焦燥|しょうそう}が', 'mushibamu you na shousou ga', 'A restless dread that eats away at me', 'Разъедающая тревога'),
      L('Pre-Chorus', '{心臓|しんぞう}の{奥|おく}で {囁|ささや}いた', 'shinzou no oku de sasayaita', 'Whispered from deep inside my heart', 'Прошептала из глубины сердца'),
      L('Pre-Chorus', '「お{前|まえ}は {何者|なにもの}だ」と', 'omae wa nanimono da to', '"Just who are you?"', '«Кто ты такой?»'),
      L('Chorus', '{抗|あらが}え {抗|あらが}え {宿命|しゅくめい}なんて', 'aragae aragae shukumei nante', 'Resist, resist, this thing called fate', 'Сопротивляйся, сопротивляйся - какая-то там судьба'),
      L('Chorus', '{紛|まが}い{物|もの}の {戯言|ざれごと}に{過|す}ぎない', 'magaimono no zaregoto ni suginai', 'Is nothing more than a fake\'s empty nonsense', 'Всего лишь вздор подделки'),
      L('Chorus', '{歪|ゆが}んだ{世界|せかい}の {真|ま}ん{中|なか}で', 'yuganda sekai no mannaka de', 'In the middle of this twisted world', 'Посреди искажённого мира'),
      L('Chorus', '{足掻|あが}いて {足掻|あが}いて {叫|さけ}んでいる', 'agaite agaite sakende iru', 'I struggle, I struggle, and I scream', 'Я бьюсь, бьюсь и кричу'),
      L('Chorus', '{拭|ぬぐ}えない {業|ごう}を{背負|せお}ったまま', 'nuguenai gou wo seotta mama', 'Still carrying the sins I can never wipe away', 'Неся грехи, которых не смыть'),
      L('Chorus', 'この{手|て}で {闇|やみ}を{断|た}ち{切|き}るまで', 'kono te de yami wo tachikiru made', 'Until I cut through the darkness with these hands', 'Пока этими руками не рассеку тьму'),
      L('Verse 2', '{誰|だれ}かの{痛|いた}みに {慣|な}れてしまえば', 'dareka no itami ni narete shimaeba', 'If I let myself get used to other people\'s pain', 'Если привыкну к чужой боли'),
      L('Verse 2', '{人|ひと}であることさえ {忘|わす}れるだろう', 'hito de aru koto sae wasureru darou', 'I\'ll probably forget that I\'m even human', 'То, наверное, забуду, что я человек'),
      L('Verse 2', '{失|うしな}うことを {恐|おそ}れて', 'ushinau koto wo osorete', 'Afraid of losing everything', 'Боясь потерять'),
      L('Verse 2', '{立|た}ち{止|ど}まるくらいなら {前|まえ}へ', 'tachidomaru kurai nara mae e', 'Rather than freezing in place, I\'ll go forward', 'Чем застыть на месте - лучше вперёд'),
      L('Verse 2', '{笑|わら}っていろよ {最後|さいご}まで', 'waratte iro yo saigo made', 'Keep smiling until the very end', 'Улыбайся до самого конца'),
      L('Verse 2', '{泣|な}いている{暇|ひま}など ありはしない', 'naite iru hima nado ari wa shinai', 'There\'s no time to stand around crying', 'Нет времени плакать'),
      L('Pre-Chorus 2', '{瞬|まばた}く{間|ま}に {過|す}ぎてゆく', 'matataku ma ni sugite yuku', 'That slip past in the blink of an eye', 'Что проходят в мгновение ока'),
      L('Pre-Chorus 2', '{儚|はかな}い{日々|ひび}を {掴|つか}むように', 'hakanai hibi wo tsukamu you ni', 'As if to catch hold of these fragile days', 'Словно ловя хрупкие дни'),
      L('Pre-Chorus 2', 'もう {迷|まよ}わないと {誓|ちか}った', 'mou mayowanai to chikatta', 'I swore I wouldn\'t hesitate again', 'Я поклялся больше не колебаться'),
      L('Chorus', '{抗|あらが}え {抗|あらが}え {宿命|しゅくめい}なんて', 'aragae aragae shukumei nante', 'Resist, resist, this thing called fate', 'Сопротивляйся, сопротивляйся - какая-то там судьба'),
      L('Chorus', '{紛|まが}い{物|もの}の {戯言|ざれごと}に{過|す}ぎない', 'magaimono no zaregoto ni suginai', 'Is nothing more than a fake\'s empty nonsense', 'Всего лишь вздор подделки'),
      L('Chorus', '{歪|ゆが}んだ{世界|せかい}の {真|ま}ん{中|なか}で', 'yuganda sekai no mannaka de', 'In the middle of this twisted world', 'Посреди искажённого мира'),
      L('Chorus', '{足掻|あが}いて {足掻|あが}いて {叫|さけ}んでいる', 'agaite agaite sakende iru', 'I struggle, I struggle, and I scream', 'Я бьюсь, бьюсь и кричу'),
      L('Chorus', '{拭|ぬぐ}えない {業|ごう}を{背負|せお}ったまま', 'nuguenai gou wo seotta mama', 'Still carrying the sins I can never wipe away', 'Неся грехи, которых не смыть'),
      L('Chorus', 'この{手|て}で {闇|やみ}を{断|た}ち{切|き}るまで', 'kono te de yami wo tachikiru made', 'Until I cut through the darkness with these hands', 'Пока этими руками не рассеку тьму'),
      L('Bridge', 'たとえ この{身|み}が {朽|く}ち{果|は}てようが', 'tatoe kono mi ga kuchihateyou ga', 'Even if this body rots away to nothing', 'Даже если это тело истлеет'),
      L('Bridge', '{君|きみ}の{明日|あした}が {続|つづ}くのなら', 'kimi no ashita ga tsuzuku no nara', 'As long as your tomorrow goes on', 'Лишь бы твоё завтра продолжалось'),
      L('Bridge', 'それだけで {構|かま}わないさ', 'sore dake de kamawanai sa', 'That alone is enough for me', 'Мне этого достаточно'),
      L('Final Chorus', '{抗|あらが}え {抗|あらが}え {宿命|しゅくめい}なんて', 'aragae aragae shukumei nante', 'Resist, resist, this thing called fate', 'Сопротивляйся, сопротивляйся - какая-то там судьба'),
      L('Final Chorus', '{紛|まが}い{物|もの}の {戯言|ざれごと}に{過|す}ぎない', 'magaimono no zaregoto ni suginai', 'Is nothing more than a fake\'s empty nonsense', 'Всего лишь вздор подделки'),
      L('Final Chorus', '{歪|ゆが}んだ{世界|せかい}の {真|ま}ん{中|なか}で', 'yuganda sekai no mannaka de', 'In the middle of this twisted world', 'Посреди искажённого мира'),
      L('Final Chorus', '{足掻|あが}いて {足掻|あが}いて {生|い}きてやる', 'agaite agaite ikite yaru', 'I\'ll struggle, I\'ll struggle, and I\'ll live, just watch me', 'Буду биться, биться и жить - вот увидишь'),
      L('Final Chorus', '{拭|ぬぐ}えない {業|ごう}を{背負|せお}ったまま', 'nuguenai gou wo seotta mama', 'Still carrying the sins I can never wipe away', 'Неся грехи, которых не смыть'),
      L('Final Chorus', '{夜明|よあ}けの {向|む}こうへ {行|い}くまで', 'yoake no mukou e iku made', 'Until I make it past the dawn', 'Пока не уйду за рассвет'),
      L('Outro', '{誰|た}そ{彼|かれ}の {街|まち}に {鐘|かね}が{鳴|な}る', 'tasogare no machi ni kane ga naru', 'In the twilight city, a bell is ringing', 'В сумеречном городе звонит колокол'),
      L('Outro', 'もう {振|ふ}り{返|かえ}らない', 'mou furikaeranai', 'I won\'t look back anymore', 'Я больше не оглянусь'),
    ],
  },
];

export interface TimedLine extends SongLine { /** its place in `lines` */ i: number; start: number; end: number }
/** a song can be played once its lines are timed (and it has lyrics) */
export const playable = (s: Song) => s.lines.length > 0 && !!s.times && s.times.length === s.lines.length && s.times.some((t) => t !== null);
/** the lines the recording sings, in order, each until the next one starts (the last until the end) */
export function songTimeline(song: Song): TimedLine[] {
  if (!playable(song)) return [];
  const sung = song.lines.map((l, i) => ({ ...l, i, start: song.times![i] })).filter((l): l is SongLine & { i: number; start: number } => l.start !== null);
  return sung.map((l, k) => ({ ...l, end: Math.min(song.length, sung[k + 1]?.start ?? song.length) }));
}

export const lineWords = (l: SongLine) => l.romaji.split(/\s+/).filter(Boolean);
export const songById = (id: string) => SONGS.find((s) => s.id === id) ?? null;

/**
 * romaji typed in any common way counts: shi / si, tsu / tu, chi / ti, fu / hu, ji / zi, long vowels written or not
 * (yuuyake / yuyake, booshi / boushi, ō), the particle は as wa or ha and を as wo or o
 */
export function canon(s: string): string {
  return s.toLowerCase().replace(/[āâ]/g, 'aa').replace(/[īî]/g, 'ii').replace(/[ūû]/g, 'uu').replace(/[ēê]/g, 'ee').replace(/[ōô]/g, 'ou')
    .replace(/[^a-z]/g, '')
    .replace(/sh/g, 'sy').replace(/ch/g, 'ty').replace(/ts/g, 't').replace(/j/g, 'zy').replace(/f/g, 'h')
    .replace(/si/g, 'syi').replace(/ti/g, 'tyi').replace(/zi/g, 'zyi').replace(/yy/g, 'y')
    .replace(/ou/g, 'oo').replace(/ei/g, 'ee').replace(/([aiueo])\1/g, '$1');
}
const PARTICLE: Record<string, string> = { wa: 'ha', wo: 'o', e: 'he' };
export const sameWord = (typed: string, word: string) => canon(typed) === canon(word) || (word in PARTICLE && canon(typed) === canon(PARTICLE[word]));
/** is what's typed so far the start of the word (any spelling)? */
export const startsWord = (typed: string, word: string) => canon(word).startsWith(canon(typed)) || (word in PARTICLE && canon(PARTICLE[word]).startsWith(canon(typed)));
