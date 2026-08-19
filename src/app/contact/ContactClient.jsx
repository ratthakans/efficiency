'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import Section, { FadeIn, PageHero, CheckItem } from '@/components/ui/Section';
import { CONTACT, PACKAGES, AFTER_CALL, NO_CHECKOUT_NOTE } from '@/lib/content';

const PREPARE = [
  'ธุรกิจของคุณทำอะไร และกลุ่มลูกค้าคือใคร',
  'อยากให้เว็บไซต์ทำอะไรได้บ้าง เช่น แนะนำบริษัท สร้าง Lead หรือให้ผู้ใช้ทำรายการ',
  'มีเนื้อหา โลโก้ และรูปภาพพร้อมแล้วหรือยัง',
  'มีเว็บไซต์หรือระบบเดิมอยู่แล้วหรือไม่',
  'กำหนดเวลาที่อยากเปิดใช้งาน',
];

export default function ContactClient({ pkgKey = null }) {
  // มาจากปุ่มของแพ็กเกจ — เอาไว้เกริ่นให้ตรงเรื่องตั้งแต่ยกหูโทร
  const pkg = PACKAGES.find((p) => p.key === pkgKey);

  return (
    <div>
      <PageHero
        label="Contact"
        title="โทรมาถามได้เลย"
        desc="ไม่ต้องเตรียมเอกสารหรือกรอกฟอร์มอะไรก่อน ยกหูโทรมาคุยได้เลยว่าอยากได้เว็บไซต์แบบไหน เราตอบได้ทันทีว่าอยู่ในแพ็กเกจไหนและใช้เวลาประมาณเท่าไร"
      />

      <Section tightTop className="pb-24">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-8 items-start">

          {/* ── โทรศัพท์ เป็นช่องทางหลัก ── */}
          <FadeIn>
            <div className="card p-8 md:p-10 text-center">
              <div className="flex justify-center mb-6">
                <span
                  className="icon-box w-14 h-14"
                  style={{ '--accent': 'var(--clr-brand)', '--accent-soft': 'var(--clr-brand-soft)' }}
                >
                  <Phone size={24} strokeWidth={1.8} />
                </span>
              </div>

              {pkg && (
                <p className="pill pill-brand mb-5 text-[13px] mx-auto">
                  สนใจแพ็กเกจ {pkg.name} · {pkg.prefix ? 'เริ่มต้น ' : ''}
                  {pkg.priceLabel} บาท
                </p>
              )}

              <p className="label-th mb-2">โทรหาเราได้ที่</p>
              <a
                href={CONTACT.phoneHref}
                className="num block text-[34px] md:text-[44px] font-semibold text-ink tracking-tight hover:text-brand transition-colors"
              >
                {CONTACT.phone}
              </a>

              <p className="text-[15px] text-ink-2 mt-4 leading-relaxed max-w-sm mx-auto">
                {CONTACT.hours} · คุยสั้น ๆ ไม่เกิน 15 นาทีก็พอเห็นภาพแล้วว่างานของคุณอยู่ในขอบเขตไหน
              </p>

              <a href={CONTACT.phoneHref} className="btn btn-primary w-full mt-8">
                <Phone size={17} />
                โทรเลย {CONTACT.phone}
              </a>

              <p className="text-[13.5px] text-ink-3 mt-5 leading-relaxed">
                นอกเวลาทำการหรือสะดวกพิมพ์มากกว่า ส่งอีเมลมาที่{' '}
                <a href={`mailto:${CONTACT.email}`} className="text-brand underline underline-offset-2">
                  {CONTACT.email}
                </a>{' '}
                ได้เช่นกัน เราตอบกลับภายใน 1 วันทำการ
              </p>
            </div>
          </FadeIn>

          {/* ── ข้อมูลประกอบ ── */}
          <div className="space-y-5">
            <FadeIn delay={0.08}>
              <div className="card p-7">
                <p className="label-th mb-4">คุยเรื่องนี้กันในสายเดียว</p>
                <ol className="space-y-4">
                  {AFTER_CALL.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-[15px] text-ink-2 leading-relaxed">
                      <span className="num w-6 h-6 rounded-md bg-brand-soft text-brand-dark flex items-center justify-center text-[11.5px] font-semibold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="mt-6 pt-5 border-t border-line-soft text-[13.5px] text-ink-3 leading-relaxed">
                  {NO_CHECKOUT_NOTE}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.14}>
              <div className="card p-7">
                <p className="label-th mb-4">รู้เรื่องพวกนี้ไว้จะคุยได้เร็วขึ้น</p>
                <ul className="space-y-3">
                  {PREPARE.map((p) => (
                    <CheckItem key={p}>{p}</CheckItem>
                  ))}
                </ul>
                <p className="mt-5 text-[13.5px] text-ink-3 leading-relaxed">
                  ยังตอบไม่ได้ทุกข้อก็โทรมาได้ เราถามทีละข้อให้เอง
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="card p-7">
                <ul className="space-y-4 text-[15px] text-ink-2">
                  <li className="flex items-start gap-3.5">
                    <span className="icon-box w-9 h-9 mt-0.5">
                      <Mail size={17} strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-[13px] text-ink-3">อีเมล</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-[15.5px] text-ink hover:text-brand transition-colors">
                        {CONTACT.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="icon-box w-9 h-9 mt-0.5">
                      <Clock size={17} strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-[13px] text-ink-3">เวลาทำการ</p>
                      <p className="text-[15.5px] text-ink">{CONTACT.hours}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="icon-box w-9 h-9 mt-0.5">
                      <MapPin size={17} strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-[13px] text-ink-3">ที่อยู่</p>
                      <p className="text-[15.5px] text-ink leading-relaxed">
                        {CONTACT.address[0]}
                        <br />
                        {CONTACT.address[1]}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.26}>
              <div className="card p-7 bg-soft">
                <p className="text-[15px] text-ink-2 leading-relaxed">
                  อยากดูราคาก่อนโทร ลองเทียบทั้ง 4 แพ็กเกจในหน้าเดียวได้
                </p>
                <Link href="/pricing" className="btn btn-secondary btn-sm mt-5 w-full">
                  ดูแพ็กเกจและราคา
                  <ArrowRight size={15} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </div>
  );
}
