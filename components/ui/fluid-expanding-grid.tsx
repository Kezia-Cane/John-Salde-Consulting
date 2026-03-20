"use client";

import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

interface GalleryItem {
    id: string;
    title: string;
    subtitle: string;
    image: string;
}

const ITEMS: GalleryItem[] = [
    {
        id: "operations",
        title: "Operations",
        subtitle: "Streamlined cafe workflow & daily processes",
        image: "/images/evolution/operations.jpeg",
    },
    {
        id: "marketing",
        title: "Digital Marketing",
        subtitle: "Brand growth & customer acquisition",
        image: "/images/evolution/digital marketing.jpeg",
    },
    {
        id: "systems",
        title: "Systems",
        subtitle: "POS integration & staff management",
        image: "/images/evolution/systems.jpeg",
    },
];

interface FluidExpandingGridProps {
    items?: GalleryItem[];
    className?: string;
    id?: string;
}

export function FluidExpandingGrid({
    items = ITEMS,
    className,
    id = "evolution-grid",
}: FluidExpandingGridProps) {
    const [layout, setLayout] = useState(() => {
        return {
            row1: ["operations"],        // Operations full-width on top
            row2: ["marketing", "systems"], // Digital Marketing + Systems side-by-side below
        };
    });

    const toggleExpand = (clickedId: string) => {
        if (layout.row1.includes(clickedId) && layout.row1.length === 1) return;
        if (layout.row2.includes(clickedId) && layout.row2.length === 1) return;

        if (layout.row1.includes(clickedId)) {
            const other = layout.row1.find(i => i !== clickedId)!;
            const fromRow2 = layout.row2[0];
            setLayout({
                row1: [clickedId],
                row2: [other, fromRow2]
            });
        } else {
            const other = layout.row2.find(i => i !== clickedId)!;
            const fromRow1 = layout.row1[0];
            setLayout({
                row1: [other, fromRow1],
                row2: [clickedId]
            });
        }
    }

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '1rem 0',
        }}>
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
                <LayoutGroup id={id}>
                    <motion.div
                        layout
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridTemplateRows: '1fr 1fr',
                            gap: '1.25rem',
                            width: '100%',
                            height: '540px',
                        }}
                    >
                        {items.map((item) => {
                            const isRow1 = layout.row1.includes(item.id);
                            const rowArr = isRow1 ? layout.row1 : layout.row2;
                            const isSelected = rowArr.length === 1 && rowArr[0] === item.id;

                            const gridRow = isRow1 ? 1 : 2;
                            let gridColumn: string;
                            if (isSelected) {
                                gridColumn = "1 / span 2";
                            } else {
                                if (isRow1) {
                                    gridColumn = layout.row1.indexOf(item.id) === 0 ? "1" : "2";
                                } else {
                                    gridColumn = layout.row2.indexOf(item.id) === 0 ? "1" : "2";
                                }
                            }

                            return (
                                <motion.div
                                    key={item.id}
                                    layoutId={`${id}-${item.id}`}
                                    onClick={() => toggleExpand(item.id)}
                                    style={{
                                        gridRow,
                                        gridColumn,
                                        position: 'relative',
                                        cursor: 'pointer',
                                        width: '100%',
                                        height: '100%',
                                        zIndex: isSelected ? 30 : 10,
                                    }}
                                    transition={{
                                        layout: {
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 25,
                                        },
                                    }}
                                >
                                    {/* Image Container */}
                                    <motion.div
                                        layoutId={`${id}-${item.id}-mask-wrapper`}
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            overflow: 'hidden',
                                            backgroundColor: '#18181b',
                                            borderRadius: '32px',
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: isSelected ? 'center 35%' : 'center 50%',
                                                transition: 'all 1s ease-in-out',
                                            }}
                                        />
                                        {/* Dark Mask */}
                                        <motion.div
                                            layoutId={`${id}-${item.id}-mask`}
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                backgroundColor: isSelected ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.2)',
                                                transition: 'background-color 0.7s ease',
                                            }}
                                        />
                                    </motion.div>

                                    {/* Text Overlay */}
                                    <motion.div
                                        layout="position"
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            padding: '1.5rem',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                            color: 'white',
                                            zIndex: 10,
                                            userSelect: 'none',
                                        }}
                                    >
                                        <motion.div layout="position" style={{ overflow: 'hidden' }}>
                                            <motion.h3
                                                layout="position"
                                                style={{
                                                    fontFamily: 'var(--font-playfair)',
                                                    fontWeight: 500,
                                                    color: 'var(--color-accent)',
                                                    fontSize: isSelected ? 'clamp(1.5rem, 3vw, 1.875rem)' : 'clamp(1.25rem, 2.5vw, 1.5rem)',
                                                    marginBottom: '0.25rem',
                                                    letterSpacing: '-0.02em',
                                                    transition: 'font-size 0.5s ease',
                                                }}
                                            >
                                                {item.title}
                                            </motion.h3>
                                            <motion.p
                                                layout="position"
                                                style={{
                                                    color: 'rgba(255,255,255,0.8)',
                                                    fontWeight: 400,
                                                    fontSize: isSelected ? '0.875rem' : '0.75rem',
                                                    whiteSpace: 'nowrap',
                                                    transition: 'font-size 0.5s ease',
                                                }}
                                            >
                                                {item.subtitle}
                                            </motion.p>
                                        </motion.div>
                                    </motion.div>

                                    {/* Bottom Gradient */}
                                    <motion.div
                                        layoutId={`${id}-${item.id}-overlay`}
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            pointerEvents: 'none',
                                            borderRadius: '32px',
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
                                        }}
                                    />
                                    {/* Border */}
                                    <motion.div
                                        layoutId={`${id}-${item.id}-border`}
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '32px',
                                            pointerEvents: 'none',
                                            transition: 'border-color 0.5s ease',
                                        }}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </LayoutGroup>
            </div>
        </div>
    );
}

export default FluidExpandingGrid;
