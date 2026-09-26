/**
 * Questions as native disclosure widgets. On a phone a list of full answers
 * ran past a screen and a half; now the questions scan first and a tap opens
 * one. <details> needs no script, keeps the answer in the HTML for search and
 * assistants, and is keyboard- and screen-reader-operable by default.
 */
export default function FaqList({ items, openFirst = false, className = '' }) {
  return (
    <div className={`faq ${className}`}>
      {items.map((f, i) => (
        <details key={f.q} className="faq__item" open={openFirst && i === 0}>
          <summary className="faq__q">
            <span>{f.q}</span>
            <span className="faq__icon" aria-hidden="true" />
          </summary>
          <p className="faq__a prose">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
