import React, { useState, useEffect } from 'react';
import api from '../services/api';

const MemberWorkouts = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [progress, setProgress] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    fetchWorkoutPlans();
    fetchProgress();
  }, []);

  const fetchWorkoutPlans = async () => {
    try {
      const response = await api.get('/member/workout-plans');
      setWorkoutPlans(response.data.data);
    } catch (error) {
      console.error('Error fetching workout plans:', error);
    }
  };

  const fetchProgress = async () => {
    try {
      const response = await api.get('/member/progress');
      setProgress(response.data.data);
    } catch (error) {
      console.error('Error fetching progress:', error);
    }
  };

  const logWorkout = async (workoutPlanId) => {
    try {
      await api.post('/member/log-workout', {
        workoutPlanId,
        exercisesCompleted: [],
        notes: 'Workout completed'
      });
      alert('Workout logged successfully!');
      fetchProgress();
    } catch (error) {
      console.error('Error logging workout:', error);
      alert('Error logging workout');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>My Workouts</h1>
      
      {/* Workout Plans */}
      <div style={{ marginBottom: '30px' }}>
        <h2>Assigned Workout Plans</h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          {workoutPlans.map(plan => (
            <div key={plan._id} style={{ 
              background: '#fff', 
              padding: '20px', 
              border: '1px solid #ddd', 
              borderRadius: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3>{plan.title}</h3>
                  <p>{plan.description}</p>
                  <p><strong>Trainer:</strong> {plan.trainerId?.name}</p>
                  <p><strong>Difficulty:</strong> {plan.difficulty}</p>
                  <p><strong>Duration:</strong> {plan.duration} weeks</p>
                  <p><strong>Status:</strong> {plan.status}</p>
                </div>
                <div>
                  <button 
                    onClick={() => setSelectedPlan(plan)}
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
                    View Details
                  </button>
                  <button 
                    onClick={() => logWorkout(plan._id)}
                    style={{ 
                      background: '#28a745', 
                      color: 'white', 
                      border: 'none', 
                      padding: '8px 16px', 
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Log Workout
                  </button>
                </div>
              </div>
              
              {selectedPlan && selectedPlan._id === plan._id && (
                <div style={{ marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '4px' }}>
                  <h4>Exercises:</h4>
                  {plan.exercises.map((exercise, index) => (
                    <div key={index} style={{ marginBottom: '10px', padding: '10px', background: '#fff', borderRadius: '4px' }}>
                      <p><strong>{exercise.name}</strong></p>
                      <p>Sets: {exercise.sets} | Reps: {exercise.reps}</p>
                      {exercise.weight && <p>Weight: {exercise.weight}</p>}
                      {exercise.duration && <p>Duration: {exercise.duration}</p>}
                      {exercise.restTime && <p>Rest: {exercise.restTime}</p>}
                    </div>
                  ))}
                  <button 
                    onClick={() => setSelectedPlan(null)}
                    style={{ 
                      background: '#6c757d', 
                      color: 'white', 
                      border: 'none', 
                      padding: '8px 16px', 
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress History */}
      <div>
        <h2>Progress History</h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          {progress.map(entry => (
            <div key={entry._id} style={{ 
              background: '#fff', 
              padding: '15px', 
              border: '1px solid #ddd', 
              borderRadius: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <p><strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}</p>
                  {entry.workoutPlanId && <p><strong>Workout:</strong> {entry.workoutPlanId.title}</p>}
                  {entry.weight && <p><strong>Weight:</strong> {entry.weight} kg</p>}
                  {entry.notes && <p><strong>Notes:</strong> {entry.notes}</p>}
                </div>
                <div>
                  {entry.workoutCompleted && (
                    <span style={{ 
                      background: '#28a745', 
                      color: 'white', 
                      padding: '4px 8px', 
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}>
                      Completed
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberWorkouts;