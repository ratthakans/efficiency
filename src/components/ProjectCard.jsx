'use client';

import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import { accentAt } from '@/lib/accents';

/**
 * ProjectCard — การ์ดผลงานจริง ลิงก์ตรงไปยังเว็บไซต์ที่เปิดใช้งานอยู่
 * ทั้งการ์ดเป็นลิงก์เดียว เพื่อให้กดเข้าถึงผลงานได้ทันทีจากทุกจุด
 */
export default function ProjectCard({ project }) {
  const accent = accentAt(project.accentIdx);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover h-full flex flex-col overflow-hidden group"
      style={{ '--accent': accent.hex, '--accent-soft': accent.soft }}
      aria-label={`เปิดเว็บไซต์ ${project.name} (${project.domain}) ในแท็บใหม่`}
    >
      {/* หน้าต่างเบราว์เซอร์จำลอง — แสดงชื่อโดเมนจริง */}
      <div className="border-b border-line">
        <div className="browser-bar">
          <span className="browser-dot" style={{ background: '#ff5f57' }} />
          <span className="browser-dot" style={{ background: '#febc2e' }} />
          <span className="browser-dot" style={{ background: '#28c840' }} />
          <span className="ml-2 flex-1 rounded-md bg-white border border-line px-2.5 py-1 font-mono text-[11px] text-ink-3 truncate">
            {project.domain}
          </span>
        </div>
        {/* ภาพหน้าแรกของเว็บไซต์จริง */}
        <div className="relative overflow-hidden bg-soft" style={{ aspectRatio: '16 / 10' }}>
          <Image
            src={project.image}
            alt={`หน้าแรกของเว็บไซต์ ${project.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span
            className="absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-white/90 backdrop-blur border border-line text-ink-2 transition-colors duration-300 group-hover:bg-[var(--accent)] group-hover:border-transparent group-hover:text-white"
            aria-hidden="true"
          >
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="font-mono text-[11px] tracking-[0.16em]" style={{ color: accent.hex }}>
            {project.category}
          </span>
          <span className="num text-[11.5px] text-ink-3">· {project.year}</span>
        </div>

        <h3 className="text-[19px] font-semibold text-ink mb-1">{project.name}</h3>
        <p className="text-[14.5px] text-ink-3 mb-3">{project.type}</p>
        <p
          className="inline-flex items-center gap-1.5 text-[13px] font-medium mb-3 px-2.5 py-1 rounded-md"
          style={{ background: accent.soft, color: accent.hex }}
        >
          บทบาทของเรา · {project.role}
        </p>
        <p className="text-[14.5px] text-ink-2 leading-relaxed">{project.summary}</p>

        <ul className="mt-5 space-y-2">
          {project.scope.map((s) => (
            <li key={s} className="flex items-start gap-2.5 text-[14px] text-ink-2 leading-relaxed">
              <Check size={15} strokeWidth={2.6} className="mt-1 shrink-0" style={{ color: accent.hex }} />
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <span
            className="inline-flex items-center gap-2 text-[14.5px] font-medium"
            style={{ color: accent.hex }}
          >
            เปิดเว็บไซต์จริง
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </a>
  );
}
