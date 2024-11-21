import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CRM from './components/crmComp/CRM.jsx';
import CRMSignin from './components/crmComp/crmsignin.jsx';
import CRMSignup from './components/crmComp/crmsignup.jsx';
import CrmNavBar from './components/crmComp/crmNavBar.js';

const Crmmain = () => {
  return (<>
    <CrmNavBar/>
    <Routes>
        <Route path='/' exact element = {<CRM/>}/>
        <Route path='/signin' exact element = {<CRMSignin/>}/>
        <Route path='/signup' exact element = {<CRMSignup/>}/>
    </Routes>
    </>
  )
}

export default Crmmain;