export type ContentStatus = 'draft' | 'published' | 'archived';
export type ContentType = 'portfolio' | 'berita' | 'layanan' | 'tim';

export interface DashboardContentItem {
  id: string;
  title: string;
  slug: string;
  type: ContentType;
  category: string;
  summary: string;
  content: string;
  status: ContentStatus;
  author: string;
  updatedAt: string;
  createdAt: string;
  views: number;
  imageUrl?: string;
  tags?: string[];
}

export interface DashboardMessage {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  service: string;
  status: 'unread' | 'read';
  date: string;
  time: string;
  avatarColor: string;
}

export type BusinessCategory = 'Perusahaan' | 'Startup' | 'UMKM' | 'Pebisnis' | 'Pedagang';

// PRD 19.3 Website Status
export type WebsiteStatus =
  | 'Unknown'
  | 'Has Website'
  | 'No Website Candidate'
  | 'Needs Manual Verification';

// PRD 19.5 Verification status
export type VerificationStatus =
  | 'Pending Verification'
  | 'Verified No Website'
  | 'False Positive (Has Website)'
  | 'Lead Qualified';

export interface BusinessCandidate {
  id: string;
  // 1. Business name
  name: string;
  // 2. Business category (PRD 19.1)
  category: BusinessCategory;
  // 3. Address
  address: string;
  location: string;
  // 4. Phone
  phone: string;
  // 5. Google Place ID
  placeId: string;
  // 6. Website URL jika tersedia
  websiteUrl: string | null;
  // 7. Search result URL jika tersedia (SerpAPI)
  searchResultUrl: string | null;
  // 8. Website status (PRD 19.3)
  websiteStatus: WebsiteStatus;
  // 9. Source
  source: 'Google Places (New)' | 'Google Places + SerpAPI' | 'Manual Input';
  // 10. Last checked
  lastChecked: string;
  // 11. Verification status
  verificationStatus: VerificationStatus;
  // Analytical Insights & Lead Details
  currentPresenceNotes: string;
  potentialSolution: string;
  contactPerson: string;
  leadStatus: 'Identified' | 'Contacted' | 'Meeting' | 'Proposal';
  estimatedValue: string;
}

export interface CompanySettings {
  companyName: string;
  tagline: string;
  officialEmail: string;
  whatsappNumber: string;
  officeAddress: string;
  operatingHours: string;
  socialLinkedin: string;
  socialGithub: string;
  socialInstagram: string;
  autoPublishDraft: boolean;
  notifyOnNewInquiry: boolean;
  serpApiVerificationEnabled: boolean;
  googlePlacesAutoRefresh: boolean;
}

export const initialCompanySettings: CompanySettings = {
  companyName: 'Rynertia Arc Tech',
  tagline: 'Enterprise Digital Engineering, Scalable Cloud Architecture & High-Impact Web Solutions',
  officialEmail: 'contact@rynertia.tech',
  whatsappNumber: '+62 812-3456-7890',
  officeAddress: 'Rynertia Tech Hub, Sovereign Plaza Lt. 18, Jakarta Selatan, DKI Jakarta 12430',
  operatingHours: 'Senin - Jumat, 08:30 - 17:30 WIB',
  socialLinkedin: 'https://linkedin.com/company/rynertia-arc-tech',
  socialGithub: 'https://github.com/daffs26/Rynertia-Arch-Tech',
  socialInstagram: 'https://instagram.com/rynertia.tech',
  autoPublishDraft: false,
  notifyOnNewInquiry: true,
  serpApiVerificationEnabled: true,
  googlePlacesAutoRefresh: true,
};

