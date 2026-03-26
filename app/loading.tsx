import CoffeeLoader from "@/components/CoffeeLoader";

export default function Loading() {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999
            }}
        >
            <CoffeeLoader size={250} />
            <div style={{ marginTop: "1rem", textAlign: "center" }}>
                <h2 style={{
                    fontFamily: "var(--font-poppins)",
                    color: "#1D3B91",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    marginBottom: "0.2rem"
                }}>
                    BREWING
                </h2>
                <p style={{
                    fontFamily: "var(--font-montserrat)",
                    color: "#C6E03D",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase"
                }}>
                    Your experience...
                </p>
            </div>
        </div>
    );
}
