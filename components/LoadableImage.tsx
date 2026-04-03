"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import CoffeeLoader from "./CoffeeLoader";

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

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {!isLoaded && (
                <div style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: loaderBg,
                    zIndex: 1
                }}>
                    <div style={{ transform: "scale(0.6)" }}>
                        <CoffeeLoader size={loaderSize} />
                    </div>
                </div>
            )}
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
                    zIndex: 2
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
