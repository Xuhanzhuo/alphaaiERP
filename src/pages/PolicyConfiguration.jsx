import React from 'react';
import Header from '../components/Header';

const files = [
  { name: '工作时间数报告', description: '计算员工在指定周期中的...', url: '/reports1.pdf.pdf' },
  { name: '每日出勤工时报表', description: '计算员工每日的工作时长...', url: '/files/report2.pdf' },
  { name: '工作地点距柜', description: '计算员工工作地点距柜...', url: '/files/report3.pdf' },
  { name: '每月出勤报表', description: '纪算员工每月出勤距柜...', url: '/files/report4.pdf' },
 
  { name: '全班排班表', description: '导出全部排班和考勤员工的...', url: '/files/report5.pdf' },
];

const PolicyConfiguration = () => {
  return (
    <div className="policy-configuration">
        <Header />
      <h2>考勤规则</h2>
      <table>
        <thead>
          <tr>
            <th>报表名称</th>
            <th>描述</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.description}</td>
              <td>
                <a href={file.url} download>下载</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PolicyConfiguration;
