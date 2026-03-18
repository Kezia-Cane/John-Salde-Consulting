import SectionReveal from "./SectionReveal";

const TESTIMONIALS = [
    {
        quote: "John's systems thinking completely transformed our workflow. We cut wait times by 40% while improving consistency across all shifts.",
        name: "Carmen's Garden Cafe",
        role: "Management Team"
    },
    {
        quote: "The menu engineering strategies implemented by John Salde Consulting immediately impacted our bottom line. Highly methodical and data-driven.",
        name: "The Ritz Hotel",
        role: "F&B Director"
    },
    {
        quote: "From concept to daily operations, their expertise was invaluable. The barista training program alone paid for itself in the first month.",
        name: "Inherent Coffee",
        role: "Founder"
    }
];

export default function SectionTestimonials() {
    return (
        <section id="testimonials" className="section bg-surface">
            <div className="container">
                <SectionReveal>
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
                        <p className="text-accent" style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>Client Feedback</p>
                        <h2 className="text-h2" style={{ fontFamily: 'var(--font-playfair)' }}>What Our Partners Say</h2>
                    </div>
                </SectionReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, idx) => (
                        <SectionReveal key={idx} delay={idx * 200}>
                            <div style={{
                                backgroundColor: 'white',
                                padding: '2.5rem',
                                border: '1px solid rgba(0,0,0,0.05)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1.5rem', opacity: 0.2 }}>
                                    <path d="M10 11L8 15H11V19H5V15L7 11H5V7H10V11ZM20 11L18 15H21V19H15V15L17 11H15V7H20V11Z" fill="var(--color-primary)" />
                                </svg>

                                <p className="text-body-lg" style={{ color: 'var(--color-text-main)', fontStyle: 'italic', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                                    "{t.quote}"
                                </p>

                                <div>
                                    <p style={{ fontWeight: 600, color: 'var(--color-primary)', fontFamily: 'var(--font-playfair)', fontSize: '1.125rem' }}>{t.name}</p>
                                    <p className="text-xs" style={{ color: 'var(--color-text-muted)', marginTop: '0.25rem', fontFamily: 'var(--font-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.role}</p>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
