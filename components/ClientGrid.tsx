import React, { useState, useEffect } from "react";
import LoadableImage from "./LoadableImage";

interface ClientProject {
    id: string;
    name: string;
    description: string;
    operationalFocus: string[];
    photo: string;
    logo: string;
}

const clients: ClientProject[] = [
    {
        id: "garden-oases",
        name: "Garden Oases Resort / The Ritz Hotel",
        description: "A major hospitality partner focusing on high-end dining and resort services. We work directly with their purchasing and dining supervisors to ensure premium standards.",
        operationalFocus: ["Coffee Business Development", "Barista Training & Standardization", "Menu Engineering"],
        photo: "/images/portfolio/clients%20photo/ritz.png",
        logo: "/images/portfolio/clients%20photo/ritz-logo.png"
    },
    {
        id: "beani-cafe",
        name: "Beani Cafe + Lounge",
        description: "A trendy lifestyle cafe that blends specialty coffee with a lounge atmosphere. Our focus is on maintaining their unique brand identity and smooth daily operations.",
        operationalFocus: ["Barista Training & Standardization", "Technicalities"],
        photo: "/images/portfolio/clients%20photo/Beani.png",
        logo: "/images/portfolio/clients%20photo/beani-logo.png"
    },
    {
        id: "pherms-chicken",
        name: "Pherms Chicken Fast Food & Cafe",
        description: "A popular fast-food brand known for its vibrant energy. We support their high-volume service model and help maintain their fun, family-friendly brand image.",
        operationalFocus: ["Coffee Business Development", "Barista Training & Standardization", "Menu Engineering", "Technicalities", "Machine Setup & Calibration"],
        photo: "/images/portfolio/clients%20photo/pherms.png",
        logo: "/images/portfolio/clients%20photo/pherms-logo.png"
    },
    {
        id: "wave-and-brew",
        name: "Wave & Brew",
        description: "A specialty coffee shop focused on the craft of brewing. We provide operational support to ensure their artisanal quality remains consistent for every cup.",
        operationalFocus: ["Coffee Business Development", "Barista Training & Standardization", "Menu Engineering"],
        photo: "/images/portfolio/clients%20photo/wave.png",
        logo: "/images/portfolio/clients%20photo/wave%20logo.png"
    },
    {
        id: "amelings-maxyse",
        name: "Amelings Seafood & Grill / Maxyse Cafe",
        description: "A multi-concept restaurant serving fresh seafood and grilled favorites. We help manage their diverse menu and streamline communication across different brands.",
        operationalFocus: ["Barista Training & Standardization"],
        photo: "/images/portfolio/clients%20photo/amelings.png",
        logo: "/images/portfolio/clients%20photo/amelings-logo.png"
    },
    {
        id: "mugen-davao",
        name: "Mugen Cafe Davao",
        description: "A minimalist, Japanese-inspired coffee shop. Our goal is to support their clean aesthetic and ensure their premium coffee products meet high expectations.",
        operationalFocus: ["Menu Engineering"],
        photo: "/images/portfolio/clients%20photo/mugen.png",
        logo: "/images/portfolio/clients%20photo/mugen-logo.png"
    },
    {
        id: "cove-cafe",
        name: "Cove Cafe (Tagum)",
        description: "A key regional partner located in Tagum. We assist in their operational growth as they bring a modern cafe experience to a wider audience.",
        operationalFocus: ["Coffee Business Development", "Barista Training & Standardization", "Menu Engineering", "Technicalities"],
        photo: "/images/portfolio/clients%20photo/cove.png",
        logo: "/images/portfolio/clients%20photo/cove-logo.png"
    },
    {
        id: "upstairs-rooftop",
        name: "Upstairs Rooftop Bar Kitchen",
        description: "A dynamic nightlife venue that transitions from a daytime kitchen to a late-night bar. We focus on managing the fast-paced needs of their rooftop service.",
        operationalFocus: ["Barista Training & Standardization", "Menu Engineering"],
        photo: "/images/portfolio/clients%20photo/upstair.png",
        logo: "/images/portfolio/clients%20photo/upstair-logo.png"
    },
    {
        id: "inherent-coffee",
        name: "Inherent Coffee",
        description: "A dedicated coffee brand that values simplicity and quality. We provide the operational foundation so they can focus on their passion for great coffee.",
        operationalFocus: ["Barista Training & Standardization", "Machine Setup & Calibration"],
        photo: "/images/portfolio/clients%20photo/inherent.png",
        logo: "/images/portfolio/clients%20photo/inehrent-logo.png"
    },
    {
        id: "kapeta",
        name: "KAPETA",
        description: "A specialty boutique cafe that emphasizes community and local craft. We support their presence in the neighborhood and help them maintain their unique position in the local coffee market.",
        operationalFocus: ["Coffee Business Development", "Barista Training & Standardization", "Menu Engineering", "Technicalities", "Machine Setup & Calibration"],
        photo: "/images/portfolio/clients%20photo/kapeta.png",
        logo: "/images/portfolio/clients%20photo/kapeta-logo.png"
    },
    {
        id: "modern-craft-brand",
        name: "Craft-Centered Coffee Brand",
        description: "A modern coffee brand focused on delivering a high-quality, craft-centered experience. We provide the operational support needed to ensure their technical brewing standards and brand identity stay consistent.",
        operationalFocus: ["Barista Training & Standardization", "Technicalities", "Machine Setup & Calibration"],
        photo: "/images/portfolio/clients%20photo/pres.png",
        logo: "/images/portfolio/clients%20photo/pres-logo.png"
    },
    {
        id: "mikos-brew",
        name: "Miko’s Brew",
        description: "An established local favorite known for its reliable coffee and classic pastry offerings. We help them maintain their strong community reputation and high product standards.",
        operationalFocus: ["Barista Training & Standardization", "Machine Setup & Calibration"],
        photo: "/images/portfolio/clients%20photo/mikos.png",
        logo: "/images/portfolio/clients%20photo/mikos-logo.png"
    },
    {
        id: "beanwhile",
        name: "Beanwhile Coffee & Pastry",
        description: "A specialty cafe that focuses on the delicate balance between high-quality coffee and artisanal baked goods. Our support ensures their brand remains a top choice for pastry lovers.",
        operationalFocus: ["Coffee Business Development", "Barista Training & Standardization", "Menu Engineering", "Machine Setup & Calibration"],
        photo: "/images/portfolio/clients%20photo/beanwhile.png",
        logo: "/images/portfolio/clients%20photo/beanwhile-logo.png"
    },
    {
        id: "habits",
        name: "Habits Coffee & Cocktail",
        description: "A versatile venue that serves coffee by day and cocktails by night. We assist in managing their dual-concept operations for a seamless guest experience.",
        operationalFocus: ["Coffee Business Development", "Barista Training & Standardization", "Menu Engineering (Coffee & Cocktails)"],
        photo: "/images/portfolio/clients%20photo/habits.png",
        logo: "/images/portfolio/clients%20photo/habits-logo.png"
    },
    {
        id: "ober-d-bakod",
        name: "Ober d' bakod cafe",
        description: "A unique, local cafe concept that emphasizes a relaxed and approachable dining experience. We help them build their brand identity and manage their daily service workflows.",
        operationalFocus: ["Barista Training & Standardization", "Menu Engineering", "Machine Setup & Calibration"],
        photo: "/images/portfolio/clients%20photo/ober.png",
        logo: "/images/portfolio/clients%20photo/ober-logo.png"
    },
    {
        id: "roti-republic",
        name: "Roti Republic Cafe",
        description: "A specialty cafe focusing on unique fusion offerings and a modern dining vibe. We work closely with Kyzhia Kyle to ensure their operational standards match their creative brand vision.",
        operationalFocus: ["Barista Training & Standardization", "Menu Engineering", "Machine Setup & Calibration"],
        photo: "/images/portfolio/clients%20photo/roti.png",
        logo: "/images/portfolio/clients%20photo/roti-logo.png"
    },
    {
        id: "simply-sweet",
        name: "Simply Sweet Cafe",
        description: "A charming cafe dedicated to desserts and sweet treats. Our support focuses on ensuring their quality remains consistent as they build a loyal following.",
        operationalFocus: ["Barista Training & Standardization", "Menu Engineering", "Machine Setup & Calibration"],
        photo: "/images/portfolio/clients%20photo/simply%20sweet.png",
        logo: "/images/portfolio/clients%20photo/simply%20sweet-logo.png"
    },
    {
        id: "carmens-garden",
        name: "Carmen's Garden Cafe",
        description: "This partnership represents a full-scale operational takeover. I handle the total management of the business, applying the battle-tested systems from my own cafe to drive their growth.",
        operationalFocus: [
            "Operational Management: I oversee all daily workflows, business strategy, and service standards to ensure consistent quality.",
            "Digital & Web Presence: I manage the complete rebranding, social media strategy, and website to modernize their market presence.",
            "Integrated POS System: I deployed a customized POS system to streamline their ordering process and provide real-time financial reporting."
        ],
        photo: "/images/portfolio/clients%20photo/cgc.png",
        logo: "/images/portfolio/clients%20photo/cgc-logo.png"
    }
];

