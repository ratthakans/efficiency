import './globals.css';
import SiteLayout from '@/components/SiteLayout';

// ─── Site-wide metadata ─────────────────────────────────────────
export const metadata = {
  metadataBase: new URL('https://efficiency.co.th'),
  title: {
    default:  'EFFICIENCY | Digital Systems Studio',
    template: '%s | EFFICIENCY',
  },
  description:
    'We design and build custom software that supports real operations — from architecture to deployment. Based in Bangkok, working globally.',
  keywords: [
    'software development', 'digital systems', 'Bangkok', 'Thailand',
    'custom software', 'system architecture', 'automation', 'backend development',
    'Next.js', 'Flutter', 'PostgreSQL',
  ],
  authors: [{ name: 'EFFICIENCY Co., Ltd.', url: 'https://efficiency.co.th' }],
  creator: 'EFFICIENCY Co., Ltd.',
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://efficiency.co.th',
    siteName:    'EFFICIENCY',
    title:       'EFFICIENCY | Digital Systems Studio',
    description: 'Custom software that supports real operations.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EFFICIENCY Studio' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'EFFICIENCY | Digital Systems Studio',
    description: 'Custom software that supports real operations.',
    images:      ['/og-image.png'],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// ─── Root layout ────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <SiteLayout>
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}
