import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Moon, Brain, Heart, PlaneTakeoff, Map, 
  Camera, Play, Phone, Mail, MessageCircle, 
  MapPin, Globe, Award, Star, Compass, UserCircle2,
  Flame, Activity, Building2, Key, TrendingUp, Diamond, Wallet, Crown,
  QrCode, Share2, Copy, X, Check, MousePointerClick, RefreshCw, Droplets
} from 'lucide-react';

// Кастомная иконка Instagram (т.к. из lucide-react бренды удалили)
const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

// ==========================================
// ⚙️ НАСТРОЙКИ КОНТЕНТА (МЕНЯТЬ ТЕКСТ, ФОТО И ССЫЛКИ ТОЛЬКО ЗДЕСЬ!)
// ==========================================
const CONTENT = {
  esoteric: {
    bgImage: '/bg-esoteric.jpg', // Название файла в папке public
    avatar: '/avatar-esoteric.jpg', // Индивидуальное фото для эзотерика
    badge: 'Таро & Астрология',
    name1: 'Алена',              // Первая строка имени
    name2: 'Светлая',                // Вторая строка имени
    role: 'Элитный Астролог',
    status: 'Запись открыта',
    username: '@elena_myth',
    subUsername: 'Премиум Доступ',
    quote1: 'Открой двери в свое',
    quote2: 'истинное предназначение',
    tgLink: 'https://t.me/твой_юзернейм',
    instLink: 'https://instagram.com/твой_юзернейм',
    actionText: 'Личный Расклад',
    actionLink: 'https://t.me/твой_юзернейм?text=Привет!%20Хочу%20расклад'
  },
  psychologist: {
    bgImage: '/bg-psychologist.jpg',
    avatar: '/avatar-psychologist.jpg', // Индивидуальное фото для психолога
    badge: 'Терапия',
    name1: 'Алена',
    name2: 'СВЕТЛАЯ',
    role: 'Клинический Психолог',
    status: 'Онлайн',
    username: '@psy_svetplaya',
    subUsername: 'Бережный подход',
    stat1Title: 'Практика',
    stat1Value: '12 лет',
    stat2Title: 'Прием',
    stat2Value: 'МСК / Web',
    quote1: 'Здесь безопасно быть собой.',
    quote2: 'Начнем путь к гармонии вместе.',
    actionText: 'Записаться на сессию',
    actionLink: 'https://t.me/твой_юзернейм?text=Здравствуйте!%20Хочу%20на%20сессию'
  },
  travel: {
    bgImage: '/bg-travel.jpg',
    avatar: '/avatar-travel.jpg', // Индивидуальное фото для турагента
    badge: 'VIP Tours',
    name1: 'МАКСИМ',
    name2: 'ВОЯЖ',
    role: 'Премиум Отдых',
    statusBack: 'Первый Класс',
    agentName: 'Max Voyage',
    destination: 'Весь Мир',
    tgText: 'Telegram Консьерж',
    tgLink: 'https://t.me/твой_юзернейм',
    tourText: 'Подобрать тур',
    tourLink: 'https://t.me/твой_юзернейм',
    marquee: ['✈️ СЕЙШЕЛЫ', '⭐ МАЛЬДИВЫ', '🌴 БАЛИ', '🍍 ТАЙЛАНД', '🧿 ТУРЦИЯ'] // Текст бегущей строки
  },
  blogger: {
    bgImage: '/bg-blogger.jpg',
    avatar: '/avatar-blogger.jpg', // Индивидуальное фото для блогера
    badge: 'В эфире',
    name1: 'ALEX',
    name2: 'NEO',
    role: 'Лайфстайл Креатор',
    username: '@alexneo_real',
    subUsername: 'Контент Креатор',
    stat1Title: 'YouTube',
    stat1Value: '850K',
    stat2Title: 'Instagram',
    stat2Value: '1.2M',
    quote1: 'Открыт для сотрудничества',
    quote2: 'и медиа',
    actionText: 'Написать',
    actionLink: 'https://t.me/твой_юзернейм?text=Привет!%20По%20поводу%20рекламы'
  },
  fitness: {
    bgImage: '/bg-fitness.jpg',
    avatar: '/avatar-fitness.jpg', // Индивидуальное фото для тренера
    badge: 'Трансформация',
    name1: 'Алена',
    name2: 'Светлая',
    role: 'Элитный Тренер',
    username: '@alena_sila',
    subUsername: 'Без Отговорок',
    stat1Title: 'Лет Опыта',
    stat1Value: '8',
    stat2Title: 'Трансформаций',
    stat2Value: '500+',
    link1Text: 'Программа Питания',
    link1Url: 'https://t.me/твой_юзернейм',
    link2Text: 'Онлайн Ведение',
    link2Url: 'https://t.me/твой_юзернейм',
    actionText: 'Начать работу',
    actionLink: 'https://t.me/твой_юзернейм?text=Хочу%20тело%20мечты!'
  },
  broker: {
    bgImage: '/bg-broker.jpg',
    bgBack: '/bg-broker.jpg',
    avatar: '/avatar-broker.jpg', // Индивидуальное фото для брокера
    badge: 'Приватные ключи',
    name1: 'АРТУР',
    name2: 'ГРАНД',
    role: 'Элитная Недвижимость',
    username: '@artur_grand',
    subUsername: 'Премиум Брокер',
    stat1Title: 'Вилл в базе',
    stat1Value: '120+',
    stat2Title: 'Объем сделок',
    stat2Value: '$50M+',
    quote: 'Доступ к закрытым объектам off-market',
    actionText: 'Связаться в Telegram',
    actionLink: 'https://t.me/твой_юзернейм'
  },
  money: {
    bgImage: '/bg-money.jpg',
    avatar: '/avatar-money.jpg', // Индивидуальное фото для заработка
    badge: 'Умные Деньги',
    name1: 'МАКС',
    name2: 'ПРОФИТ',
    role: 'Цифровой Капитал',
    status: 'Команда 200+',
    username: '@max_profit',
    subUsername: '< Проверен />',
    stat1Title: 'Общий Объем',
    stat1Value: '$1.2M+',
    stat2Title: 'Участники',
    stat2Value: '204',
    infoTitle: 'Система заработка',
    infoSub: 'v.2.0',
    placesLeft: 'Осталось 15 мест',
    actionText: 'Забрать доступ',
    actionLink: 'https://t.me/твой_юзернейм'
  },
  starter: {
    bgImage: '/bg-starter.jpg', // Загрузи сюда текстуру черного шелка или абстрактного золота
    badge: 'Digital Визитка',
    title1: 'НОВЫЙ УРОВЕНЬ',
    title2: 'ТВОЕГО БРЕНДА',
    role: 'WOW-эффект обеспечен',
    instruction1: 'Выбери шаблон в меню выше',
    instruction2: 'Нажми, чтобы перевернуть',
    backTitle: 'Что ты получаешь?',
    benefit1Title: 'WOW-Эффект',
    benefit1Text: 'Запоминаешься сразу',
    benefit2Title: 'Разовая оплата',
    benefit2Text: 'Без абонентской платы',
    benefit3Title: 'Личный домен',
    benefit3Text: 'имя.домен.ru',
    benefit4Title: 'Без VPN',
    benefit4Text: 'Работает всегда',
    benefit5Title: 'Удобство',
    benefit5Text: 'Контакты в 1 клик',
    benefit6Title: 'Статус',
    benefit6Text: 'Премиальный имидж',
    actionText: 'Заказать визитку',
    actionLink: 'https://t.me/elenlime?text=Привет!%20Хочу%20такую%20же%20визитку!'
  },
  nail: {
    bgImage: '/bg-nail.jpg',
    avatar: '/avatar-nail.jpg',
    badge: 'Nail Artist',
    name1: 'АЛИНА',
    name2: 'РОУЗ',
    role: 'Premium Aesthetics',
    status: 'Есть окошки',
    username: '@alina_nails',
    subUsername: 'Идеальные блики',
    service1: 'Аппаратный маникюр',
    service2: 'Наращивание',
    service3: 'Smart-педикюр',
    actionText: 'Записаться на ноготочки',
    actionLink: 'https://t.me/твой_юзернейм'
  },
  alfa: {
    bgImage: '/bg-alfa.jpg',
    avatar: '/avatar-alfa.jpg',
    badge: 'АГЕНТ ВЛИЯНИЯ',
    name1: 'ВИКТОР',
    name2: 'ГРОМОВ',
    role: 'Альфа Партнер',
    status: 'Топ-Лидер',
    username: '@gromov_alfa',
    subUsername: 'Корпоративный Elite',
    stat1Title: 'Доход команды',
    stat1Value: '5M+',
    stat2Title: 'Партнеров',
    stat2Value: '1200+',
    service1: 'Заработок с нуля',
    service2: 'Построение сети',
    service3: 'Выдача продуктов',
    actionText: 'Стать Своим',
    actionLink: 'https://t.me/твой_юзернейм'
  }
};

