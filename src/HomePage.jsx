import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleDemoClick = async () => {
    try {
      await fetch('https://logtodatabase-rgzyvy3rca-uc.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: "NicotineTracker",
          content: "Demo Click",
        }),
      });
      navigate('/tracker'); // Changed from '/app' to '/tracker' to match App.jsx route
    } catch (error) {
      console.error('Error logging demo click:', error);
      navigate('/tracker'); // Changed here as well
    }
  };

  return (
    <div className="landing-container">
      <nav className="nav-bar">
        <div className="nav-content">
          <h1>NicotineTracker</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <button onClick={handleDemoClick} className="nav-demo-button">Demo</button>
            <Link to="/register" className="nav-button">Join Waitlist</Link>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <h1>Track Your Journey to a Nicotine-Free Life</h1>
          <p>Monitor, manage, and overcome nicotine dependency with our intelligent tracking system</p>
          <div className="hero-buttons">
            <button onClick={handleDemoClick} className="primary-button">Try Demo</button>
            <Link to="/register" className="secondary-button">Join Waitlist</Link>
          </div>
        </section>

        <section className="features-section">
          <h2>Why Choose NicotineTracker?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Visual Progress</h3>
              <p>Track your daily usage with our intuitive calendar interface</p>
            </div>
            <div className="feature-card">
              <h3>Data Insights</h3>
              <p>Get detailed analytics about your usage patterns</p>
            </div>
            <div className="feature-card">
              <h3>Support System</h3>
              <p>Connect with others on the same journey</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join our waitlist to be the first to know when we launch</p>
          <Link to="/register" className="cta-button">Join Waitlist Now</Link>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 NicotineTracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;