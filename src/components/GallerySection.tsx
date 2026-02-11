import { useState, useEffect, useRef } from 'react';

// Import gallery images
import img1 from '../assets/images/gallery/Screenshot_667.png';
import img2 from '../assets/images/gallery/W_2.png';
import img3 from '../assets/images/gallery/denjaka-2-recruit.png';
import img4 from '../assets/images/gallery/denjakaops5.png';
import img5 from '../assets/images/gallery/image(2).png';
import img6 from '../assets/images/gallery/image(3).png';
import img7 from '../assets/images/gallery/image.png';

const galleryImages = [
  { src: img1, alt: 'Screenshot Operasi' },
  { src: img2, alt: 'Latihan Perang' },
  { src: img3, alt: 'Rekrutmen Denjaka' },
  { src: img4, alt: 'Operasi Denjaka' },
  { src: img5, alt: 'Dokumentasi Operasi' },
  { src: img6, alt: 'Dokumentasi Lapangan' },
  { src: img7, alt: 'Aktivitas Denjaka' },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (lightbox !== null) {
        if (e.key === 'ArrowRight') setLightbox((prev) => (prev! + 1) % galleryImages.length);
        if (e.key === 'ArrowLeft') setLightbox((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      style={{
        background: `linear-gradient(180deg, var(--navy-darkest) 0%, var(--navy-dark) 50%, var(--navy-darkest) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107,29,42,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="section-container">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <h2 className="section-title">Media & Gallery</h2>
          <div className="section-divider" />
          <p
            style={{
              textAlign: 'center',
              maxWidth: 600,
              margin: '0 auto 48px',
              fontSize: '0.95rem',
              color: 'var(--white-muted)',
              opacity: 0.7,
            }}
          >
            Dokumentasi kegiatan, operasi, dan latihan Detasemen Jala Mangkara.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setLightbox(index)}
              style={{
                position: 'relative',
                borderRadius: 12,
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(201, 168, 76, 0.1)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'scale(1)' : 'scale(0.95)',
                transition: `all 0.6s ease-out ${0.1 + index * 0.08}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.35)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(201, 168, 76, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 220,
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
              />
              {/* Overlay on hover */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(6,14,26,0.7) 0%, transparent 50%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 16,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                className="gallery-overlay"
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--gold)',
                    letterSpacing: 1,
                  }}
                >
                  Denjaka
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="modal-overlay"
          onClick={() => setLightbox(null)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
          }}
        >
          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
            }}
            style={{
              position: 'absolute',
              left: 20,
              background: 'rgba(201, 168, 76, 0.15)',
              border: '1px solid rgba(201, 168, 76, 0.3)',
              color: 'var(--gold)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
              zIndex: 201,
            }}
          >
            ◀
          </button>

          {/* Image */}
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '85vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: 12,
              border: '2px solid rgba(201, 168, 76, 0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            }}
          />

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev! + 1) % galleryImages.length);
            }}
            style={{
              position: 'absolute',
              right: 20,
              background: 'rgba(201, 168, 76, 0.15)',
              border: '1px solid rgba(201, 168, 76, 0.3)',
              color: 'var(--gold)',
              width: 44,
              height: 44,
              borderRadius: '50%',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
              zIndex: 201,
            }}
          >
            ▶
          </button>

          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'rgba(201, 168, 76, 0.15)',
              border: '1px solid rgba(201, 168, 76, 0.3)',
              color: 'var(--gold)',
              width: 40,
              height: 40,
              borderRadius: 8,
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 201,
            }}
          >
            ✕
          </button>

          {/* Counter */}
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--gold)',
              letterSpacing: 2,
              opacity: 0.7,
            }}
          >
            {lightbox + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      <style>{`
        .gallery-grid > div:hover .gallery-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
