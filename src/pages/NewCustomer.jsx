import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewCustomer.css';

const NewCustomer = ({ addCustomer }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      firstName,
      lastName,
      email,
      phone,
      address,
      emailSubscribed,
    };
    addCustomer(newCustomer);
    navigate('/customer-management');
  };

  return (
    <div className="new-customer">
      <h1>添加客户</h1>
      <form onSubmit={handleSubmit}>
        <label>
          名字
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          姓
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          电子邮件
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          电话
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          地址
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          订阅
          <input type="checkbox" checked={emailSubscribed} onChange={(e) => setEmailSubscribed(e.target.checked)} />
        </label>
        <button type="submit">保存</button>
      </form>
    </div>
  );
};

export default NewCustomer;


