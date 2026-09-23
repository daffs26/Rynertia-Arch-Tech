'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioItems } from '@/data/portfolioData';
import { ProjectCard } from '@/components/ProjectCard';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export const Portfolio: React.FC = () => {
  const { language, t } = useLanguage();

  // Curate 3 high-impact, domain-diverse flagship projects for the homepage showcase
  const featuredProjects = [
    portfolioItems.find(p => p.id === 'process-engine') || portfolioItems[0],
    portfolioItems.find(p => p.id === 'fintech-app') || portfolioItems[1],
    portfolioItems.find(p => p.id === 'logistics-erp') || portfolioItems[2],
  ];

  return (
    <section
      id="portfolio"
      className="py-14 sm:py-24 bg-slate-50 dark:bg-slate-950 relative border-t border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              {language === 'id' ? (
                <>
                  Studi Kasus Solusi &amp; <span className="text-gradient-blue">Rancang Bangun Sistem</span>
                </>
              ) : (
                <>
                  Solution Case Studies &amp; <span className="text-gradient-blue">System Blueprints</span>
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {language === 'id'
                ? 'Eksplorasi arsitektur sistem, pemodelan proses bisnis BPMN, dan bukti konsep (POC) yang dirancang untuk menjawab tantangan operasional industri modern.'
                : 'Architectural explorations, BPMN process modeling, and proof-of-concept solutions engineered to eliminate operational bottlenecks.'}
            </p>
          </div>
        </FadeIn>

        {/* Portfolio Cards Grid with Stagger Animation */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {featuredProjects.map(item => (
            <StaggerItem key={item.id}>
              <ProjectCard project={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Projects Gallery CTA Button */}
        <FadeIn direction="up" delay={0.2} className="text-center mt-10 sm:mt-14">
          <Link
            href={`/${language}/portfolio`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer min-h-[48px]"
          >
            <span>
              {language === 'id'
                ? 'Jelajahi Seluruh Studi Kasus & Blueprint'
                : 'Explore All Case Studies & Blueprints'}
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

