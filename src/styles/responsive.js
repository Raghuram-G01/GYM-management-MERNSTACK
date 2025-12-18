export const getResponsiveStyles = () => {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  return {
    container: {
      padding: isMobile ? '16px' : '32px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heading: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      marginBottom: '8px'
    },
    subheading: {
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      marginBottom: isMobile ? '16px' : '32px',
      opacity: 0.8
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: isMobile ? '16px' : '24px'
    },
    card: {
      padding: isMobile ? '16px' : '24px',
      borderRadius: isMobile ? '8px' : '12px'
    },
    button: {
      padding: isMobile ? '8px 16px' : '12px 24px',
      fontSize: isMobile ? '0.9rem' : '1rem'
    },
    table: {
      overflowX: 'auto',
      display: 'block'
    },
    flexHeader: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? '16px' : '0',
      marginBottom: isMobile ? '16px' : '32px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? '12px' : '20px'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '12px' : '16px'
    },
    modal: {
      width: isMobile ? '95%' : '90%',
      maxWidth: isMobile ? '100%' : '600px',
      padding: isMobile ? '20px' : '32px',
      maxHeight: '80vh',
      overflow: 'auto'
    }
  };
};
