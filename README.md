# Vision for Change

A youth-led eye-care initiative. This repo holds the public website and the
mobile app, sharing one source of truth for design tokens, icons, and copy.

```
packages/shared     Design tokens, icon geometry, and all site copy (TypeScript)
apps/web            Next.js App Router site. Static-rendered, SEO-focused.
apps/mobile         Expo / React Native app. Native bottom-tab navigation.
```

## Why two apps instead of one

React Native produces native views, not HTML, so it cannot be crawled or
indexed. Search visibility has to come from a real web app. Rather than
compromise both, the web app is built for indexing and the mobile app is
built for native interaction. What they share lives in `packages/shared`,
so copy and design changes land on both at once.

## Setup

```bash
npm install
```

Node 20 or newer. npm workspaces links `@vfc/shared` into both apps
automatically, so there is no build step for the shared package.

## Web

```bash
npm run dev
```

Runs at `http://localhost:3000`. Production build:

```bash
npm run build
```

The canonical origin is `https://visionforchange.xyz`, set in
`packages/shared/src/content.ts`. Canonical URLs, the sitemap, `robots.txt`,
and Open Graph tags all derive from it.

Preview and staging deployments should override it so they never emit
canonical tags pointing at production:

```bash
NEXT_PUBLIC_SITE_URL=https://staging.visionforchange.xyz
```

## Mobile

```bash
npm run mobile
```

Then press `i` for the iOS simulator or `a` for Android, or scan the QR code
with Expo Go. Requires Xcode (iOS) or Android Studio.

## Typecheck

```bash
npm run typecheck
```

Runs `tsc --noEmit` across all three workspaces.

## SEO

Handled in the web app:

- Per-page `title`, `description`, and canonical URL via `pageMetadata()` in `apps/web/components/seo.ts`. Pass `absoluteTitle` when the title already contains the organization name, so the `%s | Vision for Change` template does not repeat it
- Open Graph and Twitter card tags on every route, backed by `public/og.png`
- JSON-LD structured data: `NGO`/`Organization` and `WebSite` sitewide, a typed `WebPage` (or `AboutPage`, `ContactPage`, `CollectionPage`) per route, `FAQPage` on the assistance page and the eye-care guide, `MobileApplication` on the app page, and `BreadcrumbList` on interior pages
- `sitemap.xml`, `robots.txt`, and `manifest.webmanifest` generated at build (`app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`)
- Semantic landmarks, one `h1` per page, a skip link, and `aria-current` on the active nav item
- Every page is statically rendered, so crawlers receive complete HTML with no client-side fetch

The canonical is deliberately **not** set in the root layout. A root canonical is
inherited by any route that does not set its own, which would point error pages
at the home page. Every real route sets one through `pageMetadata()`.

`/eye-care-guide` is the content-SEO surface. Each section is an `h2` phrased as
a question people actually search, and the `FAQPage` entries reuse the same
heading and summary strings from `packages/shared/src/content.ts`, so the
structured data cannot drift from what the page says. Anything added there
should stay genuinely useful and keep deferring medical specifics to a
qualified professional.

To verify the site in Google Search Console with the HTML-tag method, set the
token value only (not the whole meta tag):

```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-token-here
```

Left unset, no tag is emitted and the DNS or file methods still work.

Scroll-reveal animations only toggle a CSS class. The content is always in
the HTML, and the `no-js` class on `<html>` keeps everything visible when
scripts do not run, so animation can never hide content from a crawler.

## Security

- Strict TypeScript in all three workspaces (`strict`, `noUncheckedIndexedAccess`)
- CSP, HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` set in `apps/web/next.config.mjs`
- No user input is accepted anywhere: every call to action is a `mailto:`, `tel:`, or external form link, so there is no form handler, no database, and no injection surface
- `dangerouslySetInnerHTML` appears only for JSON-LD and the token stylesheet, both compile-time constants, with `<` escaped in the JSON payload
- Every external link carries `rel="noopener noreferrer"`

## Before launch

Three placeholders are deliberate and need real values:

1. **Metrics** in `packages/shared/src/content.ts` are all `0`. Replace when figures are verified.
2. **Team** entries are placeholder roles with `VC` initials. Replace with real names and photos.
3. **Assistance and partnership CTAs** are `mailto:` links. Swap in a real form URL when one exists.

Also add the app icon and splash assets referenced in `apps/mobile/app.json`.

`apps/web/public/og.png` (1200x630 social preview) and `public/logo.png`
(512x512, referenced by the `Organization` schema and the web manifest) are
generated from the brand mark and committed. Regenerate both if the logo or
tagline changes.

## Fonts

Fraunces and DM Sans are vendored as woff2 in `apps/web/app/fonts` and loaded
with `next/font/local`.

Do not switch these back to `next/font/google`. That variant downloads the
font files from `fonts.gstatic.com` **during the build**, so any build machine
that cannot reach Google Fonts fails the whole deploy. Vendoring them makes
builds deterministic and offline-capable, and the fonts are still self-hosted
at runtime either way.

Both are variable fonts, so one file per style covers the full weight range.
Only the `latin` subset is included, which covers English plus the typographic
punctuation used in the copy. Add other subsets if the copy ever needs them.
Both are licensed under the OFL; the licences sit beside the font files.

The mobile app loads the same families through `@expo-google-fonts`, which
ships the font binaries inside the package, so it has no build-time network
dependency either.

## Icons

`apps/web/app/favicon.ico`, `icon.png`, and `apple-icon.png` are generated from
`Vision-for-change-favicon.jpg` in the repo root: cropped to the badge circle,
masked to a transparent round edge, and quantized. Next.js picks them up by
filename and emits the `<link>` tags automatically, so there is no markup to
maintain. Regenerate them if the logo changes.

The original single-file prototype is kept at `VisionForChange.html` for
reference and can be deleted once this version is deployed.
