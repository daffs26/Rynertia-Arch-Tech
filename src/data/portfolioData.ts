export interface TechStackItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Design & Strategy' | 'AI & Analytics';
}

export interface MetricItem {
  value: string;
  labelEn: string;
  labelId: string;
  descEn: string;
  descId: string;
}

export interface ProjectDocumentationItem {
  titleEn: string;
  titleId: string;
  categoryEn: string;
  categoryId: string;
  image: string;
  captionEn: string;
  captionId: string;
}

export interface PortfolioItem {
  id: string;
  tag: string;
  category: 'bpmn' | 'it' | 'design' | 'marketing' | 'enterprise';
  clientSectorEn: string;
  clientSectorId: string;
  clientName: string;
  timeline: string;
  titleEn: string;
  titleId: string;
  subtitleEn: string;
  subtitleId: string;
  descEn: string;
  descId: string;
  icon: string;
  image: string;
  gradient: string;
  tagColor: string;
  accentColor: string;
  // Deep-Dive Case Study Content
  overviewEn: string;
  overviewId: string;
  challengesEn: string[];
  challengesId: string[];
  solutionsEn: string[];
  solutionsId: string[];
  architectureEn: string;
  architectureId: string;
  techStack: TechStackItem[];
  metrics: MetricItem[];
  keyFeaturesEn: string[];
  keyFeaturesId: string[];
  teamMemberIds: string[];
  documentation: ProjectDocumentationItem[];
  testimonial?: {
    quoteEn: string;
    quoteId: string;
    author: string;
    role: string;
    company: string;
  };
}

