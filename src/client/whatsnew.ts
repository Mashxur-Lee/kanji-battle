// "What's new" (main menu, bottom): the game version and what each patch changed — in English or Russian.
// A small "new" tag shows until you've opened it once after an update.
import { VERSION } from '../shared/version';
import { lang } from './i18n';

interface Patch { v: string; date: string; en: string[]; ru: string[] }

const PATCHES: Patch[] = [
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
    document.getElementById('newsBody')!.replaceChildren(...PATCHES.map((p, i) => {
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
