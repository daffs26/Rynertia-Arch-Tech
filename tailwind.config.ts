import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: '#F8FAFC',
        'arc-cobalt': '#2563EB',
        'arc-gold': '#0284C7',
        'arc-sky': '#0EA5E9',
        'spec-cyan': '#0EA5E9',
        'spec-green': '#10B981',
        'spec-magenta': '#EC4899',
        'spec-orange': '#F97316',
        'spec-yellow': '#EAB308',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
