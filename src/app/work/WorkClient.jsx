'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Plus, Building2, Stethoscope, CalendarCheck,
  UserRound, FileSpreadsheet, Briefcase, Info,
} from 'lucide-react';
import Section, { SectionHead, FadeIn, PageHero } from '@/components/ui/Section';
import ProjectModal from '@/components/ProjectModal';
import ProjectCard from '@/components/ProjectCard';
import Testimonials from '@/components/Testimonials';
import { accentAt } from '@/lib/accents';
import { PROJECTS } from '@/lib/content';

const EXAMPLES = [
  {
    key: 'profile',
    icon: Briefcase,
    accentIdx: 0,
    category: 'COMPANY PROFILE',
    title: 'เว็บไซต์แนะนำบริษัทสำหรับธุรกิจบริการ',
    tier: 'STARTER 29,000',
    scale: '5 หน้า',
    duration: '10-15 วันทำการ',
    teaser: 'ธุรกิจที่มีข้อความ โลโก้ และรูปภาพพร้อมแล้ว ต้องการเว็บไซต์ที่ดูน่าเชื่อถือและติดต่อง่าย',
    problem: 'ลูกค้าค้นเจอชื่อบริษัทแต่ไม่มีหน้าเว็บที่บอกได้ชัดว่าให้บริการอะไร ราคาประมาณเท่าไร และติดต่อทางไหนได้เร็วที่สุด',
    approach: 'จัดกลุ่มข้อมูลที่มีอยู่ให้เป็น 5 หน้า วางลำดับให้ผู้เข้าชมเข้าใจบริการภายในหน้าจอแรก และวางปุ่มติดต่อให้เข้าถึงได้จากทุกหน้า',
    scope: [
      'หน้าแรก บริการ ผลงาน เกี่ยวกับเรา ติดต่อ',
      'เชื่อม LINE โทรศัพท์ และ Google Maps',
      'แบบฟอร์มติดต่อ พร้อม SSL/HTTPS',
      'ติดตั้ง Analytics และ Search Console',
      'ตรวจการแสดงผลบนมือถือและเดสก์ท็อป',
    ],
  },
  {
    key: 'factory',
    icon: Building2,
    accentIdx: 1,
    category: 'COMPANY PROFILE',
    title: 'เว็บไซต์โรงงานและธุรกิจ B2B พร้อมเนื้อหาครบ',
    tier: 'BUSINESS 39,000',
    scale: '5 หน้า',
    duration: '15-20 วันทำการ',
    teaser: 'ธุรกิจที่มีข้อมูลในหัวแต่ไม่มีเวลาเขียน ต้องการทีมช่วยวางโครงสร้างและเรียบเรียงข้อความทั้งเว็บ',
    problem: 'มีข้อมูลบริการและกำลังการผลิตอยู่ครบ แต่ยังไม่มีใครเรียบเรียงให้ลูกค้าองค์กรอ่านแล้วเข้าใจและกล้าติดต่อเข้ามา',
    approach: 'เก็บข้อมูลจากทีมขายและฝ่ายผลิต วางโครงสร้างเนื้อหาแต่ละหน้า แล้วเขียน Headline จุดขาย รายละเอียดบริการ FAQ และ CTA ให้ครบทั้งเว็บไซต์',
    scope: [
      'วางโครงสร้างและเขียนเนื้อหาไทยครบ 5 หน้า',
      'Headline จุดขาย และรายละเอียดบริการ',
      'FAQ และ CTA ตามความเหมาะสมของแต่ละหน้า',
      'กำหนดคีย์เวิร์ดหลักประจำหน้า',
      'ทุกอย่างในแพ็กเกจ Starter',
    ],
  },
  {
    key: 'clinic',
    icon: Stethoscope,
    accentIdx: 2,
    category: 'LEAD GENERATION',
    title: 'เว็บไซต์บริการวิชาชีพหลายบริการ ที่ต้องวัดผลได้',
    tier: 'GROWTH 59,000',
    scale: '8 หน้า',
    duration: '25-35 วันทำการ',
    teaser: 'ธุรกิจที่มีหลายบริการ ต้องการหน้าเฉพาะของแต่ละบริการ บทความ และการวัดผลว่าช่องทางไหนสร้างการติดต่อ',
    problem: 'ทุกบริการถูกยัดรวมอยู่ในหน้าเดียว ทำให้ไม่ถูกค้นพบจากคำค้นเฉพาะ และไม่รู้ว่าการติดต่อที่เข้ามาแต่ละครั้งมาจากช่องทางไหน',
    approach: 'แยกหน้าเฉพาะรายบริการ เพิ่ม Case Study และบทความความรู้ วาง Structured Data ตามประเภทธุรกิจ แล้วติดตั้ง Conversion Tracking ให้เห็นที่มาของ Lead',
    scope: [
      'เว็บไซต์ 8 หน้า พร้อมเนื้อหาไทยครบ',
      'หน้า Portfolio / Case Study / FAQ',
      'บทความความรู้ 2 เรื่อง',
      'สำรวจคีย์เวิร์ดและวาง Structured Data',
      'Conversion Tracking และดูแลระบบฟรี 3 เดือน',
    ],
  },
  {
    key: 'booking',
    icon: CalendarCheck,
    accentIdx: 3,
    category: 'WEB SYSTEM',
    title: 'ระบบจองคิวและนัดหมายออนไลน์',
    tier: 'SYSTEM เริ่มต้น 129,000',
    scale: '10 Screens',
    duration: '45-60 วันทำการ',
    teaser: 'ธุรกิจที่รับจองผ่านแชทจนข้อมูลกระจัดกระจาย ต้องการให้ลูกค้าจองเองได้ และทีมงานเห็นสถานะรวมในที่เดียว',
    problem: 'คำขอจองเข้ามาหลายช่องทางพร้อมกัน ทีมงานต้องจดต่อในไฟล์แยก ทำให้จองซ้ำ ตกหล่น และตอบยืนยันช้า',
    approach: 'ออกแบบ Workflow หลัก 1 กระบวนการ ตั้งแต่ลูกค้าส่งคำขอ พนักงานตรวจสอบ ยืนยันหรือปฏิเสธ จนระบบแจ้งผลและบันทึกสถานะ พร้อมหลังบ้านสำหรับจัดการรายการจอง',
    scope: [
      'UX/UI ไม่เกิน 10 Screens',
      'Member Login 2 Roles: ลูกค้า และเจ้าหน้าที่',
      'Workflow การจอง 1 กระบวนการ',
      'Admin Module จัดการรายการจอง',
      'Email Notification 1 Flow และ UAT 2 รอบ',
    ],
  },
  {
    key: 'portal',
    icon: UserRound,
    accentIdx: 4,
    category: 'WEB SYSTEM',
    title: 'Member Portal สำหรับลูกค้าองค์กร',
    tier: 'SYSTEM เริ่มต้น 129,000',
    scale: '10 Screens',
    duration: '45-60 วันทำการ',
    teaser: 'ธุรกิจที่ต้องส่งเอกสารและสถานะให้ลูกค้าประจำ ต้องการพื้นที่ให้ลูกค้าเข้ามาดูข้อมูลของตัวเองได้',
    problem: 'ลูกค้าโทรถามสถานะและขอเอกสารซ้ำ ๆ ทีมงานต้องค้นย้อนหลังทุกครั้ง ทำให้เสียเวลาและตอบไม่ตรงกัน',
    approach: 'สร้างพื้นที่สมาชิกให้ลูกค้าเข้าดูรายการและสถานะของตนเอง แยกสิทธิ์กับฝั่งเจ้าหน้าที่ที่เห็นทุกรายการและเปลี่ยนสถานะได้',
    scope: [
      'Member Login 2 Roles พร้อมการจัดการบัญชี',
      'หน้ารายการและสถานะของลูกค้าแต่ละราย',
      'Admin Module สำหรับเจ้าหน้าที่',
      'Database ไม่เกิน 5 กลุ่มข้อมูลหลัก',
      'คู่มือ Admin และตาราง User Roles',
    ],
  },
  {
    key: 'quotation',
    icon: FileSpreadsheet,
    accentIdx: 0,
    category: 'WEB SYSTEM',
    title: 'ระบบติดตาม Lead และใบเสนอราคา',
    tier: 'SYSTEM เริ่มต้น 129,000',
    scale: '10 Screens',
    duration: '45-60 วันทำการ',
    teaser: 'ทีมขายที่ติดตามงานผ่านไฟล์ตาราง ต้องการเห็นสถานะของทุกดีลในที่เดียวและไม่ตกหล่น',
    problem: 'ข้อมูลลูกค้าและใบเสนอราคาอยู่คนละไฟล์ ไม่มีใครรู้ภาพรวมว่าดีลไหนค้างอยู่ขั้นตอนใด และใครรับผิดชอบ',
    approach: 'วาง Workflow เดียวตั้งแต่รับ Lead จนปิดงาน พร้อมหน้าหลังบ้านที่ค้นหา เปิดรายละเอียด เปลี่ยนสถานะ และส่งออกข้อมูลพื้นฐานได้',
    scope: [
      'Workflow ติดตามสถานะ 1 กระบวนการ',
      'Admin Module จัดการ Lead และใบเสนอราคา',
      'สิทธิ์ 2 Roles: พนักงานขาย และผู้ดูแล',
      'API มาตรฐาน 1 Service สำหรับเชื่อมต่อ',
      'ส่งออกข้อมูลพื้นฐานและคู่มือใช้งาน',
    ],
  },
];

