import { useTheme } from '../context/ThemeContext.jsx';

const Users = () => {
  const { colors } = useTheme();
  
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'member', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'trainer', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'member', status: 'Inactive' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'admin', status: 'Active' }
  ];

  return (
    <div style={{ padding: '32px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>User Management</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '32px', opacity: 0.8 }}>Manage all system users</p>
      
      <div style={{ backgroundColor: colors.surface, borderRadius: '12px', overflow: 'hidden', boxShadow: `0 4px 12px ${colors.shadow}` }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: `1px solid ${colors.border}` }}>
                <td style={{ padding: '16px' }}>{user.name}</td>
                <td style={{ padding: '16px' }}>{user.email}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    backgroundColor: colors.primary + '20',
                    color: colors.primary,
                    fontSize: '0.9rem'
                  }}>
                    {user.role.toUpperCase()}
                  </span>
                </td>
                <td style={{ padding: '16px' }}>
                  <span style={{ 
                    color: user.status === 'Active' ? '#10B981' : '#EF4444' 
                  }}>
                    {user.status}
                  </span>
                </td>
                <td style={{ padding: '16px' }}>
                  <button style={{ 
                    padding: '6px 12px', 
                    marginRight: '8px',
                    backgroundColor: colors.primary,
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    Edit
                  </button>
                  <button style={{ 
                    padding: '6px 12px',
                    backgroundColor: '#EF4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;