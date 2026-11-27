// 0.9.9.9.9.6 (round 5): JLPT N3 grammar — the lessons (see grammar.ts). Furigana: {漢字|かな}. A question's first
// choice is the right one.
import type { GrammarPoint, GrammarQuestion } from './grammar';

type R = [string, string];
type E = [string, string, string];
type Q = [string, [string, string, string, string], string, string];
const p = (id: string, pattern: string, meaning: R, rules: R[], examples: E[], questions: Q[]): GrammarPoint => ({
  id: `n3-${id}`, level: 'N3', pattern, meaning: { en: meaning[0], ru: meaning[1] },
  rules: rules.map(([en, ru]) => ({ en, ru })),
  examples: examples.map(([jp, en, ru]) => ({ jp, en, ru })),
  questions: questions.map(([jp, options, en, ru]): GrammarQuestion => ({ jp, options, en, ru })),
});

export const N3: GrammarPoint[] = [
  p('wake-da', '〜わけだ', ['no wonder, that is why', 'вот почему, неудивительно'], [
    ['Plain form + わけだ: the natural result of what you just learned.', 'Простая форма + わけだ — естественный вывод из того, что узнали.'],
    ['〜わけではない: it is not that … (a partial denial).', '〜わけではない — не то чтобы … (частичное отрицание).'],
  ], [
    ['{十年|じゅうねん}{日本|にほん}に{住|す}んでいたのか。{日本語|にほんご}が{上手|じょうず}なわけだ。', 'You lived in Japan for ten years? No wonder your Japanese is good.', 'Ты десять лет жил в Японии? Вот почему так хорошо говоришь.'],
    ['{嫌|きら}いなわけではありません。', 'It is not that I dislike it.', 'Не то чтобы мне это не нравилось.'],
  ], [
    ['{毎日|まいにち}{練習|れんしゅう}している。{上手|じょうず}になる＿＿。', ['わけだ', 'ものだ', 'ことだ', 'はずがない'], 'He practises every day. No wonder he is getting good.', 'Он тренируется каждый день. Неудивительно, что у него получается.'],
    ['お{金|かね}がない＿＿ではないが、{買|か}わない。', ['わけ', 'もの', 'こと', 'ため'], 'It is not that I have no money, but I won\'t buy it.', 'Не то чтобы у меня не было денег, но покупать не буду.'],
    ['{窓|まど}が{開|あ}いている。{寒|さむ}い＿＿だ。', ['わけ', 'ところ', 'つもり', 'まま'], 'The window is open. That is why it is cold.', 'Окно открыто. Вот почему холодно.'],
  ]),
  p('hazu', '〜はずだ', ['should, ought to (I expect)', 'должно быть (ожидаю)'], [
    ['Plain form + はずだ: what you expect from what you know.', 'Простая форма + はずだ — то, чего ожидаете исходя из известного.'],
    ['〜はずがない: it cannot be (sure it is not so).', '〜はずがない — не может быть.'],
  ], [
    ['{荷物|にもつ}は{明日|あした}{届|とど}くはずです。', 'The package should arrive tomorrow.', 'Посылка должна прийти завтра.'],
    ['{彼|かれ}がそんなことを{言|い}うはずがない。', 'He cannot have said such a thing.', 'Не может быть, чтобы он такое сказал.'],
  ], [
    ['{会議|かいぎ}は{三時|さんじ}に{終|お}わる＿＿です。', ['はず', 'わけ', 'まま', 'ため'], 'The meeting should end at three.', 'Совещание должно закончиться в три.'],
    ['{鍵|かぎ}はかばんに{入|い}れた＿＿なのに、ない。', ['はず', 'ばかり', 'つもり', 'ところ'], 'I was sure I put the key in my bag, but it is not there.', 'Я точно клал ключ в сумку, но его нет.'],
    ['あんなに{優|やさ}しい{人|ひと}が{怒|おこ}る＿＿がない。', ['はず', 'わけ', 'こと', 'もの'], 'Such a kind person cannot be angry.', 'Такой добрый человек не может злиться.'],
  ]),
  p('you-ni-suru', '〜ようにする', ['make sure to, try to (as a habit)', 'стараться (делать)'], [
    ['Dictionary form / ない-form + ようにする: an effort you make regularly.', 'Словарная форма / ない-форма + ようにする — усилие, которое вы прилагаете регулярно.'],
    ['〜ようになる (a change: come to be able / start to) is a different pattern.', '〜ようになる (изменение: стать способным / начать) — другая конструкция.'],
  ], [
    ['{毎朝|まいあさ}{野菜|やさい}を{食|た}べるようにしています。', 'I make sure to eat vegetables every morning.', 'Я стараюсь каждое утро есть овощи.'],
    ['{夜|よる}{遅|おそ}くまで{起|お}きないようにしている。', 'I try not to stay up late.', 'Стараюсь не засиживаться допоздна.'],
  ], [
    ['{忘|わす}れないようにメモする＿＿しています。', ['ように', 'ことに', 'ために', 'ばかりに'], 'I make a point of taking notes so I don\'t forget.', 'Я стараюсь записывать, чтобы не забыть.'],
    ['{日本語|にほんご}が{話|はな}せる＿＿なりました。', ['ように', 'ことに', 'ために', 'そうに'], 'I have become able to speak Japanese.', 'Я научился говорить по-японски.'],
    ['{甘|あま}いものは{食|た}べない＿＿しています。', ['ように', 'ことを', 'ためを', 'ものに'], 'I try not to eat sweets.', 'Стараюсь не есть сладкого.'],
  ]),
  p('koto-ni-suru', '〜ことにする・〜ことになる', ['decide to / it has been decided that', 'решить / решено, что'], [
    ['〜ことにする: you decide. 〜ことにしている: a rule you keep.', '〜ことにする — решаете вы. 〜ことにしている — правило, которого придерживаетесь.'],
    ['〜ことになる: it is decided (by others, by circumstances).', '〜ことになる — решено (другими, обстоятельствами).'],
  ], [
    ['{来年|らいねん}{留学|りゅうがく}することにしました。', 'I have decided to study abroad next year.', 'Я решил в следующем году учиться за границей.'],
    ['{来月|らいげつ}{大阪|おおさか}に{転勤|てんきん}することになりました。', 'It has been decided that I will be transferred to Osaka next month.', 'Меня переводят в Осаку в следующем месяце.'],
  ], [
    ['{健康|けんこう}のため、たばこをやめる＿＿にした。', ['こと', 'よう', 'ため', 'もの'], 'For my health, I decided to quit smoking.', 'Ради здоровья я решил бросить курить.'],
    ['{会議|かいぎ}は{来週|らいしゅう}{行|おこな}われることに＿＿。', ['なった', 'した', 'あった', 'いった'], 'It was decided that the meeting will be held next week.', 'Решено провести совещание на следующей неделе.'],
    ['{毎晩|まいばん}{寝|ね}る{前|まえ}に{本|ほん}を{読|よ}むことに＿＿います。', ['して', 'なって', 'あって', 'みて'], 'I make it a rule to read before bed every night.', 'Я взял за правило читать перед сном каждый вечер.'],
  ]),
  p('tame-ni', '〜ために', ['for the purpose of; because of', 'для того чтобы; из-за'], [
    ['Dictionary form / noun + の + ために: a purpose (the same person acts).', 'Словарная форма / сущ. + の + ために — цель (действует тот же человек).'],
    ['After a past or a state, ために gives a cause: 雨のために中止になった.', 'После прошедшего или состояния ために — причина: 雨のために中止になった.'],
  ], [
    ['{家|いえ}を{買|か}うために{貯金|ちょきん}しています。', 'I am saving to buy a house.', 'Я коплю, чтобы купить дом.'],
    ['{事故|じこ}のために{電車|でんしゃ}が{遅|おく}れた。', 'The train was late because of an accident.', 'Поезд опоздал из-за аварии.'],
  ], [
    ['{試験|しけん}に{合格|ごうかく}する＿＿、{毎日|まいにち}{勉強|べんきょう}しています。', ['ために', 'ように', 'ので', 'のに'], 'I study every day in order to pass the exam.', 'Я занимаюсь каждый день, чтобы сдать экзамен.'],
    ['{台風|たいふう}の＿＿、{飛行機|ひこうき}が{欠航|けっこう}した。', ['ために', 'ように', 'ばかり', 'くせに'], 'Because of the typhoon, the flight was cancelled.', 'Из-за тайфуна рейс отменили.'],
    ['{家族|かぞく}の＿＿に{働|はたら}いています。', ['ため', 'よう', 'わけ', 'はず'], 'I work for my family.', 'Я работаю ради семьи.'],
  ]),
  p('noni', '〜のに', ['even though, despite', 'хотя, несмотря на то что'], [
    ['Plain form + のに (な-adj / noun: なのに): the result is not what you expected — often with regret or blame.', 'Простая форма + のに (な-прил./сущ.: なのに) — результат не тот, что ожидался; часто с сожалением или упрёком.'],
  ], [
    ['{一生懸命|いっしょうけんめい}{勉強|べんきょう}したのに、{合格|ごうかく}できなかった。', 'Even though I studied hard, I didn\'t pass.', 'Хотя я усердно занимался, не сдал.'],
    ['{日曜日|にちようび}なのに{仕事|しごと}がある。', 'It is Sunday, yet I have work.', 'Хотя воскресенье, у меня работа.'],
  ], [
    ['{約束|やくそく}した＿＿、{彼|かれ}は{来|こ}なかった。', ['のに', 'ので', 'から', 'ために'], 'He promised, yet he did not come.', 'Хотя он обещал, он не пришёл.'],
    ['{静|しず}か＿＿のに、{眠|ねむ}れない。', ['な', 'だ', 'で', 'に'], 'It is quiet, yet I can\'t sleep.', 'Тихо, а уснуть не могу.'],
    ['{薬|くすり}を{飲|の}んだ＿＿、まだ{熱|ねつ}がある。', ['のに', 'から', 'たら', 'ように'], 'I took medicine, but I still have a fever.', 'Я принял лекарство, но температура всё ещё есть.'],
  ]),
  p('bakari', '〜ばかり', ['nothing but; just (done)', 'только и делать; только что'], [
    ['Noun + ばかり / て-form + ばかりいる: nothing but, all the time (often a complaint).', 'Сущ. + ばかり / て-форма + ばかりいる — только и делает, всё время (часто жалоба).'],
    ['た-form + ばかり: just done, a short time ago (as the speaker feels it).', 'た-форма + ばかり — только что сделано (по ощущению говорящего).'],
  ], [
    ['{弟|おとうと}はゲームばかりしている。', 'My little brother does nothing but play games.', 'Младший брат только и делает, что играет.'],
    ['{日本|にほん}に{来|き}たばかりです。', 'I have just come to Japan.', 'Я только что приехал в Японию.'],
  ], [
    ['{甘|あま}いもの＿＿{食|た}べていると、{太|ふと}りますよ。', ['ばかり', 'だけで', 'しか', 'まで'], 'If you eat nothing but sweets, you will put on weight.', 'Если есть одно сладкое, поправишься.'],
    ['さっき{起|お}きた＿＿です。', ['ばかり', 'ところで', 'うちに', 'あいだ'], 'I just got up a moment ago.', 'Я только что встал.'],
    ['{彼|かれ}は{文句|もんく}を{言|い}って＿＿いる。', ['ばかり', 'しか', 'だけを', 'ほど'], 'He does nothing but complain.', 'Он только и делает, что жалуется.'],
  ]),
  p('uchi-ni', '〜うちに', ['while (still), before (it changes)', 'пока (ещё), пока не'], [
    ['Dictionary form / い-adj / noun + の + うちに: do it while the state lasts.', 'Словарная форма / い-прил. / сущ. + の + うちに — сделать, пока длится состояние.'],
    ['ない-form + うちに: before something happens.', 'ない-форма + うちに — пока не случилось.'],
  ], [
    ['{熱|あつ}いうちに{食|た}べてください。', 'Please eat it while it is hot.', 'Ешьте, пока горячее.'],
    ['{暗|くら}くならないうちに{帰|かえ}りましょう。', 'Let\'s go home before it gets dark.', 'Пойдём домой, пока не стемнело.'],
  ], [
    ['{若|わか}い＿＿に、いろいろな{国|くに}へ{行|い}きたい。', ['うち', 'まえ', 'あと', 'ため'], 'While I am young, I want to go to many countries.', 'Пока молод, хочу побывать во многих странах.'],
    ['{雨|あめ}が{降|ふ}らない＿＿、{洗濯物|せんたくもの}を{入|い}れよう。', ['うちに', 'まえで', 'あとに', 'ために'], 'Let\'s bring the washing in before it rains.', 'Давай заберём бельё, пока не пошёл дождь.'],
    ['{忘|わす}れない＿＿にメモしておこう。', ['うち', 'とき', 'ため', 'ほど'], 'Let\'s write it down before I forget.', 'Запишу, пока не забыл.'],
  ]),
  p('toori', '〜とおり(に)', ['as, exactly as', 'как, в точности как'], [
    ['Dictionary / た-form + とおり(に), noun + のとおり / noun + どおり: the same way as.', 'Словарная / た-форма + とおり(に), сущ. + のとおり / сущ. + どおり — так же, как.'],
  ], [
    ['{説明書|せつめいしょ}のとおりに{組|く}み{立|た}ててください。', 'Please put it together as the manual says.', 'Собирайте, пожалуйста, по инструкции.'],
    ['{予定|よてい}どおり{出発|しゅっぱつ}した。', 'We left as planned.', 'Мы выехали по плану.'],
  ], [
    ['{先生|せんせい}が{言|い}った＿＿に{書|か}いてください。', ['とおり', 'ほど', 'ばかり', 'くらい'], 'Please write it as the teacher said.', 'Пишите так, как сказал учитель.'],
    ['{思|おも}った＿＿、{試験|しけん}は{難|むずか}しかった。', ['とおり', 'ために', 'うちに', 'ながら'], 'As I thought, the exam was hard.', 'Как я и думал, экзамен был трудным.'],
    ['{計画|けいかく}＿＿に{進|すす}んでいる。', ['どおり', 'ばかり', 'だらけ', 'ぐらい'], 'It is going according to plan.', 'Всё идёт по плану.'],
  ]),
  p('sae', '〜さえ', ['even; if only', 'даже; лишь бы'], [
    ['Noun + さえ: even (that, let alone the rest).', 'Сущ. + さえ — даже (это, не говоря об остальном).'],
    ['〜さえ〜ば: if only — that alone is enough.', '〜さえ〜ば — лишь бы, только этого достаточно.'],
  ], [
    ['{忙|いそが}しくて、{寝|ね}る{時間|じかん}さえない。', 'I am so busy I don\'t even have time to sleep.', 'Так занят, что даже спать некогда.'],
    ['{時間|じかん}さえあれば、{行|い}けるのに。', 'If only I had time, I could go.', 'Было бы только время — я бы пошёл.'],
  ], [
    ['{子|こ}どもで＿＿わかる{問題|もんだい}だ。', ['さえ', 'しか', 'ばかり', 'こそ'], 'It is a problem even a child understands.', 'Эту задачу понимает даже ребёнок.'],
    ['お{金|かね}＿＿あれば、{何|なん}でもできる。', ['さえ', 'でも', 'まで', 'こそ'], 'If only you have money, you can do anything.', 'Были бы деньги — можно всё.'],
    ['{名前|なまえ}＿＿{書|か}けない。', ['さえ', 'だけ', 'ほど', 'より'], 'I can\'t even write my name.', 'Даже имя написать не могу.'],
  ]),
  p('nai-to', '〜ないと・〜なくちゃ', ['have to (casual)', 'надо (разг.)'], [
    ['〜ないと (いけない) and 〜なくちゃ / 〜なきゃ are the spoken forms of 〜なければならない.', '〜ないと (いけない) и 〜なくちゃ / 〜なきゃ — разговорные формы 〜なければならない.'],
  ], [
    ['もう{帰|かえ}らないと。', 'I have to go home now.', 'Мне уже пора домой.'],
    ['{明日|あした}までにレポートを{出|だ}さなきゃ。', 'I have to hand in the report by tomorrow.', 'Надо сдать доклад до завтра.'],
  ], [
    ['{早|はや}く{寝|ね}＿＿。{明日|あした}は{早|はや}いから。', ['なきゃ', 'たら', 'ても', 'ちゃった'], 'I have to go to bed early - tomorrow starts early.', 'Надо лечь пораньше — завтра рано вставать.'],
    ['{薬|くすり}を{飲|の}ま＿＿いけない。', ['ないと', 'ないで', 'なくて', 'ずに'], 'I have to take my medicine.', 'Надо принять лекарство.'],
    ['{宿題|しゅくだい}、やら＿＿。', ['なくちゃ', 'なかった', 'ないで', 'ないと思う'], 'I have to do my homework.', 'Надо сделать домашку.'],
  ]),
  p('rashii', '〜らしい', ['apparently; typical of', 'кажется, говорят; типичный'], [
    ['Plain form + らしい: what you gather from what you heard or saw.', 'Простая форма + らしい — вывод из услышанного или увиденного.'],
    ['Noun + らしい: typical of, just like a … should be (男らしい, 春らしい).', 'Сущ. + らしい — типичный, настоящий (男らしい, 春らしい).'],
  ], [
    ['{山田|やまだ}さんは{会社|かいしゃ}を{辞|や}めたらしい。', 'Apparently Mr Yamada quit his company.', 'Кажется, Ямада-сан уволился.'],
    ['{今日|きょう}は{春|はる}らしい{天気|てんき}だ。', 'Today the weather is just like spring.', 'Сегодня настоящая весенняя погода.'],
  ], [
    ['あの{店|みせ}は{来月|らいげつ}{閉|し}まる＿＿よ。', ['らしい', 'ようだい', 'みたいな', 'そうに'], 'Apparently that shop closes next month.', 'Говорят, тот магазин закроется в следующем месяце.'],
    ['{彼|かれ}は{本当|ほんとう}に{男|おとこ}＿＿{人|ひと}だ。', ['らしい', 'っぽく', 'ような', 'そうな'], 'He is a really manly person.', 'Он настоящий мужчина.'],
    ['{子|こ}ども＿＿{遊|あそ}び{方|かた}', ['らしい', 'ように', 'そうに', 'みたい'], 'a childlike way of playing', 'по-детски (играть)'],
  ]),
  p('kawari-ni', '〜かわりに', ['instead of; in exchange for', 'вместо; взамен'], [
    ['Dictionary form / noun + の + かわりに: instead of. Also: in return (A, but in exchange B).', 'Словарная форма / сущ. + の + かわりに — вместо. А также: взамен.'],
  ], [
    ['{父|ちち}のかわりに{私|わたし}が{行|い}きます。', 'I will go instead of my father.', 'Я пойду вместо отца.'],
    ['{英語|えいご}を{教|おし}えるかわりに、{日本語|にほんご}を{教|おし}えてもらった。', 'In exchange for teaching English, I was taught Japanese.', 'В обмен на английский меня учили японскому.'],
  ], [
    ['{肉|にく}の＿＿に{豆腐|とうふ}を{使|つか}った。', ['かわり', 'ため', 'おかげ', 'せい'], 'I used tofu instead of meat.', 'Вместо мяса я использовал тофу.'],
    ['{料理|りょうり}をしない＿＿、{掃除|そうじ}をする。', ['かわりに', 'うちに', 'ように', 'ほどに'], 'Instead of cooking, I clean.', 'Вместо готовки я убираю.'],
    ['{会議|かいぎ}に{部長|ぶちょう}の＿＿{出|で}た。', ['かわりに', 'ばかりに', 'くせに', 'ことに'], 'I attended the meeting in place of the manager.', 'Я был на совещании вместо начальника.'],
  ]),
  p('okage-sei', '〜おかげで・〜せいで', ['thanks to / because of (blame)', 'благодаря / из-за (вина)'], [
    ['〜おかげで: a good result, with thanks. 〜せいで: a bad result, with blame.', '〜おかげで — хороший результат, с благодарностью. 〜せいで — плохой, с упрёком.'],
    ['Plain form / noun + の + おかげで / せいで.', 'Простая форма / сущ. + の + おかげで / せいで.'],
  ], [
    ['{先生|せんせい}のおかげで{合格|ごうかく}できました。', 'Thanks to my teacher, I passed.', 'Благодаря учителю я сдал.'],
    ['{雨|あめ}のせいで{試合|しあい}が{中止|ちゅうし}になった。', 'Because of the rain, the match was called off.', 'Из-за дождя матч отменили.'],
  ], [
    ['{友|とも}だちが{手伝|てつだ}ってくれた＿＿で、{早|はや}く{終|お}わった。', ['おかげ', 'せい', 'くせ', 'ばかり'], 'Thanks to my friend\'s help, I finished early.', 'Благодаря помощи друга я закончил рано.'],
    ['{寝坊|ねぼう}した＿＿で、{遅刻|ちこく}した。', ['せい', 'おかげ', 'ため', 'とおり'], 'Because I overslept, I was late.', 'Из-за того что проспал, опоздал.'],
    ['{薬|くすり}の＿＿で、よくなった。', ['おかげ', 'せい', 'くせ', 'わけ'], 'Thanks to the medicine, I got better.', 'Благодаря лекарству мне стало лучше.'],
  ]),
  p('kuse-ni', '〜くせに', ['even though (with scorn)', 'хотя (с упрёком, презрением)'], [
    ['Plain form / noun + の + くせに: like のに, but scolding the person.', 'Простая форма / сущ. + の + くせに — как のに, но с упрёком в адрес человека.'],
  ], [
    ['{知|し}っているくせに、{教|おし}えてくれない。', 'He knows, yet he won\'t tell me.', 'Знает же, а не говорит.'],
    ['{子|こ}どものくせに、{生意気|なまいき}だ。', 'For a child, he is too cheeky.', 'Ребёнок, а такой дерзкий.'],
  ], [
    ['{下手|へた}な＿＿に、{文句|もんく}ばかり{言|い}う。', ['くせ', 'ため', 'おかげ', 'かわり'], 'He is bad at it, yet he does nothing but complain.', 'Сам не умеет, а только жалуется.'],
    ['{自分|じぶん}でやると{言|い}った＿＿、やらない。', ['くせに', 'ために', 'うちに', 'ほどに'], 'He said he would do it himself, yet he doesn\'t.', 'Сказал, что сделает сам, а не делает.'],
    ['{大人|おとな}の＿＿、{泣|な}くなんて。', ['くせに', 'おかげで', 'かわりに', 'とおりに'], 'Crying, and you an adult!', 'Взрослый, а плачет!'],
  ]),
];
