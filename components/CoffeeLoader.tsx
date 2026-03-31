"use client";

import React from "react";
import styles from "./CoffeeLoader.module.css";

interface CoffeeLoaderProps {
    size?: number;
    className?: string;
}

export default function CoffeeLoader({ size = 200, className = "" }: CoffeeLoaderProps) {
    return (
        <div
            className={[styles.loader, className].filter(Boolean).join(" ")}
            style={{ width: size, height: size }}
            aria-label="Loading"
        >
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
        </div>
    );
}
