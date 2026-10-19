// "What's new" (main menu, bottom): the game version and what each patch changed — in English or Russian.
// A small "new" tag shows until you've opened it once after an update.
import { VERSION } from '../shared/version';
import { lang } from './i18n';

interface Patch { v: string; date: string; en: string[]; ru: string[] }

const PATCHES: Patch[] = [
  {
    v: '0.9.9.3.4', date: '2026-10',
    en: [
      'Every mode is open from the start — Kanji Writing, the Boss fight and Deck Duel no longer wait for level 1.',
      'Reading passage: a much bigger window on PCs, with larger story text, furigana, word bank and meanings.',
      'JLPT quiz: the wrong answers now look like the right one — readings that share kana, kanji that share a character, meanings of the same kind.',
      'New achievement: Kingslayer — beat an admin in a battle.',
    ],
    ru: [
      'Все режимы открыты сразу — Написание кандзи, Битва с боссом и Дуэль колод больше не ждут 1 уровня.',
      'Текст для чтения: на ПК окно намного больше, текст, фуригана, банк слов и значения крупнее.',
      'Тест JLPT: неверные ответы теперь похожи на верный — чтения с общими каной, кандзи с общим иероглифом, значения того же типа.',
      'Новое достижение: Цареубийца — победите администратора в бою.',
    ],
  },
  {
    v: '0.9.9.3.3', date: '2026-10',
    en: [
      'Omnipotence has its own sound: a whoosh as your eyes close, a deep impact with a ringing chord as 究極能力 flashes, and a roar of fire as they open.',
      'Keeping your daily streak (all four tasks) now gives +500 XP.',
      'Stroke order: Replay works again.',
      'Customize: switching arenas in the 3D preview no longer stutters; the Omnipotence preview shows the first-person fire too; the 2D arena preview is bigger.',
      'Other players’ staffs are a bit smaller; the forest’s trees are taller (no more treetops in view).',
      'JLPT quiz: a single hiragana is asked by its romaji, with four real choices (no more one-choice or “hiragana / hiragana (voiced)” questions).',
      'Study spells: the yellow notices are readable on bright backgrounds.',
    ],
    ru: [
      'У Всемогущества свой звук: свист, когда глаза закрываются, глубокий удар со звенящим аккордом при вспышке 究極能力 и рёв пламени, когда они открываются.',
      'Сохранённая ежедневная серия (все четыре задания) теперь даёт +500 опыта.',
      'Порядок черт: кнопка «Повторить» снова работает.',
      'Настройка: переключение арен в 3D-предпросмотре больше не подтормаживает; предпросмотр Всемогущества показывает и огонь от первого лица; 2D-превью арены стало больше.',
      'Посохи других игроков чуть меньше; деревья в лесу выше (их верхушек больше не видно).',
      'Тест JLPT: отдельная хирагана спрашивается через ромадзи, с четырьмя настоящими вариантами (больше никаких вопросов с одним вариантом или «hiragana / hiragana (voiced)»).',
      'Учёба: жёлтые подсказки читаются на светлом фоне.',
    ],
  },
  {
    v: '0.9.9.3.2', date: '2026-10',
    en: [
      'Customize: Profile comes first, then Arena, Magic staff and Omnipotence. Arena and Omnipotence now have a live 3D preview (your character in the arena, or wrapped in your flames up close), with the 2D look beside it.',
      'Reading passage: choose which deck the story takes its words from, and add any word of the story to any of your decks.',
      'Study → Words: tap Spell, Reading, Meaning, Level, Added or Status to sort the list (again to reverse it).',
      'Omnipotence: the eyes now close the right way — fully shut, then open again.',
      'Deck Duel: no mode name over the table, slim scrollbars, and no hero picture in the lobby (you pick your hero in the game).',
      'Daily challenge: skipping words no longer adds 15 s each to your time, and words you unticked stay unticked when you come back.',
      'New-look checkboxes and scrollbars; the Archmage border animates on PCs with reduced animations too; turning your phone to look around is smoother and quicker.',
    ],
    ru: [
      'Настройка: сначала Профиль, затем Арена, Магический посох и Всемогущество. У Арены и Всемогущества теперь живой 3D-предпросмотр (ваш персонаж на арене или в своём пламени крупным планом), а рядом — 2D-вид.',
      'Текст для чтения: выбирайте колоду, из которой берутся слова, и добавляйте любое слово рассказа в любую колоду.',
      'Учёба → Слова: нажмите «Заклинание», «Чтение», «Значение», «Уровень», «Добавлено» или «Статус», чтобы отсортировать список (ещё раз — в обратном порядке).',
      'Всемогущество: глаза теперь закрываются правильно — полностью, а потом открываются.',
      '«Дуэль колод»: без названия режима над столом, тонкие полосы прокрутки и без картинки героя в лобби (героя выбирают в игре).',
      'Ежедневное испытание: пропуск слова больше не добавляет 15 с ко времени, а снятые галочки сохраняются, когда вы возвращаетесь.',
      'Новые флажки и полосы прокрутки; рамка «Архимаг» анимируется и на ПК с уменьшенной анимацией; осматриваться поворотом телефона стало плавнее и быстрее.',
    ],
  },
  {
    v: '0.9.9.3.1', date: '2026-10',
    en: [
      'Deck Duel Omnipotence: your eyes close, 究極能力 (“ultimate power”) flashes, and they open again in a burst of fire — and your opponent sees your character’s eyes blaze (Goblin red, Witch purple, Wizard blue, Knight red). In every mode, eyes glow while you are on fire.',
      'Deck Duel on phones: your cards and Omnipotence are right under the table; your kanji, the turn log and the chat are foldable sections below (a dot shows a new chat message). The mode name no longer covers the Omnipotence button.',
      'Avatar borders are bolder, and there is a new platinum Beta border with a BETA tag for everyone who finished the tutorial.',
      'Admins can delete accounts.',
      'The menu’s two wizards stand in the middle of the screen; no more swaying grass in the 2D arenas, and no dragon flying over the castle.',
    ],
    ru: [
      'Всемогущество в «Дуэли колод»: ваши глаза закрываются, вспыхивает 究極能力 («высшая сила»), и они открываются в огне — а соперник видит, как горят глаза вашего героя (Гоблин — красным, Ведьма — фиолетовым, Волшебник — синим, Рыцарь — красным). Во всех режимах глаза светятся, когда вы в огне.',
      '«Дуэль колод» на телефоне: ваши карты и Всемогущество сразу под столом; ваши кандзи, журнал ходов и чат — сворачиваемые разделы ниже (точка — новое сообщение). Название режима больше не закрывает кнопку Всемогущества.',
      'Рамки аватара стали толще, и появилась новая платиновая рамка Beta с надписью BETA для всех, кто прошёл обучение.',
      'Админы могут удалять аккаунты.',
      'Два волшебника в меню стоят посередине экрана; трава в 2D-аренах больше не качается, и над замком не летает дракон.',
    ],
  },
  {
    v: '0.9.9.3', date: '2026-10',
    en: [
      'New 2D art: the Wizard, Witch, Knight, Goblin, Apprentice and Adventurer, the Black Dragon and every staff are painted after the concept sheets (no more pixels), and all five arenas are repainted to match the 3D ones — with a stone arena the fighters stand on, by day, sunset and night.',
      'Daily streak: a day now counts when you do four tasks — study 10 spells, a JLPT quiz, the daily challenge and a reading passage. You see them when you log in (tick “don’t show again” to stop it), on the menu and in your profile card.',
      'Reading passage: your words are blanks now — fill them from the word bank under the story (the furigana is your clue), then check your score. Every word of the story can be tapped for its meaning.',
      'Study: swipe the flashcard like in Quizlet — far left Again, left Hard, right Okay, far right Easy.',
      'After a game (and the daily challenge) the words you missed are red cards again, pre-ticked with a small tick in the corner; tap a card to keep it out of your deck.',
      'Customize → Profile: avatar borders (levels 1, 5, 10, 15) and your badges, with a preview. When you unlock something, the menu shows it with OK and Equip.',
      'Battles: the clock, Forfeit and Pause sit together at the top centre (the mode name moved to the bottom left); no more grey box round the HP bars.',
      'Phones: turn or tilt your phone to look around the 3D arena, like moving the mouse.',
      'Fixes: the Goblin’s and Knight’s hands are visible; menu text is readable on bright day scenes; What’s new shows the latest 3 updates.',
    ],
    ru: [
      'Новая 2D-графика: Волшебник, Ведьма, Рыцарь, Гоблин, Ученик и Искатель приключений, Чёрный дракон и все посохи нарисованы по концепт-артам (без пикселей), а все пять арен перерисованы под 3D — с каменной ареной, на которой стоят бойцы, днём, на закате и ночью.',
      'Ежедневная серия: день засчитывается, когда выполнены четыре задания — изучить 10 заклинаний, тест JLPT, ежедневное испытание и текст для чтения. Задания показываются при входе (отметьте «не показывать», чтобы отключить), в меню и в карточке профиля.',
      'Текст для чтения: ваши слова теперь пропущены — заполните их из списка под рассказом (подсказка — фуригана) и проверьте результат. Любое слово рассказа можно нажать, чтобы увидеть значение.',
      'Учёба: смахивайте карточку, как в Quizlet — далеко влево «Снова», влево «Трудно», вправо «Нормально», далеко вправо «Легко».',
      'После игры (и ежедневного испытания) пропущенные слова снова красные карточки с маленькой галочкой в углу; нажмите на карточку, чтобы не добавлять слово в колоду.',
      'Настройка → Профиль: рамки аватара (уровни 1, 5, 10, 15) и ваши значки с предпросмотром. Когда что-то открывается, меню показывает это с кнопками «ОК» и «Надеть».',
      'Бой: часы, «Сдаться» и «Пауза» вместе вверху по центру (название режима — внизу слева); серой рамки вокруг полос HP больше нет.',
      'Телефоны: поворачивайте или наклоняйте телефон, чтобы осматривать 3D-арену, как мышью.',
      'Исправления: руки Гоблина и Рыцаря видны; текст меню читается на ярких дневных сценах; «Что нового» показывает 3 последних обновления.',
    ],
  },
  {
    v: '0.9.9.2', date: '2026-10',
    en: [
      'New low-poly Wizard, Knight and Goblin, after their concept sheets: sculpted faces, the Wizard’s long beard, blue cloak and gold-trimmed robes, the Knight’s great helm, red plume, tabard and sword on his back, the Goblin’s long ears, red scarf, straps and wrapped legs.',
      'The Witch is brighter (you can see her on the night arenas now), and her hat brim and sleeve no longer cut through her staff: every character holds the staff leaning out and forward.',
      'Verdant staff: no more spike poking up between the branches.',
      'Results screen: the words you missed come pre-ticked for Struggling spells, and unticking one keeps it out (it is removed if it was already added).',
    ],
    ru: [
      'Новые низкополигональные Волшебник, Рыцарь и Гоблин по концепт-артам: вылепленные лица, длинная борода, синий плащ и мантия с золотым узором у Волшебника, топхельм, красный плюмаж, сюрко и меч за спиной у Рыцаря, длинные уши, красный шарф, ремни и обмотки у Гоблина.',
      'Ведьма стала светлее (её видно на ночных аренах), а поля шляпы и рукав больше не проходят сквозь посох: все персонажи держат посох с наклоном наружу и вперёд.',
      'Посох Verdant: между ветвями больше не торчит шип.',
      'Экран итогов: пропущенные слова отмечены для «Трудных заклинаний», и если снять галочку, слово туда не попадёт (или будет удалено, если уже добавлено).',
    ],
  },
  {
    v: '0.9.9.1', date: '2026-10',
    en: [
      'Unlocks are earned again (the closed beta is over), but easier: Kanji Writing, the Boss fight and Deck Duel open at level 1; backgrounds at levels 3 / 5 / 8 / 10; staffs at a 3 / 5 / 8 / 10-day login streak.',
      'A new Witch: a tall, low-poly witch after her concept art — a sculpted face with painted eyes, brows and lips, a wide hat with a crescent moon, long wavy hair, open coat with bell sleeves and a pointed hem, heeled boots.',
      'Verdant staff: the branches now rise out of the shaft and curl in over the orb (no more cut end or tips sticking out).',
      'The rotating kanji circle is back under the fighters in every 3D arena; the orange V on the Plains is gone; the Castle’s warriors now fight each to their own rhythm.',
      '“← Menu” is a clear button at the top left of every page; the Study spells cards are centred; Back to lobby no longer covers the Preparation title; the Challenge mode list fits inside the profile card.',
    ],
    ru: [
      'Награды снова нужно заслужить (закрытый бета-тест окончен), но проще: Написание кандзи, Битва с боссом и Дуэль колод открываются на уровне 1; фоны — на уровнях 3 / 5 / 8 / 10; посохи — за серию входов 3 / 5 / 8 / 10 дней.',
      'Новая Ведьма: высокая low-poly ведьма по концепт-арту — вылепленное лицо с нарисованными глазами, бровями и губами, широкая шляпа с полумесяцем, длинные волнистые волосы, открытое пальто с рукавами-колоколами и зубчатым подолом, сапоги на каблуках.',
      'Посох Листвы: ветви теперь растут из древка и загибаются над сферой (больше не торчат и не видно среза).',
      'Вращающийся круг с кандзи снова под бойцами на всех 3D-аренах; оранжевая «V» на Равнинах убрана; воины у Замка теперь сражаются каждый в своём ритме.',
      '«← Меню» — заметная кнопка слева вверху на каждой странице; карточки «Изучать заклинания» по центру; «Назад в лобби» больше не закрывает заголовок «Подготовка»; список режимов для вызова помещается в карточке профиля.',
    ],
  },
  {
    v: '0.9.9', date: '2026-10',
    en: [
      'Study: All, Struggling and Custom spells are three separate decks. Open any deck to see every word, when it was added, and remove words.',
      'Custom spells: add words from the dictionary (search by kanji, kana or meaning) or type in your own word with its reading and meaning.',
      'After a game you choose which deck the words you missed go to (pre-ticked: Struggling spells) — or untick them.',
      'New in Study: a JLPT-style quiz from the spells you studied, and a reading passage — a short story with your struggling words, with furigana, readings and meanings.',
      'New spells a day: pick 10–150 (was always 25).',
      'Deck Duel: a turn log under your kanji (who played what, hits, heals, misses, powers), a big turn timer that turns red, no more scrolling on smaller screens, and a longer look at the answer in overtime.',
      'Big round turn timers in every mode, a red Forfeit button, and the same big “Back to lobby” button everywhere — plus Back to lobby and Main menu on the results screen.',
      'Profiles: show up to 3 achievement badges under your name (Progress → click a badge). Add friend from anyone’s profile, and Challenge a friend to any mode.',
      'Boss Elimination: holding out until the time runs out is now a victory.',
      'Fixes: pausing no longer revives downed teammates or loses your combo; the beginner AI fight no longer runs out of time (HP is balanced to ~18 hits at every level); Rapid in the online queue finds a partner even without a level in common; writing on iPhone no longer scrolls the page.',
      'Closed beta: every mode, staff, flame and arena is open from level 1. Admins can make other players admins.',
      'The tutorial starts by asking for your language, and its window is bigger.',
      'New 3D magic staffs (Verdant, Ember, Tide, Storm, Void — each with its own animation) and five new 3D arenas: Forest, Swamp, Plains, Castle and World Tree, with painted skies, moving trees, water, flags and fireflies.',
      'Full 3D: the mouse now turns your head instead of sliding the camera — and the other players see your character look where you look. Lite keeps the lighter parallax.',
    ],
    ru: [
      'Учёба: «Все», «Трудные» и «Свои» заклинания — теперь три отдельные колоды. Откройте любую, чтобы увидеть все слова, дату добавления и удалить лишние.',
      'Свои заклинания: добавляйте слова из словаря (поиск по кандзи, кане или значению) или вводите своё слово с чтением и значением.',
      'После игры вы сами выбираете, в какую колоду пойдут слова с ошибками (по умолчанию — «Трудные»), или снимаете галочки.',
      'Новое в учёбе: тест в стиле JLPT по изученным заклинаниям и текст для чтения — короткий рассказ с вашими трудными словами, с фуриганой, чтениями и значениями.',
      'Новых заклинаний в день: от 10 до 150 (раньше всегда 25).',
      'Дуэль колод: журнал ходов под списком кандзи (кто что сыграл, удары, лечение, промахи, силы), большой таймер хода, краснеющий в конце, без прокрутки на небольших экранах и больше времени посмотреть ответ в овертайме.',
      'Большие круглые таймеры во всех режимах, красная кнопка «Сдаться» и одинаковая большая кнопка «Назад в лобби» везде — а на экране итогов ещё «Назад в лобби» и «Главное меню».',
      'Профили: до 3 значков достижений под вашим именем (Прогресс → нажмите на значок). «Добавить в друзья» в любом профиле и «Вызов» другу в любой режим.',
      'Устранение босса: продержаться до конца времени — теперь победа.',
      'Исправления: пауза больше не поднимает павших союзников и не сбрасывает комбо; бой с ИИ-новичком больше не кончается по времени (HP рассчитано на ~18 попаданий на любом уровне); «Блиц» в онлайн-очереди находит соперника даже без общего уровня; письмо на iPhone больше не прокручивает страницу.',
      'Закрытый бета-тест: все режимы, посохи, пламя и арены открыты с 1 уровня. Админы могут назначать других админов.',
      'Обучение начинается с выбора языка, а его окно стало больше.',
      'Новые 3D-посохи (Листвы, Углей, Прилива, Бури, Пустоты — у каждого своя анимация) и пять новых 3D-арен: Лес, Болото, Равнины, Замок и Мировое древо — с рисованным небом, качающимися деревьями, водой, флагами и светлячками.',
      'Полное 3D: мышь теперь поворачивает голову, а не сдвигает камеру, — и другие игроки видят, куда смотрит ваш персонаж. В лёгком режиме остаётся параллакс.',
    ],
  },
  {
    v: '0.9.8.5', date: '2026-10',
    en: ['Feedback button (bug reports and suggestions) and an admin Inbox; automatic error reports; admin Stats.', '“N online” on the Online queue button.', 'Word meanings in Russian.', 'Levels: stroke count first, JLPT level as a smaller weight.', 'About: credits, licences and privacy.'],
    ru: ['Кнопка «Отзыв» (ошибки и предложения) и «Входящие» у админа; автоматические отчёты об ошибках; статистика.', '«N в сети» на кнопке онлайн-очереди.', 'Значения слов на русском.', 'Уровни: сначала число черт, уровень JLPT — с меньшим весом.', '«Об игре»: благодарности, лицензии и конфиденциальность.'],
  },
  {
    v: '0.9.8.3', date: '2026-10',
    en: ['No more critical hits.', 'Kana are printed in their own cells on the writing pad.', 'AI players use random staffs and flames.', 'Pause button next to Forfeit.'],
    ru: ['Критических ударов больше нет.', 'Кана печатается в своих клетках на панели письма.', 'ИИ-игроки получают случайные посохи и пламя.', 'Кнопка паузы рядом с «Сдаться».'],
  },
  {
    v: '0.9.8.2', date: '2026-10',
    en: ['Pause games against the AI.', 'Daily challenge results show right and wrong words; missed ones go to Struggling spells.', 'The phone keyboard no longer hides the arena.'],
    ru: ['Пауза в играх против ИИ.', 'Итоги ежедневного испытания показывают верные и неверные слова; ошибки идут в «Трудные».', 'Клавиатура телефона больше не закрывает арену.'],
  },
  {
    v: '0.9.8.1', date: '2026-10',
    en: ['20 achievements with a celebration when you earn one.', 'A battle keyboard for phones.', 'Friends button on phones.'],
    ru: ['20 достижений с анимацией при получении.', 'Боевая клавиатура для телефонов.', 'Кнопка друзей на телефонах.'],
  },
];

