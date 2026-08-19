'use client';

import Link from 'next/link';
import {
  ArrowRight, Ruler, PenLine, BarChart3, PackageCheck, Quote,
} from 'lucide-react';
import Section, { SectionHead, FadeIn, CheckItem, PageHero } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';
import { DISCOVERY_QUESTIONS } from '@/lib/content';

const PRINCIPLES = [
  {
    icon: Ruler,
    accentIdx: 1,
    title: 'ขอบเขตชัดก่อนเริ่ม',
    desc: 'เราสรุปจำนวนหน้า รายการงาน รอบแก้ไข และสิ่งที่ไม่รวมไว้ในใบเสนอราคาเสมอ เพื่อให้ทั้งสองฝ่ายวางแผนเวลาและงบประมาณได้จริง',
  },
  {
    icon: PenLine,
    accentIdx: 2,
    title: 'เนื้อหาสำคัญเท่าดีไซน์',
    desc: 'เว็บไซต์ที่สวยแต่ไม่มีข้อความที่อธิบายธุรกิจได้ ก็ยังไม่ช่วยให้ลูกค้าตัดสินใจ เราจึงรับผิดชอบการวางโครงสร้างและเขียนเนื้อหาตั้งแต่แพ็กเกจ Business',
  },
  {
    icon: BarChart3,
    accentIdx: 3,
    title: 'วัดผลได้ตั้งแต่วันแรก',
    desc: 'ทุกเว็บไซต์ติดตั้ง Analytics และ Search Console ตั้งแต่เปิดใช้งาน เพื่อให้รู้ว่าคนเข้ามาจากไหน และช่องทางไหนสร้างการติดต่อจริง',
  },
  {
    icon: PackageCheck,
    accentIdx: 0,
    title: 'ส่งมอบให้ตรวจรับได้',
    desc: 'ส่งมอบพร้อมบัญชีผู้ดูแล รายการโดเมนและโฮสติ้ง Checklist ตรวจรับ และช่องทางแจ้งปัญหาในระยะรับประกัน ไม่ใช่แค่ส่งลิงก์แล้วจบ',
  },
];

const APPROACH = [
  'เริ่มจากคำถามว่าเว็บไซต์ต้องทำอะไรให้ธุรกิจ ก่อนคุยเรื่องจำนวนหน้า',
  'แยกให้ชัดว่างานเป็น Company Profile เว็บสร้าง Lead หรือ Web System',
  'บอกตรง ๆ เมื่องานเกินขอบเขตแพ็กเกจ พร้อมเสนอทางเลือกที่เป็นไปได้',
  'ไม่รับประกันอันดับการค้นหา แต่รับผิดชอบโครงสร้างพื้นฐานให้ถูกต้อง',
  'แยกงานดูแลระบบออกจากงานแก้เนื้อหา เพื่อให้ค่าใช้จ่ายไม่บานปลาย',
];

export default function AboutClient() {
  return (
    <div>
      <PageHero
        label="About"
        title="สตูดิโอที่ทำเว็บไซต์ให้ธุรกิจใช้ทำงานได้จริง"
        desc="EFFICIENCY คือทีมออกแบบและพัฒนาเว็บไซต์ที่ทำงานกับธุรกิจไทย ตั้งแต่เว็บไซต์แนะนำบริษัท จนถึงระบบที่มีสมาชิกและหลังบ้าน โดยยึดหลักว่าขอบเขตงานต้องชัดเจนก่อนเริ่มเสมอ"
      >
        <Link href="/contact" className="btn btn-primary">
          เริ่มคุยกับเรา
          <ArrowRight size={16} />
        </Link>
      </PageHero>

      {/* ══ หลักการทำงาน ══════════════════════════════════════ */}
      <Section tightTop>
        <SectionHead
          label="Principles"
          title="สิ่งที่เรายึดในทุกโครงการ"
          desc="ไม่ใช่คำโฆษณา แต่เป็นสิ่งที่สะท้อนอยู่ในใบเสนอราคาและรายการส่งมอบของทุกงาน"
        />

        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {PRINCIPLES.map((p, i) => {
            const accent = accentAt(p.accentIdx);
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={i * 0.06} className="h-full">
                <div
                  className="card card-hover h-full p-7 md:p-8"
                  style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
                >
                  <span className="icon-box w-11 h-11 mb-5">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h2 className="text-[18.5px] font-semibold text-ink mb-3">{p.title}</h2>
                  <p className="text-[15px] text-ink-2 leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ วิธีทำงาน ══════════════════════════════════════════ */}
      <Section tone="soft">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionHead
              label="How we work"
              title="วิธีทำงานที่ทำให้ราคาตรงกับงานจริง"
              desc="ราคาที่ประเมินผิดมักเกิดจากขอบเขตที่ไม่ชัด เราจึงใช้เวลากับการตั้งคำถามก่อนเสนอราคามากกว่าการเร่งปิดงาน"
            />
            <FadeIn delay={0.1}>
              <ul className="space-y-3 mt-8">
                {APPROACH.map((a) => (
                  <CheckItem key={a}>{a}</CheckItem>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>
            <div className="card p-7 md:p-8">
              <Quote size={22} className="text-brand mb-5" />
              <p className="text-[17px] text-ink leading-relaxed font-medium">
                ถ้าเว็บไซต์ตอบไม่ได้ว่าคุณทำอะไร ทำให้ใคร และติดต่ออย่างไร
                ความสวยของหน้าเว็บก็ยังไม่ช่วยให้ลูกค้าตัดสินใจ
              </p>
              <div className="mt-7 pt-6 border-t border-line-soft">
                <p className="label-th mb-4">คำถามที่เราถามก่อนเสนอราคา</p>
                <ol className="space-y-2.5">
                  {DISCOVERY_QUESTIONS.slice(0, 4).map((q, i) => (
                    <li key={q} className="flex items-start gap-3 text-[14.5px] text-ink-2 leading-relaxed">
                      <span className="num w-6 h-6 rounded-md bg-soft text-ink-3 flex items-center justify-center text-[11.5px] shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {q}
                    </li>
                  ))}
                </ol>
                <Link href="/services#discovery" className="btn btn-secondary btn-sm mt-6 w-full">
                  ดูคำถามทั้ง 6 ข้อ
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <Section className="pb-24">
        <FadeIn>
          <div className="rounded-2xl border border-line bg-white px-8 py-12 md:px-14 md:py-14 text-center shadow-sm">
            <h2 className="text-[25px] md:text-[32px] font-semibold text-ink max-w-2xl mx-auto leading-snug">
              อยากรู้ว่างานของคุณอยู่ในขอบเขตไหน
            </h2>
            <p className="lead text-[16px] mt-4 max-w-xl mx-auto">
              เล่าโจทย์มาได้เลย เราจะตอบกลับพร้อมแพ็กเกจที่เหมาะสม ขอบเขตงาน และระยะเวลาโดยประมาณ
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn btn-primary">
                ติดต่อเรา
                <ArrowRight size={16} />
              </Link>
              <Link href="/work" className="btn btn-secondary">
                ดูตัวอย่างงาน
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
