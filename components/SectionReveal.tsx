"use client";

import { useEffect, useRef, useState } from "react";

interface SectionRevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    id?: string;
}

export default function SectionReveal({ children, delay = 0, className = "", id }: SectionRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only apply animations after initial mount
        const currentRef = domRef.current;

        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => setIsVisible(true), delay);
                        if (currentRef) observer.unobserve(currentRef);
                    }
                });
            },
            { rootMargin: "0px 0px -10px 0px", threshold: 0.1 }
        );

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [delay]);

    return (
        <div
            id={id}
            ref={domRef}
            className={`reveal ${isVisible ? "active " : ""}${className}`}
        >
            {children}
        </div>
    );
}