export const initialContentData: DashboardContentItem[] = [
  {
    id: 'cnt-01',
    title: 'Transformasi Arsitektur Data Enterprise Cloud',
    slug: 'transformasi-arsitektur-data-enterprise-cloud',
    type: 'portfolio',
    category: 'Cloud Engineering',
    summary: 'Modernisasi sistem pergudangan data terpusat berbasis serverless cloud untuk efisiensi kueri hingga 60%.',
    content: 'Implementasi arsitektur data lakehouse modern untuk konsolidasi 12 unit bisnis terdistribusi. Menghilangkan silo data dan meningkatkan throughput pemrosesan analitik secara real-time.',
    status: 'published',
    author: 'Daffa Admin',
    updatedAt: '2026-09-18',
    createdAt: '2026-08-10',
    views: 1420,
    imageUrl: '/placeholder-portfolio-1.webp',
    tags: ['Big Data', 'Cloud Architecture', 'Serverless'],
  },
  {
    id: 'cnt-02',
    title: 'Platform Perbankan Digital Berstandar Regulasi OJK',
    slug: 'platform-perbankan-digital-berstandar-regulasi-ojk',
    type: 'portfolio',
    category: 'Fintech & Security',
    summary: 'Pengembangan core banking layer API dengan enkripsi tingkat tinggi dan zero-trust infrastructure.',
    content: 'Pembangunan fondasi API gateway perbankan dengan audit trail otomatis, perlindungan DDoS tingkat enterprise, dan integrasi biometrik.',
    status: 'published',
    author: 'Daffa Admin',
    updatedAt: '2026-09-15',
    createdAt: '2026-07-22',
    views: 2180,
    imageUrl: '/placeholder-portfolio-2.webp',
    tags: ['Fintech', 'Zero Trust', 'Microservices'],
  },
  {
    id: 'cnt-03',
    title: 'Panduan Implementasi Zero-Trust Security untuk Sektor Logistik',
    slug: 'panduan-zero-trust-security-logistik',
    type: 'berita',
    category: 'Cybersecurity',
    summary: 'Strategi praktis mengamankan endpoints perangkat IoT armada logistik nasional dari ancaman lateral.',
    content: 'Artikel komprehensif mengulas framework pengamanan perimeter modern, autentikasi adaptif mTLS, dan observabilitas lalu lintas data jaringan.',
    status: 'published',
    author: 'Tim Riset Rynertia',
    updatedAt: '2026-09-14',
    createdAt: '2026-09-10',
    views: 890,
    imageUrl: '/placeholder-news-1.webp',
    tags: ['Cybersecurity', 'IoT', 'Logistics'],
  },
  {
    id: 'cnt-04',
    title: 'Optimasi AI Agentic Workflows dalam Ekosistem Enterprise',
    slug: 'optimasi-ai-agentic-workflows-enterprise',
    type: 'berita',
    category: 'Artificial Intelligence',
    summary: 'Eksplorasi penggunaan multi-agent workflows untuk otomatisasi rekonsiliasi keuangan dan validasi invoice.',
    content: 'Penerapan agentic AI berbasis Model Context Protocol (MCP) untuk mempercepat verifikasi dokumen legal dan pipeline verifikasi kontrak bisnis.',
    status: 'draft',
    author: 'Daffa Admin',
    updatedAt: '2026-09-19',
    createdAt: '2026-09-19',
    views: 0,
    tags: ['AI Workflows', 'MCP', 'Enterprise Tech'],
  },
  {
    id: 'cnt-05',
    title: 'Sistem Telemetri Smart Supply Chain berbasis Edge Computing',
    slug: 'sistem-telemetri-smart-supply-chain',
    type: 'portfolio',
    category: 'Industrial Tech',
    summary: 'Pemantauan armada cold chain real-time dengan latency ultra rendah pada jaringan terisolasi.',
    content: 'Deployment gateway IoT edge pada 150 armada logistik berpendingin guna mencegah kerusakan komoditas bernilai tinggi selama perjalanan antar pulau.',
    status: 'draft',
    author: 'Daffa Admin',
    updatedAt: '2026-09-17',
    createdAt: '2026-09-15',
    views: 0,
    tags: ['Edge Computing', 'IoT', 'Supply Chain'],
  },
  {
    id: 'cnt-06',
    title: 'Legacy Monolith Migration Framework v1.2',
    slug: 'legacy-monolith-migration-framework-v12',
    type: 'berita',
    category: 'Architecture',
    summary: 'Dokumentasi internal dan kajian arsitektur dekomposisi sistem legacy ke event-driven architecture.',
    content: 'Framework kerja internal Rynertia versi 1.2 yang kini telah diarsipkan dan digantikan oleh arsitektur v2.0 modern.',
    status: 'archived',
    author: 'Lead Architect',
    updatedAt: '2026-08-01',
    createdAt: '2026-05-12',
    views: 450,
    tags: ['Legacy Migration', 'Event Driven', 'Archived'],
  },
  {
    id: 'cnt-07',
    title: 'Enterprise Software Engineering & Cloud Modernization',
    slug: 'enterprise-software-engineering',
    type: 'layanan',
    category: 'Core Service',
    summary: 'Layanan rancang bangun perangkat lunak berskala besar, microservices performa tinggi, dan migrasi infrastruktur cloud terencana.',
    content: 'Layanan rekayasa software teruji dengan arsitektur tangguh, standar keamanan berlapis, dan otomatisasi CI/CD berstandar global.',
    status: 'published',
    author: 'Daffa Admin',
    updatedAt: '2026-09-01',
    createdAt: '2026-06-01',
    views: 3120,
  },
  {
    id: 'cnt-08',
    title: 'Muhammad Daffa - Principal Solution Architect',
    slug: 'muhammad-daffa-solution-architect',
    type: 'tim',
    category: 'Leadership',
    summary: 'Spesialis sistem enterprise terdistribusi, rekayasa performa komputasi, dan arsitektur keamanan cloud.',
    content: 'Memimpin perencanaan arsitektur teknis, audit keandalan sistem, serta perancangan solusi komputasi skala enterprise di Rynertia Arc Tech.',
    status: 'published',
    author: 'Admin',
    updatedAt: '2026-09-01',
    createdAt: '2026-06-01',
    views: 1540,
  },
];

