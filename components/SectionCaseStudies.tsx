import SectionReveal from "./SectionReveal";

export default function SectionCaseStudies() {
    return (
        <section id="case-studies" className="section" style={{ padding: '8rem 0', backgroundColor: 'var(--color-primary)', color: 'white' }}>
            <div className="container">
                <SectionReveal>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '4rem' }}>
                        <p className="text-accent" style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>Featured Case Study</p>
                        <div className="grid md:grid-cols-2 gap-8 items-end">
                            <h2 className="text-display-lg" style={{ fontFamily: 'var(--font-playfair)', lineHeight: 1.1, color: 'white' }}>
                                Carmen's<br />Garden Cafe
                            </h2>
                            <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.85)', paddingBottom: '0.5rem' }}>
                                A transformative engagement involving full business operations management, rebranding, digital presence scale-up, POS implementation, and strategic growth planning.
                            </p>
                        </div>
                    </div>
                </SectionReveal>

                <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                    <SectionReveal delay={200}>
                        <div style={{ borderLeft: '2px solid rgba(198, 224, 61, 0.5)', paddingLeft: '1.5rem' }}>
                            <h3 className="text-h3" style={{ fontFamily: 'var(--font-playfair)', color: 'white', marginBottom: '1rem' }}>
                                <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>01.</span> Challenge
                            </h3>
                            <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                                Inconsistent guest experiences, fragmented digital presence, and lack of standardized POS and operational systems hindered scalability and visibility.
                            </p>
                        </div>
                    </SectionReveal>

                    <SectionReveal delay={400}>
                        <div style={{ borderLeft: '2px solid rgba(198, 224, 61, 0.5)', paddingLeft: '1.5rem' }}>
                            <h3 className="text-h3" style={{ fontFamily: 'var(--font-playfair)', color: 'white', marginBottom: '1rem' }}>
                                <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>02.</span> Intervention
                            </h3>
                            <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                                Full operational takeover. Developed new strict adherence SOPs, integrated modern POS and inventory systems, executed a complete brand refresh, and established a digital content engine.
                            </p>
                        </div>
                    </SectionReveal>

                    <SectionReveal delay={600}>
                        <div style={{ borderLeft: '2px solid rgba(198, 224, 61, 1)', paddingLeft: '1.5rem', backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '4px' }}>
                            <h3 className="text-h3" style={{ fontFamily: 'var(--font-playfair)', color: 'white', marginBottom: '1.5rem' }}>
                                <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}>03.</span> Impact
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'white' }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>→</span>
                                    <span style={{ lineHeight: 1.5 }}>Stabilized, highly predictable revenue operations</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>→</span>
                                    <span style={{ lineHeight: 1.5 }}>Data-driven menu profitability insights via POS</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>→</span>
                                    <span style={{ lineHeight: 1.5 }}>Dominant local digital footprint and engagement</span>
                                </li>
                            </ul>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}
