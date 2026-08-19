/**
 * Accent palette — light theme.
 * Single source of truth for the four package/section accents.
 */
export const ACCENTS = [
  { key: 'slate',  hex: '#475569', soft: '#f1f5f9', ring: 'rgba(71,85,105,0.18)'  },
  { key: 'brand',  hex: '#2563eb', soft: '#eaf1ff', ring: 'rgba(37,99,235,0.20)'  },
  { key: 'teal',   hex: '#0d9488', soft: '#e6f7f4', ring: 'rgba(13,148,136,0.20)' },
  { key: 'violet', hex: '#6d4aff', soft: '#efeaff', ring: 'rgba(109,74,255,0.20)' },
  { key: 'amber',  hex: '#b45309', soft: '#fdf2e3', ring: 'rgba(180,83,9,0.18)'   },
];

/** Returns accent object at cycled index */
export function accentAt(index) {
  return ACCENTS[index % ACCENTS.length];
}
