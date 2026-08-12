import type { Metadata } from 'next';
import { site } from '@vfc/shared';

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

/**
 * Builds per-page metadata with a canonical URL and matching Open Graph
 * and Twitter cards. Every page should call this so no route ships
 * without a canonical or a social preview.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === '/' ? BASE_URL : `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url,
      locale: 'en_CA',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.png'],
    },
  };
}

/** Organization + WebSite structured data, emitted once in the root layout. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NGO',
        '@id': `${BASE_URL}/#organization`,
        name: site.name,
        alternateName: 'VFC',
        url: BASE_URL,
        email: site.email,
        telephone: site.phone,
        description: site.description,
        foundingDate: site.founded,
        sameAs: [site.instagram],
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.locality,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        areaServed: { '@type': 'Country', name: 'Canada' },
        knowsAbout: ['Eye care access', 'Vision health', 'Optometry referrals', 'Screen habits'],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: site.name,
        description: site.description,
        publisher: { '@id': `${BASE_URL}/#organization` },
        inLanguage: 'en-CA',
      },
    ],
  };
}

/** FAQ structured data for the assistance page. */
export function faqJsonLd(items: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** Breadcrumb structured data for interior pages. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.path === '/' ? BASE_URL : `${BASE_URL}${crumb.path}`,
    })),
  };
}
