"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import CoffeeLoader from "./CoffeeLoader";
import DeterminateProgress from "./DeterminateProgress";
import { useLatencyAwareLoading } from "@/lib/useLatencyAwareLoading";

interface LoadableImageProps extends Omit<ImageProps, "src" | "alt" | "fill"> {
    src?: string;
    alt: string;
    loaderSize?: number;
    loaderBg?: string;
}

export default function LoadableImage({
  src,
  alt,
  className,
  style,
  loaderSize = 80,
  loaderBg = "#f8fafc",
  sizes,
  priority,
  onLoad,
  onError,
  ...props
}: LoadableImageProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const isLoaded = loadedSrc === src;
  const isPending = Boolean(src) && !isLoaded;
  const { progress, showAnimation, showDeterminate, showQuietState, stage } = useLatencyAwareLoading(isPending);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: loaderBg,
        overflow: "hidden",
      }}
    >
      {isPending && stage !== "instant" ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: loaderBg,
            zIndex: 1,
            padding: "1rem",
          }}
        >
          {showQuietState ? (
            <div className="loading-skeleton" style={{ width: "100%", height: "100%", borderRadius: "inherit" }} />
          ) : null}

          {showAnimation ? (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.9rem",
                borderRadius: "1.25rem",
                background: "rgba(255,255,255,0.78)",
                boxShadow: "0 16px 30px rgba(29,59,145,0.1)",
              }}
            >
              <CoffeeLoader ariaLabel={`Loading ${alt}`} size={loaderSize} />
            </div>
          ) : null}

          {showDeterminate ? (
            <div
              style={{
                width: "100%",
                maxWidth: "14rem",
                padding: "1rem 1rem 0.9rem",
                borderRadius: "1.1rem",
                background: "rgba(255,255,255,0.9)",
                boxShadow: "0 16px 30px rgba(29,59,145,0.12)",
              }}
            >
              <DeterminateProgress compact label="Loading image" progress={progress} />
            </div>
          ) : null}
        </div>
      ) : null}

      <Image
        {...props}
        src={src || ""}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={className}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.4s ease-in-out",
          zIndex: 2,
        }}
        onLoad={(e) => {
          setLoadedSrc(src ?? null);
          onLoad?.(e);
        }}
        onError={(e) => {
          setLoadedSrc(src ?? null);
          onError?.(e);
        }}
      />
    </div>
  );
}
