import SectionReveal from "./SectionReveal";

export default function SectionCTA() {
    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>

            {/* Background accents */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '70%', height: '90%', background: 'radial-gradient(circle, rgba(198, 224, 61, 0.2), transparent 70%)', filter: 'blur(80px)' }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2.5rem'
                }}>
                    <SectionReveal>
                        <h2 className="text-display-lg" style={{ fontFamily: 'var(--font-playfair)', color: 'white', lineHeight: 1.1 }}>
                            Ready to scale your <br className="md-hidden" />
                            <span style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 500 }}>passion</span>?
                        </h2>
                    </SectionReveal>

                    <SectionReveal delay={200}>
                        <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, maxWidth: '600px' }}>
                            Partner with John Salde Consulting to audit your operations, build robust systems, and accelerate your growth strategy.
                        </p>
                    </SectionReveal>

                    <SectionReveal delay={400}>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                            <a href="mailto:hello@johnsalde.com" className="btn btn-primary" style={{ padding: '0 3rem', minHeight: '56px', fontSize: '1rem' }}>
                                Book a Discovery Session
                            </a>
                        </div>
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', marginTop: '2rem', fontFamily: 'var(--font-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Strictly limited client capacity per quarter
                        </p>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}
