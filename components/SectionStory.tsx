"use client"

import React, { useRef } from 'react'
import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate,
} from 'framer-motion'
import { TrendingUp, Laptop, Settings } from 'lucide-react'
import SectionReveal from './SectionReveal'
import FluidExpandingGrid from './ui/fluid-expanding-grid'

const SECTION_HEIGHT = 4500 // Extended scroll track for smoother pacing and full image travel

export default function SectionStory() {
    return (
        <section style={{ backgroundColor: 'var(--color-primary)' }}>
            <StoryHero />
            <StoryContent />
        </section>
    )
}

const StoryHero = () => {
    // The main container provides the track length (height) for the sticky element inside.
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })

    return (
        <div
            ref={containerRef}
            style={{
                height: `${SECTION_HEIGHT}px`,
                position: 'relative',
                width: '100%'
            }}
        >
            <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}>
                <CenterImage scrollYProgress={scrollYProgress} />
                <NarrativeOverlay scrollYProgress={scrollYProgress} />
                <ParallaxImages scrollYProgress={scrollYProgress} />

                {/* Dark overlay for text contrast - active during Phase 2 */}
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 60%)',
                        zIndex: 5,
                        opacity: useTransform(scrollYProgress, [0.25, 0.4, 0.75, 0.85], [0, 1, 1, 0])
                    }}
                />

                {/* Gradient transition to the content below */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '24rem',
                        background: 'linear-gradient(to bottom, transparent, var(--color-primary))',
                        pointerEvents: 'none',
                        zIndex: 20
                    }}
                />
            </div>
        </div>
    )
}

const CenterImage = ({ scrollYProgress }: { scrollYProgress: any }) => {
    // Phase 1: Expansion (0.0 -> 0.25)
    const clip1 = useTransform(scrollYProgress, [0, 0.25], [25, 0])
    const clip2 = useTransform(scrollYProgress, [0, 0.25], [75, 100])
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`

    const backgroundSize = useTransform(
        scrollYProgress,
        [0, 0.3],
        ['170%', '100%']
    )
    // Fades out into pure navy blue background before the sticky track exits
    const opacity = useTransform(
        scrollYProgress,
        [0.85, 0.95],
        [1, 0]
    )

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage: 'url("/images/storymain.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 0
            }}
        />
    )
}

const NarrativeOverlay = ({ scrollYProgress }: { scrollYProgress: any }) => {
    // Phase 2: Narrative Text Fade-In (0.25 -> 0.45)
    const opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.7, 0.8], [0, 1, 1, 0])
    const x = useTransform(scrollYProgress, [0.25, 0.4], [-80, 0])

    return (
        <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 15,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
                <motion.div style={{ opacity, x, maxWidth: '420px' }}>
                    <h3 style={{
                        fontFamily: 'var(--font-playfair)',
                        color: 'var(--color-accent)',
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        textShadow: '0 10px 30px rgba(0,0,0,0.8)'
                    }}>
                        6 Years <br />of Mastery
                    </h3>
                    <p style={{
                        color: 'white',
                        fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                        lineHeight: 1.5,
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 500,
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                    }}>
                        20+ Cafés Served. <br />
                        From operational chaos to <br />
                        scalable business systems.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

const parallaxData = [
    {
        src: "/images/Gemini_Generated_Image_80mlo80mlo80mlo8.png",
        alt: "Coffee Business Expertise",
        left: "38%",
        top: "10%",
        width: '22%',
        startProgress: 0.42,
        endProgress: 0.75,
        yStart: "80vh",
        yEnd: "-20vh"
    },
    {
        src: "/images/Gemini_Generated_Image_ee7cvee7cvee7cve.png",
        alt: "John Salde Business Consultant",
        left: "50%",
        top: "15%",
        width: '24%',
        startProgress: 0.55,
        endProgress: 0.88,
        yStart: "85vh",
        yEnd: "-15vh"
    },
    {
        src: "/images/Gemini_Generated_Image_benlmbbenlmbbenl.png",
        alt: "Digital Marketing Strategy",
        right: "1%",
        top: "-5%",
        width: '22%',
        startProgress: 0.42,
        endProgress: 0.75,
        yStart: "80vh",
        yEnd: "-20vh"
    }
]

const ParallaxImages = ({ scrollYProgress }: { scrollYProgress: any }) => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, pointerEvents: 'none' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', height: '100%' }}>
                {parallaxData.map((item, i) => (
                    <ParallaxImg key={i} scrollYProgress={scrollYProgress} {...item} />
                ))}
            </div>
        </div>
    )
}

const ParallaxImg = ({
    alt,
    src,
    left,
    right,
    top,
    width,
    startProgress,
    endProgress,
    yStart,
    yEnd,
    scrollYProgress
}: any) => {
    const y = useTransform(scrollYProgress, [startProgress, endProgress], [yStart, yEnd])
    // Combined fade and slide for better flow
    const opacity = useTransform(
        scrollYProgress,
        [startProgress, startProgress + 0.1, endProgress - 0.1, endProgress],
        [0, 1, 1, 0]
    )
    const scale = useTransform(scrollYProgress, [startProgress, endProgress], [1.05, 0.95])

    return (
        <motion.img
            src={src}
            alt={alt}
            style={{
                position: 'absolute',
                left,
                right,
                top,
                width,
                transform: useMotionTemplate`translateY(${y}) scale(${scale})`,
                opacity,
                display: 'block',
                borderRadius: '1.5rem',
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8)',
                objectFit: 'cover'
            }}
        />
    )
}

/* ─────────────── Story Content Block ─────────────── */

const StoryContent = () => {
    return (
        <div
            style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "3rem 1.5rem 4rem",
                textAlign: "center",
                position: "relative",
                zIndex: 20,
            }}
        >
            <SectionReveal>
                <p
                    style={{
                        color: "var(--color-accent)",
                        marginBottom: "0.5rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 600,
                        fontFamily: "var(--font-accent)",
                        fontSize: "0.75rem",
                    }}
                >
                    The Evolution
                </p>
                <h2
                    style={{
                        fontFamily: "var(--font-playfair)",
                        color: "white",
                        marginBottom: "1rem",
                        fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.15,
                    }}
                >
                    From Cafe{" "}
                    <span style={{ color: "var(--color-accent)" }}>Dominance</span> to{" "}
                    Full-Scale{" "}
                    <span style={{ color: "var(--color-accent)" }}>
                        Business Mastery
                    </span>
                </h2>
                <p
                    style={{
                        lineHeight: 1.7,
                        marginBottom: "2rem",
                        maxWidth: "700px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "0.95rem",
                    }}
                >
                    It all started with 6 years of mastery in café operations. Today, as Mindanao’s leading coffee business consultant, I have expanded into comprehensive service pillars to drive total revenue success for over 20+ clients.
                </p>
            </SectionReveal>

            <SectionReveal delay={200}>
                <FluidExpandingGrid className="mt-4" />
            </SectionReveal>
        </div>
    )
}
