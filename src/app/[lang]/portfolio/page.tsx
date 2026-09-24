'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioItems } from '@/data/portfolioData';
import { ProjectCard } from '@/components/ProjectCard';
import { Footer } from '@/components/Footer';
import { ClientMarquee } from '@/components/ClientMarquee';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  FadeIn,
  ScrollProgressBar,
  BackToTopButton,
} from '@/components/MotionWrapper';

export default function PortfolioGalleryPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', labelId: `Semua (${portfolioItems.length})`, labelEn: `All (${portfolioItems.length})` },
    { key: 'bpmn', labelId: 'Riset & BPMN', labelEn: 'Research & BPMN' },
    { key: 'it', labelId: 'Software & IT', labelEn: 'Software & IT' },
    { key: 'design', labelId: 'UI/UX & Desain', labelEn: 'UI/UX & Design' },
    { key: 'marketing', labelId: 'Digital Marketing', labelEn: 'Digital Marketing' },
    { key: 'enterprise', labelId: 'Enterprise ERP', labelEn: 'Enterprise ERP' },
  ];

  const filteredItems = portfolioItems.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col relative selection:bg-blue-600 selection:text-white transition-colors duration-200">
      <ScrollProgressBar />

      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-3">
          <Link
            href={`/${language}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group cursor-pointer shrink-0 min-h-[44px]"
          >
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-900 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center transition-colors border border-slate-200/80 dark:border-slate-800">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span className="hidden sm:inline">{language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}</span>
            <span className="sm:hidden">{language === 'id' ? 'Beranda' : 'Home'}</span>
          </Link>

          {/* Center Branding */}
          <Link href={`/${language}`} className="flex items-center gap-2 cursor-pointer">
            <img src="/logo-icon.png" alt="Rynertia Logo" className="w-6 h-6 object-contain" />
            <span className="font-bold text-sm text-slate-900 dark:text-white hidden sm:inline">
              RYNERTIA ARC TECH
            </span>
          </Link>

          {/* Controls: Theme & Language */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="pt-10 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {language === 'id' ? (
                  <>
                    Katalog Studi Kasus &amp; <span className="text-gradient-blue">Blueprint Rekayasa Sistem</span>
                  </>
                ) : (
                  <>
                    Solution Case Studies &amp; <span className="text-gradient-blue">Engineering Blueprints</span>
                  </>
                )}
              </h1>

              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                {language === 'id'
                  ? 'Kompilasi pemodelan proses bisnis BPMN, rancang bangun arsitektur software, dan bukti konsep (POC) yang dirancang secara terstandarisasi untuk memecahkan hambatan operasional bisnis modern.'
                  : 'A comprehensive library of BPMN process models, modular software architectures, and standardized proofs of concept engineered to solve operational bottlenecks.'}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <ClientMarquee />

      {/* Filter Tabs & Gallery Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 w-full">
        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {language === 'id' ? cat.labelId : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Portfolio 3-Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04,
                },
              },
              exit: { opacity: 0, transition: { duration: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredItems.map(project => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm text-slate-500">
              {language === 'id' ? 'Belum ada proyek dalam kategori ini.' : 'No projects found in this category.'}
            </p>
          </div>
        )}
      </main>

      {/* Strategic Call to Action */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <FadeIn direction="up">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center lg:text-left max-w-2xl">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
                  {language === 'id'
                    ? 'Punya Visi Transformasi Digital Serupa?'
                    : 'Envisioning Similar Digital Transformation?'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === 'id'
                    ? 'Mari diskusikan tantangan rekayasa teknologi dan efisiensi proses bisnis organisasi Anda bersama tim konsultan senior kami.'
                    : 'Let us discuss your organization technology challenges and workflow efficiencies with our senior advisory team.'}
                </p>
              </div>
              <Link
                href={`/${language}/#contact`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 shrink-0 group"
              >
                <span>{language === 'id' ? 'Mulai Konsultasi' : 'Schedule Consultation'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  );
}
