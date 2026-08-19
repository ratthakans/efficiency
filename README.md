# EFFICIENCY — Web Development Studio

เว็บไซต์ของสตูดิโอออกแบบและพัฒนาเว็บไซต์ เนื้อหาเป็นภาษาไทย โทนสว่าง
นำเสนอแพ็กเกจ 4 ระดับ ตั้งแต่ Company Profile จนถึง Web System

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19
- **Styling:** Tailwind CSS v4 — design token ทั้งหมดอยู่ใน `src/app/globals.css`
- **Fonts:** IBM Plex Sans Thai + IBM Plex Mono ผ่าน `next/font/google`
- **Motion:** framer-motion (ใช้เฉพาะ entrance / modal)
- **Env vars:** `CONTACT_WEBHOOK_URL` (ไม่บังคับ — ดูหัวข้อฟอร์มติดต่อด้านล่าง)

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
| `src/app/api/contact/route.js` | รับข้อมูลจากฟอร์มติดต่อและส่งต่อไปยัง Webhook |
| `public/work/*.webp` | ภาพหน้าแรกของเว็บไซต์ผลงาน |

การแก้ราคา ขอบเขตงาน หรือระยะเวลา ให้แก้ที่ `src/lib/content.js`
แล้วทุกหน้าที่อ้างอิงข้อมูลนั้นจะอัปเดตตามทันที

## หน้าเว็บไซต์

`/` · `/services` · `/pricing` · `/process` · `/work` · `/stack` · `/about` · `/contact`

## ฟอร์มติดต่อ

ฟอร์มในหน้า `/contact` ส่งข้อมูลไปที่ `POST /api/contact` ซึ่งจะส่งต่อไปยัง Webhook
ที่ตั้งไว้ในตัวแปร `CONTACT_WEBHOOK_URL` (ใช้ได้กับ Make, Zapier, n8n,
Google Apps Script หรือ endpoint ของทีมเอง)

```bash
CONTACT_WEBHOOK_URL="https://hook.example.com/xxxx"
```

**ถ้ายังไม่ได้ตั้งค่า** ระบบจะไม่แสดงว่าส่งสำเร็จ แต่จะสลับไปโหมดสำรอง
คือแสดงปุ่ม LINE / อีเมล / โทร พร้อมข้อมูลที่กรอกไว้ เพื่อไม่ให้ Lead หายไปเงียบ ๆ

## หมายเหตุ

- ภาพผลงานใน `public/work/` จับจากหน้าแรกของเว็บไซต์จริงด้วย headless Chrome
  แล้วแปลงเป็น WebP หากเว็บไซต์ต้นทางเปลี่ยนดีไซน์ ควรจับใหม่
- ส่วน "ตัวอย่างขอบเขตงานตามแพ็กเกจ" ในหน้า `/work` เป็นการจำลองลักษณะงาน
  ไม่ใช่ข้อมูลลูกค้ารายใดรายหนึ่ง (มีหมายเหตุกำกับไว้ในหน้าเว็บแล้ว)
- ข้อมูลติดต่อทั้งหมด รวมถึงลิงก์ LINE อยู่ใน `CONTACT` ที่ `src/lib/content.js`
