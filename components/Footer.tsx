"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section" style={{ paddingBottom: '3rem', paddingTop: '4rem', color: 'white', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #1D3B91 0%, #152d70 50%, #0e1d4e 100%)' }}>

            {/* ── Premium Background ── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                {/* Dot grid (white on dark) */}
                <div className="bg-layer bg-dot-grid-dark" />
                {/* Lime accent glow – top-right */}
                <div style={{
                    position: 'absolute',
                    top: '-20%', right: '-5%', width: '45%', height: '60%',
                    background: 'radial-gradient(circle, rgba(198,224,61,0.06), transparent 65%)',
                    filter: 'blur(80px)'
                }} />
                {/* Noise texture */}
                <div className="bg-layer bg-noise-dark" />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ alignItems: 'start' }}>
                    {/* Column 1: logo + tagline */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                        <Link href="/">
                            <img
                                src="/images/logo/logo%20footer.png"
                                alt="John Salde Consulting"
                                style={{ width: 'auto', maxWidth: '320px', height: 'auto', display: 'block', borderRadius: '4px' }}
                            />
                        </Link>
                        <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '400px', margin: 0, fontSize: '0.9rem' }}>
                            When Passion Meets Execution. I help coffee and food business owners transform passion into profitable, scalable operations.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <h4 style={{ color: 'var(--color-accent)', margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                                { label: "Philosophy", href: "/philosophy" },
                                { label: "Pillars", href: "/pillars" },
                                { label: "Expertise", href: "/expertise" },
                                { label: "Portfolio", href: "/portfolio" },
                                { label: "Process", href: "/process" },
                                { label: "Consultation Form", href: "/consultation" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        color: 'rgba(255,255,255,0.7)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        transition: 'color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Contact */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <h4 style={{ color: 'var(--color-accent)', margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact &amp; Discovery</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a href="mailto:thejohnsalde@gmail.com" className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline', fontSize: '0.9rem' }}>
                                thejohnsalde@gmail.com
                            </a>
                            <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '0.9rem' }}>
                                Mindanao, Philippines
                            </p>
                        </div>
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
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>
                        &copy; {currentYear} John Salde Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
