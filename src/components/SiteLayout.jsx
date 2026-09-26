/**
 * SiteLayout — โครงหลักของทุกหน้า
 */
import Background from '@/components/Background';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProofMode from '@/components/ProofMode';
import CallTracking from '@/components/CallTracking';
import ViewportFolio from '@/components/ViewportFolio';
import CommandPalette from '@/components/CommandPalette';

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Background />

      <div className="relative z-10 flex min-h-screen flex-col">
        <a href="#main" className="skip-link">
          ข้ามไปยังเนื้อหาหลัก
        </a>

        <NavBar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </div>

      <ProofMode />
      <CallTracking />
      <ViewportFolio />
      <CommandPalette />
    </div>
  );
}
