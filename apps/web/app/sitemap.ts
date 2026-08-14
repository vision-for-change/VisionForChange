import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/components/seo';

const ROUTES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/assistance', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/eye-care-guide', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/app', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/mission', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/get-involved', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/updates', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/legal', priority: 0.3, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: route.path === '/' ? BASE_URL : `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
