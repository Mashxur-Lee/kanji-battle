// 0.9.9.9.9.6 (round 5): JLPT N1 grammar — the lessons (see grammar.ts). Furigana: {漢字|かな}. A question's first
// choice is the right one.
import type { GrammarPoint, GrammarQuestion } from './grammar';

type R = [string, string];
type E = [string, string, string];
type Q = [string, [string, string, string, string], string, string];
const p = (id: string, pattern: string, meaning: R, rules: R[], examples: E[], questions: Q[]): GrammarPoint => ({
  id: `n1-${id}`, level: 'N1', pattern, meaning: { en: meaning[0], ru: meaning[1] },
  rules: rules.map(([en, ru]) => ({ en, ru })),
  examples: examples.map(([jp, en, ru]) => ({ jp, en, ru })),
  questions: questions.map(([jp, options, en, ru]): GrammarQuestion => ({ jp, options, en, ru })),
});

export const N1: GrammarPoint[] = [
  p('ya-ina-ya', '〜や否や', ['as soon as, the moment', 'едва, как только'], [
    ['Dictionary form + や否や (or や): the second thing happens the instant the first does. Written style.', 'Словарная форма + や否や (или や) — второе происходит в тот же миг. Книжный стиль.'],
  ], [
    ['{彼|かれ}は{家|いえ}に{着|つ}くや{否|いな}や、{寝|ね}てしまった。', 'The moment he got home, he fell asleep.', 'Едва придя домой, он уснул.'],
  ], [
    ['ベルが{鳴|な}る＿＿、{生徒|せいと}たちは{教室|きょうしつ}を{飛|と}び{出|だ}した。', ['や否や', 'ものの', 'ところを', 'とあって'], 'The moment the bell rang, the pupils rushed out of the classroom.', 'Едва прозвенел звонок, ученики выбежали из класса.'],
    ['{発売|はつばい}される＿＿{否|いな}や、{売|う}り{切|き}れた。', ['や', 'と', 'か', 'が'], 'It sold out the moment it went on sale.', 'Едва поступив в продажу, всё было распродано.'],
    ['{顔|かお}を{見|み}る＿＿、{彼女|かのじょ}は{泣|な}き{出|だ}した。', ['や否や', 'からして', 'ともなく', 'までもなく'], 'The moment she saw his face, she burst into tears.', 'Едва увидев его лицо, она расплакалась.'],
  ]),
  p('nari', '〜なり', ['as soon as (then something unexpected)', 'едва (и тут же — неожиданно)'], [
    ['Dictionary form + なり: right after one act, the same person does something surprising.', 'Словарная форма + なり — сразу после действия тот же человек делает нечто неожиданное.'],
  ], [
    ['{彼|かれ}は{部屋|へや}に{入|はい}るなり、{窓|まど}を{開|あ}けた。', 'As soon as he entered the room, he opened the window.', 'Едва войдя в комнату, он открыл окно.'],
  ], [
    ['{父|ちち}は{帰|かえ}ってくる＿＿、{怒|おこ}り{出|だ}した。', ['なり', 'ものの', 'とはいえ', 'ならでは'], 'The moment my father came home, he started shouting.', 'Отец, едва вернувшись, начал ругаться.'],
    ['{手紙|てがみ}を{読|よ}む＿＿、{彼女|かのじょ}は{笑|わら}い{出|だ}した。', ['なり', 'ずくめ', 'まみれ', 'ごとき'], 'As soon as she read the letter, she burst out laughing.', 'Едва прочитав письмо, она рассмеялась.'],
    ['{席|せき}に{着|つ}く＿＿{寝|ね}てしまった。', ['なり', 'ならば', 'なりに', 'なりとも'], 'He fell asleep the moment he sat down.', 'Едва сев, он заснул.'],
  ]),
  p('nagara-mo', '〜ながらも', ['although, while (it is so)', 'хотя, несмотря на'], [
    ['ます-stem / adjective / noun + ながらも: although A, B (an unexpected contrast). Written style.', 'Основа на ます / прил. / сущ. + ながらも — хотя A, всё же B. Книжный стиль.'],
  ], [
    ['{狭|せま}いながらも、{楽|たの}しい{我|わ}が{家|や}。', 'Small as it is, our home is a happy one.', 'Хоть и тесный, но уютный наш дом.'],
    ['{彼|かれ}は{知|し}っていながらも、{何|なに}も{言|い}わなかった。', 'Although he knew, he said nothing.', 'Хотя он знал, ничего не сказал.'],
  ], [
    ['{悪|わる}いと{知|し}り＿＿、やめられない。', ['ながらも', 'ながらに', 'つつある', 'ずにいる'], 'Although I know it is bad, I can\'t stop.', 'Хоть и знаю, что плохо, бросить не могу.'],
    ['{少|すこ}しずつ＿＿、{上達|じょうたつ}している。', ['ながらも', 'ながらに', 'ことなく', 'までに'], 'Slowly but surely, I am improving.', 'Пусть понемногу, но я прогрессирую.'],
    ['{子|こ}ども＿＿、よく{頑張|がんば}った。', ['ながらも', 'ながらく', 'なりとも', 'ならでは'], 'Though only a child, he did very well.', 'Хоть и ребёнок, а молодец.'],
  ]),
  p('to-wa-ie', '〜とはいえ', ['even so, although (it is true that)', 'хотя и; пусть даже'], [
    ['Plain form / noun + とはいえ: granting the first point, the second still holds.', 'Простая форма / сущ. + とはいえ — признавая первое, второе всё равно верно.'],
  ], [
    ['{春|はる}とはいえ、まだ{寒|さむ}い。', 'Spring it may be, but it is still cold.', 'Хоть и весна, ещё холодно.'],
  ], [
    ['{休|やす}み＿＿、{家|いえ}で{仕事|しごと}をしなければならない。', ['とはいえ', 'とあって', 'ともなると', 'ときたら'], 'Even though it is a holiday, I have to work at home.', 'Хоть и выходной, приходится работать дома.'],
    ['{謝|あやま}った＿＿、{許|ゆる}されることではない。', ['とはいえ', 'からには', 'ばかりに', 'あまり'], 'He apologised, but that does not make it forgivable.', 'Пусть он и извинился, такое не прощают.'],
    ['{簡単|かんたん}だ＿＿、{油断|ゆだん}はできない。', ['とはいえ', 'だけあって', 'ものなら', 'ことだし'], 'It is easy, but you still can\'t let your guard down.', 'Хоть и легко, расслабляться нельзя.'],
  ]),
  p('o-megutte', '〜をめぐって', ['over, concerning (a dispute)', 'вокруг, по поводу (спора)'], [
    ['Noun + をめぐって: the issue that people argue, compete or discuss around.', 'Сущ. + をめぐって — предмет спора, борьбы или обсуждения.'],
  ], [
    ['{遺産|いさん}をめぐって{兄弟|きょうだい}が{争|あらそ}っている。', 'The brothers are fighting over the inheritance.', 'Братья спорят из-за наследства.'],
  ], [
    ['{新|あたら}しい{空港|くうこう}の{建設|けんせつ}＿＿、{議論|ぎろん}が{続|つづ}いている。', ['をめぐって', 'をもって', 'をよそに', 'をこめて'], 'The debate over building the new airport continues.', 'Споры вокруг строительства нового аэропорта продолжаются.'],
    ['{優勝|ゆうしょう}を＿＿、二つのチームが{戦|たたか}う。', ['めぐって', 'もって', 'とわず', 'かわきりに'], 'Two teams fight for the championship.', 'Две команды борются за победу.'],
    ['その{問題|もんだい}＿＿{意見|いけん}が{分|わ}かれた。', ['をめぐって', 'をよそに', 'をものともせず', 'をおいて'], 'Opinions were divided over that issue.', 'Мнения по этому вопросу разделились.'],
  ]),
  p('o-yoso-ni', '〜をよそに', ['without caring about, ignoring', 'не обращая внимания на'], [
    ['Noun + をよそに: someone goes ahead, ignoring others\' worries, warnings or the situation.', 'Сущ. + をよそに — кто-то действует, не считаясь с тревогами, предупреждениями, обстоятельствами.'],
  ], [
    ['{親|おや}の{心配|しんぱい}をよそに、{彼|かれ}は{一人|ひとり}で{旅|たび}に{出|で}た。', 'Ignoring his parents\' worries, he set off on a trip alone.', 'Не обращая внимания на тревоги родителей, он отправился в путь один.'],
  ], [
    ['{周囲|しゅうい}の{反対|はんたい}＿＿、{計画|けいかく}は{進|すす}められた。', ['をよそに', 'をめぐって', 'を問わず', 'をこめて'], 'Despite the opposition around them, the plan went ahead.', 'Несмотря на протесты окружающих, план осуществили.'],
    ['{試験|しけん}を＿＿、{彼|かれ}は{毎日|まいにち}{遊|あそ}んでいる。', ['よそに', 'もとに', 'めぐって', 'ぬきに'], 'Paying no attention to the exam, he plays every day.', 'Не думая об экзамене, он каждый день развлекается.'],
    ['{医者|いしゃ}の{忠告|ちゅうこく}＿＿、{酒|さけ}を{飲|の}み{続|つづ}けた。', ['をよそに', 'をもって', 'を皮切りに', 'をはじめ'], 'Ignoring the doctor\'s advice, he kept drinking.', 'Не слушая совета врача, он продолжал пить.'],
  ]),
  p('ni-hoka-naranai', '〜にほかならない', ['nothing other than, none other than', 'не что иное, как'], [
    ['Noun / plain form + にほかならない: it is exactly this and nothing else (strong assertion).', 'Сущ. / простая форма + にほかならない — это именно так, и ничто иное (сильное утверждение).'],
  ], [
    ['{成功|せいこう}したのは、{努力|どりょく}の{結果|けっか}にほかならない。', 'The success is nothing other than the result of hard work.', 'Успех — не что иное, как результат усилий.'],
  ], [
    ['{彼|かれ}が{怒|おこ}るのは、あなたを{心配|しんぱい}しているから＿＿。', ['にほかならない', 'にすぎない', 'までもない', 'にかたくない'], 'He gets angry for no other reason than that he worries about you.', 'Он сердится лишь потому, что переживает за тебя.'],
    ['これは{偶然|ぐうぜん}ではなく、{必然|ひつぜん}に＿＿。', ['ほかならない', 'すぎない', 'たえない', 'いたらない'], 'This is no coincidence - it was inevitable.', 'Это не случайность, а закономерность.'],
    ['{教育|きょういく}とは、{未来|みらい}への{投資|とうし}＿＿。', ['にほかならない', 'に限らない', 'にあたらない', 'にとどまらない'], 'Education is nothing other than an investment in the future.', 'Образование — не что иное, как вклад в будущее.'],
  ]),
  p('ni-suginai', '〜にすぎない', ['merely, nothing more than', 'всего лишь, не более чем'], [
    ['Noun / plain form + にすぎない: it is only that, not more (playing it down).', 'Сущ. / простая форма + にすぎない — лишь это, не больше (преуменьшение).'],
  ], [
    ['それは{噂|うわさ}にすぎない。', 'That is nothing more than a rumour.', 'Это всего лишь слухи.'],
  ], [
    ['{私|わたし}は{言|い}われたことをした＿＿。', ['にすぎない', 'にほかならない', 'に違いない', 'にかぎる'], 'I merely did what I was told.', 'Я лишь сделал то, что мне сказали.'],
    ['{合格者|ごうかくしゃ}は{全体|ぜんたい}の{一割|いちわり}＿＿。', ['にすぎない', 'にたえない', 'にあたらない', 'にこたえない'], 'Those who passed are a mere tenth of the total.', 'Сдавших — всего десятая часть.'],
    ['これは{始|はじ}まりに＿＿。', ['すぎない', 'ほかならない', 'いたらない', 'かたくない'], 'This is merely the beginning.', 'Это лишь начало.'],
  ]),
  p('made-mo-nai', '〜までもない', ['there is no need to', 'нет нужды, незачем'], [
    ['Dictionary form + までもない: so obvious or easy that doing it is unnecessary. 言うまでもない: it goes without saying.', 'Словарная форма + までもない — настолько очевидно, что не нужно. 言うまでもない — само собой разумеется.'],
  ], [
    ['{言|い}うまでもなく、{健康|けんこう}が{一番|いちばん}{大切|たいせつ}だ。', 'Needless to say, health is the most important thing.', 'Само собой, здоровье важнее всего.'],
  ], [
    ['こんな{簡単|かんたん}なことは、{調|しら}べる＿＿。', ['までもない', 'ほかならない', 'にすぎない', 'わけがない'], 'Something this simple doesn\'t even need looking up.', 'Такую простую вещь и проверять незачем.'],
    ['{医者|いしゃ}に{行|い}く＿＿もない、{軽|かる}い{風邪|かぜ}だ。', ['まで', 'こと', 'もの', 'わけ'], 'It is only a light cold - no need to see a doctor.', 'Лёгкая простуда — к врачу идти незачем.'],
    ['{彼|かれ}が{優秀|ゆうしゅう}なのは{言|い}う＿＿。', ['までもない', 'しかない', 'にすぎない', 'わけにはいかない'], 'It goes without saying that he is excellent.', 'Само собой, он отличный специалист.'],
  ]),
  p('zu-ni-wa-irarenai', '〜ずにはいられない', ['cannot help doing', 'не могу не'], [
    ['ない-stem + ずにはいられない (する → せずにはいられない): a feeling too strong to hold back.', 'Основа ない + ずにはいられない (する → せずにはいられない) — чувство, которое не сдержать.'],
  ], [
    ['その{映画|えいが}を{見|み}て、{泣|な}かずにはいられなかった。', 'Watching that film, I couldn\'t help crying.', 'Смотря этот фильм, я не мог не плакать.'],
  ], [
    ['あまりにおかしくて、{笑|わら}わ＿＿いられなかった。', ['ずには', 'ないで', 'なくても', 'ずとも'], 'It was so funny I couldn\'t help laughing.', 'Было так смешно, что я не мог не рассмеяться.'],
    ['{彼|かれ}の{話|はなし}を{聞|き}くと、{同情|どうじょう}せ＿＿いられない。', ['ずには', 'ないと', 'ずとも', 'ねば'], 'Hearing his story, I can\'t help feeling sorry for him.', 'Слушая его историю, нельзя не сочувствовать.'],
    ['{心配|しんぱい}で、{電話|でんわ}せずには＿＿。', ['いられない', 'おかない', 'すまない', 'ならない'], 'I am so worried I can\'t help phoning.', 'Так волнуюсь, что не могу не позвонить.'],
  ]),
  p('o-motte', '〜をもって', ['with, by means of; as of (formal)', 'посредством; с (такого-то момента)'], [
    ['Noun + をもって: the means (formal), or the moment something ends or starts: 本日をもって.', 'Сущ. + をもって — средство (офиц.) или момент окончания / начала: 本日をもって.'],
  ], [
    ['{本日|ほんじつ}をもって{閉店|へいてん}いたします。', 'As of today, we are closing.', 'С сегодняшнего дня мы закрываемся.'],
    ['{書面|しょめん}をもってお{知|し}らせします。', 'We will inform you in writing.', 'Мы сообщим письменно.'],
  ], [
    ['{以上|いじょう}＿＿、{説明|せつめい}を{終|お}わります。', ['をもって', 'をよそに', 'をめぐって', 'を問わず'], 'With that, I conclude my explanation.', 'На этом я заканчиваю объяснение.'],
    ['{三月|さんがつ}{末|まつ}を＿＿{退職|たいしょく}します。', ['もって', 'よそに', 'めぐって', 'もとに'], 'I will retire as of the end of March.', 'Я ухожу на пенсию с конца марта.'],
    ['{実力|じつりょく}＿＿{勝負|しょうぶ}する。', ['をもって', 'をよそに', 'をおいて', 'をかわきりに'], 'Compete by means of real ability.', 'Сразиться за счёт подлинного мастерства.'],
  ]),
  p('kagiri-da', '〜限りだ', ['extremely, so (a feeling)', 'крайне, очень (о чувстве)'], [
    ['Feeling adjective + 限りだ: the speaker\'s strong feeling — 嬉しい限りだ, 寂しい限りだ.', 'Прил. чувства + 限りだ — сильное чувство говорящего: 嬉しい限りだ, 寂しい限りだ.'],
  ], [
    ['{皆|みな}さんに{会|あ}えて、{嬉|うれ}しい{限|かぎ}りです。', 'I am so very happy to meet you all.', 'Безмерно рад встрече со всеми вами.'],
  ], [
    ['{友|とも}だちが{皆|みな}{国|くに}に{帰|かえ}ってしまい、{寂|さび}しい＿＿。', ['限りだ', 'までだ', 'ことだ', 'わけだ'], 'All my friends have gone home, and I am so lonely.', 'Все друзья уехали домой — так одиноко.'],
    ['こんな{失敗|しっぱい}をするとは、{恥|は}ずかしい＿＿です。', ['限り', 'まで', 'もの', 'ほど'], 'I am deeply ashamed to have made such a mistake.', 'Так стыдно за такую ошибку.'],
    ['{皆|みな}が{応援|おうえん}してくれて、{心強|こころづよ}い＿＿だ。', ['限り', 'こと', 'はず', 'まま'], 'Everyone\'s support makes me feel so encouraged.', 'Поддержка всех так ободряет.'],
  ]),
  p('nara-dewa', '〜ならでは', ['only (possible) for, unique to', 'присущий только, характерный для'], [
    ['Noun + ならではの / ならでは: something only this person, place or thing can offer.', 'Сущ. + ならではの — то, что может предложить только этот человек, место или вещь.'],
  ], [
    ['これは{京都|きょうと}ならではの{景色|けしき}だ。', 'This is scenery you can only see in Kyoto.', 'Такой пейзаж можно увидеть только в Киото.'],
  ], [
    ['{子|こ}ども＿＿の{自由|じゆう}な{発想|はっそう}だ。', ['ならでは', 'ながらも', 'なりとも', 'なくして'], 'It is the free thinking only a child has.', 'Это свободная фантазия, присущая только детям.'],
    ['この{味|あじ}は{手作|てづく}り＿＿だ。', ['ならでは', 'ながら', 'ばかり', 'ずくめ'], 'This taste is unique to home-made food.', 'Такой вкус бывает только у домашнего.'],
    ['{専門家|せんもんか}＿＿の{意見|いけん}', ['ならでは', 'までも', 'すら', 'とて'], 'an opinion only an expert could give', 'мнение, на которое способен лишь специалист'],
  ]),
  p('ni-katakunai', '〜に難くない', ['it is not hard to (imagine)', 'нетрудно (представить)'], [
    ['Noun / dictionary form + に難くない: easy to imagine, guess or understand. Written style (想像に難くない).', 'Сущ. / словарная форма + に難くない — нетрудно представить, догадаться, понять. Книжный стиль.'],
  ], [
    ['{彼|かれ}の{苦労|くろう}は{想像|そうぞう}に{難|かた}くない。', 'It is not hard to imagine his hardships.', 'Нетрудно представить, через что он прошёл.'],
  ], [
    ['{親|おや}の{悲|かな}しみは{察|さっ}する＿＿。', ['に難くない', 'に足りない', 'に堪えない', 'に及ばない'], 'It is not hard to sense the parents\' grief.', 'Горе родителей легко понять.'],
    ['{彼女|かのじょ}が{驚|おどろ}いたことは{想像|そうぞう}に＿＿。', ['難くない', 'すぎない', 'ほかならない', 'いたらない'], 'It is easy to imagine she was surprised.', 'Нетрудно представить её удивление.'],
    ['その{理由|りゆう}は{理解|りかい}＿＿。', ['に難くない', 'にあたらない', 'にこしたことはない', 'にかぎる'], 'The reason is not hard to understand.', 'Причину понять несложно.'],
  ]),
  p('kara-suru-to', '〜からすると・〜からして', ['judging from; to begin with', 'судя по; уже хотя бы'], [
    ['Noun + からすると / からすれば: judging by that. Noun + からして: starting with even that (it is already …).', 'Сущ. + からすると / からすれば — судя по. Сущ. + からして — уже хотя бы (одно это …).'],
  ], [
    ['{話|はな}し{方|かた}からすると、{関西|かんさい}の{人|ひと}だろう。', 'Judging from the way he speaks, he must be from Kansai.', 'Судя по говору, он из Кансая.'],
    ['この{店|みせ}は{店員|てんいん}の{態度|たいど}からして{悪|わる}い。', 'This shop is bad - starting with the staff\'s attitude.', 'В этом магазине плохо всё, начиная с отношения персонала.'],
  ], [
    ['{空|そら}の{様子|ようす}＿＿、{雨|あめ}が{降|ふ}りそうだ。', ['からすると', 'からには', 'からこそ', 'からといって'], 'Judging by the sky, it looks like rain.', 'Судя по небу, будет дождь.'],
    ['あの{映画|えいが}はタイトル＿＿{怖|こわ}そうだ。', ['からして', 'からには', 'ことから', 'からといって'], 'That film looks scary - just from the title.', 'Тот фильм выглядит страшным уже по названию.'],
    ['{私|わたし}の{経験|けいけん}から＿＿、それは{無理|むり}だ。', ['すると', 'には', 'こそ', 'まで'], 'Judging from my experience, that is impossible.', 'По моему опыту, это невозможно.'],
  ]),
];
