import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLang(astroCurrentLocale: string | undefined): Lang {
  return astroCurrentLocale === 'en' ? 'en' : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefixes a root-relative path with /en for the English locale. */
export function localizePath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return path === '/' ? '/en/' : `/en${path}`;
}
