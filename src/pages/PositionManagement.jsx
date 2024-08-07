import React, { useState } from 'react';
import './PositionManagement.css';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const PositionManagement = () => {
  const [positions, setPositions] = useState([
    { title: 'CEO', employees: 1, department: '', type: 'Full Time' },
    { title: 'CTO', employees: 1, department: '', type: 'Part Time' },
    { title: 'Machine Learning Engineer', employees: 4, department: '', type: 'Intern' },
    { title: 'Software Engineer', employees: 2, department: '', type: 'Intern' },
    { title: 'Unity VR developer', employees: 1, department: '', type: 'Intern' },
    { title: 'UI/UX Designer', employees: 2, department: '', type: 'Intern' },
  ]);

  const handleDelete = (index) => {
    const newPositions = [...positions];
    newPositions.splice(index, 1);
    setPositions(newPositions);

  };

  return (
    <div className="position-management">
      <h1>Alpha AI Technology</h1> 
      <div className="header-icons">
        <FaEnvelope className="icon" />
        <FaBell className="icon" />
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
      </div>
      
      <div className="content">
        <h2>职位管理</h2>
        <input type="text" placeholder="请输入搜索内容" />
        <table>
          <thead>
            <tr className='text'>
              <th>职位名称</th>
              <th>在职人数</th>
              <th>所属部门</th>
              <th>职位类别</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position, index) => (
              <tr key={index}>
                <td>{position.title}</td>
                <td>{position.employees}</td>
                <td>{position.department}</td>
                <td>{position.type}</td>
                <td>
                  <a href="#">合并</a> <a href="#">编辑</a> <a href="#" onClick={() => handleDelete(index)}>删除</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PositionManagement;

