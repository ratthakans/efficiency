import PricingClient from './PricingClient';

export const metadata = {
  title: 'แพ็กเกจและราคาทำเว็บไซต์',
  description:
    'แพ็กเกจทำเว็บไซต์ 4 ระดับ เริ่มต้น 29,000 บาท ตั้งแต่ Company Profile จนถึง Web System ที่มีสมาชิกและหลังบ้าน พร้อมตารางเปรียบเทียบ ขอบเขตงาน และบริการดูแลหลังเปิดเว็บไซต์',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return <PricingClient />;
}
