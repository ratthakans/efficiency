'use client';

import { motion } from 'framer-motion';

const FADE_UP = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0  },
};

const VIEWPORT_OPTS = { once: true, margin: '-60px' };

/** Full-width section wrapper with max-width container */
export default function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

/** Small uppercase label above section title */
export function SectionLabel({ children }) {
  return (
    <motion.p
      variants={FADE_UP}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OPTS}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="code-label mb-4"
    >
      {children}
    </motion.p>
  );
}

/** Large section heading */
export function SectionTitle({ children, className = '' }) {
  return (
    <motion.h2
      variants={FADE_UP}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OPTS}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`text-3xl md:text-4xl font-mono font-semibold tracking-tight leading-snug ${className}`}
    >
      {children}
    </motion.h2>
  );
}

/** Fade-in-up reveal on scroll — generic container */
export function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      variants={FADE_UP}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_OPTS}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
