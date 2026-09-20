export interface ArticleSection {
  headingEn?: string;
  headingId?: string;
  paragraphsEn: string[];
  paragraphsId: string[];
  bulletsEn?: string[];
  bulletsId?: string[];
  quoteEn?: string;
  quoteId?: string;
}

export interface NewsArticle {
  slug: string;
  titleEn: string;
  titleId: string;
  summaryEn: string;
  summaryId: string;
  category: 'bpmn' | 'it' | 'design' | 'business' | 'leadership';
  categoryLabelEn: string;
  categoryLabelId: string;
  categoryDotColor: string;
  coverImage: string;
  publishedAtEn: string;
  publishedAtId: string;
  readTimeMinutes: number;
  authorId: string;
  tags: string[];
  isFeatured: boolean;
  isFoundersCorner: boolean;
  keyTakeawaysEn: string[];
  keyTakeawaysId: string[];
  sections: ArticleSection[];
}

export const newsArticles: NewsArticle[] = [
  // ── 1. Featured Hero Spotlight Article (Top Left) ──────────
  {
    slug: 'akselerasi-kolaborasi-tim-solusi-saas-enterprise',
    titleEn: 'Enhancing Team Collaboration with SaaS Solutions: A Catalyst for Modern Workflows',
    titleId: 'Meningkatkan Kolaborasi Tim dengan Solusi SaaS: Terobosan untuk Alur Kerja Modern',
    summaryEn:
      'How enterprise cloud platforms and integrated workflow engines bridge cross-functional silos, boosting execution speed by up to 65%.',
    summaryId:
      'Bagaimana platform cloud enterprise dan mesin alur kerja terintegrasi meruntuhkan sekat antar divisi, meningkatkan kecepatan eksekusi hingga 65%.',
    category: 'it',
    categoryLabelEn: 'Cloud & IT',
    categoryLabelId: 'Cloud & IT',
    categoryDotColor: '#2563EB',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
    publishedAtEn: 'Aug 10, 2026',
    publishedAtId: '10 Agu 2026',
    readTimeMinutes: 10,
    authorId: 'andiryaas',
    tags: ['SaaS', 'Cloud Engineering', 'Enterprise Workflow', 'Collaboration'],
    isFeatured: true,
    isFoundersCorner: false,
    keyTakeawaysEn: [
      'Centralized event-driven architecture eliminates operational data silos across departments.',
      'Integrating BPMN 2.0 orchestration into SaaS platforms reduces manual handoffs by 58%.',
      'Real-time observability and audit trails ensure enterprise regulatory compliance without sacrificing developer velocity.',
    ],
    keyTakeawaysId: [
      'Arsitektur event-driven terpusat mengeliminasi sekat data operasional antar departemen.',
      'Integrasi orkestrasi BPMN 2.0 ke dalam platform SaaS memangkas proses manual hingga 58%.',
      'Observabilitas dan audit trail real-time menjamin kepatuhan regulasi enterprise tanpa mengorbankan kecepatan delivery.',
    ],
    sections: [
      {
        headingEn: 'The Friction of Fragmented Enterprise Tooling',
        headingId: 'Kendala Fragmentasi Alat Kerja Enterprise',
        paragraphsEn: [
          'In large organizations, departments frequently operate on disconnected SaaS islands. Sales logs customer requirements in one tool, engineers track sprint deliverables in another, and operations tracks financial milestones independently. This fragmentation introduces communication lags that compound across multi-quarter initiatives.',
          'When handoffs require manual synchronization, errors multiply. A recent industry survey revealed that up to 40% of technical rework traces back to misaligned specifications during cross-functional handoffs.',
        ],
        paragraphsId: [
          'Dalam organisasi berskala besar, setiap departemen kerap beroperasi dalam sistem terpisah. Tim penjualan mencatat kebutuhan klien di satu aplikasi, tim rekayasa software melacak sprint di repositori terpisah, dan divisi operasional memantau target finansial secara mandiri. Fragmentasi ini menimbulkan jeda koordinasi yang berakumulasi menjadi kendala besar.',
          'Saat serah terima pekerjaan membutuhkan sinkronisasi manual, potensi kekeliruan meningkat drastis. Berbagai riset industri membuktikan bahwa hingga 40% pengerjaan ulang (rework) teknis berakar dari ketidaksesuaian spesifikasi selama proses serah terima antar tim.',
        ],
        quoteEn:
          'True digital transformation is not merely adopting software; it is synchronizing your business processes with automated, unified communication pipelines.',
        quoteId:
          'Transformasi digital sejati bukan sekadar mengadopsi software, melainkan menyinkronkan seluruh proses bisnis Anda ke dalam pipa alur kerja yang terotomasi dan terpadu.',
      },
      {
        headingEn: 'Orchestrating Collaboration through Unified Platforms',
        headingId: 'Mengorkestrasi Kolaborasi melalui Platform Terpadu',
        paragraphsEn: [
          'Modern SaaS architectures resolve this dilemma by treating business processes as executable code. By embedding BPMN standards directly into software pipelines, teams establish a single source of truth for both business analysts and technical engineers.',
          'With centralized access controls, automated notification hooks, and end-to-end telemetry, enterprise stakeholders review progress without interruption, allowing engineering squads to focus on continuous delivery.',
        ],
        paragraphsId: [
          'Arsitektur SaaS modern mengatasi dilema ini dengan memperlakukan proses bisnis sebagai kode yang dapat dieksekusi. Melalui penyematan standar BPMN langsung ke dalam arsitektur software, tim bisnis dan tim pengembang memiliki satu acuan kebenaran yang sama.',
          'Dengan sistem kontrol akses terpusat, notifikasi webhook otomatis, dan telemetri menyeluruh, para pengambil keputusan dapat memantau progres tanpa hambatan, memberikan ruang bagi tim rekayasa untuk berfokus pada deployment berkualitas tinggi.',
        ],
        bulletsEn: [
          'Automated data ingestion between CRM, ERP, and internal microservices.',
          'Sub-second update broadcasts using secure WebSocket channels.',
          'Strict role-based access control protecting confidential corporate records.',
        ],
        bulletsId: [
          'Ingesti data otomatis antara CRM, ERP, dan microservices internal.',
          'Pembaruan status real-time dengan latensi rendah menggunakan koneksi aman.',
          'Pembatasan hak akses berbasis peran untuk melindungi data strategis perusahaan.',
        ],
      },
    ],
  },

  // ── 2. Latest Post 1 (Top Right Row 1) ──────────────────────
  {
    slug: 'desain-antarmuka-intuitif-produk-saas-enterprise',
    titleEn: 'Creating an Intuitive User Interface (UI) for Your SaaS Product',
    titleId: 'Merancang Antarmuka Pengguna (UI) yang Intuitif untuk Produk SaaS',
    summaryEn:
      'Key design considerations for complex enterprise software that keep user friction minimal and adoption rates high.',
    summaryId:
      'Pertimbangan desain utama untuk perangkat lunak enterprise kompleks agar friksi pengguna minimal dan adopsi tinggi.',
    category: 'design',
    categoryLabelEn: 'UI/UX Design',
    categoryLabelId: 'Desain UI/UX',
    categoryDotColor: '#EC4899',
    coverImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
    publishedAtEn: 'Aug 10, 2026',
    publishedAtId: '10 Agu 2026',
    readTimeMinutes: 10,
    authorId: 'nicholas',
    tags: ['UI/UX', 'Design System', 'SaaS', 'Figma'],
    isFeatured: false,
    isFoundersCorner: false,
    keyTakeawaysEn: [
      'Clarity always trumps decoration in high-density enterprise dashboards.',
      'Standardizing component tokens in Figma reduces development cycle by 35%.',
      'Contextual inline feedback prevents destructive user errors before they occur.',
    ],
    keyTakeawaysId: [
      'Kejelasan hierarki informasi selalu lebih utama daripada ornamen dekoratif semata.',
      'Standardisasi token komponen di Figma mempercepat siklus delivery hingga 35%.',
      'Feedback inline kontekstual mencegah kesalahan fatal sebelum data tersimpan.',
    ],
    sections: [
      {
        headingEn: 'The Balance Between Data Density and Mental Clarity',
        headingId: 'Keseimbangan Kerapatan Data dan Kejernihan Pikiran',
        paragraphsEn: [
          'Enterprise users spend hours inside operational dashboards. Visual noise, aggressive animations, or inconsistent button placements generate cognitive fatigue. Great enterprise UI prioritizes calm typography, predictable layouts, and disciplined spacing.',
          'By establishing strict component variants in a shared design token repository, designers ensure that every modal, table row, and form element behaves with absolute consistency.',
        ],
        paragraphsId: [
          'Pengguna enterprise menghabiskan berjam-jam di depan dashboard operasional. Elemen visual yang berlebihan, animasi mengganggu, atau letak tombol yang inkonsisten menimbulkan kelelahan kognitif. Desain enterprise yang unggul mengutamakan tipografi yang tenang, layout terprediksi, dan ritme spasi yang konsisten.',
          'Dengan membangun varian komponen terstandarisasi dalam repositori design tokens, setiap modal, baris tabel, dan elemen form memiliki perilaku interaksi yang seragam.',
        ],
      },
    ],
  },

  // ── 3. Latest Post 2 (Top Right Row 2) ──────────────────────
  {
    slug: 'panduan-merancang-menu-navigasi-ramah-pengguna',
    titleEn: 'Tips for Designing Clear and User-Friendly Navigation Menus',
    titleId: 'Panduan Merancang Menu Navigasi yang Jelas dan Ramah Pengguna',
    summaryEn:
      'Architecting information hierarchy in enterprise dashboards so users always find core capabilities in under 3 clicks.',
    summaryId:
      'Merancang hierarki informasi pada dashboard enterprise agar pengguna menemukan kapabilitas utama dalam kurang dari 3 klik.',
    category: 'design',
    categoryLabelEn: 'Information Architecture',
    categoryLabelId: 'Arsitektur Informasi',
    categoryDotColor: '#F97316',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    publishedAtEn: 'Aug 10, 2026',
    publishedAtId: '10 Agu 2026',
    readTimeMinutes: 8,
    authorId: 'syaamil',
    tags: ['Navigation', 'UX Research', 'Information Architecture'],
    isFeatured: false,
    isFoundersCorner: false,
    keyTakeawaysEn: [
      'Limit top-level navigation items to 7 or fewer to respect human short-term memory.',
      'Persist breadcrumbs on nested detail views to give users permanent orientation.',
      'Ensure keyboard accessibility (Tab, Enter, Escape) across all dropdown trees.',
    ],
    keyTakeawaysId: [
      'Batasi menu tingkat pertama maksimal 7 item untuk mempermudah pemrosesan memori pengguna.',
      'Sediakan breadcrumbs konsisten pada halaman bertingkat untuk orientasi posisi yang jelas.',
      'Pastikan navigasi keyboard (Tab, Enter, Escape) berfungsi sempurna pada seluruh menu.',
    ],
    sections: [
      {
        headingEn: 'Navigational Wayfinding in Deep Systems',
        headingId: 'Pemandu Arah pada Sistem Enterprise Kompleks',
        paragraphsEn: [
          'A navigation menu is the spine of any digital product. If users cannot locate a report or action within three clicks, the interface has failed them. Grouping items by operational domain rather than organizational hierarchy creates a much more intuitive user journey.',
          'Clear active state indicators and subtle transition animations provide immediate spatial context, preventing users from feeling lost in deep administrative trees.',
        ],
        paragraphsId: [
          'Menu navigasi adalah tulang punggung setiap produk digital. Jika pengguna tidak dapat menemukan laporan atau menu aksi dalam tiga kali klik, maka antarmuka tersebut belum optimal. Mengelompokkan menu berdasarkan domain tugas kerja, bukan struktur birokrasi, menciptakan pengalaman yang jauh lebih intuitif.',
          'Indikator status aktif yang tegas dan transisi mikro yang halus memberikan konteks spasial instan, menjaga pengguna tetap fokus pada tugas operasional mereka.',
        ],
      },
    ],
  },

  // ── 4. Latest Post 3 (Top Right Row 3) ──────────────────────
  {
    slug: 'membangun-hierarki-visual-memandu-pengguna',
    titleEn: 'Exploring How to Establish a Visual Hierarchy That Guides Users',
    titleId: 'Membangun Hierarki Visual yang Mengarahkan Perhatian Pengguna',
    summaryEn:
      'Leveraging typographic scale, spatial rhythms, and semantic weight to guide user attention naturally.',
    summaryId:
      'Memanfaatkan skala tipografi, ritme spasial, dan bobot semantik untuk mengarahkan atensi pengguna secara alami.',
    category: 'design',
    categoryLabelEn: 'Visual Systems',
    categoryLabelId: 'Sistem Visual',
    categoryDotColor: '#EAB308',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
    publishedAtEn: 'Aug 10, 2026',
    publishedAtId: '10 Agu 2026',
    readTimeMinutes: 7,
    authorId: 'femas',
    tags: ['Typography', 'Visual Hierarchy', 'Editorial Design'],
    isFeatured: false,
    isFoundersCorner: false,
    keyTakeawaysEn: [
      'Visual hierarchy directs user eye flow to the primary Call To Action within 2 seconds.',
      'Calibrated margins and padding establish clear grouping without relying on heavy borders.',
      'Contrasting font weights distinguishes labels from critical financial data values.',
    ],
    keyTakeawaysId: [
      'Hierarki visual yang terukur mengarahkan pandangan pengguna ke aksi utama dalam 2 detik.',
      'Margin dan padding yang terkalibrasi memisahkan kelompok informasi tanpa garis tebal yang kaku.',
      'Kontras ketebalan font memperjelas perbedaan antara label keterangan dan nilai data penting.',
    ],
    sections: [
      {
        headingEn: 'Guiding Attention Without Loud Decorations',
        headingId: 'Mengarahkan Fokus Tanpa Ornamen Berlebihan',
        paragraphsEn: [
          'Effective visual hierarchy relies on disciplined contrast rather than visual noise. When everything competes for attention with bright colors and heavy badges, nothing stands out. A great UI uses white space as an active design tool to frame key operational metrics.',
          'By anchoring the page with strong primary headings and progressive disclosure for secondary actions, users scan data effortlessly.',
        ],
        paragraphsId: [
          'Hierarki visual yang efektif dibangun di atas kontras yang terukur, bukan ornamen yang ramai. Ketika semua elemen berebut perhatian dengan warna mencolok, tidak ada satu pun yang terlihat menonjol. Desain antarmuka berstandar tinggi menggunakan ruang kosong (white space) sebagai alat bantu fokus pembacaan metrik penting.',
          'Dengan menata judul utama yang berwibawa dan menempatkan aksi sekunder secara proporsional, pengguna dapat memindai data transaksi dengan cepat dan akurat.',
        ],
      },
    ],
  },

  // ── 5. Latest Post 4 (Top Right Row 4) ──────────────────────
  {
    slug: 'psikologi-warna-mempengaruhi-emosi-tindakan-pengguna',
    titleEn: 'How to Use Color to Influence User Emotions and Decision Making',
    titleId: 'Memanfaatkan Psikologi Warna untuk Mempengaruhi Keputusan Pengguna',
    summaryEn:
      'Applying intentional corporate color palettes and calibrated accents to drive higher conversion rates and brand trust.',
    summaryId:
      'Menerapkan palet warna korporat terkalibrasi untuk mendorong konversi tinggi dan kepercayaan brand.',
    category: 'business',
    categoryLabelEn: 'Behavioral Design',
    categoryLabelId: 'Desain Perilaku',
    categoryDotColor: '#0EA5E9',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    publishedAtEn: 'Aug 10, 2026',
    publishedAtId: '10 Agu 2026',
    readTimeMinutes: 9,
    authorId: 'firdaus',
    tags: ['Color Psychology', 'Conversion', 'Branding', 'Trust'],
    isFeatured: false,
    isFoundersCorner: false,
    keyTakeawaysEn: [
      'Deep Slate palettes project stability, security, and corporate maturity.',
      'A single dominant accent color creates unambiguous interactive affordance.',
      'Semantic colors (green for success, red for critical alerts) must strictly adhere to WCAG AA contrast.',
    ],
    keyTakeawaysId: [
      'Palet Deep Slate memancarkan stabilitas, rasa aman, dan kematangan korporat.',
      'Satu warna aksen dominan memberikan penanda interaksi yang jelas bagi pengunjung.',
      'Warna semantik (hijau sukses, merah alert kritis) wajib memenuhi rasio kontras WCAG AA.',
    ],
    sections: [
      {
        headingEn: 'Color as an Emotional and Functional Anchor',
        headingId: 'Warna sebagai Jangkar Emosional dan Fungsional',
        paragraphsEn: [
          'In business technology, color is never purely aesthetic; it communicates authority and functional state. A deep corporate slate establishes a grounded professional tone, while intentional blue accents signal actionable clarity.',
          'When users encounter consistent visual color grammar across applications, their trust in the underlying platform increases, leading to higher conversion and long-term engagement.',
        ],
        paragraphsId: [
          'Dalam teknologi bisnis, warna bukan sekadar unsur pemanis, melainkan bahasa visual yang mengomunikasikan otoritas dan status sistem. Warna dasar slate yang matang mencerminkan profesionalisme yang kokoh, sementara aksen biru yang tegas memberikan kejelasan arah tindakan.',
          'Konsistensi penerapan tata warna di seluruh platform membangun rasa percaya pengguna, yang pada akhirnya meningkatkan konversi dan retensi kerja sama jangka panjang.',
        ],
      },
    ],
  },

  // ── 6. Founders Corner 1 (Bottom Row Item 1) ─────────────────
  {
    slug: 'peran-krusial-talenta-spesialis-transformasi-digital',
    titleEn: 'Our People Make the Difference: Building High-Caliber Engineering Teams',
    titleId: 'Talenta Spesialis Kunci Keberhasilan: Membangun Tim Rekayasa Berkinerja Tinggi',
    summaryEn:
      'Why deep engineering specialization and multidisciplinary synergy always outperform generalist outsourcing in enterprise systems.',
    summaryId:
      'Mengapa spesialisasi mendalam dan sinergi lintas disiplin selalu melampaui outsourcing generalis pada sistem enterprise.',
    category: 'leadership',
    categoryLabelEn: 'Leadership & Talent',
    categoryLabelId: 'Kepemimpinan & Talenta',
    categoryDotColor: '#2563EB',
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    publishedAtEn: 'Aug 10, 2026',
    publishedAtId: '10 Agu 2026',
    readTimeMinutes: 10,
    authorId: 'andiryaas',
    tags: ['Leadership', 'Talent Strategy', 'Engineering Culture', 'Rynertia Team'],
    isFeatured: false,
    isFoundersCorner: true,
    keyTakeawaysEn: [
      'Small, focused teams of domain specialists deliver solutions 3x faster than bloated generalist teams.',
      'Shared architectural standards bridge the gap between business analysts and software engineers.',
      'Direct client-to-engineer communication channels prevent communication distortion.',
    ],
    keyTakeawaysId: [
      'Tim kecil yang terdiri dari spesialis berfokus mampu menyelesaikan solusi 3x lebih cepat dibanding tim generalis.',
      'Standar arsitektur bersama menyatukan pemahaman antara analis proses bisnis dan pengembang software.',
      'Jalur koordinasi langsung antara klien dan tim teknis mencegah distorsi informasi.',
    ],
    sections: [
      {
        headingEn: 'The Fallacy of Generalist Delivery',
        headingId: 'Kekeliruan Pendekatan Generalis',
        paragraphsEn: [
          'When founding Rynertia Arc Tech, our core conviction was simple: modern enterprise challenges cannot be solved with superficial knowledge. A complex banking microservice requires specialized distributed systems engineers; an operational overhaul requires certified BPMN analysts; and a frictionless interface requires dedicated accessibility designers.',
          'By structuring our organization into specialized divisions, Executive Suite, IT Engineering, Creative Design, and Research & Analysis, we ensure that every client challenge is met with authoritative expertise.',
        ],
        paragraphsId: [
          'Saat mendirikan Rynertia Arc Tech, keyakinan mendasar kami sangat jelas: tantangan enterprise modern tidak dapat diatasi dengan pemahaman yang dangkal. Sistem perbankan kompleks menuntut ahli arsitektur terdistribusi; pembenahan alur kerja operasional membutuhkan analis proses bisnis BPMN; dan antarmuka yang mulus membutuhkan desainer berpengalaman.',
          'Dengan menstrukturkan organisasi ke dalam divisi spesialis, Pimpinan Eksekutif, Divisi IT, Desain Kreatif, serta Riset & Analisis, kami memastikan setiap kebutuhan klien ditangani oleh ahli yang tepat di bidangnya.',
        ],
        quoteEn:
          'Software architecture is a direct reflection of team communication. Elite systems require elite, multidisciplinary collaboration.',
        quoteId:
          'Arsitektur software adalah cerminan langsung dari komunikasi tim. Sistem kelas atas tercipta dari kolaborasi lintas disiplin yang solid.',
      },
    ],
  },

  // ── 7. Founders Corner 2 (Bottom Row Item 2) ─────────────────
  {
    slug: 'mengapa-audit-proses-bisnis-harus-mendahului-coding',
    titleEn: 'Why Business Process Modeling Must Precede Any Line of Code',
    titleId: 'Mengapa Pemodelan Proses Bisnis Harus Mendahului Penulisan Kode',
    summaryEn:
      'Bridging organizational workflows with software architecture through BPMN 2.0 to eliminate rework and scope creep.',
    summaryId:
      'Menjembatani alur kerja organisasi dengan arsitektur software melalui BPMN 2.0 untuk mengeliminasi rework dan pembengkakan biaya.',
    category: 'bpmn',
    categoryLabelEn: 'BPMN Strategy',
    categoryLabelId: 'Strategi BPMN',
    categoryDotColor: '#10B981',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    publishedAtEn: 'Aug 10, 2026',
    publishedAtId: '10 Agu 2026',
    readTimeMinutes: 10,
    authorId: 'mayra',
    tags: ['BPMN 2.0', 'Process Audit', 'Enterprise Strategy', 'ROI'],
    isFeatured: false,
    isFoundersCorner: true,
    keyTakeawaysEn: [
      'Documenting business processes before development reduces technical debt by up to 45%.',
      'BPMN 2.0 diagrams act as an unambiguous contract between executive boards and tech squads.',
      'Simulating edge cases during modeling saves hundreds of hours of production debugging.',
    ],
    keyTakeawaysId: [
      'Mendokumentasikan alur proses bisnis sebelum coding memangkas technical debt hingga 45%.',
      'Diagram BPMN 2.0 berfungsi sebagai kontrak kesepakatan tertulis antara pimpinan bisnis dan tim pengembang.',
      'Simulasi skenario kendala pada tahap pemodelan menghemat ratusan jam perbaikan sistem di tahap rilis.',
    ],
    sections: [
      {
        headingEn: 'The Cost of Premature Implementation',
        headingId: 'Kerugian dari Implementasi Terburu-buru',
        paragraphsEn: [
          'The most common cause of failed IT investments is not bad code, but code written for the wrong assumptions. When developers build features based on ambiguous verbal briefs, the resulting platform invariably requires massive restructuring when deployed into actual production operations.',
          'At Rynertia Arc Tech, our process begins with rigorous business process audits. By mapping every decision gateway, exception path, and system role using international BPMN 2.0 standards, we ensure every line of code serves a verified operational necessity.',
        ],
        paragraphsId: [
          'Penyebab paling umum kegagalan investasi sistem IT bukanlah kode yang buruk, melainkan kode yang ditulis berdasarkan asumsi yang keliru. Ketika tim pengembang langsung membangun fitur dari instruksi lisan yang ambigu, sistem yang dihasilkan hampir selalu membutuhkan perombakan besar saat diterapkan di lapangan.',
          'Di Rynertia Arc Tech, langkah awal kami selalu dimulai dengan audit proses bisnis yang mendalam. Dengan memetakan setiap alur keputusan, penanganan kendala, dan peran sistem menggunakan standar BPMN 2.0, kami menjamin setiap baris kode menjawab kebutuhan operasional nyata.',
        ],
      },
    ],
  },

  // ── 8. Founders Corner 3 (Bottom Row Item 3) ─────────────────
  {
    slug: 'merancang-ketahanan-cloud-skala-jutaan-transaksi',
    titleEn: 'Architecting Cloud Infrastructure for High-Throughput Resilience',
    titleId: 'Merancang Infrastruktur Cloud untuk Ketahanan Lonjakan Transaksi',
    summaryEn:
      'Zero-downtime deployment patterns, multi-region database replication, and proactive observability in financial architectures.',
    summaryId:
      'Pola deployment tanpa downtime, replikasi database multi-region, dan observabilitas proaktif pada arsitektur finansial.',
    category: 'it',
    categoryLabelEn: 'Cloud & Security',
    categoryLabelId: 'Cloud & Keamanan',
    categoryDotColor: '#6366F1',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    publishedAtEn: 'Aug 10, 2026',
    publishedAtId: '10 Agu 2026',
    readTimeMinutes: 10,
    authorId: 'daffa',
    tags: ['Cloud Resilience', 'Microservices', 'High Concurrency', 'Security'],
    isFeatured: false,
    isFoundersCorner: true,
    keyTakeawaysEn: [
      'Decoupling transactional services via asynchronous message queues prevents cascading server crashes.',
      'Multi-tier caching strategies reduce primary database query loads by up to 80%.',
      'Automated health checks and canary releases ensure 99.99% service availability.',
    ],
    keyTakeawaysId: [
      'Pemisahan layanan transaksi melalui message queue asinkron mencegah kegagalan berantai pada server.',
      'Strategi multi-tier caching mengurangi beban query ke database utama hingga 80%.',
      'Pemeriksaan kesehatan sistem otomatis dan pola rilis bertahap menjamin ketersediaan layanan 99.99%.',
    ],
    sections: [
      {
        headingEn: 'Engineering for Unforgiving Peak Demands',
        headingId: 'Rekayasa Sistem untuk Lonjakan Beban Tinggi',
        paragraphsEn: [
          'In financial technology and high-volume logistics, server downtime translates directly to lost revenue and damaged reputation. Systems must be engineered with the assumption that individual microservices will occasionally fail, and the broader architecture must gracefully absorb those shocks without dropping customer transactions.',
          'By leveraging containerized microservices, distributed Redis caches, and database read replicas, we build enterprise backends that sustain sudden 10x traffic surges with sub-second response times.',
        ],
        paragraphsId: [
          'Dalam teknologi finansial dan logistik bervolume tinggi, downtime server berdampak langsung pada kerugian finansial dan reputasi brand. Arsitektur sistem harus dirancang dengan asumsi bahwa setiap komponen sewaktu-waktu dapat mengalami gangguan, dan sistem secara keseluruhan harus mampu mengisolasi gangguan tersebut tanpa membatalkan transaksi klien.',
          'Melalui penerapan microservices dalam kontainer, cache terdistribusi, dan replikasi database, kami merancang infrastruktur cloud enterprise yang andal menangani lonjakan lalu lintas data secara instan dan aman.',
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(a => a.slug.toLowerCase() === slug.toLowerCase());
}

export function getRelatedArticles(currentSlug: string, category: string, limit = 2): NewsArticle[] {
  const filtered = newsArticles.filter(
    a => a.slug.toLowerCase() !== currentSlug.toLowerCase() && a.category === category
  );
  if (filtered.length >= limit) return filtered.slice(0, limit);
  // Fallback to any articles if not enough in same category
  const fallback = newsArticles.filter(a => a.slug.toLowerCase() !== currentSlug.toLowerCase());
  return fallback.slice(0, limit);
}
