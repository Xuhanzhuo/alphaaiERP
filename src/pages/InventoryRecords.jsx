import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryRecords.css';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const InventoryRecords = ({ products, setEditingProduct }) => {
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    setEditingProduct(products[index]);
    navigate(`/edit-product/${index}`);
  };

  return (
    <div className="inventory-records">
        <header className="department-header">
            <div className="department-title">Alpha AI Technology</div>
            <div className="header-icons">
                <FaEnvelope className="icon" />
                <FaBell className="icon" />
                <img src="/profile.jpg" alt="Profile" className="profile-pic" />
            </div>
       </header>
      <h1>库存记录</h1>
      <div className="product-cards">
        {products.map((product, index) => (
          <div key={index} className="product-card" onClick={() => handleCardClick(index)}>
            <img src={product.media} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>价格: ${product.price}</p>
            <p>原价: ${product.originalPrice}</p>
            <p>重量: {product.weight}kg</p>
            <p>数量: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryRecords;


