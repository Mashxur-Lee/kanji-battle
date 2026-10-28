// Language: English (default) or Russian (Settings → Language). Dates always follow the chosen
// language — never the browser's — so a Russian Chrome no longer shows Russian dates in English UI.
//
// Russian works as a translation layer over the English UI: every text node (and placeholder / title /
// aria-label) that matches a known English string — exactly, or by a pattern for texts with numbers
// and names in them — is swapped for its Russian version, also as the page changes. Japanese text
// (lang="ja") is left alone; the words' English meanings are swapped from public/meanings-ru.json.
// Anything not in the dictionary stays English, so a missing line never breaks the page.

export type Lang = 'en' | 'ru';
const KEY = 'kb:lang';

export function lang(): Lang {
  try { return localStorage.getItem(KEY) === 'ru' ? 'ru' : 'en'; } catch { return 'en'; }
}
/** The locale for dates and times. */
export const locale = () => (lang() === 'ru' ? 'ru-RU' : 'en-US');
export function setLang(l: Lang) {
  try { localStorage.setItem(KEY, l); } catch { /* private mode */ }
  location.reload(); // simplest way to redraw every screen in the new language
}

// ── the Russian dictionary ──────────────────────────────────────────────────
const RU: Record<string, string> = {
  // top bar, profile, settings
  'admin': 'админ', 'crit today': 'крит сегодня', 'wins': 'победы', 'losses': 'поражения', 'win rate': 'доля побед',
  'spells learned': 'выучено заклинаний', 'learned today': 'выучено сегодня', 'login streak (days)': 'серия входов (дни)',
  'best streak (days)': 'лучшая серия (дни)', 'Change picture': 'Сменить фото', 'Remove picture': 'Удалить фото', '⎋ Log out': '⎋ Выйти',
  '♪ Music': '♪ Музыка', 'Effects': 'Эффекты', 'Voice (word on a correct cast)': 'Голос (слово при верном ответе)',
  '3D arena': '3D-арена', 'Full': 'Полная', 'Lite (phones, older PCs)': 'Лёгкая (телефоны, старые ПК)', 'Off (2D)': 'Выкл. (2D)',
  'UI size': 'Размер интерфейса', 'Language': 'Язык', 'Close': 'Закрыть', 'Audio': 'Звук', 'Music': 'Музыка', 'Sounds': 'Звуки', 'Volume': 'Громкость',
  'Your profile': 'Ваш профиль', 'XP to next level': 'Опыт до следующего уровня', 'PNG, JPEG or WebP': 'PNG, JPEG или WebP',
  'Profile picture updated': 'Фото профиля обновлено', 'Could not use that picture': 'Не удалось использовать это фото',
  'Please pick an image': 'Выберите изображение', 'Could not read that image': 'Не удалось прочитать изображение',
  'Your browser has no WebGL — the classic 2D view is used.': 'В браузере нет WebGL — используется классический 2D-вид.',
  'First-person duel arena (move the mouse to look around). On a phone held upright it is a band above the question. Lite is lighter on phones and older computers.': 'Арена от первого лица (двигайте мышь, чтобы осмотреться). На телефоне в вертикальном положении — полоса над вопросом. «Лёгкая» — для телефонов и старых компьютеров.',
  'This screen is too small for the 3D arena — the classic 2D view is used.': 'Экран слишком мал для 3D-арены — используется классический 2D-вид.',
  '3D was slow — lowered its resolution. Settings → 3D arena → Off for the 2D view.': '3D тормозило — разрешение снижено. Настройки → 3D-арена → Выкл. для 2D-вида.',
  '3D was slow on this device — switched to Lite (Settings → 3D arena).': '3D тормозило на этом устройстве — включена лёгкая версия (Настройки → 3D-арена).',

  // auth
'Study ten spells. Then cast them from memory.': 'Выучи десять заклинаний. Потом произнеси их по памяти.',
  'Log in': 'Войти', 'Register': 'Регистрация', 'Login': 'Логин', 'Password': 'Пароль', 'Create account': 'Создать аккаунт',
  'Login: 3–16 letters, numbers or _. Password: at least 6 characters.': 'Логин: 3–16 букв, цифр или _. Пароль: не меньше 6 символов.',
  'Server unreachable — try again in a moment.': 'Сервер недоступен — попробуйте чуть позже.',
  'Wrong username or password': 'Неверный логин или пароль', 'That username is taken': 'Это имя уже занято',
  'Too many attempts — wait a minute': 'Слишком много попыток — подождите минуту', 'Please log in': 'Пожалуйста, войдите',
  'Please log in again': 'Пожалуйста, войдите снова', 'This account has been banned': 'Этот аккаунт заблокирован',
  'Password: at least 6 characters': 'Пароль: не меньше 6 символов', 'Server error': 'Ошибка сервера', 'Something went wrong': 'Что-то пошло не так',

  // menu
  '← Menu': '← Меню', 'Online queue': 'Онлайн-очередь',
  "Tick what you'd like to play. You'll be matched with the first player who wants the same, and the game starts straight away. Boss Elimination waits for a full party of 4.":
    'Отметьте, во что хотите играть. Вас сведут с первым игроком, который хочет того же, и игра начнётся сразу. Битва с боссом ждёт полный отряд из 4 игроков.',
  'Battle modes': 'Режимы', 'Your levels': 'Ваши уровни', 'Deck Duel': 'Дуэль колод',
  'Queued on its own. No levels to pick: the cards come from N5 to N1.': 'Отдельная очередь. Уровни не выбираются: карты от N5 до N1.',
  'Start queue': 'Начать поиск', 'Start queue — Deck Duel': 'Начать поиск — Дуэль колод', 'Searching for a player…': 'Поиск игрока…', 'Cancel': 'Отмена',
  'Study struggling spells': 'Повторить трудные заклинания', 'Private game': 'Своя игра',
  "Play with friends: create a room and share its code, or enter a friend's code.": 'Играйте с друзьями: создайте комнату и поделитесь кодом или введите код друга.',
  'Create room': 'Создать комнату', 'Join': 'Войти', 'Daily challenge': 'Ежедневное испытание', 'new': 'новое',
  'Study spells': 'Изучать заклинания', 'Customize': 'Кастомизация', 'Progress': 'Прогресс', 'Friends': 'Друзья',
  'Match history': 'История матчей', 'Users': 'Игроки', 'How to play?': 'Как играть?', 'How to play': 'Как играть',
  'Tick at least one mode': 'Отметьте хотя бы один режим', 'Tick at least one level': 'Отметьте хотя бы один уровень',
  'Room codes have 4 letters': 'Код комнаты — 4 буквы', 'What to queue for': 'Во что искать игру', 'CODE': 'КОД', 'Room code': 'Код комнаты',
  'Choose a game mode': 'Выберите режим',
  '1v1 Kanji Reading': '1 на 1: Чтение кандзи', '1v1 Kanji Writing': '1 на 1: Написание кандзи', 'Boss Elimination': 'Битва с боссом',
  '1v1 Rapid': '1 на 1: Блиц',
  'Study, then see the kanji and type its reading. Your own stream of spells.': 'Выучите слова, затем увидите кандзи и напишите чтение. У каждого свой поток заклинаний.',
  'No study. Same kanji for both — first to type the reading (かな or romaji) hits.': 'Без подготовки. Один кандзи на двоих — кто первым напишет чтение (かな или ромадзи), тот и бьёт.',
  'Look at the kanji, press CAST! — it vanishes, and you write it from memory, by hand on the pad or with a Japanese keyboard.': 'Посмотрите на кандзи, нажмите CAST! — он исчезнет, и вы напишете его по памяти: от руки на панели или японской клавиатурой.',
  'Up to 4 players vs the Black Dragon. Mistakes get you clawed; it breathes fire every 30 s.': 'До 4 игроков против Чёрного дракона. За ошибки он бьёт когтями, а каждые 30 с дышит огнём.',
  "Pick a hero, draft 10 face-down spell cards, then cast them turn by turn: read the meaning, look at the kanji, write it from memory. Mana, heals and your hero's Omnipotence.":
    'Выберите героя, наберите 10 закрытых карт заклинаний и разыгрывайте их по очереди: прочитайте значение, посмотрите на кандзи, напишите по памяти. Мана, лечение и Всемогущество героя.',
  'Unlocks at level 1': 'Откроется на уровне 1', 'Unlocks at level 2': 'Откроется на уровне 2',

  // progress / daily / friends / history
  'Activity': 'Активность', 'Spell mastery': 'Освоение заклинаний', 'every word of each level — hover a square to see it': 'каждое слово каждого уровня — наведите на клетку, чтобы увидеть его',
  "Today's leaderboard": 'Таблица лидеров за сегодня', '↻ Refresh': '↻ Обновить', 'Activity over the last 26 weeks': 'Активность за последние 26 недель',
  'This week': 'Эта неделя', 'days active': 'активных дней', 'cards passed': 'карточек пройдено', 'Not in your spells yet': 'Ещё нет в ваших заклинаниях',
  'Nobody has played today yet — be the first!': 'Сегодня ещё никто не играл — будьте первым!', 'Ten words, the same for everyone today': 'Десять слов, сегодня одни и те же для всех',
  'Start': 'Начать', 'Continue': 'Продолжить', 'Skip': 'Пропустить', 'reading (かな or romaji)': 'чтение (かな или ромадзи)',
  'Start the challenge first': 'Сначала начните испытание',
  'Add players by name. When you\'re in a room\'s lobby, you can invite online friends straight in.':
    'Добавляйте игроков по имени. В лобби комнаты можно сразу пригласить друзей онлайн.',
  'Add friend': 'Добавить в друзья', 'Player name': 'Имя игрока', 'wants to be friends': 'хочет дружить', 'request sent': 'запрос отправлен',
  'Sent requests': 'Отправленные запросы', 'No friends yet — add someone by their player name above.': 'Друзей пока нет — добавьте кого-нибудь по имени выше.',
  'Accept': 'Принять', 'Decline': 'Отклонить', 'Remove': 'Удалить', 'Online': 'В сети', 'Offline': 'Не в сети',
  'Invite friends': 'Пригласить друзей', 'Invite': 'Пригласить', 'Invite again': 'Пригласить снова', 'In a game': 'В игре',
  'They are playing — invite them when their game is over': 'Друг играет — пригласите его, когда игра закончится',
  'No player with that name': 'Нет игрока с таким именем', 'Type a player name': 'Введите имя игрока', 'Your friend is offline': 'Ваш друг не в сети',
  'Your friend is already in this room': 'Ваш друг уже в этой комнате', 'You can only invite friends': 'Приглашать можно только друзей',
  'Your last 15 games. Open one to see its results again; click a name to see that player\'s profile.': 'Ваши последние 15 игр. Откройте игру, чтобы снова увидеть результаты; нажмите на имя, чтобы открыть профиль игрока.',
  'No matches yet — your finished games will show up here.': 'Матчей пока нет — здесь появятся ваши сыгранные игры.',
  '← Back to match history': '← К истории матчей', 'View profile': 'Профиль', 'Player profile': 'Профиль игрока',

  // study
  'Spaced repetition like Anki. Your crit chance starts every day at': 'Интервальные повторения, как в Anki. Шанс крита каждый день начинается с',
  '; every spell you learn today adds': '; каждое выученное сегодня заклинание добавляет',
  '(×1.5 damage, max 50%). It resets at midnight.': '(урон ×1.5, максимум 50%). Сбрасывается в полночь.',
  'All spells': 'Все заклинания', 'Tick levels — 25 new random words are added every day.': 'Отметьте уровни — каждый день добавляется 25 новых случайных слов.',
  'Study': 'Учить', 'Struggling spells': 'Трудные заклинания', 'Struggling': 'Трудные', 'Words you missed in battles land here automatically.': 'Слова, на которых вы ошиблись в боях, попадают сюда автоматически.',
  '← Study': '← Заклинания', 'Stroke order': 'Порядок черт', 'Show answer': 'Показать ответ', 'Space': 'Пробел',
  'Again': 'Снова', 'Hard': 'Трудно', 'Okay': 'Нормально', 'Easy': 'Легко', 'All done for now': 'На сейчас всё',
  'Come back later — cards return when they are due.': 'Возвращайтесь позже — карточки вернутся, когда придёт их время.', 'Back to study': 'Назад к изучению',
  'new spells added': 'добавлено новых заклинаний', 'Learned spells / study set size': 'Выучено заклинаний / размер набора',
  'Tick one or more levels under “All spells” to get 25 new spells today (and every day).': 'Отметьте один или несколько уровней в «Все заклинания», чтобы получать 25 новых заклинаний сегодня (и каждый день).',

  // customize
  'Magic staff': 'Магический посох', 'Arena': 'Арена', 'Omnipotence': 'Всемогущество', 'Equip': 'Надеть', 'Unlocked': 'Открыто', '✓ Equipped': '✓ Надето',
  'What to customize': 'Что настроить', 'Staff preview': 'Просмотр посоха', 'Time of day': 'Время суток',
  'Day': 'День', 'Sunset': 'Закат', 'Night': 'Ночь', 'Cycle': 'Цикл',
  'Omnipotence: the flames of a 5× combo in battle, and of your Omnipotence (hero power) in Deck Duel. More colours unlock as you level up.':
    'Всемогущество: пламя комбо ×5 в бою и вашего Всемогущества (силы героя) в Дуэли колод. Новые цвета открываются с уровнем.',
  'Wraps you at 5 correct casts in a row (Reading, Writing, Rapid, Boss) and while your Omnipotence (hero power) is active in Deck Duel. Everyone sees your colour.':
    'Окутывает вас после 5 верных ответов подряд (Чтение, Написание, Блиц, Босс) и пока активно ваше Всемогущество в Дуэли колод. Ваш цвет видят все.',

  '2D arena': '2D-арена', 'No Japanese voice found on this device.': 'На этом устройстве нет японского голоса.', 'This browser has no speech voice.': 'В этом браузере нет синтеза речи.',
  'Carved from an ancient tree. It channels the natural energy of the earth and life.': 'Вырезан из древнего дерева. Проводит природную силу земли и жизни.',
  'Forged from volcanic rock and blessed by fire spirits.': 'Выкован из вулканического камня и благословлён духами огня.',
  'Crafted from crystal and oceanic runes. It flows with the tides.': 'Создан из кристалла и океанских рун. Движется вместе с приливами.',
  'A relic of the sky temples. It channels lightning.': 'Реликвия небесных храмов. Проводит молнии.',
  'An ancient, otherworldly artifact. It bends reality and commands the unknown.': 'Древний потусторонний артефакт. Искривляет реальность и повелевает неведомым.',
  'January reward. Rimed with ice that never melts.': 'Награда января. Покрыт вечным инеем.',
  'March reward. A branch that flowers whenever it casts.': 'Награда марта. Ветвь, что расцветает при каждом заклинании.',
  'May reward. Carved from one piece of temple jade.': 'Награда мая. Вырезан из цельного куска храмового нефрита.',
  'July reward. Pulled from the deepest trench of the sea.': 'Награда июля. Поднят со дна глубочайшей морской впадины.',
  'September reward. Silver light of the harvest moon.': 'Награда сентября. Серебряный свет осенней луны.',
  'November reward. Burning red like autumn leaves.': 'Награда ноября. Горит красным, как осенние листья.',

  // 0.9.8
  "I've mastered hiragana": 'Я освоил хирагану', 'Unlocks the kanji levels (N5–N1) for studying and battles.': 'Открывает уровни кандзи (N5–N1) для учёбы и боёв.',
  'Do you know hiragana?': 'Вы знаете хирагану?', 'Yes — I know hiragana': 'Да — я знаю хирагану', "I'm a beginner": 'Я новичок',
  'Kanji are read with hiragana (かな). If you can already read all of it, you start with kanji (N5 to N1). If not, you start with かな only — the kanji levels open once you tick "I\'ve mastered hiragana" in Settings.':
    'Кандзи читаются хираганой (かな). Если вы уже читаете её всю — начинаете с кандзи (N5–N1). Если нет — сначала только かな; уровни кандзи откроются, когда вы отметите «Я освоил хирагану» в настройках.',
  'かな first, then kanji': 'Сначала かな, потом кандзи',
  'Beginners: study かな in Study spells until you know it by heart. Then tick "I\'ve mastered hiragana" in Settings (the sliders button, top-right) — and the kanji levels N5 to N1 open for studying and battles.':
    'Новичкам: учите かな в «Изучать заклинания», пока не выучите наизусть. Затем отметьте «Я освоил хирагану» в настройках (кнопка с ползунками справа вверху) — и откроются уровни кандзи N5–N1 для учёбы и боёв.',
  'Master hiragana first (Study spells → ひらがな), then tick "I\'ve mastered hiragana" in Settings': 'Сначала освойте хирагану («Изучать заклинания» → ひらがな), затем отметьте «Я освоил хирагану» в настройках',
  'Kanji levels unlocked — pick N5 in Study spells to start!': 'Уровни кандзи открыты — выберите N5 в «Изучать заклинания»!',
  'Back to かな only: kanji levels are locked.': 'Снова только かな: уровни кандзи закрыты.',
  'Write the kanji': 'Напишите кандзи', 'the kana is written for you': 'кана уже написана за вас', 'Wk': 'Нед.',
  'online': 'в сети', 'Requests': 'Запросы', 'Friend requests': 'Запросы в друзья',
  'No friend requests right now.': 'Сейчас нет запросов в друзья.', 'No friends yet — add someone below.': 'Друзей пока нет — добавьте кого-нибудь ниже.',
  'Your level': 'Ваш уровень', 'Activity calendar': 'Календарь активности', 'Previous month': 'Предыдущий месяц', 'Next month': 'Следующий месяц',

  // 0.9.8.1 — achievements, battle keyboard
  'Achievement unlocked!': 'Достижение получено!',
  'Locked': 'Закрыто',
  'Unlocked ✓': 'Получено ✓',
  'Achievements': 'Достижения',
  'Battle keyboard': 'Клавиатура в бою',
  'Game keyboard': 'Игровая',
  'Phone keyboard': 'Телефонная',
  'Cast ⏎': 'Колдовать ⏎',
  'First Victory': 'Первая победа',
  'Win a battle.': 'Выиграйте бой.',
  'Veteran': 'Ветеран',
  'Win 25 battles.': 'Выиграйте 25 боёв.',
  'Champion': 'Чемпион',
  'Win 100 battles.': 'Выиграйте 100 боёв.',
  'On Fire': 'В огне',
  'Cast 5 correct spells in a row in a battle.': 'Сотворите 5 верных заклинаний подряд в бою.',
  'Inferno': 'Инферно',
  'Reach a 10× combo in a battle.': 'Наберите комбо ×10 в бою.',
  'Unstoppable': 'Неудержимый',
  'Reach a 20× combo in a battle.': 'Наберите комбо ×20 в бою.',
  'Flawless': 'Безупречно',
  'Win a battle with 100% accuracy (at least 10 answers).': 'Выиграйте бой со 100% точностью (минимум 10 ответов).',
  'Dragon Slayer': 'Убийца дракона',
  'Defeat the Black Dragon in Boss Elimination.': 'Победите Чёрного дракона в Битве с боссом.',
  'Card Sage': 'Мудрец карт',
  'Win a Deck Duel.': 'Выиграйте Дуэль колод.',
  'Calligrapher': 'Каллиграф',
  'Win a Kanji Writing duel.': 'Выиграйте дуэль Написание кандзи.',
  'Quickdraw': 'Быстрая рука',
  'Win a Rapid duel.': 'Выиграйте дуэль Блиц.',
  'Scholar': 'Учёный',
  'Learn 100 spells in Study spells.': 'Выучите 100 заклинаний в «Изучать заклинания».',
  'Archmage': 'Архимаг',
  'Learn 1,000 spells.': 'Выучите 1000 заклинаний.',
  'Kana Graduate': 'Выпускник каны',
  'Start as a かな beginner, then tick "I\'ve mastered hiragana" in Settings.': 'Начните новичком かな, затем отметьте «Я освоил хирагану» в настройках.',
  'Devoted': 'Преданный',
  'Log in 7 days in a row.': 'Заходите 7 дней подряд.',
  'Eternal Flame': 'Вечное пламя',
  'Log in 30 days in a row.': 'Заходите 30 дней подряд.',
  'Perfect Day': 'Идеальный день',
  'Get 10 / 10 in the Daily challenge.': 'Наберите 10 / 10 в Ежедневном испытании.',
  'Fellowship': 'Братство',
  'Make a friend.': 'Заведите друга.',
  'Seasonal': 'Сезонный',
  'Complete a month\'s goals and earn its reward.': 'Выполните цели месяца и получите награду.',
  'Grand Wizard': 'Великий маг',
  'Reach level 10.': 'Достигните 10 уровня.',
  'Kingslayer': 'Цареубийца', 'Beat an admin in a battle.': 'Победите администратора в бою.',
  // 0.9.8.2 — mode and Deck Duel guides
  'A kanji appears: type its reading in kana or romaji, Enter.': 'Появляется кандзи: напишите его чтение каной или ромадзи и нажмите Enter.',
  'Your HP depends on how hard your opponent hits (their levels). Most HP after 5 min wins.': 'Ваше HP зависит от того, как сильно бьёт соперник (его уровни). Через 5 минут побеждает тот, у кого больше HP.',
  'Right = damage, with the same combo and speed bonus as Reading.': 'Верно = урон, с тем же бонусом за комбо и скорость, что и в Чтении.',
  'Each of you gets your own kanji: type the reading. Right answers hit the dragon.': 'У каждого свои кандзи: напишите чтение. Верные ответы бьют дракона.',
  'Slay it within 5 minutes. If everyone falls, the dragon wins.': 'Победите его за 5 минут. Если падут все — побеждает дракон.',
  'First correct reading (kana or romaji) hits the other player.': 'Первое верное чтение (кана или ромадзи) бьёт соперника.',
  'Same HP for both. Last wizard standing wins.': 'У обоих одинаковое HP. Побеждает последний устоявший маг.',
  'Right = a spell at your opponent. Faster and in a row = more damage (combo up to ×1.5; 5 in a row sets you on fire 🔥).': 'Верно = заклинание в соперника. Быстрее и подряд = больше урона (комбо до ×1.5; 5 подряд поджигают вас 🔥).',
  'Goal': 'Цель',
  'Cards': 'Карты',
  'A turn': 'Ход',
  'Rewards': 'Награды',
  'Both start with 800 HP and 200 mana (+10 each turn). Bring your opponent to 0. No mana for any of your cards = your turn is skipped (−100 HP).': 'Оба начинают с 800 HP и 200 маны (+10 каждый ход). Доведите HP соперника до 0. Нет маны ни на одну карту = ход пропускается (−100 HP).',
  'Heroes and their Omnipotence — 100 mana, then 4 turns cooldown (Goblin 5)': 'Герои и их Всемогущество — 100 маны, затем перезарядка 4 хода (у Гоблина 5)',
  'Win 4000 XP · draw 2500 · lose 1500 · forfeit 0 (half against AI). Every kanji of the duel joins your All spells.': 'Победа 4000 опыта · ничья 2500 · поражение 1500 · сдача 0 (против ИИ половина). Все кандзи дуэли попадают во «Все заклинания».',
  'Pick a hero (30 s).': 'Выберите героя (30 с).',
  'Coin flip, then draft: take 2 face-down cards at a time (20 s for both) until you each have 10. You see colours, not kanji.': 'Жребий, затем набор: берите по 2 закрытые карты (20 с на обе), пока у каждого не будет 10. Видны цвета, а не кандзи.',
  'Your turn: 15 s to choose a card. Its mana is paid right away — even if you then miss.': 'Ваш ход: 15 с на выбор карты. Мана списывается сразу — даже если потом ошибётесь.',
  'The card flips: read its reading and meaning (up to 15 s), then press Ready to look at the kanji.': 'Карта переворачивается: прочитайте чтение и значение (до 15 с), затем нажмите «Готов», чтобы увидеть кандзи.',
  'Press CAST! — the kanji disappears and you write it from memory (pad with eraser, or Japanese keyboard). 1 minute for all three steps. Your opponent watches you write.': 'Нажмите CAST! — кандзи исчезнет, и вы пишете его по памяти (панель с ластиком или японская клавиатура). 1 минута на все три шага. Соперник видит, как вы пишете.',
  'Right → the spell hits / heals / gives mana, and you get 50% of its mana back. Wrong or too slow → the card rips. Either way the correct kanji shows for 2 s.': 'Верно → заклинание бьёт / лечит / даёт ману, и вам возвращается 50% её маны. Ошибка или слишком медленно → карта рвётся. В любом случае правильный кандзи показывается 2 с.',
  'While your opponent plays, you can read the list of kanji in your hand (not which card is which).': 'Пока ходит соперник, можно смотреть список кандзи у вас в руке (но не какая карта какая).',
  'Omnipotence: once per cooldown, fire your hero\'s ultimate power with the button bottom-left. While it\'s active you burn in your flame colour (Customize → Omnipotence).': 'Всемогущество: раз за перезарядку используйте суперсилу героя кнопкой слева внизу. Пока она активна, вы горите пламенем своего цвета (Кастомизация → Всемогущество).',
  'After 8 min: overtime — the cards and Omnipotence are gone and it becomes a 1v1 Rapid duel with the HP you have: random kanji (N5–N1), the first to type the reading (hiragana or romaji) hits, harder words hit harder. 3 min, then the higher HP wins.': 'Через 8 минут — овертайм: карт и Всемогущества больше нет, это дуэль Блиц 1 на 1 с вашим текущим HP: случайные кандзи (N5–N1), кто первым напишет чтение (хираганой или ромадзи), тот бьёт; сложные слова бьют сильнее. 3 минуты, затем побеждает больший HP.',
  'Letting the clock run out without playing a card costs 100 HP.': 'Если время выйдет, а карта не сыграна, — минус 100 HP.',
  'Goblin': 'Гоблин',
  'Knight': 'Рыцарь',
  'Witch': 'Ведьма',
  'Wizard': 'Волшебник',
  'Frenzy: play 2 cards in a row this turn (the second costs 1.5× mana). 100 mana, then 5 turns cooldown.': 'Неистовство: сыграйте 2 карты подряд за ход (вторая стоит в 1.5 раза больше маны). 100 маны, затем перезарядка 5 ходов.',
  'Bulwark: take 45% less damage and heal 50% more for 2 turns. 100 mana, then 4 turns cooldown.': 'Оплот: на 2 хода получаете на 45% меньше урона и лечитесь на 50% больше. 100 маны, затем перезарядка 4 хода.',
  'Sight: for 2 turns see the kanji and reading of all your cards, and your attacks hit 35% harder (the card you write still hides its kanji). 100 mana, then 4 turns cooldown.': 'Прозрение: на 2 хода видны кандзи и чтения всех ваших карт, а атаки бьют на 35% сильнее (кандзи карты, которую вы пишете, всё равно скрыт). 100 маны, затем перезарядка 4 хода.',
  'Arcane reserve (passive): out of cards → draw 2 random cards before a new draft; out of mana → +30 mana. Once each.': 'Тайный запас (пассивно): кончились карты → 2 случайные карты до нового набора; кончилась мана → +30 маны. По одному разу.',
  'Bolt': 'Молния',
  'Frost': 'Мороз',
  'Mana': 'Мана',
  'Heal': 'Лечение',
  'free': 'бесплатно',
  '. Crit: 1% + 1% per spell learned today (max 50%, resets daily; a crit hits ×1.5).': '. Крит: 1% + 1% за каждое выученное сегодня заклинание (макс. 50%, сбрасывается ежедневно; крит бьёт ×1.5).',
  'Combos build up to ×1.5 (5 in a row sets you on fire 🔥).': 'Комбо растёт до ×1.5 (5 подряд поджигают вас 🔥).',
  'Keyboard': 'Клавиатура',
  '— pick a hero, draft cards by colour, then cast them by writing their kanji. Bolt 90 dmg (10 mana), Frost 150 (20), Mana +60, Heal 140 (30), Inferno 340 (45). 15 s to choose a card, then 1 minute to read its meaning, look at the kanji and write it. +10 mana each turn. Out of cards → a new draft round (HP and mana stay). No mana for any of your cards → your turn is skipped (−100 HP). When time runs out: overtime, a Rapid duel. Every kanji of the duel joins your': '— выберите героя, наберите карты по цвету, затем разыгрывайте их, записывая кандзи. Молния 90 урона (10 маны), Мороз 150 (20), Мана +60, Лечение 140 (30), Инферно 340 (45). 15 с на выбор карты, затем 1 минута, чтобы прочитать значение, посмотреть на кандзи и написать его. +10 маны каждый ход. Карты кончились → новый набор (HP и мана сохраняются). Нет маны ни на одну карту → ход пропускается (−100 HP). Когда время выходит — овертайм, дуэль Блиц. Все кандзи дуэли попадают в',
  '— win: 300 + accuracy%; loss: 50 + accuracy%; Deck Duel: 4000 / 1500. Forfeited matches give no XP. Each level needs 1000 XP more than the last (1000, then 2000, 3000 …) and unlocks backgrounds and flame colours in': '— победа: 300 + точность%; поражение: 50 + точность%; Дуэль колод: 4000 / 1500. Сданные матчи не дают опыта. Каждый уровень требует на 1000 опыта больше предыдущего (1000, затем 2000, 3000 …) и открывает фоны и цвета пламени в',
  'ひらがな (hiragana) and カタカナ (katakana) are the kana letters (romaji answers); N5 is easiest, N1 hardest. Your character follows your hardest level: Goblin (ひらがな / カタカナ), Apprentice (N5), Adventurer (N4), Knight (N3), Witch (N2), Wizard (N1). Everyone holds the magic staff they equipped in Customize. Harder words hit harder, so your opponent gets more HP.': 'ひらがな (хирагана) и カタカナ (катакана) — это азбуки каны (ответ ромадзи); N5 — самый лёгкий, N1 — самый трудный. Ваш персонаж зависит от самого трудного уровня: Гоблин (ひらがな / カタカナ), Ученик (N5), Искатель приключений (N4), Рыцарь (N3), Ведьма (N2), Волшебник (N1). Каждый держит магический посох, выбранный в Кастомизации. Трудные слова бьют сильнее, поэтому у соперника больше HP.',
  'Master hiragana first': 'Сначала освойте хирагану',
  'Deck Duel is all kanji — tick "I\'ve mastered hiragana" in Settings first.': 'Дуэль колод — это только кандзи: сначала отметьте «Я освоил хирагану» в настройках.',
  'Paused': 'Пауза',
  'The clock, the AI and the dragon wait for you.': 'Время, ИИ и дракон ждут вас.',
  'Resume': 'Продолжить',
  '❚❚ Pause': '❚❚ Пауза', 'Pause': 'Пауза',
  'You can pause only a private game against the AI (or a solo Boss run)': 'Пауза доступна только в своей игре против ИИ (или в одиночной Битве с боссом)',
  'The words you missed are now in Study spells → Struggling spells.': 'Слова с ошибками теперь в «Изучать заклинания» → «Трудные заклинания».',
  'Today\'s words': 'Слова дня',
  'Study spells is a flashcard deck: the more words you know, the more spells you can cast. Words you miss in battle come back there to review.': '«Изучать заклинания» — колода карточек: чем больше слов вы знаете, тем больше заклинаний можете сотворить. Слова, на которых вы ошиблись в бою, возвращаются туда на повторение.',
  'Spaced repetition like Anki: each card comes back just before you would forget it.': 'Интервальные повторения, как в Anki: каждая карточка возвращается как раз перед тем, как вы бы её забыли.',
  'Playing with AI gives half XP; a forfeit gives none.': 'Игра с ИИ даёт половину опыта; сдача — ничего.',
  // feedback, about, admin inbox & stats (0.9.8.5)
  'Feedback': 'Отзыв', 'About': 'Об игре', 'Bug report': 'Сообщить об ошибке', 'Suggestion': 'Предложение',
  'What is it?': 'Что это?', 'Your message': 'Ваше сообщение',
  'What happened, or what would make the game better?': 'Что случилось или что сделало бы игру лучше?',
  'Your player name, the game version and your device type are sent with it. Thank you!': 'Вместе с сообщением отправятся ваше имя игрока, версия игры и тип устройства. Спасибо!',
  'Write a few words first.': 'Сначала напишите пару слов.', 'Write a few words first': 'Сначала напишите пару слов',
  "Thanks! That's a lot at once — try again in a few minutes": 'Спасибо! Это много за раз — попробуйте снова через несколько минут',
  'Bug report sent — thank you!': 'Сообщение об ошибке отправлено — спасибо!', 'Suggestion sent — thank you!': 'Предложение отправлено — спасибо!',
  'A game for learning Japanese: study words with spaced repetition, then cast them as spells.': 'Игра для изучения японского: учите слова с интервальным повторением, а затем произносите их как заклинания.',
  'Credits': 'Благодарности', 'Privacy': 'Конфиденциальность',
  'Word lists and English meanings:': 'Списки слов и английские значения:', '(MIT), based on Jonathan Waller\'s JLPT lists (': '(MIT), на основе списков JLPT Джонатана Уоллера (',
  ', CC BY). Those lists draw on': ', CC BY). Эти списки опираются на', 'by the Electronic Dictionary Research and Development Group, used under': 'от Electronic Dictionary Research and Development Group, используется по лицензии',
  'Handwriting recognition:': 'Распознавание почерка:', 'by Dominik Klein (MIT); its reference strokes come from': 'Доминика Кляйна (MIT); эталонные черты взяты из',
  'by Ulrich Apel (CC BY-SA 3.0).': 'Ульриха Апеля (CC BY-SA 3.0).', '3D:': '3D:',
  'Russian word meanings: translated for this game from the English meanings.': 'Русские значения слов: переведены для этой игры с английских значений.',
  'We store your player name, a scrambled (hashed) password, your progress, match history, friends and — if you upload one — your profile picture. Bug reports and suggestions you send are kept with your player name; errors include your browser type. Nothing is sold or shared. Ask the admin to delete your account and all of it is removed.':
    'Мы храним ваше имя игрока, зашифрованный (хешированный) пароль, прогресс, историю матчей, друзей и — если вы его загрузили — фото профиля. Ваши сообщения об ошибках и предложения хранятся с вашим именем игрока; к ошибкам прикладывается тип браузера. Ничего не продаётся и не передаётся. Попросите администратора удалить аккаунт — и всё это будет удалено.',
  'Inbox': 'Входящие', 'Stats': 'Статистика', 'All': 'Все',
  'Bug reports': 'Ошибки', 'Suggestions': 'Предложения', 'Errors': 'Сбои', 'Show done': 'Показать решённые', 'Error': 'Сбой',
  'Reopen': 'Открыть снова', '✓ Done': '✓ Готово', 'Details': 'Подробности', 'Nothing here.': 'Здесь пусто.', 'game': 'игра',
  'Signed up': 'Зарегистрировались', 'Started the tutorial': 'Начали обучение', 'Knows hiragana': 'Знают хирагану', 'Hiragana beginner': 'Новички в хирагане',
  'Started the first battle': 'Начали первый бой', 'Finished the tutorial': 'Закончили обучение', 'Skipped the tutorial': 'Пропустили обучение',
  'online now': 'сейчас в сети', 'active today': 'активны сегодня', 'accounts': 'аккаунты', 'back on day 1': 'вернулись на 1-й день', 'back on day 7': 'вернулись на 7-й день',
  'Active players (bars) and new players (+n), last 14 days': 'Активные игроки (столбцы) и новые игроки (+n) за 14 дней',
  'Tutorial funnel (last 30 days)': 'Воронка обучения (за 30 дней)', 'Games this week': 'Игры за неделю', 'No games yet.': 'Игр пока нет.',
  "The game is updating — you'll be reconnected in a moment.": 'Игра обновляется — вы переподключитесь через мгновение.',
  // 0.9.9
  'Tick levels — new random words are added every day.': 'Отметьте уровни — каждый день добавляются новые случайные слова.',
  'New spells a day': 'Новых заклинаний в день',
  'to review': 'к повторению',
  'Words you missed in games — you choose on the results screen.': 'Слова, на которых вы ошиблись в играх, — вы выбираете их на экране итогов.',
  'Custom spells': 'Свои заклинания',
  'Custom': 'Свои',
  'Your own words: from the dictionary, or any word you type in.': 'Ваши слова: из словаря или любые, которые вы введёте.',
  '+ Add words': '+ Добавить слова',
  'JLPT quiz': 'Тест JLPT',
  'Reading passage': 'Текст для чтения',
  'A short story with your struggling words, each with its reading and meaning.': 'Короткий рассказ с вашими трудными словами — с чтением и значением каждого.',
  '10 questions from the spells you studied — readings, meanings and kanji, 4 choices each.': '10 вопросов по изученным заклинаниям — чтения, значения и кандзи, по 4 варианта.',
  'No spells in this deck yet.': 'В этой колоде пока нет заклинаний.',
  'Select all': 'Выбрать все',
  'Remove selected': 'Удалить выбранные',
  'Remove from this deck': 'Убрать из этой колоды',
  'Words': 'Слова',
  'Added': 'Добавлено',
  'Spell': 'Заклинание',
  'Translation': 'Перевод',
  'or type your own:': 'или введите своё:',
  'No custom spells yet — search the dictionary above or type your own word.': 'Своих заклинаний пока нет — найдите слово в словаре выше или введите своё.',
  'Search: kanji, kana or meaning (e.g. 魔法, まほう, magic)': 'Поиск: кандзи, кана или значение (напр. 魔法, まほう, магия)',
  'Word (漢字)': 'Слово (漢字)',
  'Reading (かな)': 'Чтение (かな)',
  'Add': 'Добавить',
  '+ Add': '+ Добавить',
  '✓ added': '✓ добавлено',
  'Not in the dictionary — add it as your own word below.': 'Нет в словаре — добавьте его как своё слово ниже.',
  'Study some spells first — the quiz uses the words you have studied.': 'Сначала поучите заклинания — тест берёт изученные вами слова.',
  'New quiz': 'Новый тест',
  'Choose the best meaning for the word.': 'Выберите правильное значение слова.',
  'Choose the best reading for the word.': 'Выберите правильное чтение слова.',
  'Choose the right kanji for the word.': 'Выберите правильные кандзи для слова.',
  '✓ Correct!': '✓ Верно!',
  '— perfect!': '— идеально!',
  'Add the ones I missed': 'Добавить те, где я ошибся',
  'Save to': 'Сохранить в',
  'Save these words to': 'Сохранить эти слова в',
  'Read them in a story': 'Прочитать их в рассказе',
  'New story': 'Новый рассказ',
  'Words in this story': 'Слова в этом рассказе',
  'Tap a highlighted word for its reading and meaning.': 'Нажмите на выделенное слово, чтобы увидеть чтение и значение.',
  'No words yet — the story uses your struggling spells (or the words you missed in a game).': 'Слов пока нет — рассказ берёт ваши трудные заклинания (или слова с ошибками из игры).',
  'Filter…': 'Фильтр…',
  'Main menu': 'Главное меню',
  'Finish your game first': 'Сначала закончите игру',
  '⚔ Challenge': '⚔ Вызов',
  'Challenge': 'Вызов',
  '✓ Friends': '✓ Друзья',
  '✓ Request sent': '✓ Запрос отправлен',
  '✓ Accept friend request': '✓ Принять заявку в друзья',
  'Make admin': 'Сделать админом',
  'Remove admin': 'Снять админа',
  'On your profile ✓ — click to remove': 'В профиле ✓ — нажмите, чтобы убрать',
  'Unlocked ✓ — click to show on your profile': 'Получено ✓ — нажмите, чтобы показать в профиле',
  'Everything is open': 'Всё открыто',
  'What\'s new': 'Что нового',
  'Every mode is open from the start: Kanji Reading, Rapid, Kanji Writing, the Boss fight and Deck Duel. There is also a Daily challenge, a JLPT quiz, Progress, Friends — and monthly goals with rewards.': 'Все режимы открыты сразу: Чтение кандзи, Блиц, Написание кандзи, Битва с боссом и Дуэль колод. Ещё есть Ежедневное испытание, тест JLPT, Прогресс, Друзья — и цели месяца с наградами.',
  'Turn log': 'Журнал ходов',
  'Opponent': 'Соперник',
  'You': 'Вы',
  'Someone': 'Кто-то',
  'Overtime! The cards are gone — first to type the reading hits': 'Овертайм! Карт больше нет — кто первым введёт чтение, тот и бьёт',
  // admin
  'Role': 'Роль', 'Level': 'Уровень', 'XP': 'Опыт', 'Spells': 'Заклинания', 'Crit': 'Крит', 'Registered': 'Регистрация', 'Status': 'Статус',
  'never logged in': 'ни разу не входил',
  'AI · beginner': 'ИИ · новичок', 'AI player · beginner': 'ИИ-игрок · новичок',

  // lobby
  '← Leave room': '← Покинуть комнату', 'Room code — share it with your friend': 'Код комнаты — отправьте его другу', 'Copy': 'Копировать',
  'Add an AI player': 'Добавить ИИ-игрока', 'Beginner — slow, makes mistakes': 'Новичок — медленный, ошибается', 'N3 — intermediate': 'N3 — средний',
  'N1 — expert': 'N1 — эксперт', '+ Add AI': '+ Добавить ИИ', 'Start battle': 'Начать бой', 'Ready': 'Готов', 'Not ready': 'Не готов',
  'How much the AI knows': 'Сколько знает ИИ', 'Remove this AI': 'Убрать этого ИИ', 'away — seat kept': 'отошёл — место сохранено',
  'Waiting for a teammate (optional)…': 'Ожидание союзника (необязательно)…', 'Waiting for opponent…': 'Ожидание соперника…',
  'Deck Duel draws cards from every level (N5–N1). Your level picks only change your character here.': 'В Дуэли колод карты берутся со всех уровней (N5–N1). Выбор уровней меняет здесь только вашего персонажа.',
  'Each player picks their own. You will write these words by hand. Harder levels hit harder — so your opponent gets more HP.': 'Каждый выбирает свои. Эти слова вы будете писать от руки. Сложные уровни бьют сильнее — поэтому у соперника больше HP.',
  'Each player picks their own. ひらがな and カタカナ = the two kana alphabets, answered in romaji. Harder levels hit harder — so your opponent gets more HP.': 'Каждый выбирает свои. ひらがな и カタカナ — две азбуки каны, ответ ромадзи. Сложные уровни бьют сильнее — поэтому у соперника больше HP.',
  'Share the code, or add an AI opponent — then press Ready. The duel starts when both are ready.': 'Отправьте код или добавьте ИИ-соперника — затем нажмите «Готов». Дуэль начнётся, когда оба будут готовы.',
  'Waiting for your opponent to be ready…': 'Ждём, когда соперник будет готов…', 'Press Ready — the duel starts when both players are ready.': 'Нажмите «Готов» — дуэль начнётся, когда оба будут готовы.',
  'Start solo': 'Начать в одиночку', 'Waiting for the host to start…': 'Ждём, пока хозяин начнёт…', 'Opponent left': 'Соперник вышел',
  'Room not found': 'Комната не найдена', 'Room is full': 'Комната заполнена', 'That battle has already started': 'Этот бой уже начался',

  // prep / battle
  '← Back to lobby': '← Назад в лобби', 'Back to lobby': 'Назад в лобби', 'Preparation': 'Подготовка',
  'Memorise the readings. They vanish when the battle starts.': 'Запомните чтения. Они исчезнут, когда начнётся бой.', "I'm ready": 'Я готов',
  'Forfeit': 'Сдаться', 'Tap again to forfeit': 'Нажмите ещё раз, чтобы сдаться', 'Chat': 'Чат', 'Send': 'Отправить', 'Say something…': 'Напишите что-нибудь…',
  '↶ Undo': '↶ Отменить', '⌫ Eraser': '⌫ Ластик', '✕ Clear': '✕ Очистить', 'Cast ✦': 'Колдовать ✦', 'Handwriting pad': 'Панель для письма',
  'Eraser: rub over a stroke to remove it (E)': 'Ластик: проведите по черте, чтобы стереть её (E)', '…or type the kanji (Japanese keyboard), Enter': '…или введите кандзи (японская клавиатура), Enter',
  'How to write it (S)': 'Как это пишется (S)', 'Hide the kanji and write it (Enter)': 'Скрыть кандзи и написать (Enter)',
  'かな or romaji, then Enter': 'かな или ромадзи, затем Enter', 'romaji, then Enter': 'ромадзи, затем Enter', 'Counts as a miss and shows the answer': 'Засчитывается как промах и показывает ответ',
  'Hiragana spell — answer in romaji': 'Заклинание хираганой — ответ ромадзи', 'Write the character': 'Напишите знак', '✗ Not quite — try again!': '✗ Не совсем — попробуйте ещё!',
  'Opponent was faster!': 'Соперник был быстрее!', '✗ Too slow!': '✗ Слишком медленно!', 'How to write it': 'Как это пишется', 'Time up': 'Время вышло',
  'Pasting is off — write it yourself!': 'Вставка отключена — напишите сами!', 'Use romaji for hiragana spells (switch your IME off)': 'Для заклинаний хираганой используйте ромадзи (выключите IME)',
  'You are on fire — immune to dragon breath!': 'Вы в огне — дыхание дракона вам не страшно!', 'Character power': 'Сила персонажа',

  // results
  'VICTORY': 'ПОБЕДА', 'DEFEAT': 'ПОРАЖЕНИЕ', 'DRAW': 'НИЧЬЯ', 'Review — you struggled with': 'Повторите — вам было трудно с',
  '(added to Struggling spells · click a word for its stroke order)': '(добавлено в «Трудные заклинания» · нажмите на слово, чтобы увидеть порядок черт)',
  'Vocabulary performance': 'Результаты по словам', 'Word': 'Слово', 'Reading': 'Чтение', 'Meaning': 'Значение', 'Result': 'Результат', 'Avg time': 'Ср. время',
  'Rematch': 'Реванш', 'Leave': 'Выйти', 'Rematch requested!': 'Реванш запрошен!', 'Waiting for the others to accept…': 'Ждём, пока другие согласятся…',
  'A player left the battle': 'Игрок покинул бой', 'The Black Dragon has fallen': 'Чёрный дракон повержен', 'The party was burned to ash': 'Отряд сожжён дотла',
  'Time up — the dragon survived': 'Время вышло — дракон выжил', 'Time up — you held the dragon off!': 'Время вышло — вы сдержали дракона!', 'Time up — most HP left wins': 'Время вышло — побеждает тот, у кого больше HP',
  'Damage to dragon': 'Урон дракону', 'Damage dealt': 'Нанесено урона', 'Avg response': 'Ср. ответ', 'Best combo': 'Лучшее комбо', 'not seen': 'не встречалось',
  'No XP — the match was forfeited': 'Без опыта — матч был сдан', 'Got it': 'Понятно', 'Tip': 'Совет',

  // queue / match found
  'Match found!': 'Игра найдена!', 'Match found': 'Игра найдена', 'Waiting for your opponent…': 'Ждём соперника…', 'Your opponent accepted!': 'Соперник принял!',
  "Your opponent didn't accept — you're back in the queue.": 'Соперник не принял — вы снова в очереди.', "You didn't accept in time — the queue stopped.": 'Вы не приняли вовремя — поиск остановлен.',
  'In the online queue': 'В онлайн-очереди', 'In the menus': 'В меню',
  'Music on': 'Музыка вкл.', 'Music off': 'Музыка выкл.', 'Sounds on': 'Звуки вкл.', 'Sounds off': 'Звуки выкл.',
  'games': 'игры', 'Play on 12 different days': 'Играть в 12 разных дней', 'Win 10 games': 'Выиграть 10 игр', 'Pass 150 flashcards in Study spells': 'Пройти 150 карточек в «Изучать заклинания»',
  'Light blue flames': 'Голубое пламя', 'Purple flames': 'Фиолетовое пламя',
  'Your turn': 'Ваш ход', 'Your turn!': 'Ваш ход!',

  // deck duel
  'How Deck Duel works': 'Как устроена Дуэль колод', 'Deck Duel — choose a card': 'Дуэль колод — выберите карту', 'Your spell — read it': 'Ваше заклинание — прочитайте его',
  'Your spell — memorise the kanji': 'Ваше заклинание — запомните кандзи', 'Write the kanji!': 'Напишите кандзи!', 'Your kanji': 'Ваш кандзи', 'Your opponent': 'Ваш соперник',
  'Reading the spell…': 'Читает заклинание…', 'Studying the kanji…': 'Изучает кандзи…', 'Choose your hero': 'Выберите героя', 'Memorise it — it disappears when you cast': 'Запомните — он исчезнет, когда вы начнёте колдовать',
  'You won the coin flip — you pick first': 'Вы выиграли жребий — выбираете первым', 'Your opponent won the coin flip': 'Соперник выиграл жребий',
  'You only see the colour — the kanji stays hidden until the card is played.': 'Виден только цвет — кандзи скрыт, пока карту не разыграют.',
  'Overtime — the cards are gone: type the readings!': 'Овертайм — карт больше нет: пишите чтения!', 'First to type its reading hits · wrong? try again': 'Кто первым напишет чтение, тот бьёт · ошиблись? пробуйте ещё',
  'Type it in romaji…': 'Введите ромадзи…', 'Reading (kana or romaji)…': 'Чтение (кана или ромадзи)…', 'The correct kanji': 'Правильный кандзи',
  '✗ Nobody got it': '✗ Никто не угадал', '✗ The spell fizzles': '✗ Заклинание рассеялось', 'Rapid hit': 'Удар в блице', 'passive · tap for info': 'пассивно · нажмите для информации',
  'cards used': 'карт сыграно', '+2 cards ready': '+2 карты готовы', 'mana used': 'маны потрачено', '+30 mana ready': '+30 маны готово',
  'Out of cards → Round 2 draft. HP, mana and powers stay.': 'Карты кончились → набор раунда 2. HP, мана и силы сохраняются.',

  // tutorial
  'Welcome': 'Добро пожаловать', 'Welcome, apprentice': 'Добро пожаловать, ученик',
  'In Kanji Wizards every spell is a Japanese word. Learn a word — and you can cast it at your opponent.': 'В Kanji Wizards каждое заклинание — японское слово. Выучите слово — и сможете метнуть его в соперника.',
  'Cast by reading': 'Колдуйте чтением',
  'A kanji appears; type how it is read — in hiragana, or in romaji with a normal keyboard — and press Enter. Fast and right in a row hits harder.':
    'Появляется кандзи; напишите, как он читается — хираганой или ромадзи на обычной клавиатуре — и нажмите Enter. Быстрые верные ответы подряд бьют сильнее.',
  'Study makes you stronger': 'Учёба делает сильнее',
  'Study spells is a flashcard deck. Every spell you learn today raises your critical-hit chance, and words you miss in battle come back there to review.':
    '«Изучать заклинания» — это колода карточек. Каждое выученное сегодня заклинание повышает шанс крита, а слова, на которых вы ошиблись в бою, возвращаются туда на повторение.',
  'All modes are open': 'Все режимы открыты',
  'Kanji Reading, Rapid, Kanji Writing, the Boss fight and Deck Duel are all open from the start. There is also a Daily challenge, a JLPT quiz, Progress, Friends — and monthly goals with rewards.':
    'Чтение кандзи, Блиц, Написание кандзи, Битва с боссом и Дуэль колод открыты сразу. Ещё есть Ежедневное испытание, тест JLPT, Прогресс, Друзья и месячные цели с наградами.',
  'Your first battle': 'Ваш первый бой', "Ready? You'll study 10 easy words for a minute, then duel a beginner AI with them.": 'Готовы? Минуту вы учите 10 простых слов, потом сражаетесь ими с ИИ-новичком.',
  'type its reading: yama': 'напишите чтение: yama', 'Mountain — try it!': 'Гора — попробуйте!', "Not quite — it's やま (yama)": 'Не совсем — это やま (yama)', '✓ やま — a spell!': '✓ やま — заклинание!',
  'Fight a beginner AI': 'Сразиться с ИИ-новичком', 'Maybe later': 'Может, позже', 'Skip tutorial': 'Пропустить обучение', 'Next': 'Далее',
  "Read the 10 words — reading and meaning. When the battle starts, they come back as kanji only. Press Ready when you're done.": 'Прочитайте 10 слов — чтение и значение. В бою они вернутся только кандзи. Нажмите «Готов», когда закончите.',
  "Type the reading of the kanji (hiragana or romaji) and press Enter. Don't know it? Esc skips. Keep your HP above the AI's!": 'Напишите чтение кандзи (хираганой или ромадзи) и нажмите Enter. Не знаете? Esc — пропуск. Держите HP выше, чем у ИИ!',
  'Well cast! Words you missed are now in Study spells → Struggling. Level up to unlock Writing, Boss and Deck Duel.': 'Отличное колдовство! Слова с ошибками теперь в «Изучать заклинания → Трудные». Повышайте уровень, чтобы открыть Написание, Босса и Дуэль колод.',

  // how to play (guide)
  'Create a room': 'Создайте комнату', ', pick a mode, and send the 4-letter code to a friend. On a phone you can switch apps to send it — your seat is kept for 5 minutes.': ', выберите режим и отправьте другу 4-буквенный код. На телефоне можно переключиться в другое приложение — место сохраняется 5 минут.',
  'Pick your levels.': 'Выберите уровни.', 'Modes': 'Режимы', 'Rapid': 'Блиц', 'Writing': 'Написание', 'Boss': 'Босс',
  '— study 10 words, then type each reading (かな or romaji).': '— выучите 10 слов, затем напишите чтение каждого (かな или ромадзи).',
  '— no study; both get the same kanji, first correct reading hits.': '— без подготовки; у обоих один кандзи, бьёт первое верное чтение.',
  '— look at the kanji, press CAST! (up to 3.5 s), then write it from memory on the pad or type it with a Japanese keyboard. Messy is fine.': '— посмотрите на кандзи, нажмите CAST! (до 3,5 с), затем напишите по памяти на панели или японской клавиатурой. Неровно — не страшно.',
  '— 1 to 4 players team up against the Black Dragon (it gets tougher with every player). Mistakes get you clawed; fire breath every 30 s.': '— от 1 до 4 игроков против Чёрного дракона (он сильнее с каждым игроком). За ошибки — удар когтями; огненное дыхание каждые 30 с.',
  'Fast + correct = more damage.': 'Быстро + верно = больше урона.', '(Esc) shows the answer.': '(Esc) показывает ответ.',
  '— Anki-style flashcards. Missed words go to': '— карточки в стиле Anki. Ошибочные слова попадают в',
  'Login streak': 'Серия входов', '— open the game on days in a row. Your best streak unlocks magic staffs in': '— заходите в игру несколько дней подряд. Лучшая серия открывает магические посохи в',
  ': Ember at 3 days, Tide at 5, Storm at 8, Void at 10.': ': Ember за 3 дня, Tide за 5, Storm за 8, Void за 10.',
  'How Kanji Reading works': 'Как устроено Чтение кандзи', 'How Kanji Writing works': 'Как устроено Написание кандзи', 'How Boss Elimination works': 'Как устроена Битва с боссом', 'How 1v1 Rapid works': 'Как устроен Блиц 1 на 1',
  '60 s to study your 10 words (reading + meaning). Then they disappear.': '60 с, чтобы выучить 10 слов (чтение + значение). Потом они исчезнут.',
  'Wrong or Skip (Esc) = a miss; the answer is shown and the word comes back later.': 'Ошибка или пропуск (Esc) = промах; ответ показывается, а слово вернётся позже.',
  'Look at the kanji (up to 3.5 s), then press CAST! (or Enter): it vanishes and the pad and keyboard appear. Pasting is off.': 'Посмотрите на кандзи (до 3,5 с), затем нажмите CAST! (или Enter): он исчезнет, появятся панель и клавиатура. Вставка отключена.',
  'Write the whole word on the pad, left to right (one cell per character) — or type it with a Japanese keyboard.': 'Напишите всё слово на панели слева направо (одна клетка на знак) — или введите японской клавиатурой.',
  'Only kanji count (kana only at the かな level). Messy is fine — it’s judged by shape.': 'Считаются только кандзи (кана — только на уровне かな). Неровно — не страшно, оценивается форма.',
  'Up to 4 players (friends or AI) against the Black Dragon; the online queue always makes a full party of 4. Its HP grows with the party.': 'До 4 игроков (друзья или ИИ) против Чёрного дракона; онлайн-очередь всегда собирает отряд из 4. HP дракона растёт с размером отряда.',
  'A mistake gets you clawed (−45).': 'Ошибка — удар когтями (−45).', 'Every 30 s it breathes fire on everyone (−110) — unless you are on fire yourself (5 in a row): then you are immune.': 'Каждые 30 с он дышит огнём на всех (−110) — если только вы сами не в огне (5 подряд): тогда вы неуязвимы.',
  'Both players get the same kanji — no study phase.': 'Оба игрока получают один и тот же кандзи — без подготовки.', 'Wrong? Try again until the 12 s round ends.': 'Ошиблись? Пробуйте снова, пока не кончится 12-секундный раунд.',
  'Crit: 1% + 1% per spell learned today (max 50%). Playing with AI gives half XP; a forfeit gives none.': 'Крит: 1% + 1% за каждое выученное сегодня заклинание (макс. 50%). Игра с ИИ даёт половину опыта; сдача — ничего.',
  'Crit chance today: 1% + 1% for every spell you learn today (max 50%). Resets at midnight.': 'Шанс крита сегодня: 1% + 1% за каждое выученное сегодня заклинание (макс. 50%). Сбрасывается в полночь.',
  // 0.9.9.4.4.5
  '— study 10 of your words, then type each reading (かな or romaji).': '— выучите 10 своих слов, затем напишите чтение каждого (かな или ромадзи).',
  '— no study; both get the same kanji, first correct reading hits. The first 10 are 5 words from each player’s All spells — the round shows whose word it is.': '— без подготовки; у обоих один кандзи, бьёт первое верное чтение. Первые 10 — по 5 слов из «Всех заклинаний» каждого игрока, в раунде видно, чьё это слово.',
  'Study spells is a flashcard deck: the more words you know, the more spells you can cast — battles use the words in your All spells. Every card you answer gives +5 XP, and words you miss in battle come back there to review.': '«Изучать заклинания» — колода карточек: чем больше слов вы знаете, тем больше заклинаний можете сотворить — в боях используются слова из ваших «Всех заклинаний». Каждая карточка даёт +5 опыта, а слова, на которых вы ошиблись в бою, возвращаются туда для повторения.',
  'Your own words': 'Ваши слова', 'Practice': 'Практика', 'Hiragana first': 'Сначала хирагана',
  '— every battle plays the words of your levels from your All spells (marked ★ on the study cards); random words fill in when you have too few.': '— в каждом бою используются слова ваших уровней из «Всех заклинаний» (на карточках подготовки — ★); если их мало, добавляются случайные.',
  '— Anki-style flashcards in four decks: All spells, Struggling spells (the words you miss go there), Custom and Onomatopoeia. In All spells, set how many new words of each level you get a day (− / +, then Apply). Every card you answer gives +5 XP (up to 500 a day); ↶ Undo takes the last answer back.': '— карточки в стиле Anki в четырёх колодах: «Все заклинания», «Трудные заклинания» (туда попадают ошибки), «Свои» и «Ономатопея». Во «Всех заклинаниях» задайте, сколько новых слов каждого уровня получать в день (− / +, затем «Применить»). Каждая карточка даёт +5 опыта (до 500 в день); ↶ «Отменить» возвращает последний ответ.',
  '— the JLPT quiz, the Onomatopoeia quiz and the Reading passage: an AI writes one short story with 8 of your words, and you fill in the blanks from the context (up to 40 new stories a day — the counter shows how many are left). Tap any kanji for its parts and a memory story.': '— тест JLPT, тест по ономатопее и текст для чтения: ИИ пишет короткий рассказ с 8 вашими словами, а вы заполняете пропуски по смыслу (до 40 новых рассказов в день — счётчик показывает, сколько осталось). Нажмите на любой кандзи, чтобы увидеть его части и историю для запоминания.',
  '— beginners study ひらがな until they tick “I’ve mastered hiragana” in Settings. Until then the kanji levels are locked: they add no new words, but the numbers you set for them are kept.': '— новички учат ひらがな, пока не отметят «Я освоил хирагану» в настройках. До этого уровни кандзи закрыты: новых слов они не добавляют, но заданные для них числа сохраняются.',
  'Writing a story with your words…': 'Пишем рассказ из ваших слов…', 'AI stories left today': 'ИИ-рассказов осталось сегодня',
  'Each new AI story counts once; the same words again come free. The count starts over at midnight.': 'Каждый новый ИИ-рассказ считается один раз; те же слова снова — бесплатно. Счёт обнуляется в полночь.',
  'How reading passages work': 'Как устроен текст для чтения',
  'An AI writes one short story with 8 of your words in it — each word appears where it makes sense, not in a sentence of its own.': 'ИИ пишет один короткий рассказ с 8 вашими словами — каждое слово стоит там, где оно к месту, а не в отдельном предложении.',
  'The words are blanked out. Tap a blank, then the word that fits from the context. Check shows what you got right.': 'Слова скрыты пропусками. Нажмите на пропуск, затем на слово, подходящее по смыслу. «Проверить» покажет, что верно.',
  'Writing a story takes a few seconds — the bar shows how far along it is.': 'Рассказ пишется несколько секунд — полоска показывает, сколько осталось.',
  'You can have up to 40 new AI stories a day — the counter next to New passage shows how many are left. After that (or offline), the passage uses your words’ example sentences instead.': 'В день можно получить до 40 новых ИИ-рассказов — счётчик рядом с «Новый текст» показывает, сколько осталось. Потом (или без интернета) используются примеры предложений ваших слов.',
  'AI stories are switched off on the server — here are your words’ example sentences instead.': 'ИИ-рассказы на сервере выключены — вот примеры предложений ваших слов.',
  'You’ve used all of today’s AI stories — here are your words’ example sentences instead. New stories tomorrow!': 'Сегодняшние ИИ-рассказы закончились — вот примеры предложений ваших слов. Новые рассказы завтра!',
  'Today’s AI stories for everyone are used up — here are your words’ example sentences instead.': 'ИИ-рассказы на сегодня закончились у всех — вот примеры предложений ваших слов.',
  'The story took too long — here are your words’ example sentences instead. Try “New passage” again.': 'Рассказ писался слишком долго — вот примеры предложений ваших слов. Нажмите «Новый текст» ещё раз.',
  'Too few words for a story — here are their example sentences.': 'Слишком мало слов для рассказа — вот их примеры предложений.',
  'You’re offline — here are your words’ example sentences instead.': 'Нет интернета — вот примеры предложений ваших слов.',
  'The AI couldn’t write a story this time — here are your words’ example sentences instead. Try “New passage” again.': 'ИИ не смог написать рассказ — вот примеры предложений ваших слов. Нажмите «Новый текст» ещё раз.',
  // 0.9.9.4.4.2
  '★ From your spells': '★ Из ваших заклинаний', '★ yours': '★ ваше', 'From your All spells': 'Из ваших «Всех заклинаний»',
  'learned in total': 'выучено всего', 'study XP today': 'опыт за учёбу сегодня', 'new spells a day': 'новых заклинаний в день',
  // 0.9.9.4.4.1
  "Queued on its own. No levels to pick: the cards come from both players' All spells — 2 words of each level (N5–N1) from each of you.": 'Отдельная очередь. Уровни не выбираются: карты берутся из «Всех заклинаний» обоих игроков — по 2 слова каждого уровня (N5–N1) от каждого.',
  "Pick a hero, draft 10 face-down spell cards from both players' All spells, then cast them turn by turn: read the meaning, look at the kanji, write it from memory. Mana, heals and your hero's Omnipotence.": 'Выберите героя, наберите 10 закрытых карт заклинаний из «Всех заклинаний» обоих игроков, затем разыгрывайте их по очереди: прочитайте значение, посмотрите на кандзи, напишите его по памяти. Мана, лечение и Всемогущество вашего героя.',
  "Coin flip, then draft: take 2 face-down cards at a time (20 s for both) until you each have 10. You see colours, not kanji. The 20 cards come from both players' All spells: 4 of each level N5–N1, 2 of them yours and 2 your opponent's (a random word of that level if someone has none).": 'Жребий, затем набор: берите по 2 закрытые карты (20 с на обе), пока у каждого не будет 10. Видны цвета, а не кандзи. 20 карт берутся из «Всех заклинаний» обоих игроков: по 4 каждого уровня N5–N1, 2 из них ваши и 2 соперника (случайное слово этого уровня, если у кого-то такого нет).',
  "Deck Duel deals its cards from both players' All spells (2 of each level N5–N1 from each). Your level picks only change your character here.": 'В Дуэли колод карты берутся из «Всех заклинаний» обоих игроков (по 2 каждого уровня N5–N1 от каждого). Выбор уровней меняет здесь только вашего персонажа.',
  'Apply': 'Применить', 'Fewer new words from tomorrow': 'Меньше новых слов — с завтрашнего дня',
  // 0.9.9.4.4
  'Undo the last answer (Z)': 'Отменить последний ответ (Z)', 'Tap for this kanji': 'Нажмите, чтобы узнать об этом кандзи',
  'No details for this kanji yet': 'Сведений об этом кандзи пока нет', 'Parts': 'Части', 'Memory picture': 'Картинка-подсказка',
  'New passage': 'Новый текст', 'Words in this passage': 'Слова в этом тексте', 'Tap the kanji for its meaning': 'Нажмите на кандзи, чтобы узнать значение',
  'A short story with your words left out. Tap a blank, then the word that fits — the story around it is the clue. Tap any word for its meaning, and a kanji in it for its parts.':
    'Короткий рассказ, из которого убраны ваши слова. Нажмите на пропуск, затем на подходящее слово — подсказкой служит сам рассказ. Нажмите на любое слово, чтобы узнать значение, а на кандзи в нём — чтобы увидеть его части.',
  'No words with example sentences in this deck yet — pick another deck above, or study some spells first.': 'В этой колоде пока нет слов с примерами — выберите другую колоду выше или сначала изучите заклинания.',
  'For the daily task, get half the blanks right (4 of 8) — try a new passage!': 'Для ежедневного задания заполните верно половину пропусков (4 из 8) — попробуйте новый текст!',
  'How many new words of each level are added every day (0 = none).': 'Сколько новых слов каждого уровня добавляется в день (0 — ни одного).',
  'new words a day': 'новых слов в день',
  'Set how many new words of a level you want under “All spells” (e.g. N5: 10) — they are added today and every day.': 'Укажите в «Все заклинания», сколько новых слов какого уровня вы хотите (например, N5: 10) — они добавятся сегодня и будут добавляться каждый день.',
  'Onomatopoeia': 'Ономатопея', 'Onomatopoeia quiz': 'Тест по ономатопее',
  'Every giseigo, gitaigo and gijōgo: sounds (ワンワン), states (きらきら) and feelings (ドキドキ) — 20 new a session.': 'Все гисэйго, гитайго и гидзёго: звуки (ワンワン), состояния (きらきら) и чувства (ドキドキ) — по 20 новых за занятие.',
  '10 questions on giongo, gitaigo and gijōgo — sounds, states and feelings, 4 choices each.': '10 вопросов о гионго, гитайго и гидзёго — звуки, состояния и чувства, по 4 варианта.',
  'A short story written with your words — fill in the blanks from the context, then check.': 'Короткий рассказ из ваших слов — заполните пропуски по смыслу, затем проверьте.',
  '✍ Writing a story with your words…': '✍ Пишем рассказ из ваших слов…',
  'Choose the best meaning for the onomatopoeia.': 'Выберите лучшее значение для звукоподражания.', 'Which onomatopoeia has this meaning?': 'Какое звукоподражание имеет это значение?',
  'Which kind of onomatopoeia is it — a sound, a state or a feeling?': 'Какого это вида — звук, состояние или чувство?', 'Choose the word that fits the sentence.': 'Выберите слово, которое подходит к предложению.',
  '擬声語 (giseigo) — sound': '擬声語 (гисэйго) — звук', '擬態語 (gitaigo) — state / manner': '擬態語 (гитайго) — состояние / образ действия', '擬情語 (gijōgo) — feeling': '擬情語 (гидзёго) — чувство',
  'Taking an onomatopoeia quiz': 'Проходит тест по ономатопее',
  // 0.9.9.4.3
  'Do a JLPT quiz (7/10 or better)': 'Пройдите тест JLPT (7/10 или лучше)', 'Read a passage (4/8 or better)': 'Прочитайте текст (4/8 или лучше)',
  'For the daily task, get 7 out of 10 or better — try another quiz!': 'Для ежедневного задания нужно 7 из 10 или лучше — попробуйте ещё один тест!',
  'For the daily task, get half the blanks right (4 of 8) — try a new story!': 'Для ежедневного задания заполните верно половину пропусков (4 из 8) — попробуйте новый рассказ!',
  'Studying spells': 'Изучает заклинания', 'Taking a JLPT quiz': 'Проходит тест JLPT', 'Reading a passage': 'Читает текст', 'Playing the daily challenge': 'Проходит ежедневное испытание',
  'Customizing': 'Настраивает облик', 'Looking at their progress': 'Смотрит прогресс', 'Looking at match history': 'Смотрит историю матчей', 'With friends': 'С друзьями',
  // 0.9.9.4.2
  'Hiragana': 'Хирагана', 'Katakana': 'Катакана', 'Dakuon and handakuon (゛ ゜)': 'Дакутэн и хандакутэн (゛ ゜)', 'Combinations': 'Сочетания', 'Nothing here yet.': 'Здесь пока ничего нет.',
  'every word of each level — tap one to see it': 'все слова каждого уровня — нажмите на слово, чтобы посмотреть', 'Less': 'Меньше', 'More': 'Больше',
  'The brighter a day, the more you did — cards passed and games played, compared with your busiest day. Tap a day for details.': 'Чем ярче день, тем больше вы сделали — пройденные карточки и сыгранные игры по сравнению с самым активным днём. Нажмите на день, чтобы узнать подробности.',
  'Play offline': 'Играть без интернета', 'The server can\'t be reached right now.': 'Сервер сейчас недоступен.', 'Nothing saved on this device yet — sign in once while online.': 'На этом устройстве пока ничего не сохранено — войдите один раз онлайн.',
  // 0.9.9.4.1
  'Then open': 'Затем откройте', 'Files → Downloads': 'Файлы → Загрузки', '(or Chrome': '(или в Chrome', '⋮ → Downloads': '⋮ → Скачанные файлы', ') and tap': ') и нажмите',
  // 0.9.9.4
  'Get the app': 'Скачать приложение', 'Install Kanji Wizards': 'Установить Kanji Wizards', 'Phone or PC — from this browser': 'Телефон или ПК — прямо из браузера',
  'The app opens straight into the game and works offline too: Study spells, the JLPT quiz, reading passages, the daily challenge, Customize, Progress and match history. Online queue and private games need internet. Your account and progress are the same everywhere.':
    'Приложение сразу открывает игру и работает без интернета: изучение заклинаний, тест JLPT, тексты для чтения, ежедневное испытание, настройка, прогресс и история матчей. Для онлайн-очереди и приватных игр нужен интернет. Аккаунт и прогресс везде одни и те же.',
  'No store needed: it installs like an app, with its own icon.': 'Магазин не нужен: устанавливается как приложение, со своим значком.',
  'On iPhone / iPad (Safari): tap': 'На iPhone / iPad (Safari): нажмите', 'Share': 'Поделиться', 'Add to Home Screen': 'На экран «Домой»',
  'In Chrome or Edge: open the browser menu': 'В Chrome или Edge: откройте меню браузера', 'Install app': 'Установить приложение', '(or': '(или', 'Add to Home screen': 'Добавить на главный экран', 'or': 'или',
  'Windows': 'Windows', 'Android': 'Android',
  'Download and run the installer. If Windows says “protected your PC”, choose': 'Скачайте и запустите установщик. Если Windows пишет «Система защитила ваш компьютер», выберите',
  'More info → Run anyway': 'Подробнее → Выполнить в любом случае', '(the app isn\'t signed yet).': '(у приложения пока нет подписи).',
  'Download for Windows (.exe)': 'Скачать для Windows (.exe)', 'Download for Android (.apk)': 'Скачать для Android (.apk)',
  'Download the APK and open it; allow your browser to install apps when asked. No Google Play needed.': 'Скачайте APK и откройте его; разрешите браузеру устанавливать приложения, когда он спросит. Google Play не нужен.',
  'You\'re offline — this needs an internet connection.': 'Нет подключения к интернету — для этого он нужен.', 'You\'re offline.': 'Нет подключения к интернету.', 'Offline mode': 'Офлайн-режим',
  'You\'re offline. Study spells, the quiz, reading passages, the daily challenge and Customize still work — your progress syncs when you\'re back online.':
    'Нет интернета. Изучение заклинаний, тест, тексты, ежедневное испытание и настройка работают — прогресс синхронизируется, когда интернет вернётся.',
  'Back online — your progress is synced.': 'Интернет снова есть — прогресс синхронизирован.',
  'No internet connection. Sign in once while online — then Study spells and more work offline too.': 'Нет подключения к интернету. Войдите один раз онлайн — после этого изучение заклинаний и многое другое работают и без интернета.',
  'Kanji Wizards is installed — find it with your apps.': 'Kanji Wizards установлено — найдите его среди приложений.',
  'Please sign in again': 'Пожалуйста, войдите снова',
  // 0.9.9.3.3
  'A day counts for your streak when all four tasks are done — and gives +500 XP. Your best streak unlocks magic staffs.': 'День засчитывается в серию, когда выполнены все четыре задания, — и даёт +500 опыта. Лучшая серия открывает магические посохи.',
  'Daily streak kept!': 'Серия сохранена!',
  // 0.9.9.3.2
  'Words from': 'Слова из', '+ Add to…': '+ Добавить в…', 'That word is not in the dictionary': 'Этого слова нет в словаре', 'already in': 'уже в',
  'No words in this deck yet — pick another deck above, or study some spells first.': 'В этой колоде пока нет слов — выберите другую колоду выше или сначала изучите заклинания.',
  'A short story with blanks — pick a deck, fill them in with its words, then check.': 'Короткий рассказ с пропусками — выберите колоду, заполните пропуски её словами и проверьте.',
  // 0.9.9.3.1
  '🗑 Delete': '🗑 Удалить', 'Delete this account and all its progress': 'Удалить этот аккаунт и весь его прогресс', 'Beta border': 'Рамка Beta',
  'Finish the tutorial to unlock': 'Пройдите обучение, чтобы открыть', 'Finish the tutorial to get the Beta border': 'Пройдите обучение, чтобы получить рамку Beta', 'Thank you for playing the beta!': 'Спасибо, что играете в бету!',
  // 0.9.9.3
  'Ticked: goes to your deck. Tap to keep it out.': 'Отмечено: попадёт в колоду. Нажмите, чтобы не добавлять.', 'Ticked words go to': 'Отмеченные слова — в',
  '(ticked words go to your deck · tap a card to untick · 筆 = stroke order)': '(отмеченные слова попадут в колоду · нажмите на карточку, чтобы снять отметку · 筆 — порядок черт)',
  'Missed — ticked words go to Struggling spells': 'Ошибки — отмеченные слова попадут в «Трудные заклинания»',
  'Fill each blank with one of your words (the furigana is your clue). Tap any word in the story for its meaning.': 'Заполните пропуски своими словами (подсказка — фуригана). Нажмите на любое слово в тексте, чтобы увидеть значение.',
  'Your words — tap a blank, then a word': 'Ваши слова — нажмите на пропуск, затем на слово', 'Check': 'Проверить', 'Perfect — every word in its place!': 'Идеально — все слова на месте!',
  'Green: right. Red: the right word, with yours crossed out.': 'Зелёный — верно. Красный — правильное слово, ваше зачёркнуто.', 'Tap, then pick a word below': 'Нажмите, затем выберите слово ниже',
  'Study 10 spells (any deck)': 'Изучите 10 заклинаний (любая колода)', 'Do a JLPT quiz': 'Пройдите тест JLPT', 'Play the daily challenge': 'Сыграйте ежедневное испытание',
  'Read a passage (fill in the blanks)': 'Прочитайте текст (заполните пропуски)', 'Streak kept today — well done!': 'Серия сегодня сохранена — отлично!', 'Daily streak tasks': 'Задания для серии',
  'Today’s streak tasks': 'Задания на сегодня', 'days in a row': 'дней подряд', 'Go': 'Перейти', '🔥 Keep your daily streak': '🔥 Сохраните ежедневную серию',
  'A day counts for your streak when all four tasks are done. Your best streak unlocks magic staffs.': 'День засчитывается в серию, когда выполнены все четыре задания. Лучшая серия открывает магические посохи.',
  'Don’t show this when I log in': 'Не показывать при входе', 'daily streak (days)': 'серия (дни)',
  'A short story with blanks — fill them in with your struggling words, then check.': 'Короткий рассказ с пропусками — заполните их трудными словами и проверьте.',
  'Swipe the card: ← Again · Hard   |   Okay · Easy →': 'Смахните карточку: ← Снова · Трудно   |   Нормально · Легко →',
  'Profile': 'Профиль', '✦ Unlocked ✦': '✦ Открыто ✦', 'No border': 'Без рамки',
  'Your profile card: a border round your picture (unlocks at levels 1, 5, 10 and 15) and up to 3 achievement badges under your name.': 'Ваша карточка профиля: рамка вокруг фото (открываются на 1, 5, 10 и 15 уровнях) и до 3 значков достижений под именем.',
  'Tap an achievement you have earned to show it under your name; tap it again to take it off.': 'Нажмите на полученное достижение, чтобы показать его под именем; нажмите ещё раз, чтобы убрать.',
  'No badges yet — pick up to 3 below.': 'Значков пока нет — выберите до 3 ниже.',
};

