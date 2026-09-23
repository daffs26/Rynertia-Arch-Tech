'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';


export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const navLinks = [
    { href: `/${language}/#home`, id: 'home', key: 'nav-home' as const },
    { href: `/${language}/#about`, id: 'about', key: 'nav-about' as const },
    { href: `/${language}/#services`, id: 'services', key: 'nav-services' as const },
    { href: `/${language}/#industries`, id: 'industries', key: 'nav-industries' as const },
    { href: `/${language}/#solutions`, id: 'solutions', key: 'nav-solutions' as const },
    { href: `/${language}/#portfolio`, id: 'portfolio', key: 'nav-portfolio' as const },
    { href: `/${language}/#news`, id: 'news', key: 'nav-news' as const },
    { href: `/${language}/#team`, id: 'team', key: 'nav-organization' as const },
    { href: `/${language}/#contact`, id: 'contact', key: 'nav-contact' as const },
  ];

  // Active section scroll-spy listener
  useEffect(() => {
    const isHome = !pathname || pathname === '/' || pathname === '/id' || pathname === '/en';
    if (!isHome) {
      if (pathname.includes('/portfolio')) {
        setActiveSection('portfolio');
      } else if (pathname.includes('/news') || pathname.includes('/berita')) {
        setActiveSection('news');
      } else if (pathname.includes('/team') || pathname.includes('/organisasi') || pathname.includes('/organization')) {
        setActiveSection('team');
      } else if (pathname.includes('/tentang-kami') || pathname.includes('/about')) {
        setActiveSection('about');
      } else if (pathname.includes('/layanan') || pathname.includes('/services')) {
        setActiveSection('services');
      } else if (pathname.includes('/solusi') || pathname.includes('/solutions')) {
        setActiveSection('solutions');
      } else if (pathname.includes('/industri') || pathname.includes('/industries')) {
        setActiveSection('industries');
      } else if (pathname.includes('/kontak') || pathname.includes('/contact')) {
        setActiveSection('contact');
      } else {
        setActiveSection('');
      }
      return;
    }

    const sectionIds = ['home', 'about', 'services', 'industries', 'solutions', 'portfolio', 'news', 'team', 'contact'];

    // Initial check from URL hash
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      }
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Bottom of page: activate contact
      if (window.scrollY + windowHeight >= documentHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Top of page: activate home
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 lg:gap-3 xl:gap-6">
        {/* Brand Logo */}
        <Link
          href={`/${language}`}
          onClick={() => setActiveSection('home')}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img
              src="/logo-icon.png"
              alt="Rynertia Arc Tech Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-sm"
            />
          </div>
          <div>
            <span className="text-base sm:text-xl font-bold tracking-wider text-slate-900 dark:text-white transition-colors">
              RYNERTIA
            </span>
            <span className="text-[9px] sm:text-xs block font-semibold tracking-widest text-gradient-blue">
              ARC TECH
            </span>
          </div>
        </Link>

        {/* Desktop Nav Menu with Dynamic Active Blue Text */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2 2xl:gap-3.5 text-xs xl:text-[13px] 2xl:text-sm font-medium">
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            const isContact = link.id === 'contact';
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative px-1.5 xl:px-2 2xl:px-2.5 py-1 transition-all duration-200 whitespace-nowrap ${
                  isContact ? 'hidden 2xl:inline-block' : ''
                } ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold drop-shadow-[0_1px_8px_rgba(37,99,235,0.2)]'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium'
                }`}
              >
                <span>{t(link.key)}</span>
                {/* Blue Indicator Underline */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1.5 right-1.5 h-0.5 bg-blue-600 rounded-full animate-in fade-in zoom-in-95 duration-200" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions: Language Switcher + Theme Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0 ml-auto lg:ml-1 xl:ml-3">
          {/* Flag Dropdown Language Switcher */}
          <LanguageSwitcher />
          <ThemeToggle />

          <Link
            href={`/${language}/#contact`}
            className="px-3.5 xl:px-4.5 py-2 xl:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs xl:text-sm shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-1.5 xl:gap-2 whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">{t('nav-cta')}</span>
            <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
          </Link>
        </div>

        {/* Mobile Action Hub */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Flag Dropdown Language Switcher */}
          <LanguageSwitcher />
          <ThemeToggle/>

          {/* Accessible Hamburger Button (44x44px hitbox) */}
          <button
            onClick={toggleMobileMenu}
            className="w-10 h-10 sm:w-11 sm:h-11 min-w-[40px] min-h-[40px] rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-95 transition flex items-center justify-center cursor-pointer border border-slate-200/80 dark:border-slate-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-800 dark:text-slate-200" />
            ) : (
              <Menu className="w-5 h-5 text-slate-800 dark:text-slate-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-5 py-5 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map(link => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition min-h-[48px] ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-bold border border-blue-200/80 dark:border-blue-900/60 shadow-xs'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-blue-600 dark:hover:text-blue-400 font-medium'
                  }`}
                >
                  <span>{t(link.key)}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'text-blue-600 dark:text-blue-400 translate-x-1' : 'text-slate-400 dark:text-slate-500'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <Link
              href={`/${language}/#contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center px-5 py-3.5 rounded-xl bg-blue-600 active:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/25 min-h-[48px]"
            >
              <span>{t('nav-cta')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="text-center pt-2">
              <a
                href="mailto:contact@rynertia.tech"
                className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                contact@rynertia.tech
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
