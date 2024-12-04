import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send email to the database endpoint
      const response = await fetch('https://logtodatabase-rgzyvy3rca-uc.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: "NicotineTracker",
          content: email
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        throw new Error('Failed to submit email');
      }
    } catch (err) {
      setError('Failed to join waitlist. Please try again.');
      console.error('Error submitting email:', err);
    }
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-content">
          <h1 style={{ 
            color: 'white', 
            fontSize: '1rem',
            fontWeight: '500',
            background: 'linear-gradient(to right, #e2e8f0, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>NicotineTracker</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/tracker" className="nav-link">Tracker</Link>
            <Link to="/register" className="nav-button">Join Waitlist</Link>
          </div>
        </div>
      </nav>

      <div className="register-page">
        <div className="register-card">
          {!submitted ? (
            <>
              <h1>Join the Waitlist</h1>
              <p className="register-description">
                Be the first to know when NicotineTracker launches and start your journey to a healthier lifestyle.
              </p>
              <form onSubmit={handleSubmit} className="register-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="register-input"
                  required
                />
                <button type="submit" className="register-submit">
                  Join Waitlist
                </button>
              </form>
              {error && <p className="register-error">{error}</p>}
            </>
          ) : (
            <div className="success-message">
              <h2>Thank You!</h2>
              <p>You've successfully joined our waitlist. We'll notify you when we launch!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default RegisterPage;