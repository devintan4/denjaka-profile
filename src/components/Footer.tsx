export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--navy-darkest)',
        borderTop: '1px solid rgba(201, 168, 76, 0.08)',
        padding: '40px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Logo */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontWeight: 800,
            letterSpacing: 4,
            background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 12,
          }}
        >
          DENJAKA
        </div>

        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--white-muted)',
            opacity: 0.5,
            letterSpacing: 0.5,
          }}
        >
          Detasemen Jala Mangkara — TNI AL Military Roleplay
        </p>

        <div
          style={{
            width: 40,
            height: 1,
            background: 'rgba(201, 168, 76, 0.2)',
            margin: '20px auto',
          }}
        />

        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--white-muted)',
            opacity: 0.35,
          }}
        >
          © 2026 DENJAKA Roleplay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
