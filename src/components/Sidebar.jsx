import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaCalendarAlt, FaCog, FaSignOutAlt, FaHome, FaBuilding, FaFileAlt, FaArrowDown, FaBoxes, FaClipboardList, FaMoneyBillAlt, FaChartLine } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isMenuOpen, setMenuOpen] = useState({
    department: false,
    employee: false,
    attendance: false,
    leave: false,
    audit: false,
    payroll: false,
    sales: false,
    inventory: false,
    policy: false,
  });

  const toggleMenu = (menu) => {
    setMenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="profile">
          <img src="/profile.jpg" alt="Desmond" className="profile-img" />
          <div className="profile-info">
            <h4>Desmond</h4>
            <p>HR</p>
          </div>
          <FaArrowDown color="#007bff" />
        </div>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/"><FaHome color="#007bff" /> <span className="menu-text">首頁</span></Link></li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu('department')}>
            <FaBuilding color="#007bff" /> <span className="menu-text">部門管理</span> <FaArrowDown color="#007bff" />
          </div>
          {isMenuOpen.department && (
            <ul className="submenu">
              <li><Link to="/department-management">部门管理</Link></li>
              <li><Link to="/position-management">职位管理</Link></li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu('employee')}>
            <FaUserAlt color="#007bff" /> <span className="menu-text">員工管理</span> <FaArrowDown color="#007bff" />
          </div>
          {isMenuOpen.employee && (
            <ul className="submenu">
              <li><Link to="/">員工信息</Link></li>
              <li><Link to="/">員工配置</Link></li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu('attendance')}>
            <FaCalendarAlt color="#007bff" /> <span className="menu-text">考勤管理</span> <FaArrowDown color="#007bff" />
          </div>
          {isMenuOpen.attendance && (
            <ul className="submenu">
              <li><Link to="/attendance-management">月考勤報表</Link></li>
              <li><Link to="/employee-attendance">打卡記錄</Link></li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu('leave')}>
            <FaClipboardList color="#007bff" /> <span className="menu-text">假期管理</span> <FaArrowDown color="#007bff" />
          </div>
          {isMenuOpen.leave && (
            <ul className="submenu">
              <li><Link to="/">請假記錄</Link></li>
              <li><Link to="/">加班記錄</Link></li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu('audit')}>
            <FaCog color="#007bff" /> <span className="menu-text">審批管理</span> <FaArrowDown color="#007bff" />
          </div>
          {isMenuOpen.audit && (
            <ul className="submenu">
              <li><Link to="/">審批記錄</Link></li>
              <li><Link to="/">審批配置</Link></li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu('payroll')}>
            <FaMoneyBillAlt color="#007bff" /> <span className="menu-text">薪酬管理</span> <FaArrowDown color="#007bff" />
          </div>
          {isMenuOpen.payroll && (
            <ul className="submenu">
              <li><Link to="/salary-management">薪酬管理</Link></li>
              <Link to="/salary-configuration">薪酬配置</Link>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu('sales')}>
            <FaChartLine color="#007bff" /> <span className="menu-text">客户</span> <FaArrowDown color="#007bff" />
          </div>
          {isMenuOpen.sales && (
            <ul className="submenu">
              <li><Link to="/customer-management">客户管理</Link></li>
              <li><Link to="/">銷售配置</Link></li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu('inventory')}>
            <FaBoxes color="#007bff" /> <span className="menu-text">庫存管理</span> <FaArrowDown color="#007bff" />
          </div>
          {isMenuOpen.inventory && (
            <ul className="submenu">
              <li><Link to="/inventory-records">庫存記錄</Link></li>
              <li><Link to="/product-series">产品系列</Link></li>
            </ul>
          )}
        </li>
        <li>
          <div className="menu-item" onClick={() => toggleMenu('policy')}>
            <FaFileAlt color="#007bff" /> <span className="menu-text">制度管理</span> <FaArrowDown color="#007bff" />
          </div>
          {isMenuOpen.policy && (
            <ul className="submenu">
              <li><a href="/policy-records">制度记录</a></li>
              <li><Link to="/policy-configuration">制度配置</Link></li>
            </ul>
          )}
        </li>
      </ul>
      <div className="sidebar-footer">
        <Link to="/"><FaSignOutAlt color="#007bff" /> <span className="menu-text">登出</span></Link>
      </div>
    </div>
  );
};

export default Sidebar;


