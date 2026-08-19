import PricingClient from './PricingClient';

export const metadata = {
  title: 'แพ็กเกจและราคาทำเว็บไซต์',
  description:
    'แพ็กเกจทำเว็บไซต์ 4 ระดับ เริ่มต้น 29,000 บาท รวม VAT ตั้งแต่ Company Profile จนถึง Web System พร้อมตารางเปรียบเทียบและขอบเขตงานที่ระบุชัดเจน',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return <PricingClient />;
}
