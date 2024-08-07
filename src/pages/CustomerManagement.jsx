import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerManagement.css';

const CustomerManagement = ({ customers = [] }) => {
  const navigate = useNavigate();

  const handleAddCustomerClick = () => {
    navigate('/new-customer');
  };

  const handleCustomerClick = (customer, index) => {
    navigate(`/customer-detail/${index}`, { state: { customer } });
  };

  return (
    <div className="customer-management">
      <h1>客户</h1>
      <button onClick={handleAddCustomerClick}>添加客户</button>
      <table>
        <thead>
          <tr>
            <th>客户姓名</th>
            <th>电子邮件订阅</th>
            <th>地址</th>
            <th>订单数</th>
            <th>消费金额</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} onClick={() => handleCustomerClick(customer, index)}>
              <td>{customer.firstName} {customer.lastName}</td>
              <td>{customer.emailSubscribed ? '已订阅' : '未订阅'}</td>
              <td>{customer.address}</td>
              <td>0订单</td>
              <td>HK$0.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerManagement;



