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
        <section id="portfolio" className="section bg-surface relative w-full overflow-hidden">
            {/* Background gradient structure */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(29, 59, 145, 0.02) 0%, rgba(37, 99, 235, 0.03) 100%)' }} />

            <div className="container relative z-10">
                <SectionReveal>
                    <div className="text-center max-w-4xl mx-auto" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <p className="text-accent" style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>
                            Selected Client Portfolio
                        </p>
                        <h2 className="text-h2 mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                            Trusted Across Mindanao's <br className="hidden md:block" />Top Hospitality Brands
                        </h2>
                        <p className="text-body-lg mt-6" style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', lineHeight: '1.7', marginTop: '1.5rem' }}>
                            From high-volume banquet workflows and dual-concept regional expansions, to specialized barista standardizations. We've optimized the best to be better.
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
