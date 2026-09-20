export interface WorkflowStep {
  step: string;
  badgeEn: string;
  badgeId: string;
  badgeStyle: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  edgeColor: string;
  numberColor: string;
  lineColor: string;
  titleKey: 'flow-1-title' | 'flow-2-title' | 'flow-3-title' | 'flow-4-title';
  descKey: 'flow-1-desc' | 'flow-2-desc' | 'flow-3-desc' | 'flow-4-desc';
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: '01',
    badgeEn: 'Concept',
    badgeId: 'Fondasi',
    badgeStyle: 'bg-slate-100 text-slate-900 border border-slate-200/80',
    accentColor: '#0284c7',
    glowColor: 'rgba(14, 165, 233, 0.5)',
    borderColor: '#38bdf8',
    edgeColor: '#0369a1',
    numberColor: 'text-slate-900',
    lineColor: 'bg-slate-900',
    titleKey: 'flow-1-title',
    descKey: 'flow-1-desc',
  },
  {
    step: '02',
    badgeEn: 'Governance',
    badgeId: 'Tata Kelola',
    badgeStyle: 'bg-slate-100 text-slate-900 border border-slate-200/80',
    accentColor: '#d97706',
    glowColor: 'rgba(245, 158, 11, 0.45)',
    borderColor: '#f59e0b',
    edgeColor: '#b45309',
    numberColor: 'text-slate-900',
    lineColor: 'bg-slate-900',
    titleKey: 'flow-2-title',
    descKey: 'flow-2-desc',
  },
  {
    step: '03',
    badgeEn: 'Execution',
    badgeId: 'Eksekusi',
    badgeStyle: 'bg-slate-100 text-slate-900 border border-slate-200/80',
    accentColor: '#059669',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    borderColor: '#10b981',
    edgeColor: '#047857',
    numberColor: 'text-slate-900',
    lineColor: 'bg-slate-900',
    titleKey: 'flow-3-title',
    descKey: 'flow-3-desc',
  },
  {
    step: '04',
    badgeEn: 'Delivery',
    badgeId: 'Peluncuran',
    badgeStyle: 'bg-slate-100 text-slate-900 border border-slate-200/80',
    accentColor: '#e11d48',
    glowColor: 'rgba(225, 29, 72, 0.5)',
    borderColor: '#fb7185',
    edgeColor: '#be123c',
    numberColor: 'text-slate-900',
    lineColor: 'bg-slate-900',
    titleKey: 'flow-4-title',
    descKey: 'flow-4-desc',
  },
];
