'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT } from '@/lib/content';
import { trackCall } from '@/lib/track';

export const NAV_LINKS = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'บริการ', href: '/services' },
  { label: 'แพ็กเกจและราคา', href: '/pricing' },
  { label: 'ขั้นตอนการทำงาน', href: '/process' },
  { label: 'ผลงาน', href: '/work' },
  { label: 'เทคโนโลยี', href: '/stack' },
  { label: 'เกี่ยวกับเรา', href: '/about' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const onScroll = useCallback(() => setScrolled(window.scrollY > 12), []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/85 backdrop-blur-xl border-b border-line'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="เมนูหลัก">
        <div className="flex items-center h-[68px] gap-4">

          {/* โลโก้ */}
          <Link href="/" className="flex items-baseline gap-1 mr-auto shrink-0" aria-label="EFFICIENCY — หน้าแรก">
            <span className="font-mono text-[13px] font-semibold tracking-[0.22em] uppercase text-ink">
              EFFICIENCY
            </span>
            <span className="text-brand text-lg font-bold leading-none" aria-hidden="true">.</span>
          </Link>

          {/* เมนูเดสก์ท็อป */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-[14.5px] whitespace-nowrap rounded-md transition-colors duration-200 ${
                    isActive ? 'text-brand-dark font-medium' : 'text-ink-2 hover:text-ink'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-px left-3 right-3 h-[2px] rounded-full bg-brand"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ปุ่มหลัก */}
          <a
            href={CONTACT.phoneHref}
            onClick={() => trackCall('navbar')}
            className="btn btn-primary btn-sm hidden sm:inline-flex shrink-0"
          >
            <Phone size={15} />
            <span className="num">{CONTACT.phone}</span>
          </a>

          {/* ปุ่มเมนูมือถือ */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="xl:hidden p-3 -mr-3 text-ink-2 hover:text-ink transition-colors"
            aria-label={mobileOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* เมนูมือถือ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="xl:hidden bg-white border-t border-line overflow-hidden"
          >
            <div className="px-6 py-5">
              <ul className="divide-y divide-line-soft">
                {NAV_LINKS.map((link) => {
                  const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between py-3.5 text-[16px] ${
                          isActive ? 'text-brand-dark font-medium' : 'text-ink-2'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.label}
                        <ArrowRight size={16} className="opacity-30" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <a
                href={CONTACT.phoneHref}
                onClick={() => trackCall('mobile-menu')}
                className="btn btn-primary w-full mt-5"
              >
                <Phone size={16} />
                โทร <span className="num">{CONTACT.phone}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
