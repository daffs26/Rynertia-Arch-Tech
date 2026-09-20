'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  Bell,
  Search,
  ChevronRight,
  Shield,
  Plus,
} from 'lucide-react';
import { initialMessagesData } from '@/data/dashboardMockData';

interface DashboardTopbarProps {
  onToggleSidebar: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const DashboardTopbar: React.FC<DashboardTopbarProps> = ({
  onToggleSidebar,
  isCollapsed,
  onToggleCollapse,
}) => {
  const pathname = usePathname();
  const unreadMessages = initialMessagesData.filter((m) => m.status === 'unread').length;

  // Derive breadcrumbs from pathname
  const getPageInfo = () => {
    if (pathname === '/dashboard') {
      return {
        title: 'Beranda Konsol',
        subtitle: 'Ringkasan operasional dan metrik performa konten Rynertia Arc Tech',
        breadcrumb: 'Beranda',
        actionBtn: null,
      };
    }
    if (pathname.startsWith('/dashboard/content/new')) {
      return {
        title: 'Buat Konten Baru',
        subtitle: 'Tambah dan kelola lifecycle konten digital (Draft, Published, Archived)',
        breadcrumb: 'Content Management / Buat Baru',
        actionBtn: null,
      };
    }
    if (pathname.startsWith('/dashboard/content/')) {
      return {
        title: 'Edit Konten',
        subtitle: 'Pembaruan data dan status publikasi konten',
        breadcrumb: 'Content Management / Edit',
        actionBtn: null,
      };
    }
    if (pathname.startsWith('/dashboard/content')) {
      return {
        title: 'Content Management',
        subtitle: 'Kelola seluruh siklus hidup konten (Portofolio, Berita, Layanan, Tim)',
        breadcrumb: 'Content Management',
        actionBtn: {
          label: 'Tambah Konten',
          href: '/dashboard/content/new',
        },
      };
    }
    if (pathname.startsWith('/dashboard/pesan')) {
      return {
        title: 'Pesan Pengunjung',
        subtitle: 'Kotak masuk komunikasi dan prospek bisnis dari formulir kontak web',
        breadcrumb: 'Pesan Pengunjung',
        actionBtn: null,
      };
    }
    if (pathname.startsWith('/dashboard/discovery')) {
      return {
        title: 'Business Discovery',
        subtitle: 'Eksplorasi prospek bisnis lokal dan UMKM dengan web presence rendah',
        breadcrumb: 'Business Discovery',
        actionBtn: null,
      };
    }
    if (pathname.startsWith('/dashboard/settings')) {
      return {
        title: 'Pengaturan Konsol',
        subtitle: 'Konfigurasi profil resmi, kunci API, dan kredensial administrator',
        breadcrumb: 'Pengaturan',
        actionBtn: null,
      };
    }
    return {
      title: 'Admin Dashboard',
      subtitle: 'Konsol manajemen operasional Rynertia Arc Tech',
      breadcrumb: 'Dashboard',
      actionBtn: null,
    };
  };

  const pageInfo = getPageInfo();

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 flex items-center justify-between transition-colors">
      {/* Left: Mobile Menu Trigger + Breadcrumb */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs">
          <Link
            href="/dashboard"
            className="text-slate-500 hover:text-slate-900 font-medium transition-colors"
          >
            Dashboard
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{pageInfo.breadcrumb}</span>
        </nav>
      </div>

      {/* Right: Quick Search, New Action, Notifications, Profile */}
      <div className="flex items-center gap-2.5 sm:gap-4">
        {/* Contextual Action Button if available */}
        {pageInfo.actionBtn && (
          <Link
            href={pageInfo.actionBtn.href}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer min-h-[40px]"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">{pageInfo.actionBtn.label}</span>
          </Link>
        )}

        {/* Global Search Preview */}
        <div className="relative hidden md:block w-52 lg:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari data atau konten..."
            className="w-full pl-9 pr-3.5 py-2 text-xs bg-slate-100/90 border border-slate-200/90 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-normal"
          />
        </div>

        {/* Notification Bell */}
        <Link
          href="/dashboard/pesan"
          title="Pesan Pengunjung"
          className="relative p-2.5 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 border border-transparent hover:border-blue-200 min-w-[40px] min-h-[40px] flex items-center justify-center transition-all"
        >
          <Bell className="w-4 h-4" />
          {unreadMessages > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-2 ring-white animate-pulse" />
          )}
        </Link>

        {/* Vertical Divider */}
        <div className="h-6 w-px bg-slate-200" />

        {/* Admin Badge */}
        <div className="flex items-center gap-2.5 pl-1">
          <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-bold font-mono shadow-xs ring-2 ring-blue-600/20">
            AD
          </div>
          <div className="hidden sm:block text-left">
            <span className="block text-xs font-bold text-slate-900 leading-tight">
              Admin Rynertia
            </span>
            <span className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
              <Shield className="w-3 h-3 text-blue-600" />
              Role: Administrator
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
