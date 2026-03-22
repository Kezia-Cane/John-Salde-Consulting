import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import AnimatedButton from "@/components/AnimatedButton";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Process | John Salde Consulting",
    description:
        "John Salde's 4-phase methodology: Structural Audit, Blueprints & Modeling, Operational Refinement, and Market Scaling.",
};

const PHASES = [
    {
        number: "01",
        label: "AUDIT",
        title: "Phase 01: The Structural Audit",
        description:
            "A comprehensive extraction of current financial health, operational flow, and brand equity. I identify the hairline fractures in your business model before they become structural failures.",
        tags: ["P&L Analysis", "Staff Efficiency", "Brand Equity Mapping"],
        circleStyle: { background: "var(--color-primary)", color: "var(--color-accent)" },
        tagStyle: { background: "#dfe9fa", color: "var(--color-primary)" },
        right: false,
    },
    {
        number: "02",
        label: "VISION",
        title: "Phase 02: Blueprints & Modeling",
        description:
            "I map the ideal future state. Using predictive modeling, I forecast growth trajectories based on optimized supply chains and refined menu architecture.",
        tags: ["Growth Forecasts", "Unit Economics", "Menu Architecture"],
        circleStyle: { background: "var(--color-accent)", color: "var(--color-primary)" },
        tagStyle: { background: "#c6d2ff", color: "#1D3B91" },
        right: true,
    },
    {
        number: "03",
        label: "REFINEMENT",
        title: "Phase 03: Operational Refinement",
        description:
            "Implementation of the 'Architectural Mentor' philosophy. I train your leadership to execute high-level decisions with precision, focusing on the marginal gains that drive massive shifts.",
        tags: ["Leadership Mentoring", "Standard Operating Procedures"],
        circleStyle: { background: "var(--color-primary)", color: "var(--color-accent)" },
        tagStyle: { background: "#dfe9fa", color: "var(--color-primary)" },
        right: false,
    },
    {
        number: "04",
        label: "SCALE",
        title: "Phase 04: Market Scaling",
        description:
            "Deploying the refined model across multiple locations or deeper into your primary market. I ensure the DNA of the business remains intact as it expands.",
        tags: ["Market Penetration", "Franchise Ready", "Multi-Unit Ops"],
        circleStyle: { background: "var(--color-accent)", color: "var(--color-primary)" },
        tagStyle: { background: "#c6d2ff", color: "#1D3B91" },
        right: true,
    },
] as const;

