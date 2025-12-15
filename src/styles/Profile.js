export const profileStyles = {
  container: {
    minHeight: '100vh',
    padding: '72px 24px 48px',
    maxWidth: '1000px',
    margin: '0 auto',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#F9FAFB',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: '1rem',
    color: '#9CA3AF'
  },
  profileCard: {
    padding: '2.6rem',
    borderRadius: '20px',
    marginBottom: '2rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'fadeIn 0.6s ease-out',
    animationFillMode: 'both',
    backgroundColor: '#111827',
    border: '1px solid #1F2937',
    boxShadow: '0 20px 60px rgba(0,0,0,0.55)'
  },
  avatarSection: {
    textAlign: 'center',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    borderBottom: '2px solid #f0f0f0'
  },
  avatarContainer: {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '1rem'
  },
  avatar: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    objectFit: 'cover',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'scaleIn 0.5s ease-out',
    animationFillMode: 'both'
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    backgroundColor: '#a855f7',
    border: '3px solid #111827',
    color: '#ffffff',
    fontSize: '1.2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease'
  },
  userName: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: '0.5rem'
  },
  userRole: {
    fontSize: '1rem',
    color: '#F97316',
    fontWeight: '500'
  },
  infoSection: {
    marginBottom: '2rem'
  },
  sectionTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#F9FAFB',
    marginBottom: '1.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #1F2937'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  },
  info: {
    marginBottom: '1.5rem'
  },
  label: {
    fontSize: '0.85rem',
    color: '#9CA3AF',
    fontWeight: '600',
    marginBottom: '0.5rem',
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  value: {
    fontSize: '1.1rem',
    padding: '1rem',
    borderRadius: '10px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    backgroundColor: '#0B1220',
    border: '1px solid #1F2937',
    color: '#E5E7EB'
  },
  valueIcon: {
    marginRight: '0.5rem',
    fontSize: '1.2rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    marginTop: '1.5rem'
  },
  statBox: {
    textAlign: 'center',
    padding: '1.5rem',
    backgroundColor: '#0B1220',
    borderRadius: '10px',
    border: '1px solid #1F2937'
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#F97316',
    marginBottom: '0.5rem'
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '2rem',
    paddingTop: '2rem',
    borderTop: '2px solid #1F2937'
  },
  button: {
    padding: '0.875rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  primaryButton: {
    backgroundColor: '#F97316',
    color: '#ffffff',
    flex: 1,
    minWidth: '150px',
    justifyContent: 'center'
  },
  primaryButtonHover: {
    backgroundColor: '#9333ea',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)'
  },
  secondaryButton: {
    backgroundColor: '#111827',
    color: '#F97316',
    border: '2px solid #F97316',
    flex: 1,
    minWidth: '150px',
    justifyContent: 'center'
  },
  secondaryButtonHover: {
    backgroundColor: '#f8f9fa',
    transform: 'translateY(-2px)'
  },
  dangerButton: {
    backgroundColor: '#ff6b6b',
    color: '#ffffff',
    flex: 1,
    minWidth: '150px',
    justifyContent: 'center'
  },
  dangerButtonHover: {
    backgroundColor: '#ff5252',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(255, 107, 107, 0.4)'
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '56px 18px 40px'
    },
    profileCard: {
      padding: '2rem 1.5rem',
      borderRadius: '15px'
    },
    avatar: {
      width: '150px',
      height: '150px'
    },
    infoGrid: {
      gridTemplateColumns: '1fr',
      gap: '1rem'
    },
    actions: {
      flexDirection: 'column',
      gap: '0.75rem'
    },
    button: {
      width: '100%'
    },
    statsGrid: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0.75rem'
    },
    statBox: {
      padding: '1rem'
    }
  },
  '@media (max-width: 480px)': {
    container: {
      padding: '1rem 0.75rem'
    },
    profileCard: {
      padding: '1.5rem 1rem'
    },
    avatar: {
      width: '120px',
      height: '120px'
    },
    title: {
      fontSize: '2rem'
    },
    statsGrid: {
      gridTemplateColumns: '1fr',
      gap: '0.5rem'
    }
  }
};

