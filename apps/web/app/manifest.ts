import type { MetadataRoute } from 'next';
import { site } from '@vfc/shared';

/**
 * Web app manifest. Next serves this at `/manifest.webmanifest` and emits
 * the `<link rel="manifest">` tag, so there is no markup to maintain.
 *
 * It is here for installability and for the consistent naming search
 * engines and app surfaces read off it, not because the site is a PWA.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name}: ${site.tagline}`,
    short_name: site.name,
    description: site.definition,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#FBFAF7',
    theme_color: '#16201F',
    lang: 'en-CA',
    categories: ['health', 'education', 'lifestyle'],
    // Served from `public/`, so the paths are stable. The `app/icon.png`
    // convention gets a build hash appended and is not safe to hardcode.
    icons: [
      { src: '/logo.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/logo.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
