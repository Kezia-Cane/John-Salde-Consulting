"use client";

import React, { useEffect, useRef } from "react";
import styles from "./CoffeeLoader.module.css";

const COFFEE_LOADER_SRC = "/images/coffee-beans-loader.lottie";
const COFFEE_LOADER_ANIMATION_ID = "12345";

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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const playerRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function initPlayer() {
      const canvas = canvasRef.current;

      if (!canvas) {
        return;
      }

      const { DotLottie } = await import("@lottiefiles/dotlottie-web");

      if (cancelled) {
        return;
      }

      const player = new DotLottie({
        animationId: COFFEE_LOADER_ANIMATION_ID,
        autoplay: true,
        canvas,
        loop: true,
        renderConfig: {
          autoResize: true,
        },
        speed,
        src: COFFEE_LOADER_SRC,
      });

      playerRef.current = player;
    }

    void initPlayer();

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [speed]);

  return (
    <div
      className={[styles.loader, styles[variant], className].filter(Boolean).join(" ")}
      style={{ width: size, height: size }}
      aria-label={ariaLabel}
      aria-live="polite"
      role="status"
    >
      <div className={styles.halo} aria-hidden="true" />
      <div className={styles.player}>
        <canvas ref={canvasRef} aria-hidden="true" />
      </div>
    </div>
  );
}
