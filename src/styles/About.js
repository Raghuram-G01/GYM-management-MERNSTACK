export const aboutStyles = {
  container: {
    minHeight: '100vh',
    padding: '72px 24px 48px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#1D1D1D',
    color: '#F9FAFB'
  },
  title: {
    fontSize: '2.4rem',
    textAlign: 'center',
    marginBottom: '28px',
    color: '#F9FAFB',
    fontWeight: 800
  },
  subtitle: {
    textAlign: 'center',
    color: '#9CA3AF',
    maxWidth: '720px',
    margin: '0 auto 36px',
    lineHeight: 1.7
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '12px'
  },
  section: {
    backgroundColor: '#111827',
    padding: '20px',
    borderRadius: '20px',
    border: '1px solid #1F2937'
  },
  sectionTitle: {
    fontSize: '1.25rem',
    marginBottom: '10px',
    color: '#F9FAFB',
    fontWeight: 700
  },
  sectionText: {
    color: '#9CA3AF',
    lineHeight: 1.7,
    fontSize: '0.95rem'
  },
  image: {
    width: '100%',
    height: '240px',
    objectFit: 'cover',
    borderRadius: '14px',
    marginBottom: '12px',
    boxShadow: '0 16px 32px rgba(0,0,0,0.45)'
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '56px 18px 40px'
    },
    content: {
      gridTemplateColumns: '1fr'
    },
    title: {
      fontSize: '2rem'
    }
  }
};

