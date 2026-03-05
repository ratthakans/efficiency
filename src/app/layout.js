import './globals.css';
import SiteLayout from '@/components/SiteLayout';

// ─── Site-wide metadata ─────────────────────────────────────────
export const metadata = {
  metadataBase: new URL('https://efficiency.co.th'),
  title: {
    default:  'EFFICIENCY | Mobile App · POS · Embedded Software Studio',
    template: '%s | EFFICIENCY',
  },
  description:
    'Efficiency is a Mobile Engineering Studio based in Bangkok, Thailand — specialising in Mobile App (iOS/Android/Flutter), POS & Operational Systems, and Embedded & Device Software. Starting from ฿375,000.',
  keywords: [
    'mobile app development Thailand', 'Flutter developer Bangkok', 'iOS Android app',
    'POS system Thailand', 'embedded software', 'IoT development',
    'mobile engineering studio', 'UX UI mobile', 'app development Bangkok',
    'embedded device', 'Efficiency software studio Bangkok',
  ],
  authors: [{ name: 'EFFICIENCY Co., Ltd.', url: 'https://efficiency.co.th' }],
  creator: 'EFFICIENCY Co., Ltd.',
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://efficiency.co.th',
    siteName:    'EFFICIENCY',
    title:       'EFFICIENCY | Mobile App · POS · Embedded Software Studio',
    description: 'Mobile Engineering Studio — Mobile App, POS Systems, Embedded Software. Starting from ฿375,000.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EFFICIENCY — Mobile Engineering Studio' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'EFFICIENCY | Mobile App · POS · Embedded Software',
    description: 'Mobile Engineering Studio in Bangkok, Thailand — from ฿375,000.',
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
