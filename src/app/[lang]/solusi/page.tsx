'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Cpu,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Workflow as WorkflowIcon,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgressBar, BackToTopButton, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { enterpriseSolutions } from '@/data/solutionsData';
import { useLanguage } from '@/context/LanguageContext';

export default function SolutionsPage() {
  const { language, t } = useLanguage();

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
            <span className="text-blue-400 font-medium">{t('page-solutions-breadcrumb')}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>{t('flow-label')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {t('page-solutions-explore-title')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t('page-solutions-explore-desc')}
            </p>
          </div>
        </div>
      </section>

      {/* 4 Flagship Solutions: Explicit 4-Part Causality Pipeline */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16">
          <StaggerContainer staggerDelay={0.12} className="space-y-10 sm:space-y-14">
            {enterpriseSolutions.map(sol => {
              const sector = language === 'id' ? sol.sectorNameId : sol.sectorNameEn;
              const title = language === 'id' ? sol.titleId : sol.titleEn;
              const tagline = language === 'id' ? sol.taglineId : sol.taglineEn;
              const problem = language === 'id' ? sol.businessProblemId : sol.businessProblemEn;
              const approach = language === 'id' ? sol.technologyApproachId : sol.technologyApproachEn;
              const solution = language === 'id' ? sol.solutionId : sol.solutionEn;
              const expectedValue = language === 'id' ? sol.expectedBusinessValueId : sol.expectedBusinessValueEn;

              return (
                <StaggerItem key={sol.id}>
                  <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200 space-y-8">
                    {/* Solution Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                      <div className="space-y-1.5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-blue-700">
                          <span>{sector}</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {title}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500">
                          {tagline}
                        </p>
                      </div>

                      <Link
                        href={`/${language}/#contact`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs font-bold shadow-sm hover:shadow transition-all shrink-0 self-start sm:self-center"
                      >
                        <span>{language === 'id' ? 'Konsultasikan Solusi Ini' : 'Consult This Solution'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* 4-Step Causal Pipeline Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
                      {/* Step 1: Business Problem */}
                      <div className="bg-rose-50/50 border border-rose-200/80 rounded-2xl p-5 space-y-2.5 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-rose-700">
                            <AlertTriangle className="w-4 h-4 shrink-0" />
                            <span className="text-[11px] font-bold uppercase tracking-wider">
                              1. {t('page-solutions-chain-1')}
                            </span>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {problem}
                          </p>
                        </div>
                      </div>

                      {/* Step 2: Technology Approach */}
                      <div className="bg-sky-50/50 border border-sky-200/80 rounded-2xl p-5 space-y-2.5 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sky-700">
                            <Lightbulb className="w-4 h-4 shrink-0" />
                            <span className="text-[11px] font-bold uppercase tracking-wider">
                              2. {t('page-solutions-chain-2')}
                            </span>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {approach}
                          </p>
                        </div>
                      </div>

                      {/* Step 3: Applied Solution */}
                      <div className="bg-indigo-50/50 border border-indigo-200/80 rounded-2xl p-5 space-y-2.5 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-indigo-700">
                            <WorkflowIcon className="w-4 h-4 shrink-0" />
                            <span className="text-[11px] font-bold uppercase tracking-wider">
                              3. {t('page-solutions-chain-3')}
                            </span>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {solution}
                          </p>
                        </div>
                      </div>

                      {/* Step 4: Expected Business Value */}
                      <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-5 space-y-2.5 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-emerald-700">
                            <TrendingUp className="w-4 h-4 shrink-0" />
                            <span className="text-[11px] font-bold uppercase tracking-wider">
                              4. {t('page-solutions-chain-4')}
                            </span>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {expectedValue}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Metrics Banner & Standards */}
                    <div className="pt-2 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-t border-slate-100">
                      {/* Metrics */}
                      <div className="flex flex-wrap gap-4 sm:gap-6">
                        {sol.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="space-y-0.5">
                            <div className="text-base sm:text-lg font-black text-blue-600">
                              {m.value}
                            </div>
                            <div className="text-[11px] font-medium text-slate-500">
                              {language === 'id' ? m.labelId : m.labelEn}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Standards */}
                      <div className="flex flex-wrap gap-1.5 self-start lg:self-center">
                        {sol.standards.map((std, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 border border-slate-200/70 px-2.5 py-1 rounded-md"
                          >
                            <CheckCircle2 className="w-3 h-3 text-blue-500" />
                            {std}
                          </span>
                        ))}
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
