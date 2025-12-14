// Animation keyframes and utilities
export const animations = {
  fadeIn: {
    animation: 'fadeIn 0.5s ease-in',
    '@keyframes fadeIn': {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' }
    }
  },
  slideIn: {
    animation: 'slideIn 0.4s ease-out',
    '@keyframes slideIn': {
      from: { transform: 'translateX(-100%)', opacity: 0 },
      to: { transform: 'translateX(0)', opacity: 1 }
    }
  },
  scaleIn: {
    animation: 'scaleIn 0.3s ease-out',
    '@keyframes scaleIn': {
      from: { transform: 'scale(0.9)', opacity: 0 },
      to: { transform: 'scale(1)', opacity: 1 }
    }
  },
  pulse: {
    animation: 'pulse 2s ease-in-out infinite',
    '@keyframes pulse': {
      '0%, 100%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.05)' }
    }
  },
  shimmer: {
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 2s infinite',
    '@keyframes shimmer': {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' }
    }
  }
};

export const transitions = {
  smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  fast: 'all 0.15s ease',
  slow: 'all 0.5s ease',
  bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

