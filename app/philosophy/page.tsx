import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Philosophy | John Salde Consulting",
    description:
        "Discover the foundational philosophy behind John Salde Consulting - mission, vision, and core values that drive every engagement.",
};

export default function PhilosophyPage() {
    return (
        <main>
            <Navigation />

            {/* ── Hero Section ── */}
            <section
                className="page-hero"
                style={{
                    position: "relative",
                    minHeight: "clamp(480px, 70vh, 720px)",
                    display: "flex",
                    alignItems: "flex-end",
                    overflow: "hidden",
                }}
            >
                {/* Background image */}
                <img
                    src="/images/heroes pages/philosophy.png"
                    alt="Philosophy background"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        zIndex: 0,
                    }}
                />
                {/* Gradient overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, rgba(29,59,145,0.45) 0%, rgba(29,59,145,0.75) 60%, rgba(29,59,145,0.92) 100%)",
                        zIndex: 1,
                    }}
                />
                {/* Content */}
                <div
                    className="container"
                    style={{
                        position: "relative",
                        zIndex: 2,
                        paddingBottom: "4rem",
                        paddingTop: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}
                >
                    <div style={{ maxWidth: "780px" }}>
                        <span className="page-label" style={{ color: "var(--color-accent)" }}>Our Foundation</span>
                        <h1
                            className="text-display-md"
                            style={{ color: "white", marginBottom: "1.5rem", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
                        >
                            The Architect of{" "}
                            <span
                                className="lora-quote"
                                style={{ color: "var(--color-accent)", fontWeight: 400, fontSize: "inherit" }}
                            >
                                Sustainable Growth.
                            </span>
                        </h1>
                        <p
                            className="lora-quote"
                            style={{
                                fontSize: "clamp(1rem, 2vw, 1.35rem)",
                                color: "rgba(255,255,255,0.85)",
                                maxWidth: "600px",
                            }}
                        >
                            &ldquo;In the world of specialty coffee, profitability isn't just a metric - it's a symphony of operational precision and artisanal soul.&rdquo;
                        </p>
                    </div>

                    {/* Rigorous Logic badge */}
                    <div
                        className="bento-card"
                        style={{
                            background: "rgba(198,210,255,0.18)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            padding: "1.5rem 2rem",
                            maxWidth: "320px",
                        }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "var(--color-accent)", marginBottom: "0.75rem", display: "block" }}>architecture</span>
                        <h3 style={{ color: "white", marginBottom: "0.5rem", fontSize: "1.1rem" }}>Rigorous Logic</h3>
                        <p className="text-body-md" style={{ color: "rgba(255,255,255,0.8)" }}>
                            Structural integrity applied to business modeling and performance scaling.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Mission & Vision ── */}
            <section style={{ backgroundColor: "#eef4ff", padding: "6rem 0" }}>
                <div className="container">
                    <div
                        className="grid gap-12 md:grid-cols-2"
                        style={{ alignItems: "stretch" }}
                    >
                        {/* Mission */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <h2 className="text-h2" style={{ color: "var(--color-primary)" }}>The Mission</h2>
                            <div className="accent-bar" />
                            <p className="text-body-lg" style={{ color: "#334155", fontWeight: 500 }}>
                                To empower coffee boutique owners and hospitality leaders with the analytical framework and strategic mentorship required to transform creative passion into an enduring, profitable legacy.
                            </p>
                            <p className="text-body-md">
                                We don&apos;t just solve problems - we engineer systems. Our approach treats every business variable as a structural component, ensuring that growth is not just rapid, but resilient against market volatility.
                            </p>
                        </div>

                        {/* Vision */}
                        <div
                            className="bento-card"
                            style={{
                                background: "#ffffff",
                                padding: "3rem",
                                boxShadow: "0 20px 40px rgba(29,59,145,0.06)",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <span
                                className="material-symbols-outlined"
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1rem",
                                    fontSize: "8rem",
                                    opacity: 0.05,
                                    color: "var(--color-primary)",
                                    lineHeight: 1,
                                }}
                            >
                                visibility
                            </span>
                            <h2 className="text-h2" style={{ color: "var(--color-primary)", marginBottom: "2rem" }}>The Vision</h2>
                            <p className="text-body-lg" style={{ color: "#334155", fontWeight: 500, marginBottom: "1.25rem" }}>
                                Redefining the standard of consulting by bridging the gap between rigorous fiscal discipline and the intangible beauty of the boutique experience.
                            </p>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e5eeff" }}>
                                <div style={{ display: "flex" }}>
                                    {["#C6E03D", "#1D3B91", "#c6d2ff"].map((c, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                width: "2.25rem",
                                                height: "2.25rem",
                                                borderRadius: "50%",
                                                backgroundColor: c,
                                                border: "2px solid #ffffff",
                                                marginLeft: i > 0 ? "-0.6rem" : "0",
                                            }}
                                        />
                                    ))}
                                </div>
                                <span className="page-label" style={{ margin: 0, letterSpacing: "0.12em" }}>20+ Clients Mentored</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Core Values Bento Grid ── */}
            <section className="section" style={{ backgroundColor: "#f8f9ff" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <h2 className="text-h2" style={{ color: "var(--color-primary)", marginBottom: "1rem" }}>Core Philosophy Pillars</h2>
                        <p className="text-body-lg" style={{ maxWidth: "480px", margin: "0 auto" }}>
                            Our values are the architectural blueprints from which all consulting engagements are built.
                        </p>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                        {/* Value 1 - spans 2 cols on md */}
                        <div
                            className="bento-card"
                            style={{
                                background: "#e5eeff",
                                padding: "3rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                gridColumn: "span 2",
                            }}
                        >
                            <div>
                                <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--color-primary)", marginBottom: "1.5rem", display: "block" }}>query_stats</span>
                                <h3 style={{ color: "var(--color-primary)", marginBottom: "1rem", fontSize: "1.5rem" }}>Unwavering Analytical Integrity</h3>
                                <p className="text-body-lg">
                                    We believe that clarity begins with data. By deconstructing complex operational challenges into quantifiable metrics, we remove the guesswork from growth.
                                </p>
                            </div>
                            <p className="lora-quote" style={{ marginTop: "2rem", fontSize: "1.15rem", color: "var(--color-primary)" }}>
                                &ldquo;Numbers tell the story that emotions often hide.&rdquo;
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div
                            className="bento-card"
                            style={{ background: "var(--color-accent)", padding: "3rem", display: "flex", flexDirection: "column" }}
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--color-primary)", marginBottom: "1.5rem", display: "block" }}>handshake</span>
                            <h3 style={{ color: "var(--color-primary)", marginBottom: "0.75rem", fontSize: "1.25rem" }}>Mentorship Over Management</h3>
                            <p className="text-body-md" style={{ color: "var(--color-primary)", opacity: 0.8 }}>
                                We don&apos;t just provide answers - we transfer knowledge. Our goal is to equip leaders with internal capabilities to sustain success long after our engagement ends.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div
                            className="bento-card"
                            style={{ background: "var(--color-primary)", padding: "3rem", display: "flex", flexDirection: "column" }}
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--color-accent)", marginBottom: "1.5rem", display: "block" }}>precision_manufacturing</span>
                            <h3 style={{ color: "white", marginBottom: "0.75rem", fontSize: "1.25rem" }}>Operational Precision</h3>
                            <p className="text-body-md" style={{ color: "rgba(255,255,255,0.7)" }}>
                                Small details dictate major outcomes. We obsess over the micro-interactions and backend efficiencies that define a premium brand&apos;s reputation.
                            </p>
                        </div>

                        {/* Value 4 - spans 2 cols on md */}
                        <div
                            className="bento-card"
                            style={{
                                background: "#dfe9fa",
                                padding: "3rem",
                                gridColumn: "span 2",
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                <div style={{ flex: 1 }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--color-primary)", marginBottom: "1.5rem", display: "block" }}>balance</span>
                                    <h3 style={{ color: "var(--color-primary)", marginBottom: "0.75rem", fontSize: "1.5rem" }}>Ethical Profitability</h3>
                                    <p className="text-body-lg">
                                        Profit is the engine, but values are the compass. We prioritize long-term brand health and stakeholder equity over short-term financial gains.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Closing Quote Section ── */}
            <section className="section" style={{ backgroundColor: "#ffffff" }}>
                <div className="container" style={{ maxWidth: "680px", textAlign: "center" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "4rem", color: "var(--color-primary)", marginBottom: "2rem", display: "block" }}>format_quote</span>
                    <p
                        className="lora-quote"
                        style={{
                            fontSize: "clamp(1.35rem, 3vw, 2rem)",
                            color: "var(--color-primary)",
                            marginBottom: "2.5rem",
                        }}
                    >
                        &ldquo;True consulting is the art of revealing the structure that already exists within a vision, then strengthening it to withstand the weight of success.&rdquo;
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-primary)" }}>John Salde</span>
                        <span className="page-label" style={{ margin: 0 }}>Principal Consultant</span>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ padding: "0 0 5rem" }}>
                <div className="container">
                    <div
                        style={{
                            background: "var(--color-primary)",
                            borderRadius: "var(--radius-lg)",
                            padding: "4rem",
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <h2 className="text-h2" style={{ color: "white", marginBottom: "1rem" }}>Ready to build your architectural legacy?</h2>
                        <p className="text-body-lg" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
                            Let&apos;s apply structural rigor to your business model and unlock your next phase of growth.
                        </p>
                        <Link href="/consultation" className="btn btn-primary" style={{ fontSize: "0.9rem" }}>
                            Book Your Discovery Audit
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
