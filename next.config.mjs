import { createRequire } from 'node:module';

/* The colophon's press run. Resolved at build time, not asserted in copy:
   the Next version comes from the installed package, the date from the build. */
const require = createRequire(import.meta.url);
const NEXT_VERSION = require('next/package.json').version;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Image optimisation ────────────────────────────────────────────
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'qtrypzzcjebvfcihiynt.supabase.co' },
      { protocol: 'https', hostname: 'siamvana.com' },
      { protocol: 'https', hostname: 'uxwing.com' },
      { protocol: 'https', hostname: 'developers.google.com' },
      { protocol: 'https', hostname: 'www.bot.or.th' },
      { protocol: 'https', hostname: 'cdn.auth0.com' },
      { protocol: 'https', hostname: 'static.cdnlogo.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  /* ── Routes retired in the 2026-09 rebrand ─────────────────────────
     These paths were indexed under the old positioning. A permanent
     redirect keeps their standing instead of handing search engines a 404. */
  async redirects() {
    return [
      { source: '/services', destination: '/standard', permanent: true },
      { source: '/stack',    destination: '/standard', permanent: true },
      { source: '/process',  destination: '/approach', permanent: true },
      { source: '/pricing',  destination: '/approach', permanent: true },
      { source: '/about',    destination: '/studio',   permanent: true },
    ];
  },

  // ─── Security & performance headers ────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',            value: 'DENY' },
          { key: 'X-XSS-Protection',           value: '1; mode=block' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',         value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Long-cache for static assets
        source: '/(.*)\\.(ico|svg|png|jpg|jpeg|webp|avif|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  /* ── Build stamp — read by the footer colophon ───────────────────── */
  env: {
    NEXT_PUBLIC_NEXT_VERSION: NEXT_VERSION,
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString().slice(0, 10),
  },

  // ─── Misc ───────────────────────────────────────────────────────────
  poweredByHeader: false,
  compress:        true,
  reactStrictMode: true,

  // Silence the "multiple lockfiles" warning from Turbopack
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
