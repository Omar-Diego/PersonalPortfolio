import { defineMiddleware } from 'astro:middleware';

// ISO 3166-1 alpha-2 codes for countries where Spanish is a primary/official language.
const SPANISH_SPEAKING_COUNTRIES = new Set([
  'ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO',
  'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'GQ', 'PR', 'AD',
]);

const LANG_COOKIE = 'pf_lang';

// Files (images, styles, build assets, etc.) are always served as-is,
// regardless of locale — they live outside the /en prefix.
const isAsset = (pathname: string) => /\.[a-zA-Z0-9]+$/.test(pathname);

export const onRequest = defineMiddleware((context, next) => {
  const { request, url, cookies } = context;

  if (isAsset(url.pathname)) {
    return next();
  }

  // Once a visitor has an explicit preference (via the language switcher,
  // or a previous auto-redirect), never override it again.
  if (cookies.get(LANG_COOKIE)?.value) {
    return next();
  }

  const isEnglishPath = url.pathname === '/en' || url.pathname.startsWith('/en/');
  if (isEnglishPath) {
    return next();
  }

  const country = request.headers.get('x-vercel-ip-country');
  if (!country) {
    // Not running on Vercel (e.g. local dev) — no geo data available.
    return next();
  }

  const preferEnglish = !SPANISH_SPEAKING_COUNTRIES.has(country);
  if (!preferEnglish) {
    return next();
  }

  cookies.set(LANG_COOKIE, 'en', { path: '/', maxAge: 31536000, sameSite: 'lax' });

  const target = url.pathname === '/' ? '/en/' : `/en${url.pathname}`;
  return context.redirect(target + url.search, 302);
});
