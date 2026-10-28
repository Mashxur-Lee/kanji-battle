// "What's new" (main menu, bottom): the game version and what each patch changed — in English or Russian.
// A small "new" tag shows until you've opened it once after an update.
import { VERSION } from '../shared/version';
import { lang } from './i18n';

interface Patch { v: string; date: string; en: string[]; ru: string[] }

const PATCHES: Patch[] = [
  {
    v: '0.9.9.4.4.3', date: '2026-10',
    en: [
      '2D arenas repainted in more detail: soft light and shadow instead of outlines, fluffy clouds, snowy mountain peaks, leafy trees and bushes, ivy, brick walls and banners on the castle, lily pads in the swamp, fields around the villages — and no more film-grain filter.',
      'Menus: behind every screen except the main menu, the middle of the background is dimmed a little, so text and cards are easier to read.',
    ],
    ru: [
      '2D-арены перерисованы подробнее: мягкий свет и тени вместо контуров, пушистые облака, снежные вершины, лиственные деревья и кусты, плющ, кирпичные стены и знамёна замка, кувшинки на болоте, поля у деревень — и без «киношного» зерна.',
      'Меню: на всех экранах, кроме главного меню, центр фона немного затемнён — текст и карточки читаются легче.',
    ],
  },
  {
    v: '0.9.9.4.4.2', date: '2026-10',
    en: [
      'Battles use your own words: 1v1 Kanji Reading, Kanji Writing and Boss take the words of your levels from your All spells (random words fill up when you have too few) — marked ★ on the study cards.',
      '1v1 Rapid: the first 10 rounds are 5 words from each player’s All spells, and each round says whose word it is.',
      'Study spells: every card you answer gives +5 XP (up to 500 a day). The first few each day show “+5 XP”, then it stays quiet.',
      'Study spells: “learned today”, “learned in total” and today’s study XP are big tiles at the top, and the new-spells-a-day total is big too.',
      'New 2D arenas look: a painted style with fine grain — faceted mountains, outlined clouds, dense grass with little flowers, bark, stone brickwork — and the World Tree’s four rune stones now stand in every arena.',
      'Fixes: “← Leave room” looks like “← Menu”; the menu’s small buttons no longer overlap the menu on short screens; the quizzes have room under “← Study”.',
      'Reading passage stories can now be written by Google Gemini (free tier), Claude or any OpenAI-compatible AI — whichever key the server has.',
    ],
    ru: [
      'Бои — вашими словами: «Чтение кандзи», «Написание кандзи» и «Босс» берут слова ваших уровней из «Всех заклинаний» (если мало — добавляются случайные), на карточках подготовки они отмечены ★.',
      '1v1 Рапид: первые 10 раундов — по 5 слов из «Всех заклинаний» каждого игрока, и в каждом раунде видно, чьё это слово.',
      'Изучение заклинаний: каждая карточка даёт +5 опыта (до 500 в день). Первые несколько за день показывают «+5 XP», дальше — без отвлечений.',
      'Изучение заклинаний: «выучено сегодня», «выучено всего» и опыт за учёбу сегодня — крупные плитки вверху; общее число новых слов в день тоже крупное.',
      'Новый вид 2D-арен: рисованный стиль с лёгким зерном — гранёные горы, облака с контуром, густая трава с цветами, кора, каменная кладка — и четыре рунных камня Мирового древа теперь на каждой арене.',
      'Исправления: «← Покинуть комнату» выглядит как «← Меню»; маленькие кнопки меню больше не наезжают на меню на невысоких экранах; в тестах появилось место под «← Учёба».',
      'Рассказы для текста могут писать Google Gemini (бесплатный уровень), Claude или любой ИИ, совместимый с OpenAI, — смотря какой ключ есть на сервере.',
    ],
  },
  {
    v: '0.9.9.4.4.1', date: '2026-10',
    en: [
      'All spells: each level has its own − / + buttons (steps of 1), and nothing changes until you press Apply — it tells you how many words that adds today, so a misclick can’t flood your deck.',
      'Study spells: a tidier layout on PC — All spells on the left, the other three decks compact beside it, and the JLPT quiz, Onomatopoeia quiz and Reading passage as bright cards below. The “Words” buttons stand out.',
      'Onomatopoeia cards: the kind (擬態語 gitaigo …) is in a dark, readable colour on the card.',
      'Reading passage: one short story with all your words again — written for you by a small AI (when the server has it switched on), with furigana and translations. Without it, the words’ example sentences are used.',
      'Deck Duel: every instruction now says where the cards come from — both players’ All spells.',
      'PC: the interface keeps the same proportions on every monitor — a laptop and a big screen show the same layout, scaled to the screen. The UI size (70–100%) still makes everything smaller or bigger.',
      'Customize: the badges section sits on its own panel and is easy to read.',
      '2D arenas: the castle and the World Tree stand firmly on the ground, and the forest’s ground reaches the edges of the screen.',
    ],
    ru: [
      'Все заклинания: у каждого уровня свои кнопки − / + (шаг 1), и ничего не меняется, пока вы не нажмёте «Применить» — там видно, сколько слов добавится сегодня, так что случайное нажатие не завалит колоду.',
      'Изучение заклинаний: аккуратнее на ПК — «Все заклинания» слева, три другие колоды компактно рядом, а тест JLPT, тест по ономатопее и текст для чтения — яркими карточками внизу. Кнопки «Слова» стало хорошо видно.',
      'Карточки ономатопеи: вид (擬態語 гитайго …) теперь тёмным, хорошо читаемым цветом.',
      'Текст для чтения: снова один короткий рассказ со всеми вашими словами — его пишет небольшой ИИ (если он включён на сервере), с фуриганой и переводом. Без него используются примеры предложений.',
      'Дуэль колод: во всех инструкциях сказано, откуда берутся карты, — из «Всех заклинаний» обоих игроков.',
      'ПК: интерфейс сохраняет одинаковые пропорции на любом мониторе — ноутбук и большой экран показывают одну и ту же раскладку в масштабе экрана. Размер интерфейса (70–100%) по-прежнему делает всё меньше или больше.',
      'Настройка облика: раздел значков на своей панели, его легко читать.',
      '2D-арены: замок и Мировое древо твёрдо стоят на земле, а земля в лесу доходит до краёв экрана.',
    ],
  },
  {
    v: '0.9.9.4.4', date: '2026-10',
    en: [
      'Study spells: an ↶ Undo button (or Z) brings back the card you just answered — for a misclick or a wrong swipe.',
      'Study spells: swiping is more sensitive — a short drag or a quick flick is enough.',
      'Study spells: on a flipped card, tap any kanji (in the word or the example) for its meaning, on/kun readings and the parts it is built from. “🖼 Memory picture” draws the kanji with each part in its own colour, plus a short story that links the parts to the meaning (休 = a person 亻 leaning on a tree 木 → rest). Every kanji in the game has one.',
      'All spells: instead of ticks and one slider, each level has its own number — how many of its words are added a day (e.g. N5: 10, N3: 5).',
      'New deck: Onomatopoeia — 240+ giseigo, gitaigo and gijōgo (sounds, states and feelings), each marked with its kind, with an example sentence. 20 new cards a session.',
      'New: the Onomatopoeia quiz (between the JLPT quiz and the reading passage) — meanings, words, kinds and “which word fits the sentence”.',
      'Reading passage: now a screen of its own (centred on phones) instead of a window. Each blank sits in a real sentence for the word — no furigana over the blank, the context is the clue. Tap a word for its meaning; the box has a proper ✕.',
      'Deck Duel: the 20 cards you draft from come from both players’ All spells — 2 of each level from each of you (a random word if someone has none of that level). The colours (difficulty) are unchanged.',
      'Word lists: 9 words that were skipped because of notes like “(する)” are back — 結婚, 散歩, 掃除, 勉強, 練習, お金持ち, 回る, 回す, 生ける.',
      'Credits: kanji data from KANJIDIC2 (EDRDG) via kanji-data, and the kanji parts from KanjiVG.',
    ],
    ru: [
      'Изучение заклинаний: кнопка «↶ Отменить» (или Z) возвращает карточку, на которую вы только что ответили, — если промахнулись или свайпнули не туда.',
      'Изучение заклинаний: свайп стал чувствительнее — хватает короткого движения или быстрого взмаха.',
      'Изучение заклинаний: на перевёрнутой карточке нажмите на любой кандзи (в слове или в примере) — увидите значение, чтения он/кун и части, из которых он состоит. «🖼 Картинка-подсказка» рисует кандзи, раскрашивая каждую часть своим цветом, и даёт короткую историю, связывающую части со значением (休 = человек 亻 прислонился к дереву 木 → отдых). Она есть у каждого кандзи в игре.',
      'Все заклинания: вместо галочек и одного ползунка у каждого уровня своё число — сколько его слов добавлять в день (например, N5: 10, N3: 5).',
      'Новая колода: Ономатопея — больше 240 гисэйго, гитайго и гидзёго (звуки, состояния и чувства), у каждого указан вид и есть пример. По 20 новых карточек за занятие.',
      'Новое: тест по ономатопее (между тестом JLPT и текстом для чтения) — значения, слова, виды и «какое слово подходит к предложению».',
      'Текст для чтения: теперь отдельный экран (по центру на телефонах), а не окно. Каждый пропуск стоит в настоящем предложении с этим словом — без фуриганы над пропуском, подсказка — контекст. Нажмите на слово, чтобы узнать значение; у окошка есть нормальный ✕.',
      'Дуэль колод: 20 карт для драфта берутся из «Всех заклинаний» обоих игроков — по 2 каждого уровня от каждого (случайное слово, если у кого-то нет слов этого уровня). Цвета (сложность) не изменились.',
      'Списки слов: вернулись 9 слов, пропущенных из-за пометок вроде «(する)», — 結婚, 散歩, 掃除, 勉強, 練習, お金持ち, 回る, 回す, 生ける.',
      'Благодарности: данные о кандзи — KANJIDIC2 (EDRDG) через kanji-data, части кандзи — KanjiVG.',
    ],
  },
  {
    v: '0.9.9.4.3', date: '2026-10',
    en: [
      'Study spells: every word on every level (N5 to N1, 6,500+) now has an example sentence, with furigana — the reading in small hiragana above each kanji.',
      'Study spells: swiping a card right (Good / Easy) no longer lags on phones.',
      'Study spells: your whole due queue comes at once — no more “60 cards, then 50 more appear” after you finish.',
      'Friends see “Studying spells”, “Taking a JLPT quiz” or “Reading a passage” as your activity instead of “In the menus”.',
      'Daily challenge: the JLPT quiz counts at 7/10 or better, the reading passage at 4/8 or better.',
      'Reading passage: a red ✕ at the top right closes it, and reopening brings back the same story until you press “New story”. The JLPT quiz “← Study” button now looks like “← Menu”.',
      'Pop-up messages can be dismissed: click ✕ on PC, swipe them away on a phone. “You are offline” messages clear by themselves once you’re back online.',
      'Phones: screens and buttons are centred, the default UI size is 100%, and putting the app in the background no longer drops it into offline mode.',
      'Under the hood: patched Node.js security update (October 2026) and a newer desktop app engine.',
    ],
    ru: [
      'Изучение заклинаний: у каждого слова всех уровней (от N5 до N1, больше 6 500) теперь есть пример предложения с фуриганой — чтением мелкой хираганой над каждым кандзи.',
      'Изучение заклинаний: свайп карточки вправо («Хорошо» / «Легко») больше не тормозит на телефонах.',
      'Изучение заклинаний: вся очередь на повторение приходит сразу — больше никаких «60 карточек, а потом ещё 50».',
      'Друзья видят вашу активность «Изучает заклинания», «Проходит тест JLPT» или «Читает текст» вместо «В меню».',
      'Ежедневное испытание: тест JLPT засчитывается от 7/10, текст для чтения — от 4/8.',
      'Текст для чтения: красный ✕ в правом верхнем углу закрывает его, а при повторном открытии возвращается тот же рассказ, пока вы не нажмёте «Новый рассказ». Кнопка «← Учёба» в тесте JLPT теперь выглядит как «← Меню».',
      'Всплывающие сообщения можно закрыть: ✕ на ПК, свайпом на телефоне. Сообщения «Вы офлайн» исчезают сами, когда связь вернулась.',
      'Телефоны: экраны и кнопки по центру, размер интерфейса по умолчанию 100%, а сворачивание приложения больше не включает офлайн-режим.',
      'Внутри: обновление безопасности Node.js (октябрь 2026) и более новая версия движка для ПК-приложения.',
    ],
  },
  {
    v: '0.9.9.4.2', date: '2026-10',
    en: [
      'Kana: ひらがな (hiragana) and the new カタカナ (katakana) are two separate levels — only letters now: the basic ones, with ゛/゜ and every combination (きゃ, シュ …). Both work in Study spells and in every game mode, answered in romaji.',
      'Study spells: each answer shows an example sentence with the word marked, and its translation (N5 and N4 words for now — more levels coming).',
      'Study spells: swiping a card is instant — the next card no longer waits for the server, and losing the connection mid-session doesn’t freeze the buttons.',
      'Spell mastery: tiles with the word and a progress bar, like a kana chart; the kana levels are laid out as the kana table. Tap a tile for its reading and meaning (phones too). Kanji levels have filters and “show more”.',
      'Activity: a legend explains the shades (the brighter, the more you did that day); tap a day for its details.',
      'Reading passage: the word bank stays at the bottom while the story scrolls; no more “Add to…” on words that are already in your deck.',
      'Phones: the back button closes dialogs and goes back a screen; switching to another app no longer switches to offline mode; looking around by turning the phone works when it’s held upright too.',
      'Offline: when the server can’t be reached at sign-in, a “Play offline” button takes you straight in.',
      'Get the app: the real Windows and Android logos.',
    ],
    ru: [
      'Кана: ひらがな (хирагана) и новая カタカナ (катакана) — два отдельных уровня, теперь только буквы: основные, с ゛/゜ и все сочетания (きゃ, シュ …). Оба работают в «Изучать заклинания» и во всех режимах игры, ответ ромадзи.',
      'Изучение заклинаний: с каждым ответом показывается пример — предложение с выделенным словом и его перевод (пока для слов N5 и N4, другие уровни будут позже).',
      'Изучение заклинаний: карточки свайпаются мгновенно — следующая больше не ждёт сервер, а потеря связи посреди занятия не блокирует кнопки.',
      'Освоение заклинаний: плитки со словом и шкалой прогресса, как таблица каны; уровни каны выложены таблицей. Нажмите на плитку, чтобы увидеть чтение и значение (и на телефоне). У уровней кандзи есть фильтры и «показать ещё».',
      'Активность: легенда объясняет оттенки (чем ярче, тем больше вы сделали в тот день); нажмите на день, чтобы узнать подробности.',
      'Текст для чтения: банк слов остаётся внизу, а рассказ прокручивается; у слов, которые уже в вашей колоде, больше нет «Добавить в…».',
      'Телефоны: кнопка «Назад» закрывает окна и возвращает на предыдущий экран; переключение в другое приложение больше не включает офлайн-режим; осмотр поворотом телефона работает и когда он держится вертикально.',
      'Офлайн: если при входе сервер недоступен, кнопка «Играть без интернета» сразу пускает в игру.',
      '«Скачать приложение»: настоящие логотипы Windows и Android.',
    ],
  },
  {
    v: '0.9.9.4.1', date: '2026-10',
    en: ['Get the app: the Android download works from the installed game too (it stopped at 100% before) — then open Downloads and tap KanjiWizards.apk.'],
    ru: ['«Скачать приложение»: загрузка для Android работает и из установленной игры (раньше она останавливалась на 100%) — затем откройте «Загрузки» и нажмите KanjiWizards.apk.'],
  },
  {
    v: '0.9.9.4', date: '2026-10',
    en: [
      'Kanji Wizards is an app now: install it from the browser on any phone or PC (menu → Get the app), or download the Windows app (.exe) or the Android app (.apk) — no store needed.',
      'Offline mode: without internet you can still study spells, take the JLPT quiz, read passages, play the daily challenge, customize and look at your progress and match history. Everything syncs when you’re back online. Online queue and private games need internet.',
      'All dropdown menus are in the game’s style now.',
      'JLPT quiz: after every answer you see the whole word — kanji, reading and meaning — even when you got it right.',
      'Reading passages have six different stories: the school of magic, a trip to Kyoto, a detective case, a sea voyage, a journey to the Moon and a little café.',
      'Study spells: the “learned today” counter is readable.',
    ],
    ru: [
      'Kanji Wizards теперь приложение: установите его из браузера на любой телефон или ПК (меню → «Скачать приложение») или скачайте приложение для Windows (.exe) или Android (.apk) — магазин не нужен.',
      'Офлайн-режим: без интернета можно изучать заклинания, проходить тест JLPT, читать тексты, играть в ежедневное испытание, менять настройки и смотреть прогресс и историю матчей. Всё синхронизируется, когда интернет вернётся. Для онлайн-очереди и приватных игр нужен интернет.',
      'Все выпадающие меню теперь в стиле игры.',
      'Тест JLPT: после каждого ответа показывается слово целиком — кандзи, чтение и значение — даже если вы ответили верно.',
      'В текстах для чтения шесть разных историй: школа магии, поездка в Киото, детективное дело, морское путешествие, полёт на Луну и маленькое кафе.',
      'Изучение заклинаний: счётчик «выучено сегодня» хорошо виден.',
    ],
  },
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
