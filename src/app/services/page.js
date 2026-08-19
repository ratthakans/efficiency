import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'บริการรับทำเว็บไซต์',
  description:
    'บริการออกแบบและพัฒนาเว็บไซต์ ตั้งแต่ Company Profile เว็บไซต์สร้าง Lead จนถึง Web System ที่มีสมาชิกและหลังบ้าน พร้อมโครงสร้าง SEO / AEO / GEO และบริการดูแลต่อเนื่อง',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
