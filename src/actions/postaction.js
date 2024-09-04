//src//actions/postaction.js
import * as api from '../api';

export const getPosts=(page)=> async(dispatch)=>{
    try{
        dispatch({type: 'START_LOADING'})
        const {data} = await api.fetchPosts(page);
        dispatch({type: 'FETCH_ALL', payload:data})
        dispatch({type: 'END_LOADING'});
        ////console.log(data)

    }
    catch(error){
        console.log(error)
    }
    
}

export const getPostsBySearch=(searchQuery)=>async (dispatch)=>{
    try{
        const {data} = await api.fetchPostsBySearch(searchQuery);
        dispatch({type: 'FETCH_BY_SEARCH', payload: data})

    }
    catch(error){
        console.log(error)
    }
}

export const getPostd=(id)=>async(dispatch)=>{
    try{
        dispatch({type: 'START_LOADING'});
        const {data} = await api.fetchPostd(id)
        dispatch({type: 'FETCH_POSTD', payload: data})
        dispatch({type: 'END_LOADING'});
        //console.log(data)
    }
    catch(error){
        console.log(error)
    }
} 

export const createPost=(postData, navigate)=> async(dispatch)=>{
    try{
    dispatch({type: 'START_LOADING'});    
    const {data} = await api.createPost(postData);
    dispatch({type: 'CREATE', payload: data})
    dispatch({type: 'END_LOADING'});
    navigate(`/posts/${data._id}`);
   // //console.log(data._id)
    }
    catch(error){
        console.log(error)
    }
}

export const updatePost=(currentId, postData)=>async (dispatch)=>{
    try{
        //console.log(currentId)
        const {data} = await api.updatePost(currentId,postData)
        dispatch({type: 'UPDATE', payload: data})
        ////console.log(await api.updatePost(currentId, postData))
    }
    catch(error){
        console.log(error)
    }
}

export const deletePost=(id)=>async (dispatch)=>{
    try{
        await api.deletePost(id)
        dispatch({type: 'DELETE', payload: id})
    }
    catch(error){
        console.log(error)
    }
}

export const likePost=(id)=>async (dispatch)=>{
    try{
        const {data}= await api.likePost(id)
        dispatch ({type:'LIKE', payload: data})
    }
    catch(error){
        console.log(error)
    }
}

export const commentPost=(finalComment, id)=>async (dispatch)=>{
    try{
        const {data} = await api.commentPost(finalComment, id)
        dispatch({type: 'COMMENT', payload: data})
        return data.comments;
    }
    catch(error){
        console.log(error);
    }
}