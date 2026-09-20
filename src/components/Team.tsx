'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { teamMembers } from '@/data/teamData';
import { CustomDropdown } from '@/components/CustomDropdown';
import { Network, Users, ArrowUpRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper';

export const Team: React.FC = () => {
  const { language, t } = useLanguage();
  const [viewMode, setViewMode] = useState<'chart' | 'grid'>('chart');
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterButtons = [
    { key: 'all', labelKey: 'tab-all' as const },
    { key: 'exec', labelKey: 'tab-exec' as const },
    { key: 'lead', labelKey: 'tab-lead' as const },
    { key: 'it', labelKey: 'tab-it' as const },
    { key: 'marketing', labelKey: 'tab-mkt' as const },
    { key: 'ra', labelKey: 'tab-ra' as const },
  ];

  const filteredMembers = teamMembers.filter(member => {
    if (activeTab === 'all') return true;
    return member.dept.includes(activeTab);
  });

  return (
    <section id="team" className="py-14 sm:py-24 bg-white relative">
      {/* Anchor alias for backwards compatibility with #organization links */}
      <div id="organization" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {t('team-title')}{' '}
              <span className="text-gradient-blue">RYNERTIA ARC TECH</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t('team-subtitle')}
            </p>
          </div>
        </FadeIn>

        {/* View Mode Switcher Buttons (Always Side-by-Side / Kiri Kanan) */}
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 w-full max-w-lg mx-auto px-2">
          <button
            type="button"
            onClick={() => setViewMode('chart')}
            className={`flex-1 sm:flex-initial px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer min-h-[44px] whitespace-nowrap ${
              viewMode === 'chart'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-600'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600 shadow-sm'
            }`}
          >
            <Network className="w-4 h-4 shrink-0" />
            <span>{t('tab-chart')}</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`flex-1 sm:flex-initial px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer min-h-[44px] whitespace-nowrap ${
              viewMode === 'grid'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-600'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600 shadow-sm'
            }`}
          >
            <Users className="w-4 h-4 shrink-0" />
            <span>{t('tab-all')}</span>
          </button>
        </div>

        {/* ── VIEW 1: ORGANIZATIONAL STRUCTURE CHART ──────────────── */}
        {viewMode === 'chart' && (
          <div className="space-y-12">
            {/* Chart Canvas Card */}
            <div className="glass-card rounded-3xl p-4 sm:p-10 border border-slate-200/90 shadow-xl bg-slate-50/40 relative overflow-x-auto">
              {/* Chart Branding Header */}
              <div className="text-center pb-8 mb-8 border-b border-slate-200/80">
                <div className="w-12 h-12 mx-auto mb-2 relative flex items-center justify-center">
                  <img
                    src="/logo-icon.png"
                    alt="Rynertia Arc Tech"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Rynertia Arc Tech
                </h3>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 mt-0.5">
                  {language === 'id' ? 'STRUKTUR ORGANISASI' : 'ORGANIZATIONAL STRUCTURE'}
                </p>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  {language === 'id' ? 'Dewan Eksekutif & Struktur Departemen' : 'Executive Suite & Department Framework'}
                </p>
              </div>

              {/* 1. EXECUTIVE SUITE SECTION */}
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3.5 py-1 rounded-lg bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {language === 'id' ? 'DEWAN EKSEKUTIF' : 'EXECUTIVE SUITE'}
                  </span>
                  <div className="h-[1px] flex-1 bg-slate-200" />
                </div>

                <div className="flex flex-col items-center space-y-6">
                  {/* Top Box: Board of Commissioners & Founder */}
                  <Link
                    href={`/${language}/team/andiryaas`}
                    className="relative group min-w-[280px] sm:min-w-[340px] text-center bg-white p-5 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-rose-300 hover:scale-[1.02] transition-all cursor-pointer block"
                  >
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-[10px] font-bold tracking-wider text-rose-600 uppercase">
                        {language === 'id' ? 'DEWAN KOMISARIS & PENDIRI' : 'BOARD OF COMMISSIONERS & FOUNDER'}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-rose-500 opacity-0 group-hover:opacity-100 transition" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                      Andi Ryaas Saputra Effendy
                    </h4>
                    <span className="text-[11px] text-slate-400 group-hover:text-slate-600 transition block mt-0.5">
                      {language === 'id' ? 'Klik untuk melihat profil & biodata' : 'Click to view profile & biodata'}
                    </span>
                  </Link>

                  {/* Connecting Vertical Stem */}
                  <div className="w-0.5 h-6 bg-slate-300 relative" />

                  {/* Secretary & Treasurer Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                    {/* Secretary */}
                    <Link
                      href={`/${language}/team/mayra`}
                      className="relative group text-center bg-white p-4.5 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-indigo-300 hover:scale-[1.02] transition-all cursor-pointer block"
                    >
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-[10px] font-bold tracking-wider text-indigo-600 uppercase">
                          {language === 'id' ? 'SEKRETARIS' : 'SECRETARY'}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-indigo-500 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                        Mayra Aurellia Attiqah Surya
                      </h4>
                    </Link>

                    {/* Treasurer */}
                    <Link
                      href={`/${language}/team/nicholas`}
                      className="relative group text-center bg-white p-4.5 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-indigo-300 hover:scale-[1.02] transition-all cursor-pointer block"
                    >
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-[10px] font-bold tracking-wider text-indigo-600 uppercase">
                          {language === 'id' ? 'BENDAHARA' : 'TREASURER'}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-indigo-500 opacity-0 group-hover:opacity-100 transition" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                        Nicholas Albhe Indriananda
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 2. DEPARTMENT FRAMEWORK LEADS (5 Colorful Pill Badges) */}
              <div className="mb-14">
                <div className="text-center mb-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    {language === 'id' ? 'Pimpinan Departemen' : 'Department Framework Leads'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
                  {/* Lead - IT */}
                  <Link
                    href={`/${language}/team/syaamil`}
                    className="bg-sky-500 hover:bg-sky-600 text-white p-3.5 rounded-2xl text-center shadow-md hover:scale-[1.03] transition-all block group"
                  >
                    <span className="block text-[9px] font-bold tracking-wider text-sky-100 uppercase mb-0.5">
                      {language === 'id' ? 'PIMPINAN - IT' : 'LEAD - IT'}
                    </span>
                    <h5 className="text-xs font-bold truncate group-hover:underline">
                      Muhammad Syaamil Muzhaffar
                    </h5>
                  </Link>

                  {/* Lead - Marketing */}
                  <Link
                    href={`/${language}/team/femas`}
                    className="bg-orange-500 hover:bg-orange-600 text-white p-3.5 rounded-2xl text-center shadow-md hover:scale-[1.03] transition-all block group"
                  >
                    <span className="block text-[9px] font-bold tracking-wider text-orange-100 uppercase mb-0.5">
                      {language === 'id' ? 'PIMPINAN - PEMASARAN' : 'LEAD - MARKETING'}
                    </span>
                    <h5 className="text-xs font-bold truncate group-hover:underline">
                      Femas Hernanda
                    </h5>
                  </Link>

                  {/* Lead - Design */}
                  <Link
                    href={`/${language}/team/firdaus`}
                    className="bg-amber-500 hover:bg-amber-600 text-white p-3.5 rounded-2xl text-center shadow-md hover:scale-[1.03] transition-all block group"
                  >
                    <span className="block text-[9px] font-bold tracking-wider text-amber-100 uppercase mb-0.5">
                      {language === 'id' ? 'PIMPINAN - DESAIN' : 'LEAD - DESIGN'}
                    </span>
                    <h5 className="text-xs font-bold truncate group-hover:underline">
                      Muhammad Firdaus
                    </h5>
                  </Link>

                  {/* Lead - Analysis */}
                  <Link
                    href={`/${language}/team/puterarayhan`}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-2xl text-center shadow-md hover:scale-[1.03] transition-all block group"
                  >
                    <span className="block text-[9px] font-bold tracking-wider text-emerald-100 uppercase mb-0.5">
                      {language === 'id' ? 'PIMPINAN - ANALISIS' : 'LEAD - ANALYSIS'}
                    </span>
                    <h5 className="text-xs font-bold truncate group-hover:underline">
                      Putera Rayhan Hidayat
                    </h5>
                  </Link>

                  {/* Lead - Research */}
                  <Link
                    href={`/${language}/team/mikhanaftali`}
                    className="bg-rose-600 hover:bg-rose-700 text-white p-3.5 rounded-2xl text-center shadow-md hover:scale-[1.03] transition-all block group"
                  >
                    <span className="block text-[9px] font-bold tracking-wider text-rose-100 uppercase mb-0.5">
                      {language === 'id' ? 'PIMPINAN - RISET' : 'LEAD - RESEARCH'}
                    </span>
                    <h5 className="text-xs font-bold truncate group-hover:underline">
                      Mikha Naftali
                    </h5>
                  </Link>
                </div>
              </div>

              {/* 3. DEPARTMENTS & OPERATIONAL PERSONNEL */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3.5 py-1 rounded-lg bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {language === 'id' ? 'DEPARTEMEN' : 'DEPARTMENTS'}
                  </span>
                  <div className="h-[1px] flex-1 bg-slate-200" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Department 1: IT DEPARTMENT */}
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md flex flex-col justify-between">
                    <div className="bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-3.5 text-white">
                      <h4 className="text-xs font-bold uppercase tracking-wider">
                        {language === 'id' ? 'DEPARTEMEN IT' : 'IT DEPARTMENT'}
                      </h4>
                    </div>

                    <div className="p-5 space-y-4 flex-1">
                      {/* Lead */}
                      <Link
                        href={`/${language}/team/syaamil`}
                        className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3 hover:text-blue-600 transition group"
                      >
                        <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                          {language === 'id' ? 'PIMPINAN' : 'LEAD'}
                        </span>
                        <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 text-right flex items-center gap-1">
                          Muhammad Syaamil Muzhaffar
                          <ArrowUpRight className="w-3 h-3 text-blue-600 opacity-0 group-hover:opacity-100 transition" />
                        </span>
                      </Link>

                      {/* Members */}
                      <div>
                        <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-2">
                          {language === 'id' ? 'ANGGOTA' : 'MEMBERS'}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <Link
                            href={`/${language}/team/daffa`}
                            className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 text-center hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition"
                          >
                            Muhammad Daffa Aulia Syahrul
                          </Link>
                          <Link
                            href={`/${language}/team/kevin`}
                            className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 text-center hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition"
                          >
                            Kevin Jiulana Arifin
                          </Link>
                          <Link
                            href={`/${language}/team/feriza`}
                            className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 text-center hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition"
                          >
                            Feriza Aulia Akram
                          </Link>
                          <Link
                            href={`/${language}/team/abdul`}
                            className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 text-center hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition"
                          >
                            Abdul Mutolib
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Department 2: MARKETING & DESIGN DEPARTMENT */}
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md flex flex-col justify-between">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-3.5 text-white">
                      <h4 className="text-xs font-bold uppercase tracking-wider">
                        {language === 'id' ? 'DEPARTEMEN PEMASARAN & DESAIN' : 'MARKETING & DESIGN DEPARTMENT'}
                      </h4>
                    </div>

                    <div className="p-5 space-y-4 flex-1">
                      {/* Leads */}
                      <div className="space-y-2 border-b border-slate-100 pb-3">
                        <Link
                          href={`/${language}/team/femas`}
                          className="flex items-start justify-between gap-2 hover:text-orange-600 transition group"
                        >
                          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                            {language === 'id' ? 'PIMPINAN, PEMASARAN' : 'LEAD, MARKETING'}
                          </span>
                          <span className="text-xs font-bold text-slate-900 group-hover:text-orange-600 text-right flex items-center gap-1">
                            Femas Hernanda
                            <ArrowUpRight className="w-3 h-3 text-orange-600 opacity-0 group-hover:opacity-100 transition" />
                          </span>
                        </Link>
                        <Link
                          href={`/${language}/team/firdaus`}
                          className="flex items-start justify-between gap-2 hover:text-amber-600 transition group"
                        >
                          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                            {language === 'id' ? 'PIMPINAN, DESAIN' : 'LEAD, DESIGN'}
                          </span>
                          <span className="text-xs font-bold text-slate-900 group-hover:text-amber-600 text-right flex items-center gap-1">
                            Muhammad Firdaus
                            <ArrowUpRight className="w-3 h-3 text-amber-600 opacity-0 group-hover:opacity-100 transition" />
                          </span>
                        </Link>
                      </div>

                      {/* Members */}
                      <div>
                        <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-2">
                          {language === 'id' ? 'ANGGOTA' : 'MEMBERS'}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <Link
                            href={`/${language}/team/naila`}
                            className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 text-center hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50/50 transition"
                          >
                            Naila Al Jasmine
                          </Link>
                          <Link
                            href={`/${language}/team/nayla`}
                            className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 text-center hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50/50 transition"
                          >
                            Nayla Nadin Ahmad
                          </Link>
                          <Link
                            href={`/${language}/team/beqiatus`}
                            className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 text-center hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50/50 transition"
                          >
                            Beqiatus Giatsyah
                          </Link>
                          <Link
                            href={`/${language}/team/desnita`}
                            className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 text-center hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50/50 transition"
                          >
                            Desnita Nurfida
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Department 3: RESEARCH & ANALYSIS DEPARTMENT */}
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md flex flex-col justify-between">
                    <div className="bg-gradient-to-r from-emerald-600 via-purple-600 to-rose-600 px-5 py-3.5 text-white">
                      <h4 className="text-xs font-bold uppercase tracking-wider">
                        {language === 'id' ? 'DEPARTEMEN RISET & ANALISIS' : 'RESEARCH & ANALYSIS DEPARTMENT'}
                      </h4>
                    </div>

                    <div className="p-5 space-y-4 flex-1">
                      {/* Leads */}
                      <div className="space-y-2 border-b border-slate-100 pb-3">
                        <Link
                          href={`/${language}/team/puterarayhan`}
                          className="flex items-start justify-between gap-2 hover:text-emerald-600 transition group"
                        >
                          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                            {language === 'id' ? 'PIMPINAN, ANALISIS' : 'LEAD, ANALYSIS'}
                          </span>
                          <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 text-right flex items-center gap-1">
                            Putera Rayhan Hidayat
                            <ArrowUpRight className="w-3 h-3 text-emerald-600 opacity-0 group-hover:opacity-100 transition" />
                          </span>
                        </Link>
                        <Link
                          href={`/${language}/team/mikhanaftali`}
                          className="flex items-start justify-between gap-2 hover:text-rose-600 transition group"
                        >
                          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                            {language === 'id' ? 'PIMPINAN, RISET' : 'LEAD, RESEARCH'}
                          </span>
                          <span className="text-xs font-bold text-slate-900 group-hover:text-rose-600 text-right flex items-center gap-1">
                            Mikha Naftali
                            <ArrowUpRight className="w-3 h-3 text-rose-600 opacity-0 group-hover:opacity-100 transition" />
                          </span>
                        </Link>
                      </div>

                      {/* Members */}
                      <div>
                        <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-2">
                          {language === 'id' ? 'ANGGOTA' : 'MEMBERS'}
                        </span>
                        <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-400 text-center italic">
                          {language === 'id' ? 'Segera Diumumkan' : 'TBC (To Be Confirmed)'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart Bottom Label */}
              <div className="text-center pt-8 mt-10 border-t border-slate-200 text-[11px] text-slate-400 font-medium">
                {language === 'id' ? 'Rynertia Arc Tech • Bagan Struktur Organisasi' : 'Rynertia Arc Tech • Organizational Chart'}
              </div>
            </div>
          </div>
        )}

        {/* ── VIEW 2: ALL PERSONNEL CARDS (GRID VIEW) ─────────────── */}
        {viewMode === 'grid' && (
          <div>
            {/* Mobile Filter Dropdown */}
            <div className="sm:hidden max-w-xs mx-auto mb-8">
              <CustomDropdown
                value={activeTab}
                onChange={val => setActiveTab(val)}
                options={filterButtons.map(btn => ({
                  value: btn.key,
                  label: t(btn.labelKey),
                }))}
                placeholder="Filter Department"
              />
            </div>

            {/* Desktop Filter Buttons (Clean White & Blue, No Gray) */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-2 mb-12">
              {filterButtons.map(btn => (
                <button
                  key={btn.key}
                  onClick={() => setActiveTab(btn.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === btn.key
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 border border-blue-600'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600 shadow-sm'
                  }`}
                >
                  {t(btn.labelKey)}
                </button>
              ))}
            </div>

            {/* Department Arched Portrait Cards Grid with Stagger Animation */}
            <StaggerContainer
              staggerDelay={0.08}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {filteredMembers.map(member => {
                // Determine Department Card Gradient & Watermark
                let cardGradient = 'from-blue-600 to-indigo-800';
                let watermark = 'ENGINEERING';
                let badgeColor = 'bg-blue-500/80 text-white';

                if (member.dept.includes('exec')) {
                  cardGradient = 'from-rose-600 via-purple-700 to-indigo-900';
                  watermark = 'EXECUTIVE';
                  badgeColor = 'bg-rose-500/80 text-white';
                } else if (member.dept.includes('marketing')) {
                  cardGradient = 'from-orange-500 via-amber-600 to-rose-700';
                  watermark = 'CREATIVE';
                  badgeColor = 'bg-orange-500/80 text-white';
                } else if (member.dept.includes('ra')) {
                  cardGradient = 'from-emerald-600 via-teal-700 to-indigo-900';
                  watermark = 'STRATEGY';
                  badgeColor = 'bg-emerald-500/80 text-white';
                }

                return (
                  <StaggerItem key={member.id}>
                    <Link
                      href={`/${language}/team/${member.id}`}
                      className="group block relative overflow-hidden rounded-tl-[48px] rounded-tr-2xl rounded-b-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer bg-slate-900 h-full"
                    >
                      {/* Arched Background Banner */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${cardGradient} opacity-90 transition-opacity duration-500 group-hover:opacity-100`}
                      />

                      {/* Vertical Background Typography Watermark */}
                      <span className="absolute top-6 left-3 text-white/20 font-black tracking-widest text-3xl sm:text-4xl uppercase select-none pointer-events-none [writing-mode:vertical-rl] rotate-180">
                        {watermark}
                      </span>

                      {/* Top Right Department Badge */}
                      <div className="absolute top-3.5 right-3.5 z-20">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-sm ${badgeColor}`}
                        >
                          {language === 'id' ? member.badgeId : member.badgeEn}
                        </span>
                      </div>

                      {/* Member Portrait Image Container */}
                      <div className="relative h-[340px] sm:h-[380px] w-full flex items-end justify-center overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />

                        {/* Bottom Gradient Scrim Overlay */}
                        <div className="absolute inset-x-0 bottom-0 pt-20 pb-5 px-5 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end text-left z-10">
                          <div className="flex items-end justify-between gap-2">
                            <div className="min-w-0 flex-1">
                              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-200 transition-colors leading-snug drop-shadow-md truncate">
                                {member.name}
                              </h3>
                              <p className="text-xs text-white/80 font-medium tracking-wide mt-0.5 line-clamp-1">
                                {language === 'id' ? member.roleId : member.roleEn}
                              </p>
                            </div>

                            <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 shadow-sm">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        )}
      </div>
    </section>
  );
};




