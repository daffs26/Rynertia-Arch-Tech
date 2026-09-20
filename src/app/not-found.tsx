'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass, FolderKanban } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-8 py-16 selection:bg-blue-600 selection:text-white">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Brand Emblem */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-3">
          <img
            src="/logo-icon.png"
            alt="Rynertia Arc Tech"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Status & Code */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
            Halaman atau inisiatif proyek yang Anda tuju telah dipindahkan, diperbarui, atau tidak tersedia di server kami.
          </p>
        </div>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-600/20 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs transition-all cursor-pointer shadow-sm"
          >
            <FolderKanban className="w-4 h-4 text-slate-500" />
            <span>Galeri Portofolio</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-200 text-[11px] font-mono text-slate-400">
          Rynertia Arc Tech &bull; Enterprise Architecture &amp; Consulting
        </div>
      </div>
    </div>
  );
}
