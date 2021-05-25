import React from 'react'

import  CodeinTable from '../../Shared/CodeinTable';

import {coursesColumns,coursesData,graduatesColumns,graduatesData} from '../../data/data';


function AdminPage() {

    return (
        <div>
      <CodeinTable columns={coursesColumns} data={coursesData} />
      <CodeinTable columns={graduatesColumns} data={graduatesData} />
  
        </div>
    )
}

export default AdminPage
