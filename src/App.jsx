import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Dashboard from './components/Dashboard.jsx';
import Profile from './components/Profile.jsx';

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
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

