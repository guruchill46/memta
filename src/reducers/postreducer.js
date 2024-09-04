///////src/reducer/postreducers

const reducer =(statepost={posts:[], isLoading:true},action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return {...statepost, posts: action.payload.data,
                currentPage: action.payload.currentPage,
                NumberOfPages: action.payload.NumberOfPages
            }
        case 'START_LOADING':
                return{...statepost, isLoading:true}
        case 'END_LOADING':
                return{...statepost, isLoading:false}     
        case 'FETCH_BY_SEARCH':
            return {...statepost, posts: action.payload.data}    
        case 'FETCH_POSTD':
            return {...statepost, postd: action.payload}    
        case 'CREATE':
            return {...statepost, posts: [...statepost.posts, action.payload]} ;
        case 'UPDATE':
        case 'LIKE':    
            return {...statepost, posts: statepost.posts.map((x)=>x._id===action.payload._id?action.payload:x)} 
        case 'DELETE':
            return {...statepost, posts: statepost.posts.filter((x)=>x._id!==action.payload)} 
        case 'COMMENT':
            return {...statepost, posts: statepost.posts.map((x)=>{if(x._id===action.payload._id) return action.payload;
                return x;
            })}        
        default:
            return statepost;    
    }
}

export default reducer;