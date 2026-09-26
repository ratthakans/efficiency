'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { PROOF_EVENT } from '@/components/ProofMode';

/**
 * Prints the real thing.
 *
 * Not a drawn code window — hallmark forbids fake IDE chrome, and a mocked
 * snippet would undercut the claim it illustrates. These read the live document:
 * the JSON-LD this page actually ships, and the type scale as the browser
 * resolved it at the current viewport.
 */

const noop = () => () => {};
const server = () => null;

/* ── The page's own structured data ──────────────────────────── */
function readSchema() {
  const node = document.querySelector('script[type="application/ld+json"]');
  if (!node) return null;
  try {
    const json = JSON.parse(node.textContent || '{}');
    const graph = json['@graph'] || [json];
    /* print the shape, not every row of the work collection */
    const shaped = graph.map((n) =>
      n['@type'] === 'CollectionPage'
        ? { ...n, hasPart: `[ ${n.hasPart?.length ?? 0} CreativeWork ]` }
        : n['@type'] === 'FAQPage'
          ? { ...n, mainEntity: `[ ${n.mainEntity?.length ?? 0} Question ]` }
          : n,
    );
    return JSON.stringify({ '@context': json['@context'], '@graph': shaped }, null, 2);
  } catch {
    return null;
  }
}

export function SchemaPrint() {
  const source = useSyncExternalStore(noop, readSchema, server);

  return (
    <div>
      <p className="label">JSON-LD ที่หน้านี้ส่งออกจริง</p>
      <pre
        className="mono mt-4"
        style={{
          margin: 0,
          padding: 'var(--space-lg)',
          background: 'var(--color-paper-2)',
          border: 'var(--rule-hairline) solid var(--color-rule)',
          fontSize: 'var(--text-label)',
          lineHeight: 1.7,
          maxHeight: 420,
          overflow: 'auto',
          whiteSpace: 'pre',
        }}
      >
        <code>{source ?? '// อ่านได้เมื่อหน้าโหลดในเบราว์เซอร์'}</code>
      </pre>
      <p className="prose mt-4" style={{ fontSize: 'var(--text-sm)' }}>
        ไม่ใช่ตัวอย่างที่เขียนไว้ให้ดู แต่เป็นสิ่งเดียวกับที่ Google และผู้ช่วย AI อ่านจากหน้านี้
        ตรวจซ้ำได้จาก View Source
      </p>
    </div>
  );
}

/* ── The type scale as the browser resolved it ──────────────── */
const SCALE = [
  ['--text-display', 'Display'],
  ['--text-display-s', 'Display S'],
  ['--text-4xl', 'Heading'],
  ['--text-xl', 'Lede'],
  ['--text-base', 'Body'],
  ['--text-label', 'Label'],
];

function subscribeResize(onChange) {
  window.addEventListener('resize', onChange, { passive: true });
  return () => window.removeEventListener('resize', onChange);
}

/* A custom property's computed value is still the clamp() declaration — the
   browser only resolves it once it is used as a length. So measure it: set the
   token on an off-screen probe and read back the font-size the browser landed on. */
function readScale() {
  const cs = getComputedStyle(document.documentElement);

  const probe = document.createElement('div');
  probe.setAttribute('aria-hidden', 'true');
  probe.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none;top:-9999px;left:0';
  document.body.appendChild(probe);

  const rows = SCALE.map(([token, name]) => {
    probe.style.fontSize = `var(${token})`;
    const resolved = getComputedStyle(probe).fontSize;
    return `${token}|${name}|${cs.getPropertyValue(token).trim()}|${resolved}`;
  }).join('\n');

  probe.remove();
  return rows;
}

