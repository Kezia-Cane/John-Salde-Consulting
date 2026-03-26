"use client";

import { useState, useEffect } from "react";
import CoffeeLoader from "./CoffeeLoader";
import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reduced timeout for a faster, branding-focused loader
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 99999,
                        backgroundColor: "#ffffff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CoffeeLoader size={280} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
