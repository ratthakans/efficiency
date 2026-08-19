import AboutClient from './AboutClient';

export const metadata = {
  title: 'เกี่ยวกับเรา',
  description:
    'EFFICIENCY สตูดิโอออกแบบและพัฒนาเว็บไซต์สำหรับธุรกิจไทย ยึดหลักขอบเขตชัดเจนก่อนเริ่ม เนื้อหาสำคัญเท่าดีไซน์ และส่งมอบให้ตรวจรับได้จริง',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutClient />;
}
