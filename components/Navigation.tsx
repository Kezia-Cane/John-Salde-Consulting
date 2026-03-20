"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Philosophy", href: "/philosophy" },
    { label: "Pillars", href: "/pillars" },
    { label: "Expertise", href: "/expertise" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
];

// scrolled = compact white-glass logo-only pill
// default  = full dark pill with all links
type ScrollState = "default" | "scrolled";

export default function Navigation() {
    const [scrollState, setScrollState] = useState<ScrollState>("default");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const prev = lastScrollY.current;

                    if (currentScrollY < 80) {
                        // Always default at the top
                        setScrollState("default");
                    } else if (currentScrollY > prev + 3) {
                        // Scrolling DOWN anywhere - show compact
                        setScrollState("scrolled");
                    } else if (currentScrollY < prev - 3) {
                        // Scrolling UP anywhere - restore full pill
                        setScrollState("default");
                    }

                    lastScrollY.current = currentScrollY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isScrolled = scrollState === "scrolled";

    return (
        <>
            {/* - Floating pill wrapper - always visible, never hides - */}
            <div
                className={`nav-pill-wrapper${isScrolled ? " is-scrolled" : ""}`}
                style={{
                    position: "fixed",
                    top: "1.25rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 50,
                    willChange: "transform",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "999px",
                        overflow: "hidden",
                        // Glassmorphism background using translucent brand navy
                        background: "rgba(29, 59, 145, 0.45)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        boxShadow: isScrolled
                            ? "0 10px 40px rgba(0,0,0,0.35)"
                            : "0 8px 32px rgba(0,0,0,0.28)",
                        transition: "box-shadow 0.2s ease, padding 0.22s ease, height 0.2s ease",
                        // No padding when scrolled - image fills pill edge-to-edge
                        padding: isScrolled ? "0" : "0.45rem 0.45rem",
                        // Fixed height when scrolled keeps the pill compact
                        height: isScrolled ? "56px" : "auto",
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    {/* - Circle Logo - visible only in default state - */}
                    <a
                        href="/"
                        aria-label="Home"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            // Width collapses to 0 when scrolled
                            width: isScrolled ? "0px" : "46px",
                            height: isScrolled ? "0px" : "46px",
                            minWidth: isScrolled ? "0" : "46px",
                            borderRadius: "50%",
                            background: "white",
                            flexShrink: 0,
                            marginRight: isScrolled ? "0" : "0.75rem",
                            overflow: "hidden",
                            cursor: "pointer",
                            opacity: isScrolled ? 0 : 1,
                            pointerEvents: isScrolled ? "none" : "auto",
                            transition: "width 0.22s ease, height 0.22s ease, min-width 0.22s ease, margin 0.22s ease, opacity 0.18s ease",
                        }}
                    >
                        <img
                            src="/images/logo/logo%20navbar%20circle3.png"
                            alt="John Salde Consulting"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "50%",
                                display: "block",
                                flexShrink: 0,
                            }}
                        />
                    </a>

                    <a
                        href="/"
                        aria-label="Home"
                        style={{
                            display: isScrolled ? "flex" : "none",
                            alignItems: "stretch",
                            justifyContent: "center",
                            // Fill the entire pill - no clipping, no gaps
                            flex: isScrolled ? "1" : "0",
                            alignSelf: "stretch",
                            overflow: "hidden",
                            cursor: "pointer",
                            opacity: isScrolled ? 1 : 0,
                            transition: "opacity 0.18s ease",
                        }}
                    >
                        <img
                            src="/images/logo/logo%20navbar2.png"
                            alt="John Salde Consulting"
                            style={{
                                height: "100%",
                                width: "auto",
                                objectFit: "contain",
                                objectPosition: "center",
                                display: "block",
                                borderRadius: "0",
                                maxHeight: "56px",
                            }}
                        />
                    </a>

                    {/* ── Desktop Nav Links - collapse when scrolled ── */}
                    <nav
                        className="pill-nav"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.1rem",
                            overflow: "hidden",
                            maxWidth: isScrolled ? "0" : "600px",
                            opacity: isScrolled ? 0 : 1,
                            pointerEvents: isScrolled ? "none" : "auto",
                            transition: "max-width 0.22s ease, opacity 0.18s ease",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="pill-link"
                                style={{
                                    color: "rgba(255,255,255,0.82)",
                                    fontSize: "0.78rem",
                                    fontWeight: 600,
                                    fontFamily: "var(--font-display)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                    padding: "0.5rem 0.85rem",
                                    borderRadius: "999px",
                                    whiteSpace: "nowrap",
                                    cursor: "pointer",
                                    transition: "color 0.15s ease, background 0.15s ease",
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* ── CTA Button - collapse when scrolled ── */}
                    <a
                        href="/consultation"
                        className="pill-cta"
                        style={{
                            background: "white",
                            color: "var(--color-primary)",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            fontFamily: "var(--font-display)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            padding: "0.5rem 1.25rem",
                            borderRadius: "999px",
                            whiteSpace: "nowrap",
                            cursor: "pointer",
                            flexShrink: 0,
                            overflow: "hidden",
                            maxWidth: isScrolled ? "0" : "180px",
                            marginLeft: isScrolled ? "0" : "0.5rem",
                            paddingLeft: isScrolled ? "0" : "1.25rem",
                            paddingRight: isScrolled ? "0" : "1.25rem",
                            opacity: isScrolled ? 0 : 1,
                            pointerEvents: isScrolled ? "none" : "auto",
                            transition: "max-width 0.22s ease, margin 0.22s ease, padding 0.22s ease, opacity 0.18s ease, background 0.15s ease",
                        }}
                    >
                        Consultation
                    </a>

                    {/* ── Mobile Hamburger ── */}
                    <button
                        className="pill-hamburger"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                        style={{
                            display: "none",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "0.5rem",
                            padding: "0.4rem",
                            color: "white",
                            cursor: "pointer",
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.1)",
                            width: "36px",
                            height: "36px",
                            flexShrink: 0,
                            transition: "color 0.2s ease, background 0.2s ease",
                        }}
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </div>

            {/* ── Mobile Full-Screen Drawer ── */}
            <div
                style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "var(--color-primary)",
                    zIndex: 100,
                    transform: mobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
                    transition: "transform 0.38s cubic-bezier(0.85, 0, 0.15, 1)",
                    display: "flex",
                    flexDirection: "column",
                    padding: "1.75rem 2rem",
                }
                }
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ height: "32px" }}>
                        <img
                            src="/images/logo/logo%20navbar2.png"
                            alt="John Salde Consulting"
                            style={{
                                height: "100%",
                                width: "auto",
                                filter: "brightness(0) invert(1)",
                                borderRadius: "0",
                                display: "block",
                            }}
                        />
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            padding: "0.5rem",
                            color: "white",
                            cursor: "pointer",
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.1)",
                        }}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    marginTop: "4rem",
                    alignItems: "center",
                }}>
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-h2"
                            style={{
                                color: "white",
                                opacity: 0.9,
                                fontFamily: "var(--font-display)",
                                fontWeight: 600,
                                letterSpacing: "0.02em",
                                cursor: "pointer",
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/consultation"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            marginTop: "1rem",
                            background: "var(--color-accent)",
                            color: "var(--color-primary)",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            fontFamily: "var(--font-display)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            padding: "0.85rem 2.5rem",
                            borderRadius: "999px",
                            cursor: "pointer",
                        }}
                    >
                        Consultation
                    </a>
                </nav>
            </div>

            {/* ── Scoped Styles ── */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .pill-link:hover {
                    color: rgba(255,255,255,1) !important;
                    background: rgba(255,255,255,0.10) !important;
                }
                .pill-cta:hover {
                    background: #f2f2f2 !important;
                    transform: translateY(-1px);
                }
                /* Mobile layout - pill stretches edge-to-edge with margin */
                @media (max-width: 767px) {
                    .pill-nav { display: none !important; }
                    .pill-cta { display: none !important; }
                    /* Hide hamburger when scrolled - logo fills pill alone */
                    .pill-hamburger { display: flex !important; }
                    .nav-pill-wrapper.is-scrolled .pill-hamburger { display: none !important; }
                    /* Make the fixed wrapper span the mobile viewport */
                    .nav-pill-wrapper {
                        left: 1rem !important;
                        right: 1rem !important;
                        transform: none !important;
                        width: calc(100vw - 2rem) !important;
                        max-width: none !important;
                    }
                    /* Default state: pill fills full width, logo left + hamburger right */
                    .nav-pill-wrapper > div {
                        width: 100%;
                        justify-content: space-between;
                    }
                    /* Scrolled state: pill shrinks to fit logo, centered */
                    .nav-pill-wrapper.is-scrolled {
                        left: 50% !important;
                        right: auto !important;
                        transform: translateX(-50%) !important;
                        width: auto !important;
                    }
                    .nav-pill-wrapper.is-scrolled > div {
                        justify-content: center;
                    }
                }
                @media (prefers-reduced-motion: reduce) {
                    * { transition-duration: 0ms !important; }
                }
            `}} />
        </>
    );
}
