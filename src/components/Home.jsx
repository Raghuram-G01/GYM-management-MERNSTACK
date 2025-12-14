import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { homeStyles } from '../styles/Home.js';

const Home = () => {
  const { colors } = useTheme();
  
  return (
    <div style={{
      ...homeStyles.container,
      backgroundColor: colors.background,
      color: colors.text,
      animation: 'fadeIn 0.5s ease-in'
    }}>
      <section style={homeStyles.hero}>
        <h1 style={homeStyles.heroTitle}>Transform Your Body</h1>
        <p style={homeStyles.heroSubtitle}>
          Join thousands of members achieving their fitness goals
        </p>
        <Link to="/register" style={homeStyles.ctaButton}>
          Get Started Today
        </Link>
      </section>

      <section style={homeStyles.features}>
        <h2 style={{ ...homeStyles.featuresTitle, color: colors.text }}>Why Choose Us?</h2>
        <div style={homeStyles.featuresGrid}>
          <div style={{
            ...homeStyles.featureCard,
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            boxShadow: `0 4px 6px ${colors.shadow}`
          }}>
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
              alt="Modern Equipment"
              style={homeStyles.featureImage}
            />
            <h3 style={{ ...homeStyles.featureTitle, color: colors.text }}>Modern Equipment</h3>
            <p style={{ ...homeStyles.featureText, color: colors.textSecondary }}>
              State-of-the-art fitness equipment to help you achieve your goals
            </p>
          </div>
          <div style={homeStyles.featureCard}>
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop"
              alt="Expert Trainers"
              style={homeStyles.featureImage}
            />
            <h3 style={homeStyles.featureTitle}>Expert Trainers</h3>
            <p style={homeStyles.featureText}>
              Certified professionals ready to guide you on your fitness journey
            </p>
          </div>
          <div style={homeStyles.featureCard}>
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop"
              alt="Flexible Schedule"
              style={homeStyles.featureImage}
            />
            <h3 style={homeStyles.featureTitle}>Flexible Schedule</h3>
            <p style={homeStyles.featureText}>
              Open 24/7 to fit your busy lifestyle
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

