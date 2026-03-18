import SectionReveal from "./SectionReveal";

const PROCESS_STEPS = [
    { step: "01", name: "Discovery", desc: "Deep-dive audit of current operations, financials, and brand positioning." },
    { step: "02", name: "Diagnosis", desc: "Data-driven gap analysis identifying profit leaks and operational friction." },
    { step: "03", name: "Systems Design", desc: "Custom standard operating procedures, menu engineering, and workflow mapping." },
    { step: "04", name: "Implementation", desc: "Tactical rollout including staff training, POS setup, and systems launch." },
    { step: "05", name: "Performance", desc: "Ongoing calibration, KPI tracking, and sustained operational growth." }
];

export default function SectionProcess() {
    return (
        <section id="process" className="section" style={{ padding: '8rem 0' }}>
            <div className="container">
                <SectionReveal>
                    <div style={{ maxWidth: '700px', marginBottom: '4rem' }}>
                        <p className="text-accent" style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>Methodology</p>
                        <h2 className="text-h2" style={{ fontFamily: 'var(--font-playfair)' }}>The 5-Step Consulting Process</h2>
                    </div>
                </SectionReveal>

                <div style={{ position: 'relative' }}>
                    {/* Connecting line for desktop */}
                    <div className="md-flex absolute-line" style={{ position: 'absolute', top: '24px', left: 0, right: 0, height: '1px', backgroundColor: 'var(--color-accent)', zIndex: 1, display: 'none' }} />

                    <div className="grid md:grid-cols-5 gap-8 gap-y-12 relative z-10">
                        {PROCESS_STEPS.map((p, idx) => (
                            <SectionReveal key={idx} delay={idx * 150}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{
                                        width: '48px', height: '48px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-surface)',
                                        border: '1px solid var(--color-accent)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        marginBottom: '1.5rem',
                                        color: 'var(--color-primary)',
                                        fontFamily: 'var(--font-accent)',
                                        fontWeight: 600,
                                        position: 'relative',
                                        zIndex: 2,
                                        boxShadow: '0 0 0 8px var(--color-background)' // creates negative space over the line
                                    }}>
                                        {p.step}
                                    </div>
                                    <h3 className="text-h3" style={{ marginBottom: '1rem', fontFamily: 'var(--font-playfair)', fontSize: '1.25rem', color: 'var(--color-primary)' }}>{p.name}</h3>
                                    <p className="text-body-md" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        @media(min-width: 768px) { .md-flex { display: block !important; } }
      `}} />
        </section>
    );
}