const SEEN = 'kb:seenVersion';
const el = (tag: string, cls = '', text?: string) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };

export function initWhatsNew() {
  const dot = document.getElementById('newsDot')!;
  let seen = '';
  try { seen = localStorage.getItem(SEEN) ?? ''; } catch { /* private mode */ }
  dot.hidden = seen === VERSION;
  document.getElementById('newsBtn')!.onclick = () => {
    const ru = lang() === 'ru';
    document.getElementById('newsVersion')!.textContent = `v${VERSION}`;
    document.getElementById('newsBody')!.replaceChildren(...PATCHES.slice(0, 3).map((p, i) => {
      const sec = el('section', 'news-patch' + (i === 0 ? ' latest' : ''));
      const head = el('h4', '', `${p.v}${p.v === VERSION ? (ru ? ' — сейчас' : ' — current') : ''}`);
      const ul = el('ul');
      for (const line of ru ? p.ru : p.en) ul.append(el('li', '', line));
      sec.append(head, ul);
      return sec;
    }));
    (document.getElementById('newsDialog') as HTMLDialogElement).showModal();
    try { localStorage.setItem(SEEN, VERSION); } catch { /* private mode */ }
    dot.hidden = true;
  };
  document.getElementById('newsClose')!.onclick = () => (document.getElementById('newsDialog') as HTMLDialogElement).close();
}
