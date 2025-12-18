import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { profileStyles } from '../styles/Profile.js';

const Profile = () => {
  const { colors } = useTheme();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    address: '123 Fitness Street, Gym City, GC 12345',
    emergencyContact: 'John Doe - +1 (555) 987-6543',
    goals: 'Build muscle and improve cardiovascular health'
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const getJoiningDate = () => {
    const dates = {
      member: '2024-01-15',
      trainer: '2023-06-10',
      admin: '2022-03-01'
    };
    return dates[user?.role] || '2024-01-01';
  };

  const getMembershipStatus = () => {
    const statuses = {
      member: 'Pro Plan - Active',
      trainer: 'Staff - Active',
      admin: 'Administrator - Active'
    };
    return statuses[user?.role] || 'Basic Plan';
  };

  return (
    <div style={profileStyles.container}>
      <div style={profileStyles.header}>
        <h1 style={profileStyles.title}>My Profile</h1>
        <p style={profileStyles.subtitle}>
          Manage your personal information and preferences
        </p>
      </div>

      <div style={profileStyles.profileCard}>
        {/* Avatar Section */}
        <div style={profileStyles.avatarSection}>
          <div style={profileStyles.avatarContainer}>
            <div style={{
              ...profileStyles.avatar,
              backgroundImage: profileImage ? `url(${profileImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              fontSize: profileImage ? '0' : '3rem',
              overflow: 'hidden',
              border: '3px solid #F97316'
            }}>
              {!profileImage && (user?.name?.charAt(0)?.toUpperCase() || '👤')}
            </div>
          
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
            id="profile-upload"
          />
            <label
              htmlFor="profile-upload"
              style={profileStyles.editAvatarButton}
            >
              📷
            </label>
          </div>

          <h2 style={profileStyles.userName}>{formData.name}</h2>
          <p style={profileStyles.userRole}>{user?.role?.toUpperCase()}</p>
        </div>

        <div style={profileStyles.infoSection}>
          <h3 style={profileStyles.sectionTitle}>Personal Information</h3>

          <div style={profileStyles.infoGrid}>
            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Full Name</label>
              <div style={profileStyles.value}>
                <span style={profileStyles.valueIcon}>👤</span>
                {formData.name}
              </div>
            </div>

            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Email</label>
              <div style={profileStyles.value}>
                <span style={profileStyles.valueIcon}>✉️</span>
                {formData.email}
              </div>
            </div>

            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Phone</label>
              <div style={profileStyles.value}>
                <span style={profileStyles.valueIcon}>📞</span>
                {formData.phone}
              </div>
            </div>

            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Emergency Contact</label>
              <div style={profileStyles.value}>
                <span style={profileStyles.valueIcon}>🆘</span>
                {formData.emergencyContact}
              </div>
            </div>

            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Address</label>
              <div style={profileStyles.value}>
                <span style={profileStyles.valueIcon}>📍</span>
                {formData.address}
              </div>
            </div>

            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Fitness Goals</label>
              <div style={profileStyles.value}>
                <span style={profileStyles.valueIcon}>🎯</span>
                {formData.goals}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={profileStyles.statsGrid}>
          <div style={profileStyles.statBox}>
            <div style={profileStyles.statValue}>{user?.role?.toUpperCase()}</div>
            <div style={profileStyles.statLabel}>Role</div>
          </div>
          <div style={profileStyles.statBox}>
            <div style={profileStyles.statValue}>{new Date(getJoiningDate()).getFullYear()}</div>
            <div style={profileStyles.statLabel}>Member Since</div>
          </div>
          <div style={profileStyles.statBox}>
            <div style={{ ...profileStyles.statValue, fontSize: '1.2rem' }}>{user?.id?.slice(-4) || '001'}</div>
            <div style={profileStyles.statLabel}>Member ID</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={profileStyles.actions}>
          <button style={{ ...profileStyles.button, ...profileStyles.primaryButton }}>
            Edit Profile
          </button>
          <button style={{ ...profileStyles.button, ...profileStyles.secondaryButton }}>
            Change Password
          </button>
          <button style={{ ...profileStyles.button, ...profileStyles.dangerButton }}>
            Deactivate Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;