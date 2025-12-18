import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { trainerProfileStyles } from '../styles/TrainerProfile.js';

const TrainerProfile = () => {
  const { colors } = useTheme();
  const [trainerData, setTrainerData] = useState(null);
  const [stats, setStats] = useState({
    membersCount: 0,
    activeWorkoutPlans: 0,
    recentProgress: []
  });

  useEffect(() => {
    // Get trainer data from localStorage or API
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setTrainerData({
      id: user.id || '1',
      name: user.name || 'John Smith',
      email: user.email || 'john.smith@gym.com',
      phone: '+91 98765 43210',
      specialization: ['Strength Training', 'HIIT', 'Cardio'],
      experience: 8,
      certification: 'ACSM Certified Personal Trainer, NASM-CPT',
      salary: 75000,
      joinDate: '2020-03-15',
      status: 'active',
      bio: 'Passionate fitness trainer with 8+ years of experience helping clients achieve their fitness goals through personalized training programs.'
    });

    // Mock stats - replace with API call
    setStats({
      membersCount: 24,
      activeWorkoutPlans: 18,
      recentProgress: 5
    });
  }, []);

  if (!trainerData) {
    return (
      <div style={trainerProfileStyles.container}>
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <div style={{ fontSize: '1.2rem', color: '#9CA3AF' }}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={trainerProfileStyles.container}>
      <div style={trainerProfileStyles.header}>
        <h1 style={trainerProfileStyles.title}>My Profile</h1>
        <p style={trainerProfileStyles.subtitle}>Manage your trainer profile and track your performance</p>
      </div>

      <div style={trainerProfileStyles.profileCard}>
        {/* Avatar Section */}
        <div style={trainerProfileStyles.avatarSection}>
          <div style={trainerProfileStyles.avatar}>
            {trainerData.name.split(' ').map(n => n[0]).join('')}
          </div>
          <h2 style={trainerProfileStyles.trainerName}>{trainerData.name}</h2>
          <p style={trainerProfileStyles.trainerRole}>Personal Trainer</p>
        </div>

        {/* Info Grid */}
        <div style={trainerProfileStyles.infoGrid}>
          {/* Personal Information */}
          <div style={trainerProfileStyles.infoCard}>
            <h3 style={trainerProfileStyles.infoTitle}>
              👤 Personal Information
            </h3>
            <div style={trainerProfileStyles.infoItem}>
              <span style={trainerProfileStyles.infoLabel}>Email</span>
              <span style={trainerProfileStyles.infoValue}>{trainerData.email}</span>
            </div>
            <div style={trainerProfileStyles.infoItem}>
              <span style={trainerProfileStyles.infoLabel}>Phone</span>
              <span style={trainerProfileStyles.infoValue}>{trainerData.phone}</span>
            </div>
            <div style={trainerProfileStyles.infoItem}>
              <span style={trainerProfileStyles.infoLabel}>Join Date</span>
              <span style={trainerProfileStyles.infoValue}>
                {new Date(trainerData.joinDate).toLocaleDateString()}
              </span>
            </div>
            <div style={trainerProfileStyles.infoItem}>
              <span style={trainerProfileStyles.infoLabel}>Status</span>
              <span style={{
                ...trainerProfileStyles.infoValue,
                color: trainerData.status === 'active' ? '#10B981' : '#EF4444'
              }}>
                {trainerData.status.charAt(0).toUpperCase() + trainerData.status.slice(1)}
              </span>
            </div>
          </div>

          {/* Professional Information */}
          <div style={trainerProfileStyles.infoCard}>
            <h3 style={trainerProfileStyles.infoTitle}>
              🏆 Professional Details
            </h3>
            <div style={trainerProfileStyles.infoItem}>
              <span style={trainerProfileStyles.infoLabel}>Experience</span>
              <span style={trainerProfileStyles.infoValue}>{trainerData.experience} years</span>
            </div>
            <div style={trainerProfileStyles.infoItem}>
              <span style={trainerProfileStyles.infoLabel}>Salary</span>
              <span style={trainerProfileStyles.infoValue}>₹{trainerData.salary.toLocaleString()}/month</span>
            </div>
            <div style={{ ...trainerProfileStyles.infoItem, flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={trainerProfileStyles.infoLabel}>Specializations</span>
              <div style={trainerProfileStyles.specializations}>
                {trainerData.specialization.map((spec, index) => (
                  <span key={index} style={trainerProfileStyles.specializationTag}>
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ ...trainerProfileStyles.infoItem, flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={trainerProfileStyles.infoLabel}>Certification</span>
              <span style={{ ...trainerProfileStyles.infoValue, marginTop: '0.5rem' }}>
                {trainerData.certification}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={trainerProfileStyles.statsGrid}>
          <div style={trainerProfileStyles.statCard}>
            <div style={trainerProfileStyles.statValue}>{stats.membersCount}</div>
            <div style={trainerProfileStyles.statLabel}>Assigned Members</div>
          </div>
          <div style={trainerProfileStyles.statCard}>
            <div style={trainerProfileStyles.statValue}>{stats.activeWorkoutPlans}</div>
            <div style={trainerProfileStyles.statLabel}>Active Plans</div>
          </div>
          <div style={trainerProfileStyles.statCard}>
            <div style={trainerProfileStyles.statValue}>{stats.recentProgress}</div>
            <div style={trainerProfileStyles.statLabel}>Recent Updates</div>
          </div>
          <div style={trainerProfileStyles.statCard}>
            <div style={trainerProfileStyles.statValue}>{trainerData.experience}</div>
            <div style={trainerProfileStyles.statLabel}>Years Experience</div>
          </div>
        </div>

        {/* Bio Section */}
        <div style={trainerProfileStyles.infoCard}>
          <h3 style={trainerProfileStyles.infoTitle}>
            📝 About Me
          </h3>
          <p style={{ ...trainerProfileStyles.infoValue, lineHeight: 1.6, margin: 0 }}>
            {trainerData.bio}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={trainerProfileStyles.actions}>
          <button style={{ ...trainerProfileStyles.button, ...trainerProfileStyles.primaryButton }}>
            Edit Profile
          </button>
          <button style={{ ...trainerProfileStyles.button, ...trainerProfileStyles.secondaryButton }}>
            View Members
          </button>
          <button style={{ ...trainerProfileStyles.button, ...trainerProfileStyles.secondaryButton }}>
            Manage Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfile;