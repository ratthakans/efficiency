/**
 * content.js — the brand blueprint as data.
 *
 * Brand language is English and set verbatim from the blueprint; Thai carries the
 * explanation underneath it. No prices, no packages — scope is quoted per project.
 */

/* ── 24 · Brand architecture summary ────────────────────────── */
export const BRAND = {
  name: 'EFFICIENCY',
  category: 'Digital Craft Studio',
  descriptor: 'Web Design & Development Studio',
  positioning: 'Poetic Engineering.',
  belief: 'We remove friction without removing feeling.',
  essence: 'Life, in detail.',
  proposition: 'From intention to interaction.',
  philosophy: ['Nothing unnecessary.', 'Nothing overlooked.'],
  enemy: 'Unnecessary Friction',
  promise: 'Every decision earns its place.',
  aiLine: ['Code can be generated.', 'Judgment cannot be automated.'],
  tone: 'Quiet confidence.',
  /* The sentence the brand lines were missing: what the studio sells, in the
     reader's language. Sits under the display line and inside the h1.
     Two phrases, because Thai line-breaking picks its own point otherwise and
     split "คน Google" across lines. */
  whatWeDo: ['ออกแบบและพัฒนาเว็บไซต์', 'ที่ทั้งคน Google และ AI อ่านเข้าใจ'],
};

/* What SEO / AEO / GEO mean to someone who has never heard the acronyms.
   Each gloss names the outcome the discipline aims at — none is a promise of
   rank; the FAQ says so plainly. */
export const FINDABILITY = [
  { key: 'SEO', gloss: 'ค้นเจอบน Google' },
  { key: 'AEO', gloss: 'ถูกหยิบไปเป็นคำตอบ' },
  { key: 'GEO', gloss: 'ถูกอ้างอิงในคำตอบของ AI' },
];

/* ── ข้อมูลติดต่อ ───────────────────────────────────────────── */
export const CONTACT = {
  companyTh: 'บริษัท เอฟฟิเชียนซี่ จำกัด',
  companyEn: 'EFFICIENCY Co., Ltd.',
  registrationNo: '0105568220629',
  email: 'hello@efficiency.co.th',
  phone: '063 859 8423',
  phoneHref: 'tel:+66638598423',
  replyTime: 'รับสายในเวลาทำการ',
  address: ['246/8 ซอยโยธินพัฒนา แขวงคลองจั่น', 'เขตบางกะปิ กรุงเทพมหานคร 10240'],
  mapsUrl: 'https://maps.app.goo.gl/SFcj3BFkfncTS9jz5',
  hours: 'จันทร์ – ศุกร์ 09:00 – 18:00 น.',
};

/* ── 8 · Core principles ────────────────────────────────────── */
export const PRINCIPLES = [
  {
    key: 'taste',
    title: 'Taste.',
    sub: 'Knowing what belongs.',
    body:
      'รสนิยมไม่ใช่การรู้ว่าอะไรสวย แต่คือการรู้ว่าอะไรควรอยู่ อะไรไม่ควรอยู่ และควรหยุดตรงไหน ในโลกที่เครื่องมือสร้างตัวเลือกได้ไม่จำกัด ความสามารถในการเลือกสิ่งที่ถูกต้องจึงมีค่ามากขึ้น',
  },
  {
    key: 'intent',
    title: 'Intent.',
    sub: 'Knowing why it exists.',
    body:
      'ทุกองค์ประกอบต้องตอบได้ว่ามันอยู่ตรงนี้ทำไม ถ้า animation ไม่มีหน้าที่ ก็ไม่จำเป็นต้องเคลื่อนไหว ถ้า interaction ไม่ช่วยให้เข้าใจ ก็ไม่จำเป็นต้องมี',
  },
  {
    key: 'fidelity',
    title: 'Fidelity.',
    sub: 'Making sure nothing gets lost.',
    body:
      'ระหว่างกลยุทธ์กับหน้าจอมีหลายจุดที่รายละเอียดหายไปได้ หน้าที่ของเราคือพาความตั้งใจ สัดส่วน จังหวะ และน้ำหนักของแบรนด์ เดินทางไปถึงผู้ใช้โดยสูญเสียน้อยที่สุด',
  },
];

