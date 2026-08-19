# EFFICIENCY — Web Development Studio

เว็บไซต์ของสตูดิโอออกแบบและพัฒนาเว็บไซต์ เนื้อหาเป็นภาษาไทย โทนสว่าง
นำเสนอแพ็กเกจ 4 ระดับ ตั้งแต่ Company Profile จนถึง Web System

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19
- **Styling:** Tailwind CSS v4 — design token ทั้งหมดอยู่ใน `src/app/globals.css`
- **Fonts:** IBM Plex Sans Thai + IBM Plex Mono ผ่าน `next/font/google`
- **Motion:** framer-motion (ใช้เฉพาะ entrance / modal)
- **Env vars:** `NEXT_PUBLIC_GA_ID` (ไม่บังคับ — ดูหัวข้อการวัดผล)

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

## การติดต่อ

ช่องทางหลักคือ **โทรศัพท์** — ไม่มีฟอร์ม ไม่มี backend ไม่มี environment variable
หน้า `/contact` เป็นหน้าโทรเป็นหลัก แสดงเบอร์ขนาดใหญ่เป็นลิงก์ `tel:` พร้อมเวลาทำการ
และมีอีเมลเป็นช่องทางรอง

- ปุ่มหลักบน navbar เป็นเบอร์โทรตรง ๆ
- แถบค้างท้ายจอบนมือถือให้ปุ่มโทรกินพื้นที่ 2 ใน 3
- ปุ่มของแต่ละแพ็กเกจลิงก์ไป `/contact?pkg=<key>` เพื่อขึ้นป้ายบอกว่าสนใจแพ็กเกจไหน
  (อ่านค่าฝั่งเซิร์ฟเวอร์ใน `contact/page.js` จึงอยู่ใน HTML ตั้งแต่แรก)

แก้เบอร์ อีเมล เวลาทำการ และที่อยู่ได้ที่ `CONTACT` ใน `src/lib/content.js` ที่เดียว

## การวัดผล

เว็บไซต์ **ไม่มีสคริปต์วัดผลใดโหลดโดยค่าเริ่มต้น** ไม่มีค่าใช้จ่ายและไม่มีคุกกี้

ถ้าต้องการเก็บสถิติ ให้ตั้งค่า Google Analytics 4 (ใช้ฟรี) ใน Vercel:

```bash
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

เมื่อตั้งค่าแล้ว GA4 จะโหลดอัตโนมัติ และทุกปุ่มโทรจะส่ง event ชื่อ `call_click`
พร้อมพารามิเตอร์ `button_location` (`navbar` / `mobile-menu` / `mobile-bar` /
`contact-number` / `contact-button`) ทำให้ดูได้ว่าคนกดโทรจากตรงไหนมากที่สุด

ถ้าไม่ตั้งค่า `trackCall()` ใน `src/lib/track.js` จะไม่ทำอะไรเลย

**หมายเหตุ PDPA:** GA4 ใช้คุกกี้ ถ้าต้องการแบบไม่มีคุกกี้และไม่ต้องขึ้นแบนเนอร์
Cloudflare Web Analytics เป็นทางเลือกที่ใช้ฟรีเช่นกัน (ฝัง script tag เดียว)

## หมายเหตุ

- ภาพผลงานใน `public/work/` จับจากหน้าแรกของเว็บไซต์จริงด้วย headless Chrome
  แล้วแปลงเป็น WebP หากเว็บไซต์ต้นทางเปลี่ยนดีไซน์ ควรจับใหม่
- ส่วน "ตัวอย่างขอบเขตงานตามแพ็กเกจ" ในหน้า `/work` เป็นการจำลองลักษณะงาน
  ไม่ใช่ข้อมูลลูกค้ารายใดรายหนึ่ง (มีหมายเหตุกำกับไว้ในหน้าเว็บแล้ว)
- ข้อมูลติดต่อทั้งหมด รวมถึงลิงก์ LINE อยู่ใน `CONTACT` ที่ `src/lib/content.js`
