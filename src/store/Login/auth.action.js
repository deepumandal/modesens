import { Login_E, Login_L, Login_S, Signup_E, Signup_L, Signup_S } from "./auth.types"
import axios from 'axios'


export const SignupApi=(data)=>(dispatch)=>
{
    dispatch({type:Signup_L})
 axios.post('https://reqres.in/api/register',{
    "email":data.email,
    "password":data.password
 })
 .then((res)=>dispatch({type:Signup_S,payload:res.data}))
 .catch(()=>dispatch({type:Signup_E}))
}



export const LoginApi=(data)=>(dispatch)=>
{
    dispatch({type:Login_L})
    axios.post('https://reqres.in/api/register',{
        "email":data.email,
        "password":data.password
     })
     .then((res)=>dispatch({type:Login_S,payload:res.data}))
     .catch(()=>dispatch({type:Login_E}))
}