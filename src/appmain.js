////////////src/app.js
import {Container} from '@material-ui/core';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/NavBar/navBar.js';
import Home from './components/Home/home.js';
import Auth from './components/Auth/auth.js';
import PostDetails from './components/PostDetails/postDetails.js';

const Appmain= ()=>{
    


    return(
            <>
            <Container maxWidth='xl'>
                <Navbar/>
            <Routes>
                <Route path="/" exact element={<Navigate to ='/posts' replace/>}/>
                <Route path='/posts' exact element={<Home/>}/>
                <Route path='/posts/search' exact element ={<Home/>} />
                <Route path="/auth" exact element={<Auth/>}/>
                <Route path='/posts/:id' exact element={<PostDetails/>}  />
            </Routes>
            </Container>
            </>
    )
}

export default Appmain;