'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Plus, Globe, Boxes, Handshake } from 'lucide-react';
import Section, { SectionHead, FadeIn, CheckItem, PageHero } from '@/components/ui/Section';
import ProcessModal from '@/components/ProcessModal';
import { accentAt } from '@/lib/accents';
import { PROCESS_STEPS, DELIVERABLES, SCOPE_TERMS } from '@/lib/content';

const WORK_TERMS = SCOPE_TERMS.filter((t) => ['REVISION', 'PAYMENT', 'SCOPE', 'CHANGE'].includes(t.label));

export default function ProcessClient() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div>
      <PageHero
        label="Process"
        title="ขั้นตอนการทำงานที่คุณรู้ล่วงหน้าทุกก้าว"
        desc="ทุกโครงการเดินตามลำดับเดียวกัน 6 ขั้นตอน ตั้งแต่เก็บโจทย์จนถึงเปิดใช้งานจริง คุณจึงรู้เสมอว่าตอนนี้อยู่ตรงไหน และขั้นถัดไปต้องเตรียมอะไร"
      />

      {/* ══ 6 ขั้นตอน ══════════════════════════════════════════ */}
      <Section tightTop>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCESS_STEPS.map((step, i) => {
            const accent = accentAt(step.accentIdx);
            return (
              <FadeIn key={step.key} delay={i * 0.06} className="h-full">
                <button
                  onClick={() => setOpenIdx(i)}
                  className="card card-hover card-accent h-full w-full p-7 text-left"
                  style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
                  aria-label={`ดูรายละเอียดขั้นตอน ${step.thai}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <span
                      className="num w-10 h-10 rounded-xl flex items-center justify-center text-[14px] font-semibold"
                      style={{ background: accent.soft, color: accent.hex }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="p-1.5 rounded-md text-ink-3 border border-line">
                      <Plus size={14} />
                    </span>
                  </div>

                  <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-ink-3 mb-1">{step.label}</p>
                  <h2 className="text-[19px] font-semibold text-ink mb-3">{step.thai}</h2>
                  <p className="text-[14.5px] text-ink-2 leading-relaxed">{step.short}</p>
                </button>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.1}>
          <p className="mt-6 text-[14px] text-ink-3">
            กดที่การ์ดแต่ละใบเพื่อดูว่าในขั้นตอนนั้นมีอะไรเกิดขึ้นบ้าง
          </p>
        </FadeIn>
      </Section>

      {/* ══ เงื่อนไขการทำงาน ══════════════════════════════════ */}
      <Section tone="soft">
        <SectionHead
          label="Working terms"
          title="รอบแก้ไข การนับขอบเขต และการชำระเงิน"
          desc="กำหนดให้ชัดตั้งแต่ต้น เพื่อให้ทั้งสองฝ่ายวางแผนเวลาและงบประมาณได้ตรงกัน"
        />

        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {WORK_TERMS.map((t, i) => {
            const accent = accentAt(t.accentIdx);
            return (
              <FadeIn key={t.label} delay={i * 0.06}>
                <div className="rule-card h-full p-6 md:p-7" style={{ '--accent': accent.hex }}>
                  <p className="font-mono text-[11.5px] tracking-[0.16em] text-ink-3 mb-2.5">{t.label}</p>
                  <h3 className="text-[17px] font-semibold text-ink leading-snug mb-2">{t.title}</h3>
                  <p className="text-[14.5px] text-ink-2 leading-relaxed">{t.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ ส่งมอบงาน ═════════════════════════════════════════ */}
      <Section id="deliverables">
        <SectionHead
          label="Deliverables"
          title="สิ่งที่คุณได้รับเมื่อจบโครงการ"
          desc="รายการส่งมอบระบุไว้ในใบเสนอราคา ตรวจรับได้จริง และส่งมอบสิทธิ์การเข้าถึงอย่างปลอดภัย"
        />

        <div className="grid lg:grid-cols-2 gap-5 mt-12">
          <FadeIn>
            <div className="card h-full p-7 md:p-8">
              <span className="icon-box w-11 h-11 mb-5" style={{ '--accent': 'var(--clr-brand)', '--accent-soft': 'var(--clr-brand-soft)' }}>
                <Globe size={20} strokeWidth={1.8} />
              </span>
              <h3 className="text-[18px] font-semibold text-ink mb-1">ทุกแพ็กเกจเว็บไซต์</h3>
              <p className="text-[14px] text-ink-3 mb-6">Starter · Business · Growth</p>
              <ul className="space-y-3">
                {DELIVERABLES.website.map((d) => (
                  <CheckItem key={d}>{d}</CheckItem>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="card h-full p-7 md:p-8">
              <span className="icon-box w-11 h-11 mb-5" style={{ '--accent': 'var(--clr-violet)', '--accent-soft': 'var(--clr-violet-soft)' }}>
                <Boxes size={20} strokeWidth={1.8} />
              </span>
              <h3 className="text-[18px] font-semibold text-ink mb-1">แพ็กเกจ System ได้รับเพิ่ม</h3>
              <p className="text-[14px] text-ink-3 mb-6">นอกเหนือจากรายการฝั่งซ้ายทั้งหมด</p>
              <ul className="space-y-3">
                {DELIVERABLES.system.map((d) => (
                  <CheckItem key={d} accent="var(--clr-violet)">{d}</CheckItem>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-5 card p-7 md:p-8">
            <div className="flex items-start gap-4">
              <span className="icon-box w-11 h-11 shrink-0" style={{ '--accent': 'var(--clr-teal)', '--accent-soft': 'var(--clr-teal-soft)' }}>
                <Handshake size={20} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-[18px] font-semibold text-ink mb-2">เรื่องที่ตกลงกันก่อนเริ่มงาน</h3>
                <p className="text-[14.5px] text-ink-2 leading-relaxed mb-5">
                  โดยเฉพาะงานระบบ เราสรุปหัวข้อเหล่านี้ให้ชัดเจนตั้งแต่ก่อนเริ่ม
                  เพื่อไม่ให้เกิดคำถามค้างไว้ตอนส่งมอบ
                </p>
                <div className="flex flex-wrap gap-2">
                  {DELIVERABLES.agreeFirst.map((a) => (
                    <span key={a} className="pill text-[13.5px]">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <Section tone="soft" className="pb-24">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-[25px] md:text-[32px] font-semibold text-ink max-w-2xl mx-auto leading-snug">
              พร้อมเริ่มขั้นแรกแล้วหรือยัง
            </h2>
            <p className="lead text-[16px] mt-4 max-w-xl mx-auto">
              ขั้นตอนแรกคือคุยเก็บโจทย์ โทรมาได้เลยในเวลาทำการ ใช้เวลาไม่นานและไม่มีค่าใช้จ่าย
              จบการคุยคุณจะได้ข้อสรุปว่าแพ็กเกจไหนเหมาะกับงานของคุณ
            </p>
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

      <ProcessModal
        step={openIdx !== null ? PROCESS_STEPS[openIdx] : null}
        index={openIdx ?? 0}
        onClose={() => setOpenIdx(null)}
      />
    </div>
  );
}
