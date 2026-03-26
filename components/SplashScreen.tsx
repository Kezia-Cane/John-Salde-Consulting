"use client";

import { useState, useEffect } from "react";
import CoffeeLoader from "./CoffeeLoader";
import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reduced timeout for better UX, but long enough to show the brand
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
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
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        style={{
                            marginTop: "1rem",
                            textAlign: "center"
                        }}
                    >
                        <h2 style={{
                            fontFamily: "var(--font-poppins)",
                            color: "#1D3B91",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                            marginBottom: "0.25rem"
                        }}>
                            JOHN SALDE
                        </h2>
                        <p style={{
                            fontFamily: "var(--font-montserrat)",
                            color: "#C6E03D",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase"
                        }}>
                            Strategic Consulting
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
