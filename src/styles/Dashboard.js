export const dashboardStyles = {
  container: {
    minHeight: '100vh',
    padding: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  },
  header: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#1a1a1a',
    fontWeight: 'bold'
  },
  welcome: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem'
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  statCard: {
    padding: '2rem',
    borderRadius: '15px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    animation: 'scaleIn 0.5s ease-out',
    animationFillMode: 'both'
  },
  statCardHover: {
    transform: 'translateY(-8px) scale(1.02)'
  },
  statIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    display: 'block'
  },
  statValue: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: '0.5rem',
    lineHeight: '1'
  },
  statLabel: {
    fontSize: '1rem',
    color: '#666',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  statChange: {
    fontSize: '0.85rem',
    color: '#51cf66',
    marginTop: '0.5rem'
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  section: {
    padding: '2rem',
    borderRadius: '15px',
    marginBottom: '1.5rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'fadeIn 0.6s ease-out',
    animationFillMode: 'both'
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '2px solid #f0f0f0'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#1a1a1a',
    fontWeight: 'bold',
    margin: 0
  },
  sectionText: {
    color: '#666',
    lineHeight: '1.8',
    marginBottom: '1rem'
  },
  actionButton: {
    padding: '0.75rem 1.5rem',
    fontSize: '0.95rem',
    backgroundColor: '#667eea',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '500',
    display: 'inline-block',
    textDecoration: 'none'
  },
  actionButtonHover: {
    backgroundColor: '#5568d3',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
  },
  quickActions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    marginTop: '1rem'
  },
  actionCard: {
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    border: '1px solid #e9ecef',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  actionCardHover: {
    backgroundColor: '#e9ecef',
    transform: 'translateX(5px)'
  },
  actionIcon: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem'
  },
  actionTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '0.25rem'
  },
  actionDesc: {
    fontSize: '0.85rem',
    color: '#666'
  },
  progressSection: {
    marginTop: '1rem'
  },
  progressBar: {
    width: '100%',
    height: '10px',
    backgroundColor: '#e9ecef',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '0.5rem'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#667eea',
    borderRadius: '10px',
    transition: 'width 0.3s ease'
  },
  recentActivity: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  activityItem: {
    padding: '1rem',
    borderBottom: '1px solid #f0f0f0',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  activityIcon: {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: '50%'
  },
  activityContent: {
    flex: 1
  },
  activityTitle: {
    fontWeight: '600',
    color: '#333',
    marginBottom: '0.25rem'
  },
  activityTime: {
    fontSize: '0.85rem',
    color: '#999'
  },
  '@media (max-width: 968px)': {
    contentGrid: {
      gridTemplateColumns: '1fr'
    },
    quickActions: {
      gridTemplateColumns: '1fr'
    }
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '1rem'
    },
    stats: {
      gridTemplateColumns: '1fr',
      gap: '1rem'
    },
    statCard: {
      padding: '1.5rem'
    },
    title: {
      fontSize: '2rem'
    },
    section: {
      padding: '1.5rem'
    },
    actionCard: {
      padding: '1rem'
    }
  },
  '@media (max-width: 480px)': {
    container: {
      padding: '0.75rem'
    },
    stats: {
      gridTemplateColumns: '1fr'
    },
    statValue: {
      fontSize: '2rem'
    }
  }
};