// --- Глобальные стили для сложных анимаций (вставляем прямо в компонент) ---
const globalStyles = `
  body {
    background-color: #0a0a0a;
    overscroll-behavior: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  @keyframes float {
    0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
    50% { transform: translateY(-15px) rotateX(2deg) rotateY(-2deg); }
    100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .glass-panel {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .card-preserve-3d {
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
  }
  .card-backface-hidden {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }
  .bg-noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.05;
    mix-blend-mode: overlay;
  }
  @keyframes scroll-left {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll-left 15s linear infinite;
  }
  @keyframes spark-explode {
    0% { transform: translate(0, 0) scale(0.5); opacity: 0.8; }
    100% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 0.6; }
  }
  @keyframes spark-wander {
    0% { transform: translate(var(--tx), var(--ty)) scale(1); opacity: 0.6; }
    33% { transform: translate(calc(var(--tx) * 1.5 + var(--wx1)), calc(var(--ty) * 1.5 + var(--wy1))) scale(1.5); opacity: 0.8; }
    66% { transform: translate(calc(var(--tx) * 2.5 + var(--wx2)), calc(var(--ty) * 2.5 + var(--wy2))) scale(1.2); opacity: 0.5; }
    100% { transform: translate(calc(var(--tx) * 4 + var(--wx3)), calc(var(--ty) * 4 + var(--wy3))) scale(0.8); opacity: 0; }
  }
  .spark-particle {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.4);
    pointer-events: none;
    /* Сначала мягкий взрыв (0.8s), затем ооочень медленный улет за экран (20-40s) */
    animation: 
      spark-explode 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards,
      spark-wander var(--wt) linear 0.8s forwards;
  }
  
  /* === АНИМАЦИИ ДЛЯ ЭФФЕКТА СГОРАЮЩЕЙ БУМАГИ === */
  .clip-burn-start {
    clip-path: circle(0% at 100% 0%); /* Старт из правого верхнего угла */
    opacity: 1;
  }
  .clip-burn-end {
    clip-path: circle(300% at 100% 0%); /* Увеличили со 250% до 300%, чтобы точно достало до левого нижнего угла! */
    opacity: 1;
  }
  .clip-burn-glow {
    clip-path: circle(305% at 100% 0%); /* Пропорционально увеличили свечение */
    opacity: 0;
  }
  .burn-img-transition {
    transition: clip-path 3.5s ease-in-out; /* Плавно и без рывков */
    /* Убрали will-change и translateZ(0), так как они убивали SVG-фильтр рваной бумаги */
  }
  .burn-glow-transition {
    /* Огненный край расширяется вместе с фото, плавно затухая в конце */
    transition: clip-path 3.5s ease-in-out, opacity 1s ease-out 2.5s;
    /* Убрали will-change и translateZ(0), так как они убивали SVG-фильтр рваной бумаги */
  }
  
  /* === АНИМАЦИИ ЭЗОТЕРИКА (Медленное, однонаправленное движение) === */
  @keyframes esoteric-slow-drift-1 {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes esoteric-slow-drift-2 {
    0%   { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
  }
  @keyframes esoteric-slow-expand {
    0%   { transform: scale(1); opacity: 0.8; }
    50%  { transform: scale(2.2); opacity: 0; }
    100% { transform: scale(1); opacity: 0.8; }
  }
  
  /* === АНИМАЦИИ ТРЕНЕРА (Спокойная пульсация прогресс-баров) === */
  @keyframes fitness-bar-1 {
    0%, 100% { width: 85%; }
    50% { width: 95%; }
  }
  @keyframes fitness-bar-2 {
    0%, 100% { width: 75%; }
    50% { width: 90%; }
  }
  
  /* === АНИМАЦИИ ДЛЯ МАНИКЮРА (Жемчужный перелив и Блик) === */
  @keyframes pearl-shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-pearl {
    background-size: 200% 200%;
    animation: pearl-shimmer 8s ease infinite;
  }
  @keyframes shine {
    100% { left: 200%; }
  }
  
  /* === АНИМАЦИИ ДЛЯ АЛЬФА ПАРТНЕРА (Красный Монолит) === */
  @keyframes alfa-chart-draw {
    0% { stroke-dashoffset: 1000; opacity: 0; }
    20% { opacity: 0.3; }
    100% { stroke-dashoffset: 0; opacity: 0.3; }
  }
  .animate-alfa-chart {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: alfa-chart-draw 4s ease-out forwards infinite;
  }
`;

