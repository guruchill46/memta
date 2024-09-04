////src/components/paginate.jsx
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Pagination, PaginationItem} from '@material-ui/lab';
import {Link} from 'react-router-dom';
import { getPosts } from '../actions/postaction.js';
import useStyles from './styles.js';


const Paginate =({page})=>{

    const styless = useStyles();
    const dispatch = useDispatch();
    const {NumberOfPages} = useSelector((state)=>state.postReducer)

    useEffect(()=>{
        if(page) {dispatch(getPosts(page))}
    },[dispatch, page])

    return(
        <Pagination
          styless={{ul: styless.ul}}
          count={NumberOfPages}
          page={Number(page)||1}//used for only highlighting the page number
          variant='outlined'
          color='primary'
          renderItem={(item)=>(
            <PaginationItem {...item} component={Link} 
            to={`/posts?page=${item.page}`}/>
            // item.page is not related to page from home.js
            //item.page is ui page number we click
          ) } 
        />
    )
}

export default Paginate;