import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { dashboardStyles } from '../styles/Dashboard.js';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
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
    { icon: '💪', value: '0', label: 'Workouts Completed', change: '+0 this week' },
    { icon: '🔥', value: '0', label: 'Calories Burned', change: '+0 today' },
    { icon: '📅', value: '0', label: 'Days Active', change: '0 day streak' },
    { icon: '⏱️', value: '0', label: 'Total Minutes', change: '0 min this week' }
  ];

  const quickActions = [
    { icon: '➕', title: 'Log Workout', desc: 'Record your exercise session', link: '/dashboard' },
    { icon: '🎯', title: 'Set Goals', desc: 'Define your fitness targets', link: '/dashboard' },
    { icon: '📊', title: 'View Progress', desc: 'Track your improvements', link: '/dashboard' },
    { icon: '👤', title: 'Edit Profile', desc: 'Update your information', link: '/profile' }
  ];

  const recentActivities = [
    { icon: '✅', title: 'Account Created', time: 'Just now' },
    { icon: '🎉', title: 'Welcome to GYM!', time: 'Start your fitness journey' }
  ];

  return (
    <div style={{
      ...dashboardStyles.container,
      backgroundColor: colors.background,
      color: colors.text,
      animation: 'fadeIn 0.5s ease-in'
    }}>
      <div style={dashboardStyles.header}>
        <h1 style={dashboardStyles.title}>Dashboard</h1>
        <p style={dashboardStyles.welcome}>
          Welcome back, <strong>{user.name}</strong>! 👋 Ready to crush your goals today?
        </p>
      </div>

      <div style={dashboardStyles.stats}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              ...dashboardStyles.statCard,
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
              boxShadow: `0 2px 10px ${colors.shadow}`,
              ...(hoveredCard === `stat-${index}` ? {
                ...dashboardStyles.statCardHover,
                boxShadow: `0 8px 20px ${colors.shadowHover}`,
                transform: 'translateY(-5px)'
              } : {})
            }}
            onMouseEnter={() => setHoveredCard(`stat-${index}`)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <span style={dashboardStyles.statIcon}>{stat.icon}</span>
            <div style={{ ...dashboardStyles.statValue, color: colors.primary }}>{stat.value}</div>
            <div style={{ ...dashboardStyles.statLabel, color: colors.textSecondary }}>{stat.label}</div>
            <div style={{ ...dashboardStyles.statChange, color: colors.accent }}>{stat.change}</div>
          </div>
        ))}
      </div>

      <div style={dashboardStyles.contentGrid}>
        <div>
          <div style={{
            ...dashboardStyles.section,
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            boxShadow: `0 2px 10px ${colors.shadow}`
          }}>
            <div style={dashboardStyles.sectionHeader}>
              <h2 style={{ ...dashboardStyles.sectionTitle, color: colors.text }}>Your Progress</h2>
            </div>
            <p style={dashboardStyles.sectionText}>
              Start tracking your workouts and see your progress over time. Set goals, 
              log exercises, and stay motivated on your fitness journey.
            </p>
            <div style={dashboardStyles.progressSection}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>Weekly Goal Progress</span>
                <span style={{ fontSize: '0.9rem', color: '#667eea', fontWeight: '600' }}>0%</span>
              </div>
              <div style={dashboardStyles.progressBar}>
                <div style={{ ...dashboardStyles.progressFill, width: '0%' }}></div>
              </div>
            </div>
            <Link
              to="/dashboard"
              style={dashboardStyles.actionButton}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#5568d3';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#667eea';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Start Tracking →
            </Link>
          </div>

          <div style={dashboardStyles.section}>
            <div style={dashboardStyles.sectionHeader}>
              <h2 style={dashboardStyles.sectionTitle}>Quick Actions</h2>
            </div>
            <div style={dashboardStyles.quickActions}>
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  style={{
                    ...dashboardStyles.actionCard,
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e9ecef';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={dashboardStyles.actionIcon}>{action.icon}</div>
                  <div style={dashboardStyles.actionTitle}>{action.title}</div>
                  <div style={dashboardStyles.actionDesc}>{action.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div style={dashboardStyles.section}>
            <div style={dashboardStyles.sectionHeader}>
              <h2 style={dashboardStyles.sectionTitle}>Recent Activity</h2>
            </div>
            <ul style={dashboardStyles.recentActivity}>
              {recentActivities.map((activity, index) => (
                <li key={index} style={dashboardStyles.activityItem}>
                  <div style={dashboardStyles.activityIcon}>{activity.icon}</div>
                  <div style={dashboardStyles.activityContent}>
                    <div style={dashboardStyles.activityTitle}>{activity.title}</div>
                    <div style={dashboardStyles.activityTime}>{activity.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div style={dashboardStyles.section}>
            <div style={dashboardStyles.sectionHeader}>
              <h2 style={dashboardStyles.sectionTitle}>Tips & Motivation</h2>
            </div>
            <p style={dashboardStyles.sectionText}>
              💡 <strong>Tip of the Day:</strong> Consistency beats intensity. 
              Even 20 minutes of exercise daily is better than one long session per week.
            </p>
            <p style={dashboardStyles.sectionText}>
              🎯 <strong>Remember:</strong> Your fitness journey is unique. 
              Focus on progress, not perfection!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

