import ContactClient from './ContactClient';

export const metadata = {
  title: 'ติดต่อเรา — โทรมาถามได้เลย',
  description:
    'ติดต่อ EFFICIENCY โทร 063 859 8423 ในเวลาทำการ คุยสั้น ๆ ก็บอกได้ว่างานของคุณอยู่ในแพ็กเกจไหน ใช้เวลาเท่าไร และราคาประมาณเท่าไร',
  alternates: { canonical: '/contact' },
};

export default async function ContactPage({ searchParams }) {
  // มาจากปุ่มของแพ็กเกจ — อ่านฝั่งเซิร์ฟเวอร์เพื่อให้อยู่ใน HTML ตั้งแต่แรก
  const params = await searchParams;
  const pkgKey = typeof params?.pkg === 'string' ? params.pkg : null;

  return <ContactClient pkgKey={pkgKey} />;
}
