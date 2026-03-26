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
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .wrapper { max-width: 620px; margin: 40px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #1D3B91 0%, #0F2560 100%); padding: 36px 40px; display: flex; align-items: center; gap: 20px; }
    .header h1 { color: white; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.02em; }
    .header p { color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 13px; }
    .header p a { color: #C6E03D; text-decoration: none; font-weight: 600; }
    .header p a:hover { text-decoration: underline; }
    .badge { display: inline-block; background: #C6E03D; color: #1D3B91; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 12px; }
    .body { padding: 36px 40px; }
    .field { margin-bottom: 24px; }
    .field label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #1D3B91; margin-bottom: 6px; }
    .field .value { font-size: 15px; color: #222; background: #f8faff; border: 1px solid #e2e8ff; border-radius: 8px; padding: 12px 16px; }
    .field .value.message { white-space: pre-wrap; line-height: 1.6; }
    .divider { border: none; border-top: 1px solid #e8e8e8; margin: 28px 0; }
    .footer { background: #f8faff; padding: 20px 40px; text-align: center; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <img src="https://john-salde.com/images/js-profile.png" alt="John Salde" style="width: 70px; height: 70px; border-radius: 50%; border: 3px solid #C6E03D; object-fit: cover; box-shadow: 0 4px 10px rgba(0,0,0,0.2);" />
      <div>
        <h1>New Consultation Request</h1>
        <p>Received via <a href="https://john-salde.com">john-salde.com</a></p>
        <span class="badge">Potential Client Submission</span>
      </div>
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

      <div class="field" style="background:#f1f5f9; padding:16px; border-radius:8px; border:1px solid #cbd5e1; margin-top: 32px;">
        <label style="color:#475569; font-size:10px; margin-bottom: 8px;">Security &amp; Location Info</label>
        <div style="font-size:13px; color:#334155; line-height:1.5;">
          <strong>IP Address:</strong> ${ip}<br/>
          <strong>Location:</strong> ${locationString}
        </div>
      </div>
    </div>
    <div class="footer">
      John Salde Consulting &mdash; Mindanao, Philippines
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
