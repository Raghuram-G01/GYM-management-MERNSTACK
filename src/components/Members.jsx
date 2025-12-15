import { useTheme } from '../context/ThemeContext.jsx';

const Members = () => {
  const { colors } = useTheme();
  
  const members = [
    { id: 1, name: 'Alice Brown', plan: 'Pro', joinDate: '2024-01-15', attendance: '85%' },
    { id: 2, name: 'Bob Wilson', plan: 'Basic', joinDate: '2024-02-20', attendance: '72%' },
    { id: 3, name: 'Carol Davis', plan: 'Elite', joinDate: '2024-03-10', attendance: '91%' },
    { id: 4, name: 'David Miller', plan: 'Pro', joinDate: '2024-01-05', attendance: '78%' }
  ];

  return (
    <div style={{ padding: '32px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>My Members</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.8 }}>Track your assigned members' progress</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {members.map((member) => (
          <div key={member.id} style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: '12px',
            padding: '24px',
            boxShadow: `0 4px 12px ${colors.shadow}`
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{member.name}</h3>
            <div style={{ marginBottom: '12px' }}>
              <strong>Plan:</strong> {member.plan}
            </div>
            <div style={{ marginBottom: '12px' }}>
              <strong>Join Date:</strong> {member.joinDate}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <strong>Attendance:</strong> 
              <span style={{ 
                color: parseInt(member.attendance) > 80 ? '#10B981' : '#EF4444',
                fontWeight: 'bold',
                marginLeft: '8px'
              }}>
                {member.attendance}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{
                flex: 1,
                padding: '10px',
                backgroundColor: colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                View Progress
              </button>
              <button style={{
                flex: 1,
                padding: '10px',
                backgroundColor: 'transparent',
                color: colors.primary,
                border: `1px solid ${colors.primary}`,
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Schedule Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;