// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Adresse du site : à remplacer par ton nom de domaine définitif (ex. https://iaopportunites.com)
const SITE_URL = 'https://ia-opportunites.pages.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // URLs propres sans slash final : /blog/mon-article
  trailingSlash: 'never',
  build: { format: 'file' },
  redirects: {
    '/boutique': '/formations',
  },
  // Précharge une page quand on survole/touche un lien : navigation quasi instantanée
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
});