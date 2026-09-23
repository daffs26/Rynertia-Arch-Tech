'use client';

import React from 'react';
import {
  Compass,
  MessageSquare,
  Search,
  Cpu,
  TrendingUp,
  Layers,
  Users,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/MotionWrapper';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-8 pb-12 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-28 overflow-hidden bg-transparent border-b border-slate-200/80 dark:border-slate-800"
    >
      {/* ── LOCAL 4K VIDEO BACKGROUND: 1-MINUTE CONTINUOUS NATIVE LOOP ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/videos/jakarta-poster.webp"
          className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
        >
          <source src="/videos/jakarta-1min.mp4" type="video/mp4" />
        </video>

        {/* Directional Readability Mask: High contrast protection for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent dark:from-slate-950/95 dark:via-slate-950/70 dark:to-transparent lg:bg-gradient-to-r lg:from-white/90 lg:via-white/45 lg:to-transparent lg:dark:from-slate-950/95 lg:dark:via-slate-950/70 lg:dark:to-transparent pointer-events-none" />

        {/* Transparent soft bottom blend into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/90 via-white/40 to-transparent dark:from-slate-950/95 dark:via-slate-950/50 dark:to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <FadeIn direction="up">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-extrabold text-slate-900 dark:text-white leading-[1.14] sm:leading-[1.1] tracking-tight">
                <span className="block">{t('hero-title-1')}</span>
                <span className="text-gradient-blue inline-block pb-1 sm:pb-1.5">
                  {t('hero-title-2')}
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <p className="text-sm sm:text-base lg:text-[16.5px] xl:text-[17px] text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {t('hero-desc')}
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-1.5 sm:pt-2.5">
                <a
                  href="#services"
                  className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold sm:font-bold text-sm sm:text-[15px] shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 group cursor-pointer min-h-[48px] sm:min-h-[50px]"
                >
                  <span>{t('hero-btn-explore')}</span>
                  <Compass className="w-4.5 h-4.5 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl border-2 border-slate-300/90 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-slate-800 dark:text-slate-100 font-semibold sm:font-bold text-sm sm:text-[15px] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5 hover:-translate-y-0.5 cursor-pointer min-h-[48px] sm:min-h-[50px] backdrop-blur-md group"
                >
                  <span>{t('hero-btn-consult')}</span>
                  <MessageSquare className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Hero Visual Showcase Frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            <FadeIn direction="left" delay={0.2} duration={0.8}>
              <div className="relative w-72 sm:w-80 h-72 sm:h-80 animate-float">
                {/* Ambient backdrop glow */}
                <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-2xl -z-10" />

                {/* Central Circle Emblem with Official Transparent Logo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/95 via-blue-50/85 to-white dark:from-slate-900/95 dark:via-slate-800/85 dark:to-slate-900 border border-blue-200/90 dark:border-blue-900/50 backdrop-blur-2xl flex items-center justify-center shadow-[0_10px_40px_rgba(37,99,235,0.15)] p-8 sm:p-10 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                  <img
                    src="/rynertia-logo.png"
                    alt="Rynertia Arc Tech Official Logo"
                    className="w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-[0_6px_20px_rgba(37,99,235,0.18)]"
                  />
                </div>

                {/* Top-Right Floating Badge: 16 Members / Personil */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-4 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xl flex items-center gap-3 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {language === 'id' ? '16 Personil' : '16 Members'}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider">
                      {language === 'id' ? 'TIM SPESIALIS' : 'SPECIALIST TEAM'}
                    </span>
                  </div>
                </div>

                {/* Bottom-Left Floating Badge: 4 Pillars */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 px-4 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xl flex items-center gap-3 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-200/60 dark:border-sky-900/40 flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {language === 'id' ? '4 Pilar' : '4 Pillars'}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider">
                      R&A · IT · DESIGN · MKT
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 3 Structured Enterprise Feature Cards */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-10 pt-8 sm:mt-16 sm:pt-10"
        >
          <StaggerItem>
            <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 border-t-2 border-t-blue-600 p-6 sm:p-7 rounded-2xl shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-slate-900 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group">
              <span className="absolute top-5 right-6 text-4xl font-extrabold text-blue-600 select-none pointer-events-none tracking-tight" aria-hidden="true">01</span>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t('feat-1-title')}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {t('feat-1-desc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-5 mt-auto pt-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-50/90 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-900/60">
                  {t('feat-1-chip-1')}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                  {t('feat-1-chip-2')}
                </span>
              </div>
              <a
                href="#services"
                className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/cta transition-all duration-200"
              >
                <span>{t('feat-1-cta')}</span>
                <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover/cta:bg-blue-600 group-hover/cta:text-white transition-all duration-200">
                  <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                </div>
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 border-t-2 border-t-sky-500 p-6 sm:p-7 rounded-2xl shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-sky-300 dark:hover:border-sky-500 hover:bg-white dark:hover:bg-slate-900 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group">
              <span className="absolute top-5 right-6 text-4xl font-extrabold text-sky-600 select-none pointer-events-none tracking-tight" aria-hidden="true">02</span>
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-900/60 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {t('feat-2-title')}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {t('feat-2-desc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-5 mt-auto pt-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-sky-50/90 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/70 dark:border-sky-900/60">
                  {t('feat-2-chip-1')}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                  {t('feat-2-chip-2')}
                </span>
              </div>
              <a
                href={`/${language}/portfolio`}
                className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 group/cta transition-all duration-200"
              >
                <span>{t('feat-2-cta')}</span>
                <div className="w-6 h-6 rounded-full bg-sky-50 dark:bg-sky-950/60 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover/cta:bg-sky-600 group-hover/cta:text-white transition-all duration-200">
                  <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                </div>
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 border-t-2 border-t-indigo-500 p-6 sm:p-7 rounded-2xl shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-900 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group">
              <span className="absolute top-5 right-6 text-4xl font-extrabold text-indigo-600 select-none pointer-events-none tracking-tight" aria-hidden="true">03</span>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {t('feat-3-title')}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {t('feat-3-desc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-5 mt-auto pt-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-50/90 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-900/60">
                  {t('feat-3-chip-1')}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                  {t('feat-3-chip-2')}
                </span>
              </div>
              <a
                href="#team"
                className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group/cta transition-all duration-200"
              >
                <span>{t('feat-3-cta')}</span>
                <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover/cta:bg-indigo-600 group-hover/cta:text-white transition-all duration-200">
                  <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                </div>
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

