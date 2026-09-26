import Link from 'next/link';
import { Band } from '@/components/ui/Section';
import { CONTACT } from '@/lib/content';

export const metadata = {
  title: 'นโยบายความเป็นส่วนตัว',
  description:
    'นโยบายความเป็นส่วนตัวของบริษัท เอฟฟิเชียนซี่ จำกัด อธิบายข้อมูลที่เก็บผ่านเว็บไซต์ คุกกี้ที่ใช้ วัตถุประสงค์ และสิทธิของเจ้าของข้อมูลตาม PDPA',
  alternates: { canonical: '/privacy' },
};

const UPDATED = '26 กันยายน 2569';

const COOKIES = [
  { name: '_ga', provider: 'Google Analytics', purpose: 'แยกแยะผู้เข้าชมแต่ละรายเพื่อนับจำนวนผู้ใช้งาน', life: '2 ปี' },
  { name: '_ga_1CG2Z9PRGL', provider: 'Google Analytics', purpose: 'เก็บสถานะของการเข้าชมแต่ละครั้ง', life: '2 ปี' },
];

const RIGHTS = [
  ['สิทธิขอเข้าถึงข้อมูล', 'ขอทราบว่าเรามีข้อมูลส่วนบุคคลของคุณอะไรบ้าง และขอสำเนาได้'],
  ['สิทธิขอแก้ไขข้อมูล', 'ขอให้แก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่เป็นปัจจุบัน'],
  ['สิทธิขอลบข้อมูล', 'ขอให้ลบหรือทำให้ข้อมูลไม่สามารถระบุตัวคุณได้'],
  ['สิทธิขอระงับการใช้ข้อมูล', 'ขอให้หยุดใช้ข้อมูลชั่วคราวระหว่างตรวจสอบความถูกต้อง'],
  ['สิทธิคัดค้านการเก็บและใช้ข้อมูล', 'คัดค้านการเก็บหรือใช้ข้อมูลที่อาศัยฐานประโยชน์โดยชอบด้วยกฎหมาย'],
  ['สิทธิขอถอนความยินยอม', 'ถอนความยินยอมที่เคยให้ไว้เมื่อใดก็ได้ โดยไม่กระทบการใช้ข้อมูลที่ทำไปแล้วก่อนหน้า'],
  ['สิทธิขอให้โอนย้ายข้อมูล', 'ขอรับข้อมูลในรูปแบบที่อ่านได้ด้วยเครื่อง หรือให้ส่งต่อไปยังผู้ควบคุมข้อมูลรายอื่น'],
  ['สิทธิร้องเรียน', 'ร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล หากเห็นว่าเราไม่ปฏิบัติตามกฎหมาย'],
];

