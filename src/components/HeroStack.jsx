import Image from 'next/image';
import ScrollPreview from '@/components/ScrollPreview';

/**
 * Three real sites fanned over the Spectrum mesh — the first thing on the page
 * that says "we build websites" without a word. Each card is a link to the
 * live site; hovering (or focusing) one straightens it and reads the whole
 * page top to bottom. The stills are the 1280×800 captures; the full-page
 * captures load only on that hover, exactly as in the work grid.
 */
export default function HeroStack({ projects }) {
  return (
    <div className="hero-stack">
      {projects.map((p) => (
        <a
          key={p.key}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-stack__card"
          data-scroll-host
          aria-label={`เปิดเว็บไซต์ ${p.name} ในแท็บใหม่`}
        >
          <Image
            src={p.image}
            alt={`หน้าแรกของเว็บไซต์ ${p.name}`}
            fill
            priority
            sizes="(max-width: 60rem) 80vw, 30vw"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
          <ScrollPreview src={p.full.src} height={p.full.height} />
        </a>
      ))}
    </div>
  );
}
