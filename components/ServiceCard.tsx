import { Check } from "lucide-react";
import SectionReveal from "./SectionReveal";

interface ServiceCardProps {
    title: string;
    pill: string;
    description: string;
    outcomes: string[];
    delay?: number;
}

export default function ServiceCard({ title, pill, description, outcomes, delay = 0 }: ServiceCardProps) {
    return (
        <SectionReveal delay={delay} className="h-full">
            <div
                className="service-card"
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(135deg, #1D3B91 0%, #0F2560 100%)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '1rem',
                    padding: '2.5rem',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                {/* Pill Badge */}
                <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        backgroundColor: 'rgba(198, 224, 61, 0.15)',
                        color: 'var(--color-accent)',
                        fontFamily: 'var(--font-accent)',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        borderRadius: '999px',
                    }}>
                        {pill}
                    </span>
                </div>

                {/* Title & Description */}
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: 'clamp(1.35rem, 2vw, 1.75rem)',
                        fontWeight: 600,
                        color: 'white',
                        marginBottom: '1rem',
                        lineHeight: 1.25,
                    }}>
                        {title}
                    </h3>
                    <p style={{
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                    }}>
                        {description}
                    </p>
                </div>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="service-card-btn"
                    style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'center',
                        padding: '0.85rem 1.5rem',
                        background: 'linear-gradient(135deg, rgba(198, 224, 61, 0.2) 0%, rgba(198, 224, 61, 0.1) 100%)',
                        color: 'var(--color-accent)',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(198, 224, 61, 0.3)',
                        textDecoration: 'none',
                        letterSpacing: '0.02em',
                        transition: 'all 0.3s ease',
                        marginBottom: '2rem',
                    }}
                >
                    Learn More
                </a>

                {/* Outcomes Checklist */}
                <div>
                    <p style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '1rem',
                    }}>
                        Key Outcomes
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {outcomes.map((outcome, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Check size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>{outcome}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .service-card:hover {
                        transform: translateY(-8px) scale(1.02);
                        box-shadow: 0 20px 60px rgba(29,59,145,0.35) !important;
                        border-color: rgba(198, 224, 61, 0.25) !important;
                    }
                    .service-card-btn:hover {
                        background: linear-gradient(135deg, rgba(198, 224, 61, 0.35) 0%, rgba(198, 224, 61, 0.2) 100%) !important;
                        border-color: rgba(198, 224, 61, 0.5) !important;
                    }
                    `
                }} />
            </div>
        </SectionReveal>
    );
}
