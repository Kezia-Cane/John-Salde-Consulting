import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import AnimatedButton from "@/components/AnimatedButton";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How It Works | John Salde Consulting",
    description:
        "A clear, 4-step approach to improving your café business.",
};

const PHASES = [
    {
        number: "01",
        label: "CHECK-UP",
        title: "Phase 01: Business Check-up",
        description:
            "I take a deep look at your cafe's money, workflow, and brand. I find small problems in your business and fix them before they become big, expensive mistakes.",
        tags: ["Money Health", "Staff Speed", "Brand Strength"],
        circleStyle: { background: "var(--color-primary)", color: "var(--color-accent)" },
        tagStyle: { background: "#dfe9fa", color: "var(--color-primary)" },
        right: false,
    },
    {
        number: "02",
        label: "PLANNING",
        title: "Phase 02: Planning for Growth",
        description:
            "I create a clear plan for your cafe's future. I show you how much you can grow by fixing your supply chain and making your menu more profitable.",
        tags: ["Growth Plans", "Cost per Cup", "Better Menus"],
        circleStyle: { background: "var(--color-accent)", color: "var(--color-primary)" },
        tagStyle: { background: "#c6d2ff", color: "#1D3B91" },
        right: true,
    },
    {
        number: "03",
        label: "TRAINING",
        title: "Phase 03: Training & Better Service",
        description:
            "I work closely with you and your managers. I teach your team how to run the cafe better every day, focusing on small changes that lead to big improvements.",
        tags: ["Manager Training", "Simple Step-by-Step Guides"],
        circleStyle: { background: "var(--color-primary)", color: "var(--color-accent)" },
        tagStyle: { background: "#dfe9fa", color: "var(--color-primary)" },
        right: false,
    },
    {
        number: "04",
        label: "EXPAND",
        title: "Phase 04: Growing Your Brand",
        description:
            "I help you open more locations or grow bigger in your city. I make sure your cafe stays high-quality and successful as you expand to more spots.",
        tags: ["New Locations", "Ready to Franchise", "Managing Many Cafes"],
        circleStyle: { background: "var(--color-accent)", color: "var(--color-primary)" },
        tagStyle: { background: "#c6d2ff", color: "#1D3B91" },
        right: true,
    },
] as const;

export default function HowItWorksPage() {
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
                        <span className="page-label" style={{ color: "var(--color-accent)" }}>How It Works</span>
                        <h1
                            className="text-display-md"
                            style={{ color: "white", lineHeight: 1.1, marginBottom: "1.5rem" }}
                        >
                            A Simple Approach to{" "}
                            <span style={{ background: "var(--color-accent)", color: "var(--color-primary)", padding: "0 0.35em", borderRadius: "4px" }}>
                                Growth
                            </span>
                        </h1>
                        <p className="text-body-lg" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "480px" }}>
                            I don&apos;t use the same plan for everyone. I look closely at how your cafe works, find what&apos;s slowing you down, and help you rebuild for long-term success and better profits.
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
                            className="process-quote-card"
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
                                &ldquo;Good profit comes from a strong business structure. I build the foundation; you focus on your coffee and customers.&rdquo;
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
                                How I Help Your Business Grow
                            </h2>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-primary)" }}>
                                <span className="material-symbols-outlined" style={{ fontSize: "1.2rem" }}>analytics</span>
                                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                                    Simple Timeline
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
                        className="bento-card md:col-span-2"
                        style={{
                            background: "var(--color-primary)",
                            borderRadius: "var(--radius)",
                            padding: "3rem",
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <h2 className="text-h2" style={{ color: "white", marginBottom: "1rem" }}>
                                Ready to improve your cafe?
                            </h2>
                            <p className="text-body-lg" style={{ color: "rgba(255,255,255,0.75)", maxWidth: "440px", marginBottom: "2rem" }}>
                                I only work with a few cafes at a time so I can give your business all the focus and help it needs to succeed.
                            </p>
                        </div>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <AnimatedButton href="/consultation" text1="Request Your Audit" />
                            <Link href="/work" className="btn btn-white">View Work</Link>
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
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 767px) {
                    .process-quote-card {
                        left: 1rem !important;
                        bottom: -3rem !important;
                        right: 1rem !important;
                        width: calc(100% - 2rem) !important;
                        max-width: none !important;
                    }
                    /* Ensure bottom padding of section fits quote card */
                    #hero .container {
                        padding-bottom: 2rem;
                    }
                }
                `
            }} />
        </main>
    );
}
