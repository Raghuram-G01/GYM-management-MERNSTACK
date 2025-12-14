import { footerStyles } from '../styles/Footer.js';

const Footer = () => {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.content}>
        <p style={footerStyles.text}>
          © 2024 GYM Application. All rights reserved.
        </p>
        <p style={footerStyles.text}>
          Built with React, Express, and MongoDB
        </p>
      </div>
    </footer>
  );
};

export default Footer;