export default function ClientGrid() {
    const [selectedClient, setSelectedClient] = useState<ClientProject | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedClient) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedClient]);

    return (
        <>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {clients.map((client) => (
                    <div
                        key={client.id}
                        className="bento-card"
                        onClick={() => setSelectedClient(client)}
                        style={{
                            background: "#ffffff",
                            borderRadius: "var(--radius)",
                            overflow: "hidden",
                            boxShadow: "0 4px 12px rgba(29,59,145,0.04)",
                            display: "flex",
                            flexDirection: "column",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            border: "1px solid rgba(29,59,145,0.06)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-4px)";
                            e.currentTarget.style.boxShadow = "0 12px 24px rgba(29,59,145,0.1)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(29,59,145,0.04)";
                        }}
                    >
                        {/* Big Photo Placeholder */}
                        <div
                            style={{
                                aspectRatio: "4/3",
                                background: "#f1f5f9",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <LoadableImage
                                src={client.photo}
                                alt={client.name}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />

                            {/* Logo Placeholder overlapping bottom-right of photo */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "10px",
                                    right: "10px",
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    background: "#ffffff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                                    border: "2px solid #ffffff",
                                    zIndex: 2,
                                    overflow: "hidden"
                                }}
                            >
                                <LoadableImage
                                    src={client.logo}
                                    alt="Logo"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Card Content Details */}
                        <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                            <h3 style={{ color: "var(--color-primary)", marginBottom: "0.5rem", fontSize: "1.05rem", fontFamily: "var(--font-display)", fontWeight: 700, lineHeight: 1.2 }}>
                                {client.name}
                            </h3>
                            <p className="text-body-md" style={{ color: "var(--color-text-muted)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", marginBottom: "1rem", fontSize: "0.85rem" }}>
                                {client.description}
                            </p>

                            <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--color-accent)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                Details <span className="material-symbols-outlined" style={{ fontSize: "0.9rem" }}>arrow_forward</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Overlay */}
            {selectedClient && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1.5rem",
                    }}
                >
                    {/* Backdrop */}
                    <div
                        onClick={() => setSelectedClient(null)}
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(14, 29, 78, 0.6)",
                            backdropFilter: "blur(8px)",
                            cursor: "pointer",
                        }}
                    />

                    {/* Modal Content */}
                    <div
                        style={{
                            position: "relative",
                            background: "#ffffff",
                            borderRadius: "var(--radius-lg)",
                            width: "100%",
                            maxWidth: "1000px",
                            maxHeight: "90vh",
                            overflow: "hidden",
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                            animation: "scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        {/* Close button (Absolute for better layout flexibility) */}
                        <button
                            onClick={() => setSelectedClient(null)}
                            style={{
                                position: "absolute",
                                top: "1.5rem",
                                right: "1.5rem",
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(4px)",
                                border: "none",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "var(--color-primary)",
                                zIndex: 10,
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                            }}
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: "1.5rem" }}>close</span>
                        </button>

                        <div className="modal-inner-grid" style={{ display: "grid", gridTemplateColumns: "1fr", height: "100%", overflowY: "auto" }}>
                            {/* Left Column: Full Image */}
                            <div className="modal-image-col" style={{ position: "relative", background: "#f8fafc", minHeight: "300px" }}>
                                <LoadableImage
                                    src={selectedClient.photo}
                                    alt={selectedClient.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block"
                                    }}
                                />
                                {/* Bottom overlay for branding on mobile if needed, or just cleaner look */}
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)", pointerEvents: "none" }} />
                            </div>

                            {/* Right Column: Content */}
                            <div style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column" }}>
                                <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", marginBottom: "2rem" }}>
                                    <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden", border: "2px solid #f1f5f9", boxShadow: "0 8px 16px rgba(0,0,0,0.06)" }}>
                                        <LoadableImage src={selectedClient.logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                    <div>
                                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-accent)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.25rem" }}>Partner Case Study</span>
                                        <h2 className="text-h2" style={{ color: "var(--color-primary)", fontSize: "1.75rem", lineHeight: 1.1 }}>
                                            {selectedClient.name}
                                        </h2>
                                    </div>
                                </div>

                                <div style={{ marginBottom: "2.5rem" }}>
                                    <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.5rem" }}>Project Overview</h4>
                                    <p className="text-body-lg" style={{ color: "#334155", lineHeight: 1.6 }}>
                                        {selectedClient.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Key Deliverables</h4>
                                    <ul style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.85rem", marginLeft: 0, paddingLeft: 0, listStyle: "none" }}>
                                        {selectedClient.operationalFocus.map((focus, i) => (
                                            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", background: "#f8fafc", padding: "1rem", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
                                                <div style={{ background: "var(--color-primary)", borderRadius: "50%", width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px", flexShrink: 0 }}>
                                                    <span className="material-symbols-outlined" style={{ fontSize: "14px", color: "white" }}>check</span>
                                                </div>
                                                <span style={{ color: "#1e293b", fontWeight: 500, fontSize: "0.95rem" }}>
                                                    {focus}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                
                @media (min-width: 850px) {
                    .modal-inner-grid {
                        grid-template-columns: 42% 58% !important;
                        overflow-y: hidden !important;
                    }
                    .modal-image-col {
                        height: 100% !important;
                    }
                    .modal-inner-grid > div:last-child {
                        overflow-y: auto !important;
                    }
                }
            `}} />
        </>
    );
}
