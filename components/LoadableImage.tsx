"use client";

import { useState, useRef, useEffect } from "react";
import CoffeeLoader from "./CoffeeLoader";

interface LoadableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    loaderSize?: number;
}

export default function LoadableImage({ src, alt, className, style, loaderSize = 80, ...props }: LoadableImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    // If the image is already cached by the browser, onLoad might not fire again.
    // This checks if it's already complete when the component mounts.
    useEffect(() => {
        if (imgRef.current?.complete) {
            setIsLoaded(true);
        }
    }, [src]);

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
                {...props}
                ref={imgRef}
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
                onLoad={(e) => {
                    setIsLoaded(true);
                    if (props.onLoad) props.onLoad(e);
                }}
                onError={(e) => {
                    setIsLoaded(true);
                    if (props.onError) props.onError(e);
                }}
            />
        </div>
    );
}
