export const contactStyles = {
  container: {
    minHeight: '100vh',
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#333'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontSize: '0.9rem',
    color: '#666',
    fontWeight: '500'
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    '&:focus': {
      borderColor: '#667eea'
    }
  },
  textarea: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
    minHeight: '150px',
    resize: 'vertical',
    transition: 'border-color 0.3s ease',
    '&:focus': {
      borderColor: '#667eea'
    }
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#667eea',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#5568d3'
    }
  },
  infoContainer: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  infoItem: {
    marginBottom: '1.5rem'
  },
  infoLabel: {
    fontSize: '0.9rem',
    color: '#666',
    fontWeight: '500',
    marginBottom: '0.5rem'
  },
  infoText: {
    color: '#333',
    fontSize: '1rem'
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '2rem 1rem'
    },
    content: {
      gridTemplateColumns: '1fr'
    }
  }
};

