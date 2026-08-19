'use client';

import Link from 'next/link';
import {
  ArrowRight, LayoutTemplate, Server, FileText, Cloud, LineChart, GitBranch,
} from 'lucide-react';
import Section, { SectionHead, FadeIn, PageHero } from '@/components/ui/Section';
import { accentAt } from '@/lib/accents';

const CATEGORIES = [
  {
    icon: LayoutTemplate,
    accentIdx: 1,
    label: 'FRONTEND',
    title: 'ส่วนที่ผู้ใช้เห็น',
    desc: 'เลือกเครื่องมือที่ทำให้หน้าเว็บโหลดเร็ว แก้ไขต่อได้ และแสดงผลถูกต้องบนทุกขนาดหน้าจอ',
    items: [
      { name: 'Next.js', note: 'โครงหลักของเว็บไซต์และระบบ' },
      { name: 'React', note: 'ส่วนติดต่อผู้ใช้ที่โต้ตอบได้' },
      { name: 'TypeScript', note: 'ลดข้อผิดพลาดตั้งแต่ตอนพัฒนา' },
      { name: 'Tailwind CSS', note: 'ระบบดีไซน์ที่สม่ำเสมอทั้งเว็บ' },
    ],
  },
  {
    icon: Server,
    accentIdx: 3,
    label: 'BACKEND & DATA',
    title: 'ส่วนที่ทำงานเบื้องหลัง',
    desc: 'ใช้กับงานที่มีสมาชิก ข้อมูล และขั้นตอนการทำงาน ให้ข้อมูลถูกต้องและตรวจสอบย้อนหลังได้',
    items: [
      { name: 'Node.js', note: 'ประมวลผลฝั่งเซิร์ฟเวอร์' },
      { name: 'PostgreSQL', note: 'ฐานข้อมูลหลักของงานระบบ' },
      { name: 'REST API', note: 'เชื่อมต่อกับระบบอื่นตามขอบเขต' },
      { name: 'Authentication', note: 'ระบบสมาชิกและการแยกสิทธิ์' },
    ],
  },
  {
    icon: FileText,
    accentIdx: 2,
    label: 'CONTENT',
    title: 'การจัดการเนื้อหา',
    desc: 'ให้ทีมของคุณแก้ข้อความและรูปภาพเองได้ในขอบเขตที่ตกลงกัน โดยไม่กระทบโครงสร้างหน้า',
    items: [
      { name: 'Headless CMS', note: 'จัดการเนื้อหาแยกจากหน้าเว็บ' },
      { name: 'WordPress', note: 'ทางเลือกสำหรับทีมที่คุ้นเคยอยู่แล้ว' },
      { name: 'Media Optimisation', note: 'ปรับขนาดและรูปแบบไฟล์ภาพอัตโนมัติ' },
      { name: 'Role & Permission', note: 'กำหนดสิทธิ์ผู้ดูแลตามหน้าที่' },
    ],
  },
  {
    icon: Cloud,
    accentIdx: 0,
    label: 'HOSTING & OPS',
    title: 'การนำขึ้นระบบและดูแล',
    desc: 'วางระบบให้เปิดใช้งานได้เสถียร มีสำรองข้อมูล และมีผู้รับผิดชอบชัดเจนหลังส่งมอบ',
    items: [
      { name: 'Vercel / Cloud Hosting', note: 'นำเว็บไซต์ขึ้นใช้งานจริง' },
      { name: 'SSL / HTTPS', note: 'ความปลอดภัยของการเชื่อมต่อ' },
      { name: 'Backup', note: 'สำรองข้อมูลตามรอบที่ตกลง' },
      { name: 'Monitoring', note: 'เฝ้าดูความพร้อมใช้งานของระบบ' },
    ],
  },
  {
    icon: LineChart,
    accentIdx: 4,
    label: 'SEARCH & ANALYTICS',
    title: 'การค้นพบและการวัดผล',
    desc: 'วางโครงสร้างให้ทั้งเครื่องมือค้นหาและ AI เข้าใจเว็บไซต์ พร้อมเครื่องมือวัดผลตั้งแต่วันแรก',
    items: [
      { name: 'Google Analytics 4', note: 'ดูพฤติกรรมผู้เข้าชม' },
      { name: 'Search Console', note: 'ตรวจการจัดเก็บและคำค้น' },
      { name: 'Structured Data', note: 'อธิบายธุรกิจให้ระบบอ่านเข้าใจ' },
      { name: 'Core Web Vitals', note: 'ตรวจความเร็วและประสบการณ์ใช้งาน' },
    ],
  },
  {
    icon: GitBranch,
    accentIdx: 1,
    label: 'WORKFLOW',
    title: 'วิธีทำงานของทีม',
    desc: 'ทุกการเปลี่ยนแปลงมีร่องรอย ตรวจย้อนได้ และส่งมอบพร้อมเอกสารที่จำเป็น',
    items: [
      { name: 'Git / Repository', note: 'เก็บประวัติการเปลี่ยนแปลงทั้งหมด' },
      { name: 'Figma', note: 'ออกแบบและตรวจแบบร่วมกัน' },
      { name: 'Staging Environment', note: 'ตรวจงานก่อนขึ้นระบบจริง' },
      { name: 'UAT Checklist', note: 'รายการตรวจรับที่จับต้องได้' },
    ],
  },
];

