"use client"

import React, { useEffect, useRef, useState } from 'react'
import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate,
    type MotionValue,
} from 'framer-motion'
import SectionReveal from './SectionReveal'
import FluidExpandingGrid from './ui/fluid-expanding-grid'
import styles from './SectionStory.module.css'

const DESKTOP_SECTION_HEIGHT = 5200
const MOBILE_SECTION_HEIGHT = 7800 // Give the final mobile image more dwell time before the next section takes over

type ScrollProgressProps = {
    scrollYProgress: MotionValue<number>
}

type NarrativeOverlayProps = ScrollProgressProps & {
    isMobile: boolean
}

type ParallaxImageConfig = {
    src: string
    alt: string
    className: string
    zIndex: number
    startProgress: number
    endProgress: number
    yStart: string
    yEnd: string
}

type ParallaxImageProps = ScrollProgressProps & ParallaxImageConfig

export default function SectionStory() {
    return (
        <section style={{ backgroundColor: 'var(--color-primary)' }}>
            <StoryHero />
            <StoryContent />
        </section>
    )
}

const StoryHero = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)')
        const updateViewport = () => setIsMobile(mediaQuery.matches)

        updateViewport()
        mediaQuery.addEventListener('change', updateViewport)

        return () => mediaQuery.removeEventListener('change', updateViewport)
    }, [])

    // The main container provides the track length (height) for the sticky element inside.
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
    const sectionHeight = isMobile ? MOBILE_SECTION_HEIGHT : DESKTOP_SECTION_HEIGHT

    return (
        <div
            ref={containerRef}
            style={{
                height: `${sectionHeight}px`,
                position: 'relative',
                width: '100%'
            }}
        >
            <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden', zIndex: 40 }}>
                <CenterImage scrollYProgress={scrollYProgress} />
                <NarrativeOverlay scrollYProgress={scrollYProgress} isMobile={isMobile} />
                <ParallaxImages scrollYProgress={scrollYProgress} isMobile={isMobile} />

                {/* Dark overlay for text contrast - active during Phase 2 */}
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 60%)',
                        zIndex: 18,
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
                        zIndex: 22
                    }}
                />
            </div>
        </div>
    )
}

const CenterImage = ({ scrollYProgress }: ScrollProgressProps) => {
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
                backgroundImage: 'url("/images/new%20hero/js8.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 0
            }}
        />
    )
}

const NarrativeOverlay = ({ scrollYProgress, isMobile }: NarrativeOverlayProps) => {
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
            <div className={styles.narrativeShell}>
                <motion.div className={styles.narrativeContent} style={{ opacity, x }}>
                    <h3 style={{
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-accent)',
                        fontSize: isMobile ? 'clamp(3.5rem, 14vw, 5rem)' : 'clamp(3rem, 5vw, 4.5rem)',
                        marginBottom: isMobile ? '1rem' : '1.5rem',
                        lineHeight: 1.1,
                        fontWeight: 700,
                        textShadow: '0 10px 30px rgba(0,0,0,0.8)'
                    }}>
                        6 Years <br />of Mastery
                    </h3>
                    <p style={{
                        color: 'white',
                        fontSize: isMobile ? 'clamp(1.35rem, 5vw, 1.75rem)' : 'clamp(1.25rem, 2vw, 1.75rem)',
                        lineHeight: 1.5,
                        fontFamily: 'var(--font-body)',
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

const desktopParallaxData = [
    {
        src: "/images/new%20hero/js3.png",
        alt: "Coffee Business Expertise",
        className: styles.parallaxOne,
        zIndex: 30,
        startProgress: 0.38,
        endProgress: 0.54,
        yStart: "80vh",
        yEnd: "-20vh"
    },
    {
        src: "/images/new%20hero/js4.png",
        alt: "John Salde Business Consultant",
        className: styles.parallaxTwo,
        zIndex: 31,
        startProgress: 0.56,
        endProgress: 0.72,
        yStart: "85vh",
        yEnd: "-15vh"
    },
    {
        src: "/images/new%20hero/js6.png",
        alt: "Digital Marketing Strategy",
        className: styles.parallaxThree,
        zIndex: 32,
        startProgress: 0.74,
        endProgress: 0.9,
        yStart: "80vh",
        yEnd: "-20vh"
    }
]

const mobileParallaxData = [
    {
        src: "/images/new%20hero/js3.png",
        alt: "Coffee Business Expertise",
        className: styles.parallaxOne,
        zIndex: 80,
        startProgress: 0.42,
        endProgress: 0.62,
        yStart: "100vh",
        yEnd: "-18vh"
    },
    {
        src: "/images/new%20hero/js4.png",
        alt: "John Salde Business Consultant",
        className: styles.parallaxTwo,
        zIndex: 81,
        startProgress: 0.62,
        endProgress: 0.82,
        yStart: "100vh",
        yEnd: "-18vh"
    },
    {
        src: "/images/new%20hero/js6.png",
        alt: "Digital Marketing Strategy",
        className: styles.parallaxThree,
        zIndex: 82,
        startProgress: 0.78,
        endProgress: 0.998,
        yStart: "100vh",
        yEnd: "18vh"
    }
]

const ParallaxImages = ({ scrollYProgress, isMobile }: NarrativeOverlayProps) => {
    const parallaxData = isMobile ? mobileParallaxData : desktopParallaxData

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 25, pointerEvents: 'none' }}>
            <div className={styles.parallaxStage}>
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
    className,
    zIndex,
    startProgress,
    endProgress,
    yStart,
    yEnd,
    scrollYProgress
}: ParallaxImageProps) => {
    const y = useTransform(scrollYProgress, [startProgress, endProgress], [yStart, yEnd])
    // Combined fade and slide for better flow
    const opacity = useTransform(
        scrollYProgress,
        [startProgress, startProgress + 0.06, endProgress - 0.04, endProgress],
        [0, 1, 1, 0]
    )
    const scale = useTransform(scrollYProgress, [startProgress, endProgress], [1.12, 0.96])
    const mobileOpacity = className === styles.parallaxThree
        ? useTransform(scrollYProgress, [startProgress, startProgress + 0.05, endProgress - 0.015, endProgress], [0, 1, 1, 0])
        : opacity

    return (
        <motion.div
            className={`${styles.parallaxBase} ${className}`}
            style={{
                transform: useMotionTemplate`translateY(${y}) scale(${scale})`,
                opacity: mobileOpacity,
                zIndex
            }}
        >
            <img src={src} alt={alt} className={styles.parallaxImage} />
        </motion.div>
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
                        letterSpacing: "0.08em",
                        fontWeight: 600,
                        fontFamily: "var(--font-display)",
                        fontSize: "0.75rem",
                    }}
                >
                    Growth
                </p>
                <h2
                    style={{
                        fontFamily: "var(--font-display)",
                        color: "white",
                        marginBottom: "1rem",
                        fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.15,
                        fontWeight: 600,
                    }}
                >
                    From Cafe{" "}
                    <span style={{ color: "var(--color-accent)" }}>Success</span> to{" "}
                    <span style={{ color: "var(--color-accent)" }}>
                        Business Growth
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
                    It started with 6 years in café operations. Today, I help 20+ clients grow with clear systems, stronger teams, and better profits.
                </p>
            </SectionReveal>

            <SectionReveal delay={200}>
                <FluidExpandingGrid className="mt-4" />
            </SectionReveal>
        </div>
    )
}
