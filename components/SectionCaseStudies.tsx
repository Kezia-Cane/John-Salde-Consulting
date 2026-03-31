import Image from "next/image";
import SectionReveal from "./SectionReveal";
import Link from "next/link";

export default function SectionCaseStudies() {
    return (
        <section id="case-studies" className="section" style={{ padding: '8rem 0', color: 'white', position: 'relative', overflow: 'hidden', background: 'linear-gradient(150deg, #0b1840 0%, #1D3B91 50%, #172f7a 100%)' }}>

            {/* ── Premium Background ── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                {/* Cobalt glow – top-right */}
                <div style={{
                    position: 'absolute',
                    top: '-15%', right: '-5%', width: '55%', height: '65%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.28), transparent 65%)',
                    filter: 'blur(100px)'
                }} />
                {/* Lime glow – bottom-left */}
                <div style={{
                    position: 'absolute',
                    bottom: '-10%', left: '-5%', width: '45%', height: '55%',
                    background: 'radial-gradient(circle, rgba(198,224,61,0.09), transparent 65%)',
                    filter: 'blur(90px)'
                }} />
                {/* Organic curves */}
                <div className="bg-layer bg-curves" />
                {/* Noise texture */}
                <div className="bg-layer bg-noise-dark" />
            </div>
            <div className="container">
                <SectionReveal>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '4rem' }}>
                        <p className="text-accent" style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>Featured Case Study</p>

                        <div className="grid md:grid-cols-2 gap-8" style={{ alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{
                                    position: 'relative',
                                    width: '100px',
                                    height: '100px',
                                    flexShrink: 0,
                                    margin: '2rem 4rem 2rem 2rem', /* Generous margins to safely hold the 2.0 scaled image without overlapping */
                                    zIndex: 10
                                }}>
                                    <Image
                                        src="/images/portfolio/blob%20(7).png"
                                        alt="Logo"
                                        fill
                                        style={{ objectFit: 'contain', transform: 'scale(2.0)' }}
                                    />
                                </div>
                                <h2 className="text-display-md" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1, color: 'white', margin: 0, position: 'relative', zIndex: 20 }}>
                                    Garden Oases Resort /<br />The Ritz Hotel
                                </h2>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                                    A major hospitality partner focusing on high-end dining and resort services. I work directly with their purchasing and dining supervisors to ensure premium standards.
                                </p>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <p style={{ color: 'var(--color-accent)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>Operational Focus:</p>
                                    <ul style={{ color: 'rgba(255,255,255,0.85)', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ color: 'var(--color-accent)' }}>✓</span> Coffee Business Development</li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ color: 'var(--color-accent)' }}>✓</span> Barista Training &amp; Standardization</li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ color: 'var(--color-accent)' }}>✓</span> Menu Engineering</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionReveal>

                <div className="grid md:grid-cols-2 gap-12" style={{ alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        <SectionReveal delay={200}>
                            <div style={{ borderLeft: '2px solid rgba(198, 224, 61, 0.5)', paddingLeft: '1.5rem' }}>
                                <h3 className="text-h3" style={{ fontFamily: 'var(--font-display)', color: 'white', marginBottom: '1rem' }}>
                                    <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>01.</span> Challenge
                                </h3>
                                <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                                    Inconsistent beverage quality, unstandardized barista workflows, and a menu structure that did not reflect the premium positioning of the resort, leading to missed revenue opportunities.
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={400}>
                            <div style={{ borderLeft: '2px solid rgba(198, 224, 61, 0.5)', paddingLeft: '1.5rem' }}>
                                <h3 className="text-h3" style={{ fontFamily: 'var(--font-display)', color: 'white', marginBottom: '1rem' }}>
                                    <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>02.</span> Intervention
                                </h3>
                                <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                                    Comprehensive coffee business development. I executed rigorous barista masterclasses, established strict beverage SOPs, and completely re-engineered the menu to align with high-end standards.
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={600}>
                            <div style={{ borderLeft: '2px solid rgba(198, 224, 61, 1)', paddingLeft: '1.5rem', backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '4px' }}>
                                <h3 className="text-h3" style={{ fontFamily: 'var(--font-display)', color: 'white', marginBottom: '1.5rem' }}>
                                    <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>03.</span> Impact
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'white' }}>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>→</span>
                                        <span style={{ lineHeight: 1.5 }}>Elevated guest dining experiences with premium coffee offerings</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>→</span>
                                        <span style={{ lineHeight: 1.5 }}>Highly standardized and efficient barista operations</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>→</span>
                                        <span style={{ lineHeight: 1.5 }}>Increased menu profitability through strategic engineering</span>
                                    </li>
                                </ul>
                            </div>
                        </SectionReveal>
                    </div>

                    <div style={{ width: '100%' }}>
                        <SectionReveal delay={800}>
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                paddingBottom: '133%', /* 3/4 aspect ratio */
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}>
                                <Image
                                    src="/images/portfolio/blob.png"
                                    alt="Garden Oases Resort Portrait"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', pointerEvents: 'none' }}></div>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem', position: 'relative', zIndex: 2 }}>
                <Link href="/work" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
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
                    boxShadow: '0 8px 24px rgba(198,224,61,0.3)',
                    transition: 'transform 0.2s ease',
                }}>
                    View Full Portfolio
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
            </div>
        </section>
    );
}
