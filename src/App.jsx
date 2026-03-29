import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Moon, Brain, Heart, PlaneTakeoff, Map, 
  Camera, Play, Phone, Mail, MessageCircle, 
  MapPin, Globe, Award, Star, Compass, UserCircle2,
  Flame, Activity, Building2, Key, TrendingUp, Diamond, Wallet, Crown
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
  creator: {
    bgImage: '/bg-creator.jpg',
    bgBack: '/bg-creator-back.jpg',
    avatar: '/avatar-creator.jpg', // Индивидуальное фото для создателя
    badge: 'Главный Босс',
    name1: 'Elena',
    name2: 'Sotnikova',
    role: 'Цифровой Архитектор',
    status: 'Основатель',
    username: '@elenlime',
    subUsername: 'Создатель Магии',
    stat1Title: 'Вау-визиток',
    stat1Value: '100+',
    stat2Title: 'Отвал бошки',
    stat2Value: '∞',
    quote1: 'Делаю дизайн, который',
    quote2: 'продает за тебя',
    actionText: 'Заказать визитку',
    actionLink: 'https://t.me/elenlime?text=Привет!%20Хочу%20такую%20же%20визитку!'
  }
};

// --- Глобальные стили для сложных анимаций (вставляем прямо в компонент) ---
const globalStyles = `
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
    clip-path: circle(250% at 100% 0%); /* Увеличили со 150% до 250%, чтобы точно достало до левого нижнего угла! */
    opacity: 1;
  }
  .clip-burn-glow {
    clip-path: circle(255% at 100% 0%); /* Пропорционально увеличили свечение */
    opacity: 0;
  }
  .burn-img-transition {
    transition: clip-path 3.5s cubic-bezier(0.4, 0, 0.2, 1); /* Замедлили до 3.5 сек */
  }
  .burn-glow-transition {
    /* Огненный край расширяется вместе с фото, плавно затухая в конце */
    transition: clip-path 3.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s ease-out 2.7s;
  }
`;

