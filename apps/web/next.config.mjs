const isDev = process.env.NODE_ENV === 'development';

/*
  The dev bundler compiles modules with eval() for hot reloading, so the
  dev CSP has to permit 'unsafe-eval' or hydration fails and the whole
  site renders inert. Production builds contain no eval, so the shipped
  policy stays strict.
*/
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  : "script-src 'self' 'unsafe-inline'";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // The shared package ships TypeScript source, so Next must compile it.
  transpilePackages: ['@vfc/shared'],

  // Security headers. Applied to every route.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Next injects inline bootstrap scripts; JSON-LD is an inline script tag.
              scriptSrc,
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "img-src 'self' data:",
              // Dev needs a websocket back to the bundler for hot reload.
              isDev ? "connect-src 'self' ws: wss:" : "connect-src 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              'upgrade-insecure-requests',
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
