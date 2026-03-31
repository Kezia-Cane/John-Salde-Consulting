import SectionReveal from "./SectionReveal";
import { ImageAutoSlider } from "./ui/image-auto-slider";

const PORTFOLIO_IMAGES = [
    "/images/portfolio/blob.png",
    "/images/portfolio/blob (1).png",
    "/images/portfolio/blob (2).png",
    "/images/portfolio/blob (3).png",
    "/images/portfolio/blob (4).png",
    "/images/portfolio/blob (5).png",
    "/images/portfolio/blob (6).png"
];

export default function SectionPortfolio() {
    return (
        <section id="work" className="section bg-surface relative w-full overflow-hidden">
            {/* ── Premium Background ── */}
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                {/* Base soft gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #f8fafc 0%, #edf3ff 50%, #f4f8ff 100%)' }} />
                {/* Dot grid pattern */}
                <div className="bg-layer bg-dot-grid" />
                {/* Subtle cobalt glow - top center */}
                <div style={{
                    position: 'absolute',
                    top: '-15%', left: '20%', width: '60%', height: '70%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.06), transparent 70%)',
                    filter: 'blur(80px)'
                }} />
            </div>

            <div className="container relative z-10">
                <SectionReveal>
                    <div className="text-center max-w-4xl mx-auto" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <p className="text-accent" style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>
                            Selected Client Work
                        </p>
                        <h2 className="text-h2 mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                            Trusted by Leading <br className="hidden md:block" />Hospitality Brands
                        </h2>
                        <p className="text-body-lg mt-6" style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', lineHeight: '1.7', marginTop: '1.5rem' }}>
                            Clear improvements across operations, service, and growth for café and hospitality teams.
                        </p>
                    </div>
                </SectionReveal>

                <div style={{ width: '100%', position: 'relative', zIndex: 10, marginTop: '2.5rem' }}>
                    <ImageAutoSlider images={PORTFOLIO_IMAGES} />
                </div>
            </div>
        </section>
    );
}
