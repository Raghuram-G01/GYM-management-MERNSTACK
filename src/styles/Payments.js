export const paymentsStyles = {
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
  paymentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
  },
  paymentCard: {
    backgroundColor: '#111827',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '1px solid #1F2937'
  },
  paymentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  paymentAmount: {
    fontSize: '1.8rem',
    fontWeight: 800,
    color: '#F97316'
  },
  paymentStatus: {
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
    fontSize: '0.8rem',
    fontWeight: 600
  },
  statusPaid: {
    backgroundColor: '#10B981',
    color: '#FFFFFF'
  },
  statusPending: {
    backgroundColor: '#F59E0B',
    color: '#FFFFFF'
  },
  statusOverdue: {
    backgroundColor: '#EF4444',
    color: '#FFFFFF'
  },
  paymentDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  paymentDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem',
    color: '#E5E7EB'
  },
  paymentActions: {
    display: 'flex',
    gap: '0.5rem'
  },
  payButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#10B981',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    flex: 1
  },
  viewButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#3B82F6',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    flex: 1
  },
  paymentHistory: {
    backgroundColor: '#111827',
    borderRadius: '16px',
    border: '1px solid #1F2937',
    overflow: 'hidden'
  },
  historyHeader: {
    backgroundColor: '#0B1220',
    padding: '1rem',
    borderBottom: '1px solid #1F2937'
  },
  historyTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#F9FAFB',
    margin: 0
  },
  historyTable: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHeader: {
    backgroundColor: '#0B1220',
    padding: '1rem',
    textAlign: 'left',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#9CA3AF',
    borderBottom: '1px solid #1F2937'
  },
  tableCell: {
    padding: '1rem',
    fontSize: '0.9rem',
    color: '#E5E7EB',
    borderBottom: '1px solid #1F2937'
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
    title: {
      fontSize: '2rem'
    },
    paymentGrid: {
      gridTemplateColumns: '1fr'
    },
    paymentActions: {
      flexDirection: 'column'
    },
    paymentHistory: {
      overflowX: 'auto'
    },
    historyTable: {
      minWidth: '600px'
    }
  },
  '@media (max-width: 480px)': {
    paymentCard: {
      padding: '1rem'
    },
    paymentHeader: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.5rem'
    },
    tableHeader: {
      padding: '0.75rem'
    },
    tableCell: {
      padding: '0.75rem'
    }
  }
};