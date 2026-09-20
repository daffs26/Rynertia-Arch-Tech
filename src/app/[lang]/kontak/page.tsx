import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollProgressBar, BackToTopButton } from '@/components/MotionWrapper';
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
    title: isEn ? 'Contact Us | Rynertia Arc Tech' : 'Hubungi Kami | Rynertia Arc Tech',
    description: isEn
      ? 'Connect with senior enterprise IT consultants at Rynertia Arc Tech for architecture review, BPMN process optimization, and custom engineering.'
      : 'Konsultasikan inisiatif teknologi, pemodelan proses bisnis BPMN, dan rekayasa software enterprise Anda bersama konsultan senior Rynertia Arc Tech.',
    alternates: {
      canonical: isEn ? 'https://rynertia.tech/en/contact' : 'https://rynertia.tech/id/kontak',
      languages: {
        id: 'https://rynertia.tech/id/kontak',
        en: 'https://rynertia.tech/en/contact',
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const activeLang: Language = isValidLocale(lang) ? (lang as Language) : defaultLocale;
  const isEn = activeLang === 'en';

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col relative">
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
            <span className="text-blue-400 font-medium">{isEn ? 'Contact' : 'Kontak'}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-400">
              <Mail className="w-3.5 h-3.5" />
              <span>{isEn ? 'Consultation & Inquiry' : 'Konsultasi & Kemitraan'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {isEn ? 'Contact ' : 'Hubungi '}
              <span className="text-gradient-blue">Rynertia Arc Tech</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isEn
                ? 'Initiate a strategic dialogue with our enterprise consulting team. We respond to verified business inquiries within 24 business hours.'
                : 'Mulai dialog strategis bersama tim konsultansi enterprise kami. Kami menanggapi komunikasi profesional dalam kurun waktu 24 jam kerja.'}
            </p>
          </div>
        </div>
      </section>

      {/* Dedicated Contact Section */}
      <Contact />

      <Footer />
      <BackToTopButton />
    </main>
  );
}
