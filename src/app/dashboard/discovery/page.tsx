'use client';

import React, { useState, useMemo } from 'react';
import {
  Compass,
  Search,
  Building2,
  Rocket,
  Store,
  Briefcase,
  ShoppingBag,
  Globe,
  AlertTriangle,
  Clock,
  Filter,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Check,
  Play,
  RotateCw,
  Download,
  Phone,
  MapPin,
  HelpCircle,
  Link as LinkIcon,
  Layers,
} from 'lucide-react';
import {
  initialBusinessCandidates,
  BusinessCandidate,
  BusinessCategory,
  WebsiteStatus,
  VerificationStatus,
} from '@/data/dashboardMockData';

export default function BusinessDiscoveryPage() {
  const [candidates, setCandidates] = useState<BusinessCandidate[]>(initialBusinessCandidates);
  const [selectedCategory, setSelectedCategory] = useState<'all' | BusinessCategory>('all');
  const [selectedWebsiteStatus, setSelectedWebsiteStatus] = useState<'all' | WebsiteStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  // Search Criteria Inputs (PRD 19.4)
  const [criteriaKeyword, setCriteriaKeyword] = useState('Distributor Baja Industri');
  const [criteriaLocation, setCriteriaLocation] = useState('Surabaya & Sidoarjo');
  const [criteriaCategory, setCriteriaCategory] = useState<BusinessCategory>('Perusahaan');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState('');

  // Selected candidate for Manual Verification Modal (PRD 19.4 & 19.5)
  const [activeCandidate, setActiveCandidate] = useState<BusinessCandidate | null>(null);
  const [verificationFeedback, setVerificationFeedback] = useState<string | null>(null);

  // Stats calculation
  const totalCount = candidates.length;
  const noWebsiteCount = candidates.filter((c) => c.websiteStatus === 'No Website Candidate').length;
  const needsVerifCount = candidates.filter((c) => c.websiteStatus === 'Needs Manual Verification').length;
  const hasWebsiteCount = candidates.filter((c) => c.websiteStatus === 'Has Website').length;
  const verifiedCount = candidates.filter((c) => c.verificationStatus === 'Verified No Website' || c.verificationStatus === 'Lead Qualified').length;

  // Filtered candidate list
  const filteredCandidates = useMemo(() => {
    return candidates.filter((cand) => {
      if (selectedCategory !== 'all' && cand.category !== selectedCategory) {
        return false;
      }
      if (selectedWebsiteStatus !== 'all' && cand.websiteStatus !== selectedWebsiteStatus) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          cand.name.toLowerCase().includes(q) ||
          cand.location.toLowerCase().includes(q) ||
          cand.address.toLowerCase().includes(q) ||
          cand.potentialSolution.toLowerCase().includes(q) ||
          cand.placeId.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [candidates, selectedCategory, selectedWebsiteStatus, searchQuery]);

  // Simulate Pipeline Run (PRD 19.4: Google Places API (New) -> SerpAPI -> Web Presence Assessment)
  const handleRunPipeline = () => {
    setIsScanning(true);
    setScanStep('1/3 Menghubungi Google Places API (New) Text Search...');

    setTimeout(() => {
      setScanStep('2/3 Melakukan verifikasi silang hasil organik via SerpAPI...');
    }, 900);

    setTimeout(() => {
      setScanStep('3/3 Menganalisis Web Presence Status & menyusun profil kandidat...');
    }, 1800);

    setTimeout(() => {
      // Add a simulated fresh candidate
      const newCand: BusinessCandidate = {
        id: `cand-0${candidates.length + 1}`,
        name: `CV ${criteriaKeyword} Mandiri`,
        category: criteriaCategory,
        address: `Jl. Industri Raya No. 99, ${criteriaLocation}`,
        location: criteriaLocation,
        phone: '+62 31-7788-9911',
        placeId: `ChIJ_LiveScan_${Date.now().toString().slice(-6)}`,
        websiteUrl: null,
        searchResultUrl: `https://google.com/search?q=${encodeURIComponent(criteriaKeyword + ' ' + criteriaLocation)}`,
        websiteStatus: 'No Website Candidate',
        source: 'Google Places + SerpAPI',
        lastChecked: 'Baru saja (Live Sync)',
        verificationStatus: 'Pending Verification',
        currentPresenceNotes: 'Profil Google Bisnis ditemukan dengan 18 ulasan. Field website kosong dan SerpAPI hanya menemukan indeks direktori B2B.',
        potentialSolution: 'Website Korporat Profil, Digital Product Catalog & WhatsApp Floating Lead Button',
        contactPerson: 'Bpk. Ridwan (Owner)',
        leadStatus: 'Identified',
        estimatedValue: 'Rp 25.000.000',
      };

      setCandidates((prev) => [newCand, ...prev]);
      setIsScanning(false);
      setScanStep('');
    }, 2600);
  };

  // Manual Verification Action (PRD 19.4 & 19.5)
  const handleUpdateVerification = (
    candId: string,
    nextVerif: VerificationStatus,
    nextWebStatus?: WebsiteStatus
  ) => {
    setCandidates((prev) =>
      prev.map((c) => {
        if (c.id === candId) {
          return {
            ...c,
            verificationStatus: nextVerif,
            ...(nextWebStatus ? { websiteStatus: nextWebStatus } : {}),
            lastChecked: '2026-09-20 (Diverifikasi Admin)',
          };
        }
        return c;
      })
    );

    if (activeCandidate && activeCandidate.id === candId) {
      setActiveCandidate((prev) =>
        prev
          ? {
              ...prev,
              verificationStatus: nextVerif,
              ...(nextWebStatus ? { websiteStatus: nextWebStatus } : {}),
            }
          : null
      );
    }

    setVerificationFeedback(`Status berhasil diperbarui menjadi: ${nextVerif}`);
    setTimeout(() => setVerificationFeedback(null), 3000);
  };

  // Export CSV
  const handleExportCSV = () => {
    const headers = [
      'ID',
      'Business Name',
      'Category',
      'Address',
      'Phone',
      'Place ID',
      'Website URL',
      'Website Status',
      'Source',
      'Last Checked',
      'Verification Status',
      'Estimated Value',
    ];
    const rows = filteredCandidates.map((c) => [
      c.id,
      `"${c.name}"`,
      c.category,
      `"${c.address}"`,
      c.phone,
      c.placeId,
      c.websiteUrl || 'None',
      c.websiteStatus,
      c.source,
      c.lastChecked,
      c.verificationStatus,
      `"${c.estimatedValue}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `rynertia_business_discovery_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Status Badge Rendering (PRD 19.3)
  const getWebsiteStatusBadge = (status: WebsiteStatus) => {
    switch (status) {
      case 'No Website Candidate':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <AlertTriangle className="w-3 h-3 text-amber-600" />
            No Website Candidate
          </span>
        );
      case 'Needs Manual Verification':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
            <HelpCircle className="w-3 h-3 text-blue-600" />
            Needs Manual Verification
          </span>
        );
      case 'Has Website':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Has Website
          </span>
        );
      case 'Unknown':
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
            Unknown
          </span>
        );
    }
  };

  const getVerificationStatusBadge = (status: VerificationStatus) => {
    switch (status) {
      case 'Verified No Website':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800">
            <ShieldCheck className="w-3 h-3" />
            Verified No Web
          </span>
        );
      case 'Lead Qualified':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-800">
            <Check className="w-3 h-3" />
            Lead Qualified
          </span>
        );
      case 'False Positive (Has Website)':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-100 text-rose-800">
            False Positive
          </span>
        );
      case 'Pending Verification':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600">
            <Clock className="w-3 h-3" />
            Pending Verification
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-2 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-blue-600 animate-spin-slow" />
            <span className="font-mono uppercase tracking-wider text-[11px]">PRD Seksi 19: Business Discovery</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Penemuan &amp; <span className="text-gradient-blue">Verifikasi Kandidat Bisnis</span>
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed font-normal">
            Integrasi Google Places API (New) + SerpAPI untuk mendeteksi entitas bisnis dengan indikasi web presence rendah. Mengedepankan prinsip verifikasi non-absolut sesuai PRD 19.3.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 text-xs font-semibold shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer min-h-[42px]"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Ekspor CSV</span>
          </button>
        </div>
      </div>

      {/* PRD 19.4: Search Criteria Panel (Alur Penemuan Pipeline) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Kriteria Pencarian Pipeline (Google Places + SerpAPI)
            </h2>
          </div>
          <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
            PRD Seksi 19.2 & 19.4
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              Kata Kunci Bisnis
            </label>
            <input
              type="text"
              value={criteriaKeyword}
              onChange={(e) => setCriteriaKeyword(e.target.value)}
              placeholder="Contoh: Distributor Baja, Klinik Medika"
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 font-medium"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              Wilayah / Kota Target
            </label>
            <input
              type="text"
              value={criteriaLocation}
              onChange={(e) => setCriteriaLocation(e.target.value)}
              placeholder="Contoh: Surabaya Barat, Sidoarjo Industri"
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 font-medium"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              Kategori PRD 19.1
            </label>
            <select
              value={criteriaCategory}
              onChange={(e) => setCriteriaCategory(e.target.value as BusinessCategory)}
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 font-medium cursor-pointer"
            >
              <option value="Perusahaan">Perusahaan</option>
              <option value="Startup">Startup</option>
              <option value="UMKM">UMKM</option>
              <option value="Pebisnis">Pebisnis</option>
              <option value="Pedagang">Pedagang</option>
            </select>
          </div>
        </div>

        {/* Scan Trigger Button & Progress Indicator */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {isScanning ? (
              <span className="inline-flex items-center gap-2 font-medium text-blue-600 animate-pulse">
                <RotateCw className="w-3.5 h-3.5 animate-spin" />
                {scanStep}
              </span>
            ) : (
              <span>
                Prinsip 19.3: Ketiadaan website di hasil awal tidak membuktikan bisnis 100% tanpa website.
              </span>
            )}
          </div>

          <button
            type="button"
            disabled={isScanning}
            onClick={handleRunPipeline}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold shadow-xs shadow-blue-600/20 transition-all cursor-pointer disabled:opacity-50 min-h-[40px]"
          >
            {isScanning ? (
              <>
                <RotateCw className="w-4 h-4 animate-spin" />
                <span>Memproses Pipeline...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Jalankan Penemuan Kandidat</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* KPI Cards (Pola Gambar 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:border-blue-400/80 hover:-translate-y-1 transition-all duration-300">
          <span className="text-xs font-semibold text-slate-500 block">Total Kandidat Terdata</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900">{totalCount}</span>
            <span className="text-xs text-slate-400 font-medium">entitas</span>
          </div>
          <div className="mt-3 text-[11px] text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span>Terverifikasi</span>
            <span className="font-semibold text-emerald-600 font-mono">{verifiedCount} entitas</span>
          </div>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:border-blue-400/80 hover:-translate-y-1 transition-all duration-300">
          <span className="text-xs font-semibold text-amber-700 block">No Website Candidate</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-600">{noWebsiteCount}</span>
            <span className="text-xs text-slate-400 font-medium">peluang utama</span>
          </div>
          <div className="mt-3 text-[11px] text-slate-500 pt-3 border-t border-slate-100 font-mono text-[10px]">
            PRD 19.3: Indikasi kuat tanpa web
          </div>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:border-blue-400/80 hover:-translate-y-1 transition-all duration-300">
          <span className="text-xs font-semibold text-blue-700 block">Needs Manual Verification</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-600">{needsVerifCount}</span>
            <span className="text-xs text-slate-400 font-medium">perlu dicek</span>
          </div>
          <div className="mt-3 text-[11px] text-slate-500 pt-3 border-t border-slate-100 font-mono text-[10px]">
            PRD 19.3: Hasil ambigu / web usang
          </div>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.08)] hover:border-blue-400/80 hover:-translate-y-1 transition-all duration-300">
          <span className="text-xs font-semibold text-emerald-700 block">Has Website</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-600">{hasWebsiteCount}</span>
            <span className="text-xs text-slate-400 font-medium">terdeteksi</span>
          </div>
          <div className="mt-3 text-[11px] text-slate-500 pt-3 border-t border-slate-100 font-mono text-[10px]">
            Google Places / SerpAPI
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
        {/* Category Filter Pills (PRD 19.1) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 shrink-0">
            Kategori:
          </span>
          {[
            { id: 'all', label: 'Semua' },
            { id: 'Perusahaan', label: 'Perusahaan' },
            { id: 'Startup', label: 'Startup' },
            { id: 'UMKM', label: 'UMKM' },
            { id: 'Pebisnis', label: 'Pebisnis' },
            { id: 'Pedagang', label: 'Pedagang' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer min-h-[36px] ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Status Filter */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama bisnis, alamat, Place ID, PIC..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-600/20"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* PRD 19.3 Status Filter */}
            <div className="flex items-center gap-1.5 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedWebsiteStatus}
                onChange={(e) => setSelectedWebsiteStatus(e.target.value as any)}
                className="px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium cursor-pointer"
              >
                <option value="all">Semua Status Website</option>
                <option value="No Website Candidate">No Website Candidate</option>
                <option value="Needs Manual Verification">Needs Manual Verification</option>
                <option value="Has Website">Has Website</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80">
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                  viewMode === 'table' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                }`}
              >
                Tabel (11 Field)
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                  viewMode === 'grid' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                }`}
              >
                Kartu Grid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 11 Fields Search Result Table (PRD 19.5 & Gambar 3) */}
      {viewMode === 'table' ? (
        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 font-semibold">
                <th className="py-3.5 px-5">1. Business Name</th>
                <th className="py-3.5 px-5">2. Kategori</th>
                <th className="py-3.5 px-5">3 & 4. Alamat & Kontak</th>
                <th className="py-3.5 px-5">5. Google Place ID</th>
                <th className="py-3.5 px-5">8. Website Status</th>
                <th className="py-3.5 px-5">9 & 10. Sumber & Pengecekan</th>
                <th className="py-3.5 px-5">11. Verifikasi</th>
                <th className="py-3.5 px-5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCandidates.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    Tidak ada kandidat bisnis yang memenuhi kriteria filter.
                  </td>
                </tr>
              ) : (
                filteredCandidates.map((cand) => (
                  <tr key={cand.id} className="hover:bg-slate-50/80 transition-colors group">
                    {/* 1. Name */}
                    <td className="py-4 px-5">
                      <span className="font-bold text-slate-900 block max-w-xs truncate">
                        {cand.name}
                      </span>
                      <span className="text-[11px] text-slate-400">PIC: {cand.contactPerson}</span>
                    </td>

                    {/* 2. Category */}
                    <td className="py-4 px-5 font-semibold text-slate-700">
                      {cand.category}
                    </td>

                    {/* 3 & 4. Address & Phone */}
                    <td className="py-4 px-5 max-w-xs">
                      <span className="block text-slate-700 truncate" title={cand.address}>
                        {cand.address}
                      </span>
                      <span className="block font-mono text-[11px] text-blue-600 mt-0.5">
                        {cand.phone}
                      </span>
                    </td>

                    {/* 5. Place ID */}
                    <td className="py-4 px-5">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          cand.name + ' ' + cand.address
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-600 hover:text-blue-600 max-w-[140px] truncate"
                        title={cand.placeId}
                      >
                        <MapPin className="w-3 h-3 shrink-0 text-slate-400" />
                        <span className="truncate">{cand.placeId}</span>
                        <ExternalLink className="w-3 h-3 shrink-0 opacity-70" />
                      </a>
                    </td>

                    {/* 8. Website Status (PRD 19.3) */}
                    <td className="py-4 px-5">{getWebsiteStatusBadge(cand.websiteStatus)}</td>

                    {/* 9 & 10. Source & Last Checked */}
                    <td className="py-4 px-5">
                      <span className="block font-medium text-slate-700 text-[11px]">
                        {cand.source}
                      </span>
                      <span className="block text-[10px] text-slate-400 font-mono">
                        {cand.lastChecked}
                      </span>
                    </td>

                    {/* 11. Verification Status */}
                    <td className="py-4 px-5">{getVerificationStatusBadge(cand.verificationStatus)}</td>

                    {/* Action */}
                    <td className="py-4 px-5 text-right">
                      <button
                        type="button"
                        onClick={() => setActiveCandidate(cand)}
                        className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold transition-colors cursor-pointer text-xs"
                      >
                        Verifikasi Manual
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        /* Grid Mode (Pola Gambar 4) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCandidates.map((cand) => (
            <div
              key={cand.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-lg">
                    {cand.category}
                  </span>
                  {getVerificationStatusBadge(cand.verificationStatus)}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                  {cand.name}
                </h3>

                <div className="mb-3">{getWebsiteStatusBadge(cand.websiteStatus)}</div>

                <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{cand.address}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono">{cand.phone}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-4 leading-relaxed">
                  {cand.currentPresenceNotes}
                </div>

                <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 mb-4">
                  <span className="font-bold block text-[10px] uppercase tracking-wider text-blue-700 mb-0.5">
                    Solusi Yang Direkomendasikan:
                  </span>
                  <span>{cand.potentialSolution}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Estimasi Nilai</span>
                  <span className="font-mono font-bold text-slate-900 text-xs">
                    {cand.estimatedValue}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCandidate(cand)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Detail & Verifikasi
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Manual Verification Modal / Drawer (PRD 19.4: Candidate Lead -> Manual Verification) */}
      {activeCandidate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-blue-50 text-blue-700">
                    {activeCandidate.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeCandidate.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {activeCandidate.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveCandidate(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold p-1 cursor-pointer"
              >
                ✕ Tutup
              </button>
            </div>

            {/* Verification Alert Feedback */}
            {verificationFeedback && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{verificationFeedback}</span>
              </div>
            )}

            {/* 11 Atribut PRD 19.5 Review */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">
                  3. Alamat Lengkap
                </span>
                <p className="font-medium text-slate-800">{activeCandidate.address}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">
                  4. Kontak PIC
                </span>
                <p className="font-mono font-medium text-slate-800">
                  {activeCandidate.phone} ({activeCandidate.contactPerson})
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">
                  5. Google Place ID
                </span>
                <p className="font-mono text-slate-700 truncate">{activeCandidate.placeId}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    activeCandidate.name + ' ' + activeCandidate.address
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold text-[11px] pt-1"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">
                  6 & 7. Penelusuran Web & SerpAPI
                </span>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Website URL:</span>
                    <span className="font-mono text-slate-800 font-medium">
                      {activeCandidate.websiteUrl || 'Tidak Tersedia'}
                    </span>
                  </div>
                  {activeCandidate.searchResultUrl && (
                    <a
                      href={activeCandidate.searchResultUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold text-[11px] pt-1"
                    >
                      <span>Lihat Hasil Organik SerpAPI</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">
                  8. Website Status (PRD 19.3)
                </span>
                <div>{getWebsiteStatusBadge(activeCandidate.websiteStatus)}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">
                  9, 10 & 11. Sumber & Status
                </span>
                <p className="text-slate-700 font-medium">
                  {activeCandidate.source} • {activeCandidate.lastChecked}
                </p>
                <div className="pt-1">{getVerificationStatusBadge(activeCandidate.verificationStatus)}</div>
              </div>
            </div>

            {/* Analysis & Recommendation */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-950 space-y-1.5">
              <span className="font-bold uppercase tracking-wider text-blue-700 text-[10px]">
                Catatan Analisis Presence:
              </span>
              <p className="leading-relaxed">{activeCandidate.currentPresenceNotes}</p>
              <div className="pt-2 border-t border-blue-200/60 flex items-center justify-between">
                <span>Rekomendasi: <strong>{activeCandidate.potentialSolution}</strong></span>
                <span className="font-mono font-bold text-blue-800">{activeCandidate.estimatedValue}</span>
              </div>
            </div>

            {/* PRD 19.4: Manual Verification Actions */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <span className="text-xs font-bold text-slate-800 block">
                Tindakan Verifikasi Manual Administrator (PRD 19.4)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    handleUpdateVerification(
                      activeCandidate.id,
                      'Verified No Website',
                      'No Website Candidate'
                    )
                  }
                  className="px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Valid: Tanpa Web</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleUpdateVerification(
                      activeCandidate.id,
                      'Lead Qualified',
                      'No Website Candidate'
                    )
                  }
                  className="px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Jadikan Qualified Lead</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleUpdateVerification(
                      activeCandidate.id,
                      'False Positive (Has Website)',
                      'Has Website'
                    )
                  }
                  className="px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  <span>Tandai False Positive</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
