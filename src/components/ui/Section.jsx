/**
 * Layout primitives for the Grid theme.
 *
 * No scroll reveals, no fade choreography — the theme forbids them. Motion is
 * limited to hover micro-states defined in globals.css. These primitives are
 * server components on purpose: nothing here needs the client.
 *
 * Section eyebrows are deliberately absent. Portfolio Grid is not an ordinal
 * macrostructure, so numbered kickers would be decoration rather than structure.
 *
 * Numeral and SteppedBars lived here too — a giant faded number and a figure of
 * bars standing for no data. The theme asks every section to carry an object;
 * these two carried nothing, so on a white page they were the first to go.
 */

/* `tone` survives for a section that genuinely needs a tinted ground; as of the
   white pass nothing uses it. Alternating tints were how the long pages marked
   rhythm, and that job moved to which column the head sits in. */
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
