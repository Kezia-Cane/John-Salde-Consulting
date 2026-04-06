"use client";

import { useEffect, useState } from "react";
import CoffeeLoader from "./CoffeeLoader";
import DeterminateProgress from "./DeterminateProgress";
import { DETERMINATE_THRESHOLD_MS, getDeterminateProgress } from "@/lib/useLatencyAwareLoading";

const INITIAL_ENTRY_KEY = "john-salde-loading-experience-seen";

function SkeletonBlock({
  height,
  width = "100%",
  radius = "1.25rem",
}: {
  height: string;
  width?: string;
  radius?: string;
}) {
  return <div className="loading-skeleton" style={{ width, height, borderRadius: radius }} />;
}

function RouteSkeleton() {
  return (
    <div style={{ minHeight: "100svh", background: "#f8f9ff", position: "relative", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(198,224,61,0.14), transparent 24%), linear-gradient(180deg, #f8f9ff 0%, #eef3ff 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "min(1280px, calc(100vw - 2rem))",
          margin: "0 auto",
          padding: "1.25rem 0 4rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "3.5rem" }}>
          <SkeletonBlock height="4rem" radius="999px" width="min(42rem, 92vw)" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            gap: "1.5rem",
            alignItems: "center",
            marginBottom: "3.5rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <SkeletonBlock height="0.85rem" width="8rem" radius="999px" />
            <SkeletonBlock height="4.25rem" width="85%" />
            <SkeletonBlock height="4.25rem" width="68%" />
            <SkeletonBlock height="1rem" width="92%" radius="999px" />
            <SkeletonBlock height="1rem" width="76%" radius="999px" />
            <div style={{ display: "flex", gap: "0.8rem", marginTop: "1rem" }}>
              <SkeletonBlock height="3.6rem" width="15rem" radius="999px" />
              <SkeletonBlock height="3.6rem" width="11rem" radius="999px" />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "1rem",
            }}
          >
            <SkeletonBlock height="12rem" />
            <SkeletonBlock height="12rem" />
            <SkeletonBlock height="14rem" />
            <SkeletonBlock height="14rem" />
          </div>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", marginBottom: "3rem" }}>
          <SkeletonBlock height="18rem" radius="2rem" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))", gap: "1rem" }}>
            <SkeletonBlock height="10rem" />
            <SkeletonBlock height="10rem" />
            <SkeletonBlock height="10rem" />
            <SkeletonBlock height="10rem" />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))", gap: "1rem" }}>
          <SkeletonBlock height="12rem" />
          <SkeletonBlock height="12rem" />
          <SkeletonBlock height="12rem" />
        </div>
      </div>
    </div>
  );
}

export default function SplashScreen() {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isInitialEntry, setIsInitialEntry] = useState(false);

  useEffect(() => {
    const hasSeenExperience = window.sessionStorage.getItem(INITIAL_ENTRY_KEY) === "1";
    setIsInitialEntry(!hasSeenExperience);

    if (!hasSeenExperience) {
      window.sessionStorage.setItem(INITIAL_ENTRY_KEY, "1");
    }

    const start = performance.now();
    const intervalId = window.setInterval(() => {
      setElapsedMs(performance.now() - start);
    }, 120);

    return () => window.clearInterval(intervalId);
  }, []);

  const shouldHideLoaderUi = elapsedMs < 100;
  const showStaticIntro = isInitialEntry && elapsedMs >= 100 && elapsedMs < 1000;
  const showBrandedLoader = isInitialEntry && elapsedMs >= 1000 && elapsedMs < 1800;
  const showDeterminateProgress = elapsedMs >= DETERMINATE_THRESHOLD_MS;
  const progress = getDeterminateProgress(elapsedMs);

  if (shouldHideLoaderUi) {
    return <div style={{ minHeight: "100svh", background: "#f8f9ff" }} />;
  }

  if (showStaticIntro) {
    return (
      <div
        style={{
          minHeight: "100svh",
          background:
            "radial-gradient(circle at top right, rgba(198,224,61,0.18), transparent 26%), linear-gradient(160deg, #f7f9ff 0%, #edf3ff 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div
          style={{
            width: "min(36rem, 100%)",
            borderRadius: "2rem",
            padding: "2rem",
            border: "1px solid rgba(29,59,145,0.08)",
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 24px 48px rgba(29,59,145,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "4.5rem",
              height: "4.5rem",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(29,59,145,0.12), rgba(198,224,61,0.24))",
              border: "1px solid rgba(29,59,145,0.08)",
            }}
          />
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(29,59,145,0.58)",
            }}
          >
            John Salde Consulting
          </p>
          <h2
            style={{
              margin: 0,
              color: "var(--color-primary)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              lineHeight: 1,
            }}
          >
            Entering the experience
          </h2>
          <p style={{ margin: 0, maxWidth: "28rem", color: "rgba(29,59,145,0.72)", fontSize: "1rem", lineHeight: 1.7 }}>
            Preparing the first view with the same calm pacing used throughout the site.
          </p>
        </div>
      </div>
    );
  }

  if (showBrandedLoader) {
    return (
      <div
        style={{
          minHeight: "100svh",
          background:
            "radial-gradient(circle at top right, rgba(198,224,61,0.18), transparent 24%), linear-gradient(160deg, #f7f9ff 0%, #edf3ff 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center" }}>
          <CoffeeLoader ariaLabel="Loading website" size={220} variant="hero" />
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(29,59,145,0.58)",
            }}
          >
            Brewing the first impression
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      {showDeterminateProgress ? (
        <div
          style={{
            position: "fixed",
            top: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(22rem, calc(100vw - 2rem))",
            zIndex: 2,
            padding: "0.95rem 1rem",
            borderRadius: "1.25rem",
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 20px 44px rgba(29,59,145,0.14)",
          }}
        >
          <DeterminateProgress label="Loading next view" progress={progress} />
        </div>
      ) : null}
      <RouteSkeleton />
    </div>
  );
}
