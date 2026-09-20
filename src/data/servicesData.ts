export interface ServicePillar {
  pillar: string;
  titleKey: 'srv-1-title' | 'srv-2-title' | 'srv-3-title' | 'srv-4-title';
  descKey: 'srv-1-desc' | 'srv-2-desc' | 'srv-3-desc' | 'srv-4-desc';
  icon: string;
  isFeatured?: boolean;
  deliverablesId: string[];
  deliverablesEn: string[];
  problemSolvedId: string;
  problemSolvedEn: string;
  valueDeliveredId: string;
  valueDeliveredEn: string;
  colorScheme: {
    haloRing: string;
    coreGradient: string;
    tagColor: string;
  };
}

export const servicePillars: ServicePillar[] = [
  {
    pillar: 'Pillar 01',
    titleKey: 'srv-1-title',
    descKey: 'srv-1-desc',
    icon: 'bar-chart-2',
    deliverablesId: ['BPMN 2.0', 'Pemodelan UML', 'Riset Pasar'],
    deliverablesEn: ['BPMN 2.0', 'UML Modeling', 'Market Research'],
    problemSolvedId:
      'Pemborosan anggaran IT hingga 40% akibat spesifikasi ambigu, ketidaksesuaian alur kerja dengan kebutuhan lapangan, dan minimnya validasi kelayakan teknis sebelum coding.',
    problemSolvedEn:
      'Up to 40% IT budget waste caused by ambiguous specifications, workflow misalignment with field operations, and lack of technical feasibility validation before coding.',
    valueDeliveredId:
      'Blueprint proses BPMN 2.0 yang terstandarisasi, kejelasan roadmap kebutuhan bisnis, dan eliminasi risiko pengerjaan ulang di tahap rekayasa.',
    valueDeliveredEn:
      'Standardized BPMN 2.0 process blueprints, crystal-clear business requirement roadmaps, and elimination of costly rework during engineering.',
    colorScheme: {
      haloRing:
        'bg-blue-600/25 border-blue-400/50 shadow-[0_0_30px_rgba(37,99,235,0.45)] group-hover:shadow-[0_0_40px_rgba(37,99,235,0.65)] ring-2 ring-blue-400/30',
      coreGradient: 'bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-600/40',
      tagColor: 'text-blue-600',
    },
  },
  {
    pillar: 'Pillar 02',
    titleKey: 'srv-2-title',
    descKey: 'srv-2-desc',
    icon: 'code-2',
    isFeatured: true,
    deliverablesId: ['Next.js / Node', 'API Arsitektur', 'Keamanan Cloud'],
    deliverablesEn: ['Next.js / Node', 'API Architecture', 'Cloud Security'],
    problemSolvedId:
      'Sistem monolith warisan yang lambat, rentan downtime saat lonjakan transaksi, serta keterbatasan integrasi API antar platform modern.',
    problemSolvedEn:
      'Sluggish legacy monolith systems, vulnerability to downtime during transaction spikes, and brittle API integrations across modern platforms.',
    valueDeliveredId:
      'Platform modular cloud-native berkapasitas throughput tinggi, arsitektur microservices yang dapat diskalakan secara independen, dan jaminan uptime 99.9%.',
    valueDeliveredEn:
      'High-throughput cloud-native modular platforms, independently scalable microservices architecture, and 99.9% uptime SLA assurance.',
    colorScheme: {
      haloRing:
        'bg-blue-600/25 border-blue-400/50 shadow-[0_0_30px_rgba(37,99,235,0.45)] group-hover:shadow-[0_0_40px_rgba(37,99,235,0.65)] ring-2 ring-blue-400/30',
      coreGradient: 'bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-600/40',
      tagColor: 'text-blue-600',
    },
  },
  {
    pillar: 'Pillar 03',
    titleKey: 'srv-3-title',
    descKey: 'srv-3-desc',
    icon: 'palette',
    deliverablesId: ['Figma Tokens', 'Prototipe Interaktif', 'Standar WCAG'],
    deliverablesEn: ['Figma Tokens', 'Interactive Prototype', 'WCAG AA'],
    problemSolvedId:
      'Antarmuka yang rumit, tingkat drop-off pengguna yang tinggi, dan ketidaksesuaian aksesibilitas yang menghambat adopsi sistem digital.',
    problemSolvedEn:
      'Complex user journeys, elevated transaction drop-off rates, and accessibility barriers hindering enterprise digital adoption.',
    valueDeliveredId:
      'Desain antarmuka terukur berstandar WCAG AA, design system terpadu, dan pengalaman pengguna mulus yang melipatgandakan retensi dan konversi.',
    valueDeliveredEn:
      'WCAG AA compliant design systems, intuitive user workflows, and friction-free digital experiences that multiply retention and conversion.',
    colorScheme: {
      haloRing:
        'bg-blue-600/25 border-blue-400/50 shadow-[0_0_30px_rgba(37,99,235,0.45)] group-hover:shadow-[0_0_40px_rgba(37,99,235,0.65)] ring-2 ring-blue-400/30',
      coreGradient: 'bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-600/40',
      tagColor: 'text-blue-600',
    },
  },
  {
    pillar: 'Pillar 04',
    titleKey: 'srv-4-title',
    descKey: 'srv-4-desc',
    icon: 'trending-up',
    deliverablesId: ['Growth Analytics', 'Strategi Kanal', 'Optimasi Corong'],
    deliverablesEn: ['Growth Analytics', 'Channel Strategy', 'Funnel Optimization'],
    problemSolvedId:
      'Alokasi anggaran promosi yang tidak terukur, akuisisi prospek yang rendah, dan ketiadaan sinergi antara data riset pasar dengan eksekusi kampanye.',
    problemSolvedEn:
      'Unmeasured marketing spend, poor lead acquisition quality, and lack of synergy between market intelligence and campaign execution.',
    valueDeliveredId:
      'Strategi pertumbuhan terukur berbasis data analitik, corong akuisisi prospek B2B terarah, dan peningkatan otoritas digital brand di industri.',
    valueDeliveredEn:
      'Data-driven measurable growth strategies, targeted B2B client acquisition funnels, and elevated digital brand authority in target industries.',
    colorScheme: {
      haloRing:
        'bg-blue-600/25 border-blue-400/50 shadow-[0_0_30px_rgba(37,99,235,0.45)] group-hover:shadow-[0_0_40px_rgba(37,99,235,0.65)] ring-2 ring-blue-400/30',
      coreGradient: 'bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-600/40',
      tagColor: 'text-blue-600',
    },
  },
];
