'use client';

import { useSyncExternalStore } from 'react';

/**
 * The studio's local time. A phone-first studio is answering in Bangkok, and
 * the visitor may not be — this says what time it is at the other end of the
 * call before they dial. Machine-emitted, so it speaks mono.
 */
const format = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Bangkok',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

function subscribe(onChange) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

const getSnapshot = () => format.format(new Date());
const getServerSnapshot = () => null;

export default function StudioClock() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!time) return null;

  return (
    <p className="annotation">
      Bangkok · <time>{time}</time> ICT
    </p>
  );
}
