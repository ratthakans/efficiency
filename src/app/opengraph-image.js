import { ImageResponse } from 'next/og';

export const alt = 'EFFICIENCY — Web Development Studio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

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
          background: 'linear-gradient(135deg, #ffffff 0%, #eef4ff 55%, #e6f7f4 100%)',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 26, letterSpacing: 8, color: '#0b1526', fontWeight: 700 }}>
            EFFICIENCY
          </span>
          <span style={{ fontSize: 34, color: '#2563eb', fontWeight: 700, lineHeight: 0.7 }}>.</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 68, fontWeight: 700, color: '#0b1526', lineHeight: 1.15 }}>
            Web Development
          </div>
          <div style={{ fontSize: 68, fontWeight: 700, color: '#2563eb', lineHeight: 1.15 }}>
            Studio
          </div>
          <div style={{ fontSize: 30, color: '#46566c', marginTop: 24 }}>
            Company Profile · Lead Generation · Web System
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: '#2563eb',
              color: '#ffffff',
              borderRadius: 14,
              padding: '16px 26px',
              fontSize: 28,
            }}
          >
            <span style={{ fontSize: 20 }}>Packages from</span>
            <span style={{ fontWeight: 700 }}>THB 29,000</span>
          </div>
          <span style={{ fontSize: 24, color: '#7b8899' }}>efficiency.co.th</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
