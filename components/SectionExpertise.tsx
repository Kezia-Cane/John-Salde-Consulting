'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import SectionReveal from './SectionReveal';

interface ExpertiseCategory {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: string;
}

const EXPERTISE_CATEGORIES: ExpertiseCategory[] = [
  {
    id: 1,
    title: "Operations",
    subtitle: "Operations",
    description: "Practical systems that keep your café running smoothly and profitably.",
    items: [
      "Coffee Business Development",
      "Barista Training & Standardization",
      "Menu Engineering",
      "Machine Setup & Calibration",
      "Technical Brewing Standards",
      "Café Operational Systems"
    ],
    icon: "⚙️"
  },
  {
    id: 2,
    title: "Marketing",
    subtitle: "Brand & Growth",
    description: "Clear marketing that brings customers in and keeps them coming back.",
    items: [
      "Brand Development",
      "Social Media Strategy",
      "Content Marketing",
      "SEO Optimization",
      "Online Reputation Management",
      "Paid Advertising Campaigns",
      "Customer Engagement"
    ],
    icon: "📈"
  },
  {
    id: 3,
    title: "Systems",
    subtitle: "Tools & Tech",
    description: "Simple tools and workflows that make daily work faster and more consistent.",
    items: [
      "Point of Sale (POS) Systems",
      "Staff Attendance Tracking",
      "Selfie Verification & GPS Location",
      "Custom Software Solutions",
      "Data Analytics Dashboards",
      "Automation Tools",
      "Integrated Business Management"
    ],
    icon: "💻"
  }
];

