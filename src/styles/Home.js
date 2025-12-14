export const homeStyles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#ffffff',
    padding: '4rem 2rem',
    textAlign: 'center'
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold'
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    opacity: 0.9
  },
  ctaButton: {
    backgroundColor: '#ff6b6b',
    color: '#ffffff',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#ff5252'
    }
  },
  features: {
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  featuresTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#333'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  },
  featureImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '1rem'
  },
  featureTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#333'
  },
  featureText: {
    color: '#666',
    lineHeight: '1.6'
  },
  '@media (max-width: 768px)': {
    heroTitle: {
      fontSize: '2rem'
    },
    heroSubtitle: {
      fontSize: '1.2rem'
    },
    featuresGrid: {
      gridTemplateColumns: '1fr'
    }
  }
};

