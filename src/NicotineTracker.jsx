import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NicotineTracker.css';

function NicotineTracker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [trackedData, setTrackedData] = useState({});

  // Generate calendar data
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Handle date selection with cycling through types
  const handleDateClick = (day) => {
    const newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    const dateStr = newDate.toISOString().split('T')[0];
    
    // Cycle through types: none -> nicotine -> vape -> none
    let newType = 'none';
    if (!trackedData[dateStr]) {
      newType = 'nicotine';
    } else if (trackedData[dateStr] === 'nicotine') {
      newType = 'vape';
    }
    
    setTrackedData(prev => ({
      ...prev,
      [dateStr]: newType === 'none' ? null : newType
    }));
  };

  // Calendar navigation
  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  // Generate calendar UI
  const daysInMonth = getDaysInMonth(selectedDate);
  const firstDay = getFirstDayOfMonth(selectedDate);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="tracker-page">
      <nav className="nav-bar">
        <div className="nav-content">
          <h1>NicotineTracker</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/tracker" className="nav-link">Tracker</Link>
            <Link to="/register" className="nav-button">Join Waitlist</Link>
          </div>
        </div>
      </nav>

      <div className="tracker-container">
        <div className="calendar">
          <div className="calendar-header">
            <button onClick={handlePrevMonth}>&lt;</button>
            <h2>{monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}</h2>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>

          <div className="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          <div className="calendar-grid">
            {[...Array(firstDay)].map((_, index) => (
              <div key={`empty-${index}`} className="calendar-day empty"></div>
            ))}
            {[...Array(daysInMonth)].map((_, index) => {
              const day = index + 1;
              const dateStr = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day).toISOString().split('T')[0];
              const usage = trackedData[dateStr];
              return (
                <div
                  key={day}
                  className={`calendar-day ${usage || ''}`}
                  onClick={() => handleDateClick(day)}
                >
                  <span>{day}</span>
                </div>
              );
            })}
          </div>

          <div className="calendar-key">
            <div className="key-item">
              <div className="key-color nicotine"></div>
              <span>Nicotine Usage</span>
            </div>
            <div className="key-item">
              <div className="key-color vape"></div>
              <span>Vape Usage</span>
            </div>
            <div className="key-item">
              <div className="key-color none"></div>
              <span>No Usage</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 NicotineTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


{/* Add this before the footer in your NicotineTracker component */}
<div className="waitlist-container">
  <Link to="/register" className="waitlist-button">
    Join Waitlist
  </Link>
</div>
export default NicotineTracker;