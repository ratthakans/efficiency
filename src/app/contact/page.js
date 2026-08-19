import { Suspense } from 'react';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'ติดต่อเรา',
  description:
    'ติดต่อ EFFICIENCY เพื่อขอใบเสนอราคาเว็บไซต์ ส่งรายละเอียดโปรเจกต์เบื้องต้น แล้วเราจะสรุปแพ็กเกจที่เหมาะสม ขอบเขตงาน และระยะเวลากลับไปให้',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <Suspense>
      <ContactClient />
    </Suspense>
  );
}
