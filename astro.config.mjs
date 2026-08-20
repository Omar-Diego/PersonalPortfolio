// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Pages are rendered on demand (per request) on Vercel. This is what makes
  // src/middleware.ts actually run in front of every page load, so it can
  // read the visitor's country (x-vercel-ip-country) and redirect to /en
  // before the page renders. Pages have no data fetching, so this stays fast.
  output: 'server',
  adapter: vercel(),
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [icon()],
});
