import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
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
            "A comprehensive extraction of current financial health, operational flow, and brand equity. We identify the hairline fractures in your business model before they become structural failures.",
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
            "We map the ideal future state. Using predictive modeling, we forecast growth trajectories based on optimized supply chains and refined menu architecture.",
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
            "Implementation of the 'Architectural Mentor' philosophy. We train your leadership to execute high-level decisions with precision, focusing on the marginal gains that drive massive shifts.",
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
            "Deploying the refined model across multiple locations or deeper into your primary market. We ensure the DNA of the business remains intact as it expands.",
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
            <section className="container page-hero" style={{ paddingBottom: "4rem" }}>
                <div className="grid gap-16 md:grid-cols-2" style={{ alignItems: "center" }}>
                    <div>
                        <span className="page-label" style={{ color: "var(--color-secondary)" }}>Methodology</span>
                        <h1
                            className="text-display-md"
                            style={{ color: "var(--color-primary)", lineHeight: 1.1, marginBottom: "1.5rem" }}
                        >
                            An Architectural Approach to{" "}
                            <span style={{ background: "var(--color-primary)", color: "var(--color-accent)", padding: "0 0.35em", borderRadius: "4px" }}>
                                Growth
                            </span>
                        </h1>
                        <p className="text-body-lg" style={{ maxWidth: "480px" }}>
                            We don&apos;t believe in generic templates. Our process is a rigorous, analytical journey designed to dismantle operational inefficiencies and rebuild your coffee enterprise for sustainable profitability.
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
                                alt="Our Process"
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
                                &ldquo;Profitability is the byproduct of structural integrity. We build the skeleton; you brew the soul.&rdquo;
                            </p>
                            <cite style={{ fontStyle: "normal", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)" }}>
                                - John Salde
                            </cite>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Process Timeline ── */}
            <section style={{ backgroundColor: "#eef4ff", padding: "6rem 0" }}>
                <div className="container">
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
            <section className="section container">
                <div className="grid gap-8 md:grid-cols-3">
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
                                We take on a limited number of consulting partners each quarter to ensure the depth and rigor required for true transformation.
                            </p>
                        </div>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/consultation" className="btn btn-primary">Request Your Audit</Link>
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