export const initialMessagesData: DashboardMessage[] = [
  {
    id: 'msg-01',
    name: 'Budi Santoso',
    email: 'budi.santoso@nusantara-logistik.co.id',
    company: 'PT Nusantara Logistik Mandiri',
    phone: '+62 812-3456-7890',
    subject: 'Konsultasi Arsitektur Sistem Pelacakan Real-time',
    message: 'Halo tim Rynertia Arc Tech, kami tertarik dengan studi kasus pelacakan rantai pasok Anda. Kami sedang berencana memperbarui sistem monitoring 200 armada logistik kami yang saat ini sering mengalami keterlambatan sinkronisasi data. Bisakah kita menjadwalkan sesi eksplorasi teknis minggu depan?',
    service: 'Enterprise Software & IoT',
    status: 'unread',
    date: '2026-09-20',
    time: '09:42 WIB',
    avatarColor: 'bg-blue-600',
  },
  {
    id: 'msg-02',
    name: 'Citra Amelia Putri',
    email: 'citra.amelia@finasastara.id',
    company: 'FinAksara Digital',
    phone: '+62 811-9876-5432',
    subject: 'Audit Keamanan & Kepatuhan Enkripsi API Gateway',
    message: 'Selamat pagi. Kami adalah fintech payment service provider dan membutuhkan audit kepatuhan keamanan infrastruktur cloud sebelum audit regulasi kuartal depan. Kami ingin mengetahui ruang lingkup engagement dan timeline evaluasi dari Rynertia.',
    service: 'Security & Compliance',
    status: 'unread',
    date: '2026-09-19',
    time: '16:15 WIB',
    avatarColor: 'bg-emerald-600',
  },
  {
    id: 'msg-03',
    name: 'Hendra Gunawan',
    email: 'hendra.g@samuderateknik.com',
    company: 'CV Samudera Teknik Industri',
    phone: '+62 856-1122-3344',
    subject: 'Pembuatan Web Portal B2B Katalog Suku Cadang',
    message: 'Perusahaan kami mendistribusikan suku cadang mesin pabrik ke lebih dari 80 klien pabrik di Jawa Timur. Selama ini pemesanan masih lewat WhatsApp dan file Excel manual. Kami butuh portal katalog B2B yang dapat diakses klien dengan harga khusus tiap tier.',
    service: 'Web Application Development',
    status: 'read',
    date: '2026-09-17',
    time: '11:20 WIB',
    avatarColor: 'bg-indigo-600',
  },
  {
    id: 'msg-04',
    name: 'Dr. Ratna Widjaja',
    email: 'ratna.widjaja@medika-harmoni.org',
    company: 'Klinik Medika Harmoni Utama',
    phone: '+62 813-7788-9900',
    subject: 'Integrasi Rekam Medis Elektronik Terpusat',
    message: 'Kami mengelola 4 cabang klinik utama dan berencana mengintegrasikan data pasien secara terpusat dan aman sesuai Permenkes RME. Mohon informasi paket konsultasi teknis arsitekturnya.',
    service: 'Healthcare Cloud Systems',
    status: 'read',
    date: '2026-09-15',
    time: '14:05 WIB',
    avatarColor: 'bg-slate-700',
  },
];

