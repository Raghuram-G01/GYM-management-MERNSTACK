import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { profileStyles } from '../styles/Profile.js';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { colors } = useTheme();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  if (!user) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '4rem',
        color: colors.text,
        animation: 'fadeIn 0.5s ease-in'
      }}>
        <div style={{ fontSize: '1.5rem' }}>Loading...</div>
      </div>
    );
  }

  const stats = [
    { value: '0', label: 'Workouts' },
    { value: '0', label: 'Goals' },
    { value: '0', label: 'Streak' }
  ];

  return (
    <div style={{
      ...profileStyles.container,
      backgroundColor: colors.background,
      color: colors.text,
      animation: 'fadeIn 0.5s ease-in'
    }}>
      <div style={profileStyles.header}>
        <h1 style={{ ...profileStyles.title, color: colors.text }}>My Profile</h1>
        <p style={{ ...profileStyles.subtitle, color: colors.textSecondary }}>Manage your account and preferences</p>
      </div>

      <div style={{
        ...profileStyles.profileCard,
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        boxShadow: `0 4px 20px ${colors.shadow}`
      }}>
        <div style={profileStyles.avatarSection}>
          <div style={profileStyles.avatarContainer}>
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                user.name
              )}&size=180&background=667eea&color=fff&bold=true`}
              alt="Profile"
              style={profileStyles.avatar}
            />
            <button
              style={profileStyles.editAvatarButton}
              title="Edit Avatar"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#5568d3';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#667eea';
                e.target.style.transform = 'scale(1)';
              }}
            >
              ✏️
            </button>
          </div>
          <div style={profileStyles.userName}>{user.name}</div>
          <div style={profileStyles.userRole}>Fitness Enthusiast</div>
        </div>

        <div style={profileStyles.infoSection}>
          <h3 style={profileStyles.sectionTitle}>Personal Information</h3>
          <div style={profileStyles.infoGrid}>
            <div style={profileStyles.info}>
              <label style={profileStyles.label}>
                <span style={profileStyles.valueIcon}>👤</span> Full Name
              </label>
              <div style={profileStyles.value}>{user.name}</div>
            </div>
            <div style={profileStyles.info}>
              <label style={profileStyles.label}>
                <span style={profileStyles.valueIcon}>📧</span> Email Address
              </label>
              <div style={profileStyles.value}>{user.email}</div>
            </div>
            <div style={profileStyles.info}>
              <label style={profileStyles.label}>
                <span style={profileStyles.valueIcon}>🆔</span> User ID
              </label>
              <div style={profileStyles.value}>{user.id}</div>
            </div>
            <div style={profileStyles.info}>
              <label style={profileStyles.label}>
                <span style={profileStyles.valueIcon}>📅</span> Member Since
              </label>
              <div style={profileStyles.value}>
                {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </div>

        <div style={profileStyles.infoSection}>
          <h3 style={profileStyles.sectionTitle}>Your Statistics</h3>
          <div style={profileStyles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={profileStyles.statBox}>
                <div style={profileStyles.statValue}>{stat.value}</div>
                <div style={profileStyles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={profileStyles.actions}>
          <Link
            to="/dashboard"
            style={{
              ...profileStyles.button,
              ...profileStyles.secondaryButton,
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f8f9fa';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            ← Back to Dashboard
          </Link>
          <button
            style={{
              ...profileStyles.button,
              ...profileStyles.primaryButton
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#5568d3';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#667eea';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            ✏️ Edit Profile
          </button>
          <button
            style={{
              ...profileStyles.button,
              ...profileStyles.dangerButton
            }}
            onClick={handleLogout}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ff5252';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#ff6b6b';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

