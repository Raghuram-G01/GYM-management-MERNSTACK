export const membersStyles = {
  container: {
    minHeight: '100vh',
    padding: '72px 24px 48px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#1D1D1D',
    color: '#F9FAFB'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  title: {
    fontSize: '2.4rem',
    color: '#F9FAFB',
    fontWeight: 800,
    margin: 0
  },
  searchContainer: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  searchInput: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #1F2937',
    backgroundColor: '#0B1220',
    color: '#F9FAFB',
    fontSize: '1rem',
    minWidth: '250px'
  },
  addButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#F97316',
    color: '#111827',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '1rem'
  },
  membersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  },
  memberCard: {
    backgroundColor: '#111827',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '1px solid #1F2937',
    transition: 'transform 0.3s ease'
  },
  memberHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  },
  memberAvatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#F97316',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#111827'
  },
  memberInfo: {
    flex: 1
  },
  memberName: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#F9FAFB',
    marginBottom: '0.25rem'
  },
  memberEmail: {
    fontSize: '0.9rem',
    color: '#9CA3AF'
  },
  memberDetails: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  memberDetail: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  detailLabel: {
    fontSize: '0.8rem',
    color: '#9CA3AF',
    fontWeight: 600
  },
  detailValue: {
    fontSize: '0.9rem',
    color: '#E5E7EB'
  },
  memberActions: {
    display: 'flex',
    gap: '0.5rem'
  },
  editButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#3B82F6',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    flex: 1
  },
  deleteButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#EF4444',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    flex: 1
  },
  statusBadge: {
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
    fontSize: '0.8rem',
    fontWeight: 600,
    textAlign: 'center'
  },
  statusActive: {
    backgroundColor: '#10B981',
    color: '#FFFFFF'
  },
  statusInactive: {
    backgroundColor: '#EF4444',
    color: '#FFFFFF'
  },
  statusExpired: {
    backgroundColor: '#F59E0B',
    color: '#FFFFFF'
  },
  emptyState: {
    textAlign: 'center',
    padding: '3rem',
    color: '#9CA3AF'
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '56px 18px 40px'
    },
    header: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    searchContainer: {
      width: '100%',
      justifyContent: 'stretch'
    },
    searchInput: {
      flex: 1,
      minWidth: 'auto'
    },
    membersGrid: {
      gridTemplateColumns: '1fr'
    },
    memberDetails: {
      gridTemplateColumns: '1fr'
    }
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '2rem'
    },
    memberCard: {
      padding: '1rem'
    },
    memberHeader: {
      flexDirection: 'column',
      textAlign: 'center'
    },
    memberActions: {
      flexDirection: 'column'
    }
  }
};