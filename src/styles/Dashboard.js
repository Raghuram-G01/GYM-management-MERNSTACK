export const dashboardStyles = {
  page: {
    minHeight: '100vh',
    padding: '56px 24px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#0F111A',
    color: '#EAEFF7',
    animation: 'fadeIn 0.4s ease'
  },
  loading: {
    textAlign: 'center',
    padding: '4rem',
    color: '#EAEFF7',
    fontWeight: 600
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '16px'
  },
  subhead: {
    margin: 0,
    color: '#8F96A8',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    fontWeight: 600
  },
  title: {
    margin: '4px 0',
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#FFFFFF'
  },
  lead: {
    margin: '0',
    color: '#A8B0C2',
    fontSize: '1rem'
  },
  headerActions: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  location: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 12px',
    background: '#151926',
    borderRadius: '12px',
    color: '#EAEFF7',
    fontWeight: 600
  },
  locationIcon: {
    fontSize: '1rem'
  },
  outlineButton: {
    padding: '10px 14px',
    borderRadius: '12px',
    border: '1px solid #1F2432',
    background: '#161A26',
    color: '#EAEFF7',
    fontWeight: 700,
    cursor: 'pointer'
  },
  accentButton: {
    padding: '10px 14px',
    borderRadius: '12px',
    border: 'none',
    color: '#FFFFFF',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 8px 18px rgba(255, 116, 67, 0.25)',
    background: '#FF7443'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '14px',
    marginBottom: '16px'
  },
  statCard: {
    display: 'flex',
    gap: '12px',
    padding: '14px',
    background: '#161A26',
    borderRadius: '12px',
    border: '1px solid #1F2432',
    boxShadow: '0 6px 18px rgba(0,0,0,0.16)'
  },
  statIcon: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    background: '#1F2432',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.1rem'
  },
  statLabel: {
    fontSize: '0.95rem',
    color: '#A8B0C2',
    marginBottom: '2px'
  },
  statValue: {
    fontSize: '1.3rem',
    fontWeight: 800,
    color: '#FFFFFF',
    marginBottom: '2px'
  },
  statSub: {
    fontSize: '0.9rem',
    color: '#8F96A8'
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    gap: '14px',
    marginBottom: '14px'
  },
  card: {
    background: '#161A26',
    borderRadius: '14px',
    border: '1px solid #1F2432',
    padding: '16px',
    boxShadow: '0 10px 24px rgba(0,0,0,0.18)'
  },
  cardLarge: {
    background: '#161A26',
    borderRadius: '14px',
    border: '1px solid #1F2432',
    padding: '16px',
    boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
    gridColumn: 'span 1'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px'
  },
  sectionTitle: {
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#FFFFFF'
  },
  sectionHint: {
    color: '#8F96A8',
    fontSize: '0.9rem'
  },
  chartRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px',
    alignItems: 'end',
    height: '180px'
  },
  chartBarWrap: {
    textAlign: 'center'
  },
  chartBar: {
    width: '100%',
    minHeight: '8px',
    borderRadius: '10px'
  },
  chartLabel: {
    display: 'block',
    marginTop: '6px',
    fontSize: '0.85rem',
    color: '#8F96A8'
  },
  radialWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px'
  },
  radialOuter: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    background: 'conic-gradient(#FF7443 0deg 288deg, #1F2432 288deg 360deg)',
    display: 'grid',
    placeItems: 'center'
  },
  radialInner: {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    background: '#0F111A',
    display: 'grid',
    placeItems: 'center',
    boxShadow: 'inset 0 0 0 1px #1F2432'
  },
  radialValue: {
    fontWeight: 800,
    fontSize: '1.4rem',
    color: '#FFFFFF'
  },
  radialText: {
    fontSize: '0.9rem',
    color: '#8F96A8'
  },
  helperText: {
    textAlign: 'center',
    color: '#A8B0C2',
    fontSize: '0.95rem',
    margin: 0
  },
  goalList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  goalItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '12px',
    background: '#141826',
    border: '1px solid #1F2432'
  },
  goalTitle: {
    fontWeight: 700,
    color: '#FFFFFF'
  },
  goalMeta: {
    color: '#8F96A8',
    fontSize: '0.9rem'
  },
  goalTag: {
    padding: '6px 10px',
    borderRadius: '999px',
    background: 'rgba(255,116,67,0.15)',
    color: '#FF7443',
    fontWeight: 700,
    fontSize: '0.85rem'
  },
  lowerGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr 1fr',
    gap: '14px'
  },
  trainerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '12px'
  },
  trainerCard: {
    display: 'flex',
    gap: '10px',
    padding: '10px',
    borderRadius: '12px',
    border: '1px solid #1F2432',
    background: '#141826',
    alignItems: 'center'
  },
  trainerAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    objectFit: 'cover'
  },
  trainerName: {
    fontWeight: 700,
    color: '#FFFFFF'
  },
  trainerRole: {
    color: '#8F96A8',
    fontSize: '0.9rem'
  },
  dietCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    padding: '12px',
    borderRadius: '12px',
    background: '#141826',
    border: '1px solid #1F2432'
  },
  dietTitle: {
    fontWeight: 700,
    color: '#FFFFFF'
  },
  dietText: {
    color: '#8F96A8',
    fontSize: '0.95rem'
  },
  scheduleList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  scheduleItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 12px',
    borderRadius: '12px',
    background: '#141826',
    border: '1px solid #1F2432'
  },
  scheduleTitle: {
    fontWeight: 700,
    color: '#FFFFFF'
  },
  scheduleTime: {
    color: '#8F96A8',
    fontSize: '0.9rem'
  },
  scheduleTag: {
    padding: '6px 10px',
    borderRadius: '999px',
    background: 'rgba(68,89,255,0.2)',
    color: '#AFC2FF',
    fontWeight: 700,
    fontSize: '0.85rem'
  },
  '@media (max-width: 1024px)': {
    mainGrid: {
      gridTemplateColumns: '1fr 1fr'
    },
    lowerGrid: {
      gridTemplateColumns: '1fr 1fr'
    }
  },
  '@media (max-width: 768px)': {
    page: {
      padding: '56px 18px 36px'
    },
    header: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    headerActions: {
      width: '100%'
    },
    mainGrid: {
      gridTemplateColumns: '1fr'
    },
    lowerGrid: {
      gridTemplateColumns: '1fr'
    }
  },
  '@media (max-width: 520px)': {
    statsGrid: {
      gridTemplateColumns: '1fr'
    }
  }
};

