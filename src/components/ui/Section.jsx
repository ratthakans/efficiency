/**
 * Layout primitives for the Grid theme.
 *
 * No scroll reveals, no fade choreography — the theme forbids them. Motion is
 * limited to hover micro-states defined in globals.css. These primitives are
 * server components on purpose: nothing here needs the client.
 *
 * Section eyebrows are deliberately absent. Portfolio Grid is not an ordinal
 * macrostructure, so numbered kickers would be decoration rather than structure.
 */

export function Band({ children, id, tone = 'paper', rule = 'none', tight = false, className = '' }) {
  const ruleClass = rule === 'ink' ? 'rule-top' : rule === 'hair' ? 'rule-hair' : '';
  const toneStyle =
    tone === 'paper-2'
      ? { background: 'var(--color-paper-2)' }
      : tone === 'paper-3'
        ? { background: 'var(--color-paper-3)' }
        : undefined;

  return (
    <section id={id} className={`${ruleClass} ${className}`} style={toneStyle}>
      <div className={`shell ${tight ? 'band--tight' : 'band'}`}>{children}</div>
    </section>
  );
}

/** Heading + optional lede, always stacked in one column. */
export function SectionHead({ title, lede, children, className = '' }) {
  return (
    <div className={className}>
      <h2 className="display-s" style={{ maxWidth: '20ch' }}>
        {title}
      </h2>
      {lede && <p className="lede mt-6">{lede}</p>}
      {children}
    </div>
  );
}

/** The cropped numeral — an object set beside a head, not a heading itself. */
export function Numeral({ children, className = '' }) {
  return (
    <span className={`numeral block ${className}`} aria-hidden="true">
      {children}
    </span>
  );
}

/** Stepped bars — a constructed figure used as texture beside a claim. */
export function SteppedBars({ className = '' }) {
  return (
    <div className={`mark-steps ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
