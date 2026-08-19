import Link from 'next/link';
import { CONTACT } from '@/lib/content';

export const metadata = {
  title: 'นโยบายความเป็นส่วนตัว',
  description:
    'นโยบายความเป็นส่วนตัวของบริษัท เอฟฟิเชียนซี่ จำกัด อธิบายข้อมูลที่เก็บผ่านเว็บไซต์ คุกกี้ที่ใช้ วัตถุประสงค์ และสิทธิของเจ้าของข้อมูลตาม PDPA',
  alternates: { canonical: '/privacy' },
};

const UPDATED = '19 สิงหาคม 2569';

const COOKIES = [
  {
    name: '_ga',
    provider: 'Google Analytics',
    purpose: 'แยกแยะผู้เข้าชมแต่ละรายเพื่อนับจำนวนผู้ใช้งาน',
    life: '2 ปี',
  },
  {
    name: '_ga_1CG2Z9PRGL',
    provider: 'Google Analytics',
    purpose: 'เก็บสถานะของการเข้าชมแต่ละครั้ง',
    life: '2 ปี',
  },
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
    <section className="scroll-mt-28">
      <h2 className="text-[20px] md:text-[22px] font-semibold text-ink mb-4 flex items-baseline gap-3">
        <span className="num text-[15px] text-ink-3">{String(n).padStart(2, '0')}</span>
        {title}
      </h2>
      <div className="space-y-4 text-[15.5px] text-ink-2 leading-[1.85]">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div>
      <section className="pt-32 md:pt-40 pb-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4 animate-fade-in-up">Privacy</p>
          <h1 className="text-[32px] md:text-[44px] font-semibold tracking-tight text-ink animate-fade-in-up animation-delay-100">
            นโยบายความเป็นส่วนตัว
          </h1>
          <p className="lead text-[16.5px] mt-5 animate-fade-in-up animation-delay-200">
            นโยบายนี้อธิบายว่าเว็บไซต์ efficiency.co.th เก็บข้อมูลอะไรบ้าง เก็บไปทำไม
            และคุณมีสิทธิอะไรตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
          </p>
          <p className="text-[14px] text-ink-3 mt-4 animate-fade-in-up animation-delay-300">
            ปรับปรุงล่าสุด {UPDATED}
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

          <Article n={1} title="ผู้ควบคุมข้อมูลส่วนบุคคล">
            <p>
              {CONTACT.companyTh} ({CONTACT.companyEn}) เลขทะเบียนนิติบุคคล{' '}
              <span className="num">{CONTACT.registrationNo}</span>
              <br />
              {CONTACT.address[0]} {CONTACT.address[1]}
            </p>
            <p>
              ติดต่อเรื่องข้อมูลส่วนบุคคลได้ที่{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-brand underline underline-offset-2">
                {CONTACT.email}
              </a>{' '}
              หรือโทร{' '}
              <a href={CONTACT.phoneHref} className="text-brand underline underline-offset-2 num">
                {CONTACT.phone}
              </a>
            </p>
          </Article>

          <Article n={2} title="ข้อมูลที่เราเก็บ">
            <p>
              <strong className="text-ink font-medium">เว็บไซต์นี้ไม่มีแบบฟอร์ม ไม่มีระบบสมาชิก
              และไม่มีการชำระเงินออนไลน์</strong> เราจึงไม่ได้เก็บข้อมูลส่วนบุคคลของคุณผ่านหน้าเว็บโดยตรง
              ข้อมูลที่เกี่ยวข้องมี 2 กลุ่มเท่านั้น
            </p>
            <p>
              <strong className="text-ink font-medium">1. ข้อมูลการใช้งานเว็บไซต์</strong> —
              เก็บผ่าน Google Analytics ในรูปแบบสถิติที่ไม่ระบุตัวตน เช่น หน้าที่เข้าชม
              ระยะเวลาที่อยู่ในหน้า ประเภทอุปกรณ์ เบราว์เซอร์ ประเทศโดยประมาณ
              ช่องทางที่เข้ามา และจำนวนครั้งที่มีผู้กดปุ่มโทร
              โดย Google Analytics 4 จะตัดทอนหมายเลข IP ก่อนจัดเก็บเสมอ
              เราไม่สามารถระบุได้ว่าสถิติแต่ละรายการเป็นของบุคคลใด
            </p>
            <p>
              <strong className="text-ink font-medium">2. ข้อมูลที่คุณให้เมื่อติดต่อเรา</strong> —
              เมื่อคุณโทรหรือส่งอีเมลเข้ามา เราจะได้รับข้อมูลที่คุณแจ้ง เช่น ชื่อ ชื่อบริษัท
              เบอร์โทรศัพท์ อีเมล และรายละเอียดโครงการ ข้อมูลนี้คุณเป็นผู้ให้เองโดยสมัครใจ
              และเราใช้เพื่อติดต่อกลับและจัดทำใบเสนอราคาเท่านั้น
            </p>
          </Article>

          <Article n={3} title="คุกกี้ที่เว็บไซต์นี้ใช้">
            <p>
              เว็บไซต์ใช้คุกกี้เพื่อการวิเคราะห์เท่านั้น ไม่มีคุกกี้เพื่อการโฆษณา
              และไม่มีการติดตามข้ามเว็บไซต์
            </p>
            <div className="card overflow-hidden not-prose">
              <div className="overflow-x-auto">
                <table className="cmp-table" style={{ minWidth: 520 }}>
                  <thead>
                    <tr>
                      <th scope="col">ชื่อคุกกี้</th>
                      <th scope="col">ผู้ให้บริการ</th>
                      <th scope="col">วัตถุประสงค์</th>
                      <th scope="col">อายุ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COOKIES.map((c) => (
                      <tr key={c.name}>
                        <th scope="row" className="font-mono text-[13px]">{c.name}</th>
                        <td className="text-ink-2">{c.provider}</td>
                        <td className="text-ink-2">{c.purpose}</td>
                        <td className="text-ink-2 whitespace-nowrap">{c.life}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p>
              คุณสามารถปฏิเสธหรือลบคุกกี้เหล่านี้ได้ตลอดเวลาผ่านการตั้งค่าเบราว์เซอร์
              หรือติดตั้งส่วนเสริม{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline underline-offset-2"
              >
                Google Analytics Opt-out Browser Add-on
              </a>{' '}
              การปฏิเสธคุกกี้ไม่กระทบการใช้งานเว็บไซต์ส่วนใดเลย
            </p>
          </Article>

          <Article n={4} title="วัตถุประสงค์และฐานทางกฎหมาย">
            <p>
              เราใช้ข้อมูลสถิติการใช้งานเพื่อปรับปรุงเนื้อหาและโครงสร้างเว็บไซต์ให้ตอบคำถาม
              ของผู้เข้าชมได้ดีขึ้น โดยอาศัย{' '}
              <strong className="text-ink font-medium">ฐานประโยชน์โดยชอบด้วยกฎหมาย</strong>{' '}
              (มาตรา 24(5)) ซึ่งเป็นประโยชน์ที่ไม่เกินความคาดหมายและไม่กระทบสิทธิของคุณเกินสมควร
            </p>
            <p>
              ส่วนข้อมูลที่คุณให้เมื่อติดต่อเข้ามา เราใช้เพื่อตอบกลับ จัดทำใบเสนอราคา
              และดำเนินการตามคำขอของคุณ โดยอาศัยฐาน{' '}
              <strong className="text-ink font-medium">การปฏิบัติตามสัญญาหรือดำเนินการตามคำขอก่อนเข้าทำสัญญา</strong>{' '}
              (มาตรา 24(3))
            </p>
          </Article>

          <Article n={5} title="การเปิดเผยข้อมูลต่อบุคคลภายนอก">
            <p>
              เราไม่ขาย ไม่แลกเปลี่ยน และไม่ส่งต่อข้อมูลของคุณเพื่อวัตถุประสงค์ทางการตลาดของผู้อื่น
              ผู้ให้บริการที่เกี่ยวข้องกับการทำงานของเว็บไซต์มีเพียง
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong className="text-ink font-medium">Google LLC</strong> — ผู้ให้บริการ Google Analytics
                สำหรับสถิติการใช้งาน
              </li>
              <li>
                <strong className="text-ink font-medium">Vercel Inc.</strong> — ผู้ให้บริการโฮสติ้ง
                ซึ่งเก็บบันทึกการเข้าถึงเซิร์ฟเวอร์ตามปกติของระบบ
              </li>
            </ul>
            <p>
              ผู้ให้บริการทั้งสองรายมีเซิร์ฟเวอร์อยู่ต่างประเทศ ข้อมูลจึงอาจถูกโอนไปยังต่างประเทศ
              โดยผู้ให้บริการมีมาตรการคุ้มครองข้อมูลตามมาตรฐานสากล
            </p>
          </Article>

          <Article n={6} title="ระยะเวลาเก็บรักษา">
            <p>
              ข้อมูลสถิติใน Google Analytics เก็บตามระยะเวลาที่ตั้งค่าไว้ในบัญชี
              ซึ่งสูงสุดไม่เกิน 14 เดือนตามข้อกำหนดของบริการ
              ส่วนข้อมูลติดต่อที่คุณให้ไว้ เราเก็บไว้ไม่เกิน 2 ปีนับจากการติดต่อครั้งล่าสุด
              เว้นแต่มีสัญญาระหว่างกัน หรือมีกฎหมายกำหนดให้เก็บนานกว่านั้น
              เช่น เอกสารทางบัญชีและภาษีที่ต้องเก็บตามที่กฎหมายกำหนด
            </p>
          </Article>

          <Article n={7} title="สิทธิของคุณตาม PDPA">
            <p>ในฐานะเจ้าของข้อมูลส่วนบุคคล คุณมีสิทธิดังนี้</p>
            <ul className="space-y-3">
              {RIGHTS.map(([title, desc]) => (
                <li key={title} className="flex flex-col">
                  <span className="text-ink font-medium">{title}</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
            <p>
              ใช้สิทธิได้โดยติดต่อมาที่{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-brand underline underline-offset-2">
                {CONTACT.email}
              </a>{' '}
              เราจะดำเนินการภายใน 30 วันนับจากวันที่ได้รับคำขอ
            </p>
          </Article>

          <Article n={8} title="การเปลี่ยนแปลงนโยบาย">
            <p>
              หากมีการแก้ไขนโยบายนี้ เราจะปรับวันที่ด้านบนและเผยแพร่ฉบับใหม่บนหน้านี้
              การเปลี่ยนแปลงมีผลนับจากวันที่เผยแพร่
            </p>
          </Article>

          <div className="pt-8 border-t border-line">
            <p className="text-[15px] text-ink-2 leading-relaxed">
              มีคำถามเรื่องข้อมูลส่วนบุคคล หรืออยากคุยเรื่องเว็บไซต์ โทรมาถามได้เลย
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href={CONTACT.phoneHref} className="btn btn-primary btn-sm">
                โทร <span className="num">{CONTACT.phone}</span>
              </a>
              <Link href="/" className="btn btn-secondary btn-sm">
                กลับหน้าแรก
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
