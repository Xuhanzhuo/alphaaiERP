// src/pages/SalaryManagement.jsx
import React from 'react';
import Header from '../components/Header';
import './SalaryManagement.css';

const SalaryManagement = () => {
  return (
    <div className = 'shit'>
    <Header />
    <div className="salary-management">
      <h2>固定工资调整</h2>
      <div className="salary-actions">
        <button>按部门调整</button>
        <button>员工调整记录</button>
      </div>
      <div className="salary-table">
        <div className="salary-summary">
          <span>在职：3人</span>
          <span>全职：2人</span>
          <span>兼职：0人</span>
          <span>实习：1人</span>
          <span>离职：0人</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>员工姓名</th>
              <th>员工编码</th>
              <th>所在部门</th>
              <th>职位</th>
              <th>工作性质</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ho Chun Yat</td>
              <td>T001</td>
              <td>Alpha AI Technology</td>
              <td>CEO</td>
              <td>全职</td>
              <td><a href="#">调整</a></td>
            </tr>
            <tr>
              <td>Wilson Samuel Suen</td>
              <td>T002</td>
              <td>Machine Learning and Software Development Department</td>
              <td>CTO</td>
              <td>全职</td>
              <td><a href="#">调整</a></td>
            </tr>
            <tr>
              <td>Law Sau Ching</td>
              <td>T003</td>
              <td>Machine Learning and Software Development Department</td>
              <td>Software Engineer Intern</td>
              <td>全职</td>
              <td><a href="#">调整</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default SalaryManagement;
