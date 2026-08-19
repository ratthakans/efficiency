import Link from 'next/link';

export const metadata = {
  title: 'ไม่พบหน้าที่ต้องการ',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-24 pb-20">
      <div className="text-center px-6">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="text-[34px] md:text-[48px] font-semibold tracking-tight text-ink mb-5">
          ไม่พบหน้าที่คุณกำลังมองหา
        </h1>
        <p className="lead text-[16px] mb-9 max-w-md mx-auto">
          หน้านี้อาจถูกย้าย เปลี่ยนชื่อ หรือไม่มีอยู่แล้ว ลองกลับไปหน้าแรก
          หรือดูแพ็กเกจและราคาได้จากปุ่มด้านล่าง
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary">กลับหน้าแรก</Link>
          <Link href="/pricing" className="btn btn-secondary">ดูแพ็กเกจและราคา</Link>
        </div>
      </div>
    </div>
  );
}
