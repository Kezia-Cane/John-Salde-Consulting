"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./CoffeeLoader.module.css";

interface CoffeeLoaderProps {
  size?: number;
  className?: string;
  speed?: number;
  variant?: "inline" | "button" | "hero";
  ariaLabel?: string;
}

export default function CoffeeLoader({
  size = 200,
  className = "",
  speed = 1,
  variant = "inline",
  ariaLabel = "Loading",
}: CoffeeLoaderProps) {
  return (
    <div
      className={[styles.loader, styles[variant], className].filter(Boolean).join(" ")}
      style={{ width: size, height: size }}
      aria-label={ariaLabel}
      aria-live="polite"
      role="status"
    >
      <div className={styles.halo} aria-hidden="true" />
      <DotLottieReact
        autoplay
        className={styles.player}
        loop
        speed={speed}
        src="/Coffee%20love.json"
      />
    </div>
  );
}
