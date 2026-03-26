import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedButton from '@/components/AnimatedButton';
import Link from "next/link";
import ClientGrid from "@/components/ClientGrid";

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
                        <span className="page-label" style={{ color: "var(--color-accent)" }}>Proven Success</span>
                        <h1
                            className="text-display-md"
                            style={{ color: "white", lineHeight: 1.1, marginBottom: "1.5rem", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
                        >
                            Building Growth with Smart Strategies.
                        </h1>
                        <p className="text-body-lg" style={{ maxWidth: "580px", color: "rgba(255,255,255,0.85)" }}>
                            Explore my portfolio of success stories. For cafes and coffee businesses, I apply a proven method focused on smooth operations and growing profits.
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
                            &ldquo;A good strategy isn't just a plan on paper; it's about getting better every single day.&rdquo;
                        </p>
                    </div>
                </div>
            </section>


            {/* ── Client Portfolio Grid ── */}
            <section style={{ paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #f4f8ff 0%, #ffffff 100%)' }} />
                    <div className="bg-layer bg-line-grid" style={{ opacity: 0.5 }} />
                    <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(198,224,61,0.05), transparent 70%)', filter: 'blur(80px)' }} />
                </div>
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ marginBottom: "3rem", textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>

                    </div>

                    <ClientGrid />
                </div>
            </section>

            {/* ── Aggregate Impact Stats (Navy) ── */}
            <section style={{ background: "var(--color-primary)", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
                {/* ── Premium Background ── */}
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0e1d4e 0%, #1D3B91 100%)' }} />
                    <div className="bg-layer bg-noise-dark" />
                    <div className="bg-layer bg-diagonal-lines" style={{ opacity: 0.4 }} />
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '60%', height: '80%', background: 'radial-gradient(circle, rgba(198,224,61,0.1), transparent 60%)', filter: 'blur(80px)' }} />
                    <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: '50%', height: '70%', background: 'radial-gradient(circle, rgba(37,99,235,0.3), transparent 70%)', filter: 'blur(80px)' }} />
                </div>
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
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
            <section className="section" style={{ position: "relative", overflow: "hidden", backgroundColor: "#ffffff" }}>
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div style={{ position: 'absolute', top: '50%', right: '-10%', width: '50%', height: '80%', background: 'radial-gradient(circle, rgba(37,99,235,0.04), transparent 70%)', filter: 'blur(80px)' }} />
                    <div className="bg-layer bg-dot-grid" style={{ opacity: 0.3 }} />
                </div>
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
                        <h2 className="text-h2" style={{ color: "var(--color-primary)" }}>Active Engagements</h2>
                        <p className="text-body-lg" style={{ maxWidth: "480px" }}>
                            Here are the exciting new projects I am currently working on.
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-2">
                        {[
                            { icon: "storefront", title: "High-End Cafe Launch (Surigao)", desc: "Managing the entire cafe structure from scratch using my complete Full-Stack Pillars service. Launching soon!", status: "In Progress" },
                            { icon: "hotel", title: "High-End Hotel & Resort (Hinatuan, Surigao)", desc: "Full rebranding, setting up a hotel management system, and building a booking website utilizing 2 pillars of my services. Coming soon!", status: "In Progress" },
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
                        <AnimatedButton href="/consultation" text1="Book a Discovery Call" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
