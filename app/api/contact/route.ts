import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[API /contact] RESEND_API_KEY is not set.");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { name, businessType, email, phone, datetime, message, _honeypot } = body;

    // --- 🛑 LAYER 1: Anti-Spam Honeypot ---
    // If a bot fills out this hidden field, we just pretend it succeeded and drop the request.
    if (_honeypot) {
      console.log("[Honeypot Triggered] Blocked bot submission.");
      return NextResponse.json({ success: true });
    }

    // --- 📍 LOCATION TRACKING (via Vercel Headers) ---
    const ip = req.headers.get("x-forwarded-for") || "Unknown IP";
    const city = req.headers.get("x-vercel-ip-city") || "Unknown City";
    const region = req.headers.get("x-vercel-ip-country-region") || "";
    const country = req.headers.get("x-vercel-ip-country") || "Unknown Country";
    const locationString = `${decodeURIComponent(city)}${region ? `, ${decodeURIComponent(region)}` : ""}, ${country}`;

    console.log(`[Form Submission] IP: ${ip} | Location: ${locationString}`);

    if (!name || !email || !phone || !datetime || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const preferredDate = (() => {
      try {
        return new Date(datetime).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Manila",
        });
      } catch {
        return datetime;
      }
    })();

    const htmlBody = `
<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <style>
    /* ── Reset ── */
    * { box-sizing: border-box; margin: 0; padding: 0; }

    /* ── Base ── */
    body, #body-el {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      background-color: #e8ecf5 !important;
      margin: 0; padding: 20px 12px;
      color: #1a1a2e;
      width: 100% !important;
    }
    .outer-wrap { max-width: 620px; margin: 0 auto; }

    /* ── Card ── */
    .card {
      background-color: #ffffff;
      border-radius: 18px;
      overflow: hidden;
      border: 1px solid #dde4f5;
      box-shadow: 0 4px 24px rgba(29,59,145,0.10);
    }

    /* ── Header (table based for email client support) ── */
    .hdr-table { width: 100%; border-collapse: collapse; background: linear-gradient(135deg,#1D3B91,#0a1640); }
    .hdr-td-text { padding: 30px 28px; vertical-align: middle; }
    .hdr-td-img  { padding: 30px 28px 30px 0; vertical-align: middle; text-align: right; width: 88px; }
    .hdr-h1 { color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.01em; margin: 0 0 5px 0; }
    .hdr-sub { color: rgba(255,255,255,0.65); font-size: 13px; margin: 0 0 12px 0; }
    .hdr-sub a { color: #C6E03D; text-decoration: none; font-weight: 700; }
    .hdr-badge {
      display: inline-block; background: #C6E03D; color: #1D3B91;
      padding: 4px 14px; border-radius: 999px;
      font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em;
    }
    .hdr-avatar {
      width: 68px; height: 68px; border-radius: 50%;
      border: 3px solid #C6E03D;
      display: block;
    }

    /* ── Body ── */
    .body-pad { padding: 30px 32px; background-color: #ffffff; }

    /* ── Field ── */
    .field { margin-bottom: 18px; }
    .field-label {
      display: block; font-size: 10px; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.10em;
      color: #1D3B91; margin-bottom: 6px;
    }
    .field-val {
      font-size: 15px; color: #1e2a50;
      background: linear-gradient(135deg, #f0f4ff 0%, #eef1fa 100%);
      border: 1px solid #dde4f5;
      border-left: 3px solid #1D3B91;
      border-radius: 10px; padding: 11px 16px; line-height: 1.6;
    }
    .field-val-msg {
      font-size: 14px; color: #1e2a50;
      background: linear-gradient(135deg, #f0f4ff 0%, #eef1fa 100%);
      border: 1px solid #dde4f5;
      border-left: 3px solid #C6E03D;
      border-radius: 10px; padding: 14px 16px; line-height: 1.75;
      white-space: pre-wrap;
    }
    .divider { border: none; border-top: 1px solid #eaecf5; margin: 22px 0; }

    /* ── Security box ── */
    .sec-box {
      background: linear-gradient(135deg, #f5f7ff 0%, #eef1fa 100%);
      border: 1px solid #dde4f5;
      border-radius: 10px; padding: 14px 16px; margin-top: 22px;
    }
    .sec-label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; display: block; margin-bottom: 6px; }
    .sec-text   { font-size: 13px; color: #475569; line-height: 1.6; }

    /* ── Footer ── */
    .footer-wrap {
      background-color: #f4f6fd;
      padding: 16px 32px;
      text-align: center; font-size: 12px; color: #94a3b8;
      border-top: 1px solid #eaecf5;
    }

    /* ═══════════════════════════════════════════
       DARK MODE — Apple Mail / Samsung Mail
    ═══════════════════════════════════════════ */
    @media (prefers-color-scheme: dark) {
      body, #body-el { background-color: #0b0f1f !important; }
      .outer-wrap { background-color: #0b0f1f !important; }
      .card { background-color: #151929 !important; border-color: #252d4a !important; }
      .hdr-table { background: linear-gradient(135deg,#0d1e5c,#060d2e) !important; }
      .body-pad  { background-color: #151929 !important; }
      .field-label { color: #C6E03D !important; }
      .field-val, .field-val-msg {
        background: #1e2540 !important;
        border-color: #2e3a5e !important;
        color: #dde6ff !important;
      }
      .field-val     { border-left-color: #5c7cff !important; }
      .field-val-msg { border-left-color: #C6E03D !important; }
      .divider { border-color: #252d4a !important; }
      .sec-box  { background: #1a2040 !important; border-color: #2e3a5e !important; }
      .sec-label { color: #8899bb !important; }
      .sec-text  { color: #b0bed9 !important; }
      .footer-wrap { background-color: #0f1428 !important; border-color: #252d4a !important; color: #4a5474 !important; }
    }

    /* ═══════════════════════════════════════════
       DARK MODE — Gmail App (uses [data-ogsc])
    ═══════════════════════════════════════════ */
    [data-ogsc] body, [data-ogsc] #body-el { background-color: #0b0f1f !important; }
    [data-ogsc] .card   { background-color: #151929 !important; border-color: #252d4a !important; }
    [data-ogsc] .body-pad { background-color: #151929 !important; }
    [data-ogsc] .field-label { color: #C6E03D !important; }
    [data-ogsc] .field-val, [data-ogsc] .field-val-msg {
      background: #1e2540 !important;
      border-color: #2e3a5e !important;
      color: #dde6ff !important;
    }
    [data-ogsc] .divider { border-color: #252d4a !important; }
    [data-ogsc] .sec-box { background: #1a2040 !important; border-color: #2e3a5e !important; }
    [data-ogsc] .sec-text { color: #b0bed9 !important; }
    [data-ogsc] .footer-wrap { background-color: #0f1428 !important; color: #4a5474 !important; }
  </style>
</head>
<body id="body-el">
  <div class="outer-wrap">
    <div class="card">

      <!-- ═══ HEADER (TABLE layout — Gmail-safe) ═══ -->
      <table class="hdr-table" role="presentation" cellpadding="0" cellspacing="0">
        <tr>
          <td class="hdr-td-text">
            <p class="hdr-h1">New Consultation Request</p>
            <p class="hdr-sub">Received via <a href="https://john-salde.com">john-salde.com</a></p>
            <span class="hdr-badge">Potential Client Submission</span>
          </td>
          <td class="hdr-td-img">
            <img class="hdr-avatar"
              src="https://john-salde.com/images/js-profile.png"
              alt="JS" width="68" height="68" />
          </td>
        </tr>
      </table>

      <!-- ═══ BODY ═══ -->
      <div class="body-pad">
        <div class="field">
          <span class="field-label">Full Name</span>
          <div class="field-val">${name}</div>
        </div>
        <div class="field">
          <span class="field-label">Business Type</span>
          <div class="field-val">${businessType}</div>
        </div>
        <div class="field">
          <span class="field-label">Email Address</span>
          <div class="field-val">${email}</div>
        </div>
        <div class="field">
          <span class="field-label">Phone Number</span>
          <div class="field-val">${phone}</div>
        </div>
        <div class="field">
          <span class="field-label">Preferred Date &amp; Time for Call</span>
          <div class="field-val">${preferredDate}</div>
        </div>
        <hr class="divider" />
        <div class="field">
          <span class="field-label">What They Need Help With</span>
          <div class="field-val-msg">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
        </div>
        <div class="sec-box">
          <span class="sec-label">Security &amp; Location Info</span>
          <p class="sec-text"><strong>IP:</strong> ${ip} &nbsp;|&nbsp; <strong>Location:</strong> ${locationString}</p>
        </div>
      </div>

      <!-- ═══ FOOTER ═══ -->
      <div class="footer-wrap">
        John Salde Consulting &mdash; Mindanao, Philippines
      </div>
    </div>
  </div>
</body>
</html>
        `;

    const result = await resend.emails.send({
      from: "John Salde Consulting <notifications@john-salde.com>",
      to: ["thejohnsalde@gmail.com", "keziacane.dev@gmail.com", "melmaquilingva@gmail.com", "kisshatrangia@gmail.com"],
      subject: "Potential Client Submission",
      replyTo: email,
      html: htmlBody,
    });

    console.log("[Resend Result]", JSON.stringify(result));

    if (result.error) {
      console.error("[Resend Error]", result.error);
      return NextResponse.json({ error: `Failed to send email: ${result.error.message}` }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[API /contact Error]", msg);
    return NextResponse.json({ error: `Internal server error: ${msg}` }, { status: 500 });
  }
}
