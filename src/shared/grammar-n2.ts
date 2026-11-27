// 0.9.9.9.9.6 (round 5): JLPT N2 grammar — the lessons (see grammar.ts). Furigana: {漢字|かな}. A question's first
// choice is the right one.
import type { GrammarPoint, GrammarQuestion } from './grammar';

type R = [string, string];
type E = [string, string, string];
type Q = [string, [string, string, string, string], string, string];
const p = (id: string, pattern: string, meaning: R, rules: R[], examples: E[], questions: Q[]): GrammarPoint => ({
  id: `n2-${id}`, level: 'N2', pattern, meaning: { en: meaning[0], ru: meaning[1] },
  rules: rules.map(([en, ru]) => ({ en, ru })),
  examples: examples.map(([jp, en, ru]) => ({ jp, en, ru })),
  questions: questions.map(([jp, options, en, ru]): GrammarQuestion => ({ jp, options, en, ru })),
});

export const N2: GrammarPoint[] = [
  p('ni-totte', '〜にとって', ['for, to (from someone\'s point of view)', 'для (с точки зрения кого-то)'], [
    ['Noun + にとって: how something is for that person (a judgement: important, difficult …).', 'Сущ. + にとって — каково это для кого-то (оценка: важно, трудно …).'],
  ], [
    ['{私|わたし}にとって、{家族|かぞく}が{一番|いちばん}{大切|たいせつ}です。', 'For me, family matters most.', 'Для меня семья важнее всего.'],
  ], [
    ['{留学生|りゅうがくせい}＿＿、{漢字|かんじ}は{難|むずか}しい。', ['にとって', 'によって', 'について', 'に対して'], 'For foreign students, kanji are hard.', 'Для иностранных студентов кандзи трудны.'],
    ['この{写真|しゃしん}は{私|わたし}にとって{宝物|たからもの}＿＿。', ['だ', 'に', 'を', 'で'], 'This photo is a treasure to me.', 'Эта фотография для меня — сокровище.'],
    ['{子|こ}ども＿＿、{遊|あそ}びは{勉強|べんきょう}だ。', ['にとって', 'にかけて', 'にわたって', 'に沿って'], 'For children, play is learning.', 'Для детей игра — это учёба.'],
  ]),
  p('ni-yotte', '〜によって', ['by; depending on; because of', 'кем; в зависимости от; из-за'], [
    ['Noun + によって: the doer (a passive), the means, the cause, or "it varies with".', 'Сущ. + によって — деятель (в пассиве), средство, причина или «зависит от».'],
    ['〜によっては: in some (cases, people …).', '〜によっては — в некоторых (случаях, у людей …).'],
  ], [
    ['この{小説|しょうせつ}は{夏目漱石|なつめそうせき}によって{書|か}かれた。', 'This novel was written by Natsume Soseki.', 'Этот роман написал Нацумэ Сосэки.'],
    ['{国|くに}によって{習慣|しゅうかん}が{違|ちが}う。', 'Customs differ from country to country.', 'Обычаи разнятся в зависимости от страны.'],
  ], [
    ['{人|ひと}＿＿{考|かんが}え{方|かた}が{違|ちが}う。', ['によって', 'にとって', 'について', 'として'], 'Ways of thinking differ from person to person.', 'У разных людей разный образ мыслей.'],
    ['{地震|じしん}＿＿{多|おお}くの{家|いえ}が{壊|こわ}れた。', ['によって', 'にとって', 'に比べて', 'にかわって'], 'Many houses were destroyed by the earthquake.', 'Землетрясение разрушило много домов.'],
    ['{場合|ばあい}によって＿＿、{返金|へんきん}できません。', ['は', 'も', 'が', 'を'], 'In some cases, refunds are not possible.', 'В некоторых случаях возврат невозможен.'],
  ]),
  p('ni-tsuite', '〜について・〜に関して', ['about, concerning', 'о, касательно'], [
    ['Noun + について (spoken) / に関して (formal): the topic of talking, thinking, studying.', 'Сущ. + について (разг.) / に関して (офиц.) — тема разговора, размышления, изучения.'],
  ], [
    ['{日本|にほん}の{歴史|れきし}について{調|しら}べています。', 'I am researching Japanese history.', 'Я изучаю историю Японии.'],
    ['この{件|けん}に{関|かん}して、ご{質問|しつもん}はありますか。', 'Do you have any questions about this matter?', 'Есть ли вопросы по этому делу?'],
  ], [
    ['{環境|かんきょう}{問題|もんだい}＿＿{話|はな}し{合|あ}った。', ['について', 'によって', 'にとって', 'において'], 'We discussed environmental problems.', 'Мы обсуждали экологические проблемы.'],
    ['{新|あたら}しい{計画|けいかく}に＿＿、{説明|せつめい}します。', ['関して', '対して', '比べて', '加えて'], 'I will explain about the new plan.', 'Я расскажу о новом плане.'],
    ['{彼|かれ}は{自分|じぶん}＿＿{何|なに}も{話|はな}さない。', ['について', 'にとって', 'として', 'によって'], 'He says nothing about himself.', 'Он ничего не рассказывает о себе.'],
  ]),
  p('ni-taishite', '〜に対して', ['towards, to; in contrast with', 'по отношению к; в отличие от'], [
    ['Noun + に対して: the person or thing an action or feeling is aimed at.', 'Сущ. + に対して — на кого направлено действие или чувство.'],
    ['Also a contrast: A is …, whereas B is ….', 'А также противопоставление: A — …, тогда как B — ….'],
  ], [
    ['{先生|せんせい}に{対|たい}して{失礼|しつれい}なことを{言|い}ってはいけない。', 'You must not say rude things to the teacher.', 'Нельзя грубить учителю.'],
    ['{兄|あに}は{背|せ}が{高|たか}いのに{対|たい}して、{弟|おとうと}は{低|ひく}い。', 'My older brother is tall, whereas the younger one is short.', 'Старший брат высокий, а младший — низкий.'],
  ], [
    ['{客|きゃく}に＿＿{丁寧|ていねい}に{話|はな}す。', ['対して', 'とって', 'ついて', 'よって'], 'Speak politely to customers.', 'С клиентами говорят вежливо.'],
    ['{質問|しつもん}に＿＿{答|こた}える。', ['対して', 'わたって', 'かけて', '沿って'], 'Answer the question.', 'Ответить на вопрос.'],
    ['{都会|とかい}は{便利|べんり}なのに＿＿、{田舎|いなか}は{静|しず}かだ。', ['対して', '比べて', 'とって', 'ついて'], 'The city is convenient, whereas the countryside is quiet.', 'Город удобен, тогда как деревня тиха.'],
  ]),
  p('ni-kurabete', '〜に比べて', ['compared with', 'по сравнению с'], [
    ['Noun + に比べて (比べると): set beside something else.', 'Сущ. + に比べて (比べると) — в сравнении с чем-то.'],
  ], [
    ['{去年|きょねん}に{比|くら}べて、{今年|ことし}は{暑|あつ}い。', 'Compared with last year, this year is hot.', 'По сравнению с прошлым годом этот год жаркий.'],
  ], [
    ['{東京|とうきょう}に＿＿、{大阪|おおさか}は{物価|ぶっか}が{安|やす}い。', ['比べて', '対して', 'とって', 'よって'], 'Compared with Tokyo, prices in Osaka are low.', 'По сравнению с Токио цены в Осаке ниже.'],
    ['{以前|いぜん}に比べる＿＿、ずいぶん{上手|じょうず}になった。', ['と', 'に', 'で', 'が'], 'Compared with before, you have got much better.', 'По сравнению с прежним ты стал гораздо лучше.'],
    ['{兄|あに}に＿＿、{私|わたし}は{運動|うんどう}が{苦手|にがて}だ。', ['比べて', '関して', '沿って', 'かけて'], 'Compared with my brother, I am bad at sports.', 'В отличие от брата, я не силён в спорте.'],
  ]),
  p('ni-oite', '〜において', ['in, at (formal)', 'в (офиц.)'], [
    ['Noun + において: a place, time or field — the formal で.', 'Сущ. + において — место, время или область; официальное で.'],
  ], [
    ['{会議|かいぎ}は{本社|ほんしゃ}において{行|おこな}われる。', 'The meeting will be held at the head office.', 'Совещание пройдёт в главном офисе.'],
  ], [
    ['{現代|げんだい}の{社会|しゃかい}＿＿、インターネットは{欠|か}かせない。', ['において', 'にとって', 'に対して', 'について'], 'In modern society, the internet is indispensable.', 'В современном обществе интернет незаменим.'],
    ['{式|しき}は{大|だい}ホールに＿＿{行|おこな}います。', ['おいて', 'とって', 'ついて', 'よって'], 'The ceremony will take place in the main hall.', 'Церемония пройдёт в большом зале.'],
    ['{日本|にほん}＿＿、{少子化|しょうしか}が{進|すす}んでいる。', ['において', 'にかわって', 'に比べて', 'にともなって'], 'In Japan, the birth rate keeps falling.', 'В Японии рождаемость снижается.'],
  ]),
  p('ni-tsurete', '〜につれて・〜に従って', ['as (one thing changes, so does another)', 'по мере того как'], [
    ['Dictionary form / noun + につれて (に従って): as A changes, B changes with it.', 'Словарная форма / сущ. + につれて (に従って) — по мере изменения A меняется и B.'],
  ], [
    ['{年|とし}を{取|と}るにつれて、{体力|たいりょく}が{落|お}ちる。', 'As you get older, your strength declines.', 'С возрастом силы убывают.'],
  ], [
    ['{日本|にほん}の{生活|せいかつ}に{慣|な}れる＿＿、{友|とも}だちも{増|ふ}えた。', ['につれて', 'について', 'にとって', 'に対して'], 'As I got used to life in Japan, I made more friends.', 'По мере привыкания к жизни в Японии друзей стало больше.'],
    ['{時間|じかん}がたつ＿＿、{悲|かな}しみも{薄|うす}れた。', ['に従って', 'に関して', 'にかけて', 'に対して'], 'As time passed, the sadness faded.', 'Со временем печаль утихла.'],
    ['{山|やま}を{登|のぼ}る＿＿、{寒|さむ}くなった。', ['につれて', 'について', 'によって', 'にとって'], 'As we climbed the mountain, it got colder.', 'По мере подъёма в гору становилось холоднее.'],
  ]),
  p('ni-chigainai', '〜に違いない', ['must be, no doubt', 'несомненно, наверняка'], [
    ['Plain form (な-adj / noun without だ) + に違いない: you are sure of it.', 'Простая форма (な-прил./сущ. без だ) + に違いない — вы уверены.'],
  ], [
    ['あの{人|ひと}は{犯人|はんにん}に{違|ちが}いない。', 'That person must be the culprit.', 'Тот человек наверняка преступник.'],
    ['{彼女|かのじょ}は{疲|つか}れているに{違|ちが}いない。', 'She must be tired.', 'Она, несомненно, устала.'],
  ], [
    ['{電気|でんき}がついている。{誰|だれ}かいる＿＿。', ['に違いない', 'わけがない', 'はずがない', 'ことはない'], 'The light is on. Someone must be there.', 'Свет горит. Наверняка кто-то есть.'],
    ['この{答|こた}えは{正|ただ}しい＿＿{違|ちが}いない。', ['に', 'が', 'を', 'で'], 'This answer must be right.', 'Этот ответ наверняка правильный.'],
    ['{彼|かれ}が{来|こ}ないのは、{忙|いそが}しい＿＿。', ['に違いない', 'わけにいかない', 'ことになる', 'ものか'], 'He must be busy - that\'s why he isn\'t coming.', 'Он не приходит — наверняка занят.'],
  ]),
  p('wake-ni-ikanai', '〜わけにはいかない', ['cannot (because it would be wrong)', 'никак нельзя (по совести, по обстоятельствам)'], [
    ['Dictionary form + わけにはいかない: you can\'t, because of duty, feelings or the situation.', 'Словарная форма + わけにはいかない — нельзя из-за долга, чувств или обстоятельств.'],
    ['ない-form + わけにはいかない: you have to.', 'ない-форма + わけにはいかない — придётся.'],
  ], [
    ['{明日|あした}は{試験|しけん}だから、{遊|あそ}ぶわけにはいかない。', 'There is an exam tomorrow, so I can\'t go out and play.', 'Завтра экзамен, так что гулять никак нельзя.'],
    ['{約束|やくそく}したから、{行|い}かないわけにはいかない。', 'I promised, so I have to go.', 'Я обещал, так что придётся идти.'],
  ], [
    ['{運転|うんてん}するので、お{酒|さけ}を{飲|の}む＿＿にはいかない。', ['わけ', 'はず', 'こと', 'もの'], 'I am driving, so I can\'t drink.', 'Я за рулём, так что пить нельзя.'],
    ['{仕事|しごと}が{残|のこ}っているので、{帰|かえ}る＿＿。', ['わけにはいかない', 'わけではない', 'はずがない', 'ことはない'], 'I still have work, so I can\'t go home.', 'Работа ещё осталась, так что уйти не могу.'],
    ['{先生|せんせい}に{頼|たの}まれたら、やらない＿＿。', ['わけにはいかない', 'わけがない', 'ものではない', 'にすぎない'], 'If the teacher asks, I have to do it.', 'Если учитель просит, придётся сделать.'],
  ]),
  p('koso', '〜こそ', ['it is precisely, this very', 'именно, как раз'], [
    ['Noun + こそ: stresses that this one, not another. 今年こそ: this year for sure.', 'Сущ. + こそ — подчёркивает: именно это. 今年こそ — уж в этом году точно.'],
    ['〜からこそ: precisely because.', '〜からこそ — именно потому что.'],
  ], [
    ['{今度|こんど}こそ{合格|ごうかく}したい。', 'This time I really want to pass.', 'Уж в этот раз хочу сдать.'],
    ['{好|す}きだからこそ、{厳|きび}しく{言|い}うのだ。', 'It is precisely because I like you that I am strict.', 'Именно потому что ты мне дорог, я строг.'],
  ], [
    ['こちら＿＿、よろしくお{願|ねが}いします。', ['こそ', 'さえ', 'しか', 'まで'], 'It is I who should thank you.', 'Это вам спасибо.'],
    ['{失敗|しっぱい}したから＿＿、{学|まな}べることもある。', ['こそ', 'さえ', 'でも', 'だけ'], 'There are things you can learn precisely because you failed.', 'Есть то, чему учишься именно благодаря неудаче.'],
    ['{明日|あした}＿＿{早|はや}く{起|お}きよう。', ['こそ', 'ばかり', 'しか', 'ほど'], 'Tomorrow I\'ll get up early for sure.', 'Уж завтра точно встану пораньше.'],
  ]),
  p('ue-ni', '〜うえに', ['on top of, besides', 'вдобавок, помимо того что'], [
    ['Plain form (な-adj + な, noun + である) + うえに: adds a second point of the same kind.', 'Простая форма (な-прил. + な, сущ. + である) + うえに — добавляет второй довод того же рода.'],
  ], [
    ['この{店|みせ}は{安|やす}いうえに、おいしい。', 'This place is cheap and, on top of that, tasty.', 'Тут дёшево, да ещё и вкусно.'],
  ], [
    ['{道|みち}に{迷|まよ}った＿＿、{雨|あめ}まで{降|ふ}ってきた。', ['うえに', 'うちに', 'ために', 'くせに'], 'I got lost, and on top of that it started to rain.', 'Я заблудился, а тут ещё и дождь пошёл.'],
    ['{彼女|かのじょ}は{親切|しんせつ}な＿＿、{頭|あたま}もいい。', ['うえに', 'わりに', 'かわりに', 'ばかりに'], 'She is kind and clever as well.', 'Она добрая, да ещё и умная.'],
    ['{寒|さむ}い＿＿、{風|かぜ}も{強|つよ}い。', ['うえに', 'うちに', 'あとで', 'までに'], 'It is cold, and the wind is strong too.', 'Холодно, да ещё и ветер сильный.'],
  ]),
  p('wari-ni', '〜わりに(は)', ['considering, for (more / less than expected)', 'для, учитывая (не так, как ожидалось)'], [
    ['Plain form / noun + の + わりに: the result is not what the first part would make you expect.', 'Простая форма / сущ. + の + わりに — результат не тот, какого ждёшь из первой части.'],
  ], [
    ['この{店|みせ}は{値段|ねだん}のわりにおいしい。', 'This place is tasty for the price.', 'Для такой цены здесь вкусно.'],
    ['{勉強|べんきょう}しなかったわりには、{点|てん}がよかった。', 'Considering I didn\'t study, I got a good score.', 'Для того, кто не учил, я получил хороший балл.'],
  ], [
    ['{彼|かれ}は{年|とし}の＿＿に{若|わか}く{見|み}える。', ['わり', 'うえ', 'かわり', 'ため'], 'He looks young for his age.', 'Он выглядит молодо для своих лет.'],
    ['{練習|れんしゅう}した＿＿は、{上手|じょうず}にならない。', ['わりに', 'うえに', 'ために', 'うちに'], 'For all the practice, he isn\'t getting better.', 'Для стольких тренировок прогресса мало.'],
    ['{高|たか}い＿＿、{質|しつ}がよくない。', ['わりに', 'うえに', 'くせに', 'ほどに'], 'For something so expensive, the quality is poor.', 'Для такой цены качество неважное.'],
  ]),
  p('kagiri', '〜限り', ['as long as; as far as', 'пока; насколько'], [
    ['Dictionary form / ない-form + 限り: as long as the condition holds.', 'Словарная форма / ない-форма + 限り — пока выполняется условие.'],
    ['〜限りでは: as far as (I know, I saw).', '〜限りでは — насколько (я знаю, видел).'],
  ], [
    ['{生|い}きている{限|かぎ}り、{夢|ゆめ}を{諦|あきら}めない。', 'As long as I live, I won\'t give up my dream.', 'Пока жив, не откажусь от мечты.'],
    ['{私|わたし}が{知|し}っている{限|かぎ}り、{彼|かれ}は{正直|しょうじき}な{人|ひと}だ。', 'As far as I know, he is an honest man.', 'Насколько я знаю, он честный человек.'],
  ], [
    ['{雨|あめ}が{降|ふ}らない＿＿、{試合|しあい}は{行|おこな}われる。', ['限り', 'うち', 'ほど', 'ため'], 'As long as it doesn\'t rain, the match will be held.', 'Если не будет дождя, матч состоится.'],
    ['{調|しら}べた＿＿では、{問題|もんだい}はなかった。', ['限り', 'うえ', 'わり', 'ところ'], 'As far as I checked, there was no problem.', 'Насколько я проверил, проблем не было.'],
    ['できる＿＿{頑張|がんば}ります。', ['限り', 'まで', 'ほど', 'だけで'], 'I will do my best as far as I can.', 'Постараюсь изо всех сил.'],
  ]),
  p('ba-yokatta', '〜ばよかった', ['I should have, I wish I had', 'надо было бы, жаль что не'], [
    ['ば-form + よかった: regret for what you did not do. ない → なければよかった: you wish you hadn\'t.', 'ば-форма + よかった — сожаление о несделанном. なければよかった — жаль, что сделал.'],
  ], [
    ['もっと{早|はや}く{出発|しゅっぱつ}すればよかった。', 'I should have left earlier.', 'Надо было выехать раньше.'],
    ['あんなことを{言|い}わなければよかった。', 'I wish I hadn\'t said that.', 'Не надо было так говорить.'],
  ], [
    ['{傘|かさ}を{持|も}ってくれ＿＿よかった。', ['ば', 'たら', 'て', 'ても'], 'I should have brought an umbrella.', 'Надо было взять зонт.'],
    ['{食|た}べすぎた。あんなに{食|た}べなけれ＿＿よかった。', ['ば', 'ど', 'て', 'も'], 'I ate too much. I wish I hadn\'t eaten so much.', 'Объелся. Не надо было столько есть.'],
    ['もっと{勉強|べんきょう}すれば＿＿。', ['よかった', 'いい', 'よくない', 'よければ'], 'I should have studied more.', 'Надо было больше заниматься.'],
  ]),
  p('mono-da', '〜ものだ', ['naturally, should; used to; how …!', 'так уж; бывало; как же …!'], [
    ['Dictionary form + ものだ: what is natural or proper (人の話はよく聞くものだ).', 'Словарная форма + ものだ — то, что естественно или правильно.'],
    ['た-form + ものだ: fond memories — used to. And a feeling: 時間がたつのは早いものだ.', 'た-форма + ものだ — тёплые воспоминания: бывало. И чувство: 時間がたつのは早いものだ.'],
  ], [
    ['{子|こ}どものころ、よくこの{川|かわ}で{泳|およ}いだものだ。', 'As a child I often used to swim in this river.', 'В детстве я часто плавал в этой реке.'],
    ['{人|ひと}の{物|もの}を{盗|ぬす}んではいけないものだ。', 'One must not steal other people\'s things.', 'Чужое брать нельзя — так уж положено.'],
  ], [
    ['{学生|がくせい}は{勉強|べんきょう}する＿＿だ。', ['もの', 'こと', 'わけ', 'はず'], 'Students are supposed to study.', 'Студентам положено учиться.'],
    ['{若|わか}いころはよく{旅行|りょこう}した＿＿だ。', ['もの', 'ため', 'ところ', 'つもり'], 'When I was young I often used to travel.', 'В молодости я часто путешествовал.'],
    ['{月日|つきひ}がたつのは{早|はや}い＿＿だ。', ['もの', 'こと', 'よう', 'まま'], 'How fast time flies!', 'Как же быстро летит время!'],
  ]),
];
