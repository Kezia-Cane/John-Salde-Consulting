"use client";

import { useState } from "react";
import CoffeeLoader from "./CoffeeLoader";

interface LoadableImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
    src?: string;
    loaderSize?: number;
    loaderBg?: string;
}

export default function LoadableImage({ src, alt, className, style, loaderSize = 80, loaderBg = "#f8fafc", ...props }: LoadableImageProps) {
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
            <img
                {...props}
                src={src}
                alt={alt}
                className={className}
                style={{
                    ...style,
                    opacity: isLoaded ? 1 : 0,
                    transition: "opacity 0.4s ease-in-out",
                    position: "relative",
                    zIndex: 2
                }}
                loading={props.loading ?? "eager"}
                onLoad={(e) => {
                    setLoadedSrc(src ?? null);
                    if (props.onLoad) props.onLoad(e);
                }}
                onError={(e) => {
                    setLoadedSrc(src ?? null);
                    if (props.onError) props.onError(e);
                }}
            />
        </div>
    );
}
