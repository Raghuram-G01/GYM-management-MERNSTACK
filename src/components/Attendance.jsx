import { useTheme } from '../context/ThemeContext.jsx';

const Attendance = () => {
  const { colors } = useTheme();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  
  // Generate attendance data for the last 365 days
  const generateAttendanceData = () => {
    const data = [];
    const today = new Date();
    
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Random attendance with higher probability on weekdays
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const attendanceChance = isWeekend ? 0.3 : 0.7;
      const attended = Math.random() < attendanceChance;
      
      data.push({
        date: date.toISOString().split('T')[0],
        attended,
        day: date.getDay(),
        month: date.getMonth()
      });
    }
    return data;
  };

  const attendanceData = generateAttendanceData();
  const totalDays = attendanceData.length;
  const attendedDays = attendanceData.filter(d => d.attended).length;
  const currentStreak = getCurrentStreak(attendanceData);
  const longestStreak = getLongestStreak(attendanceData);

  function getCurrentStreak(data) {
    let streak = 0;
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].attended) streak++;
      else break;
    }
    return streak;
  }

  function getLongestStreak(data) {
    let maxStreak = 0;
    let currentStreak = 0;
    
    data.forEach(day => {
      if (day.attended) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });
    return maxStreak;
  }

  const getIntensity = (attended) => {
    if (!attended) return 0;
    return Math.floor(Math.random() * 4) + 1; // 1-4 intensity levels
  };

  const getColor = (intensity) => {
    const baseColors = {
      0: colors.border,
      1: '#0e4429',
      2: '#006d32',
      3: '#26a641',
      4: '#39d353'
    };
    return baseColors[intensity] || baseColors[0];
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div style={{ padding: '32px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
        {user?.role === 'trainer' ? 'Member Attendance Overview' : 'My Attendance'}
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.8 }}>
        {user?.role === 'trainer' ? 'Track member attendance patterns' : 'Track your gym attendance streak'}
      </p>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        <div style={{
          backgroundColor: colors.surface,
          padding: '20px',
          borderRadius: '12px',
          border: `1px solid ${colors.border}`,
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: colors.primary }}>
            {Math.round((attendedDays / totalDays) * 100)}%
          </div>
          <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Attendance Rate</div>
        </div>
        
        <div style={{
          backgroundColor: colors.surface,
          padding: '20px',
          borderRadius: '12px',
          border: `1px solid ${colors.border}`,
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#39d353' }}>
            {currentStreak}
          </div>
          <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Current Streak</div>
        </div>
        
        <div style={{
          backgroundColor: colors.surface,
          padding: '20px',
          borderRadius: '12px',
          border: `1px solid ${colors.border}`,
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#26a641' }}>
            {longestStreak}
          </div>
          <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Longest Streak</div>
        </div>
        
        <div style={{
          backgroundColor: colors.surface,
          padding: '20px',
          borderRadius: '12px',
          border: `1px solid ${colors.border}`,
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: colors.text }}>
            {attendedDays}
          </div>
          <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Days Attended</div>
        </div>
      </div>

      {/* Heatmap */}
      <div style={{
        backgroundColor: colors.surface,
        padding: '24px',
        borderRadius: '12px',
        border: `1px solid ${colors.border}`,
        marginBottom: '32px'
      }}>
        <h3 style={{ marginBottom: '20px', fontSize: '1.3rem' }}>Attendance Heatmap</h3>
        
        {/* Month labels */}
        <div style={{ display: 'flex', marginBottom: '8px', paddingLeft: '40px' }}>
          {months.map((month, index) => (
            <div key={month} style={{ 
              width: '30px', 
              fontSize: '0.8rem', 
              opacity: 0.7,
              marginRight: index < 11 ? '2px' : '0'
            }}>
              {index % 3 === 0 ? month : ''}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex' }}>
          {/* Day labels */}
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '8px' }}>
            {days.map((day, index) => (
              <div key={day} style={{ 
                height: '12px', 
                fontSize: '0.7rem', 
                opacity: 0.7,
                marginBottom: '2px',
                display: 'flex',
                alignItems: 'center'
              }}>
                {index % 2 === 1 ? day.slice(0, 3) : ''}
              </div>
            ))}
          </div>

          {/* Heatmap grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(53, 12px)',
            gap: '2px'
          }}>
            {attendanceData.map((day, index) => {
              const intensity = day.attended ? getIntensity(day.attended) : 0;
              return (
                <div
                  key={index}
                  title={`${day.date}: ${day.attended ? 'Present' : 'Absent'}`}
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: getColor(intensity),
                    borderRadius: '2px',
                    cursor: 'pointer'
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px', fontSize: '0.8rem', opacity: 0.7 }}>
          <span style={{ marginRight: '8px' }}>Less</span>
          {[0, 1, 2, 3, 4].map(level => (
            <div
              key={level}
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: getColor(level),
                borderRadius: '2px',
                marginRight: '2px'
              }}
            />
          ))}
          <span style={{ marginLeft: '8px' }}>More</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{
        backgroundColor: colors.surface,
        padding: '24px',
        borderRadius: '12px',
        border: `1px solid ${colors.border}`
      }}>
        <h3 style={{ marginBottom: '16px', fontSize: '1.3rem' }}>Recent Activity</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {attendanceData.slice(-7).reverse().map((day, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px',
              backgroundColor: colors.background,
              borderRadius: '8px'
            }}>
              <span>{new Date(day.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
              <span style={{
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                backgroundColor: day.attended ? '#39d353' : '#f87171',
                color: 'white'
              }}>
                {day.attended ? 'Present' : 'Absent'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendance;