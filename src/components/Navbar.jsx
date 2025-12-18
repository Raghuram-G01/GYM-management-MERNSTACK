import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { navbarStyles } from '../styles/Navbar.js';
import Logo from './Logo.jsx';

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme, colors } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [navElevated, setNavElevated] = useState(window.scrollY > 8);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    const handleScroll = () => setNavElevated(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getNavbarStyles = () => ({
    ...navbarStyles.navbar,
    backgroundColor: navElevated ? colors.surface : `${colors.surface}f2`,
    boxShadow: navElevated ? `0 10px 30px ${colors.shadow}` : `0 2px 12px ${colors.shadow}`,
    borderBottom: `1px solid ${colors.border}`
  });

  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const role = user?.role;

  const publicLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/plans', label: 'Plans' },
    { to: '/contact', label: 'Contact' },
    { to: '/login', label: 'Login' }
  ];

  const memberLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/workout', label: 'Workout' },
    { to: '/attendance', label: 'Attendance' },
    { to: '/profile', label: 'Profile' }
  ];

  const trainerLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/members', label: 'Members' },
    { to: '/attendance', label: 'Attendance' },
    { to: '/profile', label: 'Profile' }
  ];

  const adminLinks = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/users', label: 'Users' },
    { to: '/plans', label: 'Plans' },
    { to: '/payments', label: 'Payments' },
    { to: '/reports', label: 'Reports' },
    { to: '/settings', label: 'Settings' }
  ];

  const getNavLinks = () => {
    if (!user) return publicLinks;
    switch (role) {
      case 'admin': return adminLinks;
      case 'trainer': return trainerLinks;
      case 'member': return memberLinks;
      default: return publicLinks;
    }
  };

  const navLinks = getNavLinks();

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
      <div style={navbarStyles.inner}>
        <Link 
          to="/" 
          style={{ 
            ...navbarStyles.logo,
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            const logoContainer = e.currentTarget.querySelector('div');
            if (logoContainer) {
              logoContainer.style.transform = 'scale(1.1)';
            }
          }}
          onMouseLeave={(e) => {
            const logoContainer = e.currentTarget.querySelector('div');
            if (logoContainer) {
              logoContainer.style.transform = 'scale(1)';
            }
          }}
        >
          <Logo size={80} />
        </Link>
        
        <button
          style={{
            ...navbarStyles.mobileMenuButton,
            color: colors.text,
            display: isMobile ? 'block' : 'none',
            border: `2px solid #8B5CF6`,
            borderRadius: '8px'
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          onMouseEnter={(e) => e.target.style.backgroundColor = colors.surfaceElevated}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="nav-links"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul
          id="nav-links"
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
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                style={getNavLinkStyles(item.to)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {!user && (
            <li>
              <Link
                to="/register"
                style={getNavLinkStyles('/register')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </li>
          )}
          {user && (
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem('user');
                  window.location.href = '/';
                }}
                style={{
                  ...navbarStyles.navLink,
                  background: 'none',
                  border: `1px solid #8B5CF6`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  color: colors.text
                }}
              >
                Logout ({user.name})
              </button>
            </li>
          )}
          <li>
            <button
              onClick={toggleTheme}
              style={{
                ...navbarStyles.themeToggle,
                backgroundColor: colors.surfaceElevated,
                color: colors.text,
                border: `1px solid #8B5CF6`
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


      </div>
    </nav>
  );
};

export default Navbar;

