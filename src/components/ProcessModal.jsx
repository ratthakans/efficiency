'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { accentAt } from '@/lib/accents';

/**
 * ProcessModal — รายละเอียดของแต่ละขั้นตอนการทำงาน
 */
export default function ProcessModal({ step, index, onClose }) {
  useEffect(() => {
    if (!step) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [step, onClose]);

  const accent = step ? accentAt(step.accentIdx) : null;

  return (
    <AnimatePresence>
      {step && (
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
            aria-labelledby="process-modal-title"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 py-10"
          >
            <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-line shadow-lg overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-1" style={{ background: accent.hex }} aria-hidden="true" />

              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-1.5 rounded-md text-ink-3 hover:text-ink hover:bg-soft transition-colors"
                aria-label="ปิดหน้าต่าง"
              >
                <X size={20} />
              </button>

              <div className="p-7 md:p-9">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="num w-10 h-10 rounded-xl flex items-center justify-center text-[15px] font-semibold"
                    style={{ background: accent.soft, color: accent.hex }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-mono text-[11.5px] tracking-[0.16em] uppercase text-ink-3">{step.label}</p>
                    <h2 id="process-modal-title" className="text-[21px] font-semibold text-ink leading-tight">
                      {step.thai}
                    </h2>
                  </div>
                </div>

                <p className="text-[15.5px] text-ink-2 leading-relaxed">{step.detail}</p>

                <div className="mt-7 pt-7 border-t border-line-soft">
                  <p className="label-th mb-4">สิ่งที่เกิดขึ้นในขั้นตอนนี้</p>
                  <ul className="space-y-3">
                    {step.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[15px] text-ink-2 leading-relaxed">
                        <Check size={16} strokeWidth={2.6} className="mt-1 shrink-0" style={{ color: accent.hex }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
