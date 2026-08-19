import { track } from '@vercel/analytics';

/**
 * นับจำนวนครั้งที่มีคนกดโทร — conversion เดียวของเว็บไซต์นี้
 * เรียกได้อย่างปลอดภัยเสมอ ถ้าแพ็กเกจ Vercel ไม่รองรับ custom event จะถูกเพิกเฉยไปเอง
 * @param {string} from ตำแหน่งของปุ่มที่กด เช่น 'navbar' หรือ 'mobile-bar'
 */
export function trackCall(from) {
  try {
    track('call_click', { from });
  } catch {
    // ไม่ให้การวัดผลไปขวางการโทร
  }
}
