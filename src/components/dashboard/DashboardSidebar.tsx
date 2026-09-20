'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  Compass,
  Settings,
  ExternalLink,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
  FileText,
} from 'lucide-react';
import { initialMessagesData, initialContentData } from '@/data/dashboardMockData';

interface DashboardSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isOpen = true,
  onClose,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  const pathname = usePathname();
  const [showCapacityCard, setShowCapacityCard] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const unreadCount = initialMessagesData.filter((m) => m.status === 'unread').length;
  const totalContent = initialContentData.length;

  const mainNavigation = [
    {
      name: 'Beranda',
      href: '/dashboard',
      icon: LayoutDashboard,
      badge: null,
      exact: true,
    },
    {
      name: 'Content Management',
      href: '/dashboard/content',
      icon: FolderKanban,
      badge: totalContent.toString(),
      exact: false,
    },
    {
      name: 'Pesan Pengunjung',
      href: '/dashboard/pesan',
      icon: MessageSquare,
      badge: unreadCount > 0 ? `${unreadCount}+` : null,
      badgeColor: 'bg-blue-600 text-white',
      exact: false,
    },
    {
      name: 'Business Discovery',
      href: '/dashboard/discovery',
      icon: Compass,
      badge: 'Hot',
      badgeColor: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80',
      exact: false,
    },
  ];

  const systemNavigation = [
    {
      name: 'Pengaturan',
      href: '/dashboard/settings',
      icon: Settings,
      badge: null,
      exact: false,
    },
    {
      name: 'Web Publik',
      href: '/id',
      icon: ExternalLink,
      badge: 'Live',
      badgeColor: 'bg-slate-100 text-slate-700 border border-slate-200',
      exact: false,
      external: true,
    },
    {
      name: 'Dokumentasi',
      href: '/dashboard/settings',
      icon: FileText,
      badge: null,
      exact: false,
    },
  ];

  const isActiveRoute = (href: string, exact: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 bg-white text-slate-900 border-r border-slate-200/90 flex flex-col transition-all duration-300 ease-in-out shadow-[4px_0_24px_rgba(0,0,0,0.02)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${isCollapsed ? 'lg:w-[84px] w-72' : 'w-72'}`}
      >
        {/* Top Window Control Header (macOS Dots & Brand / Toggle) */}
        <div className="pt-4 px-4 pb-3 border-b border-slate-100 relative">
          {/* macOS 3 Dots */}
          <div
            className={`flex items-center gap-1.5 mb-3 ${
              isCollapsed ? 'justify-center' : 'justify-start'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
          </div>

          {/* Expanded Header View */}
          {!isCollapsed ? (
            <div className="flex items-center justify-between">
              <Link
                href="/dashboard"
                className="flex items-center gap-2.5 group focus:outline-hidden"
              >
                <div className="w-8 h-8 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <img
                    src="/logo-icon.png"
                    alt="Rynertia Arc Tech Logo"
                    className="w-8 h-8 object-contain drop-shadow-xs"
                  />
                </div>
                <div>
                  <span className="block font-bold text-xs tracking-wider text-slate-900 font-poppins leading-tight">
                    RYNERTIA
                  </span>
                  <span className="block text-[9px] font-semibold tracking-widest text-gradient-blue font-poppins">
                    ARC TECH
                  </span>
                </div>
              </Link>

              {/* Collapse Button (<) */}
              {onToggleCollapse && (
                <button
                  type="button"
                  onClick={onToggleCollapse}
                  title="Ciutkan Sidebar"
                  className="hidden lg:flex w-7 h-7 rounded-lg border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-900 items-center justify-center transition-all shadow-2xs cursor-pointer focus:outline-hidden"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}
            </div>
          ) : (
            /* Collapsed Header View */
            <div className="flex flex-col items-center gap-2">
              <Link
                href="/dashboard"
                className="w-8 h-8 relative flex items-center justify-center hover:scale-105 transition-transform shrink-0 focus:outline-hidden"
                title="Rynertia Arc Tech"
              >
                <img
                  src="/logo-icon.png"
                  alt="Rynertia Logo"
                  className="w-8 h-8 object-contain drop-shadow-xs"
                />
              </Link>

              {/* Expand Button (>) */}
              {onToggleCollapse && (
                <button
                  type="button"
                  onClick={onToggleCollapse}
                  title="Perluas Sidebar"
                  className="hidden lg:flex w-7 h-7 rounded-lg border border-slate-200/90 bg-white hover:bg-blue-50 hover:border-blue-300 text-slate-500 hover:text-blue-600 items-center justify-center transition-all shadow-2xs cursor-pointer focus:outline-hidden"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Search Bar / Icon */}
        <div className="p-3 border-b border-slate-100">
          {!isCollapsed ? (
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari data atau konten..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200/90 rounded-xl text-slate-900 placeholder:text-slate-400 font-poppins focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-normal"
              />
            </div>
          ) : (
            <div className="flex justify-center group relative">
              <button
                type="button"
                onClick={onToggleCollapse}
                className="w-10 h-10 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all cursor-pointer focus:outline-hidden"
                title="Cari data"
              >
                <Search className="w-4 h-4" />
              </button>
              {/* Tooltip on Collapsed */}
              <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-slate-900 text-white text-xs font-poppins font-medium rounded-lg shadow-xl whitespace-nowrap z-50 pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150">
                Cari di konsol
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-4">
          {/* Main Navigation Section */}
          <div>
            {!isCollapsed && (
              <p className="px-3 pb-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins">
                Main
              </p>
            )}

            <nav className="space-y-1">
              {mainNavigation.map((item) => {
                const active = isActiveRoute(item.href, item.exact);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    className={`group relative flex items-center rounded-xl transition-all duration-150 font-poppins text-xs ${
                      isCollapsed
                        ? 'w-11 h-11 mx-auto justify-center'
                        : 'px-3 py-2.5 justify-between min-h-[42px]'
                    } ${
                      active
                        ? 'bg-blue-50 text-blue-700 font-semibold shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 shrink-0 transition-colors ${
                          active
                            ? 'text-blue-600'
                            : 'text-slate-400 group-hover:text-slate-700'
                        }`}
                      />
                      {!isCollapsed && (
                        <span className="truncate">{item.name}</span>
                      )}
                    </div>

                    {/* Badge in Expanded State */}
                    {!isCollapsed && item.badge && (
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                          item.badgeColor || 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}

                    {/* Tooltip on Collapsed State */}
                    {isCollapsed && (
                      <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-slate-900 text-white text-xs font-poppins font-medium rounded-lg shadow-xl whitespace-nowrap z-50 pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 flex items-center gap-2">
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-blue-600 text-white">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Subtle Divider */}
          <div className="border-t border-slate-100 mx-1" />

          {/* System Navigation Section */}
          <div>
            {!isCollapsed && (
              <p className="px-3 pb-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins">
                Sistem
              </p>
            )}

            <nav className="space-y-1">
              {systemNavigation.map((item) => {
                const active = !item.external && isActiveRoute(item.href, item.exact);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    onClick={onClose}
                    className={`group relative flex items-center rounded-xl transition-all duration-150 font-poppins text-xs ${
                      isCollapsed
                        ? 'w-11 h-11 mx-auto justify-center'
                        : 'px-3 py-2.5 justify-between min-h-[42px]'
                    } ${
                      active
                        ? 'bg-blue-50 text-blue-700 font-semibold shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 shrink-0 transition-colors ${
                          active
                            ? 'text-blue-600'
                            : 'text-slate-400 group-hover:text-slate-700'
                        }`}
                      />
                      {!isCollapsed && (
                        <span className="truncate">{item.name}</span>
                      )}
                    </div>

                    {!isCollapsed && item.badge && (
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                          item.badgeColor || 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}

                    {/* Tooltip on Collapsed State */}
                    {isCollapsed && (
                      <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-slate-900 text-white text-xs font-poppins font-medium rounded-lg shadow-xl whitespace-nowrap z-50 pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 flex items-center gap-2">
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-slate-700 text-slate-200">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Used Capacity Widget Card (Expanded View Only, matching reference image) */}
          {!isCollapsed && showCapacityCard && (
            <div className="rounded-2xl bg-gradient-to-br from-blue-50/90 via-sky-50/50 to-indigo-50/70 border border-blue-100/90 p-3.5 relative shadow-xs">
              {/* Dismiss button */}
              <button
                type="button"
                onClick={() => setShowCapacityCard(false)}
                title="Tutup Widget"
                className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* Radial Progress Graphic */}
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 flex items-center justify-center shrink-0">
                  <svg className="w-11 h-11 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-blue-200/80"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-blue-600"
                      strokeDasharray="68, 100"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute font-mono text-[10px] font-bold text-blue-700">
                    68%
                  </span>
                </div>

                <div>
                  <h4 className="font-poppins font-bold text-xs text-slate-900 leading-tight">
                    Kapasitas Media
                  </h4>
                  <p className="font-poppins text-[10px] text-slate-500 mt-0.5 leading-snug">
                    <span className="font-mono font-medium text-slate-700">3.4 GB</span> dari{' '}
                    <span className="font-mono font-medium text-slate-700">5.0 GB</span>
                  </p>
                </div>
              </div>

              <p className="font-poppins text-[11px] text-slate-600 mt-2 leading-relaxed">
                Penggunaan kuota aset visual dan media publikasi digital.
              </p>

              <Link
                href="/id"
                target="_blank"
                className="mt-2.5 w-full py-1.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-poppins text-xs font-semibold shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Lihat Web Publik</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          )}
        </div>

        {/* Footer User Profile (Matching Reference Mockup) */}
        <div className="border-t border-slate-100 p-3 bg-white">
          {!isCollapsed ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center ring-2 ring-blue-600/20 relative shrink-0">
                  AD
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
                </div>
                <div className="min-w-0">
                  <span className="block font-poppins font-bold text-xs text-slate-900 truncate leading-tight">
                    Admin Rynertia
                  </span>
                  <span className="block font-mono text-[10px] text-slate-500 truncate mt-0.5">
                    admin@rynertia.id
                  </span>
                </div>
              </div>

              <Link
                href="/dashboard/login"
                title="Keluar / Logout"
                className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors shrink-0"
              >
                <LogOut className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="flex justify-center group relative">
              <Link
                href="/dashboard/login"
                title="Profil Admin & Logout"
                className="w-10 h-10 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center ring-2 ring-blue-600/20 relative hover:ring-rose-500 transition-all focus:outline-hidden"
              >
                AD
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
              </Link>
              {/* Tooltip on Collapsed Footer */}
              <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-slate-900 text-white text-xs font-poppins font-medium rounded-lg shadow-xl whitespace-nowrap z-50 pointer-events-none opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150">
                Admin Rynertia (admin@rynertia.id)
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
