'use client';

import React, { useState } from 'react';
import {
  Plus,
  Search,
  Filter,
  Layers,
  Calendar,
  CheckCircle2,
  Clock,
  Trash2,
  Edit3,
  X,
  TrendingUp,
} from 'lucide-react';
import { initialCampaignsData, ActiveCampaignItem } from '@/data/dashboardMockData';

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<ActiveCampaignItem[]>(initialCampaignsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Modal State for New/Edit Campaign
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<ActiveCampaignItem | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '1 Okt - 15 Nov · Target Bisnis Q4',
    dateRange: '1 Okt - 15 Nov',
    plannedCount: 6,
    publishedCount: 0,
    progress: 0,
    status: 'Planning' as 'Active' | 'Planning' | 'Completed',
    cta: 'Hubungi tim arsitek teknologi Rynertia',
    budget: 'Rp 10.000.000',
  });

  const filteredCampaigns = campaigns.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || c.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const activeCount = campaigns.filter((c) => c.status === 'Active').length;
  const planningCount = campaigns.filter((c) => c.status === 'Planning').length;
  const totalPublished = campaigns.reduce((acc, c) => acc + c.publishedCount, 0);

  const handleOpenAddModal = () => {
    setEditingCampaign(null);
    setFormData({
      title: '',
      subtitle: '1 Okt - 15 Nov · Target Bisnis Q4',
      dateRange: '1 Okt - 15 Nov',
      plannedCount: 6,
      publishedCount: 0,
      progress: 0,
      status: 'Planning',
      cta: 'Hubungi tim arsitek teknologi Rynertia',
      budget: 'Rp 10.000.000',
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (campaign: ActiveCampaignItem) => {
    setEditingCampaign(campaign);
    setFormData({
      title: campaign.title,
      subtitle: campaign.subtitle,
      dateRange: campaign.dateRange,
      plannedCount: campaign.plannedCount,
      publishedCount: campaign.publishedCount,
      progress: campaign.progress,
      status: campaign.status,
      cta: campaign.cta || 'Jadwalkan konsultasi arsitektur cloud',
      budget: campaign.budget || 'Rp 12.000.000',
    });
    setIsModalOpen(true);
  };

  const handleSaveCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const calculatedProgress =
      formData.plannedCount > 0
        ? Math.min(100, Math.round((formData.publishedCount / formData.plannedCount) * 100))
        : 0;

    if (editingCampaign) {
      setCampaigns((prev) =>
        prev.map((c) =>
          c.id === editingCampaign.id
            ? {
                ...c,
                ...formData,
                progress: calculatedProgress,
              }
            : c
        )
      );
    } else {
      const newCampaign: ActiveCampaignItem = {
        id: `camp-${Date.now()}`,
        ...formData,
        progress: calculatedProgress,
      };
      setCampaigns((prev) => [newCampaign, ...prev]);
    }
    setIsModalOpen(false);
  };

  const handleDeleteCampaign = (id: string) => {
    setCampaigns((prev) => prev.filter((c) => c.id !== id));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return (
          <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            Active
          </span>
        );
      case 'Planning':
        return (
          <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80">
            Planning
          </span>
        );
      case 'Completed':
        return (
          <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
            Completed
          </span>
        );
      default:
        return (
          <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Actions matching video frame_005 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-slate-900 tracking-tight">
            Campaigns
          </h1>
          <p className="font-poppins text-xs text-slate-500 mt-1">
            Hubungkan sasaran bisnis, penawaran solusi, konten terbit, dan tenggat waktu secara terpadu.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-poppins font-semibold text-xs shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Campaign</span>
        </button>
      </div>

      {/* 4 KPI Cards matching video top bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Active
          </span>
          <div className="font-mono font-black text-3xl text-slate-900 tracking-tight">
            {activeCount}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Planning
          </span>
          <div className="font-mono font-black text-3xl text-slate-900 tracking-tight">
            {planningCount}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Published Content
          </span>
          <div className="font-mono font-black text-3xl text-blue-600 tracking-tight">
            {totalPublished}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <span className="block font-poppins text-xs font-semibold text-slate-500 mb-1">
            Campaign Budget
          </span>
          <div className="font-mono font-black text-3xl text-slate-900 tracking-tight">
            Rp 16.500.000
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kampanye berdasarkan judul atau target..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-poppins text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 shadow-2xs"
          />
        </div>

        <div className="relative w-full sm:w-48">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-slate-200 text-xs font-poppins font-medium text-slate-700 pl-3.5 pr-8 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 shadow-2xs cursor-pointer"
          >
            <option value="all">Semua Status</option>
            <option value="active">Active</option>
            <option value="planning">Planning</option>
            <option value="completed">Completed</option>
          </select>
          <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* 3-Column Campaign Grid matching frame_005 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-slate-300 transition-all duration-200"
          >
            <div>
              {/* Card Header: Title & Status Badge */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-poppins font-bold text-sm text-slate-900 leading-snug">
                  {campaign.title}
                </h3>
                <div className="shrink-0">{getStatusBadge(campaign.status)}</div>
              </div>

              {/* Sub-meta: Dates & Subtitle */}
              <div className="font-poppins text-[11px] text-slate-500 mb-4 flex items-center gap-1.5 flex-wrap">
                <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                  {campaign.dateRange}
                </span>
                <span>·</span>
                <span className="text-slate-600 truncate">{campaign.subtitle}</span>
              </div>

              {/* 3 Metric Columns: Planned, Published, Progress */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-slate-50/80 border border-slate-100 mb-4">
                <div>
                  <div className="font-mono font-bold text-base text-slate-900">
                    {campaign.plannedCount}
                  </div>
                  <span className="font-poppins text-[10px] text-slate-400 uppercase tracking-wider block">
                    Planned
                  </span>
                </div>
                <div>
                  <div className="font-mono font-bold text-base text-blue-600">
                    {campaign.publishedCount}
                  </div>
                  <span className="font-poppins text-[10px] text-slate-400 uppercase tracking-wider block">
                    Published
                  </span>
                </div>
                <div>
                  <div className="font-mono font-bold text-base text-emerald-600">
                    {campaign.progress}%
                  </div>
                  <span className="font-poppins text-[10px] text-slate-400 uppercase tracking-wider block">
                    Progress
                  </span>
                </div>
              </div>

              {/* Visual Progress Bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, campaign.progress)}%` }}
                />
              </div>

              {/* CTA Note */}
              <p className="font-poppins text-[11px] text-slate-500 truncate mb-4">
                <span className="font-semibold text-slate-700">CTA:</span>{' '}
                {campaign.cta || 'Jadwalkan konsultasi arsitektur cloud'}
              </p>
            </div>

            {/* Bottom Card Actions: Edit & Delete buttons */}
            <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => handleOpenEditModal(campaign)}
                className="flex-1 py-1.5 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-poppins text-xs font-semibold text-center transition-colors shadow-2xs"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDeleteCampaign(campaign.id)}
                className="flex-1 py-1.5 px-3 rounded-xl border border-rose-100 bg-rose-50/40 hover:bg-rose-50 text-rose-600 font-poppins text-xs font-semibold text-center transition-colors shadow-2xs"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Add / Edit Campaign */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs"
        >
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-poppins font-bold text-base text-slate-900">
                {editingCampaign ? 'Edit Kampanye' : 'Tambah Kampanye Baru'}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCampaign} className="space-y-4">
              <div>
                <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                  Nama Kampanye
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Contoh: Peluncuran Solusi AI & Cloud Modernization"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    Rentang Waktu
                  </label>
                  <input
                    type="text"
                    value={formData.dateRange}
                    onChange={(e) => setFormData({ ...formData, dateRange: e.target.value })}
                    placeholder="19 Jul - 10 Sep"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as 'Active' | 'Planning' | 'Completed',
                      })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-white"
                  >
                    <option value="Active">Active</option>
                    <option value="Planning">Planning</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                  Tujuan / Sasaran Bisnis (Subtitle)
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Contoh: 19 Jul - 10 Sep · Kampanye Solusi Baru"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    Target Konten (Planned)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.plannedCount}
                    onChange={(e) =>
                      setFormData({ ...formData, plannedCount: parseInt(e.target.value) || 0 })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
                <div>
                  <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                    Sudah Terbit (Published)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.publishedCount}
                    onChange={(e) =>
                      setFormData({ ...formData, publishedCount: parseInt(e.target.value) || 0 })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
              </div>

              <div>
                <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                  Panggilan Aksi (CTA)
                </label>
                <input
                  type="text"
                  value={formData.cta}
                  onChange={(e) => setFormData({ ...formData, cta: e.target.value })}
                  placeholder="Contoh: Jadwalkan konsultasi arsitektur cloud"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
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
                  Simpan Kampanye
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
