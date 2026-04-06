"use client";

import { useEffect, useState } from "react";

export type LoadingStage = "idle" | "instant" | "quiet" | "animated" | "determinate";

export const INSTANT_THRESHOLD_MS = 100;
export const ANIMATION_THRESHOLD_MS = 1000;
export const DETERMINATE_THRESHOLD_MS = 10000;

export function getDeterminateProgress(elapsedMs: number) {
  if (elapsedMs <= DETERMINATE_THRESHOLD_MS) {
    return 0;
  }

  const extraElapsed = elapsedMs - DETERMINATE_THRESHOLD_MS;
  return Math.min(97, Math.max(12, Math.round(12 + (1 - Math.exp(-extraElapsed / 4000)) * 85)));
}

export function useLatencyAwareLoading(isLoading: boolean) {
  const [elapsedMs, setElapsedMs] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setElapsedMs(0);
      return;
    }

    const start = performance.now();
    const intervalId = window.setInterval(() => {
      setElapsedMs(performance.now() - start);
    }, 120);

    return () => window.clearInterval(intervalId);
  }, [isLoading]);

  let stage: LoadingStage = "idle";

  if (isLoading) {
    if (elapsedMs < INSTANT_THRESHOLD_MS) {
      stage = "instant";
    } else if (elapsedMs < ANIMATION_THRESHOLD_MS) {
      stage = "quiet";
    } else if (elapsedMs < DETERMINATE_THRESHOLD_MS) {
      stage = "animated";
    } else {
      stage = "determinate";
    }
  }

  return {
    elapsedMs,
    progress: getDeterminateProgress(elapsedMs),
    showAnimation: stage === "animated",
    showDeterminate: stage === "determinate",
    showQuietState: stage === "quiet",
    stage,
  };
}
