export interface SolutionItem {
  id: string;
  sectorId: string;
  sectorNameId: string;
  sectorNameEn: string;
  titleId: string;
  titleEn: string;
  taglineId: string;
  taglineEn: string;
  businessProblemId: string;
  businessProblemEn: string;
  technologyApproachId: string;
  technologyApproachEn: string;
  solutionId: string;
  solutionEn: string;
  expectedBusinessValueId: string;
  expectedBusinessValueEn: string;
  metrics: {
    labelId: string;
    labelEn: string;
    value: string;
  }[];
  standards: string[];
}

export const enterpriseSolutions: SolutionItem[] = [
  {
    id: 'core-banking-credit',
    sectorId: 'banking',
    sectorNameId: 'Perbankan & Jasa Keuangan',
    sectorNameEn: 'Banking & Financial Services',
    titleId: 'Modernisasi Core Banking & Alur Kredit Otomatis',
    titleEn: 'Core Banking Modernization & Automated Credit Flow',
    taglineId: 'Transformasi alur persetujuan kredit enterprise dari 5 hari menjadi 15 menit',
    taglineEn: 'Transforming enterprise credit approvals from 5 business days to 15 minutes',
    businessProblemId:
      'Proses persetujuan kredit manual memakan waktu hingga 5-7 hari kerja, silo data antar cabang menghambat verifikasi, dan arsitektur legacy monolith rentan bottleneck saat batch settlement.',
    businessProblemEn:
      'Manual credit approval cycles take 5-7 business days, siloed branch data hinders verification, and legacy monolith architectures suffer bottlenecks during batch settlements.',
    technologyApproachId:
      'Penerapan arsitektur microservices terdistribusi dengan orkestrasi proses bisnis BPMN 2.0, event-driven messaging, dan standarisasi pertukaran data ISO 20022.',
    technologyApproachEn:
      'Implementing distributed microservices architecture with formal BPMN 2.0 process orchestration, event-driven messaging, and global ISO 20022 data standards.',
    solutionId:
      'Engine orkestrasi kredit digital otomatis yang mengintegrasikan e-KYC, credit scoring analitik, dan core banking gateway dengan failover otomatis tanpa downtime.',
    solutionEn:
      'An automated digital credit orchestration engine integrating e-KYC, analytical scoring, and core banking gateways with automated zero-downtime failover.',
    expectedBusinessValueId:
      'Waktu persetujuan kredit dipangkas dari 5 hari kerja menjadi 15 menit, ketersediaan transaksi 99.99%, dan kepatuhan penuh terhadap regulasi audit perbankan.',
    expectedBusinessValueEn:
      'Credit turnaround slashed from 5 days to 15 minutes, 99.99% transaction availability, and full compliance with financial audit regulations.',
    metrics: [
      { labelId: 'Waktu Persetujuan', labelEn: 'Approval Turnaround', value: '15 Menit' },
      { labelId: 'Ketersediaan Sistem', labelEn: 'System Availability', value: '99.99%' },
      { labelId: 'Penurunan Risiko Fraud', labelEn: 'Fraud Risk Reduction', value: '74%' },
    ],
    standards: ['ISO 20022', 'BPMN 2.0', 'PCI-DSS', 'Core Banking API'],
  },
  {
    id: 'telco-bss-oss',
    sectorId: 'telco',
    sectorNameId: 'Telekomunikasi & Layanan Digital',
    sectorNameEn: 'Telecommunications & Digital Services',
    titleId: 'Orkestrasi Alur Kerja BSS/OSS & Event Streaming',
    titleEn: 'BSS/OSS Workflow Orchestration & Event Streaming',
    taglineId: 'Pemrosesan jutaan transaksi digital harian berlatensi rendah tanpa degradasi',
    taglineEn: 'High-throughput low-latency event processing sustaining millions of transactions',
    businessProblemId:
      'Lonjakan trafik transaksi saat kampanye promosi atau akhir bulan menyebabkan timeout pada database relasional konvensional dan kegagalan provisioning paket pelanggan.',
    businessProblemEn:
      'Traffic spikes during promotional surges cause timeouts on conventional relational databases and customer provisioning dropouts.',
    technologyApproachId:
      'Arsitektur streaming asynchronous berbasis Apache Kafka, distributed in-memory cache cluster, dan orkestrasi container Kubernetes elastis.',
    technologyApproachEn:
      'Asynchronous event-driven streaming with Apache Kafka, distributed in-memory cache clusters, and elastic Kubernetes container orchestration.',
    solutionId:
      'High-concurrency event processing pipeline berkapasitas 50.000 transaksi per detik (TPS) dengan mekanisme circuit breaker dan pelacakan audit terdistribusi.',
    solutionEn:
      'A 50,000 TPS high-concurrency event processing pipeline featuring circuit breakers and distributed audit tracing.',
    expectedBusinessValueId:
      'Nol transaksi drop saat jam sibuk, latensi respons API di bawah 45ms, serta penghematan biaya infrastruktur cloud hingga 35%.',
    expectedBusinessValueEn:
      'Zero dropped transactions during peak windows, sub-45ms API response latency, and up to 35% cloud infrastructure cost optimization.',
    metrics: [
      { labelId: 'Kapasitas Throughput', labelEn: 'Throughput Capacity', value: '50,000 TPS' },
      { labelId: 'Latensi Respon API', labelEn: 'Response Latency', value: '<45ms' },
      { labelId: 'Penghematan Infrastruktur', labelEn: 'Cost Efficiency', value: '35%' },
    ],
    standards: ['TM Forum Open API', 'Apache Kafka', 'Kubernetes', 'OAuth 2.0'],
  },
  {
    id: 'healthcare-emr-his',
    sectorId: 'healthcare',
    sectorNameId: 'Layanan Kesehatan & Rumah Sakit',
    sectorNameEn: 'Healthcare & Hospital Systems',
    titleId: 'Interoperabilitas Rekam Medis EMR & Hospital Information System',
    titleEn: 'EMR & Hospital Information System Interoperability',
    taglineId: 'Integrasi data rekam medis pasien terpadu dengan standar keamanan klinis global',
    taglineEn: 'Unified electronic medical records integration meeting global clinical standards',
    businessProblemId:
      'Data medis pasien terfragmentasi di berbagai unit (laboratorium, radiologi, farmasi, rawat inap), memperlambat keputusan penanganan darurat dan memicu kesalahan resep.',
    businessProblemEn:
      'Patient clinical data fragmented across hospital silos (lab, radiology, pharmacy), causing delays in emergency diagnosis and medication errors.',
    technologyApproachId:
      'Penerapan standar interoperabilitas data kesehatan HL7/FHIR, arsitektur enkripsi data end-to-end, dan federated API gateway.',
    technologyApproachEn:
      'Adopting HL7/FHIR healthcare interoperability protocols, end-to-end clinical data encryption, and a federated API gateway.',
    solutionId:
      'Universal Patient EMR Gateway yang menyinkronkan seluruh riwayat diagnosa, resep digital, dan catatan laboratorium secara real-time dengan audit log ketat.',
    solutionEn:
      'A Universal Patient EMR Gateway synchronizing diagnostics, e-prescriptions, and lab reports in real-time with comprehensive clinical audit logs.',
    expectedBusinessValueId:
      'Akses rekam medis darurat tersedia dalam <2 detik, eliminasi kesalahan peresepan obat, dan kesiapan 100% integrasi dengan ekosistem kesehatan nasional.',
    expectedBusinessValueEn:
      'Emergency clinical records retrieved in <2 seconds, elimination of prescription errors, and 100% readiness for national health data exchanges.',
    metrics: [
      { labelId: 'Kecepatan Akses Data', labelEn: 'Data Retrieval', value: '<2 Detik' },
      { labelId: 'Akurasi Peresepan', labelEn: 'Prescription Accuracy', value: '99.9%' },
      { labelId: 'Kepatuhan Interoperabilitas', labelEn: 'Protocol Compliance', value: '100% FHIR' },
    ],
    standards: ['HL7 / FHIR', 'HIPAA Compliant', 'SATUSEHAT Ready', 'ISO 27799'],
  },
  {
    id: 'logistics-wms-fleet',
    sectorId: 'logistics',
    sectorNameId: 'Logistik & Rantai Pasok',
    sectorNameEn: 'Logistics & Supply Chain',
    titleId: 'Warehouse Management System Cerdas & Dispatch Armada IoT',
    titleEn: 'Intelligent WMS & Multimodal IoT Fleet Dispatch',
    taglineId: 'Visibilitas inventaris real-time dan dispatch rute otomatis berbasis telematika',
    taglineEn: 'Real-time inventory visibility and automated route dispatch via IoT telematics',
    businessProblemId:
      'Blind spot pelacakan pengiriman multimoda, keterlambatan dispatch akibat penentuan rute statis, dan ketidakakuratan stok pergudangan.',
    businessProblemEn:
      'Multimodal fleet visibility blind spots, dispatch delays from static route assignments, and inventory stock discrepancies.',
    technologyApproachId:
      'Integrasi sensor IoT telematika kendaraan dengan edge computing, algoritma optimasi rute dinamis, dan pemodelan alur kerja pergudangan BPMN.',
    technologyApproachEn:
      'Integrating vehicle IoT telematics with edge computing, dynamic route optimization algorithms, and BPMN warehouse orchestration.',
    solutionId:
      'Command Center logistik terpusat yang menghubungkan status rak gudang, otomasi picking/packing, dan navigasi armada dengan geofencing real-time.',
    solutionEn:
      'A centralized logistics command center integrating warehouse rack management, automated picking, and multimodal fleet geofencing.',
    expectedBusinessValueId:
      'Akurasi stok pergudangan meningkat hingga 99.8%, penghematan konsumsi bahan bakar armada 28%, dan kepastian estimasi waktu tiba (ETA) bagi pelanggan.',
    expectedBusinessValueEn:
      'Warehouse stock accuracy elevated to 99.8%, 28% fleet fuel cost reduction, and transparent ETA assurance for enterprise clients.',
    metrics: [
      { labelId: 'Akurasi Stok Gudang', labelEn: 'Inventory Accuracy', value: '99.8%' },
      { labelId: 'Efisiensi Bahan Bakar', labelEn: 'Fuel Efficiency', value: '28%' },
      { labelId: 'Akurasi Jadwal ETA', labelEn: 'ETA Reliability', value: '96.5%' },
    ],
    standards: ['IoT Telematics', 'BPMN WMS', 'REST API', 'MQTT Protocol'],
  },
];
