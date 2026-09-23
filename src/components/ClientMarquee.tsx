'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export interface ClientBrand {
  id: string;
  name: string;
  category: string;
  color: string;
  logo: React.ReactNode;
}

export const getClientLogo = (id: string, className = 'w-6 h-6'): React.ReactNode => {
  switch (id) {
    case 'process-engine':
    case 'aerologix':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#EFF6FF" />
          <path d="M8 20L16 8L24 20H18L16 16L14 20H8Z" fill="#2563EB" />
          <path d="M16 12L19.5 20H12.5L16 12Z" fill="#60A5FA" />
        </svg>
      );
    case 'fintech-app':
    case 'navapay':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#ECFDF5" />
          <circle cx="16" cy="16" r="6.5" stroke="#10B981" strokeWidth="2.5" />
          <path
            d="M13 16L15 18L19 14"
            stroke="#10B981"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'omnichannel-scale':
    case 'vanguard':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#F5F3FF" />
          <path d="M9 10L16 23L23 10H19L16 17L13 10H9Z" fill="#7C3AED" />
        </svg>
      );
    case 'logistics-erp':
    case 'transcargo':
    case 'cargo':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#FFFBEB" />
          <path d="M9 13H18V19H9V13Z" fill="#F59E0B" />
          <path d="M18 15L23 16V19H18V15Z" fill="#D97706" />
          <circle cx="12" cy="20" r="1.5" fill="#78350F" />
          <circle cx="20" cy="20" r="1.5" fill="#78350F" />
        </svg>
      );
    case 'healthtech-telemed':
    case 'medika':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#F0FDFA" />
          <path d="M14 10H18V14H22V18H18V22H14V18H10V14H14V10Z" fill="#0D9488" />
        </svg>
      );
    case 'ai-support-hub':
    case 'omnidesk':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#F0F9FF" />
          <circle cx="16" cy="16" r="3" fill="#0284C7" />
          <circle cx="10" cy="12" r="2" fill="#38BDF8" />
          <circle cx="22" cy="12" r="2" fill="#38BDF8" />
          <circle cx="16" cy="23" r="2" fill="#38BDF8" />
          <line x1="10" y1="12" x2="16" y2="16" stroke="#BAE6FD" strokeWidth="1.5" />
          <line x1="22" y1="12" x2="16" y2="16" stroke="#BAE6FD" strokeWidth="1.5" />
          <line x1="16" y1="23" x2="16" y2="16" stroke="#BAE6FD" strokeWidth="1.5" />
        </svg>
      );
    case 'integra-gov':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#EEF2FF" />
          <path d="M16 8L8 12V14H24V12L16 8Z" fill="#4F46E5" />
          <rect x="10" y="15" width="2.5" height="7" fill="#4F46E5" />
          <rect x="14.75" y="15" width="2.5" height="7" fill="#4F46E5" />
          <rect x="19.5" y="15" width="2.5" height="7" fill="#4F46E5" />
          <rect x="8" y="23" width="16" height="2" fill="#4F46E5" />
        </svg>
      );
    case 'edusmart':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#FFF1F2" />
          <path d="M16 9L8 13L16 17L24 13L16 9Z" fill="#E11D48" />
          <path d="M11 15.5V19.5C11 21.5 13.5 23 16 23C18.5 23 21 21.5 21 19.5V15.5" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />
          <path d="M23 14V20" stroke="#BE123C" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'volterra':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#F0FDF4" />
          <path d="M17 7L9 17H16L15 25L23 15H16L17 7Z" fill="#16A34A" />
        </svg>
      );
    case 'apex-cloud':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#F8FAFC" />
          <path d="M16 8L9 11V16C9 20.5 12 23.5 16 25C20 23.5 23 20.5 23 16V11L16 8Z" stroke="#0284C7" strokeWidth="2" fill="#E0F2FE" />
          <circle cx="16" cy="16" r="2" fill="#0369A1" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#1E293B" />
          <path d="M16 8L24 12.5V21.5L16 26L8 21.5V12.5L16 8Z" stroke="#38BDF8" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 17L24 12.5M16 17V26M16 17L8 12.5" stroke="#38BDF8" strokeWidth="1.5" />
        </svg>
      );
  }
};

