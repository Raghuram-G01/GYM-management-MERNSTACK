import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { contactStyles } from '../styles/Contact.js';

const Contact = () => {
  const { colors } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{
      ...contactStyles.container,
      animation: 'fadeIn 0.5s ease-in'
    }}>
      <h1 style={contactStyles.title}>Contact FitMaker</h1>
      <p style={contactStyles.subtitle}>
        Questions about memberships, classes, or trainers? Send us a note and we’ll
        respond within one business day.
      </p>
      <div style={contactStyles.content}>
        <div style={{
          ...contactStyles.formContainer,
        }}>
          <h2>Send us a message</h2>
          {submitted && (
            <p style={{ color: '#51cf66', marginBottom: '1rem' }}>
              Thank you! Your message has been sent.
            </p>
          )}
          <form style={contactStyles.form} onSubmit={handleSubmit}>
            <div style={contactStyles.formGroup}>
              <label style={contactStyles.label} htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={contactStyles.input}
                placeholder="Your name"
              />
            </div>
            <div style={contactStyles.formGroup}>
              <label style={contactStyles.label} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={contactStyles.input}
                placeholder="Your email"
              />
            </div>
            <div style={contactStyles.formGroup}>
              <label style={contactStyles.label} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={contactStyles.textarea}
                placeholder="Your message"
              />
            </div>
            <button type="submit" style={contactStyles.button}>
              Send Message
            </button>
          </form>
        </div>
        <div style={{
          ...contactStyles.infoContainer,
        }}>
          <h2>Get in Touch</h2>
          <div style={contactStyles.infoItem}>
            <div style={contactStyles.infoLabel}>Address</div>
            <div style={contactStyles.infoText}>
              123 Fitness Street<br />
              Health City, HC 12345
            </div>
          </div>
          <div style={contactStyles.infoItem}>
            <div style={contactStyles.infoLabel}>Phone</div>
            <div style={contactStyles.infoText}>(555) 123-4567</div>
          </div>
          <div style={contactStyles.infoItem}>
            <div style={contactStyles.infoLabel}>Email</div>
            <div style={contactStyles.infoText}>info@gymapp.com</div>
          </div>
          <div style={contactStyles.infoItem}>
            <div style={contactStyles.infoLabel}>Hours</div>
            <div style={contactStyles.infoText}>
              Open 24/7<br />
              Every day of the year
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

