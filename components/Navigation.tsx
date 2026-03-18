"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Pillars", href: "#services" },
    { label: "Expertise", href: "#expertise" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0,
                    zIndex: 50,
                    transition: 'all 0.3s ease',
                    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                    boxShadow: isScrolled ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    padding: isScrolled ? '1rem 0' : '1.5rem 0'
                }}
            >
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo element */}
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <span style={{
                            fontFamily: 'var(--font-playfair)',
                            fontWeight: 700,
                            fontSize: '1.25rem',
                            color: isScrolled ? 'var(--color-primary)' : 'white',
                            letterSpacing: '-0.02em',
                            textTransform: 'uppercase',
                            transition: 'color 0.3s ease'
                        }}>
                            John Salde Consulting
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav
                        className="md-nav"
                        style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-accent hover-link"
                                style={{
                                    color: isScrolled ? 'var(--color-text-main)' : 'rgba(255,255,255,0.9)',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    transition: 'color 0.2s ease'
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href="#contact" className="btn btn-primary" style={{ marginLeft: '1rem', minHeight: '40px', padding: '0 1.5rem' }}>
                            Consultation
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(true)}
                        style={{
                            padding: '0.25rem',
                            color: isScrolled ? 'var(--color-primary)' : 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'color 0.3s ease'
                        }}
                        aria-label="Open menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            <div
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-background)',
                    zIndex: 100,
                    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                    transition: 'transform 0.4s cubic-bezier(0.85, 0, 0.15, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2rem'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ padding: '0.5rem', color: 'white' }}
                        aria-label="Close menu"
                    >
                        <X size={32} />
                    </button>
                </div>

                <nav style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem',
                    marginTop: '4rem',
                    alignItems: 'center'
                }}>
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-h2"
                            style={{
                                color: 'white',
                                opacity: 0.9,
                                fontFamily: 'var(--font-playfair)'
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="btn"
                        style={{
                            marginTop: '2rem',
                            width: '100%',
                            maxWidth: '300px',
                            backgroundColor: 'var(--color-accent)',
                            color: 'var(--color-primary)'
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Book Consultation
                    </a>
                </nav>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .md-nav { display: none !important; }
        .hover-link:hover { opacity: 0.7; }
        @media (min-width: 768px) {
          .md-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}} />
        </>
    );
}
