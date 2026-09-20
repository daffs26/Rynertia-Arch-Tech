'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  BarChart2,
  Code2,
  Palette,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgressBar, BackToTopButton, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { servicePillars } from '@/data/servicesData';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesPage() {
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
    <main className="min-h-screen bg-slate-50 flex flex-col relative">
      <ScrollProgressBar />
      <Navbar />

      {/* Page Header & Breadcrumb */}
      <section className="bg-slate-950 text-white pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-800 relative overflow-hidden">
        <div
          className="absolute -right-24 -top-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href={`/${language}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t('nav-home')}</span>
            </Link>
            <span>/</span>
            <span className="text-blue-400 font-medium">{t('page-services-breadcrumb')}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-400">
              <Layers className="w-3.5 h-3.5" />
              <span>{t('services-label')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {language === 'id' ? (
                <>
                  Layanan &amp; Kapabilitas <span className="text-gradient-blue">Enterprise</span>
                </>
              ) : (
                <>
                  Enterprise Services &amp; <span className="text-gradient-blue">Capabilities</span>
                </>
              )}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'id'
                ? 'Empat pilar keunggulan konsultansi teknologi Rynertia Arc Tech. Setiap layanan dirancang secara presisi untuk memecahkan masalah nyata dan memberikan dampak bisnis yang terukur.'
                : 'Our four pillars of enterprise technology consulting. Each service is precision-engineered to address critical bottlenecks and deliver measurable business value.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4 Detailed Service Pillar Cards */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-12">
          <StaggerContainer staggerDelay={0.1} className="space-y-8">
            {servicePillars.map(pillar => {
              const deliverables = language === 'id' ? pillar.deliverablesId : pillar.deliverablesEn;
              const problem = language === 'id' ? pillar.problemSolvedId : pillar.problemSolvedEn;
              const value = language === 'id' ? pillar.valueDeliveredId : pillar.valueDeliveredEn;

              return (
                <StaggerItem key={pillar.pillar}>
                  <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Identity, Description & Deliverables */}
                      <div className="lg:col-span-5 space-y-5">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-600/25 shrink-0">
                            {getIcon(pillar.icon)}
                          </div>
                          <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                              {pillar.pillar}
                            </span>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                              {t(pillar.titleKey)}
                            </h2>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {t(pillar.descKey)}
                        </p>

                        {/* Deliverables tags */}
                        <div className="space-y-2 pt-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            {t('srv-deliverables-title')}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {deliverables.map((item, dIdx) => (
                              <span
                                key={dIdx}
                                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200/80 px-3 py-1 rounded-lg"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action CTA */}
                        <div className="pt-2">
                          <Link
                            href={`/${language}/#contact`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs font-bold shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 transition-all group"
                          >
                            <span>{t('srv-cta')}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>

                      {/* Right: Problem Solved & Value Delivered */}
                      <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Problem Solved Card */}
                        <div className="bg-rose-50/50 border border-rose-200/80 rounded-2xl p-5 sm:p-6 space-y-3">
                          <div className="flex items-center gap-2 text-rose-700">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <h3 className="text-xs font-bold uppercase tracking-wider">
                              {t('page-services-problem-heading')}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {problem}
                          </p>
                        </div>

                        {/* Value Delivered Card */}
                        <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 space-y-3">
                          <div className="flex items-center gap-2 text-emerald-700">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            <h3 className="text-xs font-bold uppercase tracking-wider">
                              {t('page-services-value-heading')}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </main>
  );
}
