import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default to dark theme
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark
      ? {
          // Dark theme colors
          background: '#0f0f0f',
          surface: '#1a1a1a',
          surfaceElevated: '#242424',
          text: '#ffffff',
          textSecondary: '#b0b0b0',
          primary: '#667eea',
          primaryHover: '#5568d3',
          secondary: '#ff6b6b',
          secondaryHover: '#ff5252',
          accent: '#51cf66',
          border: '#2a2a2a',
          shadow: 'rgba(0, 0, 0, 0.5)',
          shadowHover: 'rgba(0, 0, 0, 0.7)'
        }
      : {
          // Light theme colors
          background: '#f8f9fa',
          surface: '#ffffff',
          surfaceElevated: '#ffffff',
          text: '#1a1a1a',
          textSecondary: '#666666',
          primary: '#667eea',
          primaryHover: '#5568d3',
          secondary: '#ff6b6b',
          secondaryHover: '#ff5252',
          accent: '#51cf66',
          border: '#e9ecef',
          shadow: 'rgba(0, 0, 0, 0.1)',
          shadowHover: 'rgba(0, 0, 0, 0.15)'
        }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

