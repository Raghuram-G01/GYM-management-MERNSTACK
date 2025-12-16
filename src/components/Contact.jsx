import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const Contact = () => {
  const { colors } = useTheme();
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
    <div style={{ padding: '32px', color: colors.text, maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '16px', background: 'linear-gradient(45deg, #F97316, #EA580C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Get In Touch
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Ready to start your fitness journey? Contact us today and let's build your best self together.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '48px' }}>
        {/* Contact Form */}
        <div style={{
          backgroundColor: colors.surface,
          padding: '32px',
          borderRadius: '16px',
          border: `1px solid ${colors.border}`,
          boxShadow: `0 8px 32px ${colors.shadow}`
        }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: colors.primary }}>
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: '16px',
                border: `2px solid ${colors.border}`,
                borderRadius: '12px',
                backgroundColor: colors.background,
                color: colors.text,
                fontSize: '1rem',
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
                padding: '16px',
                border: `2px solid ${colors.border}`,
                borderRadius: '12px',
                backgroundColor: colors.background,
                color: colors.text,
                fontSize: '1rem'
              }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={{
                padding: '16px',
                border: `2px solid ${colors.border}`,
                borderRadius: '12px',
                backgroundColor: colors.background,
                color: colors.text,
                fontSize: '1rem'
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              style={{
                padding: '16px',
                border: `2px solid ${colors.border}`,
                borderRadius: '12px',
                backgroundColor: colors.background,
                color: colors.text,
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '16px 32px',
                backgroundColor: colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.1rem',
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{
            backgroundColor: colors.surface,
            padding: '24px',
            borderRadius: '16px',
            border: `1px solid ${colors.border}`,
            boxShadow: `0 4px 16px ${colors.shadow}`
          }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: colors.primary }}>
              📞 Call Us
            </h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>+91 98765 43210</p>
            <p style={{ opacity: 0.8 }}>Available 24/7 for emergencies</p>
          </div>

          <div style={{
            backgroundColor: colors.surface,
            padding: '24px',
            borderRadius: '16px',
            border: `1px solid ${colors.border}`,
            boxShadow: `0 4px 16px ${colors.shadow}`
          }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: colors.primary }}>
              ✉️ Email Us
            </h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>info@fitmaker.com</p>
            <p style={{ opacity: 0.8 }}>We'll respond within 24 hours</p>
          </div>


        </div>
      </div>

      {/* Locations */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '32px', color: colors.primary }}>
          Our Locations
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          {locations.map((location, index) => (
            <div key={index} style={{
              backgroundColor: colors.surface,
              padding: '32px',
              borderRadius: '16px',
              border: `1px solid ${colors.border}`,
              boxShadow: `0 8px 32px ${colors.shadow}`,
              transition: 'transform 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: colors.primary }}>
                📍 {location.city}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <strong>Address:</strong>
                  <p style={{ margin: '4px 0', opacity: 0.9 }}>{location.address}</p>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <p style={{ margin: '4px 0', color: colors.primary }}>{location.phone}</p>
                </div>
                <div>
                  <strong>Email:</strong>
                  <p style={{ margin: '4px 0', color: colors.primary }}>{location.email}</p>
                </div>
                <div>
                  <strong>Hours:</strong>
                  <p style={{ margin: '4px 0', opacity: 0.9 }}>{location.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div style={{
        backgroundColor: colors.surface,
        padding: '32px',
        borderRadius: '16px',
        border: `1px solid ${colors.border}`,
        boxShadow: `0 8px 32px ${colors.shadow}`,
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: colors.primary }}>
          Find Us on Map
        </h2>
        <p style={{ marginBottom: '24px', opacity: 0.8 }}>
          Visit any of our locations for a free consultation and gym tour
        </p>
        <div style={{
          height: '300px',
          backgroundColor: colors.background,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `2px dashed ${colors.border}`
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🗺️</div>
            <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>Interactive Map Coming Soon</p>
            <p style={{ opacity: 0.6 }}>Google Maps integration will be available here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;