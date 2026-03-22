import SectionReveal from "./SectionReveal";

export default function SectionWhyChoose() {
    return (
        <section id="why-choose" className="section bg-surface" style={{ position: 'relative', overflow: 'hidden' }}>

            {/* ── Premium Background ── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                {/* Diagonal gradient: soft blue tint → white */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(145deg, #eef4ff 0%, #f8fafc 50%, #ffffff 100%)'
                }} />
                {/* Dot grid pattern */}
                <div className="bg-layer bg-dot-grid" />
                {/* Cobalt glow – top right */}
                <div style={{
                    position: 'absolute',
                    top: '-20%', right: '-10%', width: '55%', height: '70%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.09), transparent 65%)',
                    filter: 'blur(80px)'
                }} />
                {/* Light organic curves */}
                <div className="bg-layer bg-curves-light" />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
                                    Most consultants give you a report and leave. Marketing agencies run ads but don't understand your kitchen workflow. I integrate top-tier strategy, precise operational systems, and performance marketing simultaneously.
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={300}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <h3 className="text-h3" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>Execution Over Theory</h3>
                                <p className="text-body-md" style={{ lineHeight: 1.7 }}>
                                    I am an operator at heart. Every system I deploy is reality-tested in high-volume, dynamic hospitality environments across Mindanao before it ever reaches your business.
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={400}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <h3 className="text-h3" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>End-to-End Partnership</h3>
                                <p className="text-body-md" style={{ lineHeight: 1.7 }}>
                                    From standardizing your espresso extraction to optimizing your POS hierarchy and launching a hyper-local customer acquisition campaign-I am your dedicated growth partner.
                                </p>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