// ==========================================
// 🪄 КОМПОНЕНТ ЭФФЕКТА СГОРАНИЯ
// ==========================================
const BurnRevealImage = ({ src, className, style }) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    let isMounted = true;
    setLoaded(false);
    
    // Мгновенный запуск для супер-быстрой загрузки!
    // Убрали img.onload, чтобы анимация не ждала скачивания тяжелых фото при плохом интернете.
    const timer = setTimeout(() => {
      if (isMounted) setLoaded(true);
    }, 50);

    return () => { 
      isMounted = false; 
      clearTimeout(timer);
    };
  }, [src]);

  return (
    // Возвращаем чистый эффект! Используем clipPath для обрезки острых углов, потому что WebkitMaskImage и overflow-hidden убивали огонь
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ ...style, clipPath: 'inset(0 round 2.5rem)', WebkitClipPath: 'inset(0 round 2.5rem)' }}>
      {/* 1. Слой огненного края (с SVG-искажением для рваности) */}
      <div className="absolute inset-0" style={{ filter: 'url(#burn-edge-filter) brightness(1.8) sepia(1) hue-rotate(-15deg) saturate(5) contrast(1.5)' }}>
        <div 
          className={`absolute inset-0 bg-cover bg-center burn-glow-transition ${loaded ? 'clip-burn-glow' : 'clip-burn-start'}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      </div>
      {/* 2. Слой самого фото */}
      <div 
        className={`absolute inset-0 bg-cover bg-center burn-img-transition ${loaded ? 'clip-burn-end' : 'clip-burn-start'}`}
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  );
};


// ==========================================
// ШАБЛОНЫ ВИЗИТОК (4 направления)
// ==========================================

// 1. ЭЗОТЕРИК
const EsotericCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(147,51,234,0.4)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(168,85,247,0.6)] transition-shadow duration-700">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 opacity-70 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.esoteric.bgImage} className="opacity-60 mix-blend-luminosity" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/30 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-purple-100">{CONTENT.esoteric.badge}</span>
          </div>
          <Moon className="w-8 h-8 text-amber-200/80 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl leading-tight font-serif font-black mb-1 uppercase tracking-wide text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {CONTENT.esoteric.name1}
            <br />
            {CONTENT.esoteric.name2}
          </h2>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <p className="text-amber-300 font-bold text-xs uppercase tracking-[0.2em] border-l-2 border-purple-500 pl-3">
              {CONTENT.esoteric.role}
            </p>
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-purple-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
              <span className="text-[8px] font-bold uppercase tracking-wider text-amber-100">{CONTENT.esoteric.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Mandala / Aura Style) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(147,51,234,0.4)] overflow-hidden bg-[#050505] flex flex-col items-center p-6 text-white border border-purple-900/30" style={{ transform: 'rotateY(180deg)' }}>
      
      {/* ФОН МАНДАЛЫ (Медленные орбиты и Аура) */}
      <div className="absolute -top-[20%] -left-[20%] w-[160%] aspect-square rounded-full border border-purple-500/30 border-dashed" style={{ animation: 'esoteric-slow-drift-1 90s linear infinite', transformOrigin: '45% 55%' }}></div>
      <div className="absolute -bottom-[30%] -right-[30%] w-[140%] aspect-square rounded-full border-[1.5px] border-amber-500/30" style={{ animation: 'esoteric-slow-drift-2 100s linear infinite', transformOrigin: '55% 45%' }}></div>
      <div className="absolute top-[20%] left-[10%] w-[80%] aspect-square rounded-full border-2 border-purple-500/40" style={{ animation: 'esoteric-slow-expand 30s ease-in-out infinite' }}></div>
      
      {/* Пульсирующая аура - усилили свечение */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full bg-purple-900/40 blur-[50px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full bg-amber-600/20 blur-[40px] animate-pulse pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center h-full w-full">
        
        {/* Аватар в светящемся кольце */}
        <div className="relative mt-4 mb-3">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-amber-500 animate-[spin_4s_linear_infinite] blur-[6px] opacity-60"></div>
          <div className="relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-b from-purple-400 to-amber-400">
            <img src={CONTENT.esoteric.avatar} alt={CONTENT.esoteric.name1} className="w-full h-full object-cover rounded-full border-2 border-[#050505]" />
          </div>
        </div>

        {/* Имя и подзаголовок */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-serif font-bold text-amber-100 italic tracking-wide">{CONTENT.esoteric.username}</h3>
          <p className="text-purple-400 text-[9px] mt-1.5 uppercase tracking-[0.3em] font-medium">{CONTENT.esoteric.subUsername}</p>
        </div>

        {/* Цитата (Мягкая и плавная) */}
        <div className="flex-1 flex items-center justify-center w-full relative">
          <Moon className="absolute top-0 right-4 w-16 h-16 text-amber-500/5 rotate-12" />
          <p className="font-serif italic text-amber-100/80 text-sm text-center leading-loose relative z-10 px-4">
            <span className="text-2xl absolute -top-3 -left-1 text-purple-500/40">"</span>
            {CONTENT.esoteric.quote1}<br/>{CONTENT.esoteric.quote2}
            <span className="text-2xl absolute -bottom-4 -right-1 text-purple-500/40">"</span>
          </p>
        </div>

        {/* Круглые социальные кнопки */}
        <div className="flex gap-6 mt-6 mb-8">
          <a href={CONTENT.esoteric.tgLink} className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/30 flex items-center justify-center text-purple-400 hover:text-amber-300 hover:border-amber-400/50 transition-all shadow-[0_0_15px_rgba(147,51,234,0.15)] group">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href={CONTENT.esoteric.instLink} className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/30 flex items-center justify-center text-purple-400 hover:text-amber-300 hover:border-amber-400/50 transition-all shadow-[0_0_15px_rgba(147,51,234,0.15)] group">
            <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Элегантная кнопка действия */}
        <a href={CONTENT.esoteric.actionLink} className="w-full bg-gradient-to-r from-purple-900/80 to-[#1a1025] backdrop-blur-md text-amber-100 font-serif italic text-base py-4 rounded-full flex items-center justify-center gap-3 hover:from-purple-800 hover:to-[#2a1a3a] transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] border border-purple-500/30 group">
          <Sparkles className="w-4 h-4 text-amber-400 group-hover:animate-pulse" />
          {CONTENT.esoteric.actionText}
        </a>
      </div>
    </div>
  </>
);

// 2. ПСИХОЛОГ
const PsychologistCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(13,148,136,0.4)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(20,184,166,0.6)] transition-shadow duration-700">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 via-cyan-500 to-emerald-400 opacity-70 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.psychologist.bgImage} className="opacity-50" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-teal-950/50 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-teal-500/30 flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-teal-100">{CONTENT.psychologist.badge}</span>
          </div>
          <Brain className="w-8 h-8 text-teal-200/80 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl leading-tight font-serif font-medium mb-1 uppercase tracking-wide text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {CONTENT.psychologist.name1}
            <br />
            {CONTENT.psychologist.name2}
          </h2>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <p className="text-teal-300 font-bold text-xs uppercase tracking-[0.2em] border-l-2 border-emerald-500 pl-3">
              {CONTENT.psychologist.role}
            </p>
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-teal-500/30">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-100">{CONTENT.psychologist.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Zen & Harmony Style) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(13,148,136,0.4)] overflow-hidden bg-[#020806] flex flex-col p-6 text-white" style={{ transform: 'rotateY(180deg)' }}>
      
      {/* Мягкие перекрывающие формы (Blur эффекты) */}
      <div className="absolute -top-10 -left-20 w-72 h-72 bg-teal-600/20 blur-[90px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-emerald-700/15 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute -bottom-20 left-10 w-64 h-64 bg-cyan-900/30 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="relative z-10 flex flex-col h-full w-full">
        
        {/* Главный акцент - Цитата */}
        <div className="flex-1 flex flex-col justify-center items-center text-center mt-2">
          <Brain className="w-8 h-8 text-teal-400/30 mb-5" />
          <p className="font-serif text-teal-50 text-[1.15rem] leading-relaxed relative z-10 px-2 tracking-wide">
             <span className="text-4xl absolute -top-4 -left-2 text-teal-500/20 font-serif">"</span>
             {CONTENT.psychologist.quote1}<br/>{CONTENT.psychologist.quote2}
             <span className="text-4xl absolute -bottom-5 -right-2 text-teal-500/20 font-serif">"</span>
          </p>
        </div>

        {/* Инфо о психологе (мягкий блок без границ) */}
        <div className="flex flex-col items-center mt-4 mb-5">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-b from-teal-400/40 to-emerald-600/10 mb-3 shadow-[0_0_25px_rgba(20,184,166,0.15)]">
            <img src={CONTENT.psychologist.avatar} alt={CONTENT.psychologist.name1} className="w-full h-full object-cover rounded-full border-2 border-[#020806]" />
          </div>
          <h3 className="text-lg font-serif font-bold text-teal-50 tracking-wide">{CONTENT.psychologist.username}</h3>
          <p className="text-teal-500/80 text-[9px] mt-1.5 uppercase tracking-[0.25em] font-medium">{CONTENT.psychologist.subUsername}</p>
        </div>

        {/* Статистика (нежные текстовые блоки) */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <div className="flex flex-col items-center">
            <p className="text-[9px] text-teal-500/60 uppercase font-bold tracking-widest mb-1">{CONTENT.psychologist.stat1Title}</p>
            <p className="font-serif font-bold text-base text-teal-100">{CONTENT.psychologist.stat1Value}</p>
          </div>
          <div className="w-px h-8 bg-teal-500/20 rounded-full"></div>
          <div className="flex flex-col items-center">
             <p className="text-[9px] text-teal-500/60 uppercase font-bold tracking-widest mb-1">{CONTENT.psychologist.stat2Title}</p>
            <p className="font-serif font-bold text-base text-teal-100">{CONTENT.psychologist.stat2Value}</p>
          </div>
        </div>

        {/* Контакты аккуратно внизу */}
        <a href={CONTENT.psychologist.actionLink} className="w-full bg-teal-900/30 backdrop-blur-md text-teal-50 font-serif py-4 rounded-full flex items-center justify-center gap-3 hover:bg-teal-800/40 transition-all shadow-[0_4px_20px_rgba(20,184,166,0.1)] border border-teal-500/20 group">
          <Heart className="w-4 h-4 text-rose-400/80 group-hover:scale-110 transition-transform" />
          <span className="tracking-wide">{CONTENT.psychologist.actionText}</span>
        </a>
      </div>
    </div>
  </>
);

// 3. ТУРАГЕНТ
const TravelCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(249,115,22,0.4)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(244,63,94,0.6)] transition-shadow duration-700">
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 via-rose-500 to-indigo-600 opacity-70 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.travel.bgImage} className="opacity-50" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/30 flex items-center gap-2">
            <Compass className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-rose-100">{CONTENT.travel.badge}</span>
          </div>
          <PlaneTakeoff className="w-8 h-8 text-rose-200/80 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
        </div>

        <div className="pb-6">
          <h2 className="text-3xl sm:text-4xl leading-tight font-black mb-1 uppercase tracking-wide text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {CONTENT.travel.name1}
            <br />
            {CONTENT.travel.name2}
          </h2>
          <p className="text-orange-300 font-bold text-xs uppercase tracking-[0.2em] mt-2 border-l-2 border-rose-500 pl-3">
            {CONTENT.travel.role}
          </p>
        </div>
      </div>
      
      {/* Бегущая строка */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black/40 backdrop-blur-md border-t border-rose-500/30 py-1.5 z-20">
        <div className="flex w-max animate-scroll text-[9px] font-bold uppercase tracking-[0.2em] text-rose-100">
          <span className="flex gap-8 pr-8 items-center whitespace-nowrap">
            {CONTENT.travel.marquee.map((item, i) => <span key={i}>{item}</span>)}
          </span>
          <span className="flex gap-8 pr-8 items-center whitespace-nowrap">
            {CONTENT.travel.marquee.map((item, i) => <span key={`clone-${i}`}>{item}</span>)}
          </span>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Boarding Pass Style) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(249,115,22,0.4)] overflow-hidden bg-[#f4f1ea] flex flex-col text-zinc-900 border border-zinc-200" style={{ transform: 'rotateY(180deg)' }}>
      
      {/* Текстура бумаги / Водяные знаки */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:12px_12px] opacity-40 pointer-events-none"></div>

      {/* Штампы таможни */}
      <div className="absolute top-20 right-[-10px] w-28 h-28 border-[3px] border-rose-600/30 rounded-full flex flex-col items-center justify-center rotate-12 pointer-events-none z-0">
         <span className="text-rose-600/40 font-black tracking-widest uppercase text-lg border-b-2 border-rose-600/30 px-2 mb-1">DEPARTED</span>
         <span className="text-rose-600/40 font-bold tracking-widest text-[8px]">VIP CUSTOMS</span>
      </div>
      <div className="absolute bottom-32 left-[-15px] w-24 h-24 border-[2px] border-orange-500/30 rounded-full flex flex-col items-center justify-center -rotate-12 pointer-events-none z-0">
         <span className="text-orange-500/40 font-bold tracking-widest text-[8px] mb-1">APPROVED</span>
         <span className="text-orange-500/40 font-black tracking-widest uppercase text-xl border-t-2 border-orange-500/30 px-2">FIRST</span>
      </div>

      {/* Верхняя часть (Шапка билета) */}
      <div className="bg-zinc-900 text-white p-5 pb-6 relative z-10 border-b-4 border-orange-500 shadow-md">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">Boarding Pass</h3>
          <PlaneTakeoff className="w-5 h-5 text-orange-400" />
        </div>
        <p className="text-2xl font-black tracking-widest uppercase text-white drop-shadow-md">{CONTENT.travel.statusBack}</p>
      </div>

      {/* Основная часть с данными */}
      <div className="flex-1 px-5 pt-5 pb-4 relative z-10 flex flex-col gap-3">
        
        <div className="flex justify-between items-start">
           <div>
             <p className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Passenger</p>
             <p className="font-mono font-bold text-sm text-zinc-900 uppercase">{CONTENT.travel.agentName}</p>
           </div>
           <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white shadow-md shrink-0 rotate-3 bg-zinc-200">
             <img src={CONTENT.travel.avatar} alt={CONTENT.travel.name1} className="w-full h-full object-cover grayscale opacity-90" />
           </div>
        </div>

        <div className="grid grid-cols-2 gap-y-3 gap-x-2 mt-1">
          <div>
            <p className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Destination</p>
            <p className="font-mono font-black text-lg text-orange-600 uppercase leading-none">{CONTENT.travel.destination}</p>
          </div>
          <div>
            <p className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Flight</p>
            <p className="font-mono font-black text-lg text-zinc-900 leading-none">VIP-01</p>
          </div>
          <div>
            <p className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Date</p>
            <p className="font-mono font-bold text-base text-zinc-900 leading-none">OPEN</p>
          </div>
          <div>
             <p className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Seat</p>
             <p className="font-mono font-bold text-base text-zinc-900 leading-none">1A</p>
          </div>
        </div>

        {/* Отрывная линия (Имитация отрывного корешка) */}
        <div className="relative w-full flex items-center my-3">
          {/* Левый круглый вырез, цвет совпадает с фоном сайта */}
          <div className="absolute -left-5 -translate-x-1/2 w-6 h-6 bg-[#0a0a0a] rounded-full z-20 shadow-[inset_-2px_0_4px_rgba(0,0,0,0.15)]"></div>
          <div className="w-full border-t-[2.5px] border-dashed border-zinc-400"></div>
          {/* Правый круглый вырез */}
          <div className="absolute -right-5 translate-x-1/2 w-6 h-6 bg-[#0a0a0a] rounded-full z-20 shadow-[inset_2px_0_4px_rgba(0,0,0,0.15)]"></div>
        </div>

        {/* Нижняя отрывная часть (Штрихкод + Кнопки) */}
        <div className="flex items-center justify-between h-full pt-1">
           <div className="flex flex-col gap-2.5 flex-1 pr-6">
              <a href={CONTENT.travel.tgLink} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-md group">
                <MessageCircle className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">{CONTENT.travel.tgText}</span>
              </a>
              <a href={CONTENT.travel.tourLink} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-600 text-white hover:bg-orange-500 transition-colors shadow-md group">
                <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">{CONTENT.travel.tourText}</span>
              </a>
           </div>
           
           {/* Векторный штрихкод */}
           <svg className="h-[90%] w-8 text-zinc-800 mix-blend-multiply opacity-80" preserveAspectRatio="none" viewBox="0 0 24 100">
             <rect x="0" y="0" width="2" height="100" fill="currentColor"/>
             <rect x="3" y="0" width="1" height="100" fill="currentColor"/>
             <rect x="5" y="0" width="3" height="100" fill="currentColor"/>
             <rect x="9" y="0" width="1" height="100" fill="currentColor"/>
             <rect x="11" y="0" width="2" height="100" fill="currentColor"/>
             <rect x="14" y="0" width="1" height="100" fill="currentColor"/>
             <rect x="16" y="0" width="4" height="100" fill="currentColor"/>
             <rect x="21" y="0" width="1" height="100" fill="currentColor"/>
             <rect x="23" y="0" width="1" height="100" fill="currentColor"/>
           </svg>
        </div>

      </div>
    </div>
  </>
);

// 4. БЛОГЕР
const BloggerCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(236,72,153,0.4)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(6,182,212,0.6)] transition-shadow duration-700">
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 opacity-80 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.blogger.bgImage} className="opacity-60 mix-blend-luminosity" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider uppercase">{CONTENT.blogger.badge}</span>
          </div>
          <Camera className="w-8 h-8 text-white/80" />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl leading-tight font-black mb-1 uppercase tracking-tighter mix-blend-overlay text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {CONTENT.blogger.name1}
            <br />
            {CONTENT.blogger.name2}
          </h2>
          <p className="text-cyan-300 font-bold text-xs uppercase tracking-[0.2em] mt-2 border-l-2 border-pink-500 pl-3">
            {CONTENT.blogger.role}
          </p>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Neo-Brutalism / Glossy Style) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(6,182,212,0.4)] overflow-hidden bg-zinc-950 flex flex-col text-white border-2 border-zinc-800" style={{ transform: 'rotateY(180deg)' }}>
      
      {/* Глянцевые неоновые засветы */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500/30 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/30 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      {/* Огромная вертикальная типографика */}
      <div className="absolute left-0 top-0 bottom-0 w-[4.5rem] bg-zinc-900/80 backdrop-blur-md border-r border-zinc-800 flex items-center justify-center z-0 overflow-hidden">
        <h3 className="text-[5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-pink-500 -rotate-90 whitespace-nowrap tracking-tighter mix-blend-screen opacity-50">
          {CONTENT.blogger.name1}
        </h3>
      </div>

      {/* Основной контент (смещен вправо из-за вертикального текста) */}
      <div className="relative z-10 flex flex-col h-full w-full pl-[4.5rem] p-5">
        
        {/* Шапка: Юзернейм и Аватар */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col mt-2">
            <span className="bg-cyan-400 text-black text-[9px] font-black uppercase tracking-[0.2em] px-2 py-0.5 self-start mb-1 transform -skew-x-12 shadow-[2px_2px_0px_#ec4899]">
              {CONTENT.blogger.subUsername}
            </span>
            <h3 className="text-xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-[2px_2px_0px_#ec4899]">{CONTENT.blogger.username}</h3>
          </div>
          {/* Брутальный квадратный аватар в стиле глянца */}
          <div className="w-14 h-14 shrink-0 border-2 border-white shadow-[4px_4px_0px_#ec4899] transform rotate-3 bg-zinc-800 overflow-hidden">
            <img src={CONTENT.blogger.avatar} alt={CONTENT.blogger.name1} className="w-full h-full object-cover grayscale contrast-125" />
          </div>
        </div>
        
        {/* Асимметричная статистика (Лесенкой) */}
        <div className="flex flex-col gap-3 mt-2 mb-auto">
          {/* Блок 1 */}
          <div className="bg-zinc-900 border-2 border-zinc-800 p-3 flex justify-between items-center shadow-[4px_4px_0px_#22d3ee] transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-cyan-400 fill-cyan-400" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{CONTENT.blogger.stat1Title}</span>
            </div>
            <span className="text-2xl font-black text-white">{CONTENT.blogger.stat1Value}</span>
          </div>
          {/* Блок 2 (Смещенный вправо) */}
          <div className="bg-zinc-900 border-2 border-zinc-800 p-3 flex justify-between items-center shadow-[4px_4px_0px_#ec4899] transform rotate-1 hover:rotate-0 transition-transform ml-4">
            <div className="flex items-center gap-2">
              <InstagramIcon className="w-5 h-5 text-pink-500" />
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{CONTENT.blogger.stat2Title}</span>
            </div>
            <span className="text-2xl font-black text-white">{CONTENT.blogger.stat2Value}</span>
          </div>
        </div>

        {/* Дерзкая цитата (Эффект текстовыделителя) */}
        <div className="mb-6 relative z-20">
           <p className="font-black text-[13px] uppercase tracking-tighter leading-relaxed">
             <span className="bg-white text-black px-1.5 py-0.5 box-decoration-clone">{CONTENT.blogger.quote1}</span>
             <br/>
             <span className="bg-pink-500 text-white px-1.5 py-0.5 box-decoration-clone inline-block mt-0.5 shadow-[2px_2px_0px_#22d3ee]">{CONTENT.blogger.quote2}</span>
           </p>
        </div>

        {/* Интерактивная брутальная кнопка */}
        <a href={CONTENT.blogger.actionLink} className="w-full bg-cyan-400 text-black font-black uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 transition-all duration-200 shadow-[5px_5px_0px_#ec4899] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none border-2 border-transparent hover:border-black group relative overflow-hidden z-20">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          <Mail className="w-5 h-5 relative z-10" />
          <span className="relative z-10">{CONTENT.blogger.actionText}</span>
        </a>
      </div>
    </div>
  </>
);

// 5. ФИТНЕС-ТРЕНЕР
const FitnessCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(225,29,72,0.4)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(244,63,94,0.6)] transition-shadow duration-700">
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600 via-rose-500 to-orange-500 opacity-70 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.fitness.bgImage} className="opacity-50" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/50 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/50 flex items-center gap-2 transform -skew-x-6 shadow-[4px_4px_0_rgba(225,29,72,0.5)]">
            <Flame className="w-4 h-4 text-orange-400 transform skew-x-6" />
            <span className="text-xs font-black italic tracking-widest uppercase text-rose-100 transform skew-x-6">{CONTENT.fitness.badge}</span>
          </div>
          <Activity className="w-8 h-8 text-rose-200/80 drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl leading-tight font-black italic mb-1 uppercase tracking-tighter text-white drop-shadow-[4px_4px_0px_rgba(220,38,38,0.8)]">
            {CONTENT.fitness.name1}
            <br />
            {CONTENT.fitness.name2}
          </h2>
          <p className="text-rose-300 font-black italic text-xs uppercase tracking-[0.2em] mt-2 border-l-4 border-orange-500 pl-3">
            {CONTENT.fitness.role}
          </p>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Dynamics & Power Style) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(225,29,72,0.4)] overflow-hidden bg-[#0a0a0a] flex flex-col p-5 text-white border-2 border-red-600/30" style={{ transform: 'rotateY(180deg)' }}>
      
      {/* Агрессивный фон: диагональные гоночные полосы (Карбон/Трек) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000 0, #000 3px, #dc2626 3px, #dc2626 6px)', backgroundSize: '16px 16px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full gap-4">
        
        {/* Хедер: Аватар и Имя со скосом */}
        <div className="flex items-center gap-4 mt-1">
          <div className="relative w-16 h-16 shrink-0 transform -skew-x-6 overflow-hidden border-b-4 border-r-4 border-red-600 bg-zinc-800 shadow-[4px_4px_15px_rgba(220,38,38,0.3)]">
            <img src={CONTENT.fitness.avatar} alt={CONTENT.fitness.name1} className="w-full h-full object-cover transform skew-x-6 scale-125 grayscale contrast-125" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-white leading-none drop-shadow-[2px_2px_0px_#dc2626]">{CONTENT.fitness.username}</h3>
            <p className="text-white text-[10px] uppercase tracking-[0.2em] font-black bg-red-600 w-fit px-2 py-0.5 mt-1.5 transform -skew-x-6 shadow-[2px_2px_0px_#7f1d1d]">{CONTENT.fitness.subUsername}</p>
          </div>
        </div>
        
        {/* Кольца активности (Smartwatch UI) */}
        <div className="flex justify-around items-center bg-zinc-900/80 backdrop-blur-md py-4 px-2 border-y-2 border-red-600/50 transform -skew-x-3 shadow-[0_0_20px_rgba(220,38,38,0.15)]">
          {/* Кольцо 1 */}
          <div className="flex flex-col items-center transform skew-x-3">
            <div className="relative w-16 h-16 mb-2">
              <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
                <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" fill="transparent" className="text-zinc-800" />
                {/* strokeDasharray для радиуса 26 = ~163. Заполняем на 80% (offset 32) */}
                <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" fill="transparent" strokeDasharray="163" strokeDashoffset="32" className="text-red-500 transition-all duration-1000 ease-out" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-black italic text-lg text-white drop-shadow-md">{CONTENT.fitness.stat1Value}</span>
              </div>
            </div>
            <p className="text-[9px] text-zinc-400 uppercase font-black tracking-widest leading-none">{CONTENT.fitness.stat1Title}</p>
          </div>
          
          {/* Вертикальный разделитель */}
          <div className="w-0.5 h-12 bg-zinc-800 transform skew-x-3"></div>

          {/* Кольцо 2 */}
          <div className="flex flex-col items-center transform skew-x-3">
            <div className="relative w-16 h-16 mb-2">
              <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]">
                <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" fill="transparent" className="text-zinc-800" />
                {/* Заполняем на 95% (offset 8) */}
                <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="5" fill="transparent" strokeDasharray="163" strokeDashoffset="8" className="text-orange-500 transition-all duration-1000 ease-out" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Уменьшили размер шрифта с text-lg на text-sm, чтобы длинные числа (500+) не касались краев */}
                <span className="font-black italic text-sm text-orange-400 drop-shadow-md">{CONTENT.fitness.stat2Value}</span>
              </div>
            </div>
            <p className="text-[9px] text-zinc-400 uppercase font-black tracking-widest leading-none">{CONTENT.fitness.stat2Title}</p>
          </div>
        </div>

        {/* Ссылки-прогрессбары */}
        <div className="flex-1 flex flex-col justify-center gap-3">
           <a href={CONTENT.fitness.link1Url} className="relative w-full h-[3.25rem] bg-zinc-900 border border-zinc-800 transform -skew-x-6 overflow-hidden group shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
             <div className="absolute top-0 left-0 h-full bg-red-600 transition-all duration-500 ease-out" style={{ animation: 'fitness-bar-1 6s ease-in-out infinite' }}></div>
             <div className="absolute inset-0 flex items-center justify-between px-5 transform skew-x-6">
                <span className="font-black italic uppercase text-xs tracking-widest text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]">{CONTENT.fitness.link1Text}</span>
                <Activity className="w-5 h-5 text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform animate-pulse" />
             </div>
           </a>
           <a href={CONTENT.fitness.link2Url} className="relative w-full h-[3.25rem] bg-zinc-900 border border-zinc-800 transform -skew-x-6 overflow-hidden group shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
             <div className="absolute top-0 left-0 h-full bg-orange-600 transition-all duration-500 ease-out" style={{ animation: 'fitness-bar-2 7s ease-in-out infinite 1s' }}></div>
             <div className="absolute inset-0 flex items-center justify-between px-5 transform skew-x-6">
                <span className="font-black italic uppercase text-xs tracking-widest text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]">{CONTENT.fitness.link2Text}</span>
                <Flame className="w-5 h-5 text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform animate-pulse" />
             </div>
           </a>
        </div>

        {/* Главная кнопка (Педаль газа) */}
        <a href={CONTENT.fitness.actionLink} className="w-full bg-red-600 text-white font-black italic uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-red-500 transition-all shadow-[0_0_25px_rgba(220,38,38,0.5)] transform -skew-x-6 border-b-[6px] border-r-[4px] border-red-900 active:border-b-0 active:border-r-0 active:translate-y-[6px] active:translate-x-[4px] mt-1">
          <span className="transform skew-x-6 flex items-center gap-2 text-sm">
            {CONTENT.fitness.actionText} <Flame className="w-5 h-5" />
          </span>
        </a>
      </div>
    </div>
  </>
);

// 6. БРОКЕР / НЕДВИЖИМОСТЬ
const RealEstateCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(217,119,6,0.3)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(217,119,6,0.5)] transition-shadow duration-700">
      <div className="absolute inset-0 bg-gradient-to-bl from-zinc-800 via-black to-amber-900/50 opacity-80 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.broker.bgImage} className="opacity-50 mix-blend-luminosity" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-amber-600/30 flex items-center gap-2">
            <Key className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-serif tracking-widest uppercase text-amber-100/80">{CONTENT.broker.badge}</span>
          </div>
          <Building2 className="w-8 h-8 text-amber-200/50 drop-shadow-[0_0_10px_rgba(217,119,6,0.2)]" />
        </div>

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl leading-tight font-serif font-light mb-1 uppercase tracking-widest text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {CONTENT.broker.name1}
            <br />
            {CONTENT.broker.name2}
          </h2>
          {/* Убрали прозрачность, сделали текст ярче (amber-300) и добавили легкую тень, чтобы не терялся */}
          <p className="text-amber-300 font-serif font-medium text-[11px] uppercase tracking-[0.3em] mt-3 drop-shadow-md bg-black/20 w-fit mx-auto px-3 py-1 rounded-full border border-amber-600/20">
            {CONTENT.broker.role}
          </p>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Quiet Luxury) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden bg-[#050505] flex flex-col p-6 text-white" style={{ transform: 'rotateY(180deg)' }}>
      {/* Minimalist borders */}
      <div className="absolute inset-4 border-[0.5px] border-amber-600/30 rounded-[2rem] pointer-events-none"></div>
      <div className="absolute inset-5 border-[0.5px] border-amber-600/10 rounded-[1.75rem] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-5 text-center px-2">
        
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full p-[1px] bg-gradient-to-b from-amber-500/50 to-transparent mt-2">
          <img src={CONTENT.broker.avatar} alt={CONTENT.broker.name1} className="w-full h-full object-cover rounded-full grayscale opacity-90" />
        </div>

        {/* Name */}
        <div>
          <h3 className="text-[1.15rem] font-serif font-light tracking-[0.25em] text-amber-50/90 uppercase">{CONTENT.broker.username}</h3>
          <p className="text-amber-600/60 text-[8px] mt-1.5 uppercase tracking-[0.3em] font-light">{CONTENT.broker.subUsername}</p>
        </div>

        {/* Thin elegant divider */}
        <div className="w-8 h-[0.5px] bg-amber-600/40 my-1"></div>

        {/* Stats - Выделили в явные карточки с обводкой */}
        <div className="flex w-full justify-center gap-4 px-2">
          <div className="flex-1 flex flex-col items-center bg-zinc-900/40 border border-amber-600/40 rounded-xl py-3 shadow-lg">
            <p className="font-serif font-light text-xl text-white/90">{CONTENT.broker.stat1Value}</p>
            <p className="text-[7px] text-amber-600/70 uppercase tracking-[0.3em] mt-1 text-center">{CONTENT.broker.stat1Title}</p>
          </div>
          <div className="flex-1 flex flex-col items-center bg-zinc-900/40 border border-amber-600/40 rounded-xl py-3 shadow-lg">
            <p className="font-serif font-light text-xl text-amber-500/90">{CONTENT.broker.stat2Value}</p>
            <p className="text-[7px] text-amber-600/70 uppercase tracking-[0.3em] mt-1 text-center">{CONTENT.broker.stat2Title}</p>
          </div>
        </div>

        {/* Quote */}
        <div className="flex-1 flex items-center justify-center w-full">
          <p className="font-serif font-light text-[11px] text-zinc-400/80 tracking-widest leading-relaxed italic px-2">
            {CONTENT.broker.quote}
          </p>
        </div>

        {/* Button */}
        <a href={CONTENT.broker.actionLink} className="w-full bg-transparent border-[0.5px] border-amber-600/40 text-amber-500/90 font-serif font-light text-[10px] uppercase tracking-[0.25em] py-4 rounded-full flex items-center justify-center gap-3 hover:bg-amber-900/20 transition-colors mt-auto group">
          <MessageCircle className="w-4 h-4 font-light opacity-70 group-hover:opacity-100 transition-opacity" />
          {CONTENT.broker.actionText}
        </a>
      </div>
    </div>
  </>
);

// 7. ЗАРАБОТОК / ИНВЕСТИЦИИ / ПАРТНЕРКИ
const MoneyCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(16,185,129,0.4)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(5,150,105,0.6)] transition-shadow duration-700">
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900 via-zinc-950 to-green-900 opacity-90 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.money.bgImage} className="opacity-40 mix-blend-luminosity" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-none border-l-2 border-emerald-500 flex items-center gap-2 font-mono">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400">{CONTENT.money.badge}</span>
          </div>
          <Diamond className="w-8 h-8 text-emerald-500/50 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl leading-tight font-mono font-black mb-1 uppercase tracking-widest text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {CONTENT.money.name1}
            <br />
            {CONTENT.money.name2}
          </h2>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <p className="text-emerald-400 font-mono font-bold text-[10px] uppercase tracking-[0.2em] bg-emerald-950/80 px-2 py-1 border border-emerald-500/30">
              {CONTENT.money.role}
            </p>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-100">{CONTENT.money.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Fintech / Cyberpunk Terminal) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(16,185,129,0.4)] overflow-hidden bg-[#030805] flex flex-col p-6 text-emerald-400 font-mono border border-emerald-900/80" style={{ transform: 'rotateY(180deg)' }}>
      
      {/* Terminal Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.07)_1px,transparent_1px)]" style={{ backgroundSize: '15px 15px' }}></div>

      {/* Glowing Trend Line SVG */}
      <svg className="absolute bottom-1/4 left-0 w-full h-32 opacity-30 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
         <path d="M0,80 L20,60 L40,70 L60,30 L80,40 L100,10" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M0,80 L20,60 L40,70 L60,30 L80,40 L100,10 L100,100 L0,100 Z" fill="url(#grad-trend)" stroke="none" />
         <defs>
           <linearGradient id="grad-trend" x1="0" y1="0" x2="0" y2="1">
             <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
             <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
           </linearGradient>
         </defs>
      </svg>

      {/* Random blinking cursor / terminal dot */}
      <div className="absolute top-7 right-7 w-2.5 h-4 bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>

      <div className="relative z-10 flex flex-col h-full gap-5">
        
        {/* Header: [USER_DATA] */}
        <div className="flex flex-col gap-1 border-b border-emerald-900/60 pb-3 mt-1">
          <span className="text-[8px] uppercase tracking-widest text-emerald-600 font-bold">&gt; SYS.USER_IDENT</span>
          <div className="flex items-center gap-4 mt-2">
            <div className="relative w-12 h-12 bg-black border border-emerald-500/50 p-[2px] overflow-hidden">
               <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
               <img src={CONTENT.money.avatar} alt={CONTENT.money.name1} className="w-full h-full object-cover grayscale contrast-125 opacity-80" />
               <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(16,185,129,0.1)_2px,rgba(16,185,129,0.1)_4px)] pointer-events-none"></div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm font-bold tracking-widest text-emerald-50 uppercase">{CONTENT.money.username}</h3>
              <p className="text-[9px] mt-1 text-emerald-500 bg-emerald-950/50 px-1.5 py-0.5 w-fit uppercase tracking-widest">{CONTENT.money.subUsername}</p>
            </div>
          </div>
        </div>

        {/* Stats: [METRICS] */}
        <div className="flex flex-col gap-1 border-b border-emerald-900/60 pb-4">
          <span className="text-[8px] uppercase tracking-widest text-emerald-600 font-bold">&gt; SYS.METRICS</span>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex flex-col">
              <span className="text-[8px] text-emerald-600 uppercase tracking-widest mb-0.5">{CONTENT.money.stat1Title}</span>
              <span className="text-xl font-black text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)] tracking-wider">{CONTENT.money.stat1Value}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] text-emerald-600 uppercase tracking-widest mb-0.5">{CONTENT.money.stat2Title}</span>
              <span className="text-xl font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] tracking-wider">{CONTENT.money.stat2Value}</span>
            </div>
          </div>
        </div>

        {/* Progress / Status */}
        <div className="flex flex-col gap-1 border-b border-emerald-900/60 pb-4 flex-1 justify-center">
           <span className="text-[8px] uppercase tracking-widest text-emerald-600 font-bold">&gt; NODE.STATUS</span>
           <div className="flex justify-between items-end text-[9px] text-emerald-500 mb-1.5 mt-2 uppercase tracking-widest">
             <span>{CONTENT.money.infoTitle}</span>
             <span className="text-emerald-300">{CONTENT.money.infoSub}</span>
           </div>
           <div className="w-full bg-[#020503] h-2.5 border border-emerald-900/50 relative overflow-hidden">
             {/* Striped progress bar effect */}
             <div className="absolute top-0 left-0 h-full bg-emerald-600 w-[85%] shadow-[0_0_15px_rgba(52,211,153,0.8)] overflow-hidden">
               <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, #000 4px, #000 8px)' }}></div>
             </div>
           </div>
           <div className="flex justify-between mt-2 uppercase">
             <span className="text-[8px] text-emerald-600 font-bold tracking-widest">CAPACITY: 85%</span>
             <span className="text-[8px] text-amber-400 font-bold tracking-widest animate-pulse">{CONTENT.money.placesLeft}</span>
           </div>
        </div>

        {/* Terminal Button */}
        <a href={CONTENT.money.actionLink} className="w-full bg-transparent border border-emerald-500/50 hover:bg-emerald-500 hover:text-black transition-all py-3.5 flex items-center justify-center gap-2 group shadow-[inset_0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] mt-1">
          <Wallet className="w-4 h-4 text-emerald-400 group-hover:text-black transition-colors" />
          <span className="text-[11px] tracking-[0.2em] font-bold uppercase transition-colors">[{CONTENT.money.actionText}]</span>
        </a>
      </div>
    </div>
  </>
);

// 8. СТАРТОВАЯ КАРТОЧКА (Черный шелк и золото)
const StarterCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(234,179,8,0.2)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(234,179,8,0.4)] transition-shadow duration-700 border border-yellow-500/20">
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900 to-yellow-900/30 opacity-90 mix-blend-screen"></div>
      
      {/* Имитация золотых нитей */}
      <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent transform rotate-12"></div>
      <div className="absolute top-0 left-20 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent transform -rotate-12"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.starter.bgImage} className="opacity-60 mix-blend-luminosity sepia-[.5] hue-rotate-[-10deg]" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-yellow-500/30 flex items-center gap-2 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-yellow-100">{CONTENT.starter.badge}</span>
          </div>
          <Sparkles className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_15px_rgba(234,179,8,0.8)] animate-pulse" />
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-4">
          <h2 className="text-3xl sm:text-4xl leading-tight font-black mb-2 uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-100 to-yellow-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {CONTENT.starter.title1}
            <br />
            {CONTENT.starter.title2}
          </h2>
          <p className="text-yellow-400 font-bold text-xs uppercase tracking-[0.2em] bg-black/50 px-3 py-1 rounded-full border border-yellow-500/30">
            {CONTENT.starter.role}
          </p>
        </div>
        
        <div className="flex flex-col gap-3 mt-auto w-full">
          <div className="bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-yellow-500/30 flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(234,179,8,0.2)] mb-1">
             <MousePointerClick className="w-5 h-5 text-yellow-500 animate-pulse" />
             <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-100">{CONTENT.starter.instruction1}</span>
          </div>
          <div className="bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-yellow-500/30 flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
             <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-100">{CONTENT.starter.instruction2}</span>
             <RefreshCw className="w-5 h-5 text-yellow-500 opacity-80" />
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(234,179,8,0.2)] overflow-hidden bg-zinc-950 flex flex-col p-5 text-white border border-yellow-500/20" style={{ transform: 'rotateY(180deg)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-500/10 blur-[80px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full gap-4">
        <div className="text-center pt-2">
          <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text tracking-wide uppercase">{CONTENT.starter.backTitle}</h3>
          <div className="w-16 h-0.5 bg-yellow-500/50 mx-auto mt-2 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-2.5 flex-1 content-center">
          {/* Блок 1 */}
          <div className="bg-zinc-900/60 backdrop-blur-xl p-3 rounded-2xl border border-yellow-500/20 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <Crown className="w-5 h-5 mb-1.5 text-yellow-400" />
            <p className="font-bold text-[11px] text-yellow-100">{CONTENT.starter.benefit1Title}</p>
            <p className="text-[8px] text-zinc-400 uppercase tracking-widest mt-0.5">{CONTENT.starter.benefit1Text}</p>
          </div>
          {/* Блок 2 */}
          <div className="bg-zinc-900/60 backdrop-blur-xl p-3 rounded-2xl border border-yellow-500/20 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <Wallet className="w-5 h-5 mb-1.5 text-yellow-400" />
            <p className="font-bold text-[11px] text-yellow-100">{CONTENT.starter.benefit2Title}</p>
            <p className="text-[8px] text-zinc-400 uppercase tracking-widest mt-0.5">{CONTENT.starter.benefit2Text}</p>
          </div>
          {/* Блок 3 */}
          <div className="bg-zinc-900/60 backdrop-blur-xl p-3 rounded-2xl border border-yellow-500/20 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <Globe className="w-5 h-5 mb-1.5 text-yellow-400" />
            <p className="font-bold text-[11px] text-yellow-100">{CONTENT.starter.benefit3Title}</p>
            <p className="text-[8px] text-zinc-400 uppercase tracking-widest mt-0.5">{CONTENT.starter.benefit3Text}</p>
          </div>
          {/* Блок 4 */}
          <div className="bg-zinc-900/60 backdrop-blur-xl p-3 rounded-2xl border border-yellow-500/20 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <Key className="w-5 h-5 mb-1.5 text-yellow-400" />
            <p className="font-bold text-[11px] text-yellow-100">{CONTENT.starter.benefit4Title}</p>
            <p className="text-[8px] text-zinc-400 uppercase tracking-widest mt-0.5">{CONTENT.starter.benefit4Text}</p>
          </div>
          {/* Блок 5 */}
          <div className="bg-zinc-900/60 backdrop-blur-xl p-3 rounded-2xl border border-yellow-500/20 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <Sparkles className="w-5 h-5 mb-1.5 text-yellow-400" />
            <p className="font-bold text-[11px] text-yellow-100">{CONTENT.starter.benefit5Title}</p>
            <p className="text-[8px] text-zinc-400 uppercase tracking-widest mt-0.5">{CONTENT.starter.benefit5Text}</p>
          </div>
          {/* Блок 6 */}
          <div className="bg-zinc-900/60 backdrop-blur-xl p-3 rounded-2xl border border-yellow-500/20 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <Diamond className="w-5 h-5 mb-1.5 text-yellow-400" />
            <p className="font-bold text-[11px] text-yellow-100">{CONTENT.starter.benefit6Title}</p>
            <p className="text-[8px] text-zinc-400 uppercase tracking-widest mt-0.5">{CONTENT.starter.benefit6Text}</p>
          </div>
        </div>

        <a href={CONTENT.starter.actionLink} className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-500 hover:to-yellow-300 text-zinc-950 font-black uppercase tracking-widest py-4 rounded-[2rem] flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)]">
          {CONTENT.starter.actionText}
        </a>
      </div>
    </div>
  </>
);

// 9. МАСТЕР МАНИКЮРА (Nail Artist)
const NailArtistCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(244,114,182,0.3)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(244,114,182,0.5)] transition-shadow duration-700">
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-900 via-pink-800 to-amber-700/50 opacity-80 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ (Ускоренная отрисовка через grayscale) */}
      <BurnRevealImage src={CONTENT.nail.bgImage} className="opacity-70 grayscale sepia-[.2]" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-pink-300/30 flex items-center gap-2 shadow-[0_0_15px_rgba(244,114,182,0.2)]">
            <Sparkles className="w-4 h-4 text-pink-300" />
            <span className="text-xs font-medium tracking-widest uppercase text-pink-50">{CONTENT.nail.badge}</span>
          </div>
          <Droplets className="w-8 h-8 text-pink-200/80 drop-shadow-[0_0_15px_rgba(244,114,182,0.6)]" />
        </div>

        <div className="text-center pb-2">
          <h2 className="text-3xl sm:text-4xl leading-tight font-serif font-light mb-1 uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-white to-rose-200 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            {CONTENT.nail.name1}
            <br />
            {CONTENT.nail.name2}
          </h2>
          <div className="flex flex-col items-center gap-2 mt-3">
            <p className="text-pink-200 font-serif font-medium text-[10px] uppercase tracking-[0.3em] bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-pink-300/30">
              {CONTENT.nail.role}
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse shadow-[0_0_8px_rgba(251,113,133,0.8)]"></span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-rose-200">{CONTENT.nail.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Dark Liquid Glass / Приглушенный Глянец) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(244,114,182,0.3)] overflow-hidden flex flex-col p-6 text-white border border-rose-500/20 bg-gradient-to-br from-[#1c0f14] via-[#2a131d] to-[#120a0d] animate-pearl" style={{ transform: 'rotateY(180deg)' }}>
      
      {/* Блики глянца (Приглушенные темные orbs) */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-rose-500/20 blur-[40px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 -right-12 w-40 h-40 bg-pink-600/20 blur-[50px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-56 h-56 bg-rose-400/15 blur-[40px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="relative z-10 flex flex-col h-full gap-4">
        
        {/* Header */}
        <div className="flex flex-col items-center mt-2">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-rose-500 to-pink-300 shadow-[0_8px_20px_rgba(244,114,182,0.15)] mb-3">
            <img src={CONTENT.nail.avatar} alt={CONTENT.nail.name1} className="w-full h-full object-cover rounded-full border-2 border-[#1c0f14]" />
          </div>
          <h3 className="text-lg font-serif font-medium tracking-[0.15em] text-rose-50 uppercase">{CONTENT.nail.username}</h3>
          <p className="text-rose-400 text-[9px] mt-1 uppercase tracking-[0.2em] font-medium">{CONTENT.nail.subUsername}</p>
        </div>

        {/* Изящный разделитель */}
        <div className="flex justify-center items-center gap-2 my-1">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-rose-500/50"></div>
          <Star className="w-3 h-3 text-rose-400" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-rose-500/50"></div>
        </div>

        {/* Услуги (Glassmorphism list, Dark Theme) */}
        <div className="flex-1 flex flex-col gap-2.5 justify-center w-full">
          {[CONTENT.nail.service1, CONTENT.nail.service2, CONTENT.nail.service3].map((service, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
              <span className="font-serif font-light text-[13px] tracking-wide text-rose-50">{service}</span>
              <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center shadow-inner border border-rose-500/30">
                <Check className="w-3 h-3 text-rose-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Глянцевая манящая кнопка */}
        <a href={CONTENT.nail.actionLink} className="w-full bg-gradient-to-r from-rose-600 to-pink-500 hover:from-rose-500 hover:to-pink-400 text-white font-serif font-medium uppercase tracking-[0.15em] text-[11px] py-4 rounded-3xl flex items-center justify-center gap-2 transition-all shadow-[0_10px_25px_rgba(225,29,72,0.3)] border border-rose-500/30 relative overflow-hidden group mt-auto">
          {/* Эффект пробегающего блика */}
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-[shine_1s_ease-in-out]"></div>
          <Sparkles className="w-4 h-4 relative z-10" />
          <span className="relative z-10">{CONTENT.nail.actionText}</span>
        </a>
      </div>
    </div>
  </>
);

// 10. АЛЬФА-ПАРТНЕР (Red Monolith / Corporate Elite)
const AlfaCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(220,38,38,0.4)] overflow-hidden bg-[#0a0a0a] text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(239,68,68,0.6)] transition-shadow duration-700">
      <div className="absolute inset-0 bg-gradient-to-tr from-red-900 via-black to-zinc-900 opacity-90 mix-blend-multiply"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ (Ускоренная отрисовка через grayscale) */}
      <BurnRevealImage src={CONTENT.alfa.bgImage} className="opacity-60 grayscale contrast-125" />
      
      {/* Абстрактные красные лучи */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/30 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-800/40 blur-[90px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-red-600/50 flex items-center gap-2 shadow-[4px_4px_0_rgba(220,38,38,0.3)]">
            <Award className="w-4 h-4 text-red-500" />
            <span className="text-xs font-black tracking-widest uppercase text-white">{CONTENT.alfa.badge}</span>
          </div>
          
          {/* КАСТОМНЫЙ ЛОГОТИП АЛЬФЫ ИЗ ФОТО */}
          <div className="w-10 h-10 flex items-center justify-center bg-[#ef3124] rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.8)] shrink-0 border border-red-400/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 3h3l6.5 14h-3.5l-1.5-3.5h-6L7.5 17H4l6.5-14zm1.5 3.5L10 11h4l-2-4.5z"/>
              <rect x="4" y="19" width="16" height="3"/>
            </svg>
          </div>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl leading-tight font-black mb-1 uppercase tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {CONTENT.alfa.name1}
            <br />
            {CONTENT.alfa.name2}
          </h2>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <p className="text-white font-bold text-[10px] uppercase tracking-[0.2em] bg-red-600 px-3 py-1.5 rounded-lg shadow-[2px_2px_0_rgba(153,27,27,1)]">
              {CONTENT.alfa.role}
            </p>
            <div className="flex items-center gap-1.5 border border-red-600/50 bg-black/50 px-3 py-1.5 rounded-lg">
              <span className="w-2 h-2 bg-red-500 rounded-sm animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-300">{CONTENT.alfa.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Corporate Elite / Geometric) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(220,38,38,0.4)] overflow-hidden bg-[#050505] flex flex-col p-6 text-white border-2 border-zinc-900" style={{ transform: 'rotateY(180deg)' }}>
      
      {/* Восходящий график на фоне */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
         <path d="M-10,110 L10,80 L30,85 L50,50 L70,55 L90,20 L110,10" fill="none" stroke="#dc2626" strokeWidth="0.5" className="animate-alfa-chart" strokeLinecap="square" strokeLinejoin="miter" />
         <path d="M-10,110 L10,80 L30,85 L50,50 L70,55 L90,20 L110,10 L110,110 Z" fill="url(#alfa-grad-trend)" stroke="none" />
         <defs>
           <linearGradient id="alfa-grad-trend" x1="0" y1="0" x2="0" y2="1">
             <stop offset="0%" stopColor="#dc2626" stopOpacity="0.15" />
             <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
           </linearGradient>
         </defs>
      </svg>

      <div className="relative z-10 flex flex-col h-full gap-5">
        
        {/* Хедер: Строгий Аватар и Имя (Скругленный квадрат вместо круга) */}
        <div className="flex items-center gap-4 mt-1 border-b border-zinc-800 pb-4">
          <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden border-2 border-red-600 bg-zinc-900 shadow-[0_0_20px_rgba(220,38,38,0.2)] p-[2px]">
            <img src={CONTENT.alfa.avatar} alt={CONTENT.alfa.name1} className="w-full h-full object-cover rounded-xl grayscale contrast-125 opacity-90" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[1.15rem] font-black uppercase tracking-wider text-white leading-none mb-1.5">{CONTENT.alfa.username}</h3>
            <span className="bg-red-600 text-white text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded w-fit shadow-[2px_2px_0_rgba(153,27,27,1)]">
              {CONTENT.alfa.subUsername}
            </span>
          </div>
        </div>

        {/* Статистика (Главный акцент - Крупная и строгая) */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#0a0a0a] border border-red-900/50 rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden group shadow-[inset_0_0_20px_rgba(220,38,38,0.02)] hover:border-red-600/80 transition-colors">
            <div className="absolute top-0 right-0 w-8 h-8 bg-red-600/10 rounded-bl-2xl"></div>
            <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest mb-1">{CONTENT.alfa.stat1Title}</p>
            <p className="font-black text-2xl text-white tracking-tighter drop-shadow-[0_2px_10px_rgba(220,38,38,0.4)]">{CONTENT.alfa.stat1Value}</p>
          </div>
          <div className="bg-[#0a0a0a] border border-red-900/50 rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden group shadow-[inset_0_0_20px_rgba(220,38,38,0.02)] hover:border-red-600/80 transition-colors">
            <div className="absolute top-0 right-0 w-8 h-8 bg-red-600/10 rounded-bl-2xl"></div>
            <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest mb-1">{CONTENT.alfa.stat2Title}</p>
            <p className="font-black text-2xl text-white tracking-tighter drop-shadow-[0_2px_10px_rgba(220,38,38,0.4)]">{CONTENT.alfa.stat2Value}</p>
          </div>
        </div>

        {/* Услуги / Шаги (Строгая геометрия с ромбами) */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          {[CONTENT.alfa.service1, CONTENT.alfa.service2, CONTENT.alfa.service3].map((service, idx) => (
            <div key={idx} className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-3.5 flex items-center gap-4">
              <div className="w-4 h-4 bg-red-600 transform rotate-45 flex items-center justify-center shadow-[0_0_10px_rgba(220,38,38,0.4)] shrink-0">
                 <div className="w-1.5 h-1.5 bg-black"></div>
              </div>
              <span className="font-bold text-[11px] uppercase tracking-wider text-zinc-200">{service}</span>
            </div>
          ))}
        </div>

        {/* Массивная Кнопка */}
        <a href={CONTENT.alfa.actionLink} className="w-full bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-[0.15em] text-xs py-4.5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(220,38,38,0.3)] border border-red-500/50 mt-1 active:scale-95">
          <Activity className="w-5 h-5" />
          {CONTENT.alfa.actionText}
        </a>
      </div>
    </div>
  </>
);

// ==========================================
// ОСНОВНОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
// ==========================================

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [sparks, setSparks] = useState([]);
  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });
  const [showShare, setShowShare] = useState(false); // Состояние для модального окна
  const [copied, setCopied] = useState(false);       // Состояние для копирования ссылки
  const cardRef = useRef(null);
  const audioCtxRef = useRef(null); // Реф для аудио контекста (чтобы звук не пропадал)
  const isFlippingRef = useRef(false); // Реф для блокировки наклона во время переворота

  // Глобальный параллакс фона (Живые сферы)
  useEffect(() => {
    const handleGlobalMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      // Вычисляем смещение от центра экрана (максимум 80px)
      const x = (clientX / window.innerWidth - 0.5) * 80;
      const y = (clientY / window.innerHeight - 0.5) * 80;
      
      // Инвертируем (-x, -y), чтобы фон плыл в противоположную от курсора сторону
      setBgOffset({ x: -x, y: -y });
    };

    window.addEventListener('mousemove', handleGlobalMove);
    window.addEventListener('touchmove', handleGlobalMove);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMove);
      window.removeEventListener('touchmove', handleGlobalMove);
    };
  }, []);

  // Сброс переворота при смене вкладки
  useEffect(() => {
    setIsFlipped(false);
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  }, [activeTab]);

  // Магнитный 3D наклон за курсором/пальцем
  const handlePointerMove = (e) => {
    // Блокируем наклон, если карточка прямо сейчас переворачивается
    if (isFlippingRef.current || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Поддержка как мыши, так и тач-событий
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Максимальный угол наклона 15 градусов
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    // Вычисляем позицию блика (в процентах)
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setRotate({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 1 });
  };

  // Сброс наклона, когда курсор уходит
  const handlePointerLeave = () => {
    if (isFlippingRef.current) return;
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  const playFlipSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      // Создаем контекст только один раз, чтобы браузер его не блокировал со временем
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume(); // Возобновляем, если браузер усыпил контекст
      }

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Создаем мягкий звук "взмаха" или "карточки"
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.15);

      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
      // Игнорируем ошибки (если автоплей заблокирован браузером)
    }
  };

  const handleFlip = () => {
    // Звук переворота (саунд-дизайн)
    playFlipSound();
    
    // Блокируем магнитный наклон и выравниваем карточку ровно при перевороте
    isFlippingRef.current = true;
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
    
    // Разблокируем наклон после завершения анимации переворота
    setTimeout(() => { isFlippingRef.current = false; }, 700);

    if (!isFlipped) {
      // Взрыв более яркой и крупной белой пыльцы
      const newSparks = Array.from({ length: 35 }).map((_, i) => {
        // Распределяем искры по кругу
        const angle = (Math.PI * 2 * i) / 35 + (Math.random() * 0.5);
        const distance = 80 + Math.random() * 100; // Мягкий стартовый разлет
        return {
          id: Date.now() + i,
          tx: Math.cos(angle) * distance + 'px',
          ty: Math.sin(angle) * distance + 'px',
          wx1: (Math.random() - 0.5) * 100 + 'px',
          wy1: (Math.random() - 0.5) * 100 + 'px',
          wx2: (Math.random() - 0.5) * 200 + 'px',
          wy2: (Math.random() - 0.5) * 200 + 'px',
          wx3: (Math.random() - 0.5) * 300 + 'px',
          wy3: (Math.random() - 0.5) * 300 + 'px',
          wt: (20 + Math.random() * 20) + 's', // Время полета от 20 до 40 секунд!
          size: Math.random() * 2.5 + 1.5 + 'px', // Сделали крупнее (от 1.5px до 4px)
        };
      });
      setSparks(newSparks);
    } else {
      // Очищаем искры при возврате на лицевую сторону
      setSparks([]);
    }

    // Вибрация (Haptic feedback) при поддержке устройством для премиум-ощущений
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      // Двойной мягкий импульс при перевороте карточки
      navigator.vibrate([30, 30, 40]); 
    }
    setIsFlipped(!isFlipped);
  };

  // Функция для получения цвета мобильного свечения в зависимости от шаблона
  const getGlowColor = () => {
    const colors = [
      'rgba(234,179,8,0.6)',  // 0: Старт (Золото)
      'rgba(147,51,234,0.6)', // 1: Эзотерик
      'rgba(13,148,136,0.5)', // 2: Психолог
      'rgba(249,115,22,0.6)', // 3: Турагент
      'rgba(236,72,153,0.6)', // 4: Блогер
      'rgba(225,29,72,0.6)',  // 5: Тренер
      'rgba(244,114,182,0.6)', // 6: Маникюр
      'rgba(220,38,38,0.6)',  // 7: Альфа
      'rgba(29,78,216,0.6)',  // 8: Брокер
      'rgba(16,185,129,0.6)'  // 9: Заработок
    ];
    return colors[activeTab] || colors[0];
  };

  // Получение индивидуальной темы для воздушного модального окна
  const getModalTheme = () => {
    const themes = [
      { bg: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.3)', icon: 'text-yellow-400' }, // 0: Старт
      { bg: 'rgba(147,51,234,0.15)', border: 'rgba(147,51,234,0.3)', icon: 'text-purple-400' }, // 1: Эзотерик
      { bg: 'rgba(20,184,166,0.15)', border: 'rgba(20,184,166,0.3)', icon: 'text-teal-400' }, // 2: Психолог
      { bg: 'rgba(249,115,22,0.15)', border: 'rgba(249,115,22,0.3)', icon: 'text-orange-400' }, // 3: Турагент
      { bg: 'rgba(236,72,153,0.15)', border: 'rgba(236,72,153,0.3)', icon: 'text-pink-400' }, // 4: Блогер
      { bg: 'rgba(225,29,72,0.15)', border: 'rgba(225,29,72,0.3)', icon: 'text-rose-400' }, // 5: Тренер
      { bg: 'rgba(244,114,182,0.15)', border: 'rgba(244,114,182,0.3)', icon: 'text-pink-400' }, // 6: Маникюр
      { bg: 'rgba(220,38,38,0.15)', border: 'rgba(220,38,38,0.3)', icon: 'text-red-500' },    // 7: Альфа
      { bg: 'rgba(217,119,6,0.15)', border: 'rgba(217,119,6,0.3)', icon: 'text-amber-400' }, // 8: Брокер
      { bg: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.3)', icon: 'text-emerald-400' } // 9: Заработок
    ];
    return themes[activeTab] || themes[0];
  };

  // Функции для шаринга
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Моя цифровая визитка',
          text: 'Привет! Вот моя визитка с контактами:',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Шаринг отменен');
      }
    } else {
      handleCopy(); // Фолбек для десктопов без поддержки Web Share API
    }
  };

  const tabs = [
    { id: 0, name: 'Старт', icon: <Crown className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 1, name: 'Эзотерик', icon: <Moon className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 2, name: 'Психолог', icon: <Brain className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 3, name: 'Турагент', icon: <PlaneTakeoff className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 4, name: 'Блогер', icon: <Camera className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 5, name: 'Тренер', icon: <Activity className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 6, name: 'Маникюр', icon: <Droplets className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 7, name: 'Альфа', icon: <Award className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 8, name: 'Брокер', icon: <Building2 className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 9, name: 'Заработок', icon: <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> },
  ];

  // Выбор активной карточки
  const renderActiveCard = () => {
    switch (activeTab) {
      case 0: return <StarterCard />;
      case 1: return <EsotericCard />;
      case 2: return <PsychologistCard />;
      case 3: return <TravelCard />;
      case 4: return <BloggerCard />;
      case 5: return <FitnessCard />;
      case 6: return <NailArtistCard />;
      case 7: return <AlfaCard />;
      case 8: return <RealEstateCard />;
      case 9: return <MoneyCard />;
      default: return <StarterCard />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 sm:p-8 font-sans overflow-hidden select-none">
      {/* Вставляем глобальные стили */}
      <style>{globalStyles}</style>

      {/* SVG-Фильтр для эффекта рваной горящей бумаги (Оптимизировано для плавности) */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <filter id="burn-edge-filter" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Фоновое свечение приложения (Живые сферы) */}
      <div 
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${bgOffset.x}px, ${bgOffset.y}px)` }}
      ></div>
      <div 
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${bgOffset.x * 1.5}px, ${bgOffset.y * 1.5}px)` }}
      ></div>

      {/* ПЕРЕКЛЮЧАТЕЛЬ ШАБЛОНОВ (Парит под адресной строкой) */}
      <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 sm:px-0">
        <div className="flex p-1 bg-neutral-900/80 backdrop-blur-xl rounded-full border border-neutral-800 shadow-2xl overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                // Легкий одинарный импульс при переключении вкладок
                if (typeof navigator !== 'undefined' && navigator.vibrate) {
                  navigator.vibrate(15);
                }
                setActiveTab(tab.id);
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-[11px] sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-black shadow-md scale-[1.02]'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* КОНТЕЙНЕР ВИЗИТКИ (3D Сцена с ограничением высоты для мобилок) */}
      <div 
        ref={cardRef}
        className="relative z-10 w-full aspect-[1/1.6] sm:aspect-[1/1.5] cursor-pointer group animate-float touch-none"
        style={{ perspective: '1500px', maxWidth: 'min(22rem, 50vh)' }}
        onClick={handleFlip}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerLeave}
      >
        {/* Искры (Magic Dust) */}
        {sparks.map(spark => (
          <div
            key={spark.id}
            className="spark-particle z-0"
            style={{
              '--tx': spark.tx,
              '--ty': spark.ty,
              '--wx1': spark.wx1,
              '--wy1': spark.wy1,
              '--wx2': spark.wx2,
              '--wy2': spark.wy2,
              '--wx3': spark.wx3,
              '--wy3': spark.wy3,
              '--wt': spark.wt,
              width: spark.size,
              height: spark.size,
              left: '50%',
              top: '50%',
              marginTop: '-' + (parseFloat(spark.size) / 2) + 'px',
              marginLeft: '-' + (parseFloat(spark.size) / 2) + 'px'
            }}
          />
        ))}

        {/* Обертка для магнитного 3D наклона (следит за мышью/пальцем) */}
        <div
          className="w-full h-full card-preserve-3d transition-transform duration-100 ease-out z-10 relative"
          style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
        >
          {/* Сама визитка с анимацией вращения (переворот на 180) */}
          <div 
            className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] card-preserve-3d"
            style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            {/* Дополнительное мощное свечение для мобилок */}
            <div 
              className="absolute inset-0 rounded-[2.5rem] pointer-events-none sm:hidden card-backface-hidden" 
              style={{ boxShadow: `0 0 60px ${getGlowColor()}` }} 
            />
            <div 
              className="absolute inset-0 rounded-[2.5rem] pointer-events-none sm:hidden card-backface-hidden" 
              style={{ transform: 'rotateY(180deg)', boxShadow: `0 0 60px ${getGlowColor()}` }} 
            />

            {renderActiveCard()}

            {/* Бегающий блик (Лицевая сторона) */}
            <div 
              className="absolute inset-0 w-full h-full rounded-[2.5rem] pointer-events-none transition-opacity duration-300 card-backface-hidden"
              style={{
                background: `radial-gradient(farthest-corner circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 65%)`,
                opacity: glare.opacity,
                mixBlendMode: 'overlay',
                zIndex: 50,
              }}
            />

            {/* Бегающий блик (Обратная сторона) */}
            <div 
              className="absolute inset-0 w-full h-full rounded-[2.5rem] pointer-events-none transition-opacity duration-300 card-backface-hidden"
              style={{
                transform: 'rotateY(180deg) translateZ(0)',
                background: `radial-gradient(farthest-corner circle at ${100 - glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 65%)`,
                opacity: glare.opacity,
                mixBlendMode: 'overlay',
                zIndex: 50,
              }}
            />
          </div>
        </div>
      </div>

      {/* КНОПКА ПОДЕЛИТЬСЯ (Уменьшена на мобилках, чтобы не залезать на визитку) */}
      <button
        onClick={() => {
          if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(15);
          setShowShare(true);
        }}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-2.5 sm:p-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/40 hover:text-white/90 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group touch-manipulation"
        aria-label="Поделиться"
      >
        <QrCode className="w-4 h-4 sm:w-5 sm:h-5 sm:group-hover:scale-110 transition-transform" />
      </button>

      {/* МОДАЛЬНОЕ ОКНО ПОДЕЛИТЬСЯ (Индивидуальное, Воздушное) */}
      {showShare && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-200" 
          onClick={() => setShowShare(false)}
        >
          <div 
            className="backdrop-blur-3xl rounded-[2.5rem] p-6 sm:p-8 w-full max-w-sm flex flex-col items-center relative shadow-2xl animate-in zoom-in-95 duration-200 border" 
            style={{ backgroundColor: getModalTheme().bg, borderColor: getModalTheme().border }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowShare(false)} 
              className="absolute top-5 right-5 text-white/40 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors border border-white/5"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className={`w-12 h-12 rounded-full bg-black/20 flex items-center justify-center mb-4 border ${getModalTheme().icon.replace('text', 'border').replace('400', '500/30')}`}>
              <QrCode className={`w-6 h-6 ${getModalTheme().icon}`} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Поделиться визиткой</h3>
            <p className="text-sm text-white/60 text-center mb-6 leading-relaxed">Дайте отсканировать QR-код или отправьте ссылку напрямую.</p>
            
            {/* Динамический QR код (Белый непрозрачный фон для сканера) */}
            <div className="bg-white p-4 rounded-3xl mb-6 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=0&data=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://nice-app.ru')}`} 
                alt="QR Code" 
                className="w-[180px] h-[180px] object-contain rounded-lg"
              />
            </div>

            <div className="flex gap-3 w-full">
              <button 
                onClick={handleCopy}
                className="flex-1 bg-black/20 hover:bg-black/40 border border-white/10 text-white font-medium py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-colors text-sm"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Скопировано!' : 'Копировать'}
              </button>
              <button 
                onClick={handleShare}
                className={`flex-1 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-colors text-sm`}
              >
                <Share2 className="w-4 h-4" />
                Отправить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;