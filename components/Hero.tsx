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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.heroSection}>
      <div aria-hidden="true" className={styles.heroBackdrop}>
        <div className={styles.heroBackdropBase} />
        <div className={styles.heroBackdropGlowPrimary} />
        <div className={styles.heroBackdropGlowAccent} />
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
                  sizes="(max-width: 767px) 250px, (max-width: 1023px) 320px, 420px"
                  priority={activeIndex === 0}
                  loaderSize={140}
                  loaderBg="transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.heroCol} ${styles.heroRight}`}>
          <h1 className={`${styles.heroH1} ${styles.textGradientAccent} ${styles.heroRightTitle}`}>
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
