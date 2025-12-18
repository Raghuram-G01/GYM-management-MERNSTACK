import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { profileStyles } from '../styles/Profile.js';
import { getResponsiveStyles } from '../styles/responsive.js';

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
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        // Save to localStorage
        localStorage.setItem(`profileImage_${user.id}`, e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Load saved profile image
    const savedImage = localStorage.getItem(`profileImage_${user?.id}`);
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, [user?.id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      // Update localStorage
      const updatedUser = { ...user, name: formData.name, email: formData.email };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Error updating profile');
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: '+1 (555) 123-4567',
      address: '123 Fitness Street, Gym City, GC 12345',
      emergencyContact: 'John Doe - +1 (555) 987-6543',
      goals: 'Build muscle and improve cardiovascular health'
    });
    setIsEditing(false);
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    if (passwordData.newPassword.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }
    // Simulate password change
    alert('Password changed successfully!');
    setShowPasswordModal(false);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={profileStyles.sectionTitle}>Personal Information</h3>
            {!isEditing && (
              <button 
                onClick={() => setIsEditing(true)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                ✏️ Edit
              </button>
            )}
          </div>

          <div style={profileStyles.infoGrid}>
            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    padding: '8px 12px',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '6px',
                    backgroundColor: colors.background,
                    color: colors.text,
                    fontSize: '1rem',
                    width: '100%'
                  }}
                />
              ) : (
                <div style={profileStyles.value}>
                  <span style={profileStyles.valueIcon}>👤</span>
                  {formData.name}
                </div>
              )}
            </div>

            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    padding: '8px 12px',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '6px',
                    backgroundColor: colors.background,
                    color: colors.text,
                    fontSize: '1rem',
                    width: '100%'
                  }}
                />
              ) : (
                <div style={profileStyles.value}>
                  <span style={profileStyles.valueIcon}>✉️</span>
                  {formData.email}
                </div>
              )}
            </div>

            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    padding: '8px 12px',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '6px',
                    backgroundColor: colors.background,
                    color: colors.text,
                    fontSize: '1rem',
                    width: '100%'
                  }}
                />
              ) : (
                <div style={profileStyles.value}>
                  <span style={profileStyles.valueIcon}>📞</span>
                  {formData.phone}
                </div>
              )}
            </div>

            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Emergency Contact</label>
              {isEditing ? (
                <input
                  type="text"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  style={{
                    padding: '8px 12px',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '6px',
                    backgroundColor: colors.background,
                    color: colors.text,
                    fontSize: '1rem',
                    width: '100%'
                  }}
                />
              ) : (
                <div style={profileStyles.value}>
                  <span style={profileStyles.valueIcon}>🆘</span>
                  {formData.emergencyContact}
                </div>
              )}
            </div>

            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Address</label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  style={{
                    padding: '8px 12px',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '6px',
                    backgroundColor: colors.background,
                    color: colors.text,
                    fontSize: '1rem',
                    width: '100%'
                  }}
                />
              ) : (
                <div style={profileStyles.value}>
                  <span style={profileStyles.valueIcon}>📍</span>
                  {formData.address}
                </div>
              )}
            </div>

            <div style={profileStyles.info}>
              <label style={profileStyles.label}>Fitness Goals</label>
              {isEditing ? (
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  rows={3}
                  style={{
                    padding: '8px 12px',
                    border: `1px solid ${colors.border}`,
                    borderRadius: '6px',
                    backgroundColor: colors.background,
                    color: colors.text,
                    fontSize: '1rem',
                    width: '100%',
                    resize: 'vertical'
                  }}
                />
              ) : (
                <div style={profileStyles.value}>
                  <span style={profileStyles.valueIcon}>🎯</span>
                  {formData.goals}
                </div>
              )}
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
          {isEditing ? (
            <>
              <button 
                onClick={handleSave}
                style={{ 
                  ...profileStyles.button, 
                  backgroundColor: '#10B981',
                  color: 'white',
                  marginRight: '12px'
                }}
              >
                💾 Save Changes
              </button>
              <button 
                onClick={handleCancel}
                style={{ 
                  ...profileStyles.button, 
                  backgroundColor: '#6B7280',
                  color: 'white'
                }}
              >
                ❌ Cancel
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => setIsEditing(true)}
                style={{ ...profileStyles.button, ...profileStyles.primaryButton }}
              >
                ✏️ Edit Profile
              </button>
              <button 
                onClick={() => setShowPasswordModal(true)}
                style={{ ...profileStyles.button, ...profileStyles.secondaryButton }}
              >
                🔒 Change Password
              </button>
            </>
          )}
        </div>
      </div>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: colors.surface,
            padding: '32px',
            borderRadius: '12px',
            width: '400px',
            maxWidth: '90%'
          }}>
            <h3 style={{ marginBottom: '24px', color: colors.text }}>Change Password</h3>
            
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: colors.text }}>Current Password</label>
              <input
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '6px',
                  backgroundColor: colors.background,
                  color: colors.text,
                  fontSize: '16px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: colors.text }}>New Password</label>
              <input
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '6px',
                  backgroundColor: colors.background,
                  color: colors.text,
                  fontSize: '16px'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: colors.text }}>Confirm New Password</label>
              <input
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '6px',
                  backgroundColor: colors.background,
                  color: colors.text,
                  fontSize: '16px'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowPasswordModal(false)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#6B7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordChange}
                style={{
                  padding: '10px 20px',
                  backgroundColor: colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;