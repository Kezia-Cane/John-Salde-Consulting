"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const NAV_LINKS = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Experience", href: "/experience" },
    { label: "Work", href: "/work" },
    { label: "How It Works", href: "/how-it-works" },
];

const MOBILE_NAV_QUERY = "(max-width: 767px)";

// scrolled = compact white-glass logo-only pill
// default  = full dark pill with all links
type ScrollState = "default" | "scrolled";

export default function Navigation() {
    const [scrollState, setScrollState] = useState<ScrollState>("default");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobileViewport, setIsMobileViewport] = useState(false);
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

    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_NAV_QUERY);

        const syncViewportState = (event?: MediaQueryListEvent) => {
            const matches = event?.matches ?? mediaQuery.matches;
            setIsMobileViewport(matches);

            if (!matches) {
                setMobileMenuOpen(false);
            }
        };

        syncViewportState();

        mediaQuery.addEventListener("change", syncViewportState);
        return () => mediaQuery.removeEventListener("change", syncViewportState);
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
                    <Link
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
                    </Link>

                    <Link
                        href="/consultation"
                        aria-label="Available for Consultation"
                        className="consultation-pulse-pill"
                        style={{
                            display: isScrolled ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            // Fill the entire pill - no clipping, no gaps
                            flex: isScrolled ? "1" : "0",
                            padding: "0 1.5rem",
                            margin: "4px", // slight margin inside the nav pill
                            borderRadius: "999px",
                            alignSelf: "stretch",
                            overflow: "hidden",
                            cursor: "pointer",
                            opacity: isScrolled ? 1 : 0,
                            textDecoration: "none",
                            transition: "opacity 0.18s ease",
                        }}
                    >
                        <span style={{
                            display: "inline-block",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#C6E03D",
                            boxShadow: "0 0 0 0 rgba(198, 224, 61, 0.7)",
                            animation: "pulse-green 1s infinite"
                        }} />
                        <span style={{
                            color: "white",
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            whiteSpace: "nowrap"
                        }}>
                            Available for Consultation
                        </span>
                    </Link>

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
                            <Link
                                key={link.label}
                                href={link.href}
                                className="pill-link"
                                data-text={link.label}
                            >
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* ── CTA Button - collapse when scrolled ── */}
                    <div
                        className="pill-cta"
                        style={{
                            overflow: "visible",
                            maxWidth: isScrolled ? "0" : "260px",
                            marginLeft: isScrolled ? "0" : "0.75rem",
                            opacity: isScrolled ? 0 : 1,
                            pointerEvents: isScrolled ? "none" : "auto",
                            transition: "max-width 0.22s ease, margin 0.22s ease, opacity 0.18s ease",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <AnimatedButton href="/consultation" text1="Consultation" />
                    </div>

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
                            width: "48px",
                            height: "48px",
                            flexShrink: 0,
                            transition: "color 0.2s ease, background 0.2s ease",
                        }}
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </div>

            {/* ── Mobile Full-Screen Drawer ── */}
            {isMobileViewport && mobileMenuOpen ? (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "var(--color-primary)",
                        zIndex: 100,
                        transform: "translateY(0)",
                        transition: "transform 0.38s cubic-bezier(0.85, 0, 0.15, 1)",
                        display: "flex",
                        flexDirection: "column",
                        padding: "1.75rem 2rem",
                        overflowY: "auto",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ height: "36px", width: "36px", borderRadius: "50%", background: "white", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src="/images/logo/logo%20navbar%20circle3.png"
                                alt="John Salde Consulting"
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
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
                                minWidth: "48px",
                                minHeight: "48px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
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
                            <Link
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
                            </Link>
                        ))}
                        <div onClick={() => setMobileMenuOpen(false)} style={{ marginTop: "1rem" }}>
                            <AnimatedButton href="/consultation" text1="Consultation" />
                        </div>
                    </nav>
                </div>
            ) : null}

            {/* ── Scoped Styles ── */}
            <style suppressHydrationWarning dangerouslySetInnerHTML={{
                __html: `
                .pill-link {
                    position: relative;
                    color: var(--color-accent) !important;
                    font-size: 0.78rem;
                    font-weight: 600;
                    font-family: var(--font-display);
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    padding: 0.5rem 0.85rem;
                    border-radius: 999px;
                    white-space: nowrap;
                    cursor: pointer;
                    overflow: hidden;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.3s ease;
                }
                .consultation-pulse-pill {
                    animation: pulse-border 1.5s infinite;
                    border: 1px solid rgba(198, 224, 61, 0.5);
                }
                
                @keyframes pulse-border {
                    0% { box-shadow: 0 0 0 0 rgba(198, 224, 61, 0.4); border-color: rgba(198, 224, 61, 0.8); }
                    70% { box-shadow: 0 0 0 10px rgba(198, 224, 61, 0); border-color: rgba(198, 224, 61, 0.2); }
                    100% { box-shadow: 0 0 0 0 rgba(198, 224, 61, 0); border-color: rgba(198, 224, 61, 0.8); }
                }

                @keyframes pulse-green {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(198, 224, 61, 0.9); }
                    70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(198, 224, 61, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(198, 224, 61, 0); }
                }
                .pill-link > span {
                    display: inline-block;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
                }
                .pill-link::after {
                    content: attr(data-text);
                    position: absolute;
                    left: 0;
                    top: 100%;
                    width: 100%;
                    text-align: center;
                    color: white;
                    padding: 0.5rem 0.85rem;
                    box-sizing: border-box;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    text-shadow: 0 0 10px rgba(198,224,61,0.6);
                }
                .pill-link:hover {
                    color: rgba(255,255,255,1) !important;
                    background: rgba(255,255,255,0.05) !important;
                }
                .pill-link:hover > span {
                    transform: translateY(-150%);
                    opacity: 0;
                }
                .pill-link:hover::after {
                    transform: translateY(-100%);
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
