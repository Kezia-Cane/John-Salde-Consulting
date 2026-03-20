"use client";

import { useState, FormEvent } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BUSINESS_TYPES = [
    "Boutique Coffee Shop",
    "Roastery & Wholesale",
    "Multi-unit Retail",
    "Café Franchise",
    "Hospitality Group",
    "Other",
];

const INTAKE_STEPS = [
    {
        icon: "analytics",
        title: "Initial Audit",
        desc: "We review your current business metrics to prepare a data-driven discussion.",
        filled: true,
    },
    {
        icon: "calendar_today",
        title: "45-Minute Discovery",
        desc: "A deep-dive call to identify core levers for growth and profitability.",
        filled: false,
    },
    {
        icon: "map",
        title: "Actionable Blueprint",
        desc: "Receive a post-consultation brief outlining the mentorship roadmap.",
        filled: false,
    },
];

export default function ConsultationPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        businessType: BUSINESS_TYPES[0],
        email: "",
        phone: "",
        datetime: "",
        message: "",
    });
    const [errors, setErrors] = useState<Partial<typeof form>>({});

    function validate() {
        const e: Partial<typeof form> = {};
        if (!form.name.trim()) e.name = "Full name is required.";
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            e.email = "A valid email is required.";
        if (!form.phone.trim()) e.phone = "Phone number is required.";
        if (!form.datetime) e.datetime = "Please select a preferred date & time.";
        if (!form.message.trim()) e.message = "Please describe your objectives.";
        return e;
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }
        setErrors({});
        setSubmitted(true);
    }

    function handleChange(field: keyof typeof form, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    return (
        <main style={{ backgroundColor: "#f8f9ff" }}>
            <Navigation />

            <div className="container page-hero" style={{ paddingBottom: "5rem" }}>
                {/* ── Page Header ── */}
                <div style={{ maxWidth: "640px", marginBottom: "4rem" }}>
                    <span className="page-label" style={{ color: "var(--color-secondary)" }}>Strategic Partnership</span>
                    <h1
                        className="text-display-md"
                        style={{ color: "var(--color-primary)", lineHeight: 1.1, marginBottom: "1.5rem" }}
                    >
                        Architectural growth for your{" "}
                        <span className="lora-quote" style={{ color: "var(--color-secondary)", fontWeight: 400, fontSize: "inherit" }}>
                            hospitality legacy.
                        </span>
                    </h1>
                    <p className="text-body-lg" style={{ maxWidth: "580px" }}>
                        Our consultation process is designed for clarity. We move beyond generic advice into rigorous financial analysis and operational strategy. Let&apos;s define the blueprint for your expansion.
                    </p>
                </div>

                {/* ── Two-Column Layout ── */}
                <div className="grid gap-16" style={{ gridTemplateColumns: "1fr", alignItems: "start" }}>

                    {/* ── Form ── */}
                    <div
                        style={{
                            background: "#ffffff",
                            borderRadius: "var(--radius)",
                            padding: "3rem",
                            boxShadow: "0 20px 48px rgba(29,59,145,0.07)",
                            outline: "1px solid rgba(198,200,175,0.12)",
                        }}
                    >
                        {submitted ? (
                            <div style={{ textAlign: "center", padding: "3rem 0" }}>
                                <span className="material-symbols-outlined" style={{ fontSize: "4rem", color: "var(--color-accent)", marginBottom: "1.5rem", display: "block" }}>check_circle</span>
                                <h2 className="text-h2" style={{ color: "var(--color-primary)", marginBottom: "1rem" }}>Request Received</h2>
                                <p className="text-body-lg" style={{ maxWidth: "420px", margin: "0 auto 2rem" }}>
                                    Thank you, {form.name}! We&apos;ll review your details and reach out within 24 hours to confirm your consultation.
                                </p>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => { setSubmitted(false); setForm({ name: "", businessType: BUSINESS_TYPES[0], email: "", phone: "", datetime: "", message: "" }); }}
                                >
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                <div className="grid gap-8 md:grid-cols-2">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="cf-name" className="form-label">Full Name</label>
                                        <input
                                            id="cf-name"
                                            type="text"
                                            className="form-field"
                                            placeholder="Maria Santos"
                                            value={form.name}
                                            onChange={(e) => handleChange("name", e.target.value)}
                                            aria-required="true"
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name ? "cf-name-err" : undefined}
                                        />
                                        {errors.name && <span id="cf-name-err" style={{ color: "#ba1a1a", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.name}</span>}
                                    </div>

                                    {/* Business Type */}
                                    <div>
                                        <label htmlFor="cf-btype" className="form-label">Business Type</label>
                                        <select
                                            id="cf-btype"
                                            className="form-field"
                                            value={form.businessType}
                                            onChange={(e) => handleChange("businessType", e.target.value)}
                                        >
                                            {BUSINESS_TYPES.map((t) => <option key={t}>{t}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid gap-8 md:grid-cols-2">
                                    {/* Email */}
                                    <div>
                                        <label htmlFor="cf-email" className="form-label">Email Address</label>
                                        <input
                                            id="cf-email"
                                            type="email"
                                            className="form-field"
                                            placeholder="you@business.com"
                                            value={form.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                            aria-required="true"
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? "cf-email-err" : undefined}
                                        />
                                        {errors.email && <span id="cf-email-err" style={{ color: "#ba1a1a", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.email}</span>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="cf-phone" className="form-label">Phone Number</label>
                                        <input
                                            id="cf-phone"
                                            type="tel"
                                            className="form-field"
                                            placeholder="+63 912 345 6789"
                                            value={form.phone}
                                            onChange={(e) => handleChange("phone", e.target.value)}
                                            aria-required="true"
                                            aria-invalid={!!errors.phone}
                                            aria-describedby={errors.phone ? "cf-phone-err" : undefined}
                                        />
                                        {errors.phone && <span id="cf-phone-err" style={{ color: "#ba1a1a", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.phone}</span>}
                                    </div>
                                </div>

                                {/* Preferred Date/Time */}
                                <div>
                                    <label htmlFor="cf-datetime" className="form-label">Preferred Consultation Date &amp; Time</label>
                                    <input
                                        id="cf-datetime"
                                        type="datetime-local"
                                        className="form-field"
                                        value={form.datetime}
                                        onChange={(e) => handleChange("datetime", e.target.value)}
                                        aria-required="true"
                                        aria-invalid={!!errors.datetime}
                                        aria-describedby={errors.datetime ? "cf-dt-err" : undefined}
                                    />
                                    {errors.datetime && <span id="cf-dt-err" style={{ color: "#ba1a1a", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.datetime}</span>}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="cf-msg" className="form-label">Strategic Objectives</label>
                                    <textarea
                                        id="cf-msg"
                                        className="form-field"
                                        rows={4}
                                        placeholder="Describe your current bottleneck or growth objectives..."
                                        value={form.message}
                                        onChange={(e) => handleChange("message", e.target.value)}
                                        aria-required="true"
                                        aria-invalid={!!errors.message}
                                        aria-describedby={errors.message ? "cf-msg-err" : undefined}
                                        style={{ resize: "vertical" }}
                                    />
                                    {errors.message && <span id="cf-msg-err" style={{ color: "#ba1a1a", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.message}</span>}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        background: "var(--color-accent)",
                                        color: "var(--color-primary)",
                                        padding: "1.1rem",
                                        borderRadius: "var(--radius)",
                                        fontFamily: "var(--font-display)",
                                        fontWeight: 700,
                                        fontSize: "1rem",
                                        letterSpacing: "0.06em",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        cursor: "pointer",
                                        border: "none",
                                        transition: "background 0.2s ease, transform 0.15s ease",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = "#d4ec4f")}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
                                >
                                    Submit Consultation Request
                                    <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>arrow_forward</span>
                                </button>
                            </form>
                        )}
                    </div>

                    {/* ── Sidebar ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        {/* Lora Quote */}
                        <div style={{ paddingLeft: "1.5rem", borderLeft: "3px solid var(--color-accent)" }}>
                            <p className="lora-quote" style={{ fontSize: "1.2rem", color: "var(--color-primary)", marginBottom: "0.75rem" }}>
                                &ldquo;Profitability is not a happy accident; it is a calculated architectural outcome of disciplined operations and visionary mentorship.&rdquo;
                            </p>
                            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
                                — John Salde
                            </span>
                        </div>

                        {/* Intake Process Steps */}
                        <div
                            style={{
                                background: "#dfe9fa",
                                borderRadius: "var(--radius)",
                                padding: "2.5rem",
                            }}
                        >
                            <h3 style={{ color: "var(--color-primary)", marginBottom: "2rem", fontSize: "1.25rem" }}>The Intake Process</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                {INTAKE_STEPS.map((step) => (
                                    <div key={step.title} style={{ display: "flex", gap: "1.25rem" }}>
                                        <div
                                            style={{
                                                width: "2.75rem",
                                                height: "2.75rem",
                                                borderRadius: "50%",
                                                background: step.filled ? "var(--color-accent)" : "white",
                                                border: step.filled ? "none" : "1px solid rgba(198,200,175,0.3)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <span
                                                className="material-symbols-outlined"
                                                style={{ color: step.filled ? "var(--color-primary)" : "var(--color-primary)", fontSize: "1.1rem" }}
                                            >
                                                {step.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 style={{ color: "var(--color-primary)", fontFamily: "var(--font-display)", fontWeight: 600, marginBottom: "0.25rem" }}>{step.title}</h4>
                                            <p className="text-body-md">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Metric Card */}
                        <div
                            style={{
                                background: "#c6d2ff",
                                borderRadius: "var(--radius)",
                                padding: "2rem",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "1rem",
                            }}
                        >
                            <div>
                                <span className="page-label" style={{ color: "#1D3B91", opacity: 0.7 }}>Average Client Growth</span>
                                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.5rem", color: "#1D3B91", lineHeight: 1 }}>+34%</div>
                            </div>
                            <p className="lora-quote" style={{ fontSize: "0.82rem", color: "rgba(29,59,145,0.65)", textAlign: "right", maxWidth: "160px" }}>
                                Year-over-year revenue increase (Retail / Coffee)
                            </p>
                        </div>

                        {/* Contact info */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <p className="page-label" style={{ marginBottom: 0 }}>Prefer to reach out directly?</p>
                            <a
                                href="mailto:thejohnsalde@gmail.com"
                                style={{ fontFamily: "var(--font-body)", color: "var(--color-secondary)", textDecoration: "underline", fontSize: "0.95rem" }}
                            >
                                thejohnsalde@gmail.com
                            </a>
                            <p className="text-body-md">Mindanao, Philippines</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
