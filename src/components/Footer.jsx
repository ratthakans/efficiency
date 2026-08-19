import Link from 'next/link';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { CONTACT } from '@/lib/content';

const SITE_LINKS = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'บริการ', href: '/services' },
  { label: 'แพ็กเกจและราคา', href: '/pricing' },
  { label: 'ขั้นตอนการทำงาน', href: '/process' },
];

const MORE_LINKS = [
  { label: 'ผลงาน', href: '/work' },
  { label: 'เทคโนโลยีที่ใช้', href: '/stack' },
  { label: 'เกี่ยวกับเรา', href: '/about' },
  { label: 'ติดต่อเรา', href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* แบรนด์ */}
          <div className="col-span-2">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-mono text-[13px] font-semibold tracking-[0.22em] uppercase text-ink">
                EFFICIENCY
              </span>
              <span className="text-brand text-lg font-bold leading-none" aria-hidden="true">.</span>
            </div>
            <p className="text-[15px] text-ink-2 leading-relaxed max-w-sm">
              สตูดิโอออกแบบและพัฒนาเว็บไซต์สำหรับธุรกิจไทย
              ตั้งแต่ Company Profile จนถึง Web System ที่มีสมาชิกและหลังบ้าน
            </p>
            <p className="mt-4 text-sm text-ink-3">
              แพ็กเกจเริ่มต้น <span className="num text-ink font-medium">29,000</span> บาท · ขอบเขตชัดเจนก่อนเริ่มงาน
            </p>
          </div>

          {/* เมนู */}
          <nav aria-label="เมนูส่วนท้าย">
            <p className="label-th mb-4">เมนู</p>
            <ul className="space-y-1">
              {SITE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block py-2.5 text-[15px] text-ink-2 hover:text-brand transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-1">
              {MORE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block py-2.5 text-[15px] text-ink-2 hover:text-brand transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ติดต่อ */}
          <div>
            <p className="label-th mb-4">ติดต่อ</p>
            <ul className="space-y-3 text-[15px] text-ink-2">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-start gap-2.5 py-2.5 hover:text-brand transition-colors">
                  <Mail size={16} className="mt-1 shrink-0 text-ink-3" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="inline-flex items-start gap-2.5 py-2.5 hover:text-brand transition-colors">
                  <Phone size={16} className="mt-1 shrink-0 text-ink-3" />
                  <span className="num">{CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 py-1.5 text-sm leading-relaxed text-ink-3 hover:text-brand transition-colors"
                >
                  <MapPin size={16} className="mt-1 shrink-0" />
                  <span>
                    {CONTACT.address[0]}
                    <br />
                    {CONTACT.address[1]}
                    <span className="inline-flex items-center gap-1 ml-1.5 text-brand">
                      ดูแผนที่
                      <ExternalLink size={12} />
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line space-y-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1.5">
            <p className="text-[13.5px] text-ink-2">
              {CONTACT.companyTh} · {CONTACT.companyEn}
            </p>
            <p className="text-[13px] text-ink-3">
              เลขทะเบียนนิติบุคคล <span className="num">{CONTACT.registrationNo}</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1.5">
            <p className="text-[13px] text-ink-3">
              © {year} {CONTACT.companyTh} · สงวนลิขสิทธิ์ ·{' '}
              <Link href="/privacy" className="hover:text-brand transition-colors underline underline-offset-2">
                นโยบายความเป็นส่วนตัว
              </Link>
            </p>
            <p className="text-[13px] text-ink-3">
              ราคาและขอบเขตในเว็บไซต์เป็นข้อมูลเบื้องต้น ยึดตามใบเสนอราคาที่ยืนยันร่วมกัน
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
