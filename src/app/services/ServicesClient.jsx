'use client';

import Link from 'next/link';
import {
  ArrowRight, Building2, Target, Boxes, Search, LifeBuoy,
  Smartphone, ShieldCheck, MessageSquareText, BarChart3, Gauge, FileCode2,
} from 'lucide-react';
import Section, { SectionHead, FadeIn, CheckItem, PageHero } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';
import { FIT_GUIDE, DISCOVERY_QUESTIONS } from '@/lib/content';

const SERVICES = [
  {
    icon: Building2,
    accentIdx: 0,
    label: 'COMPANY PROFILE',
    title: 'เว็บไซต์แนะนำบริษัท',
    desc: 'เว็บไซต์ที่ทำให้ลูกค้าเข้าใจว่าคุณทำอะไร เชื่อถือได้แค่ไหน และติดต่อได้อย่างไร ภายในไม่กี่วินาทีแรกที่เข้าชม',
    items: [
      'โครงสร้างเว็บไซต์ไม่เกิน 5 หน้า',
      'ออกแบบให้อ่านง่ายทั้งมือถือและเดสก์ท็อป',
      'เชื่อม LINE โทรศัพท์ อีเมล Social และ Maps',
      'แบบฟอร์มติดต่อ พร้อม SSL/HTTPS',
      'เขียนและเรียบเรียงเนื้อหาไทย (แพ็กเกจ Business)',
    ],
    tiers: ['STARTER 29,000', 'BUSINESS 39,000'],
  },
  {
    icon: Target,
    accentIdx: 2,
    label: 'LEAD GENERATION',
    title: 'เว็บไซต์ที่สร้าง Lead',
    desc: 'สำหรับธุรกิจที่มีหลายบริการ ต้องการหน้าเฉพาะเพื่อเพิ่มโอกาสถูกค้นพบ และต้องรู้ว่าช่องทางไหนสร้างการติดต่อจริง',
    items: [
      'เว็บไซต์ไม่เกิน 8 หน้า พร้อมเนื้อหาครบ',
      'หน้า Portfolio / Case Study / FAQ',
      'บทความความรู้ 2 เรื่องเพื่อเริ่มสร้างการค้นพบ',
      'สำรวจคีย์เวิร์ดและวาง Structured Data',
      'Conversion Tracking และดูแลระบบฟรี 3 เดือน',
    ],
    tiers: ['GROWTH 59,000'],
  },
  {
    icon: Boxes,
    accentIdx: 3,
    label: 'WEB SYSTEM',
    title: 'เว็บไซต์ที่ทำงานเป็นระบบ',
    desc: 'เมื่อเว็บไซต์ต้องมีสมาชิก ฐานข้อมูล ขั้นตอนการทำงาน และหลังบ้านให้ทีมงานจัดการข้อมูลได้เอง',
    items: [
      'ออกแบบ UX/UI ไม่เกิน 10 Screens',
      'Member Login ไม่เกิน 2 User Roles',
      'Workflow หลัก 1 กระบวนการ',
      'Admin Dashboard 1 Module และ Database 5 กลุ่มข้อมูล',
      'API มาตรฐาน 1 Service และ Email Notification 1 Flow',
    ],
    tiers: ['SYSTEM เริ่มต้น 129,000'],
  },
  {
    icon: Search,
    accentIdx: 1,
    label: 'SEO / AEO / GEO',
    title: 'โครงสร้างสำหรับ Search และ AI',
    desc: 'วางรากฐานให้เว็บไซต์ถูกจัดเก็บ เข้าใจ และนำไปตอบคำถามได้ ทั้งจากเครื่องมือค้นหาและผู้ช่วย AI',
    items: [
      'โครงสร้าง Heading และ Metadata ที่ถูกต้อง',
      'คีย์เวิร์ดหลักประจำแต่ละหน้า',
      'Structured Data ตามประเภทธุรกิจ',
      'ติดตั้ง Analytics และ Search Console',
      'ปรับภาพและความเร็วในการโหลดเบื้องต้น',
    ],
    tiers: ['รวมอยู่ในทุกแพ็กเกจ'],
    note: 'วางโครงสร้างพื้นฐานให้ถูกต้อง แต่ไม่รวมบริการ SEO รายเดือน และไม่รับประกันอันดับการค้นหา',
  },
  {
    icon: LifeBuoy,
    accentIdx: 4,
    label: 'CARE',
    title: 'ดูแลหลังเปิดเว็บไซต์',
    desc: 'เว็บไซต์ที่เปิดแล้วยังต้องมีคนดูแล ทั้งด้านเทคนิคและเนื้อหา เราแยกขอบเขตให้ชัดเจนเพื่อไม่ให้ค่าใช้จ่ายบานปลาย',
    items: [
      'ตรวจ SSL แบบฟอร์ม และช่องทางติดต่อ',
      'สำรองข้อมูลและอัปเดตส่วนประกอบของระบบ',
      'แก้ข้อความหรือรูปภาพขนาดเล็ก (Content Care)',
      'System Care สำหรับงานระบบ ประเมินตาม SLA',
    ],
    tiers: ['1,500 / เดือน', '3,500 / เดือน'],
  },
];

