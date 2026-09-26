import Image from 'next/image';
import { scrollSeconds } from '@/lib/scroll';
import { WORK_KINDS } from '@/lib/content';

/**
 * One project set beside the home headline, so the first screen shows work
 * and not only words. A tall frame holds the full-page capture; hovering reads
 * the site top to bottom. Unlike the grid cards the capture is here from the
 * first paint — it is the hero image — so the scroll needs no client code:
 * the same .scroll-preview CSS drives it.
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
        <div
          className="scroll-preview"
          data-ready
          style={{ '--scroll-dur': `${scrollSeconds(project.full.height)}s` }}
        >
          <Image
            src={project.full.src}
            alt={`หน้าเว็บไซต์ ${project.name}`}
            width={800}
            height={project.full.height}
            priority
            sizes="(max-width: 60rem) 100vw, 34vw"
          />
        </div>
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
