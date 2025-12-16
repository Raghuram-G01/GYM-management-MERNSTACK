import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const Workout = () => {
  const { colors } = useTheme();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('userWorkouts');
    setWorkouts(saved ? JSON.parse(saved) : defaultWorkouts);
  }, []);
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    duration: '',
    difficulty: 'Beginner',
    exercises: ['']
  });

  const defaultWorkouts = [
    { 
      id: 1, 
      name: 'Upper Body Strength', 
      duration: '45 min', 
      exercises: ['Push-ups', 'Pull-ups', 'Bench Press', 'Shoulder Press'],
      difficulty: 'Intermediate'
    },
    { 
      id: 2, 
      name: 'Cardio HIIT', 
      duration: '30 min', 
      exercises: ['Burpees', 'Mountain Climbers', 'Jump Squats', 'High Knees'],
      difficulty: 'Advanced'
    },
    { 
      id: 3, 
      name: 'Lower Body Power', 
      duration: '40 min', 
      exercises: ['Squats', 'Deadlifts', 'Lunges', 'Calf Raises'],
      difficulty: 'Beginner'
    }
  ];

  const addExercise = () => {
    setNewWorkout({ ...newWorkout, exercises: [...newWorkout.exercises, ''] });
  };

  const removeExercise = (index) => {
    setNewWorkout({ ...newWorkout, exercises: newWorkout.exercises.filter((_, i) => i !== index) });
  };

  const handleCreateWorkout = () => {
    if (newWorkout.name && newWorkout.duration && newWorkout.exercises.some(ex => ex.trim())) {
      const workout = {
        ...newWorkout,
        id: Math.max(...workouts.map(w => w.id)) + 1,
        exercises: newWorkout.exercises.filter(ex => ex.trim())
      };
      const updatedWorkouts = [...workouts, workout];
      setWorkouts(updatedWorkouts);
      localStorage.setItem('userWorkouts', JSON.stringify(updatedWorkouts));
      setShowCreateForm(false);
      setNewWorkout({ name: '', duration: '', difficulty: 'Beginner', exercises: [''] });
    }
  };

  return (
    <div style={{ padding: '32px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>My Workouts</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.8 }}>Track your fitness journey with personalized workouts</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
        {workouts.map((workout) => (
          <div key={workout.id} style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: '12px',
            padding: '24px',
            boxShadow: `0 4px 12px ${colors.shadow}`
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{workout.name}</h3>
              <span style={{
                padding: '4px 12px',
                borderRadius: '20px',
                backgroundColor: workout.difficulty === 'Beginner' ? '#10B981' : 
                                workout.difficulty === 'Intermediate' ? '#F59E0B' : '#EF4444',
                color: 'white',
                fontSize: '0.8rem'
              }}>
                {workout.difficulty}
              </span>
            </div>
            
            <div style={{ marginBottom: '16px' }}>
              <strong>Duration:</strong> {workout.duration}
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <strong>Exercises:</strong>
              <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
                {workout.exercises.map((exercise, index) => (
                  <li key={index} style={{ marginBottom: '4px' }}>{exercise}</li>
                ))}
              </ul>
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{
                flex: 1,
                padding: '12px',
                backgroundColor: colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
                Start Workout
              </button>
              <button style={{
                padding: '12px',
                backgroundColor: 'transparent',
                color: colors.primary,
                border: `1px solid ${colors.primary}`,
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
                📊
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <button 
          onClick={() => setShowCreateForm(true)}
          style={{
            padding: '16px 32px',
            backgroundColor: 'transparent',
            color: colors.primary,
            border: `2px solid ${colors.primary}`,
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.1rem'
          }}
        >
          + Create Custom Workout
        </button>
      </div>

      {/* Create Workout Modal */}
      {showCreateForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: colors.surface,
            padding: '32px',
            borderRadius: '12px',
            width: '500px',
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <h3 style={{ marginBottom: '20px' }}>Create Custom Workout</h3>
            <input
              value={newWorkout.name}
              onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
              placeholder="Workout Name"
              style={{
                width: '100%',
                padding: '12px',
                marginBottom: '16px',
                border: `1px solid ${colors.border}`,
                borderRadius: '8px',
                backgroundColor: colors.background,
                color: colors.text
              }}
            />
            <input
              value={newWorkout.duration}
              onChange={(e) => setNewWorkout({ ...newWorkout, duration: e.target.value })}
              placeholder="Duration (e.g., 45 min)"
              style={{
                width: '100%',
                padding: '12px',
                marginBottom: '16px',
                border: `1px solid ${colors.border}`,
                borderRadius: '8px',
                backgroundColor: colors.background,
                color: colors.text
              }}
            />
            <select
              value={newWorkout.difficulty}
              onChange={(e) => setNewWorkout({ ...newWorkout, difficulty: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                marginBottom: '16px',
                border: `1px solid ${colors.border}`,
                borderRadius: '8px',
                backgroundColor: colors.background,
                color: colors.text
              }}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px' }}>Exercises:</label>
              {newWorkout.exercises.map((exercise, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <input
                    value={exercise}
                    onChange={(e) => {
                      const newExercises = [...newWorkout.exercises];
                      newExercises[i] = e.target.value;
                      setNewWorkout({ ...newWorkout, exercises: newExercises });
                    }}
                    placeholder="Exercise name"
                    style={{
                      flex: 1,
                      padding: '8px',
                      border: `1px solid ${colors.border}`,
                      borderRadius: '4px',
                      backgroundColor: colors.background,
                      color: colors.text
                    }}
                  />
                  <button
                    onClick={() => removeExercise(i)}
                    style={{
                      padding: '8px',
                      backgroundColor: '#EF4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addExercise}
                style={{
                  padding: '8px 16px',
                  backgroundColor: colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add Exercise
              </button>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={handleCreateWorkout}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#10B981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Create Workout
              </button>
              <button
                onClick={() => {
                  setShowCreateForm(false);
                  setNewWorkout({ name: '', duration: '', difficulty: 'Beginner', exercises: [''] });
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#6B7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workout;