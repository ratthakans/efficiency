import './globals.css';
import Script from 'next/script';
import { IBM_Plex_Sans_Thai, IBM_Plex_Mono } from 'next/font/google';
import SiteLayout from '@/components/SiteLayout';
import ThemeScript from '@/components/ThemeScript';
import { CONTACT, PROJECTS, FAQS } from '@/lib/content';

/* One grotesk across the whole page — the Grid theme allows no second family.
   IBM Plex Sans Thai stands in for Archivo because it carries Thai. */
const plexThai = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  /* 500 is only ever set in the mono; loading it here preloaded two unused
     files on every page */
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-plex-thai',
});

/* The machine voice. Four weights would be waste — the mono only ever sets
   values, so one regular and one medium carry every use on the site. */
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const SITE_URL = 'https://efficiency.co.th';
const SITE_TITLE = 'EFFICIENCY | ออกแบบและพัฒนาเว็บไซต์ · Poetic Engineering';
const SITE_DESC =
  'ออกแบบและพัฒนาเว็บไซต์ ที่ทั้งคน Google และ AI อ่านเข้าใจ — SEO · AEO · GEO โดย Digital Craft Studio ในกรุงเทพฯ ดูผลงานจริง 11 โครงการ หรือโทร 063 859 8423';

/* the browser chrome on phones takes the page's paper colour in each mode */
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0f16' },
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: '%s | EFFICIENCY' },
  description: SITE_DESC,
  keywords: [
    'digital craft studio', 'web design and development studio', 'รับทำเว็บไซต์', 'ออกแบบเว็บไซต์',
    'พัฒนาเว็บแอป', 'Next.js Thailand', 'SEO', 'AEO', 'GEO',
    'Answer Engine Optimization', 'Generative Engine Optimization',
    'Structured Data', 'เว็บไซต์องค์กร',
  ],
  authors: [{ name: CONTACT.companyEn, url: SITE_URL }],
  creator: CONTACT.companyEn,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: SITE_URL,
    siteName: 'EFFICIENCY',
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  twitter: { card: 'summary_large_image', title: SITE_TITLE, description: SITE_DESC },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  ...(process.env.NEXT_PUBLIC_GSC_ID
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_ID } }
    : {}),
};

/* Structured data — this is the GEO surface the site itself sells.
   Organisation, the service, and the FAQ, all machine-readable on every page. */
const LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}#org`,
      name: 'EFFICIENCY',
      legalName: CONTACT.companyTh,
      alternateName: CONTACT.companyEn,
      taxID: CONTACT.registrationNo,
      description: SITE_DESC,
      url: SITE_URL,
      email: CONTACT.email,
      telephone: '+66638598423',
      hasMap: CONTACT.mapsUrl,
      openingHours: 'Mo-Fr 09:00-18:00',
      areaServed: 'TH',
      knowsLanguage: ['th', 'en'],
      knowsAbout: [
        'Web development',
        'Search engine optimization',
        'Answer engine optimization',
        'Generative engine optimization',
        'Structured data',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '246/8 ซอยโยธินพัฒนา แขวงคลองจั่น',
        addressLocality: 'เขตบางกะปิ',
        addressRegion: 'กรุงเทพมหานคร',
        postalCode: '10240',
        addressCountry: 'TH',
      },
    },
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/work#collection`,
      name: 'ผลงาน',
      about: { '@id': `${SITE_URL}#org` },
      hasPart: PROJECTS.map((p) => ({
        '@type': 'CreativeWork',
        name: p.name,
        url: p.url,
        abstract: p.summary,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/approach#faq`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${plexThai.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }}
        />
        <SiteLayout>{children}</SiteLayout>

        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
