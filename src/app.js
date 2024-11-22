import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Appmain from './appmain.js';
import Crmmain from './crmmain.js';
import Sheetmain from './sheetmain.js';

const App =()=>{


    return(
        <BrowserRouter>
        <Routes>
            <Route path="/sheet/*" element={<Sheetmain/>}/>
            <Route path="/crm/*" element={<Crmmain/>}/>
            <Route path="*" element={<Appmain/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;