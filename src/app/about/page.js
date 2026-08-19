import AboutClient from './AboutClient';

export const metadata = {
  title: 'เกี่ยวกับเรา',
  description:
    'EFFICIENCY สตูดิโอออกแบบและพัฒนาเว็บไซต์สำหรับธุรกิจไทย ทำงานโดยยึดหลักขอบเขตชัดเจนก่อนเริ่ม เนื้อหาสำคัญเท่าดีไซน์ วัดผลได้ตั้งแต่วันแรก และส่งมอบให้ตรวจรับได้จริง',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutClient />;
}
