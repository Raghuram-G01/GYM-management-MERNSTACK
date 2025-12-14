export const aboutStyles = {
  container: {
    minHeight: '100vh',
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#333'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  section: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#333'
  },
  sectionText: {
    color: '#666',
    lineHeight: '1.6'
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '1rem'
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '2rem 1rem'
    },
    content: {
      gridTemplateColumns: '1fr'
    }
  }
};

