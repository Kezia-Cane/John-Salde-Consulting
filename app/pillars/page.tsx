import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Pillars | John Salde Consulting",
    description:
        "Explore the three service pillars: Operational Architecture, Financial Rigor, and Strategic Mentorship.",
};

const PILLARS = [
    {
        number: "01",
        icon: "architecture",
        title: "Operational Architecture",
        description:
            "We engineer the skeleton of your business. From workflow optimization to supply chain integrity, we build systems that scale without sacrificing the artisanal quality of your product.",
        points: ["Workflow Efficiency Mapping", "Inventory Management Systems", "SOP Development & Standardization"],
        bg: "#eef4ff",
        iconBg: "var(--color-accent)",
        iconColor: "var(--color-primary)",
        textColor: "var(--color-primary)",
        reverse: false,
    },
    {
        number: "02",
        icon: "query_stats",
        title: "Financial Rigor",
        description:
            "Profitability is not an accident; it's a design choice. We dive deep into your P&L, COGS, and labor models to ensure your growth is mathematically sound and professionally resilient.",
        stat: { label: "Average Margin Increase", value: "+24%", width: "74%" },
        bg: "#ffffff",
        iconBg: "#c6d2ff",
        iconColor: "#1D3B91",
        textColor: "var(--color-primary)",
        reverse: true,
    },
    {
        number: "03",
        icon: "psychology",
        title: "Strategic Mentorship",
        description:
            "We bridge the gap between being a coffee enthusiast and a market leader. Our mentorship focuses on leadership development, brand storytelling, and high-end hospitality standards.",
        quote: `"The most successful cafés aren't just selling coffee — they're selling an architectural experience of time."`,
        gridItems: [
            { icon: "groups", label: "Culture Design" },
            { icon: "auto_awesome", label: "Experience Quality" },
            { icon: "record_voice_over", label: "Brand Voice" },
            { icon: "map", label: "Market Positioning" },
        ],
        bg: "var(--color-primary)",
        iconBg: "var(--color-accent)",
        iconColor: "var(--color-primary)",
        textColor: "white",
        reverse: false,
    },
] as const;

