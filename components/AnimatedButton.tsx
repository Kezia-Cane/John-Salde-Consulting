"use client";

import React from 'react';
import Link from 'next/link';

interface AnimatedButtonProps {
    text1?: string;
    text2?: string;
    href?: string;
    className?: string;
}

export default function AnimatedButton({
    text1 = "Consultation",
    href = "/consultation",
    className = ""
}: AnimatedButtonProps) {
    return (
        <>
            <Link href={href} className={`button ${className}`}>
                {text1}
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </Link>
            <style dangerouslySetInnerHTML={{
                __html: `
                .button {
                    position: relative;
                    transition: all 0.3s ease-in-out;
                    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
                    padding-block: 0.6rem;
                    padding-inline: 1.5rem;
                    background-color: var(--color-primary);
                    border-radius: 9999px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffff;
                    gap: 10px;
                    font-family: var(--font-display);
                    font-weight: bold;
                    border: 3px solid rgba(255, 255, 255, 0.3);
                    outline: none;
                    overflow: hidden;
                    font-size: 15px;
                    cursor: pointer;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    text-decoration: none;
                }

                .button .icon {
                    width: 24px;
                    height: 24px;
                    transition: all 0.3s ease-in-out;
                    animation: translateIcon 1.5s ease-in-out infinite alternate;
                }

                .button:hover {
                    transform: scale(1.05);
                    border-color: rgba(255, 255, 255, 0.6);
                }

                .button::before {
                    content: "";
                    position: absolute;
                    width: 100px;
                    height: 100%;
                    background-image: linear-gradient(
                        120deg,
                        rgba(255, 255, 255, 0) 30%,
                        rgba(255, 255, 255, 0.8),
                        rgba(255, 255, 255, 0) 70%
                    );
                    top: 0;
                    left: -100px;
                    opacity: 0.6;
                    animation: shine 2s ease-out infinite;
                }

                @keyframes shine {
                    0% { left: -100px; }
                    60% { left: 100%; }
                    100% { left: 100%; }
                }

                @keyframes translateIcon {
                    0% { transform: translate(0); }
                    100% { transform: translate(4px); }
                }
            `}} />
        </>
    );
}
