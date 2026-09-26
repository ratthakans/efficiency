import Link from 'next/link';
import { Band, SectionHead } from '@/components/ui/Section';
import { BRAND, GENERATED_VS_CRAFTED, PRINCIPLES, CONTACT } from '@/lib/content';

export const metadata = {
  title: 'จุดยืนเรื่อง AI · Taste and Intent',
  description:
    'Code can be generated. Judgment cannot be automated. จุดยืนของ EFFICIENCY ต่อยุค AI — เมื่อการผลิตถูกลง สิ่งที่มีค่าขึ้นคือการตัดสินใจว่าอะไรคือสิ่งที่ควรสร้าง',
  alternates: { canonical: '/taste-and-intent' },
};

export default function TasteAndIntentPage() {
  return (
    <>
      <Band tight className="has-mesh has-mesh--bleed page-top">
        <div className="mesh mesh--page" aria-hidden="true" style={{ right: '-18%', top: '-58%' }} />
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-9">
            <h1 className="display" style={{ maxWidth: '13ch' }}>
              {BRAND.aiLine[0]}
              <br />
              {BRAND.aiLine[1]}
            </h1>
          </div>
        </div>
      </Band>

      <Band rule="ink">
        <div className="cols gap-y-10">
          <div className="col-span-12 lg:col-span-6">
            <h2 style={{ fontSize: 'var(--text-3xl)' }}>
              When everyone can build, discernment becomes the advantage.
            </h2>
            <p className="prose mt-7">
              AI ทำให้โค้ด งานออกแบบ และเนื้อหา มีมากขึ้นพร้อมกันทั้งหมด
              ความได้เปรียบจึงไม่ได้อยู่ที่ใครผลิตได้มากกว่า แต่อยู่ที่ใครเลือกได้ดีกว่า
            </p>
            <p className="prose mt-5" style={{ color: 'var(--color-ink)' }}>
              เราไม่ขายจำนวนตัวเลือก เราขายความสามารถในการตัดสินใจว่าอะไรคือสิ่งที่ควรสร้าง
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="label">Positioning</p>
            <p className="mt-3" style={{ fontSize: 'var(--text-2xl)' }}>
              ไม่ใช่ Human vs AI
              <br />
              แต่เป็น <span style={{ color: 'var(--color-signal)' }}>Generation vs Direction</span>
            </p>
            <p className="label mt-6">Direct · Refine · Decide</p>
          </div>
        </div>
      </Band>

      {/* Generated vs Crafted — a ruled matrix, the Grid theme's table voice */}
      <Band rule="ink">
        <SectionHead title="Generated vs Crafted" />
        <div className="mt-12 overflow-x-auto">
          <table style={{ width: '100%', minWidth: 640, borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {GENERATED_VS_CRAFTED.head.map((h, i) => (
                  <th
                    key={h}
                    scope="col"
                    className="label label--ink"
                    style={{
                      textAlign: 'start',
                      padding: '0 var(--space-lg) var(--space-sm) 0',
                      borderBottom: 'var(--rule-solid) solid var(--color-rule-ink)',
                      color: i === 2 ? 'var(--color-signal)' : undefined,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GENERATED_VS_CRAFTED.rows.map(([dim, gen, craft]) => (
                <tr key={dim}>
                  <th
                    scope="row"
                    className="label"
                    style={{
                      textAlign: 'start',
                      padding: 'var(--space-md) var(--space-lg) var(--space-md) 0',
                      borderBottom: 'var(--rule-hairline) solid var(--color-rule)',
                      fontWeight: 600,
                    }}
                  >
                    {dim}
                  </th>
                  <td
                    style={{
                      padding: 'var(--space-md) var(--space-lg) var(--space-md) 0',
                      borderBottom: 'var(--rule-hairline) solid var(--color-rule)',
                      color: 'var(--color-muted)',
                      fontSize: 'var(--text-lg)',
                    }}
                  >
                    {gen}
                  </td>
                  <td
                    style={{
                      padding: 'var(--space-md) var(--space-lg) var(--space-md) 0',
                      borderBottom: 'var(--rule-hairline) solid var(--color-rule)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 600,
                    }}
                  >
                    {craft}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Band>

      <Band rule="ink">
        <SectionHead
          title="สามคุณค่าที่ AI ทำให้มีค่ามากขึ้น ไม่ใช่น้อยลง"
        />
        <div className="ruled-grid mt-12">
          {PRINCIPLES.map((p) => (
            <div key={p.key} className="ruled-cell">
              <h3 style={{ fontSize: 'var(--text-3xl)' }}>{p.title}</h3>
              <p className="label mt-3">{p.sub}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band rule="ink" tight>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead title="What should we build?" lede="คำถามนี้ยังเป็นของมนุษย์ และเป็นงานที่เราทำ" />
          <div className="flex flex-wrap gap-3">
            <a href={CONTACT.phoneHref} className="btn btn--call">โทร {CONTACT.phone}</a>
            <Link href="/approach" className="btn btn--ghost">วิธีทำงาน</Link>
          </div>
        </div>
      </Band>
    </>
  );
}
