export const attendanceStyles = {
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
  filters: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  filterSelect: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #1F2937',
    backgroundColor: '#0B1220',
    color: '#F9FAFB',
    fontSize: '1rem'
  },
  dateInput: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #1F2937',
    backgroundColor: '#0B1220',
    color: '#F9FAFB',
    fontSize: '1rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  },
  statCard: {
    backgroundColor: '#111827',
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
    fontSize: '0.9rem',
    color: '#9CA3AF'
  },
  attendanceTable: {
    backgroundColor: '#111827',
    borderRadius: '16px',
    border: '1px solid #1F2937',
    overflow: 'hidden'
  },
  tableHeader: {
    backgroundColor: '#0B1220',
    padding: '1rem',
    borderBottom: '1px solid #1F2937'
  },
  tableTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#F9FAFB',
    margin: 0
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHead: {
    backgroundColor: '#0B1220'
  },
  tableRow: {
    borderBottom: '1px solid #1F2937'
  },
  tableHeader: {
    padding: '1rem',
    textAlign: 'left',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  tableCell: {
    padding: '1rem',
    fontSize: '0.9rem',
    color: '#E5E7EB'
  },
  memberInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  memberAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#F97316',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: 700,
    color: '#111827'
  },
  memberName: {
    fontWeight: 600,
    color: '#F9FAFB'
  },
  statusBadge: {
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
    fontSize: '0.8rem',
    fontWeight: 600
  },
  statusPresent: {
    backgroundColor: '#10B981',
    color: '#FFFFFF'
  },
  statusAbsent: {
    backgroundColor: '#EF4444',
    color: '#FFFFFF'
  },
  statusLate: {
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
    filters: {
      width: '100%',
      justifyContent: 'stretch'
    },
    filterSelect: {
      flex: 1
    },
    dateInput: {
      flex: 1
    },
    statsGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    attendanceTable: {
      overflowX: 'auto'
    },
    table: {
      minWidth: '600px'
    }
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '2rem'
    },
    statsGrid: {
      gridTemplateColumns: '1fr'
    },
    statCard: {
      padding: '1rem'
    },
    tableHeader: {
      padding: '0.75rem'
    },
    tableCell: {
      padding: '0.75rem'
    },
    memberInfo: {
      flexDirection: 'column',
      textAlign: 'center',
      gap: '0.5rem'
    }
  }
};