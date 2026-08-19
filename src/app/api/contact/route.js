/**
 * POST /api/contact
 *
 * ส่งต่อข้อมูลจากแบบฟอร์มติดต่อไปยัง Webhook ที่ตั้งไว้ใน CONTACT_WEBHOOK_URL
 * (ใช้ได้กับ Make, Zapier, n8n, Google Apps Script, LINE Notify หรือ endpoint ของทีมเอง)
 *
 * ถ้ายังไม่ได้ตั้งค่า Webhook จะตอบ { ok: false, reason: 'not-configured' }
 * เพื่อให้หน้าเว็บสลับไปใช้ช่องทางสำรอง แทนที่จะแสดงว่าส่งสำเร็จทั้งที่ข้อมูลหายไป
 */

export const runtime = 'nodejs';

const MAX_LEN = 4000;

function clean(value) {
  return typeof value === 'string' ? value.trim().slice(0, MAX_LEN) : '';
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, reason: 'bad-request' }, { status: 400 });
  }

  // กับดักบอท — ช่องนี้ซ่อนไว้ ผู้ใช้จริงจะไม่กรอก
  if (clean(body.website)) {
    return Response.json({ ok: true });
  }

  const lead = {
    name: clean(body.name),
    company: clean(body.company),
    email: clean(body.email),
    phone: clean(body.phone),
    packageType: clean(body.packageType),
    message: clean(body.message),
    source: 'efficiency.co.th/contact',
    submittedAt: new Date().toISOString(),
  };

  if (!lead.name || !lead.email || !lead.message) {
    return Response.json({ ok: false, reason: 'missing-fields' }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    console.warn('[contact] ยังไม่ได้ตั้งค่า CONTACT_WEBHOOK_URL — ไม่ได้บันทึกข้อมูลผู้ติดต่อ');
    return Response.json({ ok: false, reason: 'not-configured' });
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`webhook responded ${res.status}`);
    return Response.json({ ok: true });
  } catch (error) {
    console.error('[contact] ส่งข้อมูลไปยัง Webhook ไม่สำเร็จ:', error.message);
    return Response.json({ ok: false, reason: 'delivery-failed' }, { status: 502 });
  }
}
