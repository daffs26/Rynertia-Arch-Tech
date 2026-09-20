'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronUp } from 'lucide-react';

export const IndonesiaFlag: React.FC<{ className?: string }> = ({ className = 'w-4.5 h-3' }) => (
  <svg
    viewBox="0 0 640 480"
    className={`inline-block shrink-0 rounded-[2px] shadow-2xs border border-slate-300/70 overflow-hidden ${className}`}
    aria-hidden="true"
  >
    <rect width="640" height="240" fill="#E70011" />
    <rect y="240" width="640" height="240" fill="#FFFFFF" />
  </svg>
);

export const UKFlag: React.FC<{ className?: string }> = ({ className = 'w-4.5 h-3' }) => (
  <svg
    viewBox="0 0 60 30"
    className={`inline-block shrink-0 rounded-[2px] shadow-2xs border border-slate-300/70 overflow-hidden ${className}`}
    aria-hidden="true"
  >
    <clipPath id="uk-clip">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="uk-diagonals">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#uk-clip)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-diagonals)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

interface LanguageOption {
  code: 'id' | 'en';
  label: string;
  name: string;
  flag: React.ReactNode;
}

// Default is strictly Bahasa Indonesia (first element)
const languages: LanguageOption[] = [
  {
    code: 'id',
    label: 'ID',
    name: 'Bahasa Indonesia',
    flag: <IndonesiaFlag className="w-4.5 h-3" />,
  },
  {
    code: 'en',
    label: 'EN',
    name: 'English',
    flag: <UKFlag className="w-4.5 h-3" />,
  },
];

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Guarantee default is ID if language is undefined or matches
  const currentLang = languages.find(l => l.code === language) || languages[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`relative inline-block select-none shrink-0 ${className}`}>
      {/* Trigger Button - Matches Image 2 Reference with Clean Pill Styling */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select Language"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800 transition-all duration-200 shadow-2xs hover:shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 active:scale-97 cursor-pointer shrink-0"
      >
        <span className="flex items-center shrink-0">{currentLang.flag}</span>
        <span className="text-xs font-bold tracking-wider text-slate-800 shrink-0">{currentLang.label}</span>
        <svg
          viewBox="0 0 10 6"
          className={`w-2 h-2 fill-slate-600 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 fill-blue-600' : ''
          }`}
          aria-hidden="true"
        >
          <path d="M0 0l5 6 5-6z" />
        </svg>
      </button>

      {/* Popover Dropdown Card - Matches Image 3 Reference */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Languages"
          className="absolute right-0 top-full mt-2 w-48 p-1.5 bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-900/10 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="space-y-0.5">
            {languages.map(lang => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2 rounded-xl flex items-center justify-between text-xs transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-50/90 text-slate-900 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center shrink-0">{lang.flag}</span>
                    <span className="text-xs tracking-normal">{lang.name}</span>
                  </div>

                  {/* Upward chevron on selected option as displayed in Image 3 */}
                  {isSelected && (
                    <ChevronUp className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
