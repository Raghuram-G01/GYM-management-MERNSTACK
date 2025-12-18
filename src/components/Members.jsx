import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import api from '../services/api.js';
import { membersStyles } from '../styles/Members.js';

const Members = () => {
  const { colors } = useTheme();
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
    // Auto-refresh every 30 seconds to show new members
    const interval = setInterval(fetchMembers, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      console.log('Fetching members...');
      const response = await api.get('/admin/users');
      console.log('API Response:', response.data);
      
      if (response.data && response.data.data) {
        const memberUsers = response.data.data.filter(user => user.role === 'member');
        console.log('Filtered members:', memberUsers);
        setMembers(memberUsers);
      } else {
        console.log('No data in response');
        setMembers([]);
      }
    } catch (error) {
      console.error('Error fetching members:', error);
      console.error('Error details:', error.response?.data);
      setMembers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAttendance = async (memberId) => {
    alert('Attendance marked for member!');
  };

  return (
    <div style={membersStyles.container}>
      <div style={membersStyles.header}>
        <h1 style={membersStyles.title}>All Members</h1>
        <button 
          onClick={fetchMembers}
          style={membersStyles.addButton}
        >
          Refresh
        </button>
      </div>
      
      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading members...</p>
        </div>
      ) : members.length === 0 ? (
        <div style={membersStyles.emptyState}>
          <p>No members registered yet</p>
        </div>
      ) : (
        <div style={membersStyles.membersGrid}>
          {members.map((member) => (
            <div key={member._id} style={membersStyles.memberCard}>
              <div style={membersStyles.memberHeader}>
                <div style={membersStyles.memberAvatar}>
                  {member.name.charAt(0).toUpperCase()}
                </div>
                <div style={membersStyles.memberInfo}>
                  <h3 style={membersStyles.memberName}>{member.name}</h3>
                  <p style={membersStyles.memberEmail}>{member.email}</p>
                </div>
              </div>
              <div style={membersStyles.memberDetails}>
                <div style={membersStyles.memberDetail}>
                  <span style={membersStyles.detailLabel}>Status</span>
                  <span style={membersStyles.detailValue}>{member.membershipStatus || 'Active'}</span>
                </div>
                <div style={membersStyles.memberDetail}>
                  <span style={membersStyles.detailLabel}>Joined</span>
                  <span style={membersStyles.detailValue}>{new Date(member.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div style={membersStyles.memberActions}>
                <button 
                  onClick={() => handleMarkAttendance(member._id)}
                  style={membersStyles.editButton}
                >
                  Mark Attendance
                </button>
                <button 
                  onClick={() => setSelectedMember(member)}
                  style={membersStyles.deleteButton}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedMember && (
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
        }} onClick={() => setSelectedMember(null)}>
          <div style={{
            backgroundColor: colors.surface,
            padding: '32px',
            borderRadius: '12px',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: '24px', fontSize: responsive.heading.fontSize }}>{selectedMember.name}'s Profile</h2>
            <div style={{ marginBottom: '16px' }}>
              <strong>Email:</strong> {selectedMember.email}
            </div>
            <div style={{ marginBottom: '16px' }}>
              <strong>Membership Status:</strong> {selectedMember.membershipStatus}
            </div>
            <div style={{ marginBottom: '16px' }}>
              <strong>Total Attendance:</strong> {selectedMember.totalAttendance || 0} days
            </div>
            <div style={{ marginBottom: '16px' }}>
              <strong>Attendance Rate:</strong> {selectedMember.attendanceRate || 0}%
            </div>
            <div style={{ marginBottom: '16px' }}>
              <strong>Joined:</strong> {new Date(selectedMember.createdAt).toLocaleDateString()}
            </div>
            <button 
              onClick={() => setSelectedMember(null)}
              style={{
                padding: '10px 24px',
                backgroundColor: colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: '16px'
              }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;