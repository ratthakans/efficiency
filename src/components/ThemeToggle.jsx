'use client';

import { useSyncExternalStore } from 'react';

/**
 * Adaptive Light switch.
 *
 * The chosen mode is written to <html data-theme> and remembered. Nothing else
 * in the app reads a JS theme value — every surface follows the token set, so a
 * mode change is one attribute, not a re-render of the page.
 */
/* <html data-theme> is the source of truth, so subscribe to it rather than
   mirroring it into React state. */
function subscribe(onChange) {
  const obs = new MutationObserver(onChange);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => obs.disconnect();
}

const getSnapshot = () => document.documentElement.dataset.theme || 'light';
const getServerSnapshot = () => 'light';

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const apply = (value) => {
    document.documentElement.dataset.theme = value;
    try {
      localStorage.setItem('theme', value);
    } catch {
      /* private mode — the choice simply lasts for this visit */
    }
  };

  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => apply(next)}
      className="label label--ink flex items-center gap-2 whitespace-nowrap"
      style={{ minHeight: 44, paddingInline: 'var(--space-sm)' }}
      aria-label={`สลับเป็นโหมด${next === 'dark' ? 'มืด' : 'สว่าง'}`}
      title="Adaptive Light"
    >
      <span
        aria-hidden="true"
        style={{
          width: 14,
          height: 14,
          border: 'var(--rule-solid) solid currentColor',
          background: theme === 'dark' ? 'currentColor' : 'transparent',
        }}
      />
      {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  );
}
