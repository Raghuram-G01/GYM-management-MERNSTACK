export const plansStyles = {
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
    maxWidth: '600px',
    margin: '0 auto'
  },
  adminActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '2rem',
    gap: '1rem'
  },
  button: {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease'
  },
  primaryButton: {
    backgroundColor: '#F97316',
    color: '#111827'
  },
  plansGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  planCard: {
    backgroundColor: '#111827',
    borderRadius: '16px',
    padding: '2rem',
    border: '1px solid #1F2937',
    position: 'relative',
    transition: 'transform 0.3s ease'
  },
  planName: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#F9FAFB',
    marginBottom: '0.5rem'
  },
  planPrice: {
    fontSize: '2rem',
    fontWeight: 800,
    color: '#F97316',
    marginBottom: '1rem'
  },
  planFeatures: {
    listStyle: 'none',
    padding: 0,
    margin: '1rem 0',
    color: '#E5E7EB'
  },
  planFeature: {
    padding: '0.5rem 0',
    borderBottom: '1px solid #1F2937'
  },
  planActions: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem'
  },
  editButton: {
    backgroundColor: '#3B82F6',
    color: '#FFFFFF'
  },
  deleteButton: {
    backgroundColor: '#EF4444',
    color: '#FFFFFF'
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: '#111827',
    borderRadius: '16px',
    padding: '2rem',
    width: '90%',
    maxWidth: '500px',
    border: '1px solid #1F2937'
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#F9FAFB',
    marginBottom: '1.5rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontSize: '0.9rem',
    color: '#9CA3AF',
    fontWeight: 600
  },
  input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #1F2937',
    backgroundColor: '#0B1220',
    color: '#F9FAFB',
    fontSize: '1rem'
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #1F2937',
    backgroundColor: '#0B1220',
    color: '#F9FAFB',
    fontSize: '1rem',
    minHeight: '100px',
    resize: 'vertical'
  },
  modalActions: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem'
  },
  cancelButton: {
    backgroundColor: '#6B7280',
    color: '#FFFFFF',
    flex: 1
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '56px 18px 40px'
    },
    plansGrid: {
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    },
    adminActions: {
      justifyContent: 'center'
    },
    modalContent: {
      padding: '1.5rem',
      margin: '1rem'
    },
    modalActions: {
      flexDirection: 'column'
    }
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '2rem'
    },
    planCard: {
      padding: '1.5rem'
    }
  }
};