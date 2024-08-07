import React, { useState } from 'react';
import './DepartmentManagement.css';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState([
    {
      name: 'Alpha AI Technology',
      pendingEmployees: 0,
      activeEmployees: 3,
      manager: 'Ho Chun Yat',
    },
    {
      name: 'Machine Learning and Software Development Department',
      pendingEmployees: 0,
      activeEmployees: 1,
      manager: 'Wilson Samuel Suen',
    },
    {
      name: 'Design Department',
      pendingEmployees: 0,
      activeEmployees: 0,
      manager: 'Ho Chun Yat',
    },
    {
      name: 'VR and Metaverse Department',
      pendingEmployees: 0,
      activeEmployees: 0,
      manager: 'Ho Chun Yat',
    },
  ]);

  const handleDelete = (index) => {
    const newDepartments = [...departments];
    newDepartments.splice(index, 1);
    setDepartments(newDepartments);
  };

  return (
    <div className="department-management">
      <header className="department-header">
        <div className="department-title">Alpha AI Technology</div>
        <div className="header-icons">
          <FaEnvelope className="icon" />
          <FaBell className="icon" />
          <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        </div>
      </header>
      <div className="content">
        <h2>部門架構</h2>
        <div className="department-structure">
          <div className="structure-header">部門架構</div>
          <div className="structure-content">
            <table>
              <thead>
                <tr>
                  <th>部门名称</th>
                  <th>待入職人数</th>
                  <th>在职人数</th>
                  <th>负责人</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department, index) => (
                  <tr key={index}>
                    <td>{department.name}</td>
                    <td>{department.pendingEmployees}</td>
                    <td>{department.activeEmployees}</td>
                    <td>{department.manager}</td>
                    <td>
                      <button onClick={() => handleDelete(index)}>删除</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentManagement;

