'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  Search,
  ChevronDown,
  Plus,
  Download,
} from 'lucide-react';

interface DashboardTopbarProps {
  onToggleSidebar: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const DashboardTopbar: React.FC<DashboardTopbarProps> = ({
  onToggleSidebar,
}) => {
  const pathname = usePathname();

  const getPageMeta = () => {
    if (pathname === '/dashboard') {
      return {
        title: 'Rynertia Arc Tech',
        subtitle: 'Konsol ringkasan operasional dan perencanaan konten teknologi',
      };
    }
    if (pathname.startsWith('/dashboard/schedule')) {
      return {
        title: 'Content Calendar',
        subtitle: 'Jadwal publikasi artikel wawasan, portofolio, dan kampanye media',
      };
    }
    if (pathname.startsWith('/dashboard/campaigns')) {
      return {
        title: 'Campaigns',
        subtitle: 'Penghubung target bisnis, penawaran solusi, dan jadwal penerbitan',
      };
    }
    if (pathname.startsWith('/dashboard/performance')) {
      return {
        title: 'Performance Tracker',
        subtitle: 'Pelacakan metrik impresi, CTR, konversi prospek, dan performa konten',
      };
    }
    if (pathname.startsWith('/dashboard/insights')) {
      return {
        title: 'AI Insights & Strategy',
        subtitle: 'Rekomendasi tindakan terarah dan analisis data operasional',
      };
    }
    if (pathname.startsWith('/dashboard/content')) {
      return {
        title: 'Content Management',
        subtitle: 'Kelola seluruh siklus hidup konten (Draft, Published, Archived)',
      };
    }
    if (pathname.startsWith('/dashboard/pesan')) {
      return {
        title: 'Pesan Pengunjung',
        subtitle: 'Komunikasi prospek bisnis dari formulir kontak web',
      };
    }
    if (pathname.startsWith('/dashboard/discovery')) {
      return {
        title: 'Business Discovery',
        subtitle: 'Eksplorasi prospek bisnis lokal dengan web presence rendah',
      };
    }
    if (pathname.startsWith('/dashboard/settings')) {
      return {
        title: 'Setup & Data',
        subtitle: 'Konfigurasi profil konsol, kunci API, dan kredensial sistem',
      };
    }
    return {
      title: 'Admin Dashboard',
      subtitle: 'Konsol manajemen operasional Rynertia Arc Tech',
    };
  };

  const meta = getPageMeta();

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 max-w-7xl mx-auto w-full">
        {/* Left: Mobile Trigger + Page Titles */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 lg:hidden min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h1 className="font-poppins font-bold text-base sm:text-lg text-slate-900 leading-tight">
              {meta.title}
            </h1>
            <p className="font-poppins text-[11px] text-slate-400 mt-0.5 hidden sm:block truncate">
              {meta.subtitle}
            </p>
          </div>
        </div>

        {/* Right: Search, Timeframe Filter, Action Buttons, Profile */}
        <div className="flex items-center gap-2 sm:gap-2.5 self-end sm:self-auto">
          {/* Search Box */}
          <div className="relative hidden md:block w-44 lg:w-56">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search this section"
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200/90 rounded-xl text-slate-900 placeholder:text-slate-400 font-poppins focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
            />
          </div>

          {/* Timeframe Dropdown (This Week) */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-poppins font-medium transition-colors shadow-2xs cursor-pointer"
            >
              <span>This Week</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* + New Content Button */}
          <Link
            href="/dashboard/content"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-poppins font-semibold shadow-xs hover:shadow-sm transition-all cursor-pointer min-h-[34px]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">+ New Content</span>
          </Link>

          {/* Export Data Button */}
          <button
            type="button"
            onClick={() => {
              const exportContent = '=== RYNERTIA ARC TECH CONSOLE DATA EXPORT ===\nTanggal: 20 September 2026\nStatus: Aktif';
              const blob = new Blob([exportContent], { type: 'text/plain;charset=utf-8' });
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = `rynertia-dashboard-export-${Date.now()}.txt`;
              link.click();
              URL.revokeObjectURL(url);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-poppins font-medium transition-colors shadow-2xs cursor-pointer min-h-[34px]"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden md:inline">Export Data</span>
          </button>

          {/* User Avatar Circle */}
          <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold font-mono text-xs flex items-center justify-center shrink-0 ml-1">
            AD
          </div>
        </div>
      </div>
    </header>
  );
};
