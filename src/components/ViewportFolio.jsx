'use client';

import { useSyncExternalStore } from 'react';

/**
 * The folio — a printed page carries its number in the margin; this one carries
 * its viewport. The breakpoint names are read off the real CSS in globals.css
 * (40rem and 60rem), so the label can never drift from the stylesheet.
 */

function subscribe(onChange) {
  window.addEventListener('resize', onChange, { passive: true });
  return () => window.removeEventListener('resize', onChange);
}

function getSnapshot() {
  const w = window.innerWidth;
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  const band = w < 40 * rem ? 'sm' : w < 60 * rem ? 'md' : 'lg';
  return `${w}×${window.innerHeight}·${band}`;
}

const getServerSnapshot = () => null;

export default function ViewportFolio() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!snapshot) return null;

  const [size, band] = snapshot.split('·');

  return (
    <p
      className="annotation"
      aria-hidden="true"
      style={{
        position: 'fixed',
        insetInlineStart: 0,
        insetBlockEnd: 0,
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 10px',
        background: 'var(--color-paper)',
        borderTop: 'var(--rule-hairline) solid var(--color-rule)',
        borderInlineEnd: 'var(--rule-hairline) solid var(--color-rule)',
        pointerEvents: 'none',
      }}
    >
      <span>{size}</span>
      <span className="annotation--signal">{band}</span>
    </p>
  );
}
