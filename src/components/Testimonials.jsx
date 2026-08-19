'use client';

import { Quote } from 'lucide-react';
import Section, { SectionHead, FadeIn } from '@/components/ui/Section';
import { TESTIMONIALS } from '@/lib/content';
import { accentAt } from '@/lib/accents';

/**
 * Testimonials — คำรับรองจากลูกค้า
 *
 * แสดงเฉพาะเมื่อมีข้อความที่ลูกค้าอนุมัติแล้วใน TESTIMONIALS
 * ถ้ายังว่างอยู่จะไม่เรนเดอร์อะไรเลย เพื่อไม่ให้มีคำพูดที่ไม่ได้มาจากลูกค้าจริงขึ้นเว็บ
 */
export default function Testimonials({ tone = 'soft' }) {
  if (!TESTIMONIALS.length) return null;

  return (
    <Section tone={tone}>
      <SectionHead
        label="Client words"
        title="ลูกค้าพูดถึงการทำงานกับเรา"
        desc="ทุกข้อความมาจากลูกค้าจริงที่อ่านและอนุมัติก่อนเผยแพร่"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {TESTIMONIALS.map((t, i) => {
          const accent = accentAt(i);
          return (
            <FadeIn key={`${t.company}-${i}`} delay={i * 0.06} className="h-full">
              <figure
                className="card h-full p-7 flex flex-col"
                style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
              >
                <Quote size={22} className="mb-5" style={{ color: accent.hex }} />
                <blockquote className="text-[15.5px] text-ink-2 leading-[1.85] flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-line-soft">
                  <p className="text-[15px] font-medium text-ink">{t.name}</p>
                  <p className="text-[13.5px] text-ink-3 mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
