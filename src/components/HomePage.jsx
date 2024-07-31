// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file for HomePage

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Application</h1>
      <div className="home-buttons">
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/signup" className="home-button">Signup</Link>
      </div>
    </div>
  );
};

export default HomePage;
