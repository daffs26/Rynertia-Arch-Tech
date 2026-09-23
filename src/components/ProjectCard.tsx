'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '@/data/portfolioData';
import { getClientLogo } from '@/components/ClientMarquee';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
  project: PortfolioItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language } = useLanguage();

  return (
    <Link
      href={`/${language}/portfolio/${project.id}`}
      className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.1)] hover:border-blue-400/80 dark:hover:border-blue-500/80 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden group h-full block cursor-pointer"
    >
      {/* ── 1. High-Resolution Clean Media Frame (No Cluttered Stickers) ── */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <img
          src={project.image}
          alt={language === 'id' ? project.titleId : project.titleEn}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out pointer-events-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10 opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

        {/* Top-Right Clean Category Tag */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-800 dark:text-slate-100 text-[11px] font-bold border border-slate-200/90 dark:border-slate-700 shadow-xs tracking-tight">
            {project.tag}
          </span>
        </div>

        {/* Top-Left Verified Delivery Indicator (Calm, Professional, Zero Tropes) */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md text-emerald-400 border border-slate-700/80 text-[10px] font-semibold shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-white text-[10px] font-medium tracking-wide">
            {language === 'id' ? 'Terverifikasi' : 'Verified'}
          </span>
        </div>
      </div>

      {/* ── 2. Card Body Content ── */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Dedicated Client & Industry Sector Header */}
          <div className="flex items-center justify-between gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div className="w-8 h-8 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 p-1.5 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-blue-200 dark:group-hover:border-blue-500 group-hover:bg-blue-50/40 dark:group-hover:bg-blue-950/40 transition-colors">
                {getClientLogo(project.id, 'w-4 h-4')}
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate block tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.clientName}
                </span>
              </div>
            </div>
            <span className="shrink-0 px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-semibold border border-slate-200/60 dark:border-slate-700">
              {language === 'id' ? project.clientSectorId : project.clientSectorEn}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-2 tracking-tight">
            {language === 'id' ? project.titleId : project.titleEn}
          </h3>

          {/* Executive Subtitle */}
          <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 font-normal">
            {language === 'id' ? project.subtitleId : project.subtitleEn}
          </p>

          {/* Scope & Key Deliverable Strip (Clean, Grounded, Zero AI-Slop) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/80 group-hover:bg-blue-50/30 dark:group-hover:bg-blue-950/30 group-hover:border-blue-100 dark:group-hover:border-blue-900/50 transition-all duration-200">
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block truncate leading-tight">
                  {project.metrics[0].value}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate block mt-0.5">
                  {language === 'id' ? project.metrics[0].labelId : project.metrics[0].labelEn}
                </span>
              </div>
              {project.metrics[1] && (
                <div className="border-l border-slate-200/80 dark:border-slate-700 pl-2.5 sm:pl-3 min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block truncate leading-tight">
                    {project.metrics[1].value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate block mt-0.5">
                    {language === 'id' ? project.metrics[1].labelId : project.metrics[1].labelEn}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── 3. Bottom Action Bar ── */}
        <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
              {project.timeline}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 font-bold text-xs text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
            <span>{language === 'id' ? 'Pelajari Kasus' : 'View Case Study'}</span>
            <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950/60 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 text-blue-600 dark:text-blue-400 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs group-hover:shadow-xs">
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
