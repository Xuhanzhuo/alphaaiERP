import React, { useState } from 'react';
import './EmployeeAttendance.css';
import { FaBell, FaEnvelope } from 'react-icons/fa'; 


const EmployeeAttendance = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('Ho Chun Yat');

  const employeeData = {
    'Ho Chun Yat': {
      info: {
        name: 'Ho Chun Yat',
        id: '001',
        department: 'IT部门',
        position: '软件工程师',
        joinDate: '2022-01-01',
        leaveDate: '-',
      },
      attendance: {
        group: '组A',
        requiredDays: 22,
        actualDays: 20,
        shiftLength: '8小时',
        totalHours: '160小时',
      },
      abnormal: {
        lateMinutes: 30,
        lateTimes: 2,
        earlyLeaveMinutes: 15,
        earlyLeaveTimes: 1,
        absenteeismDays: 2,
      },
      leave: {
        annual: 5,
        unpaid: 2,
        compensatory: 10,
        sickPaid: 3,
        statutorySick: 0,
      },
    },
    'Wilson Samuel Suen': {
      info: {
        name: 'Wilson Samuel Suen',
        id: '002',
        department: '设计部门',
        position: '设计师',
        joinDate: '2021-05-01',
        leaveDate: '-',
      },
      attendance: {
        group: '组B',
        requiredDays: 20,
        actualDays: 18,
        shiftLength: '7小时',
        totalHours: '126小时',
      },
      abnormal: {
        lateMinutes: 20,
        lateTimes: 1,
        earlyLeaveMinutes: 10,
        earlyLeaveTimes: 1,
        absenteeismDays: 1,
      },
      leave: {
        annual: 3,
        unpaid: 1,
        compensatory: 5,
        sickPaid: 2,
        statutorySick: 1,
      },
    },
    'Law Sau Ching': {
      info: {
        name: 'Law Sau Ching',
        id: '003',
        department: '人事部门',
        position: '人事专员',
        joinDate: '2020-08-01',
        leaveDate: '-',
      },
      attendance: {
        group: '组C',
        requiredDays: 21,
        actualDays: 19,
        shiftLength: '9小时',
        totalHours: '171小时',
      },
      abnormal: {
        lateMinutes: 25,
        lateTimes: 2,
        earlyLeaveMinutes: 20,
        earlyLeaveTimes: 2,
        absenteeismDays: 1,
      },
      leave: {
        annual: 4,
        unpaid: 3,
        compensatory: 7,
        sickPaid: 1,
        statutorySick: 1,
      },
    },
  };

  const handleEmployeeChange = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const employee = employeeData[selectedEmployee];

  return (
    <div className="employee-attendance">
        <header className="department-header">
        <div className="department-title">Alpha AI Technology</div>
        <div className="header-icons">
          <FaEnvelope className="icon" />
          <FaBell className="icon" />
          <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        </div>
      </header>  
      <h1>员工考勤</h1>
      <select onChange={handleEmployeeChange} value={selectedEmployee}>
        {Object.keys(employeeData).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <div className="attendance-section">
        <h2>员工信息</h2>
        <table>
          <thead>
            <tr>
              <th>员工名称</th>
              <th>员工编号</th>j  
              <th>部门名称</th>
              <th>职位</th>
              <th>入职日期</th>
              <th>离职时间</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td>{employee.info.name}</td>
              <td>{employee.info.id}</td>
              <td>{employee.info.department}</td>
              <td>{employee.info.position}</td>
              <td>{employee.info.joinDate}</td>
              <td>{employee.info.leaveDate}</td>
            </tr>
          </tbody>
        </table>   
      </div>
      <div className="attendance-section">
        <h2>考勤信息</h2>
        <table>
          <thead>
            <tr>
              <th>当前考勤组</th>
              <th>应出勤天数</th>
              <th>实际出勤天数</th>
              <th>班次时长</th>
              <th>累计工作时长</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employee.attendance.group}</td>o
              <td>{employee.attendance.requiredDays}</td>
              <td>{employee.attendance.actualDays}</td>
              <td>{employee.attendance.shiftLength}</td>
              <td>{employee.attendance.totalHours}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="attendance-section">
        <h2>考勤异常信息</h2>
        <table>
          <thead>
            <tr>
              <th>迟到时长(分钟)</th>
              <th>迟到次数</th>
              <th>早退时长(分钟)</th>
              <th>早退次数</th>
              <th>缺勤(天)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employee.abnormal.lateMinutes}</td>
              <td>{employee.abnormal.lateTimes}</td>
              <td>{employee.abnormal.earlyLeaveMinutes}</td>
              <td>{employee.abnormal.earlyLeaveTimes}</td>
              <td>{employee.abnormal.absenteeismDays}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="attendance-section">
        <h2>请假信息</h2>
        <table>
          <thead>
            <tr>
              <th>年假(天)</th>
              <th>无薪假(天)</th>
              <th>补假(小时)</th>
              <th>病假(有薪)(天)</th>
              <th>法定病假(天)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employee.leave.annual}</td>
              <td>{employee.leave.unpaid}</td>
              <td>{employee.leave.compensatory}</td>
              <td>{employee.leave.sickPaid}</td>
              <td>{employee.leave.statutorySick}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="export-button">导出记录</button>
    </div>
  );
};

export default EmployeeAttendance;

