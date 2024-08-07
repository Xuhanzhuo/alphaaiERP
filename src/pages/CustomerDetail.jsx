import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './CustomerDetail.css';

const CustomerDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(location.state.customer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleCheckboxChange = () => {
    setCustomer({ ...customer, emailSubscribed: !customer.emailSubscribed });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update customer logic here
    navigate('/customer-management');
  };

  return (
    <div className="customer-detail">
      <h1>编辑客户</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>名字</label>
          <input type="text" name="firstName" value={customer.firstName} onChange={handleChange} />
        </div>
        <div>
          <label>姓</label>
          <input type="text" name="lastName" value={customer.lastName} onChange={handleChange} />
        </div>
        <div>
          <label>电子邮件</label>
          <input type="email" name="email" value={customer.email} onChange={handleChange} />
        </div>
        <div>
          <label>电话</label>
          <input type="text" name="phone" value={customer.phone} onChange={handleChange} />
        </div>
        <div>
          <label>地址</label>
          <input type="text" name="address" value={customer.address} onChange={handleChange} />
        </div>
        <div>
          <label>订阅</label>
          <input type="checkbox" checked={customer.emailSubscribed} onChange={handleCheckboxChange} />
        </div>
        <button type="submit">保存</button>
      </form>
    </div>
  );
};

export default CustomerDetail;



