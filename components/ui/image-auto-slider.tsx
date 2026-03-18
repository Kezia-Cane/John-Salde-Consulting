'use client';

import React from 'react';

interface ImageAutoSliderProps {
  images: string[];
}

export const ImageAutoSlider = ({ images }: ImageAutoSliderProps) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scroll-right 40s linear infinite;
        }
        
        /* Pause scroll on hover */
        .infinite-scroll:hover {
          animation-play-state: paused;
        }

        .scroll-container {
          width: 100%;
          max-width: 95vw;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        @media (min-width: 768px) {
          .scroll-container {
             max-width: 100%;
          }
        }

        .image-item {
          flex-shrink: 0;
          width: 200px;
          height: 200px;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0,0,0,0.05);
          background: white;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        @media (min-width: 768px) {
          .image-item {
            width: 256px;
            height: 256px;
          }
        }

        @media (min-width: 1024px) {
          .image-item {
            width: 300px;
            height: 300px;
          }
        }

        .image-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}} />

      <div style={{ width: '100%', position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 0', overflow: 'visible' }}>
        {/* Scrolling images container */}
        <div className="scroll-container">
          <div className="infinite-scroll">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item"
              >
                <img
                  src={encodeURI(image)}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
