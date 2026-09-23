'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === 'dark' : false;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all shadow-xs cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center shrink-0"
      title={isDark ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 rotate-0 scale-100" />
      ) : (
        <Moon className="w-4 h-4 text-slate-600 dark:text-slate-300 transition-transform duration-200 rotate-0 scale-100" />
      )}
    </button>
  );
};