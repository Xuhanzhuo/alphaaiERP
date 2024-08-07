// src/components/Header.jsx
import React from 'react';

import { FaEnvelope, FaBell } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Alpha AI Technology</h1>
            <div className="header-icons">
                <FaEnvelope className="icon" />
                <FaBell className="icon" />
                <img src="/profile.jpg" alt="Profile" className="profile-pic" />
            </div>
        </div>
    );
};

export default Header;
