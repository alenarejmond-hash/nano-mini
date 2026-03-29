import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Moon, Brain, Heart, PlaneTakeoff, Map, 
  Camera, Play, Phone, Mail, Instagram, MessageCircle, 
  MapPin, Globe, Award, Star, Compass, UserCircle2,
  Flame, Activity, Building2, Key, TrendingUp, Diamond, Wallet, Crown
} from 'lucide-react';

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
  }
  .card-backface-hidden {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
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
`;

// ==========================================
// ШАБЛОНЫ ВИЗИТОК (4 направления)
// ==========================================

// 1. ЭЗОТЕРИК
const EsotericCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(147,51,234,0.4)] overflow-hidden bg-black text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(168,85,247,0.6)] transition-shadow duration-700">
      {/* Мистический градиент и фон */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 opacity-70 mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/30 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-bold tracking-wider uppercase text-purple-100">Таро & Звезды</span>
          </div>
          <Moon className="w-8 h-8 text-amber-200/80 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
        </div>

        <div>
          <h2 className="text-5xl font-serif font-black mb-1 uppercase tracking-tighter mix-blend-overlay text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            ЕЛЕНА
            <br />
            МИФ
          </h2>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <p className="text-amber-300 font-bold text-sm uppercase tracking-[0.3em] border-l-2 border-purple-500 pl-3">
              Elite Astrologer
            </p>
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-purple-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
              <span className="text-[8px] font-bold uppercase tracking-wider text-amber-100">Запись открыта</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Bento Grid Style) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(147,51,234,0.4)] overflow-hidden bg-zinc-950 flex flex-col p-5 text-white" style={{ transform: 'rotateY(180deg)' }}>
      {/* Магические сферы на фоне */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_100%_0%,_rgba(147,51,234,0.3),_transparent_60%)]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_0%_100%,_rgba(245,158,11,0.15),_transparent_60%)]"></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3">
        {/* Шапка профиля */}
        <div className="bg-zinc-900/60 backdrop-blur-xl rounded-[2rem] p-4 border border-purple-500/20 flex items-center gap-4 shadow-lg">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-amber-500 p-0.5 shrink-0">
            <img src="https://images.unsplash.com/photo-1606322964893-c62584102283?q=80&w=400&auto=format&fit=crop" alt="Елена" className="w-full h-full object-cover rounded-full border border-zinc-950" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold text-amber-100">@elena_myth</h3>
            <p className="text-purple-400 text-[10px] mt-0.5 uppercase tracking-widest">Premium Access</p>
          </div>
        </div>
        
        {/* Кнопки соцсетей (Сетка) */}
        <div className="grid grid-cols-2 gap-3">
          <a href="#" className="bg-zinc-900/60 backdrop-blur-xl rounded-[2rem] p-4 border border-purple-500/20 flex flex-col items-center justify-center gap-2 hover:border-amber-500/50 hover:bg-purple-900/20 transition-all group shadow-lg">
            <MessageCircle className="w-6 h-6 text-purple-400 group-hover:text-amber-300 transition-colors" />
            <span className="font-medium text-[11px] uppercase tracking-wider text-purple-200">Telegram</span>
          </a>
          <a href="#" className="bg-zinc-900/60 backdrop-blur-xl rounded-[2rem] p-4 border border-purple-500/20 flex flex-col items-center justify-center gap-2 hover:border-amber-500/50 hover:bg-purple-900/20 transition-all group shadow-lg">
            <Instagram className="w-6 h-6 text-purple-400 group-hover:text-amber-300 transition-colors" />
            <span className="font-medium text-[11px] uppercase tracking-wider text-purple-200">Instagram</span>
          </a>
        </div>

        {/* Инфо-блок */}
        <div className="bg-zinc-900/60 backdrop-blur-xl rounded-[2rem] p-5 border border-purple-500/20 flex-1 relative overflow-hidden flex flex-col justify-center items-center shadow-lg group">
          <Moon className="absolute -right-4 -bottom-4 w-24 h-24 text-amber-500/10 group-hover:rotate-12 transition-transform duration-700" />
          <p className="font-serif italic text-amber-100/90 text-[13px] text-center leading-relaxed">
            "Открой двери в свое<br/>истинное предназначение"
          </p>
        </div>

        {/* Главное действие */}
        <a href="#" className="mt-auto w-full bg-gradient-to-r from-purple-900 to-indigo-900 text-amber-100 font-bold py-4 rounded-[2rem] flex items-center justify-center gap-2 hover:from-purple-800 hover:to-indigo-800 transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] border border-purple-500/30">
          <Sparkles className="w-5 h-5" />
          Личный Расклад
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
      <div className="absolute inset-0 bg-gradient-to-bl from-teal-500 via-emerald-700 to-slate-900 opacity-80 mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-luminosity"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-teal-500/30 flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-teal-100">Терапия</span>
          </div>
          <Brain className="w-8 h-8 text-teal-200/80 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
        </div>

        <div>
          <h2 className="text-5xl font-serif font-medium mb-1 uppercase tracking-tighter mix-blend-overlay text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
            АННА
            <br />
            СВЕТЛАЯ
          </h2>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <p className="text-teal-300 font-bold text-sm uppercase tracking-[0.3em] border-l-2 border-emerald-500 pl-3">
              Clinical Psychologist
            </p>
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-teal-500/30">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-100">Онлайн</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Glass & Air Style) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(13,148,136,0.4)] overflow-hidden bg-zinc-50 flex flex-col p-5 text-zinc-800" style={{ transform: 'rotateY(180deg)' }}>
      {/* Воздушный градиент на фоне */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/80"></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3">
        {/* Профиль */}
        <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-4 border border-white flex items-center gap-4 shadow-[0_8px_30px_rgba(13,148,136,0.05)]">
          <div className="w-14 h-14 rounded-full border-2 border-teal-200 p-0.5 shrink-0 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" alt="Анна" className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold text-teal-950">@psy_svetplaya</h3>
            <p className="text-teal-600/80 text-[10px] mt-0.5 uppercase tracking-widest font-medium">Бережный подход</p>
          </div>
        </div>
        
        {/* Статистика с мягкими тенями */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-4 border border-white text-center shadow-[0_8px_30px_rgba(13,148,136,0.05)]">
            <Award className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
            <p className="text-[10px] text-teal-600/60 uppercase font-bold tracking-wider">Практика</p>
            <p className="font-serif font-bold text-lg mt-0.5 text-teal-950">12 лет</p>
          </div>
          <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-4 border border-white text-center shadow-[0_8px_30px_rgba(13,148,136,0.05)]">
            <MapPin className="w-6 h-6 mx-auto mb-2 text-teal-500" />
            <p className="text-[10px] text-teal-600/60 uppercase font-bold tracking-wider">Прием</p>
            <p className="font-serif font-bold text-sm mt-1.5 text-teal-950">МСК / Web</p>
          </div>
        </div>

        {/* Элегантная цитата */}
        <div className="flex-1 flex items-center justify-center px-4">
           <p className="text-center font-serif text-teal-900/60 text-sm leading-relaxed relative">
             <span className="text-4xl absolute -top-4 -left-2 text-teal-200 opacity-50 font-serif">"</span>
             Здесь безопасно быть собой. Начнем путь к гармонии вместе.
             <span className="text-4xl absolute -bottom-6 -right-2 text-teal-200 opacity-50 font-serif">"</span>
           </p>
        </div>

        <a href="#" className="mt-auto w-full bg-teal-900 text-white font-medium py-4 rounded-[2rem] flex items-center justify-center gap-2 hover:bg-teal-800 transition-all shadow-lg">
          <Phone className="w-5 h-5 text-teal-200" />
          Записаться на сессию
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
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/30 flex items-center gap-2">
            <Compass className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-rose-100">VIP Tours</span>
          </div>
          <PlaneTakeoff className="w-8 h-8 text-rose-200/80 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
        </div>

        <div className="pb-6">
          <h2 className="text-5xl font-black mb-1 uppercase tracking-tighter mix-blend-overlay text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
            МАКСИМ
            <br />
            ВОЯЖ
          </h2>
          <p className="text-orange-300 font-bold text-sm uppercase tracking-[0.3em] mt-2 border-l-2 border-rose-500 pl-3">
            Premium Travel
          </p>
        </div>
      </div>
      
      {/* Бегущая строка */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black/40 backdrop-blur-md border-t border-rose-500/30 py-1.5 z-20">
        <div className="flex w-[200%] animate-scroll text-[9px] font-bold uppercase tracking-[0.2em] text-rose-100">
          <span className="w-1/2 flex justify-around">
            <span>✈️ СЕЙШЕЛЫ</span>
            <span>⭐ МАЛЬДИВЫ</span>
            <span>🌴 БАЛИ</span>
          </span>
          <span className="w-1/2 flex justify-around">
            <span>✈️ СЕЙШЕЛЫ</span>
            <span>⭐ МАЛЬДИВЫ</span>
            <span>🌴 БАЛИ</span>
          </span>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Black Card / Boarding Pass Hybrid) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(249,115,22,0.4)] overflow-hidden bg-zinc-900 border border-zinc-700 flex flex-col text-white" style={{ transform: 'rotateY(180deg)' }}>
      {/* Текстура карты мира */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center"></div>
      
      {/* Шапка First Class */}
      <div className="bg-gradient-to-r from-orange-600 to-rose-600 p-5 relative z-10 flex justify-between items-end shadow-md">
        <div>
          <h3 className="text-[10px] text-rose-200 uppercase tracking-widest font-bold mb-1">Status</h3>
          <p className="text-xl font-black tracking-widest uppercase drop-shadow-md">First Class</p>
        </div>
        <PlaneTakeoff className="w-8 h-8 text-white/50" />
      </div>
      
      <div className="p-5 flex flex-col gap-4 flex-1 relative z-10 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-t-3xl -mt-4 shadow-[0_-10px_20px_rgba(0,0,0,0.3)]">
        
        {/* Данные "пассажира" */}
        <div className="flex items-center gap-4 bg-zinc-900/80 p-3 rounded-2xl border border-zinc-700/50">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-orange-500/50 shrink-0">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="Максим" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 w-full gap-2">
            <div>
              <p className="text-[8px] text-zinc-500 uppercase font-bold tracking-wider">Agent</p>
              <p className="font-bold text-sm text-zinc-100">Max Voyage</p>
            </div>
            <div>
              <p className="text-[8px] text-zinc-500 uppercase font-bold tracking-wider">Dest</p>
              <p className="font-bold text-sm text-orange-400">Anywhere</p>
            </div>
          </div>
        </div>

        {/* Штрихкод декоративный */}
        <div className="w-full h-8 bg-[repeating-linear-gradient(90deg,#fff,#fff_2px,transparent_2px,transparent_4px,#fff_4px,#fff_5px,transparent_5px,transparent_8px)] opacity-20 my-2"></div>

        <div className="flex flex-col gap-2 mt-auto">
          <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-orange-400" />
              <span className="font-medium text-sm text-zinc-200">Telegram Консьерж</span>
            </div>
          </a>
          <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-rose-400" />
              <span className="font-medium text-sm text-zinc-200">Подобрать тур</span>
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
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider uppercase">Live</span>
          </div>
          <Camera className="w-8 h-8 text-white/80" />
        </div>

        <div>
          <h2 className="text-5xl font-black mb-1 uppercase tracking-tighter mix-blend-overlay text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            ALEX
            <br />
            NEO
          </h2>
          <p className="text-cyan-300 font-bold text-sm uppercase tracking-[0.3em] mt-2 border-l-2 border-pink-500 pl-3">
            Lifestyle Creator
          </p>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Cyberpunk / Neumorphic Dark) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(6,182,212,0.4)] overflow-hidden bg-zinc-950 flex flex-col p-5 text-white border border-zinc-800" style={{ transform: 'rotateY(180deg)' }}>
      {/* Неоновая подсветка */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-500/20 blur-[60px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/20 blur-[60px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3">
        {/* Аватар-блок */}
        <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-[2rem] border border-zinc-800 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">@alexneo_real</h3>
            <p className="text-zinc-500 text-[10px] mt-1 uppercase tracking-widest font-bold">Content Creator</p>
          </div>
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-cyan-500 p-[2px] shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" alt="Alex Neo" className="w-full h-full object-cover rounded-full border border-zinc-950" />
          </div>
        </div>
        
        {/* Дашборд статы */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-[2rem] border border-zinc-800 flex flex-col items-center relative overflow-hidden group">
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Play className="w-5 h-5 mb-2 text-pink-500" />
            <p className="font-black text-lg">850K</p>
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">YouTube</p>
          </div>
          <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-[2rem] border border-zinc-800 flex flex-col items-center relative overflow-hidden group">
             <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Instagram className="w-5 h-5 mb-2 text-cyan-500" />
            <p className="font-black text-lg">1.2M</p>
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Instagram</p>
          </div>
        </div>

        <div className="flex-1 bg-zinc-900/80 backdrop-blur-md p-4 rounded-[2rem] border border-zinc-800 flex items-center justify-center">
           <p className="text-zinc-400 text-xs text-center font-mono uppercase tracking-widest leading-loose">
             Open for<br/> <span className="text-white font-bold bg-white/10 px-2 py-1 rounded">Collaborations</span><br/> & Media
           </p>
        </div>

        <a href="#" className="w-full bg-white text-black font-black uppercase tracking-widest py-4 rounded-[2rem] flex items-center justify-center gap-2 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
          <Mail className="w-5 h-5" />
          Send Pitch
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
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-700 via-red-600 to-orange-500 opacity-80 mix-blend-screen"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/30 flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-rose-100">Трансформация</span>
          </div>
          <Activity className="w-8 h-8 text-rose-200/80 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
        </div>

        <div>
          <h2 className="text-5xl font-black mb-1 uppercase tracking-tighter mix-blend-overlay text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            ИВАН
            <br />
            СИЛА
          </h2>
          <p className="text-rose-300 font-bold text-sm uppercase tracking-[0.3em] mt-2 border-l-2 border-orange-500 pl-3">
            Elite Coach
          </p>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Aggressive / Carbon Grid Style) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(225,29,72,0.4)] overflow-hidden bg-zinc-950 flex flex-col p-5 text-white border-2 border-red-900/50" style={{ transform: 'rotateY(180deg)' }}>
      {/* Перфорированный фон */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(225,29,72,0.15)_1px,_transparent_1px)]" style={{ backgroundSize: '12px 12px' }}></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3">
        {/* Профиль в брутальном стиле */}
        <div className="bg-zinc-900 p-4 rounded-2xl border-l-4 border-l-red-600 border border-zinc-800 flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop" alt="Иван Сила" className="w-14 h-14 object-cover rounded-xl grayscale hover:grayscale-0 transition-all border border-zinc-700" />
          <div>
            <h3 className="text-xl font-black uppercase italic tracking-wider text-zinc-100">@ivan_sila</h3>
            <p className="text-red-500 text-[10px] uppercase tracking-[0.2em] font-bold">No Excuses</p>
          </div>
        </div>
        
        {/* Статы */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 bg-red-600/10 rounded-bl-full"></div>
            <p className="font-black text-2xl text-white italic">8</p>
            <p className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest mt-1">Лет Опыта</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-8 h-8 bg-orange-600/10 rounded-bl-full"></div>
            <p className="font-black text-2xl text-red-500 italic">500+</p>
            <p className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest mt-1">Трансформаций</p>
          </div>
        </div>

        {/* Ссылки */}
        <div className="flex-1 flex flex-col gap-2 justify-center">
           <a href="#" className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 flex items-center justify-between hover:bg-zinc-800 transition-colors group">
              <span className="font-bold uppercase tracking-wider text-xs text-zinc-300 group-hover:text-white">Программа Питания</span>
              <Activity className="w-4 h-4 text-orange-500" />
           </a>
           <a href="#" className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 flex items-center justify-between hover:bg-zinc-800 transition-colors group">
              <span className="font-bold uppercase tracking-wider text-xs text-zinc-300 group-hover:text-white">Онлайн Ведение</span>
              <Flame className="w-4 h-4 text-red-500" />
           </a>
        </div>

        <a href="#" className="w-full bg-red-600 text-white font-black uppercase italic tracking-widest py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]">
          Начать работу
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
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-luminosity"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30 flex items-center gap-2">
            <Key className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-blue-100">Private keys</span>
          </div>
          <Building2 className="w-8 h-8 text-blue-200/80 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
        </div>

        <div>
          <h2 className="text-5xl font-serif font-black mb-1 uppercase tracking-tighter mix-blend-overlay text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            АРТУР
            <br />
            ГРАНД
          </h2>
          <p className="text-amber-300 font-bold text-sm uppercase tracking-[0.3em] mt-2 border-l-2 border-blue-500 pl-3">
            Luxury Real Estate
          </p>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Navy & Gold Luxury) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(29,78,216,0.4)] overflow-hidden bg-[#0a0f1c] flex flex-col p-5 text-white" style={{ transform: 'rotateY(180deg)' }}>
      {/* Мраморная/золотая пыль на фоне */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600163990861-1c5c0c978b7b?q=80&w=2000&auto=format&fit=crop')] opacity-[0.05] mix-blend-screen"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 blur-[80px] rounded-full pointer-events-none"></div>
      
      {/* Тонкая золотая рамка */}
      <div className="absolute inset-3 border border-amber-600/20 rounded-[2rem] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full gap-3">
        {/* Профиль */}
        <div className="bg-[#121a2f]/80 backdrop-blur-md p-4 rounded-[2rem] border border-blue-900/50 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-serif font-bold text-amber-50">@artur_grand</h3>
            <p className="text-amber-500/80 text-[9px] mt-1 uppercase tracking-widest font-bold">Premium Broker</p>
          </div>
          <div className="w-12 h-12 rounded-full border border-amber-500/50 p-[1px]">
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="Артур Гранд" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#121a2f]/80 backdrop-blur-md p-4 rounded-[2rem] border border-blue-900/50 text-center">
            <p className="font-serif font-bold text-xl text-blue-200">120+</p>
            <p className="text-[9px] text-blue-400/60 uppercase font-bold tracking-widest mt-1">Вилл в базе</p>
          </div>
          <div className="bg-[#121a2f]/80 backdrop-blur-md p-4 rounded-[2rem] border border-blue-900/50 text-center">
            <p className="font-serif font-bold text-xl text-amber-400">$50M+</p>
            <p className="text-[9px] text-amber-500/60 uppercase font-bold tracking-widest mt-1">Объем сделок</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 justify-center">
          <div className="bg-[#121a2f]/80 backdrop-blur-md p-4 rounded-[2rem] border border-blue-900/50 text-center flex flex-col items-center justify-center h-full">
            <Key className="w-6 h-6 text-amber-500/50 mb-2" />
            <p className="font-serif text-sm text-blue-100/80">Доступ к закрытым объектам off-market</p>
          </div>
        </div>

        <a href="#" className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-[#0a0f1c] font-bold py-4 rounded-[2rem] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <MessageCircle className="w-5 h-5" />
          Связаться в Telegram
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
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/30 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold tracking-wider uppercase text-emerald-100">Smart Money</span>
          </div>
          <Diamond className="w-8 h-8 text-amber-200/80 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
        </div>

        <div>
          <h2 className="text-5xl font-black mb-1 uppercase tracking-tighter mix-blend-overlay text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            МАКС
            <br />
            ПРОФИТ
          </h2>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <p className="text-amber-400 font-bold text-sm uppercase tracking-[0.3em] border-l-2 border-emerald-500 pl-3">
              Digital Wealth
            </p>
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-100">Команда 200+</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Tech Grid / Trading Terminal) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(16,185,129,0.4)] overflow-hidden bg-zinc-950 flex flex-col p-5 text-white border border-emerald-900/30" style={{ transform: 'rotateY(180deg)' }}>
      {/* Сетка терминала */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-emerald-900/10 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3 font-mono">
        {/* Хедер-блок */}
        <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/50 flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-xl overflow-hidden border border-emerald-500/50">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" alt="Макс Профит" className="w-full h-full object-cover grayscale opacity-80" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-900"></div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-emerald-50 tracking-wider">@max_profit</h3>
            <p className="text-emerald-500 text-[9px] mt-1 uppercase tracking-widest bg-emerald-950/50 px-2 py-0.5 rounded w-fit">&lt; Verified /&gt;</p>
          </div>
        </div>
        
        {/* Дашборд доходов */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/50 flex flex-col justify-center">
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Total Volume</p>
            <p className="font-bold text-xl text-emerald-400">$1.2M+</p>
          </div>
          <div className="bg-zinc-900/80 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/50 flex flex-col justify-center">
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Members</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <p className="font-bold text-xl text-white">204</p>
            </div>
          </div>
        </div>

        {/* Экшен блок */}
        <div className="flex-1 bg-zinc-900/80 backdrop-blur-md p-4 rounded-3xl border border-emerald-900/50 flex flex-col justify-center">
           <div className="flex items-center justify-between mb-2">
             <span className="text-xs text-zinc-400">Система заработка</span>
             <span className="text-[10px] text-emerald-400 bg-emerald-900/30 px-2 py-1 rounded">v.2.0</span>
           </div>
           <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
             <div className="bg-gradient-to-r from-emerald-600 to-amber-400 h-full w-[85%] rounded-full relative">
               <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
             </div>
           </div>
           <p className="text-[9px] text-right mt-1 text-zinc-500">Осталось 15 мест</p>
        </div>

        <a href="#" className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black uppercase tracking-widest py-4 rounded-3xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400">
          <Wallet className="w-5 h-5" />
          Забрать доступ
        </a>
      </div>
    </div>
  </>
);

// 8. СОЗДАТЕЛЬ / CREATOR (Специально для тебя!)
const CreatorCard = () => (
  <>
    {/* ЛИЦЕВАЯ СТОРОНА (Platinum & Liquid Chrome) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,255,255,0.2)] overflow-hidden bg-zinc-950 text-white flex flex-col p-6 group-hover:shadow-[0_20px_80px_rgba(255,255,255,0.4)] transition-shadow duration-700 border border-zinc-700/50">
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-950 opacity-90 mix-blend-screen"></div>
      {/* Голографический жидкий металл */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70 mix-blend-screen filter contrast-125 grayscale-[30%]"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <Crown className="w-4 h-4 text-white" />
            <span className="text-xs font-bold tracking-wider uppercase text-zinc-100">Super Boss</span>
          </div>
          <Sparkles className="w-8 h-8 text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse" />
        </div>

        <div>
          <h2 className="text-5xl font-black mb-1 uppercase tracking-tighter mix-blend-overlay text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]">
            ТВОЕ
            <br />
            ИМЯ
          </h2>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <p className="text-zinc-200 font-bold text-sm uppercase tracking-[0.3em] border-l-2 border-white pl-3">
              Digital Architect
            </p>
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping shadow-[0_0_8px_rgba(255,255,255,1)]"></span>
              <span className="text-[8px] font-bold uppercase tracking-wider text-white">Founder</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ОБРАТНАЯ СТОРОНА (Ultra Glass & Platinum Grid) */}
    <div className="absolute inset-0 w-full h-full card-backface-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,255,255,0.1)] overflow-hidden bg-zinc-950 flex flex-col p-5 text-white border border-zinc-800" style={{ transform: 'rotateY(180deg)' }}>
      {/* Элегантное белое свечение */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600163990861-1c5c0c978b7b?q=80&w=2000&auto=format&fit=crop')] opacity-[0.08] mix-blend-screen"></div>
      
      <div className="relative z-10 flex flex-col h-full gap-3">
        {/* Хедер профиля */}
        <div className="bg-zinc-900/40 backdrop-blur-xl p-4 rounded-[2rem] border border-white/10 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-500 text-transparent bg-clip-text tracking-wide">@твоя_телега</h3>
            <p className="text-zinc-400 text-[9px] mt-1 uppercase tracking-widest font-bold">Creator of Magic</p>
          </div>
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-zinc-300 to-zinc-700 p-[2px] shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" alt="Твое Фото" className="w-full h-full object-cover rounded-full border border-zinc-950" />
            </div>
            <Crown className="absolute -bottom-1 -right-1 w-5 h-5 text-zinc-100 bg-zinc-900 rounded-full p-0.5 border border-zinc-700" />
          </div>
        </div>
        
        {/* Дашборд крутости */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-900/40 backdrop-blur-xl p-4 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:bg-white/5 transition-colors">
            <Sparkles className="w-5 h-5 mb-2 text-zinc-300 group-hover:animate-spin" />
            <p className="font-black text-xl tracking-tighter">100+</p>
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Вау-визиток</p>
          </div>
          <div className="bg-zinc-900/40 backdrop-blur-xl p-4 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] group hover:bg-white/5 transition-colors">
            <Diamond className="w-5 h-5 mb-2 text-zinc-300 group-hover:scale-110 transition-transform" />
            <p className="font-black text-xl tracking-tighter">∞</p>
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1">Отвал бошки</p>
          </div>
        </div>

        {/* УТП Блок */}
        <div className="flex-1 bg-zinc-900/40 backdrop-blur-xl p-4 rounded-[2rem] border border-white/10 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
           <p className="text-zinc-300 text-xs text-center uppercase tracking-widest leading-relaxed font-medium">
             Делаю дизайн, который <br/> <span className="text-white font-bold border-b border-white/30">продает за тебя</span>
           </p>
        </div>

        <a href="#" className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-black uppercase tracking-widest py-4 rounded-[2rem] flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <Crown className="w-5 h-5" />
          Заказать визитку
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

  // Сброс переворота при смене вкладки
  useEffect(() => {
    setIsFlipped(false);
  }, [activeTab]);

  const playFlipSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
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

    // Вибрация (Haptic feedback) при поддержке устройством для премиум-ощущений
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(50);
    }
    setIsFlipped(!isFlipped);
  };

  const tabs = [
    { id: 0, name: 'Эзотерик', icon: <Moon className="w-4 h-4" /> },
    { id: 1, name: 'Психолог', icon: <Brain className="w-4 h-4" /> },
    { id: 2, name: 'Турагент', icon: <PlaneTakeoff className="w-4 h-4" /> },
    { id: 3, name: 'Блогер', icon: <Camera className="w-4 h-4" /> },
    { id: 4, name: 'Тренер', icon: <Activity className="w-4 h-4" /> },
    { id: 5, name: 'Брокер', icon: <Building2 className="w-4 h-4" /> },
    { id: 6, name: 'Заработок', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 7, name: 'Создатель', icon: <Crown className="w-4 h-4" /> },
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

      {/* Фоновое свечение приложения */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ПЕРЕКЛЮЧАТЕЛЬ ШАБЛОНОВ */}
      <div className="relative z-20 mb-12 sm:mb-16 w-full max-w-md">
        <div className="flex p-1.5 bg-neutral-900/80 backdrop-blur-xl rounded-full border border-neutral-800 shadow-2xl overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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
        className="relative z-10 w-full max-w-[22rem] aspect-[1/1.6] sm:aspect-[1/1.5] cursor-pointer group animate-float"
        style={{ perspective: '1500px' }}
        onClick={handleFlip}
      >
        {/* Сама визитка с анимацией парения и вращения */}
        <div 
          className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] card-preserve-3d"
          style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {renderActiveCard()}
        </div>
      </div>
    </div>
  );
};

export default App;