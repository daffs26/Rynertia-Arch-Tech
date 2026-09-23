'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Clock, ShieldCheck, Linkedin, Github, Instagram, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#071330] border-t border-[#122852] text-xs text-slate-300">

      {/* ── MAIN FOOTER CONTENT ──────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-14 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 mb-12">
          {/* ── Col 1: Brand & Enterprise Identity (5 cols on lg) ── */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-icon.png"
                alt="Rynertia Arc Tech Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
              />
              <div>
                <span className="text-base font-bold text-white tracking-wider block">
                  RYNERTIA ARC TECH
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-semibold">
                  Enterprise Engineering Labs
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              {t('footer-desc')}
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2.5 font-mono">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0d1d3d] hover:bg-blue-600 hover:text-white text-blue-200 flex items-center justify-center border border-[#1b3260] transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0d1d3d] hover:bg-slate-800 hover:text-white text-blue-200 flex items-center justify-center border border-[#1b3260] transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0d1d3d] hover:bg-pink-600 hover:text-white text-blue-200 flex items-center justify-center border border-[#1b3260] transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Col 2: Services (2 cols on lg) ── */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${language}/#services`} className="hover:text-white transition py-0.5 inline-block">
                  Research &amp; Analysis
                </Link>
              </li>
              <li>
                <Link href={`/${language}/#services`} className="hover:text-white transition py-0.5 inline-block">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link href={`/${language}/#services`} className="hover:text-white transition py-0.5 inline-block">
                  Creative &amp; UI/UX
                </Link>
              </li>
              <li>
                <Link href={`/${language}/#services`} className="hover:text-white transition py-0.5 inline-block">
                  Growth &amp; Marketing
                </Link>
              </li>
              <li>
                <Link href={`/${language}/#services`} className="hover:text-white transition py-0.5 inline-block">
                  Enterprise ERP
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Col 3: Navigation (2 cols on lg) ── */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${language}`} className="hover:text-white transition py-0.5 inline-block">
                  {t('nav-home')}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/${language === 'en' ? 'about-us' : 'tentang-kami'}`} className="hover:text-white transition py-0.5 inline-block">
                  {t('nav-about')}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/${language === 'en' ? 'services' : 'layanan'}`} className="hover:text-white transition py-0.5 inline-block">
                  {t('nav-services')}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/${language === 'en' ? 'solutions' : 'solusi'}`} className="hover:text-white transition py-0.5 inline-block">
                  {t('nav-solutions')}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/${language === 'en' ? 'industries' : 'industri'}`} className="hover:text-white transition py-0.5 inline-block">
                  {t('nav-industries')}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/${language === 'en' ? 'news' : 'berita'}`} className="hover:text-white transition py-0.5 inline-block">
                  {t('nav-news')}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/${language === 'en' ? 'organization' : 'organisasi'}`} className="hover:text-white transition py-0.5 inline-block">
                  {t('nav-organization')}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/${language === 'en' ? 'contact' : 'kontak'}`} className="hover:text-white transition py-0.5 inline-block">
                  {t('nav-contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Col 4: Contact & Operating Hours (3 cols on lg) ── */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Contact &amp; Operations
            </h4>
            <div className="space-y-3 pt-1 text-slate-300">
              {/* Direct Email */}
              <a
                href="mailto:contact@rynertia.tech"
                className="flex items-center gap-2.5 hover:text-white transition group py-0.5"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0d1d3d] border border-[#1b3260] flex items-center justify-center shrink-0 group-hover:border-blue-500 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="truncate">contact@rynertia.tech</span>
              </a>

              {/* Operating Business Hours */}
              <div className="flex items-center gap-2.5 py-0.5">
                <div className="w-7 h-7 rounded-lg bg-[#0d1d3d] border border-[#1b3260] flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-white" />
                </div>
                <span>{t('topbar-hours')}</span>
              </div>

              {/* Engineering Hub Location */}
              <div className="flex items-center gap-2.5 py-0.5">
                <div className="w-7 h-7 rounded-lg bg-[#0d1d3d] border border-[#1b3260] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM COPYRIGHT ──────────────── */}
        <div className="pt-8 border-t border-[#122852] flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} RYNERTIA ARC TECH. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6">
            {/* Enterprise Verification Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1d3d] border border-[#1b3260] text-blue-100 text-[11px] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="font-medium text-slate-200">{t('topbar-status')}</span>
            </div>

            <a href="#privacy" className="hover:text-slate-400 transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-400 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
