/**
 * SiteLayout — Server Component shell.
 *
 * Renders the persistent chrome (Background, NavBar, Footer).
 * NavBar is 'use client'; everything else is server-rendered.
 */
import Background from '@/components/Background';
import NavBar     from '@/components/NavBar';
import Footer     from '@/components/Footer';

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Fixed full-screen background — aria-hidden, no DOM weight */}
      <Background />

      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />

        {/* Skip-to-content link for assistive tech */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded focus:text-sm focus:font-mono"
        >
          Skip to main content
        </a>

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
