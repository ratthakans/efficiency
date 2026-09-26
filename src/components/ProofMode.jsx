'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Proof Mode — the signature experience.
 *
 * Beauty on the surface. Engineering underneath. Every number here is read from
 * the live document: Performance API, the DOM, matchMedia. Nothing is hard-coded,
 * and a metric the browser will not give us renders as "—" rather than a guess.
 */

const nf = new Intl.NumberFormat('en-US');

function ms(v) {
  return typeof v === 'number' && Number.isFinite(v) ? `${Math.round(v)} ms` : '—';
}

function kb(v) {
  return typeof v === 'number' && v > 0 ? `${nf.format(Math.round(v / 1024))} KB` : '—';
}

function readSemantics() {
  const headings = [...document.querySelectorAll('main h1, main h2, main h3')].map((h) => ({
    level: Number(h.tagName[1]),
    text: (h.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 64),
  }));

  const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap((s) => {
    try {
      const json = JSON.parse(s.textContent || '{}');
      const graph = json['@graph'] || [json];
      return graph.map((n) => n['@type']).filter(Boolean);
    } catch {
      return [];
    }
  });

  const imgs = [...document.images];

  return {
    lang: document.documentElement.lang || '—',
    headings,
    landmarks: document.querySelectorAll('header, nav, main, footer, aside, section[aria-label]').length,
    schemaTypes: ld,
    images: imgs.length,
    /* alt="" is the correct markup for a decorative image, so only a missing
       attribute counts as a fault — an empty string is a deliberate choice. */
    missingAlt: imgs.filter(
      (i) => i.getAttribute('alt') === null && i.getAttribute('aria-hidden') !== 'true',
    ).length,
  };
}

