"use client"

import Image from "next/image"
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
        <section className={styles.storySection}>
            <StoryHero />
            <StoryContent />
        </section>
    )
}

const MOBILE_MEDIA_QUERY = '(max-width: 768px)'

const StoryHero = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY)
        const updateViewport = () => setIsMobile(mediaQuery.matches)

        updateViewport()
        mediaQuery.addEventListener('change', updateViewport)

        return () => mediaQuery.removeEventListener('change', updateViewport)
    }, [])

    // The main container provides the track length (height) for the sticky element inside.
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })

    return (
        <div
            ref={containerRef}
            className={styles.storyHeroTrack}
        >
            <div className={styles.storyViewport}>
                <CenterImage scrollYProgress={scrollYProgress} />
                <NarrativeOverlay scrollYProgress={scrollYProgress} isMobile={isMobile} />
                <ParallaxImages scrollYProgress={scrollYProgress} isMobile={isMobile} />

                {/* Dark overlay for text contrast - active during Phase 2 */}
                <motion.div
                    className={styles.storyOverlay}
                    style={{
                        opacity: useTransform(scrollYProgress, [0.25, 0.4, 0.75, 0.85], [0, 1, 1, 0])
                    }}
                />

                {/* Gradient transition to the content below */}
                <div className={styles.storyGradientFade} />
            </div>
        </div>
    )
}

const CenterImage = ({ scrollYProgress }: ScrollProgressProps) => {
    // Phase 1: Expansion (0.0 -> 0.25)
    const clip1 = useTransform(scrollYProgress, [0, 0.25], [25, 0])
    const clip2 = useTransform(scrollYProgress, [0, 0.25], [75, 100])
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`

    const scale = useTransform(scrollYProgress, [0, 0.3], [1.7, 1])
    // Fades out into pure navy blue background before the sticky track exits
    const opacity = useTransform(
        scrollYProgress,
        [0.85, 0.95],
        [1, 0]
    )

    return (
        <motion.div
            className={styles.centerImage}
            style={{
                clipPath,
                scale,
                opacity,
            }}
        >
            <Image
                src="/images/new hero/js8.png"
                alt="John Salde consulting background portrait"
                fill
                priority
                sizes="100vw"
                className={styles.centerImageMedia}
            />
        </motion.div>
    )
}

const NarrativeOverlay = ({ scrollYProgress, isMobile }: NarrativeOverlayProps) => {
    // Phase 2: Narrative Text Fade-In (0.25 -> 0.45)
    const opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.7, 0.8], [0, 1, 1, 0])
    const x = useTransform(scrollYProgress, [0.25, 0.4], [-80, 0])

    return (
        <div className={styles.narrativeOverlay}>
            <div className={styles.narrativeShell}>
                <motion.div className={styles.narrativeContent} style={{ opacity, x }}>
                    <h3
                        className={styles.narrativeTitle}
                        style={{
                            fontSize: isMobile ? 'clamp(3.5rem, 14vw, 5rem)' : 'clamp(3rem, 5vw, 4.5rem)',
                            marginBottom: isMobile ? '1rem' : '1.5rem',
                        }}
                    >
                        6 Years <br />of Mastery
                    </h3>
                    <p
                        className={styles.narrativeBody}
                        style={{
                            fontSize: isMobile ? 'clamp(1.35rem, 5vw, 1.75rem)' : 'clamp(1.25rem, 2vw, 1.75rem)',
                        }}
                    >
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
        startProgress: 0.7,
        endProgress: 0.99,
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
        endProgress: 0.999,
        yStart: "100vh",
        yEnd: "-18vh"
    }
]

const ParallaxImages = ({ scrollYProgress, isMobile }: NarrativeOverlayProps) => {
    const parallaxData = isMobile ? mobileParallaxData : desktopParallaxData

    return (
        <div className={styles.parallaxLayer}>
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
    const thirdImageOpacity = useTransform(
        scrollYProgress,
        [startProgress, startProgress + 0.05, endProgress - 0.01, endProgress],
        [0, 1, 1, 0]
    )
    const finalImageOpacity = className === styles.parallaxThree ? thirdImageOpacity : opacity

    return (
        <motion.div
            className={`${styles.parallaxBase} ${className}`}
            style={{
                transform: useMotionTemplate`translateY(${y}) scale(${scale})`,
                opacity: finalImageOpacity,
                zIndex
            }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) min(84vw, 25rem), 24vw"
                className={styles.parallaxImage}
            />
        </motion.div>
    )
}

/* ─────────────── Story Content Block ─────────────── */

const StoryContent = () => {
    return (
        <div
            className={styles.storyContent}
        >
            <SectionReveal>
                <p
                    className={styles.storyEyebrow}
                >
                    Growth
                </p>
                <h2
                    className={styles.storyTitle}
                >
                    From Cafe{" "}
                    <span style={{ color: "var(--color-accent)" }}>Success</span> to{" "}
                    <span style={{ color: "var(--color-accent)" }}>
                        Business Growth
                    </span>
                </h2>
                <p
                    className={styles.storyDescription}
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
