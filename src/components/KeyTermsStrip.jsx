import { KEY_TERMS } from '@/lib/content';

/**
 * KeyTermsStrip — เงื่อนไขที่ลูกค้าถามบ่อยที่สุด
 * วางคู่กับการ์ดราคาเสมอ เพื่อไม่ให้ต้องเลื่อนหาอีก 10 กว่าจอ
 */
export default function KeyTermsStrip({ className = '' }) {
  return (
    <div className={`rounded-2xl border border-line bg-white overflow-hidden ${className}`}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line-soft">
        {KEY_TERMS.map((t) => (
          <div key={t.label} className="px-6 py-5">
            <p className="label-th mb-1.5">{t.label}</p>
            <p className="text-[15px] text-ink font-medium leading-snug">{t.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
