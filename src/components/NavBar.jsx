'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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
              className="label label--ink md:hidden flex items-center justify-center"
              style={{ minWidth: 48, minHeight: 48 }}
            >
              {open ? 'ปิด' : 'เมนู'}
            </button>
          </div>
        </div>
      </div>

      {/* mobile sheet — ruled rows, no overlay, no animation choreography */}
      {open && (
        <div
          id="nav-sheet"
          className="md:hidden bg-paper"
          style={{ borderTop: 'var(--rule-hairline) solid var(--color-rule)' }}
        >
          <div className="shell">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className="flex items-center justify-between"
                style={{
                  minHeight: 56,
                  borderBottom: 'var(--rule-hairline) solid var(--color-rule)',
                  color: isActive(l.href) ? 'var(--color-signal)' : 'var(--color-ink)',
                }}
              >
                <span style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>{l.label}</span>
              </Link>
            ))}
            <div
              className="flex items-center justify-between"
              style={{ minHeight: 56, borderBottom: 'var(--rule-hairline) solid var(--color-rule)' }}
            >
              <span className="label">โหมดหน้าจอ</span>
              <ThemeToggle />
            </div>
            <a
              href={CONTACT.phoneHref}
              className="btn btn--call w-full"
              style={{ marginBlock: 'var(--space-lg)' }}
            >
              โทร {CONTACT.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
