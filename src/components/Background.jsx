/**
 * Background — พื้นหลังโทนสว่าง
 * ใช้ CSS ล้วน ไม่มี JS เพื่อไม่ให้กระทบประสิทธิภาพ
 */
export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* ฐานสีขาว */}
      <div className="absolute inset-0 bg-white" />

      {/* เส้นตารางจาง ๆ ไล่ระดับให้จางลงด้านล่าง */}
      <div
        className="absolute inset-0 grid-lines"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 62%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 62%)',
        }}
      />

      {/* แสงสีฟ้าอ่อนมุมบนซ้าย */}
      <div
        className="absolute rounded-full"
        style={{
          width: 900,
          height: 900,
          left: '-8%',
          top: '-24%',
          background: 'radial-gradient(circle at center, rgba(37,99,235,0.10) 0%, transparent 68%)',
          filter: 'blur(20px)',
        }}
      />

      {/* แสงสีเขียวมิ้นต์มุมขวา */}
      <div
        className="absolute rounded-full"
        style={{
          width: 760,
          height: 760,
          right: '-14%',
          top: '4%',
          background: 'radial-gradient(circle at center, rgba(13,148,136,0.09) 0%, transparent 68%)',
          filter: 'blur(20px)',
        }}
      />

      {/* ไล่สีขาวด้านล่างให้เนื้อหาอ่านง่าย */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </div>
  );
}