export const ClientMarquee: React.FC = () => {
  const { language } = useLanguage();

  // 10 Corporate & Enterprise Client Brands
  const clients: ClientBrand[] = [
    {
      id: 'aerologix',
      name: 'AeroLogix Global',
      category: 'Supply Chain',
      color: '#2563EB',
      logo: getClientLogo('aerologix', 'w-8 h-8'),
    },
    {
      id: 'navapay',
      name: 'NavaPay Bank',
      category: 'Digital Banking',
      color: '#10B981',
      logo: getClientLogo('navapay', 'w-8 h-8'),
    },
    {
      id: 'vanguard',
      name: 'Vanguard Group',
      category: 'Retail & eCommerce',
      color: '#7C3AED',
      logo: getClientLogo('vanguard', 'w-8 h-8'),
    },
    {
      id: 'transcargo',
      name: 'Nusantara Cargo',
      category: 'Fleet Logistics',
      color: '#F59E0B',
      logo: getClientLogo('transcargo', 'w-8 h-8'),
    },
    {
      id: 'medika',
      name: 'Medika Prima',
      category: 'Telehealth Care',
      color: '#0D9488',
      logo: getClientLogo('medika', 'w-8 h-8'),
    },
    {
      id: 'omnidesk',
      name: 'OmniDesk AI',
      category: 'Enterprise AI & RAG',
      color: '#0284C7',
      logo: getClientLogo('omnidesk', 'w-8 h-8'),
    },
    {
      id: 'integra-gov',
      name: 'IntegraGov Digital',
      category: 'Smart City & GovTech',
      color: '#4F46E5',
      logo: getClientLogo('integra-gov', 'w-8 h-8'),
    },
    {
      id: 'edusmart',
      name: 'EduSmart Core',
      category: 'Higher Ed LMS',
      color: '#E11D48',
      logo: getClientLogo('edusmart', 'w-8 h-8'),
    },
    {
      id: 'volterra',
      name: 'Volterra Energy',
      category: 'Smart Grid IoT',
      color: '#16A34A',
      logo: getClientLogo('volterra', 'w-8 h-8'),
    },
    {
      id: 'apex-cloud',
      name: 'ApexCloud Security',
      category: 'Cloud Infrastructure',
      color: '#0284C7',
      logo: getClientLogo('apex-cloud', 'w-8 h-8'),
    },
  ];

  // Logic: Jika 10 klien atau lebih, dibagi menjadi 2 baris (atas dan bawah)
  const isSplit = clients.length >= 10;
  const half = Math.ceil(clients.length / 2);
  const row1 = isSplit ? clients.slice(0, half) : clients;
  const row2 = isSplit ? clients.slice(half) : [];

  // Duplikasi untuk perputaran infinite loop yang seamless
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = isSplit ? [...row2, ...row2, ...row2] : [];

  const renderCard = (client: ClientBrand, idx: number, prefix: string) => (
    <div
      key={`${prefix}-${client.id}-${idx}`}
      className="w-48 sm:w-56 h-16 sm:h-20 px-4 sm:px-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/85 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3.5 shrink-0 cursor-pointer group select-none"
    >
      <div className="group-hover:scale-110 transition-transform duration-300 shrink-0">
        {client.logo}
      </div>
      <div className="flex flex-col text-left truncate">
        <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight truncate">
          {client.name}
        </span>
        <span className="text-[9px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-medium font-mono truncate">
          {client.category}
        </span>
      </div>
    </div>
  );

  return (
    <div className="py-12 relative overflow-hidden">
      {/* Header Label & Title */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-10 space-y-2.5">
        <p className="text-xs sm:text-sm font-extrabold tracking-widest text-blue-600 dark:text-blue-400 uppercase font-mono">
          {language === 'id' ? 'Fokus Ekosistem & Domain Industri' : 'Industry Ecosystems & Domains'}
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {language === 'id' ? (
            <>
              Rancang Bangun Solusi <span className="text-gradient-blue">Lintas Sektor Industri</span>
            </>
          ) : (
            <>
              Architectural Solutions Across <span className="text-gradient-blue">Industry Verticals</span>
            </>
          )}
        </h2>
        {isSplit && (
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
            {language === 'id'
              ? 'Rancangan arsitektur dan pemodelan proses yang disiapkan secara modular untuk menjawab tantangan operasional sektor finansial, manufaktur, hingga rantai pasok.'
              : 'Modular architectures and process workflows engineered to address operational challenges across finance, manufacturing, and supply chain domains.'}
          </p>
        )}
      </div>

      {/* Infinite Horizontal Marquee Container with Gradient Edge Fade */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-5">
        {/* Left Edge Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-r from-slate-50 dark:from-slate-950 via-slate-50/80 dark:via-slate-950/80 to-transparent z-10 pointer-events-none" />

        {/* Right Edge Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-l from-slate-50 dark:from-slate-950 via-slate-50/80 dark:via-slate-950/80 to-transparent z-10 pointer-events-none" />

        {/* Baris 1 (Atas): Bergerak dari kanan ke kiri */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1 px-4">
          {marqueeRow1.map((client, idx) => renderCard(client, idx, 'row1'))}
        </div>

        {/* Baris 2 (Bawah): Bergerak dari kiri ke kanan (reverse direction) jika >= 10 klien */}
        {isSplit && (
          <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6 py-1 px-4">
            {marqueeRow2.map((client, idx) => renderCard(client, idx, 'row2'))}
          </div>
        )}
      </div>
    </div>
  );
};
