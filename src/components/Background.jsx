/**
 * Background — the exposed 12-column hairline grid.
 *
 * In the Grid theme the column rules are content, not scaffolding: they stay
 * visible behind everything and only reduce their subdivision on narrow screens.
 */
export default function Background() {
  return (
    <div className="rails" aria-hidden="true">
      <div className="rails__inner" />
    </div>
  );
}
