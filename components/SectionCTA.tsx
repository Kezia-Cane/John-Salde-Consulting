import SectionReveal from "./SectionReveal";
import AnimatedButton from "./AnimatedButton";

export default function SectionCTA() {
    return (
        <section id="contact" className="section" style={{ color: 'white', padding: '8rem 0', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0c1a52 0%, #1D3B91 40%, #1e50c3 100%)' }}>

            {/* ── Premium Background ── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
                {/* Cobalt glow – top-right */}
                <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '70%', height: '90%', background: 'radial-gradient(circle, rgba(37,99,235,0.35), transparent 65%)', filter: 'blur(90px)' }} />
                {/* Lime glow – bottom-left (CTA punch) */}
                <div style={{ position: 'absolute', bottom: '-20%', left: '-8%', width: '60%', height: '80%', background: 'radial-gradient(circle, rgba(198,224,61,0.22), transparent 60%)', filter: 'blur(80px)' }} />
                {/* Espresso ripple rings – centered */}
                <div className="bg-layer bg-ripple-rings" />
                {/* Diagonal lines */}
                <div className="bg-layer bg-diagonal-lines" />
                {/* Noise texture */}
                <div className="bg-layer bg-noise-dark" />
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
                        <h2 className="text-display-lg" style={{ fontFamily: 'var(--font-display)', color: 'white', lineHeight: 1.1, fontWeight: 700 }}>
                            Ready to scale your <br className="md-hidden" />
                            <span style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-accent)' }}>passion</span>?
                        </h2>
                    </SectionReveal>

                    <SectionReveal delay={200}>
                        <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, maxWidth: '600px' }}>
                            Partner with John Salde Consulting to audit your operations, build robust systems, and accelerate your growth strategy.
                        </p>
                    </SectionReveal>

                    <SectionReveal delay={400}>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
                            <AnimatedButton href="mailto:hello@johnsalde.com" text1="Discovery Session" text2="Booking..." />
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
