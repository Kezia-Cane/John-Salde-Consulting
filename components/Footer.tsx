export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section" style={{ paddingBottom: '3rem', paddingTop: '4rem', backgroundColor: 'var(--color-primary)', color: 'white' }}>
            <div className="container">
                <div className="grid gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'start' }}>
                    {/* Left col: logo + tagline */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                        <img
                            src="/images/logo/logo%20footer.png"
                            alt="John Salde Consulting"
                            style={{ width: 'auto', maxWidth: '400px', height: 'auto', display: 'block', borderRadius: '4px' }}
                        />
                        <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '400px', margin: 0 }}>
                            When Passion Meets Execution. We help coffee and food business owners transform passion into profitable, scalable operations.
                        </p>
                    </div>

                    {/* Right col: contact */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                        <h4 className="text-accent" style={{ color: 'var(--color-accent)', margin: 0 }}>Contact &amp; Discovery</h4>
                        <a href="mailto:thejohnsalde@gmail.com" className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>
                            thejohnsalde@gmail.com
                        </a>
                        <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                            Mindanao, Philippines
                        </p>
                    </div>
                </div>

                <div style={{
                    marginTop: '4rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        &copy; {currentYear} John Salde Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
