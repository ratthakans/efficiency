'use client';

import { useEffect, useState } from 'react';

/**
 * Performance should be invisible — the proof of it does not have to be.
 *
 * Three numbers, measured live on the visitor's own machine, printed in the
 * colophon like a press run. A studio that prints its page weight at the bottom
 * of every page has to keep it honest.
 */
export default function PerformanceFolio() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let lcp;

    const read = () => {
      const nav = performance.getEntriesByType('navigation')[0];
      const res = performance.getEntriesByType('resource');
      const transfer =
        (nav?.transferSize || 0) + res.reduce((sum, r) => sum + (r.transferSize || 0), 0);

      setStats({
        kb: transfer > 0 ? Math.round(transfer / 1024) : null,
        nodes: document.getElementsByTagName('*').length,
        lcp: lcp ? (lcp / 1000).toFixed(1) : null,
      });
    };

    let obs;
    try {
      obs = new PerformanceObserver((list) => {
        lcp = list.getEntries().at(-1)?.startTime;
        read();
      });
      obs.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {
      /* unsupported — the figure simply stays out */
    }

    /* let the page settle before counting what it cost */
    const id = window.setTimeout(read, 1200);

    return () => {
      obs?.disconnect();
      window.clearTimeout(id);
    };
  }, []);

  if (!stats) return null;

  const parts = [
    stats.kb !== null ? `${stats.kb} KB` : null,
    `${stats.nodes} nodes`,
    stats.lcp ? `LCP ${stats.lcp}s` : null,
  ].filter(Boolean);

  return (
    <p className="annotation" title="วัดสดจากหน้านี้ในเครื่องคุณ">
      {parts.join(' · ')}
    </p>
  );
}
