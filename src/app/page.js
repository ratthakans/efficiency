import Link from 'next/link';
import { Band, SectionHead } from '@/components/ui/Section';
import ProjectCell from '@/components/ProjectCell';
import HeroStack from '@/components/HeroStack';
import Steps from '@/components/Steps';
import FaqList from '@/components/FaqList';
import {
  BRAND,
  CONTACT,
  DISCIPLINES,
  FAQS,
  HERO_STACK,
  FINDABILITY,
  HOME_BENEFIT_ORDER,
  PROJECTS,
} from '@/lib/content';

export const metadata = { alternates: { canonical: '/' } };

/* The home page answers, in order, what a first-time client asks: what do you
   do, what have you made, what will my site get, how does it start. The brand
   lines stay as the voice; the philosophy lives on /approach and /studio. */
const STACK = HERO_STACK.map((k) => PROJECTS.find((p) => p.key === k));
const SELECTED = PROJECTS.filter((p) => !HERO_STACK.includes(p.key)).slice(0, 6);
const BENEFITS = HOME_BENEFIT_ORDER.map((k) => DISCIPLINES.find((d) => d.key === k));
const HOME_FAQS = FAQS.filter((f) => f.home);

export default function HomePage() {
  return (
    <>
      {/* ── 01 · What we do — the brand line, then the plain sentence ── */}
      <Band tight className="has-mesh has-mesh--bleed">
        <div className="mesh" aria-hidden="true" style={{ right: '-16%', top: '-6%' }} />
        <div className="cols gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            {/* One h1 carrying both: the brand line people remember and the
                Thai sentence search engines and first-time readers need. */}
            <h1>
              <span className="display hero-display block" style={{ maxWidth: '12ch' }}>
                {BRAND.positioning.replace('.', '')}
                <span className="mark-square mark-square--caret" aria-hidden="true" />
              </span>
              <span className="hero-what mt-8 block">
                <span className="block">{BRAND.whatWeDo[0]}</span>{' '}
                <span className="block">{BRAND.whatWeDo[1]}</span>
              </span>
            </h1>

            <ul className="findability mt-6" aria-label="สิ่งที่เว็บไซต์ของคุณถูกออกแบบให้ทำได้">
              {FINDABILITY.map((f) => (
                <li key={f.key}>
                  <span className="mono findability__key">{f.key}</span>
                  <span>{f.gloss}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="btn btn--call">
                โทร {CONTACT.phone}
              </a>
              <Link href="/work" className="btn btn--ghost">
                ดูผลงานทั้งหมด
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-center">
            <HeroStack projects={STACK} />
          </div>
        </div>
      </Band>

      {/* ── 02 · Selected work ─────────────────────────────────── */}
      <Band rule="ink" tight>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            title="Selected work"
            lede="ผลงานที่เปิดใช้งานจริง ออกแบบและพัฒนาเองทั้งหมด กดที่การ์ดเพื่อเปิดเว็บไซต์จริง"
          />
          <Link href="/work" className="link">
            ดูทั้ง {PROJECTS.length} โครงการ →
          </Link>
        </div>

        {/* on phones the grid becomes a swipe rail — six stacked cards were
            2,800px of scrolling before the reader met anything else */}
        <div className="work-grid work-grid--rail mt-10">
          {SELECTED.map((p) => (
            <ProjectCell key={p.key} project={p} />
          ))}
        </div>
        <p className="rail-hint annotation" aria-hidden="true">ปัดเพื่อดูผลงานถัดไป →</p>
      </Band>

      {/* ── 03 · What your site gets — the six standards as outcomes ── */}
      <Band rule="ink">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            title="สิ่งที่เว็บของคุณได้"
            lede="มาตรฐานหกข้อนี้อยู่ในทุกโครงการ ไม่ใช่ตัวเลือกที่ต้องซื้อเพิ่ม"
          />
          <Link href="/standard" className="link">
            ดูของจริงทีละข้อ →
          </Link>
        </div>

        <ul className="benefits mt-12">
          {BENEFITS.map((d) => (
            <li key={d.key} className="benefit">
              {d.tag && <p className="annotation annotation--ink">{d.tag}</p>}
              <h3 className="benefit__title">{d.benefit}</h3>
              <p className="prose mt-3" style={{ fontSize: 'var(--text-sm)' }}>
                {d.benefitLine}
              </p>
              <p className="label mt-4">{d.title}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* ── 04 · The plate — one loud move per page ─────────────── */}
      <section className="plate">
        <div className="shell band--tight relative">
          <div className="cols gap-y-10">
            <div className="col-span-12 lg:col-span-8">
              <p className="display" style={{ lineHeight: 0.94 }}>
                {BRAND.philosophy[0]}
                <br />
                {BRAND.philosophy[1]}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end">
              <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.65 }}>
                สิ่งที่ไม่มีเหตุผลไม่จำเป็นต้องอยู่ แต่สิ่งที่ควรอยู่ ต้องได้รับการใส่ใจอย่างเต็มที่
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 · How it starts ─────────────────────────────────── */}
      <Band rule="ink">
        <p className="label">{BRAND.proposition}</p>
        <div className="mt-3">
          <SectionHead title="เริ่มงานกับเรา" lede="สี่ขั้น ตั้งแต่สายแรกจนเว็บไซต์เปิดใช้งาน" />
        </div>

        <Steps className="mt-12" />
      </Band>

      {/* ── 06 · Questions, then the call ──────────────────────── */}
      <Band rule="ink" className="has-mesh">
        <div className="mesh" aria-hidden="true" style={{ right: '-30%', bottom: '-75%' }} />
        <div className="cols gap-y-14">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="display-s">คำถามที่พบบ่อย</h2>
            <FaqList items={HOME_FAQS} openFirst className="mt-10" />
            <Link href="/approach#faq" className="link mt-8">
              ดูคำถามทั้งหมด →
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <h2 className="display-s" style={{ maxWidth: '14ch' }}>
              Build what deserves to exist.
            </h2>
            <p className="prose mt-6" style={{ color: 'var(--color-ink)' }}>
              เล่าโจทย์มาได้เลย เราจะบอกตรง ๆ ว่าอะไรควรมี อะไรไม่ควรมี และควรเริ่มตรงไหน
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="btn btn--call">
                โทร {CONTACT.phone}
              </a>
            </div>
            <p className="label mt-5">{CONTACT.hours}</p>
          </div>
        </div>
      </Band>
    </>
  );
}
