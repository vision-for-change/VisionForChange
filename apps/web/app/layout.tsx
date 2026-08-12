import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { cssVariables, site } from '@vfc/shared';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { BASE_URL, organizationJsonLd } from '@/components/seo';
import './globals.css';

/*
  The fonts are vendored into ./fonts rather than pulled from Google at
  build time. `next/font/google` fetches over the network during the
  build, which fails whenever the build machine cannot reach
  fonts.gstatic.com. These are variable fonts, so one file per style
  covers the whole weight range.
*/
const fraunces = localFont({
  src: [
    { path: './fonts/Fraunces-Variable.woff2', weight: '100 900', style: 'normal' },
    { path: './fonts/Fraunces-Italic-Variable.woff2', weight: '100 900', style: 'italic' },
  ],
  variable: '--font-fraunces',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

const dmSans = localFont({
  src: [{ path: './fonts/DMSans-Variable.woff2', weight: '100 1000', style: 'normal' }],
  variable: '--font-dm-sans',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${site.name}: ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'eye care access',
    'free eye exam help',
    'affordable glasses',
    'youth-led nonprofit',
    'vision health',
    'optometry partnership',
    'Ottawa eye care',
  ],
  authors: [{ name: site.name, url: BASE_URL }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: BASE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'nonprofit',
  formatDetection: { telephone: true, address: false, email: true },
};

export const viewport: Viewport = {
  themeColor: '#16201F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-CA"
      className={`${fraunces.variable} ${dmSans.variable} no-js`}
      // The inline script below strips `no-js` before hydration, so the
      // server and client class lists differ by design.
      suppressHydrationWarning
    >
      <head>
        {/* Design tokens, generated from the shared package. */}
        <style dangerouslySetInnerHTML={{ __html: cssVariables() }} />
        {/*
          Removes the `no-js` class before paint. Without JS the class stays,
          which keeps every scroll-reveal block visible for crawlers.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={organizationJsonLd()} />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
