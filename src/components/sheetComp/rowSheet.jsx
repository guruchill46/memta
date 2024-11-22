import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import {statusCI, staffS, staffNote} from '../../actions/postaction.js';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './sheet.css';


// const Row=({row, socket})=> {
  const Row=({row})=> {

  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState(row.ActionTaken);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))
  const [staff, setStaff] = React.useState(row.AssignedTo)
  const [note, setNote] = React.useState(row.noteInfo)
  const [noteC, setNoteC] = React.useState(row.noteInfo)
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(false)

  React.useEffect(()=>{
  setAge(row.ActionTaken)
  setStaff(row.AssignedTo)
  setNote(row.noteInfo)
  setNoteC(row.noteInfo)
  },[row.ActionTaken, row.AssignedTo, row.noteInfo])
 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}><TableCell><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</IconButton></TableCell>
        <TableCell component="th" scope="row">{row.ClientName}</TableCell>
        <TableCell align="right">{row.PhoneNumber}</TableCell>
        <TableCell align="right">{row.Email}</TableCell>
      </TableRow>
      <TableRow><TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit><Grid className='grid-2' container spacing={2}>
  <Grid size={16} width={'50%'}>
  <Stack spacing={2}
  useFlexGap>
        <Item className='item-coll'><Table ><TableBody><TableRow>
        <TableCell className='coll-table' style={{ verticalAlign: 'top' }} width={'10%'}>Address :</TableCell>
        <TableCell className='coll-table' style={{ verticalAlign: 'top' }} align='left' width={'50%'} height={'100px'}>{row.address}</TableCell>
        </TableRow></TableBody></Table></Item>
        <Item className='item-coll'>
        <Table><TableBody><TableRow>
        <TableCell className='coll-table' style={{ verticalAlign: 'top' }} width={'10%'}>Comment :</TableCell>
        <TableCell className='coll-table' style={{ verticalAlign: 'top' }} width={'50%'} height={'100px'}><Box>{row.comment}</Box></TableCell>
        </TableRow></TableBody></Table></Item>
      </Stack>
  </Grid>
  </Grid></Collapse></TableCell></TableRow>
    </>
);
}

export default Row;
