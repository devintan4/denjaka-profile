import TypingText from './TypingText';
import heroImage from '../assets/images/gfxcommo.png';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: `linear-gradient(135deg, var(--navy-darkest) 0%, var(--navy-dark) 40%, var(--navy-mid) 100%)`,
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--gold) 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, var(--gold) 1px, transparent 1px),
                            radial-gradient(circle at 60% 80%, var(--gold) 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 80px 80px, 100px 100px',
        }}
      />

      {/* Maroon accent glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(107,29,42,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Gold accent glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '120px 24px 80px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
        className="hero-grid"
      >
        {/* Left — Text */}
        <div className="animate-fade-in-up">
          {/* Small badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 16px',
              borderRadius: 20,
              border: '1px solid rgba(201, 168, 76, 0.25)',
              background: 'rgba(201, 168, 76, 0.06)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontFamily: 'var(--font-display)',
              marginBottom: 24,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)' }} />
            TNI AL Military Roleplay
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: 24,
              background: 'linear-gradient(135deg, var(--white) 0%, var(--gold) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <TypingText text="DENJAKA" speed={120} loop pauseMs={2000} deleteSpeed={80} />
          </h1>

          <div
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--white-muted)',
              marginBottom: 40,
              minHeight: '2em',
              fontWeight: 300,
            }}
          >
            <TypingText
              text="Detasemen Jala Mangkara — Sea, Air, & Land Operations"
              speed={45}
              loop
            />
          </div>

          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--white-muted)',
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 480,
              opacity: 0.8,
            }}
          >
            Unit pasukan khusus elite TNI Angkatan Laut yang beroperasi di tiga dimensi medan pertempuran.
            Siap menjaga kedaulatan di lautan, udara, dan daratan.
          </p>

          <a href="#about" className="btn-gold">
            Bergabung Sekarang
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right — Commander image */}
        <div
          className="animate-fade-in delay-300"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Glow ring behind image */}
          <div
            style={{
              position: 'absolute',
              width: '80%',
              height: '80%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(107,29,42,0.2) 0%, transparent 60%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              border: '2px solid rgba(201, 168, 76, 0.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              maxWidth: 500,
            }}
            className="animate-pulse-glow"
          >
            <img
              src={heroImage}
              alt="Komandan Denjaka"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            {/* Overlay gradient at bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, var(--navy-darkest), transparent)',
              }}
            />
            {/* Name tag */}
            <div
              style={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                right: 20,
                padding: '12px 16px',
                background: 'rgba(6, 14, 26, 0.7)',
                backdropFilter: 'blur(8px)',
                borderRadius: 12,
                border: '1px solid rgba(201, 168, 76, 0.2)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  letterSpacing: 1,
                }}
              >
                KOLONEL COMMOLETH
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--white-muted)',
                  marginTop: 2,
                }}
              >
                Komandan Denjaka
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          opacity: 0.4,
        }}
        className="animate-float"
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase' }}>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
          <path d="M8 4v16M2 14l6 6 6-6" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding-top: 100px !important;
          }
          .hero-grid > div:last-child {
            order: -1;
            max-width: 300px;
            margin: 0 auto;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .btn-gold {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
