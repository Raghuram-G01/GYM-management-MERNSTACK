import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

const AuthGuard = ({ children, requiredRole = null }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { colors } = useTheme();

  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem('user');
      
      if (!userData) {
        navigate('/login');
        return;
      }

      try {
        const parsedUser = JSON.parse(userData);
        
        // Check if token exists
        if (!parsedUser.token) {
          localStorage.removeItem('user');
          navigate('/login');
          return;
        }

        // Check if token is expired (basic check)
        const tokenPayload = JSON.parse(atob(parsedUser.token.split('.')[1]));
        const currentTime = Date.now() / 1000;
        
        if (tokenPayload.exp < currentTime) {
          localStorage.removeItem('user');
          navigate('/login');
          return;
        }

        // Check role authorization
        if (requiredRole && parsedUser.role !== requiredRole) {
          navigate('/dashboard');
          return;
        }

        setUser(parsedUser);
      } catch (error) {
        localStorage.removeItem('user');
        navigate('/login');
        return;
      }
      
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate, requiredRole]);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: colors.background,
        color: colors.text
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: `4px solid ${colors.border}`,
          borderTop: `4px solid ${colors.primary}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '20px'
        }} />
        <h2>Verifying Access...</h2>
        <p style={{ opacity: 0.7 }}>Please wait while we authenticate your session</p>
        
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: colors.background,
        color: colors.text,
        textAlign: 'center',
        padding: '20px'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔒</div>
        <h2>Access Denied</h2>
        <p style={{ opacity: 0.7, marginBottom: '20px' }}>
          You need to be logged in to access this page
        </p>
        <button
          onClick={() => navigate('/login')}
          style={{
            padding: '12px 24px',
            backgroundColor: colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return children;
};

export default AuthGuard;