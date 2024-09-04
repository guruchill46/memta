////////////src/component/Home/home.js
import React, {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import AllPost from '../AllPosts/allPosts.js';
import Form from '../Form/form.js';
import useStyles from './Styles.js';
import {useDispatch} from 'react-redux';
import Paginate from '../pagination.jsx';
import { getPostsBySearch } from '../../actions/postaction.js';

function useQuery(){//constructor
    return new URLSearchParams(useLocation().search)
}

const Home = () => {

    const styless= useStyles();
    const dispatch=useDispatch();
    const query=useQuery();
    const navigate = useNavigate();
    const searchQuery= query.get('searchQuery')

    const page= query.get('page')||1;
    //console.log(page)

    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const handleAdd =(x)=> setTags([...tags, x])
    const handleDelete =(tagToDelete)=>setTags(tags.filter((x)=>x!==tagToDelete))

    const handleKeyPress=(e)=>{
        if(e.keyCode===13){
            searchPost();
        }
    }
    

    const searchPost=()=>{
        if(search||tags){
            dispatch(getPostsBySearch({search, tags:tags.join(',')}))
            navigate(`/posts/search?searchQuery=${search||'none'}&tags=${tags.join(',')}`)
        }
    }

  return (
    <Grow in>
                <Container maxWidth='xl'>
                    <Grid container className={styless.mainContainer} justifyContent="space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <AllPost setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <AppBar className={styless.appBarSearch} position ='static' color='inherit'>
                                <TextField
                                name='search' variant='outlined' label='Search Memories' fullWidth value={search}
                                onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleKeyPress} />
                                <ChipInput id='tagss' style={{margin:'10px 0'}} value={tags} onAdd={handleAdd} onDelete={handleDelete}
                                label='Search Tags' placeholder='Click "Enter" after every tag ' variant ='outlined'/>
                                <Button onClick={searchPost} className={styless.SearchButton} variant='contained' color='primary'>
                                    Search</Button>
                            </AppBar>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                            {(!searchQuery && !tags.length) &&<Paper elevation={6}>
                                <Paginate page={page}/>
                            </Paper>}
                        </Grid>
                    </Grid>
                    </Container>
            </Grow>
  )
}

export default Home;