const BASELINE = [
  { icon: Smartphone, title: 'Responsive ทุกขนาดหน้าจอ', desc: 'ตรวจการแสดงผลจริงบน Desktop, Tablet และ Mobile ก่อนส่งมอบ' },
  { icon: ShieldCheck, title: 'SSL / HTTPS', desc: 'ติดตั้งใบรับรองความปลอดภัยและตรวจการเชื่อมต่อให้เรียบร้อย' },
  { icon: MessageSquareText, title: 'ช่องทางติดต่อครบ', desc: 'LINE โทรศัพท์ อีเมล Social และ Maps เชื่อมจากทุกหน้าที่จำเป็น' },
  { icon: BarChart3, title: 'Analytics + Search Console', desc: 'ติดตั้งเครื่องมือวัดผลตั้งแต่วันเปิดใช้งาน ไม่ต้องตามเก็บทีหลัง' },
  { icon: Gauge, title: 'ปรับภาพและความเร็ว', desc: 'จัดการขนาดไฟล์ภาพและการโหลดหน้าให้เหมาะกับการใช้งานจริง' },
  { icon: FileCode2, title: 'ส่งมอบพร้อมสิทธิ์เข้าถึง', desc: 'บัญชีผู้ดูแล รายการโดเมนและโฮสติ้ง พร้อม Checklist ตรวจรับ' },
];

