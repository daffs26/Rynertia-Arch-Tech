'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ShieldCheck,
  Lock,
  Mail,
  ArrowRight,
  ExternalLink,
  Info,
} from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@rynertia.id');
  const [password, setPassword] = useState('admin123');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Visual simulated auth
    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Bar */}
      <header className="flex items-center justify-between max-w-5xl w-full mx-auto relative z-10">
        <Link href="/id" className="flex items-center gap-3 group">
          <div className="w-9 h-9 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
            <img
              src="/logo-icon.png"
              alt="Rynertia Arc Tech Logo"
              className="w-9 h-9 object-contain drop-shadow-sm"
            />
          </div>
          <div>
            <span className="block font-bold text-base tracking-wider text-white leading-tight">
              RYNERTIA
            </span>
            <span className="block text-[10px] font-semibold tracking-widest text-gradient-blue">
              ARC TECH
            </span>
          </div>
        </Link>

        <Link
          href="/id"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-medium transition-colors"
        >
          <span>Kembali ke Web Publik</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </header>

      {/* Center Auth Card */}
      <main className="max-w-md w-full mx-auto my-auto py-12 relative z-10">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          {/* Card Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 mx-auto flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Konsol Administrator
            </h1>
            <p className="mt-1 text-xs text-slate-400">
              PRD 18: Single-Role Administrator Portal
            </p>
          </div>

          {/* Quick Demo Info Alert */}
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-[11px] text-slate-300 flex items-start gap-2 mb-6">
            <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span>Kredensial demo terisi otomatis:</span>
              <span className="block font-mono text-slate-400 mt-0.5">
                admin@rynertia.id / admin123
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Email Administrator
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@rynertia.id"
                  className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder:text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder:text-slate-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/25 cursor-pointer mt-2 min-h-[44px]"
            >
              {isLoading ? (
                <span>Memverifikasi Akses...</span>
              ) : (
                <>
                  <span>Masuk ke Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-600 relative z-10">
        &copy; {new Date().getFullYear()} Rynertia Arc Tech. Hak Cipta Dilindungi.
      </footer>
    </div>
  );
}
