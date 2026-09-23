'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const applyThemeToDOM = (theme: Theme) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
    root.style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
    root.style.colorScheme = 'light';
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('rynertia-theme') as Theme | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme: Theme = savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : (prefersDark ? 'dark' : 'light');

      setThemeState(initialTheme);
      applyThemeToDOM(initialTheme);
    } catch {
      // Fallback
      applyThemeToDOM('light');
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('rynertia-theme', newTheme);
    } catch {}
    applyThemeToDOM(newTheme);
  };

  const toggleTheme = () => {
    setThemeState(prevTheme => {
      const nextTheme: Theme = prevTheme === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('rynertia-theme', nextTheme);
      } catch {}
      applyThemeToDOM(nextTheme);
      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

