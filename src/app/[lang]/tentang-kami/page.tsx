import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { ScrollProgressBar, BackToTopButton, FadeIn } from '@/components/MotionWrapper';
import { isValidLocale, defaultLocale } from '@/lib/i18n';
import type { Language } from '@/data/translations';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';

  return {
    title: isEn ? 'About Us | Rynertia Arc Tech' : 'Tentang Kami | Rynertia Arc Tech',
    description: isEn
      ? 'Official profile, identity philosophy, 4 core technology consulting focus areas, and enterprise engineering methodology of Rynertia Arc Tech.'
      : 'Profil resmi, filosofi identitas, 4 fokus technology consulting, dan metodologi rekayasa enterprise Rynertia Arc Tech.',
    alternates: {
      canonical: isEn ? 'https://rynertia.tech/en/about-us' : 'https://rynertia.tech/id/tentang-kami',
      languages: {
        id: 'https://rynertia.tech/id/tentang-kami',
        en: 'https://rynertia.tech/en/about-us',
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const activeLang: Language = isValidLocale(lang) ? (lang as Language) : defaultLocale;
  const isEn = activeLang === 'en';

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col relative transition-colors duration-200">
      <ScrollProgressBar />
      <Navbar />

      {/* Page Header & Breadcrumb */}
      <section className="bg-slate-950 text-white pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-800 relative overflow-hidden">
        <div
          className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href={`/${activeLang}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isEn ? 'Home' : 'Beranda'}</span>
            </Link>
            <span>/</span>
            <span className="text-blue-400 font-medium">{isEn ? 'About Us' : 'Tentang Kami'}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isEn ? 'Company Profile & Philosophy' : 'Profil & Filosofi Perusahaan'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {isEn ? 'About ' : 'Tentang '}
              <span className="text-gradient-blue">Rynertia Arc Tech</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isEn
                ? 'Get to know our independent enterprise architecture and technology consulting firm based in Jakarta. We unite formal BPMN business process modeling with high-performance distributed systems engineering.'
                : 'Mengenal lebih dekat firma konsultansi teknologi dan arsitektur enterprise independen berbasis di Jakarta. Kami memadukan pemodelan proses bisnis BPMN formal dengan rekayasa sistem terdistribusi performa tinggi.'}
            </p>
          </div>
        </div>
      </section>

      {/* Full Dedicated About Section Content */}
      <About />

      {/* Strategic Call to Action */}
      <section className="py-14 sm:py-20 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <FadeIn direction="up">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center lg:text-left max-w-2xl">
                <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
                  {isEn ? 'Ready to Transform Your Enterprise Systems?' : 'Siap Mentransformasi Sistem Enterprise Anda?'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isEn
                    ? 'Our senior consultants are prepared to discuss architecture requirements analysis, BPMN process modeling, and system modernization strategies for your organization.'
                    : 'Konsultan senior kami siap berdiskusi mengenai analisis kebutuhan arsitektur, pemodelan proses bisnis BPMN, dan strategi modernisasi sistem organisasi Anda.'}
                </p>
              </div>
              <Link
                href={`/${activeLang}/#contact`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 shrink-0 group"
              >
                <span>{isEn ? 'Start Strategic Consultation' : 'Mulai Konsultasi Strategis'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </main>
  );
}
