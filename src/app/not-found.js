export const metadata = {
  title: '404 — Page Not Found',
};

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="code-label mb-4">Error 404</p>
        <h1 className="text-5xl md:text-7xl font-mono font-semibold tracking-tight text-white mb-6">
          Page not found
        </h1>
        <p className="text-white/45 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-mono font-semibold text-black rounded-sm"
          style={{ background: 'linear-gradient(135deg, #61afef, #56b6c2)' }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
