/**
 * Sets the theme before first paint so the page never flashes the wrong sheet.
 * Runs ahead of hydration; keep it small and dependency-free.
 */
const SCRIPT = `(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=s||(m?'dark':'light')}catch(e){document.documentElement.dataset.theme='light'}})()`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
