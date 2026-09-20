'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Lock,
  ArrowRight,
  ExternalLink,
  Shield,
  Linkedin,
  Globe,
  Github,
} from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@rynertia.id');
  const [password, setPassword] = useState('admin123');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Visual simulated authentication
    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F0F4FA] text-slate-900 font-poppins flex items-center justify-center p-4 sm:p-6 lg:p-8 selection:bg-blue-600 selection:text-white">
      {/* Centered Split-Screen Card */}
      <div className="max-w-4xl lg:max-w-[960px] w-full mx-auto bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(37,99,235,0.09),0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden flex flex-col md:flex-row transition-all">
        
        {/* LEFT COLUMN: Blue Illustration Panel */}
        <div className="w-full md:w-[46%] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden text-white rounded-t-[28px] md:rounded-t-none md:rounded-l-[28px] md:rounded-tr-[40px] md:rounded-br-[64px] shadow-lg md:shadow-none z-10">
          
          {/* Subtle Background Ambience Clouds */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-36 h-36 bg-sky-400/20 rounded-full blur-xl pointer-events-none" />

          {/* Top Brand Indicator */}
          <div className="flex items-center gap-2.5 relative z-10">
            <div className="w-8 h-8 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
              <img
                src="/logo-icon.png"
                alt="Rynertia Arc Tech Logo"
                className="w-5 h-5 object-contain"
              />
            </div>
            <div>
              <span className="block font-bold text-xs tracking-wider text-white leading-tight font-poppins">
                RYNERTIA
              </span>
              <span className="block text-[9px] font-semibold tracking-widest text-sky-200 font-poppins">
                ARC TECH
              </span>
            </div>
          </div>

          {/* Center Tech Workstation Illustration (Vector Art matching reference) */}
          <div className="my-8 flex flex-col items-center justify-center relative z-10">
            <svg
              className="w-full max-w-[280px] h-auto drop-shadow-md"
              viewBox="0 0 320 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Soft Room Ambience Arch */}
              <path
                d="M40 210 C40 110, 100 50, 200 50 C260 50, 290 90, 290 210 Z"
                fill="currentColor"
                className="text-blue-500/25"
              />

              {/* Distant Window & Digital Dashboard elements */}
              <rect x="180" y="80" width="80" height="90" rx="12" fill="white" fillOpacity="0.08" />
              <line x1="195" y1="100" x2="245" y2="100" stroke="white" strokeOpacity="0.3" strokeWidth="3" strokeLinecap="round" />
              <line x1="195" y1="115" x2="230" y2="115" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
              <line x1="195" y1="128" x2="240" y2="128" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />

              {/* Plant on the left */}
              <path d="M55 195 Q52 175 45 168 Q58 178 55 195" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
              <path d="M55 195 Q60 178 68 172 Q59 184 55 195" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
              <rect x="48" y="195" width="14" height="15" rx="3" fill="#1E3A8A" />

              {/* Mailbox / Communication Tower */}
              <g transform="translate(68, 115)">
                {/* Mailbox Pole */}
                <line x1="16" y1="35" x2="16" y2="95" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round" />
                {/* Mailbox Body */}
                <path d="M4 15 C4 6, 12 0, 22 0 L32 0 C38 0, 42 6, 42 15 L42 35 L4 35 Z" fill="#1E3A8A" />
                {/* Mailbox Door & Letter */}
                <rect x="10" y="10" width="22" height="15" rx="2" fill="white" />
                <path d="M10 10 L21 18 L32 10" stroke="#2563EB" strokeWidth="1.5" />
                {/* Floating Notification Sparkles */}
                <circle cx="12" cy="4" r="1.5" fill="#FDE047" />
                <circle cx="28" cy="2" r="2" fill="#FDE047" />
                <circle cx="36" cy="8" r="1.5" fill="#FDE047" />
              </g>

              {/* Modern Work Desk */}
              <g transform="translate(100, 110)">
                {/* Table Top */}
                <rect x="0" y="8" width="160" height="12" rx="4" fill="#1E3A8A" />
                {/* Desk Drawers Left */}
                <rect x="8" y="20" width="44" height="80" rx="6" fill="#1E3A8A" />
                <rect x="14" y="28" width="32" height="18" rx="3" fill="#172554" />
                <circle cx="30" cy="37" r="2" fill="#60A5FA" />
                <rect x="14" y="52" width="32" height="18" rx="3" fill="#172554" />
                <circle cx="30" cy="61" r="2" fill="#60A5FA" />
                {/* Desk Leg Right */}
                <rect x="140" y="20" width="8" height="80" rx="4" fill="#1E3A8A" />

                {/* Character Sitting on Desk with Laptop */}
                {/* Hair */}
                <path
                  d="M48 -55 C38 -55, 30 -42, 30 -25 C30 -2, 36 2, 40 18 L58 18 C56 0, 62 -28, 62 -42 C62 -52, 56 -55, 48 -55 Z"
                  fill="#0F172A"
                />
                {/* Face Profile */}
                <circle cx="48" cy="-34" r="8" fill="#FDE68A" />
                {/* Yellow Top / Shirt */}
                <path d="M38 -20 Q48 -14 58 -20 L56 6 Q46 10 38 6 Z" fill="#FBBF24" />
                {/* Blue Jeans / Pants */}
                <path d="M40 6 L54 6 L64 36 L48 38 Z" fill="#3B82F6" />
                {/* Leg dangling */}
                <path d="M60 30 Q70 45 74 54 Q68 56 60 42 Z" fill="#3B82F6" />
                {/* Shoe */}
                <ellipse cx="76" cy="56" rx="5" ry="3" fill="#E2E8F0" />

                {/* Laptop on Desk */}
                <path d="M68 0 L72 -22 L94 -22 L90 0 Z" fill="#F8FAFC" />
                <rect x="66" y="0" width="28" height="4" rx="2" fill="#CBD5E1" />
                {/* Glow from screen */}
                <circle cx="76" cy="-14" r="1.5" fill="#FDE047" />
                <circle cx="84" cy="-8" r="2" fill="#FDE047" />
                <circle cx="92" cy="-18" r="1.5" fill="#FDE047" />
              </g>
            </svg>
          </div>

          {/* Bottom Social Links & Copyright */}
          <div className="relative z-10 pt-2 border-t border-white/15 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white/80">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/id"
                target="_blank"
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                title="Website Publik"
              >
                <Globe className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://github.com/daffs26/Rynertia-Arch-Tech"
                target="_blank"
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                title="Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-medium text-white/90">
                &copy; Rynertia Arc Tech
              </p>
              <p className="text-[9px] text-sky-200/75">
                All rights reserved
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Clean White Form Side */}
        <div className="w-full md:w-[54%] p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white">
          
          {/* Top Header with Brand Logo */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="block font-bold text-sm tracking-wider text-slate-900 font-poppins leading-tight">
                RYNERTIA
              </span>
              <span className="block text-[9px] font-semibold tracking-widest text-gradient-blue font-poppins">
                ARC TECH
              </span>
            </div>

            <Link
              href="/id"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-600 font-medium transition-colors"
            >
              <span>Web Publik</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 font-poppins tracking-tight">
              Sign in
            </h1>
            <p className="text-xs text-slate-500 font-poppins mt-1">
              Konsol Administrator Rynertia Arc Tech
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Login / Email Input (Underline / Minimalist Style) */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins mb-1">
                LOGIN
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="meghan.tormund@gmail.com"
                className="w-full py-2 bg-transparent border-b border-slate-200 focus:border-blue-600 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden transition-colors font-poppins"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins mb-1">
                PASSWORD
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full py-2 bg-transparent border-b border-slate-200 focus:border-blue-600 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden transition-colors font-mono tracking-wider"
              />
            </div>

            {/* Remember Me & Forgot Password Row */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 cursor-pointer"
                />
                <span className="text-xs text-slate-600 font-poppins font-normal">
                  Remember me
                </span>
              </label>

              <button
                type="button"
                onClick={() => alert('Untuk akun administrator internal, hubungi Super Admin Rynertia.')}
                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium font-poppins transition-colors cursor-pointer"
              >
                <Lock className="w-3 h-3" />
                <span>Forgot password?</span>
              </button>
            </div>

            {/* Submit & Demo Hint Row */}
            <div className="pt-2 flex items-center justify-between">
              <p className="text-xs text-slate-500 font-poppins">
                Demo access?{' '}
                <span className="font-mono text-blue-600 font-semibold">
                  admin@rynertia.id
                </span>
              </p>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs font-poppins transition-all shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[40px]"
              >
                {isLoading ? (
                  <span>Verifikasi...</span>
                ) : (
                  <>
                    <span>Sign in</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Alternative Quick Authentication Options */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-medium font-poppins transition-colors cursor-pointer shadow-2xs"
            >
              {/* Colorful Google 'G' icon */}
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google SSO</span>
            </button>

            <button
              type="button"
              onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-medium font-poppins transition-colors cursor-pointer shadow-2xs"
            >
              <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Company SSO</span>
            </button>

            <Link
              href="/id"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-medium font-poppins transition-colors shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Web Publik</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
