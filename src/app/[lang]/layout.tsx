import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { locales, isValidLocale, defaultLocale } from '@/lib/i18n';
import type { Language } from '@/data/translations';

export async function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang: Language = isValidLocale(lang) ? (lang as Language) : defaultLocale;

  return (
    <LanguageProvider initialLang={validLang}>
      {children}
    </LanguageProvider>
  );
}
