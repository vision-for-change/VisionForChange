import type { Metadata } from 'next';
import { site } from '@vfc/shared';

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

/**
 * Builds per-page metadata with a canonical URL and matching Open Graph
 * and Twitter cards. Every page should call this so no route ships
 * without a canonical or a social preview.
 *
 * `title` runs through the root layout's `%s | Vision for Change`
 * template. Pass `absoluteTitle` instead when the title already contains
 * the organization name, so it does not appear twice.
 */
export function pageMetadata({
  title,
  absoluteTitle,
  description,
  path,
}: {
  title: string;
  absoluteTitle?: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === '/' ? BASE_URL : `${BASE_URL}${path}`;
  // Social cards have no template applied, so they always need the full text.
  const socialTitle = absoluteTitle ?? `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: socialTitle,
      description,
      url,
      locale: 'en_CA',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: ['/og.png'],
    },
  };
}

/**
 * Organization + WebSite structured data, emitted once in the root layout.
 *
 * This is the block that tells Google which entity the domain belongs to,
 * so it carries the full identity: legal name, the names people actually
 * search, the logo, contact points, where we operate, and every profile we
 * control. `sameAs` is the link between this site and our social accounts,
 * which is what lets the two be treated as one organization.
 */
export function organizationJsonLd() {
  const organization = {
    '@type': ['NGO', 'Organization'],
    '@id': `${BASE_URL}/#organization`,
    name: site.name,
    legalName: site.name,
    alternateName: ['VFC', 'Vision for Change Ottawa', 'Vision for Change eye care'],
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${BASE_URL}/#logo`,
      url: `${BASE_URL}/logo.png`,
      contentUrl: `${BASE_URL}/logo.png`,
      width: 512,
      height: 512,
      caption: site.name,
    },
    image: `${BASE_URL}/og.png`,
    email: site.email,
    telephone: site.phone,
    description: site.definition,
    slogan: site.tagline,
    foundingDate: site.founded,
    foundingLocation: {
      '@type': 'Place',
      name: `${site.locality}, Ontario, Canada`,
    },
    // No `nonprofitStatus`: that property takes a jurisdiction-specific
    // registration type, and this is a volunteer initiative rather than a
    // registered charity. Claiming one would be a false signal.
    sameAs: [site.instagram],
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Eye-care assistance',
        email: site.email,
        telephone: site.phone,
        areaServed: 'CA',
        availableLanguage: ['en'],
        url: `${BASE_URL}/assistance`,
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Partnerships and sponsorship',
        email: site.email,
        areaServed: 'CA',
        availableLanguage: ['en'],
        url: `${BASE_URL}/get-involved`,
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Ottawa' },
      { '@type': 'AdministrativeArea', name: 'Ontario' },
      { '@type': 'Country', name: 'Canada' },
    ],
    knowsAbout: [
      'Accessible eye care',
      'Affordable eye care',
      'Eye health awareness',
      'Eye health education',
      'Optometrist connections',
      'Eye care for underserved communities',
      'Screen habits and digital eye strain',
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: site.name,
        alternateName: 'Vision for Change Ottawa',
        description: site.definition,
        publisher: { '@id': `${BASE_URL}/#organization` },
        copyrightHolder: { '@id': `${BASE_URL}/#organization` },
        inLanguage: 'en-CA',
      },
    ],
  };
}

/**
 * Marks a route as a specific kind of page and ties it back to the
 * organization, so each URL is attributed to the same entity rather than
 * standing alone.
 */
export function webPageJsonLd({
  type = 'WebPage',
  title,
  description,
  path,
}: {
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage';
  title: string;
  description: string;
  path: string;
}) {
  const url = path === '/' ? BASE_URL : `${BASE_URL}${path}`;
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#organization` },
    publisher: { '@id': `${BASE_URL}/#organization` },
    inLanguage: 'en-CA',
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
