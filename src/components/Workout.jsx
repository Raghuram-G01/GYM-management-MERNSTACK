import { useTheme } from '../context/ThemeContext.jsx';

const Workout = () => {
  const { colors } = useTheme();
  
  const workouts = [
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
        <button style={{
          padding: '16px 32px',
          backgroundColor: 'transparent',
          color: colors.primary,
          border: `2px solid ${colors.primary}`,
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1.1rem'
        }}>
          + Create Custom Workout
        </button>
      </div>
    </div>
  );
};

export default Workout;