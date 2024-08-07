import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import DepartmentManagement from './pages/DepartmentManagement';
import PositionManagement from './pages/PositionManagement';
import SalaryManagement from './pages/SalaryManagement';
import SalaryConfiguration from './pages/SalaryConfiguration';
import PolicyRecords from './components/PolicyRecords';
import PolicyConfiguration from './pages/PolicyConfiguration';
import AttendanceManagement from './pages/AttendanceManagement';
import EmployeeAttendance from './pages/EmployeeAttendance';
import ProductSeries from './pages/ProductSeries';
import AddProduct from './pages/AddProduct';
import InventoryRecords from './pages/InventoryRecords';
import CustomerManagement from './pages/CustomerManagement';
import NewCustomer from './pages/NewCustomer';
import CustomerDetail from './pages/CustomerDetail';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [customers, setCustomers] = useState([]);

  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/department-management" element={<DepartmentManagement />} />
            <Route path="/salary-management" element={<SalaryManagement />} />
            <Route path="/position-management" element={<PositionManagement />} />
            <Route path="/salary-configuration" element={<SalaryConfiguration />} />
            <Route path="/policy-records" element={<PolicyRecords />} />
            <Route path="/policy-configuration" element={<PolicyConfiguration />} />
            <Route path="/attendance-management" element={<AttendanceManagement />} />
            <Route path="/employee-attendance" element={<EmployeeAttendance />} />
            <Route path="/product-series" element={<ProductSeries />} />
            <Route path="/add-product" element={<AddProduct setProducts={setProducts} />} />
            <Route path="/new-customer" element={<NewCustomer addCustomer={addCustomer} />} />
            <Route path="/customer-management" element={<CustomerManagement customers={customers} />} />
            <Route path="/customer-detail/:id" element={<CustomerDetail />} />
            <Route
              path="/inventory-records"
              element={<InventoryRecords products={products} setEditingProduct={setEditingProduct} />}
            />
            <Route
              path="/edit-product/:id"
              element={<AddProduct products={products} setProducts={setProducts} editingProduct={editingProduct} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;












