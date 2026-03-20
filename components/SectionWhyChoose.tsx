import SectionReveal from "./SectionReveal";

export default function SectionWhyChoose() {
    return (
        <section id="why-choose" className="section bg-surface">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <SectionReveal>
                        <div style={{ position: 'relative', padding: '2rem 0', paddingLeft: '2rem' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--color-accent)' }} />
                            <h2 className="text-display-md" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)', lineHeight: 1.15 }}>
                                Consulting <span style={{ color: 'var(--color-accent)' }}>+</span><br />
                                Systems <span style={{ color: 'var(--color-accent)' }}>+</span><br />
                                Marketing
                            </h2>
                        </div>
                    </SectionReveal>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        <SectionReveal delay={200}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <h3 className="text-h3" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>The Triple-Threat Advantage</h3>
                                <p className="text-body-md" style={{ lineHeight: 1.7 }}>
                                    Most consultants give you a report and leave. Marketing agencies run ads but don't understand your kitchen workflow. We integrate top-tier strategy, precise operational systems, and performance marketing simultaneously.
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={300}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <h3 className="text-h3" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>Execution Over Theory</h3>
                                <p className="text-body-md" style={{ lineHeight: 1.7 }}>
                                    We are operators at heart. Every system we deploy is reality-tested in high-volume, dynamic hospitality environments across Mindanao before it ever reaches your business.
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={400}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <h3 className="text-h3" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>End-to-End Partnership</h3>
                                <p className="text-body-md" style={{ lineHeight: 1.7 }}>
                                    From standardizing your espresso extraction to optimizing your POS hierarchy and launching a hyper-local customer acquisition campaign—we are your dedicated growth partners.
                                </p>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
