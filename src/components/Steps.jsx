import { STEPS } from '@/lib/content';

/** The four steps of a project — shared by the home page and /approach. */
export default function Steps({ className = '' }) {
  return (
    <ol className={`steps ${className}`}>
      {STEPS.map((s, i) => (
        <li key={s.title} className="step">
          <span className="mono step__n">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="step__title">{s.title}</h3>
          <p className="prose mt-3" style={{ fontSize: 'var(--text-sm)' }}>
            {s.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
