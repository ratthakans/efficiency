# EFFICIENCY — Web Development Studio

เว็บไซต์ของสตูดิโอออกแบบและพัฒนาเว็บไซต์ เนื้อหาเป็นภาษาไทย โทนสว่าง
นำเสนอแพ็กเกจ 4 ระดับ ตั้งแต่ Company Profile จนถึง Web System

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19
- **Styling:** Tailwind CSS v4 — design token ทั้งหมดอยู่ใน `src/app/globals.css`
- **Fonts:** IBM Plex Sans Thai + IBM Plex Mono ผ่าน `next/font/google`
- **Motion:** framer-motion (ใช้เฉพาะ entrance / modal)
- **Env vars:** ไม่มี

## เริ่มพัฒนา

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

## โครงสร้างที่ควรรู้

| ไฟล์ | หน้าที่ |
| --- | --- |
| `src/lib/content.js` | เนื้อหาแพ็กเกจ ราคา ขอบเขต ขั้นตอน และ FAQ ทั้งหมด — แก้ที่นี่ที่เดียว |
| `src/lib/accents.js` | ชุดสี accent ของการ์ดและแพ็กเกจ |
| `src/app/globals.css` | Design token + component class (`.btn`, `.card`, `.pill`, `.cmp-table` …) |
| `src/components/ui/Section.jsx` | ส่วนประกอบ layout ของทุกหน้า (`Section`, `SectionHead`, `FadeIn`, `PageHero`) |
| `src/components/PackageCard.jsx` | การ์ดแพ็กเกจแบบย่อ ใช้ทั้งหน้าแรกและหน้าแพ็กเกจ |
| `src/components/MobileActionBar.jsx` | แถบ LINE / โทร / ขอใบเสนอราคา ค้างท้ายจอบนมือถือ |
| `public/work/*.webp` | ภาพหน้าแรกของเว็บไซต์ผลงาน |

การแก้ราคา ขอบเขตงาน หรือระยะเวลา ให้แก้ที่ `src/lib/content.js`
แล้วทุกหน้าที่อ้างอิงข้อมูลนั้นจะอัปเดตตามทันที

## หน้าเว็บไซต์

`/` · `/services` · `/pricing` · `/process` · `/work` · `/stack` · `/about` · `/contact`

## ฟอร์มติดต่อ

ฟอร์มในหน้า `/contact` **ไม่มี backend และไม่ต้องตั้งค่าอะไรเลย** เมื่อกดปุ่มจะประกอบ
ข้อความจากช่องที่กรอกแล้วเปิดโปรแกรมอีเมลของผู้ใช้ผ่าน `mailto:` — ข้อมูลส่งตรงถึง
`CONTACT.email` โดยไม่ผ่านเซิร์ฟเวอร์ของเรา

หน้าจอหลังกดส่งมีปุ่มสำรองไว้ให้ด้วย เผื่อเครื่องที่ไม่ได้ตั้งค่าโปรแกรมอีเมลไว้:

- **คัดลอกรายละเอียด** — คัดลอกข้อความทั้งหมดไปวางส่งช่องทางไหนก็ได้
- **โทร** — เปิดแอปโทรศัพท์ด้วยเบอร์ใน `CONTACT.phoneHref`
- **เปิดอีเมลอีกครั้ง** — ยิง `mailto:` ซ้ำ

ถ้าวันหนึ่งอยากเก็บ Lead อัตโนมัติ ให้เพิ่ม API route แล้วเปลี่ยน `handleSubmit`
ใน `src/app/contact/ContactClient.jsx` — ตัวประกอบข้อความ (`buildSubject` / `buildBody`)
ใช้ซ้ำได้ทันที

## หมายเหตุ

- ภาพผลงานใน `public/work/` จับจากหน้าแรกของเว็บไซต์จริงด้วย headless Chrome
  แล้วแปลงเป็น WebP หากเว็บไซต์ต้นทางเปลี่ยนดีไซน์ ควรจับใหม่
- ส่วน "ตัวอย่างขอบเขตงานตามแพ็กเกจ" ในหน้า `/work` เป็นการจำลองลักษณะงาน
  ไม่ใช่ข้อมูลลูกค้ารายใดรายหนึ่ง (มีหมายเหตุกำกับไว้ในหน้าเว็บแล้ว)
- ข้อมูลติดต่อทั้งหมด รวมถึงลิงก์ LINE อยู่ใน `CONTACT` ที่ `src/lib/content.js`
