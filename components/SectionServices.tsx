import SectionReveal from "./SectionReveal";
import ServiceCard from "./ServiceCard";

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
        <section id="services" className="section" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 0' }}>
            <div className="container">
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

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
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
            </div>

            {/* Responsive: stack on mobile */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    #services .container > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
                `
            }} />
        </section>
    );
}
