import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from '../assets/logo/logo3.webp';

const LoginPage= () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePhone = () => {
    if (!phone) {
      setError('Phone number is required');
      return false;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError('Enter a valid 10-digit phone number');
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validatePhone()) return;

    localStorage.setItem('dummyPhone', phone);
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <img src={logo} alt="CalmHaven Logo" className="logo-outside" />
      <p>CALMHAVEN</p>
      <div className="login-container">
        <h2>LOGIN</h2>
        <form onSubmit={handleLogin}>
          <label></label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (error) setError('');
            }}
          />

          {error && <p className="error-message">{error}</p>}

          <div className="button-container">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
