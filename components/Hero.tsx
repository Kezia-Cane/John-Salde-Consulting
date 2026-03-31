"use client";

import React, { useEffect, useState } from "react";
import LoadableImage from "./LoadableImage";
import styles from "./Hero.module.css";

const HERO_IMAGES = [
  "/images/new%20hero/Hero.png",
  "/images/new%20hero/Hero%20(2).png",
  "/images/new%20hero/Hero%20(3).png",
  "/images/new%20hero/Hero%20(4).png",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleReady = () => setIsReady(true);
    if (document.readyState === "complete") {
      handleReady();
      return;
    }
    window.addEventListener("load", handleReady);
    return () => window.removeEventListener("load", handleReady);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isReady]);

  return (
    <section id="hero" className={styles.heroSection}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #111f5c 0%, #1D3B91 45%, #1e4fba 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "-5%",
            width: "70%",
            height: "80%",
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.45), transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-5%",
            width: "50%",
            height: "60%",
            background: "radial-gradient(circle, rgba(198, 224, 61, 0.08), transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div className="bg-layer bg-diagonal-lines" />
        <div className="bg-layer bg-noise-dark" />
      </div>

      <div className={styles.heroGrid}>
        <div className={`${styles.heroCol} ${styles.heroLeft}`}>
          <h1 className={`${styles.heroH1} ${styles.textGradientPrimary}`}>
            John
            <br />
            Salde
          </h1>
        </div>

        <div className={`${styles.heroCol} ${styles.heroCenter}`}>
          <div className={styles.heroCircle} />
          <div className={styles.heroImageContainer}>
            <div key={activeIndex} className={styles.heroImageSlide}>
              <div className={styles.heroImageFrame}>
                <LoadableImage
                  src={HERO_IMAGES[activeIndex]}
                  alt="John Salde Consulting Hero"
                  className={styles.heroImage}
                  loaderSize={140}
                  loaderBg="transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.heroCol} ${styles.heroRight}`}>
          <h1 className={`${styles.heroH1} ${styles.textGradientAccent}`} style={{ marginBottom: "1.25rem" }}>
            Coffee
            <br />
            Consultant<span style={{ color: "var(--color-accent)" }}>.</span>
          </h1>
          <p className={styles.heroDesc}>Bridging cafe passion and explosive profitability through reality-tested systems.</p>
        </div>
      </div>
    </section>
  );
}
