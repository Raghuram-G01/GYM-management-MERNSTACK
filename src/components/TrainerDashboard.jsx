import React, { useState, useEffect } from 'react';
import api from '../services/api';
import TrainerProfile from './TrainerProfile.jsx';

const TrainerDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [members, setMembers] = useState([]);
  const [stats, setStats] = useState({});
  const [selectedMember, setSelectedMember] = useState(null);
  const [workoutPlan, setWorkoutPlan] = useState({
    title: '',
    description: '',
    exercises: [],
    difficulty: 'Beginner',
    duration: 4
  });

  useEffect(() => {
    fetchMembers();
    fetchStats();
  }, []);

  const fetchMembers = async () => {
    try {
      // Try trainer endpoint first, fallback to admin endpoint
      let response;
      try {
        response = await api.get('/trainer/all-members');
      } catch (err) {
        response = await api.get('/admin/users');
        // Filter only members
        response.data.data = response.data.data.filter(user => user.role === 'member');
      }
      setMembers(response.data.data);
    } catch (error) {
      console.error('Error fetching members:', error);
      setMembers([]);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await api.get('/trainers/dashboard/stats');
      setStats(response.data.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const assignWorkoutPlan = async (e) => {
    e.preventDefault();
    try {
      await api.post('/trainer/workout-plan', {
        ...workoutPlan,
        memberId: selectedMember
      });
      alert('Workout plan assigned successfully!');
      setWorkoutPlan({ title: '', description: '', exercises: [], difficulty: 'Beginner', duration: 4 });
      setSelectedMember(null);
    } catch (error) {
      console.error('Error assigning workout plan:', error);
      alert('Error assigning workout plan');
    }
  };

  const viewMemberProgress = async (memberId) => {
    try {
      const response = await api.get(`/trainer/progress/${memberId}`);
      console.log('Member progress:', response.data.data);
      // Display progress in modal or separate component
    } catch (error) {
      console.error('Error fetching progress:', error);
    }
  };

  if (activeTab === 'profile') {
    return <TrainerProfile />;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h1>Trainer Dashboard</h1>
          <p style={{ color: '#666', marginBottom: '0' }}>Manage your assigned members and track their progress</p>
        </div>
        <button
          onClick={() => setActiveTab('profile')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#F97316',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          View Profile
        </button>
      </div>
      
      {/* Trainer Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          color: 'white', 
          padding: '25px', 
          borderRadius: '12px', 
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Assigned Members</h3>
          <p style={{ fontSize: '2.5em', fontWeight: 'bold', margin: '0' }}>{stats.membersCount || 0}</p>
        </div>
        <div style={{ 
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
          color: 'white', 
          padding: '25px', 
          borderRadius: '12px', 
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(245, 87, 108, 0.4)'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Active Plans</h3>
          <p style={{ fontSize: '2.5em', fontWeight: 'bold', margin: '0' }}>{stats.activeWorkoutPlans || 0}</p>
        </div>
        <div style={{ 
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', 
          color: 'white', 
          padding: '25px', 
          borderRadius: '12px', 
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(79, 172, 254, 0.4)'
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Recent Progress</h3>
          <p style={{ fontSize: '2.5em', fontWeight: 'bold', margin: '0' }}>{stats.recentProgress?.length || 0}</p>
        </div>
      </div>

      {/* Members List */}
      <div style={{ marginBottom: '30px' }}>
        <h2>All Registered Members</h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          {members.length === 0 ? (
            <div style={{ 
              background: '#f8f9fa', 
              padding: '20px', 
              borderRadius: '8px',
              textAlign: 'center',
              color: '#666'
            }}>
              <p>No members found. Members will appear here when they register.</p>
            </div>
          ) : (
            members.map(member => (
              <div key={member._id} style={{ 
                background: '#fff', 
                padding: '15px', 
                border: '1px solid #ddd', 
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>{member.name}</h4>
                  <p style={{ margin: '4px 0', color: '#666' }}>{member.email}</p>
                  <p style={{ margin: '4px 0', color: '#666' }}>Status: {member.membershipStatus || 'active'}</p>
                  <p style={{ margin: '4px 0', color: '#666' }}>Joined: {new Date(member.createdAt).toLocaleDateString()}</p>
                </div>
                <div>
                  <button 
                    onClick={() => setSelectedMember(member._id)}
                    style={{ 
                      background: '#007bff', 
                      color: 'white', 
                      border: 'none', 
                      padding: '8px 16px', 
                      borderRadius: '4px',
                      marginRight: '10px',
                      cursor: 'pointer'
                    }}
                  >
                    Assign Workout
                  </button>
                  <button 
                    onClick={() => viewMemberProgress(member._id)}
                    style={{ 
                      background: '#28a745', 
                      color: 'white', 
                      border: 'none', 
                      padding: '8px 16px', 
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    View Progress
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Workout Plan Assignment Form */}
      {selectedMember && (
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
          <h3>Assign Workout Plan</h3>
          <form onSubmit={assignWorkoutPlan}>
            <div style={{ marginBottom: '15px' }}>
              <label>Title:</label>
              <input
                type="text"
                value={workoutPlan.title}
                onChange={(e) => setWorkoutPlan({...workoutPlan, title: e.target.value})}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Description:</label>
              <textarea
                value={workoutPlan.description}
                onChange={(e) => setWorkoutPlan({...workoutPlan, description: e.target.value})}
                style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '80px' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Difficulty:</label>
              <select
                value={workoutPlan.difficulty}
                onChange={(e) => setWorkoutPlan({...workoutPlan, difficulty: e.target.value})}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Duration (weeks):</label>
              <input
                type="number"
                value={workoutPlan.duration}
                onChange={(e) => setWorkoutPlan({...workoutPlan, duration: parseInt(e.target.value)})}
                min="1"
                max="52"
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                type="submit"
                style={{ 
                  background: '#007bff', 
                  color: 'white', 
                  border: 'none', 
                  padding: '10px 20px', 
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Assign Plan
              </button>
              <button 
                type="button"
                onClick={() => setSelectedMember(null)}
                style={{ 
                  background: '#6c757d', 
                  color: 'white', 
                  border: 'none', 
                  padding: '10px 20px', 
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TrainerDashboard;