export default function ProofMode() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState('metrics');
  const [m, setM] = useState({});
  const [sem, setSem] = useState(null);
  const [fps, setFps] = useState(null);
  const raf = useRef(0);

  /* Collect what the browser already knows — no synthetic timing. */
  const sample = useCallback(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const paints = performance.getEntriesByType('paint');
    const fcp = paints.find((p) => p.name === 'first-contentful-paint')?.startTime;
    const res = performance.getEntriesByType('resource');
    const transfer =
      (nav?.transferSize || 0) + res.reduce((sum, r) => sum + (r.transferSize || 0), 0);

    setM((prev) => ({
      ...prev,
      ttfb: nav ? nav.responseStart : undefined,
      fcp,
      domInteractive: nav ? nav.domInteractive : undefined,
      transfer,
      requests: res.length + (nav ? 1 : 0),
      nodes: document.getElementsByTagName('*').length,
      viewport: `${window.innerWidth} × ${window.innerHeight}`,
      dpr: window.devicePixelRatio,
      webp: res.filter((r) => r.name.includes('.webp') || r.name.includes('/_next/image')).length,
      reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduce' : 'no-preference',
      theme: document.documentElement.dataset.theme || 'light',
    }));
  }, []);

  /* LCP arrives asynchronously and can update — observe rather than poll. */
  useEffect(() => {
    let obs;
    try {
      obs = new PerformanceObserver((list) => {
        const last = list.getEntries().at(-1);
        if (last) setM((prev) => ({ ...prev, lcp: last.startTime }));
      });
      obs.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {
      /* unsupported — the row renders as "—" */
    }
    return () => obs?.disconnect();
  }, []);

  const openPanel = useCallback(() => {
    sample();
    setSem(readSemantics());
    setOpen(true);
  }, [sample]);

  useEffect(() => {
    if (!open) return undefined;

    const onResize = () => sample();
    window.addEventListener('resize', onResize);

    /* FPS is only measured while the panel is open — measuring costs frames. */
    let frames = 0;
    let start = performance.now();
    const loop = () => {
      frames += 1;
      const now = performance.now();
      if (now - start >= 1000) {
        setFps(Math.round((frames * 1000) / (now - start)));
        frames = 0;
        start = now;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('keydown', onKey);
      cancelAnimationFrame(raf.current);
    };
  }, [open, sample]);

  const metrics = [
    ['LCP', ms(m.lcp)],
    ['TTFB', ms(m.ttfb)],
    ['FCP', ms(m.fcp)],
    ['DOM interactive', ms(m.domInteractive)],
    ['DOM nodes', m.nodes ? nf.format(m.nodes) : '—'],
    ['Transfer size', kb(m.transfer)],
    ['Requests', m.requests ?? '—'],
    ['Optimised images', m.webp ?? '—'],
    ['Viewport', m.viewport ?? '—'],
    ['Device pixel ratio', m.dpr ?? '—'],
    ['Reduced motion', m.reduced ?? '—'],
    ['Theme', m.theme ?? '—'],
    ['Frame rate', fps ? `${fps} fps` : 'measuring…'],
  ];

  return (
    <>
      <button
        type="button"
        onClick={openPanel}
        aria-expanded={open}
        aria-controls="proof-panel"
        className="label label--ink"
        style={{
          position: 'fixed',
          insetInlineEnd: 0,
          insetBlockEnd: open ? 'auto' : 0,
          top: open ? 'auto' : undefined,
          zIndex: 60,
          minHeight: 44,
          paddingInline: 'var(--space-md)',
          background: 'var(--color-paper)',
          borderTop: 'var(--rule-solid) solid var(--color-rule-ink)',
          borderInlineStart: 'var(--rule-solid) solid var(--color-rule-ink)',
          display: open ? 'none' : 'inline-flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span className="mark-square" aria-hidden="true" style={{ marginInlineStart: 0 }} />
        Proof mode
      </button>

      {open && (
        <aside
          id="proof-panel"
          aria-label="Proof mode"
          style={{
            position: 'fixed',
            insetInline: 0,
            insetBlockEnd: 0,
            zIndex: 60,
            background: 'var(--color-paper)',
            borderTop: 'var(--rule-solid) solid var(--color-rule-ink)',
            maxHeight: '62vh',
            overflowY: 'auto',
          }}
        >
          <div className="shell" style={{ paddingBlock: 'var(--space-lg)' }}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-1">
                <p className="label label--ink">Beauty on the surface. Engineering underneath.</p>
              </div>
              <div className="flex items-center gap-0">
                <button
                  type="button"
                  className="filter"
                  aria-pressed={view === 'metrics'}
                  onClick={() => setView('metrics')}
                >
                  Metrics
                </button>
                <button
                  type="button"
                  className="filter"
                  aria-pressed={view === 'semantics'}
                  onClick={() => {
                    setSem(readSemantics());
                    setView('semantics');
                  }}
                >
                  Semantics
                </button>
                <button
                  type="button"
                  className="filter"
                  onClick={() => setOpen(false)}
                  aria-label="ปิด Proof mode"
                >
                  ✕
                </button>
              </div>
            </div>

            {view === 'metrics' ? (
              <div
                className="mt-5 grid"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(210px, 100%), 1fr))',
                  borderTop: 'var(--rule-hairline) solid var(--color-rule)',
                }}
              >
                {metrics.map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      padding: 'var(--space-sm) var(--space-md) var(--space-sm) 0',
                      borderBottom: 'var(--rule-hairline) solid var(--color-rule)',
                    }}
                  >
                    <p className="label">{k}</p>
                    <p className="mono" style={{ fontSize: 'var(--text-lg)', fontWeight: 500 }}>
                      {v}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5 grid gap-x-10 gap-y-6 md:grid-cols-2">
                <div>
                  <p className="label">Heading outline</p>
                  <ol className="mt-3">
                    {sem?.headings.map((h, i) => (
                      <li
                        key={`${h.level}-${i}`}
                        className="flex gap-3 py-1.5"
                        style={{
                          paddingInlineStart: `${(h.level - 1) * 20}px`,
                          borderBottom: 'var(--rule-hairline) solid var(--color-rule)',
                          fontSize: 'var(--text-sm)',
                        }}
                      >
                        <span className="annotation annotation--signal">h{h.level}</span>
                        <span style={{ minWidth: 0, overflowWrap: 'anywhere' }}>{h.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="label">Document</p>
                  <dl className="mt-3">
                    {[
                      ['lang', sem?.lang],
                      ['Landmarks', sem?.landmarks],
                      ['Schema types', sem?.schemaTypes?.join(', ') || '—'],
                      ['Images', sem?.images],
                      ['Images missing alt', sem?.missingAlt],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="flex justify-between gap-6 py-2"
                        style={{
                          borderBottom: 'var(--rule-hairline) solid var(--color-rule)',
                          fontSize: 'var(--text-sm)',
                        }}
                      >
                        <dt className="label">{k}</dt>
                        <dd className="mono" style={{ textAlign: 'end', minWidth: 0, overflowWrap: 'anywhere' }}>
                          {String(v ?? '—')}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}

            <p className="label mt-5">
              ตัวเลขทั้งหมดอ่านจากเอกสารหน้านี้ในเครื่องคุณ ณ ขณะนี้ · กด Esc เพื่อปิด
            </p>
          </div>
        </aside>
      )}
    </>
  );
}
