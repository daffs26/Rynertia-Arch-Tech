'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Plus,
  BarChart3,
  Calendar,
  Layers,
  FileText,
  Share2,
  ExternalLink,
  Brain,
  TrendingUp,
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Overdue':
        return (
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200/80">
            Overdue
          </span>
        );
      case 'In Production':
        return (
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200/80">
            In Production
          </span>
        );
      case 'Ready':
        return (
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/80">
            Ready
          </span>
        );
      case 'Draft':
        return (
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80">
            Draft
          </span>
        );
      case 'Idea':
        return (
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200/80">
            Idea
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-5">
      {/* 4-COLUMN BENTO GRID (MATCHING FRAME 1 FROM USER REFERENCE VIDEO) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-5">
        
        {/* LEFT AREA: 3 COLUMNS OF CARDS */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-5">
          
          {/* TOP ROW: Needs Creation | Ready to Publish | AI Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            
            {/* CARD 1: Needs Creation */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-poppins font-bold text-sm text-slate-900">
                    Needs Creation
                  </h3>
                  <Link
                    href="/dashboard/content"
                    className="text-[11px] font-poppins font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    Production board
                  </Link>
                </div>

                <div className="space-y-3.5">
                  {initialNeedsCreationData.map((item) => (
                    <div
                      key={item.id}
                      className="group flex items-start justify-between gap-2 pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <div className="shrink-0 mt-0.5">
                          {getPlatformIcon(item.platform)}
                        </div>
                        <div className="min-w-0">
                          <p className="font-poppins text-xs font-semibold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </p>
                          <span className="font-poppins text-[10px] text-slate-400 block truncate">
                            {item.format}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end shrink-0 gap-1">
                        <span className="font-mono text-[10px] text-slate-400">
                          {item.date}
                        </span>
                        {getStatusBadge(item.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 2: Ready to Publish */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-poppins font-bold text-sm text-slate-900">
                    Ready to Publish
                  </h3>
                  <Link
                    href="/dashboard/schedule"
                    className="text-[11px] font-poppins font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    View schedule
                  </Link>
                </div>

                <div className="space-y-3.5">
                  {initialReadyToPublishData.map((item) => (
                    <div
                      key={item.id}
                      className="group flex items-start justify-between gap-2 pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <div className="shrink-0 mt-0.5">
                          {getPlatformIcon(item.platform)}
                        </div>
                        <div className="min-w-0">
                          <p className="font-poppins text-xs font-semibold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </p>
                          <span className="font-poppins text-[10px] text-slate-400 block truncate">
                            {item.format}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end shrink-0 gap-1">
                        <span className="font-mono text-[10px] text-slate-400">
                          {item.date}
                        </span>
                        {getStatusBadge(item.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 3: AI Recommendations */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <Brain className="w-4 h-4 text-blue-600" />
                    <h3 className="font-poppins font-bold text-sm text-slate-900">
                      AI Recommendations
                    </h3>
                  </div>
                  <Link
                    href="/dashboard/insights"
                    className="text-[11px] font-poppins font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    View all
                  </Link>
                </div>

                {/* Empty State / Prompt Box from video */}
                <div className="rounded-xl border border-dashed border-slate-200 p-5 text-center my-auto flex flex-col items-center justify-center min-h-[220px]">
                  <p className="font-poppins text-xs text-slate-500 max-w-[220px] leading-relaxed mb-4">
                    Belum ada rekomendasi terbuka. Ekspor laporan data performa dan dapatkan umpan balik strategi.
                  </p>
                  <Link
                    href="/dashboard/insights"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 text-xs font-semibold font-poppins transition-colors shadow-2xs"
                  >
                    <span>Buka AI Insights</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: Active Campaigns | Platform Coverage | Best Performing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            
            {/* CARD 4: Active Campaigns */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
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
                    <div key={camp.id} className="space-y-2 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-poppins font-semibold text-xs text-slate-900">
                            {camp.title}
                          </h4>
                          <span className="font-poppins text-[10px] text-slate-400">
                            {camp.subtitle}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="font-mono text-xs font-bold text-slate-700">
                            {camp.progress}%
                          </span>
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                            Active
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-500"
                          style={{ width: `${camp.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 5: Platform Coverage */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-poppins font-bold text-sm text-slate-900">
                    Platform Coverage
                  </h3>
                </div>

                <div className="space-y-3">
                  {initialPlatformCoverageData.map((plat) => (
                    <div
                      key={plat.platform}
                      className="flex items-center justify-between pb-2 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div>
                        <h4 className="font-poppins font-semibold text-xs text-slate-900 leading-tight">
                          {plat.platform}
                        </h4>
                        <span className="font-poppins text-[10px] text-slate-400">
                          {plat.plannedCount} direncanakan minggu ini
                        </span>
                      </div>
                      <div>
                        {getPlatformIcon(plat.platform)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 6: Best Performing */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
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

                <div className="space-y-3">
                  {initialBestPerformingData.slice(0, 4).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div className="min-w-0">
                        <h4 className="font-poppins font-semibold text-xs text-slate-900 truncate">
                          {item.title}
                        </h4>
                        <span className="font-poppins text-[10px] text-slate-400">
                          {item.platform} · <span className="font-mono">{item.clicks} klik</span>
                        </span>
                      </div>
                      <span className="font-mono font-bold text-xs text-slate-900 shrink-0">
                        {item.trackedValue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: Unscheduled | Status Overview | Quick Add */}
        <div className="space-y-4 sm:space-y-5">
          
          {/* CARD 7: Unscheduled */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="font-poppins font-bold text-xs text-slate-900 mb-1">
              Unscheduled
            </h3>
            <span className="font-mono font-bold text-3xl text-slate-900 block my-1">
              {statusOverviewStats.unscheduled}
            </span>
            <p className="font-poppins text-[11px] text-slate-400">
              Konten tanpa jadwal penerbitan resmi
            </p>
          </div>

          {/* CARD 8: Status Overview */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="font-poppins font-bold text-xs text-slate-900 mb-3">
              Status Overview
            </h3>

            <div className="space-y-2 text-xs font-poppins">
              <div className="flex items-center justify-between text-slate-600">
                <span>Idea</span>
                <span className="font-mono font-bold text-slate-900">{statusOverviewStats.idea}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Draft</span>
                <span className="font-mono font-bold text-slate-900">{statusOverviewStats.draft}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>In Production</span>
                <span className="font-mono font-bold text-slate-900">{statusOverviewStats.inProduction}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Ready</span>
                <span className="font-mono font-bold text-slate-900">{statusOverviewStats.ready}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Scheduled</span>
                <span className="font-mono font-bold text-slate-900">{statusOverviewStats.scheduled}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Published</span>
                <span className="font-mono font-bold text-slate-900">{statusOverviewStats.published}</span>
              </div>
            </div>
          </div>

          {/* CARD 9: Quick Add Actions */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="font-poppins font-bold text-xs text-slate-900 mb-3">
              Quick Add
            </h3>

            <div className="space-y-2">
              <Link
                href="/dashboard/content/new"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-poppins font-semibold shadow-2xs transition-all"
              >
                <Plus className="w-3.5 h-3.5 text-slate-500" />
                <span>Add Content Idea</span>
              </Link>
              <Link
                href="/dashboard/content/new"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-poppins font-semibold shadow-2xs transition-all"
              >
                <Plus className="w-3.5 h-3.5 text-slate-500" />
                <span>Create New Post</span>
              </Link>
              <Link
                href="/dashboard/campaigns"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-poppins font-semibold shadow-2xs transition-all"
              >
                <Plus className="w-3.5 h-3.5 text-slate-500" />
                <span>Add Campaign</span>
              </Link>
              <Link
                href="/dashboard/performance"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-poppins font-semibold shadow-2xs transition-all"
              >
                <BarChart3 className="w-3.5 h-3.5 text-slate-500" />
                <span>Log Performance</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
