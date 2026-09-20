'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Users2,
  CheckCircle2,
  Code2,
  Layers,
  Server,
  FileCheck,
  Briefcase,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Team } from '@/components/Team';
import { Footer } from '@/components/Footer';
import { ScrollProgressBar, BackToTopButton, FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';
import { useLanguage } from '@/context/LanguageContext';

export default function OrganizationPage() {
  const { language, t } = useLanguage();

  const roleMatrix = [
    {
      roleId: 'IT Lead',
      roleEn: 'IT Lead',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      respId: 'Menentukan arah teknis, arsitektur enterprise, keamanan sistem, standar implementasi, dan orkestrasi integrasi.',
      respEn: 'Defining technical direction, enterprise architecture, security governance, engineering standards, and system integrations.',
    },
    {
      roleId: 'Product Manager',
      roleEn: 'Product Manager',
      icon: <Briefcase className="w-5 h-5 text-indigo-600" />,
      respId: 'Menentukan kebutuhan produk, prioritas fitur strategis, dan keselarasan produk dengan tujuan bisnis perusahaan.',
      respEn: 'Defining product requirements, strategic feature priorities, and aligning deliverables with corporate business objectives.',
    },
    {
      roleId: 'UI/UX Designer',
      roleEn: 'UI/UX Designer',
      icon: <Code2 className="w-5 h-5 text-sky-600" />,
      respId: 'Menentukan user flow, information architecture, interaction design, visual design, responsive behavior, dan design system.',
      respEn: 'Crafting user flows, information architecture, interaction design, responsive layouts, and unified design systems.',
    },
    {
      roleId: 'Frontend Developer',
      roleEn: 'Frontend Developer',
      icon: <Code2 className="w-5 h-5 text-emerald-600" />,
      respId: 'Mengimplementasikan antarmuka presisi, routing dinamis, interaktivitas, aksesibilitas WCAG, dan integrasi data frontend.',
      respEn: 'Implementing high-fidelity interfaces, dynamic routing, rich interactions, WCAG accessibility, and client-side integrations.',
    },
    {
      roleId: 'Backend Developer',
      roleEn: 'Backend Developer',
      icon: <Server className="w-5 h-5 text-amber-600" />,
      respId: 'Mengimplementasikan arsitektur database, otentikasi, otorisasi, API integration, server-side logic, validasi, dan keamanan data.',
      respEn: 'Engineering database schemas, authentication, authorization, robust API gateways, server-side logic, and enterprise data security.',
    },
    {
      roleId: 'Quality Assurance (QA)',
      roleEn: 'Quality Assurance (QA)',
      icon: <FileCheck className="w-5 h-5 text-purple-600" />,
      respId: 'Memastikan fungsi end-to-end, keamanan dasar, aksesibilitas, kompatibilitas lintas peramban, performa, dan acceptance criteria terpenuhi.',
      respEn: 'Verifying end-to-end functionality, security baselines, accessibility, cross-browser compatibility, performance, and acceptance criteria.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col relative">
      <ScrollProgressBar />
      <Navbar />

      {/* Page Header & Breadcrumb */}
      <section className="bg-slate-950 text-white pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-800 relative overflow-hidden">
        <div
          className="absolute -right-24 -top-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href={`/${language}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t('nav-home')}</span>
            </Link>
            <span>/</span>
            <span className="text-blue-400 font-medium">{t('page-org-breadcrumb')}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-400">
              <Users2 className="w-3.5 h-3.5" />
              <span>{t('team-label')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {t('page-org-heading')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t('page-org-subheading')}
            </p>
          </div>
        </div>
      </section>

      {/* 16 Personnel Interactive Directory & Org Chart */}
      <Team />

      {/* Role Responsibility Matrix (PRD Bab 3.2) */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold font-mono tracking-wider uppercase text-blue-600 block">
                PRD Bab 3.2 Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {t('page-org-matrix-title')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('page-org-matrix-desc')}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.08}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {roleMatrix.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:bg-white rounded-2xl p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between h-full space-y-3">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {language === 'id' ? item.roleId : item.roleEn}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === 'id' ? item.respId : item.respEn}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-medium text-blue-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Akuntabilitas Resmi PRD</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </main>
  );
}
