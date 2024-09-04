///////components/AllPosts/siPost/siPost.js
import React, {useState} from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from  '@material-ui/icons/ThumbUpAlt.js';
import ThumbUpAltOutlined from  '@material-ui/icons/ThumbUpAltOutlined.js';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles.js';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../../actions/postaction.js';
import {ButtonBase} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';

const SiPost = ({spost, setCurrentId}) => {

    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch= useDispatch();
    const styless = useStyles();
    const navigate = useNavigate();
    const [likes, setLikes] = useState(spost?.likes)
    const userId = user?.result?.sub||user?.result?._id;
    const hasLikedPost=spost.likes.find((likeid)=>likeid===userId)

    const handleClick= async ()=>{
        dispatch(likePost(spost._id));
        if(hasLikedPost){
            setLikes(spost.likes.filter((id)=>id!==userId))
        }
        else{
            setLikes([...spost.likes, userId])
        }
    };

    const Likes=()=>{
        if(likes.length>0){
            return likes.find((id)=>id===user?.result?._id||id===user?.result?.sub)? 
            ((<><ThumbUpAltIcon fontSize='small'/>&nbsp;{likes.length>1?`You and ${likes.length-1} 
            ${(likes.length===2?'other':'others')}`: 'You Liked'}</>)):
        (<><ThumbUpAltOutlined fontSize='small'/>&nbsp;{likes.length} {likes.length===1?'like':'likes'}</>) 
        }
        return <><ThumbUpAltOutlined fontSize='small'/>&nbsp;{likes.length} like </>

    }

    const openPost=()=>{
        navigate(`/posts/${spost._id}`)
    }

  return (
    <Card className={styless.card}>
        <ButtonBase className={styless.cardAction} onClick={openPost}>
        <CardMedia className={styless.media} image={spost.selectedFile} title='title' />
        <div className={styless.overlay}>
            <Typography variant='h6'>{spost.name}</Typography>
            <Typography variant='body2'>{moment(spost.createdAt).fromNow()}</Typography>
        </div>
        <div className={styless.details}>
            <Typography variant='body2' color='textSecondary'>{spost.tags.map((tag)=>`#${tag}`)}</Typography>
        </div>
        <Typography className={styless.title} variant='h5' gutterBottom>{spost.title}</Typography>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component='p'>{spost.message.split(' ').splice(0, 20).join(' ')}...</Typography>
        </CardContent>
        </ButtonBase>
        {(user?.result?.sub===spost.creator|| user?.result?._id===spost.creator) &&
        <div className={styless.overlay2}>
            <Button styless={{color:'White'}} size="small" onClick={()=>setCurrentId(spost._id)}><MoreHorizIcon fontSize='default'/></Button>
        </div>}
        <CardActions className={styless.cardActions}>
            <Button size="small" color="primary" disabled={!user?.result} onClick={handleClick}>
                <Likes/></Button>
            {(user?.result?.sub===spost.creator|| user?.result?._id=== spost.creator)&&<Button size="small" color="primary" 
            onClick={()=>{dispatch(deletePost(spost._id))}}>
                <DeleteIcon fontSize='small' onClick={()=>{dispatch(deletePost(spost._id))}} />Delete</Button>}
        </CardActions>
    </Card>
  )
}

export default SiPost