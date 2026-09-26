'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { scrollSeconds } from '@/lib/scroll';

/**
 * Hover a project and read the whole site, top to bottom, without leaving.
 *
 * The full-page capture is 100–180 KB, so it is not in the page at all until a
 * mouse (or a keyboard focus ring) arrives on the card — a phone never fetches
 * it. The scroll itself is CSS: a transform to calc(-100% + 100cqh), so it runs
 * on the compositor and needs no measuring. Duration follows the page's length
 * so a long site does not race past.
 */
export default function ScrollPreview({ src, height }) {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const cell = ref.current?.closest('[data-scroll-host]');
    if (!cell || armed) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const onPointer = (e) => {
      if (e.pointerType === 'mouse') setArmed(true);
    };
    const onFocus = () => {
      if (cell.matches(':focus-visible')) setArmed(true);
    };
    cell.addEventListener('pointerenter', onPointer);
    cell.addEventListener('focusin', onFocus);
    return () => {
      cell.removeEventListener('pointerenter', onPointer);
      cell.removeEventListener('focusin', onFocus);
    };
  }, [armed]);

  const seconds = scrollSeconds(height);

  return (
    <div
      ref={ref}
      className="scroll-preview"
      data-ready={ready || undefined}
      aria-hidden="true"
      style={{ '--scroll-dur': `${seconds}s` }}
    >
      {armed && (
        <Image
          src={src}
          alt=""
          width={800}
          height={height}
          sizes="(max-width: 40rem) 100vw, (max-width: 72rem) 50vw, 33vw"
          onLoad={() => setReady(true)}
        />
      )}
    </div>
  );
}
