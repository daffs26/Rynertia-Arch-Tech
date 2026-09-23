'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Save,
  CheckCircle2,
  Clock,
  Archive,
  Info,
  Check,
  Eye,
  Trash2,
} from 'lucide-react';
import {
  initialContentData,
  ContentStatus,
  ContentType,
  DashboardContentItem,
} from '@/data/dashboardMockData';

export default function EditContentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();

  const [item, setItem] = useState<DashboardContentItem | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [type, setType] = useState<ContentType>('portfolio');
  const [category, setCategory] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<ContentStatus>('draft');
  const [author, setAuthor] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  useEffect(() => {
    const found = initialContentData.find((c) => c.id === resolvedParams.id);
    if (found) {
      setItem(found);
      setTitle(found.title);
      setSlug(found.slug);
      setType(found.type);
      setCategory(found.category);
      setSummary(found.summary);
      setContent(found.content);
      setStatus(found.status);
      setAuthor(found.author);
    } else {
      // Fallback default
      setTitle('Konten ' + resolvedParams.id);
      setSlug('konten-' + resolvedParams.id);
      setCategory('General');
      setAuthor('Administrator');
    }
  }, [resolvedParams.id]);

  const handleSave = (newStatus?: ContentStatus) => {
    const finalStatus = newStatus || status;
    setStatus(finalStatus);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2500);
  };

  const handleDelete = () => {
    if (confirm('Apakah Anda yakin ingin menghapus konten ini?')) {
      router.push('/dashboard/content');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <Link
            href="/dashboard/content"
            className="p-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all min-w-[42px] min-h-[42px] flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Edit Konten Digital
              </h1>
              <span className="font-mono text-xs text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-lg font-semibold">
                {resolvedParams.id}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-normal mt-0.5">
              Perbarui isi, ubah siklus publikasi, atau tinjau tampilan
            </p>
          </div>
        </div>

        {/* Tab Editor vs Preview */}
        <div className="flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-xl border border-slate-200/90 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('editor')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'editor'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Editor Form
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'preview'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Tinjauan Publik</span>
          </button>
        </div>
      </div>

      {/* Save Toast Inline */}
      {isSaved && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200 shadow-xs">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Perubahan konten berhasil disimpan dengan status <strong className="font-mono">{status}</strong>.</span>
        </div>
      )}

      {activeTab === 'preview' ? (
        /* Preview Tab View */
        <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              {category || 'Uncategorized'} • {type}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              {title || 'Judul Konten Belum Diisi'}
            </h2>
            <div className="mt-3 flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span>Penulis: {author}</span>
              <span>•</span>
              <span>Status: <strong className="capitalize text-slate-800">{status}</strong></span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 italic leading-relaxed">
            "{summary || 'Ringkasan belum ditulis.'}"
          </div>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
            <p>{content || 'Belum ada isi konten yang ditulis.'}</p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setActiveTab('editor')}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
            >
              Kembali ke Mode Edit
            </button>
          </div>
        </div>
      ) : (
        /* Editor Form View */
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          {/* Row 1: Title & Slug */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5 sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Judul Konten
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Slug URL
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Tipe Konten
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as ContentType)}
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 font-medium"
              >
                <option value="portfolio">Portofolio & Studi Kasus</option>
                <option value="berita">Berita & Artikel Wawasan</option>
                <option value="layanan">Katalog Layanan</option>
                <option value="tim">Profil Anggota Tim</option>
              </select>
            </div>
          </div>

          {/* Row 2: Category & Author */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Kategori Spesifik
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Nama Penulis / Pemilik Konten
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 font-medium"
              />
            </div>
          </div>

          {/* Row 3: Summary */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Ringkasan Singkat (Excerpt)
            </label>
            <textarea
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          {/* Row 4: Full Content */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Isi Konten Lengkap
            </label>
            <textarea
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 leading-relaxed"
            />
          </div>

          {/* Content Lifecycle Selector */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Info className="w-4 h-4 text-blue-600" />
              <span>Siklus Hidup Konten</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label
                className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                  status === 'draft'
                    ? 'bg-amber-50/60 border-amber-300 ring-2 ring-amber-500/20'
                    : 'bg-white border-slate-200 hover:bg-slate-100/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800">
                    <Clock className="w-3.5 h-3.5" />
                    Draft
                  </span>
                  <input
                    type="radio"
                    name="status"
                    value="draft"
                    checked={status === 'draft'}
                    onChange={() => setStatus('draft')}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                </div>
                <p className="mt-2 text-[11px] text-slate-500 leading-normal">
                  Konten sedang diedit dan <strong>tidak</strong> ditampilkan di web publik.
                </p>
              </label>

              <label
                className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                  status === 'published'
                    ? 'bg-emerald-50/60 border-emerald-300 ring-2 ring-emerald-500/20'
                    : 'bg-white border-slate-200 hover:bg-slate-100/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Published
                  </span>
                  <input
                    type="radio"
                    name="status"
                    value="published"
                    checked={status === 'published'}
                    onChange={() => setStatus('published')}
                    className="text-emerald-600 focus:ring-emerald-500"
                  />
                </div>
                <p className="mt-2 text-[11px] text-slate-500 leading-normal">
                  Ditampilkan kepada pengunjung pada <strong>Public Web Application</strong>.
                </p>
              </label>

              <label
                className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                  status === 'archived'
                    ? 'bg-slate-100 border-slate-300 ring-2 ring-slate-500/20'
                    : 'bg-white border-slate-200 hover:bg-slate-100/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Archive className="w-3.5 h-3.5" />
                    Archived
                  </span>
                  <input
                    type="radio"
                    name="status"
                    value="archived"
                    checked={status === 'archived'}
                    onChange={() => setStatus('archived')}
                    className="text-slate-600 focus:ring-slate-500"
                  />
                </div>
                <p className="mt-2 text-[11px] text-slate-500 leading-normal">
                  Tidak lagi aktif di publik, disimpan untuk arsip histori internal.
                </p>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleDelete}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200 text-xs font-semibold transition-all cursor-pointer min-h-[42px]"
            >
              <Trash2 className="w-4 h-4" />
              <span>Hapus Konten</span>
            </button>

            <div className="flex items-center gap-3">
              <Link
                href="/dashboard/content"
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 text-xs font-semibold shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all min-h-[42px] inline-flex items-center"
              >
                Kembali
              </Link>

              <button
                type="button"
                onClick={() => handleSave()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer min-h-[42px]"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Perubahan</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
