import './globals.css';
import Script from 'next/script';
import { IBM_Plex_Sans_Thai, IBM_Plex_Mono } from 'next/font/google';
import SiteLayout from '@/components/SiteLayout';

// ─── ฟอนต์ ───────────────────────────────────────────────────────
const plexThai = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plex-thai',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-plex-mono',
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const SITE_URL = 'https://efficiency.co.th';
const SITE_TITLE = 'EFFICIENCY | รับออกแบบและพัฒนาเว็บไซต์ · Web Development Studio';
const SITE_DESC =
  'สตูดิโอออกแบบและพัฒนาเว็บไซต์สำหรับธุรกิจไทย ตั้งแต่ Company Profile จนถึง Web System ที่มีสมาชิกและหลังบ้าน แพ็กเกจเริ่มต้น 29,000 บาท ขอบเขตชัดเจน ราคาโปร่งใส';

// ─── Metadata ระดับเว็บไซต์ ───────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | EFFICIENCY',
  },
  description: SITE_DESC,
  keywords: [
    'รับทำเว็บไซต์', 'รับทำเว็บไซต์บริษัท', 'ออกแบบเว็บไซต์',
    'บริษัทรับทำเว็บไซต์', 'ราคาทำเว็บไซต์', 'แพ็กเกจทำเว็บไซต์',
    'Company Profile', 'Web System', 'ระบบจองออนไลน์',
    'Member Portal', 'Web Development Studio Thailand', 'SEO AEO GEO',
  ],
  authors: [{ name: 'EFFICIENCY Co., Ltd.', url: SITE_URL }],
  creator: 'EFFICIENCY Co., Ltd.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: SITE_URL,
    siteName: 'EFFICIENCY',
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  // ใส่โค้ดยืนยันสิทธิ์จาก Search Console ผ่าน NEXT_PUBLIC_GSC_ID ได้ถ้าต้องการ
  // (ถ้ายืนยันผ่าน Google Analytics อยู่แล้ว ไม่ต้องใช้)
  ...(process.env.NEXT_PUBLIC_GSC_ID
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_ID } }
    : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

// ─── JSON-LD ─────────────────────────────────────────────────────
const ORGANISATION_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'EFFICIENCY',
  legalName: 'บริษัท เอฟฟิเชียนซี่ จำกัด',
  alternateName: 'EFFICIENCY Co., Ltd.',
  taxID: '0105568220629',
  hasMap: 'https://maps.app.goo.gl/SFcj3BFkfncTS9jz5',
  description: SITE_DESC,
  url: SITE_URL,
  email: 'hello@efficiency.co.th',
  telephone: '+66638598423',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '246/8 ซอยโยธินพัฒนา แขวงคลองจั่น',
    addressLocality: 'เขตบางกะปิ',
    addressRegion: 'กรุงเทพมหานคร',
    postalCode: '10240',
    addressCountry: 'TH',
  },
  areaServed: 'TH',
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '฿฿',
  knowsLanguage: ['th', 'en'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${plexThai.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANISATION_LD) }}
        />
        <SiteLayout>{children}</SiteLayout>

        {/* Google Analytics 4 — ใช้ฟรี ไม่มีค่าใช้จ่าย
            จะโหลดก็ต่อเมื่อตั้งค่า NEXT_PUBLIC_GA_ID ไว้เท่านั้น
            ถ้าไม่ได้ตั้ง จะไม่มีสคริปต์ใดถูกโหลดเลย */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
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
