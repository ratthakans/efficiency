import { ImageResponse } from 'next/og';
import { PROJECTS } from '@/lib/content';

export const alt = 'EFFICIENCY — Poetic Engineering · Web design & development studio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/* The share card follows the site as it is now: white paper, ink type, one
   hairline, no colour field and no rails. English only on purpose — the
   ImageResponse default font has no Thai glyphs, so a Thai line here would
   render as boxes until a Thai font file is bundled with the route. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          color: '#111111',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24, letterSpacing: 9, fontWeight: 700 }}>EFFICIENCY</span>
          <span style={{ width: 11, height: 11, background: '#111111' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* 104px keeps the period square inside the 72px margin; the default
              ImageResponse face has a single weight, so no fontWeight here */}
          <div style={{ display: 'flex', alignItems: 'baseline', fontSize: 104, lineHeight: 0.98, letterSpacing: -2 }}>
            Poetic Engineering
            <span style={{ width: 30, height: 30, background: '#111111', marginLeft: 12 }} />
          </div>
          <div style={{ fontSize: 32, marginTop: 30, color: '#333333' }}>
            Web design &amp; development studio, Bangkok.
          </div>
          <div style={{ fontSize: 26, marginTop: 14, color: '#555555', letterSpacing: 2 }}>SEO · AEO · GEO</div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            fontSize: 22,
            color: '#555555',
            borderTop: '1px solid #111111',
            paddingTop: 22,
          }}
        >
          <span>efficiency.co.th</span>
          <span>·</span>
          <span>063 859 8423</span>
          <span>·</span>
          <span>{PROJECTS.length} projects live</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