export default function SectionExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % EXPERTISE_CATEGORIES.length);
  }, [isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
  }, [isTransitioning, activeIndex]);

  // Auto-cycle effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4500); // 4.5 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Handle transition completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Match CSS transition duration

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section
      id="experience"
      className="section expertise-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* ── Premium Background ── */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {/* Soft diagonal gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #f8fafc 0%, #eef4ff 50%, #f4f8ff 100%)'
        }} />
        {/* Line grid */}
        <div className="bg-layer bg-line-grid" style={{ opacity: 0.7 }} />
        {/* Cobalt soft glow – top-right */}
        <div style={{
          position: 'absolute',
          top: '-20%', right: '-15%', width: '60%', height: '80%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.06), transparent 70%)',
          filter: 'blur(90px)'
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <SectionReveal>
          <div className="expertise-header">
            <p className="text-accent" style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>Areas of Experience</p>
            <h2 className="text-h2 expertise-title">
              How I Help
            </h2>
          </div>
        </SectionReveal>

        <div className="expertise-carousel">
          {/* Navigation Dots */}
          <div className="expertise-dots">
            {EXPERTISE_CATEGORIES.map((_, index) => (
              <button
                key={index}
                className={`expertise-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to category ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Content Panel */}
          <div className="expertise-panel-container">
            <div className="expertise-panel-wrapper">
              {EXPERTISE_CATEGORIES.map((category, index) => (
                <div
                  key={category.id}
                  className={`expertise-panel ${index === activeIndex ? 'active' : ''} ${isTransitioning && index !== activeIndex ? 'exiting' : ''}`}
                >
                  <div className="expertise-panel-content">
                    <div className="expertise-panel-header">
                      <span className="expertise-icon">{category.icon}</span>
                      <span className="expertise-subtitle">{category.subtitle}</span>
                    </div>
                    <h3 className="expertise-panel-title">{category.title}</h3>
                    <p className="expertise-description">{category.description}</p>

                    <div className="expertise-items">
                      {category.items.map((item, i) => (
                        <div key={i} className="expertise-item" style={{ animationDelay: `${i * 0.1}s` }}>
                          <span className="expertise-item-number">{String(i + 1).padStart(2, '0')}</span>
                          <span className="expertise-item-text">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Arrow Navigation */}
          <div className="expertise-navigation">
            <button
              className="expertise-nav-btn expertise-nav-prev"
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setActiveIndex((prev) => (prev - 1 + EXPERTISE_CATEGORIES.length) % EXPERTISE_CATEGORIES.length);
                }
              }}
              aria-label="Previous category"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              className="expertise-nav-btn expertise-nav-next"
              onClick={nextSlide}
              aria-label="Next category"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <SectionReveal delay={400}>
          <div className="expertise-cta">
            <AnimatedButton href="/experience" text1="See My Experience" />
          </div>
        </SectionReveal>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .expertise-section {
          position: relative;
          overflow: hidden;
        }

        .expertise-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .expertise-title {
          font-family: var(--font-playfair);
          margin-top: 1rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .expertise-carousel {
          max-width: 900px;
          margin: 0 auto;
        }

        .expertise-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .expertise-dot {
          width: 10px;
          height: 10px;
          border-radius: 6px;
          background: rgba(29, 59, 145, 0.2);
          border: 2px solid rgba(29, 59, 145, 0.3);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0;
        }

        .expertise-dot:hover {
          background: rgba(29, 59, 145, 0.5);
          border-color: rgba(29, 59, 145, 0.6);
          transform: scale(1.15);
        }

        .expertise-dot.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          width: 36px;
          border-radius: 6px;
        }

        .expertise-panel-container {
          position: relative;
          perspective: 1000px;
          margin-bottom: 2rem;
        }

        .expertise-panel-wrapper {
          display: grid;
          width: 100%;
        }

        .expertise-panel {
          grid-area: 1 / 1;
          width: 100%;
          opacity: 0;
          transform: translateX(60px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .expertise-panel.active {
          opacity: 1;
          transform: translateX(0) scale(1);
          pointer-events: auto;
          z-index: 2;
        }

        .expertise-panel.exiting {
          opacity: 0;
          transform: translateX(-60px) scale(0.95);
        }

        .expertise-panel-content {
          background: white;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.05),
            0 20px 40px -10px rgba(29, 59, 145, 0.15);
          border: 1px solid rgba(29, 59, 145, 0.08);
        }

        .expertise-panel-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .expertise-icon {
          font-size: 1.5rem;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border-radius: 12px;
          color: white;
        }

        .expertise-subtitle {
          font-family: var(--font-accent);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-secondary);
          font-weight: 600;
        }

        .expertise-panel-title {
          font-family: var(--font-playfair);
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          color: var(--color-primary);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .expertise-description {
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }

        .expertise-items {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
        }

        .expertise-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          background: linear-gradient(135deg, rgba(29, 59, 145, 0.03) 0%, rgba(37, 99, 235, 0.03) 100%);
          border-radius: 12px;
          transition: all 0.3s ease;
          animation: expertiseFadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        .expertise-panel.active .expertise-item {
          animation: expertiseFadeInUp 0.5s ease forwards;
        }

        @keyframes expertiseFadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .expertise-item:hover {
          background: linear-gradient(135deg, rgba(29, 59, 145, 0.08) 0%, rgba(37, 99, 235, 08) 100%);
          transform: translateX(4px);
        }

        .expertise-item-number {
          font-family: var(--font-accent);
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--color-accent);
          background: var(--color-primary);
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          min-width: 32px;
          text-align: center;
        }

        .expertise-item-text {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-main);
        }

        .expertise-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .expertise-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          border: 2px solid var(--color-primary);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(29, 59, 145, 0.1);
        }

        .expertise-nav-btn:hover {
          background: var(--color-primary);
          color: white;
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(29, 59, 145, 0.2);
        }

        .expertise-nav-btn:active {
          transform: scale(0.95);
        }

        .expertise-arrow-container {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          width: 180px;
        }

        .expertise-arrow-track {
          display: flex;
          position: relative;
          width: 100%;
          height: 24px;
        }

        .expertise-arrow-item {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expertise-arrow-item.active {
          opacity: 1;
          transform: scale(1);
        }

        .expertise-arrow {
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(29, 59, 145, 0.05);
        }

        .expertise-progress {
          margin-top: 3rem;
          padding: 0 1rem;
        }

        .expertise-progress-track {
          max-width: 400px;
          margin: 0 auto;
          height: 4px;
          background: rgba(29, 59, 145, 0.1);
          border-radius: 2px;
          display: flex;
          gap: 4px;
          overflow: hidden;
        }

        .expertise-progress-bar {
          flex: 1;
          height: 100%;
          background: transparent;
          transition: all 0.4s ease;
        }

        .expertise-progress-bar.completed {
          background: rgba(29, 59, 145, 0.3);
        }

        .expertise-progress-bar.active {
          background: var(--color-primary);
          position: relative;
        }

        .expertise-progress-bar.active::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background: var(--color-secondary);
          animation: expertiseProgress 4.5s linear forwards;
        }

        @keyframes expertiseProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        .expertise-cta {
          margin-top: 4rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .expertise-panel-container {
            margin-bottom: 2rem;
          }

          .expertise-panel-content {
            padding: 1.5rem;
          }

          .expertise-title {
            font-size: 2rem;
          }

          .expertise-items {
            grid-template-columns: 1fr;
          }
          
          .expertise-nav-btn {
            width: 40px;
            height: 40px;
          }
          
          .expertise-arrow-container {
            width: 140px;
          }
        }
      `}} />
    </section>
  );
}
