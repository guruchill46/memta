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


const Row=({row, socket})=> {

  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState(row.ActionTaken);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))
  const [staff, setStaff] = React.useState(row.AssignedTo)
  const [note, setNote] = React.useState(row.noteInfo)
  const [noteC, setNoteC] = React.useState(row.noteInfo)
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(false)

  const handleChange =(event) => {
    setAge(event.target.value)
    const Data = {statusData: event.target.value}
    dispatch(statusCI(Data, row._id)).then(()=>{socket.emit('update')})
    
    
  };
  
  const handleChangeTeam = (event) => {
    setStaff(event.target.value)
    console.log(event.target.value)
    // console.log(row._id)
    const Data = {staffId: event.target.value}
    dispatch(staffS(Data, row._id)).then(()=>{socket.emit('update')});
  };

  const handleChangeNote=(event)=>{
    setNote(event.target.value)
    setIsBtnDisabled(false)
  }

  const handleClick=()=>{
    const Data = {note: note}
    dispatch(staffNote(Data, row._id)).then(()=>{
      setNoteC(note);
      socket.emit('update');
    })
    setIsBtnDisabled(true)
  }
  const handleCancel=(e)=>{
     e.preventDefault();
     setNote(noteC)
  }

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
        <TableCell component="th" scope="row">{row.answers['7ce86f01'].textAnswers.answers[0].value}</TableCell>
        <TableCell align="right">{row.answers['4d18c904'].textAnswers.answers[0].value}</TableCell>
        <TableCell align="right">{row.answers['6d793be9'].textAnswers.answers[0].value}</TableCell>
        <TableCell align='right'><Box sx={{ minWidth: 120 }}><FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value='In Progress'>In Progress</MenuItem>
          <MenuItem value='Completed'>Completed</MenuItem>
        </Select>
      </FormControl></Box></TableCell>
      {user?.result?.role==='Team Lead'&&
      <TableCell align='right'><Box sx={{ minWidth: 120 }}><FormControl sx={{ m: 1, minWidth: 120 }}><Select
          value={staff}
          onChange={handleChangeTeam}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value='673dea5731ea49da3f57041d'>Staff 1</MenuItem>
          <MenuItem value='673dea8931ea49da3f570421'>Staff 2</MenuItem>
        </Select>
      </FormControl></Box></TableCell>}</TableRow>
      <TableRow><TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit><Grid container spacing={2}>
  <Grid size={16} width={'50%'}>
  <Stack spacing={2}
  useFlexGap>
        <Item><Table><TableBody><TableRow>
        <TableCell style={{ verticalAlign: 'top' }} width={'10%'}>Address :</TableCell>
        <TableCell style={{ verticalAlign: 'top' }} align='left' width={'50%'} height={'100px'}>{row.answers['08ef0860'].textAnswers.answers[0].value}</TableCell>
        </TableRow></TableBody></Table></Item>
        <Item>
        <Table><TableBody><TableRow>
        <TableCell style={{ verticalAlign: 'top' }} width={'10%'}>Comment :</TableCell>
        <TableCell style={{ verticalAlign: 'top' }} width={'50%'} height={'100px'}><Box>{row.answers['2d0e1a78'].textAnswers.answers[0].value}</Box></TableCell>
        </TableRow></TableBody></Table></Item>
      </Stack>
  </Grid>
  <Grid width={'50%'}>
  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
      noValidate
      autoComplete="off"
    ><TextField
    id="outlined-multiline-static"
    label="Note"
    multiline
    rows={4}
    value={note}
    onChange={handleChangeNote}
  />
  <Stack spacing={2} direction="row" sx={{
    justifyContent: "flex-end",
    alignItems: "flex-end",
  }}>
  <Button variant="contained" onClick={handleClick}>Submit</Button>
  <Button variant="outlined" onClick={handleCancel} disabled={isBtnDisabled}>Cancel</Button>
  </Stack>
 </Box>
  </Grid>
  </Grid></Collapse></TableCell></TableRow>
    </>
);
}

export default Row;
