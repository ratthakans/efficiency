import ProcessClient from './ProcessClient';

export const metadata = {
  title: 'ขั้นตอนการทำงาน',
  description:
    'ขั้นตอนการทำเว็บไซต์ 6 ขั้น ตั้งแต่เก็บโจทย์ วางโครงสร้าง ออกแบบ พัฒนา ตรวจรับ จนถึงเปิดใช้งานจริง พร้อมรายการส่งมอบ รอบแก้ไข และเงื่อนไขการชำระเงิน',
  alternates: { canonical: '/process' },
};

export default function ProcessPage() {
  return <ProcessClient />;
}