// ==========================================
// 🪄 КОМПОНЕНТ ЭФФЕКТА СГОРАНИЯ
// ==========================================
const BurnRevealImage = ({ src, className, style }) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(false);
    const img = new Image();
    img.src = src;
    if (img.complete) {
      setTimeout(() => setLoaded(true), 150);
    } else {
      img.onload = () => setTimeout(() => setLoaded(true), 150);
    }
  }, [src]);

  return (
    // Добавили жесткую обрезку углов (overflow-hidden rounded-[2.5rem]), чтобы огонь не вылезал за края карточки
    <div className={`absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem] ${className}`} style={style}>
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

    {/* ОБРАТНАЯ СТОРОНА (Bento Grid Style) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(147,51,234,0.4)] overflow-hidden bg-zinc-950 flex flex-col p-5 text-white" style={{ transform: 'rotateY(180deg)' }}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_100%_0%,_rgba(147,51,234,0.3),_transparent_60%)]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_0%_100%,_rgba(245,158,11,0.15),_transparent_60%)]"></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3">
        <div className="bg-zinc-900/60 backdrop-blur-xl rounded-[2rem] p-4 border border-purple-500/20 flex items-center gap-4 shadow-lg">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-amber-500 p-0.5 shrink-0">
            <img src={CONTENT.esoteric.avatar} alt={CONTENT.esoteric.name1} className="w-full h-full object-cover rounded-full border border-zinc-950" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold text-amber-100">{CONTENT.esoteric.username}</h3>
            <p className="text-purple-400 text-[10px] mt-0.5 uppercase tracking-widest">{CONTENT.esoteric.subUsername}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <a href={CONTENT.esoteric.tgLink} className="bg-zinc-900/60 backdrop-blur-xl rounded-[2rem] p-4 border border-purple-500/20 flex flex-col items-center justify-center gap-2 hover:border-amber-500/50 hover:bg-purple-900/20 transition-all group shadow-lg">
            <MessageCircle className="w-6 h-6 text-purple-400 group-hover:text-amber-300 transition-colors" />
            <span className="font-medium text-[11px] uppercase tracking-wider text-purple-200">Telegram</span>
          </a>
          <a href={CONTENT.esoteric.instLink} className="bg-zinc-900/60 backdrop-blur-xl rounded-[2rem] p-4 border border-purple-500/20 flex flex-col items-center justify-center gap-2 hover:border-amber-500/50 hover:bg-purple-900/20 transition-all group shadow-lg">
            <InstagramIcon className="w-6 h-6 text-purple-400 group-hover:text-amber-300 transition-colors" />
            <span className="font-medium text-[11px] uppercase tracking-wider text-purple-200">Instagram</span>
          </a>
        </div>

        <div className="bg-zinc-900/60 backdrop-blur-xl rounded-[2rem] p-5 border border-purple-500/20 flex-1 relative overflow-hidden flex flex-col justify-center items-center shadow-lg group">
          <Moon className="absolute -right-4 -bottom-4 w-24 h-24 text-amber-500/10 group-hover:rotate-12 transition-transform duration-700" />
          <p className="font-serif italic text-amber-100/90 text-[13px] text-center leading-relaxed">
            "{CONTENT.esoteric.quote1}<br/>{CONTENT.esoteric.quote2}"
          </p>
        </div>

        <a href={CONTENT.esoteric.actionLink} className="mt-auto w-full bg-gradient-to-r from-purple-900 to-indigo-900 text-amber-100 font-bold py-4 rounded-[2rem] flex items-center justify-center gap-2 hover:from-purple-800 hover:to-indigo-800 transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] border border-purple-500/30">
          <Sparkles className="w-5 h-5" />
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
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 via-cyan-600 to-emerald-700 opacity-80 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.psychologist.bgImage} className="opacity-60 mix-blend-luminosity" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-teal-950/60 to-transparent"></div>
      
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

    {/* ОБРАТНАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(13,148,136,0.4)] overflow-hidden bg-zinc-50 flex flex-col p-5 text-zinc-800" style={{ transform: 'rotateY(180deg)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/80"></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3">
        <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-4 border border-white flex items-center gap-4 shadow-[0_8px_30px_rgba(13,148,136,0.05)]">
          <div className="w-14 h-14 rounded-full border-2 border-teal-200 p-0.5 shrink-0 overflow-hidden">
            <img src={CONTENT.psychologist.avatar} alt={CONTENT.psychologist.name1} className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold text-teal-950">{CONTENT.psychologist.username}</h3>
            <p className="text-teal-600/80 text-[10px] mt-0.5 uppercase tracking-widest font-medium">{CONTENT.psychologist.subUsername}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-4 border border-white text-center shadow-[0_8px_30px_rgba(13,148,136,0.05)]">
            <Award className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
            <p className="text-[10px] text-teal-600/60 uppercase font-bold tracking-wider">{CONTENT.psychologist.stat1Title}</p>
            <p className="font-serif font-bold text-lg mt-0.5 text-teal-950">{CONTENT.psychologist.stat1Value}</p>
          </div>
          <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-4 border border-white text-center shadow-[0_8px_30px_rgba(13,148,136,0.05)]">
            <MapPin className="w-6 h-6 mx-auto mb-2 text-teal-500" />
            <p className="text-[10px] text-teal-600/60 uppercase font-bold tracking-wider">{CONTENT.psychologist.stat2Title}</p>
            <p className="font-serif font-bold text-sm mt-1.5 text-teal-950">{CONTENT.psychologist.stat2Value}</p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-4">
           <p className="text-center font-serif text-teal-900/60 text-sm leading-relaxed relative">
             <span className="text-4xl absolute -top-4 -left-2 text-teal-200 opacity-50 font-serif">"</span>
             {CONTENT.psychologist.quote1} {CONTENT.psychologist.quote2}
             <span className="text-4xl absolute -bottom-6 -right-2 text-teal-200 opacity-50 font-serif">"</span>
           </p>
        </div>

        <a href={CONTENT.psychologist.actionLink} className="mt-auto w-full bg-teal-900 text-white font-medium py-4 rounded-[2rem] flex items-center justify-center gap-2 hover:bg-teal-800 transition-all shadow-lg">
          <Phone className="w-5 h-5 text-teal-200" />
          {CONTENT.psychologist.actionText}
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
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 via-rose-600 to-indigo-900 opacity-80 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.travel.bgImage} className="opacity-60 mix-blend-luminosity" />
      
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

    {/* ОБРАТНАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(249,115,22,0.4)] overflow-hidden bg-zinc-900 border border-zinc-700 flex flex-col text-white" style={{ transform: 'rotateY(180deg)' }}>
      <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{ backgroundImage: `url(${CONTENT.travel.bgImage})` }}></div>
      
      <div className="bg-gradient-to-r from-orange-600 to-rose-600 p-5 relative z-10 flex justify-between items-end shadow-md">
        <div>
          <h3 className="text-[10px] text-rose-200 uppercase tracking-widest font-bold mb-1">Статус</h3>
          <p className="text-xl font-black tracking-widest uppercase drop-shadow-md">{CONTENT.travel.statusBack}</p>
        </div>
        <PlaneTakeoff className="w-8 h-8 text-white/50" />
      </div>
      
      <div className="p-5 flex flex-col gap-4 flex-1 relative z-10 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-t-3xl -mt-4 shadow-[0_-10px_20px_rgba(0,0,0,0.3)]">
        
        <div className="flex items-center gap-4 bg-zinc-900/80 p-3 rounded-2xl border border-zinc-700/50">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-orange-500/50 shrink-0">
            <img src={CONTENT.travel.avatar} alt={CONTENT.travel.name1} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 w-full gap-2">
            <div>
              <p className="text-[8px] text-zinc-500 uppercase font-bold tracking-wider">Агент</p>
              <p className="font-bold text-sm text-zinc-100">{CONTENT.travel.agentName}</p>
            </div>
            <div>
              <p className="text-[8px] text-zinc-500 uppercase font-bold tracking-wider">Куда</p>
              <p className="font-bold text-sm text-orange-400">{CONTENT.travel.destination}</p>
            </div>
          </div>
        </div>

        <div className="w-full h-8 bg-[repeating-linear-gradient(90deg,#fff,#fff_2px,transparent_2px,transparent_4px,#fff_4px,#fff_5px,transparent_5px,transparent_8px)] opacity-20 my-2"></div>

        <div className="flex flex-col gap-2 mt-auto">
          <a href={CONTENT.travel.tgLink} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-orange-400" />
              <span className="font-medium text-sm text-zinc-200">{CONTENT.travel.tgText}</span>
            </div>
          </a>
          <a href={CONTENT.travel.tourLink} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-rose-400" />
              <span className="font-medium text-sm text-zinc-200">{CONTENT.travel.tourText}</span>
            </div>
          </a>
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

    {/* ОБРАТНАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(6,182,212,0.4)] overflow-hidden bg-zinc-950 flex flex-col p-5 text-white border border-zinc-800" style={{ transform: 'rotateY(180deg)' }}>
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-500/20 blur-[60px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/20 blur-[60px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3">
        <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-[2rem] border border-zinc-800 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">{CONTENT.blogger.username}</h3>
            <p className="text-zinc-500 text-[10px] mt-1 uppercase tracking-widest font-bold">{CONTENT.blogger.subUsername}</p>
          </div>
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-cyan-500 p-[2px] shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            <img src={CONTENT.blogger.avatar} alt={CONTENT.blogger.name1} className="w-full h-full object-cover rounded-full border border-zinc-950" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-[2rem] border border-zinc-800 flex flex-col items-center relative overflow-hidden group">
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Play className="w-5 h-5 mb-2 text-pink-500" />
            <p className="font-black text-lg">{CONTENT.blogger.stat1Value}</p>
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">{CONTENT.blogger.stat1Title}</p>
          </div>
          <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-[2rem] border border-zinc-800 flex flex-col items-center relative overflow-hidden group">
             <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <InstagramIcon className="w-5 h-5 mb-2 text-cyan-500" />
            <p className="font-black text-lg">{CONTENT.blogger.stat2Value}</p>
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">{CONTENT.blogger.stat2Title}</p>
          </div>
        </div>

        <div className="flex-1 bg-zinc-900/80 backdrop-blur-md p-4 rounded-[2rem] border border-zinc-800 flex items-center justify-center">
           <p className="text-zinc-400 text-xs text-center font-mono uppercase tracking-widest leading-loose">
             {CONTENT.blogger.quote1}<br/> <span className="text-white font-bold bg-white/10 px-2 py-1 rounded">{CONTENT.blogger.quote2}</span>
           </p>
        </div>

        <a href={CONTENT.blogger.actionLink} className="w-full bg-white text-black font-black uppercase tracking-widest py-4 rounded-[2rem] flex items-center justify-center gap-2 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
          <Mail className="w-5 h-5" />
          {CONTENT.blogger.actionText}
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
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600 via-rose-600 to-orange-500 opacity-80 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.fitness.bgImage} className="opacity-60 mix-blend-luminosity" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/60 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/30 flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-rose-100">{CONTENT.fitness.badge}</span>
          </div>
          <Activity className="w-8 h-8 text-rose-200/80 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl leading-tight font-black mb-1 uppercase tracking-wide text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {CONTENT.fitness.name1}
            <br />
            {CONTENT.fitness.name2}
          </h2>
          <p className="text-rose-300 font-bold text-xs uppercase tracking-[0.2em] mt-2 border-l-2 border-orange-500 pl-3">
            {CONTENT.fitness.role}
          </p>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(225,29,72,0.4)] overflow-hidden bg-zinc-950 flex flex-col p-5 text-white border-2 border-red-900/50" style={{ transform: 'rotateY(180deg)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(225,29,72,0.15)_1px,_transparent_1px)]" style={{ backgroundSize: '12px 12px' }}></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3">
        <div className="bg-zinc-900 p-4 rounded-2xl border-l-4 border-l-red-600 border border-zinc-800 flex items-center gap-4">
          <img src={CONTENT.fitness.avatar} alt={CONTENT.fitness.name1} className="w-14 h-14 object-cover rounded-xl transition-all border border-zinc-700" />
          <div>
            <h3 className="text-xl font-black uppercase italic tracking-wider text-zinc-100">{CONTENT.fitness.username}</h3>
            <p className="text-red-500 text-[10px] uppercase tracking-[0.2em] font-bold">{CONTENT.fitness.subUsername}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 bg-red-600/10 rounded-bl-full"></div>
            <p className="font-black text-2xl text-white italic">{CONTENT.fitness.stat1Value}</p>
            <p className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest mt-1">{CONTENT.fitness.stat1Title}</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 bg-orange-600/10 rounded-bl-full"></div>
            <p className="font-black text-2xl text-red-500 italic">{CONTENT.fitness.stat2Value}</p>
            <p className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest mt-1">{CONTENT.fitness.stat2Title}</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 justify-center">
           <a href={CONTENT.fitness.link1Url} className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 flex items-center justify-between hover:bg-zinc-800 transition-colors group">
              <span className="font-bold uppercase tracking-wider text-xs text-zinc-300 group-hover:text-white">{CONTENT.fitness.link1Text}</span>
              <Activity className="w-4 h-4 text-orange-500" />
           </a>
           <a href={CONTENT.fitness.link2Url} className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 flex items-center justify-between hover:bg-zinc-800 transition-colors group">
              <span className="font-bold uppercase tracking-wider text-xs text-zinc-300 group-hover:text-white">{CONTENT.fitness.link2Text}</span>
              <Flame className="w-4 h-4 text-red-500" />
           </a>
        </div>

        <a href={CONTENT.fitness.actionLink} className="w-full bg-red-600 text-white font-black uppercase italic tracking-widest py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]">
          {CONTENT.fitness.actionText}
        </a>
      </div>
    </div>
  </>
);

// 6. БРОКЕР / НЕДВИЖИМОСТЬ
const RealEstateCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(29,78,216,0.4)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(37,99,235,0.6)] transition-shadow duration-700">
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-700 via-slate-800 to-amber-600 opacity-80 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.broker.bgImage} className="opacity-50 mix-blend-luminosity" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 flex items-center gap-2">
            <Key className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-blue-100">{CONTENT.broker.badge}</span>
          </div>
          <Building2 className="w-8 h-8 text-blue-200/80 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl leading-tight font-serif font-black mb-1 uppercase tracking-wide text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {CONTENT.broker.name1}
            <br />
            {CONTENT.broker.name2}
          </h2>
          <p className="text-amber-300 font-bold text-xs uppercase tracking-[0.2em] mt-2 border-l-2 border-blue-500 pl-3">
            {CONTENT.broker.role}
          </p>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(29,78,216,0.4)] overflow-hidden bg-[#0a0f1c] flex flex-col p-5 text-white" style={{ transform: 'rotateY(180deg)' }}>
      <div className="absolute inset-0 opacity-[0.05] mix-blend-screen bg-cover bg-center" style={{ backgroundImage: `url(${CONTENT.broker.bgBack})` }}></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 blur-[80px] rounded-full pointer-events-none"></div>
      
      <div className="absolute inset-3 border border-amber-600/20 rounded-[2rem] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full gap-3">
        <div className="bg-[#121a2f]/80 backdrop-blur-md p-4 rounded-[2rem] border border-blue-900/50 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-serif font-bold text-amber-50">{CONTENT.broker.username}</h3>
            <p className="text-amber-500/80 text-[9px] mt-1 uppercase tracking-widest font-bold">{CONTENT.broker.subUsername}</p>
          </div>
          <div className="w-12 h-12 rounded-full border border-amber-500/50 p-[1px]">
             <img src={CONTENT.broker.avatar} alt={CONTENT.broker.name1} className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#121a2f]/80 backdrop-blur-md p-4 rounded-[2rem] border border-blue-900/50 text-center">
            <p className="font-serif font-bold text-xl text-blue-200">{CONTENT.broker.stat1Value}</p>
            <p className="text-[9px] text-blue-400/60 uppercase font-bold tracking-widest mt-1">{CONTENT.broker.stat1Title}</p>
          </div>
          <div className="bg-[#121a2f]/80 backdrop-blur-md p-4 rounded-[2rem] border border-blue-900/50 text-center">
            <p className="font-serif font-bold text-xl text-amber-400">{CONTENT.broker.stat2Value}</p>
            <p className="text-[9px] text-amber-500/60 uppercase font-bold tracking-widest mt-1">{CONTENT.broker.stat2Title}</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 justify-center">
          <div className="bg-[#121a2f]/80 backdrop-blur-md p-4 rounded-[2rem] border border-blue-900/50 text-center flex flex-col items-center justify-center h-full">
            <Key className="w-6 h-6 text-amber-500/50 mb-2" />
            <p className="font-serif text-sm text-blue-100/80">{CONTENT.broker.quote}</p>
          </div>
        </div>

        <a href={CONTENT.broker.actionLink} className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-[#0a0f1c] font-bold py-4 rounded-[2rem] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <MessageCircle className="w-5 h-5" />
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
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-700 via-zinc-900 to-amber-500 opacity-80 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.money.bgImage} className="opacity-40 mix-blend-luminosity" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/30 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-emerald-100">{CONTENT.money.badge}</span>
          </div>
          <Diamond className="w-8 h-8 text-amber-200/80 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl leading-tight font-black mb-1 uppercase tracking-wide text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {CONTENT.money.name1}
            <br />
            {CONTENT.money.name2}
          </h2>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <p className="text-amber-400 font-bold text-xs uppercase tracking-[0.2em] border-l-2 border-emerald-500 pl-3">
              {CONTENT.money.role}
            </p>
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-100">{CONTENT.money.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(16,185,129,0.4)] overflow-hidden bg-zinc-950 flex flex-col p-5 text-white border border-emerald-900/30" style={{ transform: 'rotateY(180deg)' }}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-emerald-900/10 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3 font-mono">
        <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/50 flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-xl overflow-hidden border border-emerald-500/50">
               <img src={CONTENT.money.avatar} alt={CONTENT.money.name1} className="w-full h-full object-cover grayscale opacity-80" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-900"></div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-emerald-50 tracking-wider">{CONTENT.money.username}</h3>
            <p className="text-emerald-500 text-[9px] mt-1 uppercase tracking-widest bg-emerald-950/50 px-2 py-0.5 rounded w-fit">{CONTENT.money.subUsername}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/50 flex flex-col justify-center">
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">{CONTENT.money.stat1Title}</p>
            <p className="font-bold text-xl text-emerald-400">{CONTENT.money.stat1Value}</p>
          </div>
          <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/50 flex flex-col justify-center">
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">{CONTENT.money.stat2Title}</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <p className="font-bold text-xl text-white">{CONTENT.money.stat2Value}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-zinc-900/80 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/50 flex flex-col justify-center">
           <div className="flex items-center justify-between mb-2">
             <span className="text-xs text-zinc-400">{CONTENT.money.infoTitle}</span>
             <span className="text-[10px] text-emerald-400 bg-emerald-900/30 px-2 py-1 rounded">{CONTENT.money.infoSub}</span>
           </div>
           <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
             <div className="bg-gradient-to-r from-emerald-600 to-amber-400 h-full w-[85%] rounded-full relative">
               <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
             </div>
           </div>
           <p className="text-[9px] text-right mt-1 text-zinc-500">{CONTENT.money.placesLeft}</p>
        </div>

        <a href={CONTENT.money.actionLink} className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black uppercase tracking-widest py-4 rounded-3xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400">
          <Wallet className="w-5 h-5" />
          {CONTENT.money.actionText}
        </a>
      </div>
    </div>
  </>
);

// 8. СОЗДАТЕЛЬ / CREATOR (Специально для тебя!)
const CreatorCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,255,255,0.2)] overflow-hidden bg-zinc-950 text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(255,255,255,0.4)] transition-shadow duration-700 border border-zinc-700/50">
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-950 opacity-90 mix-blend-screen"></div>
      
      {/* ЗАМЕНА СТАТИЧНОГО ФОНА НА СГОРАЮЩИЙ */}
      <BurnRevealImage src={CONTENT.creator.bgImage} className="opacity-70 mix-blend-screen filter contrast-125 grayscale-[30%]" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <Crown className="w-4 h-4 text-white" />
            <span className="text-xs font-bold tracking-wider uppercase text-zinc-100">{CONTENT.creator.badge}</span>
          </div>
          <Sparkles className="w-8 h-8 text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse" />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl leading-tight font-black mb-1 uppercase tracking-wide text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            {CONTENT.creator.name1}
            <br />
            {CONTENT.creator.name2}
          </h2>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <p className="text-zinc-200 font-bold text-xs uppercase tracking-[0.2em] border-l-2 border-white pl-3">
              {CONTENT.creator.role}
            </p>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping shadow-[0_0_8px_rgba(255,255,255,1)]"></span>
              <span className="text-[8px] font-bold uppercase tracking-wider text-white">{CONTENT.creator.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,255,255,0.1)] overflow-hidden bg-zinc-950 flex flex-col p-5 text-white border border-zinc-800" style={{ transform: 'rotateY(180deg)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.08] mix-blend-screen bg-cover bg-center" style={{ backgroundImage: `url(${CONTENT.creator.bgBack})` }}></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3">
        <div className="bg-zinc-900/40 backdrop-blur-xl p-4 rounded-[2rem] border border-white/10 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-500 text-transparent bg-clip-text tracking-wide">{CONTENT.creator.username}</h3>
            <p className="text-zinc-400 text-[9px] mt-1 uppercase tracking-widest font-bold">{CONTENT.creator.subUsername}</p>
          </div>
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-zinc-300 to-zinc-700 p-[2px] shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <img src={CONTENT.creator.avatar} alt={CONTENT.creator.name1} className="w-full h-full object-cover rounded-full border border-zinc-950" />
            </div>
            <Crown className="absolute -bottom-1 -right-1 w-5 h-5 text-zinc-100 bg-zinc-900 rounded-full p-0.5 border border-zinc-700" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-900/40 backdrop-blur-xl p-4 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:bg-white/5 transition-colors">
            <Sparkles className="w-5 h-5 mb-2 text-zinc-300 group-hover:animate-spin" />
            <p className="font-black text-xl tracking-tighter">{CONTENT.creator.stat1Value}</p>
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">{CONTENT.creator.stat1Title}</p>
          </div>
          <div className="bg-zinc-900/40 backdrop-blur-xl p-4 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:bg-white/5 transition-colors">
            <Diamond className="w-5 h-5 mb-2 text-zinc-300 group-hover:scale-110 transition-transform" />
            <p className="font-black text-xl tracking-tighter">{CONTENT.creator.stat2Value}</p>
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">{CONTENT.creator.stat2Title}</p>
          </div>
        </div>

        <div className="flex-1 bg-zinc-900/40 backdrop-blur-xl p-4 rounded-[2rem] border border-white/10 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
           <p className="text-zinc-300 text-xs text-center uppercase tracking-widest leading-relaxed font-medium">
             {CONTENT.creator.quote1} <br/> <span className="text-white font-bold border-b border-white/30">{CONTENT.creator.quote2}</span>
           </p>
        </div>

        <a href={CONTENT.creator.actionLink} className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-black uppercase tracking-widest py-4 rounded-[2rem] flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <Crown className="w-5 h-5" />
          {CONTENT.creator.actionText}
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
      'rgba(147,51,234,0.6)', // Эзотерик
      'rgba(13,148,136,0.5)', // Психолог
      'rgba(249,115,22,0.6)', // Турагент
      'rgba(236,72,153,0.6)', // Блогер
      'rgba(225,29,72,0.6)',  // Тренер
      'rgba(29,78,216,0.6)',  // Брокер
      'rgba(16,185,129,0.6)', // Заработок
      'rgba(255,255,255,0.4)' // Создатель
    ];
    return colors[activeTab] || colors[0];
  };

  const tabs = [
    { id: 0, name: 'Эзотерик', icon: <Moon className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 1, name: 'Психолог', icon: <Brain className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 2, name: 'Турагент', icon: <PlaneTakeoff className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 3, name: 'Блогер', icon: <Camera className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 4, name: 'Тренер', icon: <Activity className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 5, name: 'Брокер', icon: <Building2 className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 6, name: 'Заработок', icon: <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { id: 7, name: 'Создатель', icon: <Crown className="w-3 h-3 sm:w-4 sm:h-4" /> },
  ];

  // Выбор активной карточки
  const renderActiveCard = () => {
    switch (activeTab) {
      case 0: return <EsotericCard />;
      case 1: return <PsychologistCard />;
      case 2: return <TravelCard />;
      case 3: return <BloggerCard />;
      case 4: return <FitnessCard />;
      case 5: return <RealEstateCard />;
      case 6: return <MoneyCard />;
      case 7: return <CreatorCard />;
      default: return <EsotericCard />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 sm:p-8 font-sans overflow-hidden">
      {/* Вставляем глобальные стили */}
      <style>{globalStyles}</style>

      {/* SVG-Фильтр для эффекта рваной горящей бумаги */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <filter id="burn-edge-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
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
              <span className="hidden sm:inline">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* КОНТЕЙНЕР ВИЗИТКИ (3D Сцена) */}
      <div 
        ref={cardRef}
        className="relative z-10 w-full max-w-[22rem] aspect-[1/1.6] sm:aspect-[1/1.5] cursor-pointer group animate-float touch-none"
        style={{ perspective: '1500px' }}
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
    </div>
  );
};

export default App;