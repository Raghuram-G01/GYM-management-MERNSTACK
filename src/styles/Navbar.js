export const navbarStyles = {
  navbar: {
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'slideIn 0.4s ease-out'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
    animation: 'scaleIn 0.3s ease-out'
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden'
  },
  activeLink: {
    fontWeight: '600'
  },
  mobileMenuButton: {
    display: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  },
  themeToggle: {
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '40px',
    height: '40px'
  }
};

