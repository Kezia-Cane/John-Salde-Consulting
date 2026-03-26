"use client";

import { useState, FormEvent } from "react";
import Navigation from "@/components/Navigation";
import CoffeeLoader from "@/components/CoffeeLoader";
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
        title: "Business Check-Up",
        desc: "I look at your current numbers to understand your business.",
        filled: true,
    },
    {
        icon: "calendar_today",
        title: "45-Minute Call",
        desc: "We discuss the best ways to improve your sales and fix any problems.",
        filled: false,
    },
    {
        icon: "map",
        title: "Clear Step-by-Step Plan",
        desc: "You get a simple guide on exactly what to do next to grow your cafe.",
        filled: false,
    },
];

export default function ConsultationPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const [form, setForm] = useState({
        name: "",
        businessType: BUSINESS_TYPES[0],
        email: "",
        phone: "",
        datetime: "",
        message: "",
        _honeypot: "",
    });
    const [errors, setErrors] = useState<Partial<typeof form>>({});

    function validate() {
        const e: Partial<typeof form> = {};
        if (!form.name.trim()) e.name = "Full name is required.";
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            e.email = "A valid email is required.";
        if (!form.phone.trim()) e.phone = "Phone number is required.";
        if (!form.datetime) e.datetime = "Please select a preferred date & time.";
        if (!form.message.trim()) e.message = "Please tell me what you need help with.";
        return e;
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
            setErrors(errs);
            return;
        }
        setErrors({});
        setServerError("");
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok || data.error) {
                setServerError(data.error || "Something went wrong. Please try again.");
            } else {
                setSubmitted(true);
            }
        } catch {
            setServerError("Network error. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    }

    function handleChange(field: keyof typeof form, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    return (
        <main className="page-container-glass" style={{ position: "relative", overflow: "hidden" }}>
            <Navigation />

            {/* ── Premium Architectural Grid Background ── */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .premium-grid {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    background-size: 60px 60px;
                    background-image: 
                        linear-gradient(to right, rgba(29, 59, 145, 0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(29, 59, 145, 0.08) 1px, transparent 1px);
                    z-index: 1;
                    /* Fading the grid out smoothly towards the bottom of the hero */
                    mask-image: linear-gradient(to bottom, black 20%, transparent 60%);
                    -webkit-mask-image: linear-gradient(to bottom, black 20%, transparent 60%);
                }
                .page-container-glass {
                    background-color: #f8f9ff;
                }
            `}} />
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
                <div className="premium-grid" />
            </div>

            <div className="container page-hero" style={{ paddingBottom: "5rem", position: "relative", zIndex: 2 }}>

                {/* ── Page Hero 2-Column Layout ── */}
                <div className="grid gap-12 md:grid-cols-2" style={{ marginBottom: "5rem", alignItems: "start" }}>

                    {/* Left: Header Text */}
                    <div style={{ maxWidth: "600px" }}>
                        <span className="page-label" style={{ color: "var(--color-secondary)" }}>Let's Work Together</span>
                        <h1
                            className="text-display-md"
                            style={{ color: "var(--color-primary)", lineHeight: 1.1, marginBottom: "1.5rem" }}
                        >
                            Let's build a stronger, more profitable {" "}
                            <span className="lora-quote" style={{ color: "var(--color-secondary)", fontWeight: 400, fontSize: "inherit" }}>
                                cafe business.
                            </span>
                        </h1>
                        <p className="text-body-lg" style={{ maxWidth: "580px", color: "var(--color-text-muted)" }}>
                            My consultation process is simple and easy to follow. I don't just give general advice, I look closely at your numbers and daily operations to help you grow your profits.
                        </p>
                    </div>

                    {/* Right: Bento Grid of Cards */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Quote Card (Spans Full Width of this sub-grid) */}
                        <div className="bento-card md:col-span-2" style={{ background: "#e5eeff", padding: "2rem", borderLeft: "4px solid var(--color-accent)" }}>
                            <p className="lora-quote" style={{ fontSize: "1.15rem", color: "var(--color-primary)", marginBottom: "0.75rem" }}>
                                &ldquo;Profitability is not a happy accident; it is the result of strong operations and good guidance.&rdquo;
                            </p>
                            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)" }}>
                                - John Salde
                            </span>
                        </div>

                        {/* Average Client Growth */}
                        <div className="bento-card" style={{ background: "#c6d2ff", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <span className="page-label" style={{ color: "#1D3B91", opacity: 0.7, marginBottom: "0.5rem" }}>Average Client Growth</span>
                            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.5rem", color: "#1D3B91", lineHeight: 1, marginBottom: "0.5rem" }}>+34%</div>
                            <p className="lora-quote" style={{ fontSize: "0.85rem", color: "rgba(29,59,145,0.7)", margin: 0 }}>
                                Yearly revenue increase
                            </p>
                        </div>

                        {/* Intake Process */}
                        <div className="bento-card" style={{ background: "#dfe9fa", padding: "1.5rem" }}>
                            <h3 style={{ color: "var(--color-primary)", marginBottom: "1.25rem", fontSize: "1.1rem" }}>How We Start</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {INTAKE_STEPS.map((step) => (
                                    <div key={step.title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                        <span className="material-symbols-outlined" style={{ color: "var(--color-primary)", fontSize: "1.25rem", marginTop: "2px" }}>
                                            {step.icon}
                                        </span>
                                        <div>
                                            <h4 style={{ color: "var(--color-primary)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{step.title}</h4>
                                            <p className="text-body-md" style={{ fontSize: "0.8rem", margin: 0 }}>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Form Section ── */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .uiverse-container {
                        background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(198, 224, 61, 0.15) 100%);
                        border-radius: 40px;
                        padding: 3rem;
                        border: 5px solid #ffffff;
                        box-shadow: rgba(198, 224, 61, 0.25) 0px 30px 40px -15px;
                    }
                    .uiverse-input {
                        width: 100%;
                        background: white;
                        border: none;
                        padding: 15px 20px;
                        border-radius: 20px;
                        box-shadow: rgba(29, 59, 145, 0.04) 0px 10px 10px -5px;
                        border: 2px solid transparent;
                        font-family: var(--font-body);
                        color: var(--color-primary);
                        font-size: 1rem;
                        transition: border-color 0.2s ease;
                    }
                    .uiverse-input::placeholder {
                        color: #a0aec0;
                    }
                    .uiverse-input:focus {
                        outline: none;
                        border-color: var(--color-accent);
                    }
                    .uiverse-button {
                        width: 100%;
                        font-weight: 700;
                        background: linear-gradient(45deg, var(--color-accent) 0%, #d4ec4f 100%);
                        color: var(--color-primary);
                        padding: 18px;
                        border-radius: 20px;
                        box-shadow: rgba(198, 224, 61, 0.5) 0px 20px 10px -15px;
                        border: none;
                        font-family: var(--font-display);
                        font-size: 1rem;
                        letter-spacing: 0.06em;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 0.5rem;
                        cursor: pointer;
                        transition: all 0.2s ease-in-out;
                    }
                    .uiverse-button:hover {
                        transform: scale(1.02);
                        box-shadow: rgba(198, 224, 61, 0.6) 0px 23px 10px -20px;
                    }
                    .uiverse-button:active {
                        transform: scale(0.98);
                        box-shadow: rgba(198, 224, 61, 0.5) 0px 15px 10px -10px;
                    }
                    .uiverse-label {
                        display: block;
                        font-family: var(--font-display);
                        font-weight: 600;
                        color: var(--color-primary);
                        font-size: 0.85rem;
                        margin-bottom: 0.5rem;
                        margin-left: 0.5rem;
                    }
                `}} />
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <div className="uiverse-container">
                        {submitted ? (
                            <div style={{ textAlign: "center", padding: "3.5rem 0" }}>
                                <span className="material-symbols-outlined" style={{ fontSize: "6rem", color: "#C6E03D", marginBottom: "1.5rem", display: "block", userSelect: "none" }}>
                                    check_circle
                                </span>
                                <h2 style={{ color: "#1D3B91", fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>Request Received</h2>

                                <p className="text-body-lg" style={{ maxWidth: "420px", margin: "0 auto 2rem" }}>
                                    Thank you, {form.name}! I will review your message and contact you within 24 hours to schedule our call.
                                </p>
                                <button
                                    className="uiverse-button"
                                    onClick={() => { setSubmitted(false); setForm({ name: "", businessType: BUSINESS_TYPES[0], email: "", phone: "", datetime: "", message: "", _honeypot: "" }); }}
                                >
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                {/* HONEYPOT - Visually hidden to humans, but bots will fill it */}
                                <div style={{ display: "none" }} aria-hidden="true">
                                    <label htmlFor="_honeypot">If you are a human, leave this blank</label>
                                    <input
                                        type="text"
                                        id="_honeypot"
                                        name="_honeypot"
                                        value={form._honeypot}
                                        onChange={(e) => handleChange("_honeypot", e.target.value)}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="grid gap-8 md:grid-cols-2">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="cf-name" className="uiverse-label">Full Name</label>
                                        <input
                                            id="cf-name"
                                            type="text"
                                            className="uiverse-input"
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
                                        <label htmlFor="cf-btype" className="uiverse-label">Business Type</label>
                                        <select
                                            id="cf-btype"
                                            className="uiverse-input"
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
                                        <label htmlFor="cf-email" className="uiverse-label">Email Address</label>
                                        <input
                                            id="cf-email"
                                            type="email"
                                            className="uiverse-input"
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
                                        <label htmlFor="cf-phone" className="uiverse-label">Phone Number</label>
                                        <input
                                            id="cf-phone"
                                            type="tel"
                                            className="uiverse-input"
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
                                    <label htmlFor="cf-datetime" className="uiverse-label">Preferred Date & Time for Call</label>
                                    <input
                                        id="cf-datetime"
                                        type="datetime-local"
                                        className="uiverse-input"
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
                                    <label htmlFor="cf-msg" className="uiverse-label">What do you need help with?</label>
                                    <textarea
                                        id="cf-msg"
                                        className="uiverse-input"
                                        rows={4}
                                        placeholder="Tell me about your current challenges or goals..."
                                        value={form.message}
                                        onChange={(e) => handleChange("message", e.target.value)}
                                        aria-required="true"
                                        aria-invalid={!!errors.message}
                                        aria-describedby={errors.message ? "cf-msg-err" : undefined}
                                        style={{ resize: "vertical" }}
                                    />
                                    {errors.message && <span id="cf-msg-err" style={{ color: "#ba1a1a", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>{errors.message}</span>}
                                </div>

                                {serverError && (
                                    <div style={{ background: "#fff0f0", border: "1px solid #ba1a1a", borderRadius: "12px", padding: "1rem 1.25rem", color: "#ba1a1a", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>error</span>
                                        {serverError}
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="uiverse-button"
                                    disabled={loading}
                                    style={{
                                        opacity: loading ? 0.9 : 1,
                                        height: "64px",
                                        position: "relative",
                                        overflow: "hidden"
                                    }}
                                >
                                    {loading ? (
                                        <div style={{ transform: "scale(0.5)" }}>
                                            <CoffeeLoader size={100} />
                                        </div>
                                    ) : (
                                        <>
                                            Send Request
                                            <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>arrow_forward</span>
                                        </>
                                    )}
                                </button>
                                {/* Removed the CSS spinner's @keyframes style as it's no longer needed */}
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
