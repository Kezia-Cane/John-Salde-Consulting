import SectionReveal from "./SectionReveal";
import Link from "next/link";

export default function SectionPhilosophy() {
    return (
        <section id="philosophy" className="section" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0e1d4e 0%, #1D3B91 55%, #1a47a8 100%)' }}>

            {/* ── Premium Background ── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                {/* Cobalt radial glow – top-right */}
                <div style={{
                    position: 'absolute',
                    top: '-20%', right: '-10%', width: '60%', height: '80%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.35), transparent 65%)',
                    filter: 'blur(100px)'
                }} />
                {/* Lime accent glow – bottom-left (subtle) */}
                <div style={{
                    position: 'absolute',
                    bottom: '-15%', left: '-5%', width: '45%', height: '55%',
                    background: 'radial-gradient(circle, rgba(198,224,61,0.07), transparent 65%)',
                    filter: 'blur(80px)'
                }} />
                {/* Diagonal lines */}
                <div className="bg-layer bg-diagonal-lines" />
                {/* Organic dark curves */}
                <div className="bg-layer bg-curves" />
                {/* Noise texture */}
                <div className="bg-layer bg-noise-dark" />
            </div>
            <div className="container">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4rem',
                }}>
                    {/* Left: Text Content */}
                    <div style={{
                        flex: '1 1 55%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}>
                        <SectionReveal>
                            <p className="text-accent" style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>My Consulting Philosophy</p>
                        </SectionReveal>

                        <SectionReveal delay={200}>
                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                color: 'white',
                                lineHeight: 1.2,
                                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                                letterSpacing: '-0.02em',
                                fontWeight: 600,
                            }}>
                                &ldquo;Growth requires{" "}
                                <i style={{ fontStyle: 'italic', color: 'var(--color-accent)', fontWeight: 400, fontFamily: 'var(--font-accent)' }}>
                                    systems thinking
                                </i>
                                ,{" "}not just hype.&rdquo;
                            </h2>
                        </SectionReveal>

                        <SectionReveal delay={400}>
                            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-accent)' }} />
                        </SectionReveal>

                        <SectionReveal delay={500}>
                            <p style={{
                                color: 'rgba(255,255,255,0.85)',
                                lineHeight: 1.8,
                                fontSize: '1.05rem',
                                maxWidth: '540px'
                            }}>
                                In an industry filled with trend-chasers, the most sustainable brands are built on operational excellence, clear standard operating procedures, and rigorous financial logic. I focus purely on profitability, workflow optimization, and scalable brand authority.
                            </p>
                        </SectionReveal>
                        <SectionReveal delay={700}>
                            <Link href="/about" className="section-cta-btn" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginTop: '0.5rem',
                                padding: '0.85rem 2rem',
                                background: 'var(--color-accent)',
                                color: 'var(--color-primary)',
                                borderRadius: '999px',
                                fontFamily: 'var(--font-display)',
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                textDecoration: 'none',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                boxShadow: '0 8px 24px rgba(198,224,61,0.35)',
                            }}
                            >
                                Explore My Philosophy
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </Link>
                        </SectionReveal>
                    </div>

                    {/* Right: Image */}
                    <SectionReveal delay={300}>
                        <div style={{
                            flex: '1 1 40%',
                            position: 'relative',
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            aspectRatio: '3 / 4',
                            maxHeight: '520px',
                        }}>
                            <img
                                src="/images/new%20hero/Testimonial.png"
                                alt="Client Testimonial"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            {/* Subtle accent border glow */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '1.5rem',
                                border: '1px solid rgba(198, 224, 61, 0.15)',
                                pointerEvents: 'none',
                            }} />
                        </div>
                    </SectionReveal>
                </div>
            </div>

            {/* Responsive: stack on mobile */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    #philosophy .container > div {
                        flex-direction: column !important;
                        text-align: center;
                    }
                    #philosophy .container > div > div:last-child {
                        max-width: 320px;
                        margin: 0 auto;
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
