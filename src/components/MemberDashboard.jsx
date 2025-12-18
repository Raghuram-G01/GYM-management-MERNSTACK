import React, { useState, useEffect } from 'react';
import api from '../services/api';

const MemberDashboard = () => {
  const [stats, setStats] = useState({});
  const [todayWorkout, setTodayWorkout] = useState(null);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await api.get('/member/dashboard/stats');
      setStats(response.data.data);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    }
  };

  const quickLogWorkout = async () => {
    try {
      if (todayWorkout) {
        await api.post('/member/log-workout', {
          workoutPlanId: todayWorkout._id,
          exercisesCompleted: [],
          notes: 'Quick workout log'
        });
        alert('Workout logged successfully!');
        fetchDashboardStats();
      }
    } catch (error) {
      console.error('Error logging workout:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Member Dashboard</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>Track your fitness journey and progress</p>
      
      {/* Member Info Card */}
      {stats.memberInfo && (
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          color: 'white', 
          padding: '25px', 
          borderRadius: '12px', 
          marginBottom: '30px' 
        }}>
          <h2 style={{ margin: '0 0 10px 0' }}>Welcome, {stats.memberInfo.name}!</h2>
          <p style={{ margin: '5px 0' }}>Status: {stats.memberInfo.membershipStatus}</p>
          {stats.memberInfo.assignedTrainer && (
            <p style={{ margin: '5px 0' }}>
              Your Trainer: {stats.memberInfo.assignedTrainer.name} 
              ({stats.memberInfo.assignedTrainer.specialization})
            </p>
          )}
        </div>
      )}

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        marginBottom: '30px' 
      }}>
        <div style={{ 
          background: '#fff', 
          padding: '25px', 
          borderRadius: '12px', 
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          border: '1px solid #e3e6f0'
        }}>
          <h3 style={{ color: '#5a5c69', marginBottom: '10px' }}>Active Plans</h3>
          <p style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#1cc88a', margin: '0' }}>
            {stats.activeWorkoutPlans || 0}
          </p>
        </div>
        
        <div style={{ 
          background: '#fff', 
          padding: '25px', 
          borderRadius: '12px', 
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          border: '1px solid #e3e6f0'
        }}>
          <h3 style={{ color: '#5a5c69', marginBottom: '10px' }}>Completed Workouts</h3>
          <p style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#36b9cc', margin: '0' }}>
            {stats.completedWorkouts || 0}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ 
        background: '#fff', 
        padding: '25px', 
        borderRadius: '12px', 
        marginBottom: '30px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        border: '1px solid #e3e6f0'
      }}>
        <h3 style={{ marginBottom: '20px', color: '#5a5c69' }}>Quick Actions</h3>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <button 
            onClick={() => window.location.href = '/member/workouts'}
            style={{ 
              background: '#4e73df', 
              color: 'white', 
              border: 'none', 
              padding: '12px 24px', 
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            View My Workouts
          </button>
          <button 
            onClick={() => window.location.href = '/member/progress'}
            style={{ 
              background: '#1cc88a', 
              color: 'white', 
              border: 'none', 
              padding: '12px 24px', 
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            View Progress
          </button>
          {todayWorkout && (
            <button 
              onClick={quickLogWorkout}
              style={{ 
                background: '#f6c23e', 
                color: 'white', 
                border: 'none', 
                padding: '12px 24px', 
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Log Today's Workout
            </button>
          )}
        </div>
      </div>

      {/* Recent Progress */}
      <div style={{ 
        background: '#fff', 
        padding: '25px', 
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        border: '1px solid #e3e6f0'
      }}>
        <h3 style={{ marginBottom: '20px', color: '#5a5c69' }}>Recent Activity</h3>
        {stats.recentProgress && stats.recentProgress.length > 0 ? (
          <div style={{ display: 'grid', gap: '15px' }}>
            {stats.recentProgress.map(entry => (
              <div key={entry._id} style={{ 
                padding: '15px', 
                background: '#f8f9fc', 
                borderRadius: '8px',
                borderLeft: '4px solid #4e73df'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ margin: '0 0 5px 0', fontWeight: '500' }}>
                      {entry.workoutPlanId ? entry.workoutPlanId.title : 'General Progress'}
                    </p>
                    <p style={{ margin: '0', color: '#6e707e', fontSize: '14px' }}>
                      {new Date(entry.date).toLocaleDateString()}
                    </p>
                    {entry.notes && (
                      <p style={{ margin: '5px 0 0 0', color: '#5a5c69', fontSize: '14px' }}>
                        {entry.notes}
                      </p>
                    )}
                  </div>
                  {entry.workoutCompleted && (
                    <span style={{ 
                      background: '#1cc88a', 
                      color: 'white', 
                      padding: '4px 12px', 
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      Completed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: '#6e707e', textAlign: 'center', padding: '20px' }}>
            No recent activity. Start your fitness journey today!
          </p>
        )}
      </div>
    </div>
  );
};

export default MemberDashboard;