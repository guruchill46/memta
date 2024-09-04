//////////src/components/NavBar/navBar.js
import React, {useState, useEffect} from 'react';
import {AppBar, Typography, Avatar, Toolbar, Button} from '@material-ui/core';
import useStyles from './styles.js';
import memta from '../../images/memories.png';
import {Link, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const Navbar = () => {
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const styless= useStyles();
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const location = useLocation();

    const logout=()=>{
        window.location.reload();
        localStorage.clear()
        dispatch({type:'LOGOUT'})
        navigate('/')
        setUser(null)
    }
    
    useEffect(()=>{
        const token =user?.token;
        if(token){
            const decodedToken = jwtDecode(token)
            if(decodedToken.exp*1000<new Date().getTime())
           {logout();}
           //console.log(decodedToken.exp*1000) 
           //console.log(new Date().getTime())    
        }

       setUser(JSON.parse(localStorage.getItem('profile')))
      
        //console.log('useEfeect ')
    },[location])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppBar className={styless.appBar} position='static' color='inherit'>
                <div className={styless.brandContainer}>
                    <Typography className={styless.heading} variant='h2' align='center' component={Link} to="/" >MEMTA</Typography>
                <img className={styless.image} src={memta} alt='memta' height='60'></img>
                </div>
                <Toolbar className={styless.toolbar}>
                    {user?(
                        <div className={styless.profile}>
                            <Avatar className={styless.avatar} alt={user?.result?.name} src={user?.result?.picture}>
                                {user?.result?.name?.charAt(0)}
                            </Avatar>
                            <Typography className={styless.userName} variant='h6' >{user?.result?.name}</Typography>
                            <Button variant='contained' className={styless.logout} color="secondary" onClick={logout}>Logout</Button>
                        </div>
                    ):(
                        <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                    )}
                </Toolbar>
    </AppBar>
  )
}

export default Navbar;