import { useTheme } from '../context/ThemeContext.jsx';
import gymLogo from '../styles/gym.jpeg';

const Logo = ({ size = 100}) => {
  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  };

  return (
    <div style={logoStyle}>
      <img
        src={gymLogo}
        alt="GYM Logo"
        style={{
          width: size,
          height: size,
          borderRadius: '8px',
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
        }}
      />
      <span
        style={{
          fontSize: '1.8rem',
          fontWeight: '900',
          background: 'linear-gradient(45deg, #F97316, #EA580C, #DC2626)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontFamily: 'Impact, Arial Black, sans-serif',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.3))'
        }}
      >
        GYM
      </span>
    </div>
  );
};

export default Logo;




