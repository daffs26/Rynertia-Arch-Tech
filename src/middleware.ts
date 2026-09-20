import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routeMapEnToId, isValidLocale, defaultLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Root path -> redirect to default locale /id
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  // 2. If pathname already starts with a valid locale (e.g. /id or /en)
  if (isValidLocale(firstSegment)) {
    const locale = firstSegment;
    const subRoute = segments[1];

    // English localized alias rewrites:
    // User sees /en/services in browser URL, but Next.js renders /en/layanan
    if (locale === 'en' && subRoute) {
      const internalIdRoute = routeMapEnToId[subRoute];
      if (internalIdRoute && internalIdRoute !== subRoute) {
        const remaining = segments.slice(2).join('/');
        const internalPath = `/en/${internalIdRoute}${remaining ? `/${remaining}` : ''}`;
        return NextResponse.rewrite(new URL(internalPath, request.url));
      }
    }
    return NextResponse.next();
  }

  // 3. Fallback for non-localized paths (legacy links / direct access)
  const isEnKeyword = [
    'about-us',
    'about',
    'services',
    'solutions',
    'industries',
    'news',
    'organization',
    'contact',
  ].includes(firstSegment);

  const targetLocale = isEnKeyword ? 'en' : 'id';
  const rest = segments.slice(1).join('/');
  const redirectPath = `/${targetLocale}/${firstSegment}${rest ? `/${rest}` : ''}`;

  return NextResponse.redirect(new URL(redirectPath, request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml
     * - static media files (.svg, .png, .jpg, .jpeg, .gif, .webp, .ico, .mp4, .webm)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm)).*)',
  ],
};
