'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { newsArticles } from '@/data/newsData';
import { teamMembers } from '@/data/teamData';
import { useLanguage } from '@/context/LanguageContext';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export const NewsSneakPeek: React.FC = () => {
  const { language, t } = useLanguage();

  // Take the top 3 spotlight articles for the homepage sneak peek
  const spotlightArticles = newsArticles.slice(0, 3);

  return (
    <section id="news" className="py-20 sm:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <FadeIn direction="up">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {t('news-sneak-title')}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t('news-sneak-subtitle')}
            </p>
          </FadeIn>
        </div>

        {/* 3-Card Grid */}
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {spotlightArticles.map(article => {
              const title = language === 'id' ? article.titleId : article.titleEn;
              const summary = language === 'id' ? article.summaryId : article.summaryEn;
              const date = language === 'id' ? article.publishedAtId : article.publishedAtEn;
              const author = teamMembers.find(
                m => m.id.toLowerCase() === article.authorId.toLowerCase()
              );

              return (
                <StaggerItem key={article.slug}>
                  <Link
                    href={`/${language}/${language === 'en' ? 'news' : 'berita'}/${article.slug}`}
                    className="group bg-slate-50/70 hover:bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-pointer"
                  >
                    {/* Rounded Cover Thumbnail */}
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-slate-200 shrink-0">
                      <img
                        src={article.coverImage}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Metadata: Date and Read Time (No category badge) */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-2.5">
                      <span>{date}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {article.readTimeMinutes} {t('news-min-read')}
                      </span>
                    </div>

                    {/* Article Headline */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-2.5">
                      {title}
                    </h3>

                    {/* Short Summary Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-5">
                      {summary}
                    </p>

                    {/* Card Footer: Author Info & Direct CTA */}
                    <div className="mt-auto pt-4 border-t border-slate-200/60 flex items-center justify-between gap-3">
                      {/* Author */}
                      {author && (
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-200 shrink-0 ring-1 ring-slate-300">
                            <img
                              src={author.image}
                              alt={author.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs font-semibold text-slate-700 truncate">
                            {author.name.split(' ')[0]}
                          </span>
                        </div>
                      )}

                      {/* Card Action Link */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors shrink-0 ml-auto">
                        <span>{t('news-sneak-read-more')}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Explore All Insights CTA Button */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href={`/${language}/${language === 'en' ? 'news' : 'berita'}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 group"
            >
              <span>{t('news-sneak-view-all')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
