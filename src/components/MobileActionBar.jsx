'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, FileText } from 'lucide-react';
import { CONTACT } from '@/lib/content';

/**
 * MobileActionBar — แถบติดต่อค้างท้ายจอบนมือถือ
 * ลูกค้าส่วนใหญ่ตัดสินใจตอนอยู่กลางหน้า จึงต้องโทรหรือขอใบเสนอราคาได้ทันทีโดยไม่ต้องเลื่อน
 */
export default function MobileActionBar() {
  const pathname = usePathname();

  // อยู่ในหน้าติดต่ออยู่แล้ว ไม่ต้องแสดงซ้ำ
  if (pathname === '/contact') return null;

  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-line bg-white/95 backdrop-blur-xl"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-2 divide-x divide-line-soft">
        <a
          href={CONTACT.phoneHref}
          className="flex flex-col items-center justify-center gap-1 py-3 min-h-[60px] text-ink-2 active:bg-soft"
        >
          <Phone size={19} className="text-brand" />
          <span className="text-[13px]">โทร {CONTACT.phone}</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 py-3 min-h-[60px] text-white bg-brand active:bg-brand-dark"
        >
          <FileText size={19} />
          <span className="text-[13px]">ขอใบเสนอราคา</span>
        </Link>
      </div>
    </div>
  );
}
