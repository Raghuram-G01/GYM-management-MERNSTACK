import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { navbarStyles } from '../styles/Navbar.js';

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme, colors } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getNavbarStyles = () => ({
    ...navbarStyles.navbar,
    backgroundColor: colors.surface,
    boxShadow: `0 2px 20px ${colors.shadow}`
  });

  const getNavLinkStyles = (path) => ({
    ...navbarStyles.navLink,
    color: colors.text,
    ...(isActive(path) ? {
      ...navbarStyles.activeLink,
      color: colors.primary,
      backgroundColor: `${colors.primary}15`
    } : {})
  });

  return (
    <nav style={getNavbarStyles()}>
      <Link 
        to="/" 
        style={{ 
          ...navbarStyles.logo, 
          color: colors.secondary 
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        💪 GYM
      </Link>
      
      <button
        style={{
          ...navbarStyles.mobileMenuButton,
          color: colors.text,
          display: isMobile ? 'block' : 'none'
        }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        onMouseEnter={(e) => e.target.style.backgroundColor = colors.surfaceElevated}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      <ul
        style={{
          ...navbarStyles.navLinks,
          backgroundColor: colors.surface,
          display: !isMobile || mobileMenuOpen ? 'flex' : 'none',
          flexDirection: isMobile ? 'column' : 'row',
          position: isMobile ? 'absolute' : 'static',
          top: isMobile ? '100%' : 'auto',
          left: isMobile ? 0 : 'auto',
          right: isMobile ? 0 : 'auto',
          width: isMobile ? '100%' : 'auto',
          padding: isMobile ? '1rem' : 0,
          boxShadow: isMobile ? `0 4px 20px ${colors.shadow}` : 'none',
          animation: isMobile && mobileMenuOpen ? 'slideIn 0.3s ease-out' : 'none'
        }}
      >
        <li>
          <Link
            to="/"
            style={getNavLinkStyles('/')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={getNavLinkStyles('/about')}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={getNavLinkStyles('/contact')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            style={getNavLinkStyles('/login')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            style={getNavLinkStyles('/register')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            style={getNavLinkStyles('/dashboard')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            style={getNavLinkStyles('/profile')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Profile
          </Link>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            style={{
              ...navbarStyles.themeToggle,
              backgroundColor: colors.surfaceElevated,
              color: colors.text,
              border: `1px solid ${colors.border}`
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1) rotate(180deg)';
              e.target.style.backgroundColor = colors.primary;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.backgroundColor = colors.surfaceElevated;
            }}
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

