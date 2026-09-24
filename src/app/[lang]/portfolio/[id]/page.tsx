'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Layers,
  ShieldCheck,
  TrendingUp,
  Users,
  Camera,
  Maximize2,
  X,
  Quote,
  Briefcase,
} from 'lucide-react';
import { portfolioItems, ProjectDocumentationItem } from '@/data/portfolioData';
import { teamMembers } from '@/data/teamData';
import { useLanguage } from '@/context/LanguageContext';
import { Footer } from '@/components/Footer';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import { getClientLogo } from '@/components/ClientMarquee';
import {
  FadeIn,
  ScrollProgressBar,
  BackToTopButton,
} from '@/components/MotionWrapper';

export default function PortfolioDetailPage() {
  const routeParams = useParams();
  const { language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<ProjectDocumentationItem | null>(null);

  const rawId =
    (typeof routeParams?.id === 'string'
      ? routeParams.id
      : Array.isArray(routeParams?.id)
        ? routeParams.id[0]
        : '') || '';

  const projectIndex = portfolioItems.findIndex(
    p => p.id.toLowerCase() === rawId.toLowerCase()
  );

  const project = projectIndex !== -1 ? portfolioItems[projectIndex] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ScrollProgressBar />
        <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
            <Link
              href={`/${language}/portfolio`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'id' ? 'Kembali ke Katalog Portofolio' : 'Back to Portfolio Catalog'}</span>
            </Link>
          </div>
        </header>

        <div className="max-w-xl mx-auto px-4 py-28 text-center">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto mb-4 border border-rose-200 dark:border-rose-900/60">
            <Layers className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {language === 'id' ? 'Studi Kasus Tidak Ditemukan' : 'Case Study Not Found'}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {language === 'id'
              ? 'Proyek yang Anda cari tidak tersedia atau parameter tautan tidak valid.'
              : 'The case study you are looking for is unavailable or the URL link is invalid.'}
          </p>
          <Link
            href={`/${language}/portfolio`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-md shadow-blue-600/20 hover:bg-blue-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'id' ? 'Lihat Seluruh Portofolio' : 'Explore All Projects'}</span>
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  // Prev and Next Projects for seamless pagination
  const prevProject =
    projectIndex > 0 ? portfolioItems[projectIndex - 1] : portfolioItems[portfolioItems.length - 1];
  const nextProject =
    projectIndex < portfolioItems.length - 1 ? portfolioItems[projectIndex + 1] : portfolioItems[0];

  // Associated Team Members
  const assignedTeam = teamMembers.filter(m => project.teamMemberIds.includes(m.id));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col relative selection:bg-blue-600 selection:text-white font-sans antialiased transition-colors duration-200">
      <ScrollProgressBar />

      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            href={`/${language}/portfolio`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group cursor-pointer shrink-0 min-h-[44px]"
          >
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-900 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center transition-colors border border-slate-200/80 dark:border-slate-800">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span className="hidden sm:inline">
              {language === 'id' ? 'Kembali ke Hasil Kerja Sama' : 'Back to Client Works'}
            </span>
          </Link>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="hidden md:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium truncate">
            <Link href={`/${language}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              {language === 'id' ? 'Beranda' : 'Home'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
            <Link href={`/${language}/portfolio`} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              {language === 'id' ? 'Hasil Kerja Sama' : 'Portfolio'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
            <span className="text-slate-900 dark:text-white font-bold truncate max-w-[240px]">
              {language === 'id' ? project.titleId : project.titleEn}
            </span>
          </nav>

          {/* Controls: Theme & Language */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Editorial Showcase */}
      <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 bg-white dark:bg-slate-900/90 border-b border-slate-200/90 dark:border-slate-800 relative overflow-hidden transition-colors duration-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/60 via-slate-50/30 to-transparent dark:from-blue-950/30 dark:via-slate-900/20 dark:to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-8">
          <FadeIn direction="up">
            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold font-mono tracking-wide">
                  {project.tag}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  {language === 'id' ? project.clientSectorId : project.clientSectorEn}
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {language === 'id' ? 'Sistem Beroperasi Penuh' : 'Production Active'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {language === 'id' ? project.titleId : project.titleEn}
              </h1>

              <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {language === 'id' ? project.subtitleId : project.subtitleEn}
              </p>
            </div>
          </FadeIn>

          {/* Executive Metadata Bar */}
          <FadeIn direction="up" delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm text-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-sm">
                  {getClientLogo(project.id, 'w-5 h-5')}
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    {language === 'id' ? 'Mitra Klien' : 'Client Organization'}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm truncate block">
                    {project.clientName}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-sm text-slate-600 dark:text-slate-300">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    {language === 'id' ? 'Durasi Siklus' : 'Project Timeline'}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm font-mono truncate block">
                    {project.timeline}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-sm text-slate-600 dark:text-slate-300">
                  <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    {language === 'id' ? 'Divisi Pemimpin' : 'Lead Division'}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm truncate block">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-sm text-slate-600 dark:text-slate-300">
                  <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                    {language === 'id' ? 'Spesialis Terlibat' : 'Engineering Crew'}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm truncate block">
                    {project.teamMemberIds.length} {language === 'id' ? 'Personil Ahli' : 'Specialists'}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Hero Centerpiece Device Mockup */}
          <FadeIn direction="up" delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl shadow-slate-950/20 group">
              <div className="relative w-full max-h-[520px] overflow-hidden flex items-center justify-center bg-slate-950">
                <img
                  src={project.image}
                  alt={language === 'id' ? project.titleId : project.titleEn}
                  className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none" />

                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold font-mono border border-slate-700 shadow-lg">
                    {project.tag}
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md text-slate-200 text-xs font-semibold border border-slate-700 shadow-lg hidden sm:inline">
                    {language === 'id' ? project.clientSectorId : project.clientSectorEn}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 bg-slate-900/85 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 shrink-0">
                      {getClientLogo(project.id, 'w-7 h-7')}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {project.clientName}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono block">
                        {project.architectureEn}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-bold">
                      VERIFIED PRODUCTION
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Editorial Body */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 flex-1 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Narrative (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Overview */}
              <div className="bg-white dark:bg-slate-900 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">
                  <Compass className="w-4 h-4" />
                  <span>{language === 'id' ? 'Konteks Inisiatif & Latar Belakang' : 'Executive Overview & Context'}</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {language === 'id' ? 'Latar Belakang & Kebutuhan Transformasi' : 'Initiative Context & Objectives'}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {language === 'id' ? project.overviewId : project.overviewEn}
                </p>
              </div>

              {/* Challenges */}
              <div className="bg-white dark:bg-slate-900 p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{language === 'id' ? 'Tantangan Operasional Sebelum Solusi' : 'Business Challenges & Bottlenecks'}</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {language === 'id' ? 'Hambatan Utama Sebelum Implementasi' : 'Pre-Transformation Bottlenecks'}
                </h2>
                <div className="grid grid-cols-1 gap-4 pt-2">
                  {(language === 'id' ? project.challengesId : project.challengesEn).map((challenge, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-start gap-4 hover:border-rose-300 dark:hover:border-rose-500/50 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono border border-rose-200 dark:border-rose-900/50">
                        0{idx + 1}
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {challenge}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">
                  <Cpu className="w-4 h-4" />
                  <span>{language === 'id' ? 'Solusi Rekayasa & Arsitektur' : 'Engineering Solution & Architecture'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {language === 'id' ? 'Pilar Solusi & Framework yang Dibangun' : 'Architecture & Engineered Solution'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {language === 'id' ? project.architectureId : project.architectureEn}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                  {(language === 'id' ? project.solutionsId : project.solutionsEn).map((solution, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/80 dark:to-slate-800/40 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-3 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center font-mono shadow-md shadow-blue-600/25">
                        0{idx + 1}
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                        {language === 'id' ? `Pilar Solusi 0${idx + 1}` : `Solution Pillar 0${idx + 1}`}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                        {solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{language === 'id' ? 'Kapabilitas Fungsional Terpasang' : 'Delivered Capabilities & Features'}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {language === 'id' ? 'Fitur Kunci yang Diserahterimakan' : 'Key System Capabilities'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {(language === 'id' ? project.keyFeaturesId : project.keyFeaturesEn).map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-start gap-3 hover:border-emerald-300 dark:hover:border-emerald-500/50 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documentation Artifacts */}
              {project.documentation && project.documentation.length > 0 && (
                <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono mb-1">
                        <Camera className="w-4 h-4" />
                        <span>{language === 'id' ? 'Bukti Dokumentasi & UAT' : 'Milestone Proof & Documentation'}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {language === 'id' ? 'Galeri Dokumentasi Lapangan' : 'Execution Proof Gallery'}
                      </h2>
                    </div>
                    <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold font-mono border border-slate-200 dark:border-slate-700">
                      {project.documentation.length} {language === 'id' ? 'Dokumen' : 'Artifacts'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {project.documentation.map((doc, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedPhoto(doc)}
                        className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1"
                      >
                        <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                          <img
                            src={doc.image}
                            alt={language === 'id' ? doc.titleId : doc.titleEn}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                          <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                            <span className="px-2 py-0.5 rounded-md bg-slate-900/85 backdrop-blur-md text-[10px] font-bold text-white border border-slate-700 font-mono">
                              {language === 'id' ? doc.categoryId : doc.categoryEn}
                            </span>
                          </div>

                          <div className="absolute top-2.5 right-2.5 z-10">
                            <div className="w-6 h-6 rounded-md bg-slate-900/80 backdrop-blur-md text-slate-300 group-hover:text-white group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                              <Maximize2 className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 pointer-events-none">
                            <h4 className="text-xs font-bold text-white leading-tight truncate drop-shadow">
                              {language === 'id' ? doc.titleId : doc.titleEn}
                            </h4>
                          </div>
                        </div>

                        <div className="p-3.5 flex-1 flex flex-col justify-between bg-white dark:bg-slate-900 space-y-2 border-t border-slate-100 dark:border-slate-800">
                          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                            {language === 'id' ? doc.captionId : doc.captionEn}
                          </p>
                          <div className="flex items-center justify-between text-[10px] font-bold text-blue-600 dark:text-blue-400 pt-1 border-t border-slate-100 dark:border-slate-800">
                            <span>{language === 'id' ? 'Klik untuk Zoom' : 'View Fullscreen'}</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <div className="p-8 sm:p-10 rounded-3xl border border-blue-200/90 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/70 via-white to-sky-50/60 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900 relative overflow-hidden shadow-sm">
                  <Quote className="w-20 h-20 text-blue-200/40 dark:text-blue-800/30 absolute -bottom-3 -right-3 pointer-events-none" />
                  <div className="space-y-4 relative z-10">
                    <div className="flex gap-1 text-amber-400 text-sm">★★★★★</div>
                    <blockquote className="text-base sm:text-lg italic text-slate-900 dark:text-white leading-relaxed font-medium">
                      &ldquo;
                      {language === 'id'
                        ? project.testimonial.quoteId
                        : project.testimonial.quoteEn}
                      &rdquo;
                    </blockquote>
                    <div className="pt-2 border-t border-blue-200/60 dark:border-blue-900/40">
                      <div className="font-bold text-slate-900 dark:text-white text-sm">
                        {project.testimonial.author}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        {project.testimonial.role}, {project.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
              
              {/* Deliverables */}
              <div className="bg-white dark:bg-slate-900 p-7 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4" />
                  <span>{language === 'id' ? 'Keluaran Terverifikasi' : 'Verified Deliverables'}</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {language === 'id' ? 'Hasil & Serah Terima Proyek' : 'Key Deliverables & Scope'}
                </h3>

                <div className="space-y-3.5">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-center space-y-1.5 hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors"
                    >
                      <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        {language === 'id' ? metric.labelId : metric.labelEn}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {language === 'id' ? metric.descId : metric.descEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-white dark:bg-slate-900 p-7 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider font-mono">
                  <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{language === 'id' ? 'Teknologi Diterapkan' : 'Applied Tech Stack'}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'id' ? 'Arsitektur Komponen' : 'Component Topology'}
                </h3>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      <span>{tech.name}</span>
                      <span className="text-[9px] text-slate-400 dark:text-slate-500 font-mono">({tech.category})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Team */}
              <div className="bg-white dark:bg-slate-900 p-7 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider font-mono">
                    <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>{language === 'id' ? 'Personil Pelaksana' : 'Core Specialists'}</span>
                  </div>
                  <Link
                    href={`/${language}/#team`}
                    className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>{language === 'id' ? 'Semua Tim' : 'Full Team'}</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="space-y-3 pt-1">
                  {assignedTeam.map(member => (
                    <Link
                      key={member.id}
                      href={`/${language}/team/${member.id}`}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/40 transition flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                          {member.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          {language === 'id' ? member.roleId : member.roleEn}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar CTA */}
              <div className="p-7 rounded-3xl bg-slate-950 text-white space-y-4 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <h4 className="text-base font-bold text-white relative z-10 leading-snug">
                  {language === 'id'
                    ? 'Memerlukan Solusi Serupa untuk Operasional Anda?'
                    : 'Require a Similar Architecture for Your Business?'}
                </h4>
                <p className="text-xs text-slate-300 relative z-10 leading-relaxed font-normal">
                  {language === 'id'
                    ? 'Konsultasikan tantangan proses bisnis dan roadmap sistem digital Anda bersama konsultan ahli kami.'
                    : 'Consult your digital transformation bottlenecks and specifications with our lead specialists.'}
                </p>
                <Link
                  href={`/${language}/#contact`}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer relative z-10"
                >
                  <span>{language === 'id' ? 'Jadwalkan Konsultasi Teknis' : 'Request Architecture Consultation'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

          {/* Previous & Next Navigation */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Link
                href={`/${language}/portfolio/${prevProject.id}`}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center shrink-0 transition border border-slate-200 dark:border-slate-700">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider font-mono">
                    {language === 'id' ? 'Proyek Sebelumnya' : 'Previous Project'}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition truncate">
                    {language === 'id' ? prevProject.titleId : prevProject.titleEn}
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate block">
                    {prevProject.clientName}
                  </span>
                </div>
              </Link>

              <Link
                href={`/${language}/portfolio/${nextProject.id}`}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition flex items-center justify-between gap-4 text-right group cursor-pointer"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider font-mono">
                    {language === 'id' ? 'Proyek Selanjutnya' : 'Next Project'}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition truncate">
                    {language === 'id' ? nextProject.titleId : nextProject.titleEn}
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate block">
                    {nextProject.clientName}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center shrink-0 transition border border-slate-200 dark:border-slate-700">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-lg bg-blue-600/30 border border-blue-500/40 text-[10px] font-bold text-sky-300 font-mono">
                  {language === 'id' ? selectedPhoto.categoryId : selectedPhoto.categoryEn}
                </span>
                <h3 className="text-sm font-bold text-white truncate max-w-[280px] sm:max-w-md">
                  {language === 'id' ? selectedPhoto.titleId : selectedPhoto.titleEn}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={language === 'id' ? selectedPhoto.titleId : selectedPhoto.titleEn}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>

            <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 font-mono">
                {language === 'id' ? 'Catatan Dokumentasi Lapangan' : 'Field Milestone Note'}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'id' ? selectedPhoto.captionId : selectedPhoto.captionEn}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <BackToTopButton />
    </div>
  );
}
