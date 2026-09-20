export interface SpectrumColor {
  id: string;
  color: string;
  borderColor: string;
  titleKey:
    | 'spec-purple-title'
    | 'spec-magenta-title'
    | 'spec-orange-title'
    | 'spec-yellow-title'
    | 'spec-green-title'
    | 'spec-cyan-title';
  descKey:
    | 'spec-purple-desc'
    | 'spec-magenta-desc'
    | 'spec-orange-desc'
    | 'spec-yellow-desc'
    | 'spec-green-desc'
    | 'spec-cyan-desc';
}

export const spectrumColors: SpectrumColor[] = [
  {
    id: 'purple',
    color: '#6366F1',
    borderColor: 'border-l-[#6366F1]',
    titleKey: 'spec-purple-title',
    descKey: 'spec-purple-desc',
  },
  {
    id: 'magenta',
    color: '#EC4899',
    borderColor: 'border-l-[#EC4899]',
    titleKey: 'spec-magenta-title',
    descKey: 'spec-magenta-desc',
  },
  {
    id: 'orange',
    color: '#F97316',
    borderColor: 'border-l-[#F97316]',
    titleKey: 'spec-orange-title',
    descKey: 'spec-orange-desc',
  },
  {
    id: 'yellow',
    color: '#EAB308',
    borderColor: 'border-l-[#EAB308]',
    titleKey: 'spec-yellow-title',
    descKey: 'spec-yellow-desc',
  },
  {
    id: 'green',
    color: '#10B981',
    borderColor: 'border-l-[#10B981]',
    titleKey: 'spec-green-title',
    descKey: 'spec-green-desc',
  },
  {
    id: 'cyan',
    color: '#0EA5E9',
    borderColor: 'border-l-[#0EA5E9]',
    titleKey: 'spec-cyan-title',
    descKey: 'spec-cyan-desc',
  },
];
