import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { loginUser } from '../services/api.js';
import { loginStyles } from '../styles/Login.js';

const Login = () => {
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'member'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await loginUser(formData);
      if (response.success) {
        setSuccess(response.message);
        localStorage.setItem('user', JSON.stringify(response.data));
        setTimeout(() => {
          navigate('/dashboard');
        }, 800);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Login failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      ...loginStyles.container,
      backgroundColor: colors.background,
      animation: 'fadeIn 0.5s ease-in'
    }}>
      <div style={{
        ...loginStyles.formContainer,
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        boxShadow: `0 4px 20px ${colors.shadow}`
      }}>
        <h2 style={{ ...loginStyles.title, color: colors.text }}>Login</h2>
        {error && <p style={loginStyles.error}>{error}</p>}
        {success && <p style={loginStyles.success}>{success}</p>}
        <form style={loginStyles.form} onSubmit={handleSubmit}>
          <div style={loginStyles.formGroup}>
            <label style={loginStyles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={loginStyles.input}
              placeholder="Enter your email"
            />
          </div>
          <div style={loginStyles.formGroup}>
            <label style={loginStyles.label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={loginStyles.input}
              placeholder="Enter your password"
            />
          </div>
          <div style={loginStyles.formGroup}>
            <label style={loginStyles.label} htmlFor="role">
              Login as
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={loginStyles.input}
            >
              <option value="member">Member</option>
              <option value="trainer">Trainer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            style={loginStyles.button}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p style={loginStyles.link}>
          Don't have an account?{' '}
          <Link to="/register" style={loginStyles.linkText}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

