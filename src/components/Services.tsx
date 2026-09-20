'use client';

import React from 'react';
import Link from 'next/link';
import { BarChart2, Code2, Palette, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { servicePillars } from '@/data/servicesData';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export const Services: React.FC = () => {
  const { language, t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bar-chart-2':
        return <BarChart2 className="w-6 h-6 text-white stroke-[2]" />;
      case 'code-2':
        return <Code2 className="w-6 h-6 text-white stroke-[2]" />;
      case 'palette':
        return <Palette className="w-6 h-6 text-white stroke-[2]" />;
      case 'trending-up':
        return <TrendingUp className="w-6 h-6 text-white stroke-[2]" />;
      default:
        return <Code2 className="w-6 h-6 text-white stroke-[2]" />;
    }
  };

  return (
    <section id="services" className="relative bg-slate-50/70 pt-16 sm:pt-20 pb-20 sm:pb-24 overflow-hidden">
      {/* Dark Upper Backdrop with Neon Flow Line (Matches Image 2) */}
      <div className="absolute top-0 left-0 right-0 h-[400px] sm:h-[440px] bg-slate-950 -z-0 overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Horizontal glowing wave trace behind badges */}
        <svg
          className="absolute bottom-16 left-0 w-full h-24 text-blue-500/25 pointer-events-none hidden lg:block"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
          fill="none"
        >
          <path
            d="M0,50 C240,15 480,85 720,50 C960,15 1200,85 1440,50"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header & Global Action on Dark Backdrop */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {language === 'id' ? (
                  <>
                    Empat Pilar <span className="text-gradient-blue">Keunggulan Layanan</span>
                  </>
                ) : (
                  <>
                    Our Four Pillars of <span className="text-gradient-blue">Excellence</span>
                  </>
                )}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t('services-subtitle')}
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/10 border border-white/15 hover:bg-white/20 hover:text-white hover:border-white/30 transition-all duration-200 group backdrop-blur-sm"
              >
                <span>{t('srv-view-portfolio')}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* 4 Cards Grid with Overhang Concentric Halo Badges */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-6 pt-4"
        >
          {servicePillars.map(pillar => (
            <StaggerItem key={pillar.pillar}>
                <div
                  className="relative pt-14 pb-7 px-6 bg-white rounded-2xl border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-full text-center group hover:-translate-y-2"
                >
                  {/* Floating Overhang Concentric Halo Badge (Matches Image 2 & Pillar 02) */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
                    {/* Outer translucent halo ring with blue glow */}
                    <div className="w-20 h-20 rounded-full flex items-center justify-center p-1.5 backdrop-blur-md transition-all duration-300 group-hover:scale-105 border bg-blue-600/25 border-blue-400/50 shadow-[0_0_30px_rgba(37,99,235,0.45)] group-hover:shadow-[0_0_40px_rgba(37,99,235,0.65)] ring-2 ring-blue-400/30">
                      {/* Inner saturated core with white icon */}
                      <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/40">
                        {getIcon(pillar.icon)}
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Numeral Pill / Tag */}
                    <div className="flex justify-center items-center mb-3">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${pillar.colorScheme.tagColor}`}
                      >
                        {pillar.pillar}
                      </span>
                    </div>

                    {/* Centered Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                      {t(pillar.titleKey)}
                    </h3>

                    {/* Centered Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 min-h-[50px] px-1">
                      {t(pillar.descKey)}
                    </p>
                  </div>

                  {/* Solid Button at Bottom Center (Matches Image 2) */}
                  <div className="pt-3 border-t border-slate-100">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all duration-200 w-full group/btn min-h-[44px]"
                    >
                      <span>{t('srv-cta')}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Deep-link to Dedicated Services Page */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href={`/${language}/${language === 'en' ? 'services' : 'layanan'}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 bg-white hover:bg-blue-50/60 border border-slate-200/90 hover:border-blue-300 px-6 py-3 rounded-xl shadow-xs transition-all group"
            >
              <span>{language === 'id' ? 'Pelajari Rincian Masalah & Nilai Tiap Layanan' : 'Explore Detailed Problems & Value for Each Service'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
