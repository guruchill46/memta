import * as api from '../api';

export const signUp =(formData, navigate)=>async(dispatch)=>{

    try{
        const {data} = await api.crmSignUp(formData)
        dispatch({type: 'AUTH', payload: data})
        console.log(data)
        navigate('/crm')
    }
    catch(error){
        console.log(error)
    }
}

export const signIn = (formData, navigate)=>async(dispatch)=>{

    try{
        const {data} = await api.crmSignIn(formData)
        dispatch({type:'AUTH', payload: data})
        navigate('/crm')
       }
    catch(error){
        console.log(error)
    }   
}