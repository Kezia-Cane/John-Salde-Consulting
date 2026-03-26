"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

interface CoffeeLoaderProps {
    size?: number;
    className?: string;
}

export default function CoffeeLoader({ size = 200, className = "" }: CoffeeLoaderProps) {
    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <div style={{ width: size, height: size }}>
                <DotLottiePlayer
                    src="/images/Coffee Beans Loader.lottie"
                    autoplay
                    loop
                />
            </div>
        </div>
    );
}
