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
  User,
  Check,
} from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  
  // Sign In Form State
  const [email, setEmail] = useState('admin@rynertia.id');
  const [password, setPassword] = useState('admin123');
  const [rememberMe, setRememberMe] = useState(true);

  // Sign Up Form State
  const [fullName, setFullName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (signUpPassword !== confirmPassword) {
      setErrorMessage('Konfirmasi kata sandi tidak cocok. Harap periksa kembali.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Akun administrator berhasil dibuat. Mengalihkan ke dashboard...');
      setTimeout(() => {
        router.push('/dashboard');
      }, 800);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F0F4FA] text-slate-900 font-poppins flex items-center justify-center p-4 sm:p-6 lg:p-8 selection:bg-blue-600 selection:text-white">
      {/* Centered Split-Screen Card */}
      <div className="max-w-4xl lg:max-w-[960px] w-full mx-auto bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(37,99,235,0.09),0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden flex flex-col md:flex-row transition-all">
        
        {/* LEFT COLUMN: Blue Panel with Rynertia Arc Tech Official Logo (Gambar ke-3) */}
        <div className="w-full md:w-[46%] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden text-white rounded-t-[28px] md:rounded-t-none md:rounded-l-[28px] md:rounded-tr-[40px] md:rounded-br-[64px] shadow-lg md:shadow-none z-10">
          
          {/* Subtle Background Ambience */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-1/3 right-0 w-44 h-44 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />

          {/* Center Logo & Brand Typography (Tanpa badge putih, teks berwarna putih) */}
          <div className="my-auto py-8 sm:py-12 flex flex-col items-center justify-center relative z-10 text-center">
            <div className="relative flex items-center justify-center hover:scale-105 transition-transform duration-300">
              {/* Soft subtle ambient glow */}
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full -z-10" />
              <img
                src="/logo-icon.png"
                alt="Rynertia Arc Tech Logo"
                className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-2xl"
              />
            </div>

            <div className="mt-6 text-center">
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-white tracking-wider leading-tight drop-shadow-sm">
                RYNERTIA
              </h2>
              <p className="font-poppins font-semibold text-xs sm:text-sm tracking-[0.25em] text-white mt-1 uppercase drop-shadow-sm">
                ARC TECH
              </p>
              <p className="mt-3 text-xs font-poppins font-normal text-white/80 max-w-[240px] mx-auto leading-relaxed">
                Technology Consulting & Digital Systems
              </p>
            </div>
          </div>

          {/* Bottom Social Links & Copyright */}
          <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-white/80">
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

        {/* RIGHT COLUMN: Clean White Form Side (Sign In / Create Account) */}
        <div className="w-full md:w-[54%] p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white">
          
          {/* Top Header */}
          <div className="flex items-center justify-between mb-4">
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

          {/* Success Notification if registered */}
          {successMessage && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Form Content: Switch between Sign In and Create Account */}
          {!isSignUp ? (
            /* ─────────────────────────────────────────────────────────────
               SIGN IN FORM
               ───────────────────────────────────────────────────────────── */
            <div>
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900 font-poppins tracking-tight">
                  Sign in
                </h1>
                <p className="text-xs text-slate-500 font-poppins mt-1">
                  Konsol Administrator Rynertia Arc Tech
                </p>
              </div>

              <form onSubmit={handleSignIn} className="space-y-5">
                {/* Email Input */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins mb-1">
                    LOGIN
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@rynertia.id"
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

                {/* Remember Me & Forgot Password */}
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

                {/* Submit Row + Switch to Sign Up */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-poppins">
                    No account?{' '}
                    <button
                      type="button"
                      onClick={() => setIsSignUp(true)}
                      className="text-blue-600 font-semibold hover:underline cursor-pointer focus:outline-hidden"
                    >
                      Sign up
                    </button>
                  </div>

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
            </div>
          ) : (
            /* ─────────────────────────────────────────────────────────────
               CREATE ACCOUNT FORM (SIGN UP)
               ───────────────────────────────────────────────────────────── */
            <div>
              <div className="mb-5">
                <h1 className="text-2xl font-bold text-slate-900 font-poppins tracking-tight">
                  Create account
                </h1>
                <p className="text-xs text-slate-500 font-poppins mt-1">
                  Pendaftaran akun Administrator baru Rynertia Arc Tech
                </p>
              </div>

              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-poppins">
                  {errorMessage}
                </div>
              )}

              {successMessage && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-poppins">
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSignUp} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins mb-1">
                    FULL NAME
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Daffa Administrator"
                      className="w-full py-1.5 bg-transparent border-b border-slate-200 focus:border-blue-600 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden transition-colors font-poppins"
                    />
                    <User className="w-3.5 h-3.5 text-slate-400 absolute right-1 top-2" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins mb-1">
                    EMAIL ADMINISTRATOR
                  </label>
                  <input
                    type="email"
                    required
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    placeholder="nama@rynertia.id"
                    className="w-full py-1.5 bg-transparent border-b border-slate-200 focus:border-blue-600 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden transition-colors font-poppins"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins mb-1">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    required
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    placeholder="Minimal 8 karakter"
                    className="w-full py-1.5 bg-transparent border-b border-slate-200 focus:border-blue-600 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden transition-colors font-mono tracking-wider"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-poppins mb-1">
                    CONFIRM PASSWORD
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Ulangi kata sandi"
                    className="w-full py-1.5 bg-transparent border-b border-slate-200 focus:border-blue-600 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden transition-colors font-mono tracking-wider"
                  />
                </div>

                {/* Agree Policy */}
                <div className="pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 cursor-pointer"
                    />
                    <span className="text-[11px] text-slate-600 font-poppins font-normal leading-tight">
                      Saya menyetujui Kebijakan Akses Administrator Internal
                    </span>
                  </label>
                </div>

                {/* Submit Row + Switch to Sign In */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-poppins">
                    Have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setIsSignUp(false)}
                      className="text-blue-600 font-semibold hover:underline cursor-pointer focus:outline-hidden"
                    >
                      Sign in
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs font-poppins transition-all shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[40px]"
                  >
                    {isLoading ? (
                      <span>Memproses...</span>
                    ) : (
                      <>
                        <span>Create account</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Alternative Quick Authentication Options */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => handleSignIn({ preventDefault: () => {} } as React.FormEvent)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-[11px] font-medium font-poppins transition-colors cursor-pointer shadow-2xs"
            >
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
              onClick={() => handleSignIn({ preventDefault: () => {} } as React.FormEvent)}
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