/* ── 9 · The six disciplines — our standard of craft ────────── */
export const DISCIPLINES = [
  {
    n: '01',
    key: 'light',
    benefit: 'สวยทั้งโหมดสว่างและโหมดมืด',
    benefitLine: 'โหมดมืดออกแบบแยก ไม่ใช่แค่กลับสี ภาพและสีแบรนด์ถูกปรับให้เหมาะกับแต่ละโหมด',
    title: 'Adaptive Light',
    sub: 'Designed for darkness, not inverted for it.',
    body:
      'Dark mode ที่ดีไม่ใช่การสลับพื้นหลังจากขาวเป็นดำ แต่คือการออกแบบใหม่ให้เหมาะกับบริบทของแสง เราปรับความสว่างของภาพ คอนทราสต์ ตัวอักษร และสีแบรนด์ ให้แต่ละโหมดรักษาบุคลิกเดิมไว้ได้',
    craft: [
      'สีแบรนด์ถูกเลือกใหม่ต่อโหมด ไม่ใช่ค่าเดิมที่หรี่ลง',
      'ภาพถูกปรับ luminance เพราะภาพหน้าจอถูกถ่ายมาบนพื้นขาว',
      'คอนทราสต์ตัวอักษรผ่านเกณฑ์ทั้งสองโหมด',
      'เส้นคั่นเปลี่ยนน้ำหนักตามพื้น ไม่ใช่ความทึบเดียวกัน',
    ],
    demo: 'adaptive-light',
    token: '[data-theme] · --color-signal · --image-grade',
  },
  {
    n: '02',
    key: 'type',
    benefit: 'ภาษาไทยอ่านสบาย',
    benefitLine: 'ระยะบรรทัดและระยะตัวอักษรตั้งแยกสำหรับไทยและอังกฤษ สระไม่ชนกัน บรรทัดไม่ยาวจนตาล้า',
    title: 'Editorial Type',
    sub: 'Every language deserves its own rhythm.',
    body:
      'ภาษาไม่ใช่ข้อความที่แทนกันได้ตรง ๆ ไทยและอังกฤษมีความหนาแน่นและจังหวะต่างกัน ระบบตัวอักษรจึงต้องคิดแยกภาษา ทั้งสเกล ระยะบรรทัด ความยาวบรรทัด และการตัดคำ',
    craft: [
      'ระยะบรรทัดของไทยสูงกว่าอังกฤษ เพราะมีสระบนและล่าง',
      'letter-spacing ติดลบใช้ได้กับอังกฤษ แต่ทำลายสระของไทย',
      'ความยาวบรรทัดคุมเป็นจำนวนตัวอักษร ไม่ใช่ความกว้างคงที่',
      'หัวข้อใหญ่ตัดคำภายในคำได้ เพื่อไม่ให้ล้นจอเล็ก',
    ],
    demo: 'type-rhythm',
    token: '--tracking-display · line-height · ch measure',
  },
  {
    n: '03',
    key: 'space',
    benefit: 'ใช้ได้ดีทุกขนาดจอ',
    benefitLine: 'ตัวอักษรและระยะไล่ขนาดต่อเนื่องตั้งแต่มือถือถึงจอกว้าง ปุ่มกดง่ายบนจอสัมผัส',
    title: 'Fluid Space',
    sub: 'No device should feel like an afterthought.',
    body:
      'Responsive ไม่ได้แปลว่าเดสก์ท็อป แท็บเล็ต มือถือ แต่คือผืนผ้าใบที่เปลี่ยนขนาดตลอดเวลา เราใช้ระบบที่ไล่ค่าอย่างต่อเนื่อง ตั้งแต่มือถือจนถึงจอกว้างพิเศษ',
    craft: [
      'ตัวอักษรและระยะไล่ค่าด้วย clamp ไม่กระโดดตาม breakpoint',
      'กริดคอลัมน์ลดจำนวนตามพื้นที่จริง ไม่ใช่ตามชื่ออุปกรณ์',
      'สัดส่วนภาพคงที่ ไม่ว่าคอลัมน์จะกว้างเท่าไร',
      'ทุกพื้นที่กดได้ไม่ต่ำกว่า 44px บนจอสัมผัส',
    ],
    demo: 'fluid-canvas',
    token: 'clamp() · minmax(0, 1fr) · no breakpoint jumps',
  },
  {
    n: '04',
    key: 'speed',
    benefit: 'เปิดเร็ว แม้เน็ตช้า',
    benefitLine: 'ภาพถูกย่อตามขนาดที่ใช้จริง เนื้อหาสำคัญมาพร้อมหน้าแรกโดยไม่รอสคริปต์',
    title: 'Invisible Speed',
    sub: 'The best performance is the one you never notice.',
    body:
      'ประสิทธิภาพที่ดีที่สุดคือสิ่งที่ผู้ใช้ไม่ต้องนึกถึงมันเลย เราวางโครงสร้างไฟล์และสถาปัตยกรรมโดยคิดถึงรูปแบบภาพสมัยใหม่ การโหลดตามการมองเห็น การแบ่งโค้ด และสภาพเครือข่ายจริง',
    craft: [
      'ภาพเสิร์ฟเป็น WebP พร้อมขนาดตามคอลัมน์ที่ใช้จริง',
      'เนื้อหาสำคัญอยู่ใน HTML ตั้งแต่โหลดแรก ไม่รอ JavaScript',
      'ไม่มีไลบรารี animation ในหน้า จึงไม่มีน้ำหนักที่ไม่ได้ใช้',
      'ตัวเลขจริงดูได้เองจาก Proof Mode ไม่ต้องเชื่อคำโฆษณา',
    ],
    demo: 'proof',
    token: 'PerformanceObserver · navigation timing',
  },
  {
    n: '05',
    key: 'motion',
    benefit: 'ขยับเท่าที่ช่วยให้เข้าใจ',
    benefitLine: 'การเคลื่อนไหวมีไว้บอกสถานะและนำสายตา และลดลงเองสำหรับผู้ใช้ที่ตั้งค่าไว้',
    title: 'Intentional Motion',
    sub: 'Nothing moves without a reason.',
    body:
      'Motion ไม่ได้มีไว้ทำให้เว็บดูแพง แต่มีไว้นำสายตา บอกลำดับ สื่อสถานะ และคุมจังหวะ ทุก interaction ต้องมีเหตุผล และทุกระบบต้องรองรับผู้ใช้ที่ขอให้ลดการเคลื่อนไหว',
    craft: [
      'เคลื่อนไหวเฉพาะ transform และ opacity ไม่แตะ layout',
      'ไม่มี scroll reveal เพราะเนื้อหาไม่ควรต้องรอให้เลื่อนถึง',
      'ใช้ easing ที่ตั้งชื่อไว้ ไม่ใช้ค่าเริ่มต้นของเบราว์เซอร์',
      'prefers-reduced-motion ยุบการเคลื่อนที่เหลือการเปลี่ยนความทึบ',
    ],
    demo: 'motion-intent',
    token: 'transform · opacity · prefers-reduced-motion',
  },
  {
    n: '06',
    key: 'semantic',
    benefit: 'Google และ AI อ่านเว็บคุณเข้าใจ',
    benefitLine: 'โครงสร้างหน้าและข้อมูลองค์กรถูกเขียนให้เครื่องอ่านได้ตั้งแต่แรก เพื่อให้ถูกค้นเจอ ถูกหยิบไปตอบ และถูกอ้างอิง',
    title: 'Machine-Readable Meaning',
    sub: 'Built to be understood by people, search engines and AI.',
    body:
      'เว็บไซต์ยุคนี้ไม่ได้ถูกอ่านโดยมนุษย์อย่างเดียว แต่ถูกอ่านโดยเครื่องมือค้นหา ระบบตอบคำถาม และผู้ช่วย AI เราจึงออกแบบความหมายของหน้าไว้ในโครงสร้าง ไม่ใช่แค่ในภาพ',
    craft: [
      'HTML เชิงความหมาย ลำดับหัวข้อสะท้อนโครงเนื้อหาจริง',
      'JSON-LD อธิบายองค์กร ผลงาน และคำถามที่พบบ่อย',
      'ความสัมพันธ์ระหว่างสิ่งต่าง ๆ ผูกด้วย id ไม่ใช่ข้อความลอย',
      'เปิด Semantic View ดูโครงสร้างจริงของหน้านี้ได้ทันที',
    ],
    demo: 'semantic',
    token: 'semantic HTML · JSON-LD @graph',
    tag: 'SEO · AEO · GEO',
  },
];

