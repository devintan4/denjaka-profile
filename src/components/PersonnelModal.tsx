interface Personnel {
  nama: string;
  pangkat: string;
  jabatan: string;
  status: 'Active' | 'Inactive';
  unit: string;
}

interface PersonnelModalProps {
  person: Personnel | null;
  onClose: () => void;
}

export default function PersonnelModal({ person, onClose }: PersonnelModalProps) {
  if (!person) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'rgba(201, 168, 76, 0.1)',
            border: '1px solid rgba(201, 168, 76, 0.2)',
            color: 'var(--gold)',
            width: 36,
            height: 36,
            borderRadius: 8,
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(201, 168, 76, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(201, 168, 76, 0.1)';
          }}
        >
          ✕
        </button>

        {/* Unit badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 12px',
            borderRadius: 12,
            background: 'rgba(107, 29, 42, 0.2)',
            border: '1px solid rgba(107, 29, 42, 0.3)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            color: 'var(--maroon-light)',
            fontFamily: 'var(--font-display)',
            marginBottom: 20,
          }}
        >
          {person.unit}
        </div>

        {/* Avatar placeholder */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 16,
            background: 'linear-gradient(135deg, var(--navy-light), var(--maroon))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            marginBottom: 20,
            border: '2px solid rgba(201, 168, 76, 0.2)',
          }}
        >
          🎖️
        </div>

        {/* Name */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontWeight: 700,
            color: 'var(--gold)',
            marginBottom: 8,
          }}
        >
          {person.nama}
        </h3>

        {/* Info grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
          <InfoRow label="Pangkat" value={person.pangkat} />
          <InfoRow label="Jabatan" value={person.jabatan} />
          <InfoRow
            label="Status"
            value={person.status}
            valueColor={person.status === 'Active' ? '#4ade80' : '#ef4444'}
          />
          <InfoRow label="Unit" value={person.unit} />
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 16px',
        background: 'rgba(10, 22, 40, 0.5)',
        borderRadius: 10,
        border: '1px solid rgba(201, 168, 76, 0.06)',
      }}
    >
      <span
        style={{
          fontSize: '0.78rem',
          fontWeight: 500,
          letterSpacing: 1,
          textTransform: 'uppercase',
          color: 'var(--white-muted)',
          opacity: 0.6,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: '0.88rem',
          fontWeight: 600,
          color: valueColor || 'var(--white)',
        }}
      >
        {value}
      </span>
    </div>
  );
}
