import React from "react";

interface DeterminateProgressProps {
  progress: number;
  label?: string;
  compact?: boolean;
  tone?: "light" | "dark";
}

export default function DeterminateProgress({
  progress,
  label = "Loading",
  compact = false,
  tone = "light",
}: DeterminateProgressProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));
  const textColor = tone === "dark" ? "#ffffff" : "var(--color-primary)";
  const subtextColor = tone === "dark" ? "rgba(255,255,255,0.72)" : "rgba(29,59,145,0.72)";
  const trackColor = tone === "dark" ? "rgba(255,255,255,0.16)" : "rgba(29,59,145,0.12)";

  return (
    <div
      aria-live="polite"
      role="status"
      style={{
        width: "100%",
        maxWidth: compact ? "100%" : "18rem",
        display: "flex",
        flexDirection: "column",
        gap: compact ? "0.35rem" : "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}
      >
        <span
          style={{
            color: textColor,
            fontFamily: "var(--font-display)",
            fontSize: compact ? "0.75rem" : "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
        <span
          style={{
            color: subtextColor,
            fontFamily: "var(--font-display)",
            fontSize: compact ? "0.75rem" : "0.82rem",
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          {clampedProgress}%
        </span>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "relative",
          width: "100%",
          height: compact ? "0.45rem" : "0.55rem",
          borderRadius: "999px",
          overflow: "hidden",
          background: trackColor,
        }}
      >
        <div
          style={{
            width: `${clampedProgress}%`,
            height: "100%",
            borderRadius: "inherit",
            background: "linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)",
            transition: "width 240ms ease-out",
          }}
        />
      </div>
    </div>
  );
}
