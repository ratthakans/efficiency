'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * TypewriterText
 *
 * Cycles through an array of words with a type/delete animation.
 * Fixes: `setDisplayed` moved inside the effect to avoid the extra
 * render on every tick that the previous version caused.
 */
export default function TypewriterText({ words, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx]     = useState(0);
  const [charIdx, setCharIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let delay;

    if (!deleting && charIdx < current.length) {
      // Typing
      setDisplayed(current.slice(0, charIdx + 1));
      delay = setTimeout(() => setCharIdx(i => i + 1), 80);
    } else if (!deleting && charIdx === current.length) {
      // Pause at end of word
      delay = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      // Deleting
      setDisplayed(current.slice(0, charIdx - 1));
      delay = setTimeout(() => setCharIdx(i => i - 1), 40);
    } else {
      // Move to next word
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    return () => clearTimeout(delay);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span className={className}>
      {displayed}
      <motion.span
        className="inline-block w-[3px] h-[0.82em] ml-0.5"
        style={{
          backgroundColor: 'var(--clr-blue)',
          boxShadow:        '0 0 8px var(--clr-blue)',
          verticalAlign:    'middle',
          borderRadius:     '1px',
        }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
    </span>
  );
}
