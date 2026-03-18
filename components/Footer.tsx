export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section" style={{ paddingBottom: '3rem', paddingTop: '4rem', backgroundColor: 'var(--color-primary)', color: 'white' }}>
            <div className="container">
                <div className="grid gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    <div className="flex-col gap-6" style={{ display: 'flex' }}>
                        <h3 className="text-h3" style={{ fontFamily: 'var(--font-playfair)', color: 'white' }}>John Salde Consulting</h3>
                        <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '400px' }}>
                            When Passion Meets Execution. We help coffee and food business owners transform passion into profitable, scalable operations.
                        </p>
                    </div>

                    <div className="flex-col gap-4" style={{ display: 'flex' }}>
                        <h4 className="text-accent" style={{ color: 'var(--color-accent)' }}>Contact & Discovery</h4>
                        <a href="mailto:hello@johnsalde.com" className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>
                            hello@johnsalde.com
                        </a>
                        <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)' }}>
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
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        System Architecture by Kezia
                    </p>
                </div>
            </div>
        </footer>
    );
}
