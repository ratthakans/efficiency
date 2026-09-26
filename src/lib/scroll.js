/* How long a full-page capture takes to read through on hover. Captures are
   800px wide: a 4000px page travels in ~5s, a short one in ~2.5s. Shared by
   the client preview and the server-rendered featured frame. */
export function scrollSeconds(height) {
  return Math.min(6, Math.max(2.5, height / 800));
}
