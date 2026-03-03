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
