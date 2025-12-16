import { useTheme } from '../context/ThemeContext.jsx';

const MembershipStatus = ({ user }) => {
  const { colors } = useTheme();

  const getMembershipInfo = (role) => {
    switch (role) {
      case 'admin':
        return {
          status: 'Administrator',
          plan: 'Full Access',
          validUntil: 'Permanent',
          color: '#DC2626'
        };
      case 'trainer':
        return {
          status: 'Staff Member',
          plan: 'Trainer Access',
          validUntil: 'Active Employment',
          color: '#059669'
        };
      case 'member':
      default:
        return {
          status: 'Active Member',
          plan: 'Pro Plan',
          validUntil: 'Dec 31, 2024',
          color: colors.primary
        };
    }
  };

  const membershipInfo = getMembershipInfo(user.role);

  return (
    <div style={{
      backgroundColor: colors.surface,
      padding: '20px',
      borderRadius: '12px',
      border: `1px solid ${colors.border}`,
      marginBottom: '24px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: membershipInfo.color
        }} />
        <h3 style={{ margin: 0, color: membershipInfo.color }}>
          {membershipInfo.status}
        </h3>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '4px' }}>Current Plan</div>
          <div style={{ fontWeight: '600' }}>{membershipInfo.plan}</div>
        </div>
        <div>
          <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '4px' }}>Valid Until</div>
          <div style={{ fontWeight: '600' }}>{membershipInfo.validUntil}</div>
        </div>
      </div>
    </div>
  );
};

export default MembershipStatus;