// src/components/Layout.jsx
import React from 'react';
import { FaEnvelope, FaBell } from 'react-icons/fa';
import './Layout.css'; // Add CSS for layout if needed

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="header">
        <h1>Alpha AI Technology</h1>
        <div className="header-icons">
          <FaEnvelope className="icon" />
          <FaBell className="icon" />
          <img src="/profile.jpg" alt="Profile" className="profile-pic" /> {/* Directly use the path */}
        </div>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
