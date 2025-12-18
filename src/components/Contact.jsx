import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { getResponsiveStyles } from '../styles/responsive.js';

const Contact = () => {
  const { colors } = useTheme();
  const responsive = getResponsiveStyles();
  const isMobile = window.innerWidth <= 768;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const locations = [
    {
      city: 'Mumbai',
      address: '123 Marine Drive, Nariman Point, Mumbai - 400021',
      phone: '+91 98765 43210',
      email: 'mumbai@fitmaker.com',
      hours: '5:00 AM - 11:00 PM'
    },
    {
      city: 'Bangalore',
      address: '456 MG Road, Brigade Road, Bangalore - 560001',
      phone: '+91 98765 43211',
      email: 'bangalore@fitmaker.com',
      hours: '24/7'
    },
    {
      city: 'Chennai',
      address: '789 Anna Salai, T. Nagar, Chennai - 600017',
      phone: '+91 98765 43212',
      email: 'chennai@fitmaker.com',
      hours: '5:00 AM - 11:00 PM'
    }
  ];

  return (
    <div style={{ ...responsive.container, color: colors.text }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
        <h1 style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: '16px', background: 'linear-gradient(45deg, #F97316, #EA580C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Get In Touch
        </h1>
        <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto', padding: isMobile ? '0 16px' : '0' }}>
          Ready to start your fitness journey? Contact us today and let's build your best self together.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '24px' : '48px', marginBottom: isMobile ? '32px' : '48px' }}>
        {/* Contact Form */}
        <div style={{
          backgroundColor: colors.surface,
          padding: isMobile ? '20px' : '32px',
          borderRadius: isMobile ? '12px' : '16px',
          border: `1px solid ${colors.border}`,
          boxShadow: `0 8px 32px ${colors.shadow}`
        }}>
          <h2 style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', marginBottom: isMobile ? '16px' : '24px', color: colors.primary }}>
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '20px' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: isMobile ? '12px' : '16px',
                border: `2px solid ${colors.border}`,
                borderRadius: isMobile ? '8px' : '12px',
                backgroundColor: colors.background,
                color: colors.text,
                fontSize: '16px',
                transition: 'border-color 0.3s'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: isMobile ? '12px' : '16px',
                border: `2px solid ${colors.border}`,
                borderRadius: isMobile ? '8px' : '12px',
                backgroundColor: colors.background,
                color: colors.text,
                fontSize: '16px'
              }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={{
                padding: isMobile ? '12px' : '16px',
                border: `2px solid ${colors.border}`,
                borderRadius: isMobile ? '8px' : '12px',
                backgroundColor: colors.background,
                color: colors.text,
                fontSize: '16px'
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={isMobile ? 4 : 5}
              required
              style={{
                padding: isMobile ? '12px' : '16px',
                border: `2px solid ${colors.border}`,
                borderRadius: isMobile ? '8px' : '12px',
                backgroundColor: colors.background,
                color: colors.text,
                fontSize: '16px',
                resize: 'vertical'
              }}
            />
            <button
              type="submit"
              style={{
                padding: isMobile ? '12px 24px' : '16px 32px',
                backgroundColor: colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: isMobile ? '8px' : '12px',
                fontSize: isMobile ? '1rem' : '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                boxShadow: `0 4px 16px ${colors.primary}40`
              }}
            >
              Send Message 🚀
            </button>
          </form>
        </div>

        {/* Quick Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '24px' }}>
          <div style={{
            backgroundColor: colors.surface,
            padding: isMobile ? '20px' : '24px',
            borderRadius: isMobile ? '12px' : '16px',
            border: `1px solid ${colors.border}`,
            boxShadow: `0 4px 16px ${colors.shadow}`
          }}>
            <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', marginBottom: '16px', color: colors.primary }}>
              📞 Call Us
            </h3>
            <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: '8px' }}>+91 98765 43210</p>
            <p style={{ opacity: 0.8, fontSize: isMobile ? '0.9rem' : '1rem' }}>Available 24/7 for emergencies</p>
          </div>

          <div style={{
            backgroundColor: colors.surface,
            padding: isMobile ? '20px' : '24px',
            borderRadius: isMobile ? '12px' : '16px',
            border: `1px solid ${colors.border}`,
            boxShadow: `0 4px 16px ${colors.shadow}`
          }}>
            <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', marginBottom: '16px', color: colors.primary }}>
              ✉️ Email Us
            </h3>
            <p style={{ fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: '8px' }}>info@fitmaker.com</p>
            <p style={{ opacity: 0.8, fontSize: isMobile ? '0.9rem' : '1rem' }}>We'll respond within 24 hours</p>
          </div>


        </div>
      </div>

      {/* Locations */}
      <div style={{ marginBottom: isMobile ? '32px' : '48px' }}>
        <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', textAlign: 'center', marginBottom: isMobile ? '24px' : '32px', color: colors.primary }}>
          Our Locations
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', gap: isMobile ? '16px' : '24px' }}>
          {locations.map((location, index) => (
            <div key={index} style={{
              backgroundColor: colors.surface,
              padding: isMobile ? '20px' : '32px',
              borderRadius: isMobile ? '12px' : '16px',
              border: `1px solid ${colors.border}`,
              boxShadow: `0 8px 32px ${colors.shadow}`,
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => !isMobile && (e.currentTarget.style.transform = 'translateY(-4px)')}
            onMouseLeave={(e) => !isMobile && (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <h3 style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', marginBottom: '16px', color: colors.primary }}>
                📍 {location.city}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '10px' : '12px' }}>
                <div>
                  <strong style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>Address:</strong>
                  <p style={{ margin: '4px 0', opacity: 0.9, fontSize: isMobile ? '0.9rem' : '1rem' }}>{location.address}</p>
                </div>
                <div>
                  <strong style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>Phone:</strong>
                  <p style={{ margin: '4px 0', color: colors.primary, fontSize: isMobile ? '0.9rem' : '1rem' }}>{location.phone}</p>
                </div>
                <div>
                  <strong style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>Email:</strong>
                  <p style={{ margin: '4px 0', color: colors.primary, fontSize: isMobile ? '0.9rem' : '1rem' }}>{location.email}</p>
                </div>
                <div>
                  <strong style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>Hours:</strong>
                  <p style={{ margin: '4px 0', opacity: 0.9, fontSize: isMobile ? '0.9rem' : '1rem' }}>{location.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Contact;