/* The home page lists the disciplines by what a client asks about first. */
export const HOME_BENEFIT_ORDER = ['semantic', 'speed', 'space', 'type', 'light', 'motion'];

/* ── How a project runs ─────────────────────────────────────────
   Every step restates something the terms page or the FAQ already commits
   to — scope confirmed before work, Milestone payments, the clock starting on
   complete content and the first payment, delivery with admin accounts.
   Nothing here is new policy. */
export const STEPS = [
  { title: 'โทรเล่าโจทย์', body: 'บอกว่าธุรกิจทำอะไร และอยากให้เว็บช่วยเรื่องไหน ยังไม่ต้องเตรียมเอกสาร' },
  { title: 'สรุปขอบเขต ราคา ระยะเวลา', body: 'เราสรุปเป็นใบเสนอราคาและ Scope of Work ให้ยืนยันร่วมกันก่อนเริ่มงาน' },
  { title: 'ออกแบบและพัฒนา', body: 'ทำงานเป็นงวดตาม Milestone เริ่มนับเวลาเมื่อได้รับข้อมูลครบและชำระงวดแรก' },
  { title: 'ส่งมอบและตรวจรับ', body: 'ได้เว็บไซต์ที่เปิดใช้งานจริง พร้อมบัญชีผู้ดูแลตามขอบเขตงาน' },
];

