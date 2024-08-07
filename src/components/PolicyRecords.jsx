import React, { useState } from 'react';
import './PolicyRecords.css';
import Header from '../components/Header';

const initialRecords = [
  { id: 1, name: '年假', newEmployeeLeave: '离职未付清假期', salaryMethod: '按天算', salaryRule: '每年员工入职日期/按年费', salaryTime: '按工作' },
  { id: 2, name: '无薪假', newEmployeeLeave: '入职前可用假', salaryMethod: '按天算', salaryRule: '不保留薪假额', salaryTime: '按工作' },
  { id: 3, name: '补假', newEmployeeLeave: '入职前可用假', salaryMethod: '按小时算', salaryRule: '加班日自动补入假额', salaryTime: '按工作' },
  { id: 4, name: '病假（有薪）', newEmployeeLeave: '入职可用假', salaryMethod: '按天算', salaryRule: '每月1张3天/月', salaryTime: '按工作' },
  { id: 5, name: '法定病假', newEmployeeLeave: '入职可用假', salaryMethod: '按天算', salaryRule: '每月员工入职日期/按年费', salaryTime: '按工作' },
  { id: 6, name: '产假', newEmployeeLeave: '入职40日即为可用假', salaryMethod: '按天算', salaryRule: '不保留薪假额', salaryTime: '按工作' },
  { id: 7, name: '侍产假', newEmployeeLeave: '入职可用假', salaryMethod: '按天算', salaryRule: '不保留薪假额', salaryTime: '按工作' },
  { id: 8, name: '陪产假', newEmployeeLeave: '入职12月即为可用假', salaryMethod: '按天算', salaryRule: '按员工生日按天/年', salaryTime: '按工作' },
  { id: 9, name: '恩恤假', newEmployeeLeave: '入职可用假', salaryMethod: '按天算', salaryRule: '不保留薪假额', salaryTime: '按工作' },
  { id: 10, name: '生日假', newEmployeeLeave: '入职12月即为可用假', salaryMethod: '按天算', salaryRule: '按员工生日按天/年', salaryTime: '按工作' },
  { id: 11, name: '法定日补假', newEmployeeLeave: '入职可用假', salaryMethod: '按天算', salaryRule: '按法定日补假按天放假', salaryTime: '按工作' },
  { id: 12, name: '公职假期补假', newEmployeeLeave: '入职可用假', salaryMethod: '按天算', salaryRule: '按法定假日公职假期补假', salaryTime: '按工作' },
  // 可以继续添加更多的假期规则
];

const PolicyRecords = () => {
  const [records, setRecords] = useState(initialRecords);
  const [editId, setEditId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    newEmployeeLeave: '',
    salaryMethod: '',
    salaryRule: '',
    salaryTime: '',
  });

  const handleDelete = (id) => {
    const newRecords = records.filter((record) => record.id !== id);
    setRecords(newRecords);
  };

  const handleEditClick = (record) => {
    setEditId(record.id);
    setEditFormData({
      name: record.name,
      newEmployeeLeave: record.newEmployeeLeave,
      salaryMethod: record.salaryMethod,
      salaryRule: record.salaryRule,
      salaryTime: record.salaryTime,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditSave = (id) => {
    const updatedRecords = records.map((record) =>
      record.id === id ? { ...record, ...editFormData } : record
    );
    setRecords(updatedRecords);
    setEditId(null);
  };

  return (
    <div className="policy-records">
        <Header />
      <h2>假期规则</h2>
      <input type="text" placeholder="请输入搜索内容" />
      <table>
        <thead>
          <tr>
            <th>假期名称</th>
            <th>新员工五薪假</th>
            <th>薪酬方式</th>
            <th>薪酬配置规则</th>
            <th>薪酬时</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              {editId === record.id ? (
                <>
                  <td><input type="text" name="name" value={editFormData.name} onChange={handleEditChange} /></td>
                  <td><input type="text" name="newEmployeeLeave" value={editFormData.newEmployeeLeave} onChange={handleEditChange} /></td>
                  <td><input type="text" name="salaryMethod" value={editFormData.salaryMethod} onChange={handleEditChange} /></td>
                  <td><input type="text" name="salaryRule" value={editFormData.salaryRule} onChange={handleEditChange} /></td>
                  <td><input type="text" name="salaryTime" value={editFormData.salaryTime} onChange={handleEditChange} /></td>
                  <td>
                    <button onClick={() => handleEditSave(record.id)}>保存</button>
                    <button onClick={() => setEditId(null)}>取消</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{record.name}</td>
                  <td>{record.newEmployeeLeave}</td>
                  <td>{record.salaryMethod}</td>
                  <td>{record.salaryRule}</td>
                  <td>{record.salaryTime}</td>
                  <td>
                    <a href="#" onClick={() => handleEditClick(record)}>编辑</a>{' '}
                    <a href="#" onClick={() => handleDelete(record.id)}>删除</a>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PolicyRecords;

