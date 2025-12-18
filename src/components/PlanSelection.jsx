import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { getPlans, purchasePlan } from '../services/api.js';
import { getResponsiveStyles } from '../styles/responsive.js';
import qrCodeImage from '../styles/download.jpeg';

const PlanSelection = () => {
  const { colors } = useTheme();
  const responsive = getResponsiveStyles();
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await getPlans();
      setPlans(response.data);
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowQR(true);
  };

  const handlePaymentComplete = async () => {
    setLoading(true);
    try {
      await purchasePlan({
        planId: selectedPlan._id,
        paymentMethod: 'qr_code',
        transactionId: `QR_${Date.now()}`
      });
      
      // Update user status in localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      user.membershipStatus = 'payment_completed';
      localStorage.setItem('user', JSON.stringify(user));
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (showQR && selectedPlan) {
    return (
      <div style={{ ...responsive.container, textAlign: 'center', color: colors.text }}>
        <h1 style={responsive.heading}>Complete Payment</h1>
        <div style={{
          backgroundColor: colors.surface,
          ...responsive.card,
          maxWidth: '400px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '16px' }}>{selectedPlan.name} Plan</h3>
          <p style={{ fontSize: '1.5rem', color: colors.primary, marginBottom: '24px' }}>
            ₹{selectedPlan.price}
          </p>
          
          {/* QR Code */}
          <div style={{
            width: '200px',
            height: '200px',
            margin: '0 auto 24px',
            border: '2px solid #000',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <img 
              src={qrCodeImage} 
              alt="Kumar's QR Code for Payment" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          
          <p style={{ marginBottom: '24px', fontSize: '0.9rem', opacity: 0.8 }}>
            Scan this QR code to complete payment
          </p>
          
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={() => setShowQR(false)}
              style={{
                padding: '10px 20px',
                backgroundColor: 'transparent',
                color: colors.text,
                border: `1px solid ${colors.border}`,
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Back
            </button>
            <button
              onClick={handlePaymentComplete}
              disabled={loading}
              style={{
                padding: '10px 20px',
                backgroundColor: colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1
              }}
            >
              {loading ? 'Processing...' : 'Payment Done'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...responsive.container, color: colors.text }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={responsive.heading}>Choose Your Plan</h1>
        <p style={responsive.subheading}>Select a membership plan to get started</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {[
          {
            name: 'Basic',
            price: 999,
            duration: '1 month',
            features: ['Gym floor access', 'Locker room', 'Free Wi-Fi'],
            popular: false
          },
          {
            name: 'Pro', 
            price: 1999,
            duration: '3 months',
            features: ['Everything in Basic', 'All classes included', 'Sauna & spa access', 'Nutrition consultation'],
            popular: true
          },
          {
            name: 'Elite',
            price: 3999, 
            duration: '6 months',
            features: ['Everything in Pro', 'Personal trainer 2x/week', 'Priority support', 'Advanced analytics'],
            popular: false
          }
        ].map((plan) => (
          <div key={plan.name} style={{
            backgroundColor: colors.surface,
            ...responsive.card,
            border: `2px solid ${plan.popular ? colors.primary : colors.border}`,
            textAlign: 'center',
            position: 'relative',
            transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
            boxShadow: plan.popular ? `0 8px 25px ${colors.primary}40` : `0 4px 12px ${colors.shadow}`
          }}>
            {plan.popular && (
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: colors.primary,
                color: 'white',
                padding: '6px 20px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                MOST POPULAR
              </div>
            )}
            
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: colors.primary }}>{plan.name}</h3>
            <div style={{ fontSize: '2.5rem', color: colors.primary, marginBottom: '8px', fontWeight: 'bold' }}>
              ₹{plan.price}
            </div>
            <p style={{ opacity: 0.7, marginBottom: '24px' }}>{plan.duration}</p>
            
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', textAlign: 'left' }}>
              {plan.features.map((feature, index) => (
                <li key={index} style={{ 
                  padding: '10px 0', 
                  borderBottom: `1px solid ${colors.border}`,
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ color: '#10B981', marginRight: '12px', fontSize: '1.2rem' }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button
              onClick={() => handlePlanSelect({ ...plan, _id: plan.name })}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: plan.popular ? colors.primary : 'transparent',
                color: plan.popular ? 'white' : colors.primary,
                border: `2px solid ${colors.primary}`,
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (!plan.popular) {
                  e.target.style.backgroundColor = colors.primary;
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.popular) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = colors.primary;
                }
              }}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSelection;