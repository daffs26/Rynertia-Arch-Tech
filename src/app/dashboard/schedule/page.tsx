'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Calendar as CalendarIcon,
  CheckCircle2,
  AlertCircle,
  Clock,
  Layers,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { initialCalendarEventsData, CalendarEventItem } from '@/data/dashboardMockData';

export default function ContentCalendarPage() {
  const [currentMonth, setCurrentMonth] = useState('Agustus 2026');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [events, setEvents] = useState<CalendarEventItem[]>(initialCalendarEventsData);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEventItem | null>(null);

  // Month grid definition for August 2026 (starts Saturday 1st, so Mon-Fri of prev month: 27-31)
  const daysInGrid = [
    { day: 27, isCurrentMonth: false },
    { day: 28, isCurrentMonth: false },
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    { day: 31, isCurrentMonth: true },
    { day: 1, isCurrentMonth: false },
    { day: 2, isCurrentMonth: false },
    { day: 3, isCurrentMonth: false },
    { day: 4, isCurrentMonth: false },
    { day: 5, isCurrentMonth: false },
    { day: 6, isCurrentMonth: false },
  ];

  const filteredEvents = events.filter((ev) => {
    if (selectedPlatform === 'all') return true;
    return ev.platform.toLowerCase().includes(selectedPlatform.toLowerCase());
  });

  const getEventsForDay = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return [];
    return filteredEvents.filter((ev) => ev.day === day);
  };

  const getPlatformBorderClass = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return 'border-l-rose-500 bg-rose-50/70 text-slate-800 hover:bg-rose-100/70';
      case 'linkedin':
        return 'border-l-blue-600 bg-blue-50/70 text-slate-800 hover:bg-blue-100/70';
      case 'tiktok':
        return 'border-l-slate-900 bg-slate-100/80 text-slate-800 hover:bg-slate-200/80';
      case 'email':
        return 'border-l-purple-600 bg-purple-50/70 text-slate-800 hover:bg-purple-100/70';
      case 'blog':
        return 'border-l-emerald-600 bg-emerald-50/70 text-slate-800 hover:bg-emerald-100/70';
      default:
        return 'border-l-blue-500 bg-blue-50/70 text-slate-800 hover:bg-blue-100/70';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Actions matching video */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-slate-900 tracking-tight">
            Content Calendar
          </h1>
          <p className="font-poppins text-xs text-slate-500 mt-1">
            Visualisasikan jadwal publikasi wawasan teknologi, portofolio, dan kampanye media sosial.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="relative">
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="appearance-none bg-white border border-slate-200 text-xs font-poppins font-medium text-slate-700 pl-3 pr-8 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 shadow-2xs cursor-pointer"
            >
              <option value="all">Semua Saluran</option>
              <option value="linkedin">LinkedIn</option>
              <option value="instagram">Instagram</option>
              <option value="tiktok">TikTok</option>
              <option value="email">Email Buletin</option>
              <option value="blog">Blog Resmi</option>
            </select>
            <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <Link
            href="/dashboard/content"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium text-xs shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Konten</span>
          </Link>
        </div>
      </div>

      {/* Main 2-Column Calendar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left: Monthly Calendar (3 Cols) */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col">
          {/* Calendar Month Navigation Bar */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                title="Bulan sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-poppins font-bold text-sm sm:text-base text-slate-900 px-2">
                {currentMonth}
              </span>
              <button
                type="button"
                className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                title="Bulan selanjutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-poppins font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                Hari Ini
              </button>
              <span className="hidden sm:inline-block font-mono text-[11px] text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60">
                WIB (GMT+7)
              </span>
            </div>
          </div>

          {/* Weekday Column Headers */}
          <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50/70 text-center py-2.5">
            {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day) => (
              <span
                key={day}
                className="font-poppins font-semibold text-[11px] uppercase tracking-wider text-slate-500"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Days Grid Cells */}
          <div className="grid grid-cols-7 divide-x divide-y divide-slate-100 min-h-[580px] auto-rows-fr">
            {daysInGrid.map((item, idx) => {
              const dayEvents = getEventsForDay(item.day, item.isCurrentMonth);
              const isToday = item.day === 20 && item.isCurrentMonth;

              return (
                <div
                  key={`${item.day}-${idx}`}
                  className={`p-1.5 sm:p-2 min-h-[96px] flex flex-col justify-between transition-colors ${
                    item.isCurrentMonth
                      ? 'bg-white hover:bg-slate-50/50'
                      : 'bg-slate-50/40 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center justify-center font-mono text-xs font-bold w-6 h-6 rounded-full ${
                        isToday
                          ? 'bg-blue-600 text-white shadow-2xs'
                          : item.isCurrentMonth
                          ? 'text-slate-700'
                          : 'text-slate-300'
                      }`}
                    >
                      {item.day}
                    </span>
                    {dayEvents.length > 0 && (
                      <span className="font-mono text-[9px] text-slate-400 font-semibold hidden sm:inline">
                        {dayEvents.length} post
                      </span>
                    )}
                  </div>

                  {/* Scheduled Items Inside Day */}
                  <div className="space-y-1 mt-1 overflow-hidden">
                    {dayEvents.map((ev) => (
                      <button
                        key={ev.id}
                        type="button"
                        onClick={() => setSelectedEvent(ev)}
                        className={`w-full text-left px-2 py-1 rounded-md text-[10px] font-poppins border-l-3 truncate transition-all shadow-2xs cursor-pointer block ${getPlatformBorderClass(
                          ev.platform
                        )}`}
                      >
                        <span className="font-semibold block truncate">{ev.title}</span>
                      </button>
                    ))}
                  </div>

                  <div />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel: Side Status & Cards matching video */}
        <div className="space-y-4">
          {/* Card 1: Unscheduled Content */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <span className="block font-poppins font-bold text-xs text-slate-700 mb-1">
              Unscheduled Content
            </span>
            <div className="font-mono font-black text-3xl text-slate-900 tracking-tight my-2">
              0
            </div>
            <p className="font-poppins text-[11px] text-slate-500 leading-relaxed">
              Tambahkan tanggal target publikasi pada draft untuk menampilkan jadwal di kalender.
            </p>
          </div>

          {/* Card 2: Ready to Publish */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-poppins font-bold text-xs text-slate-700">
                Ready to Publish
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            </div>
            <div className="font-mono font-black text-3xl text-blue-600 tracking-tight my-2">
              3
            </div>

            <div className="mt-3 space-y-2 pt-2 border-t border-slate-100">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] font-poppins">
                <span className="font-semibold text-slate-800 block truncate">
                  Checklist Server & Migrasi Cloud Mingguan
                </span>
                <span className="font-mono text-[10px] text-blue-600 font-medium">
                  Instagram · Target 25 Agu
                </span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] font-poppins">
                <span className="font-semibold text-slate-800 block truncate">
                  Sorotan Portofolio Solusi Telemedisin
                </span>
                <span className="font-mono text-[10px] text-blue-600 font-medium">
                  Instagram · Target 31 Agu
                </span>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] font-poppins">
                <span className="font-semibold text-slate-800 block truncate">
                  Pembaruan Keamanan API Microservices
                </span>
                <span className="font-mono text-[10px] text-blue-600 font-medium">
                  LinkedIn · Target 2 Sep
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Overdue or Missed */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <span className="block font-poppins font-bold text-xs text-rose-700 mb-1">
              Overdue or Missed
            </span>
            <div className="font-mono font-black text-3xl text-rose-600 tracking-tight my-2">
              1
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100">
              <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-200/80 text-[11px] font-poppins">
                <span className="font-semibold text-rose-900 block truncate">
                  Pemilihan Palet Warna Antarmuka SaaS
                </span>
                <span className="font-mono text-[10px] text-rose-600 font-medium block mt-0.5">
                  Terlambat 2 hari · Harap reschedule
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Event Quick Modal / Detail */}
      {selectedEvent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-2xl border border-slate-200/80 p-6 max-w-md w-full shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80">
                {selectedEvent.platform}
              </span>
              <span className="font-mono text-xs text-slate-500 font-medium">
                {selectedEvent.day} Agustus 2026
              </span>
            </div>

            <h3 className="font-poppins font-bold text-base text-slate-900">
              {selectedEvent.title}
            </h3>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-poppins space-y-1.5 text-slate-600">
              <div className="flex justify-between">
                <span>Status Penerbitan:</span>
                <span className="font-mono font-bold text-slate-900">{selectedEvent.status}</span>
              </div>
              <div className="flex justify-between">
                <span>Waktu Distribusi:</span>
                <span className="font-mono font-medium text-slate-900">10:00 WIB</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-poppins font-semibold transition-colors"
              >
                Tutup
              </button>
              <Link
                href="/dashboard/content"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-poppins font-semibold transition-colors shadow-xs"
              >
                Buka Editor
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
