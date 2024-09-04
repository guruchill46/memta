////src\components\PostDetails\commentSection.js

import React, {useState, useRef} from 'react';
import useStyles from './styles.js';
import {TextField, Typography, Button} from "@material-ui/core";
import { useDispatch} from 'react-redux';
import {commentPost} from '../../actions/postaction.js';


const CommentSection=({postc})=>{

    const [comments, setComments] = useState(postc?.comments)
    const [sicomment, setSicomment] = useState('');
    const styless = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const ref = useRef();

    const handleClick=async ()=>{

        const finalComment = `${user.result.name}:${sicomment}`;
        //console.log(finalComment)
        const viewComment = await dispatch(commentPost(finalComment, postc._id))
        setComments(viewComment);
        setSicomment('')
        ref.current.scrollIntoView({behavior:'smooth'});

    }

    return(
        <div className={styless.commentsOuterContainer}>
            <div className={styless.commentsInnerContainer}>
                <Typography gutterBottam variant='h6'>
                    Comments
                </Typography>
                {comments.map((c,i)=>(
                    <Typography key={i} gutterBottam variant='subtitle1'>
                        
                        <strong>{c.split(':')[0]} : </strong>
                         {c.split(':')[1]}
                    </Typography>
                )
                )}
                <div ref={ref}/>
            </div>
            {user?.result?.name&&(
                <div className={styless.commentsInnerContainer2}>
                <Typography gutterBottam variant='h6'>
                    Write a comment
                </Typography>
                <TextField fullWidth minRows={4} variant='outlined' label='comment' multiline 
                value={sicomment} onChange={(e)=>setSicomment(e.target.value)}/>
                <Button style={{marginTop:'10px'}} fullWidth disabled={!sicomment} variant='contained'
                color='primary' onClick={handleClick}>
                    Comment
                </Button>
            </div>
            )}
            </div>
            
    )
}

export default CommentSection;