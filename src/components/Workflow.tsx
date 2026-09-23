'use client';

import React from 'react';
import Link from 'next/link';
import {
  Search,
  Compass,
  Cpu,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { workflowSteps } from '@/data/workflowData';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export const Workflow: React.FC = () => {
  const { language, t } = useLanguage();

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-6 h-6 text-sky-600" />;
      case 1:
        return <Compass className="w-6 h-6 text-amber-600" />;
      case 2:
        return <Cpu className="w-6 h-6 text-emerald-600" />;
      case 3:
        return <Rocket className="w-6 h-6 text-rose-600" />;
      default:
        return <Search className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section
      id="solutions"
      className="py-16 sm:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 relative border-t border-b border-slate-200/80 dark:border-slate-800 overflow-hidden transition-colors duration-200"
    >
      {/* Anchor alias for backwards compatibility with any existing #workflow links */}
      <div id="workflow" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              {language === 'id' ? (
                <>
                  Solusi: <span className="text-gradient-blue">Sinergi Menyeluruh</span>
                </>
              ) : (
                <>
                  Solutions: <span className="text-gradient-blue">End-to-End Synergy</span>
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {t('flow-subtitle')}
            </p>
          </div>
        </FadeIn>

        {/* ── 3D ISOMETRIC ZIG-ZAG PIPELINE CONTAINER ──────────────── */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop SVG Connecting Zig-Zag Track (Behind Platforms) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-48 pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 180"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                  <stop offset="33%" stopColor="#f59e0b" stopOpacity="0.7" />
                  <stop offset="66%" stopColor="#10b981" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#fb7185" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              {/* Wide Soft Road Track */}
              <path
                d="M 125 55 L 375 125 L 625 55 L 875 125"
                stroke="#E2E8F0"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-slate-200 dark:stroke-slate-800"
              />
              {/* Vibrant Colored Pipeline Center Trace */}
              <path
                d="M 125 55 L 375 125 L 625 55 L 875 125"
                stroke="url(#pipelineGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="6 8"
              />
            </svg>
          </div>

          <StaggerContainer
            staggerDelay={0.14}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10"
          >
            {workflowSteps.map((step, idx) => {
              const isOdd = idx % 2 === 1;

              return (
                <StaggerItem
                  key={step.step}
                  className={`transition-all duration-500 ${
                    isOdd ? 'lg:translate-y-14' : 'lg:translate-y-0'
                  }`}
                >
                  <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 flex flex-col justify-between h-full hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative">
                    {/* Top Section: Step Number & 3D Isometric Platform */}
                    <div>
                      {/* Step Number floating header */}
                      <div className="mb-2">
                        <span
                          className={`font-mono text-3xl sm:text-4xl font-extrabold italic tracking-tight ${step.numberColor}`}
                        >
                          {step.step}
                        </span>
                      </div>

                      {/* 3D Isometric Floating Platform */}
                      <div className="relative w-full h-36 flex items-center justify-center my-2 group-hover:scale-105 transition-transform duration-300">
                        <svg
                          viewBox="0 0 180 140"
                          className="w-40 h-32 overflow-visible"
                          style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.04))' }}
                        >
                          {/* Ambient Floor Glow */}
                          <ellipse
                            cx="90"
                            cy="114"
                            rx="58"
                            ry="20"
                            fill={step.glowColor}
                            className="transition-opacity duration-300 opacity-60 group-hover:opacity-90"
                          />

                          {/* 3D Isometric Bottom Extrusion (Thickness Layer) */}
                          <g transform="translate(90, 68) scale(1, 0.58) rotate(45)">
                            <rect
                              x="-42"
                              y="-42"
                              width="84"
                              height="84"
                              rx="20"
                              fill={step.edgeColor}
                            />
                          </g>

                          {/* 3D Isometric Intermediate Bevel */}
                          <g transform="translate(90, 61) scale(1, 0.58) rotate(45)">
                            <rect
                              x="-42"
                              y="-42"
                              width="84"
                              height="84"
                              rx="20"
                              fill={step.borderColor}
                            />
                          </g>

                          {/* Top Isometric Surface (Crisp White with Colored Rim) */}
                          <g transform="translate(90, 52) scale(1, 0.58) rotate(45)">
                            <rect
                              x="-42"
                              y="-42"
                              width="84"
                              height="84"
                              rx="20"
                              stroke={step.borderColor}
                              strokeWidth="3"
                              className="fill-white dark:fill-slate-800 transition-all duration-300"
                            />
                          </g>
                        </svg>

                        {/* Centered Flat Icon on Platform */}
                        <div className="absolute top-[56px] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:scale-115 transition-transform duration-300">
                          {getStepIcon(idx)}
                        </div>
                      </div>

                      {/* Category Label with Color Accent Bar */}
                      <div className="pt-2 mb-2">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span
                            className={`text-xs font-mono font-extrabold uppercase tracking-widest ${step.numberColor}`}
                          >
                            {language === 'id' ? step.badgeId : step.badgeEn}
                          </span>
                          <span className={`h-0.5 w-6 rounded-full ${step.lineColor}`} />
                        </div>

                        {/* Step Title */}
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                          {t(step.titleKey)}
                        </h3>
                      </div>

                      {/* Step Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {t(step.descKey)}
                      </p>
                    </div>


                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Link to Dedicated Solutions Catalog */}
          <FadeIn direction="up" delay={0.25}>
            <div className="mt-14 sm:mt-18 text-center">
              <Link
                href={`/${language}/${language === 'en' ? 'solutions' : 'solusi'}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-white dark:bg-slate-900 hover:bg-blue-50/60 dark:hover:bg-slate-800 border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500 px-6 py-3 rounded-xl shadow-xs transition-all group"
              >
                <span>{language === 'id' ? 'Buka Katalog Solusi Arsitektur Enterprise Lengkap' : 'Explore Full Enterprise Architecture Solutions Catalog'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
