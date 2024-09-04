///////components/PostDeatils/postDeatils.js
import React, {useEffect} from 'react';
import {Paper, Typography, Divider, Card, CircularProgress} from '@material-ui/core'; 
import useStyles from './styles.js';
import {getPostd, getPostsBySearch} from '../../actions/postaction.js';
import {useParams, useNavigate}  from 'react-router-dom';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import CommentSection from './commentSection.js';

const PostDetails=()=>{

    const styless = useStyles();
    const {postd, posts, isLoading}= useSelector((state)=>state.postReducer);
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getPostd(id))
    },[dispatch, id]);

    useEffect(()=>{
        if(postd){
            dispatch(getPostsBySearch({search:'none', tags:postd?.tags.join(',')}))
        }

    },[dispatch, postd])

    //console.log(postd)


   if (!postd) return null;// important to execute properly

   if (isLoading){
    return(<Paper elevation={6} className={styless.loadingPaper}>
       <CircularProgress size='7em'/>
   </Paper>)
}

   
    const recommendedPosts = posts.filter(({_id})=>_id!==postd._id)
    //console.log(posts)
    
    const openPost=(_id)=>navigate(`/posts/${_id}`)
    
    return(
        <Paper className={styless.paper} style= {{padding:'20px', borderRadius:'15px'}} elevation={6}>
            <div className={styless.card}>
                <div className={styless.section}>
                    <Typography className={styless.title} variant='h3' component='h2'>
                        {postd.title}
                    </Typography>
                    <Typography gutterBottom variant='h6' color='textSecondary' component="h2">
                        {postd.tags.map((tag)=>`#${tag}`)}
                    </Typography>
                    <Typography gutterBottom className={styless.message} variant='body1'component='p'>
                        {postd.message}
                    </Typography>
                    <Typography variant='h6'>
                        Created by : {postd.name}
                    </Typography>
                    <Typography variant ='body1'>
                        {moment(postd.createdAt).fromNow()}
                    </Typography>
                    <Divider style={{margin:'20px 0'}}/>
                    <Typography variant='body1'>
                        <strong>Realtime Chat- coming soon!</strong>
                    </Typography>
                    <Divider style={{margin: '20px 0'}}/>
                    <CommentSection postc={postd} />
                    <Divider style={{margin :'20px 0'}}/>
                </div>
                <div className ={styless.imageSection}>
                    <img className={styless.media} src={postd.selectedFile||'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
                    alt={postd.title}/>
                </div>
            </div>
            {recommendedPosts.length&&
            (
            <div className={styless.gridContainer}><div className={styless.section2}>
                <Typography gutterBottom variant= 'h5'> You Might Also Like:</Typography>
                <Divider style={{margin :'20px 0'}}/>
                <div className={styless.recommendedPosts}>
                    {recommendedPosts.map(({title, message, name, likes, selectedFile, _id})=>(
                        <div style={{margin:'20px', curser:'pointer'}} onClick={()=>openPost(_id)} key={_id}>
                           <Card maxWidth='300px'>
                           <Typography gutterBottom variant='h6'>{title}</Typography>
                           <Typography gutterBottom variant='subtitle2'>{name}</Typography>
                           <Typography gutterBottom variant='body2' component='p'>{message.split(' ').splice(0,10).join(' ')}...</Typography>
                           <Typography gutterBottom variant='subtitle1'>Likes:{likes.length}</Typography>
                           <img src={selectedFile} width='200px' alt={title}/>
                           </Card>
                            </div>
                    ))}
                </div>
            </div>
            </div>)}
        </Paper>

    )

}

export default PostDetails;