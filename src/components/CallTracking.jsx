'use client';

import { useEffect } from 'react';
import { trackCall } from '@/lib/track';

/**
 * Counts every call, from one listener.
 *
 * Fourteen phone links live across eleven server components; wrapping each one
 * in a client component would ship eleven bundles to count one event. A single
 * capture-phase listener covers every `tel:` link on the site — including any
 * added later — and reports where it was pressed.
 */
export default function CallTracking() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target instanceof Element ? event.target.closest('a[href^="tel:"]') : null;
      if (!link) return;

      const region = link.closest('header')
        ? 'navbar'
        : link.closest('.callbar')
          ? 'callbar'
          : link.closest('footer')
          ? 'footer'
          : link.closest('[data-proof]')
            ? 'proof'
            : 'page';

      trackCall(`${region}:${window.location.pathname}`);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
