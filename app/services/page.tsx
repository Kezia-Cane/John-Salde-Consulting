import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedButton from '@/components/AnimatedButton';
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services | John Salde Consulting",
    description:
        "Explore the core services John Salde Consulting provides for café and food businesses.",
};

const PILLARS = [
    {
        number: "01",
        icon: "campaign",
        title: "Digital Marketing",
        description:
            "Not just generic 'social media posting' or basic ads. I engineer customer acquisition systems and brand positioning specifically designed for cafés, driving local market dominance in the Mindanao context. Every campaign strategy is tied directly to actual sales.",
        points: ["Customer acquisition systems", "Brand positioning for cafés", "Local market dominance (Mindanao)", "Campaign strategy tied to actual sales"],
        bg: "#eef4ff",
        iconBg: "var(--color-accent)",
        iconColor: "var(--color-primary)",
        textColor: "var(--color-primary)",
        reverse: false,
    },
    {
        number: "02",
        icon: "local_cafe",
        title: "Operations",
        description:
            "Focusing on real café execution grounded in actual café environments. From initial workflow design to daily operational control, I ensure your service remains highly consistent while maximizing your menu profitability.",
        points: ["Workflow design", "Staff roles and training", "Service consistency", "Menu profitability", "Daily operational control"],
        bg: "#ffffff",
        iconBg: "#c6d2ff",
        iconColor: "#1D3B91",
        textColor: "var(--color-primary)",
        reverse: true,
    },
    {
        number: "03",
        icon: "account_tree",
        title: "Systems",
        description:
            "This is the backbone of your business. I implement robust digital workflows designed for repeatability and scalability, ensuring your café operates seamlessly across all fronts without manual bottlenecks.",
        points: ["POS systems", "CRM systems", "Inventory tracking", "Automation workflows", "Reporting dashboards"],
        bg: "var(--color-primary)",
        iconBg: "var(--color-accent)",
        iconColor: "var(--color-primary)",
        textColor: "white",
        reverse: false,
    },
] as const;

export default function ServicesPage() {
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
                    src="/images/heroes pages/pillars.jpeg"
                    alt="Pillars background"
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
                        background: "linear-gradient(to bottom, rgba(29,59,145,0.3) 0%, rgba(29,59,145,0.65) 50%, rgba(29,59,145,0.92) 100%)",
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
                    }}
                >
                    <div style={{ maxWidth: "640px" }}>
                        <span className="page-label" style={{ color: "var(--color-accent)" }}>Services</span>
                        <h1
                            className="text-display-md"
                            style={{ color: "white", lineHeight: 1.1, textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
                        >
                            Three Core{" "}
                            <span className="lora-quote" style={{ color: "var(--color-accent)", fontWeight: 400, fontSize: "inherit" }}>
                                Services
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
                        <p className="text-body-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
                            A clear, practical approach to building a strong and profitable café business.
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
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* ── Premium Background ── */}
                    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                        {pillar.bg === 'var(--color-primary)' ? (
                            <>
                                <div className="bg-layer bg-noise-dark" />
                                <div className="bg-layer bg-diagonal-lines" style={{ opacity: 0.5 }} />
                                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '50%', height: '70%', background: 'radial-gradient(circle, rgba(198,224,61,0.08), transparent 65%)', filter: 'blur(80px)' }} />
                            </>
                        ) : (
                            <>
                                <div className="bg-layer bg-line-grid" style={{ opacity: pillar.bg === '#ffffff' ? 0.3 : 0.6 }} />
                                <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(37,99,235,0.04), transparent 65%)', filter: 'blur(80px)' }} />
                            </>
                        )}
                    </div>

                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
                                        Service {pillar.number}
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


                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* ── Synergy Section ── */}
            <section className="section" style={{ backgroundColor: "#ffffff", padding: "6rem 0", position: 'relative', overflow: 'hidden' }}>
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                    <div className="bg-layer bg-dot-grid" style={{ opacity: 0.2 }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(198,224,61,0.08), transparent 70%)', filter: 'blur(80px)' }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "3.5rem", color: "var(--color-primary)", marginBottom: "1.5rem", display: "block" }}>all_inclusive</span>
                        <h2 className="text-h2" style={{ color: "var(--color-primary)", marginBottom: "1.25rem" }}>
                            How It Works
                        </h2>
                        <div className="accent-bar" style={{ margin: "0 auto 1.5rem" }} />
                        <p className="text-body-lg" style={{ color: "#334155", fontWeight: 500, marginBottom: "1.5rem" }}>
                            Strong results come from these three services working together.
                        </p>
                        <p className="text-body-md" style={{ color: "var(--color-text-muted)" }}>
                            <strong>Digital Marketing</strong> brings customers in. <strong>Operations</strong> delivers a consistent experience. <strong>Systems</strong> make it repeatable and scalable.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ padding: "0 0 5rem" }}>
                <div className="container">
                    <div
                        style={{
                            background: "linear-gradient(135deg, #0e1d4e 0%, #1D3B91 40%, #1e50c3 100%)",
                            borderRadius: "var(--radius-lg)",
                            padding: "4rem",
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden",
                            boxShadow: "0 20px 40px rgba(29,59,145,0.15)",
                        }}
                    >
                        {/* ── CTA Background ── */}
                        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                            <div className="bg-layer bg-noise-dark" />
                            <div className="bg-layer bg-ripple-rings" style={{ opacity: 0.6 }} />
                            <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '50%', height: '80%', background: 'radial-gradient(circle, rgba(198,224,61,0.15), transparent 70%)', filter: 'blur(60px)' }} />
                            <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60%', height: '80%', background: 'radial-gradient(circle, rgba(37,99,235,0.4), transparent 70%)', filter: 'blur(80px)' }} />
                        </div>

                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h2 className="text-h2" style={{ color: "white", marginBottom: "1.25rem" }}>
                                Ready to build your foundation?
                            </h2>
                            <p className="text-body-lg" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
                                Every consultation starts with a deep dive into your current metrics and a vision for your structural potential.
                            </p>
                            <div className="services-cta-actions" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                                <AnimatedButton href="/consultation" text1="Book a Discovery Call" className="services-cta-primary" />
                                <Link href="/work" className="btn btn-secondary services-cta-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>View Work</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <style dangerouslySetInnerHTML={{
                __html: `
                .services-cta-actions .services-cta-secondary {
                    min-width: 210px;
                    text-align: center;
                }

                @media (max-width: 640px) {
                    .services-cta-actions {
                        flex-direction: column;
                        align-items: center;
                        gap: 0.75rem;
                    }
                    .services-cta-actions .services-cta-primary,
                    .services-cta-actions .services-cta-secondary {
                        width: 100%;
                        max-width: 260px;
                    }
                    .services-cta-actions .services-cta-primary.button {
                        padding-inline: 1.1rem;
                        padding-block: 0.5rem;
                        font-size: 0.72rem;
                        letter-spacing: 0.06em;
                        gap: 0.5rem;
                        border-width: 2px;
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
                    }
                    .services-cta-actions .services-cta-primary.button .icon {
                        width: 26px;
                        height: 26px;
                    }
                    .services-cta-actions .services-cta-secondary.btn {
                        padding: 0.65rem 1.1rem;
                        font-size: 0.75rem;
                        letter-spacing: 0.06em;
                    }
                }
                `
            }} />
        </main>
    );
}
