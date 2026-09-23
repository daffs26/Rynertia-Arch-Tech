'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { newsArticles } from '@/data/newsData';
import { NewsFeaturedCard } from '@/components/NewsFeaturedCard';
import { NewsCompactRow } from '@/components/NewsCompactRow';
import { NewsFounderCard } from '@/components/NewsFounderCard';
import { Footer } from '@/components/Footer';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScrollProgressBar,
  BackToTopButton,
} from '@/components/MotionWrapper';

export default function NewsCatalogPage() {
  const { language, t } = useLanguage();

  // Find the featured article (top left)
  const featuredArticle = newsArticles.find(a => a.isFeatured) || newsArticles[0];

  // Latest posts (top right stack, 4 items)
  const latestPosts = newsArticles.filter(a => !a.isFeatured && !a.isFoundersCorner).slice(0, 4);

  // Founders corner articles (bottom grid, 3 items)
  const foundersCornerArticles = newsArticles.filter(a => a.isFoundersCorner).slice(0, 3);

  // Carousel scroll state index for Founders Corner
  const [founderIndex, setFounderIndex] = useState(0);

  const handlePrevFounder = () => {
    setFounderIndex(prev => (prev > 0 ? prev - 1 : foundersCornerArticles.length - 1));
  };

  const handleNextFounder = () => {
    setFounderIndex(prev => (prev < foundersCornerArticles.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative selection:bg-blue-600 selection:text-white">
      <ScrollProgressBar />

      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-3">
          {/* Back to Home Link */}
          <Link
            href={`/${language}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors group cursor-pointer shrink-0 min-h-[44px]"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span className="hidden sm:inline font-medium text-slate-700 group-hover:text-blue-600">
              {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
            </span>
          </Link>

          {/* Brand Logo & Name */}
          <Link href={`/${language}`} className="flex items-center gap-2.5">
            <img src="/logo-icon.png" alt="Rynertia Logo" className="w-7 h-7 object-contain" />
            <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base">
              RYNERTIA <span className="text-blue-600">ARC TECH</span>
            </span>
          </Link>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 w-full">
        {/* Page Title & Context */}
        <FadeIn direction="up">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              {t('news-header-title')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {t('news-header-subtitle')}
            </p>
          </div>
        </FadeIn>

        {/* Top Section: Hero Split (Featured + Latest Posts) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-14 sm:mb-20">
          {/* Left: Featured Large Card (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.1}>
              <NewsFeaturedCard article={featuredArticle} />
            </FadeIn>
          </div>

          {/* Right: Latest Post Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <FadeIn direction="up" delay={0.2}>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4 pb-2 border-b border-slate-200/80">
                {t('news-latest-posts')}
              </h2>
            </FadeIn>

            <StaggerContainer staggerDelay={0.08} className="space-y-2">
              {latestPosts.map(post => (
                <StaggerItem key={post.slug}>
                  <NewsCompactRow article={post} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-slate-200/80 mb-10 sm:mb-14" />

        {/* Bottom Section: Founders Corner */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
            <FadeIn direction="right">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {t('news-founders-corner')}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {language === 'id'
                    ? 'Perspektif strategis langsung dari para pendiri dan pimpinan Rynertia Arc Tech'
                    : 'Strategic perspectives authored directly by Rynertia Arc Tech leadership'}
                </p>
              </div>
            </FadeIn>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevFounder}
                aria-label="Previous founders article"
                className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-blue-600 hover:text-blue-600 transition-colors shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextFounder}
                aria-label="Next founders article"
                className="w-9 h-9 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-blue-600 hover:text-blue-600 transition-colors shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {foundersCornerArticles.map(article => (
              <StaggerItem key={article.slug}>
                <NewsFounderCard article={article} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
}
