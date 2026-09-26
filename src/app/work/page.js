import { Band, SectionHead } from '@/components/ui/Section';
import WorkClient from './WorkClient';
import { PROJECTS, CONTACT } from '@/lib/content';

export const metadata = {
  title: 'ผลงานเว็บไซต์',
  description:
    'ผลงานเว็บไซต์ 11 โครงการที่เปิดใช้งานจริง ตั้งแต่แพลตฟอร์มที่มีระบบสมาชิก เว็บไซต์แบรนด์ จนถึงเว็บไซต์องค์กร พัฒนาด้วย Next.js, TanStack Start และ WordPress',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  const stacks = [...new Set(PROJECTS.map((p) => p.stack))];

  return (
    <>
      <Band tight className="has-mesh has-mesh--bleed page-top">
        <div className="mesh mesh--page" aria-hidden="true" style={{ right: '-18%', top: '-58%' }} />
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="display-s" style={{ maxWidth: '16ch' }}>
              Selected work.
            </h1>
            <p className="lede mt-7">
              สิบเอ็ดโครงการที่เปิดใช้งานจริง ออกแบบและพัฒนาเองตั้งแต่ต้นทั้งหมด
              กดที่ชื่อเพื่อเปิดเว็บไซต์จริง บางโครงการยังอยู่บนโดเมนชั่วคราว เราจึงแสดงเฉพาะชื่อ
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="label">เทคโนโลยีที่ใช้ในชุดนี้</p>
            <p className="mono mt-3" style={{ fontSize: 'var(--text-lg)', lineHeight: 1.6 }}>
              {stacks.join(' · ')}
            </p>
          </div>
        </div>

        <WorkClient />
      </Band>

      <Band rule="ink" tight>
        <div className="cols gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <SectionHead
              title="งานของคุณใกล้เคียงกับอันไหน"
              lede="โทรมาเล่าได้เลย เราเทียบกับงานที่ทำมาแล้วบอกได้ว่าควรเริ่มตรงไหน ใช้เวลาประมาณเท่าไร และมีอะไรที่ต้องตัดสินใจก่อน"
            />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">
            <a href={CONTACT.phoneHref} className="btn btn--call w-full">
              โทร {CONTACT.phone}
            </a>
          </div>
        </div>
      </Band>
    </>
  );
}
