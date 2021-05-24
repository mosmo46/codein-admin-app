import React from 'react';
// import { Table } from "antd";
import { Table } from "ant-table-extensions";


function OneTable() {
  
    const columns:any[] = [
        {
          title: "From",
          dataIndex: "from",
        //   sorter: (a, b) => a.from.length - b.from.length,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "To",
          dataIndex: "to",
          sorter: (a:any, b:any) => a.to.length - b.to,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Subject",
          dataIndex: "subject",
          sorter: (a:any, b:any) => a.subject.length - b.subject.length,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "Date",
          dataIndex: "date",
          sorter: (a:any, b:any) => a.date.length - b.date.length,
          sortDirections: ["descend", "ascend"],
        },
      ];
    
      const data:any=[] = [
        {
          key: "1",
          from: "aaa@example.com",
          to: "zzz.zzz@example.com",
          subject: "[ HR-888 ] Notice of official announcement",
          date: "0:20",
        },
        {
          key: "2",
          from: "bbb.bbbb@example.com",
          to: "yyy.yyy@example.com",
          subject: `[web:333] "Web Contact"`,
          date: "0:20",
        }
      ];
      return (
        <div className="App">
 <Table
      dataSource={data}
      columns={columns}
      exportableProps={{ showColumnPicker: true }}
    />
        </div>
      );
}

export default OneTable

