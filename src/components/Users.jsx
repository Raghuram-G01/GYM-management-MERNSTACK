import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { getAllUsers, updateUser, deleteUser } from '../services/api.js';
import { getResponsiveStyles } from '../styles/responsive.js';

const Users = () => {
  const { colors } = useTheme();
  const responsive = getResponsiveStyles();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [roleFilter, setRoleFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', membershipStatus: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleRoleFilter = (role) => {
    setRoleFilter(role);
    applyFilters(role, searchTerm);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    applyFilters(roleFilter, term);
  };

  const applyFilters = (role, search) => {
    let filtered = users;
    
    // Filter by role
    if (role !== 'all') {
      filtered = filtered.filter(user => user.role === role);
    }
    
    // Filter by search term
    if (search) {
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    setFilteredUsers(filtered);
  };

  const isSuperAdmin = (user) => {
    return user.email === 'admin@gym.com' && user.role === 'admin';
  };

  const handleEdit = (user) => {
    setEditingUser(user._id);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      membershipStatus: user.membershipStatus
    });
  };

  const handleUpdate = async (userId) => {
    try {
      await updateUser(userId, formData);
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId);
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div style={{ ...responsive.container, color: colors.text }}>
      <h1 style={responsive.heading}>User Management</h1>
      <p style={responsive.subheading}>Manage all system users</p>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <label style={{ fontWeight: 'bold' }}>Filter by Role:</label>
          <select 
            value={roleFilter} 
            onChange={(e) => handleRoleFilter(e.target.value)}
            style={{ 
              padding: '8px 12px', 
              borderRadius: '4px', 
              border: `1px solid ${colors.border}`, 
              backgroundColor: colors.surface,
              color: colors.text
            }}
          >
            <option value="all">All Users</option>
            <option value="member">Members</option>
            <option value="trainer">Trainers</option>
          </select>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <label style={{ fontWeight: 'bold' }}>Search:</label>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '4px',
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.surface,
              color: colors.text,
              minWidth: '200px'
            }}
          />
        </div>
      </div>
      
      <div style={{ ...responsive.table, backgroundColor: colors.surface, borderRadius: responsive.card.borderRadius, overflow: 'hidden', boxShadow: `0 4px 12px ${colors.shadow}` }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
          <thead>
            <tr style={{ backgroundColor: colors.primary, color: 'white' }}>
              <th style={{ padding: '16px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Role</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Status</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id} style={{ borderBottom: `1px solid ${colors.border}` }}>
                {editingUser === user._id ? (
                  <>
                    <td style={{ padding: '16px' }}>
                      <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '4px', width: '100%' }} />
                    </td>
                    <td style={{ padding: '16px' }}>
                      <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '4px', width: '100%' }} />
                    </td>
                    <td style={{ padding: '16px' }}>
                      <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} style={{ padding: '4px', width: '100%' }}>
                        <option value="member">Member</option>
                        <option value="trainer">Trainer</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <select value={formData.membershipStatus} onChange={(e) => setFormData({...formData, membershipStatus: e.target.value})} style={{ padding: '4px', width: '100%' }}>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="suspended">Suspended</option>
                      </select>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <button onClick={() => handleUpdate(user._id)} style={{ padding: '6px 12px', marginRight: '8px', backgroundColor: '#10B981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
                      <button onClick={() => setEditingUser(null)} style={{ padding: '6px 12px', backgroundColor: '#6B7280', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td style={{ padding: '16px' }}>{user.name}</td>
                    <td style={{ padding: '16px' }}>{user.email}</td>
                    <td style={{ padding: '16px' }}>
                      <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: colors.primary + '20', color: colors.primary, fontSize: '0.9rem' }}>
                        {user.role.toUpperCase()}
                      </span>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <span style={{ color: user.membershipStatus === 'active' ? '#10B981' : '#EF4444' }}>
                        {user.membershipStatus}
                      </span>
                    </td>
                    <td style={{ padding: '16px' }}>
                      {!isSuperAdmin(user) ? (
                        <>
                          <button onClick={() => handleEdit(user)} style={{ padding: '6px 12px', marginRight: '8px', backgroundColor: colors.primary, color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                          <button onClick={() => handleDelete(user._id)} style={{ padding: '6px 12px', backgroundColor: '#EF4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                        </>
                      ) : (
                        <span style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>Protected</span>
                      )}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;