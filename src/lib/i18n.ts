import { Language } from '@/data/translations';

export const locales: readonly Language[] = ['id', 'en'] as const;
export const defaultLocale: Language = 'id';

export const routeMapIdToEn: Record<string, string> = {
  '': '',
  'tentang-kami': 'about-us',
  'layanan': 'services',
  'solusi': 'solutions',
  'industri': 'industries',
  'berita': 'news',
  'organisasi': 'organization',
  'kontak': 'contact',
  'portfolio': 'portfolio',
  'team': 'team',
};

export const routeMapEnToId: Record<string, string> = {
  '': '',
  'about-us': 'tentang-kami',
  'about': 'tentang-kami',
  'services': 'layanan',
  'solutions': 'solusi',
  'industries': 'industri',
  'news': 'berita',
  'organization': 'organisasi',
  'contact': 'kontak',
  'portfolio': 'portfolio',
  'team': 'team',
};

export function isValidLocale(lang: string): lang is Language {
  return (locales as readonly string[]).includes(lang);
}

/**
 * Returns the corresponding localized path for a given path and target locale.
 * Preserves search queries and hash fragments.
 */
export function getLocalizedPath(pathname: string, targetLocale: Language): string {
  if (!pathname) return `/${targetLocale}`;

  let path = pathname;
  let hash = '';
  let search = '';

  const hashIndex = path.indexOf('#');
  if (hashIndex !== -1) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  const searchIndex = path.indexOf('?');
  if (searchIndex !== -1) {
    search = path.slice(searchIndex);
    path = path.slice(0, searchIndex);
  }

  const segments = path.split('/').filter(Boolean);

  let pathSegments = segments;

  if (segments.length > 0 && isValidLocale(segments[0])) {
    pathSegments = segments.slice(1);
  }

  if (pathSegments.length === 0) {
    return `/${targetLocale}${search}${hash}`;
  }

  const primarySegment = pathSegments[0];
  const restSegments = pathSegments.slice(1);

  let translatedSegment = primarySegment;
  if (targetLocale === 'en') {
    translatedSegment = routeMapIdToEn[primarySegment] || primarySegment;
  } else {
    translatedSegment = routeMapEnToId[primarySegment] || primarySegment;
  }

  const resultSegments = [targetLocale, translatedSegment, ...restSegments];
  return `/${resultSegments.join('/')}${search}${hash}`;
}