export default function WorkClient() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <PageHero
        label="Selected Work"
        title="ผลงานที่เปิดใช้งานจริง"
        desc="กดเข้าไปดูของจริงได้ทุกเว็บ ตั้งแต่เว็บไซต์แบรนด์ เว็บไซต์บริการหลายหมวด ไปจนถึงแพลตฟอร์มจองที่ต่อกับแอปมือถือ"
      >
        <div className="flex flex-wrap gap-2">
          {PROJECTS.map((p) => (
            <a
              key={p.key}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pill hover:border-brand hover:text-brand transition-colors font-mono text-[12.5px]"
            >
              {p.domain}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </PageHero>

      {/* ══ ผลงานจริง ═════════════════════════════════════════ */}
      <Section tightTop>
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.key} delay={i * 0.06} className="h-full">
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Testimonials tone="soft" />

      {/* ══ ตัวอย่างขอบเขตงานตามแพ็กเกจ ═══════════════════════ */}
      <Section tone="soft">
        <SectionHead
          label="Scope examples"
          title="ตัวอย่างขอบเขตงานตามแพ็กเกจ"
          desc="นอกจากผลงานจริงด้านบน นี่คือลักษณะงานที่พบบ่อยพร้อมขอบเขตและระยะเวลาโดยประมาณ ใช้เทียบกับงานของคุณก่อนคุยรายละเอียด"
        />

        <FadeIn>
          <div className="flex items-start gap-3 rounded-xl border border-line bg-white px-5 py-4 mt-10 mb-6">
            <Info size={17} className="text-ink-3 mt-0.5 shrink-0" />
            <p className="text-[14.5px] text-ink-2 leading-relaxed">
              ส่วนนี้เป็นการจำลองลักษณะงานเพื่ออธิบายขอบเขตให้เห็นภาพ ไม่ใช่ข้อมูลลูกค้ารายใดรายหนึ่ง
              ขอบเขตจริงของแต่ละโครงการสรุปร่วมกันในขั้นตอนเก็บโจทย์
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXAMPLES.map((ex, i) => {
            const accent = accentAt(ex.accentIdx);
            const Icon = ex.icon;
            return (
              <FadeIn key={ex.key} delay={i * 0.06} className="h-full">
                <button
                  onClick={() => setActive(ex)}
                  className="card card-hover card-accent h-full w-full p-7 text-left flex flex-col"
                  style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
                >
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <span className="icon-box w-11 h-11">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <span className="p-1.5 rounded-md text-ink-3 border border-line">
                      <Plus size={14} />
                    </span>
                  </div>

                  <p className="font-mono text-[11px] tracking-[0.16em] mb-2" style={{ color: accent.hex }}>
                    {ex.category}
                  </p>
                  <h2 className="text-[17.5px] font-semibold text-ink leading-snug mb-3">{ex.title}</h2>
                  <p className="text-[14.5px] text-ink-2 leading-relaxed">{ex.teaser}</p>

                  <div className="mt-auto pt-5 border-t border-line-soft flex flex-wrap gap-1.5">
                    <span className="tag">{ex.tier}</span>
                    <span className="tag">{ex.duration}</span>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section className="pb-24">
        <FadeIn>
          <div className="text-center">
            <SectionHead
              label="Your project"
              title="งานของคุณใกล้เคียงกับตัวอย่างไหน"
              desc="โทรมาเล่าให้ฟังได้เลย เราเทียบกับขอบเขตมาตรฐานและบอกให้ชัดว่าอยู่ในแพ็กเกจใด หรือควรทำ Discovery เพิ่ม"
              align="center"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn btn-primary">
                โทรมาถามได้เลย
                <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                ดูแพ็กเกจและราคา
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
