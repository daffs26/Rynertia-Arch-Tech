import React from 'react';
import Link from 'next/link';
import {
  FileText,
  CheckCircle2,
  Clock,
  MessageSquare,
  AlertCircle,
  TrendingUp,
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Plus,
  Compass,
} from 'lucide-react';
import {
  initialContentData,
  initialMessagesData,
  initialBusinessCandidates,
} from '@/data/dashboardMockData';

export default function DashboardOverviewPage() {
  // Compute PRD 16.1.1 metrics
  const totalContent = initialContentData.length;
  const publishedContent = initialContentData.filter((c) => c.status === 'published').length;
  const draftContent = initialContentData.filter((c) => c.status === 'draft').length;
  const archivedContent = initialContentData.filter((c) => c.status === 'archived').length;

  const totalMessages = initialMessagesData.length;
  const unreadMessages = initialMessagesData.filter((m) => m.status === 'unread').length;

  const totalCandidates = initialBusinessCandidates.length;
  const noWebsiteCandidates = initialBusinessCandidates.filter(
    (c) => c.websiteStatus === 'No Website Candidate'
  ).length;
  const needsVerifCandidates = initialBusinessCandidates.filter(
    (c) => c.websiteStatus === 'Needs Manual Verification'
  ).length;

  // Lifecycle percentages
  const publishedPct = Math.round((publishedContent / (totalContent || 1)) * 100);
  const draftPct = Math.round((draftContent / (totalContent || 1)) * 100);
  const archivedPct = Math.round((archivedContent / (totalContent || 1)) * 100);

  // Recent content
  const recentContent = [...initialContentData].slice(0, 4);
  const recentMessages = [...initialMessagesData].slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-mono text-[11px] tracking-wider uppercase">Konsol Operasional v1.0</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Beranda <span className="text-gradient-blue">Konsol Administrasi</span>
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed font-normal">
            Pantau dan kelola seluruh siklus hidup konten digital, pesan masuk dari prospek klien, dan pipeline penemuan kandidat bisnis lokal.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/dashboard/content/new"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all min-h-[44px]"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Konten Baru</span>
          </Link>
          <Link
            href="/dashboard/pesan"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800 text-xs font-semibold shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4 text-slate-500" />
            <span>Kotak Masuk</span>
            {unreadMessages > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold font-mono">
                {unreadMessages}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* 6 Metrik Wajib PRD (Seksi 16.1.1) dalam Bento KPI Grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
            Ringkasan Metrik Utama (PRD 16.1.1)
          </h2>
          <span className="text-xs text-slate-400 font-mono">Telemetry Mock Data</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* 1. Jumlah Konten */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:border-blue-400/80 hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">1. Total Konten</span>
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <FileText className="w-4.5 h-4.5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {totalContent}
              </span>
              <span className="text-xs font-medium text-slate-500">item tersimpan</span>
            </div>
            <p className="mt-4 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-3.5">
              <span>Portofolio, Berita, Layanan, Tim</span>
              <span className="font-semibold text-slate-700 font-mono">{archivedContent} diarsipkan</span>
            </p>
          </div>

          {/* 2. Konten Published */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:border-blue-400/80 hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">2. Konten Published</span>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                <CheckCircle2 className="w-4.5 h-4.5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-emerald-600">
                {publishedContent}
              </span>
              <span className="text-xs font-medium text-slate-500">aktif di publik</span>
            </div>
            <p className="mt-4 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-3.5">
              <span>Status: Public Web App</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                LIVE
              </span>
            </p>
          </div>

          {/* 3. Konten Draft */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:border-blue-400/80 hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">3. Konten Draft</span>
              <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                <Clock className="w-4.5 h-4.5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-amber-600">
                {draftContent}
              </span>
              <span className="text-xs font-medium text-slate-500">sedang diedit</span>
            </div>
            <p className="mt-4 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-3.5">
              <span>Siklus: Belum tayang</span>
              <Link
                href="/dashboard/content?status=draft"
                className="font-semibold text-amber-700 hover:underline inline-flex items-center gap-0.5 font-mono text-[11px]"
              >
                Tinjau <ChevronRight className="w-3 h-3" />
              </Link>
            </p>
          </div>

          {/* 4. Jumlah Pesan Masuk */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:border-blue-400/80 hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">4. Pesan Masuk</span>
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-4.5 h-4.5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {totalMessages}
              </span>
              <span className="text-xs font-medium text-slate-500">total kontak</span>
            </div>
            <p className="mt-4 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-3.5">
              <span>Dari formulir publik</span>
              <Link
                href="/dashboard/pesan"
                className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-0.5 font-mono text-[11px]"
              >
                Buka Inbox <ChevronRight className="w-3 h-3" />
              </Link>
            </p>
          </div>

          {/* 5. Pesan Unread */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:border-blue-400/80 hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">5. Pesan Unread</span>
              <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 group-hover:scale-105 transition-transform">
                <AlertCircle className="w-4.5 h-4.5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-rose-600">
                {unreadMessages}
              </span>
              <span className="text-xs font-medium text-slate-500">belum dibaca</span>
            </div>
            <p className="mt-4 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100 pt-3.5">
              <span>Perlu ditindaklanjuti</span>
              <span className="px-2 py-0.5 rounded-md bg-rose-50 border border-rose-200 text-[10px] font-bold font-mono text-rose-700">
                PRIORITAS
              </span>
            </p>
          </div>

          {/* 6. Kandidat Bisnis Ditemukan */}
          <div className="bg-linear-to-br from-slate-900 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-800 hover:border-blue-500/50 hover:shadow-[0_20px_45px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">
                6. Kandidat Bisnis (PRD 19)
              </span>
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white group-hover:text-blue-300 transition-colors">
                {totalCandidates}
              </span>
              <span className="text-xs font-medium text-slate-400">entitas terdata</span>
            </div>
            <p className="mt-4 text-xs text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-3.5">
              <span>No Web: <strong className="text-amber-300 font-mono">{noWebsiteCandidates}</strong></span>
              <Link
                href="/dashboard/discovery"
                className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 font-mono text-[11px]"
              >
                Eksplorasi <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Grid Konten Terkini & Pesan Masuk (Pola Gambar 1 & Gambar 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri: Tabel Ringkas Konten Terbaru (2 Kolom) */}
        <div className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-7">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Siklus Konten Terkini
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Ringkasan pembaruan status konten (Draft, Published, Archived)
              </p>
            </div>

            <Link
              href="/dashboard/content"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 min-h-[36px]"
            >
              Lihat Semua Konten <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200/80 text-slate-500 font-mono text-[11px] uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Judul Konten</th>
                  <th className="pb-3 font-semibold">Tipe</th>
                  <th className="pb-3 font-semibold">Status Lifecycle</th>
                  <th className="pb-3 font-semibold">Terakhir Diubah</th>
                  <th className="pb-3 font-semibold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentContent.map((item) => {
                  let statusBadge = (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                      PUBLISHED
                    </span>
                  );
                  if (item.status === 'draft') {
                    statusBadge = (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold font-mono bg-amber-50 text-amber-700 border border-amber-200">
                        DRAFT
                      </span>
                    );
                  } else if (item.status === 'archived') {
                    statusBadge = (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold font-mono bg-slate-100 text-slate-600 border border-slate-200">
                        ARCHIVED
                      </span>
                    );
                  }

                  return (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="py-3.5 pr-4">
                        <span className="block font-semibold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </span>
                        <span className="block text-[11px] text-slate-400">
                          {item.category}
                        </span>
                      </td>
                      <td className="py-3.5 pr-4 text-slate-600 capitalize">
                        {item.type}
                      </td>
                      <td className="py-3.5 pr-4">{statusBadge}</td>
                      <td className="py-3.5 pr-4 text-slate-500 font-mono text-[11px]">
                        {item.updatedAt}
                      </td>
                      <td className="py-3.5 text-right">
                        <Link
                          href={`/dashboard/content/${item.id}`}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold transition-colors min-h-[32px] inline-flex items-center text-xs"
                        >
                          Kelola
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Kolom Kanan: Pesan Masuk Terbaru (1 Kolom) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Pesan Masuk Terbaru
              </h3>
              <Link
                href="/dashboard/pesan"
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Buka Semua
              </Link>
            </div>

            <div className="space-y-3">
              {recentMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-4 rounded-xl border transition-all duration-200 ${
                    msg.status === 'unread'
                      ? 'bg-blue-50/40 border-blue-200/80 shadow-2xs'
                      : 'bg-slate-50/60 border-slate-200/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-xs text-slate-900 line-clamp-1">
                      {msg.name}
                    </span>
                    {msg.status === 'unread' && (
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-xs">
                        BARU
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] font-semibold text-slate-600 line-clamp-1 mb-1">
                    {msg.company}
                  </p>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {msg.message}
                  </p>
                  <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-400 font-mono pt-2 border-t border-slate-100">
                    <span>{msg.date}</span>
                    <span className="text-blue-600 font-semibold">{msg.service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-5 border-t border-slate-100 mt-5">
            <Link
              href="/dashboard/pesan"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-md shadow-slate-900/10 transition-colors min-h-[42px]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Kelola Seluruh Pesan Masuk</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Teaser Business Discovery (PRD 19) */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shadow-xs">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Peluang Business Discovery (PRD Seksi 19)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Kandidat perusahaan dan UMKM dengan indikasi web presence rendah untuk penawaran solusi digital
              </p>
            </div>
          </div>

          <Link
            href="/dashboard/discovery"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all self-start sm:self-auto min-h-[40px]"
          >
            <span>Buka Direktori Lengkap</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {initialBusinessCandidates.slice(0, 2).map((cand) => (
            <div
              key={cand.id}
              className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-blue-400/80 hover:shadow-[0_10px_30px_rgba(37,99,235,0.06)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{cand.name}</h4>
                  <span className="text-xs text-slate-500 font-medium">
                    {cand.category} • {cand.location}
                  </span>
                </div>
                <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                  {cand.websiteStatus}
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                {cand.currentPresenceNotes}
              </p>
              <div className="text-xs font-medium text-blue-700 bg-blue-50/70 border border-blue-200/60 p-2.5 rounded-xl">
                <strong className="font-bold">Rekomendasi Solusi:</strong> {cand.potentialSolution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
