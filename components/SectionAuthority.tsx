import React from "react";
import SectionReveal from "./SectionReveal";
import { ArrowRight, Lightbulb, Settings, Target, BarChart2 } from "lucide-react";

const bentoFeatures = [
  {
    name: "Strategic Vision",
    description: "Architecting high-impact, scalable growth blueprints designed exclusively for driven F&B founders and strategic partnerships.",
    Icon: Lightbulb,
    rowSpan: "md:row-span-2",
    colSpan: "md:col-span-2",
    theme: "dark",
    titleColor: "var(--color-accent)"
  },
  {
    name: "Operational Systems",
    description: "Tactical implementation of standard operating procedures.",
    Icon: Settings,
    rowSpan: "md:row-span-1",
    colSpan: "md:col-span-1",
    theme: "light"
  },
  {
    name: "Data-Driven Growth",
    description: "Advanced analytics and KPI tracking to constantly optimize profitability and minimize waste.",
    Icon: BarChart2,
    rowSpan: "md:row-span-1",
    colSpan: "md:col-span-1",
    theme: "light"
  }
];

export default function SectionAuthority() {
  return (
    <section id="authority" className="section bg-surface" style={{ padding: '8rem 0' }}>
      <div className="container">
        <SectionReveal>
          <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
            <p className="text-accent" style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>
              The Foundation
            </p>
            <h2 className="text-h2" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
              Structuring Passion into <br />
              <span style={{ color: 'var(--color-accent)' }}>Profitable Reality.</span>
            </h2>
            <p className="text-body-md" style={{ lineHeight: 1.8, marginTop: '1.5rem', maxWidth: '600px' }}>
              As the Founder and Lead Consultant of John Salde Consulting, I bring deep operational knowledge to the table. I don't just offer advice; I engineer systems that bridge the gap between passion and profitability.
            </p>
          </div>
        </SectionReveal>

        <div className="bento-grid">
          {bentoFeatures.map((feature, idx) => (
            <SectionReveal key={idx} delay={idx * 150} className={`bento-card ${feature.colSpan} ${feature.rowSpan}`}>
              <div
                className={`bento-card-inner group ${feature.theme === 'dark' ? 'bento-dark' : 'bento-light'}`}
              >
                {/* Background Decor */}
                <div className="bento-bg-decor" />

                {/* Content */}
                <div className="bento-content">
                  <feature.Icon className="bento-icon group-hover-scale" />
                  <h3 className="text-h3" style={{ fontFamily: 'var(--font-display)', marginBottom: '0.75rem', zIndex: 10, color: feature.titleColor || 'inherit' }}>
                    {feature.name}
                  </h3>
                  <p className="text-body-md bento-desc">
                    {feature.description}
                  </p>
                </div>

              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .bento-grid {
          display: grid;
          width: 100%;
          grid-template-columns: 1fr;
          auto-rows: minmax(16rem, auto);
          gap: 1.5rem;
        }

        .bento-card-inner {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          border-radius: 1.5rem;
          padding: 2.5rem;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bento-light {
          background-color: white;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 4px 24px rgba(0,0,0,0.03);
          color: var(--color-primary);
        }
        .bento-light .bento-desc { color: var(--color-text-muted); }
        .bento-light .bento-icon { color: var(--color-primary); }
        .bento-light .bento-cta { color: var(--color-primary); }

        .bento-dark {
          background-color: var(--color-primary);
          color: white;
          box-shadow: inset 0 -20px 80px -20px rgba(255,255,255,0.05);
        }
        .bento-dark .bento-desc { color: rgba(255,255,255,0.8); }
        .bento-dark .bento-icon { color: white; }
        .bento-dark .bento-cta { color: white; }

        .bento-bg-decor {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, transparent, rgba(0,0,0,0.02));
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .bento-dark .bento-bg-decor { background: linear-gradient(to bottom right, transparent, rgba(255,255,255,0.05)); }
        
        .bento-card-inner:hover .bento-bg-decor { opacity: 1; }

        .bento-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transform: translateY(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bento-icon {
          width: 3rem;
          height: 3rem;
          margin-bottom: 2rem;
          transform-origin: left center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bento-card-inner:hover .bento-icon {
          transform: scale(0.8);
          opacity: 0.8;
        }

        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
            auto-rows: 20rem; /* slightly shorter rows for better desktop fit */
          }
          
          .md\\:col-span-2 { grid-column: span 2 / span 2; }
          .md\\:col-span-1 { grid-column: span 1 / span 1; }
          .md\\:row-span-2 { grid-row: span 2 / span 2; }
          .md\\:row-span-1 { grid-row: span 1 / span 1; }
        }
      `}} />
    </section>
  );
}
