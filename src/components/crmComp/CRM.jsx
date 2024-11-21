import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {crmPost,clientIGet} from '../../actions/postaction.js';
import Paper from '@mui/material/Paper';
import Row from './clientCard.jsx';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import io from 'socket.io-client';

const socket = io.connect("https://memtabackend.onrender.com");


const CRM = () => {
  
 const [dataMapd, setDataMapd] = useState('');
 const dispatch = useDispatch();
 const user = JSON.parse(localStorage.getItem('profile'));

 const handleClick =async()=>{

  const data = await dispatch(crmPost())
  setDataMapd(data)
  
 }
 useEffect(()=>{ 
  socket.on('updateReceived', ()=>{
    dispatch(clientIGet()).then(
      (x)=>{
       if(user?.result?.role==='Team Lead')
         {setDataMapd(x)}
          else{
            const dataFO = x.filter((x)=>user?.result?._id.includes(x.AssignedTo))
            setDataMapd(dataFO)
          }
     } 
     );
   })
  dispatch(clientIGet()).then(
   (x)=>{
    if(user){
    if(user?.result?.role==='Team Lead')
      {setDataMapd(x)
      //  console.log(x)
      }
       else{
         const dataFO = x.filter((x)=>user?.result?._id.includes(x.AssignedTo))
         setDataMapd(dataFO)
       }
  } }
  );
  
 },[dispatch,setDataMapd,user?.result?.role,user?.result?._id,user])
if(user===null) return (<div><h3>Permission Denied</h3></div>)

  return (<div>
    {dataMapd&&        //we put condition here to avoid <tr> whitespace node error
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table"><TableHead>
          <TableRow>
            <TableCell/>
            <TableCell>Client Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Action Taken</TableCell>
            {user?.result?.role==='Team Lead'&&<TableCell align="right">Assigned To</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
        {(dataMapd.map((x)=>
            <Row key={x._id} row={x} socket={socket}/>
          ))}</TableBody>
          </Table>
    </TableContainer>}
    <button onClick={handleClick}>CRM</button>

    
    
    </div>
  )
}

export default CRM;
