export const contactStyles = {
  container: {
    minHeight: '100vh',
    padding: '72px 24px 48px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#1D1D1D',
    color: '#F9FAFB'
  },
  title: {
    fontSize: '2.2rem',
    textAlign: 'center',
    marginBottom: '12px',
    color: '#F9FAFB',
    fontWeight: 800
  },
  subtitle: {
    textAlign: 'center',
    color: '#9CA3AF',
    maxWidth: '640px',
    margin: '0 auto 32px',
    lineHeight: 1.6
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px'
  },
  formContainer: {
    backgroundColor: '#111827',
    padding: '22px',
    borderRadius: '20px',
    border: '1px solid #1F2937'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.45rem'
  },
  label: {
    fontSize: '0.9rem',
    color: '#9CA3AF',
    fontWeight: 600
  },
  input: {
    padding: '0.85rem 0.95rem',
    fontSize: '1rem',
    border: '1px solid #1F2937',
    borderRadius: '10px',
    outline: 'none',
    background: '#0B1220',
    color: '#F9FAFB'
  },
  textarea: {
    padding: '0.85rem 0.95rem',
    fontSize: '1rem',
    border: '1px solid #1F2937',
    borderRadius: '10px',
    outline: 'none',
    minHeight: '150px',
    resize: 'vertical',
    background: '#0B1220',
    color: '#F9FAFB'
  },
  button: {
    padding: '0.9rem',
    fontSize: '1rem',
    backgroundColor: '#F97316',
    color: '#111827',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 700
  },
  infoContainer: {
    backgroundColor: '#111827',
    padding: '22px',
    borderRadius: '20px',
    border: '1px solid #1F2937'
  },
  infoItem: {
    marginBottom: '1.3rem'
  },
  infoLabel: {
    fontSize: '0.9rem',
    color: '#9CA3AF',
    fontWeight: 600,
    marginBottom: '0.35rem'
  },
  infoText: {
    color: '#E5E7EB',
    fontSize: '1rem',
    lineHeight: 1.5
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '56px 18px 40px'
    },
    content: {
      gridTemplateColumns: '1fr'
    }
  }
};

