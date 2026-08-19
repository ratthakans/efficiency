'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight, Copy, Check,
} from 'lucide-react';
import Section, { FadeIn, PageHero, CheckItem } from '@/components/ui/Section';
import { CONTACT, PACKAGES, AFTER_SUBMIT, NO_CHECKOUT_NOTE } from '@/lib/content';

const optionFor = (p) => `${p.name} — ${p.prefix ? 'เริ่มต้น ' : ''}${p.priceLabel} บาท`;

const PACKAGE_OPTIONS = [
  'ยังไม่แน่ใจ อยากให้ช่วยแนะนำ',
  ...PACKAGES.map(optionFor),
  'บริการดูแลเว็บไซต์รายเดือน',
];

const INITIAL_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  packageType: PACKAGE_OPTIONS[0],
  message: '',
  website: '', // กับดักบอท — ผู้ใช้จริงจะไม่เห็นช่องนี้
};

const PREPARE = [
  'ธุรกิจของคุณทำอะไร และกลุ่มลูกค้าคือใคร',
  'อยากให้เว็บไซต์ทำอะไรได้บ้าง เช่น แนะนำบริษัท สร้าง Lead หรือให้ผู้ใช้ทำรายการ',
  'มีเนื้อหา โลโก้ และรูปภาพพร้อมแล้วหรือยัง',
  'มีเว็บไซต์หรือระบบเดิมอยู่แล้วหรือไม่',
  'กำหนดเวลาที่อยากเปิดใช้งาน',
];

