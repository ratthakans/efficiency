/**
 * นับจำนวนครั้งที่มีคนกดโทร — conversion เดียวของเว็บไซต์นี้
 *
 * ส่งเข้า Google Analytics 4 ซึ่งใช้งานได้ฟรี และจะทำงานก็ต่อเมื่อ
 * ตั้งค่า NEXT_PUBLIC_GA_ID ไว้เท่านั้น ถ้าไม่ได้ตั้ง ฟังก์ชันนี้จะไม่ทำอะไรเลย
 *
 * @param {string} from ตำแหน่งของปุ่มที่กด เช่น 'navbar' หรือ 'mobile-bar'
 */
export function trackCall(from) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'call_click', { button_location: from });
    }
  } catch {
    // ไม่ให้การวัดผลไปขวางการโทร
  }
}
