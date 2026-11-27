// 0.9.9.9.9.6: what the bot wizards say during a game of Kanji chess — in Japanese, every kanji with its reading
// ({漢字|かんじ}: shown as furigana, and each kanji can be tapped for its meaning), with English and Russian under it.
// Each has a voice of their own: the Goblin is cheeky (〜ぜ), the Knight honourable, the Witch playful (〜わ), the
// Wizard an old sage (〜じゃ).
import type { BotId } from './chess';

export type Moment = 'hello' | 'best' | 'good' | 'inaccuracy' | 'mistake' | 'blunder' | 'check' | 'take' | 'castle' | 'promote' | 'botWins' | 'botLoses' | 'draw';
export interface Line { jp: string; en: string; ru: string }

export const LINES: Record<BotId, Partial<Record<Moment, Line[]>>> = {
  goblin: {
    hello: [{ jp: 'ケケケ！{勝負|しょうぶ}だぜ！', en: 'Hehehe! Let\'s fight!', ru: 'Хе-хе-хе! Сразимся!' }],
    best: [{ jp: 'うっ、{上手|じょうず}だな…', en: 'Ugh, you\'re good…', ru: 'Ух, а ты хорош…' }, { jp: 'ずるいぞ！{完璧|かんぺき}な{手|て}だ！', en: 'No fair! A perfect move!', ru: 'Нечестно! Идеальный ход!' }],
    good: [{ jp: 'まあまあの{手|て}だな。', en: 'Not a bad move.', ru: 'Неплохой ход.' }, { jp: 'ふーん、{悪|わる}くないぜ。', en: 'Hmm, not bad.', ru: 'Хм, неплохо.' }],
    inaccuracy: [{ jp: 'ケケ、それでいいのか？', en: 'Heh, are you sure about that?', ru: 'Хе, ты уверен?' }],
    mistake: [{ jp: 'あれれ？{間違|まちが}えたな！', en: 'Oh? You slipped up!', ru: 'Ой? Ты ошибся!' }],
    blunder: [{ jp: 'やった！それ、もらうぜ！', en: 'Yes! I\'ll take that!', ru: 'Ура! Это я заберу!' }, { jp: 'ケケケ！{大|おお}きなミスだ！', en: 'Hehehe! A big blunder!', ru: 'Хе-хе! Большая ошибка!' }],
    check: [{ jp: '{王手|おうて}だぜ！{逃|に}げろ！', en: 'Check! Run!', ru: 'Шах! Беги!' }],
    take: [{ jp: 'いただき！', en: 'Mine now!', ru: 'Моё!' }],
    castle: [{ jp: 'お{城|しろ}に{隠|かく}れたな？', en: 'Hiding in your castle?', ru: 'Прячешься в замке?' }],
    promote: [{ jp: '{兵|へい}が{化|ば}けた！？', en: 'Your pawn changed?!', ru: 'Пешка превратилась?!' }],
    botWins: [{ jp: '{勝|か}った！{小鬼|こおに}の{勝|か}ちだ！', en: 'I won! The goblin wins!', ru: 'Я победил! Гоблин победил!' }],
    botLoses: [{ jp: 'くそー！{次|つぎ}は{負|ま}けないぞ！', en: 'Argh! I won\'t lose next time!', ru: 'Ах! В следующий раз не проиграю!' }],
    draw: [{ jp: '{引|ひ}き{分|わ}けか。つまんないな。', en: 'A draw? Boring.', ru: 'Ничья? Скучно.' }],
  },
  knight: {
    hello: [{ jp: '{正々堂々|せいせいどうどう}と{戦|たたか}おう。', en: 'Let us fight fair and square.', ru: 'Сразимся честно.' }],
    best: [{ jp: '{見事|みごと}だ。{最高|さいこう}の{一手|いって}だ。', en: 'Splendid. The finest move.', ru: 'Великолепно. Лучший ход.' }, { jp: 'なるほど、{強|つよ}い{手|て}だ。', en: 'I see — a strong move.', ru: 'Понятно — сильный ход.' }],
    good: [{ jp: '{良|よ}い{手|て}だ。', en: 'A good move.', ru: 'Хороший ход.' }, { jp: 'しっかりした{手|て}だな。', en: 'A solid move.', ru: 'Надёжный ход.' }],
    inaccuracy: [{ jp: 'もっと{良|よ}い{手|て}があったぞ。', en: 'There was a better move.', ru: 'Был ход получше.' }],
    mistake: [{ jp: 'その{手|て}は{危|あぶ}ないぞ。', en: 'That move is dangerous.', ru: 'Этот ход опасен.' }],
    blunder: [{ jp: '{残念|ざんねん}だが、それは{悪手|あくしゅ}だ。', en: 'I\'m sorry, but that is a bad move.', ru: 'Жаль, но это плохой ход.' }],
    check: [{ jp: '{王手|おうて}！{王|おう}を{守|まも}れ！', en: 'Check! Guard your king!', ru: 'Шах! Защищай короля!' }],
    take: [{ jp: 'その{駒|こま}、もらった。', en: 'I take that piece.', ru: 'Беру эту фигуру.' }],
    castle: [{ jp: '{城|しろ}を{固|かた}めたか。{賢|かしこ}い。', en: 'You strengthened your castle. Wise.', ru: 'Укрепил замок. Мудро.' }],
    promote: [{ jp: '{兵|へい}が{后|きさき}になったか！', en: 'Your pawn became a queen!', ru: 'Пешка стала ферзём!' }],
    botWins: [{ jp: '{勝負|しょうぶ}あり。{良|よ}い{戦|たたか}いだった。', en: 'The match is decided. A good fight.', ru: 'Партия решена. Хороший бой.' }],
    botLoses: [{ jp: '{参|まい}った。{君|きみ}の{勝|か}ちだ。', en: 'I yield. You win.', ru: 'Сдаюсь. Ты победил.' }],
    draw: [{ jp: '{引|ひ}き{分|わ}けだ。{互角|ごかく}だったな。', en: 'A draw. We were evenly matched.', ru: 'Ничья. Мы были равны.' }],
  },
  witch: {
    hello: [{ jp: 'ふふ、{魔法|まほう}の{一局|いっきょく}を{始|はじ}めましょう。', en: 'Hehe, let\'s begin a magical game.', ru: 'Хи-хи, начнём волшебную партию.' }],
    best: [{ jp: 'まあ、{素敵|すてき}な{手|て}ね！', en: 'Oh, what a lovely move!', ru: 'О, какой чудесный ход!' }, { jp: 'やるわね。{完璧|かんぺき}よ。', en: 'Not bad at all. Perfect.', ru: 'А ты умеешь. Идеально.' }],
    good: [{ jp: 'いい{手|て}ね。', en: 'A nice move.', ru: 'Хороший ход.' }, { jp: 'ふふ、{悪|わる}くないわ。', en: 'Hehe, not bad.', ru: 'Хи-хи, неплохо.' }],
    inaccuracy: [{ jp: 'あら、{少|すこ}し{惜|お}しいわね。', en: 'Oh, a little off.', ru: 'Ой, чуть-чуть не то.' }],
    mistake: [{ jp: 'その{手|て}、{後悔|こうかい}するわよ。', en: 'You\'ll regret that move.', ru: 'Ты пожалеешь об этом ходе.' }],
    blunder: [{ jp: 'あらあら、{大変|たいへん}！', en: 'Oh dear, oh dear!', ru: 'Ай-ай-ай, беда!' }, { jp: 'ふふふ、{罠|わな}にかかったわね。', en: 'Hehehe, you fell into my trap.', ru: 'Хи-хи, ты попал в ловушку.' }],
    check: [{ jp: '{王手|おうて}よ。どうする？', en: 'Check. What will you do?', ru: 'Шах. Что будешь делать?' }],
    take: [{ jp: 'これは{私|わたし}のものね。', en: 'This one is mine.', ru: 'Это теперь моё.' }],
    castle: [{ jp: 'お{城|しろ}で{守|まも}るのね。', en: 'Defending in your castle.', ru: 'Обороняешься в замке.' }],
    promote: [{ jp: '{兵|へい}の{変身|へんしん}ね！{魔法|まほう}みたい！', en: 'Your pawn transformed! Like magic!', ru: 'Пешка превратилась! Как волшебство!' }],
    botWins: [{ jp: '{私|わたし}の{勝|か}ちよ。また{遊|あそ}びましょう。', en: 'I win. Let\'s play again.', ru: 'Я победила. Сыграем ещё.' }],
    botLoses: [{ jp: 'まあ…{負|ま}けたわ。{強|つよ}いのね。', en: 'Oh… I lost. You\'re strong.', ru: 'Ох… я проиграла. Ты силён.' }],
    draw: [{ jp: '{引|ひ}き{分|わ}けね。{楽|たの}しかったわ。', en: 'A draw. That was fun.', ru: 'Ничья. Было весело.' }],
  },
  wizard: {
    hello: [{ jp: 'ほっほっ、{一局|いっきょく}{指|さ}そうかの。', en: 'Ho ho, shall we play a game?', ru: 'Хо-хо, сыграем партию?' }],
    best: [{ jp: '{素晴|すば}らしい。{名人|めいじん}の{手|て}じゃ。', en: 'Wonderful. A master\'s move.', ru: 'Прекрасно. Ход мастера.' }, { jp: 'ほう、{最善|さいぜん}の{手|て}じゃな。', en: 'Oh, the best move.', ru: 'О, лучший ход.' }],
    good: [{ jp: '{良|よ}い{判断|はんだん}じゃ。', en: 'Good judgement.', ru: 'Хорошее решение.' }, { jp: 'うむ、{筋|すじ}の{良|よ}い{手|て}じゃ。', en: 'Mm, a well-reasoned move.', ru: 'Мм, разумный ход.' }],
    inaccuracy: [{ jp: '{惜|お}しい。{他|ほか}の{手|て}も{考|かんが}えてみよ。', en: 'Close. Think about other moves too.', ru: 'Почти. Подумай и о других ходах.' }],
    mistake: [{ jp: 'ふむ、それは{失敗|しっぱい}じゃな。', en: 'Hmm, that was a mistake.', ru: 'Хм, это ошибка.' }],
    blunder: [{ jp: 'おっと、{大事|だいじ}な{駒|こま}を{忘|わす}れたな。', en: 'Oops, you forgot an important piece.', ru: 'Ой, ты забыл о важной фигуре.' }, { jp: '{焦|あせ}るでない。よく{見|み}るのじゃ。', en: 'Don\'t rush. Look carefully.', ru: 'Не спеши. Смотри внимательно.' }],
    check: [{ jp: '{王手|おうて}じゃ。', en: 'Check.', ru: 'Шах.' }],
    take: [{ jp: 'その{駒|こま}は{頂|いただ}くぞ。', en: 'I\'ll be taking that piece.', ru: 'Эту фигуру я возьму.' }],
    castle: [{ jp: '{城|しろ}に{王|おう}を{入|い}れたか。{基本|きほん}じゃな。', en: 'You put your king in the castle. The basics.', ru: 'Спрятал короля в замок. Основа основ.' }],
    promote: [{ jp: '{兵|へい}も{努力|どりょく}すれば{后|きさき}になる。', en: 'Even a pawn becomes a queen with effort.', ru: 'Даже пешка с усердием станет ферзём.' }],
    botWins: [{ jp: '{勝負|しょうぶ}あり。{経験|けいけん}の{差|さ}じゃ。', en: 'It is decided. The difference is experience.', ru: 'Решено. Разница в опыте.' }],
    botLoses: [{ jp: '{見事|みごと}じゃ！{弟子|でし}が{師|し}を{超|こ}えたな。', en: 'Splendid! The student surpassed the teacher.', ru: 'Великолепно! Ученик превзошёл учителя.' }],
    draw: [{ jp: '{引|ひ}き{分|わ}けじゃ。{良|よ}い{勝負|しょうぶ}じゃった。', en: 'A draw. It was a good match.', ru: 'Ничья. Это была хорошая партия.' }],
  },
  // (round 5) the Dragon (2400): ancient, proud, few words — 〜ぞ, 〜か
  dragon: {
    hello: [{ jp: '{小|ちい}さき{者|もの}よ。{我|われ}に{挑|いど}むか。', en: 'Little one. You dare challenge me?', ru: 'Малыш. Ты смеешь бросить мне вызов?' }],
    best: [{ jp: 'ほう……{悪|わる}くない。', en: 'Hm... not bad.', ru: 'Хм... неплохо.' }, { jp: '{見事|みごと}な{一手|いって}だ。{認|みと}めよう。', en: 'A fine move. I admit it.', ru: 'Отличный ход. Признаю.' }],
    good: [{ jp: 'まだ{戦|たたか}えるようだな。', en: 'You can still fight, it seems.', ru: 'Похоже, ты ещё можешь сражаться.' }],
    inaccuracy: [{ jp: '{甘|あま}いぞ。', en: 'Too soft.', ru: 'Слабовато.' }],
    mistake: [{ jp: 'その{隙|すき}、{見逃|みのが}さぬぞ。', en: 'I will not miss that opening.', ru: 'Эту брешь я не упущу.' }],
    blunder: [{ jp: '{愚|おろ}かな。{炎|ほのお}に{焼|や}かれるがいい。', en: 'Foolish. Burn in my fire.', ru: 'Глупо. Сгори в моём пламени.' }, { jp: '{千年|せんねん}{早|はや}いわ。', en: 'A thousand years too early.', ru: 'Тебе до этого ещё тысячу лет.' }],
    check: [{ jp: '{王手|おうて}。{逃|に}げられるか？', en: 'Check. Can you escape?', ru: 'Шах. Сможешь уйти?' }],
    take: [{ jp: 'その{駒|こま}、{喰|く}らってやろう。', en: 'I shall devour that piece.', ru: 'Я пожру эту фигуру.' }],
    castle: [{ jp: '{城|しろ}に{隠|かく}れても{無駄|むだ}だ。', en: 'Hiding in the castle is useless.', ru: 'Прятаться в замке бесполезно.' }],
    promote: [{ jp: '{兵|へい}が{后|きさき}に……{面白|おもしろ}い。', en: 'A pawn into a queen... interesting.', ru: 'Пешка в ферзя... интересно.' }],
    botWins: [{ jp: '{我|われ}は{竜|りゅう}。{敗|やぶ}れることはない。', en: 'I am the dragon. I do not lose.', ru: 'Я — дракон. Я не проигрываю.' }],
    botLoses: [{ jp: 'まさか……{人|ひと}の{子|こ}に{敗|やぶ}れるとは。', en: 'Impossible... beaten by a human child.', ru: 'Невозможно... побеждён человеческим дитя.' }],
    draw: [{ jp: '{引|ひ}き{分|わ}けか。{次|つぎ}は{無|な}いぞ。', en: 'A draw? There will be no next time.', ru: 'Ничья? В следующий раз так не будет.' }],
  },
};

/** a line for a moment (another one each time, when there are several) */
export function lineFor(bot: BotId, moment: Moment, rnd: () => number = Math.random): Line | null {
  const list = LINES[bot][moment];
  return list?.length ? list[Math.floor(rnd() * list.length)] : null;
}
/** a line's parts: plain text, or a kanji word with its reading */
export function parseLine(jp: string): Array<{ text: string; reading?: string }> {
  const out: Array<{ text: string; reading?: string }> = [];
  const re = /\{([^|}]+)\|([^}]+)\}/g;
  let last = 0;
  for (let m: RegExpExecArray | null; (m = re.exec(jp));) {
    if (m.index > last) out.push({ text: jp.slice(last, m.index) });
    out.push({ text: m[1], reading: m[2] });
    last = re.lastIndex;
  }
  if (last < jp.length) out.push({ text: jp.slice(last) });
  return out;
}
