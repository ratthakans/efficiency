'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PROCESS_DETAILS = {
  Define: {
    title:       'Define',
    description: 'Understanding the problem before solving it.',
    details: [
      'Meet with stakeholders to understand business goals and constraints',
      'Document current processes and pain points',
      'Define success metrics and project scope',
      'Clarify requirements and user needs',
      'Identify risks and dependencies',
    ],
  },
  Design: {
    title:       'Design',
    description: 'Creating the blueprint for the solution.',
    details: [
      'Architecture planning and system design',
      'User experience and interface design',
      'Database schema and data flow planning',
      'Integration points with existing systems',
      'Security and scalability considerations',
    ],
  },
  Build: {
    title:       'Build',
    description: 'Implementing the designed solution.',
    details: [
      'Write clean, maintainable code',
      'Develop backend services and APIs',
      'Build user interfaces and applications',
      'Integrate third-party services',
      'Document code and systems',
    ],
  },
  Test: {
    title:       'Test',
    description: 'Ensuring quality before deployment.',
    details: [
      'Automated testing and quality assurance',
      'Performance and security testing',
      'User acceptance testing with stakeholders',
      'Bug fixes and refinements',
      'Edge case and stress testing',
    ],
  },
  Deploy: {
    title:       'Deploy',
    description: 'Getting the solution into production.',
    details: [
      'Infrastructure setup and configuration',
      'Data migration and system integration',
      'Deployment planning and execution',
      'User training and documentation',
      'Monitoring and ongoing support',
    ],
  },
};

const ACCENT_COLOURS = ['#e06c75', '#e5c07b', '#98c379', '#56b6c2', '#61afef'];
const STEP_KEYS      = Object.keys(PROCESS_DETAILS);

export default function ProcessModal({ step, isOpen, onClose }) {
  const content      = PROCESS_DETAILS[step] ?? null;
  const stepIndex    = step ? STEP_KEYS.indexOf(step) : 0;
  const accentColour = ACCENT_COLOURS[stepIndex] ?? ACCENT_COLOURS[0];

  // Escape key + body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Guard: don't render if no content
  if (!content) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="process-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1,    y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative border border-white/10 rounded-lg max-w-xl w-full p-8 md:p-12"
            style={{ background: '#090909' }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-sm text-white/40 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
            >
              <p
                className="code-label mb-3"
                style={{ color: accentColour }}
              >
                Process Step
              </p>
              <h2 id="process-modal-title" className="text-3xl md:text-4xl font-mono font-light mb-3">
                {content.title}
              </h2>
              <p className="text-white/50 text-base mb-8 leading-relaxed">
                {content.description}
              </p>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
            >
              <p className="code-label mb-5">What happens in this phase</p>
              <ul className="space-y-4">
                {content.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + i * 0.05 }}
                    className="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: accentColour }}
                      aria-hidden="true"
                    />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
