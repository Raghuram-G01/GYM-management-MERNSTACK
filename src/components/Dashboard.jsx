import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { dashboardStyles } from '../styles/Dashboard.js';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { colors } = useTheme();
  const accent = '#FF7443';

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
      <div style={dashboardStyles.loading}>Loading...</div>
    );
  }

  return (
    <div style={dashboardStyles.page}>
      {/* Header */}
      <header style={dashboardStyles.header}>
        <div>
          <p style={dashboardStyles.subhead}>Good Morning</p>
          <h1 style={dashboardStyles.title}>Welcome Back, {user.name}! ({user.role.toUpperCase()}) 🎉</h1>
          <p style={dashboardStyles.lead}>Track, fuel, and plan your fitness in one place.</p>
        </div>
        <div style={dashboardStyles.headerActions}>
          <div style={dashboardStyles.location}>
            <span style={dashboardStyles.locationIcon}>📍</span>
            <span>Sydney, Australia</span>
          </div>
          <button style={dashboardStyles.outlineButton}>Notifications</button>
          <button style={{ ...dashboardStyles.accentButton, backgroundColor: accent }}>Start Workout</button>
        </div>
      </header>

      {/* Stat cards */}
      <div style={dashboardStyles.statsGrid}>
        {getStatCards(user.role).map((item) => (
          <article key={item.label} style={dashboardStyles.statCard}>
            <div style={dashboardStyles.statIcon}>{item.icon}</div>
            <div>
              <div style={dashboardStyles.statLabel}>{item.label}</div>
              <div style={dashboardStyles.statValue}>{item.value}</div>
              <div style={dashboardStyles.statSub}>{item.sub}</div>
            </div>
          </article>
        ))}
      </div>

      {/* Main content */}
      <div style={dashboardStyles.mainGrid}>
        <section style={dashboardStyles.cardLarge}>
          <div style={dashboardStyles.sectionHeader}>
            <h3 style={dashboardStyles.sectionTitle}>Activity</h3>
            <span style={dashboardStyles.sectionHint}>This week</span>
          </div>
          <div style={dashboardStyles.chartRow}>
            {activityData.map((d) => (
              <div key={d.day} style={dashboardStyles.chartBarWrap}>
                <div
                  style={{
                    ...dashboardStyles.chartBar,
                    height: `${d.value}%`,
                    background: accent
                  }}
                />
                <span style={dashboardStyles.chartLabel}>{d.day}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={dashboardStyles.card}>
          <div style={dashboardStyles.sectionHeader}>
            <h3 style={dashboardStyles.sectionTitle}>Monthly Progress</h3>
            <span style={dashboardStyles.sectionHint}>Goal: 10 sessions</span>
          </div>
          <div style={dashboardStyles.radialWrap}>
            <div style={dashboardStyles.radialOuter}>
              <div style={dashboardStyles.radialInner}>
                <span style={dashboardStyles.radialValue}>80%</span>
                <span style={dashboardStyles.radialText}>of goal</span>
              </div>
            </div>
            <p style={dashboardStyles.helperText}>You have achieved 80% of your goal this month.</p>
          </div>
        </section>

        <section style={dashboardStyles.card}>
          <div style={dashboardStyles.sectionHeader}>
            <h3 style={dashboardStyles.sectionTitle}>Your Goals</h3>
          </div>
          <ul style={dashboardStyles.goalList}>
            {goals.map((goal) => (
              <li key={goal.title} style={dashboardStyles.goalItem}>
                <div>
                  <div style={dashboardStyles.goalTitle}>{goal.title}</div>
                  <div style={dashboardStyles.goalMeta}>{goal.meta}</div>
                </div>
                <span style={dashboardStyles.goalTag}>{goal.status}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Lower content */}
      <div style={dashboardStyles.lowerGrid}>
        <section style={dashboardStyles.card}>
          <div style={dashboardStyles.sectionHeader}>
            <h3 style={dashboardStyles.sectionTitle}>Recommended Trainer</h3>
          </div>
          <div style={dashboardStyles.trainerGrid}>
            {trainers.map((t) => (
              <article key={t.name} style={dashboardStyles.trainerCard}>
                <img src={t.image} alt={t.name} style={dashboardStyles.trainerAvatar} />
                <div>
                  <div style={dashboardStyles.trainerName}>{t.name}</div>
                  <div style={dashboardStyles.trainerRole}>{t.role}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={dashboardStyles.card}>
          <div style={dashboardStyles.sectionHeader}>
            <h3 style={dashboardStyles.sectionTitle}>Featured Diet Menu</h3>
          </div>
          <div style={dashboardStyles.dietCard}>
            <div>
              <div style={dashboardStyles.dietTitle}>Breakfast</div>
              <div style={dashboardStyles.dietText}>Oats, eggs, berries, almonds.</div>
            </div>
            <button style={{ ...dashboardStyles.accentButton, backgroundColor: accent }}>View Plan</button>
          </div>
        </section>

        <section style={dashboardStyles.card}>
          <div style={dashboardStyles.sectionHeader}>
            <h3 style={dashboardStyles.sectionTitle}>Scheduled</h3>
          </div>
          <ul style={dashboardStyles.scheduleList}>
            {scheduled.map((item) => (
              <li key={item.title} style={dashboardStyles.scheduleItem}>
                <div>
                  <div style={dashboardStyles.scheduleTitle}>{item.title}</div>
                  <div style={dashboardStyles.scheduleTime}>{item.time}</div>
                </div>
                <span style={dashboardStyles.scheduleTag}>{item.type}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

const getStatCards = (role) => {
  switch (role) {
    case 'admin':
      return [
        { icon: '👥', label: 'Total Users', value: '156', sub: 'Active members' },
        { icon: '📋', label: 'Active Plans', value: '12', sub: 'Subscription plans' },
        { icon: '💰', label: 'Revenue', value: '$15,420', sub: 'This month' },
        { icon: '📊', label: 'Reports', value: '8', sub: 'Generated today' }
      ];
    case 'trainer':
      return [
        { icon: '👥', label: 'My Members', value: '24', sub: 'Active clients' },
        { icon: '📋', label: 'Plans', value: '5', sub: 'Training programs' },
        { icon: '🏋️', label: 'Sessions', value: '6', sub: 'Today' },
        { icon: '📈', label: 'Attendance', value: '85%', sub: 'This week' }
      ];
    case 'member':
    default:
      return [
        { icon: '🔥', label: 'Calories', value: '1,450 kcal', sub: 'Today' },
        { icon: '👟', label: 'Steps', value: '8,230', sub: 'Goal: 10k' },
        { icon: '💧', label: 'Water', value: '2.1 L', sub: 'Goal: 3.0 L' },
        { icon: '❤️', label: 'Heart Rate', value: '78 bpm', sub: 'Resting' }
      ];
  }
};

const activityData = [
  { day: 'Mon', value: 60 },
  { day: 'Tue', value: 80 },
  { day: 'Wed', value: 55 },
  { day: 'Thu', value: 90 },
  { day: 'Fri', value: 70 },
  { day: 'Sat', value: 40 },
  { day: 'Sun', value: 65 }
];

const goals = [
  { title: 'Running', meta: '5 km • Pace 6:00', status: 'On Track' },
  { title: 'Sleeping', meta: 'Target 8h/night', status: 'Improve' },
  { title: 'Weight Loss', meta: 'Lose 3 kg this month', status: 'On Track' }
];

const trainers = [
  {
    name: 'Alexis Brown',
    role: 'HIIT & Mobility',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Jordan Lee',
    role: 'Strength Coach',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=401&q=80'
  }
];

const scheduled = [
  { title: 'Cycling Class', time: 'Today • 6:00 PM', type: 'Cardio' },
  { title: 'Pilates', time: 'Tomorrow • 7:30 AM', type: 'Core' }
];

export default Dashboard;

