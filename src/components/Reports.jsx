import { useTheme } from '../context/ThemeContext.jsx';

const Reports = () => {
  const { colors } = useTheme();
  
  const reports = [
    { title: 'Monthly Revenue', value: '$15,420', change: '+12%', icon: '💰' },
    { title: 'New Members', value: '24', change: '+8%', icon: '👥' },
    { title: 'Retention Rate', value: '89%', change: '+3%', icon: '📈' },
    { title: 'Equipment Usage', value: '76%', change: '-2%', icon: '🏋️' }
  ];

  return (
    <div style={{ padding: '32px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Reports & Analytics</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.8 }}>Track gym performance and member statistics</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        {reports.map((report, index) => (
          <div key={index} style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: '12px',
            padding: '24px',
            boxShadow: `0 4px 12px ${colors.shadow}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '2rem', marginRight: '12px' }}>{report.icon}</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{report.title}</h3>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>
              {report.value}
            </div>
            <div style={{ 
              color: report.change.startsWith('+') ? '#10B981' : '#EF4444',
              fontSize: '0.9rem'
            }}>
              {report.change} from last month
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div style={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: '12px',
          padding: '24px',
          boxShadow: `0 4px 12px ${colors.shadow}`
        }}>
          <h3 style={{ marginBottom: '16px' }}>Member Growth</h3>
          <div style={{ height: '200px', display: 'flex', alignItems: 'end', justifyContent: 'space-around' }}>
            {[40, 65, 55, 80, 70, 90, 85].map((height, index) => (
              <div key={index} style={{
                width: '30px',
                height: `${height}%`,
                backgroundColor: colors.primary,
                borderRadius: '4px 4px 0 0'
              }} />
            ))}
          </div>
        </div>
        
        <div style={{
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: '12px',
          padding: '24px',
          boxShadow: `0 4px 12px ${colors.shadow}`
        }}>
          <h3 style={{ marginBottom: '16px' }}>Quick Actions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button style={{
              padding: '12px',
              backgroundColor: colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              Generate Monthly Report
            </button>
            <button style={{
              padding: '12px',
              backgroundColor: 'transparent',
              color: colors.primary,
              border: `1px solid ${colors.primary}`,
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              Export Data
            </button>
            <button style={{
              padding: '12px',
              backgroundColor: 'transparent',
              color: colors.primary,
              border: `1px solid ${colors.primary}`,
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              Schedule Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;