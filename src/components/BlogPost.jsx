import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';

const BlogPost = () => {
  const { id } = useParams();
  const { colors } = useTheme();

  const blogPosts = {
    '1': {
      title: '5 Warm‑up Routines to Boost Your Performance',
      category: 'Training • 8 min read',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
      content: `
        <h2>Why Warm-up is Essential</h2>
        <p>A proper warm-up routine is crucial for preparing your body for intense physical activity. It gradually increases your heart rate, improves blood flow to muscles, and reduces the risk of injury.</p>
        
        <h2>5 Effective Warm-up Routines</h2>
        
        <h3>1. Dynamic Stretching</h3>
        <p>Start with arm circles, leg swings, and torso twists. Perform each movement for 30 seconds to activate your joints and muscles.</p>
        
        <h3>2. Light Cardio</h3>
        <p>5-10 minutes of light jogging or cycling helps increase your core body temperature and prepares your cardiovascular system.</p>
        
        <h3>3. Bodyweight Movements</h3>
        <p>Include squats, lunges, and push-ups to activate major muscle groups and improve mobility.</p>
        
        <h3>4. Sport-Specific Movements</h3>
        <p>Mimic the movements you'll be doing in your workout but at a lower intensity to prepare your neuromuscular system.</p>
        
        <h3>5. Activation Exercises</h3>
        <p>Target specific muscle groups with exercises like glute bridges, band pull-aparts, and planks to ensure proper muscle activation.</p>
        
        <h2>Conclusion</h2>
        <p>Remember, a good warm-up should last 10-15 minutes and leave you feeling energized, not fatigued. Make it a non-negotiable part of your fitness routine!</p>
      `
    },
    '2': {
      title: 'How to Build a Sustainable Nutrition Plan',
      category: 'Nutrition • 6 min read',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      content: `
        <h2>The Foundation of Sustainable Nutrition</h2>
        <p>Building a sustainable nutrition plan isn't about strict limitations or depriving yourself of foods you love. It's about feeling great, having more energy, and improving your health.</p>
        
        <h2>Key Principles for Success</h2>
        
        <h3>1. Focus on Whole Foods</h3>
        <p>Prioritize vegetables, fruits, lean proteins, whole grains, and healthy fats. These foods provide essential nutrients and keep you satisfied longer.</p>
        
        <h3>2. Practice Portion Control</h3>
        <p>Use your hand as a guide: palm-sized protein, fist-sized vegetables, cupped-hand carbs, and thumb-sized fats.</p>
        
        <h3>3. Stay Hydrated</h3>
        <p>Aim for 8-10 glasses of water daily. Proper hydration supports metabolism, energy levels, and overall health.</p>
        
        <h3>4. Plan and Prep</h3>
        <p>Spend time each week planning meals and preparing ingredients. This prevents impulsive food choices and saves time.</p>
        
        <h3>5. Allow Flexibility</h3>
        <p>Follow the 80/20 rule - eat nutritiously 80% of the time and allow yourself treats 20% of the time.</p>
        
        <h2>Making It Stick</h2>
        <p>Start small, be consistent, and focus on progress, not perfection. A sustainable nutrition plan is one you can maintain for life, not just a few weeks.</p>
      `
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div style={{ padding: '32px', textAlign: 'center', color: colors.text }}>
        <h1>Blog post not found</h1>
        <Link to="/" style={{ color: colors.primary }}>← Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '32px', color: colors.text, maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ color: colors.primary, textDecoration: 'none', marginBottom: '24px', display: 'inline-block' }}>
        ← Back to Home
      </Link>
      
      <img 
        src={post.image} 
        alt={post.title}
        style={{ 
          width: '100%', 
          height: '300px', 
          objectFit: 'cover', 
          borderRadius: '12px',
          marginBottom: '24px'
        }}
      />
      
      <div style={{ marginBottom: '16px', color: colors.primary, fontSize: '0.9rem' }}>
        {post.category}
      </div>
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '32px', lineHeight: '1.2' }}>
        {post.title}
      </h1>
      
      <div 
        style={{ 
          lineHeight: '1.7', 
          fontSize: '1.1rem',
          color: colors.text
        }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogPost;