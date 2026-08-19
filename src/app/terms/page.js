import Link from 'next/link';
import { CONTACT, SCOPE_TERMS, DELIVERABLES } from '@/lib/content';

export const metadata = {
  title: 'เงื่อนไขการให้บริการ',
  description:
    'เงื่อนไขการให้บริการของ EFFICIENCY ครอบคลุมการนับขอบเขตงาน รอบแก้ไข การชำระเงิน การส่งมอบ ระยะรับประกัน และสิ่งที่ไม่รวมในแพ็กเกจ',
  alternates: { canonical: '/terms' },
};

const UPDATED = '19 สิงหาคม 2569';

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

export default function TermsPage() {
  return (
    <div>
      <section className="pt-32 md:pt-40 pb-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4 animate-fade-in-up">Terms</p>
          <h1 className="text-[32px] md:text-[44px] font-semibold tracking-tight text-ink animate-fade-in-up animation-delay-100">
            เงื่อนไขการให้บริการ
          </h1>
          <p className="lead text-[16.5px] mt-5 animate-fade-in-up animation-delay-200">
            เงื่อนไขนี้เป็นกรอบมาตรฐานที่ใช้กับทุกโครงการ รายละเอียดสุดท้ายของแต่ละงาน
            ยึดตามใบเสนอราคาและ Scope of Work ที่ยืนยันร่วมกันเสมอ
          </p>
          <p className="text-[14px] text-ink-3 mt-4 animate-fade-in-up animation-delay-300">
            ปรับปรุงล่าสุด {UPDATED}
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

          <Article n={1} title="การนับขอบเขตงาน">
            <p>
              งานเว็บไซต์นับขอบเขตเป็นจำนวนหน้า (URL) ส่วนงานระบบนับเป็นจำนวนหน้าจอ (Screen)
              จำนวนที่ระบุในแพ็กเกจคือเพดานสูงสุดของงานนั้น รายการทั้งหมดระบุไว้ใน
              Scope of Work ที่ทั้งสองฝ่ายยืนยันก่อนเริ่มงาน
            </p>
            <p>
              งานที่อยู่นอกเหนือจากที่ระบุ เช่น เพิ่มหน้า เพิ่ม Screen เพิ่ม User Role
              เพิ่ม Module เชื่อมต่อ API เพิ่ม หรือเปลี่ยนแนวทางออกแบบหลังยืนยันแบบแล้ว
              ถือเป็นงานส่วนเพิ่มซึ่งประเมินราคาแยก โดยแจ้งให้ทราบก่อนดำเนินการเสมอ
              ราคาอ้างอิงดูได้ที่{' '}
              <Link href="/pricing#add-ons" className="text-brand underline underline-offset-2">
                หน้าแพ็กเกจและราคา
              </Link>
            </p>
          </Article>

          <Article n={2} title="รอบแก้ไขงาน">
            <p>
              งานเว็บไซต์แก้ไขได้ 3 รอบ งานระบบมีการทดสอบ UAT 2 รอบ
              โดยหนึ่งรอบหมายถึงรายการแก้ไขที่รวบรวมและส่งมาพร้อมกันในคราวเดียว
              การทยอยส่งทีละรายการจะทำให้จำนวนรอบหมดเร็วและกระทบกำหนดส่ง
            </p>
            <p>
              รอบแก้ไขที่เกินจากที่กำหนด หรือการแก้ไขที่เปลี่ยนโครงสร้างและแนวทางออกแบบ
              ที่ยืนยันไปแล้ว ประเมินเป็นงานส่วนเพิ่ม
            </p>
          </Article>

          <Article n={3} title="การชำระเงิน">
            <p>
              งานเว็บไซต์ชำระ 2 งวด แบ่งเป็น 50% เมื่อเริ่มงาน และ 50% ก่อนเปิดใช้งานจริง
              งานระบบชำระ 3 งวด แบ่งเป็น 40% / 30% / 30% ตาม Milestone
              ที่ระบุในใบเสนอราคา
            </p>
            <p>
              ราคาทุกรายการบนเว็บไซต์และในใบเสนอราคารวมภาษีมูลค่าเพิ่มแล้ว
              ระยะเวลาทำงานเริ่มนับเมื่อได้รับข้อมูลที่จำเป็นครบและได้รับชำระงวดแรกแล้ว
            </p>
          </Article>

          <Article n={4} title="หน้าที่ของลูกค้า">
            <p>
              ลูกค้าเป็นผู้จัดเตรียมข้อมูลที่จำเป็นตามที่ระบุในแพ็กเกจ เช่น โลโก้ รูปภาพ
              ข้อมูลบริการ และช่องทางติดต่อ รวมถึงกำหนดผู้มีอำนาจตัดสินใจและอนุมัติงาน
              ให้ชัดเจนตั้งแต่ต้น
            </p>
            <p>
              ลูกค้ารับรองว่าข้อความ ภาพ และไฟล์ที่ส่งมอบให้เรานั้นมีสิทธิ์ใช้งานโดยชอบ
              หากเกิดข้อพิพาทด้านลิขสิทธิ์จากเนื้อหาที่ลูกค้าจัดหา ลูกค้าเป็นผู้รับผิดชอบ
            </p>
            <p>
              หากโครงการหยุดชะงักเพราะรอข้อมูลหรือรอการอนุมัติจากลูกค้าเกิน 30 วัน
              เราขอสงวนสิทธิ์ในการปรับกำหนดส่งใหม่ตามคิวงานที่ว่างในขณะนั้น
            </p>
          </Article>

          <Article n={5} title="การส่งมอบและการตรวจรับ">
            <p>เมื่อจบโครงการ ลูกค้าจะได้รับรายการต่อไปนี้เป็นอย่างน้อย</p>
            <ul className="space-y-2 list-disc pl-5">
              {DELIVERABLES.website.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p>
              งานแพ็กเกจ System ได้รับ Source Code และเอกสารประกอบเพิ่มเติมหลังชำระเงินครบตามสัญญา
              โดยตกลงเรื่องกรรมสิทธิ์ใน Source Code, License, ค่า Cloud หรือ Hosting,
              การสำรองข้อมูล และผู้รับผิดชอบระบบ ให้ชัดเจนก่อนเริ่มงาน
            </p>
          </Article>

          <Article n={6} title="ระยะรับประกัน">
            <p>
              เรารับประกันข้อผิดพลาดที่เกิดจากการทำงานของเรา นับจากวันเปิดใช้งานจริง
              เป็นระยะเวลา 30 วันสำหรับแพ็กเกจ Starter และ Business, 60 วันสำหรับ Growth
              และ 90 วันสำหรับ System
            </p>
            <p>
              การรับประกันไม่ครอบคลุมความเสียหายที่เกิดจากการแก้ไขโดยบุคคลอื่น
              การเปลี่ยนแปลงของบริการภายนอก การใช้งานผิดวิธี หรือการเพิ่มฟังก์ชันใหม่
              ซึ่งถือเป็นงานส่วนเพิ่ม
            </p>
          </Article>

          <Article n={7} title="สิ่งที่ไม่รวมในบริการ">
            <p>
              ค่าโดเมน โฮสติ้งหรือ Cloud ฟอนต์และภาพลิขสิทธิ์ การถ่ายภาพและวิดีโอ
              รวมถึงค่าธรรมเนียมของระบบเสริมจากผู้ให้บริการภายนอก ไม่รวมอยู่ในราคาแพ็กเกจ
              และเป็นค่าใช้จ่ายที่ลูกค้าจ่ายตรงกับผู้ให้บริการนั้น
            </p>
            <p>
              เราวางโครงสร้างพื้นฐานสำหรับการค้นหาและ AI ให้ถูกต้องในทุกแพ็กเกจ
              แต่ <strong className="text-ink font-medium">ไม่รับประกันอันดับการค้นหา</strong>{' '}
              และไม่รวมบริการ SEO รายเดือน เนื่องจากผลลัพธ์ขึ้นอยู่กับปัจจัยที่อยู่นอกการควบคุมของเรา
            </p>
          </Article>

          <Article n={8} title="การดูแลหลังเปิดใช้งาน">
            <p>
              บริการดูแลหลังเปิดใช้งานเป็นบริการรายเดือนที่แยกจากค่าพัฒนา
              ลูกค้าเลือกใช้หรือไม่ใช้ก็ได้ และยกเลิกได้โดยแจ้งล่วงหน้า 1 รอบบิล
              งานระบบใช้ System Care ซึ่งกำหนดขอบเขต เวลาตอบสนอง และผู้รับผิดชอบร่วมกันก่อนเริ่ม
            </p>
          </Article>

          <Article n={9} title="การยกเลิกโครงการ">
            <p>
              หากลูกค้ายกเลิกโครงการระหว่างดำเนินงาน เงินงวดที่ชำระแล้วจะถูกหักตามสัดส่วน
              ของงานที่ดำเนินการไปแล้วจริง และเราจะส่งมอบงานเท่าที่ทำเสร็จ ณ วันที่ยกเลิกให้
            </p>
          </Article>

          <div className="rounded-2xl border border-line bg-soft p-7">
            <p className="label-th mb-4">สรุปเงื่อนไขสำคัญ</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {SCOPE_TERMS.map((t) => (
                <div key={t.label}>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-ink-3 mb-1">{t.label}</p>
                  <p className="text-[15px] text-ink font-medium leading-snug">{t.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-line">
            <p className="text-[15px] text-ink-2 leading-relaxed">
              มีข้อสงสัยเรื่องเงื่อนไขข้อไหน โทรมาถามก่อนตัดสินใจได้เลย
              เรายินดีอธิบายให้ชัดก่อนเซ็นใบเสนอราคา
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href={CONTACT.phoneHref} className="btn btn-primary btn-sm">
                โทร <span className="num">{CONTACT.phone}</span>
              </a>
              <Link href="/pricing" className="btn btn-secondary btn-sm">
                ดูแพ็กเกจและราคา
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
