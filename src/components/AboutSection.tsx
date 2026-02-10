import { useEffect, useRef, useState } from 'react';

const capabilities = [
  {
    icon: '🌊',
    title: 'Sea Operations',
    description:
      'Operasi tempur di perairan dangkal dan dalam, penyusupan pantai, penyelaman tempur, dan sabotase kapal musuh.',
    gradient: 'linear-gradient(135deg, #0d3b66, #14568a)',
  },
  {
    icon: '✈️',
    title: 'Air Operations',
    description:
      'Penyusupan udara melalui terjun payung, fast-rope dari helikopter, dan operasi penerjunan taktis di zona konflik.',
    gradient: 'linear-gradient(135deg, #1a3a5c, #2a5a8c)',
  },
  {
    icon: '🏔️',
    title: 'Land Operations',
    description:
      'Operasi darat meliputi penyergapan, pengintaian strategis, penanggulangan teror, dan pertahanan instalasi vital.',
    gradient: 'linear-gradient(135deg, #2d3a1e, #4a5d2e)',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: `linear-gradient(180deg, var(--navy-darkest) 0%, var(--navy-dark) 50%, var(--navy-darkest) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle side glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107,29,42,0.08) 0%, transparent 70%)',
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
          <h2 className="section-title">Tentang Denjaka</h2>
          <div className="section-divider" />

          <p
            style={{
              textAlign: 'center',
              maxWidth: 720,
              margin: '0 auto 60px',
              fontSize: '1.05rem',
              lineHeight: 1.9,
              color: 'var(--white-muted)',
            }}
          >
            <strong style={{ color: 'var(--gold)' }}>Detasemen Jala Mangkara (DENJAKA)</strong> adalah
            unit pasukan khusus elite di bawah naungan TNI Angkatan Laut. Dalam universe roleplay ini,
            Denjaka bertugas melaksanakan operasi-operasi khusus berdimensi tiga — menguasai laut, udara,
            dan darat — dengan presisi dan keberanian tanpa batas.
          </p>
        </div>

        {/* Capability cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className="glass-card"
              style={{
                padding: 32,
                textAlign: 'center',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.8s ease-out ${0.2 + index * 0.15}s`,
                cursor: 'default',
              }}
            >
              {/* Icon container */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 16,
                  background: cap.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 20px',
                  border: '1px solid rgba(201, 168, 76, 0.1)',
                }}
              >
                {cap.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                {cap.title}
              </h3>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--white-muted)',
                  lineHeight: 1.7,
                }}
              >
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
