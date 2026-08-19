'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, Clock, ShieldCheck, LayoutGrid, PackageOpen,
  FileText, Info, XCircle, Workflow, Users, LayoutDashboard, Plus, Minus,
} from 'lucide-react';
import Section, { SectionHead, FadeIn, CheckItem, PageHero } from '@/components/ui/Section';
import { useState } from 'react';
import PackageCard from '@/components/PackageCard';
import KeyTermsStrip from '@/components/KeyTermsStrip';
import { accentAt } from '@/lib/accents';
import {
  PACKAGES, COMPARISON_ROWS, SYSTEM_SCOPE, CARE_PLANS, SCOPE_TERMS, FAQS, NO_CHECKOUT_NOTE,
} from '@/lib/content';

const SCOPE_ICONS = [Workflow, Users, LayoutDashboard];

/* การ์ดรายละเอียดแพ็กเกจแบบเต็ม */
function PackageDetail({ pkg }) {
  const accent = accentAt(pkg.accentIdx);

  return (
    <div
      id={pkg.key}
      className={`card overflow-hidden scroll-mt-28 ${pkg.featured ? 'ring-1 ring-brand/25' : ''}`}
      style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
    >
      <span className="absolute inset-x-0 top-0 h-1" style={{ background: accent.hex }} aria-hidden="true" />

      <div className="grid lg:grid-cols-[minmax(0,320px)_1fr]">
        {/* ฝั่งซ้าย — สรุปแพ็กเกจ */}
        <div className="p-7 md:p-9 lg:border-r border-line-soft bg-soft/40">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="font-mono text-[14px] font-semibold tracking-[0.16em]" style={{ color: accent.hex }}>
              {pkg.name}
            </span>
            {pkg.featured && <span className="pill pill-brand text-[11.5px] px-2.5 py-0.5">แพ็กเกจแนะนำ</span>}
          </div>

          <div className="flex items-baseline gap-1.5">
            {pkg.prefix && <span className="text-[14px] text-ink-3">{pkg.prefix}</span>}
            <span className="num text-[40px] font-semibold text-ink leading-none">{pkg.priceLabel}</span>
            <span className="text-[16px] text-ink-3">บาท</span>
          </div>
          <p className="text-[15px] text-ink font-medium mt-3">{pkg.tagline}</p>
          <p className="text-[15px] text-ink-2 leading-relaxed mt-2">{pkg.summary}</p>

          <dl className="mt-6 pt-6 border-t border-line space-y-3 text-[14.5px]">
            <div className="flex items-center gap-2.5">
              <LayoutGrid size={15} className="text-ink-3 shrink-0" />
              <dt className="text-ink-2">ขอบเขต</dt>
              <dd className="ml-auto text-ink font-medium">{pkg.scope}</dd>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock size={15} className="text-ink-3 shrink-0" />
              <dt className="text-ink-2">ระยะเวลา</dt>
              <dd className="ml-auto text-ink font-medium">{pkg.duration}</dd>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck size={15} className="text-ink-3 shrink-0" />
              <dt className="text-ink-2">รับประกัน</dt>
              <dd className="ml-auto text-ink font-medium">{pkg.warranty.replace('รับประกันข้อผิดพลาด ', '')}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {pkg.fitFor.map((f) => (
              <span key={f} className="tag">{f}</span>
            ))}
          </div>

          <Link
            href={`/contact?pkg=${pkg.key}`}
            className={`btn btn-sm w-full mt-7 ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
          >
            ขอใบเสนอราคาแพ็กเกจนี้
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* ฝั่งขวา — สิ่งที่ได้รับ */}
        <div className="p-7 md:p-9">
          <p className="label-th mb-5">สิ่งที่ได้รับ</p>

          {pkg.groups ? (
            <div className="grid sm:grid-cols-3 gap-7">
              {pkg.groups.map((g) => (
                <div key={g.label}>
                  <p
                    className="font-mono text-[11.5px] tracking-[0.14em] mb-3 pb-2 border-b"
                    style={{ color: accent.hex, borderColor: accent.soft }}
                  >
                    {g.label}
                  </p>
                  <ul className="space-y-2.5">
                    {g.items.map((it) => (
                      <CheckItem key={it} accent={accent.hex}>{it}</CheckItem>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {pkg.includes.map((it) => (
                <CheckItem key={it} accent={accent.hex}>{it}</CheckItem>
              ))}
            </ul>
          )}

          {/* สิ่งที่ลูกค้าเตรียม */}
          {pkg.clientPrepares && (
            <div className="mt-7 pt-6 border-t border-line-soft">
              <p className="label-th mb-3">ลูกค้าจัดเตรียม</p>
              <div className="flex flex-wrap gap-1.5">
                {pkg.clientPrepares.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>
          )}

          {/* มูลค่าที่เพิ่มขึ้น */}
          {pkg.valueAdd && (
            <div className="mt-7 rounded-xl border border-line bg-brand-soft/60 p-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="num text-[24px] font-semibold text-brand-dark">{pkg.valueAdd.delta}</span>
                <span className="text-[14px] text-ink-2">{pkg.valueAdd.title}</span>
              </div>
              <p className="text-[14.5px] text-ink-2 leading-relaxed">{pkg.valueAdd.body}</p>
            </div>
          )}

          {/* ประเภทระบบที่เหมาะ */}
          {pkg.systemTypes && (
            <div className="mt-7 pt-6 border-t border-line-soft">
              <p className="label-th mb-3">เหมาะกับระบบประเภท</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {pkg.systemTypes.map((t) => (
                  <p key={t} className="flex items-center gap-2 text-[14.5px] text-ink-2">
                    <PackageOpen size={15} style={{ color: accent.hex }} className="shrink-0" />
                    {t}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* ไม่รวมในแพ็กเกจ */}
          {pkg.excludes && (
            <div className="mt-6 rounded-xl border border-line bg-soft p-5">
              <p className="flex items-center gap-2 text-[13.5px] font-medium text-ink mb-2.5">
                <XCircle size={15} className="text-ink-3" />
                ไม่รวมในแพ็กเกจนี้
              </p>
              <div className="flex flex-wrap gap-1.5">
                {pkg.excludes.map((e) => (
                  <span key={e} className="tag">{e}</span>
                ))}
              </div>
            </div>
          )}

          {/* หมายเหตุ */}
          {(pkg.note || pkg.startNote) && (
            <div className="mt-6 space-y-2">
              {pkg.note && (
                <p className="flex items-start gap-2 text-[13.5px] text-ink-3 leading-relaxed">
                  <Info size={14} className="mt-1 shrink-0" />
                  {pkg.note}
                </p>
              )}
              {pkg.startNote && (
                <p className="flex items-start gap-2 text-[13.5px] text-ink-3 leading-relaxed">
                  <FileText size={14} className="mt-1 shrink-0" />
                  กำหนดส่ง {pkg.duration} — {pkg.startNote}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PricingClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div>
      <PageHero
        label="Packages & Pricing"
        title="เลือกตามเป้าหมาย ไม่ใช่เลือกตามจำนวนหน้า"
        desc="4 ระดับการลงทุนที่เข้าใจง่าย ตั้งแต่ Company Profile จนถึง Web System ขนาดเล็ก ทุกแพ็กเกจรองรับทุกขนาดหน้าจอ และระบุขอบเขตงานชัดเจนก่อนเริ่ม"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn btn-primary">
            ขอใบเสนอราคา
            <ArrowRight size={16} />
          </Link>
          <a href="#compare" className="btn btn-secondary">
            ดูตารางเปรียบเทียบ
          </a>
        </div>
      </PageHero>

      {/* ══ การ์ดแพ็กเกจ ═══════════════════════════════════════ */}
      <Section tightTop>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKAGES.map((pkg, i) => (
            <FadeIn key={pkg.key} delay={i * 0.07} className="h-full">
              <PackageCard pkg={pkg} href={`#${pkg.key}`} ctaLabel="ดูสิ่งที่ได้รับ" />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <KeyTermsStrip className="mt-6" />
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-5 text-[14px] text-ink-3 leading-relaxed">{NO_CHECKOUT_NOTE}</p>
        </FadeIn>
      </Section>

      {/* ══ ตารางเปรียบเทียบ ══════════════════════════════════ */}
      <Section id="compare" tone="soft">
        <SectionHead
          label="Compare"
          title="เห็นความต่างในหน้าเดียว"
          desc="Business คือจุดสมดุลสำหรับ Company Profile ส่วน System เหมาะกับงานที่มีสมาชิก ข้อมูล และ Workflow"
        />

        <FadeIn delay={0.08}>
          <div className="mt-10 card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th scope="col">รายการ</th>
                    {PACKAGES.map((p) => (
                      <th key={p.key} scope="col" className={p.featured ? 'cmp-col-featured' : ''}>
                        <span style={{ color: accentAt(p.accentIdx).hex }} className="font-mono tracking-[0.12em]">
                          {p.name}
                        </span>
                        {p.featured && <span className="block text-[11px] font-normal text-ink-3">แพ็กเกจแนะนำ</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      {row.values.map((v, idx) => (
                        <td
                          key={idx}
                          className={`${PACKAGES[idx].featured ? 'cmp-col-featured' : ''} ${
                            row.strong ? 'num text-[15px] font-semibold text-ink' : 'text-ink-2'
                          }`}
                        >
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <th scope="row" className="text-ink font-medium">เริ่มต้นกับแพ็กเกจนี้</th>
                    {PACKAGES.map((p) => (
                      <td key={p.key} className={p.featured ? 'cmp-col-featured' : ''}>
                        <Link
                          href={`/contact?pkg=${p.key}`}
                          className={`btn btn-sm w-full ${p.featured ? 'btn-primary' : 'btn-secondary'}`}
                        >
                          ขอใบเสนอราคา
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mt-5 text-[14px] text-ink-3 leading-relaxed">
            System เป็นราคาเริ่มต้น ขอบเขตนอกแพ็กเกจประเมินเพิ่มตาม Scope ที่ยืนยันร่วมกัน
            ราคาทั้งหมดรวมภาษีมูลค่าเพิ่มแล้ว แต่ไม่รวมค่าโดเมน โฮสติ้ง ฟอนต์ ภาพลิขสิทธิ์ หรือระบบเสริมจากผู้ให้บริการอื่น ซึ่งเป็นค่าใช้จ่ายที่จ่ายตรงกับผู้ให้บริการ
          </p>
        </FadeIn>
      </Section>

      {/* ══ รายละเอียดแต่ละแพ็กเกจ ════════════════════════════ */}
      <Section>
        <SectionHead
          label="In detail"
          title="รายละเอียดแต่ละแพ็กเกจ"
          desc="ทุกรายการด้านล่างคือสิ่งที่ระบุในใบเสนอราคาและตรวจรับได้จริงเมื่อจบงาน"
        />

        <div className="space-y-6 mt-12">
          {PACKAGES.map((pkg, i) => (
            <FadeIn key={pkg.key} delay={i * 0.05}>
              <PackageDetail pkg={pkg} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ══ อธิบายขอบเขต System ═══════════════════════════════ */}
      <Section tone="soft">
        <SectionHead
          label="System scope"
          title="1 Workflow, 2 User Roles, 1 Module คืออะไร"
          desc="ตัวอย่างระบบจองคิวด้านล่าง ช่วยให้เราและคุณเห็นขอบเขตเดียวกันก่อนประเมินราคา"
        />

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {SYSTEM_SCOPE.map((s, i) => {
            const accent = accentAt(s.accentIdx);
            const Icon = SCOPE_ICONS[i] ?? Workflow;
            return (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div
                  className="card h-full p-7"
                  style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
                >
                  <span className="icon-box w-11 h-11 mb-5">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <p className="font-mono text-[12px] tracking-[0.14em] mb-2" style={{ color: accent.hex }}>
                    {s.label}
                  </p>
                  <h3 className="text-[17px] font-semibold text-ink mb-5">{s.title}</h3>

                  <ol className="space-y-3">
                    {s.steps.map((st, idx) => (
                      <li key={st} className="flex items-start gap-3 text-[14.5px] text-ink-2 leading-relaxed">
                        <span
                          className="num w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-medium shrink-0 mt-0.5"
                          style={{ background: accent.soft, color: accent.hex }}
                        >
                          {idx + 1}
                        </span>
                        {st}
                      </li>
                    ))}
                  </ol>

                  <p className="mt-6 pt-5 border-t border-line-soft text-[13.5px] text-ink-3 leading-relaxed">
                    {s.footnote}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-6 rounded-xl border border-line bg-white px-6 py-5 text-[14.5px] text-ink-2 leading-relaxed">
            หากงานเกิน 1 Workflow • 2 Roles • 1 Module หรือมีเงื่อนไขซับซ้อน
            เราจะทำ Discovery และประเมินราคาแบบ Custom ให้เห็นขอบเขตชัดเจนก่อนเริ่มงานเสมอ
          </div>
        </FadeIn>
      </Section>

      {/* ══ ดูแลหลังเปิดเว็บไซต์ ═══════════════════════════════ */}
      <Section>
        <SectionHead
          label="Care plans"
          title="ดูแลให้เว็บไซต์พร้อมทำงานต่อเนื่อง"
          desc="แยกบริการดูแลระบบออกจากงานแก้เนื้อหา เพื่อให้ขอบเขตและค่าใช้จ่ายชัดเจนทั้งสองฝ่าย"
        />

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {CARE_PLANS.map((c, i) => {
            const accent = accentAt(c.accentIdx);
            const isNumeric = /^[\d,]+$/.test(c.price);
            return (
              <FadeIn key={c.name} delay={i * 0.08}>
                <div
                  className="card card-hover card-accent h-full p-7"
                  style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
                >
                  <p className="font-mono text-[12.5px] tracking-[0.14em] mb-4" style={{ color: accent.hex }}>
                    {c.name}
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-5">
                    <span className={`${isNumeric ? 'num text-[32px]' : 'text-[22px]'} font-semibold text-ink leading-none`}>
                      {c.price}
                    </span>
                    <span className="text-[14px] text-ink-3">{c.unit}</span>
                  </div>
                  <p className="text-[14.5px] text-ink-2 leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ ขอบเขตสำคัญ ═══════════════════════════════════════ */}
      <Section tone="soft">
        <SectionHead
          label="Terms"
          title="ชัดก่อนเริ่ม จบงานง่าย"
          desc="รายละเอียดสุดท้ายยึดตามใบเสนอราคาและ Scope of Work ที่ยืนยันร่วมกัน"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {SCOPE_TERMS.map((t, i) => {
            const accent = accentAt(t.accentIdx);
            return (
              <FadeIn key={t.label} delay={i * 0.05}>
                <div className="rule-card h-full p-6" style={{ '--accent': accent.hex }}>
                  <p className="font-mono text-[11.5px] tracking-[0.16em] text-ink-3 mb-2.5">{t.label}</p>
                  <h3 className="text-[16px] font-semibold text-ink leading-snug mb-2">{t.title}</h3>
                  <p className="text-[14.5px] text-ink-2 leading-relaxed">{t.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ══ คำถามที่พบบ่อย ════════════════════════════════════ */}
      <Section id="faq" className="scroll-mt-24">
        <SectionHead
          label="FAQ"
          title="คำถามที่พบบ่อย"
          desc="รวมคำถามเรื่องราคา ขอบเขต และเงื่อนไขที่ลูกค้าถามก่อนตัดสินใจ"
          align="center"
        />

        <div className="max-w-3xl mx-auto mt-12 card px-6 divide-y divide-line-soft">
          {FAQS.map((faq, i) => {
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
                <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[15px] text-ink-2 leading-relaxed pb-6 pr-10">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <Section className="pb-24">
        <FadeIn>
          <div className="rounded-2xl border border-line bg-white px-8 py-12 md:px-14 md:py-14 text-center shadow-sm">
            <h2 className="text-[25px] md:text-[32px] font-semibold text-ink max-w-2xl mx-auto leading-snug">
              ยังไม่แน่ใจว่าควรเริ่มที่แพ็กเกจไหน
            </h2>
            <p className="lead text-[16px] mt-4 max-w-xl mx-auto">
              เล่าสั้น ๆ ว่าอยากให้เว็บไซต์ทำอะไรได้บ้าง เราจะสรุปแพ็กเกจที่เหมาะสม
              พร้อมขอบเขตและระยะเวลากลับไปให้ ไม่มีค่าใช้จ่าย
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn btn-primary">
                ปรึกษาโปรเจกต์ฟรี
                <ArrowRight size={16} />
              </Link>
              <Link href="/process" className="btn btn-secondary">
                ดูขั้นตอนการทำงาน
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
