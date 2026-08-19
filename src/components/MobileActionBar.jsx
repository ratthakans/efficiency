'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, FileText } from 'lucide-react';
import { CONTACT } from '@/lib/content';

/**
 * MobileActionBar — แถบติดต่อค้างท้ายจอบนมือถือ
 * การติดต่อหลักคือโทรศัพท์ จึงให้ปุ่มโทรกินพื้นที่หลักและกดได้จากทุกหน้า
 */
export default function MobileActionBar() {
  const pathname = usePathname();

  // อยู่ในหน้าติดต่ออยู่แล้ว ไม่ต้องแสดงซ้ำ
  if (pathname === '/contact') return null;

  // ปุ่มรองชี้ไปหน้าที่ยังไม่ได้อยู่ เพื่อไม่ให้กดแล้วไม่เกิดอะไรขึ้น
  const secondary = pathname.startsWith('/pricing')
    ? { href: '/work', label: 'ผลงาน' }
    : { href: '/pricing', label: 'ดูราคา' };

  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-line bg-white/95 backdrop-blur-xl"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-3 divide-x divide-line-soft">
        <a
          href={CONTACT.phoneHref}
          className="col-span-2 flex items-center justify-center gap-2.5 py-3 min-h-[60px] text-white bg-brand active:bg-brand-dark"
        >
          <Phone size={19} />
          <span className="text-[15px] font-medium">โทร <span className="num">{CONTACT.phone}</span></span>
        </a>
        <Link
          href={secondary.href}
          className="flex flex-col items-center justify-center gap-1 py-3 min-h-[60px] text-ink-2 active:bg-soft"
        >
          <FileText size={19} className="text-ink-3" />
          <span className="text-[12.5px]">{secondary.label}</span>
        </Link>
      </div>
    </div>
  );
}
