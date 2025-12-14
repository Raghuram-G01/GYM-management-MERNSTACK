export const loginStyles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '2rem'
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '3rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#333'
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
    },
    '&:disabled': {
      backgroundColor: '#ccc',
      cursor: 'not-allowed'
    }
  },
  error: {
    color: '#ff6b6b',
    fontSize: '0.9rem',
    textAlign: 'center'
  },
  success: {
    color: '#51cf66',
    fontSize: '0.9rem',
    textAlign: 'center'
  },
  link: {
    textAlign: 'center',
    marginTop: '1rem',
    color: '#666',
    fontSize: '0.9rem'
  },
  linkText: {
    color: '#667eea',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
};

