'use client';

import React from 'react';
import Link from 'next/link';
import { NewsArticle } from '@/data/newsData';
import { useLanguage } from '@/context/LanguageContext';

interface NewsFeaturedCardProps {
  article: NewsArticle;
}

export const NewsFeaturedCard: React.FC<NewsFeaturedCardProps> = ({ article }) => {
  const { language, t } = useLanguage();

  const title = language === 'id' ? article.titleId : article.titleEn;
  const date = language === 'id' ? article.publishedAtId : article.publishedAtEn;

  return (
    <Link
      href={`/${language}/${language === 'en' ? 'news' : 'berita'}/${article.slug}`}
      className="group relative block w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/80 dark:border-slate-800"
    >
      {/* Background Cover Image */}
      <img
        src={article.coverImage}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />

      {/* Dark & Frosted Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

      {/* Content Container (Bottom Aligned) */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col items-start gap-3 z-10">
        {/* Large Bold Headline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug group-hover:text-blue-100 transition-colors line-clamp-3">
          {title}
        </h2>

        {/* Metadata: Date and Read Time */}
        <p className="text-xs sm:text-sm text-slate-200/90 font-medium">
          {date} &middot; {article.readTimeMinutes} {t('news-min-read')}
        </p>
      </div>
    </Link>
  );
};
