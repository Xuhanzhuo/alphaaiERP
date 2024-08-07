import React, { useState } from 'react';
import './ProductSeries.css';
import { useNavigate } from 'react-router-dom';

const ProductSeries = () => {
  const [series, setSeries] = useState([
    { title: 'Home page', products: 0, conditions: '' },
  ]);

  const handleAddSeries = () => {
    setSeries([...series, { title: '', products: 0, conditions: '' }]);
  };

  const handleChange = (index, field, value) => {
    const newSeries = [...series];
    newSeries[index][field] = value;
    setSeries(newSeries);
  };

  const navigate = useNavigate();

  const handleImportClick = () => {
    navigate('/add-product');
  };

  return (
    <div className="product-series">
      <h1>添加产品</h1>
      <div className="product-series-content">
        <button onClick={handleAddSeries}>+ 添加产品</button>
        <button onClick={handleImportClick}>导入</button>
        {series.map((item, index) => (
          <div key={index} className="series-item">
            <input
              type="text"
              value={item.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              placeholder="产品系列标题"
            />
            <input
              type="number"
              value={item.products}
              onChange={(e) => handleChange(index, 'products', e.target.value)}
              placeholder="产品数量"
            />
            <input
              type="text"
              value={item.conditions}
              onChange={(e) => handleChange(index, 'conditions', e.target.value)}
              placeholder="产品条件"
            />
          </div>
        ))}
        <div className="product-images">
          <img src="/image1.png" alt="Product 1" />
          <img src="/image2.png" alt="Product 2" />
          <img src="/image3.png" alt="Product 3" />
          <img src="/image4.png" alt="Product 4" />
        </div>
        <div className="product-info">
          <h2>查找要销售的产品</h2>
          <p>使您的代发货或按需打印产品直接由供应商送达客户手中。您只需支付销售货的相关费用。</p>
          <button>浏览产品采购应用</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSeries;
