import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { registerUser } from '../services/api.js';
import { registerStyles } from '../styles/Register.js';

const Register = () => {
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
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
      const response = await registerUser(formData);
      if (response.success) {
        setSuccess(response.message);
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Registration failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      ...registerStyles.container,
      backgroundColor: colors.background,
      animation: 'fadeIn 0.5s ease-in'
    }}>
      <div style={{
        ...registerStyles.formContainer,
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        boxShadow: `0 4px 20px ${colors.shadow}`
      }}>
        <h2 style={{ ...registerStyles.title, color: colors.text }}>Register</h2>
        {error && <p style={registerStyles.error}>{error}</p>}
        {success && <p style={registerStyles.success}>{success}</p>}
        <form style={registerStyles.form} onSubmit={handleSubmit}>
          <div style={registerStyles.formGroup}>
            <label style={registerStyles.label} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={registerStyles.input}
              placeholder="Enter your name"
            />
          </div>
          <div style={registerStyles.formGroup}>
            <label style={registerStyles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={registerStyles.input}
              placeholder="Enter your email"
            />
          </div>
          <div style={registerStyles.formGroup}>
            <label style={registerStyles.label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              style={registerStyles.input}
              placeholder="Enter your password (min 6 characters)"
            />
          </div>
          <button
            type="submit"
            style={registerStyles.button}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </