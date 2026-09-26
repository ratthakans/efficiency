'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * Interactive proof for four of the six disciplines. Each demo manipulates the
 * real thing — real tokens, real CSS, real layout — rather than illustrating it.
 * The fifth and sixth (Invisible Speed, Machine-Readable Meaning) are proven by
 * Proof Mode, which reads this document rather than a mock of it.
 */

/* ── 01 · Adaptive Light ─────────────────────────────────────── */
export function AdaptiveLightDemo() {
  const [split, setSplit] = useState(50);

  return (
    <figure className="m-0">
      <div
        className="relative overflow-clip"
        style={{
          aspectRatio: '16 / 9',
          border: 'var(--rule-hairline) solid var(--color-rule)',
        }}
      >
        {/* the dark treatment sits underneath, graded and on its own sheet */}
        <div
          className="absolute inset-0"
          style={{ background: 'oklch(17% 0.012 255)' }}
          aria-hidden="true"
        >
          <Image
            src="/work/vela.webp"
            alt=""
            fill
            sizes="(max-width: 60rem) 100vw, 50vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'top',
              filter: 'brightness(0.86) contrast(1.04) saturate(0.96)',
            }}
          />
          <span
            className="label num absolute"
            style={{ insetInlineEnd: 12, insetBlockEnd: 10, color: 'oklch(74% 0.15 264)' }}
          >
            dark · signal oklch(74% 0.15 264)
          </span>
        </div>

        {/* the light treatment is clipped back to reveal it */}
        <div
          className="absolute inset-0"
          style={{
            background: 'oklch(99% 0.003 255)',
            clipPath: `inset(0 ${100 - split}% 0 0)`,
          }}
        >
          <Image
            src="/work/vela.webp"
            alt="ภาพเดียวกันภายใต้การไล่สีของโหมดสว่างและโหมดมืด"
            fill
            sizes="(max-width: 60rem) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
          <span
            className="label num absolute"
            style={{ insetInlineStart: 12, insetBlockEnd: 10, color: 'oklch(45% 0.19 264)' }}
          >
            light · signal oklch(45% 0.19 264)
          </span>
        </div>

        {/* the divider */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0"
          style={{ insetInlineStart: `${split}%`, width: 2, background: 'var(--color-signal)' }}
        />
      </div>

      <label className="mt-4 block">
        <span className="label">ลากเพื่อเทียบการไล่สีของสองโหมด · {split}%</span>
        <input
          type="range"
          min="0"
          max="100"
          value={split}
          onChange={(e) => setSplit(Number(e.target.value))}
          className="mt-2 w-full"
          style={{ accentColor: 'var(--color-signal)', minHeight: 44 }}
        />
      </label>

      <figcaption className="prose mt-2" style={{ fontSize: 'var(--text-sm)' }}>
        ภาพเดียวกัน สองการไล่สี สีแบรนด์ในโหมดมืดไม่ใช่ค่าเดิมที่หรี่ลง แต่ถูกเลือกใหม่ให้คอนทราสต์ผ่านเกณฑ์บนพื้นเข้ม
      </figcaption>
    </figure>
  );
}

/* ── 02 · Editorial Type ─────────────────────────────────────── */
const SPECIMENS = {
  th: {
    label: 'ไทย',
    sample: 'รายละเอียดไม่ใช่การตกแต่ง รายละเอียดคือสิ่งที่ทำให้ประสบการณ์ดิจิทัลมีชีวิต',
    lineHeight: 1.78,
    tracking: '0em',
    measure: '34rem',
    note: 'สระบนและล่างต้องการระยะบรรทัดสูงกว่า และ tracking ติดลบทำให้รูปสระชนกัน',
  },
  en: {
    label: 'English',
    sample: 'Details are not decoration. Details are what make a digital experience feel alive.',
    lineHeight: 1.5,
    tracking: '-0.011em',
    measure: '30rem',
    note: 'Latin tolerates tighter tracking and a shorter measure before rhythm breaks down.',
  },
};

export function TypeRhythmDemo() {
  const [lang, setLang] = useState('th');
  const s = SPECIMENS[lang];

  return (
    <div>
      <div className="filters" role="group" aria-label="เลือกภาษาเพื่อเทียบจังหวะตัวอักษร">
        {Object.entries(SPECIMENS).map(([key, v]) => (
          <button
            key={key}
            type="button"
            className="filter"
            aria-pressed={lang === key}
            onClick={() => setLang(key)}
          >
            {v.label}
          </button>
        ))}
      </div>

      <p
        lang={lang}
        className="mt-8"
        style={{
          fontSize: 'var(--text-2xl)',
          lineHeight: s.lineHeight,
          letterSpacing: s.tracking,
          maxWidth: s.measure,
        }}
      >
        {s.sample}
      </p>

      <dl className="defs mt-8" style={{ borderTopColor: 'var(--color-rule-ink)' }}>
        {[
          ['line-height', s.lineHeight],
          ['letter-spacing', s.tracking],
          ['measure', s.measure],
        ].map(([k, v]) => (
          <div className="def" key={k} style={{ paddingBlock: 'var(--space-sm)' }}>
            <dt className="label">{k}</dt>
            <dd className="num" style={{ fontSize: 'var(--text-sm)' }}>{v}</dd>
          </div>
        ))}
      </dl>

      <p className="prose mt-5" style={{ fontSize: 'var(--text-sm)' }}>{s.note}</p>
    </div>
  );
}