const CHANNELS = [
  { icon: Phone, label: 'โทรศัพท์', value: CONTACT.phone, href: CONTACT.phoneHref, highlight: true },
  { icon: Mail, label: 'อีเมล', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

function buildSubject(form) {
  return `ขอใบเสนอราคาเว็บไซต์ — ${form.company || form.name}`;
}

function buildBody(form) {
  return [
    `ชื่อผู้ติดต่อ: ${form.name}`,
    `บริษัท / แบรนด์: ${form.company || '-'}`,
    `อีเมล: ${form.email}`,
    `โทรศัพท์: ${form.phone || '-'}`,
    `แพ็กเกจที่สนใจ: ${form.packageType}`,
    '',
    'รายละเอียดโปรเจกต์:',
    form.message,
  ].join('\n');
}

function buildMailto(form) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(buildSubject(form))}` +
    `&body=${encodeURIComponent(buildBody(form))}`;
}

export default function ContactClient({ pkgKey = null }) {
  // มาจากปุ่ม "ขอใบเสนอราคาแพ็กเกจนี้" — เลือกแพ็กเกจไว้ให้ล่วงหน้า
  const preselected = PACKAGES.find((p) => p.key === pkgKey);

  const [form, setForm] = useState({
    ...INITIAL_FORM,
    packageType: preselected ? optionFor(preselected) : INITIAL_FORM.packageType,
  });
  const [composed, setComposed] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setComposed(true);
    // เปิดโปรแกรมอีเมลในรอบถัดไป เพื่อให้หน้าจอยืนยันแสดงผลก่อนเสมอ
    window.setTimeout(() => {
      window.location.href = buildMailto(form);
    }, 0);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${buildSubject(form)}\n\n${buildBody(form)}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      <PageHero
        label="Contact"
        title="เล่าโจทย์มา เราสรุปขอบเขตและราคากลับไป"
        desc="ไม่ต้องมีเอกสารพร้อมก็คุยได้ ส่งรายละเอียดเบื้องต้นมาก่อน แล้วเราจะตอบกลับพร้อมแพ็กเกจที่เหมาะสม ขอบเขตงาน และระยะเวลาโดยประมาณ"
      />

      <Section tightTop className="pb-24">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-8 items-start">

          {/* ── แบบฟอร์ม ── */}
          <FadeIn>
            <div className="card p-7 md:p-9">
              {composed ? (
                <div className="py-6">
                  <div className="text-center">
                    <CheckCircle2 size={44} className="text-teal mx-auto mb-5" strokeWidth={1.6} />
                    <h2 className="text-[21px] font-semibold text-ink mb-3">
                      เตรียมอีเมลไว้ให้แล้ว
                    </h2>
                    <p className="text-[15px] text-ink-2 leading-relaxed max-w-md mx-auto">
                      เราใส่รายละเอียดที่คุณกรอกลงในโปรแกรมอีเมลให้แล้ว กดส่งได้เลย
                      ถ้าโปรแกรมอีเมลไม่เปิดขึ้นมา ใช้ปุ่มด้านล่างแทนได้
                    </p>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                    <button onClick={handleCopy} className="btn btn-primary btn-sm">
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      {copied ? 'คัดลอกแล้ว' : 'คัดลอกรายละเอียด'}
                    </button>
                    <a href={CONTACT.phoneHref} className="btn btn-secondary btn-sm">
                      <Phone size={16} />
                      โทร {CONTACT.phone}
                    </a>
                    <a href={buildMailto(form)} className="btn btn-secondary btn-sm">
                      <Mail size={16} />
                      เปิดอีเมลอีกครั้ง
                    </a>
                  </div>

                  <p className="mt-4 text-center text-[13px] text-ink-3">
                    ปุ่มคัดลอกจะได้ข้อความครบทั้งหมด นำไปวางส่งทางไหนก็ได้ที่สะดวก
                  </p>

                  <ol className="mt-8 pt-7 border-t border-line-soft space-y-4">
                    <li className="label-th">หลังเราได้รับข้อความ</li>
                    {AFTER_SUBMIT.map((step, i) => (
                      <li key={step} className="flex items-start gap-3 text-[15px] text-ink-2 leading-relaxed">
                        <span className="num w-6 h-6 rounded-md bg-brand-soft text-brand-dark flex items-center justify-center text-[11.5px] font-semibold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>

                  <div className="mt-7 text-center">
                    <button
                      onClick={() => { setComposed(false); setForm(INITIAL_FORM); }}
                      className="text-[14.5px] text-ink-3 hover:text-brand transition-colors underline underline-offset-4"
                    >
                      กรอกฟอร์มใหม่
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-[20px] font-semibold text-ink">ส่งรายละเอียดโปรเจกต์</h2>
                    <p className="text-[14.5px] text-ink-3 mt-1.5">
                      ช่องที่มีเครื่องหมาย <span className="text-brand">*</span> จำเป็นต้องกรอก
                    </p>
                    {preselected && (
                      <p className="mt-4 rounded-lg bg-brand-soft border border-brand/15 px-4 py-3 text-[14.5px] text-ink-2">
                        เลือกแพ็กเกจ{' '}
                        <span className="font-medium text-brand-dark">{preselected.name}</span>{' '}
                        ไว้ให้แล้ว เปลี่ยนได้ในช่องด้านล่าง
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="field-label">
                        ชื่อผู้ติดต่อ <span className="text-brand">*</span>
                      </label>
                      <input
                        id="name" type="text" required value={form.name} onChange={update('name')}
                        className="field-input" placeholder="ชื่อ-นามสกุล"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="field-label">บริษัท / แบรนด์</label>
                      <input
                        id="company" type="text" value={form.company} onChange={update('company')}
                        className="field-input" placeholder="ชื่อบริษัทหรือแบรนด์"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="field-label">
                        อีเมล <span className="text-brand">*</span>
                      </label>
                      <input
                        id="email" type="email" required value={form.email} onChange={update('email')}
                        className="field-input" placeholder="you@company.co.th"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="field-label">เบอร์โทรติดต่อกลับ</label>
                      <input
                        id="phone" type="text" value={form.phone} onChange={update('phone')}
                        className="field-input" placeholder="08X-XXX-XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="packageType" className="field-label">แพ็กเกจที่สนใจ</label>
                    <select
                      id="packageType" value={form.packageType} onChange={update('packageType')}
                      className="field-input"
                    >
                      {PACKAGE_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="field-label">
                      รายละเอียดโปรเจกต์ <span className="text-brand">*</span>
                    </label>
                    <textarea
                      id="message" required rows={6} value={form.message} onChange={update('message')}
                      className="field-input resize-y"
                      placeholder="ธุรกิจของคุณทำอะไร อยากให้เว็บไซต์ทำอะไรได้บ้าง มีเนื้อหาพร้อมแล้วหรือยัง และอยากเปิดใช้งานเมื่อไร"
                    />
                  </div>

                  {/* กับดักบอท — ซ่อนจากผู้ใช้และ screen reader */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website" type="text" tabIndex={-1} autoComplete="off"
                      value={form.website} onChange={update('website')}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    เขียนอีเมลจากรายละเอียดนี้
                    <Send size={16} />
                  </button>

                  <p className="text-[13px] text-ink-3 leading-relaxed">
                    {NO_CHECKOUT_NOTE} เมื่อกดปุ่ม ระบบจะเปิดโปรแกรมอีเมลพร้อมข้อความที่กรอกไว้
                    ข้อมูลส่งตรงถึงเราโดยไม่ผ่านตัวกลาง
                  </p>
                  <p className="text-[13px] text-ink-3 leading-relaxed">
                    {CONTACT.replyTime} · หากต้องการคำตอบเร็วกว่านั้น โทรหาเราได้ที่{' '}
                    <a href={CONTACT.phoneHref} className="text-brand underline underline-offset-2">
                      {CONTACT.phone}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </FadeIn>

          {/* ── ข้อมูลติดต่อ ── */}
          <div className="space-y-5">
            <FadeIn delay={0.08}>
              <div className="card p-7">
                <p className="label-th mb-5">ช่องทางติดต่อ</p>
                <ul className="space-y-4">
                  {CHANNELS.map((c) => (
                    <li key={c.label} className="flex items-start gap-3.5">
                      <span className="icon-box w-9 h-9 mt-0.5">
                        <c.icon size={17} strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-[13px] text-ink-3">{c.label}</p>
                        <a
                          href={c.href}
                          {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="text-[15.5px] text-ink hover:text-brand transition-colors"
                        >
                          {c.value}
                          {c.highlight && (
                            <span className="ml-2 text-[12.5px] text-teal">ตอบเร็วที่สุด</span>
                          )}
                        </a>
                      </div>
                    </li>
                  ))}
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

            <FadeIn delay={0.14}>
              <div className="card p-7">
                <p className="label-th mb-4">เตรียมข้อมูลเหล่านี้มาจะคุยได้เร็วขึ้น</p>
                <ul className="space-y-3">
                  {PREPARE.map((p) => (
                    <CheckItem key={p}>{p}</CheckItem>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="card p-7 bg-soft">
                <p className="text-[15px] text-ink-2 leading-relaxed">
                  ยังไม่แน่ใจว่าควรเริ่มที่แพ็กเกจไหน ลองดูตารางเปรียบเทียบทั้ง 4 ระดับก่อนได้
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
