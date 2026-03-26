import SectionReveal from "./SectionReveal";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const SERVICES = [
    {
        title: "Coffee & Food Business Consulting",
        pill: "Concept to Scale",
        description: "End-to-end consulting for café concept development, coffee program design, menu engineering, and robust barista training systems.",
        outcomes: ["Profit-optimized menus", "Calibrated brewing standards", "Scalable cafe concepts"]
    },
    {
        title: "Systems & Operations Development",
        pill: "Operational Flow",
        description: "Data-driven development of standard operating procedures, POS integrations, CRM systems, and workflow optimizations that automate busywork.",
        outcomes: ["Frictionless operations", "Automated inventory tracking", "Maximized staff efficiency"]
    },
    {
        title: "Digital Marketing for Brands",
        pill: "Visibility Systems",
        description: "Strategic brand positioning, social media strategy, and local marketing visibility systems designed to draw consistent, high-value foot traffic.",
        outcomes: ["Targeted foot traffic", "Distinct brand positioning", "Predictable revenue streams"]
    }
];

export default function SectionServices() {
    return (
        <section id="services" className="section" style={{ backgroundColor: '#f0f6ff', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>

            {/* ── Premium Background ── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                {/* Base gradient */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(160deg, #eaf2ff 0%, #f4f8ff 40%, #eef3ff 100%)'
                }} />
                {/* Dot grid */}
                <div className="bg-layer bg-dot-grid" />
                {/* Cobalt glow – top-left */}
                <div style={{
                    position: 'absolute',
                    top: '-15%', left: '-5%', width: '50%', height: '70%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)',
                    filter: 'blur(80px)'
                }} />
                {/* Lime accent glow – bottom-right */}
                <div style={{
                    position: 'absolute',
                    bottom: '-15%', right: '-5%', width: '45%', height: '60%',
                    background: 'radial-gradient(circle, rgba(198,224,61,0.07), transparent 65%)',
                    filter: 'blur(80px)'
                }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <SectionReveal>
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            fontWeight: 600,
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.75rem',
                        }}>Core Consulting Pillars</p>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                            color: 'var(--color-primary)',
                            letterSpacing: '-0.01em',
                            lineHeight: 1.2,
                        }}>
                            Methodical Approaches for <br />Sustainable Growth
                        </h2>
                    </div>
                </SectionReveal>

                <div className="services-grid" style={{
                    display: 'grid',
                    gap: '2rem',
                    alignItems: 'stretch',
                }}>
                    {SERVICES.map((s, idx) => (
                        <div key={idx} style={{ height: '100%' }}>
                            <ServiceCard
                                title={s.title}
                                pill={s.pill}
                                description={s.description}
                                outcomes={s.outcomes}
                                delay={idx * 200}
                            />
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link href="/pillars" className="section-cta-btn" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.85rem 2rem',
                        background: 'var(--color-primary)',
                        color: 'white',
                        borderRadius: '999px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        textDecoration: 'none',
                        boxShadow: '0 8px 24px rgba(29,59,145,0.2)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    >
                        View Core Pillars
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                </div>
            </div>

            {/* Responsive: stack on mobile */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .services-grid {
                    grid-template-columns: 1fr;
                }
                @media (min-width: 640px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (min-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                @media (max-width: 639px) {
                    #services {
                        padding: 4rem 0;
                    }
                    .service-card {
                        padding: 1.75rem !important;
                    }
                }
                .section-cta-btn:hover {
                    transform: scale(1.04);
                }
                `
            }} />
        </section>
    );
}
