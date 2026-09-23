'use client';

import React from 'react';
import Link from 'next/link';
import {
  Landmark,
  Radio,
  HeartPulse,
  Truck,
  Factory,
  Building2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export const Industries: React.FC = () => {
  const { language, t } = useLanguage();

  const industries = [
    {
      id: 'banking',
      icon: <Landmark className="w-5 h-5 text-blue-600" />,
      bg: 'bg-blue-50/80 border-blue-200/60',
      titleKey: 'ind-1-title' as const,
      descKey: 'ind-1-desc' as const,
      tagsKey: 'ind-1-tags' as const,
    },
    {
      id: 'telco',
      icon: <Radio className="w-5 h-5 text-sky-600" />,
      bg: 'bg-sky-50/80 border-sky-200/60',
      titleKey: 'ind-2-title' as const,
      descKey: 'ind-2-desc' as const,
      tagsKey: 'ind-2-tags' as const,
    },
    {
      id: 'healthcare',
      icon: <HeartPulse className="w-5 h-5 text-emerald-600" />,
      bg: 'bg-emerald-50/80 border-emerald-200/60',
      titleKey: 'ind-3-title' as const,
      descKey: 'ind-3-desc' as const,
      tagsKey: 'ind-3-tags' as const,
    },
    {
      id: 'logistics',
      icon: <Truck className="w-5 h-5 text-indigo-600" />,
      bg: 'bg-indigo-50/80 border-indigo-200/60',
      titleKey: 'ind-4-title' as const,
      descKey: 'ind-4-desc' as const,
      tagsKey: 'ind-4-tags' as const,
    },
    {
      id: 'manufacturing',
      icon: <Factory className="w-5 h-5 text-amber-600" />,
      bg: 'bg-amber-50/80 border-amber-200/60',
      titleKey: 'ind-5-title' as const,
      descKey: 'ind-5-desc' as const,
      tagsKey: 'ind-5-tags' as const,
    },
    {
      id: 'governance',
      icon: <Building2 className="w-5 h-5 text-purple-600" />,
      bg: 'bg-purple-50/80 border-purple-200/60',
      titleKey: 'ind-6-title' as const,
      descKey: 'ind-6-desc' as const,
      tagsKey: 'ind-6-tags' as const,
    },
  ];

  return (
    <section
      id="industries"
      className="py-14 sm:py-24 bg-white dark:bg-slate-950 relative border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header - No badge pill (Gambar 1 removed) */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              {t('ind-title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {t('ind-subtitle')}
            </p>
          </div>
        </FadeIn>

        {/* 6 Industry Cards - No Enterprise Sector badge (Gambar 2 removed) */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {industries.map((ind) => {
            const tags = t(ind.tagsKey).split(',').map((tag) => tag.trim());

            return (
              <StaggerItem key={ind.id}>
                <div className="bg-slate-50/70 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-slate-900 rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    <div
                      className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-xs ${ind.bg}`}
                    >
                      {ind.icon}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                        {t(ind.titleKey)}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t(ind.descKey)}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-200/60 dark:border-slate-800 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 px-2 py-0.5 rounded-md font-medium"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-blue-500" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Link to Dedicated Industries Exploration */}
        <FadeIn direction="up" delay={0.15}>
          <div className="mt-8 text-center">
            <Link
              href={`/${language}/${language === 'en' ? 'industries' : 'industri'}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50/80 dark:bg-blue-950/60 hover:bg-blue-100/80 dark:hover:bg-blue-900/60 border border-blue-200/60 dark:border-blue-900/50 px-5 py-2.5 rounded-xl transition-all group"
            >
              <span>
                {language === 'id'
                  ? 'Eksplorasi Studi Kasus & Standar Regulasi Tiap Sektor'
                  : 'Explore Case Studies & Regulatory Compliance by Sector'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        {/* Action Entry Point - Redesigned Elevated CTA (Gambar 3 Improved) */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800 relative overflow-hidden">
            {/* Subtle background glow */}
            <div
              className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center lg:text-left max-w-2xl">
                <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
                  {t('ind-cta')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Konsultan spesialis kami siap menyusun blueprint arsitektur dan pemetaan proses bisnis BPMN yang sesuai dengan regulasi dan tantangan sektor Anda.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-white-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Konsultasi Awal Bebas Biaya</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Tanggapan Tim Ahli dalam 24 Jam</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-center sm:items-end gap-2 w-full sm:w-auto">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 group/btn w-full sm:w-auto"
                >
                  <span>{t('srv-cta')}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <span className="text-[11px] text-slate-400">
                  Kerahasiaan NDA dijamin penuh
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
