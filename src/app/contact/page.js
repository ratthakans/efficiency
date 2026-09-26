import Link from 'next/link';
import { Band, SectionHead, Numeral } from '@/components/ui/Section';
import { CONTACT } from '@/lib/content';

export const metadata = {
  title: 'ติดต่อ',
  description:
    'ติดต่อ EFFICIENCY web development studio โทร 063 859 8423 ในเวลาทำการ หรืออีเมล hello@efficiency.co.th คุยสั้น ๆ ก็บอกได้ว่างานของคุณควรเริ่มตรงไหน',
  alternates: { canonical: '/contact' },
};

const PREPARE = [
  'ธุรกิจของคุณทำอะไร และกลุ่มลูกค้าคือใคร',
  'อยากให้เว็บไซต์ทำอะไรได้ เช่น แนะนำองค์กร รับติดต่อ หรือให้ผู้ใช้ทำรายการ',
  'มีเนื้อหา โลโก้ และรูปภาพพร้อมแล้วหรือยัง',
  'มีเว็บไซต์หรือระบบเดิมอยู่แล้วหรือไม่',
  'กำหนดเวลาที่อยากเปิดใช้งาน',
];

export default function ContactPage() {
  return (
    <>
      <Band tight>
        <div className="cols gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-s" style={{ maxWidth: '16ch' }}>
              โทรมาถามได้เลย
              <span className="mark-square" aria-hidden="true" />
            </h1>
            <p className="lede mt-7">
              ไม่ต้องกรอกฟอร์มหรือเตรียมเอกสารก่อน ยกหูโทรมาเล่าว่าอยากได้เว็บไซต์แบบไหน
              คุยสั้น ๆ ก็พอเห็นภาพว่าควรเริ่มตรงไหน
            </p>

            <a
              href={CONTACT.phoneHref}
              className="display mt-10 block whitespace-nowrap num"
              style={{ color: 'var(--color-signal)', fontSize: 'var(--text-display-s)' }}
            >
              {CONTACT.phone}
            </a>
            <p className="label mt-4">{CONTACT.hours} · {CONTACT.replyTime}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="btn btn--signal">
                โทรเลย
              </a>
              <a href={`mailto:${CONTACT.email}`} className="btn btn--ghost">
                ส่งอีเมล
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <dl className="defs" style={{ borderTopColor: 'var(--color-rule-ink)' }}>
              <div className="def" style={{ gridTemplateColumns: 'minmax(0,1fr)', gap: 'var(--space-2xs)' }}>
                <dt className="label">อีเมล</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`} className="link" style={{ fontSize: 'var(--text-base)' }}>
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div className="def" style={{ gridTemplateColumns: 'minmax(0,1fr)', gap: 'var(--space-2xs)' }}>
                <dt className="label">ที่ตั้ง</dt>
                <dd style={{ fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                  {CONTACT.address[0]}
                  <br />
                  {CONTACT.address[1]}
                  <br />
                  <a
                    href={CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link mt-3"
                    style={{ fontSize: 'var(--text-sm)' }}
                  >
                    เปิดใน Google Maps
                  </a>
                </dd>
              </div>
              <div className="def" style={{ gridTemplateColumns: 'minmax(0,1fr)', gap: 'var(--space-2xs)' }}>
                <dt className="label">นิติบุคคล</dt>
                <dd style={{ fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                  {CONTACT.companyTh}
                  <br />
                  ทะเบียน <span className="num">{CONTACT.registrationNo}</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Band>

      <Band rule="ink">
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <SectionHead
              title="รู้เรื่องพวกนี้ไว้จะคุยได้เร็วขึ้น"
              lede="ยังตอบไม่ได้ทุกข้อก็โทรมาได้ เราถามทีละข้อให้เอง"
            />
            <div className="mt-8" style={{ overflow: 'clip' }}>
              <Numeral>05</Numeral>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <ol className="defs" style={{ borderTopColor: 'var(--color-rule-ink)' }}>
              {PREPARE.map((p, i) => (
                <li
                  key={p}
                  className="flex gap-5 py-5"
                  style={{ borderBottom: 'var(--rule-hairline) solid var(--color-rule)' }}
                >
                  <span className="label label--signal num shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="prose" style={{ fontSize: 'var(--text-base)' }}>
                    {p}
                  </span>
                </li>
              ))}
            </ol>
            <p className="prose mt-8" style={{ fontSize: 'var(--text-sm)' }}>
              เว็บไซต์นี้ไม่มีแบบฟอร์มและไม่มีระบบชำระเงินออนไลน์ เราตั้งใจให้คุณได้คุยกับคนที่ทำงานจริงตั้งแต่สายแรก
            </p>
            <Link href="/work" className="link mt-6">
              ดูผลงานก่อนโทร →
            </Link>
          </div>
        </div>
      </Band>
    </>
  );
}