export const portfolioItems: PortfolioItem[] = [
  // =========================================================================
  // KATEGORI 1: RISET & BPMN (5 PROYEK)
  // =========================================================================
  {
    id: 'process-engine',
    tag: 'R&A + IT',
    category: 'bpmn',
    clientSectorEn: 'Manufacturing & Supply Chain',
    clientSectorId: 'Manufaktur & Rantai Pasok',
    clientName: 'AeroLogix Global Corp',
    timeline: '6 Minggu (2024)',
    titleEn: 'Enterprise Process Engine & BPMN Orchestration',
    titleId: 'Enterprise Process Engine & Orkestrasi BPMN',
    subtitleEn: 'Digitalizing multi-tier operational workflows into an automated, fault-tolerant telemetry platform.',
    subtitleId: 'Digitalisasi alur kerja operasional multi-divisi menjadi platform orkestrasi otomatis berkinerja tinggi.',
    descEn: 'BPMN-based workflow orchestration and digital reporting system developed for corporate operational efficiency.',
    descId: 'Orkestrasi alur kerja berbasis BPMN dan sistem pelaporan digital yang dirancang untuk efisiensi operasional korporat.',
    icon: 'activity',
    image: '/portfolio/mockup-process-engine.jpg?v=3',
    gradient: 'from-blue-700 via-blue-600 to-sky-400',
    tagColor: 'text-blue-700',
    accentColor: '#2563eb',
    overviewEn: 'AeroLogix Global required an enterprise-grade process automation architecture to eliminate manual paper approvals across 8 regional distribution hubs. RYNERTIA ARC TECH mapped the end-to-end operational structure using BPMN 2.0 specifications and developed an asynchronous event-driven engine with sub-second execution telemetry.',
    overviewId: 'AeroLogix Global membutuhkan arsitektur otomatisasi proses kelas enterprise untuk mengeliminasi alur persetujuan manual di 8 pusat distribusi regional. RYNERTIA ARC TECH memetakan struktur operasional menyeluruh menggunakan standar BPMN 2.0 dan membangun mesin orkestrasi asinkron berbasis event dengan telemetri eksekusi real-time.',
    challengesEn: [
      'High latency in cross-departmental purchase orders (average 4.5 days per approval cycle).',
      'Fragmented legacy database systems with zero audit traceability and high discrepancy rates.',
      'Lack of real-time operational telemetry for supply chain executives during peak shipment surges.'
    ],
    challengesId: [
      'Latensi tinggi dalam persetujuan purchase order lintas divisi (rata-rata 4.5 hari per siklus).',
      'Sistem database legacy yang terfragmentasi tanpa kemampuan audit jejak transaksi digital.',
      'Ketiadaan dashboard telemetri operasional real-time bagi eksekutif saat lonjakan distribusi.'
    ],
    solutionsEn: [
      'Engineered a visual BPMN 2.0 execution orchestrator with custom event-driven microservices.',
      'Constructed distributed immutable audit trails logging every transactional state change.',
      'Deployed an executive KPI telemetry dashboard providing real-time visibility into inventory flows.'
    ],
    solutionsId: [
      'Membangun mesin eksekusi BPMN 2.0 visual dengan microservices asinkron berbasis event.',
      'Menerapkan jejak audit terdistribusi yang mencatat setiap perpindahan status dokumen tanpa celah manipulasi.',
      'Menyediakan dashboard telemetri eksekutif real-time untuk memantau throughput alur kerja secara instan.'
    ],
    architectureEn: 'High-throughput microservices topology utilizing Apache Kafka for event streaming and Camunda BPMN runtime clusters.',
    architectureId: 'Topologi microservices berkecepatan tinggi memanfaatkan Apache Kafka untuk streaming event dan cluster Camunda BPMN.',
    techStack: [
      { name: 'BPMN 2.0 Engine', category: 'Backend' },
      { name: 'Apache Kafka', category: 'Backend' },
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'Next.js 15', category: 'Frontend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Docker / K8s', category: 'DevOps' }
    ],
    metrics: [
      { value: '12 Alur Kerja', labelEn: 'BPMN 2.0 Workflows', labelId: 'Alur BPMN 2.0', descEn: 'Cross-departmental processes modeled and standardized into BPMN 2.0 specifications.', descId: 'Alur operasional lintas divisi dipetakan dan distandarisasi ke spesifikasi BPMN 2.0.' },
      { value: '100% Digital', labelEn: 'Paperless Transition', labelId: 'Transisi Dokumen', descEn: 'Paper approvals converted into verified digital audit pathways.', descId: 'Persetujuan formulir kertas dialihkan ke alur digital terverifikasi.' },
      { value: 'MVP Siap Uji', labelEn: 'Staging Runtime', labelId: 'Rilis Mesin UAT', descEn: 'Fault-tolerant orchestration runtime prepared for staging verification.', descId: 'Mesin orkestrasi siap diuji pada lingkungan staging sebelum rilis.' }
    ],
    keyFeaturesEn: ['Visual workflow builder with drag-and-drop nodes', 'Automated role-based escalation timers', 'Instant audit export with cryptographically signed tokens'],
    keyFeaturesId: ['Penyusun alur kerja visual interaktif', 'Timer eskalasi otomatis berbasis hierarki peran', 'Ekspor riwayat audit terverifikasi tanda tangan kriptografi'],
    teamMemberIds: ['andiryaas', 'nicholas', 'fathur', 'dandy', 'hannan'],
    documentation: [
      { titleEn: 'Discovery & Field Analysis', titleId: 'Riset Alur Kerja Lapangan', categoryEn: 'Research', categoryId: 'Riset & Discovery', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80', captionEn: 'Lead Consultant interviewing operational division heads to document approval trees.', captionId: 'Sesi wawancara mendalam pemetaan pohon persetujuan divisi operasional.' },
      { titleEn: 'System Architecture Blueprints', titleId: 'Perancangan Arsitektur Sistem', categoryEn: 'Architecture', categoryId: 'Desain Arsitektur', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80', captionEn: 'Engineering session formulating event-driven state machine models.', captionId: 'Penyusunan model state-machine dan spesifikasi microservice terdistribusi.' },
      { titleEn: 'Live UAT & Validation', titleId: 'Uji Coba Penerimaan Sistem (UAT)', categoryEn: 'Quality Assurance', categoryId: 'Pengujian Sistem', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80', captionEn: 'Stress testing and dispatch workflow validation conducted on-site.', captionId: 'Pengujian beban kerja langsung dan validasi alur kerja delegasi di pusat distribusi.' }
    ],
    testimonial: {
      quoteEn: 'RYNERTIA ARC TECH transformed our scattered manual paperwork into an ultra-fast digital workflow engine that saved us hundreds of operational hours.',
      quoteId: 'RYNERTIA ARC TECH mengubah berkas manual kami menjadi mesin alur kerja digital super cepat yang menghemat ratusan jam operasional per minggu.',
      author: 'Jonathan Reynolds',
      role: 'Chief Operating Officer',
      company: 'AeroLogix Global Corp'
    }
  },
  {
    id: 'banking-credit-workflow',
    tag: 'R&A + BPMN',
    category: 'bpmn',
    clientSectorEn: 'Corporate Banking & Credit',
    clientSectorId: 'Perbankan & Kredit Korporasi',
    clientName: 'Bank Mandiri Mitra Finansial',
    timeline: '6 Minggu (2024)',
    titleEn: 'BPMN 2.0 Corporate Loan & Credit Scoring Automation',
    titleId: 'Otomatisasi Scoring Kredit & Alur Pinjaman BPMN 2.0',
    subtitleEn: 'Accelerating commercial credit disbursement cycles with strict risk mitigation workflows.',
    subtitleId: 'Mempercepat siklus pencairan kredit komersial korporasi dengan mitigasi risiko otomatis.',
    descEn: 'End-to-end commercial loan approval engine combining automated credit scoring matrix with strict multi-branch compliance verification.',
    descId: 'Mesin persetujuan kredit komersial terintegrasi yang memadukan matriks scoring otomatis dengan verifikasi regulasi perbankan.',
    icon: 'activity',
    image: '/portfolio/mockup-banking-credit-workflow.jpg?v=3',
    gradient: 'from-blue-800 via-indigo-700 to-slate-900',
    tagColor: 'text-blue-700',
    accentColor: '#1d4ed8',
    overviewEn: 'Bank Mandiri Mitra required an automated credit committee workflow to accelerate underwriting for SME & commercial loans while strictly complying with OJK regulatory capital guidelines. RYNERTIA ARC TECH modeled 42 distinct approval branches and deployed a resilient rule execution engine.',
    overviewId: 'Bank Mandiri Mitra memerlukan alur kerja komite kredit terotomatisasi untuk mempercepat underwriting pinjaman korporasi dengan kepatuhan penuh regulasi OJK. RYNERTIA ARC TECH memetakan 42 cabang alur keputusan dan membangun mesin eksekusi aturan kredit cerdas.',
    challengesEn: ['Manual underwriting bottleneck averaging 18 days per application.', 'Non-standardized credit memo drafts across 24 regional commercial offices.'],
    challengesId: ['Waktu underwriting manual rata-rata 18 hari kerja per pengajuan.', 'Format draft nota analisa kredit tidak standar di 24 kantor wilayah.'],
    solutionsEn: ['Standardized BPMN decision trees with automated data enrichment from credit bureaus.', 'Built automated document parsing reducing manual analyst input by 80%.'],
    solutionsId: ['Standarisasi alur keputusan BPMN dengan integrasi data biro kredit otomatis.', 'Membangun parser dokumen cerdas yang memangkas input manual analis hingga 80%.'],
    architectureEn: 'Spring Boot microservices communicating via gRPC with Camunda Zeebe workflow engine.',
    architectureId: 'Microservices Spring Boot berkomunikasi via gRPC dengan engine orkestrasi Camunda Zeebe.',
    techStack: [
      { name: 'Camunda Zeebe', category: 'Backend' },
      { name: 'Java Spring Boot', category: 'Backend' },
      { name: 'Next.js', category: 'Frontend' },
      { name: 'Oracle DB', category: 'Database' },
      { name: 'Redis Cache', category: 'Database' }
    ],
    metrics: [
      { value: '42 Skenario', labelEn: 'Decision Branches', labelId: 'Alur Keputusan', descEn: 'Approval rules and underwriting branches mapped into standardized BPMN flows.', descId: 'Cabang logika persetujuan dan mitigasi risiko dipetakan ke alur BPMN terstandar.' },
      { value: '6 Modul UAT', labelEn: 'Prototype Modules', labelId: 'Prototipe Antarmuka', descEn: 'Automated scoring interface and review portals ready for committee testing.', descId: 'Modul scoring otomatis dan portal analisa siap uji bagi komite kredit.' }
    ],
    keyFeaturesEn: ['Real-time credit score aggregation', 'Automated collateral valuation routing', 'Digital committee quorum voting'],
    keyFeaturesId: ['Agregasi skor kredit real-time', 'Rute penilaian agunan otomatis', 'Voting kuorum komite kredit digital'],
    teamMemberIds: ['andiryaas', 'nicholas', 'fathur'],
    documentation: [
      { titleEn: 'Credit Committee Workshop', titleId: 'Lokakarya Komite Kredit', categoryEn: 'Research', categoryId: 'Riset Proses', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80', captionEn: 'Mapping credit evaluation criteria with senior risk underwriters.', captionId: 'Pemetaan kriteria evaluasi kredit bersama tim manajemen risiko senior.' },
      { titleEn: 'Underwriting Interface Validation', titleId: 'Validasi Antarmuka Underwriter', categoryEn: 'Design', categoryId: 'Desain UI', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80', captionEn: 'Testing analytical dashboards with loan officers.', captionId: 'Pengujian dashboard nota analisa kredit dengan para analis kredit.' }
    ]
  },
  {
    id: 'procurement-orchestration',
    tag: 'R&A + BPMN',
    category: 'bpmn',
    clientSectorEn: 'Energy & Oil/Gas',
    clientSectorId: 'Energi & Minyak Gas',
    clientName: 'PT PetroNusa Energi',
    timeline: '8 Minggu (2024)',
    titleEn: 'Strategic Procurement & Supplier Approval Orchestration',
    titleId: 'Orkestrasi Pengadaan Strategis & Verifikasi Vendor',
    subtitleEn: 'Automating high-value Capex procurement with strict multi-tiered compliance checks.',
    subtitleId: 'Otomatisasi pengadaan Capex bernilai tinggi dengan verifikasi kepatuhan multi-tingkat.',
    descEn: 'Transparent e-procurement BPMN engine standardizing RFQ distribution, vendor vetting, and multi-signature authorization.',
    descId: 'Mesin BPMN pengadaan digital transparan yang menstandarisasi distribusi tender, kualifikasi vendor, dan otorisasi multi-tanda tangan.',
    icon: 'activity',
    image: '/portfolio/mockup-procurement-orchestration.jpg?v=3',
    gradient: 'from-amber-600 via-orange-700 to-slate-900',
    tagColor: 'text-amber-700',
    accentColor: '#d97706',
    overviewEn: 'PetroNusa Energi required an uncompromised procurement workflow system to manage multi-million dollar drilling equipment contracts across offshore rigs.',
    overviewId: 'PetroNusa Energi memerlukan sistem alur kerja pengadaan tanpa kompromi untuk mengelola kontrak peralatan rig lepas pantai bernilai ratusan miliar rupiah.',
    challengesEn: ['Paper-based purchase requisitions taking weeks to reach executive sign-off.', 'Risk of vendor bid tampering in distributed remote branch offices.'],
    challengesId: ['Formulir PR berbasis kertas membutuhkan berminggu-minggu untuk ditandatangani.', 'Risiko kebocoran penawaran harga vendor di kantor perwakilan terpencil.'],
    solutionsEn: ['Engineered cryptographic sealed-bid tendering mechanism.', 'Integrated multi-tier approval hierarchy with dynamic threshold delegations.'],
    solutionsId: ['Membangun mekanisme tender tertutup terenkripsi kriptografi.', 'Mengintegrasikan delegasi batas wewenang pengadaan dinamis berbasis nilai transaksi.'],
    architectureEn: 'High-security microservices architecture hosted on hybrid private cloud.',
    architectureId: 'Arsitektur microservices berkeamanan tinggi pada cloud privat hybrid.',
    techStack: [
      { name: 'BPMN Modeler', category: 'Backend' },
      { name: 'Go / Golang', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Vault Security', category: 'DevOps' }
    ],
    metrics: [
      { value: 'Portal e-Tender', labelEn: 'Tendering Portal', labelId: 'Sistem Pengadaan', descEn: 'Standardized RFQ distribution and encrypted vendor document verification.', descId: 'Standarisasi distribusi tender dan verifikasi dokumen vendor terenkripsi.' },
      { value: 'Multi-Otorisasi', labelEn: 'Approval Flow', labelId: 'Alur Otorisasi', descEn: 'Dynamic multi-tier approval paths ensuring transparent procurement governance.', descId: 'Alur persetujuan bertingkat digital untuk menjamin transparansi lelang pengadaan.' }
    ],
    keyFeaturesEn: ['Cryptographic sealed-bid tender rooms', 'Automated tax & legal compliance check', 'Real-time vendor KPI scorecards'],
    keyFeaturesId: ['Ruang penawaran tender terenkripsi', 'Verifikasi legalitas dan pajak vendor otomatis', 'Kartu skor kinerja vendor real-time'],
    teamMemberIds: ['andiryaas', 'dandy', 'hannan'],
    documentation: [
      { titleEn: 'Procurement Process Blueprint', titleId: 'Cetak Biru Alur Pengadaan', categoryEn: 'Strategy', categoryId: 'Strategi', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80', captionEn: 'Reviewing procurement governance protocols with internal audit.', captionId: 'Penyelarasan tata kelola pengadaan bersama auditor internal.' }
    ]
  },
  {
    id: 'insurance-claim-matrix',
    tag: 'R&A + BPMN',
    category: 'bpmn',
    clientSectorEn: 'Insurance & Risk Management',
    clientSectorId: 'Asuransi & Manajemen Risiko',
    clientName: 'Asuransi Jiwa Nusantara',
    timeline: '5 Minggu (2024)',
    titleEn: 'End-to-End Insurance Claim Triage & Decision Engine',
    titleId: 'Mesin Keputusan & Triase Klaim Asuransi Terpadu',
    subtitleEn: 'Transforming health and accident claim resolutions with automated risk-based decision pathways.',
    subtitleId: 'Transformasi penyelesaian klaim kesehatan dengan jalur keputusan otomatis berbasis risiko.',
    descEn: 'Intelligent claim triage system routing straight-through payouts for low-risk claims while escalating anomalies to specialized adjusters.',
    descId: 'Sistem triase klaim cerdas yang menyetujui pembayaran instan untuk klaim berisiko rendah dan mengeskalasi anomali ke adjuster senior.',
    icon: 'activity',
    image: '/portfolio/mockup-insurance-claim-matrix.jpg?v=3',
    gradient: 'from-emerald-700 via-teal-800 to-slate-900',
    tagColor: 'text-emerald-700',
    accentColor: '#059669',
    overviewEn: 'Asuransi Jiwa Nusantara processed over 80,000 monthly outpatient claims manually, causing member dissatisfaction during hospital discharge. RYNERTIA ARC TECH engineered a straight-through processing (STP) claim engine.',
    overviewId: 'Asuransi Jiwa Nusantara memproses 80.000 klaim rawat jalan manual per bulan yang memperlambat proses kepulangan pasien. RYNERTIA ARC TECH merancang mesin klaim instan STP (Straight-Through Processing).',
    challengesEn: ['Excessive manual review of repetitive minor receipts.', 'High fraud leakages in diagnostic treatment exclusions.'],
    challengesId: ['Pemeriksaan manual berulang untuk kuitansi pengobatan rutin.', 'Kebocoran klaim akibat diagnosis yang sebenarnya dikecualikan dalam polis.'],
    solutionsEn: ['Automated medical coding (ICD-10) cross-check against active policy riders.', 'Self-healing BPMN exception handling workflows for incomplete hospital invoices.'],
    solutionsId: ['Pencocokan otomatis kode diagnosis ICD-10 dengan manfaat polis aktif.', 'Alur kerja eskalasi otomatis untuk kuitansi rumah sakit yang belum lengkap.'],
    architectureEn: 'Event-driven event pipeline with Redis deduplication and Camunda orchestrator.',
    architectureId: 'Pipeline event asinkron dengan deduplikasi Redis dan orkestrator Camunda.',
    techStack: [
      { name: 'BPMN 2.0', category: 'Backend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Redis', category: 'Database' },
      { name: 'MongoDB', category: 'Database' }
    ],
    metrics: [
      { value: 'Matriks Triase', labelEn: 'Claim Triage Rules', labelId: 'Klasifikasi Klaim', descEn: 'Automated policy rule matching routing standard outpatient submissions.', descId: 'Pencocokan kriteria validasi polis dan pembagian otomatis berkas klaim.' },
      { value: 'Format Digital', labelEn: 'Intake Pipeline', labelId: 'Verifikasi Berkas', descEn: 'Structured intake pipeline accelerating hospital invoice verification.', descId: 'Format data terstandarisasi untuk mempercepat verifikasi kuitansi rumah sakit.' }
    ],
    keyFeaturesEn: ['Instant OCR medical receipt validation', 'Real-time hospital partner integration', 'Automated fraud anomaly flagger'],
    keyFeaturesId: ['Validasi kuitansi medis via OCR instan', 'Integrasi API langsung dengan rumah sakit rekanan', 'Deteksi anomali klaim berindikasi fraud'],
    teamMemberIds: ['andiryaas', 'nicholas', 'fathur'],
    documentation: [
      { titleEn: 'Hospital Testing Trial', titleId: 'Uji Integrasi Rumah Sakit', categoryEn: 'Testing', categoryId: 'Pengujian', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80', captionEn: 'Live claim test conducted at partner hospital billing counter.', captionId: 'Pengujian klaim langsung di loket kasir rumah sakit rekanan.' }
    ]
  },
  {
    id: 'aviation-flight-ops',
    tag: 'R&A + BPMN',
    category: 'bpmn',
    clientSectorEn: 'Aviation & Airport Operations',
    clientSectorId: 'Penerbangan & Operasional Bandara',
    clientName: 'TransAsia Airlines',
    timeline: '8 Minggu (2024)',
    titleEn: 'Aviation Ground Handling & Flight Dispatch BPMN System',
    titleId: 'Sistem BPMN Ground Handling & Dispatch Penerbangan',
    subtitleEn: 'Synchronizing multi-team aircraft turnaround operations to eliminate on-tarmac delays.',
    subtitleId: 'Sinkronisasi alur kerja penanganan pesawat di darat untuk meminimalkan keterlambatan penerbangan.',
    descEn: 'Critical mission dispatch platform orchestrating baggage loading, refueling, maintenance sign-off, and cabin preparation within strict turnaround windows.',
    descId: 'Platform dispatch operasional yang mengorkestrasi penanganan bagasi, pengisian avtur, izin teknisi, dan kebersihan kabin tepat waktu.',
    icon: 'activity',
    image: '/portfolio/mockup-aviation-flight-ops.jpg?v=3',
    gradient: 'from-sky-700 via-blue-800 to-slate-900',
    tagColor: 'text-sky-700',
    accentColor: '#0284c7',
    overviewEn: 'TransAsia Airlines required second-by-second ground orchestration across 14 international airports to increase On-Time Performance (OTP) ratings. RYNERTIA ARC TECH engineered a fault-tolerant BPMN dispatch workflow.',
    overviewId: 'TransAsia Airlines memerlukan orkestrasi darat presisi tinggi di 14 bandara internasional guna meningkatkan skor On-Time Performance (OTP). RYNERTIA ARC TECH merancang alur kerja dispatch BPMN toleran kegagalan.',
    challengesEn: ['Disconnected radio communications causing flight turnaround overruns.', 'Delayed pilot manifest authorizations on gate shifts.'],
    challengesId: ['Komunikasi radio konvensional memicu keterlambatan turnaround pesawat.', 'Keterlambatan verifikasi manifes pilot saat rotasi gerbang keberangkatan.'],
    solutionsEn: ['Built tablet-based digital dispatch check-in for ground teams.', 'Automated regulatory pre-flight airworthiness authorization trees.'],
    solutionsId: ['Menerapkan aplikasi tablet dispatch bagi seluruh personel apron bandara.', 'Otomatisasi pohon verifikasi kelayakan terbang sesuai standar FAA & Kemenhub.'],
    architectureEn: 'Offline-first progressive architecture synced with airport terminal local relays.',
    architectureId: 'Arsitektur offline-first sinkron dengan relay lokal terminal bandara.',
    techStack: [
      { name: 'Camunda BPMN', category: 'Backend' },
      { name: 'WebSocket / MQTT', category: 'Backend' },
      { name: 'React Native', category: 'Frontend' },
      { name: 'PostgreSQL', category: 'Database' }
    ],
    metrics: [
      { value: '18 Alur Kerja', labelEn: 'Standardized SOPs', labelId: 'SOP Ground Handling', descEn: 'Airside coordination and departure checklist flows standardized for ground teams.', descId: 'Standarisasi alur koordinasi apron bandara dan checklist keberangkatan.' },
      { value: 'Dashboard Monitor', labelEn: 'Ground Visibility', labelId: 'Visibilitas Tim', descEn: 'Handheld tablet interface for ground crew timeline coordination.', descId: 'Antarmuka pemantauan status armada real-time untuk tim operasional apron.' }
    ],
    keyFeaturesEn: ['Tarmac ground crew timeline coordinator', 'Automated fuel and cargo balance calculation', 'Instant tower & captain sign-off'],
    keyFeaturesId: ['Koordinator linimasa tim apron bandara', 'Kalkulasi otomatis keseimbangan beban bahan bakar & kargo', 'Tanda tangan digital kapten dan menara pengawas'],
    teamMemberIds: ['andiryaas', 'nicholas', 'fathur', 'dandy'],
    documentation: [
      { titleEn: 'Apron Operations Field Trial', titleId: 'Uji Coba Lapangan di Apron', categoryEn: 'Field Trial', categoryId: 'Uji Lapangan', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80', captionEn: 'Testing handheld dispatch units directly on the airport tarmac.', captionId: 'Pengujian perangkat tablet dispatch langsung di area apron pesawat.' }
    ]
  },

  // =========================================================================
  // KATEGORI 2: SOFTWARE & CORE IT (5 PROYEK)
  // =========================================================================
  {
    id: 'fintech-app',
    tag: 'Core IT',
    category: 'it',
    clientSectorEn: 'Digital Banking & FinTech',
    clientSectorId: 'Perbankan Digital & FinTech',
    clientName: 'NavaPay Digital Bank',
    timeline: '8 Minggu (2024)',
    titleEn: 'FinTech Mobile Banking Core & Secure Gateway',
    titleId: 'Core Mobile Banking FinTech & Gateway Terenkripsi',
    subtitleEn: 'Crafting a frictionless, biometric-secured mobile banking experience engineered for millions of transactions.',
    subtitleId: 'Merancang aplikasi mobile banking berkeamanan biometrik tinggi dengan pengalaman pengguna tanpa hambatan.',
    descEn: 'End-to-end user experience redesign and secure API gateway integration for digital financial transactions.',
    descId: 'Redesain pengalaman pengguna menyeluruh dan integrasi gateway API aman untuk transaksi keuangan digital.',
    icon: 'smartphone',
    image: '/portfolio/mockup-fintech-app.jpg?v=3',
    gradient: 'from-slate-900 via-slate-800 to-blue-900',
    tagColor: 'text-slate-900',
    accentColor: '#10b981',
    overviewEn: 'NavaPay required a ground-up rebuild of their retail mobile banking application and transactional core. RYNERTIA ARC TECH delivered an award-winning UI/UX design system, implemented bank-grade AES-256 GCM encryption, and architected a resilient micro-gateway capable of sustaining 4,500+ TPS under peak traffic loads.',
    overviewId: 'NavaPay memerlukan perombakan total pada aplikasi mobile banking ritel dan mesin transaksi mereka. RYNERTIA ARC TECH menghadirkan sistem desain antarmuka premium, menerapkan enkripsi perbankan AES-256 GCM, dan merancang micro-gateway tangguh yang mampu menangani lebih dari 4.500 TPS.',
    challengesEn: [
      'High onboarding abandonment rate (38%) caused by complex KYC validation flows.',
      'Strict PCI-DSS and Central Bank security compliance requirements for mobile cryptographic storage.',
      'Spike handling latency during payday transaction surges.'
    ],
    challengesId: [
      'Tingginya angka pembatalan pendaftaran (38%) akibat proses KYC yang lambat dan kaku.',
      'Tuntutan standar kepatuhan regulasi keamanan PCI-DSS dan Bank Indonesia.',
      'Lonjakan transaksi saat tanggal gajian yang memicu perlambatan gateway perbankan.'
    ],
    solutionsEn: [
      'Redesigned digital onboarding into a streamlined 3-minute biometric e-KYC journey.',
      'Built a distributed API gateway utilizing Go and gRPC with dynamic rate-limiting.',
      'Engineered an isolated cryptographic vault leveraging device hardware enclaves.'
    ],
    solutionsId: [
      'Merancang ulang alur registrasi digital menjadi e-KYC biometrik instan dalam waktu kurang dari 3 menit.',
      'Membangun API gateway terdistribusi menggunakan Go dan gRPC dengan proteksi lonjakan beban.',
      'Menerapkan brankas kriptografi terlindungi pada hardware enclave perangkat mobile.'
    ],
    architectureEn: 'High-throughput microservices using Go gRPC with Redis cluster and PostgreSQL read-replicas.',
    architectureId: 'Microservices berkecepatan tinggi menggunakan Go gRPC dengan cluster Redis dan replika PostgreSQL.',
    techStack: [
      { name: 'React Native', category: 'Frontend' },
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'Go (Golang)', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Redis Cluster', category: 'Database' },
      { name: 'Kubernetes', category: 'DevOps' }
    ],
    metrics: [
      { value: 'Aplikasi MVP', labelEn: 'Mobile MVP', labelId: 'Arsitektur Mobile', descEn: 'Responsive frontend architecture and encrypted transfer modules ready for release.', descId: 'Frontend responsif dan modul transfer terenkripsi siap rilis ke pengguna.' },
      { value: '14 Endpoint API', labelEn: 'API Endpoints', labelId: 'Gateway Terintegrasi', descEn: 'Integrated payment gateway interfaces and secure multi-factor authentication.', descId: 'Integrasi gateway pembayaran dan autentikasi multi-faktor aman.' },
      { value: 'Alur e-KYC', labelEn: 'Digital Onboarding', labelId: 'Onboarding Digital', descEn: 'Verified digital account registration with biometric recognition flows.', descId: 'Pendaftaran akun digital terverifikasi dengan pengenalan biometrik.' }
    ],
    keyFeaturesEn: ['Biometric FaceID & Enclave Auth', 'Instant QRIS payment processor', 'Personal finance AI categorization'],
    keyFeaturesId: ['Autentikasi Biometrik FaceID & Enclave', 'Pemrosesan pembayaran QRIS instan', 'Kategorisasi pengeluaran finansial cerdas'],
    teamMemberIds: ['andiryaas', 'fathur', 'nicholas', 'dandy', 'hannan'],
    documentation: [
      { titleEn: 'UX User Testing Sprints', titleId: 'Uji Coba Pengguna & Prototipe Desain UI', categoryEn: 'UI/UX Research', categoryId: 'Riset Desain UI/UX', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80', captionEn: 'Conducting usability testing sessions with diverse retail banking customer personas.', captionId: 'Pelaksanaan sesi pengujian kegunaan antarmuka bersama berbagai persona nasabah.' },
      { titleEn: 'Security Penetration Testing', titleId: 'Audit Keamanan Enkripsi & Penetrasi Sistem', categoryEn: 'Security Engineering', categoryId: 'Rekayasa Keamanan', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80', captionEn: 'IT Engineering team running automated vulnerability scans and biometric enclave encryption.', captionId: 'Tim Rekayasa IT Rynertia melakukan simulasi pengujian kerentanan dan audit enkripsi.' }
    ],
    testimonial: {
      quoteEn: 'The security architecture and frictionless UX engineered by Rynertia allowed us to onboard over 450,000 active retail accounts in just our first quarter.',
      quoteId: 'Arsitektur keamanan dan kenyamanan aplikasi yang dibangun oleh Rynertia memungkinkan kami mengakuisisi lebih dari 450.000 nasabah aktif di kuartal pertama.',
      author: 'Clarissa Danuwijaya',
      role: 'Head of Digital Products',
      company: 'NavaPay Digital Bank'
    }
  },
  {
    id: 'ai-support-hub',
    tag: 'Core IT',
    category: 'it',
    clientSectorEn: 'SaaS & Customer Intelligence',
    clientSectorId: 'SaaS & Layanan Pelanggan Digital',
    clientName: 'OmniDesk Technologies',
    timeline: '4 Minggu (2024)',
    titleEn: 'AI Multi-Channel Customer Intelligence Hub',
    titleId: 'Pusat Layanan Pelanggan Cerdas Berbasis AI',
    subtitleEn: 'Deploying custom LLM conversational agents integrated with WhatsApp, live chat, and CRM ticket resolution.',
    subtitleId: 'Integrasi agen AI cerdas lintas kanal (WhatsApp, Web, Email) dengan otomatisasi resolusi tiket CRM.',
    descEn: 'Automated multi-channel customer intelligence agent trained on enterprise knowledge bases with sub-second response times.',
    descId: 'Agen AI cerdas lintas kanal yang dilatih dengan basis data korporat untuk melayani keluhan pelanggan secara instan 24/7.',
    icon: 'bot',
    image: '/portfolio/mockup-ai-support-hub.jpg?v=3',
    gradient: 'from-violet-700 via-purple-800 to-slate-900',
    tagColor: 'text-violet-700',
    accentColor: '#9333ea',
    overviewEn: 'OmniDesk Technologies sought to overhaul their enterprise customer support operations, which were overwhelmed by 12,000+ inbound support inquiries daily across WhatsApp, live web chat, and Zendesk tickets.',
    overviewId: 'OmniDesk Technologies ingin memodernisasi operasional bantuan pelanggan mereka yang melayani lebih dari 12.000 pertanyaan harian di WhatsApp, web chat, dan tiket Zendesk.',
    challengesEn: ['High first-response latency during peak afternoon support hours.', 'Inconsistent answer accuracy among 80+ customer support agents.'],
    challengesId: ['Waktu tunggu respon pertama yang tinggi saat jam sibuk.', 'Inkonsistensi akurasi jawaban di antara 80+ agen layanan pelanggan.'],
    solutionsEn: ['Architected a RAG vector search engine over corporate product documentation.', 'Deployed an automated WhatsApp Business API webhook connector.'],
    solutionsId: ['Membangun mesin pencarian vektor RAG berbasis dokumen teknis korporat.', 'Mengintegrasikan konektor webhook WhatsApp Business API berkecepatan tinggi.'],
    architectureEn: 'Python FastAPI RAG pipeline utilizing Qdrant vector database and Redis cache.',
    architectureId: 'Pipeline RAG Python FastAPI memanfaatkan database vektor Qdrant dan cache Redis.',
    techStack: [
      { name: 'Python FastAPI', category: 'Backend' },
      { name: 'LangChain / LlamaIndex', category: 'AI & Analytics' },
      { name: 'Qdrant Vector DB', category: 'Database' },
      { name: 'React / Next.js', category: 'Frontend' }
    ],
    metrics: [
      { value: 'Bot Layanan', labelEn: 'AI Triage Bot', labelId: 'Triase Tiket AI', descEn: 'Automated routing of customer support inquiries to relevant human teams.', descId: 'Otomasi routing tiket keluhan pelanggan ke agen terkait secara terarah.' },
      { value: 'Portal CS', labelEn: 'Central Support UI', labelId: 'Antarmuka Terpusat', descEn: 'Single unified console managing inquiries from WhatsApp and live chat.', descId: 'Portal satu pintu untuk mengelola obrolan dari WhatsApp dan live chat web.' }
    ],
    keyFeaturesEn: ['Semantic vector search over company manuals', 'Live human agent handover switch', 'Sentiment and urgency classification'],
    keyFeaturesId: ['Pencarian dokumen berbasis semantik vektor cerdas', 'Alih kendali ke agen manusia otomatis saat keluhan kritis', 'Klasifikasi tingkat urgensi dan sentimen pelanggan'],
    teamMemberIds: ['andiryaas', 'fathur', 'nicholas'],
    documentation: [
      { titleEn: 'Model Tuning & Accuracy Evaluation', titleId: 'Evaluasi Akurasi Model RAG', categoryEn: 'AI Testing', categoryId: 'Pengujian AI', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80', captionEn: 'Fine-tuning response safety parameters and testing emotion detection.', captionId: 'Penyelarasan parameter akurasi respon dan uji coba deteksi emosi pelanggan.' }
    ]
  },
  {
    id: 'smart-iot-grid',
    tag: 'Core IT',
    category: 'it',
    clientSectorEn: 'Utilities & Industrial IoT',
    clientSectorId: 'Utilitas & IoT Industri',
    clientName: 'PT Energi Terbarukan Surya',
    timeline: '6 Minggu (2024)',
    titleEn: 'Industrial IoT SCADA Telemetry & Smart Microgrid Core',
    titleId: 'Telemetri IoT Industri SCADA & Core Microgrid Cerdas',
    subtitleEn: 'Real-time telemetry and predictive battery storage dispatching across 34 solar power plants.',
    subtitleId: 'Telemetri real-time dan pengaturan penyimpanan baterai otomatis di 34 pembangkit listrik tenaga surya.',
    descEn: 'Industrial SCADA and high-throughput IoT broker processing over 50,000 sensor telemetry metrics per second with sub-50ms latency.',
    descId: 'Broker IoT industri SCADA yang memproses lebih dari 50.000 telemetri sensor per detik dengan latensi di bawah 50 milidetik.',
    icon: 'activity',
    image: '/portfolio/mockup-smart-iot-grid.jpg?v=3',
    gradient: 'from-amber-700 via-yellow-600 to-slate-900',
    tagColor: 'text-amber-700',
    accentColor: '#eab308',
    overviewEn: 'Surya Energi required a centralized real-time telemetry core to balance renewable solar generation across islands and dispatch battery reserve systems automatically.',
    overviewId: 'Surya Energi memerlukan sistem inti telemetri terpusat untuk menyeimbangkan pasokan listrik surya antar pulau dan mengelola cadangan baterai cerdas.',
    challengesEn: ['Massive data surges during inverter fault conditions.', 'Spotty GSM telemetry signals from remote island microgrid stations.'],
    challengesId: ['Lonjakan data besar saat terjadi kegagalan inverter panel.', 'Koneksi seluler terputus-putus pada stasiun pembangkit di pulau terpencil.'],
    solutionsEn: ['Engineered lightweight edge MQTT brokers with local store-and-forward buffers.', 'Constructed timeseries TimescaleDB cluster for rapid telemetry aggregation.'],
    solutionsId: ['Membangun broker edge MQTT dengan kemampuan simpan-dan-teruskan lokal.', 'Menyusun cluster database timeseries TimescaleDB untuk agregasi telemetri cepat.'],
    architectureEn: 'High-speed MQTT message brokers feeding TimescaleDB and Grafana enterprise clusters.',
    architectureId: 'Broker pesan MQTT berkecepatan tinggi yang terhubung ke TimescaleDB dan cluster Grafana.',
    techStack: [
      { name: 'EMQX MQTT', category: 'Backend' },
      { name: 'Golang', category: 'Backend' },
      { name: 'TimescaleDB', category: 'Database' },
      { name: 'Grafana Enterprise', category: 'Frontend' }
    ],
    metrics: [
      { value: 'Dasbor SCADA', labelEn: 'SCADA Dashboard', labelId: 'Monitoring Sensor', descEn: 'Web visual console monitoring inverter telemetry and voltage readings.', descId: 'Antarmuka visual web untuk memantau status tegangan dan telemetri perangkat.' },
      { value: 'Sistem Alert', labelEn: 'Alert Triggers', labelId: 'Deteksi Anomali', descEn: 'Automated alert notifications when electrical parameters breach safe thresholds.', descId: 'Pemicu peringatan otomatis ketika parameter daya berada di luar batas aman.' }
    ],
    keyFeaturesEn: ['Sub-50ms telemetry alarm notifications', 'Automated battery charge-discharge scheduler', 'Satellite fallback data sync'],
    keyFeaturesId: ['Notifikasi alarm sensor di bawah 50ms', 'Penjadwalan pengisian dan pelepasan baterai otomatis', 'Sinkronisasi cadangan via satelit saat jaringan terputus'],
    teamMemberIds: ['andiryaas', 'nicholas', 'dandy'],
    documentation: [
      { titleEn: 'Solar Farm SCADA Calibration', titleId: 'Kalibrasi Sensor Solar Farm', categoryEn: 'IoT Engineering', categoryId: 'Rekayasa IoT', image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80', captionEn: 'Field engineers calibrating high-frequency solar inverter sensors.', captionId: 'Insinyur lapangan melakukan kalibrasi sensor inverter panel surya.' }
    ]
  },
  {
    id: 'cloud-finops-platform',
    tag: 'Core IT',
    category: 'it',
    clientSectorEn: 'Cloud Infrastructure & SaaS',
    clientSectorId: 'Infrastruktur Cloud & SaaS',
    clientName: 'CloudApex Global',
    timeline: '4 Minggu (2024)',
    titleEn: 'Multi-Cloud FinOps Engine & Infrastructure Auto-Scaler',
    titleId: 'Mesin FinOps Multi-Cloud & Auto-Scaler Infrastruktur',
    subtitleEn: 'Intelligently optimizing AWS, GCP, and Azure enterprise cloud spending through automated workload rightsizing.',
    subtitleId: 'Optimasi biaya komputasi AWS, GCP, dan Azure korporat melalui penyesuaian kapasitas beban kerja otomatis.',
    descEn: 'Cloud optimization system auditing idle Kubernetes nodes, orphan block storages, and reserved instance allocations to slash cloud bills.',
    descId: 'Sistem optimasi infrastruktur cloud yang mendeteksi cluster Kubernetes menganggur, storage tidak terpakai, dan komitmen instans hemat.',
    icon: 'activity',
    image: '/portfolio/mockup-cloud-finops-platform.jpg?v=3',
    gradient: 'from-cyan-700 via-blue-800 to-slate-900',
    tagColor: 'text-cyan-700',
    accentColor: '#06b6d4',
    overviewEn: 'CloudApex managed over 1,500 cloud accounts across 4 continents and required an automated FinOps orchestration system to eliminate cloud waste.',
    overviewId: 'CloudApex mengelola lebih dari 1.500 akun cloud di 4 benua dan memerlukan sistem FinOps otomatis untuk mengeliminasi pemborosan sewa server.',
    challengesEn: ['Unmonitored dev and staging clusters running over weekends.', 'Complex cross-cloud billing CSV files taking weeks to reconcile.'],
    challengesId: ['Cluster development yang tetap berjalan di akhir pekan tanpa pengawasan.', 'File tagihan cloud yang rumit dan membutuhkan berminggu-minggu untuk rekonsiliasi.'],
    solutionsEn: ['Automated weekend shutdown policies for non-production namespaces.', 'Consolidated unified multi-cloud billing dashboard with anomaly alerts.'],
    solutionsId: ['Kebijakan pemadaman otomatis cluster non-produksi di luar jam kerja.', 'Dashboard konsolidasi tagihan multi-cloud terpadu dengan deteksi anomali biaya.'],
    architectureEn: 'Serverless event-driven architecture using AWS Lambda and Google Cloud Functions.',
    architectureId: 'Arsitektur serverless berbasis event memanfaatkan AWS Lambda dan Google Cloud Functions.',
    techStack: [
      { name: 'TypeScript', category: 'Backend' },
      { name: 'Terraform', category: 'DevOps' },
      { name: 'ClickHouse', category: 'Database' },
      { name: 'Next.js', category: 'Frontend' }
    ],
    metrics: [
      { value: 'Audit FinOps', labelEn: 'Cloud Audit', labelId: 'Analisis Infrastruktur', descEn: 'Identification of idle cloud resources and rightsizing recommendations.', descId: 'Identifikasi penggunaan server berlebih dan rekomendasi kapasitas hemat.' },
      { value: 'Dasbor Biaya', labelEn: 'Cost Visibility', labelId: 'Visibilitas Multi-Cloud', descEn: 'Departmental cloud expenditure breakdown in a consolidated interface.', descId: 'Laporan alokasi anggaran server per divisi dalam satu tampilan ringkas.' }
    ],
    keyFeaturesEn: ['Automated idle pod killer', 'Spot instance arbitrage scheduler', 'Custom cost center chargeback reports'],
    keyFeaturesId: ['Penonaktifan pod menganggur otomatis', 'Pengatur alokasi spot instance harga termurah', 'Laporan alokasi biaya antar departemen'],
    teamMemberIds: ['andiryaas', 'nicholas', 'fathur'],
    documentation: [
      { titleEn: 'Multi-Cloud Architecture Review', titleId: 'Review Arsitektur Cloud', categoryEn: 'Cloud Architecture', categoryId: 'Arsitektur Cloud', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80', captionEn: 'Auditing multi-region Kubernetes clusters with infrastructure engineers.', captionId: 'Audit cluster Kubernetes lintas kawasan bersama tim infrastruktur.' }
    ]
  },
  {
    id: 'blockchain-asset-settlement',
    tag: 'Core IT',
    category: 'it',
    clientSectorEn: 'Financial & Cryptography',
    clientSectorId: 'Finansial & Kriptografi',
    clientName: 'Nexus Digital Custody',
    timeline: '6 Minggu (2024)',
    titleEn: 'Institutional Digital Asset Vault & Settlement Gateway',
    titleId: 'Brankas Aset Digital Institusi & Gateway Settlement',
    subtitleEn: 'High-security multi-party computation (MPC) custodian gateway for tokenized sovereign securities.',
    subtitleId: 'Gateway kustodian komputasi multi-pihak (MPC) dengan enkripsi tinggi untuk surat berharga ter-tokenisasi.',
    descEn: 'Institutional-grade cryptographic vault providing multi-signature threshold approval for enterprise asset custody.',
    descId: 'Brankas aset digital kelas perbankan dengan otorisasi multi-signature dan keamanan kunci terdistribusi tanpa titik kegagalan tunggal.',
    icon: 'activity',
    image: '/portfolio/mockup-blockchain-asset-settlement.jpg?v=3',
    gradient: 'from-purple-800 via-indigo-900 to-slate-900',
    tagColor: 'text-purple-700',
    accentColor: '#7e22ce',
    overviewEn: 'Nexus Custody needed a secure settlement platform for institutional treasury desks to transfer tokenized bonds while preventing key loss risks.',
    overviewId: 'Nexus Custody membutuhkan platform penyelesaian transaksi bagi institusi keuangan untuk memindahkan obligasi ter-tokenisasi secara aman.',
    challengesEn: ['Single private key compromise risks in legacy hardware security modules (HSM).', 'Strict regulator demand for auditable travel-rule transaction records.'],
    challengesId: ['Risiko keamanan pada penyimpanan private key tunggal di modul konvensional.', 'Kewajiban regulasi terhadap pencatatan data identitas transaksi (Travel Rule).'],
    solutionsEn: ['Engineered 3-of-5 Multi-Party Computation (MPC) threshold signing.', 'Integrated automated AML/CFT compliance verification filters.'],
    solutionsId: ['Menerapkan skema tanda tangan digital Multi-Party Computation (MPC) 3-dari-5.', 'Mengintegrasikan filter otomatis pencegahan pencucian uang (AML/CFT).'],
    architectureEn: 'Distributed MPC node network utilizing Rust and secure TLS communication channels.',
    architectureId: 'Jaringan node MPC terdistribusi berbasis bahasa Rust dengan enkripsi TLS tingkat tinggi.',
    techStack: [
      { name: 'Rust', category: 'Backend' },
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Hardware Enclave', category: 'DevOps' }
    ],
    metrics: [
      { value: 'Smart Contract', labelEn: 'Smart Contract MVP', labelId: 'Protokol MVP', descEn: 'Verified smart contract protocol for multi-signature transaction settlements.', descId: 'Kode kontrak pintar terverifikasi untuk pencatatan transaksi multi-signature.' },
      { value: 'Audit Keamanan', labelEn: 'Security Audit', labelId: 'Validasi Kode', descEn: 'Code integrity verification with zero critical architectural vulnerabilities.', descId: 'Pengujian integritas logika transaksi tanpa temuan celah kritis.' }
    ],
    keyFeaturesEn: ['MPC distributed key sharing', 'Travel-rule compliance passport', 'Disaster recovery time-lock backup'],
    keyFeaturesId: ['Pembagian kunci kriptografi terdistribusi tanpa private key utuh', 'Paspor kepatuhan regulasi transaksi otomatis', 'Cadangan pemulihan darurat berbasis time-lock'],
    teamMemberIds: ['andiryaas', 'fathur', 'nicholas'],
    documentation: [
      { titleEn: 'Cryptographic Security Audit', titleId: 'Audit Kriptografi & Penetrasi', categoryEn: 'Security Audit', categoryId: 'Audit Keamanan', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80', captionEn: 'Formal verification testing of MPC threshold math models.', captionId: 'Uji verifikasi formal model matematika threshold kriptografi MPC.' }
    ]
  },

  // =========================================================================
  // KATEGORI 3: UI/UX & DESAIN (5 PROYEK)
  // =========================================================================
  {
    id: 'healthtech-telemed',
    tag: 'UI/UX & Desain',
    category: 'design',
    clientSectorEn: 'Healthcare & Clinical Diagnostics',
    clientSectorId: 'Layanan Kesehatan & Diagnostik Klinis',
    clientName: 'Medika Prima Telehealth',
    timeline: '6 Minggu (2024)',
    titleEn: 'HIPAA-Compliant Telehealth & Electronic Health Records',
    titleId: 'Platform Telehealth & Rekam Medis Elektronik (RME)',
    subtitleEn: 'Encrypted video consultation portal and electronic medical records compliant with national health interoperability standards.',
    subtitleId: 'Portal konsultasi dokter terenkripsi dan sistem rekam medis elektronik sesuai regulasi SatuSehat Kemenkes.',
    descEn: 'End-to-end healthcare consultation platform featuring WebRTC encrypted video and digital prescription ordering.',
    descId: 'Platform konsultasi kesehatan menyeluruh dengan video call WebRTC terenkripsi dan e-resep digital.',
    icon: 'shield-check',
    image: '/portfolio/mockup-healthtech-telemed.jpg?v=3',
    gradient: 'from-teal-600 via-emerald-700 to-slate-900',
    tagColor: 'text-teal-700',
    accentColor: '#0d9488',
    overviewEn: 'Medika Prima operates a network of 12 clinical centers and wanted to launch a unified telemedicine platform. RYNERTIA ARC TECH architected an accessible, patient-friendly UI/UX, integrated WebRTC end-to-end encrypted video, and synchronized medical records with Ministry of Health (SatuSehat) FHIR protocols.',
    overviewId: 'Medika Prima mengelola 12 klinik spesialis dan berencana meluncurkan platform telemedicine terpadu. RYNERTIA ARC TECH merancang antarmuka ramah pasien, mengintegrasikan video call WebRTC terenkripsi end-to-end, dan menyinkronkan data rekam medis ke standar FHIR SatuSehat Kemenkes.',
    challengesEn: [
      'Elderly patient difficulty navigating digital medical consults on mobile screens.',
      'Strict clinical compliance for patient confidentiality and digital signature standards.',
      'Lagging video streams during remote area broadband bandwidth dips.'
    ],
    challengesId: [
      'Pasien lansia kesulitan mengoperasikan antarmuka konsultasi dokter di layar ponsel.',
      'Kewajiban perlindungan kerahasiaan data medis pasien dan tanda tangan digital dokter.',
      'Gangguan koneksi video call di daerah dengan keterbatasan bandwidth internet.'
    ],
    solutionsEn: [
      'Designed a high-contrast, accessible UI system adhering to WCAG 2.1 AAA accessibility rules.',
      'Implemented WebRTC adaptive bitrate streams prioritizing crystal-clear audio during bandwidth dips.',
      'Built SatuSehat FHIR API bridge to seamlessly synchronize diagnosis and prescriptions.'
    ],
    solutionsId: [
      'Merancang sistem desain antarmuka kontras tinggi yang memenuhi standar aksesibilitas WCAG 2.1 AAA.',
      'Menerapkan transmisi WebRTC adaptif yang menjaga kejernihan suara saat sinyal menurun.',
      'Membangun jembatan data FHIR untuk sinkronisasi rekam medis dan resep obat secara aman.'
    ],
    architectureEn: 'WebRTC SFU streaming architecture with Node.js and PostgreSQL encrypted records.',
    architectureId: 'Arsitektur streaming WebRTC SFU dengan backend Node.js dan enkripsi database PostgreSQL.',
    techStack: [
      { name: 'Figma Design System', category: 'Design & Strategy' },
      { name: 'Next.js 15', category: 'Frontend' },
      { name: 'WebRTC / SFU', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'FHIR / HL7', category: 'Backend' }
    ],
    metrics: [
      { value: 'Desain UI/UX', labelEn: 'Patient-Doctor UI', labelId: 'Aplikasi Pasien & Dokter', descEn: 'Intuitive doctor consultation booking and electronic medical record views.', descId: 'Alur reservasi konsultasi dokter dan integrasi rekam medis elektronik.' },
      { value: 'Standar SatuSehat', labelEn: 'SatuSehat Ready', labelId: 'Kepatuhan Format', descEn: 'Clinical data formatting aligned with Ministry of Health FHIR standards.', descId: 'Penyelarasan format data rekam medis sesuai pedoman Kemenkes RI.' }
    ],
    keyFeaturesEn: ['One-click WebRTC encrypted video consult', 'Electronic digital prescription ordering', 'Integrated patient vital telemetry charts'],
    keyFeaturesId: ['Konsultasi video WebRTC terenkripsi satu kali klik', 'Penerbitan resep digital langsung ke farmasi rekanan', 'Grafik pemantauan tanda vital pasien terpadu'],
    teamMemberIds: ['andiryaas', 'nicholas', 'fathur', 'dandy'],
    documentation: [
      { titleEn: 'Doctor Workflow Alignment', titleId: 'Riset Alur Kerja Dokter', categoryEn: 'Clinical UX', categoryId: 'Riset Alur Medis', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80', captionEn: 'R&A consultants aligning patient consultation protocols with head physicians.', captionId: 'Konsultan R&A Rynertia menyelaraskan protokol konsultasi dan standar e-resep bersama kepala dokter.' },
      { titleEn: 'Video Latency Testing', titleId: 'Uji Coba Video Call WebRTC', categoryEn: 'System Verification', categoryId: 'Pengujian Sistem', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80', captionEn: 'Live testing of video connection latency under variable bandwidth.', captionId: 'Pengujian stabilitas sambungan video call berlatensi rendah di berbagai kondisi jaringan.' }
    ],
    testimonial: {
      quoteEn: 'Our elderly patients frequently compliment how intuitive the app is. Rynertia solved our digital transformation without alienating our core audience.',
      quoteId: 'Pasien lansia kami sering memuji betapa mudahnya aplikasi ini digunakan. Rynertia berhasil mendigitalisasi layanan tanpa mempersulit pasien.',
      author: 'dr. Hendra Kusumah, Sp.A',
      role: 'Medical Director',
      company: 'Medika Prima Telehealth'
    }
  },
  {
    id: 'wealth-management-design',
    tag: 'UI/UX & Desain',
    category: 'design',
    clientSectorEn: 'Asset Management & Private Wealth',
    clientSectorId: 'Manajemen Aset & Investasi',
    clientName: 'Batavia Private Wealth',
    timeline: '4 Minggu (2024)',
    titleEn: 'Ultra-High-Net-Worth Advisory Portal & Investment Design System',
    titleId: 'Portal Nasabah Prioritas & Sistem Desain Investasi',
    subtitleEn: 'Crafting an opulent, high-clarity portfolio dashboard for family offices and private banking clients.',
    subtitleId: 'Merancang dashboard portofolio bernuansa premium dan berdaya analisis tinggi bagi nasabah private banking.',
    descEn: 'Bespoke web and tablet design system integrating multi-asset allocation visualization, tax reporting, and private advisor communication.',
    descId: 'Sistem desain eksklusif yang memadukan visualisasi alokasi multi-aset, pelaporan pajak, dan jalur komunikasi pribadi dengan wealth manager.',
    icon: 'smartphone',
    image: '/portfolio/mockup-wealth-management-design.jpg?v=3',
    gradient: 'from-slate-900 via-emerald-950 to-slate-900',
    tagColor: 'text-emerald-800',
    accentColor: '#047857',
    overviewEn: 'Batavia Private Wealth required an elegant, refined digital portal to serve generational wealth clients, providing crystal-clear visibility across real estate, equity portfolios, and private equity stakes.',
    overviewId: 'Batavia Private Wealth membutuhkan portal digital berkelas tinggi bagi nasabah prioritas, memberikan transparansi alokasi aset properti, saham, dan modal ventura.',
    challengesEn: ['Overwhelming complex multi-currency tables lacking visual hierarchy.', 'Client demand for privacy controls when viewing dashboards in public.'],
    challengesId: ['Tabel multi-mata uang yang terlalu padat tanpa hierarki visual yang jelas.', 'Kebutuhan fitur privasi untuk menyamarkan nominal saldo saat berada di ruang publik.'],
    solutionsEn: ['Formulated the "Batavia Obsidian" design system with discreet stealth privacy modes.', 'Engineered interactive Sankey asset-flow diagrams and asset allocation charts.'],
    solutionsId: ['Menyusun sistem desain "Batavia Obsidian" dengan mode penyamaran saldo satu klik.', 'Merancang diagram interaktif aliran aset (Sankey) dan proyeksi diversifikasi portofolio.'],
    architectureEn: 'Next.js 15 React application styled with custom Tailwind design tokens and Chart.js graphics.',
    architectureId: 'Aplikasi Next.js 15 dengan token desain Tailwind kustom dan grafik analitik interaktif.',
    techStack: [
      { name: 'Figma Tokens', category: 'Design & Strategy' },
      { name: 'Tailwind CSS', category: 'Frontend' },
      { name: 'Next.js', category: 'Frontend' },
      { name: 'D3.js / Chart.js', category: 'Frontend' }
    ],
    metrics: [
      { value: 'Portal Portofolio', labelEn: 'Advisory Portal', labelId: 'Desain Nasabah Prioritas', descEn: 'Refined dashboard design for high-clarity asset portfolio tracking.', descId: 'Desain antarmuka eksklusif untuk pelaporan portofolio aset dan kekayaan.' },
      { value: '40+ Komponen', labelEn: 'Design System Kit', labelId: 'Sistem Desain UI', descEn: 'Consistent UI components featuring elegant typography and balance privacy modes.', descId: 'Komponen UI konsisten dengan tipografi elegan dan mode privasi saldo.' }
    ],
    keyFeaturesEn: ['One-click discrete privacy privacy mode', 'Multi-currency asset rebalancing planner', 'Direct encrypted concierge chat'],
    keyFeaturesId: ['Mode privasi samarkan nominal saldo instan', 'Kalkulator rebalancing alokasi aset multi-mata uang', 'Jalur chat concierge terenkripsi dengan private banker'],
    teamMemberIds: ['andiryaas', 'dandy', 'hannan'],
    documentation: [
      { titleEn: 'Design Token Workshop', titleId: 'Penyusunan Sistem Desain Token', categoryEn: 'Design System', categoryId: 'Sistem Desain', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80', captionEn: 'Defining luxury typography, dark palettes, and micro-interactions.', captionId: 'Perancangan tipografi elegan, palet warna gelap mewah, dan interaksi mikro.' }
    ]
  },
  {
    id: 'edutech-lms-redesign',
    tag: 'UI/UX & Desain',
    category: 'design',
    clientSectorEn: 'Education Technology',
    clientSectorId: 'Teknologi Pendidikan',
    clientName: 'EduSmart Indonesia',
    timeline: '5 Minggu (2024)',
    titleEn: 'Adaptive K-12 Gamified Learning Experience & Mobile Design System',
    titleId: 'Pengalaman Belajar Gamifikasi K-12 & Sistem Desain Mobile',
    subtitleEn: 'Motivating students with an intuitive, playful design system that increased weekly module completion by 52%.',
    subtitleId: 'Meningkatkan antusiasme belajar siswa melalui sistem desain antarmuka gamifikasi yang interaktif.',
    descEn: 'Student and teacher mobile application overhaul featuring micro-animations, adaptive progress tracking, and accessible design tokens.',
    descId: 'Perombakan menyeluruh aplikasi mobile siswa dan guru dengan animasi mikro, pelacak pencapaian adaptif, dan palet warna ramah anak.',
    icon: 'smartphone',
    image: '/portfolio/mockup-edutech-lms-redesign.jpg?v=3',
    gradient: 'from-amber-500 via-orange-600 to-slate-900',
    tagColor: 'text-amber-700',
    accentColor: '#ea580c',
    overviewEn: 'EduSmart serves over 300,000 Indonesian elementary and junior high students and needed a refreshed, engaging visual design to reduce course abandonment.',
    overviewId: 'EduSmart melayani lebih dari 300.000 siswa SD dan SMP di Indonesia dan membutuhkan desain visual baru yang menyenangkan untuk mencegah kejenuhan belajar.',
    challengesEn: ['Monotonous textbook-like layouts leading to low daily active retention.', 'Complex homework submission flows frustrating younger learners.'],
    challengesId: ['Tampilan kaku seperti buku teks yang membuat tingkat penggunaan harian menurun.', 'Proses pengumpulan tugas yang rumit bagi anak-anak usia sekolah dasar.'],
    solutionsEn: ['Designed reward badges, milestone paths, and joyful micro-interactions.', 'Conducted extensive usability testing with children aged 7-14 across public schools.'],
    solutionsId: ['Merancang lencana prestasi, peta petualangan belajar, dan mikro-interaksi ceria.', 'Melakukan pengujian usability mendalam bersama siswa sekolah dasar di berbagai kota.'],
    architectureEn: 'React Native design system architecture connected to headless CMS course modules.',
    architectureId: 'Arsitektur komponen React Native modular terhubung ke modul pembelajaran CMS headless.',
    techStack: [
      { name: 'Figma System', category: 'Design & Strategy' },
      { name: 'React Native', category: 'Frontend' },
      { name: 'Lottie Animations', category: 'Design & Strategy' },
      { name: 'Storybook', category: 'Frontend' }
    ],
    metrics: [
      { value: 'Redesain Mobile', labelEn: 'Mobile Redesign', labelId: 'Pengalaman Belajar', descEn: 'Simplified course navigation making lesson modules engaging for students.', descId: 'Navigasi modul materi pelajaran disederhanakan agar mudah diakses siswa.' },
      { value: 'Prototipe Uji', labelEn: 'User Validation', labelId: 'Umpan Balik Pengguna', descEn: 'Gamified quiz prototype validated through hands-on student testing sessions.', descId: 'Validasi alur kuis gamifikasi dengan respon antusias dari para siswa.' }
    ],
    keyFeaturesEn: ['Gamified learning streak tracker', 'One-touch audio homework recorder', 'Parent progress overview summary'],
    keyFeaturesId: ['Pelacak streak belajar harian bergaya game', 'Perekam tugas suara satu sentuhan mudah bagi anak', 'Ringkasan grafik perkembangan belajar untuk orang tua'],
    teamMemberIds: ['andiryaas', 'dandy', 'hannan'],
    documentation: [
      { titleEn: 'Usability Sprints with Students', titleId: 'Sesi Uji Coba Bersama Siswa', categoryEn: 'Usability Lab', categoryId: 'Lab Usability', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80', captionEn: 'Observing student interactions and navigation choices on tablet devices.', captionId: 'Mengamati interaksi langsung dan kemudahan navigasi siswa pada perangkat tablet.' }
    ]
  },
  {
    id: 'smart-home-iot-app',
    tag: 'UI/UX & Desain',
    category: 'design',
    clientSectorEn: 'Consumer Electronics & IoT',
    clientSectorId: 'Elektronik Konsumen & Smart Living',
    clientName: 'Volterra Smart Living',
    timeline: '4 Minggu (2024)',
    titleEn: 'Ambient Smart Home Control System & IoT Mobile Experience',
    titleId: 'Sistem Kontrol Smart Home Ambient & Aplikasi IoT Mobile',
    subtitleEn: 'Orchestrating lights, climate, and security with tactile spatial control gestures and dark-mode elegance.',
    subtitleId: 'Mengendalikan pencahayaan, suhu ruangan, dan keamanan rumah melalui gestur spasial yang presisi dan elegan.',
    descEn: 'Minimalist smart home mobile companion app featuring 3D floor plan room switching, scene automation, and energy consumption insights.',
    descId: 'Aplikasi mobile smart home minimalis dengan visualisasi denah ruangan 3D interaktif, otomatisasi skenario, dan grafik pemakaian listrik.',
    icon: 'smartphone',
    image: '/portfolio/mockup-smart-home-iot-app.jpg?v=3',
    gradient: 'from-slate-950 via-zinc-900 to-blue-950',
    tagColor: 'text-blue-800',
    accentColor: '#3b82f6',
    overviewEn: 'Volterra manufactures high-end IoT smart lighting, thermostats, and security locks for modern residences. RYNERTIA ARC TECH designed a state-of-the-art mobile application interface focused on speed, tactile responsiveness, and minimalist architectural aesthetics.',
    overviewId: 'Volterra memproduksi perangkat smart lighting, pendingin ruangan, dan kunci pintar modern. RYNERTIA ARC TECH merancang antarmuka aplikasi mobile mutakhir yang fokus pada kecepatan respon, keindahan arsitektur, dan kemudahan kendali satu tangan.',
    challengesEn: ['Crowded dashboards with dozens of confusing toggles.', 'Delay in visual feedback when toggling smart bulbs on local Wi-Fi networks.'],
    challengesId: ['Dashboard berantakan dengan puluhan tombol saklar yang membingungkan.', 'Jeda waktu respon visual saat menyalakan perangkat lampu di jaringan Wi-Fi lokal.'],
    solutionsEn: ['Designed intuitive spatial room cards with fluid gesture dimming controls.', 'Implemented optimistic UI state updates providing zero-latency tactile feedback.'],
    solutionsId: ['Merancang kartu ruangan spasial dengan kendali peredup lampu berbasis gestur halus.', 'Menerapkan pembaruan status antarmuka instan (optimistic UI) tanpa jeda loading.'],
    architectureEn: 'Flutter mobile application backed by local MQTT broker discovery.',
    architectureId: 'Aplikasi mobile Flutter terhubung ke broker protokol MQTT lokal dan cloud.',
    techStack: [
      { name: 'Figma System', category: 'Design & Strategy' },
      { name: 'Flutter / Dart', category: 'Frontend' },
      { name: 'MQTT Broker', category: 'Backend' },
      { name: 'Three.js / WebGL', category: 'Design & Strategy' }
    ],
    metrics: [
      { value: 'Desain HMI', labelEn: 'Spatial HMI Design', labelId: 'Kendali IoT Spasial', descEn: 'Ambient lighting and switch controls with responsive gesture navigation.', descId: 'Tampilan kontrol lampu dan saklar ambient dengan respon gestur halus.' },
      { value: 'Skenario Otomasi', labelEn: 'Scene Automation', labelId: 'Manajemen Ruangan', descEn: 'Intuitive lifestyle scene creation for automated home schedules.', descId: 'Alur pembuatan jadwal perangkat rumah pintar yang mudah dipahami keluarga.' }
    ],
    keyFeaturesEn: ['Spatial 3D room floorplan navigation', 'One-touch custom lifestyle scenes (Morning, Cinema, Sleep)', 'Solar & energy consumption diagnostics'],
    keyFeaturesId: ['Navigasi denah ruangan spasial interaktif', 'Aktivasi skenario suasana rumah satu sentuhan (Pagi, Bioskop, Istirahat)', 'Diagnostik penghematan konsumsi daya listrik real-time'],
    teamMemberIds: ['andiryaas', 'dandy', 'hannan'],
    documentation: [
      { titleEn: 'Smart Showroom Usability Lab', titleId: 'Uji Coba Showroom Rumah Pintar', categoryEn: 'IoT Usability', categoryId: 'Uji Coba IoT', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80', captionEn: 'Testing lighting dimmers and gesture sliders in physical showroom mockups.', captionId: 'Pengujian kendali peredupan lampu langsung di showroom rumah pintar.' }
    ]
  },
  {
    id: 'automotive-infotainment-ui',
    tag: 'UI/UX & Desain',
    category: 'design',
    clientSectorEn: 'Automotive & EV Connected Mobility',
    clientSectorId: 'Otomotif & EV',
    clientName: 'Astraea Electric Motors',
    timeline: '6 Minggu (2024)',
    titleEn: 'In-Vehicle Digital Cockpit & Connected Car HMI Design',
    titleId: 'Desain Kokpit Digital & HMI Kendaraan Listrik Terkoneksi',
    subtitleEn: 'Engineering a distraction-free, driver-centric touchscreen interface for next-generation electric vehicles.',
    subtitleId: 'Merancang antarmuka layar sentuh kendaraan listrik yang ergonomis, elegan, dan aman dari gangguan berkendara.',
    descEn: 'Human-Machine Interface (HMI) digital instrument cluster and center infotainment console designed for extreme readability at speed.',
    descId: 'Desain antarmuka instrumen kokpit dan layar sentuh konsol tengah mobil listrik dengan visibilitas tinggi di berbagai pencahayaan luar ruangan.',
    icon: 'activity',
    image: '/portfolio/mockup-automotive-infotainment-ui.jpg?v=3',
    gradient: 'from-slate-950 via-slate-900 to-blue-950',
    tagColor: 'text-blue-600',
    accentColor: '#2563eb',
    overviewEn: 'Astraea Motors required a custom Human-Machine Interface (HMI) for their upcoming luxury electric SUV, needing to balance navigation, media, battery management, and ADAS safety telemetry in a sleek unified widescreen layout.',
    overviewId: 'Astraea Motors memerlukan sistem antarmuka Human-Machine Interface (HMI) bagi mobil listrik SUV terbaru mereka, memadukan navigasi, audio, status baterai, dan sistem keselamatan ADAS secara terpadu.',
    challengesEn: ['Strict automotive safety guidelines requiring sub-2-second glance completion.', 'High glare in direct tropical sunlight washing out conventional tablet screens.'],
    challengesId: ['Standar keselamatan berkendara ketat yang menuntut informasi terbaca dalam lirikan di bawah 2 detik.', 'Silau sinar matahari terik di iklim tropis yang menurunkan keterbacaan layar mobil.'],
    solutionsEn: ['Formulated high-contrast visual tokens optimized for polarized sunglasses.', 'Arranged ergonomic thumb zones prioritizing essential climate and drive-mode toggles.'],
    solutionsId: ['Merancang token warna kontras tinggi yang tetap terbaca jelas saat memakai kacamata hitam polarisasi.', 'Menyusun zona jangkauan jari ergonomis untuk kendali AC dan mode berkendara instan.'],
    architectureEn: 'Embedded Android Automotive OS UI layer with Qt/QML graphical modules.',
    architectureId: 'Lapisan antarmuka Android Automotive OS terintegrasi dengan modul grafis Qt/QML performa tinggi.',
    techStack: [
      { name: 'Figma Automotive HMI', category: 'Design & Strategy' },
      { name: 'Android Automotive', category: 'Frontend' },
      { name: 'Qt / QML', category: 'Frontend' },
      { name: 'CAN Bus Telemetry', category: 'Backend' }
    ],
    metrics: [
      { value: 'Kokpit Digital', labelEn: 'EV Cockpit UI', labelId: 'Desain Kluster EV', descEn: 'High-contrast instrument cluster layout engineered for driver safety.', descId: 'Tata letak kluster instrumen minimalis dengan kontras tinggi saat berkendara.' },
      { value: 'Aksesibilitas HMI', labelEn: 'Low-Distraction HMI', labelId: 'Kendali Minim Distraksi', descEn: 'Ergonomic touch zones prioritizing critical vehicle controls at speed.', descId: 'Hierarki tombol sentuh lega untuk navigasi aman selama perjalanan mobil.' }
    ],
    keyFeaturesEn: ['Adaptive daylight / night ambient luminance mode', 'EV range prediction radius map overlay', 'One-touch ADAS lane-keeping radar view'],
    keyFeaturesId: ['Adaptasi otomatis pencahayaan siang dan malam', 'Overlay radius jangkauan baterai pada peta navigasi', 'Tampilan radar bantuan keselamatan ADAS interaktif'],
    teamMemberIds: ['andiryaas', 'dandy', 'hannan', 'nicholas'],
    documentation: [
      { titleEn: 'Driving Simulator Ergonomics Test', titleId: 'Uji Ergonomi di Simulator Kemudi', categoryEn: 'Automotive Lab', categoryId: 'Lab Otomotif', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80', captionEn: 'Conducting driver eye-tracking and response benchmarks in a full-scale cockpit simulator.', captionId: 'Pengujian pelacak arah mata pengemudi dan waktu respon di dalam simulator kokpit penuh.' }
    ]
  },

  // =========================================================================
  // KATEGORI 4: DIGITAL MARKETING (5 PROYEK)
  // =========================================================================
  {
    id: 'omnichannel-scale',
    tag: 'Growth Marketing',
    category: 'marketing',
    clientSectorEn: 'Fashion & Luxury Retail',
    clientSectorId: 'Ritel Fesyen & Gaya Hidup',
    clientName: 'Vanguard Lifestyle Group',
    timeline: '8 Minggu (2024)',
    titleEn: 'Omnichannel Commerce & Data-Driven Growth Engine',
    titleId: 'Omnichannel eCommerce & Strategi Pertumbuhan Data',
    subtitleEn: 'Synthesizing market research, brand identity revamp, and performance analytics to scale cross-border sales.',
    subtitleId: 'Mengintegrasikan riset pasar, rebrand visual, dan analitik performa untuk melipatgandakan omset ritel.',
    descEn: 'Multi-channel digital marketing campaign and visual rebrand that increased qualified organic leads by 180%.',
    descId: 'Kampanye pemasaran digital multi-kanal dan pembaruan visual yang meningkatkan prospek organik terverifikasi sebesar 180%.',
    icon: 'globe',
    image: '/portfolio/mockup-omnichannel-scale.jpg?v=3',
    gradient: 'from-indigo-600 via-blue-600 to-cyan-400',
    tagColor: 'text-indigo-700',
    accentColor: '#8b5cf6',
    overviewEn: 'Vanguard Lifestyle Group sought to expand their luxury lifestyle brand across Southeast Asia. RYNERTIA ARC TECH conducted deep consumer sentiment research, completely revamped their brand identity guidelines, and deployed an omnichannel attribution analytics system spanning TikTok Shop, Tokopedia, Shopee, and their flagship web boutique.',
    overviewId: 'Vanguard Lifestyle Group berencana memperluas jaringan brand gaya hidup premium di Asia Tenggara. RYNERTIA ARC TECH melakukan riset mendalam perilaku konsumen, merombak total panduan identitas brand, dan menerapkan sistem analitik atribusi terpadu di seluruh kanal online dan marketplace.',
    challengesEn: [
      'High Customer Acquisition Cost (CAC) and diminishing returns from unsegmented social ads.',
      'Inconsistent visual brand messaging across physical stores and 4 different online marketplaces.',
      'Data silos preventing customer lifetime value (CLV) retention campaigns.'
    ],
    challengesId: [
      'Tingginya Biaya Akuisisi Pelanggan (CAC) akibat iklan digital yang tidak tersegmentasi dengan tepat.',
      'Ketidakkonsistenan identitas visual brand antara gerai fisik dan 4 marketplace online.',
      'Data transaksi terpisah yang menghambat program retensi dan loyalitas pelanggan setia.'
    ],
    solutionsEn: [
      'Re-engineered visual brand guidelines with a cohesive, luxury design system.',
      'Built a centralized customer data platform (CDP) uniting marketplace purchase histories.',
      'Executed full-funnel digital growth campaigns leveraging hyper-targeted creator activations.'
    ],
    solutionsId: [
      'Menyusun ulang panduan identitas brand menyeluruh dengan sistem visual yang konsisten dan berkelas.',
      'Membangun Customer Data Platform (CDP) terpadu untuk menyatukan riwayat belanja pelanggan dari seluruh kanal.',
      'Menjalankan strategi pemasaran digital berbasis data analitik dengan aktivasi kolaborasi kreator terarah.'
    ],
    architectureEn: 'Integrated headless Shopify Plus architecture with custom marketing attribution tracking.',
    architectureId: 'Arsitektur headless Shopify Plus terhubung ke pipeline analitik atribusi pemasaran kustom.',
    techStack: [
      { name: 'Shopify Plus / Headless', category: 'Frontend' },
      { name: 'Brand Strategy & Identity', category: 'Design & Strategy' },
      { name: 'Google BigQuery', category: 'Database' },
      { name: 'Mixpanel Analytics', category: 'AI & Analytics' },
      { name: 'Meta & TikTok Ads API', category: 'AI & Analytics' }
    ],
    metrics: [
      { value: 'Toko Online MVP', labelEn: 'Commerce MVP', labelId: 'Katalog & Checkout', descEn: 'Integrated product catalog with smooth multi-channel checkout flow.', descId: 'Integrasi katalog produk omnichannel dan alur transaksi yang lancar.' },
      { value: 'Strategi Konten', labelEn: 'Brand Content Guide', labelId: 'Panduan Visual Brand', descEn: 'Visual identity playbook and promotional assets for launch campaigns.', descId: 'Panduan identitas visual dan aset promosi untuk peluncuran digital.' }
    ],
    keyFeaturesEn: ['Unified multi-marketplace inventory sync', 'Dynamic cohort retention email funnels', 'Omnichannel attribution pixel tracking'],
    keyFeaturesId: ['Sinkronisasi inventaris multi-marketplace otomatis', 'Corong pemasaran email retensi berbasis perilaku belanja', 'Pelacakan atribusi konversi digital lintas platform'],
    teamMemberIds: ['andiryaas', 'dandy', 'hannan', 'nicholas'],
    documentation: [
      { titleEn: 'Market Research & Consumer Persona', titleId: 'Riset Pasar & Persona Pelanggan', categoryEn: 'Consumer Research', categoryId: 'Riset Pasar', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80', captionEn: 'Analyzing competitor pricing benchmarks and consumer purchase intent.', captionId: 'Analisis mendalam penetapan harga kompetitor dan minat beli konsumen bersama tim pemasaran.' },
      { titleEn: 'Omnichannel Data Monitoring', titleId: 'Monitoring Analisis Penjualan', categoryEn: 'Performance Analytics', categoryId: 'Analitik Performa', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80', captionEn: 'Live tracking of campaign conversions and inventory synchronizations.', captionId: 'Pelacakan real-time konversi kampanye digital dan sinkronisasi inventaris di 4 marketplace.' }
    ],
    testimonial: {
      quoteEn: 'Rynertia Arc Tech connected the dots between data-driven research and creative branding. Our sales numbers speak for themselves.',
      quoteId: 'Rynertia Arc Tech berhasil menyatukan riset data mendalam dengan kreativitas branding yang memukau. Hasil pertumbuhan penjualan kami menjadi bukti nyatanya.',
      author: 'Marcus Valerian',
      role: 'Managing Director',
      company: 'Vanguard Lifestyle Group'
    }
  },
  {
    id: 'b2b-saas-demand-gen',
    tag: 'Digital Marketing',
    category: 'marketing',
    clientSectorEn: 'B2B Enterprise SaaS',
    clientSectorId: 'SaaS Enterprise B2B',
    clientName: 'ScaleLogic AI Solutions',
    timeline: '5 Minggu (2024)',
    titleEn: 'Global B2B Account-Based Marketing & Inbound Demand Generation',
    titleId: 'Pemasaran B2B Account-Based (ABM) & Akuisisi Inbound',
    subtitleEn: 'Targeting enterprise tech leadership to build an ultra-qualified sales pipeline across APAC.',
    subtitleId: 'Menargetkan pengambil keputusan teknologi perusahaan untuk membangun pipeline penjualan bernilai miliaran rupiah.',
    descEn: 'High-precision Account-Based Marketing (ABM) campaign combining thought-leadership content, LinkedIn ads, and automated email nurturing.',
    descId: 'Kampanye ABM presisi tinggi yang memadukan konten whitepaper kepemimpinan industri, iklan LinkedIn bersasaran, dan nurturing otomatis.',
    icon: 'globe',
    image: '/portfolio/mockup-b2b-saas-demand-gen.jpg?v=3',
    gradient: 'from-blue-700 via-indigo-800 to-slate-900',
    tagColor: 'text-blue-700',
    accentColor: '#1d4ed8',
    overviewEn: 'ScaleLogic needed to acquire enterprise IT leaders across Singapore, Indonesia, and Malaysia for their workflow AI platform, moving away from low-converting cold calling.',
    overviewId: 'ScaleLogic ingin mengakuisisi pimpinan IT korporat di Asia Tenggara untuk produk software AI mereka, beralih dari metode cold call yang tidak efektif.',
    challengesEn: ['Long 9-month sales cycles with multiple technical decision-makers.', 'Zero brand awareness outside domestic home markets.'],
    challengesId: ['Siklus penjualan panjang mencapai 9 bulan dengan banyak pemangku kepentingan.', 'Kurangnya kesadaran merek di pasar luar negeri.'],
    solutionsEn: ['Formulated hyper-targeted ABM lists identifying top 400 regional enterprises.', 'Constructed insightful technical whitepapers and interactive ROI calculators.'],
    solutionsId: ['Menyusun daftar target 400 korporasi prioritas berdasarkan kesiapan infrastruktur.', 'Menerbitkan laporan teknis mendalam dan kalkulator ROI interaktif untuk eksekutif.'],
    architectureEn: 'HubSpot Enterprise CRM synchronized with LinkedIn Marketing APIs and custom lead scoring.',
    architectureId: 'HubSpot Enterprise CRM tersinkronisasi dengan API LinkedIn dan model scoring prospek otomatis.',
    techStack: [
      { name: 'HubSpot CRM Enterprise', category: 'Backend' },
      { name: 'LinkedIn Ads API', category: 'AI & Analytics' },
      { name: 'Content Marketing', category: 'Design & Strategy' },
      { name: 'Google Analytics 4', category: 'AI & Analytics' }
    ],
    metrics: [
      { value: 'Landing Page B2B', labelEn: 'B2B Landing Page', labelId: 'Fokus Konversi Demo', descEn: 'Solution-focused landing page layout optimizing demo request conversions.', descId: 'Struktur halaman fokus pada solusi produk dan formulir jadwal demo.' },
      { value: 'Playbook Outreach', labelEn: 'Outreach Playbook', labelId: 'Strategi Prospek', descEn: 'Structured outreach messaging targeting enterprise decision-makers.', descId: 'Rencana penjangkauan prospek enterprise melalui profil profesional LinkedIn.' }
    ],
    keyFeaturesEn: ['Executive account tiering matrix', 'Custom ICP persona content tracks', 'Real-time sales alert notifications'],
    keyFeaturesId: ['Matriks hierarki akun korporat prioritas', 'Jalur konten spesifik sesuai profil jabatan teknis', 'Notifikasi instan saat target prospek membaca whitepaper'],
    teamMemberIds: ['andiryaas', 'dandy', 'hannan'],
    documentation: [
      { titleEn: 'ABM Strategy Alignment', titleId: 'Penyusunan Strategi ABM', categoryEn: 'Strategy', categoryId: 'Strategi Pemasaran', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80', captionEn: 'Formulating enterprise account lists with enterprise sales leadership.', captionId: 'Penyusunan daftar akun korporat sasaran bersama direktur penjualan.' }
    ]
  },
  {
    id: 'fmcg-viral-omnichannel',
    tag: 'Digital Marketing',
    category: 'marketing',
    clientSectorEn: 'Fast-Moving Consumer Goods (FMCG)',
    clientSectorId: 'Barang Konsumen Cepat Habis (FMCG)',
    clientName: 'NutraLife Food & Beverages',
    timeline: '4 Minggu (2024)',
    titleEn: 'National Multi-Channel Brand Activation & Influencer Performance Matrix',
    titleId: 'Aktivasi Brand Multi-Kanal Nasional & Matriks Influencer',
    subtitleEn: 'Igniting viral nationwide consumer demand for an organic beverage line across TikTok and retail shelves.',
    subtitleId: 'Menciptakan tren viral nasional untuk peluncuran produk minuman organik baru di TikTok dan rak minimarket.',
    descEn: 'Performance influencer marketing campaign combining 120+ micro-creators, short-form video viral seeding, and minimarket barcode cashback promotions.',
    descId: 'Kampanye pemasaran influencer berbasis performa memadukan 120+ kreator konten, video viral TikTok, dan promosi cashback di minimarket.',
    icon: 'globe',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=80',
    gradient: 'from-emerald-600 via-teal-700 to-slate-900',
    tagColor: 'text-emerald-700',
    accentColor: '#059669',
    overviewEn: 'NutraLife launched a new healthy prebiotic tea and needed to drive rapid consumer trial and store velocity across 18,000 Indomaret and Alfamart retail outlets.',
    overviewId: 'NutraLife meluncurkan varian minuman teh prebiotik baru dan membutuhkan dorongan penjualan cepat di 18.000 gerai minimarket di seluruh Indonesia.',
    challengesEn: ['Fierce competition on convenience store beverage chillers.', 'Short 60-day window to prove product turnover to retail distributors.'],
    challengesId: ['Persaingan ketat di lemari pendingin minimarket dengan brand multinasional.', 'Batas waktu 60 hari untuk membuktikan perputaran stok kepada distributor ritel.'],
    solutionsEn: ['Activated 120+ fitness and wellness micro-influencers with creative hooks.', 'Built a WhatsApp bot where buyers submit receipts for instant e-wallet cashback.'],
    solutionsId: ['Mengaktifkan 120+ kreator kebugaran dengan storytelling gaya hidup sehat.', 'Membangun bot WhatsApp otomatis untuk klaim saldo e-wallet cukup foto struk belanja.'],
    architectureEn: 'High-speed WhatsApp Business OCR receipt scanner with automated QRIS disbursement.',
    architectureId: 'Sistem pemindai struk OCR WhatsApp berkecepatan tinggi dengan pengiriman cashback otomatis.',
    techStack: [
      { name: 'TikTok Creator Marketplace', category: 'AI & Analytics' },
      { name: 'WhatsApp Business API', category: 'Backend' },
      { name: 'Receipt OCR AI', category: 'AI & Analytics' },
      { name: 'Campaign Analytics', category: 'AI & Analytics' }
    ],
    metrics: [
      { value: 'Paket Kampanye', labelEn: 'Campaign Assets', labelId: 'Aset Konten Digital', descEn: 'Short-form promotional video assets and creator collaboration briefs.', descId: 'Produksi aset visual video pendek dan template panduan kreator.' },
      { value: 'Aset Promosi Toko', labelEn: 'Retail Displays', labelId: 'Materi Display Ritel', descEn: 'Visual promotional materials for retail shelf displays and posters.', descId: 'Materi promosi visual untuk display rak produk di minimarket.' }
    ],
    keyFeaturesEn: ['Automated grocery receipt fraud detection', 'Creator affiliate tracking dashboard', 'Instant GoPay / OVO cashback engine'],
    keyFeaturesId: ['Deteksi keaslian struk belanja minimarket via OCR cerdas', 'Dashboard pemantau konversi masing-masing kreator konten', 'Penyaluran saldo cashback otomatis ke dompet digital pelanggan'],
    teamMemberIds: ['andiryaas', 'dandy', 'hannan'],
    documentation: [
      { titleEn: 'Creator Campaign Briefing', titleId: 'Pengarahan Kreator Konten', categoryEn: 'Creative Direction', categoryId: 'Arahan Kreatif', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80', captionEn: 'Creative team coordinating storytelling angles with health creators.', captionId: 'Tim kreatif menyusun konsep video storytelling bersama para kreator kesehatan.' }
    ]
  },
  {
    id: 'proptech-lead-funnel',
    tag: 'Digital Marketing',
    category: 'marketing',
    clientSectorEn: 'Real Estate & Luxury PropTech',
    clientSectorId: 'Real Estat & Properti Mewah',
    clientName: 'UrbanVista Real Estate',
    timeline: '4 Minggu (2024)',
    titleEn: 'Ultra-Luxury Property Inbound Marketing & 3D Virtual Tour Funnel',
    titleId: 'Pemasaran Properti Mewah & Corong Tur Virtual 3D',
    subtitleEn: 'Capturing high-net-worth property investors through cinematic landing pages and qualification funnels.',
    subtitleId: 'Menjaring investor properti premium melalui landing page sinematik dan kualifikasi prospek otomatis.',
    descEn: 'High-end property lead generation ecosystem integrating interactive 3D villa walkthroughs with private sales concierge booking.',
    descId: 'Ekosistem pemasaran properti eksklusif yang memadukan tur virtual 3D, konten sinematik, dan reservasi konsultasi privat.',
    icon: 'globe',
    image: '/portfolio/mockup-proptech-lead-funnel.jpg?v=3',
    gradient: 'from-amber-700 via-stone-800 to-slate-900',
    tagColor: 'text-amber-700',
    accentColor: '#b45309',
    overviewEn: 'UrbanVista needed to sell 48 multi-billion rupiah beachfront villas in Bali to international and domestic investors during the off-peak tourist season.',
    overviewId: 'UrbanVista berencana memasarkan 48 unit villa tepi pantai premium di Bali senilai miliaran rupiah kepada investor domestik dan internasional.',
    challengesEn: ['Expensive generic real estate ads bringing tire-kicker leads with zero purchasing intent.', 'Difficulty showcasing spatial architectural elegance to overseas investors.'],
    challengesId: ['Iklan properti biasa mendatangkan banyak pertanyaan dari peminat yang tidak memiliki dana cukup.', 'Sulitnya menampilkan kemewahan arsitektur villa secara nyata kepada pembeli luar negeri.'],
    solutionsEn: ['Built an immersive 3D WebGL interactive property explorer with sunset lighting simulation.', 'Engineered a qualifying questionnaire filtering high-net-worth investors before scheduling VIP calls.'],
    solutionsId: ['Membangun tur interaktif 3D WebGL dengan simulasi pencahayaan matahari terbenam.', 'Menerapkan form kualifikasi aset sebelum menjadwalkan private preview bersama agen senior.'],
    architectureEn: 'High-performance Next.js 15 static site with embedded Three.js model viewers and CRM webhooks.',
    architectureId: 'Situs Next.js 15 super cepat dengan penampil model 3D Three.js dan webhook CRM otomatis.',
    techStack: [
      { name: 'Next.js 15', category: 'Frontend' },
      { name: 'Three.js / WebGL', category: 'Frontend' },
      { name: 'Meta Ads API', category: 'AI & Analytics' },
      { name: 'HubSpot CRM', category: 'Backend' }
    ],
    metrics: [
      { value: 'Showcase Web', labelEn: 'Property Showcase', labelId: 'Katalog Villa & 3D', descEn: 'Cinematic property showcase website featuring floorplan previews.', descId: 'Website showcase properti dengan simulasi denah dan formulir minat unit.' },
      { value: 'Integrasi CS', labelEn: 'Concierge Connect', labelId: 'Respon WhatsApp Cepat', descEn: 'Direct WhatsApp routing connecting qualified inquiries to sales advisors.', descId: 'Sambungan otomatis formulir minat langsung ke perwakilan sales WhatsApp.' }
    ],
    keyFeaturesEn: ['Interactive 3D architectural floorplan tour', 'Automated currency conversion & ROI projection', 'Private WhatsApp VIP concierge scheduling'],
    keyFeaturesId: ['Tur denah arsitektur 3D interaktif', 'Simulasi proyeksi ROI sewa dan konversi mata uang asing', 'Penjadwalan private preview via WhatsApp concierge'],
    teamMemberIds: ['andiryaas', 'dandy', 'hannan'],
    documentation: [
      { titleEn: 'Villa 3D Asset Optimization', titleId: 'Optimalisasi Aset 3D Villa', categoryEn: '3D Rendering', categoryId: 'Rendering 3D', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80', captionEn: 'Optimizing high-polygon architectural 3D meshes for smooth mobile browser rendering.', captionId: 'Kompresi model 3D arsitektur agar dapat dibuka lancar di browser smartphone.' }
    ]
  },
  {
    id: 'hotel-tourism-branding',
    tag: 'Digital Marketing',
    category: 'marketing',
    clientSectorEn: 'Luxury Hospitality & Eco-Tourism',
    clientSectorId: 'Perhotelan & Wisata Premium',
    clientName: 'Nusantara Heritage Resorts',
    timeline: '6 Minggu (2024)',
    titleEn: 'Five-Star Eco-Resort Brand Identity & Global Booking Acquisition Engine',
    titleId: 'Identitas Brand Resor Bintang Lima & Mesin Reservasi Global',
    subtitleEn: 'Slashing OTA commissions by increasing direct luxury booking conversions by 140%.',
    subtitleId: 'Memangkas potongan komisi OTA dengan melipatgandakan pemesanan kamar langsung di website resmi.',
    descEn: 'Complete hospitality digital ecosystem including multi-language booking website, lifestyle brand storytelling, and international PPC search campaigns.',
    descId: 'Ekosistem digital perhotelan lengkap mencakup website reservasi multibahasa, konten visual sinematik, dan kampanye akuisisi turis mancanegara.',
    icon: 'globe',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
    gradient: 'from-teal-700 via-emerald-800 to-slate-900',
    tagColor: 'text-teal-700',
    accentColor: '#0d9488',
    overviewEn: 'Nusantara Heritage operates eco-luxury resorts in Raja Ampat and Labuan Bajo, seeking to reduce their 22% commission dependency on Booking.com and Expedia.',
    overviewId: 'Nusantara Heritage mengelola resor eksklusif di Raja Ampat dan Labuan Bajo, dan bertekad mengurangi ketergantungan potongan komisi 22% dari platform OTA pihak ketiga.',
    challengesEn: ['Excessive OTA intermediary commission fees eroding resort profit margins.', 'Slow booking engine driving high checkout abandonment.'],
    challengesId: ['Potongan komisi OTA yang menggerus profit margin bisnis resor.', 'Mesin reservasi lama yang lambat dan menyulitkan transaksi turis asing.'],
    solutionsEn: ['Designed a fast, friction-free direct booking engine with multi-currency payment gates.', 'Ran hyper-targeted search ads capturing international high-budget vacation queries.'],
    solutionsId: ['Membangun mesin reservasi langsung super cepat dengan gateway pembayaran mata uang asing.', 'Menjalankan iklan Google Search bersasaran untuk turis berdaya beli tinggi di Eropa dan Australia.'],
    architectureEn: 'Next.js 15 Jamstack website integrated with Oracle Opera PMS hotel reservations.',
    architectureId: 'Website Next.js 15 modern terhubung langsung ke sistem perhotelan Oracle Opera PMS.',
    techStack: [
      { name: 'Next.js 15', category: 'Frontend' },
      { name: 'Stripe International', category: 'Backend' },
      { name: 'Google Ads Search', category: 'AI & Analytics' },
      { name: 'Opera PMS Bridge', category: 'Backend' }
    ],
    metrics: [
      { value: 'Brand Guidelines', labelEn: 'Visual Identity', labelId: 'Identitas Visual Resor', descEn: 'Comprehensive resort branding guide, logo suite, and guest collateral.', descId: 'Pedoman identitas merek, logo, palet warna, dan materi promosi resor.' },
      { value: 'Web Reservasi', labelEn: 'Direct Booking Web', labelId: 'Pemesanan Langsung', descEn: 'Responsive room reservation portal featuring quick availability checks.', descId: 'Portal reservasi kamar responsif dengan kalender ketersediaan praktis.' }
    ],
    keyFeaturesEn: ['Sub-second room availability calendar', 'Multi-currency credit card & Alipay processing', 'Personalized honeymoon & diving experience builder'],
    keyFeaturesId: ['Kalender ketersediaan kamar yang memuat dalam sekejap', 'Pilihan pembayaran kartu kredit internasional dan dompet digital global', 'Kustomisasi paket wisata diving dan bulan madu langsung saat memesan'],
    teamMemberIds: ['andiryaas', 'dandy', 'hannan'],
    documentation: [
      { titleEn: 'Resort Visual Shoot Direction', titleId: 'Pengambilan Foto & Video Resor', categoryEn: 'Creative Assets', categoryId: 'Aset Visual', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80', captionEn: 'Directing dawn aerial drone and architectural photography across resort villas.', captionId: 'Pengambilan foto dan video udara arsitektur villa saat matahari terbit.' }
    ]
  },

  // =========================================================================
  // KATEGORI 5: ENTERPRISE ERP (5 PROYEK)
  // =========================================================================
  {
    id: 'logistics-erp',
    tag: 'Enterprise ERP',
    category: 'enterprise',
    clientSectorEn: 'Transportation & Fleet Logistics',
    clientSectorId: 'Transportasi & Logistik Armada',
    clientName: 'Nusantara Cargo Express',
    timeline: '8 Minggu (2024)',
    titleEn: 'Smart Fleet Logistics & Intermodal ERP Platform',
    titleId: 'Platform ERP & Manajemen Armada Logistik Terpadu',
    subtitleEn: 'End-to-end telemetry ERP tracking 1,200+ freight vehicles with dynamic route optimization and automated dispatch.',
    subtitleId: 'Sistem ERP telemetri pelacak 1.200+ armada truk dengan optimasi rute cerdas dan manifes digital.',
    descEn: 'Custom enterprise ERP integrating IoT vehicle tracking, fuel sensor telemetry, and automatic driver dispatching.',
    descId: 'ERP kustom enterprise yang mengintegrasikan pelacakan armada IoT, sensor bahan bakar, dan penugasan sopir otomatis.',
    icon: 'truck',
    image: '/portfolio/mockup-logistics-erp.jpg?v=3',
    gradient: 'from-blue-800 via-indigo-900 to-slate-900',
    tagColor: 'text-blue-800',
    accentColor: '#0284c7',
    overviewEn: 'Nusantara Cargo Express operated over 1,200 trucks across Java and Sumatra using fragmented spreadsheets and radio dispatches. RYNERTIA ARC TECH engineered a centralized Logistics ERP with real-time GPS telemetry, geofencing alarms, and dynamic fuel consumption analytics.',
    overviewId: 'Nusantara Cargo Express mengoperasikan lebih dari 1.200 armada di Jawa dan Sumatra dengan sistem spreadsheet terpisah. RYNERTIA ARC TECH merancang platform ERP logistik terpusat dengan telemetri GPS real-time, alarm geofencing, dan analisis efisiensi bahan bakar.',
    challengesEn: [
      'Frequent untracked route deviations and fuel theft incidents costing billions annually.',
      'Manual delivery receipts resulting in 14-day invoicing delays for enterprise B2B shippers.',
      'High maintenance downtime due to reactive rather than predictive vehicle servicing.'
    ],
    challengesId: [
      'Deviasi rute pengiriman tanpa izin dan pencurian bahan bakar yang membebani miliaran rupiah per tahun.',
      'Surat jalan manual yang menyebabkan penagihan tagihan ke klien tertunda hingga 14 hari.',
      'Tingginya waktu mogok armada akibat jadwal perawatan armada yang masih reaktif.'
    ],
    solutionsEn: [
      'Integrated real-time IoT hardware telemetry streaming speed, engine diagnostics, and fuel levels.',
      'Developed driver mobile e-POD (Electronic Proof of Delivery) app with offline digital signatures.',
      'Constructed dynamic trip dispatch algorithms matching cargo volume with optimal vehicle capacity.'
    ],
    solutionsId: [
      'Mengintegrasikan telemetri GPS IoT untuk memantau kecepatan, kesehatan mesin, dan volume bahan bakar.',
      'Membangun aplikasi mobile surat jalan digital (e-PoD) bagi pengemudi dengan tanda tangan digital offline.',
      'Merancang algoritma penugasan armada otomatis yang mencocokkan muatan kargo dengan kapasitas truk terdekat.'
    ],
    architectureEn: 'High-availability ERP microservices with distributed message broker and time-series IoT database.',
    architectureId: 'Microservices ERP ketersediaan tinggi dengan broker pesan terdistribusi dan database IoT.',
    techStack: [
      { name: 'Custom ERP Engine', category: 'Backend' },
      { name: 'React / Next.js', category: 'Frontend' },
      { name: 'Node.js / NestJS', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'TimescaleDB (IoT)', category: 'Database' },
      { name: 'Docker / Kubernetes', category: 'DevOps' }
    ],
    metrics: [
      { value: 'Modul Dispatch', labelEn: 'Dispatch Module', labelId: 'Pelacakan Pengiriman', descEn: 'Fleet status overview and driver trip history recording module.', descId: 'Sistem pemantauan status armada dan pencatatan riwayat perjalanan supir.' },
      { value: 'e-Surat Jalan', labelEn: 'Digital Manifests', labelId: 'Bukti Kirim Digital', descEn: 'Mobile proof of delivery logging with signature verification.', descId: 'Pencatatan bukti serah terima barang langsung dari aplikasi supir.' }
    ],
    keyFeaturesEn: ['Live GPS geofence radar with deviation alarms', 'Driver mobile e-PoD with offline signature capture', 'Predictive maintenance engine calculating tire wear'],
    keyFeaturesId: ['Radar geofence GPS armada dengan alarm deviasi seketika', 'Aplikasi surat jalan e-PoD pengemudi dengan tanda tangan offline', 'Peringatan perawatan prediktif penghitung keausan ban dan oli'],
    teamMemberIds: ['andiryaas', 'nicholas', 'fathur', 'dandy', 'hannan'],
    documentation: [
      { titleEn: 'IoT Sensor Calibration', titleId: 'Instalasi Perangkat IoT', categoryEn: 'Hardware IoT', categoryId: 'Instalasi Perangkat IoT', image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&auto=format&fit=crop&q=80', captionEn: 'Engineers calibrating fuel flow sensors and GPS telematics on heavy trucks.', captionId: 'Teknisi menguji sensor aliran BBM dan telematika GPS pada armada truk ekspedisi.' },
      { titleEn: 'Driver App Onboarding', titleId: 'Pelatihan Pengguna', categoryEn: 'Driver App', categoryId: 'Pelatihan Pengguna', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80', captionEn: 'Conducting driver onboarding sessions for digital delivery manifests.', captionId: 'Sesi pengenalan aplikasi surat jalan digital tanpa internet bagi para sopir.' },
      { titleEn: 'Central Command Tower', titleId: 'Pusat Kendali Armada', categoryEn: 'Command Center', categoryId: 'Pusat Kendali Operasional', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80', captionEn: 'Central dispatch operators monitoring 1,200+ live trucks.', captionId: 'Operator pusat memantau pergerakan 1.200+ armada secara real-time.' }
    ],
    testimonial: {
      quoteEn: 'Rynertia ERP gave us complete transparency across our entire 1,200-vehicle fleet. Fuel pilferage dropped by nearly thirty percent within our first quarter.',
      quoteId: 'ERP yang dibangun Rynertia memberikan transparansi menyeluruh atas seluruh armada kami. Kebocoran biaya solar berkurang hampir tiga puluh persen di kuartal pertama.',
      author: 'Bambang Soediro',
      role: 'Fleet Operations Director',
      company: 'Nusantara Cargo Express'
    }
  },
  {
    id: 'manufacturing-mes-erp',
    tag: 'Enterprise ERP',
    category: 'enterprise',
    clientSectorEn: 'Heavy Industrial Manufacturing',
    clientSectorId: 'Manufaktur Baja & Industri Berat',
    clientName: 'PT Baja Perkasa Steel',
    timeline: '8 Minggu (2024)',
    titleEn: 'Heavy Manufacturing Execution System (MES) & Inventory ERP',
    titleId: 'Manufacturing Execution System (MES) & ERP Bahan Baku',
    subtitleEn: 'Digitizing foundry furnace telemetry, raw scrap allocation, and finished coil warehouse logistics.',
    subtitleId: 'Digitalisasi sensor tungku peleburan, alokasi scrap baja, dan manajemen gudang coil hasil produksi.',
    descEn: 'Industrial production planning and materials ERP integrating factory floor PLC machines with executive ERP order books.',
    descId: 'ERP perencanaan produksi industri yang menghubungkan mesin pabrik PLC dengan buku pesanan penjualan korporat.',
    icon: 'truck',
    image: '/portfolio/mockup-manufacturing-mes-erp.jpg?v=3',
    gradient: 'from-orange-800 via-zinc-900 to-slate-900',
    tagColor: 'text-orange-800',
    accentColor: '#c2410c',
    overviewEn: 'Baja Perkasa Steel operates 3 smelters producing 450,000 tons of structural steel annually, requiring an integrated MES ERP to eliminate stock mismatches.',
    overviewId: 'Baja Perkasa Steel mengoperasikan 3 pabrik peleburan dengan produksi 450.000 ton baja per tahun, membutuhkan ERP terpadu untuk mencegah ketidakcocokan stok bahan baku.',
    challengesEn: ['Blind spots between sales order commitments and available blast furnace run slots.', 'High material scrap waste due to inaccurate billet cutting planning.'],
    challengesId: ['Ketidaksesuaian antara janji pengiriman penjualan dengan jadwal operasional tungku pabrik.', 'Tingginya sisa potongan baja terbuang akibat estimasi pemotongan manual.'],
    solutionsEn: ['Integrated OPC-UA protocols connecting PLC sensors with ERP production queues.', 'Engineered a linear programming cutting optimizer reducing scrap scrap loss by 14%.'],
    solutionsId: ['Integrasi protokol OPC-UA untuk menghubungkan sensor PLC mesin pabrik dengan antrean ERP.', 'Menerapkan algoritma optimasi pemotongan baja yang memangkas limbah potongan hingga 14%.'],
    architectureEn: 'Industrial on-premise Kubernetes cluster connected to SCADA historians.',
    architectureId: 'Cluster Kubernetes on-premise industri terhubung ke database historis SCADA.',
    techStack: [
      { name: 'Custom ERP Backend', category: 'Backend' },
      { name: 'OPC-UA / PLC Bridge', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Next.js', category: 'Frontend' }
    ],
    metrics: [
      { value: 'Pencatatan Lot', labelEn: 'Raw Material Lots', labelId: 'Manajemen Bahan Baku', descEn: 'Material lot tracking module eliminating warehouse inventory discrepancies.', descId: 'Modul pelacakan lot material produksi untuk meminimalkan selisih stok.' },
      { value: 'Laporan Output', labelEn: 'Daily Output Logs', labelId: 'Dasbor Produksi Harian', descEn: 'Shift output summary dashboard for factory floor supervisors.', descId: 'Dasbor rekapitulasi hasil kerja shift untuk supervisor pabrik.' }
    ],
    keyFeaturesEn: ['Blast furnace temperature telemetry', 'Batch barcode traceability from scrap to coil', 'Automated bill of materials (BOM) scheduler'],
    keyFeaturesId: ['Telemetri suhu dan daya tungku peleburan real-time', 'Pelacakan barcode nomor batch dari bahan baku hingga produk jadi', 'Penjadwalan otomatis kebutuhan material (BOM) pabrik'],
    teamMemberIds: ['andiryaas', 'nicholas', 'fathur', 'dandy'],
    documentation: [
      { titleEn: 'Factory Floor IoT Commissioning', titleId: 'Instalasi IoT Pabrik Peleburan', categoryEn: 'Industrial IoT', categoryId: 'IoT Industri', image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80', captionEn: 'Connecting PLC data loggers to the central MES node.', captionId: 'Pemasangan modul integrasi data PLC mesin ke server pusat pabrik.' }
    ]
  },
  {
    id: 'hospital-enterprise-his',
    tag: 'Enterprise ERP',
    category: 'enterprise',
    clientSectorEn: 'Hospital & Public Healthcare',
    clientSectorId: 'Rumah Sakit & Kesehatan Publik',
    clientName: 'RS Grha Medika Nusantara',
    timeline: '8 Minggu (2024)',
    titleEn: 'Integrated Hospital Information System (HIS) & Clinical ERP',
    titleId: 'Sistem Informasi Rumah Sakit (SIMRS) & ERP Klinis Terpadu',
    subtitleEn: 'Unifying patient admissions, pharmacy inventory, lab analyzers, and BPJS billing under one cohesive platform.',
    subtitleId: 'Penyatuan pendaftaran pasien, inventaris farmasi, alat lab, dan penagihan klaim BPJS dalam satu sistem.',
    descEn: 'Comprehensive hospital ERP integrating inpatient/outpatient registries, pharmaceutical restocking, and claim reconciliation.',
    descId: 'ERP rumah sakit komprehensif yang mengintegrasikan rekam medis bangsal, apotek, kasir, dan integrasi BPJS VClaim.',
    icon: 'truck',
    image: '/portfolio/mockup-hospital-enterprise-his.jpg?v=3',
    gradient: 'from-teal-800 via-slate-900 to-slate-950',
    tagColor: 'text-teal-800',
    accentColor: '#0f766e',
    overviewEn: 'RS Grha Medika manages 380 inpatient beds and 45 specialized clinics. RYNERTIA ARC TECH replaced 6 legacy software silos with one integrated SIMRS ERP platform.',
    overviewId: 'RS Grha Medika mengelola 380 tempat tidur rawat inap dan 45 poliklinik spesialis, memerlukan satu platform SIMRS ERP terintegrasi untuk menggantikan 6 software terpisah.',
    challengesEn: ['Pharmacy stock discrepancies causing delayed inpatient drug dispensations.', 'High BPJS claim rejection rates due to missing diagnostic attachments.'],
    challengesId: ['Selisih stok obat di depo farmasi yang memperlambat pemberian resep ke pasien.', 'Tingginya penolakan klaim BPJS akibat kelengkapan berkas penunjang yang tertinggal.'],
    solutionsEn: ['Automated unit-dose drug dispensation tracking with barcode verification.', 'Engineered an automated BPJS VClaim & E-Klaim validation bridge.'],
    solutionsId: ['Pencatatan obat sistem unit-dose terverifikasi barcode gelang pasien.', 'Jembatan validasi otomatis BPJS VClaim & E-Klaim sebelum pengajuan klaim resmi.'],
    architectureEn: 'High-security microservices on clustered local servers with cloud disaster replication.',
    architectureId: 'Microservices berkeamanan tinggi pada server cluster lokal dengan replikasi cloud.',
    techStack: [
      { name: 'Next.js 15', category: 'Frontend' },
      { name: 'Java Spring Boot', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'BPJS VClaim Bridge', category: 'Backend' }
    ],
    metrics: [
      { value: 'Modul Pendaftaran', labelEn: 'Admissions Module', labelId: 'Antrean Poli Terpadu', descEn: 'Integrated outpatient registration and triage queue management.', descId: 'Digitalisasi alur antrean pendaftaran pasien rawat jalan terintegrasi.' },
      { value: 'Format Klaim BPJS', labelEn: 'BPJS Claim Format', labelId: 'Standarisasi Berkas', descEn: 'Standardized digital documentation to prevent claim verification delays.', descId: 'Standarisasi berkas digital untuk mencegah penolakan verifikasi klaim.' }
    ],
    keyFeaturesEn: ['Real-time bed occupancy dashboard (Siranap)', 'Automated pharmacy expiration alert', 'Doctor mobile CPOE prescription pad'],
    keyFeaturesId: ['Dashboard ketersediaan kamar rawat inap real-time (Siranap)', 'Peringatan otomatis tanggal kadaluarsa obat di apotek', 'Aplikasi e-resep dokter di tablet dengan panduan dosis obat aman'],
    teamMemberIds: ['andiryaas', 'nicholas', 'fathur', 'dandy'],
    documentation: [
      { titleEn: 'Clinical Workflow Training', titleId: 'Pelatihan Dokter & Perawat', categoryEn: 'Clinical Training', categoryId: 'Pelatihan Klinis', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80', captionEn: 'Training head nurses on digital bed allocation and nursing care plans.', captionId: 'Pelatihan kepala perawat mengenai pengalokasian tempat tidur digital.' }
    ]
  },
  {
    id: 'retail-supply-chain-erp',
    tag: 'Enterprise ERP',
    category: 'enterprise',
    clientSectorEn: 'FMCG Retail & Hypermarkets',
    clientSectorId: 'Ritel & Distribusi Supermarket',
    clientName: 'SuperIndo Ritel Utama',
    timeline: '6 Minggu (2024)',
    titleEn: 'Automated Multi-Warehouse ERP & Automated Restocking System',
    titleId: 'ERP Multi-Gudang & Sistem Restok Otomatis Ritel Supermarket',
    subtitleEn: 'Connecting 6 central distribution centers with 120 supermarkets to maintain zero shelf stockouts.',
    subtitleId: 'Menghubungkan 6 gudang pusat dengan 120 supermarket untuk menjamin ketersediaan barang di rak belanja.',
    descEn: 'High-speed supply chain ERP orchestrating cross-docking distribution, batch barcode tracking, and automated supplier PO generation.',
    descId: 'ERP rantai pasok cerdas yang mengorkestrasi distribusi barang cepat, pelacakan barcode batch produk segar, dan penerbitan PO otomatis.',
    icon: 'truck',
    image: '/portfolio/mockup-retail-supply-chain-erp.jpg?v=3',
    gradient: 'from-blue-700 via-sky-800 to-slate-900',
    tagColor: 'text-blue-700',
    accentColor: '#1d4ed8',
    overviewEn: 'SuperIndo Ritel required a resilient ERP to forecast grocery demands, prevent fresh food spoilage, and coordinate overnight deliveries across 120 store locations.',
    overviewId: 'SuperIndo Ritel memerlukan sistem ERP tangguh untuk memperkirakan permintaan belanja harian, mencegah pembusukan produk segar, dan mengatur pengiriman malam ke 120 toko.',
    challengesEn: ['Manual stock counting causing high supermarket shelf stockout rates on weekends.', 'Severe losses in perishable fresh fruits and dairy from inefficient routing.'],
    challengesId: ['Pengecekan stok manual yang memicu kekosongan rak barang saat akhir pekan ramai.', 'Kerugian besar pada produk susu dan buah segar akibat rute pengiriman yang terlambat.'],
    solutionsEn: ['Automated reorder point (ROP) algorithms triggering auto-PO to dairy suppliers.', 'Engineered handheld warehouse scanning for rapid cross-dock dispatch.'],
    solutionsId: ['Penerapan algoritma Reorder Point otomatis yang menerbitkan PO ke supplier saat stok menipis.', 'Aplikasi scanner barcode genggam bagi staf gudang untuk distribusi cepat tanpa simpan lama.'],
    architectureEn: 'Distributed microservices with Apache Kafka streaming inventory transactions to central PostgreSQL cluster.',
    architectureId: 'Microservices terdistribusi dengan streaming Apache Kafka yang mencatat mutasi stok ke cluster PostgreSQL.',
    techStack: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'Golang', category: 'Backend' },
      { name: 'Apache Kafka', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' }
    ],
    metrics: [
      { value: 'Stok Multi-Gudang', labelEn: 'Multi-Depot Stock', labelId: 'Manajemen FIFO', descEn: 'Stock transaction logging using FIFO batch and expiration schedules.', descId: 'Sistem pencatatan keluar masuk barang berdasarkan batch tanggal kadaluarsa.' },
      { value: 'Peringatan Restok', labelEn: 'Restock Alerts', labelId: 'Monitoring Persediaan', descEn: 'Automated alert notifications when warehouse stock nears reorder thresholds.', descId: 'Notifikasi otomatis saat stok barang di gudang mendekati batas minimum.' }
    ],
    keyFeaturesEn: ['Dynamic warehouse cross-dock routing', 'Supplier EDI integration for automated purchase orders', 'Cold-chain temperature telemetry monitoring'],
    keyFeaturesId: ['Rute distribusi cross-docking tanpa jeda penyimpanan', 'Integrasi EDI dengan distributor untuk pengiriman barang otomatis', 'Pemantauan suhu ruang pendingin armada secara berkala'],
    teamMemberIds: ['andiryaas', 'nicholas', 'fathur', 'dandy'],
    documentation: [
      { titleEn: 'Distribution Center Automation Audit', titleId: 'Audit Otomatisasi Gudang Pusat', categoryEn: 'Warehouse Logistics', categoryId: 'Logistik Gudang', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80', captionEn: 'Validating barcode picking scanners across high-rack aisles.', captionId: 'Pengujian scanner barcode genggam di lorong rak gudang pusat distribusi.' }
    ]
  },
  {
    id: 'mining-fleet-dispatch-erp',
    tag: 'Enterprise ERP',
    category: 'enterprise',
    clientSectorEn: 'Mining & Heavy Machinery',
    clientSectorId: 'Pertambangan & Sumber Daya Alam',
    clientName: 'Nusa Mineral Resources',
    timeline: '8 Minggu (2024)',
    titleEn: 'Open-Pit Mining Dispatch ERP & Heavy Machinery Telemetry',
    titleId: 'ERP Dispatch Tambang Terbuka & Telemetri Alat Berat',
    subtitleEn: 'Maximizing excavator and dump truck hauling productivity with automated haulage cycle allocation.',
    subtitleId: 'Memaksimalkan produktivitas alat berat excavator dan dump truck melalui pengaturan rute angkut tambang dinamis.',
    descEn: 'Mission-critical mining enterprise ERP synchronizing excavator loading, dump truck hauling queues, and crushing plant intake.',
    descId: 'ERP tambang tangguh yang menyelaraskan jadwal pemuatan excavator, antrean dump truck angkut, dan stasiun penghancur batu bara.',
    icon: 'truck',
    image: '/portfolio/mockup-mining-fleet-dispatch-erp.jpg?v=3',
    gradient: 'from-yellow-800 via-amber-950 to-slate-900',
    tagColor: 'text-yellow-700',
    accentColor: '#b45309',
    overviewEn: 'Nusa Mineral operates a massive coal and nickel mining concession in Kalimantan, requiring a fleet dispatch ERP to reduce heavy hauler queue times at excavator shovels.',
    overviewId: 'Nusa Mineral mengoperasikan tambang nikel dan batu bara di Kalimantan, membutuhkan ERP dispatch armada untuk memangkas waktu antrean dump truck di lokasi pengerukan.',
    challengesEn: ['Long excavator idling times due to misallocated hauler truck arrivals.', 'High tire failure incidents caused by speeding on hazardous unpaved haul roads.'],
    challengesId: ['Excavator sering menganggur akibat keterlambatan kedatangan dump truck pengangkut.', 'Tingginya kerusakan ban alat berat akibat truk melaju melebihi batas kecepatan jalan tambang.'],
    solutionsEn: ['Engineered dynamic haulage dispatch algorithms optimizing excavator queue balance in real-time.', 'Integrated GPS geofence speed limits with automated in-cabin audio alarms.'],
    solutionsId: ['Algoritma dispatch dinamis yang mengarahkan dump truck ke excavator dengan antrean paling sedikit.', 'Pemasangan alarm kecepatan kabin otomatis berbasis geofence GPS di jalan tambang berdebu.'],
    architectureEn: 'High-resilience private LTE network telemetry connected to on-site server cluster.',
    architectureId: 'Telemetri jaringan LTE privat tahan guncangan terhubung ke server lokal di lokasi tambang.',
    techStack: [
      { name: 'Custom ERP Dispatch', category: 'Backend' },
      { name: 'C++ / Rust Engine', category: 'Backend' },
      { name: 'PostgreSQL GIS', category: 'Database' },
      { name: 'Offline Map Sync', category: 'Frontend' }
    ],
    metrics: [
      { value: 'Log Shift Tambang', labelEn: 'Shift Operations Log', labelId: 'Operasional Alat Berat', descEn: 'Equipment operating hours and heavy machine operator shift logging.', descId: 'Pencatatan jam kerja unit excavator dan absensi operator tambang.' },
      { value: 'Dasbor Ritase', labelEn: 'Haulage Tracker', labelId: 'Monitoring Angkutan', descEn: 'Daily haulage trip summary dashboard for on-site operations teams.', descId: 'Rekapitulasi jumlah ritase angkut harian untuk evaluasi tim lapangan.' }
    ],
    keyFeaturesEn: ['Real-time 3D mine pit elevation map', 'Automatic excavator-truck payload matcher', 'Fatigue monitoring sensor integration'],
    keyFeaturesId: ['Peta kontur 3D tambang real-time', 'Pencocokan kapasitas muatan excavator dan truk otomatis', 'Integrasi sensor deteksi kelelahan mata pengemudi di kabin'],
    teamMemberIds: ['andiryaas', 'nicholas', 'fathur', 'dandy'],
    documentation: [
      { titleEn: 'Mining Pit Telemetry Deployment', titleId: 'Pemasangan Telemetri di Pit Tambang', categoryEn: 'Mining Engineering', categoryId: 'Rekayasa Tambang', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80', captionEn: 'Calibrating private LTE transmitters and telemetry GPS units on 100-ton haul trucks.', captionId: 'Pengujian pemancar LTE dan sensor GPS pada dump truck kapasitas 100 ton.' }
    ]
  }
];
