import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/components/seo';

/*
  `lastModified` is a hand-maintained date per route, not the build time.
  Stamping every URL with `new Date()` on each deploy tells Google the whole
  site changed whenever anything did, and a lastmod that is always "now" is
  a value crawlers learn to ignore. Bump a route's date when its content
  actually changes.
*/
type Route = {
  path: string;
  priority: number;
  changeFrequency: 'weekly' | 'monthly';
  lastModified: string;
};

const ROUTES: Route[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly', lastModified: '2026-08-25' },
  { path: '/assistance', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-08-25' },
  { path: '/eye-care-guide', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-08-14' },
  { path: '/app', priority: 0.8, changeFrequency: 'weekly', lastModified: '2026-08-14' },
  { path: '/mission', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-08-14' },
  { path: '/get-involved', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-08-25' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-08-25' },
  { path: '/updates', priority: 0.7, changeFrequency: 'weekly', lastModified: '2026-08-14' },
  { path: '/legal', priority: 0.3, changeFrequency: 'monthly', lastModified: '2026-08-14' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: route.path === '/' ? BASE_URL : `${BASE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
