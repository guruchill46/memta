//////src/api/index.js
import axios from 'axios';

//const url ='http://localhost:5000/posts';

const API = axios.create({baseURL:"https://memtabackend.onrender.com"})
// const API = axios.create({baseURL:"http://localhost:5000"})

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

export const crmPost=()=>API.get('/crm')
export const crmSignUp=(formData)=>API.post('/crm/signUp', formData)
export const crmSignIn=(formData)=>API.post('/crm/signIn', formData)
export const clientIGet=()=>API.get('/crm/cget')
export const statusCI=(statusData, id)=>API.patch(`/crm/${id}`, statusData)
export const staffS=(staffId, id)=>API.patch(`/crm/Assign/${id}`,staffId)
export const staffNote=(note, id)=>API.patch(`/crm/Note/${id}`,note)