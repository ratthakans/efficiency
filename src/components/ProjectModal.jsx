'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ProjectModal
 *
 * Improvements over previous version:
 * - Escape key closes modal
 * - Body scroll locked while open
 * - Image index resets when project changes
 * - Full aria-dialog / aria-labelledby semantics
 * - Safe guards for missing project.images
 */
export default function ProjectModal({ isOpen, project, onClose }) {
  const [imageIdx, setImageIdx] = useState(0);

  const images = project?.images?.length ? project.images : project?.image ? [project.image] : [];

  const prev = useCallback(() => setImageIdx(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setImageIdx(i => (i + 1) % images.length),                  [images.length]);

  // Reset to first image when project changes
  useEffect(() => { setImageIdx(0); }, [project]);

  // Escape to close + body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, prev, next]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 pt-8 pb-8"
          >
            <div
              className="relative w-full max-w-3xl rounded-lg border border-white/10 overflow-hidden"
              style={{ background: '#090909' }}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-10 p-1.5 rounded-sm text-white/40 hover:text-white transition-colors hover:bg-white/08"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Image */}
              {images.length > 0 && (
                <div className="relative bg-black/40 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <AnimatePresence mode="wait">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <motion.img
                      key={imageIdx}
                      src={images[imageIdx]}
                      alt={`${project.name} – screenshot ${imageIdx + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </AnimatePresence>

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-black/50 hover:bg-black/70 transition-colors text-white"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-black/50 hover:bg-black/70 transition-colors text-white"
                        aria-label="Next image"
                      >
                        <ChevronRight size={18} />
                      </button>
                      <div className="absolute bottom-3 right-4 text-[11px] text-white/55 bg-black/60 rounded px-2.5 py-0.5 font-mono" aria-live="polite">
                        {imageIdx + 1} / {images.length}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-8 md:p-10 space-y-8">
                <div>
                  <h2 id="project-modal-title" className="text-2xl md:text-3xl font-mono font-semibold mb-1">
                    {project.name}
                  </h2>
                  <p className="text-white/38 text-sm font-mono">{project.year}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="code-label mb-4">Challenge</p>
                    <p className="text-white/65 text-sm leading-relaxed">{project.problem}</p>
                  </div>

                  <div>
                    <p className="code-label mb-4">Solution</p>
                    <p className="text-white/65 text-sm leading-relaxed">{project.solution}</p>
                  </div>

                  <div>
                    <p className="code-label mb-4">Results</p>
                    <ul className="space-y-2">
                      {(Array.isArray(project.result) ? project.result : [project.result]).map((r, i) => (
                        <li key={i} className="text-white/65 text-sm flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-white/35 mt-1.5 flex-shrink-0" aria-hidden="true" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
