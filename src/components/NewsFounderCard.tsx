'use client';

import React from 'react';
import Link from 'next/link';
import { NewsArticle } from '@/data/newsData';
import { useLanguage } from '@/context/LanguageContext';
import { teamMembers } from '@/data/teamData';

interface NewsFounderCardProps {
  article: NewsArticle;
}

export const NewsFounderCard: React.FC<NewsFounderCardProps> = ({ article }) => {
  const { language, t } = useLanguage();

  const title = language === 'id' ? article.titleId : article.titleEn;
  const summary = language === 'id' ? article.summaryId : article.summaryEn;
  const date = language === 'id' ? article.publishedAtId : article.publishedAtEn;

  const author = teamMembers.find(m => m.id.toLowerCase() === article.authorId.toLowerCase());
  const articleHref = `/${language}/${language === 'en' ? 'news' : 'berita'}/${article.slug}`;

  return (
    <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
      {/* Top Rounded Image */}
      <Link href={articleHref} className="block overflow-hidden rounded-2xl aspect-[16/10] bg-slate-100 dark:bg-slate-800 mb-4 shrink-0">
        <img
          src={article.coverImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </Link>

      {/* Title */}
      <Link href={articleHref} className="block mb-2">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
          {title}
        </h3>
      </Link>

      {/* Summary / Excerpt */}
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
        {summary}
      </p>

      {/* Footer: Meta & Author info */}
      <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
          {date} &middot; {article.readTimeMinutes} {t('news-min-read')}
        </p>

        {author && (
          <Link
            href={`/${language}/team/${author.id}`}
            title={`View profile of ${author.name}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="truncate max-w-[120px]">{author.name.split(' ')[0]}</span>
            <div className="w-5 h-5 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0 ring-1 ring-slate-300 dark:ring-slate-600">
              <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
