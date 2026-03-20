import SectionReveal from "./SectionReveal";

export default function SectionPhilosophy() {
    return (
        <section id="philosophy" className="section bg-primary" style={{ padding: '8rem 0' }}>
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
                                In an industry filled with trend-chasers, the most sustainable brands are built on operational excellence, clear standard operating procedures, and rigorous financial logic. We focus purely on profitability, workflow optimization, and scalable brand authority.
                            </p>
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
                                src="/images/js-nb.png"
                                alt="John Salde - Business Consultant"
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
                `
            }} />
        </section>
    );
}
