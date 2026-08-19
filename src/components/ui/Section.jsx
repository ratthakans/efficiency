'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const VIEWPORT = { once: true, margin: '-60px' };

/** ส่วนของหน้า พร้อมความกว้างสูงสุดมาตรฐาน */
export default function Section({ children, className = '', id, tone = 'default', tightTop = false }) {
  const toneClass =
    tone === 'soft' ? 'bg-soft border-y border-line' : tone === 'tint' ? 'bg-tint' : '';
  const padClass = tightTop ? 'pt-2 pb-18 md:pb-24' : 'py-18 md:py-24';
  return (
    <section id={id} className={`${padClass} ${toneClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}

/** ป้ายกำกับตัวพิมพ์ใหญ่เหนือหัวข้อ */
export function SectionLabel({ children, className = '' }) {
  return (
    <motion.p
      variants={FADE_UP}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`eyebrow mb-3 ${className}`}
    >
      {children}
    </motion.p>
  );
}

/** หัวข้อหลักของแต่ละส่วน */
export function SectionTitle({ children, className = '' }) {
  return (
    <motion.h2
      variants={FADE_UP}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`text-[27px] md:text-[38px] font-semibold tracking-tight text-ink ${className}`}
    >
      {children}
    </motion.h2>
  );
}

/** คำอธิบายใต้หัวข้อ */
export function SectionDesc({ children, className = '' }) {
  return (
    <motion.p
      variants={FADE_UP}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
      className={`lead text-[16.5px] mt-4 max-w-2xl ${className}`}
    >
      {children}
    </motion.p>
  );
}

/** หัวส่วนแบบสำเร็จรูป: label + title + desc */
export function SectionHead({ label, title, desc, align = 'left', className = '' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : '';
  return (
    <div className={`${alignClass} ${className}`}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <SectionTitle className={align === 'center' ? 'max-w-3xl mx-auto' : ''}>{title}</SectionTitle>
      {desc && <SectionDesc className={align === 'center' ? 'mx-auto' : ''}>{desc}</SectionDesc>}
    </div>
  );
}

/** เนื้อหาที่ค่อย ๆ ปรากฏเมื่อเลื่อนถึง */
export function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      variants={FADE_UP}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** รายการติ๊กถูก */
export function CheckItem({ children, accent = 'var(--clr-brand)', className = '' }) {
  return (
    <li className={`flex items-start gap-2.5 text-[15px] text-ink-2 leading-relaxed ${className}`}>
      <Check size={16} strokeWidth={2.6} className="mt-[5px] shrink-0" style={{ color: accent }} />
      <span>{children}</span>
    </li>
  );
}

/** หัวหน้าเพจ (ใช้ทุกหน้ายกเว้นหน้าแรก)
 *  ใช้ CSS animation แทน framer-motion เพราะเป็นเนื้อหาส่วนบนสุดของหน้า
 *  จึงไม่ควรต้องรอ JavaScript ก่อนจึงจะมองเห็น */
export function PageHero({ label, title, desc, children }) {
  return (
    <section className="pt-32 md:pt-40 pb-14 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="eyebrow mb-4 animate-fade-in-up">{label}</p>
        <h1 className="text-[34px] md:text-[52px] font-semibold tracking-tight text-ink max-w-3xl animate-fade-in-up animation-delay-100">
          {title}
        </h1>
        {desc && (
          <p className="lead text-[17px] mt-5 max-w-2xl animate-fade-in-up animation-delay-200">
            {desc}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-in-up animation-delay-300">{children}</div>
        )}
      </div>
    </section>
  );
}