export default function StackClient() {
  return (
    <div>
      <PageHero
        label="Technology"
        title="เทคโนโลยีที่เราใช้ และเหตุผลที่ใช้"
        desc="เราเลือกเครื่องมือจากลักษณะงาน ไม่ใช่จากความนิยม เว็บไซต์แนะนำบริษัทกับระบบที่มีสมาชิกใช้โครงสร้างต่างกัน และควรต่างกัน"
      />

      <Section tightTop>
        <div className="grid md:grid-cols-2 gap-5">
          {CATEGORIES.map((c, i) => {
            const accent = accentAt(c.accentIdx);
            const Icon = c.icon;
            return (
              <FadeIn key={c.label} delay={i * 0.06} className="h-full">
                <div
                  className="card card-hover h-full p-7 md:p-8"
                  style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <span className="icon-box w-11 h-11">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-mono text-[11.5px] tracking-[0.16em] mb-1" style={{ color: accent.hex }}>
                        {c.label}
                      </p>
                      <h2 className="text-[18px] font-semibold text-ink">{c.title}</h2>
                    </div>
                  </div>

                  <p className="text-[14.5px] text-ink-2 leading-relaxed mb-6">{c.desc}</p>

                  <ul className="divide-y divide-line-soft border-t border-line-soft">
                    {c.items.map((it) => (
                      <li key={it.name} className="flex items-baseline justify-between gap-4 py-3">
                        <span className="text-[15px] text-ink font-medium">{it.name}</span>
                        <span className="text-[13.5px] text-ink-3 text-right">{it.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section tone="soft" className="pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <SectionHead
            label="Why it matters"
            title="เลือกเทคโนโลยีให้พอดีกับงาน"
            desc="ระบบที่ใหญ่เกินความจำเป็นทำให้ค่าดูแลสูงโดยไม่ได้ประโยชน์ ส่วนระบบที่เล็กเกินไปจะตันเมื่อธุรกิจโต เราจึงสรุปขอบเขตให้ชัดก่อน แล้วค่อยเลือกเครื่องมือ"
          />
          <FadeIn delay={0.1}>
            <div className="card p-7 md:p-8">
              <p className="text-[15.5px] text-ink-2 leading-relaxed">
                หากมีระบบเดิมอยู่แล้ว เช่น WordPress หรือระบบภายในของบริษัท
                เราตรวจสอบก่อนว่าควรพัฒนาต่อจากของเดิม หรือทำใหม่แล้วย้ายข้อมูล
                แล้วเสนอทางเลือกพร้อมข้อดีข้อเสียของแต่ละทางให้ตัดสินใจ
              </p>
              <Link href="/contact" className="btn btn-primary btn-sm mt-6">
                ให้เราช่วยประเมินระบบเดิม
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
