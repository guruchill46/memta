import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {crmPost,clientIGet, crmSheet} from '../../actions/postaction.js';
import Paper from '@mui/material/Paper';
import RowSheet from './rowSheet.jsx';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import io from 'socket.io-client';
import './sheet.css';

// const socket = io.connect("http://localhost:5000");


const CRM = () => {
  
 const [dataMapd, setDataMapd] = useState('');
 const dispatch = useDispatch();
 const user = JSON.parse(localStorage.getItem('profile'));

 const handleClick =async()=>{

  const data = await dispatch(crmPost())
  setDataMapd(data)
  console.log(dataMapd)
  
 }
 const handleSheet = async()=>{
  const data = await dispatch(crmSheet())
  setDataMapd(data)
  console.log(data)
 }
 useEffect(()=>{ 
  dispatch(crmSheet()).then(
   (x)=>{setDataMapd(x)
       console.log(x)
      }
  );
  
 },[dispatch,setDataMapd])

  return (<div>
    {dataMapd&&        //we put condition here to avoid <tr> whitespace node error
    <TableContainer component={Paper} className='table-con'>
      <Table aria-label="collapsible table"><TableHead>
          <TableRow>
            <TableCell/>
            <TableCell>Client Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {(dataMapd.map((x,i)=>
            // <Row key={x._id} row={x} socket={socket}/>
            <RowSheet key={x.ClientName} row={x}/>
          ))}</TableBody>
          </Table>
    </TableContainer>}
    <button onClick={handleClick}>CRM</button>
    <button onClick={handleSheet}>Sheet</button>

    
    
    </div>
  )
}

export default CRM;
