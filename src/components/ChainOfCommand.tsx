import { useState, useEffect, useRef } from 'react';
import PersonnelModal from './PersonnelModal';

interface Personnel {
  nama: string;
  pangkat: string;
  jabatan: string;
  status: 'Active' | 'Inactive';
  unit: string;
  discordId?: string;
}

const markasPersonnel: Personnel[] = [
  {
    nama: 'Commoleth',
    pangkat: 'Kolonel',
    jabatan: 'Komandan Denjaka',
    status: 'Active',
    unit: 'Markas Besar Denjaka',
    discordId: '464039858608930827',
  },
  {
    nama: 'Depinnzz',
    pangkat: 'Sersan Kepala',
    jabatan: 'Wakil Komandan Denjaka',
    status: 'Inactive',
    unit: 'Markas Besar Denjaka',
    discordId: '434994715386052613',
  },
];

const terorPersonnel: Personnel[] = [
  {
    nama: 'MYPUBG',
    pangkat: 'Kopral Kepala',
    jabatan: 'Komandan Pendidikan',
    status: 'Inactive',
    unit: 'Penanggulangan Teror Aspek Laut',
    discordId: '851870083184590858',
  },
  {
    nama: 'BatuSakti',
    pangkat: 'Kelasi Satu',
    jabatan: 'Wakil Komandan Pendidikan',
    status: 'Active',
    unit: 'Penanggulangan Teror Aspek Laut',
    discordId: '342295994051854337',
  },
];

export default function ChainOfCommand() {
  const [selected, setSelected] = useState<Personnel | null>(null);
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
      id="coc"
      ref={sectionRef}
      style={{
        background: `linear-gradient(180deg, var(--navy-darkest) 0%, var(--navy-dark) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
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
          <h2 className="section-title">Chain of Command</h2>
          <div className="section-divider" />
          <p
            style={{
              textAlign: 'center',
              maxWidth: 600,
              margin: '0 auto 60px',
              fontSize: '0.95rem',
              color: 'var(--white-muted)',
              opacity: 0.7,
            }}
          >
            Struktur organisasi dan rantai komando Denjaka. Klik pada kartu personel untuk melihat detail.
          </p>
        </div>

        {/* Tree structure */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          {/* TOP: Komandan Denjaka */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.2s',
            }}
          >
            <PersonnelCard person={markasPersonnel[0]} onClick={() => setSelected(markasPersonnel[0])} isTop />
          </div>

          {/* Vertical line from Komandan */}
          <div style={{ width: 2, height: 40, background: 'rgba(201, 168, 76, 0.2)' }} />

          {/* Wakil Komandan */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.35s',
            }}
          >
            <PersonnelCard person={markasPersonnel[1]} onClick={() => setSelected(markasPersonnel[1])} />
          </div>

          {/* Vertical line */}
          <div style={{ width: 2, height: 40, background: 'rgba(201, 168, 76, 0.2)' }} />

          {/* Unit header */}
          <div
            style={{
              padding: '10px 24px',
              background: 'rgba(107, 29, 42, 0.15)',
              border: '1px solid rgba(107, 29, 42, 0.25)',
              borderRadius: 10,
              fontFamily: 'var(--font-display)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'var(--maroon-light)',
              textAlign: 'center',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.5s',
            }}
          >
            Penanggulangan Teror<br />Aspek Laut
          </div>

          {/* Vertical line */}
          <div style={{ width: 2, height: 40, background: 'rgba(201, 168, 76, 0.2)' }} />

          {/* Horizontal branch */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 0,
              position: 'relative',
            }}
            className="coc-branch"
          >
            {/* Horizontal line connector */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '25%',
                right: '25%',
                height: 2,
                background: 'rgba(201, 168, 76, 0.2)',
              }}
              className="coc-hline"
            />

            {/* Left branch */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out 0.65s',
              }}
            >
              <div style={{ width: 2, height: 30, background: 'rgba(201, 168, 76, 0.2)' }} />
              <PersonnelCard person={terorPersonnel[0]} onClick={() => setSelected(terorPersonnel[0])} />
            </div>

            {/* Right branch */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out 0.8s',
              }}
            >
              <div style={{ width: 2, height: 30, background: 'rgba(201, 168, 76, 0.2)' }} />
              <PersonnelCard person={terorPersonnel[1]} onClick={() => setSelected(terorPersonnel[1])} />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <PersonnelModal person={selected} onClose={() => setSelected(null)} />

      <style>{`
        @media (max-width: 640px) {
          .coc-branch {
            flex-direction: column !important;
            align-items: center !important;
          }
          .coc-hline {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function PersonnelCard({
  person,
  onClick,
  isTop = false,
}: {
  person: Personnel;
  onClick: () => void;
  isTop?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className="glass-card"
      style={{
        padding: '20px 28px',
        cursor: 'pointer',
        textAlign: 'center',
        minWidth: 220,
        maxWidth: 280,
        transition: 'all 0.3s ease',
        borderColor: isTop ? 'rgba(201, 168, 76, 0.3)' : undefined,
        background: isTop
          ? 'linear-gradient(135deg, rgba(13, 33, 55, 0.8), rgba(107, 29, 42, 0.15))'
          : undefined,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = isTop
          ? 'rgba(201, 168, 76, 0.3)'
          : 'rgba(201, 168, 76, 0.15)';
      }}
    >
      {/* Status dot */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          marginBottom: 8,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: person.status === 'Active' ? '#4ade80' : '#ef4444',
            boxShadow:
              person.status === 'Active'
                ? '0 0 8px rgba(74, 222, 128, 0.4)'
                : '0 0 8px rgba(239, 68, 68, 0.4)',
          }}
        />
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: 'uppercase',
            color: person.status === 'Active' ? '#4ade80' : '#ef4444',
          }}
        >
          {person.status}
        </span>
      </div>

      {/* Name */}
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: isTop ? '1rem' : '0.9rem',
          fontWeight: 700,
          color: 'var(--gold)',
          marginBottom: 4,
        }}
      >
        {person.nama}
      </div>

      {/* Rank */}
      <div
        style={{
          fontSize: '0.78rem',
          color: 'var(--white-muted)',
          marginBottom: 4,
        }}
      >
        {person.pangkat}
      </div>

      {/* Position */}
      <div
        style={{
          fontSize: '0.72rem',
          color: 'var(--white-muted)',
          opacity: 0.6,
          fontStyle: 'italic',
        }}
      >
        {person.jabatan}
      </div>
    </div>
  );
}
