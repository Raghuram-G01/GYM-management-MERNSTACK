export const registerStyles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/login_bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#0F1629',
    padding: '2.5rem'
  },
  formContainer: {
    backgroundColor: '#111827',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
    border: '1px solid #1F2937',
    width: '100%',
    maxWidth: '420px'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#F9FAFB',
    fontWeight: 800
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.45rem'
  },
  label: {
    fontSize: '0.9rem',
    color: '#9CA3AF',
    fontWeight: 600
  },
  input: {
    padding: '0.9rem',
    fontSize: '1rem',
    border: '1px solid #1F2937',
    borderRadius: '12px',
    outline: 'none',
    backgroundColor: '#0B1220',
    color: '#F9FAFB'
  },
  button: {
    padding: '0.9rem',
    fontSize: '1rem',
    backgroundColor: '#F97316',
    color: '#111827',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 700
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
    color: '#9CA3AF',
    fontSize: '0.9rem'
  },
  linkText: {
    color: '#F97316',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '1.5rem'
    },
    formContainer: {
      padding: '2rem'
    }
  },
  '@media (max-width: 480px)': {
    container: {
      padding: '1rem'
    },
    formContainer: {
      padding: '1.5rem'
    },
    title: {
      fontSize: '1.8rem'
    }
  }
};

