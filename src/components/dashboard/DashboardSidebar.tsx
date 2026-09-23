'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Calendar,
  FolderKanban,
  Layers,
  Kanban,
  TrendingUp,
  MessageSquare,
  Compass,
  Brain,
  Settings,
  LogOut,
  ExternalLink,
} from 'lucide-react';
import { initialMessagesData, thisWeekStats } from '@/data/dashboardMockData';

interface DashboardSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isOpen = true,
  onClose,
}) => {
  const pathname = usePathname();
  const unreadCount = initialMessagesData.filter((m) => m.status === 'unread').length;

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: 'Content Calendar',
      href: '/dashboard/schedule',
      icon: Calendar,
      exact: false,
    },
    {
      name: 'Content Management',
      href: '/dashboard/content',
      icon: FolderKanban,
      exact: false,
    },
    {
      name: 'Campaigns',
      href: '/dashboard/campaigns',
      icon: Layers,
      exact: false,
    },
    {
      name: 'Production Board',
      href: '/dashboard/content',
      icon: Kanban,
      exact: false,
    },
    {
      name: 'Performance Tracker',
      href: '/dashboard/performance',
      icon: TrendingUp,
      exact: false,
    },
    {
      name: 'Pesan Pengunjung',
      href: '/dashboard/pesan',
      icon: MessageSquare,
      badge: unreadCount > 0 ? `${unreadCount}+` : null,
      exact: false,
    },
    {
      name: 'Business Discovery',
      href: '/dashboard/discovery',
      icon: Compass,
      badge: 'Hot',
      exact: false,
    },
    {
      name: 'AI Insights',
      href: '/dashboard/insights',
      icon: Brain,
      exact: false,
    },
    {
      name: 'Setup & Data',
      href: '/dashboard/settings',
      icon: Settings,
      exact: false,
    },
  ];

  const isActiveRoute = (href: string, exact: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href) && href !== '/dashboard';
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container matching video reference */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white text-slate-900 border-r border-slate-200/80 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Workspace Header (Logo icon, title, subtitle) */}
          <div className="p-5 border-b border-slate-100 flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200/70 text-blue-600 flex items-center justify-center p-2 shrink-0 shadow-2xs">
              <img
                src="/logo-icon.png"
                alt="Rynertia Arc Tech Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <span className="block font-bold text-xs tracking-wide text-slate-900 font-poppins truncate leading-tight">
                Rynertia Arc Tech
              </span>
              <span className="block text-[10px] text-slate-400 font-poppins truncate mt-0.5">
                Technology Consulting Hub
              </span>
            </div>
          </div>

          {/* Navigation Links with Active Indicator Bar */}
          <nav className="flex-1 px-2.5 py-4 space-y-1 overflow-y-auto">
            {navigationItems.map((item) => {
              const active = isActiveRoute(item.href, item.exact);
              const Icon = item.icon;

              return (
                <Link
                  key={item.name + item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-poppins transition-all duration-150 min-h-[38px] ${
                    active
                      ? 'bg-[#F1F4FA] text-blue-700 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium'
                  }`}
                >
                  {/* Left Indicator strip on active */}
                  {active && (
                    <span className="w-1 h-5 bg-blue-600 rounded-r-full absolute left-0 top-1/2 -translate-y-1/2" />
                  )}

                  <div className="flex items-center gap-3 min-w-0 pl-1">
                    <Icon
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        active ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-700'
                      }`}
                    />
                    <span className="truncate">{item.name}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        item.badge === 'Hot'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
                          : 'bg-blue-50 text-blue-700 border border-blue-200/80'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* This Week Mini Widget (Directly from video reference) */}
          <div className="p-3 border-t border-slate-100 shrink-0">
            <div className="rounded-2xl bg-slate-50/80 border border-slate-200/70 p-3 shadow-2xs">
              <h4 className="text-xs font-bold text-slate-900 font-poppins mb-2">
                This Week
              </h4>
              <div className="space-y-1 text-[11px] font-poppins">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Posts planned</span>
                  <span className="font-mono font-bold text-slate-800">
                    {thisWeekStats.postsPlanned}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Ready</span>
                  <span className="font-mono font-bold text-blue-600">
                    {thisWeekStats.ready}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Overdue</span>
                  <span className="font-mono font-bold text-rose-500">
                    {thisWeekStats.overdue}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Profile Footer */}
          <div className="p-3 border-t border-slate-100 flex items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center ring-2 ring-blue-600/20 shrink-0">
                AD
              </div>
              <div className="min-w-0">
                <span className="block font-poppins font-semibold text-xs text-slate-900 truncate leading-tight">
                  Admin Rynertia
                </span>
                <span className="block font-mono text-[10px] text-slate-500 truncate">
                  admin@rynertia.id
                </span>
              </div>
            </div>

            <Link
              href="/dashboard/login"
              title="Keluar"
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
