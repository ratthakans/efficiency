'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PROCESS_DETAILS = {
  Discovery: {
    title:       'Discovery',
    description: 'Before opening a code editor, we need to understand your business — what the real problem is, who the actual end-users are.',
    details: [
      'Stakeholder interviews with product owner and real end-users',
      'User persona + journey mapping',
      'Technical requirements workshop',
      'Scope definition with clear boundaries',
      'Risk identification and mitigation planning',
    ],
  },
  'UX / UI': {
    title:       'UX / UI Design',
    description: 'A clickable prototype before any developer writes code — UX that works in practice, not just something that looks good.',
    details: [
      'Information architecture and user flow',
      'Low-fidelity wireframe + feedback round',
      'High-fidelity UI design + Design System',
      'Interactive Figma prototype (fully clickable)',
      'Accessibility review (WCAG 2.1)',
      'Micro-interaction specifications',
    ],
  },
  Build: {
    title:       'Build',
    description: 'Sprint-based every 2 weeks — you see real progress with a demo at every sprint, not a 3-month wait.',
    details: [
      'Sprint planning every 2 weeks',
      'Mobile app development (Flutter / Native iOS / Android)',
      'Backend API + database development',
      'Hardware SDK integration (if in scope)',
      'Demo at each sprint end — your feedback shapes the next sprint',
      'Unit + integration tests alongside development',
    ],
  },
  'QA & Test': {
    title:       'QA & Testing',
    description: 'Tested on real physical devices across 10+ models — not just simulators, covering the edge cases real users will encounter.',
    details: [
      'Functional testing: every user flow',
      'Real device matrix: 10+ models, multiple iOS/Android versions',
      'Performance profiling (startup time, scroll, API latency)',
      'Security: input validation, auth flows, secure storage',
      'Accessibility: screen reader, dynamic text size',
      'Regression testing after every bug fix',
    ],
  },
  Launch: {
    title:       'Launch',
    description: 'App Store submission, production deployment, monitoring setup — we stay with you through go-live.',
    details: [
      'App Store Connect + Google Play Store submission',
      'Store listing: screenshots, description, keyword optimisation',
      'Production server deployment + health checks',
      'Error monitoring setup (Sentry / Firebase Crashlytics)',
      'Performance monitoring dashboard',
      'Handover documentation + team training',
    ],
  },
  Maintain: {
    title:       'Maintain',
    description: 'Maintenance packages — keeping your app running on the latest OS versions, with bug fixes and minor feature additions.',
    details: [
      'iOS / Android OS compatibility updates (every major release)',
      'Dependency security patches',
      'P1 bug hotfix within 24 hours',
      'Monthly performance monitoring review',
      'Minor feature additions (within 8h/month)',
      'Monthly technical health report',
    ],
  },
};

const ACCENT_COLOURS = ['#e06c75', '#e5c07b', '#98c379', '#56b6c2', '#61afef', '#c678dd'];
const STEP_KEYS      = Object.keys(PROCESS_DETAILS);

export default function ProcessModal({ step, isOpen, onClose }) {
  const content      = PROCESS_DETAILS[step] ?? null;
  const stepIndex    = step ? STEP_KEYS.indexOf(step) : 0;
  const accentColour = ACCENT_COLOURS[stepIndex >= 0 ? stepIndex : 0];

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
              <p className="code-label mb-4" style={{ color: accentColour }}>Process Phase</p>
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
              <p className="code-label mb-5">Activities</p>
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
