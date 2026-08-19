import ContactClient from './ContactClient';

export const metadata = {
  title: 'ติดต่อเรา',
  description:
    'ติดต่อ EFFICIENCY เพื่อขอใบเสนอราคาเว็บไซต์ ส่งรายละเอียดโปรเจกต์เบื้องต้น แล้วเราจะสรุปแพ็กเกจที่เหมาะสม ขอบเขตงาน และระยะเวลากลับไปให้',
  alternates: { canonical: '/contact' },
};

export default async function ContactPage({ searchParams }) {
  // มาจากปุ่ม "ขอใบเสนอราคาแพ็กเกจนี้" — อ่านฝั่งเซิร์ฟเวอร์
  // เพื่อให้ฟอร์มอยู่ใน HTML ตั้งแต่แรกและ hydrate ได้ตามปกติ
  const params = await searchParams;
  const pkgKey = typeof params?.pkg === 'string' ? params.pkg : null;

  return <ContactClient pkgKey={pkgKey} />;
}
