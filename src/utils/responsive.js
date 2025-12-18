import { useState, useEffect } from 'react';

// Responsive utility for handling media queries in CSS-in-JS
export const applyResponsiveStyles = (baseStyles, mediaQueries = {}) => {
  const styles = { ...baseStyles };
  
  // Apply media query styles based on window width
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    
    if (width <= 480 && mediaQueries['@media (max-width: 480px)']) {
      Object.assign(styles, mediaQueries['@media (max-width: 480px)']);
    } else if (width <= 768 && mediaQueries['@media (max-width: 768px)']) {
      Object.assign(styles, mediaQueries['@media (max-width: 768px)']);
    } else if (width <= 1024 && mediaQueries['@media (max-width: 1024px)']) {
      Object.assign(styles, mediaQueries['@media (max-width: 1024px)']);
    }
  }
  
  return styles;
};

// Hook to get current screen size
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return {
    ...screenSize,
    isMobile: screenSize.width <= 768,
    isTablet: screenSize.width > 768 && screenSize.width <= 1024,
    isDesktop: screenSize.width > 1024
  };
};