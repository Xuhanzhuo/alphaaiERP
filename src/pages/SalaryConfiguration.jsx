import React, { useState } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import './SalaryConfiguration.css';

// Example employee data structure
const employees = [
    {
        id: 1,
        code: 'T001',
        department: 'Alpha AI Technology',
        position: 'CEO',
        type: '全职',
        salaryDetails: [
            {
                id: 1,
                entryDate: '11/12/2021',
                salaryMethod: '每月支付',
                salary: '$25,000',
                month: '按月日起',
                rule: '强制',
                releaseDate: '10/5/2024',
                bonusMethod: '一次性支付',
                bonus: '$2,000',
            },
        ],
    },
    {
        id: 2,
        code: 'T002',
        department: 'Machine Learning and Software Development Department',
        position: 'CTO',
        type: '全职',
        salaryDetails: [
            {
                id: 2,
                entryDate: '10/10/2020',
                salaryMethod: '每月支付',
                salary: '$30,000',
                month: '按月日起',
                rule: '强制',
                releaseDate: '11/5/2024',
                bonusMethod: '一次性支付',
                bonus: '$3,000',
            },
        ],
    },
    // Add more employees as needed
];


const SalaryConfiguration = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [editMode, setEditMode] = useState({}); // State to handle edit mode for each entry
    const [formData, setFormData] = useState({}); // State to handle form data

    const totalPages = employees.length;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleEditClick = (employeeId, entryId) => {
        setEditMode({ employeeId, entryId });
        const employee = employees.find(e => e.id === employeeId);
        const entry = employee.salaryDetails.find(s => s.id === entryId);
        setFormData(entry);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveClick = (employeeId, entryId) => {
        const employeeIndex = employees.findIndex(e => e.id === employeeId);
        const entryIndex = employees[employeeIndex].salaryDetails.findIndex(s => s.id === entryId);
        employees[employeeIndex].salaryDetails[entryIndex] = formData;
        setEditMode({});
    };

    const currentEmployee = employees[currentPage - 1];

    return (
        <div className="salary-configuration">
            <Header />
            <div className="content">
                <h2>薪酬配置</h2>
                <input type="text" placeholder="请输入搜索内容" />
                <table>
                    <thead>
                        <tr>
                            <th>员工编码</th>
                            <th>所在部门</th>
                            <th>职位</th>
                            <th>工作性质</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{currentEmployee.code}</td>
                            <td>{currentEmployee.department}</td>
                            <td>{currentEmployee.position}</td>
                            <td>{currentEmployee.type}</td>
                        </tr>
                    </tbody>
                </table>
                <h3>入职日期</h3>
                {currentEmployee.salaryDetails.map(detail => (
                    <table key={detail.id}>
                        <thead>
                            <tr>
                                <th>入职日期</th>
                                <th>计算方式</th>
                                <th>薪金</th>
                                <th>月</th>
                                <th>计算规则</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {editMode.employeeId === currentEmployee.id && editMode.entryId === detail.id ? (
                                <tr>
                                    <td><input name="entryDate" value={formData.entryDate} onChange={handleInputChange} /></td>
                                    <td><input name="salaryMethod" value={formData.salaryMethod} onChange={handleInputChange} /></td>
                                    <td><input name="salary" value={formData.salary} onChange={handleInputChange} /></td>
                                    <td><input name="month" value={formData.month} onChange={handleInputChange} /></td>
                                    <td><input name="rule" value={formData.rule} onChange={handleInputChange} /></td>
                                    <td>
                                        <button onClick={() => handleSaveClick(currentEmployee.id, detail.id)}>保存</button>
                                    </td>
                                </tr>
                            ) : (
                                <tr>
                                    <td>{detail.entryDate}</td>
                                    <td>{detail.salaryMethod}</td>
                                    <td>{detail.salary}</td>
                                    <td>{detail.month}</td>
                                    <td>{detail.rule}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(currentEmployee.id, detail.id)}>编辑</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                ))}
                <h3>发放日期</h3>
                {currentEmployee.salaryDetails.map(detail => (
                    <table key={detail.id}>
                        <thead>
                            <tr>
                                <th>发放日期</th>
                                <th>计算方式</th>
                                <th>花红/津贴</th>
                                <th>月</th>
                                <th>计算规则</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {editMode.employeeId === currentEmployee.id && editMode.entryId === detail.id ? (
                                <tr>
                                    <td><input name="releaseDate" value={formData.releaseDate} onChange={handleInputChange} /></td>
                                    <td><input name="bonusMethod" value={formData.bonusMethod} onChange={handleInputChange} /></td>
                                    <td><input name="bonus" value={formData.bonus} onChange={handleInputChange} /></td>
                                    <td><input name="month" value={formData.month} onChange={handleInputChange} /></td>
                                    <td><input name="rule" value={formData.rule} onChange={handleInputChange} /></td>
                                    <td>
                                        <button onClick={() => handleSaveClick(currentEmployee.id, detail.id)}>保存</button>
                                    </td>
                                </tr>
                            ) : (
                                <tr>
                                    <td>{detail.releaseDate}</td>
                                    <td>{detail.bonusMethod}</td>
                                    <td>{detail.bonus}</td>
                                    <td>{detail.month}</td>
                                    <td>{detail.rule}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(currentEmployee.id, detail.id)}>编辑</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                ))}
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                />
            </div>
        </div>
    );
};

export default SalaryConfiguration;





