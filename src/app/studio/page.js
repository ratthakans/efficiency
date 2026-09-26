import Link from 'next/link';
import { Band, SectionHead, Numeral } from '@/components/ui/Section';
import { BRAND, PERSONALITY, MANIFESTO, PROJECTS, CONTACT } from '@/lib/content';

export const metadata = {
  title: 'Studio',
  description:
    'EFFICIENCY เป็น Digital Craft Studio ในกรุงเทพฯ ทำงานออกแบบ พัฒนา และสถาปัตยกรรมเว็บในทีมเดียวกัน เพื่อไม่ให้รายละเอียดหล่นหายระหว่างส่งต่องาน',
  alternates: { canonical: '/studio' },
};

export default function StudioPage() {
  const stacks = [...new Set(PROJECTS.map((p) => p.stack))];

  return (
    <>
      <Band tight>
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-s" style={{ maxWidth: '18ch' }}>
              A small studio that works the whole line.
            </h1>
            <p className="lede mt-7">
              EFFICIENCY คือ {BRAND.category} ในกรุงเทพฯ ทำงานตั้งแต่กลยุทธ์ การออกแบบ
              การเคลื่อนไหว ไปจนถึงโค้ดและสถาปัตยกรรม ในทีมเดียวกัน
              จึงไม่มีจุดส่งต่อที่รายละเอียดหล่นหาย
            </p>
            <p className="label mt-8">
              {CONTACT.companyTh} · ทะเบียน <span className="num">{CONTACT.registrationNo}</span>
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end" style={{ overflow: 'clip' }}>
            <Numeral>{PROJECTS.length}</Numeral>
            <p className="label mt-4">projects live</p>
          </div>
        </div>
      </Band>

      {/* Manifesto — the studio's own voice, set as a document */}
      <Band rule="ink">
        <div className="cols">
          <div className="col-span-12 lg:col-span-8">
            {MANIFESTO.map((line) => (
              <p
                key={line}
                style={{
                  fontSize: 'var(--text-3xl)',
                  lineHeight: 1.45,
                  marginBlockEnd: 'var(--space-lg)',
                  maxWidth: '26ch',
                }}
              >
                {line}
              </p>
            ))}
            <p className="display-s mt-10">
              {BRAND.philosophy[0]}
              <br />
              {BRAND.philosophy[1]}
            </p>
          </div>
        </div>
      </Band>

      <Band tone="paper-2" rule="hair">
        <SectionHead title="Personality" lede={BRAND.tone} />
        <div className="mt-12 grid gap-0 md:grid-cols-2 xl:grid-cols-3">
          {PERSONALITY.map((p, i) => (
            <div
              key={p.title}
              className="py-8 md:px-7"
              style={{
                borderTop: 'var(--rule-solid) solid var(--color-rule-ink)',
                borderInlineStart: i % 3 === 0 ? undefined : 'var(--rule-hairline) solid var(--color-rule)',
                paddingInlineStart: i % 3 === 0 ? 0 : undefined,
              }}
            >
              <h3 style={{ fontSize: 'var(--text-xl)' }}>{p.title}</h3>
              <p className="prose mt-3" style={{ fontSize: 'var(--text-sm)' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band rule="ink">
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <SectionHead
              title="เลือกเครื่องมือตามงาน"
              lede="เราไม่ผูกตัวเองกับเทคโนโลยีเดียว งานที่ต้องการความเร็วและโครงสร้างที่ดีต่อการค้นพบใช้ทางหนึ่ง งานที่ทีมลูกค้าต้องแก้เนื้อหาเองบ่อยใช้อีกทางหนึ่ง"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <dl className="defs" style={{ borderTopColor: 'var(--color-rule-ink)' }}>
              {stacks.map((s) => {
                const used = PROJECTS.filter((p) => p.stack === s);
                return (
                  <div className="def" key={s}>
                    <dt className="mono" style={{ fontSize: 'var(--text-lg)', fontWeight: 500 }}>{s}</dt>
                    <dd className="prose" style={{ fontSize: 'var(--text-sm)' }}>
                      ใช้ใน <span className="num">{used.length}</span> โครงการ ·{' '}
                      {used.map((p) => p.name).join(', ')}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </Band>

      <Band rule="ink" tight>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead title={BRAND.promise} />
          <div className="flex flex-wrap gap-3">
            <a href={CONTACT.phoneHref} className="btn btn--signal">โทร {CONTACT.phone}</a>
            <Link href="/work" className="btn btn--ghost">Selected work</Link>
          </div>
        </div>
      </Band>
    </>
  );
}
