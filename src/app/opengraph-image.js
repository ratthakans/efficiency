import { ImageResponse } from 'next/og';

export const alt = 'EFFICIENCY — Web Development Studio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/* The plate, rendered as the share card: ultramarine ground, the rails
   carried across it, one claim. No photography, no gradient. */
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
          background: '#1a3fd0',
          color: '#ffffff',
          padding: '72px',
          fontFamily: 'sans-serif',
          backgroundImage:
            'repeating-linear-gradient(to right, rgba(255,255,255,0.18) 0 1px, transparent 1px 100px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24, letterSpacing: 9, fontWeight: 700 }}>EFFICIENCY</span>
          <span style={{ width: 13, height: 13, background: '#ffffff' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 108, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>
            SEO · AEO · GEO
          </div>
          <div style={{ fontSize: 30, marginTop: 26, opacity: 0.86, maxWidth: 900 }}>
            Web development studio. Sites that people, search engines and AI assistants read the same way.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 22, fontSize: 22, opacity: 0.8 }}>
          <span>efficiency.co.th</span>
          <span>·</span>
          <span>063 859 8423</span>
          <span>·</span>
          <span>11 projects live</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
