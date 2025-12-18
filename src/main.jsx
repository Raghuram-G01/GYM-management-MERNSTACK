import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/mobile.css';

// Global styles with theme support
const style = document.createElement('style');
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  [data-theme="dark"] {
    --bg: #0f0f0f;
    --surface: #1a1a1a;
    --surface-elevated: #242424;
    --text: #ffffff;
    --text-secondary: #b0b0b0;
    --border: #2a2a2a;
  }

  [data-theme="light"] {
    --bg: #f8f9fa;
    --surface: #ffffff;
    --surface-elevated: #ffffff;
    --text: #1a1a1a;
    --text-secondary: #666666;
    --border: #e9ecef;
  }

  body {
    background-color: var(--bg);
    color: var(--text);
  }

  #root {
    min-height: 100vh;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  /* Viewport meta for mobile */
  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Prevent horizontal scroll */
  body {
    overflow-x: hidden;
  }
`;
document.head.appendChild(style);

// Set default theme
document.documentElement.setAttribute('data-theme', 'dark');

// Add viewport meta tag if not present
if (!document.querySelector('meta[name="viewport"]')) {
  const meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
  document.head.appendChild(meta);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

