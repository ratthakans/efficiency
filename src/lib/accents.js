/** Accent colour palette — single source of truth used across all pages */
export const ACCENTS = [
  { key: 'red',    hex: '#e06c75', rgb: '224,108,117' },
  { key: 'yellow', hex: '#e5c07b', rgb: '229,192,123' },
  { key: 'green',  hex: '#98c379', rgb: '152,195,121' },
  { key: 'cyan',   hex: '#56b6c2', rgb: '86,182,194'  },
  { key: 'blue',   hex: '#61afef', rgb: '97,175,239'  },
  { key: 'purple', hex: '#c678dd', rgb: '198,120,221' },
];

/** Returns accent object at cycled index */
export function accentAt(index) {
  return ACCENTS[index % ACCENTS.length];
}
