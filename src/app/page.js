import Link from 'next/link';
import { Band, SectionHead, SteppedBars } from '@/components/ui/Section';
import ProjectCell from '@/components/ProjectCell';
import { BRAND, PROJECTS, PRINCIPLES, DISCIPLINES, CONTACT } from '@/lib/content';

export const metadata = { alternates: { canonical: '/' } };

const SELECTED = PROJECTS.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ── 01 · Hero ───────────────────────────────────────────── */}
      <Band tight>
        <div className="cols gap-y-12">
          <div className="col-span-12 lg:col-span-9">
            <h1 className="display" style={{ maxWidth: '12ch' }}>
              {BRAND.positioning.replace('.', '')}
              <span className="mark-square" aria-hidden="true" />
            </h1>
            <p className="lede mt-9" style={{ fontSize: 'var(--text-2xl)', maxWidth: '30rem' }}>
              {BRAND.belief}
            </p>
            <p className="prose mt-5" style={{ maxWidth: '32rem' }}>
              เรากำจัดความซับซ้อนและสิ่งที่ไม่จำเป็นออกไป
              โดยไม่ตัดอารมณ์ รายละเอียด และตัวตนของแบรนด์ทิ้งไปพร้อมกัน
            </p>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end">
            <p className="label label--ink">{BRAND.category}</p>
            <p className="label mt-2">{BRAND.descriptor}</p>
            <p className="label mt-6">Bangkok</p>
          </div>
        </div>
      </Band>

      {/* ── 02 · Brand essence ──────────────────────────────────── */}
      <Band rule="ink">
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="display-s">{BRAND.essence}</h2>
            <p className="prose mt-7">
              ประสบการณ์ดิจิทัลที่ดีเกิดจากรายละเอียดเล็ก ๆ ที่ผู้ใช้อาจไม่ได้สังเกตเห็นโดยตรง
              แต่รู้สึกได้ จังหวะของตัวอักษร ระยะห่างระหว่างองค์ประกอบ น้ำหนักของการตอบสนอง
              และเวลาที่ภาพปรากฏ
            </p>
            <p className="prose mt-5" style={{ color: 'var(--color-ink)' }}>
              รายละเอียดไม่ใช่การตกแต่ง รายละเอียดคือสิ่งที่ทำให้ประสบการณ์ดิจิทัลมีชีวิต
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <SteppedBars />
            <p className="label mt-5">{BRAND.proposition}</p>
            <p className="label mt-2">Strategy → Design → Motion → Code → Browser</p>
          </div>
        </div>
      </Band>

      {/* ── 03 · The plate — one loud move per page ─────────────── */}
      <section className="plate">
        <div className="shell band--tight relative">
          <div className="cols gap-y-10">
            <div className="col-span-12 lg:col-span-8">
              <p className="display" style={{ color: 'var(--color-on-signal)', lineHeight: 0.94 }}>
                {BRAND.philosophy[0]}
                <br />
                {BRAND.philosophy[1]}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end">
              <p style={{ color: 'var(--color-on-signal)', fontSize: 'var(--text-lg)', lineHeight: 1.65 }}>
                สิ่งที่ไม่มีเหตุผลไม่จำเป็นต้องอยู่ แต่สิ่งที่ควรอยู่ ต้องได้รับการใส่ใจอย่างเต็มที่
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 · Selected work ─────────────────────────────────── */}
      <Band rule="ink" tight>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead title="Selected work" />
          <Link href="/work" className="link">
            ดูทั้ง {PROJECTS.length} โครงการ →
          </Link>
        </div>

        <div className="work-grid mt-10">
          {SELECTED.map((p, i) => (
            <ProjectCell key={p.key} project={p} priority={i < 3} />
          ))}
        </div>
      </Band>

      {/* ── 05 · Core principles ───────────────────────────────── */}
      <Band rule="ink">
        <div className="grid gap-0 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.key}
              className="py-9 md:px-8"
              style={{
                borderTop: 'var(--rule-solid) solid var(--color-rule-ink)',
                borderInlineStart: i === 0 ? undefined : 'var(--rule-hairline) solid var(--color-rule)',
                paddingInlineStart: i === 0 ? 0 : undefined,
              }}
            >
              <h3 style={{ fontSize: 'var(--text-4xl)' }}>{p.title}</h3>
              <p className="label mt-3">{p.sub}</p>
              <p className="prose mt-6" style={{ fontSize: 'var(--text-sm)' }}>{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/approach" className="link">How we work →</Link>
        </div>
      </Band>

      {/* ── 06 · Our standard ──────────────────────────────────── */}
      <Band tone="paper-2" rule="hair">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            title="Our standard."
            lede="หกมาตรฐานงานคราฟต์ที่ใช้กับทุกโครงการ ไม่ใช่รายการฟีเจอร์ที่เลือกซื้อเพิ่ม"
          />
          <Link href="/standard" className="link">ดูทั้งหมดพร้อมของจริง →</Link>
        </div>

        <ol className="defs mt-12">
          {DISCIPLINES.map((d) => (
            <li key={d.key} className="def" style={{ gridTemplateColumns: 'minmax(0,1fr)' }}>
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <span className="label label--signal num">{d.n}</span>
                <h3 style={{ fontSize: 'var(--text-2xl)' }}>{d.title}</h3>
                <p className="label">{d.sub}</p>
              </div>
            </li>
          ))}
        </ol>
      </Band>

      {/* ── 07 · AI positioning ────────────────────────────────── */}
      <Band rule="ink">
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="display-s">
              {BRAND.aiLine[0]}
              <br />
              {BRAND.aiLine[1]}
            </h2>
            <p className="prose mt-8">
              เราไม่ต่อต้าน AI และใช้มันในส่วนที่ทำให้การทำงานเร็วขึ้น
              แต่การมีเครื่องมือที่สร้างของได้เร็วขึ้น ไม่ได้ทำให้คำถามสำคัญที่สุดหายไปว่า
              เราควรสร้างอะไร
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end">
            <p className="label">When everyone can build,</p>
            <p className="label label--ink mt-1">discernment becomes the advantage.</p>
            <Link href="/taste-and-intent" className="link mt-6">อ่านต่อ →</Link>
          </div>
        </div>
      </Band>

      {/* ── 08 · Proof mode ────────────────────────────────────── */}
      <Band tone="paper-2" rule="hair" tight>
        <div className="cols gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="display-s" style={{ maxWidth: '16ch' }}>
              Beauty on the surface. Engineering underneath.
            </h2>
            <p className="prose mt-7">
              เปิด <strong style={{ color: 'var(--color-ink)' }}>Proof Mode</strong> ที่มุมขวาล่างของหน้าจอ
              เพื่อดูชั้นเทคนิคที่ซ่อนอยู่ใต้หน้านี้ ทั้ง LCP, TTFB, จำนวน DOM node, ขนาดที่โหลดจริง
              ไปจนถึงโครงสร้างหัวข้อและ schema — อ่านจากเอกสารหน้านี้ในเครื่องคุณ ไม่ใช่ตัวเลขที่เราพิมพ์ไว้
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">
            <span className="mark-register" aria-hidden="true" />
            <p className="label mt-5">Performance · Semantics</p>
          </div>
        </div>
      </Band>

      {/* ── 09 · Close ─────────────────────────────────────────── */}
      <Band rule="ink">
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="display-s" style={{ maxWidth: '14ch' }}>
              Build what deserves to exist.
            </h2>
            <p className="prose mt-7">
              เล่าโจทย์มาได้เลย เราจะบอกตรง ๆ ว่าอะไรควรมี อะไรไม่ควรมี และควรเริ่มตรงไหน
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="btn btn--signal">โทร {CONTACT.phone}</a>
              <Link href="/contact" className="btn btn--ghost">ช่องทางอื่น</Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end">
            <p className="label label--ink">{BRAND.promise}</p>
            <p className="label mt-4">{CONTACT.hours}</p>
          </div>
        </div>
      </Band>
    </>
  );
}
