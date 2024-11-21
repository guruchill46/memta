import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {Typography, AppBar, Button, Avatar} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import './navbar.css';

const Navbar =()=>{

    const [user, setUser ] =useState(JSON.parse(localStorage.getItem('profile')));
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const logout=()=>{
        localStorage.clear();
        dispatch({type: 'LOGOUT'})
        setUser(null)
        navigate('/crm/signin')
        window.location.reload()

    }

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    return(
        
    <AppBar position="static" color="inherit">
        <div className='appb-m'>       
       <div className='title-m'> <Typography>CRM</Typography></div>
       <div className='toolbar-m'> {user?<>
        <div className='pic-m'><Avatar src={user?.result?.picture} alt={user?.result?.name.charAt(0)}></Avatar>
        </div>
        <div className='user-m'><Typography>{user?.result?.name} </Typography></div>

        <div className='log-m'><Button onClick={logout}>Log Out</Button></div>
        </>:<Button component={Link} to = {`/crm/signin`}>Sign In</Button>}
        </div>
        </div>
       </AppBar>
        )
}

export default Navbar;