export default function ServicesClient() {
  return (
    <div>
      <PageHero
        label="Services"
        title="เรารับทำเว็บไซต์แบบไหนบ้าง"
        desc="ตั้งแต่เว็บไซต์แนะนำบริษัท จนถึงระบบที่มีสมาชิกและหลังบ้าน ทุกงานเริ่มจากคำถามเดียวกันว่า เว็บไซต์นี้ต้องทำอะไรให้ธุรกิจ"
      >
        <Link href="/pricing" className="btn btn-primary">
          ดูแพ็กเกจและราคา
          <ArrowRight size={16} />
        </Link>
      </PageHero>

      {/* ══ บริการหลัก ════════════════════════════════════════ */}
      <Section tightTop>
        <div className="space-y-5">
          {SERVICES.map((s, i) => {
            const accent = accentAt(s.accentIdx);
            const Icon = s.icon;
            return (
              <FadeIn key={s.label} delay={i * 0.05}>
                <div
                  className="card card-hover p-7 md:p-9 grid lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-12"
                  style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
                >
                  <div>
                    <span className="icon-box w-12 h-12 mb-5">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <p className="font-mono text-[11.5px] tracking-[0.16em] mb-2" style={{ color: accent.hex }}>
                      {s.label}
                    </p>
                    <h2 className="text-[21px] font-semibold text-ink mb-3">{s.title}</h2>
                    <p className="text-[15px] text-ink-2 leading-relaxed">{s.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {s.tiers.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:border-l border-line-soft lg:pl-12">
                    <p className="label-th mb-4">ขอบเขตงาน</p>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {s.items.map((it) => (
                        <CheckItem key={it} accent={accent.hex}>{it}</CheckItem>
                      ))}
                    </ul>
                    {s.note && (
                      <p className="mt-5 pt-5 border-t border-line-soft text-[13.5px] text-ink-3 leading-relaxed">
                        {s.note}
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ รวมอยู่ในทุกแพ็กเกจ ════════════════════════════════ */}
      <Section tone="soft">
        <SectionHead
          label="Included"
          title="สิ่งที่รวมอยู่ในทุกแพ็กเกจเว็บไซต์"
          desc="ไม่ว่าจะเลือกแพ็กเกจไหน พื้นฐานเหล่านี้มาพร้อมกันเสมอ เพราะเป็นสิ่งที่เว็บไซต์ธุรกิจต้องมี"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {BASELINE.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.05}>
              <div className="card h-full p-6">
                <b.icon size={19} className="text-brand mb-4" strokeWidth={1.8} />
                <h3 className="text-[16px] font-semibold text-ink mb-2">{b.title}</h3>
                <p className="text-[14.5px] text-ink-2 leading-relaxed">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ══ เลือกจากลักษณะงาน ═════════════════════════════════ */}
      <Section>
        <SectionHead
          label="How to choose"
          title="แพ็กเกจไหน เหมาะกับเว็บไซต์แบบไหน"
          desc="เริ่มจากสิ่งที่คุณต้องการให้เว็บไซต์ทำ แล้วขอบเขตงานที่เหมาะสมจะชัดขึ้นเอง"
        />

        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {FIT_GUIDE.map((f, i) => {
            const accent = accentAt(f.accentIdx);
            return (
              <FadeIn key={f.tier} delay={i * 0.06}>
                <div className="rule-card h-full p-6 md:p-7" style={{ '--accent': accent.hex }}>
                  <p className="font-mono text-[13px] font-semibold tracking-[0.12em] mb-3" style={{ color: accent.hex }}>
                    {f.tier}
                  </p>
                  <h3 className="text-[17.5px] font-semibold text-ink mb-2">{f.title}</h3>
                  <p className="text-[14.5px] text-ink-2 leading-relaxed mb-5">{f.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {f.audience.map((a) => (
                      <span key={a} className="tag">{a}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ คำถามก่อนเสนอราคา ═════════════════════════════════ */}
      <Section id="discovery" tone="soft" className="scroll-mt-24">
        <div className="grid lg:grid-cols-[minmax(0,420px)_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <SectionHead
              label="Discovery"
              title="6 คำถามที่เราถามก่อนเสนอราคา"
              desc="คำตอบของ 6 ข้อนี้ทำให้แยกได้ชัดว่างานของคุณคือ Company Profile เว็บสร้าง Lead หรือ Web System และช่วยให้ราคาที่เสนอตรงกับงานจริง"
            />
            <FadeIn delay={0.12}>
              <Link href="/contact" className="btn btn-primary mt-8">
                เริ่มตอบคำถามกับเรา
                <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <ol className="card divide-y divide-line-soft overflow-hidden">
              {DISCOVERY_QUESTIONS.map((q, i) => (
                <li key={q} className="flex items-start gap-4 p-5 md:px-7">
                  <span className="num w-7 h-7 rounded-lg bg-brand-soft text-brand-dark flex items-center justify-center text-[12.5px] font-semibold shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15.5px] text-ink-2 leading-relaxed pt-0.5">{q}</span>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </Section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <Section className="pb-24">
        <FadeIn>
          <div className="rounded-2xl border border-line bg-white px-8 py-12 md:px-14 md:py-14 text-center shadow-sm">
            <h2 className="text-[25px] md:text-[32px] font-semibold text-ink max-w-2xl mx-auto leading-snug">
              บอกเป้าหมายมา เราจะบอกขอบเขตที่เหมาะสมกลับไป
            </h2>
            <p className="lead text-[16px] mt-4 max-w-xl mx-auto">
              ไม่ต้องมีเอกสารพร้อมก็คุยได้ เริ่มจากเล่าธุรกิจและสิ่งที่อยากให้เว็บไซต์ทำ
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn btn-primary">
                ปรึกษาโปรเจกต์ฟรี
                <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                ดูแพ็กเกจและราคา
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