// PRD 19.5 Candidates with 11 mandatory fields & PRD 19.3 Website Statuses
export const initialBusinessCandidates: BusinessCandidate[] = [
  {
    id: 'cand-01',
    name: 'PT Surya Abadi Baja Perkasa',
    category: 'Perusahaan',
    address: 'Kawasan Industri Rungkut Blok B-14, Surabaya, Jawa Timur',
    location: 'Surabaya, Jawa Timur',
    phone: '+62 31-843-9000',
    placeId: 'ChIJN1t_tDe2ey4RPT_SuryaAbadi',
    websiteUrl: null,
    searchResultUrl: 'https://google.com/search?q=PT+Surya+Abadi+Baja+Perkasa+Surabaya',
    websiteStatus: 'No Website Candidate',
    source: 'Google Places + SerpAPI',
    lastChecked: '2026-09-20 09:30 WIB',
    verificationStatus: 'Verified No Website',
    currentPresenceNotes: 'Distributor plat baja industri dengan 45 karyawan. Memiliki Google Maps aktif dengan 38 ulasan, namun website resmi kosong dan hasil SerpAPI hanya menemukan direktori pihak ketiga.',
    potentialSolution: 'Website Korporat Modern, Katalog Produk Baja Interaktif & Integrasi WhatsApp Lead Generation',
    contactPerson: 'Bpk. Herman (Direktur Operasional)',
    leadStatus: 'Identified',
    estimatedValue: 'Rp 45.000.000',
  },
  {
    id: 'cand-02',
    name: 'Kopi Kenangan Lereng Arjuno',
    category: 'UMKM',
    address: 'Jl. Raya Selecta No. 42, Bumiaji, Batu, Jawa Timur',
    location: 'Batu / Malang, Jawa Timur',
    phone: '+62 812-9988-7711',
    placeId: 'ChIJX9aK_eM31y4RPT_KopiArjuno',
    websiteUrl: null,
    searchResultUrl: 'https://google.com/search?q=Kopi+Kenangan+Lereng+Arjuno+Batu',
    websiteStatus: 'No Website Candidate',
    source: 'Google Places + SerpAPI',
    lastChecked: '2026-09-20 10:15 WIB',
    verificationStatus: 'Lead Qualified',
    currentPresenceNotes: 'Produsen biji kopi specialty dengan 15.000 followers Instagram. Profil Google Bisnis terverifikasi namun tanpa link website.',
    potentialSolution: 'Landing Page Brand Cerita Kopi, Portal B2B Wholesale & Web App Pemesanan Terjadwal',
    contactPerson: 'Ibu Maya (Founder)',
    leadStatus: 'Contacted',
    estimatedValue: 'Rp 22.000.000',
  },
  {
    id: 'cand-03',
    name: 'Klinik Utama Sehat Prima',
    category: 'Perusahaan',
    address: 'Jl. Mayjen HR. Muhammad No. 88, Surabaya Barat',
    location: 'Surabaya Barat, Jawa Timur',
    phone: '+62 31-734-5566',
    placeId: 'ChIJz3pP_L11ey4RPT_SehatPrima',
    websiteUrl: 'http://sehatprimasby.old-site.com',
    searchResultUrl: 'https://google.com/search?q=Klinik+Utama+Sehat+Prima+Surabaya',
    websiteStatus: 'Needs Manual Verification',
    source: 'Google Places + SerpAPI',
    lastChecked: '2026-09-19 14:20 WIB',
    verificationStatus: 'Pending Verification',
    currentPresenceNotes: 'Website lama dibuat tahun 2017 menggunakan HTTP tidak aman, tata letak rusak di smartphone, dan nomor dokter tidak sinkron.',
    potentialSolution: 'Redesign Modern Web App, Sistem Jadwal Dokter Dinamis & Form Reservasi Pasien',
    contactPerson: 'dr. Andi Wicaksono',
    leadStatus: 'Meeting',
    estimatedValue: 'Rp 42.000.000',
  },
  {
    id: 'cand-04',
    name: 'Toko Tekstil Makmur Sejahtera',
    category: 'Pedagang',
    address: 'Pasar Grosir Surabaya (PGS) Lt. 2 Blok C-12, Surabaya',
    location: 'Surabaya Pusat, Jawa Timur',
    phone: '+62 856-4433-2211',
    placeId: 'ChIJ76kL_w82ey4RPT_TekstilMakmur',
    websiteUrl: null,
    searchResultUrl: 'https://google.com/search?q=Toko+Tekstil+Makmur+Sejahtera+PGS',
    websiteStatus: 'No Website Candidate',
    source: 'Google Places + SerpAPI',
    lastChecked: '2026-09-18 16:45 WIB',
    verificationStatus: 'Verified No Website',
    currentPresenceNotes: 'Grosir kain batik dan seragam sekolah dengan pelanggan yayasan di luar pulau. Pembukuan dan pemesanan masih menggunakan kertas fisik.',
    potentialSolution: 'Web Katalog Kain Digital B2B & Sistem Pembuatan Invoice Otomatis',
    contactPerson: 'Bpk. H. Syarif',
    leadStatus: 'Identified',
    estimatedValue: 'Rp 18.000.000',
  },
  {
    id: 'cand-05',
    name: 'AgriTech Benih Nusantara',
    category: 'Startup',
    address: 'Kawasan Agribisnis Jl. Oro-oro Ombo No. 15, Batu, Jawa Timur',
    location: 'Batu, Jawa Timur',
    phone: '+62 811-2345-6789',
    placeId: 'ChIJ44mN_m851y4RPT_AgriTechNusantara',
    websiteUrl: 'https://agribenih.wixsite.com/temp',
    searchResultUrl: 'https://google.com/search?q=AgriTech+Benih+Nusantara+Batu',
    websiteStatus: 'Needs Manual Verification',
    source: 'Google Places + SerpAPI',
    lastChecked: '2026-09-19 11:10 WIB',
    verificationStatus: 'Pending Verification',
    currentPresenceNotes: 'Startup rintisan riset bibit hidroponik dengan domain subdomain gratisan yang belum mencerminkan reputasi teknologi ilmiah mereka.',
    potentialSolution: 'Enterprise Tech Landing Page, Showcase Riset Ilmiah & Portal Kemitraan Petani',
    contactPerson: 'Reza Fahmi (Co-Founder)',
    leadStatus: 'Proposal',
    estimatedValue: 'Rp 32.000.000',
  },
  {
    id: 'cand-06',
    name: 'Konsultan Pajak & Legal Pratama',
    category: 'Pebisnis',
    address: 'Gedung Bumi Mandiri Tower II Lt. 9, Jl. Panglima Sudirman, Surabaya',
    location: 'Surabaya Pusat, Jawa Timur',
    phone: '+62 31-535-7788',
    placeId: 'ChIJ22qR_p71ey4RPT_PajakPratama',
    websiteUrl: null,
    searchResultUrl: 'https://google.com/search?q=Konsultan+Pajak+Pratama+Surabaya',
    websiteStatus: 'No Website Candidate',
    source: 'Google Places + SerpAPI',
    lastChecked: '2026-09-17 13:00 WIB',
    verificationStatus: 'Lead Qualified',
    currentPresenceNotes: 'Praktik kantor konsultan pajak independen dengan klien korporat manufaktur, kehadiran online hanya sebatas LinkedIn personal.',
    potentialSolution: 'Website Otoritatif Firma Hukum/Pajak, Booking Jadwal Konsultasi & Client Portal',
    contactPerson: 'Agus Pratama, S.E., M.Ak.',
    leadStatus: 'Contacted',
    estimatedValue: 'Rp 28.000.000',
  },
  {
    id: 'cand-07',
    name: 'PT Mitra Konstruksi Mandiri',
    category: 'Perusahaan',
    address: 'Kawasan Pergudangan Sirie Blok A-5, Sidoarjo, Jawa Timur',
    location: 'Sidoarjo, Jawa Timur',
    phone: '+62 31-891-2233',
    placeId: 'ChIJ99pM_s31ey4RPT_MitraKonstruksi',
    websiteUrl: 'https://mitrakonstruksi.co.id',
    searchResultUrl: 'https://google.com/search?q=PT+Mitra+Konstruksi+Mandiri+Sidoarjo',
    websiteStatus: 'Has Website',
    source: 'Google Places (New)',
    lastChecked: '2026-09-20 08:00 WIB',
    verificationStatus: 'False Positive (Has Website)',
    currentPresenceNotes: 'Website resmi sudah aktif dan responsif. Dikecualikan dari penawaran landing page standar, potensi untuk layanan optimasi cloud.',
    potentialSolution: 'Layanan Cloud Infrastructure & Microservices API',
    contactPerson: 'Bpk. Wahyu (IT Manager)',
    leadStatus: 'Identified',
    estimatedValue: 'Rp 60.000.000',
  },
];
