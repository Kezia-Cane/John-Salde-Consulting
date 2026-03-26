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
    const locationString = `${city}${region ? `, ${region}` : ""}, ${country}`;

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
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <style>
    /* ── Base ── */
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      background: #edf0f7;
      margin: 0; padding: 24px 16px;
      color: #1a1a2e;
    }
    .outer { max-width: 620px; margin: 0 auto; }

    /* ── Card ── */
    .wrapper {
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow:
        0 0 0 1px rgba(255,255,255,0.9),
        0 8px 32px rgba(29,59,145,0.12),
        0 2px 8px rgba(0,0,0,0.06);
      border: 1px solid rgba(255,255,255,0.8);
    }

    /* ── Header ── */
    .header {
      background: linear-gradient(135deg, #1D3B91 0%, #0d1f5c 100%);
      padding: 32px 36px;
      display: flex; align-items: center; justify-content: space-between; gap: 20px;
    }
    .header h1 { color: #fff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.01em; }
    .header p  { color: rgba(255,255,255,0.65); margin: 5px 0 0; font-size: 13px; }
    .header p a { color: #C6E03D; text-decoration: none; font-weight: 700; }
    .badge {
      display: inline-block; background: #C6E03D; color: #1D3B91;
      padding: 4px 14px; border-radius: 999px;
      font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 12px;
    }
    .avatar {
      width: 68px; height: 68px; border-radius: 50%;
      border: 3px solid #C6E03D; object-fit: cover;
      box-shadow: 0 4px 12px rgba(0,0,0,0.25); flex-shrink: 0;
    }

    /* ── Body ── */
    .body { padding: 32px 36px; background: #ffffff; }
    .field { margin-bottom: 20px; }
    .field label {
      display: block; font-size: 10px; font-weight: 800;
      text-transform: uppercase; letter-spacing: 0.1em; color: #1D3B91; margin-bottom: 6px;
    }
    .field .value {
      font-size: 15px; color: #1a1a2e;
      background: #f7f9ff;
      border: 1px solid #e4e9ff;
      border-radius: 10px; padding: 11px 16px; line-height: 1.5;
    }
    .field .value.message { white-space: pre-wrap; line-height: 1.7; font-size: 14px; }
    .divider { border: none; border-top: 1px solid #eef0f8; margin: 24px 0; }
    .security {
      background: #f7f9ff; padding: 14px 16px; border-radius: 10px;
      border: 1px solid #e4e9ff; margin-top: 24px;
    }
    .security label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #64748b; display: block; margin-bottom: 6px; }
    .security p  { font-size: 13px; color: #475569; margin: 0; line-height: 1.6; }

    /* ── Footer ── */
    .footer {
      background: #f7f9ff; padding: 18px 36px;
      text-align: center; font-size: 12px; color: #94a3b8;
      border-top: 1px solid #eef0f8;
    }

    /* ════════════════════════════════════════
       DARK MODE  (Apple Mail, iOS Gmail, etc.)
    ════════════════════════════════════════ */
    @media (prefers-color-scheme: dark) {
      body { background: #0d1022 !important; color: #e2e8f0 !important; }
      .outer { background: transparent; }
      .wrapper {
        background: #1a1f38 !important;
        border-color: rgba(255,255,255,0.08) !important;
        box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5) !important;
      }
      .header { background: linear-gradient(135deg, #0F2560 0%, #070f2b 100%) !important; }
      .body { background: #1a1f38 !important; }
      .field label { color: #C6E03D !important; }
      .field .value {
        background: #252b47 !important;
        border-color: #2e375e !important;
        color: #e2e8f0 !important;
      }
      .divider { border-color: #252b47 !important; }
      .security {
        background: #1e2540 !important;
        border-color: #2e375e !important;
      }
      .security label { color: #94a3b8 !important; }
      .security p    { color: #cbd5e1 !important; }
      .footer {
        background: #151929 !important;
        border-top-color: #252b47 !important;
        color: #64748b !important;
      }
    }
  </style>
</head>
<body>
  <div class="outer">
  <div class="wrapper">
    <div class="header">
      <div style="flex:1;">
        <h1>New Consultation Request</h1>
        <p>Received via <a href="https://john-salde.com">john-salde.com</a></p>
        <span class="badge">Potential Client Submission</span>
      </div>
      <img class="avatar" src="https://john-salde.com/images/js-profile.png" alt="John Salde" />
    </div>
    <div class="body">
      <div class="field">
        <label>Full Name</label>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <label>Business Type</label>
        <div class="value">${businessType}</div>
      </div>
      <div class="field">
        <label>Email Address</label>
        <div class="value">${email}</div>
      </div>
      <div class="field">
        <label>Phone Number</label>
        <div class="value">${phone}</div>
      </div>
      <div class="field">
        <label>Preferred Date &amp; Time for Call</label>
        <div class="value">${preferredDate}</div>
      </div>
      <hr class="divider" />
      <div class="field">
        <label>What They Need Help With</label>
        <div class="value message">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>
      <div class="security">
        <label>Security &amp; Location Info</label>
        <p><strong>IP Address:</strong> ${ip}<br/><strong>Location:</strong> ${locationString}</p>
      </div>
    </div>
    <div class="footer">
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
