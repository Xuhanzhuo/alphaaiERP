import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './AttendanceManagement.css';
import { FaBell, FaEnvelope } from 'react-icons/fa'; 

const AttendanceManagement = () => {
  const [date, setDate] = useState(new Date());
  const [attendanceDetails, setAttendanceDetails] = useState({
    late: 0,
    earlyLeave: 0,
    absent: 0,
    leave: 0,
  });

  const handleDayClick = (value) => {
    setDate(value);
    // Here you can set the attendance details for the selected day
    // Example:
    setAttendanceDetails({
      late: 1,
      earlyLeave: 1,
      absent: 0,
      leave: 1,
    });
  };

  return (
    <div className="attendance-management">
        <header className="department-header">
        <div className="department-title">Alpha AI Technology</div>
        <div className="header-icons">
          <FaEnvelope className="icon" />
          <FaBell className="icon" />
          <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        </div>
      </header>    
      <h1>Alpha AI Technology</h1>
      <div className="calendar-container">
        <Calendar
          onChange={handleDayClick}
          value={date}
          tileContent={({ date, view }) =>
            view === 'month' && (
              <div className="attendance-info">
                {/* Customize your tile content here */}
              </div>
            )
          }
        />
      </div>
      <div className="attendance-details">
        <h2>{date.toDateString()} 考勤详情</h2>
        <p>迟到人数: {attendanceDetails.late}</p>
        <p>早退人数: {attendanceDetails.earlyLeave}</p>
        <p>缺勤人数: {attendanceDetails.absent}</p>
        <p>请假人数: {attendanceDetails.leave}</p>
        <h3>员工名单</h3>
        <ul>
          <li>Ho Chun Yat - 早退</li>
          <li>Wilson Samuel Suen - 正常</li>
          <li>Law Sau Ching - 正常</li>
        </ul>
      </div>
    </div>
  );
};

export default AttendanceManagement;


