//////src/api/index.js
import axios from 'axios';

//const url ='http://localhost:5000/posts';

const API = axios.create({baseURL:"https://memtabackend.onrender.com"})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    
    }
    return req;
})

export const fetchPosts=(page)=> API.get(`/posts?page=${page}`);
export const fetchPostsBySearch=(searchQuery)=>API.get(`/posts/search?searchQuery=${searchQuery.search||'none'}&tags=${searchQuery.tags}`)
export const fetchPostd=(id)=>API.get(`/posts/${id}`);
export const createPost=(postData)=>API.post('/posts', postData);
export const updatePost=(id, postData)=>API.patch(`/posts/${id}`,postData)
export const deletePost=(id)=>API.delete(`/posts/${id}`)
export const likePost=(id)=>API.patch(`/posts/${id}/likePost`)
export const commentPost=(finalComment, id)=>API.post(`/posts/${id}/commentPost`, {finalComment});

export const signin=(formData)=>API.post('/user/signin', formData);
export const signup=(formData)=>API.post('/user/signup', formData);