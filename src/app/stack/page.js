import StackClient from './StackClient';

export const metadata = {
  title: 'เทคโนโลยีที่ใช้',
  description:
    'เทคโนโลยีที่ใช้พัฒนาเว็บไซต์และระบบ ตั้งแต่ Next.js, React, Node.js, PostgreSQL, Headless CMS จนถึงการนำขึ้นระบบ การวัดผล และวิธีทำงานของทีม',
  alternates: { canonical: '/stack' },
};

export default function StackPage() {
  return <StackClient />;
}
