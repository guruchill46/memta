//////src/reducers/authreducer.js

const reducer=(state={authdata: null},action)=>{

    switch (action.type){
        case 'AUTH':    
            localStorage.setItem('profile', JSON.stringify({...action?.payload}));
            return {...state, authdata:action.payload};
        case 'LOGOUT':
            return {...state, authdata:null};    
        default:
            return state;    
    }
}

export default reducer;