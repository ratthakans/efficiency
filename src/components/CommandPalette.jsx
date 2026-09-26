'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * ⌘K — the idiom of the tools our audience already lives in.
 *
 * Kept as a shortcut, never as the only way through: the slab nav still carries
 * every destination. Nothing here is decorative; it is faster than the nav for
 * anyone who types.
 */
const DESTINATIONS = [
  { label: 'หน้าแรก', hint: 'home · web design & development', href: '/' },
  { label: 'ผลงาน', hint: 'work · 11 projects', href: '/work' },
  { label: 'มาตรฐานงาน', hint: 'standard · SEO AEO GEO', href: '/standard' },
  { label: 'วิธีทำงาน', hint: 'approach · 4 steps', href: '/approach' },
  { label: 'คำถามที่พบบ่อย', hint: 'faq · price · time', href: '/approach#faq' },
  { label: 'จุดยืนเรื่อง AI', hint: 'taste and intent', href: '/taste-and-intent' },
  { label: 'สตูดิโอ', hint: 'studio · about', href: '/studio' },
  { label: 'ติดต่อ', hint: 'contact · 063 859 8423', href: '/contact' },
];

export const OPEN_EVENT = 'efficiency:palette';

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const returnTo = useRef(null);

  const hits = DESTINATIONS.filter((d) =>
    `${d.label} ${d.hint} ${d.href}`.toLowerCase().includes(query.trim().toLowerCase()),
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActive(0);
    /* hand the keyboard back to whatever opened us */
    returnTo.current?.focus?.();
    returnTo.current = null;
  }, []);

  const go = useCallback(
    (href) => {
      close();
      router.push(href);
    },
    [close, router],
  );

  useEffect(() => {
    const toggle = () => {
      setOpen((v) => {
        if (!v) returnTo.current = document.activeElement;
        return !v;
      });
    };
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggle();
      }
    };
    document.addEventListener('keydown', onKey);
    /* the nav's ⌘K button opens the same panel, so the shortcut is discoverable */
    window.addEventListener(OPEN_EVENT, toggle);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener(OPEN_EVENT, toggle);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const onKeyDown = (e) => {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (hits.length ? (i + 1) % hits.length : 0));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (hits.length ? (i - 1 + hits.length) % hits.length : 0));
    }
    if (e.key === 'Enter' && hits[active]) go(hits[active].href);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="ไปยังหน้าอื่น"
      onKeyDown={onKeyDown}
      className="palette-scrim"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="palette">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          placeholder="พิมพ์เพื่อค้นหาหน้า…"
          aria-label="ค้นหาหน้า"
          className="palette__input"
        />
        <ul className="palette__list">
          {hits.map((d, i) => (
            <li key={d.href}>
              <button
                type="button"
                onClick={() => go(d.href)}
                onMouseEnter={() => setActive(i)}
                className="palette__row"
                data-active={i === active || undefined}
              >
                <span style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>{d.label}</span>
                <span className="annotation">{d.hint}</span>
              </button>
            </li>
          ))}
          {!hits.length && (
            <li className="label" style={{ padding: 'var(--space-lg) var(--space-md)' }}>
              ไม่พบหน้าที่ตรงกับคำค้น
            </li>
          )}
        </ul>
        <p className="annotation palette__foot">↑↓ เลือก · ⏎ ไป · esc ปิด</p>
      </div>
    </div>
  );
}