export default function PillarsPage() {
    return (
        <main>
            <Navigation />

            {/* ── Hero ── */}
            <section className="container page-hero" style={{ paddingBottom: "2rem" }}>
                <div
                    className="grid gap-12"
                    style={{ gridTemplateColumns: "1fr", paddingBottom: "3rem" }}
                >
                    <div style={{ maxWidth: "640px" }}>
                        <span className="page-label">Our Methodology</span>
                        <h1
                            className="text-display-md"
                            style={{ color: "var(--color-primary)", lineHeight: 1.1 }}
                        >
                            The Three Pillars of{" "}
                            <span className="lora-quote" style={{ color: "var(--color-secondary)", fontWeight: 400, fontSize: "inherit" }}>
                                Sustainable Growth
                            </span>
                        </h1>
                    </div>
                    <div
                        style={{
                            borderLeft: "3px solid var(--color-accent)",
                            paddingLeft: "1.5rem",
                            maxWidth: "520px",
                        }}
                    >
                        <p className="text-body-lg">
                            A structured approach to coffee business excellence, blending architectural precision with deep industry mentorship.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Pillar Rows ── */}
            {PILLARS.map((pillar, index) => (
                <section
                    key={pillar.number}
                    style={{
                        backgroundColor: pillar.bg,
                        padding: "5rem 0",
                        borderTop: index === 0 ? "none" : "1px solid rgba(29,59,145,0.06)",
                    }}
                >
                    <div className="container">
                        <div
                            className="grid gap-12"
                            style={{
                                gridTemplateColumns: "1fr",
                                alignItems: "center",
                            }}
                        >
                            {/* Content */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <div
                                    style={{
                                        width: "3.5rem",
                                        height: "3.5rem",
                                        background: pillar.iconBg,
                                        borderRadius: "0.75rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <span className="material-symbols-outlined" style={{ color: pillar.iconColor, fontSize: "1.75rem" }}>
                                        {pillar.icon}
                                    </span>
                                </div>

                                <div>
                                    <span
                                        className="page-label"
                                        style={{ color: pillar.textColor === "white" ? "rgba(255,255,255,0.5)" : undefined }}
                                    >
                                        Pillar {pillar.number}
                                    </span>
                                    <h2
                                        className="text-h2"
                                        style={{ color: pillar.textColor, marginBottom: "1rem" }}
                                    >
                                        {pillar.title}
                                    </h2>
                                    <p
                                        className="text-body-lg"
                                        style={{
                                            color: pillar.textColor === "white" ? "rgba(255,255,255,0.75)" : "var(--color-text-muted)",
                                        }}
                                    >
                                        {pillar.description}
                                    </p>
                                </div>

                                {/* Bullet points */}
                                {"points" in pillar && pillar.points && (
                                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem" }}>
                                        {pillar.points.map((pt) => (
                                            <li
                                                key={pt}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.75rem",
                                                    color: pillar.textColor,
                                                    fontFamily: "var(--font-display)",
                                                    fontWeight: 600,
                                                    fontSize: "0.9rem",
                                                }}
                                            >
                                                <span className="material-symbols-outlined" style={{ color: "var(--color-accent)", fontSize: "1.2rem" }}>check_circle</span>
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Stat bar */}
                                {"stat" in pillar && pillar.stat && (
                                    <div
                                        style={{
                                            background: "white",
                                            borderRadius: "var(--radius-sm)",
                                            padding: "1.25rem 1.5rem",
                                            boxShadow: "0 2px 8px rgba(29,59,145,0.06)",
                                        }}
                                    >
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                                            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-primary)" }}>
                                                {pillar.stat.label}
                                            </span>
                                            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-primary)" }}>
                                                {pillar.stat.value}
                                            </span>
                                        </div>
                                        <div style={{ width: "100%", height: "6px", background: "#e5eeff", borderRadius: "999px", overflow: "hidden" }}>
                                            <div style={{ width: pillar.stat.width, height: "100%", background: "var(--color-accent)", borderRadius: "999px" }} />
                                        </div>
                                    </div>
                                )}

                                {/* Quote */}
                                {"quote" in pillar && pillar.quote && (
                                    <blockquote
                                        className="lora-quote"
                                        style={{
                                            fontSize: "1.25rem",
                                            color: "var(--color-accent)",
                                            marginTop: "0.5rem",
                                        }}
                                    >
                                        {pillar.quote}
                                        <cite style={{ display: "block", marginTop: "0.5rem", fontStyle: "normal", fontFamily: "var(--font-display)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.6, color: "white" }}>
                                            — John Salde
                                        </cite>
                                    </blockquote>
                                )}

                                {/* Mentorship grid */}
                                {"gridItems" in pillar && pillar.gridItems && (
                                    <div className="grid gap-4 md:grid-cols-2" style={{ marginTop: "0.5rem" }}>
                                        {pillar.gridItems.map((item) => (
                                            <div
                                                key={item.icon}
                                                style={{
                                                    background: "rgba(255,255,255,0.1)",
                                                    borderRadius: "var(--radius-sm)",
                                                    padding: "1.25rem",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    textAlign: "center",
                                                    gap: "0.5rem",
                                                }}
                                            >
                                                <span className="material-symbols-outlined" style={{ color: "var(--color-accent)", fontSize: "2rem" }}>{item.icon}</span>
                                                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "white" }}>
                                                    {item.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* ── CTA ── */}
            <section className="section" style={{ backgroundColor: "#f8f9ff" }}>
                <div className="container">
                    <div
                        style={{
                            background: "#e5eeff",
                            borderRadius: "var(--radius-lg)",
                            padding: "5rem 3rem",
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "-4rem",
                                right: "-4rem",
                                width: "16rem",
                                height: "16rem",
                                background: "rgba(198,224,61,0.2)",
                                borderRadius: "50%",
                                filter: "blur(40px)",
                            }}
                        />
                        <h2 className="text-h2" style={{ color: "var(--color-primary)", marginBottom: "1.25rem" }}>
                            Ready to build your foundation?
                        </h2>
                        <p className="text-body-lg" style={{ maxWidth: "520px", margin: "0 auto 2.5rem" }}>
                            Every consultation starts with a deep dive into your current metrics and a vision for your structural potential.
                        </p>
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/consultation" className="btn btn-primary">Book a Discovery Call</Link>
                            <Link href="/portfolio" className="btn btn-secondary">View Case Studies</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
