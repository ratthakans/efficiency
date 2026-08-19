'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { accentAt } from '@/lib/accents';

/**
 * ProjectModal — รายละเอียดตัวอย่างขอบเขตงาน
 */
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  const accent = project ? accentAt(project.accentIdx) : null;

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/35 backdrop-blur-sm z-40"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 py-10"
          >
            <div className="relative w-full max-w-3xl rounded-2xl bg-white border border-line shadow-lg overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-1" style={{ background: accent.hex }} aria-hidden="true" />

              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-1.5 rounded-md text-ink-3 hover:text-ink hover:bg-soft transition-colors"
                aria-label="ปิดหน้าต่าง"
              >
                <X size={20} />
              </button>

              <div className="p-7 md:p-9">
                <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase mb-2" style={{ color: accent.hex }}>
                  {project.category}
                </p>
                <h2 id="project-modal-title" className="text-[23px] md:text-[26px] font-semibold text-ink leading-snug pr-10">
                  {project.title}
                </h2>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="pill text-[13px]" style={{ background: accent.soft, borderColor: accent.soft, color: accent.hex }}>
                    {project.tier}
                  </span>
                  <span className="pill text-[13px]">{project.scale}</span>
                  <span className="pill text-[13px]">{project.duration}</span>
                </div>

                <div className="mt-7 pt-7 border-t border-line-soft grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="label-th mb-3">โจทย์ที่มักพบ</p>
                    <p className="text-[15px] text-ink-2 leading-relaxed">{project.problem}</p>

                    <p className="label-th mt-6 mb-3">แนวทางที่เราวางให้</p>
                    <p className="text-[15px] text-ink-2 leading-relaxed">{project.approach}</p>
                  </div>

                  <div>
                    <p className="label-th mb-3">ขอบเขตงานตัวอย่าง</p>
                    <ul className="space-y-2.5">
                      {project.scope.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-[14.5px] text-ink-2 leading-relaxed">
                          <Check size={15} strokeWidth={2.6} className="mt-1 shrink-0" style={{ color: accent.hex }} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-7 border-t border-line-soft flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                  <p className="text-[13.5px] text-ink-3 leading-relaxed max-w-md">
                    ตัวอย่างนี้ใช้อธิบายขอบเขตงานให้เห็นภาพ ขอบเขตจริงของแต่ละโครงการสรุปร่วมกันในขั้นตอนเก็บโจทย์
                  </p>
                  <Link href="/contact" className="btn btn-primary btn-sm shrink-0">
                    คุยเรื่องงานลักษณะนี้
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
