'use client';

import React, { useState } from 'react';
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
} from 'lucide-react';
import { ContentStatus, ContentType } from '@/data/dashboardMockData';

export default function NewContentPage() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [type, setType] = useState<ContentType>('portfolio');
  const [category, setCategory] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<ContentStatus>('draft');
  const [author, setAuthor] = useState('Muhammad Daffa');
  const [isSaved, setIsSaved] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    // Auto generate slug
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '')
    );
  };

  const handleSave = (targetStatus: ContentStatus) => {
    setStatus(targetStatus);
    setIsSaved(true);
    setTimeout(() => {
      router.push('/dashboard/content');
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <Link
            href="/dashboard/content"
            className="p-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all min-w-[42px] min-h-[42px] flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Tambah Konten Digital Baru
            </h1>
            <p className="text-xs text-slate-500 font-normal">
              Buat konten dan tentukan siklus hidup publikasinya
            </p>
          </div>
        </div>
      </div>

      {/* Save Toast Inline */}
      {isSaved && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200 shadow-xs">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Konten berhasil disimpan dengan status <strong className="font-mono">{status}</strong>. Mengalihkan ke daftar konten...</span>
        </div>
      )}

      {/* Main Form Container */}
      <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6">
        {/* Row 1: Title & Slug */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5 sm:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Judul Konten <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={handleTitleChange}
              placeholder="Contoh: Modernisasi Arsitektur Cloud Skala Enterprise"
              className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 font-medium"
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
              placeholder="modernisasi-arsitektur-cloud"
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-mono"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Tipe Konten <span className="text-rose-500">*</span>
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as ContentType)}
              className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 font-medium cursor-pointer"
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
              placeholder="Contoh: Cloud Architecture, Fintech, IoT"
              className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Nama Penulis / Penanggung Jawab
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
            placeholder="Tuliskan 1-2 kalimat ringkasan yang akan tampil di kartu preview web publik..."
            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
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
            placeholder="Tuliskan isi detail konten di sini..."
            className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 leading-relaxed"
          />
        </div>

        {/* Content Lifecycle Selector */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <Info className="w-4 h-4 text-blue-600" />
            <span>Pilih Status Lifecycle</span>
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
                Disetujui untuk ditampilkan pada <strong>Public Web Application</strong>.
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
                Tidak aktif lagi, disimpan untuk arsip histori internal.
              </p>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/dashboard/content"
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 text-xs font-semibold shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all min-h-[42px] inline-flex items-center"
          >
            Batal
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleSave('draft')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800 text-xs font-semibold shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer min-h-[42px]"
            >
              <Save className="w-4 h-4 text-slate-500" />
              <span>Simpan Draft</span>
            </button>

            <button
              type="button"
              onClick={() => handleSave('published')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer min-h-[42px]"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Publish Sekarang</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
