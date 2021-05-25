import React from 'react';

//************************************************************************************************
//interfaces

interface DataType {
  key: React.Key;
  courses: string;

  courseCompletionDate:Object;
  cycle: string;
  isNoWorking: number;
  isWorking: number;
}



export const coursesColumns:any []  = [
 
    {
      title: 'סגירת השמות',
      dataIndex: 'isWorking',
    },
    {
      title: 'מס מחפשי עבודה',
      dataIndex: 'isNoWorking',
    },
    {
      title: 'מס מועסקים',
      dataIndex: 'cycle',
    },{
      title: 'מועד סיום',
      dataIndex: 'courseCompletionDate',
    },{
      title: 'שם הקורס',
      dataIndex: 'courses',
    },
  ];

 
  
 
  export const coursesData: DataType[] = [
    {
      key: '1',
      courses: 'קורס פיתוח תוכנה',
      courseCompletionDate: JSON.stringify(Date()),
      cycle: 'ט"ה',
      isNoWorking: 5,
      isWorking: 55555555
    },
    {
      key: '2',
      courses: 'בדיקות תוכנה QA',
      courseCompletionDate: Date(),
      cycle: 'ק"ר',
      isNoWorking: 5,
      isWorking: 55555555
    },
    {
      key: '3',
      courses: 'סייבר',
      courseCompletionDate: Date(),
      cycle: 'ש"ח',
      isNoWorking: 5,
      isWorking: 55555555
    },
    
  ];




 interface GraduatesDataType {
  key: React.Key,
  company: string,
  uploadedBy:string,
  passion:[string],
  uploadDate:Object,

}



  

export const graduatesColumns:any [] =[
  {
    title: 'הגישו קו"ח',
    dataIndex: 'name',
    // render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'שאל את המגייסת?',
    dataIndex: 'name',
    // render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'סטטוס',
    dataIndex: 'age',
  },
  {
    title: 'ת. פתיחת משרה',
    dataIndex: 'uploadDate',
  },
  {
    title: 'תפקיד',
    dataIndex: 'passion',
  },{
    title: 'מגייסת',
    dataIndex: 'uploadedBy',
  },{
    title: 'חברה',
    dataIndex: 'company',
  },
];

 // company
    // uploadedBy
    // possion


export const graduatesData:GraduatesDataType [] = [

  {
    key: '1',
    company: 'Microsoft',
    uploadedBy: 'קרן',
    passion:[ 'Backend-End Development'],
    uploadDate:Date(),
  },
  {
    key: '1',
    company: 'e-Bay',
    uploadedBy: 'נופר',
    passion: ['Backend-End Development'],
    uploadDate:Date()
  },
  {
    key: '2',
    company: 'Wix',
    uploadedBy: 'אדוה',
    passion:  ['Front-End Development'],
    uploadDate:Date()
  },
  {
    key: '3',
    company: 'AT & T',
    uploadedBy: 'יוסי',
    passion:  ['Front-End Development'],
    uploadDate:Date()
  },
  {
    key: '4',
    company: 'Amazon',
    uploadedBy: 'ניר',
    passion:  ['Backend-End Development'],
    uploadDate:Date()
  },
];


