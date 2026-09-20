'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Language, translations, TranslationDictionary } from '@/data/translations';
import { getLocalizedPath, defaultLocale } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationDictionary) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  initialLang?: Language;
}> = ({ children, initialLang = defaultLocale }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguageState] = useState<Language>(initialLang);

  // Sync state if initialLang changes (e.g. navigation between locale routes)
  useEffect(() => {
    if (initialLang && initialLang !== language) {
      setLanguageState(initialLang);
    }
  }, [initialLang]);

  // Keep <html lang="..."> attribute and localStorage in sync
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
    localStorage.setItem('rynertia_lang', language);
  }, [language]);

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
    setLanguageState(newLang);
    localStorage.setItem('rynertia_lang', newLang);

    // If pathname is present, navigate to the target localized URL
    if (pathname) {
      const targetPath = getLocalizedPath(pathname, newLang);
      router.push(targetPath);
    }
  };

  const t = (key: keyof TranslationDictionary): string => {
    return translations[language]?.[key] || translations['en'][key] || (key as string);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
