import Link from 'next/link';
import { Band, SectionHead } from '@/components/ui/Section';
import { BRAND, MANIFESTO, PROJECTS, CONTACT } from '@/lib/content';

export const metadata = {
  title: 'สตูดิโอ',
  description:
    'EFFICIENCY เป็น Digital Craft Studio ในกรุงเทพฯ ทำงานออกแบบ พัฒนา และสถาปัตยกรรมเว็บในทีมเดียวกัน เพื่อไม่ให้รายละเอียดหล่นหายระหว่างส่งต่องาน',
  alternates: { canonical: '/studio' },
};

export default function StudioPage() {
  const stacks = [...new Set(PROJECTS.map((p) => p.stack))];

  return (
    <>
      <Band tight className="has-mesh has-mesh--bleed page-top">
        <div className="mesh mesh--page" aria-hidden="true" style={{ right: '-18%', top: '-58%' }} />
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
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end">
            <p className="label label--ink num" style={{ fontSize: 'var(--text-4xl)', letterSpacing: '-0.01em' }}>
              {PROJECTS.length}
            </p>
            <p className="label mt-2">projects live</p>
          </div>
        </div>
      </Band>

      {/* Essence — moved from the home page, where it spoke before the reader
          knew what the studio did. Here it follows the introduction. */}
      <Band rule="ink">
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="display-s">{BRAND.essence}</h2>
            <p className="lede mt-6" style={{ color: 'var(--color-ink)' }}>
              {BRAND.belief}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="prose">
              ประสบการณ์ดิจิทัลที่ดีเกิดจากรายละเอียดเล็ก ๆ ที่ผู้ใช้อาจไม่ได้สังเกตเห็นโดยตรง
              แต่รู้สึกได้ จังหวะของตัวอักษร ระยะห่างระหว่างองค์ประกอบ น้ำหนักของการตอบสนอง
              และเวลาที่ภาพปรากฏ
            </p>
            <p className="prose mt-5" style={{ color: 'var(--color-ink)' }}>
              รายละเอียดไม่ใช่การตกแต่ง รายละเอียดคือสิ่งที่ทำให้ประสบการณ์ดิจิทัลมีชีวิต
            </p>
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
          </div>
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
            <a href={CONTACT.phoneHref} className="btn btn--call">โทร {CONTACT.phone}</a>
            <Link href="/work" className="btn btn--ghost">ดูผลงาน</Link>
          </div>
        </div>
      </Band>
    </>
  );
}
