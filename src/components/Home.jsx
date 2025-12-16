import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import { homeStyles } from '../styles/Home.js';

const Home = () => {
  const { colors } = useTheme();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <div
      style={{
        ...homeStyles.page,
        backgroundColor: '#1D1D1D',
        color: colors.text
      }}
    >
      {/* Hero Section */}
      <section style={homeStyles.heroSection}>
        <div style={homeStyles.heroContent}>
          <p style={homeStyles.heroBadge}>FITMAKER GYM • PREMIUM FITNESS CLUB</p>
          <h1 style={homeStyles.heroTitle}>
            Make your <span style={homeStyles.heroHighlight}>body</span> shape.
          </h1>
          <p style={homeStyles.heroSubtitle}>
            Build your best version with our professional trainers, modern equipment,
            and community that keeps you motivated every single day.
          </p>
          <div style={homeStyles.heroActions}>
            <Link
              to={user ? "/dashboard" : "/register"}
              style={{
                ...homeStyles.primaryButton,
                backgroundColor: colors.primary,
                boxShadow: `0 16px 40px ${colors.shadow}`
              }}
            >
              {user ? "Go to Dashboard" : "Get Started"}
            </Link>
            <Link to="/about" style={homeStyles.secondaryButton}>
              View Programs
            </Link>
          </div>
          <div style={homeStyles.heroStats}>
            <div style={homeStyles.statItem}>
              <span style={homeStyles.statNumber}>30k+</span>
              <span style={homeStyles.statLabel}>Active Members</span>
            </div>
            <div style={homeStyles.statItem}>
              <span style={homeStyles.statNumber}>120+</span>
              <span style={homeStyles.statLabel}>Professional Trainers</span>
            </div>
            <div style={homeStyles.statItem}>
              <span style={homeStyles.statNumber}>24/7</span>
              <span style={homeStyles.statLabel}>Open Everyday</span>
            </div>
          </div>
        </div>
        <div style={homeStyles.heroVisual}>
          <div style={homeStyles.heroImageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
              alt="Athlete training at FitMaker gym"
              style={homeStyles.heroImage}
            />
            <div style={homeStyles.heroFloatingCard}>
              <p style={homeStyles.floatingTitle}>Today’s Session</p>
              <p style={homeStyles.floatingValue}>Full Body • 60 min</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section style={homeStyles.section}>
        <header style={homeStyles.sectionHeader}>
          <p style={homeStyles.sectionBadge}>Our Services</p>
          <h2 style={homeStyles.sectionTitle}>Built for every fitness journey.</h2>
          <p style={homeStyles.sectionSubtitle}>
            Whether you’re just starting or a pro athlete, FitMaker has the perfect
            program to match your goals.
          </p>
        </header>
        <div style={homeStyles.cardGrid}>
          {services.map((service) => (
            <article key={service.title} style={homeStyles.serviceCard}>
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  marginBottom: '16px'
                }}
              />
              <div style={homeStyles.serviceIcon}>{service.icon}</div>
              <h3 style={homeStyles.cardTitle}>{service.title}</h3>
              <p style={homeStyles.cardText}>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Our Plans */}
      <section style={homeStyles.section}>
        <header style={homeStyles.sectionHeader}>
          <p style={homeStyles.sectionBadge}>Our Plans</p>
          <h2 style={homeStyles.sectionTitle}>Choose the right membership.</h2>
        </header>
        <div style={homeStyles.pricingGrid}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              style={{
                ...homeStyles.pricingCard,
                ...(plan.popular ? homeStyles.pricingCardPopular : {})
              }}
            >
              {plan.popular && <span style={homeStyles.popularTag}>Most Popular</span>}
              <h3 style={homeStyles.cardTitle}>{plan.name}</h3>
              <p style={homeStyles.pricingPrice}>
                ${plan.price}
                <span style={homeStyles.pricingPeriod}>/month</span>
              </p>
              <ul style={homeStyles.pricingList}>
                {plan.features.map((item) => (
                  <li key={item} style={homeStyles.pricingItem}>
                    <span style={homeStyles.checkIcon}>✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={user ? "/payments" : "/login"}
                style={plan.popular ? homeStyles.pricingButtonPrimary : homeStyles.pricingButton}
              >
                {user ? "Make Payment" : "Join now"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={homeStyles.section}>
        <header style={homeStyles.sectionHeader}>
          <p style={homeStyles.sectionBadge}>Testimonials</p>
          <h2 style={homeStyles.sectionTitle}>Members love FitMaker.</h2>
        </header>
        <div style={homeStyles.testimonialRow}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} style={homeStyles.testimonialCard}>
              <p style={homeStyles.testimonialQuote}>"{testimonial.quote}"</p>
              <p style={homeStyles.testimonialName}>{testimonial.name}</p>
              <p style={homeStyles.testimonialMeta}>{testimonial.meta}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section style={homeStyles.section}>
        <header style={homeStyles.sectionHeader}>
          <p style={homeStyles.sectionBadge}>Blog Post</p>
          <h2 style={homeStyles.sectionTitle}>Train smarter, not harder.</h2>
        </header>
        <div style={homeStyles.cardGrid}>
          {blogs.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
              <article style={homeStyles.blogCard}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={homeStyles.blogImage}
                />
                <div style={homeStyles.blogBody}>
                  <p style={homeStyles.blogMeta}>{post.category}</p>
                  <h3 style={homeStyles.cardTitle}>{post.title}</h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={homeStyles.section}>
        <header style={homeStyles.sectionHeader}>
          <p style={homeStyles.sectionBadge}>FAQ</p>
          <h2 style={homeStyles.sectionTitle}>Frequently asked questions.</h2>
        </header>
        <div style={homeStyles.faqGrid}>
          {faqs.map((faq) => (
            <details key={faq.q} style={homeStyles.faqItem}>
              <summary style={homeStyles.faqQuestion}>{faq.q}</summary>
              <p style={homeStyles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section style={homeStyles.footerCta}>
        <div style={homeStyles.footerCtaInner}>
          <div>
            <p style={homeStyles.sectionBadge}>Start now</p>
            <h2 style={homeStyles.footerCtaTitle}>Ready to join FitMaker?</h2>
            <p style={homeStyles.footerCtaSubtitle}>
              Create your account in minutes and get instant access to our classes,
              trainers, and community.
            </p>
          </div>
          <div style={homeStyles.footerCtaActions}>
            <Link
              to={user ? "/dashboard" : "/register"}
              style={{
                ...homeStyles.primaryButton,
                backgroundColor: '#ffffff',
                color: '#111111'
              }}
            >
              {user ? "Go to Dashboard" : "Create account"}
            </Link>
            <Link to="/login" style={homeStyles.secondaryButton}>
              I already have an account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: 'Personal Training',
    description: '1-on-1 sessions with expert coaches, fully tailored to your goals.',
    icon: '💪',
    image: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Group Classes',
    description: 'High-energy classes including HIIT, yoga, cycling, and more.',
    icon: '🔥',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Nutrition Coaching',
    description: 'Meal planning and guidance to fuel your training the right way.',
    icon: '🥗',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80'
  }
];

const plans = [
  {
    name: 'Basic',
    price: 19,
    features: ['Gym floor access', 'Locker room', 'Free Wi‑Fi'],
    popular: false
  },
  {
    name: 'Pro',
    price: 39,
    features: ['Everything in Basic', 'All classes included', 'Sauna & spa access'],
    popular: true
  },
  {
    name: 'Elite',
    price: 69,
    features: ['Personal trainer 2x/week', 'Priority support', 'Advanced analytics'],
    popular: false
  }
];

const trainers = [
  {
    name: 'Alex Morgan',
    role: 'Strength & Conditioning Coach',
    image:
      'https://images.unsplash.com/photo-1554344058-8d1d1dbc5960?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Sofia Lee',
    role: 'Yoga & Mobility Specialist',
    image:
      'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'James Carter',
    role: 'HIIT & Performance Trainer',
    image:
      'https://images.unsplash.com/photo-1546484959-f9a9ae384058?auto=format&fit=crop&w=700&q=80'
  }
];

const testimonials = [
  {
    name: 'Priya S.',
    meta: 'Member for 1 year',
    quote:
      'FitMaker completely changed how I feel about fitness. The trainers are supportive and the community is amazing.'
  },
  {
    name: 'Karthik R.',
    meta: 'Lost 12kg in 6 months',
    quote:
      'The combination of training and nutrition coaching made it easy to stay consistent and see real results.'
  }
];

const blogs = [
  {
    id: 1,
    title: '5 Warm‑up Routines to Boost Your Performance',
    category: 'Training • 8 min read',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    title: 'How to Build a Sustainable Nutrition Plan',
    category: 'Nutrition • 6 min read',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
  }
];

const faqs = [
  {
    q: 'Can I try the gym before committing?',
    a: 'Yes, we offer a 3‑day free trial so you can explore the gym, join classes, and meet our trainers.'
  },
  {
    q: 'Do you have personal trainers?',
    a: 'We have certified personal trainers available for 1‑on‑1 and small group sessions, bookable via our dashboard.'
  },
  {
    q: 'What are your opening hours?',
    a: 'Our clubs are open 24/7, including weekends and holidays, so you can train whenever it fits your schedule.'
  }
];

export default Home;

