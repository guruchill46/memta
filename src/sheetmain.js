import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Sheet from './components/sheetComp/sheet.jsx';
// import SheetNavBar from './components/sheetComp/sheetNavBar.jsx';
import SheetSignin from './components/sheetComp/sheetSignin.jsx';
import Layout from './components/layouts/main-layout/index.js';

const Crmmain = () => {
  return (<>
    <Routes>
        <Route path='/lay' exact element={<Layout/>}/>
        <Route path='/' exact element ={<Sheet/>}/>
        <Route path='/signin' exact element ={<SheetSignin/>}/>
    </Routes>
    </>
  )
}

export default Crmmain;