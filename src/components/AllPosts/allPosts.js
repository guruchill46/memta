//////components/AllPosts/allPosts.js

import React from 'react'
import SiPost from './siPost/siPost.js';
import {Grid, CircularProgress} from '@material-ui/core';
import useStyles from './styles.js';
import {useSelector} from 'react-redux';

const AllPosts = ({setCurrentId}) => {

    const styless= useStyles();
    const {posts, isLoading} = useSelector((state)=>state.postReducer);
    //console.log(posts)

if(!posts?.length && !isLoading) return 'No posts'
  return (
    isLoading?<CircularProgress/>:(
    <Grid className={styless.container} container alignItems='stretch' spacing={3}>
        {posts.map((x)=>(
        <Grid key={x._id} item xs={12} sm={6} md={6} lg={6}>
            <SiPost spost={x} setCurrentId={setCurrentId} />
        </Grid>))}
    </Grid>)
  )
}

export default AllPosts;