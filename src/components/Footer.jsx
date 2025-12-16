import { useTheme } from '../context/ThemeContext.jsx';
import { footerStyles } from '../styles/Footer.js';

const Footer = () => {
  const { colors } = useTheme();
  
  return (
    <footer style={{
      ...footerStyles.footer,
      backgroundColor: colors.surface,
      color: colors.text,
      borderTop: `1px solid ${colors.border}`
    }}>
      <div style={footerStyles.content}>
        <p style={footerStyles.text}>
          © 2025 GYM Application. All rights reserved.
        </p>
        <p style={footerStyles.text}>
          Built with React, Express, and MongoDB
        </p>
      </div>
    </footer>
  );
};

export default Footer;

