'use client';

import React from 'react';
import Link from 'next/link';
import { NewsArticle } from '@/data/newsData';
import { useLanguage } from '@/context/LanguageContext';

interface NewsCompactRowProps {
  article: NewsArticle;
}

export const NewsCompactRow: React.FC<NewsCompactRowProps> = ({ article }) => {
  const { language, t } = useLanguage();

  const title = language === 'id' ? article.titleId : article.titleEn;
  const date = language === 'id' ? article.publishedAtId : article.publishedAtEn;

  return (
    <Link
      href={`/${language}/${language === 'en' ? 'news' : 'berita'}/${article.slug}`}
      className="group flex items-center gap-4 p-2 rounded-2xl hover:bg-slate-100/80 transition-colors duration-200"
    >
      {/* Square Rounded Thumbnail */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-200 border border-slate-200/80 shadow-sm">
        <img
          src={article.coverImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>

      {/* Text Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
          {title}
        </h3>
        <p className="text-xs text-slate-500 font-medium mt-2">
          {date} &middot; {article.readTimeMinutes} {t('news-min-read')}
        </p>
      </div>
    </Link>
  );
};
