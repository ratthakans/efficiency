'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Search, Sparkles, MessageSquareText, Plus, Minus,
  Building2, Target, Boxes, LifeBuoy, ShieldCheck, Gauge, FileCheck2,
} from 'lucide-react';
import Section, { SectionHead, FadeIn } from '@/components/ui/Section';
import PackageCard from '@/components/PackageCard';
import KeyTermsStrip from '@/components/KeyTermsStrip';
import Testimonials from '@/components/Testimonials';
import { accentAt } from '@/lib/accents';
import {
  PACKAGES, PROJECTS, PROCESS_STEPS, FAQS, NO_CHECKOUT_NOTE,
} from '@/lib/content';

/* ── ข้อมูลเฉพาะหน้าแรก ─────────────────────────────────────── */
const TRUST_STATS = [
  { value: '4', unit: 'ระดับ', label: 'แพ็กเกจที่ขอบเขตชัดเจน' },
  { value: '29,000', unit: 'บาท', label: 'ราคาเริ่มต้น พร้อมเปิดใช้งาน' },
  { value: '10-15', unit: 'วัน', label: 'ระยะเวลาเริ่มต้นถึงเปิดเว็บ' },
  { value: '90', unit: 'วัน', label: 'รับประกันข้อผิดพลาดสูงสุด' },
];

const DISCOVERY_CHANNELS = [
  {
    icon: Search,
    accentIdx: 1,
    label: 'SEARCH',
    title: 'ค้นพบผ่านการค้นหา',
    desc: 'โครงสร้างหน้า คีย์เวิร์ด และ Structured Data ที่ถูกต้อง ทำให้เว็บไซต์ถูกจัดเก็บและแสดงผลได้ตรงกับสิ่งที่ธุรกิจทำจริง',
  },
  {
    icon: Sparkles,
    accentIdx: 3,
    label: 'AI',
    title: 'เข้าใจผ่าน AI',
    desc: 'วางข้อมูลบริการ คำถามที่พบบ่อย และรายละเอียดธุรกิจในรูปแบบที่ระบบ AI อ่านและสรุปต่อได้ ไม่ตกหล่นเมื่อลูกค้าถามผ่านผู้ช่วย AI',
  },
  {
    icon: MessageSquareText,
    accentIdx: 2,
    label: 'CONTACT',
    title: 'ตัดสินใจติดต่อได้ง่ายขึ้น',
    desc: 'เส้นทางสู่การติดต่อชัดเจนทุกหน้า ทั้ง LINE โทรศัพท์ อีเมล และแบบฟอร์ม พร้อมการวัดผลว่าช่องทางใดสร้างการติดต่อจริง',
  },
];

const SERVICES = [
  {
    icon: Building2,
    accentIdx: 0,
    title: 'Company Profile',
    desc: 'เว็บไซต์แนะนำบริษัทที่ดูน่าเชื่อถือ อ่านง่ายทุกหน้าจอ และมีช่องทางติดต่อครบ',
    points: ['ไม่เกิน 5 หน้า', 'Responsive ทุกขนาดจอ', 'แบบฟอร์ม + SSL'],
  },
  {
    icon: Target,
    accentIdx: 2,
    title: 'เว็บไซต์สร้าง Lead',
    desc: 'สำหรับธุรกิจหลายบริการ ที่ต้องการหน้าเฉพาะ บทความ และการวัดผลที่ชัดเจน',
    points: ['ไม่เกิน 8 หน้า', 'Case Study + บทความ', 'Conversion Tracking'],
  },
  {
    icon: Boxes,
    accentIdx: 3,
    title: 'Web System',
    desc: 'เว็บไซต์ที่ผู้ใช้ต้อง Login ทำรายการ และมีหลังบ้านให้ทีมงานจัดการข้อมูล',
    points: ['Member Login', 'Workflow + Admin', 'API + Notification'],
  },
  {
    icon: LifeBuoy,
    accentIdx: 1,
    title: 'ดูแลหลังเปิดเว็บไซต์',
    desc: 'ดูแลด้านเทคนิคและเนื้อหาต่อเนื่อง แยกขอบเขตและค่าใช้จ่ายให้ชัดเจน',
    points: ['Technical Care', 'Content Care', 'System Care ตาม SLA'],
  },
];