/* ── 7 · The enemy ──────────────────────────────────────────── */
export const FRICTIONS = [
  { title: 'Unnecessary clicks', body: 'ขั้นตอนที่ผู้ใช้ไม่จำเป็นต้องเจอ' },
  { title: 'Unnecessary waiting', body: 'เวลารอโหลดที่เกิดจากระบบที่ไม่ได้ปรับ' },
  { title: 'Unnecessary motion', body: 'Animation ที่มีไว้เพียงเพื่อแสดงเทคนิค' },
  { title: 'Unnecessary visual noise', body: 'องค์ประกอบที่แย่งกันพูดจนไม่มีอะไรเด่น' },
  { title: 'Unnecessary code', body: 'หนี้ทางเทคนิคจากสถาปัตยกรรมที่ไม่ได้คิดล่วงหน้า' },
  { title: 'Unnecessary compromise', body: 'การลดคุณภาพเพราะดีไซน์กับดีเวลอปไม่ได้อยู่บนมาตรฐานเดียวกัน' },
];

/* ── 12 · Generated vs Crafted ──────────────────────────────── */
export const GENERATED_VS_CRAFTED = {
  head: ['Dimension', 'Generated', 'Crafted'],
  rows: [
    ['Starting point', 'Prompt', 'Intent'],
    ['Optimization', 'Probability', 'Judgment'],
    ['Output', 'Possible solution', 'Deliberate solution'],
    ['Context', 'Supplied information', 'Brand understanding'],
    ['Detail', 'Generated', 'Directed'],
    ['Restraint', 'More possibilities', 'The right decision'],
    ['Responsibility', 'Tool-assisted output', 'Human authorship'],
  ],
};

/* ── 14 · Brand personality ─────────────────────────────────── */
export const PERSONALITY = [
  { title: 'Precise', body: 'ทุกอย่างดูตั้งใจ ไม่มีอะไรที่ใส่มาเพราะทำได้' },
  { title: 'Quiet', body: 'ไม่ต้องตะโกนว่าเก่ง ให้รายละเอียดพูดแทน' },
  { title: 'Cultured', body: 'อ่านงานออกแบบ สถาปัตยกรรม และงานพิมพ์ ไม่ใช่แค่เทรนด์เว็บ' },
  { title: 'Technical', body: 'งานเบื้องหลังแข็งแรงพอ ๆ กับสิ่งที่มองเห็น' },
  { title: 'Obsessive', body: 'สนใจรายละเอียดที่คนส่วนใหญ่ข้ามไป' },
  { title: 'Restrained', body: 'รู้ว่าควรทำอะไร และรู้ว่าเมื่อไรควรหยุด' },
];

/* ── 23 · Brand manifesto ───────────────────────────────────── */
export const MANIFESTO = [
  'We believe efficiency is not about doing less.',
  'It is about removing what does not belong.',
  'The unnecessary click. The unnecessary motion. The unnecessary line of code. The unnecessary compromise.',
  'What remains should earn its place.',
  'Every word. Every pixel. Every interaction. Every millisecond.',
  'Engineered with precision. Crafted with intent.',
];

/* ── หมวดผลงาน ──────────────────────────────────────────────── */
export const WORK_KINDS = [
  { key: 'all', label: 'ทั้งหมด' },
  { key: 'platform', label: 'แพลตฟอร์ม' },
  { key: 'brand', label: 'เว็บไซต์แบรนด์' },
  { key: 'corporate', label: 'เว็บไซต์องค์กร' },
];

