'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACCENTS } from '@/lib/accents';

export const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work',     href: '/work' },
  { label: 'Pricing',  href: '/pricing' },
  { label: 'Process',  href: '/process' },
  { label: 'Stack',    href: '/stack' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export default function NavBar() {
  const pathname                    = usePathname();
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeIdx = NAV_LINKS.findIndex(l => l.href === pathname);
  const accent    = ACCENTS[activeIdx >= 0 ? activeIdx % ACCENTS.length : 0];

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/[0.06]' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center h-[60px]">

          {/* Logo — left */}
          <Link href="/" className="flex items-center gap-1.5 group mr-auto" aria-label="EFFICIENCY — home">
            <span className="text-[11px] font-mono font-bold tracking-[0.28em] uppercase text-white">
              EFFICIENCY
            </span>
            <span
              className="font-mono font-bold text-base leading-none transition-all duration-300"
              style={{ color: accent.hex, textShadow: `0 0 14px ${accent.hex}80` }}
            >
              .
            </span>
            <motion.span
              className="inline-block w-[2px] h-3 ml-px rounded-sm"
              style={{ backgroundColor: accent.hex }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            />
          </Link>

          {/* Desktop nav — right aligned */}
          <div className="hidden md:flex items-center gap-[2px]" role="list">
            {NAV_LINKS.map((link, i) => {
              const isActive   = pathname === link.href;
              const linkAccent = ACCENTS[i % ACCENTS.length];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  role="listitem"
                  className="relative px-3 py-2 text-[12.5px] font-medium tracking-wide"
                  style={{ color: isActive ? linkAccent.hex : undefined }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={isActive ? '' : 'text-white/45 hover:text-white/85 transition-colors duration-250'}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0.5 left-2.5 right-2.5 h-px"
                      style={{
                        backgroundColor: linkAccent.hex,
                        boxShadow: `0 0 6px ${linkAccent.hex}`,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA button — desktop, far right */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-[11.5px] font-mono font-semibold text-black rounded-sm transition-all duration-300 ml-5 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)', boxShadow: '0 0 18px rgba(97,175,239,0.22)' }}
          >
            Get Assessment
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden p-2 text-white/50 hover:text-white transition-colors ml-auto"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden bg-black/97 backdrop-blur-2xl border-t border-white/[0.05] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {NAV_LINKS.map((link, i) => {
                const isActive   = pathname === link.href;
                const linkAccent = ACCENTS[i % ACCENTS.length];
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 py-3 text-[15px] font-medium transition-colors duration-300"
                    style={{ color: isActive ? linkAccent.hex : 'rgba(255,255,255,0.45)' }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: linkAccent.hex, boxShadow: `0 0 6px ${linkAccent.hex}` }}
                        aria-hidden="true"
                      />
                    )}
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-5 border-t border-white/[0.05]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-semibold text-black rounded-sm"
                  style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)' }}
                >
                  Get Assessment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
