import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { Link } from 'react-router-dom';

const Plans = () => {
  const { colors } = useTheme();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const [editingPlan, setEditingPlan] = useState(null);
  const [plans, setPlans] = useState(() => {
    const saved = localStorage.getItem('gymPlans');
    return saved ? JSON.parse(saved) : null;
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPlan, setNewPlan] = useState({ name: '', price: '', features: [''] });
  
  const getRoleContent = () => {
    if (!user) {
      return {
        title: 'Membership Plans',
        description: 'Choose the perfect plan for your fitness journey',
        plans: getPublicPlans()
      };
    }
    
    switch (user.role) {
      case 'admin':
        return {
          title: 'Manage Plans',
          description: 'Create and manage all membership plans',
          plans: getAdminPlans()
        };
      case 'trainer':
        return {
          title: 'Training Plans',
          description: 'Manage your training programs and client plans',
          plans: trainerPlans
        };
      case 'member':
      default:
        return {
          title: 'Your Plans',
          description: 'View your current membership and available upgrades',
          plans: memberPlans
        };
    }
  };
  
  const content = getRoleContent();
  const currentPlans = plans || content.plans;

  const handleEdit = (planId) => {
    const plan = currentPlans.find(p => p.id === planId);
    setEditingPlan({ ...plan });
  };

  const handleSave = () => {
    const updatedPlans = plans ? plans.map(p => p.id === editingPlan.id ? editingPlan : p) : content.plans.map(p => p.id === editingPlan.id ? editingPlan : p);
    setPlans(updatedPlans);
    localStorage.setItem('gymPlans', JSON.stringify(updatedPlans));
    setEditingPlan(null);
  };

  const handleDelete = (planId) => {
    const updatedPlans = (plans || content.plans).filter(p => p.id !== planId);
    setPlans(updatedPlans);
    localStorage.setItem('gymPlans', JSON.stringify(updatedPlans));
  };

  const handleAddPlan = () => {
    const id = Math.max(...currentPlans.map(p => p.id)) + 1;
    const planToAdd = { ...newPlan, id, action: 'Edit Plan' };
    const updatedPlans = [...currentPlans, planToAdd];
    setPlans(updatedPlans);
    localStorage.setItem('gymPlans', JSON.stringify(updatedPlans));
    setNewPlan({ name: '', price: '', features: [''] });
    setShowAddForm(false);
  };

  const addFeature = () => {
    if (editingPlan) {
      setEditingPlan({ ...editingPlan, features: [...editingPlan.features, ''] });
    } else {
      setNewPlan({ ...newPlan, features: [...newPlan.features, ''] });
    }
  };

  const removeFeature = (index) => {
    if (editingPlan) {
      setEditingPlan({ ...editingPlan, features: editingPlan.features.filter((_, i) => i !== index) });
    } else {
      setNewPlan({ ...newPlan, features: newPlan.features.filter((_, i) => i !== index) });
    }
  };
  
  return (
    <div style={{ padding: '32px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{content.title}</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.8 }}>{content.description}</p>
      
      {user?.role === 'admin' && (
        <button
          onClick={() => setShowAddForm(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '24px'
          }}
        >
          + Add New Plan
        </button>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {currentPlans.map((plan, index) => (
          <div key={plan.id || index} style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: '12px',
            padding: '24px',
            boxShadow: `0 4px 12px ${colors.shadow}`
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{plan.name}</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: colors.primary, marginBottom: '16px' }}>
              {plan.price}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
              {plan.features.map((feature, i) => (
                <li key={i} style={{ padding: '8px 0', borderBottom: `1px solid ${colors.border}` }}>
                  ✓ {feature}
                </li>
              ))}
            </ul>
            {user?.role === 'admin' ? (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => handleEdit(plan.id)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    backgroundColor: colors.primary,
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(plan.id)}
                  style={{
                    padding: '12px',
                    backgroundColor: '#EF4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </div>
            ) : (
              <Link
                to={user ? "/payments" : "/login"}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center'
                }}
              >
                {user ? "Make Payment" : "Join Now"}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Edit Plan Modal */}
      {editingPlan && (
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
            <h3 style={{ marginBottom: '20px' }}>Edit Plan</h3>
            <input
              value={editingPlan.name}
              onChange={(e) => setEditingPlan({ ...editingPlan, name: e.target.value })}
              placeholder="Plan Name"
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
              value={editingPlan.price}
              onChange={(e) => setEditingPlan({ ...editingPlan, price: e.target.value })}
              placeholder="Price"
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
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px' }}>Features:</label>
              {editingPlan.features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <input
                    value={feature}
                    onChange={(e) => {
                      const newFeatures = [...editingPlan.features];
                      newFeatures[i] = e.target.value;
                      setEditingPlan({ ...editingPlan, features: newFeatures });
                    }}
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
                    onClick={() => removeFeature(i)}
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
                onClick={addFeature}
                style={{
                  padding: '8px 16px',
                  backgroundColor: colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add Feature
              </button>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={handleSave}
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
                Save
              </button>
              <button
                onClick={() => setEditingPlan(null)}
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

      {/* Add Plan Modal */}
      {showAddForm && (
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
            <h3 style={{ marginBottom: '20px' }}>Add New Plan</h3>
            <input
              value={newPlan.name}
              onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
              placeholder="Plan Name"
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
              value={newPlan.price}
              onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })}
              placeholder="Price (e.g., $29/month)"
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
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px' }}>Features:</label>
              {newPlan.features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <input
                    value={feature}
                    onChange={(e) => {
                      const newFeatures = [...newPlan.features];
                      newFeatures[i] = e.target.value;
                      setNewPlan({ ...newPlan, features: newFeatures });
                    }}
                    placeholder="Feature description"
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
                    onClick={() => removeFeature(i)}
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
                onClick={addFeature}
                style={{
                  padding: '8px 16px',
                  backgroundColor: colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add Feature
              </button>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={handleAddPlan}
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
                Add Plan
              </button>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setNewPlan({ name: '', price: '', features: [''] });
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

const getPublicPlans = () => {
  const saved = localStorage.getItem('gymPlans');
  return saved ? JSON.parse(saved) : [
    {
      name: 'Basic',
      price: '$19/month',
      features: ['Gym floor access', 'Locker room', 'Free Wi-Fi'],
      action: 'Join Now',
      id: 1
    },
    {
      name: 'Pro',
      price: '$39/month',
      features: ['Everything in Basic', 'All classes included', 'Sauna & spa access'],
      action: 'Join Now',
      id: 2
    },
    {
      name: 'Elite',
      price: '$69/month',
      features: ['Personal trainer 2x/week', 'Priority support', 'Advanced analytics'],
      action: 'Join Now',
      id: 3
    }
  ];
};

const memberPlans = [
  {
    name: 'Current Plan: Pro',
    price: '$39/month',
    features: ['Active until Dec 2024', 'All classes included', 'Sauna & spa access'],
    action: 'Manage Plan',
    id: 1
  },
  {
    name: 'Upgrade to Elite',
    price: '$69/month',
    features: ['Personal trainer 2x/week', 'Priority support', 'Advanced analytics'],
    action: 'Upgrade Now',
    id: 2
  }
];

const trainerPlans = [
  {
    name: 'Personal Training',
    price: '$80/session',
    features: ['1-on-1 training', 'Customized workout', 'Progress tracking'],
    action: 'Manage Sessions',
    id: 1
  },
  {
    name: 'Group Training',
    price: '$30/session',
    features: ['Small group (4-6 people)', 'Specialized programs', 'Team building'],
    action: 'Schedule Class',
    id: 2
  }
];

const getAdminPlans = () => {
  const saved = localStorage.getItem('gymPlans');
  return saved ? JSON.parse(saved) : [
    {
      name: 'Basic Plan',
      price: '$19/month',
      features: ['156 active members', 'Basic gym access', 'Standard support'],
      action: 'Edit Plan',
      id: 1
    },
    {
      name: 'Pro Plan',
      price: '$39/month',
      features: ['89 active members', 'All classes included', 'Premium features'],
      action: 'Edit Plan',
      id: 2
    },
    {
      name: 'Elite Plan',
      price: '$69/month',
      features: ['34 active members', 'Personal training', 'VIP support'],
      action: 'Edit Plan',
      id: 3
    }
  ];
};

export default Plans;