/* The project shown beside the home headline. Any key from PROJECTS works;
   it is left out of the grid below so it never appears twice on one page. */
export const FEATURED = 'vela';

/* ── Selected work — ชื่อเท่านั้น ไม่แสดง URL ────────────────── */
export const PROJECTS = [
  {
    key: 'ace', name: 'ACE! Network', url: 'https://ace-community-site.vercel.app',
    image: '/work/ace.webp', full: { src: '/work/full/ace.webp', height: 1756 }, kind: 'platform', stack: 'TanStack Start',
    summary: 'เครือข่ายและคลังความรู้สำหรับคนทำหนัง รวมคอร์ส บทความ และกิจกรรมของชุมชนไว้ในที่เดียว',
  },
  {
    key: 'routte', name: 'ROUTTE', url: 'https://routte.to/',
    image: '/work/routte.webp', full: { src: '/work/full/routte.webp', height: 3255 }, kind: 'platform', stack: 'Next.js',
    summary: 'แพลตฟอร์มวางทริปและเครือข่ายประสบการณ์ ที่เปลี่ยนเวลาว่างให้เป็นวันที่เล่าเป็นเรื่องได้',
  },
  {
    key: 'hongmove', name: 'Hong Move', url: 'https://hongmove.com',
    image: '/work/hongmove.webp', full: { src: '/work/full/hongmove.webp', height: 4000 }, kind: 'platform', stack: 'Next.js',
    summary: 'แพลตฟอร์มเรียกรถ EV และจองทัวร์เหมาคันของสนามบินหาดใหญ่ ทำงานร่วมกับแอปมือถือ',
  },
  {
    key: 'parallax', name: 'Parallax', url: 'https://parallax-xi-azure.vercel.app',
    image: '/work/parallax.webp', full: { src: '/work/full/parallax.webp', height: 4000 }, kind: 'platform', stack: 'Next.js',
    summary: 'เครื่องมืออ่านพฤติกรรมลูกค้าและคาดการณ์การกลับมาซื้อซ้ำ พร้อมคอนโซลสำหรับทีมงาน',
  },
  {
    key: 'orions', name: 'ØRIONS', url: 'https://www.orions.agency/',
    image: '/work/orions.webp', full: { src: '/work/full/orions.webp', height: 4000 }, kind: 'brand', stack: 'Next.js',
    summary: 'เว็บไซต์ครีเอทีฟเอเจนซีสองภาษา ที่ต้องอธิบายวิธีทำงานให้ชัดก่อนจะขายงาน',
  },
  {
    key: 'antarctix', name: 'ANTARCTIX', url: 'https://antarctix.co',
    image: '/work/antarctix.webp', full: { src: '/work/full/antarctix.webp', height: 4000 }, kind: 'brand', stack: 'Next.js',
    summary: 'เว็บไซต์สตูดิโอด้านข้อมูลและ AI ที่เล่าเรื่องส่วนที่มองไม่เห็นของงานเป็นแกนหลัก',
  },
  {
    key: 'vela', name: 'VELA Wellness Residence', url: 'https://www.velawellnessresidence.com',
    image: '/work/vela.webp', full: { src: '/work/full/vela.webp', height: 4000 }, kind: 'brand', stack: 'Next.js',
    summary: 'เว็บไซต์โครงการที่พักเพื่อสุขภาพ ที่ขายด้วยบรรยากาศและจังหวะการอ่านมากกว่ารายการสเปก',
  },
  {
    key: 'zolza', name: 'ZOLZA', url: 'https://zolza.vercel.app',
    image: '/work/zolza.webp', full: { src: '/work/full/zolza.webp', height: 2849 }, kind: 'brand', stack: 'Next.js',
    summary: 'เว็บไซต์แบรนด์เครื่องดื่มน้ำส้มสายชูหมักอัดแก๊ส ที่ต้องสื่อรสชาติผ่านสีและภาพสินค้า',
  },
  {
    key: 'cacao', name: 'Cacao Republic', url: 'https://cacao-republic.org/',
    image: '/work/cacao.webp', full: { src: '/work/full/cacao.webp', height: 2164 }, kind: 'corporate', stack: 'WordPress',
    summary: 'เว็บไซต์องค์กรด้านเกษตรและโกโก้ ที่รวมข้อมูลโครงการและการติดต่อไว้ให้ครบในหน้าเดียว',
  },
  {
    key: 'bhealthy', name: 'B-Healthy', url: 'https://www.b-healthy.co',
    image: '/work/bhealthy.webp', full: { src: '/work/full/bhealthy.webp', height: 4000 }, kind: 'corporate', stack: 'Next.js',
    summary: 'เว็บไซต์บริการ Corporate Wellness ที่แยก Retreat, Workshop และ Membership ให้ HR เทียบง่าย',
  },
  {
    key: 'brc', name: 'Bangpakong Riverside Country Club', url: 'https://brc-kycgolf.com/',
    image: '/work/brc.webp', full: { src: '/work/full/brc.webp', height: 3992 }, kind: 'corporate', stack: 'WordPress',
    summary: 'เว็บไซต์สนามกอล์ฟริมแม่น้ำบางปะกง รวมข้อมูลสนาม สิ่งอำนวยความสะดวก และกิจกรรมประจำปี',
  },
];

/* ── คำถามที่พบบ่อย ────────────────────────────────────────── */
export const FAQS = [
  {
    q: 'Digital Craft Studio ต่างจากบริษัทรับทำเว็บทั่วไปอย่างไร',
    a: 'ต่างที่ขอบเขตของการตัดสินใจ บริษัทรับทำเว็บส่วนใหญ่รับแบบมาแล้วทำให้เป็นหน้าเว็บ เราทำตั้งแต่ตัดสินว่าอะไรควรมีอยู่ ไปจนถึงสถาปัตยกรรมเบื้องหลัง โดยดีไซน์กับดีเวลอปอยู่บนมาตรฐานเดียวกัน จึงไม่มีจุดที่รายละเอียดหล่นหายระหว่างส่งต่องาน',
  },
  {
    q: 'คิดราคาอย่างไร ทำไมไม่มีแพ็กเกจบนเว็บ',
    home: true,
    a: 'เราประเมินตามขอบเขตงานจริงของแต่ละโครงการ ไม่ใช้แพ็กเกจสำเร็จรูป เพราะเว็บไซต์องค์กรกับแพลตฟอร์มที่มีระบบหลังบ้านต่างกันมากเกินกว่าจะใส่ในตารางเดียว โทรมาเล่าโจทย์ได้เลย เราสรุปขอบเขตกลับไปให้',
  },
  {
    q: 'ใช้ AI ในการทำงานไหม',
    a: 'ใช้ ในส่วนที่ทำให้การทำงานเร็วขึ้น แต่การที่เครื่องมือสร้างของได้เร็วขึ้นไม่ได้ทำให้คำถามสำคัญที่สุดหายไปว่าเราควรสร้างอะไร งานที่เราขายคือการตัดสินใจ ไม่ใช่จำนวนตัวเลือก',
  },
  {
    q: 'ทำเว็บไซต์ใช้เวลานานแค่ไหน',
    home: true,
    a: 'ขึ้นกับขอบเขต เว็บไซต์องค์กรที่เนื้อหาพร้อมแล้วใช้เวลาประมาณสองถึงสามสัปดาห์ ส่วนแพลตฟอร์มที่มีสมาชิกและหลังบ้านใช้เวลาหลายเดือน เราสรุประยะเวลาให้ชัดก่อนเริ่มเสมอ',
  },
  {
    q: 'รับประกันอันดับบน Google ไหม',
    home: true,
    a: 'ไม่รับประกันอันดับ เพราะผลลัพธ์ขึ้นกับปัจจัยนอกการควบคุมของเรา สิ่งที่เรารับผิดชอบคือโครงสร้างพื้นฐานที่ถูกต้อง ทั้งความหมายเชิงโครงสร้าง ความเร็ว และความชัดเจนของเนื้อหา ซึ่งเปิด Semantic View ตรวจได้เองบนเว็บนี้',
  },
  {
    q: 'มีเว็บไซต์อยู่แล้ว ปรับต่อได้ไหม',
    a: 'ได้ เราตรวจของเดิมก่อนว่าควรพัฒนาต่อหรือทำใหม่แล้วย้ายข้อมูล แล้วเสนอทางเลือกพร้อมข้อดีข้อเสียให้ตัดสินใจ ไม่ได้เสนอทำใหม่เป็นคำตอบเดียวเสมอไป',
  },
];
