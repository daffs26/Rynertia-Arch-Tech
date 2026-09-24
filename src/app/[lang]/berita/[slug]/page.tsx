'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Share2,
  Check,
  ChevronRight,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Eye,
  MessageSquare,
  Bookmark,
} from 'lucide-react';
import { getArticleBySlug, getRelatedArticles } from '@/data/newsData';
import { teamMembers } from '@/data/teamData';
import { useLanguage } from '@/context/LanguageContext';
import { Footer } from '@/components/Footer';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  FadeIn,
  ScrollProgressBar,
  BackToTopButton,
} from '@/components/MotionWrapper';

export default function ArticleDetailPage() {
  const routeParams = useParams();
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const rawSlug =
    (typeof routeParams?.slug === 'string'
      ? routeParams.slug
      : Array.isArray(routeParams?.slug)
        ? routeParams.slug[0]
        : '') || '';

  const article = getArticleBySlug(rawSlug);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleToggleBookmark = () => {
    setIsBookmarked(prev => !prev);
  };

  // Fallback if article slug is not found
  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center transition-colors">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 border border-blue-100 dark:border-blue-900/50">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {language === 'id' ? 'Artikel Tidak Ditemukan' : 'Article Not Found'}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-md">
          {language === 'id'
            ? 'Artikel wawasan yang Anda cari tidak tersedia atau tautan telah diperbarui.'
            : 'The insight article you are looking for does not exist or has been relocated.'}
        </p>
        <Link
          href={`/${language}/${language === 'en' ? 'news' : 'berita'}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('news-back-to-all')}</span>
        </Link>
      </div>
    );
  }

  const title = language === 'id' ? article.titleId : article.titleEn;
  const summary = language === 'id' ? article.summaryId : article.summaryEn;
  const date = language === 'id' ? article.publishedAtId : article.publishedAtEn;
  const keyTakeaways = language === 'id' ? article.keyTakeawaysId : article.keyTakeawaysEn;

  // Author details linked to 16 personnel
  const author = teamMembers.find(m => m.id.toLowerCase() === article.authorId.toLowerCase());
  const authorRole = author ? (language === 'id' ? author.roleId : author.roleEn) : '';
  const authorDept = author ? (language === 'id' ? author.departmentNameId : author.departmentNameEn) : '';

  // Related articles
  const relatedArticles = getRelatedArticles(article.slug, article.category, 2);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col relative selection:bg-blue-600 selection:text-white transition-colors duration-200">
      <ScrollProgressBar />

      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-3">
          {/* Back to All News */}
          <Link
            href={`/${language}/${language === 'en' ? 'news' : 'berita'}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group cursor-pointer shrink-0 min-h-[44px]"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-transparent dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {t('news-back-to-all')}
            </span>
          </Link>

          {/* Brand Logo & Name */}
          <Link href={`/${language}`} className="flex items-center gap-2.5">
            <img src="/logo-icon.png" alt="Rynertia Logo" className="w-7 h-7 object-contain" />
            <span className="font-bold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base">
              RYNERTIA <span className="text-blue-600 dark:text-blue-400">ARC TECH</span>
            </span>
          </Link>

          {/* Controls: Theme & Language */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Article Main Body Container */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-10 w-full">
        {/* Breadcrumb Bar */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-medium mb-6 overflow-x-auto whitespace-nowrap pb-1">
          <Link href={`/${language}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {t('nav-home')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link href={`/${language}/${language === 'en' ? 'news' : 'berita'}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {t('news-header-title')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-600 dark:text-slate-300 truncate max-w-[240px] sm:max-w-md">{title}</span>
        </nav>

        {/* Top Reference Card Container (Cover + Header + Metrics) */}
        <FadeIn direction="up">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden mb-8 sm:mb-10">
            {/* 1. Cover Image at the Top */}
            <div className="w-full aspect-[16/9] sm:aspect-[21/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={article.coverImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. Content below cover inside the card */}
            <div className="p-6 sm:p-8 lg:p-9">
              {/* Row 1: Engagement Metrics (Right Aligned) */}
              <div className="flex items-center justify-end gap-3 sm:gap-5 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4">
                <span
                  className="flex items-center gap-1.5 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                  title="Estimated Readers"
                >
                  <Eye className="w-4 h-4 text-slate-400" />
                  <span>2.5m</span>
                </span>
                <span
                  className="flex items-center gap-1.5 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                  title="Discussions"
                >
                  <MessageSquare className="w-4 h-4 text-slate-400" />
                  <span>15k</span>
                </span>
                <span
                  className="flex items-center gap-1.5 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                  title="Shares"
                >
                  <Share2 className="w-4 h-4 text-slate-400" />
                  <span>39k</span>
                </span>
              </div>

              {/* Row 2: Headline + Action Buttons */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                {/* Left: Article Title, Byline, and Timestamp */}
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                    {title}
                  </h1>

                  {/* Byline with Author Link */}
                  <div className="space-y-1 text-xs sm:text-sm">
                    <p className="text-slate-500 dark:text-slate-400 font-normal">
                      <span className="text-slate-400 dark:text-slate-500 font-medium mr-1.5">{t('news-by')}</span>
                      {author ? (
                        <Link
                          href={`/${language}/team/${author.id}`}
                          className="font-bold text-slate-900 dark:text-white uppercase hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                        >
                          {author.name}
                        </Link>
                      ) : (
                        <span className="font-bold text-slate-900 dark:text-white uppercase">Rynertia Arc Tech Editorial</span>
                      )}
                    </p>
                    <p className="text-slate-400 dark:text-slate-500 font-medium text-xs">
                      {date} &bull; 08:30 WIB &bull; {article.readTimeMinutes} {t('news-min-read')}
                    </p>
                  </div>
                </div>

                {/* Right: Action Buttons (Save to Pocket & Share on Media) */}
                <div className="flex flex-row md:flex-col items-center sm:items-stretch gap-2.5 shrink-0 pt-1">
                  {/* Bookmark / Save to pocket */}
                  <button
                    onClick={handleToggleBookmark}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer shadow-2xs min-h-[40px] ${
                      isBookmarked
                        ? 'bg-slate-900 dark:bg-slate-100 border-slate-900 dark:border-slate-100 text-white dark:text-slate-900 shadow-sm'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 ${
                        isBookmarked ? 'fill-white dark:fill-slate-900 text-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-300'
                      }`}
                    />
                    <span>{isBookmarked ? t('news-saved') : t('news-save-pocket')}</span>
                  </button>

                  {/* Share on media */}
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/80 text-xs font-semibold transition-all cursor-pointer shadow-2xs min-h-[40px]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-700 dark:text-emerald-300 font-bold">{t('news-copied')}</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>{t('news-share-media')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Executive Summary Lead Paragraph */}
        <FadeIn direction="up" delay={0.1}>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-8">
            {summary}
          </p>
        </FadeIn>

        {/* Key Takeaways Box */}
        {keyTakeaways && keyTakeaways.length > 0 && (
          <FadeIn direction="up" delay={0.15}>
            <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-50/90 to-sky-50/60 dark:from-blue-950/40 dark:to-slate-900/60 border border-blue-200/80 dark:border-blue-900/50 mb-10 shadow-2xs">
              <h2 className="text-xs sm:text-sm font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-3.5 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                {t('news-key-takeaways')}
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        )}

        {/* Article Sections & Body */}
        <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 sm:space-y-10 text-slate-800 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          {article.sections.map((section, idx) => {
            const heading = language === 'id' ? section.headingId : section.headingEn;
            const paragraphs = language === 'id' ? section.paragraphsId : section.paragraphsEn;
            const bullets = language === 'id' ? section.bulletsId : section.bulletsEn;
            const quote = language === 'id' ? section.quoteId : section.quoteEn;

            return (
              <section key={idx} className="space-y-4">
                {heading && (
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mt-6 sm:mt-8 pb-1">
                    {heading}
                  </h2>
                )}

                {paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {p}
                  </p>
                ))}

                {quote && (
                  <blockquote className="my-6 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border-l-4 border-blue-600 border border-slate-200/80 dark:border-slate-800 shadow-xs italic text-slate-800 dark:text-slate-200 font-medium text-sm sm:text-base">
                    "{quote}"
                  </blockquote>
                )}

                {bullets && bullets.length > 0 && (
                  <ul className="space-y-2 my-4 pl-2">
                    {bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-blue-400 mt-2 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </article>

        {/* Author Bio Card */}
        {author && (
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 ring-2 ring-blue-100 dark:ring-slate-700 shrink-0">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block mb-0.5">
                  {t('news-author-profile')}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  {author.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {authorRole} &bull; <span className="text-blue-600 dark:text-blue-400 font-medium">{authorDept}</span>
                </p>
              </div>
            </div>

            <Link
              href={`/${language}/team/${author.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-xs font-bold transition-all shrink-0 group/btn"
            >
              <span>{language === 'id' ? 'Lihat Profil Lengkap' : 'View Full Profile'}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        )}

        {/* Related Articles Grid */}
        {relatedArticles.length > 0 && (
          <section className="mt-14 sm:mt-20 pt-10 border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {t('news-related')}
              </h2>
              <Link
                href={`/${language}/${language === 'en' ? 'news' : 'berita'}`}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 group"
              >
                <span>{t('news-explore-more')}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedArticles.map(related => {
                const rTitle = language === 'id' ? related.titleId : related.titleEn;
                const rDate = language === 'id' ? related.publishedAtId : related.publishedAtEn;

                return (
                  <Link
                    key={related.slug}
                    href={`/${language}/${language === 'en' ? 'news' : 'berita'}/${related.slug}`}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500/50 transition-all flex flex-col group"
                  >
                    <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-slate-100 dark:bg-slate-800">
                      <img
                        src={related.coverImage}
                        alt={rTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium mb-1">
                      {rDate} &bull; {related.readTimeMinutes} {t('news-min-read')}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                      {rTitle}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
}
