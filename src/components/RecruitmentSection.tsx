import { useEffect, useRef, useState } from 'react';

const requirements = [
  'Menggunakan PC / Laptop',
  'Pangkat Minimal Kelasi Dua',
  'Dilarang menggunakan akun alt',
  'Usia minimal 13 tahun',
  'Wajib bergabung Grup RI & Angkatan Laut',
  'Mematuhi seluruh aturan komunitas',
  'Aktif mengikuti latihan/pertemuan',
  'Mampu berkomunikasi efektif (MIC ON)',
  'Menjaga perilaku, etika, dan disiplin',
  'Setia pada satuan (tidak gabung divisi lain)',
  'Mampu bekerja sama dalam tim',
  'Menghormati pemimpin & hierarki',
  'Decent dalam combat dan operasi',
  'Usia akun roblox minimal 365 hari',
  'Bersedia mengikuti Pendidikan Brigade Infanteri Marinir',
];

const steps = [
  'Masuk ke Discord resmi Pendidikan Detasemen Jala Mangkara Roblox.',
  'Melalui proses Background Check oleh Staf Rekrutmen.',
  'Jika lolos, akan diberi akses ke Channel DIK-PTAL.',
  'Mengikuti sesi seleksi/pendidikan via VC Discord (PC/Laptop).',
];

export default function RecruitmentSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="recruitment"
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
          top: '20%',
          right: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
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
          <h2 className="section-title">Rekrutmen</h2>
          <div className="section-divider" />
        </div>

        {/* Two-column layout */}
        <div
          className="recruitment-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 32,
          }}
        >
          {/* SYARAT MUTLAK */}
          <div
            className="glass-card"
            style={{
              padding: 36,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, var(--maroon), #8b1a2a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  border: '1px solid rgba(201, 168, 76, 0.15)',
                }}
              >
                ⚔️
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                Syarat Mutlak
              </h3>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {requirements.map((req, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    padding: '7px 0',
                    fontSize: '0.88rem',
                    color: 'var(--white-muted)',
                    lineHeight: 1.5,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-15px)',
                    transition: `all 0.4s ease-out ${0.3 + i * 0.05}s`,
                  }}
                >
                  <span
                    style={{
                      color: 'var(--gold)',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      marginTop: 3,
                      flexShrink: 0,
                    }}
                  >
                    ✦
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* CARA GABUNG */}
          <div
            className="glass-card"
            style={{
              padding: 36,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease-out 0.35s',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #0d3b66, #14568a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  border: '1px solid rgba(201, 168, 76, 0.15)',
                }}
              >
                📋
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                Cara Gabung
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-15px)',
                    transition: `all 0.5s ease-out ${0.4 + i * 0.12}s`,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      color: 'var(--navy-darkest)',
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--white-muted)',
                      lineHeight: 1.6,
                      margin: 0,
                      paddingTop: 6,
                    }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Join Now CTA */}
            <div
              style={{
                marginTop: 40,
                textAlign: 'center',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 0.9s',
              }}
            >
              <a
                href="https://discord.gg/eFFB9VAqPP"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{
                  fontSize: '1rem',
                  padding: '16px 48px',
                  letterSpacing: 3,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ marginRight: 4 }}
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Join Now!
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
          </div>
        </div>
      </div>
    </section>
  );
}
