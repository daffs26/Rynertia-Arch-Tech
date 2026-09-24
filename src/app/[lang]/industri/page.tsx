'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ShieldCheck,
  Landmark,
  Radio,
  HeartPulse,
  Truck,
  Factory,
  Building2,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgressBar, BackToTopButton } from '@/components/MotionWrapper';
import { PortfolioItem, portfolioItems } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function IndustriesPage() {
  const { language, t } = useLanguage();

  const sectorList = [
    {
      id: 'banking',
      icon: <Landmark className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      titleId: 'Perbankan & Jasa Keuangan',
      titleEn: 'Banking & Financial Services',
      descId: 'Otomasi persetujuan kredit, integrasi core banking terdistribusi, dan kepatuhan standar transaksi ISO 20022.',
      descEn: 'Credit workflow automation, distributed core banking integration, and global ISO 20022 transaction standards.',
      standards: ['ISO 20022', 'PCI-DSS', 'BPMN 2.0', 'OJK Compliance'],
      keywords: ['bank', 'financial', 'fintech', 'kredit', 'keuangan'],
    },
    {
      id: 'telco',
      icon: <Radio className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      titleId: 'Telekomunikasi & Layanan Digital',
      titleEn: 'Telecommunications & Digital Services',
      descId: 'Orkestrasi alur kerja BSS/OSS, portal mandiri pelanggan, dan penanganan lonjakan transaksi berkonkurensi tinggi.',
      descEn: 'BSS/OSS workflow orchestration, digital customer self-service, and resilient high-concurrency event processing.',
      standards: ['TM Forum Open API', 'Apache Kafka', 'Microservices', 'Kubernetes'],
      keywords: ['telco', 'telekomunikasi', 'provider', 'digital'],
    },
    {
      id: 'healthcare',
      icon: <HeartPulse className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      titleId: 'Layanan Kesehatan & Rumah Sakit',
      titleEn: 'Healthcare & Hospital Systems',
      descId: 'Sistem informasi rumah sakit (HIS) terintegrasi, rekam medis elektronik (EMR), dan interoperabilitas data pasien.',
      descEn: 'Integrated hospital information systems (HIS), standardized electronic medical records (EMR), and patient data interoperability.',
      standards: ['HL7 / FHIR', 'HIPAA', 'SATUSEHAT Ready', 'ISO 27799'],
      keywords: ['kesehatan', 'hospital', 'medis', 'klinik', 'health'],
    },
    {
      id: 'logistics',
      icon: <Truck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      titleId: 'Logistik & Rantai Pasok',
      titleEn: 'Logistics & Supply Chain',
      descId: 'Optimasi sistem manajemen pergudangan (WMS), pelacakan rute armada IoT, dan orkestrasi inventaris real-time.',
      descEn: 'Warehouse management system (WMS) optimization, IoT multimodal fleet dispatch, and real-time inventory synchronization.',
      standards: ['WMS BPMN', 'IoT Telematics', 'Auto-Routing', 'REST API'],
      keywords: ['logistik', 'supply chain', 'gudang', 'fleet', 'transportasi'],
    },
    {
      id: 'manufacturing',
      icon: <Factory className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      titleId: 'Manufaktur & IoT Industri',
      titleEn: 'Manufacturing & Industrial IoT',
      descId: 'Integrasi sensor SCADA ke sistem eksekusi manufaktur (MES), pemantauan OEE perakitan, dan predictive maintenance.',
      descEn: 'SCADA sensor integration into Manufacturing Execution Systems (MES), assembly line OEE monitoring, and predictive maintenance.',
      standards: ['MES', 'SCADA OPC-UA', 'Edge IoT', 'Predictive Analytics'],
      keywords: ['manufaktur', 'pabrik', 'industri', 'iot', 'mes'],
    },
    {
      id: 'governance',
      icon: <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      titleId: 'Sektor Publik & Pemerintahan',
      titleEn: 'Public Sector & Governance',
      descId: 'Portal pelayanan publik terpadu, sistem e-procurement terstandarisasi, serta kepatuhan arsitektur SPBE.',
      descEn: 'Unified citizen service portals, standardized e-procurement architectures, SPBE compliance, and public sector security.',
      standards: ['Arsitektur SPBE', 'E-Procurement', 'ISO 27001', 'Open Data'],
      keywords: ['pemerintah', 'publik', 'governance', 'spbe', 'kementerian'],
    },
  ];

  const getProjectsForSector = (keywords: string[]) => {
    return portfolioItems.filter((p: PortfolioItem) => {
      const text = `${p.clientSectorId} ${p.clientSectorEn} ${p.titleId} ${p.titleEn} ${p.descId}`.toLowerCase();
      return keywords.some((kw: string) => text.includes(kw.toLowerCase()));
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col relative transition-colors duration-200">
      <ScrollProgressBar />
      <Navbar />

      {/* Page Header & Breadcrumb */}
      <section className="bg-slate-950 text-white pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-800 relative overflow-hidden">
        <div
          className="absolute -right-24 -top-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <Link href={`/${language}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t('nav-home')}</span>
            </Link>
            <span>/</span>
            <span className="text-blue-400 font-medium">{t('page-industries-breadcrumb')}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold text-blue-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t('ind-label')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {t('page-industries-heading')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t('page-industries-subheading')}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid with Linked Portfolio Case Studies */}
      <section className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="space-y-10">
            {sectorList.map((sector) => {
              const title = language === 'id' ? sector.titleId : sector.titleEn;
              const desc = language === 'id' ? sector.descId : sector.descEn;
              const matchingProjects = getProjectsForSector(sector.keywords).slice(0, 2);

              return (
                <div
                  key={sector.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-all space-y-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-transparent border border-slate-200/80 dark:border-transparent flex items-center justify-center shrink-0">
                        {sector.icon}
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {title}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 self-start lg:self-center">
                      {sector.standards.map((std, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 px-2.5 py-1 rounded-md"
                        >
                          <CheckCircle2 className="w-3 h-3 text-blue-500" />
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Matching Case Studies */}
                  {matchingProjects.length > 0 && (
                    <div className="space-y-3 pt-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                        {t('page-industries-related-portfolio')} ({matchingProjects.length})
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {matchingProjects.map((proj: PortfolioItem) => (
                          <Link
                            key={proj.id}
                            href={`/${language}/portfolio/${proj.id}`}
                            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50/50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all flex items-center justify-between gap-4 group"
                          >
                            <div className="space-y-1 min-w-0">
                              <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold block">
                                {proj.clientName}
                              </span>
                              <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {language === 'id' ? proj.titleId : proj.titleEn}
                              </h3>
                            </div>
                            <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0 transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </main>
  );
}
