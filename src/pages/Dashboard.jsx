// src/pages/Dashboard.jsx
import React from 'react';
import Header from '../components/Header';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header />
            <div className="content">
                <h2>Dashboard Content</h2>
                <p>Content goes here</p>
                {/* Add your dashboard content here */}
            </div>
        </div>
    );
};

export default Dashboard;








