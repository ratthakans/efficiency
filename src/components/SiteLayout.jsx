/**
 * SiteLayout — โครงหลักของเว็บไซต์ (Server Component)
 * ประกอบด้วย Background, NavBar และ Footer ที่แสดงทุกหน้า
 */
import Background from '@/components/Background';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-white text-ink">
      <Background />

      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-ink focus:rounded-md focus:shadow-lg focus:text-sm focus:border focus:border-line"
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />

        {/* เว้นที่ให้แถบติดต่อค้างท้ายจอบนมือถือ */}
        <div className="h-[68px] lg:hidden" aria-hidden="true" />
      </div>

      <MobileActionBar />
    </div>
  );
}
