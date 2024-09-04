//////src/actions/useraction.js
import * as api from '../api';



export const signin=(formData, navigate)=>async (dispatch)=>{
    try{
        const {data} = await api.signin(formData);
        dispatch({type:'AUTH', payload:data});
        navigate('/');
        setTimeout(()=>{
            //console.log('done')
            window.location.reload();
          localStorage.clear()
        dispatch({type:'LOGOUT'})
        navigate('/') },3600000);
        //console.log('set')    
    }
    catch(error){
        console.log(error)
    }
};

export const signup=(formData, navigate)=>async (dispatch)=>{
    try{
        const {data} = await api.signup(formData);
        dispatch({type:'AUTH', payload:data});
        navigate('/');
    }
    catch(error){
        console.log(error)
    }
};