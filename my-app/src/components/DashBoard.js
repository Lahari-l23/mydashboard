import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import './DashBoard.css';
import logo from '../assets/logo/logo3.webp';

function DashBoard() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);

  const navbarItems = ["Overview", "Tasks", "Reports", "Settings", "Notifications"];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <span className="website-name">MyDashboard</span>
        </div>

        <div className="navbar-right">
          <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
            {navbarItems.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="user-icon" onClick={() => setShowUserOptions(!showUserOptions)}>
            <FaUserCircle />
            {showUserOptions && (
              <div className="user-dropdown">
                <p><strong>Name:</strong> Lahari</p>
                <p><strong>Email:</strong>lahari098@gmail.com</p>
                <p><strong>Location:</strong> Bangalore</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>

          <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
            <FaBars />
          </div>
        </div>
      </nav>

      <div className="dashboard-content">
  <h2>Welcome back, Lahari!</h2>
  <p className="subtitle">Here is your progress:</p>

  <div className="cards-container">
    <div className="dashboard-card">
      <h3>Pending Tasks</h3>
      <p>5 tasks remaining this week</p>
    </div>
    <div className="dashboard-card">
      <h3>Weekly Progress</h3>
      <p>73% completed</p>
    </div>
    <div className="dashboard-card">
      <h3>Tasks Completed</h3>
      <p>5 tasks completed today</p>
    </div>
  </div>

  <div className="activity-section">
    <h3>Recent Activities:</h3>
    <ul>
      <li>✅ Completed "UI Redesign" task</li>
      <li> ✅ Created new project report</li>
      <li> ✅ Shared weekly status with the team</li>
    </ul>
  </div>
</div>

    </div>
  );
}

export default DashBoard;
