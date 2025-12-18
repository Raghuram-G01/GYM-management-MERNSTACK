export const memberDashboardStyles = {
  container: {
    minHeight: '100vh',
    padding: '72px 24px 48px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#1D1D1D',
    color: '#F9FAFB'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2.4rem',
    marginBottom: '0.5rem',
    color: '#F9FAFB',
    fontWeight: 800
  },
  subtitle: {
    fontSize: '1rem',
    color: '#9CA3AF',
    marginBottom: '2rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  statCard: {
    backgroundColor: '#111827',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '1px solid #1F2937',
    textAlign: 'center'
  },
  statValue: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#F97316',
    marginBottom: '0.5rem'
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  quickActions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  },
  actionCard: {
    backgroundColor: '#111827',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid #1F2937',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  actionIcon: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  actionTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#F9FAFB',
    marginBottom: '0.5rem'
  },
  actionDescription: {
    fontSize: '0.9rem',
    color: '#9CA3AF'
  },
  recentActivity: {
    backgroundColor: '#111827',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '1px solid #1F2937'
  },
  sectionTitle: {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#F9FAFB',
    marginBottom: '1rem'
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  activityItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#0B1220',
    borderRadius: '8px',
    border: '1px solid #1F2937'
  },
  activityIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#F97316',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem'
  },
  activityContent: {
    flex: 1
  },
  activityTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#F9FAFB',
    marginBottom: '0.25rem'
  },
  activityTime: {
    fontSize: '0.8rem',
    color: '#9CA3AF'
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '56px 18px 40px'
    },
    title: {
      fontSize: '2rem'
    },
    statsGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem'
    },
    quickActions: {
      gridTemplateColumns: '1fr'
    },
    activityItem: {
      flexDirection: 'column',
      textAlign: 'center'
    }
  },
  '@media (max-width: 480px)': {
    statsGrid: {
      gridTemplateColumns: '1fr'
    },
    statCard: {
      padding: '1rem'
    },
    actionCard: {
      padding: '1rem'
    }
  }
};