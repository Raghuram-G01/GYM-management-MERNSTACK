import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './styles/responsive.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Dashboard from './components/Dashboard.jsx';
import Profile from './components/Profile.jsx';
import Plans from './components/Plans.jsx';
import Workout from './components/Workout.jsx';
import Attendance from './components/Attendance.jsx';
import Payments from './components/Payments.jsx';
import Members from './components/Members.jsx';
import Reports from './components/Reports.jsx';
import Settings from './components/Settings.jsx';
import Users from './components/Users.jsx';
import AuthGuard from './components/AuthGuard.jsx';
import BlogPost from './components/BlogPost.jsx';

const App = () => {
  const appStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--bg)',
    color: 'var(--text)',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  };

  const mainStyle = {
    flex: 1,
    animation: 'fadeIn 0.5s ease-in'
  };

  return (
    <ThemeProvider>
      <Router>
        <div style={appStyle}>
          <Navbar />
          <main style={mainStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
              <Route path="/profile" element={<AuthGuard><Profile /></AuthGuard>} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/workout" element={<AuthGuard requiredRole="member"><Workout /></AuthGuard>} />
              <Route path="/attendance" element={<AuthGuard><Attendance /></AuthGuard>} />
              <Route path="/payments" element={<AuthGuard><Payments /></AuthGuard>} />
              <Route path="/members" element={<AuthGuard requiredRole="trainer"><Members /></AuthGuard>} />
              <Route path="/reports" element={<AuthGuard requiredRole="admin"><Reports /></AuthGuard>} />
              <Route path="/settings" element={<AuthGuard requiredRole="admin"><Settings /></AuthGuard>} />
              <Route path="/users" element={<AuthGuard requiredRole="admin"><Users /></AuthGuard>} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