export default function ProcessPage() {
    return (
        <main style={{ backgroundColor: "#f8f9ff" }}>
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
                <div className="container grid gap-16 md:grid-cols-2" style={{ alignItems: "center", position: "relative", zIndex: 2 }}>
                    <div>
                        <span className="page-label" style={{ color: "var(--color-accent)" }}>Methodology</span>
                        <h1
                            className="text-display-md"
                            style={{ color: "white", lineHeight: 1.1, marginBottom: "1.5rem" }}
                        >
                            An Architectural Approach to{" "}
                            <span style={{ background: "var(--color-accent)", color: "var(--color-primary)", padding: "0 0.35em", borderRadius: "4px" }}>
                                Growth
                            </span>
                        </h1>
                        <p className="text-body-lg" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "480px" }}>
                            I don&apos;t believe in generic templates. My process is a rigorous, analytical journey designed to dismantle operational inefficiencies and rebuild your coffee enterprise for sustainable profitability.
                        </p>
                    </div>

                    {/* Image panel with floating quote card */}
                    <div style={{ position: "relative" }}>
                        <div
                            style={{
                                aspectRatio: "1",
                                borderRadius: "var(--radius-lg)",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src="/images/heroes pages/process.jpeg"
                                alt="My Process"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    display: "block",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                bottom: "-1.5rem",
                                left: "-1.5rem",
                                background: "var(--color-primary)",
                                borderRadius: "var(--radius)",
                                padding: "1.75rem",
                                maxWidth: "280px",
                                boxShadow: "0 20px 48px rgba(29,59,145,0.3)",
                            }}
                        >
                            <p className="lora-quote" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", marginBottom: "0.75rem" }}>
                                &ldquo;Profitability is the byproduct of structural integrity. I build the skeleton; you brew the soul.&rdquo;
                            </p>
                            <cite style={{ fontStyle: "normal", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)" }}>
                                - John Salde
                            </cite>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Process Timeline ── */}
            <section style={{ backgroundColor: "#eef4ff", padding: "6rem 0", position: "relative", overflow: "hidden" }}>
                {/* ── Premium Background ── */}
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #f4f8ff 0%, #eef4ff 100%)' }} />
                    <div className="bg-layer bg-dot-grid" style={{ opacity: 0.35 }} />
                    <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(37,99,235,0.06), transparent 70%)', filter: 'blur(80px)' }} />
                </div>
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    {/* Header */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            marginBottom: "5rem",
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
                            <h2 className="text-h2" style={{ color: "var(--color-primary)", maxWidth: "440px" }}>
                                The Four Phases of Structural Consulting
                            </h2>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-primary)" }}>
                                <span className="material-symbols-outlined" style={{ fontSize: "1.2rem" }}>analytics</span>
                                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                                    Data-Driven Timeline
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "5rem" }}>
                        {/* Center connector line - desktop only */}
                        <div className="timeline-connector" />

                        {PHASES.map((phase) => (
                            <div
                                key={phase.number}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr",
                                    gap: "2rem",
                                    alignItems: "center",
                                }}
                            >
                                {/* Content block */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1rem",
                                    }}
                                >
                                    {/* Circle + content row on mobile */}
                                    <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                                        <div className="timeline-circle" style={phase.circleStyle as React.CSSProperties}>
                                            {phase.number}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ color: "var(--color-primary)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                                                {phase.title}
                                            </h3>
                                            <p className="text-body-md">{phase.description}</p>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", paddingLeft: "4.75rem" }}>
                                        {phase.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="tag-pill"
                                                style={phase.tagStyle as React.CSSProperties}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Bento ── */}
            <section className="section" style={{ position: "relative", overflow: "hidden", backgroundColor: "#ffffff" }}>
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)' }} />
                    <div className="bg-layer bg-dot-grid" style={{ opacity: 0.5 }} />
                    <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(37,99,235,0.06), transparent 70%)', filter: 'blur(80px)' }} />
                </div>
                <div className="container grid gap-8 md:grid-cols-3" style={{ position: "relative", zIndex: 2 }}>
                    {/* CTA card (2/3) */}
                    <div
                        className="bento-card"
                        style={{
                            background: "var(--color-primary)",
                            borderRadius: "var(--radius)",
                            padding: "3rem",
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gridColumn: "span 2",
                        }}
                    >
                        <div>
                            <h2 className="text-h2" style={{ color: "white", marginBottom: "1rem" }}>
                                Ready to audit your structure?
                            </h2>
                            <p className="text-body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: "440px", marginBottom: "2rem" }}>
                                I take on a limited number of consulting partners each quarter to ensure the depth and rigor required for true transformation.
                            </p>
                        </div>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <AnimatedButton href="/consultation" text1="Request Your Audit" text2="Booking..." />
                            <Link href="/portfolio" className="btn btn-white">View Case Studies</Link>
                        </div>
                    </div>

                    {/* Stat card (1/3) */}
                    <div
                        className="bento-card"
                        style={{
                            background: "#c6d2ff",
                            borderRadius: "var(--radius)",
                            padding: "3rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "var(--font-display)",
                                fontWeight: 800,
                                fontSize: "3.5rem",
                                color: "#1D3B91",
                                lineHeight: 1,
                                marginBottom: "0.75rem",
                            }}
                        >
                            12%
                        </span>
                        <p
                            style={{
                                fontFamily: "var(--font-display)",
                                fontWeight: 700,
                                fontSize: "0.7rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#1D3B91",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Average Profitability Increase
                        </p>
                        <p className="lora-quote" style={{ fontSize: "0.85rem", color: "rgba(29,59,145,0.65)" }}>
                            Within the first 6 months of implementation.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
