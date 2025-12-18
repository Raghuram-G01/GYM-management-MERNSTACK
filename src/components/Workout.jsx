import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { workoutStyles } from '../styles/Workout.js';

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
    <div style={workoutStyles.container}>
      <div style={workoutStyles.header}>
        <h1 style={workoutStyles.title}>My Workouts</h1>
        <button 
          onClick={() => setShowCreateForm(true)}
          style={workoutStyles.addButton}
        >
          + Create Custom Workout
        </button>
      </div>
      
      <div style={workoutStyles.workoutGrid}>
        {workouts.map((workout) => (
          <div key={workout.id} style={workoutStyles.workoutCard}>
            <h3 style={workoutStyles.workoutName}>{workout.name}</h3>
            <div style={workoutStyles.workoutType}>{workout.difficulty}</div>
            
            <div style={workoutStyles.workoutDetails}>
              <div style={workoutStyles.workoutDetail}>
                <span>Duration:</span>
                <span>{workout.duration}</span>
              </div>
              <div style={workoutStyles.workoutDetail}>
                <span>Exercises:</span>
                <span>{workout.exercises.length} exercises</span>
              </div>
            </div>
            
            <div style={workoutStyles.workoutDescription}>
              {workout.exercises.join(', ')}
            </div>
            
            <div style={workoutStyles.workoutActions}>
              <button style={workoutStyles.editButton}>
                Start Workout
              </button>
              <button style={workoutStyles.deleteButton}>
                📊
              </button>
            </div>
          </div>
        ))}
      </div>
      


      {/* Create Workout Modal */}
      {showCreateForm && (
        <div style={workoutStyles.modal}>
          <div style={workoutStyles.modalContent}>
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