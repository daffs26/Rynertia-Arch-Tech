'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Plus,
  Search,
  CheckCircle2,
  Clock,
  Archive,
  MoreVertical,
  ExternalLink,
  Edit,
  Trash2,
  Globe,
  FileCheck,
  RotateCcw,
  Eye,
  Filter,
} from 'lucide-react';
import {
  initialContentData,
  DashboardContentItem,
  ContentStatus,
  ContentType,
} from '@/data/dashboardMockData';

export default function ContentManagementPage() {
  const [contents, setContents] = useState<DashboardContentItem[]>(initialContentData);
  const [activeTab, setActiveTab] = useState<'all' | ContentStatus>('all');
  const [selectedType, setSelectedType] = useState<'all' | ContentType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<DashboardContentItem | null>(null);

  // Status counters
  const countAll = contents.length;
  const countPublished = contents.filter((c) => c.status === 'published').length;
  const countDraft = contents.filter((c) => c.status === 'draft').length;
  const countArchived = contents.filter((c) => c.status === 'archived').length;

  // Filter logic
  const filteredContents = useMemo(() => {
    return contents.filter((item) => {
      // Tab filter
      if (activeTab !== 'all' && item.status !== activeTab) {
        return false;
      }
      // Type filter
      if (selectedType !== 'all' && item.type !== selectedType) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchCategory = item.category.toLowerCase().includes(query);
        const matchAuthor = item.author.toLowerCase().includes(query);
        return matchTitle || matchCategory || matchAuthor;
      }
      return true;
    });
  }, [contents, activeTab, selectedType, searchQuery]);

  // Bulk Selection States
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === filteredContents.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredContents.map((c) => c.id));
    }
  };

  const handleBulkPublish = () => {
    setContents((prev) =>
      prev.map((c) =>
        selectedIds.includes(c.id) ? { ...c, status: 'published', updatedAt: '2026-09-20' } : c
      )
    );
    setSelectedIds([]);
  };

  const handleBulkArchive = () => {
    setContents((prev) =>
      prev.map((c) =>
        selectedIds.includes(c.id) ? { ...c, status: 'archived', updatedAt: '2026-09-20' } : c
      )
    );
    setSelectedIds([]);
  };

  const handleBulkDelete = () => {
    if (confirm(`Apakah Anda yakin ingin menghapus ${selectedIds.length} konten terpilih?`)) {
      setContents((prev) => prev.filter((c) => !selectedIds.includes(c.id)));
      setSelectedIds([]);
    }
  };

  // Export Content to CSV
  const handleExportCSV = () => {
    const headers = ['ID', 'Title', 'Type', 'Category', 'Status', 'Author', 'Updated At', 'Views'];
    const rows = filteredContents.map((c) => [
      c.id,
      `"${c.title}"`,
      c.type,
      c.category,
      c.status,
      c.author,
      c.updatedAt,
      c.views,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `rynertia_content_inventory_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Lifecycle Action Handlers (Publish, Unpublish, Archive, Delete)
  const handlePublish = (id: string) => {
    setContents((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: 'published', updatedAt: '2026-09-20' } : c
      )
    );
    setOpenDropdownId(null);
  };

  const handleUnpublish = (id: string) => {
    setContents((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: 'draft', updatedAt: '2026-09-20' } : c
      )
    );
    setOpenDropdownId(null);
  };

  const handleArchive = (id: string) => {
    setContents((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: 'archived', updatedAt: '2026-09-20' } : c
      )
    );
    setOpenDropdownId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus konten ini?')) {
      setContents((prev) => prev.filter((c) => c.id !== id));
      setOpenDropdownId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Action & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Content <span className="text-gradient-blue">Management</span>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Kelola siklus hidup konten digital (Draft, Published, Archived) secara terstruktur dan terpadu.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 text-xs font-semibold shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer min-h-[42px]"
          >
            <span>Ekspor CSV</span>
          </button>

          <Link
            href="/dashboard/content/new"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all min-h-[42px]"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Konten Baru</span>
          </Link>
        </div>
      </div>

      {/* Floating Bulk Actions Bar */}
      {selectedIds.length > 0 && (
        <div className="p-3 px-5 rounded-2xl bg-slate-950 text-white flex flex-wrap items-center justify-between gap-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span className="text-xs font-semibold">
              <strong>{selectedIds.length}</strong> konten dipilih
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleBulkPublish}
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Publish Terpilih
            </button>
            <button
              type="button"
              onClick={handleBulkArchive}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              Arsipkan
            </button>
            <button
              type="button"
              onClick={handleBulkDelete}
              className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Hapus
            </button>
            <button
              type="button"
              onClick={() => setSelectedIds([])}
              className="px-3 py-1.5 rounded-xl text-slate-400 hover:text-white text-xs font-medium cursor-pointer"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {/* Main Container (Pola Gambar 1 - Table with Status Tabs) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
        {/* Header Tabs: Lifecycle Filter */}
        <div className="px-6 pt-5 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all min-h-[38px] flex items-center gap-2 cursor-pointer font-mono ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Semua Konten</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-200 text-slate-800">
                {countAll}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('published')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all min-h-[38px] flex items-center gap-2 cursor-pointer font-mono ${
                activeTab === 'published'
                  ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Published</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-800">
                {countPublished}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('draft')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all min-h-[38px] flex items-center gap-2 cursor-pointer font-mono ${
                activeTab === 'draft'
                  ? 'bg-amber-600 text-white shadow-xs shadow-amber-600/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Draft</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-100 text-amber-800">
                {countDraft}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('archived')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all min-h-[38px] flex items-center gap-2 cursor-pointer font-mono ${
                activeTab === 'archived'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Archive className="w-3.5 h-3.5" />
              <span>Archived</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-200 text-slate-800">
                {countArchived}
              </span>
            </button>
          </div>

          {/* Quick Filter Info */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 pb-3 sm:pb-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">Hanya status <strong>Published</strong> yang muncul di web publik.</span>
          </div>
        </div>

        {/* Toolbar: Search & Type Filter */}
        <div className="p-4 sm:px-6 bg-slate-50/50 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul, kategori, atau pembuat..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
            />
          </div>

          {/* Type Selector Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-medium text-slate-500">Tipe:</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 font-medium cursor-pointer"
            >
              <option value="all">Semua Tipe Konten</option>
              <option value="portfolio">Portofolio</option>
              <option value="berita">Berita & Artikel</option>
              <option value="layanan">Layanan</option>
              <option value="tim">Anggota Tim</option>
            </select>
          </div>
        </div>

        {/* Content Table (CRUD Table) */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/40 text-slate-500 font-semibold">
                <th className="py-3 px-4 w-10 text-center">
                  <input
                    type="checkbox"
                    checked={
                      filteredContents.length > 0 &&
                      selectedIds.length === filteredContents.length
                    }
                    onChange={handleSelectAll}
                    className="rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    aria-label="Pilih semua konten"
                  />
                </th>
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-6">Judul Konten</th>
                <th className="py-3 px-6">Tipe & Kategori</th>
                <th className="py-3 px-6">Status Lifecycle</th>
                <th className="py-3 px-6">Penulis</th>
                <th className="py-3 px-6">Pembaruan</th>
                <th className="py-3 px-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredContents.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-500">
                    Tidak ada konten yang sesuai dengan filter pencarian.
                  </td>
                </tr>
              ) : (
                filteredContents.map((item) => {
                  const isSelected = selectedIds.includes(item.id);
                  let statusBadge = (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Published
                    </span>
                  );
                  if (item.status === 'draft') {
                    statusBadge = (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Draft
                      </span>
                    );
                  } else if (item.status === 'archived') {
                    statusBadge = (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        Archived
                      </span>
                    );
                  }

                  const isDropdownOpen = openDropdownId === item.id;

                  return (
                    <tr
                      key={item.id}
                      className={`hover:bg-slate-50/80 transition-colors group ${
                        isSelected ? 'bg-blue-50/40' : ''
                      }`}
                    >
                      <td className="py-4 px-4 text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleToggleSelect(item.id)}
                          className="rounded-sm border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                          aria-label={`Pilih konten ${item.title}`}
                        />
                      </td>
                      <td className="py-4 px-4 font-mono text-slate-400 text-[11px]">
                        {item.id}
                      </td>
                      <td className="py-4 px-6">
                        <span className="block font-bold text-slate-900 line-clamp-1 max-w-xs sm:max-w-md">
                          {item.title}
                        </span>
                        <span className="block text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {item.summary}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-block font-semibold text-slate-800 capitalize">
                          {item.type}
                        </span>
                        <span className="block text-[11px] text-slate-500">
                          {item.category}
                        </span>
                      </td>
                      <td className="py-4 px-6">{statusBadge}</td>
                      <td className="py-4 px-6 text-slate-600 font-medium">
                        {item.author}
                      </td>
                      <td className="py-4 px-6 text-slate-500 font-mono text-[11px]">
                        {item.updatedAt}
                      </td>
                      <td className="py-4 px-6 text-right relative">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Quick Edit */}
                          <Link
                            href={`/dashboard/content/${item.id}`}
                            className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            title="Edit Konten"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>

                          {/* Quick Preview Button */}
                          <button
                            type="button"
                            onClick={() => setPreviewItem(item)}
                            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                            title="Preview Konten"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          {/* Action Dropdown Toggle */}
                          <button
                            type="button"
                            onClick={() =>
                              setOpenDropdownId(isDropdownOpen ? null : item.id)
                            }
                            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer min-w-[36px] min-h-[36px] flex items-center justify-center"
                            aria-label="Menu Aksi"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Dropdown Menu (Publish, Unpublish, Archive, Delete) */}
                        {isDropdownOpen && (
                          <>
                            <div
                              className="fixed inset-0 z-40"
                              onClick={() => setOpenDropdownId(null)}
                            />
                            <div className="absolute right-6 top-12 z-50 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 text-left divide-y divide-slate-100 animate-in fade-in zoom-in-95 duration-100">
                              <div className="py-1">
                                <Link
                                  href={`/dashboard/content/${item.id}`}
                                  className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                                >
                                  <Edit className="w-3.5 h-3.5 text-slate-400" />
                                  <span>Edit Detail</span>
                                </Link>
                                <button
                                  type="button"
                                  onClick={() => setPreviewItem(item)}
                                  className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
                                >
                                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                                  <span>Preview Isi</span>
                                </button>
                              </div>

                              <div className="py-1">
                                {item.status !== 'published' && (
                                  <button
                                    type="button"
                                    onClick={() => handlePublish(item.id)}
                                    className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-emerald-700 hover:bg-emerald-50 cursor-pointer font-medium"
                                  >
                                    <FileCheck className="w-3.5 h-3.5" />
                                    <span>Publish Sekarang</span>
                                  </button>
                                )}

                                {item.status === 'published' && (
                                  <button
                                    type="button"
                                    onClick={() => handleUnpublish(item.id)}
                                    className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-amber-700 hover:bg-amber-50 cursor-pointer font-medium"
                                  >
                                    <RotateCcw className="w-3.5 h-3.5" />
                                    <span>Kembalikan ke Draft</span>
                                  </button>
                                )}

                                {item.status !== 'archived' && (
                                  <button
                                    type="button"
                                    onClick={() => handleArchive(item.id)}
                                    className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 cursor-pointer"
                                  >
                                    <Archive className="w-3.5 h-3.5" />
                                    <span>Arsipkan Konten</span>
                                  </button>
                                )}
                              </div>

                              <div className="py-1">
                                <button
                                  type="button"
                                  onClick={() => handleDelete(item.id)}
                                  className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50 cursor-pointer font-medium"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                  <span>Hapus Konten</span>
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Preview Modal (Read & Preview) */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-xl w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                  {previewItem.type}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {previewItem.id}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setPreviewItem(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold cursor-pointer"
              >
                ✕ Tutup
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {previewItem.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Kategori: {previewItem.category} • Penulis: {previewItem.author} • Update: {previewItem.updatedAt}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 italic">
              "{previewItem.summary}"
            </div>

            <div className="text-xs text-slate-700 leading-relaxed space-y-2">
              <p>{previewItem.content}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">Status:</span>
                <span className="text-xs font-semibold capitalize text-slate-900">
                  {previewItem.status}
                </span>
              </div>
              <Link
                href={`/dashboard/content/${previewItem.id}`}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold"
              >
                Edit di Halaman Penuh
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
