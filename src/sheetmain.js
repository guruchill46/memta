import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Sheet from './components/sheetComp/sheet.jsx';
import SheetNavBar from './components/sheetComp/sheetNavBar.jsx';
import SheetSignin from './components/sheetComp/sheetSignin.jsx';

const Crmmain = () => {
  return (<>
    <SheetNavBar/>
    <Routes>
        <Route path='/' exact element ={<Sheet/>}/>
        <Route path='/signin' exact element ={<SheetSignin/>}/>
    </Routes>
    </>
  )
}

export default Crmmain;