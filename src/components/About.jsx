import { useTheme } from '../context/ThemeContext.jsx';
import { aboutStyles } from '../styles/About.js';

const About = () => {
  const { colors } = useTheme();
  
  return (
    <div style={{
      ...aboutStyles.container,
      backgroundColor: colors.background,
      color: colors.text,
      animation: 'fadeIn 0.5s ease-in'
    }}>
      <h1 style={{ ...aboutStyles.title, color: colors.text }}>About Us</h1>
      <div style={aboutStyles.content}>
        <div style={aboutStyles.section}>
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
            alt="Our Gym"
            style={aboutStyles.image}
          />
          <h2 style={aboutStyles.sectionTitle}>Our Mission</h2>
          <p style={aboutStyles.sectionText}>
            We are dedicated to helping you achieve your fitness goals through
            state-of-the-art equipment, expert guidance, and a supportive
            community. Our mission is to make fitness accessible to everyone,
            regardless of their fitness level or experience.
          </p>
        </div>
        <div style={aboutStyles.section}>
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop"
            alt="Training"
            style={aboutStyles.image}
          />
          <h2 style={aboutStyles.sectionTitle}>Our Team</h2>
          <p style={aboutStyles.sectionText}>
            Our team consists of certified fitness professionals who are
            passionate about helping you succeed. From personal trainers to
            nutrition experts, we have the knowledge and experience to guide you
            on your fitness journey.
          </p>
        </div>
        <div style={aboutStyles.section}>
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop"
            alt="Facilities"
            style={aboutStyles.image}
          />
          <h2 style={aboutStyles.sectionTitle}>Our Facilities</h2>
          <p style={aboutStyles.sectionText}>
            We offer a wide range of facilities including cardio equipment,
            strength 