function Article({ n, title, children }) {
  return (
    <article className="py-10" style={{ borderTop: 'var(--rule-hairline) solid var(--color-rule)' }}>
      <div className="flex items-baseline gap-4">
        <span className="label label--signal num">{n}</span>
        <h2 style={{ fontSize: 'var(--text-2xl)' }}>{title}</h2>
      </div>
      <div className="mt-5 space-y-4">{children}</div>
    </article>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Band tight>
        <div className="cols">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-s" style={{ maxWidth: '18ch' }}>
              นโยบายความเป็นส่วนตัว
            </h1>
            <p className="lede mt-7">
              เว็บไซต์ efficiency.co.th เก็บข้อมูลอะไรบ้าง เก็บไปทำไม
              และคุณมีสิทธิอะไรตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
            </p>
            <p className="label mt-6">ปรับปรุงล่าสุด {UPDATED}</p>
          </div>
        </div>
      </Band>

      <Band rule="ink">
        <div className="cols">
          <div className="col-span-12 lg:col-span-8">

            <Article n="01" title="ผู้ควบคุมข้อมูลส่วนบุคคล">
              <p className="prose">
                {CONTACT.companyTh} ({CONTACT.companyEn}) เลขทะเบียนนิติบุคคล{' '}
                <span className="num">{CONTACT.registrationNo}</span>
                <br />
                {CONTACT.address[0]} {CONTACT.address[1]}
              </p>
              <p className="prose">
                ติดต่อเรื่องข้อมูลส่วนบุคคลได้ที่{' '}
                <a href={`mailto:${CONTACT.email}`} className="link">{CONTACT.email}</a>{' '}
                หรือโทร{' '}
                <a href={CONTACT.phoneHref} className="link num">{CONTACT.phone}</a>
              </p>
            </Article>

            <Article n="02" title="ข้อมูลที่เราเก็บ">
              <p className="prose">
                เว็บไซต์นี้ไม่มีแบบฟอร์ม ไม่มีระบบสมาชิก และไม่มีการชำระเงินออนไลน์
                เราจึงไม่ได้เก็บข้อมูลส่วนบุคคลของคุณผ่านหน้าเว็บโดยตรง
                ข้อมูลที่เกี่ยวข้องมีสองกลุ่มเท่านั้น
              </p>
              <p className="prose">
                กลุ่มแรกคือข้อมูลการใช้งานเว็บไซต์ เก็บผ่าน Google Analytics
                ในรูปแบบสถิติที่ไม่ระบุตัวตน เช่น หน้าที่เข้าชม ระยะเวลาที่อยู่ในหน้า
                ประเภทอุปกรณ์ ประเทศโดยประมาณ และจำนวนครั้งที่มีผู้กดปุ่มโทร
                โดยระบบจะตัดทอนหมายเลข IP ก่อนจัดเก็บเสมอ
              </p>
              <p className="prose">
                กลุ่มที่สองคือข้อมูลที่คุณให้เมื่อติดต่อเรา เมื่อคุณโทรหรือส่งอีเมลเข้ามา
                เราจะได้รับข้อมูลที่คุณแจ้ง เช่น ชื่อ ชื่อบริษัท เบอร์โทรศัพท์ อีเมล
                และรายละเอียดโครงการ ข้อมูลนี้คุณเป็นผู้ให้เองโดยสมัครใจ
                และเราใช้เพื่อติดต่อกลับและจัดทำใบเสนอราคาเท่านั้น
              </p>
            </Article>

            <Article n="03" title="คุกกี้ที่เว็บไซต์นี้ใช้">
              <p className="prose">
                เว็บไซต์ใช้คุกกี้เพื่อการวิเคราะห์เท่านั้น ไม่มีคุกกี้เพื่อการโฆษณา
                และไม่มีการติดตามข้ามเว็บไซต์
              </p>
              <div className="mt-6 overflow-x-auto">
                <table style={{ width: '100%', minWidth: 520, borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      {['ชื่อคุกกี้', 'ผู้ให้บริการ', 'วัตถุประสงค์', 'อายุ'].map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="label label--ink"
                          style={{
                            textAlign: 'start',
                            padding: '12px 16px 12px 0',
                            borderBottom: 'var(--rule-solid) solid var(--color-rule-ink)',
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COOKIES.map((c) => (
                      <tr key={c.name}>
                        <th
                          scope="row"
                          className="num"
                          style={{
                            textAlign: 'start',
                            fontWeight: 600,
                            padding: '14px 16px 14px 0',
                            borderBottom: 'var(--rule-hairline) solid var(--color-rule)',
                            fontSize: 'var(--text-sm)',
                          }}
                        >
                          {c.name}
                        </th>
                        {[c.provider, c.purpose, c.life].map((v) => (
                          <td
                            key={v}
                            className="t-ink-2"
                            style={{
                              padding: '14px 16px 14px 0',
                              borderBottom: 'var(--rule-hairline) solid var(--color-rule)',
                              fontSize: 'var(--text-sm)',
                            }}
                          >
                            {v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="prose mt-6">
                คุณสามารถปฏิเสธหรือลบคุกกี้เหล่านี้ได้ตลอดเวลาผ่านการตั้งค่าเบราว์เซอร์
                หรือติดตั้งส่วนเสริม{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Google Analytics Opt-out
                </a>{' '}
                การปฏิเสธคุกกี้ไม่กระทบการใช้งานเว็บไซต์ส่วนใดเลย
              </p>
            </Article>

            <Article n="04" title="วัตถุประสงค์และฐานทางกฎหมาย">
              <p className="prose">
                เราใช้ข้อมูลสถิติการใช้งานเพื่อปรับปรุงเนื้อหาและโครงสร้างเว็บไซต์
                ให้ตอบคำถามของผู้เข้าชมได้ดีขึ้น โดยอาศัยฐานประโยชน์โดยชอบด้วยกฎหมาย
                ตามมาตรา 24(5) ซึ่งเป็นประโยชน์ที่ไม่เกินความคาดหมายและไม่กระทบสิทธิของคุณเกินสมควร
              </p>
              <p className="prose">
                ส่วนข้อมูลที่คุณให้เมื่อติดต่อเข้ามา เราใช้เพื่อตอบกลับ จัดทำใบเสนอราคา
                และดำเนินการตามคำขอของคุณ โดยอาศัยฐานการปฏิบัติตามสัญญา
                หรือดำเนินการตามคำขอก่อนเข้าทำสัญญา ตามมาตรา 24(3)
              </p>
            </Article>

            <Article n="05" title="การเปิดเผยข้อมูลต่อบุคคลภายนอก">
              <p className="prose">
                เราไม่ขาย ไม่แลกเปลี่ยน และไม่ส่งต่อข้อมูลของคุณเพื่อวัตถุประสงค์ทางการตลาดของผู้อื่น
                ผู้ให้บริการที่เกี่ยวข้องกับการทำงานของเว็บไซต์มีเพียง Google LLC
                ผู้ให้บริการ Google Analytics และ Vercel Inc. ผู้ให้บริการโฮสติ้ง
                ซึ่งเก็บบันทึกการเข้าถึงเซิร์ฟเวอร์ตามปกติของระบบ
              </p>
              <p className="prose">
                ผู้ให้บริการทั้งสองรายมีเซิร์ฟเวอร์อยู่ต่างประเทศ ข้อมูลจึงอาจถูกโอนไปยังต่างประเทศ
                โดยผู้ให้บริการมีมาตรการคุ้มครองข้อมูลตามมาตรฐานสากล
              </p>
            </Article>

            <Article n="06" title="ระยะเวลาเก็บรักษา">
              <p className="prose">
                ข้อมูลสถิติใน Google Analytics เก็บตามระยะเวลาที่ตั้งค่าไว้ในบัญชี
                ซึ่งสูงสุดไม่เกิน 14 เดือนตามข้อกำหนดของบริการ ส่วนข้อมูลติดต่อที่คุณให้ไว้
                เราเก็บไว้ไม่เกิน 2 ปีนับจากการติดต่อครั้งล่าสุด เว้นแต่มีสัญญาระหว่างกัน
                หรือมีกฎหมายกำหนดให้เก็บนานกว่านั้น
              </p>
            </Article>

            <Article n="07" title="สิทธิของคุณตาม PDPA">
              <dl className="defs" style={{ borderTopColor: 'var(--color-rule-ink)' }}>
                {RIGHTS.map(([title, desc]) => (
                  <div className="def" key={title}>
                    <dt style={{ fontWeight: 600 }}>{title}</dt>
                    <dd className="prose" style={{ fontSize: 'var(--text-sm)' }}>
                      {desc}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="prose mt-6">
                ใช้สิทธิได้โดยติดต่อมาที่{' '}
                <a href={`mailto:${CONTACT.email}`} className="link">{CONTACT.email}</a>{' '}
                เราจะดำเนินการภายใน 30 วันนับจากวันที่ได้รับคำขอ
              </p>
            </Article>

            <Article n="08" title="การเปลี่ยนแปลงนโยบาย">
              <p className="prose">
                หากมีการแก้ไขนโยบายนี้ เราจะปรับวันที่ด้านบนและเผยแพร่ฉบับใหม่บนหน้านี้
                การเปลี่ยนแปลงมีผลนับจากวันที่เผยแพร่
              </p>
            </Article>

            <div className="py-10" style={{ borderTop: 'var(--rule-solid) solid var(--color-rule-ink)' }}>
              <div className="flex flex-wrap gap-3">
                <a href={CONTACT.phoneHref} className="btn btn--signal">
                  โทร {CONTACT.phone}
                </a>
                <Link href="/" className="btn btn--ghost">
                  กลับหน้าแรก
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Band>
    </>
  );
}
