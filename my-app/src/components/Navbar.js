import React from 'react';
import './Navbar.css'; // Optional for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>MyApp</h2>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>Home</li>
          <li>Reports</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="navbar-right">
        <span className="user-icon">👤 Lakshmi</span>
      </div>
    </nav>
  );
}

export default Navbar;
