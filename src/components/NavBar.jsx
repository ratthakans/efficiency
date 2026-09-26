'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CONTACT } from '@/lib/content';
import ThemeToggle from '@/components/ThemeToggle';
import { OPEN_EVENT } from '@/components/CommandPalette';

/**
 * NavBar — N7 Brutal slab
 *
 * Full-width slab, 2px solid rule below, all-caps tracked link row,
 * zero radius, zero shadow. The signal ink is spent on the active marker only.
 */

/* Thai labels: a client scans the bar for ผลงาน and ติดต่อ, not for Approach.
   The URLs stay English, so no redirects were needed. */
export const NAV_LINKS = [
  { label: 'ผลงาน', href: '/work' },
  { label: 'มาตรฐานงาน', href: '/standard' },
  { label: 'วิธีทำงาน', href: '/approach' },
  { label: 'สตูดิโอ', href: '/studio' },
  { label: 'ติดต่อ', href: '/contact' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* while the sheet is open the page behind it must not scroll, and Escape
     closes it — the same contract as the ⌘K palette */
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    /* the sheet lives inside the header's stacking context, so it cannot rise
       above the call bar by z-index — the bar steps aside instead, and the
       sheet shows its own call button */
    document.documentElement.dataset.menu = 'open';
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      delete document.documentElement.dataset.menu;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="relative z-30 bg-paper" style={{ borderBottom: 'var(--rule-hairline) solid var(--color-rule)' }}>
      <div className="shell">
        <div className="flex items-stretch justify-between gap-6" style={{ minHeight: 68 }}>

          {/* wordmark — the period square stands in for the full stop */}
          <Link
            href="/"
            className="flex items-center gap-1 self-stretch"
            aria-label="EFFICIENCY — หน้าแรก"
          >
            <span
              className="label label--ink"
              style={{ fontSize: 15, letterSpacing: '0.18em', fontWeight: 700 }}
            >
              EFFICIENCY
            </span>
            <span className="mark-square" aria-hidden="true" />
          </Link>

          {/* link row — uppercase tracked, single line only (gate 49) */}
          <nav className="hidden md:flex items-stretch" aria-label="เมนูหลัก">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className="label flex items-center px-4 whitespace-nowrap transition-colors"
                style={{
                  /* Thai has no caps; the Latin label tracking only spreads it */
                  fontSize: 'var(--text-sm)',
                  letterSpacing: 0,
                  color: isActive(l.href) ? 'var(--color-ink)' : undefined,
                  /* the active page is underlined in the brand gradient */
                  backgroundImage: isActive(l.href) ? 'var(--gradient-brand)' : undefined,
                  backgroundSize: '100% 3px',
                  backgroundPosition: 'bottom',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
              aria-label="เปิดแผงคำสั่งเพื่อข้ามไปหน้าอื่น"
              title="⌘K"
              className="mono hidden lg:flex items-center justify-center"
              style={{
                minHeight: 34,
                paddingInline: 8,
                marginInlineEnd: 2,
                fontSize: 'var(--text-label)',
                color: 'var(--color-muted)',
              }}
            >
              ⌘K
            </button>
            {/* on phones the switch lives in the menu sheet, so the header
                keeps its width for the wordmark and the menu */}
            <div className="hidden md:flex">
              <ThemeToggle />
            </div>
            <a
              href={CONTACT.phoneHref}
              className="label hidden lg:flex items-center whitespace-nowrap num"
              style={{ letterSpacing: '0.06em', minHeight: 44, paddingInline: 'var(--space-sm)', color: 'var(--color-signal)' }}
            >
              {CONTACT.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="nav-sheet"
              aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
              className="menu-button flex items-center md:hidden"
            >
              <span className="menu-button__icon" data-open={open || undefined} aria-hidden="true">
                <span />
                <span />
              </span>
              <span className="label label--ink">{open ? 'ปิด' : 'เมนู'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* mobile sheet — the whole screen under the header: big targets for a
          thumb, the call at the bottom where the thumb already is */}
      {open && (
        <div id="nav-sheet" className="mobile-menu flex flex-col md:hidden">
          <nav className="shell mobile-menu__links" aria-label="เมนูหลัก (มือถือ)">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className="mobile-menu__link"
              >
                <span>{l.label}</span>
                <span aria-hidden="true" className="mobile-menu__arrow">→</span>
              </Link>
            ))}
          </nav>
          <div className="shell mobile-menu__foot">
            <div className="flex items-center justify-between" style={{ minHeight: 56 }}>
              <span className="label">โหมดหน้าจอ</span>
              <ThemeToggle />
            </div>
            <a href={CONTACT.phoneHref} className="btn btn--call w-full">
              โทร {CONTACT.phone}
            </a>
            <p className="label mt-3 text-center">{CONTACT.hours}</p>
          </div>
        </div>
      )}
    </header>
  );
}
