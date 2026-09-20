'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Brain,
  Download,
  Copy,
  Check,
  Plus,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  ListTodo,
  Layers,
  Sparkles,
} from 'lucide-react';

interface SavedInsight {
  id: string;
  title: string;
  date: string;
  summary: string;
  actionItems: string[];
}

export default function AIInsightsPage() {
  const [rankBy, setRankBy] = useState('ctr');
  const [topCount, setTopCount] = useState('3');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [exportedStatus, setExportedStatus] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [analysisText, setAnalysisText] = useState('');
  const [actionItemsText, setActionItemsText] = useState('');

  // History State
  const [history, setHistory] = useState<SavedInsight[]>([
    {
      id: 'ins-1',
      title: 'Artikel Teknis LinkedIn Memberikan Konversi Prospek Tertinggi',
      date: '18 Agu 2026',
      summary:
        'Format studi kasus mendalam tentang arsitektur cloud serverless menghasilkan CTR rata-rata 7.4% dan 44 lead kualifikasi B2B. Konten berorientasi solusi enterprise jauh melampaui postingan pengumuman umum.',
      actionItems: [
        'Tingkatkan frekuensi studi kasus arsitektur cloud menjadi 2 kali per bulan',
        'Sertakan diagram arsitektur arsitek sistem pada carousel slide 1',
        'Fokuskan CTA pada audit kesiapan infrastruktur gratis 30 menit',
      ],
    },
    {
      id: 'ins-2',
      title: 'Optimalisasi Waktu Kirim Buletin Mingguan Klien',
      date: '10 Agu 2026',
      summary:
        'Pengiriman email buletin pada hari Selasa pukul 09:30 WIB menghasilkan open-rate 38.2% dan CTR 14.2%, tertinggi dibandingkan hari kerja lainnya.',
      actionItems: [
        'Kunci jadwal publikasi buletin ke setiap hari Selasa pagi',
        'Kurangi jumlah link eksternal menjadi maksimal 2 per edisi',
      ],
    },
  ]);

  const promptTemplate = `Anda adalah penasihat strategi konten B2B untuk Rynertia Arc Tech (konsultan rekayasa software enterprise & cloud).
Berikut adalah performa konten minggu ini:
- Saluran terbaik: LinkedIn Enterprise (CTR 7.4%, 44 leads, 2.410 klik)
- Konten terbaik: Modernisasi Core Banking & Skalabilitas Microservices
- Total leads terkonversi: 129
- Tingkat interaksi rata-rata: 8.0%

Berdasarkan data di atas:
1. Berikan 1 judul temuan utama.
2. Jelaskan analisis ringkas mengapa konten ini berhasil.
3. Berikan 3 rekomendasi tindakan taktis (action items) untuk jadwal minggu depan.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(promptTemplate);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const handleExportReport = () => {
    const reportText = `=== LAPORAN PERFORMA KONTEN RYNERTIA ARC TECH ===\nPeriode: Minggu Ini (Agustus 2026)\nPeringkat berdasarkan: ${rankBy.toUpperCase()}\nJumlah item: Top ${topCount}\n\n1. Modernisasi Core Banking (LinkedIn) - CTR 7.4%, Clicks 2.410\n2. Audit Proses Bisnis ERP (Blog) - CTR 7.4%, Clicks 1.360\n3. Peluncuran Cloud FinOps (LinkedIn) - CTR 3.0%, Clicks 288\n\nTotal Leads: 129 | Nilai Prospek: Rp 108.000.000`;
    const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `rynertia-performance-report-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    setExportedStatus(true);
    setTimeout(() => setExportedStatus(false), 2500);
  };

  const handleSaveInsight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const parsedItems = actionItemsText
      .split('\n')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const newInsight: SavedInsight = {
      id: `ins-${Date.now()}`,
      title,
      date: 'Hari Ini',
      summary: analysisText || 'Ringkasan strategi konten yang dievaluasi secara manual.',
      actionItems: parsedItems.length > 0 ? parsedItems : ['Pantau analitik metrik mingguan'],
    };

    setHistory((prev) => [newInsight, ...prev]);
    setTitle('');
    setAnalysisText('');
    setActionItemsText('');
  };

  return (
    <div className="space-y-6">
      {/* Top Header matching video frame_009 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-poppins font-bold text-2xl text-slate-900 tracking-tight">
            AI Insights & Strategy
          </h1>
          <p className="font-poppins text-xs text-slate-500 mt-1">
            Alur kerja 4 langkah: evaluasi konteks data, ekspor laporan, simpan strategi, dan tindak lanjuti to-do list.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-poppins font-semibold text-xs transition-colors self-start sm:self-auto"
        >
          <span>Kembali ke Overview</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 4 Guided Steps Workflow matching frame_009 */}
      <div className="space-y-5">
        {/* Step 1: Prompt context box */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-poppins font-bold text-sm text-slate-900 flex items-center gap-2">
              <span className="font-mono text-blue-600 font-bold text-xs bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/80">
                1
              </span>
              <span>Siapkan prompt & telemetri data performa</span>
            </h2>

            <button
              type="button"
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-poppins font-semibold text-slate-700 transition-colors shadow-2xs cursor-pointer"
            >
              {copiedPrompt ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Tersalin ke Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Salin Prompt Konteks</span>
                </>
              )}
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-600 whitespace-pre-line leading-relaxed">
            {promptTemplate}
          </div>
        </div>

        {/* Step 2: Export your report */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4">
          <div>
            <h2 className="font-poppins font-bold text-sm text-slate-900 flex items-center gap-2">
              <span className="font-mono text-blue-600 font-bold text-xs bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/80">
                2
              </span>
              <span>Export your report</span>
            </h2>
            <p className="font-poppins text-xs text-slate-500 mt-1">
              Satu berkas ekspor teks untuk periode aktif beserta metrik terbaik Anda.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={rankBy}
              onChange={(e) => setRankBy(e.target.value)}
              className="bg-white border border-slate-200 text-xs font-poppins font-medium text-slate-700 px-3.5 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 shadow-2xs cursor-pointer"
            >
              <option value="ctr">Rank by CTR</option>
              <option value="clicks">Rank by Clicks</option>
              <option value="engagement">Rank by Engagement</option>
              <option value="leads">Rank by Leads</option>
            </select>

            <select
              value={topCount}
              onChange={(e) => setTopCount(e.target.value)}
              className="bg-white border border-slate-200 text-xs font-poppins font-medium text-slate-700 px-3.5 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 shadow-2xs cursor-pointer"
            >
              <option value="3">Top 3 items</option>
              <option value="5">Top 5 items</option>
              <option value="all">Semua item terlacak</option>
            </select>

            <button
              type="button"
              onClick={handleExportReport}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-poppins font-semibold transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{exportedStatus ? 'Laporan Telah Diunduh' : 'Export Report'}</span>
            </button>
          </div>

          <p className="font-poppins text-[11px] text-slate-400">
            6 item konten terlacak pada periode aktif. Item terbaik akan dimasukkan dalam berkas ringkasan.
          </p>
        </div>

        {/* Step 3: Paste what the AI told you */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4">
          <div>
            <h2 className="font-poppins font-bold text-sm text-slate-900 flex items-center gap-2">
              <span className="font-mono text-blue-600 font-bold text-xs bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/80">
                3
              </span>
              <span>Paste what the AI told you</span>
            </h2>
            <p className="font-poppins text-xs text-slate-500 mt-1">
              Masukkan temuan utama dan daftar tindakan taktis untuk otomatis dijadikan agenda kerja.
            </p>
          </div>

          <form onSubmit={handleSaveInsight} className="space-y-4">
            <div>
              <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                Insight Title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Contoh: Artikel teknis LinkedIn menghasilkan konversi prospek B2B tertinggi"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>

            <div>
              <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                Paste the AI's response here
              </label>
              <textarea
                rows={3}
                value={analysisText}
                onChange={(e) => setAnalysisText(e.target.value)}
                placeholder="Tempelkan ringkasan hasil analisis atau rekomendasi di sini..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 leading-relaxed resize-y"
              />
            </div>

            <div>
              <label className="block font-poppins text-xs font-semibold text-slate-700 mb-1">
                Action Items (satu per baris)
              </label>
              <textarea
                rows={3}
                value={actionItemsText}
                onChange={(e) => setActionItemsText(e.target.value)}
                placeholder="Tingkatkan frekuensi studi kasus LinkedIn&#10;Gunakan diagram blueprint arsitektur pada slide pembuka&#10;Uji call-to-action konsultasi langsung"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-poppins text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 font-mono text-[11px] leading-relaxed resize-y"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-poppins font-semibold transition-colors shadow-xs cursor-pointer"
            >
              Save Insight
            </button>
          </form>
        </div>

        {/* Step 4: Find your to-dos on the Dashboard */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-poppins font-bold text-sm text-slate-900 flex items-center gap-2">
              <span className="font-mono text-blue-600 font-bold text-xs bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/80">
                4
              </span>
              <span>Find your to-dos on the Dashboard</span>
            </h2>
            <p className="font-poppins text-xs text-slate-500 mt-1">
              Seluruh action items yang Anda simpan akan tersinkronisasi langsung ke konsol Dashboard utama.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold font-poppins transition-colors shrink-0 shadow-2xs"
          >
            <span>Buka AI Recommendations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Insight History Section matching video */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4">
        <h3 className="font-poppins font-bold text-base text-slate-900">
          Insight History
        </h3>

        <div className="space-y-4 divide-y divide-slate-100">
          {history.map((item, idx) => (
            <div key={item.id} className={idx > 0 ? 'pt-4' : ''}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h4 className="font-poppins font-bold text-sm text-slate-900">
                  {item.title}
                </h4>
                <span className="font-mono text-[11px] text-slate-400">
                  {item.date}
                </span>
              </div>

              <p className="font-poppins text-xs text-slate-600 leading-relaxed mb-3">
                {item.summary}
              </p>

              <div className="rounded-xl bg-slate-50/80 border border-slate-200/70 p-3 space-y-1.5">
                <span className="block font-poppins font-semibold text-[11px] text-slate-700">
                  Rekomendasi Tindakan:
                </span>
                <ul className="space-y-1">
                  {item.actionItems.map((action, aIdx) => (
                    <li
                      key={aIdx}
                      className="flex items-start gap-2 font-poppins text-xs text-slate-600"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
