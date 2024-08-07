import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddProduct.css';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const AddProduct = ({ products, setProducts, editingProduct }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: '',
    description: '',
    media: '',
    category: '',
    price: '',
    originalPrice: '',
    quantity: '',
    weight: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (editingProduct && id !== undefined) {
      setProduct(editingProduct);
    }
  }, [editingProduct, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setProduct({ ...product, media: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id !== undefined) {
      const updatedProducts = [...products];
      updatedProducts[id] = product;
      setProducts(updatedProducts);
    } else {
      setProducts(prevProducts => [...prevProducts, product]);
    }
    navigate('/inventory-records');
  };

  return (
    <div className="add-product">
        <header className="department-header">
            <div className="department-title">Alpha AI Technology</div>
            <div className="header-icons">
                <FaEnvelope className="icon" />
                <FaBell className="icon" />
                <img src="/profile.jpg" alt="Profile" className="profile-pic" />
            </div>
       </header>
      <h1>添加产品</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <div>
          <label>标题</label>
          <input type="text" name="title" value={product.title} onChange={handleChange} placeholder="短袖 T 恤" />
        </div>
        <div>
          <label>描述</label>
          <textarea name="description" value={product.description} onChange={handleChange} placeholder="产品描述"></textarea>
        </div>
        <div>
          <label>媒体文件</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <label>类别</label>
          <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="类别" />
        </div>
        <div>
          <label>定价</label>
          <input type="text" name="price" value={product.price} onChange={handleChange} placeholder="价格" />
          <input type="text" name="originalPrice" value={product.originalPrice} onChange={handleChange} placeholder="原价" />
        </div>
        <div>
          <label>库存</label>
          <input type="number" name="quantity" value={product.quantity} onChange={handleChange} placeholder="数量" />
        </div>
        <div>
          <label>发货</label>
          <input type="text" name="weight" value={product.weight} onChange={handleChange} placeholder="重量" />
        </div>
        <button type="submit">保存</button>
      </form>
    </div>
  );
};

export default AddProduct;


