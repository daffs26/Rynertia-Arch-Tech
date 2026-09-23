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
  CheckCircle2,
  Activity,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { spectrumColors } from '@/data/spectrumData';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export interface AboutProps {
  isPreview?: boolean;
}

export const About: React.FC<AboutProps> = ({ isPreview = false }) => {
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
      className="py-14 sm:py-24 bg-slate-50 dark:bg-slate-950 relative border-t border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              {t('about-title')}{' '}
              <span className="text-gradient-blue">RYNERTIA ARC TECH</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {t('about-subtitle')}
            </p>
          </div>
        </FadeIn>

        {/* 14.3 Poin 1 & 3: Profil Perusahaan & Fokus Technology Consulting */}
        <FadeIn direction="up" delay={0.05}>
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/50 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t('about-profile-label')}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {t('about-profile-title')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('about-profile-desc')}
                </p>
              </div>

              <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  {t('about-focus-title')}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('about-focus-desc')}
                </p>
                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 px-2 py-0.5 rounded-md">
                    BPMN 2.0 Orchestration
                  </span>
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 px-2 py-0.5 rounded-md">
                    Microservices Architecture
                  </span>
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 px-2 py-0.5 rounded-md">
                    Legacy Modernization
                  </span>
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 px-2 py-0.5 rounded-md">
                    Data Governance & SLA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 14.3 Twin Cards Visi & Misi (Full Page Dedicated Section) */}
        {!isPreview && (
          <div id="vision-mission" className="mb-8 sm:mb-12 scroll-mt-24">
            <FadeIn direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Card 1: Visi */}
                <div className="group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-900">
                      <img
                        src="/portfolio/mockup-process-engine.jpg"
                        alt="Rynertia Arc Tech Strategic Vision"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white text-[11px] font-bold tracking-wider uppercase backdrop-blur-md">
                          <Target className="w-3.5 h-3.5" />
                          {t('vision-tag')}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {t('vision-title')}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {t('vision-desc')}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {language === 'id' ? 'Standar Arsitektur Terstandarisasi' : 'Standardized Architecture Principles'}
                    </span>
                    <Link
                      href={`/${language}#philosophy`}
                      className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-md hover:scale-105"
                      aria-label={t('vision-title')}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Card 2: Misi */}
                <div className="group bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-900">
                      <img
                        src="/portfolio/mockup-procurement-orchestration.jpg"
                        alt="Rynertia Arc Tech Operating Mission"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 text-slate-200 border border-slate-700 text-[11px] font-bold tracking-wider uppercase backdrop-blur-md">
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                          {t('mission-tag')}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 sm:p-8 space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {t('mission-title')}
                      </h3>
                      <ul className="space-y-3">
                        {[t('mission-1'), t('mission-2'), t('mission-3')].map((missionText, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 font-mono">0{mIdx + 1}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              {missionText}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {language === 'id' ? 'Komitmen Tata Kelola & SLA' : 'SLA & Governance Commitments'}
                    </span>
                    <Link
                      href={`/${language}#methodology`}
                      className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-md hover:scale-105"
                      aria-label={t('mission-title')}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 14.3 Poin 2 & Bagian Spektrum: Identitas Perusahaan & 6 Spektrum Warna (Full Page Only) */}
        {!isPreview && (
          <div id="philosophy" className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-8 sm:mb-12 scroll-mt-24">
          {/* Logo Shape Meaning */}
          <div className="lg:col-span-5 flex">
            <FadeIn direction="right" delay={0.1} className="w-full flex">
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm flex items-center justify-center p-2 sm:p-2.5 shrink-0">
                    <img
                      src="/logo-icon.png"
                      alt="Rynertia Arc Tech Emblem"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {t('philo-shape-title')}
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold font-mono">
                      {t('philo-shape-tag')}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 sm:space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 sm:pt-5">
                  <div className="flex gap-3">
                    <Network className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 dark:text-white block mb-0.5">
                        {t('philo-shape-1-h')}
                      </strong>
                      <span>{t('philo-shape-1-d')}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Compass className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 dark:text-white block mb-0.5">
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
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl flex items-start gap-3 shadow-sm hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all h-full">
                    <span
                      className="w-3 h-3 rounded-full mt-1 shrink-0 ring-2 ring-white dark:ring-slate-800 shadow-sm"
                      style={{ backgroundColor: spec.color }}
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">
                        {t(spec.titleKey)}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t(spec.descKey)}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
        )}

        {/* 14.3 Poin 4: 4 Pilar Nilai Inti Perusahaan (Full Page Only) */}
        {!isPreview && (
          <div id="values" className="mb-8 sm:mb-12 scroll-mt-24">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-blue-600 block">
                {t('about-values-label')}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">
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
                <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 rounded-2xl shadow-sm hover:border-blue-300 dark:hover:border-blue-500 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center mb-3.5">
                      {val.icon}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      {t(val.titleKey)}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t(val.descKey)}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        )}

        {/* Seksi Why Choose Us: 3-Pillar Timeline Track & Layered Photo Stack */}
        <div className="mb-10 sm:mb-16">
          {/* Section Header */}
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-blue-600 dark:text-blue-400 block">
                {language === 'id' ? 'KEUNGGULAN STRATEGIS' : 'STRATEGIC ADVANTAGE'}
              </span>
              <h3 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {t('about-why-title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about-why-subtitle')}
              </p>
            </div>
          </FadeIn>

          {/* 3-Pillar Horizontal Timeline Track */}
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-10 shadow-sm relative overflow-hidden">
              <div className="relative">
                {/* Track Line behind steps (desktop only) */}
                <div className="hidden md:block absolute top-5 left-10 right-10 h-0.5 bg-slate-200 dark:bg-slate-800 z-0" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
                  {/* Pillar 1 */}
                  <div className="flex md:flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 ring-4 ring-blue-100 dark:ring-blue-950/80 shadow-sm">
                      01
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 block mb-1">
                        {language === 'id' ? 'Tahap Analisis' : 'Analysis Phase'}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {t('about-pillar-1')}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {language === 'id'
                          ? 'Audit proses bisnis mendalam dan eliminasi pemborosan alur kerja.'
                          : 'Deep business process audits and systematic workflow waste reduction.'}
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex md:flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-900 dark:bg-slate-800 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 ring-4 ring-slate-100 dark:ring-slate-800/80 border border-slate-700 shadow-sm">
                      02
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-sky-600 dark:text-sky-400 block mb-1">
                        {language === 'id' ? 'Tahap Desain' : 'Design Phase'}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {t('about-pillar-2')}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {language === 'id'
                          ? 'Konstruksi modular microservices dengan dokumentasi API ketat.'
                          : 'Modular microservices construction backed by strict API documentation.'}
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex md:flex-col items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-900 dark:bg-slate-800 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 ring-4 ring-slate-100 dark:ring-slate-800/80 border border-slate-700 shadow-sm">
                      03
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 block mb-1">
                        {language === 'id' ? 'Tahap Produksi' : 'Production Phase'}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {t('about-pillar-3')}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {language === 'id'
                          ? 'Pengujian beban tinggi dan penerapan zero-downtime deployment.'
                          : 'High-load stress verification and resilient zero-downtime deployments.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 2-Column: Leadership Narrative & Layered Photo Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <FadeIn direction="right">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/50 text-xs font-semibold text-blue-700 dark:text-blue-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t('about-leader-role')}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                    {t('about-leader-heading')}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t('about-leader-sub')}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      {language === 'id'
                        ? 'Validasi pemodelan alur kerja sebelum penulisan kode dimulai'
                        : 'Workflow modeling validation before any line of code is produced'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      {language === 'id'
                        ? 'Standar arsitektur berorientasi toleransi kegagalan dan ketersediaan tinggi'
                        : 'High-resilience architecture standards engineered for continuous availability'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      {language === 'id'
                        ? 'Pemisahan tanggung jawab arsitektural untuk kemudahan eskalasi jangka panjang'
                        : 'Architectural separation of concerns ensuring frictionless multi-year scaling'}
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Layered Photo Stack */}
            <div className="lg:col-span-6 relative">
              <FadeIn direction="left" delay={0.15}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Background Offset Card (Tilted Stack Layer) */}
                  <div className="hidden sm:block absolute -top-4 -right-4 w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 opacity-20 transform rotate-2 pointer-events-none" />

                  {/* Primary Front Card */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img
                        src="/portfolio/mockup-banking-credit-workflow.jpg"
                        alt="Rynertia Arc Tech Enterprise Architecture"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      
                      {/* Corner badge on image */}
                      <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3 py-1 rounded-lg flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-bold text-white font-mono tracking-wide">
                          SYSTEM ARCHITECTURE LAB
                        </span>
                      </div>
                    </div>

                    {/* Bottom floating summary pill inside card */}
                    <div className="p-4 sm:p-5 flex items-center justify-between bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200/60 dark:border-blue-900/50 flex items-center justify-center shrink-0">
                          <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                            {language === 'id' ? 'Standar Desain Ketersediaan' : 'High-Availability Design Target'}
                          </h5>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {language === 'id' ? 'Prinsip toleransi kegagalan & failover' : 'Engineered for fault tolerance & failover'}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/50 px-2.5 py-1 rounded-md">
                        BPMN 2.0
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* 3 Clean Tech Capability Cards (KEPT 100% INTACT) */}
        <div className="mb-8 sm:mb-12">
          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-2"
          >
            {coreStrengths.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 rounded-2xl hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 transition-all h-full shadow-sm">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${item.bg}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {language === 'id' ? item.titleId : item.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {language === 'id' ? item.descId : item.descEn}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* 14.3 Poin 5: Cara Perusahaan Memberikan Solusi (Consultative Methodology - Full Page Only) */}
        {!isPreview && (
          <div id="methodology" className="mb-8 sm:mb-12 pt-2 scroll-mt-24">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-blue-600 dark:text-blue-400 block">
                {t('about-sol-label')}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">
                {t('about-sol-title')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
                <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all h-full relative flex flex-col justify-between group">
                  <div>
                    <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 mb-3 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/50 inline-block px-2.5 py-0.5 rounded-md">
                      {t(step.numKey)}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {t(step.titleKey)}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        )}

        {/* 14.3 Poin 6: Informasi Relevan Mengenai Perusahaan (Credibility Facts Banner) */}
        <FadeIn direction="up" delay={0.2}>
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 space-y-1">
              <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-blue-600 dark:text-blue-400 block">
                {t('about-facts-label')}
              </span>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
                {t('about-facts-title')}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
              {companyFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''} space-y-1.5`}
                >
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 tracking-tight">
                    {t(fact.valKey)}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {t(fact.titleKey)}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(fact.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Link to Full Dedicated About Page (Highlighted on Preview) */}
        <FadeIn direction="up" delay={0.25}>
          <div className="mt-8 text-center">
            <Link
              href={`/${language}/${language === 'en' ? 'about-us' : 'tentang-kami'}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50/80 dark:bg-blue-950/60 hover:bg-blue-100/80 dark:hover:bg-blue-900/60 border border-blue-200/60 dark:border-blue-900/50 px-5 py-2.5 rounded-xl transition-all group"
            >
              <span>
                {isPreview
                  ? language === 'id'
                    ? 'Pelajari Filosofi, Makna Logo & Nilai Selengkapnya'
                    : 'Explore Philosophy, Logo Identity & Full Values'
                  : language === 'id'
                    ? 'Pelajari Profil & Visi Rynertia Selengkapnya'
                    : 'Explore Complete Company Profile & Vision'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