/* ── 03 · Fluid Space ────────────────────────────────────────── */
export function FluidCanvasDemo() {
  const [w, setW] = useState(760);

  /* the same clamp the page uses, resolved against the demo width so the
     readout is the real interpolation, not a description of it */
  const fontPx = Math.min(68, Math.max(34, (w * 5.5) / 100));
  const cols = w < 640 ? 1 : w < 960 ? 2 : 3;

  return (
    <div>
      <div
        className="overflow-clip"
        style={{
          width: `${w}px`,
          maxWidth: '100%',
          border: 'var(--rule-hairline) solid var(--color-rule)',
          padding: 'var(--space-lg)',
          transition: 'none',
        }}
      >
        <p
          style={{
            fontSize: `${fontPx}px`,
            fontWeight: 'var(--display-weight)',
            lineHeight: 1.05,
            letterSpacing: 'var(--tracking-display)',
            overflowWrap: 'anywhere',
          }}
        >
          Fluid Space
        </p>
        <div
          className="mt-5 grid gap-0"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="label"
              style={{
                padding: 'var(--space-sm)',
                borderTop: 'var(--rule-hairline) solid var(--color-rule)',
                borderInlineStart: i === 0 ? undefined : 'var(--rule-hairline) solid var(--color-rule)',
              }}
            >
              cell {i + 1}
            </div>
          ))}
        </div>
      </div>

      <label className="mt-4 block">
        <span className="label">
          ลากเพื่อเปลี่ยนความกว้างของผืนผ้าใบ · <span className="num">{w}px</span>
        </span>
        <input
          type="range"
          min="320"
          max="1200"
          value={w}
          onChange={(e) => setW(Number(e.target.value))}
          className="mt-2 w-full"
          style={{ accentColor: 'var(--color-signal)', minHeight: 44 }}
        />
      </label>

      <dl className="defs mt-6" style={{ borderTopColor: 'var(--color-rule-ink)' }}>
        {[
          ['canvas width', `${w}px`],
          ['display size', `${fontPx.toFixed(1)}px`],
          ['columns', cols],
        ].map(([k, v]) => (
          <div className="def" key={k} style={{ paddingBlock: 'var(--space-sm)' }}>
            <dt className="label">{k}</dt>
            <dd className="num" style={{ fontSize: 'var(--text-sm)' }}>{v}</dd>
          </div>
        ))}
      </dl>

      <p className="prose mt-5" style={{ fontSize: 'var(--text-sm)' }}>
        ขนาดตัวอักษรไล่ค่าอย่างต่อเนื่องตามความกว้าง ไม่ได้กระโดดตาม breakpoint ส่วนจำนวนคอลัมน์เปลี่ยนตามพื้นที่ที่มีจริง
      </p>
    </div>
  );
}

/* ── 05 · Intentional Motion ─────────────────────────────────── */
export function MotionIntentDemo() {
  const [reduced, setReduced] = useState(false);

  return (
    <div>
      <div className="filters" role="group" aria-label="เลือกโหมดการเคลื่อนไหว">
        <button type="button" className="filter" aria-pressed={!reduced} onClick={() => setReduced(false)}>
          Motion on
        </button>
        <button type="button" className="filter" aria-pressed={reduced} onClick={() => setReduced(true)}>
          Reduced motion
        </button>
      </div>

      <div className="mt-8" style={{ borderTop: 'var(--rule-solid) solid var(--color-rule-ink)' }}>
        {['Selected work', 'Our standard', 'Taste and intent'].map((t) => (
          <div
            key={t}
            className="group flex items-center justify-between gap-6"
            style={{
              padding: 'var(--space-lg) 0',
              borderBottom: 'var(--rule-hairline) solid var(--color-rule)',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontSize: 'var(--text-xl)',
                display: 'inline-block',
                transition: reduced ? 'opacity 150ms var(--ease-out)' : 'transform 180ms var(--ease-out)',
              }}
              className={reduced ? 'group-hover:opacity-60' : 'group-hover:translate-x-2'}
            >
              {t}
            </span>
            <span
              className="mark-quarter"
              style={{
                transition: reduced ? 'opacity 150ms var(--ease-out)' : 'transform 180ms var(--ease-out)',
              }}
            />
          </div>
        ))}
      </div>

      <p className="prose mt-6" style={{ fontSize: 'var(--text-sm)' }}>
        {reduced
          ? 'เมื่อผู้ใช้ขอให้ลดการเคลื่อนไหว การเลื่อนตำแหน่งถูกยุบเหลือการเปลี่ยนความทึบ สถานะยังสื่อสารได้เหมือนเดิม ไม่ได้ตัดการตอบสนองทิ้ง'
          : 'ชี้ที่แถวเพื่อดูการเลื่อน 8px ตามแกนเดียว ระยะสั้นพอที่จะบอกว่าแถวนี้กดได้ โดยไม่ดึงความสนใจไปจากเนื้อหา'}
      </p>
    </div>
  );
}
