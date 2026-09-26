import Link from 'next/link';
import { CONTACT } from '@/lib/content';
import PerformanceFolio from '@/components/PerformanceFolio';

/**
 * Footer — Ft4 Dense colophon
 *
 * A printed colophon: caps labels, tabular meta, hairline-split cells, the
 * registration mark as a folio device. No link columns, no social row.
 */

const SITE = [
  { label: 'Selected work', href: '/work' },
  { label: 'Our standard', href: '/standard' },
  { label: 'How we work', href: '/approach' },
  { label: 'Taste and intent', href: '/taste-and-intent' },
  { label: 'Studio', href: '/studio' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rule-top">
      <div className="shell">
        <div className="grid gap-x-8 gap-y-10 py-14 md:grid-cols-[minmax(0,5fr)_minmax(0,3fr)_minmax(0,4fr)]">

          {/* colophon — who made this and what it is */}
          <div>
            <div className="flex items-center gap-1">
              <span className="label label--ink" style={{ fontSize: 15, letterSpacing: '0.18em', fontWeight: 700 }}>
                EFFICIENCY
              </span>
              <span className="mark-square" aria-hidden="true" />
            </div>
            <p className="prose mt-4" style={{ fontSize: 'var(--text-sm)' }}>
              Digital Craft Studio ในกรุงเทพฯ
              เรากำจัดแรงเสียดทานที่ไม่จำเป็น โดยไม่ตัดอารมณ์และรายละเอียดทิ้งไปพร้อมกัน
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="mark-register" aria-hidden="true" />
              <span className="label">{CONTACT.companyEn}</span>
            </div>
          </div>

          {/* index */}
          <nav aria-label="เมนูส่วนท้าย">
            <p className="label mb-4">สารบัญ</p>
            <ul>
              {SITE.map((l) => (
                <li key={l.href} style={{ borderTop: 'var(--rule-hairline) solid var(--color-rule)' }}>
                  <Link
                    href={l.href}
                    className="flex items-center whitespace-nowrap transition-colors hover:text-[var(--color-signal)]"
                    style={{ minHeight: 44, fontSize: 'var(--text-sm)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* meta — tabular, mono-ish via tabular-nums */}
          <div>
            <p className="label mb-4">ติดต่อ</p>
            <dl className="defs" style={{ borderTopWidth: 'var(--rule-hairline)', borderTopColor: 'var(--color-rule)' }}>
              <div className="def" style={{ paddingBlock: 'var(--space-sm)' }}>
                <dt className="label">โทร</dt>
                <dd>
                  <a href={CONTACT.phoneHref} className="num whitespace-nowrap hover:text-[var(--color-signal)]" style={{ fontSize: 'var(--text-sm)' }}>
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div className="def" style={{ paddingBlock: 'var(--space-sm)' }}>
                <dt className="label">อีเมล</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`} className="whitespace-nowrap hover:text-[var(--color-signal)]" style={{ fontSize: 'var(--text-sm)' }}>
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div className="def" style={{ paddingBlock: 'var(--space-sm)' }}>
                <dt className="label">ที่ตั้ง</dt>
                <dd style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                  {CONTACT.address[0]}
                  <br />
                  {CONTACT.address[1]}
                  <br />
                  <a
                    href={CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link mt-2"
                    style={{ fontSize: 'var(--text-sm)' }}
                  >
                    แผนที่
                  </a>
                </dd>
              </div>
              <div className="def" style={{ paddingBlock: 'var(--space-sm)' }}>
                <dt className="label">เวลาทำการ</dt>
                <dd style={{ fontSize: 'var(--text-sm)' }}>{CONTACT.hours}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* folio line */}
        <div
          className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-6"
          style={{ borderTop: 'var(--rule-hairline) solid var(--color-rule)' }}
        >
          <p className="label">
            © {year} {CONTACT.companyTh} · ทะเบียน <span className="num">{CONTACT.registrationNo}</span>
          </p>
          <p className="label flex items-center gap-4">
            <Link href="/privacy" className="whitespace-nowrap hover:text-[var(--color-signal)]">
              ความเป็นส่วนตัว
            </Link>
            <Link href="/terms" className="whitespace-nowrap hover:text-[var(--color-signal)]">
              เงื่อนไขบริการ
            </Link>
          </p>
        </div>

        {/* press run — what this page is made of, and what it cost */}
        <div
          className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2"
          /* the extra foot clears the two fixed chips — Proof Mode at the
             bottom-right, the viewport folio at the bottom-left — which would
             otherwise sit on this line once the page is scrolled to its end */
          style={{
            borderTop: 'var(--rule-hairline) solid var(--color-rule)',
            paddingTop: 'var(--space-lg)',
            paddingBottom: 'var(--space-3xl)',
          }}
        >
          <p className="annotation">
            Next.js {process.env.NEXT_PUBLIC_NEXT_VERSION} · built {process.env.NEXT_PUBLIC_BUILD_DATE} · Poetic
            Engineering
          </p>
          <PerformanceFolio />
        </div>
      </div>
    </footer>
  );
}
