import Link from 'next/link';
import { Band, SectionHead } from '@/components/ui/Section';
import { AdaptiveLightDemo, TypeRhythmDemo, FluidCanvasDemo, MotionIntentDemo } from '@/components/Demos';
import { SchemaPrint, SpeedReadout, TypeScalePrint } from '@/components/RealSource';
import { DISCIPLINES, CONTACT } from '@/lib/content';

export const metadata = {
  title: 'มาตรฐานงาน · SEO AEO GEO',
  description:
    'มาตรฐานงานคราฟต์หกด้านของ EFFICIENCY — Adaptive Light, Editorial Type, Fluid Space, Invisible Speed, Intentional Motion และ Machine-Readable Meaning พร้อมของจริงให้ลองเอง',
  alternates: { canonical: '/standard' },
};

const DEMOS = {
  'adaptive-light': AdaptiveLightDemo,
  'type-rhythm': TypeRhythmDemo,
  'fluid-canvas': FluidCanvasDemo,
  'motion-intent': MotionIntentDemo,
  semantic: SchemaPrint,
  proof: SpeedReadout,
};

export default function StandardPage() {
  return (
    <>
      <Band tight className="has-mesh has-mesh--bleed page-top">
        <div className="mesh mesh--page" aria-hidden="true" style={{ right: '-18%', top: '-58%' }} />
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-s" style={{ maxWidth: '14ch' }}>Our standard of craft.</h1>
            <p className="lede mt-7">
              หกด้านนี้ไม่ใช่รายการฟีเจอร์ที่เลือกซื้อเพิ่ม แต่เป็นมาตรฐานที่ใช้กับทุกโครงการ
              และส่วนใหญ่พิสูจน์ได้เองบนหน้านี้
            </p>
          </div>
        </div>
      </Band>

      {DISCIPLINES.map((d, i) => {
        const Demo = DEMOS[d.demo];
        const flip = i % 2 === 1;
        return (
          <Band key={d.key} rule="ink">
            <div className="cols gap-y-12">
              <div className={flip ? 'col-span-12 lg:col-span-5 lg:col-start-8' : 'col-span-12 lg:col-span-5'}>
                <div className="flex items-baseline gap-4">
                  <span className="label label--signal num">{d.n}</span>
                  <h2 style={{ fontSize: 'var(--text-4xl)' }}>{d.title}</h2>
                </div>
                <p className="benefit-lead mt-4">{d.benefit}</p>
                {d.tag && <p className="annotation annotation--ink mt-1">{d.tag}</p>}
                <p className="label mt-4">{d.sub}</p>
                <p className="annotation mt-2">{d.token}</p>
                <p className="prose mt-7">{d.body}</p>

                <ul className="defs mt-8" style={{ borderTopColor: 'var(--color-rule-ink)' }}>
                  {d.craft.map((c) => (
                    <li
                      key={c}
                      className="flex gap-4 py-4"
                      style={{ borderBottom: 'var(--rule-hairline) solid var(--color-rule)' }}
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 shrink-0"
                        style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--gradient-brand)' }}
                      />
                      <span className="prose" style={{ fontSize: 'var(--text-sm)' }}>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={
                  flip
                    ? 'col-span-12 lg:col-span-6 lg:col-start-1 lg:row-start-1'
                    : 'col-span-12 lg:col-span-6 lg:col-start-7'
                }
              >
                {/* every discipline has its own proof — nothing points elsewhere */}
                <Demo />
                {d.key === 'type' && (
                  <div className="mt-10">
                    <TypeScalePrint />
                  </div>
                )}
              </div>
            </div>
          </Band>
        );
      })}

      <Band rule="ink" tight>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead title="มาตรฐานนี้ใช้กับงานของคุณได้ไหม" />
          <div className="flex flex-wrap gap-3">
            <a href={CONTACT.phoneHref} className="btn btn--call">โทร {CONTACT.phone}</a>
            <Link href="/work" className="btn btn--ghost">ดูผลงาน</Link>
          </div>
        </div>
      </Band>
    </>
  );
}
