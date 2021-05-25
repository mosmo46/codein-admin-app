import React from 'react';
import './App.css';

import DropDownForTable from './data/DropDownForTable';
//Admin Page
import {RecruitmentPage} from './pages/RecruitmentPage'
import EmailModal from './data/EmailModal'


function App() {
  return (
    <div className="App">
      <DropDownForTable/>
        <RecruitmentPage/>
        <EmailModal/>
    </div>
  );
}

export default App;
