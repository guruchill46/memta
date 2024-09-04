////////components/Form/form.js
import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles.js';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../../actions/postaction.js';
import {useNavigate} from 'react-router-dom';

const Form =({currentId, setCurrentId})=>{

    const styless= useStyles();
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const [postData, setPostData] = useState({title:'', message:'', tags:'', selectedFile:''})
    const epost=useSelector((state)=>
        currentId?state.postReducer.posts.find((x)=>x._id===currentId):null
    )    

    const user= JSON.parse(localStorage.getItem('profile'));

    useEffect(()=>{
        if(epost){
            setPostData(epost)
        }
    },[epost]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name }))
        }
        else{
        dispatch(createPost({...postData, name: user?.result?.name },navigate));}
        //console.log(postData)
        clear();
    }
    
    const clear=()=>{
        setCurrentId(null)
        setPostData({title:'', message:'', tags: '', selectedFile:''})
    }

    if(!user?.result?.name){
        return(
            <Paper className={styless.paper}>
                <Typography variant='h6' align='center'>
                    Please Sign In to create your own memories and like other's memories
                </Typography>
            </Paper>
        )
    }

    return(
        <Paper className={styless.paper}>
            <form autoComplete='off' noValidate className={`${styless.root} ${styless.form}`}
            onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId?'Editing a memory':'Create a memory'}</Typography>
                <TextField name='title' variant='outlined' label='Title' fullWidth 
                value={postData.title} onChange={(e)=>{setPostData({...postData, title:e.target.value})}} />
                <TextField name='message' variant='outlined' label='Message' fullWidth
                value={postData.message} onChange={(e)=>{setPostData({...postData, message:e.target.value})}} />
                <TextField name='tags' variant='outlined' label='Tags' fullWidth
                value={postData.tags} onChange={(e)=>{setPostData({...postData, tags:e.target.value.split(',')})}} />
                <div className={styless.fileInput}>
                <FileBase type='file' multiple={false}
                onDone={({base64})=>setPostData({...postData, selectedFile:base64})} />
                </div>
                <Button className={styless.buttonSubmit} variant="contained" color="primary" size="large" type='submit'
                >Submit</Button>
            </form>

        </Paper> )
}

export default Form;