// names of the monthly seasons and the staffs (staff names in the genitive: «Посох Бури»)
const SEASON_RU: Record<string, string> = { Frost: 'Иней', Sakura: 'Сакура', Blossom: 'Цветение', Rain: 'Дождь', Jade: 'Нефрит', Sun: 'Солнце', Abyss: 'Бездна', Thunder: 'Гром', Moon: 'Луна', Harvest: 'Урожай', Maple: 'Клён', Starlight: 'Звёздный свет' };
const STAFF_RU: Record<string, string> = { Verdant: 'Листвы', Ember: 'Углей', Tide: 'Прилива', Storm: 'Бури', Void: 'Пустоты', Frost: 'Инея', Blossom: 'Цветения', Jade: 'Нефрита', Abyss: 'Бездны', Moon: 'Луны', Maple: 'Клёна' };
const MASTERY_RU: Record<string, string> = { 'Not in your spells yet': 'Ещё нет в заклинаниях', New: 'Новые', Learning: 'Изучаются', Learned: 'Выучены', 'Mastered (3+ weeks)': 'Освоены (3+ недели)', 'Your spells': 'Ваши заклинания', 'Learned & mastered': 'Выучены и освоены', 'Not started': 'Не начаты', All: 'Все' };
type Rep = string | ((...m: string[]) => string);
const MODE_RU: Record<string, string> = { '1v1 Kanji Reading': '1 на 1: Чтение кандзи', '1v1 Kanji Writing': '1 на 1: Написание кандзи', 'Boss Elimination': 'Битва с боссом', '1v1 Rapid': '1 на 1: Блиц', 'Deck Duel': 'Дуэль колод', 'Kanji Reading': 'Чтение кандзи', 'Kanji Writing': 'Написание кандзи' };
const mode = (m: string) => MODE_RU[m] ?? m;
const plural = (n: number, one: string, few: string, many: string) => {
  const a = Math.abs(n) % 100, b = a % 10;
  return a > 10 && a < 20 ? many : b === 1 ? one : b >= 2 && b <= 4 ? few : many;
};
/** Texts with numbers / names in them. */
const PATTERNS: Array<[RegExp, Rep]> = [
  [/^Lv (\d+)$/, 'Ур. $1'],
  // Deck Duel turn log (0.9.9)
  [/^(You|.+?) cast (\S+) ✓ — (.+)$/, (_, w, k, rest) => `${w === 'You' ? 'Вы' : w} — ${k} ✓ — ${rest.replace(/hit (.+?) for −(\d+) HP/, (_m: string, t: string, n: string) => `удар по «${t === 'you' ? 'вам' : t}»: −${n} HP`).replace(/\+(\d+) HP/, '+$1 HP').replace(/\+(\d+)◆ mana/, '+$1◆ маны')}`],
  [/^(You|.+?) missed (\S+) — the (.+) fizzled$/, (_, w, k, l) => `${w === 'You' ? 'Вы' : w}: ошибка в ${k} — «${tr(l)}» рассеялось`],
  [/^(You|.+?) played a (.+?) card(.*)$/, (_, w, l, rest) => `${w === 'You' ? 'Вы сыграли' : `${w} сыграл(а)`} карту «${tr(l)}»${rest.replace(/(\d+)◆/, '$1◆')}`],
  [/^(You|.+?) guessed wrong$/, (_, w) => (w === 'You' ? 'Вы не угадали' : `${w} не угадал(а)`)],
  [/^(You|.+?) read (\S+) first — −(\d+) HP to (.+)$/, (_, w, k, n, t) => `${w === 'You' ? 'Вы' : w} первым прочитал(а) ${k} — −${n} HP: ${t === 'you' ? 'вам' : t}`],
  [/^Nobody read (\S+) in time$/, 'Никто не успел прочитать $1'],
  [/^(You|.+?) (had no mana for any card|ran out of time) — turn skipped, −(\d+) HP$/, (_, w, why, n) => `${w === 'You' ? 'Вы' : w}: ${why.startsWith('had') ? 'нет маны ни на одну карту' : 'время вышло'} — ход пропущен, −${n} HP`],
  [/^(You|.+?) skipped the turn: −(\d+) HP$/, (_, w, n) => `${w === 'You' ? 'Вы пропустили' : `${w} пропустил(а)`} ход: −${n} HP`],
  [/^(You|.+?) ran out of cards — Round (\d+) draft \(HP and mana stay\)$/, (_, w, r) => `${w === 'You' ? 'У вас' : `У ${w}`} кончились карты — драфт раунда ${r} (HP и мана сохраняются)`],
  [/^Round (\d+): (You|.+?) won the coin flip and picks? first$/, (_, r, w) => `Раунд ${r}: ${w === 'You' ? 'вы выиграли' : `${w} выиграл(а)`} жребий и выбираете первым`],
  [/^(You|.+?) used Omnipotence — (.+)$/, (_, w, p) => `${w === 'You' ? 'Вы применили' : `${w} применил(а)`} Всемогущество — ${p}`],
  [/^(You|.+?): Arcane reserve — (\+2 random cards|\+30 mana)$/, (_, w, x) => `${w === 'You' ? 'Вы' : w}: Тайный запас — ${x === '+30 mana' ? '+30 маны' : '+2 случайные карты'}`],
  [/^Turn (\d+)$/, 'Ход $1'],
  [/^(\d+) online$/, '$1 в сети'],
  [/^From (.+)'s spells$/, 'Из заклинаний: $1'],
  [/^(\d+) new spells a day$/, '$1 новых заклинаний в день'],
  [/^Adds up to (\d+) new words to “All spells” today$/, 'Сегодня добавит до $1 новых слов во «Все заклинания»'],
  [/^(\d+) of (\d+) \(last 30 days\)$/, '$1 из $2 (за 30 дней)'],
  [/^(\d+) of (\d+)$/, '$1 из $2'],
  [/^(\d+) started$/, 'начато: $1'], [/^(\d+) finished$/, 'завершено: $1'],
  [/^(\d{4}-\d\d-\d\d): (\d+) active, (\d+) new$/, '$1: активных $2, новых $3'],
  [/^write (\d+) kanji$/, 'напишите кандзи: $1'],
  [/^(\d+) damage · (\d+) mana$/, '$1 урона · $2 маны'],
  [/^heals (\d+) · (\d+) mana$/, 'лечит $1 · $2 маны'],
  [/^\+(\d+) mana · free$/, '+$1 маны · бесплатно'],
  [/^(.+) — (Bolt|Frost|Mana|Heal|Inferno): (.+)$/, (_, c, l, rest) => `${c} — ${tr(l)}: ${rest.replace(/(\d+) damage/, '$1 урона').replace(/heal (\d+)/, 'лечит $1').replace(/\+(\d+) mana/, '+$1 маны').replace(/costs (\d+) mana/, 'стоит $1 маны')}`],
  [/^Write all (\d+) kanji, left to right$/, 'Напишите все кандзи ($1) слева направо'],
  [/^(\d+) active days this month$/, (_, n) => `${n} ${plural(+n, 'активный день', 'активных дня', 'активных дней')} в этом месяце`],
  [/^(.+) — view profile$/, '$1 — профиль'],
  [/^The staff in your hand \(other players see it too\)\. Classic staffs unlock with your login streak — your best: (.+)\. Seasonal staffs are monthly rewards \(see Progress\)\.$/, (_, d) => `Посох в вашей руке (его видят и другие игроки). Классические посохи открываются серией входов — ваш рекорд: ${d.replace(/(\d+) days?/, (_m: string, n: string) => `${n} ${plural(+n, 'день', 'дня', 'дней')}`)}. Сезонные посохи — награды месяца (см. «Прогресс»).`],
  [/^(\w+) reward: complete that month's goals \(Progress page\)\. Wraps you at 5 in a row and during your Omnipotence\.$/, 'Награда месяца ($1): выполните цели этого месяца (страница «Прогресс»). Окутывает вас при 5 подряд и во время Всемогущества.'],
  [/^Unlocks at a (\d+)-day streak$/, (_, n) => `Откроется при серии ${n} ${plural(+n, 'день', 'дня', 'дней')}`],
  [/^(\w+) Staff$/, (_, x) => (STAFF_RU[x] ? `Посох ${STAFF_RU[x]}` : `Посох ${x}`)],
  [/^(\w+) flames$/, (_, x) => `Пламя «${SEASON_RU[x] ?? x}»`],
  [/^(.+) · (\d+)$/, (_, x, n) => (MASTERY_RU[x] ? `${MASTERY_RU[x]} · ${n}` : `${x} · ${n}`)],
  [/^Locked · (.+)$/, (_, x) => `Закрыто · ${tr(x)}`],
  [/^Unlocks with the (\S+) goals$/, 'Откроется за цели месяца: $1'],
  [/^(\S+) goals$/, 'Цели месяца: $1'],
  [/^(\d+)-day streak$/, (_, n) => `серия ${n} ${plural(+n, 'день', 'дня', 'дней')}`],
  [/^AI · knows (N\d)$/, 'ИИ · знает $1'],
  [/^AI player · knows (N\d)$/, 'ИИ-игрок · знает $1'],
  [/^(.+) \(AI Beginner\)$/, '$1 (ИИ-новичок)'],
  [/^(.+) \(AI (N\d)\)$/, '$1 (ИИ $2)'],
  [/^Level (\d+)$/, 'Уровень $1'],
  [/^Unlocks at level (\d+)$/, 'Откроется на уровне $1'],
  [/^Level (\d+)! Check Customize for new unlocks\.$/, 'Уровень $1! Загляните в «Кастомизацию» — там новое.'],
  [/^(.+) unlocks at level (\d+) — win a few games first\. \(A friend can still invite you\.\)$/, (_, m, l) => `${mode(m)} откроется на уровне ${l} — сначала выиграйте несколько игр. (Друг всё равно может вас пригласить.)`],
  [/^Invited · (\d+)s$/, 'Приглашён · $1 с'],
  [/^Wait (\d+) s before inviting them again$/, 'Подождите $1 с перед повторным приглашением'],
  [/^Your friend is in a game right now — invite them when it.s over$/, 'Ваш друг сейчас в игре — пригласите его, когда игра закончится'],
  [/^(.+) invites you$/, '$1 приглашает вас'],
  [/^to (.+) — room ([A-Z]{4})$/, (_, m, c) => `в «${mode(m)}» — комната ${c}`],
  [/^Join their (.+) room$/, (_, m) => `Войти в комнату «${mode(m)}»`],
  [/^(.+) wants to be your friend — see Friends$/, '$1 хочет дружить — см. «Друзья»'],
  [/^(.+) accepted your friend request$/, '$1 принял(а) ваш запрос в друзья'],
  [/^You and (.+) are now friends!$/, 'Вы с $1 теперь друзья!'],
  [/^You already asked (.+)\.$/, 'Вы уже отправили запрос $1.'],
  [/^Request sent to (.+)\.$/, 'Запрос отправлен: $1.'],
  [/^Requests \((\d+)\)$/, 'Запросы ($1)'],
  [/^Friends \((\d+)\) · (\d+) online$/, 'Друзья ($1) · $2 в сети'],
  [/^Playing (.+)$/, (_, m) => `Играет: ${mode(m)}`],
  [/^Lobby · (.+)$/, (_, m) => `Лобби · ${mode(m)}`],
  [/^Results · (.+)$/, (_, m) => `Итоги · ${mode(m)}`],
  [/^In (.+) lobby$/, (_, m) => `В лобби: ${mode(m)}`],
  [/^Player found — (.+)!$/, (_, m) => `Игрок найден — ${mode(m)}!`],
  [/^(.+) — press Accept$/, (_, m) => `${mode(m)} — нажмите «Принять»`],
  [/^(\d+) \/ (\d+) accepted( — waiting for the others…)?$/, (_, a, n, w) => `${a} / ${n} приняли${w ? ' — ждём остальных…' : ''}`],
  [/^(\d+)\/(\d+) ready( — waiting for the others…)?$/, (_, a, n, w) => `${a}/${n} готовы${w ? ' — ждём остальных…' : ''}`],
  [/^Start — party of (\d+)$/, 'Начать — отряд из $1'],
  [/^Start now, or wait for more teammates \(up to (\d+)\)\.$/, 'Начните сейчас или подождите союзников (до $1).'],
  [/^Waiting for (.+)…$/, 'Ждём: $1…'],
  [/^(.+) is choosing a card$/, '$1 выбирает карту'],
  [/^The dragon inhales… (\d+)$/, 'Дракон набирает воздух… $1'],
  [/^Fire breath! Everyone takes (\d+)$/, 'Огненное дыхание! Все получают $1'],
  [/^The dragon claws (.+) for (\d+)$/, 'Дракон бьёт когтями $1 на $2'],
  [/^write (\d+) kanji$/, 'напишите кандзи: $1'],
  [/^Write all (\d+) characters, left to right$/, 'Напишите все $1 знака(ов) слева направо'],
  [/^The pad read: (.+)$/, 'Панель распознала: $1'],
  [/^Monthly goals complete! (.+) unlocked — equip it in Customize\.$/, 'Месячные цели выполнены! Открыто: $1 — наденьте в «Кастомизации».'],
  [/^(\d+) struggling spells are waiting\. Study them down to (\d+) to unlock the game modes\.$/, 'Ждут трудные заклинания: $1. Повторите их, пока не останется $2, чтобы открыть режимы.'],
  [/^(\d+) left · (All spells|Struggling spells|Custom spells)$/, (_, n, d) => `осталось ${n} · ${d === 'All spells' ? 'Все заклинания' : d === 'Custom spells' ? 'Свои заклинания' : 'Трудные заклинания'}`],
  [/^(\d+)-day streak$/, (_, n) => `серия ${n} ${plural(+n, 'день', 'дня', 'дней')}`],
  [/^Unlocks at (?:a )?(\d+)-day streak$/, (_, n) => `Откроется при серии ${n} ${plural(+n, 'день', 'дня', 'дней')}`],
  [/^Unlocks at level (\d+)$/, 'Откроется на уровне $1'],
  [/^Unlocks at (?:a )?(\S+) goals$/, 'Откроется за цели месяца: $1'],
  [/^Log in (\d+) days in a row to unlock the (.+) \(your best: (\d+)\)$/, 'Заходите $1 дней подряд, чтобы открыть $2 (ваш рекорд: $3)'],
  [/^Reach level (\d+) to unlock (.+)$/, 'Достигните уровня $1, чтобы открыть: $2'],
  [/^(.+): (\w+) season$/, (_, m, x) => `${m}: сезон «${SEASON_RU[x] ?? x}»`],
  [/^Unlocked: (.+) — equip it in Customize$/, (_, x) => `Открыто: ${tr(x)} — наденьте в «Кастомизации»`],
  [/^Reward: (.+) \(only this month\)$/, (_, x) => `Награда: ${tr(x)} (только в этом месяце)`],
  [/^(\d+) active days in the last 6 months$/, (_, n) => `${n} ${plural(+n, 'активный день', 'активных дня', 'активных дней')} за последние 6 месяцев`],
  [/^([+−-]?[\d,]+) vs last week$/, '$1 к прошлой неделе'],
  [/^Every correct word gives 30 XP \(\+100 for a perfect 10\)\. New words at (.+) your time\.$/, 'Каждое верное слово — 30 опыта (+100 за все 10). Новые слова в $1 по вашему времени.'],
  [/^Challenge of (.+)$/, 'Испытание: $1'],
  [/^Two words each from N5 to N1, easiest first\. Type the reading \(kana or romaji\) and press Enter — (\d+) s per word\. One try a day: most correct wins, then fastest\.$/, 'По два слова с N5 до N1, от простых к сложным. Напишите чтение (кана или ромадзи) и нажмите Enter — $1 с на слово. Одна попытка в день: побеждает больше верных, затем быстрее.'],
  [/^10 new words at (.+) your time\.$/, '10 новых слов в $1 по вашему времени.'],
  [/^Word (\d+) of (\d+) · (.+)$/, 'Слово $1 из $2 · $3'],
  [/^Show more \((\d+) left\)$/, 'Показать ещё (осталось $1)'],
  [/^Offline mode · (\d+) to sync$/, 'Офлайн-режим · ждут синхронизации: $1'],
  [/^Daily challenge: (\d+)\/10(?: · \+(\d+) XP)? · your rank comes when you're back online$/, (_, c, x) => `Ежедневное испытание: ${c}/10${x ? ` · +${x} опыта` : ''} · место узнаете, когда появится интернет`],
  [/^Daily challenge: (\d+)\/10 · rank (\d+) of (\d+)(?: · \+(\d+) XP)?$/, (_, c, r, p, x) => `Ежедневное испытание: ${c}/10 · место ${r} из ${p}${x ? ` · +${x} опыта` : ''}`],
  [/^([\d.]+) s · rank (\d+) today$/, '$1 с · место $2 сегодня'],
  [/^Read the meaning — the kanji shows in (\d+) s$/, 'Прочитайте значение — кандзи появится через $1 с'],
  [/^Round (\d+) — new cards! HP, mana and powers stay as they are\.$/, 'Раунд $1 — новые карты! HP, мана и силы сохраняются.'],
  [/^ready in (\d+) turns?$/, (_, n) => `готово через ${n} ${plural(+n, 'ход', 'хода', 'ходов')}`],
  [/^Your turn — choose a card( \(Frenzy: 2 cards\))?$/, (_, f) => `Ваш ход — выберите карту${f ? ' (Неистовство: 2 карты)' : ''}`],
  [/^Playing since (.+)$/, 'Играет с $1'],
  [/^(\d+) online now · (\d+) accounts · (\d+) banned$/, 'Сейчас в сети: $1 · аккаунтов: $2 · заблокировано: $3'],
  [/^last day: (.+)$/, 'последний день: $1'],
  [/^(\d+) learned today · (\d+) learned in total$/, 'выучено сегодня: $1 · всего: $2'],
];

// ── word meanings ───────────────────────────────────────────────────────────
// The vocabulary's English meanings, translated once for the whole word list (public/meanings-ru.json,
// English meaning → Russian). Loaded only in Russian; until it arrives meanings stay English, then the
// page is walked again.
let MEANINGS: Record<string, string> | null = null;
const meaning = (s: string): string | undefined => MEANINGS?.[s];
/** A word's meaning in the player's language (Russian when it's loaded, else the English as it is). */
export const meaningIn = (en: string): string => (lang() === 'ru' ? MEANINGS?.[en] ?? en : en);

/** A text that is, or ends with, a word's meaning: "meaning", "— meaning", "reading — meaning",
 *  "kanji · reading · meaning" (optionally "— read: …"). */
function trMeaning(s: string): string | undefined {
  if (!MEANINGS) return undefined;
  const m0 = meaning(s);
  if (m0) return m0;
  let m = /^— (.+)$/.exec(s);
  if (m && meaning(m[1])) return `— ${meaning(m[1])}`;
  m = /^(.+ · .+ · )(.+?)( — read: .+)?$/.exec(s);
  if (m && meaning(m[2])) return `${m[1]}${meaning(m[2])}${m[3] ? m[3].replace(' — read: ', ' — распознано: ') : ''}`;
  m = /^([^A-Za-z]+) — (.+)$/.exec(s);
  if (m && meaning(m[2])) return `${m[1]} — ${meaning(m[2])}`;
  return undefined;
}

export function tr(s: string): string {
  if (lang() !== 'ru') return s;
  const exact = RU[s] ?? trMeaning(s);
  if (exact) return exact;
  for (const [re, rep] of PATTERNS) {
    if (!re.test(s)) continue;
    const out = typeof rep === 'string' ? s.replace(re, rep) : s.replace(re, (...m) => rep(...(m.slice(0, -2) as string[])));
    if (out !== s) return out; // a pattern that changes nothing lets the next one try
  }
  return s;
}

// ── applying it to the page ─────────────────────────────────────────────────
const SKIP = 'script, style, svg, textarea, [lang="ja"], [data-no-i18n], .k, .kanji, .chat-log';
const ATTRS = ['placeholder', 'title', 'aria-label'] as const;

function translateText(node: Text) {
  const raw = node.data;
  const s = raw.trim();
  if (!s || !/[A-Za-z]/.test(s)) return;
  const parent = node.parentElement;
  if (!parent || parent.closest(SKIP)) return;
  const t = tr(s);
  if (t !== s) node.data = raw.replace(s, t);
}
function translateAttrs(el: Element) {
  if (el.closest(SKIP)) return;
  for (const a of ATTRS) {
    const v = el.getAttribute(a);
    if (v && /[A-Za-z]/.test(v)) { const t = tr(v.trim()); if (t !== v.trim()) el.setAttribute(a, t); }
  }
}
function walk(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) return translateText(root as Text);
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const el = root as Element;
  if (el.matches(SKIP)) return;
  translateAttrs(el);
  const it = document.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  for (let n = it.nextNode(); n; n = it.nextNode()) {
    if (n.nodeType === Node.TEXT_NODE) translateText(n as Text);
    else translateAttrs(n as Element);
  }
}

/** Start translating the page (Russian only). */
let started = false;
/** First-run tutorial: switch to Russian at once (no reload), so the tutorial goes on in Russian. */
export function useRussianNow() {
  try { localStorage.setItem(KEY, 'ru'); } catch { /* private mode */ }
  initI18n();
}
export function initI18n() {
  document.documentElement.lang = lang();
  if (lang() !== 'ru' || started) return;
  started = true;
  walk(document.body);
  fetch('/meanings-ru.json')
    .then((r) => (r.ok ? r.json() : null))
    .then((m: Record<string, string> | null) => { if (m) { MEANINGS = m; walk(document.body); } })
    .catch(() => { /* meanings stay English */ });
  new MutationObserver((list) => {
    for (const m of list) {
      if (m.type === 'characterData') translateText(m.target as Text);
      else if (m.type === 'attributes') translateAttrs(m.target as Element);
      else m.addedNodes.forEach(walk);
    }
  }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...ATTRS] });
}
