import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentMembership } from '../services/api.js';
import PlanSelection from './PlanSelection.jsx';

const MembershipGuard = ({ children }) => {
  const [membershipStatus, setMembershipStatus] = useState('loading');
  const [membership, setMembership] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  useEffect(() => {
    checkMembershipStatus();
  }, []);

  const checkMembershipStatus = async () => {
    try {
      if (!user || user.role !== 'member') {
        setMembershipStatus('not_member');
        return;
      }

      // Demo member bypass
      if (user.email === 'kumar@demo.com') {
        setMembershipStatus('active');
        return;
      }

      const response = await getCurrentMembership();
      if (response.data) {
        setMembership(response.data);
        if (response.data.status === 'active') {
          setMembershipStatus('active');
        } else if (response.data.status === 'payment_completed') {
          setMembershipStatus('pending_approval');
        } else {
          setMembershipStatus('needs_plan');
        }
      } else {
        setMembershipStatus('needs_plan');
      }
    } catch (error) {
      console.error('Error checking membership:', error);
      setMembershipStatus('needs_plan');
    }
  };

  if (membershipStatus === 'loading') {
    return <div style={{ padding: '32px', textAlign: 'center' }}>Loading...</div>;
  }

  if (membershipStatus === 'not_member') {
    return children; // Allow non-members to access
  }

  if (membershipStatus === 'needs_plan') {
    return <PlanSelection />;
  }

  if (membershipStatus === 'pending_approval') {
    return (
      <div style={{ padding: '32px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '16px' }}>Payment Completed!</h2>
        <p style={{ marginBottom: '24px', opacity: 0.8 }}>
          Your payment has been received and is pending admin approval. 
          You will be notified once your membership is activated.
        </p>
        <div style={{ 
          backgroundColor: '#FEF3C7', 
          color: '#92400E', 
          padding: '16px', 
          borderRadius: '8px',
          marginBottom: '24px'
        }}>
          <strong>Status:</strong> Payment Completed - Pending Approval
        </div>
        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '12px 24px',
            backgroundColor: '#3B82F6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Go to Home
        </button>
      </div>
    );
  }

  if (membershipStatus === 'active') {
    return children; // Allow access to dashboard
  }

  return <PlanSelection />;
};

export default MembershipGuard;