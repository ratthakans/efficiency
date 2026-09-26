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

  /* Adaptive Light, shown rather than told: the new sheet opens as a circle
     from the switch itself. View Transitions snapshot the old page, so the
     reveal costs one clip-path animation and no duplicate DOM. Browsers without
     the API, and anyone who asked for less motion, get the instant swap. */
  /* Read the current mode off the DOM at the moment of switching, not from
     this render: two clicks inside one frame would otherwise both aim at the
     same mode and the second would be lost. */
  const flip = () => apply(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');

  const toggle = (event) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduce) {
      flip();
      return;
    }

    const r = event.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = document.startViewTransition(flip);
    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 560, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' },
        );
      })
      /* skipped — a hidden tab, or a second click before the first finished.
         The theme has already been applied by then; only the reveal is lost. */
      .catch(() => {});
  };

  return (
    <button
      type="button"
      onClick={toggle}
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
          borderRadius: '50%',
          border: '1.5px solid currentColor',
          /* ◐ — the lit half flips with the mode */
          background:
            theme === 'dark'
              ? 'linear-gradient(90deg, transparent 50%, currentColor 50%)'
              : 'linear-gradient(90deg, currentColor 50%, transparent 50%)',
        }}
      />
      {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  );
}
