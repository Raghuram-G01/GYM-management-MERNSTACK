import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { getAllPayments, createPayment, getAllUsers } from '../services/api.js';
import { getResponsiveStyles } from '../styles/responsive.js';

const Payments = () => {
  const { colors } = useTheme();
  const responsive = getResponsiveStyles();
  const [payments, setPayments] = useState([]);
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    user: '',
    amount: '',
    paymentMethod: 'cash',
    membershipPeriod: 'monthly',
    status: 'paid'
  });

  useEffect(() => {
    fetchPayments();
    fetchUsers();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await getAllPayments();
      setPayments(response.data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPayment(formData);
      setShowForm(false);
      setFormData({ user: '', amount: '', paymentMethod: 'cash', membershipPeriod: 'monthly', status: 'paid' });
      fetchPayments();
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  return (
    <div style={{ ...responsive.container, color: colors.text }}>
      <div style={responsive.flexHeader}>
        <div>
          <h1 style={responsive.heading}>Payment Management</h1>
          <p style={{ fontSize: responsive.subheading.fontSize, opacity: 0.8 }}>Track all member payments</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={{ ...responsive.button, backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          {showForm ? 'Cancel' : 'Add Payment'}
        </button>
      </div>

      {showForm && (
        <div style={{ backgroundColor: colors.surface, ...responsive.card, marginBottom: responsive.subheading.marginBottom, boxShadow: `0 4px 12px ${colors.shadow}` }}>
          <h2 style={{ marginBottom: '16px' }}>Add New Payment</h2>
          <form onSubmit={handleSubmit}>
            <div style={responsive.formGrid}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>User</label>
                <select value={formData.user} onChange={(e) => setFormData({...formData, user: e.target.value})} required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: `1px solid ${colors.border}` }}>
                  <option value="">Select User</option>
                  {users.map(user => <option key={user._id} value={user._id}>{user.name} ({user.email})</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Amount</label>
                <input type="number" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: `1px solid ${colors.border}` }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Payment Method</label>
                <select value={formData.paymentMethod} onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: `1px solid ${colors.border}` }}>
                  <option value="cash">Cash</option>
                  <option value="card">Card</option>
                  <option value="upi">UPI</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Membership Period</label>
                <select value={formData.membershipPeriod} onChange={(e) => setFormData({...formData, membershipPeriod: e.target.value})} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: `1px solid ${colors.border}` }}>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
            <button type="submit" style={{ marginTop: '16px', padding: '10px 24px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Submit Payment</button>
          </form>
        </div>
      )}

      <div style={{ ...responsive.table, backgroundColor: colors.surface, borderRadius: responsive.card.borderRadius, overflow: 'hidden', boxShadow: `0 4px 12px ${colors.shadow}` }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
          <thead>
            <tr style={{ backgroundColor: colors.primary, color: 'white' }}>
              <th style={{ padding: '16px', textAlign: 'left' }}>User</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Amount</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Method</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Period</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Status</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id} style={{ borderBottom: `1px solid ${colors.border}` }}>
                <td style={{ padding: '16px' }}>{payment.user?.name}</td>
                <td style={{ padding: '16px' }}>{payment.user?.email}</td>
                <td style={{ padding: '16px' }}>₹{payment.amount}</td>
                <td style={{ padding: '16px' }}>{payment.paymentMethod}</td>
                <td style={{ padding: '16px' }}>{payment.membershipPeriod}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: payment.status === 'paid' ? '#10B98120' : '#EF444420', color: payment.status === 'paid' ? '#10B981' : '#EF4444' }}>
                    {payment.status}
                  </span>
                </td>
                <td style={{ padding: '16px' }}>{new Date(payment.paymentDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;

