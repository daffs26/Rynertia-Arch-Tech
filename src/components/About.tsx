'use client';

import React from 'react';
import Link from 'next/link';
import {
  Network,
  Compass,
  Building2,
  Code2,
  Users2,
  ShieldCheck,
  Target,
  TrendingUp,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { spectrumColors } from '@/data/spectrumData';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  // Existing capability cards (kept 100% intact)
  const coreStrengths = [
    {
      titleEn: 'Engineering Headquarters',
      titleId: 'Pusat Riset & Rekayasa',
      descEn: 'Collaborative enterprise consulting and development labs.',
      descId: 'Laboratorium kolaborasi konsultansi dan riset teknologi enterprise.',
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      bg: 'bg-blue-50/80 border-blue-200/60',
    },
    {
      titleEn: 'Strategic Architecture',
      titleId: 'Arsitektur Strategis & BPMN',
      descEn: 'Cross-functional process mapping and system design sessions.',
      descId: 'Sesi pemetaan proses bisnis terintegrasi dan desain arsitektur sistem.',
      icon: <Users2 className="w-5 h-5 text-sky-600" />,
      bg: 'bg-sky-50/80 border-sky-200/60',
    },
    {
      titleEn: 'High-Performance Build',
      titleId: 'Pembangunan Software Andal',
      descEn: 'Continuous delivery and cloud software deployment.',
      descId: 'Penerapan software cloud dengan standar performa dan keamanan tinggi.',
      icon: <Code2 className="w-5 h-5 text-indigo-600" />,
      bg: 'bg-indigo-50/80 border-indigo-200/60',
    },
  ];

  // 14.3 Poin 4: 4 Operational Core Values
  const coreValues = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      titleKey: 'val-1-title' as const,
      descKey: 'val-1-desc' as const,
    },
    {
      icon: <Target className="w-5 h-5 text-sky-600" />,
      titleKey: 'val-2-title' as const,
      descKey: 'val-2-desc' as const,
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      titleKey: 'val-3-title' as const,
      descKey: 'val-3-desc' as const,
    },
    {
      icon: <Handshake className="w-5 h-5 text-emerald-600" />,
      titleKey: 'val-4-title' as const,
      descKey: 'val-4-desc' as const,
    },
  ];

  // 14.3 Poin 5: 4-Stage Consultative Methodology (Cara Perusahaan Memberikan Solusi)
  const deliverySteps = [
    {
      numKey: 'sol-1-num' as const,
      titleKey: 'sol-1-title' as const,
      descKey: 'sol-1-desc' as const,
    },
    {
      numKey: 'sol-2-num' as const,
      titleKey: 'sol-2-title' as const,
      descKey: 'sol-2-desc' as const,
    },
    {
      numKey: 'sol-3-num' as const,
      titleKey: 'sol-3-title' as const,
      descKey: 'sol-3-desc' as const,
    },
    {
      numKey: 'sol-4-num' as const,
      titleKey: 'sol-4-title' as const,
      descKey: 'sol-4-desc' as const,
    },
  ];

  // 14.3 Poin 6: Informasi Relevan Mengenai Perusahaan (Corporate Credibility & Facts)
  const companyFacts = [
    {
      valKey: 'fact-1-val' as const,
      titleKey: 'fact-1-title' as const,
      descKey: 'fact-1-desc' as const,
    },
    {
      valKey: 'fact-2-val' as const,
      titleKey: 'fact-2-title' as const,
      descKey: 'fact-2-desc' as const,
    },
    {
      valKey: 'fact-3-val' as const,
      titleKey: 'fact-3-title' as const,
      descKey: 'fact-3-desc' as const,
    },
    {
      valKey: 'fact-4-val' as const,
      titleKey: 'fact-4-title' as const,
      descKey: 'fact-4-desc' as const,
    },
  ];

  return (
    <section
      id="about"
      className="py-14 sm:py-24 bg-slate-50 relative border-t border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {t('about-title')}{' '}
              <span className="text-gradient-blue">RYNERTIA ARC TECH</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t('about-subtitle')}
            </p>
          </div>
        </FadeIn>

        {/* 14.3 Poin 1 & 3: Profil Perusahaan & Fokus Technology Consulting */}
        <FadeIn direction="up" delay={0.05}>
          <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-blue-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t('about-profile-label')}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {t('about-profile-title')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t('about-profile-desc')}
                </p>
              </div>

              <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600" />
                  {t('about-focus-title')}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t('about-focus-desc')}
                </p>
                <div className="pt-2 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200/80 px-2 py-0.5 rounded-md">
                    BPMN 2.0 Orchestration
                  </span>
                  <span className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200/80 px-2 py-0.5 rounded-md">
                    Microservices Architecture
                  </span>
                  <span className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200/80 px-2 py-0.5 rounded-md">
                    Legacy Modernization
                  </span>
                  <span className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200/80 px-2 py-0.5 rounded-md">
                    Data Governance & SLA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 14.3 Poin 2 & Bagian Spektrum: Identitas Perusahaan & 6 Spektrum Warna (KEPT 100% INTACT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-12">
          {/* Logo Shape Meaning */}
          <div className="lg:col-span-5 flex">
            <FadeIn direction="right" delay={0.1} className="w-full flex">
              <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex items-center justify-center p-2 sm:p-2.5 shrink-0">
                    <img
                      src="/logo-icon.png"
                      alt="Rynertia Arc Tech Emblem"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {t('philo-shape-title')}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold font-mono">
                      {t('philo-shape-tag')}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 sm:space-y-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4 sm:pt-5">
                  <div className="flex gap-3">
                    <Network className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">
                        {t('philo-shape-1-h')}
                      </strong>
                      <span>{t('philo-shape-1-d')}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Compass className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">
                        {t('philo-shape-2-h')}
                      </strong>
                      <span>{t('philo-shape-2-d')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 6 Spectrum Color Badges with Calibrated Corporate Styling */}
          <div className="lg:col-span-7 flex">
            <StaggerContainer
              staggerDelay={0.08}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full"
            >
              {spectrumColors.map(spec => (
                <StaggerItem key={spec.id}>
                  <div className="bg-white border border-slate-200/90 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl flex items-start gap-3 shadow-sm hover:border-blue-300 hover:shadow-md transition-all h-full">
                    <span
                      className="w-3 h-3 rounded-full mt-1 shrink-0 ring-2 ring-white shadow-sm"
                      style={{ backgroundColor: spec.color }}
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 mb-0.5">
                        {t(spec.titleKey)}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {t(spec.descKey)}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* 14.3 Poin 4: 4 Pilar Nilai Inti Perusahaan (Corporate Core Values) */}
        <div className="mb-8 sm:mb-12">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-blue-600 block">
                {t('about-values-label')}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900">
                {t('about-values-title')}
              </h3>
            </div>
          </FadeIn>
          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {coreValues.map((val, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-sm hover:border-blue-300 hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-3.5">
                      {val.icon}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                      {t(val.titleKey)}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(val.descKey)}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* 3 Clean Tech Capability Cards (KEPT 100% INTACT) */}
        <div className="mb-8 sm:mb-12">
          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-2"
          >
            {coreStrengths.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white border border-slate-200/90 p-5 sm:p-6 rounded-2xl hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all h-full shadow-sm">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${item.bg}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {language === 'id' ? item.titleId : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === 'id' ? item.descId : item.descEn}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* 14.3 Poin 5: Cara Perusahaan Memberikan Solusi (Consultative Methodology) */}
        <div className="mb-8 sm:mb-12 pt-2">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-blue-600 block">
                {t('about-sol-label')}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900">
                {t('about-sol-title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('about-sol-subtitle')}
              </p>
            </div>
          </FadeIn>
          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {deliverySteps.map((step, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:border-blue-300 hover:shadow-md transition-all h-full relative flex flex-col justify-between group">
                  <div>
                    <div className="text-xs font-mono font-bold text-blue-600 mb-3 bg-blue-50 border border-blue-200/60 inline-block px-2.5 py-0.5 rounded-md">
                      {t(step.numKey)}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {t(step.titleKey)}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* 14.3 Poin 6: Informasi Relevan Mengenai Perusahaan (Credibility Facts Banner) */}
        <FadeIn direction="up" delay={0.2}>
          <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 space-y-1">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-blue-600 block">
                {t('about-facts-label')}
              </span>
              <h3 className="text-base sm:text-xl font-bold text-slate-900">
                {t('about-facts-title')}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {companyFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''} space-y-1.5`}
                >
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
                    {t(fact.valKey)}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {t(fact.titleKey)}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {t(fact.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Link to Full Dedicated About Page */}
        <FadeIn direction="up" delay={0.25}>
          <div className="mt-8 text-center">
            <Link
              href={`/${language}/${language === 'en' ? 'about-us' : 'tentang-kami'}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/60 px-5 py-2.5 rounded-xl transition-all group"
            >
              <span>{language === 'id' ? 'Pelajari Profil & Visi Rynertia Selengkapnya' : 'Explore Complete Company Profile & Vision'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
