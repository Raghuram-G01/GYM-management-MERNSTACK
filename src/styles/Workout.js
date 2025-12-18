export const workoutStyles = {
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
    fontSize: '1rem',
    transition: 'all 0.3s ease'
  },
  workoutGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem'
  },
  workoutCard: {
    backgroundColor: '#111827',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '1px solid #1F2937',
    transition: 'transform 0.3s ease'
  },
  workoutName: {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#F9FAFB',
    marginBottom: '0.5rem'
  },
  workoutType: {
    fontSize: '0.9rem',
    color: '#F97316',
    fontWeight: 600,
    marginBottom: '1rem'
  },
  workoutDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  workoutDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#E5E7EB',
    fontSize: '0.9rem'
  },
  workoutDescription: {
    color: '#9CA3AF',
    fontSize: '0.9rem',
    lineHeight: 1.5,
    marginBottom: '1rem'
  },
  workoutActions: {
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
    fontSize: '0.9rem'
  },
  deleteButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#EF4444',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem'
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
    zIndex: 1000,
    padding: '1rem'
  },
  modalContent: {
    backgroundColor: '#111827',
    borderRadius: '16px',
    padding: '2rem',
    width: '100%',
    maxWidth: '600px',
    border: '1px solid #1F2937',
    maxHeight: '90vh',
    overflowY: 'auto'
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
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
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
  select: {
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
  submitButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#F97316',
    color: '#111827',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    flex: 1
  },
  cancelButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#6B7280',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    flex: 1
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '56px 18px 40px'
    },
    header: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    workoutGrid: {
      gridTemplateColumns: '1fr'
    },
    formRow: {
      gridTemplateColumns: '1fr'
    },
    modalContent: {
      padding: '1.5rem',
      margin: '0.5rem'
    },
    modalActions: {
      flexDirection: 'column'
    }
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '2rem'
    },
    workoutCard: {
      padding: '1rem'
    },
    modal: {
      padding: '0.5rem'
    }
  }
};