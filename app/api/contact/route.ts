import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, businessType, email, phone, datetime, message } = body;

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
    .header { background: linear-gradient(135deg, #1D3B91 0%, #0F2560 100%); padding: 36px 40px; }
    .header h1 { color: white; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.02em; }
    .header p { color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 13px; }
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
      <h1>New Consultation Request</h1>
      <p>Received via johnsaldeconsulting.com</p>
      <span class="badge">Potential Client Submission</span>
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
    </div>
    <div class="footer">
      John Salde Consulting &mdash; Mindanao, Philippines
    </div>
  </div>
</body>
</html>
        `;

        const result = await resend.emails.send({
            from: "John Salde Consulting <onboarding@resend.dev>",
            to: ["keziacane.dev@gmail.com"],
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
