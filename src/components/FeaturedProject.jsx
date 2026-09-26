import Image from 'next/image';
import { WORK_KINDS } from '@/lib/content';
import ScrollPreview from '@/components/ScrollPreview';

/**
 * One project set beside the home headline, so the first screen shows work
 * and not only words. The frame paints a small 4:5 cover (the top of the site,
 * ~30 KB) — it is the page's LCP image, so it must stay light. The full-page
 * capture (~100 KB) arrives only when a mouse or focus ring reaches the frame,
 * exactly like the grid cards, and then scrolls top to bottom.
 */
export default function FeaturedProject({ project }) {
  const kind = WORK_KINDS.find((k) => k.key === project.kind)?.label;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="featured group block"
      data-scroll-host
      aria-label={`เปิดเว็บไซต์ ${project.name} ในแท็บใหม่`}
    >
      <figure className="work-figure featured__frame">
        <Image
          src={project.full.src.replace('/work/full/', '/work/cover/')}
          alt={`หน้าเว็บไซต์ ${project.name}`}
          fill
          priority
          sizes="(max-width: 60rem) 100vw, 34vw"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        <ScrollPreview src={project.full.src} height={project.full.height} />
      </figure>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <p className="work-cell__name" style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>
          {project.name}
        </p>
        <span className="mono" aria-hidden="true" style={{ color: 'var(--color-muted)', fontSize: 'var(--text-sm)' }}>
          ↗
        </span>
      </div>
      <p className="annotation mt-1">
        {kind} · {project.stack}
      </p>
    </a>
  );
}
