'use client';

import Link from 'next/link';
import { ArrowRight, Clock, LayoutGrid } from 'lucide-react';
import { accentAt } from '@/lib/accents';
import { PRICE_NOTE } from '@/lib/content';

/**
 * PackageCard — การ์ดแพ็กเกจแบบย่อ ใช้ทั้งหน้าแรกและหน้าแพ็กเกจ
 */
export default function PackageCard({ pkg, href, ctaLabel = 'ดูรายละเอียด' }) {
  const target = href ?? `/pricing#${pkg.key}`;
  const accent = accentAt(pkg.accentIdx);

  return (
    <div
      className={`card card-hover flex flex-col h-full p-6 md:p-7 ${
        pkg.featured ? 'ring-1 ring-brand/25 shadow-md' : ''
      }`}
      style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
    >
      {/* แถบสีด้านบน */}
      <span
        className="absolute inset-x-0 top-0 h-[3px] rounded-t-[18px]"
        style={{ background: accent.hex, opacity: pkg.featured ? 1 : 0.55 }}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <p className="font-mono text-[13px] font-semibold tracking-[0.16em]" style={{ color: accent.hex }}>
            {pkg.name}
          </p>
          <p className="text-[15px] text-ink font-medium mt-1">{pkg.tagline}</p>
        </div>
        {pkg.featured && (
          <span className="pill pill-brand text-[11.5px] px-2.5 py-1 shrink-0">แพ็กเกจแนะนำ</span>
        )}
      </div>

      <div className="flex items-baseline gap-1.5 mb-1">
        {pkg.prefix && <span className="text-[13px] text-ink-3">{pkg.prefix}</span>}
        <span className="num text-[34px] md:text-[38px] font-semibold text-ink leading-none">
          {pkg.priceLabel}
        </span>
        <span className="text-[15px] text-ink-3">บาท</span>
      </div>
      <p className="text-[12.5px] text-ink-3 mb-2">{PRICE_NOTE}</p>
      <p className="text-[14px] text-ink-3 mb-5">{pkg.subtitle}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {pkg.highlights.map((h) => (
          <span key={h} className="tag">{h}</span>
        ))}
      </div>

      <div className="mt-auto pt-5 border-t border-line-soft space-y-2.5">
        <p className="flex items-center gap-2 text-[14px] text-ink-2">
          <LayoutGrid size={15} className="text-ink-3 shrink-0" />
          ขอบเขต <span className="text-ink font-medium">{pkg.scope}</span>
        </p>
        <p className="flex items-center gap-2 text-[14px] text-ink-2">
          <Clock size={15} className="text-ink-3 shrink-0" />
          ใช้เวลา <span className="text-ink font-medium">{pkg.duration}</span>
        </p>

        <Link
          href={target}
          className={`btn btn-sm w-full mt-4 ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
        >
          {ctaLabel}
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
