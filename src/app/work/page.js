import WorkClient from './WorkClient';

export const metadata = {
  title: 'ผลงานที่ผ่านมา',
  description:
    'ผลงานเว็บไซต์ที่เปิดใช้งานจริง ทั้งเว็บไซต์แบรนด์ เว็บไซต์บริการองค์กร เว็บไซต์สนามกอล์ฟ และแพลตฟอร์มจองที่ต่อกับแอปมือถือ พร้อมตัวอย่างขอบเขตงานตามแพ็กเกจ',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return <WorkClient />;
}
