'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Linkedin,
  Github,
  Award,
  Compass,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { teamMembers } from '@/data/teamData';
import { useLanguage } from '@/context/LanguageContext';
import { Footer } from '@/components/Footer';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function TeamMemberProfilePage() {
  const routeParams = useParams();
  const { language } = useLanguage();

  const rawId = (typeof routeParams?.id === 'string' ? routeParams.id : Array.isArray(routeParams?.id) ? routeParams.id[0] : '') || '';

  const member = teamMembers.find(
    (m) => m.id.toLowerCase() === rawId.toLowerCase()
  );

  if (!member) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between transition-colors">
        <div className="max-w-xl mx-auto px-4 py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto mb-4 border border-rose-200 dark:border-rose-900/60">
            <Award className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {language === 'id' ? 'Personil Tidak Ditemukan' : 'Personnel Not Found'}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {language === 'id'
              ? 'Profil anggota tim yang Anda cari tidak tersedia dalam direktori.'
              : 'The team member profile you are looking for is not available in our directory.'}
          </p>
          <Link
            href={`/${language}/#team`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-md shadow-blue-600/20 hover:bg-blue-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {language === 'id'
                ? 'Kembali ke Direktori Tim'
                : 'Back to Team Directory'}
            </span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Find other members in the same department or adjacent
  const departmentMembers = teamMembers.filter(
    (m) => m.id !== member.id && m.dept.some((d) => member.dept.includes(d))
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between selection:bg-blue-600 selection:text-white transition-colors duration-200">
      <div>
        {/* Back Navigation Bar */}
        <div className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
            <Link
              href={`/${language}/#team`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                {language === 'id' ? 'Kembali ke Tim' : 'Back to Team'}
              </span>
            </Link>

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Controls: Theme & Language */}
              <ThemeToggle />
              <LanguageSwitcher />

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                <Link href={`/${language}`} className="hover:text-slate-600 dark:hover:text-slate-300 transition">
                  {language === 'id' ? 'Beranda' : 'Home'}
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href={`/${language}/#team`} className="hover:text-slate-600 dark:hover:text-slate-300 transition">
                  {language === 'id' ? 'Tim' : 'Team'}
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-900 dark:text-white font-medium truncate max-w-[120px] sm:max-w-[200px]">
                  {member.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-10">
          {/* Header Profile Section */}
          {(() => {
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
              <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/50 dark:from-blue-900/20 via-sky-50/30 dark:via-sky-950/20 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full max-w-[320px] relative overflow-hidden rounded-tl-[48px] rounded-tr-2xl rounded-b-2xl shadow-xl bg-slate-900">
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${cardGradient} opacity-95`}
                      />

                      <span className="absolute top-6 left-3 text-white/20 font-black tracking-widest text-3xl sm:text-4xl uppercase select-none pointer-events-none [writing-mode:vertical-rl] rotate-180">
                        {watermark}
                      </span>

                      <div className="absolute top-3.5 right-3.5 z-20">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-sm ${badgeColor}`}
                        >
                          {language === 'id' ? member.badgeId : member.badgeEn}
                        </span>
                      </div>

                      <div className="relative h-[380px] sm:h-[420px] w-full flex items-end justify-center overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03]"
                        />

                        <div className="absolute inset-x-0 bottom-0 pt-20 pb-5 px-5 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end text-left z-10">
                          <h2 className="text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-md">
                            {member.name}
                          </h2>
                          <p className="text-xs text-white/80 font-medium tracking-wide mt-0.5">
                            {language === 'id' ? member.roleId : member.roleEn}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${member.avatarStyle.badgeBg} ${member.avatarStyle.badgeText}`}
                        >
                          {language === 'id' ? member.badgeId : member.badgeEn}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                          {language === 'id'
                            ? member.departmentNameId
                            : member.departmentNameEn}
                        </span>
                      </div>

                      <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {member.name}
                      </h1>

                      <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                        {language === 'id' ? member.roleId : member.roleEn}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                        <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>{member.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                        <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>
                          {language === 'id'
                            ? member.experienceId
                            : member.experienceEn}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
                        <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>
                          {language === 'id'
                            ? member.educationId
                            : member.educationEn}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {language === 'id' ? member.bioId : member.bioEn}
                    </p>

                    {member.quoteId && (
                      <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-xs italic text-blue-950 dark:text-blue-200 font-medium leading-relaxed">
                        {language === 'id' ? member.quoteId : member.quoteEn}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-600/20 hover:bg-blue-700 transition min-h-[44px] max-w-full"
                      >
                        <Mail className="w-4 h-4 shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </a>

                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition min-h-[44px]"
                        >
                          <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                          <span>LinkedIn</span>
                        </a>
                      )}

                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition min-h-[44px]"
                        >
                          <Github className="w-4 h-4 text-slate-800 dark:text-slate-200 shrink-0" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Biodata & Responsibilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-8">
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h2>
                    {language === 'id'
                      ? 'Keahlian & Kompetensi Utama'
                      : 'Core Competencies & Skills'}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-blue-300 dark:hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
                  <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h2>
                    {language === 'id'
                      ? 'Kerangka Kerja & Kontribusi'
                      : 'Operational Framework'}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'id'
                    ? `Sebagai bagian dari ${member.departmentNameId} di Rynertia Arc Tech, personil ini memegang peran krusial dalam memastikan deliverable proyek enterprise memenuhi standar kualitas, efisiensi, dan skalabilitas maksimal.`
                    : `As part of the ${member.departmentNameEn} at Rynertia Arc Tech, this personnel holds a pivotal role in ensuring enterprise project deliverables achieve the highest standards of quality, efficiency, and scalability.`}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
                  <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h2>
                    {language === 'id'
                      ? 'Tanggung Jawab Utama'
                      : 'Key Responsibilities'}
                  </h2>
                </div>

                <ul className="space-y-3.5">
                  {(language === 'id'
                    ? member.responsibilitiesId
                    : member.responsibilitiesEn
                  ).map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Related Colleagues */}
          {departmentMembers.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {language === 'id'
                      ? `Rekan Satu Tim (${member.departmentNameId})`
                      : `Team Colleagues (${member.departmentNameEn})`}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === 'id'
                      ? 'Personil lain dalam divisi yang sama di Rynertia Arc Tech'
                      : 'Other personnel collaborating in the same department'}
                  </p>
                </div>
                <Link
                  href={`/${language}/#team`}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {language === 'id' ? 'Lihat Semua Personil (16)' : 'View All Personnel (16)'}
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {departmentMembers.slice(0, 4).map((peer) => {
                  let peerGradient = 'from-blue-600 to-indigo-800';
                  let peerWatermark = 'ENGINEERING';

                  if (peer.dept.includes('exec')) {
                    peerGradient = 'from-rose-600 via-purple-700 to-indigo-900';
                    peerWatermark = 'EXECUTIVE';
                  } else if (peer.dept.includes('marketing')) {
                    peerGradient = 'from-orange-500 via-amber-600 to-rose-700';
                    peerWatermark = 'CREATIVE';
                  } else if (peer.dept.includes('ra')) {
                    peerGradient = 'from-emerald-600 via-teal-700 to-indigo-900';
                    peerWatermark = 'STRATEGY';
                  }

                  return (
                    <Link
                      key={peer.id}
                      href={`/${language}/team/${peer.id}`}
                      className="group block relative overflow-hidden rounded-tl-[36px] rounded-tr-xl rounded-b-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-slate-900 border border-transparent dark:border-slate-800"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${peerGradient} opacity-90 transition-opacity group-hover:opacity-100`}
                      />

                      <span className="absolute top-4 left-2 text-white/20 font-black tracking-widest text-2xl uppercase select-none pointer-events-none [writing-mode:vertical-rl] rotate-180">
                        {peerWatermark}
                      </span>

                      <div className="relative h-[260px] w-full flex items-end justify-center overflow-hidden">
                        <img
                          src={peer.image}
                          alt={peer.name}
                          className="w-full h-full object-cover object-top filter brightness-[0.98] group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />

                        <div className="absolute inset-x-0 bottom-0 pt-12 pb-3.5 px-3.5 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end text-left z-10">
                          <h4 className="text-sm font-bold text-white group-hover:text-sky-200 transition truncate">
                            {peer.name}
                          </h4>
                          <p className="text-[11px] text-white/80 font-medium truncate mt-0.5">
                            {language === 'id' ? peer.roleId : peer.roleEn}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
