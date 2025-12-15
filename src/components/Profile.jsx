import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

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
    <div style={{ padding: '32px', color: colors.text, maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>My Profile</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.8 }}>
        Manage your personal information and preferences
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
        {/* Profile Image Section */}
        <div style={{
          backgroundColor: colors.surface,
          padding: '24px',
          borderRadius: '12px',
          border: `1px solid ${colors.border}`,
          textAlign: 'center',
          height: 'fit-content'
        }}>
          <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            margin: '0 auto 20px',
            backgroundColor: colors.background,
            backgroundImage: profileImage ? `url(${profileImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `3px solid ${colors.primary}`,
            fontSize: '3rem',
            color: colors.primary
          }}>
            {!profileImage && (user?.name?.charAt(0) || '👤')}
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
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: colors.primary,
              color: 'white',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Upload Photo
          </label>

          <div style={{ marginTop: '24px', textAlign: 'left' }}>
            <h3 style={{ marginBottom: '16px', color: colors.primary }}>Quick Stats</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <strong>Role:</strong> {user?.role?.toUpperCase()}
              </div>
              <div>
                <strong>Joining Date:</strong> {new Date(getJoiningDate()).toLocaleDateString()}
              </div>
              <div>
                <strong>Status:</strong> {getMembershipStatus()}
              </div>
              <div>
                <strong>Member ID:</strong> GYM{user?.id || '001'}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Information Section */}
        <div style={{
          backgroundColor: colors.surface,
          padding: '24px',
          borderRadius: '12px',
          border: `1px solid ${colors.border}`
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', color: colors.primary }}>Personal Information</h3>
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              style={{
                padding: '8px 16px',
                backgroundColor: isEditing ? '#10B981' : colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                  backgroundColor: isEditing ? colors.background : colors.surface,
                  color: colors.text
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                  backgroundColor: isEditing ? colors.background : colors.surface,
                  color: colors.text
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                  backgroundColor: isEditing ? colors.background : colors.surface,
                  color: colors.text
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Emergency Contact</label>
              <input
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                  backgroundColor: isEditing ? colors.background : colors.surface,
                  color: colors.text
                }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                  backgroundColor: isEditing ? colors.background : colors.surface,
                  color: colors.text
                }}
              />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Fitness Goals</label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows={3}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                  backgroundColor: isEditing ? colors.background : colors.surface,
                  color: colors.text,
                  resize: 'vertical'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Actions */}
      <div style={{
        backgroundColor: colors.surface,
        padding: '24px',
        borderRadius: '12px',
        border: `1px solid ${colors.border}`,
        marginTop: '32px'
      }}>
        <h3 style={{ marginBottom: '16px', color: colors.primary }}>Account Actions</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button style={{
            padding: '12px 24px',
            backgroundColor: 'transparent',
            color: colors.primary,
            border: `1px solid ${colors.primary}`,
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Change Password
          </button>
          <button style={{
            padding: '12px 24px',
            backgroundColor: 'transparent',
            color: colors.primary,
            border: `1px solid ${colors.primary}`,
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Download Data
          </button>
          <button style={{
            padding: '12px 24px',
            backgroundColor: '#EF4444',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Deactivate Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;