import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Portfolio | John Salde Consulting",
    description:
        "Proven trajectories - explore John Salde's portfolio of strategic interventions for coffee and hospitality businesses.",
};

export default function PortfolioPage() {
    return (
        <main>
            <Navigation />

            {/* ── Hero ── */}
            <section
                className="page-hero"
                style={{
                    position: "relative",
                    minHeight: "clamp(440px, 65vh, 680px)",
                    display: "flex",
                    alignItems: "flex-end",
                    overflow: "hidden",
                }}
            >
                {/* Background image */}
                <img
                    src="/images/heroes pages/portfolio2.jpeg"
                    alt="Portfolio background"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                        zIndex: 0,
                    }}
                />
                {/* Gradient overlay - heavier on bottom to protect text */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, rgba(29,59,145,0.2) 0%, rgba(29,59,145,0.6) 45%, rgba(29,59,145,0.95) 100%)",
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
                    <div style={{ maxWidth: "700px" }}>
                        <span className="page-label" style={{ color: "var(--color-accent)" }}>Proven Trajectories</span>
                        <h1
                            className="text-display-md"
                            style={{ color: "white", lineHeight: 1.1, marginBottom: "1.5rem", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
                        >
                            Architecting Growth through Analytical Rigor.
                        </h1>
                        <p className="text-body-lg" style={{ maxWidth: "580px", color: "rgba(255,255,255,0.85)" }}>
                            Explore our portfolio of strategic interventions. From boutique roasteries to regional hospitality brands in Mindanao, we apply a consistent methodology focused on operational excellence and sustainable profitability.
                        </p>
                    </div>

                    {/* Lora quote card */}
                    <div
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            borderRadius: "var(--radius)",
                            padding: "1.5rem 2rem",
                            borderLeft: "4px solid var(--color-accent)",
                            maxWidth: "400px",
                        }}
                    >
                        <p className="lora-quote" style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.9)" }}>
                            &ldquo;Strategy is not a document; it is the discipline of continuous improvement.&rdquo;
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Featured Case Study ── */}
            <section className="container" style={{ paddingBottom: "5rem" }}>
                <div
                    className="bento-card"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        background: "white",
                        overflow: "hidden",
                        boxShadow: "0 4px 24px rgba(29,59,145,0.06)",
                    }}
                >
                    {/* Image panel */}
                    <div
                        style={{
                            background: "linear-gradient(135deg, #dfe9fa 0%, #c6d2ff 100%)",
                            minHeight: "260px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: "6rem", color: "rgba(29,59,145,0.18)" }}>store</span>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "3rem" }}>
                        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                            <span className="tag-pill" style={{ background: "#c6d2ff", color: "#1D3B91" }}>Profitability Optimization</span>
                            <span className="page-label" style={{ margin: 0, color: "#94a3b8" }}>2024 Engagement</span>
                        </div>
                        <h2 className="text-h2" style={{ color: "var(--color-primary)", marginBottom: "1rem" }}>
                            Davao Roasters: Scale &amp; Structure
                        </h2>
                        <p className="text-body-lg" style={{ marginBottom: "2rem" }}>
                            Implementing a hub-and-spoke operational model across 3 locations, focusing on supply chain consolidation and middle-management mentorship to drive sustainable margin growth.
                        </p>

                        {/* Stats */}
                        <div className="grid md:grid-cols-2 gap-8" style={{ borderTop: "1px solid #f1f5f9", paddingTop: "2rem", marginBottom: "2rem" }}>
                            {[
                                { val: "24%", label: "Operational Margin Increase" },
                                { val: "8mo", label: "ROI Breakeven Point" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <div className="portfolio-stat-value">{s.val}</div>
                                    <p style={{ fontFamily: "var(--font-display)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#94a3b8", marginTop: "0.25rem" }}>
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                color: "var(--color-primary)",
                                fontFamily: "var(--font-display)",
                                fontWeight: 700,
                                fontSize: "0.8rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        >
                            VIEW FULL CASE STUDY
                            <span className="material-symbols-outlined" style={{ fontSize: "1rem" }}>arrow_forward</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Secondary Cards Grid ── */}
            <section className="container" style={{ paddingBottom: "5rem" }}>
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        {
                            icon: "analytics",
                            title: "The Artisan Collective",
                            desc: "Operational restructuring and revenue recovery for a multi-unit hospitality group.",
                            category: "Consultancy",
                            result: "+18% Revenue",
                        },
                        {
                            icon: "psychology",
                            title: "Origin Coffee Systems",
                            desc: "Development of a 24-month mentorship program for executive leadership within B2B coffee supply chains.",
                            category: "Leadership",
                            result: "95% Retention",
                        },
                        {
                            icon: "account_balance",
                            title: "Highland Brew Co.",
                            desc: "Due diligence and acquisition strategy for a boutique café group targeting the specialty market.",
                            category: "M&A Strategy",
                            result: "3.5M Valuation",
                        },
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="bento-card"
                            style={{
                                background: "#eef4ff",
                                padding: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                minHeight: "280px",
                            }}
                        >
                            <div>
                                <span className="material-symbols-outlined" style={{ fontSize: "2.5rem", color: "var(--color-accent)", marginBottom: "1.5rem", display: "block" }}>
                                    {card.icon}
                                </span>
                                <h3 style={{ color: "var(--color-primary)", marginBottom: "0.75rem", fontSize: "1.1rem" }}>{card.title}</h3>
                                <p className="text-body-md">{card.desc}</p>
                            </div>
                            <div style={{ paddingTop: "1.5rem", marginTop: "1.5rem", borderTop: "1px solid rgba(29,59,145,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#94a3b8" }}>
                                    {card.category}
                                </span>
                                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-primary)", fontSize: "0.9rem" }}>
                                    {card.result}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Aggregate Impact Stats (Navy) ── */}
            <section style={{ background: "var(--color-primary)", padding: "5rem 0" }}>
                <div className="container">
                    <div style={{ maxWidth: "800px" }}>
                        <h2 className="text-h2" style={{ color: "white", marginBottom: "3rem" }}>
                            Aggregate Impact Across the Portfolio
                        </h2>
                        <div className="grid gap-12 md:grid-cols-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))" }}>
                            {[
                                { val: "20+", label: "Clients Served" },
                                { val: "₱120M+", label: "Revenue Managed" },
                                { val: "15%", label: "Avg. Profit Lift" },
                                { val: "6yrs", label: "Industry Experience" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="portfolio-stat-value" style={{ fontSize: "2.25rem" }}>{stat.val}</div>
                                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginTop: "0.4rem" }}>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Active Engagements ── */}
            <section className="section container">
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
                    <h2 className="text-h2" style={{ color: "var(--color-primary)" }}>Active Engagements</h2>
                    <p className="text-body-lg" style={{ maxWidth: "480px" }}>
                        Our current focus remains on sustainable automation and supply-chain resilience for boutique-at-scale operations.
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {[
                        { icon: "factory", title: "Inventory Logic 2.0", desc: "Implementing automated procurement systems for a regional franchise to eliminate stock waste.", status: "In Progress" },
                        { icon: "groups", title: "Cultural Architecture", desc: "Mentoring regional managers on KPI-driven empathetic leadership in high-stress retail environments.", status: "Deployment Phase" },
                    ].map((eng) => (
                        <div key={eng.title} style={{ display: "flex", gap: "1.5rem" }}>
                            <div
                                style={{
                                    width: "3.5rem",
                                    height: "3.5rem",
                                    background: "#e5eeff",
                                    borderRadius: "0.75rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    transition: "background 0.2s ease",
                                }}
                            >
                                <span className="material-symbols-outlined" style={{ color: "var(--color-primary)" }}>{eng.icon}</span>
                            </div>
                            <div>
                                <h4 style={{ color: "var(--color-primary)", fontFamily: "var(--font-display)", fontWeight: 600, marginBottom: "0.4rem" }}>{eng.title}</h4>
                                <p className="text-body-md" style={{ marginBottom: "0.75rem" }}>{eng.desc}</p>
                                <span className="page-label" style={{ margin: 0, color: "var(--color-accent)", fontSize: "0.62rem" }}>{eng.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: "4rem", textAlign: "center" }}>
                    <Link href="/consultation" className="btn btn-primary">Book a Discovery Call</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
