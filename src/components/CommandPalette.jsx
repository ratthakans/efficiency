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
  { label: 'Home', hint: 'Poetic Engineering', href: '/' },
  { label: 'Selected work', hint: '11 projects', href: '/work' },
  { label: 'Our standard', hint: 'six disciplines', href: '/standard' },
  { label: 'How we work', hint: 'taste · intent · fidelity', href: '/approach' },
  { label: 'Taste and intent', hint: 'the AI position', href: '/taste-and-intent' },
  { label: 'Studio', hint: 'manifesto · personality', href: '/studio' },
  { label: 'Contact', hint: 'โทร 063 859 8423', href: '/contact' },
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
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 70,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '12vh',
        paddingInline: 'var(--gutter)',
        background: 'color-mix(in oklab, var(--color-ink) 42%, transparent)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        style={{
          width: 'min(560px, 100%)',
          background: 'var(--color-paper)',
          border: 'var(--rule-solid) solid var(--color-rule-ink)',
        }}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          placeholder="พิมพ์เพื่อค้นหาหน้า…"
          aria-label="ค้นหาหน้า"
          className="field mono"
          style={{ border: 0, borderBottom: 'var(--rule-hairline) solid var(--color-rule)' }}
        />
        <ul>
          {hits.map((d, i) => (
            <li key={d.href}>
              <button
                type="button"
                onClick={() => go(d.href)}
                onMouseEnter={() => setActive(i)}
                className="flex w-full items-center justify-between gap-4 text-left"
                style={{
                  minHeight: 52,
                  paddingInline: 'var(--space-md)',
                  background: i === active ? 'var(--color-paper-2)' : 'transparent',
                  borderBottom: 'var(--rule-hairline) solid var(--color-rule)',
                }}
              >
                <span style={{ fontSize: 'var(--text-lg)' }}>{d.label}</span>
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
        <p className="annotation" style={{ padding: 'var(--space-sm) var(--space-md)' }}>
          ↑↓ เลือก · ⏎ ไป · esc ปิด
        </p>
      </div>
    </div>
  );
}
