"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from "./AnimatedButton";


export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
    >
      {/* ── Premium Background Layers ── */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Base gradient: navy → cobalt */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #111f5c 0%, #1D3B91 45%, #1e4fba 100%)'
        }} />
        {/* Cobalt radial glow – top-right */}
        <div style={{
          position: 'absolute',
          top: '-15%', right: '-5%', width: '70%', height: '80%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.45), transparent 60%)',
          filter: 'blur(100px)',
        }} />
        {/* Lime accent glow – bottom-left */}
        <div style={{
          position: 'absolute',
          bottom: '-10%', left: '-5%', width: '50%', height: '60%',
          background: 'radial-gradient(circle, rgba(198, 224, 61, 0.08), transparent 65%)',
          filter: 'blur(80px)',
        }} />
        {/* Diagonal line pattern */}
        <div className="bg-layer bg-diagonal-lines" />
        {/* Noise texture */}
        <div className="bg-layer bg-noise-dark" />
      </div>

      {/* Main Content - 3-column grid, ALL vertically centered */}
      <div className="hero-grid">

        {/* LEFT: "John Salde" */}
        <motion.div
          className="hero-col hero-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h1 className="hero-h1 text-gradient-primary">
            John<br />Salde
          </h1>
        </motion.div>

        {/* CENTER: Circle + Portrait */}
        <div className="hero-col hero-center">
          <motion.div
            className="hero-circle"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
          <motion.img
            src="/images/Untitled design (11).png"
            alt="John Salde Strategic Consultant"
            className="hero-image"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/400x600/1D3B91/ffffff?text=John+Salde";
            }}
          />
        </div>

        {/* RIGHT: "[Typing] Consultant." + tagline + CTA */}
        <motion.div
          className="hero-col hero-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h1 className="hero-h1 text-gradient-accent" style={{ marginBottom: '1.25rem' }}>
            Coffee<br />
            Consultant<span style={{ color: 'var(--color-accent)' }}>.</span>
          </h1>
          <p className="hero-desc">
            Bridging cafe passion and explosive profitability through reality-tested systems.
          </p>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        /* ── Section ── */
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #111f5c;
          color: white;
          overflow: hidden;
          padding: 80px 2rem 0;
        }

        /* ── Grid ── */
        .hero-grid {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1400px;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 2rem;
        }

        /* ── Columns ── */
        .hero-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* ── Mobile: stack vertically, center everything ── */
        .hero-left  { order: 1; align-items: center; text-align: center; }
        .hero-center { order: 2; align-items: center; justify-content: center; position: relative; height: 300px; }
        .hero-right  { order: 3; align-items: center; text-align: center; }

        /* ── Mobile: prevent overflow & ensure proper spacing ── */
        @media (max-width: 767px) {
          .hero-section {
            height: auto;
            min-height: 100svh;
            padding: 100px 1.5rem 3rem;
            align-items: flex-start;
          }
          .hero-grid {
            gap: 1rem;
            padding-bottom: 1rem;
          }
          .hero-center {
            height: 220px;
            overflow: hidden;
            position: relative;
          }
          .hero-image {
            position: absolute !important;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 220px !important;
            width: auto !important;
            max-width: 100%;
            object-fit: contain;
            object-position: center bottom;
          }
          .hero-circle {
            width: 180px;
            height: 220px;
          }
          .hero-desc {
            max-width: 100%;
          }
        }

        /* ── Coffee Bean Shape ── */
        .hero-circle {
          position: absolute;
          width: 320px;
          height: 420px;
          background-color: rgba(255,255,255,0.05); /* Same color as the current circle */
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          transform: rotate(-15deg);
          z-index: 0;
          overflow: hidden;
          box-shadow: 0 0 60px rgba(255,255,255,0.02);
        }
        /* The "split" in the bean */
        .hero-circle::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent);
          transform: translateX(-50%) skewX(-15deg);
        }

        /* ── Portrait ── */
        .hero-image {
          position: relative;
          z-index: 10;
          width: auto;
          height: 100%;
          object-fit: contain;
          object-position: center bottom;
        }

        /* ── Typography ── */
        .hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 8vw, 6.5rem);
          line-height: 1;
          margin: 0;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        /* ── Modern Text Gradients ── */
        .text-gradient-primary {
          background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-gradient-accent {
          background: linear-gradient(135deg, #ffffff 0%, var(--color-accent) 150%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          max-width: 300px;
          color: rgba(255,255,255,0.9);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .hero-cta {
          display: inline-block;
          color: var(--color-accent);
          border-bottom: 2px solid var(--color-accent);
          padding-bottom: 4px;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: opacity 0.2s;
        }
        .hero-cta:hover { opacity: 0.8; }

        /* ━━━━━━━━━━ Tablet+ (768px) ━━━━━━━━━━ */
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr 1.3fr 1fr;
            gap: 1rem;
          }
          .hero-left  { order: 1; align-items: flex-end;   text-align: right;  padding-right: 1rem; }
          .hero-center { order: 2; height: 520px; }
          .hero-right  { order: 3; align-items: flex-start; text-align: left;   padding-left: 1rem; }

          .hero-circle {
            width: 400px;
            height: 520px;
          }

          .hero-image { height: 100%; }

          .hero-h1 {
            font-size: clamp(3.5rem, 5.5vw, 5rem);
          }
        }

        /* ━━━━━━━━━━ Desktop (1024px) ━━━━━━━━━━ */
        @media (min-width: 1024px) {
          .hero-section { padding-top: 0; }
          .hero-grid {
            grid-template-columns: 1fr 1.4fr 1fr;
            gap: 0;
          }
          .hero-left  { padding-right: 2rem; }
          .hero-right  { padding-left: 2rem; }

          .hero-center { height: 600px; }

          .hero-circle {
            width: 520px;
            height: 680px;
          }

          .hero-image { height: 105%; }

          .hero-h1 {
            font-size: clamp(5rem, 7vw, 7.5rem);
          }
        }
      `}} />
    </section>
  );
}
