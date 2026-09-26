'use client';

import { useState } from 'react';
import ProjectCell from '@/components/ProjectCell';
import { PROJECTS, WORK_KINDS } from '@/lib/content';

/**
 * The work index with its filter bar — the Portfolio Grid signature.
 *
 * Filtering swaps which cells render; it never scrolls the page (gate 53).
 * Cells carry no URL text — the name is the label, the cell is the link.
 */
export default function WorkClient() {
  const [kind, setKind] = useState('all');

  const shown = kind === 'all' ? PROJECTS : PROJECTS.filter((p) => p.kind === kind);

  return (
    <>
      <div className="filters filters--scroll mt-10" role="group" aria-label="กรองผลงานตามประเภท">
        {WORK_KINDS.map((k) => {
          const count =
            k.key === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.kind === k.key).length;
          return (
            <button
              key={k.key}
              type="button"
              className="filter"
              aria-pressed={kind === k.key}
              onClick={() => setKind(k.key)}
            >
              {k.label} <span className="num">({count})</span>
            </button>
          );
        })}
      </div>

      <p className="label mt-6" aria-live="polite">
        แสดง <span className="num">{shown.length}</span> จาก{' '}
        <span className="num">{PROJECTS.length}</span> โครงการ
      </p>

      <div className="work-grid mt-8">
        {shown.map((p, i) => (
          <ProjectCell key={p.key} project={p} priority={i < 3} />
        ))}
      </div>
    </>
  );
}
