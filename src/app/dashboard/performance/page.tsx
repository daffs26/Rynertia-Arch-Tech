'use client';

import React, { useState } from 'react';
import {
  Plus,
  Search,
  Filter,
  TrendingUp,
  BarChart3,
  Calendar,
  Share2,
  DollarSign,
  MousePointerClick,
  Eye,
  Edit3,
  X,
} from 'lucide-react';
import { initialBestPerformingData, BestPerformingItem } from '@/data/dashboardMockData';

export default function PerformanceTrackerPage() {
  const [data, setData] = useState<BestPerformingItem[]>(initialBestPerformingData);
  const [searchQuery, setSearchQuery] = useState('');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [rankingMetric, setRankingMetric] = useState<'engagement' | 'ctr' | 'clicks' | 'leads'>('engagement');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<BestPerformingItem | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    platform: 'LinkedIn Enterprise',
    views: 1000,
    clicks: 150,
    engagement: '10.5%',
    ctr: '6.2%',
    leads: 10,
    trackedValue: 'Rp 15.000.000',
    publishedDate: '20 Agu',
  });

  const filteredData = data.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform =
      platformFilter === 'all' || item.platform.toLowerCase().includes(platformFilter.toLowerCase());
    return matchesSearch && matchesPlatform;
  });

  const sortedRanking = [...data].sort((a, b) => {
    if (rankingMetric === 'engagement') {
      return parseFloat(b.engagement) - parseFloat(a.engagement);
    }
    if (rankingMetric === 'ctr') {
      return parseFloat(b.ctr) - parseFloat(a.ctr);
    }
    if (rankingMetric === 'clicks') {
      return b.clicks - a.clicks;
    }
    if (rankingMetric === 'leads') {
      return b.leads - a.leads;
    }
    return 0;
  });

  const totalClicks = data.reduce((acc, item) => acc + item.clicks, 0);
  const totalLeads = data.reduce((acc, item) => acc + item.leads, 0);

  const getPlatformBadge = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin enterprise':
      case 'linkedin':
        return (
          <span className="font-poppins text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80">
            LinkedIn
          </span>
        );
      case 'instagram business':
      case 'instagram':
        return (
          <span className="font-poppins text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200/80">
            Instagram
          </span>
        );
      case 'blog resmi':
      case 'blog':
        return (
          <span className="font-poppins text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            Blog
          </span>
        );
      case 'email buletin klien':
      case 'email':
        return (
          <span className="font-poppins text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/80">
            Email
          </span>
        );
      default:
        return (
          <span className="font-poppins text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
            {platform}
          </span>
        );
    }
  };

  const handleOpenAddModal = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      platform: 'LinkedIn Enterprise',
      views: 2500,
      clicks: 220,
      engagement: '11.4%',
      ctr: '5.8%',
      leads: 14,
      trackedValue: 'Rp 18.000.000',
      publishedDate: '20 Agu',
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: BestPerformingItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      platform: item.platform,
      views: item.views,
      clicks: item.clicks,
      engagement: item.engagement,
      ctr: item.ctr,
      leads: item.leads,
      trackedValue: item.trackedValue,
      publishedDate: item.publishedDate,
    });
    setIsModalOpen(true);
  };

  const handleSavePerformance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingItem) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                ...formData,
              }
            : item
        )
      );
    } else {
      const newItem: BestPerformingItem = {
        id: `bp-${Date.now()}`,
        ...formData,
      };
      setData((prev) => [newItem, ...prev]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Header matching video frame_007 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-slate-900 tracking-tight">
            Performance Tracker
          </h1>
          <p className="font-poppins text-xs text-slate-500 mt-1">
            Pelacakan metrik kinerja konten wawasan, efektivitas penawaran, dan perolehan prospek bisnis.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-poppins font-semibold text-xs shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ Log Performance</span>
        </button>
      </div>

      {/* 8 KPI Cards (2 rows of 4) matching video frame_007 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Row 1 */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Tracked Content
          </span>
          <div className="font-mono font-black text-3xl text-slate-900 tracking-tight">
            {data.length}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Best Platform
          </span>
          <div className="font-poppins font-bold text-xl text-slate-900 tracking-tight truncate">
            LinkedIn
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Best Content Type
          </span>
          <div className="font-poppins font-bold text-xl text-slate-900 tracking-tight truncate">
            Studi Kasus
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Top Campaign
          </span>
          <div className="font-poppins font-bold text-sm text-slate-900 tracking-tight truncate">
            Cloud Modernization
          </div>
        </div>

        {/* Row 2 */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Total Clicks
          </span>
          <div className="font-mono font-black text-3xl text-blue-600 tracking-tight">
            {totalClicks.toLocaleString('id-ID')}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Tracked Value
          </span>
          <div className="font-mono font-black text-2xl text-emerald-600 tracking-tight">
            Rp 108.000.000
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Average CTR
          </span>
          <div className="font-mono font-black text-3xl text-slate-900 tracking-tight">
            8.0%
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Total Leads / Prospek
          </span>
          <div className="font-mono font-black text-3xl text-slate-900 tracking-tight">
            {totalLeads}
          </div>
        </div>
      </div>

      {/* Split Layout: Best by Metric (Left) + Big Analytics Table (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Best by Metric card (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-poppins font-bold text-sm text-slate-900">
              Best by Metric
            </h3>
            <div className="relative">
              <select
                value={rankingMetric}
                onChange={(e) =>
                  setRankingMetric(e.target.value as 'engagement' | 'ctr' | 'clicks' | 'leads')
                }
                className="appearance-none bg-slate-50 border border-slate-200 text-[11px] font-poppins font-medium text-slate-700 pl-2.5 pr-7 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600/20 cursor-pointer"
              >
                <option value="engagement">Engagement Rate</option>
                <option value="ctr">Click-Through Rate (CTR)</option>
                <option value="clicks">Total Clicks</option>
                <option value="leads">Total Leads</option>
              </select>
              <Filter className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Numbered Ranking List matching video */}
          <div className="space-y-3 pt-1">
            {sortedRanking.map((item, idx) => {
              let displayVal = item.engagement;
              if (rankingMetric === 'ctr') displayVal = item.ctr;
              if (rankingMetric === 'clicks') displayVal = `${item.clicks} clicks`;
              if (rankingMetric === 'leads') displayVal = `${item.leads} leads`;

              return (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    <span className="font-mono font-bold text-xs text-slate-400 pt-0.5">
                      {idx + 1}.
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-poppins font-semibold text-xs text-slate-900 truncate leading-snug">
                        {item.title}
                      </h4>
                      <span className="font-poppins text-[10px] text-slate-400 block truncate mt-0.5">
                        {item.platform}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono font-bold text-xs text-blue-600 shrink-0">
                    {displayVal}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Big Analytics Table (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
          {/* Table Header Filter Bar */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari konten dalam tabel..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>

            <div className="relative">
              <select
                value={platformFilter}
                onChange={(e) => setPlatformFilter(e.target.value)}
                className="appearance-none bg-slate-50 border border-slate-200 text-xs font-poppins font-medium text-slate-700 pl-3 pr-8 py-1.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 cursor-pointer"
              >
                <option value="all">Semua Platform</option>
                <option value="linkedin">LinkedIn</option>
                <option value="instagram">Instagram</option>
                <option value="blog">Blog Resmi</option>
                <option value="email">Email</option>
              </select>
              <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Table Responsive Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70 text-[10px] font-poppins font-semibold uppercase tracking-wider text-slate-500">
                  <th className="py-3 px-4">Konten</th>
                  <th className="py-3 px-3">Platform</th>
                  <th className="py-3 px-3">Terbit</th>
                  <th className="py-3 px-3 text-right">Views</th>
                  <th className="py-3 px-3 text-right">Eng.</th>
                  <th className="py-3 px-3 text-right">CTR</th>
                  <th className="py-3 px-3 text-right">Clicks</th>
                  <th className="py-3 px-3 text-right">Leads</th>
                  <th className="py-3 px-3 text-right">Nilai Prospek</th>
                  <th className="py-3 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-poppins">
                {filteredData.map((item) => {
                  const initials = item.title.slice(0, 2).toUpperCase();

                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50/70 transition-colors group"
                    >
                      <td className="py-3 px-4 max-w-[200px]">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-mono font-bold text-[10px] flex items-center justify-center shrink-0 border border-blue-200/50">
                            {initials}
                          </div>
                          <span className="font-semibold text-slate-900 truncate block">
                            {item.title}
                          </span>
                        </div>
                      </td>

                      <td className="py-3 px-3 shrink-0">
                        {getPlatformBadge(item.platform)}
                      </td>

                      <td className="py-3 px-3 font-mono text-[11px] text-slate-500 shrink-0">
                        {item.publishedDate}
                      </td>

                      <td className="py-3 px-3 font-mono text-[11px] text-slate-700 text-right">
                        {item.views.toLocaleString('id-ID')}
                      </td>

                      <td className="py-3 px-3 font-mono text-[11px] font-semibold text-emerald-600 text-right">
                        {item.engagement}
                      </td>

                      <td className="py-3 px-3 font-mono text-[11px] text-slate-700 text-right">
                        {item.ctr}
                      </td>

                      <td className="py-3 px-3 font-mono text-[11px] text-blue-600 font-semibold text-right">
                        {item.clicks.toLocaleString('id-ID')}
                      </td>

                      <td className="py-3 px-3 font-mono text-[11px] font-bold text-slate-900 text-right">
                        {item.leads}
                      </td>

                      <td className="py-3 px-3 font-mono text-[11px] text-emerald-700 font-medium text-right shrink-0">
                        {item.trackedValue}
                      </td>

                      <td className="py-3 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => handleOpenEditModal(item)}
                          className="px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 font-poppins text-[11px] font-medium transition-colors"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Log / Edit Performance */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs"
        >
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-poppins font-bold text-base text-slate-900">
                {editingItem ? 'Edit Data Performa' : 'Log Performa Konten'}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePerformance} className="space-y-4">
              <div>
                <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                  Judul Konten
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Contoh: Modernisasi Core Banking"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    Platform
                  </label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-white"
                  >
                    <option value="LinkedIn Enterprise">LinkedIn Enterprise</option>
                    <option value="Instagram Business">Instagram Business</option>
                    <option value="Blog Resmi">Blog Resmi</option>
                    <option value="Email Buletin Klien">Email Buletin Klien</option>
                  </select>
                </div>
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    Tanggal Terbit
                  </label>
                  <input
                    type="text"
                    value={formData.publishedDate}
                    onChange={(e) => setFormData({ ...formData, publishedDate: e.target.value })}
                    placeholder="Contoh: 15 Agu"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    Tayangan (Views)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.views}
                    onChange={(e) =>
                      setFormData({ ...formData, views: parseInt(e.target.value) || 0 })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    Klik Tautan (Clicks)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.clicks}
                    onChange={(e) =>
                      setFormData({ ...formData, clicks: parseInt(e.target.value) || 0 })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    Engagement Rate
                  </label>
                  <input
                    type="text"
                    value={formData.engagement}
                    onChange={(e) => setFormData({ ...formData, engagement: e.target.value })}
                    placeholder="12.5%"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    CTR (%)
                  </label>
                  <input
                    type="text"
                    value={formData.ctr}
                    onChange={(e) => setFormData({ ...formData, ctr: e.target.value })}
                    placeholder="6.0%"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    Total Prospek / Leads
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.leads}
                    onChange={(e) =>
                      setFormData({ ...formData, leads: parseInt(e.target.value) || 0 })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    Estimasi Nilai Prospek
                  </label>
                  <input
                    type="text"
                    value={formData.trackedValue}
                    onChange={(e) => setFormData({ ...formData, trackedValue: e.target.value })}
                    placeholder="Rp 25.000.000"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-poppins font-semibold transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-poppins font-semibold transition-colors shadow-xs"
                >
                  Simpan Performa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
