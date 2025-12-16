export const homeStyles = {
  page: {
    minHeight: '100vh',
    paddingTop: '80px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Inter", sans-serif'
  },

  /* Hero */
  heroSection: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px 64px',
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
    gap: '56px',
    alignItems: 'center'
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  heroBadge: {
    fontSize: '0.8rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#9CA3AF'
  },
  heroTitle: {
    fontSize: '3.4rem',
    lineHeight: 1.05,
    fontWeight: 800,
    color: '#FFFFFF'
  },
  heroHighlight: {
    color: '#F97316'
  },
  heroSubtitle: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#D1D5DB',
    maxWidth: '460px'
  },
  heroActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '8px'
  },
  primaryButton: {
    padding: '0.9rem 1.8rem',
    borderRadius: '999px',
    border: 'none',
    fontWeight: 600,
    color: '#111827',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.95rem',
    transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out'
  },
  secondaryButton: {
    padding: '0.9rem 1.6rem',
    borderRadius: '999px',
    border: '1px solid #4B5563',
    color: '#E5E7EB',
    textDecoration: 'none',
    fontSize: '0.95rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
    cursor: 'pointer',
    background: 'transparent'
  },
  heroStats: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    marginTop: '24px'
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  },
  statNumber: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#FFFFFF'
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#9CA3AF'
  },
  heroVisual: {
    display: 'flex',
    justifyContent: 'center'
  },
  heroImageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '420px'
  },
  heroImage: {
    width: '100%',
    height: '480px',
    objectFit: 'cover',
    borderRadius: '32px',
    boxShadow: '0 25px 80px rgba(0,0,0,0.85)'
  },
  heroFloatingCard: {
    position: 'absolute',
    left: '-32px',
    bottom: '40px',
    padding: '14px 16px',
    borderRadius: '16px',
    background: 'rgba(17, 24, 39, 0.92)',
    border: '1px solid rgba(75, 85, 99, 0.7)',
    backdropFilter: 'blur(16px)'
  },
  floatingTitle: {
    fontSize: '0.75rem',
    color: '#9CA3AF'
  },
  floatingValue: {
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#F9FAFB'
  },

  /* Generic sections */
  section: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '56px 24px 32px'
  },
  sectionHeader: {
    maxWidth: '560px',
    marginBottom: '32px'
  },
  sectionBadge: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    color: '#F97316',
    marginBottom: '6px'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#F9FAFB',
    marginBottom: '8px'
  },
  sectionSubtitle: {
    fontSize: '0.95rem',
    color: '#9CA3AF',
    lineHeight: 1.7
  },

  /* Cards */
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px'
  },
  serviceCard: {
    background: '#111827',
    borderRadius: '20px',
    padding: '20px 20px 22px',
    border: '1px solid #1F2937'
  },
  serviceIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    background: '#1F2937',
    fontSize: '1.2rem'
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#F9FAFB',
    marginBottom: '6px'
  },
  cardText: {
    fontSize: '0.9rem',
    color: '#9CA3AF',
    lineHeight: 1.6
  },

  /* Pricing */
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px'
  },
  pricingCard: {
    background: '#030712',
    borderRadius: '24px',
    padding: '22px 20px 20px',
    border: '1px solid #111827'
  },
  pricingCardPopular: {
    background: 'linear-gradient(145deg, #F97316 0%, #EA580C 40%, #111827 100%)',
    border: 'none',
    position: 'relative'
  },
  popularTag: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    padding: '4px 10px',
    borderRadius: '999px',
    background: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid rgba(15,23,42,0.7)',
    fontSize: '0.7rem',
    color: '#F9FAFB'
  },
  pricingPrice: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#F9FAFB',
    margin: '8px 0 12px'
  },
  pricingPeriod: {
    fontSize: '0.85rem',
    color: '#D1D5DB',
    marginLeft: '4px'
  },
  pricingList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    color: '#E5E7EB',
    fontSize: '0.9rem'
  },
  pricingItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  checkIcon: {
    fontSize: '0.85rem',
    color: '#22C55E'
  },
  pricingButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '0.7rem 1rem',
    borderRadius: '999px',
    border: '1px solid #4B5563',
    textDecoration: 'none',
    color: '#F9FAFB',
    fontSize: '0.9rem',
    fontWeight: 500,
    background: 'transparent'
  },
  pricingButtonPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '0.7rem 1rem',
    borderRadius: '999px',
    border: 'none',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 600,
    background: '#F9FAFB',
    color: '#111827'
  },

  /* Trainers */
  trainerCard: {
    background: '#030712',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid #111827'
  },
  trainerImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover'
  },
  trainerInfo: {
    padding: '14px 16px 16px'
  },
  trainerRole: {
    fontSize: '0.85rem',
    color: '#9CA3AF'
  },

  /* Testimonials */
  testimonialRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px'
  },
  testimonialCard: {
    background: '#030712',
    borderRadius: '20px',
    padding: '18px 18px 20px',
    border: '1px solid #111827'
  },
  testimonialQuote: {
    fontSize: '0.95rem',
    color: '#E5E7EB',
    lineHeight: 1.7,
    marginBottom: '10px'
  },
  testimonialName: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#F9FAFB'
  },
  testimonialMeta: {
    fontSize: '0.8rem',
    color: '#9CA3AF'
  },

  /* Blog */
  blogCard: {
    background: '#030712',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid #111827'
  },
  blogImage: {
    width: '100%',
    height: '170px',
    objectFit: 'cover'
  },
  blogBody: {
    padding: '12px 16px 14px'
  },
  blogMeta: {
    fontSize: '0.8rem',
    color: '#9CA3AF',
    marginBottom: '4px'
  },

  /* FAQ */
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '16px'
  },
  faqItem: {
    background: '#030712',
    borderRadius: '16px',
    padding: '12px 14px',
    border: '1px solid #111827',
    color: '#F9FAFB'
  },
  faqQuestion: {
    fontSize: '0.95rem',
    cursor: 'pointer',
    listStyle: 'none'
  },
  faqAnswer: {
    marginTop: '8px',
    fontSize: '0.85rem',
    color: '#9CA3AF',
    lineHeight: 1.6
  },

  /* Footer CTA */
  footerCta: {
    padding: '40px 24px 64px'
  },
  footerCtaInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px 24px 26px',
    borderRadius: '24px',
    background: 'linear-gradient(135deg, #111827 0%, #020617 60%, #F97316 120%)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  footerCtaTitle: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#F9FAFB',
    marginBottom: '6px'
  },
  footerCtaSubtitle: {
    fontSize: '0.9rem',
    color: '#E5E7EB',
    maxWidth: '420px'
  },
  footerCtaActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },

  /* Responsive */
  '@media (max-width: 900px)': {
    heroSection: {
      gridTemplateColumns: '1fr',
      paddingTop: '40px'
    },
    heroTitle: {
      fontSize: '2.4rem'
    },
    heroImage: {
      height: '380px'
    },
    footerCtaInner: {
      alignItems: 'flex-start'
    }
  },
  '@media (max-width: 640px)': {
    page: {
      paddingTop: '80px'
    },
    heroSection: {
      padding: '32px 20px 40px'
    },
    section: {
      padding: '40px 20px 24px'
    },
    footerCta: {
      padding: '32px 20px 48px'
    }
  }
};