export function TypeScalePrint() {
  const snapshot = useSyncExternalStore(subscribeResize, readScale, server);
  if (!snapshot) return null;

  return (
    <div>
      <p className="label">สเกลตัวอักษร · ค่าที่ประกาศไว้ และค่าที่เบราว์เซอร์คำนวณได้ ณ ความกว้างนี้</p>
      <dl className="defs mt-4" style={{ borderTopColor: 'var(--color-rule-ink)' }}>
        {snapshot.split('\n').map((row) => {
          const [token, name, declared, resolved] = row.split('|');
          return (
            <div
              className="def"
              key={token}
              style={{ gridTemplateColumns: 'minmax(0,5fr) minmax(0,4fr) minmax(0,3fr)', paddingBlock: 'var(--space-sm)' }}
            >
              <dt className="annotation">{token}</dt>
              <dd className="annotation" style={{ overflowWrap: 'anywhere' }}>{declared}</dd>
              <dd className="mono md:text-right" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-ink)' }}>
                {resolved}
              </dd>
            </div>
          );
        })}
      </dl>
      <p className="prose mt-4" style={{ fontSize: 'var(--text-sm)' }}>
        ย่อหรือขยายหน้าต่างแล้วตัวเลขจะขยับตาม เพราะทุกค่าเป็น clamp ที่ไล่ต่อเนื่อง ไม่ใช่ค่าคงที่ต่อ breakpoint
      </p>
    </div>
  );
}

/* ── Invisible Speed, measured on this visit ────────────────────
   The column beside this discipline used to hold a note pointing at Proof
   Mode. Now it holds the numbers themselves, read from the Performance API in
   the visitor's browser. Nothing is typed in; a value the browser withholds
   stays a dash. */
function readSpeed(lcp) {
  const nav = performance.getEntriesByType('navigation')[0];
  const res = performance.getEntriesByType('resource');
  const bytes = (nav?.transferSize || 0) + res.reduce((sum, r) => sum + (r.transferSize || 0), 0);
  return {
    lcp: lcp ? (lcp / 1000).toFixed(1) : null,
    kb: bytes > 0 ? Math.round(bytes / 1024) : null,
    requests: res.length + (nav ? 1 : 0),
    nodes: document.getElementsByTagName('*').length,
  };
}

export function SpeedReadout() {
  const [speed, setSpeed] = useState(null);

  useEffect(() => {
    let lcp;
    let obs;
    try {
      obs = new PerformanceObserver((list) => {
        lcp = list.getEntries().at(-1)?.startTime;
        setSpeed(readSpeed(lcp));
      });
      obs.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {
      /* no LCP in this browser — the other three still read */
    }
    const id = window.setTimeout(() => setSpeed(readSpeed(lcp)), 1200);
    return () => {
      obs?.disconnect();
      window.clearTimeout(id);
    };
  }, []);

  const rows = [
    ['LCP', speed?.lcp, 's', 'เวลาจนภาพหรือข้อความหลักขึ้นจอ'],
    ['Transfer', speed?.kb, 'KB', 'ขนาดที่โหลดจริงของหน้านี้'],
    ['Requests', speed?.requests, '', 'จำนวนไฟล์ที่ขอ'],
    ['DOM nodes', speed?.nodes, '', 'ขนาดของโครงหน้า'],
  ];

  return (
    <div>
      <p className="label">ตัวเลขของหน้านี้ วัดสดในเครื่องคุณ</p>
      <dl className="speed mt-5">
        {rows.map(([k, v, unit, note]) => (
          <div key={k} className="speed__cell">
            <dt className="annotation">{k}</dt>
            <dd className="mono speed__value">
              {v ?? '—'}
              {v != null && unit && <span className="speed__unit">{unit}</span>}
            </dd>
            <dd className="prose" style={{ fontSize: 'var(--text-label)' }}>{note}</dd>
          </div>
        ))}
      </dl>
      <button
        type="button"
        className="btn btn--ghost mt-8"
        onClick={() => window.dispatchEvent(new Event(PROOF_EVENT))}
      >
        เปิด Proof Mode ดูทั้งหมด
      </button>
    </div>
  );
}
