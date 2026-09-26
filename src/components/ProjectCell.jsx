import Image from 'next/image';

/**
 * ProjectCell — one cell of the work index.
 *
 * A cell, not a tile: hairline borders come from the grid, not from a card.
 * Zero radius, zero shadow, real screenshot in a <figure> — no re-drawn browser
 * chrome. The URL is never printed; the whole cell is the link, so a project
 * still on a temporary domain reads by name alone.
 */
export default function ProjectCell({ project, priority = false }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="work-cell group"
      aria-label={`เปิดเว็บไซต์ ${project.name} ในแท็บใหม่`}
    >
      <figure className="work-figure" style={{ aspectRatio: '16 / 10' }}>
        <Image
          src={project.image}
          alt={`หน้าแรกของเว็บไซต์ ${project.name}`}
          width={1280}
          height={800}
          priority={priority}
          sizes="(max-width: 40rem) 100vw, (max-width: 72rem) 50vw, 33vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />
      </figure>

      <div className="mt-5 flex items-start justify-between gap-4">
        <h3 className="work-cell__name" style={{ fontSize: 'var(--text-xl)', lineHeight: 1.3 }}>
          {project.name}
        </h3>
        <span className="mark-quarter mt-1 shrink-0" aria-hidden="true" />
      </div>

      <p className="label mt-2">{project.stack}</p>
      <p className="prose mt-3" style={{ fontSize: 'var(--text-sm)' }}>
        {project.summary}
      </p>
    </a>
  );
}
