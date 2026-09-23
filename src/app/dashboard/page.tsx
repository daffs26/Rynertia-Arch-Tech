'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Layers,
  BarChart3,
  Lightbulb,
  TrendingUp,
  FolderKanban,
  Clock,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Plus,
  Brain,
  ExternalLink,
  Kanban,
} from 'lucide-react';
import {
  initialNeedsCreationData,
  initialReadyToPublishData,
  initialCampaignsData,
  initialPlatformCoverageData,
  initialBestPerformingData,
  statusOverviewStats,
} from '@/data/dashboardMockData';

export default function DashboardOverviewPage() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [showDone, setShowDone] = useState(false);

  // 7-day focus for "This Week's Content"
  const weekDays = [
    { dayName: 'Mon', dateStr: 'Aug 17', status: 'Open', hasEvent: false, eventTitle: '', platform: '' },
    { dayName: 'Tue', dateStr: 'Aug 18', status: 'Open', hasEvent: false, eventTitle: '', platform: '' },
    { dayName: 'Wed', dateStr: 'Aug 19', status: 'Open', hasEvent: true, eventTitle: 'Email: Buletin Klien FinTech', platform: 'Email' },
    { dayName: 'Thu', dateStr: 'Aug 20', status: 'Open', hasEvent: false, eventTitle: '', platform: '' },
    { dayName: 'Fri', dateStr: 'Aug 21', status: 'Open', hasEvent: false, eventTitle: '', platform: '' },
    { dayName: 'Sat', dateStr: 'Aug 22', status: 'Open', hasEvent: false, eventTitle: '', platform: '' },
    { dayName: 'Sun', dateStr: 'Aug 23', status: 'Open', hasEvent: true, eventTitle: 'Instagram: Checklist Server', platform: 'Instagram' },
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return (
          <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
            IG
          </span>
        );
      case 'tiktok':
        return (
          <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
            TK
          </span>
        );
      case 'linkedin':
      case 'linkedin enterprise':
        return (
          <span className="w-5 h-5 rounded-full bg-[#0A66C2] text-white flex items-center justify-center text-[10px] font-bold">
            in
          </span>
        );
      case 'email':
      case 'email newsletter':
      case 'email buletin klien':
        return (
          <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
            @
          </span>
        );
      case 'blog':
      case 'blog resmi':
      case 'blog & wawasan resmi':
        return (
          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
            B
          </span>
        );
      default:
        return (
          <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
            R
          </span>
        );
    }
  };

  const getSmallPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return (
          <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center text-[7px] font-bold shrink-0">
            IG
          </span>
        );
      case 'tiktok':
        return (
          <span className="w-3.5 h-3.5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[7px] font-bold shrink-0">
            TK
          </span>
        );
      case 'linkedin':
      case 'linkedin enterprise':
        return (
          <span className="w-3.5 h-3.5 rounded-full bg-[#0A66C2] text-white flex items-center justify-center text-[7px] font-bold shrink-0">
            in
          </span>
        );
      case 'email':
      case 'email newsletter':
      case 'email buletin klien':
        return (
          <span className="w-3.5 h-3.5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[7px] font-bold shrink-0">
            @
          </span>
        );
      case 'blog':
      case 'blog resmi':
      case 'blog & wawasan resmi':
        return (
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[7px] font-bold shrink-0">
            B
          </span>
        );
      default:
        return (
          <span className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[7px] font-bold shrink-0">
            R
          </span>
        );
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Overdue':
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200/80 shrink-0">
            Overdue
          </span>
        );
      case 'In Production':
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 shrink-0">
            In Production
          </span>
        );
      case 'Ready':
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80 shrink-0">
            Ready
          </span>
        );
      case 'Draft':
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80 shrink-0">
            Draft
          </span>
        );
      case 'Idea':
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/80 shrink-0">
            Idea
          </span>
        );
      default:
        return (
          <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80 shrink-0">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: 8 TOP METRIC KPI CARDS (2 ROWS OF 4)
          Matching user screenshot exactly
          ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* ROW 1 CARD 1: Planned This Month */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5 transition-all hover:border-slate-300">
          <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block font-poppins font-medium text-xs text-slate-500 truncate">
              Planned This Month
            </span>
            <div className="font-mono font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-0.5">
              16
            </div>
            <span className="block font-poppins text-[11px] text-slate-400 mt-0.5 truncate">
              Content items
            </span>
          </div>
        </div>

        {/* ROW 1 CARD 2: Ready to Publish */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5 transition-all hover:border-slate-300">
          <div className="w-10 h-10 rounded-xl bg-slate-100/90 border border-slate-200/80 text-slate-600 flex items-center justify-center shrink-0">
            <Kanban className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block font-poppins font-medium text-xs text-slate-500 truncate">
              Ready to Publish
            </span>
            <div className="font-mono font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-0.5">
              3
            </div>
            <span className="block font-poppins text-[11px] text-slate-400 mt-0.5 truncate">
              Awaiting schedule
            </span>
          </div>
        </div>

        {/* ROW 1 CARD 3: Scheduled This Week */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5 transition-all hover:border-slate-300">
          <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block font-poppins font-medium text-xs text-slate-500 truncate">
              Scheduled This Week
            </span>
            <div className="font-mono font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-0.5">
              2
            </div>
            <span className="block font-poppins text-[11px] text-slate-400 mt-0.5 truncate">
              Upcoming posts
            </span>
          </div>
        </div>

        {/* ROW 1 CARD 4: Drafts In Progress */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5 transition-all hover:border-slate-300">
          <div className="w-10 h-10 rounded-xl bg-amber-50/80 border border-amber-200/60 text-amber-600 flex items-center justify-center shrink-0">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block font-poppins font-medium text-xs text-slate-500 truncate">
              Drafts In Progress
            </span>
            <div className="font-mono font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-0.5">
              6
            </div>
            <span className="block font-poppins text-[11px] text-slate-400 mt-0.5 truncate">
              Being created
            </span>
          </div>
        </div>

        {/* ROW 2 CARD 5: Published This Month */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5 transition-all hover:border-slate-300">
          <div className="w-10 h-10 rounded-xl bg-emerald-50/80 border border-emerald-200/60 text-emerald-600 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block font-poppins font-medium text-xs text-slate-500 truncate">
              Published This Month
            </span>
            <div className="font-mono font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-0.5">
              7
            </div>
            <span className="block font-poppins text-[11px] text-slate-400 mt-0.5 truncate">
              Live content
            </span>
          </div>
        </div>

        {/* ROW 2 CARD 6: Active Campaigns */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5 transition-all hover:border-slate-300">
          <div className="w-10 h-10 rounded-xl bg-purple-50/80 border border-purple-200/60 text-purple-600 flex items-center justify-center shrink-0">
            <FolderKanban className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block font-poppins font-medium text-xs text-slate-500 truncate">
              Active Campaigns
            </span>
            <div className="font-mono font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-0.5">
              2
            </div>
            <span className="block font-poppins text-[11px] text-slate-400 mt-0.5 truncate">
              Goals in motion
            </span>
          </div>
        </div>

        {/* ROW 2 CARD 7: Overdue Content */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5 transition-all hover:border-rose-200">
          <div className="w-10 h-10 rounded-xl bg-rose-50/80 border border-rose-200/60 text-rose-600 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block font-poppins font-medium text-xs text-slate-500 truncate">
              Overdue Content
            </span>
            <div className="font-mono font-bold text-2xl sm:text-3xl text-rose-600 tracking-tight mt-0.5">
              1
            </div>
            <span className="block font-poppins text-[11px] text-rose-500/80 mt-0.5 truncate">
              Needs attention
            </span>
          </div>
        </div>

        {/* ROW 2 CARD 8: Best Performer */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5 transition-all hover:border-slate-300">
          <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <DollarSign className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block font-poppins font-medium text-xs text-slate-500 truncate">
              Best Performer
            </span>
            <div className="font-mono font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-0.5">
              $1,240
            </div>
            <span className="block font-poppins text-[11px] text-slate-400 mt-0.5 truncate">
              Revenue tracked
            </span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THIS WEEK'S CONTENT & NEXT TO PUBLISH
          Matching user screenshot exactly
          ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-stretch">
        {/* Left: This Week's Content (3 Cols) */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div>
                <h3 className="font-poppins font-bold text-base text-slate-900">
                  This Week's Content
                </h3>
                <p className="font-poppins text-xs text-slate-500 mt-0.5">
                  A focused publishing agenda for the next seven days.
                </p>
              </div>

              <Link
                href="/dashboard/schedule"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-poppins text-xs font-semibold transition-colors shadow-2xs self-start sm:self-auto cursor-pointer"
              >
                <span>Open calendar</span>
              </Link>
            </div>

            {/* Horizontal 7-Day Slider/Cards matching screenshot */}
            <div className="overflow-x-auto pb-2 -mx-1 px-1">
              <div className="grid grid-cols-7 gap-2 min-w-[620px]">
                {weekDays.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border flex flex-col justify-between min-h-[95px] transition-all ${
                      item.hasEvent
                        ? 'bg-blue-50/50 border-blue-200/80'
                        : 'bg-slate-50/60 border-slate-200/60 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-poppins font-bold text-xs text-slate-800">
                        {item.dayName}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        {item.dateStr}
                      </span>
                    </div>

                    {item.hasEvent ? (
                      <div className="mt-2">
                        <span className="font-poppins font-medium text-[10px] text-blue-700 block line-clamp-2 leading-tight">
                          {item.eventTitle}
                        </span>
                      </div>
                    ) : (
                      <div className="mt-auto">
                        <span className="font-poppins text-[11px] text-slate-400 block">
                          Open
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slider bottom scrollbar and controls */}
          <div className="flex items-center gap-2 pt-3 border-t border-slate-100 mt-2">
            <button
              type="button"
              onClick={() => setWeekOffset((prev) => prev - 1)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="Minggu sebelumnya"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <div className="flex-1 bg-slate-200/80 h-1.5 rounded-full overflow-hidden">
              <div className="w-3/4 bg-slate-400 h-full rounded-full" />
            </div>
            <button
              type="button"
              onClick={() => setWeekOffset((prev) => prev + 1)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="Minggu berikutnya"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Next to Publish (1 Col) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div>
            <span className="font-poppins font-bold text-xs text-slate-500 uppercase tracking-wider block">
              Next to Publish
            </span>

            <div className="font-mono font-bold text-2xl sm:text-3xl text-blue-600 tracking-tight mt-2 mb-1">
              Aug 24
            </div>

            <h4 className="font-poppins font-semibold text-sm text-slate-900 leading-snug mt-2">
              Three planner pages I use every week
            </h4>
          </div>

          <div className="pt-4 mt-auto">
            <span className="font-poppins text-xs text-slate-400 flex items-center gap-1.5">
              <span className="font-medium text-slate-600">TikTok</span>
              <span>·</span>
              <span className="text-slate-400">Scheduled</span>
            </span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: BENTO OVERVIEW GRID
          Matching video Frame 1 exactly
          ───────────────────────────────────────────────────────────── */}
      <div className="space-y-6">
        {/* ROW 1 of Bento: Needs Creation, Ready to Publish, AI Recommendations, Unscheduled & Quick Add */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {/* CARD 1: Needs Creation */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col h-full">
            <div>
              <div className="flex items-center justify-between mb-3 pb-1 border-b border-slate-100">
                <h3 className="font-poppins font-bold text-sm text-slate-900">
                  Needs Creation
                </h3>
                <Link
                  href="/dashboard/content"
                  className="text-[11px] font-poppins font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-2xs whitespace-nowrap"
                >
                  Production board
                </Link>
              </div>

              <div className="divide-y divide-slate-100">
                {initialNeedsCreationData.map((item) => (
                  <div key={item.id} className="py-2.5">
                    {/* Line 1: Title on left, Date & Badge on right */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-poppins font-medium text-xs text-slate-900 truncate">
                        {item.title}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="font-mono text-[10px] text-slate-400">
                          {item.date}
                        </span>
                        {getStatusBadge(item.status)}
                      </div>
                    </div>

                    {/* Line 2: Small circular icon + Platform + Format */}
                    <div className="flex items-center gap-1.5 mt-1 text-slate-400">
                      {getSmallPlatformIcon(item.platform)}
                      <span className="font-poppins text-[10px] text-slate-400 truncate">
                        {item.platform} · {item.format}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2: Ready to Publish */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col h-full">
            <div>
              <div className="flex items-center justify-between mb-3 pb-1 border-b border-slate-100">
                <h3 className="font-poppins font-bold text-sm text-slate-900">
                  Ready to Publish
                </h3>
                <Link
                  href="/dashboard/schedule"
                  className="text-[11px] font-poppins font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-2xs whitespace-nowrap"
                >
                  View schedule
                </Link>
              </div>

              <div className="divide-y divide-slate-100">
                {initialReadyToPublishData.map((item) => (
                  <div key={item.id} className="py-2.5">
                    {/* Line 1: Title on left, Date & Badge on right */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-poppins font-medium text-xs text-slate-900 truncate">
                        {item.title}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="font-mono text-[10px] text-slate-400">
                          {item.date}
                        </span>
                        {getStatusBadge(item.status)}
                      </div>
                    </div>

                    {/* Line 2: Small circular icon + Platform + Format */}
                    <div className="flex items-center gap-1.5 mt-1 text-slate-400">
                      {getSmallPlatformIcon(item.platform)}
                      <span className="font-poppins text-[10px] text-slate-400 truncate">
                        {item.platform} · {item.format}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 3: AI Recommendations */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col h-full">
            <div>
              <div className="flex items-center justify-between mb-3 pb-1 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Brain className="w-4 h-4 text-blue-600 shrink-0" />
                  <h3 className="font-poppins font-bold text-sm text-slate-900">
                    AI Recommendations
                  </h3>
                </div>
                <Link
                  href="/dashboard/insights"
                  className="text-[11px] font-poppins font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-2xs whitespace-nowrap"
                >
                  View all
                </Link>
              </div>

              {/* Active Checklist Items matching Gambar 2 */}
              <div className="space-y-3 pt-1">
                {/* Item 1 */}
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="rec-1"
                    defaultChecked={false}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 accent-blue-600 focus:ring-0 mt-0.5 cursor-pointer shrink-0"
                  />
                  <label htmlFor="rec-1" className="min-w-0 cursor-pointer select-none">
                    <span className="font-poppins font-medium text-xs text-slate-900 block leading-snug">
                      Add a clear CTA to testimonial-style posts
                    </span>
                    <span className="font-poppins text-[10px] text-slate-400 block mt-0.5">
                      From: &quot;Email leads winning&quot; · Aug 18
                    </span>
                  </label>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-2.5 pt-2.5 border-t border-slate-100">
                  <input
                    type="checkbox"
                    id="rec-2"
                    defaultChecked={false}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 accent-blue-600 focus:ring-0 mt-0.5 cursor-pointer shrink-0"
                  />
                  <label htmlFor="rec-2" className="min-w-0 cursor-pointer select-none">
                    <span className="font-poppins font-medium text-xs text-slate-900 block leading-snug">
                      Test brighter thumbnail colors on underperforming pins
                    </span>
                    <span className="font-poppins text-[10px] text-slate-400 block mt-0.5">
                      From: &quot;Pinterest search-style titles perform best&quot; · Aug 5
                    </span>
                  </label>
                </div>

                {/* Collapsible Completed Section */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowDone(!showDone)}
                    className="flex items-center gap-1.5 font-poppins font-semibold text-[11px] text-slate-400 hover:text-slate-600 transition-colors cursor-pointer select-none"
                  >
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        showDone ? 'rotate-90 text-slate-600' : ''
                      }`}
                    />
                    <span>DONE (2)</span>
                  </button>

                  {showDone && (
                    <div className="mt-2 space-y-1.5 pl-4">
                      <div className="text-[11px] font-poppins text-slate-400 line-through">
                        Promote summer digital planner sale on Instagram
                      </div>
                      <div className="text-[11px] font-poppins text-slate-400 line-through">
                        Draft LinkedIn thought leadership article on FinOps
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: Unscheduled & Status Overview & Quick Add */}
          <div className="space-y-4">
            {/* Unscheduled Mini Box */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <span className="block font-poppins font-bold text-xs text-slate-800">
                Unscheduled
              </span>
              <div className="font-mono font-bold text-3xl text-slate-900 tracking-tight my-1">
                {statusOverviewStats.unscheduled}
              </div>
              <p className="font-poppins text-[10px] text-slate-400">
                Content without a publish date
              </p>
            </div>

            {/* Status Overview Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <h4 className="font-poppins font-bold text-xs text-slate-900 mb-1.5">
                Status Overview
              </h4>
              <div className="divide-y divide-slate-100 text-xs font-poppins">
                <div className="flex items-center justify-between py-1.5 text-slate-600">
                  <span>Idea</span>
                  <span className="font-mono font-semibold text-slate-900">{statusOverviewStats.idea}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-slate-600">
                  <span>Draft</span>
                  <span className="font-mono font-semibold text-slate-900">{statusOverviewStats.draft}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-slate-600">
                  <span>In Production</span>
                  <span className="font-mono font-semibold text-slate-900">{statusOverviewStats.inProduction}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-slate-600">
                  <span>Ready</span>
                  <span className="font-mono font-semibold text-slate-900">{statusOverviewStats.ready}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-slate-600">
                  <span>Scheduled</span>
                  <span className="font-mono font-semibold text-slate-900">{statusOverviewStats.scheduled}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-slate-600">
                  <span>Published</span>
                  <span className="font-mono font-semibold text-slate-900">{statusOverviewStats.published}</span>
                </div>
              </div>
            </div>

            {/* Quick Add Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <h4 className="font-poppins font-bold text-xs text-slate-900 mb-2.5">
                Quick Add
              </h4>
              <div className="space-y-2">
                <Link
                  href="/dashboard/content"
                  className="w-full block text-center py-2 px-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-poppins text-xs font-medium transition-colors shadow-2xs"
                >
                  Add Content Idea
                </Link>
                <Link
                  href="/dashboard/content"
                  className="w-full block text-center py-2 px-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-poppins text-xs font-medium transition-colors shadow-2xs"
                >
                  Create New Post
                </Link>
                <Link
                  href="/dashboard/campaigns"
                  className="w-full block text-center py-2 px-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-poppins text-xs font-medium transition-colors shadow-2xs"
                >
                  Add Campaign
                </Link>
                <Link
                  href="/dashboard/performance"
                  className="w-full block text-center py-2 px-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-poppins text-xs font-medium transition-colors shadow-2xs"
                >
                  Log Performance
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 of Bento: Active Campaigns, Platform Coverage, Best Performing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {/* Active Campaigns Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-poppins font-bold text-sm text-slate-900">
                Active Campaigns
              </h3>
              <Link
                href="/dashboard/campaigns"
                className="text-[11px] font-poppins font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-2xs"
              >
                View all
              </Link>
            </div>

            <div className="space-y-4">
              {initialCampaignsData.slice(0, 2).map((camp) => (
                <div key={camp.id} className="space-y-1.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-poppins font-semibold text-xs text-slate-900 leading-snug">
                      {camp.title}
                    </h4>
                    <span className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 shrink-0">
                      {camp.status}
                    </span>
                  </div>

                  <span className="font-poppins text-[10px] text-slate-400 block truncate">
                    {camp.subtitle}
                  </span>

                  <div className="flex items-center justify-between pt-1 text-[11px] font-mono">
                    <span className="text-slate-500 font-medium">
                      {camp.publishedCount}/{camp.plannedCount} published
                    </span>
                    <span className="font-bold text-blue-600">{camp.progress}%</span>
                  </div>

                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all"
                      style={{ width: `${camp.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Coverage Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="font-poppins font-bold text-sm text-slate-900 mb-4">
              Platform Coverage
            </h3>

            <div className="space-y-3">
              {initialPlatformCoverageData.map((plat, idx) => (
                <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
                  <div>
                    <span className="font-poppins font-semibold text-xs text-slate-800 block">
                      {plat.platform}
                    </span>
                    <span className="font-poppins text-[10px] text-slate-400">
                      {plat.plannedCount} planned this week
                    </span>
                  </div>
                  {getPlatformIcon(plat.platform)}
                </div>
              ))}
            </div>
          </div>

          {/* Best Performing (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-poppins font-bold text-sm text-slate-900">
                Best Performing
              </h3>
              <Link
                href="/dashboard/performance"
                className="text-[11px] font-poppins font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-2xs"
              >
                View metrics
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {initialBestPerformingData.map((item) => (
                <div key={item.id} className="py-2.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    {getPlatformIcon(item.platform)}
                    <div className="min-w-0">
                      <h4 className="font-poppins font-semibold text-xs text-slate-900 truncate">
                        {item.title}
                      </h4>
                      <span className="font-mono text-[10px] text-slate-400 block">
                        {item.platform} · {item.clicks.toLocaleString('id-ID')} clicks
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-mono font-bold text-xs text-slate-900 block">
                      {item.trackedValue}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-600 font-semibold block">
                      {item.engagement} eng.
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
