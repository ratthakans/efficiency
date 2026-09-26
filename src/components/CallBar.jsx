import { CONTACT } from '@/lib/content';

/**
 * The call, kept under the thumb on phones.
 *
 * The header scrolls away and this studio has one conversion — a phone call —
 * so on small screens the call button stays pinned to the bottom edge. It is
 * a plain tel: link: no script, and CallTracking picks it up like any other.
 * Desktop already carries the number in the header, so the bar is phone-only.
 */
export default function CallBar() {
  return (
    <div className="callbar md:hidden">
      <a href={CONTACT.phoneHref} className="btn btn--call w-full">
        โทร {CONTACT.phone}
      </a>
    </div>
  );
}
