"use client";

import { useState } from "react";
import CoffeeLoader from "./CoffeeLoader";

interface LoadableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    loaderSize?: number;
}

export default function LoadableImage({ src, alt, className, style, loaderSize = 80, ...props }: LoadableImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {!isLoaded && (
                <div style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f8fafc",
                    zIndex: 1
                }}>
                    <div style={{ transform: "scale(0.6)" }}>
                        <CoffeeLoader size={loaderSize} />
                    </div>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={className}
                style={{
                    ...style,
                    opacity: isLoaded ? 1 : 0,
                    transition: "opacity 0.4s ease-in-out"
                }}
                onLoad={() => setIsLoaded(true)}
                {...props}
            />
        </div>
    );
}