/* ── หน้าแรก ─────────────────────────────────────────────────── */
export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div>
      {/* ══ Hero ══════════════════════════════════════════════ */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-16 items-center">

            {/* ซ้าย — ใช้ CSS animation เพราะเป็นเนื้อหาส่วนบนสุดของหน้า
                 จึงไม่ควรต้องรอ JavaScript ก่อนจึงจะมองเห็น */}
            <div>
              <div className="animate-fade-in-up">
                <span className="pill pill-brand pill-dot font-mono text-[11.5px] tracking-[0.14em] uppercase">
                  Web Development Studio · Thailand
                </span>
              </div>

              <h1 className="mt-7 text-[38px] sm:text-[46px] xl:text-[56px] font-semibold tracking-tight text-ink leading-[1.22] animate-fade-in-up animation-delay-100">
                ให้เว็บไซต์ของคุณ
                <br />
                <span className="text-brand">เป็นคำตอบ</span>ที่ลูกค้ามั่นใจ
              </h1>

              <p className="lead text-[17px] mt-6 max-w-xl animate-fade-in-up animation-delay-200">
                เราออกแบบและพัฒนาเว็บไซต์ให้ธุรกิจไทย ตั้งแต่ Company Profile
                จนถึง Web System ที่มีสมาชิกและหลังบ้าน
                ด้วยขอบเขตงานและราคาที่ชัดเจนตั้งแต่ก่อนเริ่ม
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3 animate-fade-in-up animation-delay-300">
                <Link href="/contact" className="btn btn-primary">
                  โทรมาถามได้เลย
                  <ArrowRight size={16} />
                </Link>
                <Link href="/pricing" className="btn btn-secondary">
                  ดูแพ็กเกจและราคา
                </Link>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 text-[14.5px] text-ink-2 animate-fade-in-up animation-delay-400">
                <span className="inline-flex items-center gap-2 rounded-lg bg-brand px-3 py-1.5 text-white self-start whitespace-nowrap">
                  <span className="text-[12.5px]">แพ็กเกจเริ่มต้น</span>
                  <span className="num text-[17px] font-semibold">29,000</span>
                  <span className="text-[12.5px]">บาท</span>
                </span>
                <span className="text-ink-3">ราคาชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง</span>
              </div>
            </div>

            {/* ขวา — ภาพจำลองเว็บไซต์ */}
            <div className="relative mb-24 lg:mb-28 animate-fade-in-up animation-delay-300" aria-hidden="true">
              <div className="browser-frame">
                <div className="browser-bar">
                  <span className="browser-dot" style={{ background: '#ff5f57' }} />
                  <span className="browser-dot" style={{ background: '#febc2e' }} />
                  <span className="browser-dot" style={{ background: '#28c840' }} />
                  <span className="ml-3 flex-1 rounded-md bg-white border border-line px-3 py-1 font-mono text-[11px] text-ink-3">
                    yourcompany.co.th
                  </span>
                </div>

                <div className="p-5 sm:p-7">
                  {/* แถบเมนูจำลอง */}
                  <div className="flex items-center justify-between pb-4 border-b border-line-soft">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-brand" />
                      <span className="font-mono text-[10.5px] tracking-[0.2em] text-ink-2">COMPANY</span>
                    </div>
                    <div className="hidden sm:flex gap-3">
                      {['หน้าแรก', 'บริการ', 'ผลงาน', 'ติดต่อ'].map((t) => (
                        <span key={t} className="text-[10.5px] text-ink-3">{t}</span>
                      ))}
                    </div>
                    <span className="rounded bg-brand px-2.5 py-1 text-[10px] text-white">ติดต่อเรา</span>
                  </div>

                  {/* เนื้อหาจำลอง */}
                  <div className="pt-6 grid sm:grid-cols-[1.2fr_1fr] gap-5 items-center">
                    <div>
                      <p className="text-[19px] sm:text-[22px] font-semibold text-ink leading-snug">
                        พัฒนาเว็บไซต์
                        <br />
                        ที่ธุรกิจใช้ทำงานได้จริง
                      </p>
                      <p className="mt-2.5 text-[12px] text-ink-3 leading-relaxed">
                        ออกแบบ พัฒนา และดูแลต่อเนื่อง
                        <br />
                        พร้อมโครงสร้างสำหรับ Search และ AI
                      </p>
                      <span className="mt-4 inline-block rounded bg-ink px-3 py-1.5 text-[10.5px] text-white">
                        เริ่มต้นพูดคุย
                      </span>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-brand-soft to-white border border-line h-[110px] sm:h-[130px] flex items-center justify-center">
                      <div className="w-2/3 space-y-1.5">
                        <span className="block h-1.5 rounded-full bg-brand/30" />
                        <span className="block h-1.5 w-4/5 rounded-full bg-brand/20" />
                        <span className="block h-1.5 w-3/5 rounded-full bg-brand/15" />
                      </div>
                    </div>
                  </div>

                  {/* ตัวเลขจำลอง */}
                  <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-line-soft">
                    {[
                      ['12+', 'ปีประสบการณ์'],
                      ['250+', 'โครงการ'],
                      ['98%', 'ความพึงพอใจ'],
                    ].map(([v, l]) => (
                      <div key={l} className="text-center">
                        <p className="num text-[15px] font-semibold text-ink">{v}</p>
                        <p className="text-[10px] text-ink-3 mt-0.5">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* การ์ดผลการค้นหาลอย */}
              <div className="hidden sm:block absolute -bottom-32 -left-6 w-[290px] card p-4 shadow-lg">
                <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-line-soft">
                  <Search size={13} className="text-ink-3" />
                  <span className="text-[11.5px] text-ink-2">รับทำเว็บไซต์บริษัท</span>
                </div>
                <p className="text-[10.5px] text-ink-3 font-mono">yourcompany.co.th</p>
                <p className="text-[13px] text-brand font-medium mt-0.5">รับทำเว็บไซต์บริษัท ครบวงจร</p>
                <p className="text-[11px] text-ink-3 leading-relaxed mt-1">
                  ออกแบบและพัฒนาเว็บไซต์มืออาชีพ ช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ แถบตัวเลขความน่าเชื่อถือ ═══════════════════════════ */}
      <section className="border-y border-line bg-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.06}>
                <p className="flex items-baseline gap-1.5">
                  <span className="num text-[26px] md:text-[30px] font-semibold text-ink">{s.value}</span>
                  <span className="text-[14px] text-ink-3">{s.unit}</span>
                </p>
                <p className="text-[14px] text-ink-2 mt-1 leading-snug">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ผลงานที่ผ่านมา ═════════════════════════════════════ */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHead
            label="Selected work"
            title="ผลงานที่เปิดใช้งานจริง"
            desc="กดเข้าไปดูของจริงได้ทุกเว็บ ไม่ต้องรอให้เราส่งไฟล์ตัวอย่างให้"
          />
          <Link href="/work" className="btn btn-secondary btn-sm shrink-0">
            ดูผลงานทั้งหมด
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0">
          {PROJECTS.map((p, i) => {
            const accent = accentAt(p.accentIdx);
            return (
              <FadeIn key={p.key} delay={i * 0.05} className="h-full min-w-[80%] snap-start sm:min-w-0">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover h-full flex flex-col group overflow-hidden"
                  style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
                  aria-label={`เปิดเว็บไซต์ ${p.name} (${p.domain}) ในแท็บใหม่`}
                >
                  <div className="relative overflow-hidden bg-soft border-b border-line" style={{ aspectRatio: '16 / 10' }}>
                    <Image
                      src={p.image}
                      alt={`หน้าแรกของเว็บไซต์ ${p.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="text-[18px] font-semibold tracking-tight text-ink">{p.name}</span>
                      <ArrowUpRight size={17} className="text-ink-3 mt-1 shrink-0 group-hover:text-brand transition-colors" />
                    </div>
                    <p className="font-mono text-[11px] tracking-[0.14em] mb-2" style={{ color: accent.hex }}>
                      {p.category}
                    </p>
                    <p className="text-[14.5px] text-ink-2 leading-relaxed">{p.type}</p>
                    <p className="text-[13px] text-ink-3 mt-2">{p.role}</p>
                    <p className="mt-auto pt-4 font-mono text-[12.5px] text-ink-3 group-hover:text-brand transition-colors">
                      {p.domain}
                    </p>
                  </div>
                </a>
              </FadeIn>
            );
          })}

          <FadeIn delay={0.3} className="h-full min-w-[80%] snap-start sm:min-w-0">
            <Link
              href="/work"
              className="h-full min-h-[260px] rounded-[18px] border border-dashed border-line bg-soft/60 p-6 flex flex-col justify-center items-start hover:border-brand hover:bg-brand-soft/40 transition-colors"
            >
              <p className="text-[16px] font-medium text-ink">ดูขอบเขตงานแต่ละแบบ</p>
              <p className="text-[14px] text-ink-2 mt-1.5 leading-relaxed">
                พร้อมตัวอย่างงานตามแพ็กเกจ และระยะเวลาโดยประมาณ
              </p>
              <span className="inline-flex items-center gap-1.5 text-[14px] text-brand mt-4">
                ไปหน้าผลงาน
                <ArrowRight size={15} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* ══ คำรับรองจากลูกค้า (แสดงเมื่อมีข้อความที่อนุมัติแล้ว) ══ */}
      <Testimonials tone="soft" />

      {/* ══ แพ็กเกจ ═══════════════════════════════════════════ */}
      <Section id="packages" tone="soft">
        <SectionHead
          label="Packages"
          title="4 ระดับการลงทุนที่เข้าใจง่าย"
          desc="ตั้งแต่ Company Profile จนถึง Web System ขนาดเล็ก ทุกแพ็กเกจรองรับทุกขนาดหน้าจอ และมีขอบเขตงานระบุชัดเจนก่อนเริ่ม"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {PACKAGES.map((pkg, i) => (
            <FadeIn key={pkg.key} delay={i * 0.07} className="h-full">
              <PackageCard pkg={pkg} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <KeyTermsStrip className="mt-6" />
        </FadeIn>

        <FadeIn delay={0.14}>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-line bg-white px-6 py-5">
            <p className="text-[14.5px] text-ink-2">
              แพ็กเกจ System เป็นราคาเริ่มต้น ขอบเขตนอกแพ็กเกจประเมินเพิ่มตาม Scope ที่ตกลงร่วมกัน
              <span className="block text-ink-3 mt-1">{NO_CHECKOUT_NOTE}</span>
            </p>
            <Link href="/pricing" className="btn btn-secondary btn-sm shrink-0">
              เปรียบเทียบทุกแพ็กเกจ
              <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* ══ ช่องทางที่ลูกค้าค้นหาคุณ ═══════════════════════════ */}
      <Section>
        <SectionHead
          label="Why it matters"
          title="วันนี้ลูกค้าค้นหาคุณมากกว่าหนึ่งทาง"
          desc="เว็บไซต์ที่ดีต้องถูกค้นพบผ่าน Search เข้าใจได้ด้วย AI และพาผู้เข้าชมไปสู่การติดต่อได้จริง ทั้งสามอย่างนี้อยู่ในทุกแพ็กเกจของเรา"
        />

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {DISCOVERY_CHANNELS.map((c, i) => {
            const accent = accentAt(c.accentIdx);
            const Icon = c.icon;
            return (
              <FadeIn key={c.label} delay={i * 0.08}>
                <div
                  className="card card-hover card-accent h-full p-7"
                  style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
                >
                  <span className="icon-box w-11 h-11 mb-5">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <p className="eyebrow mb-2">{c.label}</p>
                  <h3 className="text-[19px] font-semibold text-ink mb-3">{c.title}</h3>
                  <p className="text-[15px] text-ink-2 leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ บริการ ═══════════════════════════════════════════ */}
      <Section tone="soft">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHead
            label="Services"
            title="สิ่งที่เรารับทำ"
            desc="ตั้งแต่เว็บไซต์แนะนำบริษัท จนถึงระบบที่มีสมาชิกและหลังบ้าน พร้อมบริการดูแลต่อเนื่องหลังเปิดใช้งาน"
          />
          <Link href="/services" className="btn btn-secondary btn-sm shrink-0">
            ดูบริการทั้งหมด
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {SERVICES.map((s, i) => {
            const accent = accentAt(s.accentIdx);
            const Icon = s.icon;
            return (
              <FadeIn key={s.title} delay={i * 0.07}>
                <div
                  className="card card-hover h-full p-6"
                  style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
                >
                  <span className="icon-box w-10 h-10 mb-5">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-[17px] font-semibold text-ink mb-2.5">{s.title}</h3>
                  <p className="text-[14.5px] text-ink-2 leading-relaxed mb-5">{s.desc}</p>
                  <ul className="space-y-1.5 pt-4 border-t border-line-soft">
                    {s.points.map((p) => (
                      <li key={p} className="text-[13.5px] text-ink-3 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: accent.hex }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ ขั้นตอนการทำงาน ═══════════════════════════════════ */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHead
            label="Process"
            title="ขั้นตอนการทำงาน 6 ขั้น"
            desc="ทุกโครงการเดินตามลำดับเดียวกัน คุณจึงรู้ล่วงหน้าว่าขั้นตอนถัดไปคืออะไร และต้องเตรียมอะไรบ้าง"
          />
          <Link href="/process" className="btn btn-secondary btn-sm shrink-0">
            ดูรายละเอียดแต่ละขั้น
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {PROCESS_STEPS.map((step, i) => {
            const accent = accentAt(step.accentIdx);
            return (
              <FadeIn key={step.key} delay={i * 0.06}>
                <div className="card card-hover h-full p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="num w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-semibold"
                      style={{ background: accent.soft, color: accent.hex }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-mono text-[12px] tracking-[0.14em] uppercase text-ink-3">{step.label}</p>
                      <p className="text-[15.5px] font-medium text-ink leading-tight">{step.thai}</p>
                    </div>
                  </div>
                  <p className="text-[14.5px] text-ink-2 leading-relaxed">{step.short}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ สิ่งที่ได้รับ ══════════════════════════════════════ */}
      <Section tone="soft">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
          <SectionHead
            label="Deliverables"
            title="จบโครงการแล้วคุณได้อะไรบ้าง"
            desc="รายการส่งมอบระบุไว้ในใบเสนอราคา ตรวจรับได้จริง และส่งมอบสิทธิ์การเข้าถึงอย่างปลอดภัย ไม่ใช่แค่ส่งลิงก์เว็บไซต์ให้"
          />
          <FadeIn delay={0.1}>
            <Link href="/process#deliverables" className="btn btn-secondary btn-sm shrink-0">
              ดูรายการส่งมอบทั้งหมด
              <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {[
            { icon: ShieldCheck, label: 'รับประกันข้อผิดพลาด', value: '30-90 วัน' },
            { icon: Gauge, label: 'ตรวจ Responsive', value: '3 ขนาดหน้าจอ' },
            { icon: FileCheck2, label: 'อบรมส่งมอบ', value: '1 ครั้ง + Checklist' },
          ].map((b, i) => (
            <FadeIn key={b.label} delay={i * 0.06}>
              <div className="card p-6">
                <b.icon size={19} className="text-brand mb-3" strokeWidth={1.8} />
                <p className="text-[13.5px] text-ink-3">{b.label}</p>
                <p className="text-[16px] font-medium text-ink mt-0.5">{b.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ══ คำถามที่พบบ่อย ════════════════════════════════════ */}
      <Section>
        <SectionHead
          label="FAQ"
          title="คำถามที่พบบ่อย"
          desc="หากยังไม่พบคำตอบที่ต้องการ ทักมาถามได้โดยตรง เรายินดีตอบก่อนตัดสินใจ"
          align="center"
        />

        <div className="max-w-3xl mx-auto mt-12 divide-y divide-line border-y border-line bg-white rounded-xl px-6">
          {FAQS.slice(0, 4).map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[16px] leading-snug ${isOpen ? 'text-ink font-medium' : 'text-ink-2'}`}>
                    {faq.q}
                  </span>
                  <span className="mt-1 shrink-0 text-ink-3">
                    {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-[15px] text-ink-2 leading-relaxed pb-6 pr-10">{faq.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto mt-7 text-center">
            <Link href="/pricing#faq" className="btn btn-secondary btn-sm">
              ดูคำถามที่พบบ่อยทั้งหมด
              <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <Section className="pb-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-14 md:px-16 md:py-18 text-center">
            <div
              className="absolute inset-0 dot-grid opacity-[0.14]"
              style={{ filter: 'invert(1)' }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-mono text-[11.5px] tracking-[0.18em] uppercase text-white/50">
                Get started
              </p>
              <h2 className="text-[27px] md:text-[36px] font-semibold text-white mt-4 max-w-2xl mx-auto leading-snug">
                ยกหูโทรมาคุยกันก่อนได้เลย
              </h2>
              <p className="text-[16px] text-white/65 mt-4 max-w-xl mx-auto leading-relaxed">
                ไม่ต้องกรอกฟอร์มหรือเตรียมเอกสารก่อน โทรมาเล่าสั้น ๆ ว่าอยากได้เว็บไซต์แบบไหน
                เราบอกได้ทันทีว่าอยู่ในแพ็กเกจไหนและใช้เวลาประมาณเท่าไร
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  โทรมาถามได้เลย
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/pricing"
                  className="btn text-white border border-white/20 hover:bg-white/10"
                >
                  ดูแพ็กเกจและราคา
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
