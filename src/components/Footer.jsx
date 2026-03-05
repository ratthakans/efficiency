import Link from 'next/link';
import { ACCENTS } from '@/lib/accents';

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work',     href: '/work' },
  { label: 'Pricing',  href: '/pricing' },
  { label: 'Process',  href: '/process' },
  { label: 'Stack',    href: '/stack' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

/**
 * Server component — no client JS needed for the footer.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.05] bg-black/60 backdrop-blur-xl">
      <div className="separator-glow" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-[11px] font-mono font-semibold tracking-[0.24em] uppercase text-white">
                EFFICIENCY
              </span>
              <span className="accent-blue text-sm font-bold" aria-hidden="true">.</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-sm">
              Mobile Engineering Studio.<br />
              Mobile App · POS Systems · Embedded Software<br />
              <span className="text-white/28">From ฿375,000 — Bangkok, Thailand</span>
            </p>
            <div className="flex gap-1.5 mt-5" aria-hidden="true">
              {ACCENTS.map(a => (
                <span
                  key={a.key}
                  className="h-[2px] w-5 rounded-full opacity-60"
                  style={{ backgroundColor: a.hex }}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="code-label mb-5">Site</p>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white/80 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="code-label mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-white/45">
              <li>
                <a
                  href="mailto:hello@efficiency.co.th"
                  className="hover:text-white/80 transition-colors duration-300"
                >
                  hello@efficiency.co.th
                </a>
              </li>
              <li>
                <a
                  href="tel:+66923905464"
                  className="hover:text-white/80 transition-colors duration-300"
                >
                  +66 92 390 5464
                </a>
              </li>
              <li>LINE: @efficiency.co.th</li>
              <li className="leading-relaxed text-white/30 text-xs">
                246/8 Soi Yothinphatthana<br />
                Bang Kapi, Bangkok 10240
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/25 font-mono">
            © {year} EFFICIENCY Co., Ltd. · All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="/privacy" className="text-[11px] text-white/25 hover:text-white/50 transition-colors duration-300">Privacy</a>
            <a href="/terms"   className="text-[11px] text-white/25 hover:text-white/50 transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
