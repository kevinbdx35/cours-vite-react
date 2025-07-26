
function Logo({ size = 'medium' }) {
  const sizes = {
    small: { width: '24px', height: '24px', fontSize: '1rem' },
    medium: { width: '32px', height: '32px', fontSize: '1.2rem' },
    large: { width: '48px', height: '48px', fontSize: '1.5rem' }
  }

  const currentSize = sizes[size]

  return (
    <div
      className="hover-scale clickable"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer'
      }}
    >
      <div
        style={{
          ...currentSize,
          background: 'linear-gradient(135deg, #646cff 0%, #747bff 100%)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: currentSize.fontSize,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        ⚡
      </div>
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 1.2
        }}
      >
        <span style={{ 
          fontWeight: '600', 
          fontSize: '0.875rem',
          color: '#202223'
        }}>
          Vite + React
        </span>
        <span style={{ 
          fontSize: '0.75rem', 
          color: '#6d7175',
          fontWeight: '400'
        }}>
          Cours Interactif
        </span>
      </div>
    </div>
  )
}

export default Logo