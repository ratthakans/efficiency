import Link from 'next/link';
import { Band, SectionHead } from '@/components/ui/Section';
import { PRINCIPLES, FRICTIONS, BRAND, FAQS, CONTACT } from '@/lib/content';

export const metadata = {
  title: 'How We Work',
  description:
    'วิธีทำงานของ EFFICIENCY ตั้งอยู่บนหลักสามข้อ Taste, Intent และ Fidelity และต่อต้านสิ่งเดียวคือ Unnecessary Friction',
  alternates: { canonical: '/approach' },
};

export default function ApproachPage() {
  return (
    <>
      <Band tight>
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-s" style={{ maxWidth: '16ch' }}>{BRAND.proposition}</h1>
            <p className="lede mt-7">
              เราไม่ได้เพียงเปลี่ยนไฟล์ออกแบบให้กลายเป็นหน้าเว็บ แต่เปลี่ยนความตั้งใจของแบรนด์
              ให้กลายเป็นประสบการณ์ดิจิทัล โดยพยายามรักษาความคิดและรายละเอียดในต้นฉบับไว้ให้ครบที่สุด
            </p>
          </div>
        </div>
      </Band>

      {/* alternation is carried by which side the head sits on, not by a tint */}
      {PRINCIPLES.map((p, i) => (
        <Band key={p.key} rule="ink">
          <div className="cols gap-y-8">
            <div className={i % 2 === 1 ? 'col-span-12 lg:col-span-5 lg:col-start-8' : 'col-span-12 lg:col-span-5'}>
              <h2 className="display-s">{p.title}</h2>
              <p className="label mt-3">{p.sub}</p>
            </div>
            <div className={i % 2 === 1 ? 'col-span-12 lg:col-span-6 lg:col-start-1 lg:row-start-1' : 'col-span-12 lg:col-span-6 lg:col-start-7'}>
              <p className="prose" style={{ fontSize: 'var(--text-lg)' }}>{p.body}</p>
            </div>
          </div>
        </Band>
      ))}

      <Band rule="ink">
        <SectionHead
          title="The enemy."
          lede="เราไม่ได้ต่อต้านความซับซ้อน บางระบบจำเป็นต้องซับซ้อน สิ่งที่เราต่อต้านคือแรงเสียดทานที่ไม่มีเหตุผล"
        />
        <div className="ruled-grid mt-12">
          {FRICTIONS.map((f) => (
            <div key={f.title} className="ruled-cell">
              <h3 style={{ fontSize: 'var(--text-xl)' }}>{f.title}</h3>
              <p className="prose mt-3" style={{ fontSize: 'var(--text-sm)' }}>{f.body}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band rule="ink" tight>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead title="Our standard of craft." lede="หลักสามข้อนี้ถูกแปลเป็นมาตรฐานหกด้านที่ตรวจได้จริง" />
          <Link href="/standard" className="btn btn--signal">ดู Our Standard</Link>
        </div>
      </Band>

      {/* คำถามที่พบบ่อย — เขียนเป็นคำถามที่คนถามจริง เพื่อให้ถูกหยิบไปเป็นคำตอบได้ */}
      <Band id="faq" rule="ink" className="scroll-mt-24">
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <SectionHead title="คำถามที่พบบ่อย" />
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <dl className="defs">
              {FAQS.map((f) => (
                <div
                  key={f.q}
                  className="py-6"
                  style={{ borderBottom: 'var(--rule-hairline) solid var(--color-rule)' }}
                >
                  <dt style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>{f.q}</dt>
                  <dd className="prose mt-3" style={{ fontSize: 'var(--text-sm)' }}>{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Band>

      <Band rule="ink" tight>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead title={BRAND.promise} />
          <a href={CONTACT.phoneHref} className="btn btn--call">โทร {CONTACT.phone}</a>
        </div>
      </Band>
    </>
  );
}
