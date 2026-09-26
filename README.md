# EFFICIENCY — Digital Craft Studio

เว็บไซต์ของสตูดิโอ ตามบลูพรินต์แบรนด์ **Poetic Engineering**
ภาษาแบรนด์เป็นอังกฤษ เนื้อความอธิบายเป็นไทย นำเสนอด้วยผลงานเป็นหลัก

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19
- **Styling:** Tailwind CSS v4 — token ทั้งหมดอยู่ใน `tokens.css` ที่ root
- **Font:** IBM Plex Sans Thai ตัวเดียวทั้งเว็บ ผ่าน `next/font/google`
- **Motion:** ไม่มีไลบรารี — เหลือเฉพาะ hover micro-state ใน CSS
- **Env vars:** `NEXT_PUBLIC_GA_ID` (ไม่บังคับ)

## ระบบดีไซน์

ออกแบบด้วย [hallmark](https://github.com/nutlope/hallmark) บันทึกการตัดสินใจไว้ใน `.hallmark/`

| | |
| --- | --- |
| Macrostructure | Portfolio Grid — งานเป็นตัวขาย |
| Theme | Grid (Swiss neo-grotesque) · light · grotesk-heavy · ultramarine |
| Nav / Footer | N7 Brutal slab / Ft4 Dense colophon |
| หลักที่ห้ามละเมิด | ไม่มีการ์ด ไม่มีเงา ไม่มีมุมโค้ง · ไม่มี scroll reveal · กริด 12 คอลัมน์ต้องมองเห็น |

**ข้อเบี่ยงเบนจากสเปกธีม** — Grid กำหนด Archivo 800 แต่ Archivo ไม่มีอักขระไทย
จึงใช้ IBM Plex Sans Thai 700 แทน และผ่อน letter-spacing จาก -0.045em เป็น -0.01em
เพราะค่าติดลบมากชนกับสระบนล่างของไทย

## เริ่มพัฒนา

```bash
npm install
npm run dev
```

## โครงสร้างที่ควรรู้

| ไฟล์ | หน้าที่ |
| --- | --- |
| `tokens.css` | token ทุกตัว (สี ฟอนต์ ระยะ เส้น motion) — แก้ที่นี่ที่เดียว |
| `src/lib/content.js` | เนื้อหาทั้งหมด ผลงาน บริการ FAQ ข้อมูลติดต่อ |
| `src/app/globals.css` | คลาสของธีม (`.band` `.cols` `.work-cell` `.plate` marks kit) |
| `src/components/ui/Section.jsx` | Band, SectionHead, Numeral, SteppedBars |
| `src/components/ProjectCell.jsx` | เซลล์ผลงานหนึ่งช่อง |
| `public/work/*.webp` | ภาพหน้าแรกของเว็บไซต์ผลงาน |

## หน้าเว็บไซต์

`/` · `/work` · `/standard` · `/approach` · `/taste-and-intent` · `/studio` · `/contact` · `/privacy` · `/terms`

## Adaptive Light และ Proof Mode

- **Adaptive Light** — โหมดมืดถูกออกแบบแยก ไม่ใช่การกลับสี token ชุดมืดอยู่ใน `tokens.css`
  ใต้ `[data-theme='dark']` สีแบรนด์ถูกเลือกใหม่ให้คอนทราสต์ผ่านเกณฑ์บนพื้นเข้ม
  และภาพถูกปรับ luminance ผ่าน `--image-grade`
- **Proof Mode** — ปุ่มมุมขวาล่างทุกหน้า เปิดแผงที่อ่านค่าจริงจากเอกสารในเครื่องผู้ใช้
  (Performance API, DOM, matchMedia) มีสองแท็บคือ Metrics และ Semantics
  ค่าที่เบราว์เซอร์ไม่ให้จะแสดงเป็น `—` ไม่เดาแทน
- **Interactive demo** ในหน้า `/standard` — Adaptive Light, Editorial Type,
  Fluid Space และ Intentional Motion ทุกตัวปรับของจริง ไม่ใช่ภาพประกอบ

## หมายเหตุ

- **ไม่มีราคาและไม่มีแพ็กเกจบนเว็บไซต์** ทุกโครงการประเมินตามขอบเขตจริง
- **หน้าผลงานไม่แสดง URL** เพราะบางโครงการยังอยู่บนโดเมนชั่วคราว — แสดงชื่อ
  และทั้งเซลล์เป็นลิงก์
- ภาพผลงานจับด้วย headless Chrome แล้วแปลงเป็น WebP ด้วย `sharp`
  ถ้าเว็บต้นทางเปลี่ยนดีไซน์ ควรจับใหม่
- ไม่มีแบบฟอร์มติดต่อ ช่องทางหลักคือโทรศัพท์
