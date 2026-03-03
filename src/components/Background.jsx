/**
 * Background — pure-CSS animated orbs + dot grid.
 * No Framer Motion — CSS animations run on the compositor thread,
 * consuming far less CPU and never blocking the JS thread.
 */
export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Pure black base */}
      <div className="absolute inset-0 bg-black" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Gradient orbs — positions & sizes tuned to not dominate the page */}
      <div
        className="absolute rounded-full"
        style={{
          width:  720, height: 720,
          left: '15%',  top: '12%',
          background: 'radial-gradient(circle at center, rgba(97,175,239,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb1 28s ease-in-out infinite',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width:  620, height: 620,
          left: '72%', top: '62%',
          background: 'radial-gradient(circle at center, rgba(152,195,121,0.055) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb2 34s ease-in-out infinite',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width:  520, height: 520,
          left: '82%', top: '16%',
          background: 'radial-gradient(circle at center, rgba(224,108,117,0.045) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb3 40s ease-in-out infinite',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width:  480, height: 480,
          left: '30%', top: '76%',
          background: 'radial-gradient(circle at center, rgba(229,192,123,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb4 32s ease-in-out infinite',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width:  560, height: 560,
          left: '52%', top: '50%',
          background: 'radial-gradient(circle at center, rgba(86,182,194,0.045) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb5 38s ease-in-out infinite',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />

      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    </div>
  );
}
