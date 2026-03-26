import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedButton from '@/components/AnimatedButton';
import Link from "next/link";

export const metadata: Metadata = {
    title: "Expertise | John Salde Consulting",
    description:
        "Core competencies in Coffee Business Development, Menu Engineering, Barista Training, Technical Standards, and Operational Systems.",
};

export default function ExpertisePage() {
    return (
        <main>
            <Navigation />

            {/* ── Hero ── */}
            <section className="page-hero" style={{ paddingBottom: "5rem", position: "relative", overflow: "hidden", backgroundColor: "var(--color-primary)" }}>
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0e1d4e 0%, #1D3B91 100%)' }} />
                    <div className="bg-layer bg-noise-dark" />
                    <div className="bg-layer bg-diagonal-lines" style={{ opacity: 0.3 }} />
                    <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '50%', height: '80%', background: 'radial-gradient(circle, rgba(198,224,61,0.15), transparent 60%)', filter: 'blur(80px)' }} />
                    <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(37,99,235,0.4), transparent 70%)', filter: 'blur(80px)' }} />
                </div>
                <div
                    className="container grid gap-12 md:grid-cols-2"
                    style={{ alignItems: "center", position: "relative", zIndex: 2 }}
                >
                    {/* Left: text */}
                    <div>
                        <span className="page-label" style={{ color: "var(--color-accent)" }}>Core Competencies</span>
                        <h1
                            className="text-display-md"
                            style={{ color: "white", lineHeight: 1.1, marginBottom: "1.5rem" }}
                        >
                            Precision Engineering for the Specialty Coffee Sector.
                        </h1>
                        <p className="text-body-lg" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "480px", marginBottom: "2rem" }}>
                            A systematic approach to café architecture, operational excellence, and sensory development. I bridge the gap between artisanal passion and rigorous commercial profitability.
                        </p>
                        {/* Stat badge */}
                        <div
                            className="bento-card"
                            style={{ background: "#c6d2ff", padding: "1.5rem 2rem", display: "inline-flex", flexDirection: "column", alignSelf: "flex-start" }}
                        >
                            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem", color: "#1D3B91" }}>6+</span>
                            <span className="page-label" style={{ margin: 0, color: "#1D3B91", opacity: 0.75 }}>Years of Market Expertise</span>
                        </div>
                    </div>

                    {/* Right: image with floating card */}
                    <div className="expertise-image-panel" style={{ position: "relative", paddingBottom: "2rem" }}>
                        <div
                            style={{
                                aspectRatio: "4/3",
                                borderRadius: "var(--radius-lg)",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src="/images/heroes pages/expertise.png"
                                alt="Expertise"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    display: "block",
                                }}
                            />
                        </div>
                        {/* Floating quote card - copied from process page style */}

                    </div>
                </div>
            </section>

            {/* ── Expertise Bento Grid ── */}
            <section style={{ position: "relative", overflow: "hidden", padding: "5rem 0" }}>
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)' }} />
                    <div className="bg-layer bg-dot-grid" style={{ opacity: 0.5 }} />
                    <div style={{ position: 'absolute', bottom: '0', right: '-10%', width: '50%', height: '80%', background: 'radial-gradient(circle, rgba(37,99,235,0.06), transparent 70%)', filter: 'blur(80px)' }} />
                </div>
                <div className="container grid gap-6" style={{ gridTemplateColumns: "1fr", position: "relative", zIndex: 2 }}>

                    {/* Card 1 - Featured: Coffee Business Development */}
                    <div
                        className="bento-card"
                        style={{
                            background: "#ffffff",
                            borderRadius: "var(--radius)",
                            overflow: "hidden",
                            boxShadow: "0 20px 40px rgba(29,59,145,0.04)",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            className="grid"
                            style={{ gridTemplateColumns: "1fr", minHeight: "360px" }}
                        >
                            {/* Text */}
                            <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <div>
                                    <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "var(--color-primary)", marginBottom: "1.25rem", display: "block" }}>analytics</span>
                                    <h3 style={{ color: "var(--color-primary)", marginBottom: "0.75rem", fontSize: "1.35rem" }}>Coffee Business Development</h3>
                                    <p className="text-body-md" style={{ marginBottom: "1.5rem" }}>
                                        Comprehensive market analysis, site selection feasibility, and financial modeling designed to ensure long-term scalability.
                                    </p>
                                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                        {["Market Penetration Strategy", "Financial Projections & ROI", "Brand Positioning"].map((pt) => (
                                            <li key={pt} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "var(--color-primary)", fontFamily: "var(--font-display)", fontWeight: 600 }}>
                                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-accent)", flexShrink: 0 }} />
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* Image panel */}
                            <div
                                style={{
                                    minHeight: "220px",
                                    height: "100%",
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                <img
                                    src="/images/business_dev.png"
                                    alt="Coffee Business Development"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Menu Engineering + Barista Training */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Menu Engineering */}
                        <div
                            className="bento-card"
                            style={{ background: "var(--color-primary)", padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "340px" }}
                        >
                            <div>
                                <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "var(--color-accent)", marginBottom: "1.25rem", display: "block" }}>menu_book</span>
                                <h3 style={{ color: "white", marginBottom: "0.75rem", fontSize: "1.35rem" }}>Menu Engineering</h3>
                                <p className="text-body-md" style={{ color: "rgba(255,255,255,0.7)" }}>
                                    Optimizing product mix for both sensory impact and gross margin contribution.
                                </p>
                            </div>
                            <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1.5rem", marginTop: "2rem" }}>
                                <p className="lora-quote" style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.85)" }}>
                                    &ldquo;Balance is not just found in the cup, but in the spreadsheet.&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* Barista Training */}
                        <div
                            className="bento-card"
                            style={{ background: "#dfe9fa", padding: "2.5rem", display: "flex", flexDirection: "column", minHeight: "340px" }}
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "var(--color-primary)", marginBottom: "1.25rem", display: "block" }}>school</span>
                            <h3 style={{ color: "var(--color-primary)", marginBottom: "0.75rem", fontSize: "1.35rem" }}>Barista Training &amp; Standardization</h3>
                            <p className="text-body-md" style={{ marginBottom: "1.5rem" }}>
                                Technical proficiency programs focused on extraction science, workflow ergonomics, and hospitality excellence.
                            </p>
                            {/* Visual placeholder */}
                            <div
                                style={{
                                    flex: 1,
                                    borderRadius: "var(--radius-sm)",
                                    overflow: "hidden",
                                    minHeight: "120px",
                                    position: "relative",
                                }}
                            >
                                <img
                                    src="/images/barista_training.png"
                                    alt="Barista Training & Standardization"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Technical Standards + Operational Systems */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Technical Standards */}
                        <div
                            className="bento-card"
                            style={{ background: "#ffffff", padding: "2.5rem", border: "1px solid rgba(29,59,145,0.07)" }}
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "var(--color-primary)", marginBottom: "1.25rem", display: "block" }}>precision_manufacturing</span>
                            <h3 style={{ color: "var(--color-primary)", marginBottom: "0.75rem", fontSize: "1.35rem" }}>Technical Standards</h3>
                            <p className="text-body-md" style={{ marginBottom: "1.5rem" }}>
                                Equipment specification and water chemistry management to ensure consistency across multiple locations.
                            </p>
                            {/* Calibration meter */}
                            <div style={{ background: "#f8f9ff", borderRadius: "var(--radius-sm)", padding: "1rem 1.25rem" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8" }}>Calibration Quality</span>
                                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.8rem", color: "var(--color-primary)" }}>99.8%</span>
                                </div>
                                <div style={{ width: "100%", height: "5px", background: "#e5eeff", borderRadius: "999px" }}>
                                    <div style={{ width: "99%", height: "100%", background: "var(--color-accent)", borderRadius: "999px" }} />
                                </div>
                            </div>
                        </div>

                        {/* Operational Systems */}
                        <div
                            className="bento-card"
                            style={{ background: "var(--color-accent)", padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                        >
                            <div>
                                <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "var(--color-primary)", marginBottom: "1.25rem", display: "block" }}>settings_suggest</span>
                                <h3 style={{ color: "var(--color-primary)", marginBottom: "0.75rem", fontSize: "1.35rem" }}>Operational Systems</h3>
                                <p className="text-body-md" style={{ color: "var(--color-primary)", opacity: 0.8 }}>
                                    Custom SOPs, inventory management frameworks, and waste reduction protocols.
                                </p>
                            </div>
                            <button
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    marginTop: "2rem",
                                    fontFamily: "var(--font-display)",
                                    fontWeight: 700,
                                    fontSize: "0.8rem",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "var(--color-primary)",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                Systemize Growth
                                <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Architectural Approach ── */}
            <section style={{ backgroundColor: "#eef4ff", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
                {/* ── Premium Background ── */}
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div className="bg-layer bg-dot-grid" style={{ opacity: 0.4 }} />
                    <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '60%', height: '80%', background: 'radial-gradient(circle, rgba(37,99,235,0.06), transparent 70%)', filter: 'blur(80px)' }} />
                </div>
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="grid gap-16 md:grid-cols-2" style={{ alignItems: "center" }}>
                        <div>
                            <h2 className="text-h2" style={{ color: "var(--color-primary)", marginBottom: "3rem" }}>
                                The Architectural Approach to Hospitality.
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                                {[
                                    { n: "01", title: "Audit & Diagnosis", desc: "I begin by identifying structural leaks through data-driven performance metrics." },
                                    { n: "02", title: "Framework Design", desc: "Designing bespoke operational modules that align with your brand identity and staff capabilities." },
                                    { n: "03", title: "Sustainable Implementation", desc: "Training and coaching to ensure the new standards become part of the organizational DNA." },
                                ].map((step) => (
                                    <div key={step.n} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                                        <div
                                            style={{
                                                width: "3rem",
                                                height: "3rem",
                                                borderRadius: "50%",
                                                background: "white",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontFamily: "var(--font-display)",
                                                fontWeight: 700,
                                                color: "var(--color-primary)",
                                                flexShrink: 0,
                                                boxShadow: "0 2px 8px rgba(29,59,145,0.08)",
                                            }}
                                        >
                                            {step.n}
                                        </div>
                                        <div>
                                            <h4 style={{ color: "var(--color-primary)", fontFamily: "var(--font-display)", fontWeight: 600, marginBottom: "0.4rem" }}>{step.title}</h4>
                                            <p className="text-body-md">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div style={{ position: "relative" }}>
                            <div
                                style={{
                                    aspectRatio: "1",
                                    borderRadius: "var(--radius-lg)",
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                <img
                                    src="/images/arch_approach.png"
                                    alt="The Architectural Approach to Hospitality"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "-2rem",
                                    left: "-2rem",
                                    background: "var(--color-primary)",
                                    borderRadius: "var(--radius)",
                                    padding: "2rem",
                                    maxWidth: "280px",
                                    boxShadow: "0 20px 40px rgba(29,59,145,0.25)",
                                }}
                            >
                                <p className="lora-quote" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", marginBottom: "1rem" }}>
                                    &ldquo;John transformed my workflow from chaotic to rhythmic. My throughput increased by 22% without sacrificing quality.&rdquo;
                                </p>
                                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)" }}>
                                    - Mindanao Client
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="section" style={{ textAlign: "center", position: "relative", overflow: "hidden" }}>
                {/* ── Premium Background ── */}
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%)' }} />
                    <div className="bg-layer bg-line-grid" style={{ opacity: 0.5 }} />
                    <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '80%', background: 'radial-gradient(circle, rgba(198,224,61,0.05), transparent 70%)', filter: 'blur(80px)' }} />
                </div>
                <div className="container" style={{ maxWidth: "640px", position: "relative", zIndex: 2 }}>
                    <h2 className="text-h2" style={{ color: "var(--color-primary)", marginBottom: "1rem" }}>
                        Ready to recalibrate your business?
                    </h2>
                    <p className="text-body-lg" style={{ marginBottom: "2.5rem" }}>
                        Schedule a high-level assessment of your current operational standards and profitability roadmap.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <AnimatedButton href="/consultation" text1="Request Profile" />
                        <Link href="/portfolio" className="btn btn-secondary">View Portfolio</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
