export const trainerProfileStyles = {
  container: {
    minHeight: '100vh',
    padding: '72px 24px 48px',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#1D1D1D',
    color: '#F9FAFB'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#F9FAFB',
    fontWeight: 800
  },
  subtitle: {
    fontSize: '1rem',
    color: '#9CA3AF'
  },
  profileCard: {
    backgroundColor: '#111827',
    borderRadius: '20px',
    padding: '2rem',
    border: '1px solid #1F2937',
    marginBottom: '2rem',
    boxShadow: '0 20px 60px rgba(0,0,0,0.55)'
  },
  avatarSection: {
    textAlign: 'center',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    borderBottom: '1px solid #1F2937'
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#F97316',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    fontWeight: 700,
    color: '#111827',
    margin: '0 auto 1rem'
  },
  trainerName: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#F9FAFB',
    marginBottom: '0.5rem'
  },
  trainerRole: {
    fontSize: '1rem',
    color: '#F97316',
    fontWeight: 600
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  infoCard: {
    backgroundColor: '#0B1220',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid #1F2937'
  },
  infoTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#F9FAFB',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  infoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 0',
    borderBottom: '1px solid #1F2937'
  },
  infoLabel: {
    fontSize: '0.9rem',
    color: '#9CA3AF',
    fontWeight: 600
  },
  infoValue: {
    fontSize: '0.9rem',
    color: '#E5E7EB',
    fontWeight: 500
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  },
  statCard: {
    backgroundColor: '#0B1220',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid #1F2937',
    textAlign: 'center'
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 800,
    color: '#F97316',
    marginBottom: '0.5rem'
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  specializations: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.5rem'
  },
  specializationTag: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#F97316',
    color: '#111827',
    borderRadius: '999px',
    fontSize: '0.8rem',
    fontWeight: 600
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '2rem',
    paddingTop: '2rem',
    borderTop: '1px solid #1F2937'
  },
  button: {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    flex: 1,
    minWidth: '150px'
  },
  primaryButton: {
    backgroundColor: '#F97316',
    color: '#111827'
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#F97316',
    border: '2px solid #F97316'
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '56px 18px 40px'
    },
    title: {
      fontSize: '2rem'
    },
    profileCard: {
      padding: '1.5rem'
    },
    avatar: {
      width: '100px',
      height: '100px',
      fontSize: '2.5rem'
    },
    infoGrid: {
      gridTemplateColumns: '1fr'
    },
    statsGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    actions: {
      flexDirection: 'column'
    },
    button: {
      width: '100%'
    }
  },
  '@media (max-width: 480px)': {
    profileCard: {
      padding: '1rem'
    },
    statsGrid: {
      gridTemplateColumns: '1fr'
    },
    statCard: {
      padding: '1rem'
    }
  }
};