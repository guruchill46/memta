///////src/components/Auth/auth.js

import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined.js';
import useStyles from './styles.js';
import Input from './input.js';
import {GoogleLogin} from '@react-oauth/google';
import Icon from './Icon.js';
import {jwtDecode} from 'jwt-decode';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {signin, signup} from '../../actions/useraction.js';

const Auth = () => {

    const styless=useStyles();
    const dispatch=useDispatch();
    const navigate= useNavigate();
    const [isSignup, setIsSignup]=useState(false);
    const [showPassword, setShowPassword] =useState(false)
    
    const initialState={
        email:'',
        firstName:'',
        lastName:'',
        password:'',
        confirmPassword:''
    }

    const [formData, setFormData] = useState(initialState)

    

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isSignup){
            dispatch(signup(formData, navigate))
        }
        else{
            dispatch(signin(formData, navigate))
        }
    }

    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }

    const switchMode=()=>{
        setIsSignup(!isSignup)
    }

    const googleSuccess=async (res)=>{
        const result = jwtDecode(res?.credential)
        const token = res?.credential
        try{
            //console.log(res)
            dispatch({type:'AUTH', payload:{result, token}})
            navigate('/')
        }
        catch(error){
            console.log(error)
        }
    }

    const googleFailure=()=>{
        //console.log('google sign in was unsuccessful')
    }

  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={styless.paper} elevation={3}>
            <Avatar className={styless.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography variant='h5'>{isSignup? 'Sign Up':'Sign In'}</Typography>
            <form className={styless.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {isSignup &&(
                    <>
                    <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                    <Input name='lastName' label='Last Name' handleChange={handleChange} half/>
                    </>
                )}
                <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
                <Input name='password' label='Password' handleChange={handleChange} type={showPassword?'text':'password'} 
                handleShowPassword={handleShowPassword}/>
                {isSignup &&
                <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' /> }
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={styless.submit}>
                    {isSignup? 'Sign Up': 'Sign In'}
                </Button>
                <Grid container justifyContent='flex-end'>
                <Grid item>
                    {!isSignup&&
                    <GoogleLogin 
                    clientId="365299638292-m8gdo1s514fa3aae90nt6c8uu15joqp9.apps.googleusercontent.com"
                    render={(renderProps)=>{
                        <Button className={styless.googleButton} color='primary' fullWidth onClick={renderProps.onClick} 
                        disabled={renderProps.disabled} startIcon={<Icon/>} variant='contained' >
                            Google Sign In
                        </Button>
                    }}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                    />}
                    <Button onClick={switchMode} >
                        <p style={{fontSize: 13}}>
                        {isSignup?'Already have an account? Click to Sign In':"Don't have an account? Click to Sign Up"}
                        </p>
                    </Button>
                </Grid>
            </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth;