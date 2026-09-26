import Link from 'next/link';
import { Band } from '@/components/ui/Section';

export const metadata = { title: 'Not found' };

export default function NotFound() {
  return (
    <Band>
      <div className="cols gap-y-12">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="display-s" style={{ maxWidth: '16ch' }}>
            This page did not earn its place.
          </h1>
          <p className="lede mt-7">
            หน้านี้ถูกย้าย เปลี่ยนชื่อ หรือถูกตัดทิ้งไปแล้ว
            ซึ่งตรงกับสิ่งที่เราทำกับทุกอย่างที่ไม่มีเหตุผลให้อยู่ต่อ
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/work" className="btn btn--signal">ดูผลงาน</Link>
            <Link href="/" className="btn btn--ghost">กลับหน้าแรก</Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end" style={{ overflow: 'clip' }}>
          <span className="numeral block" aria-hidden="true">404</span>
          <p className="label mt-4">Nothing unnecessary.</p>
        </div>
      </div>
    </Band>
  );
}
