import axios from "axios"
import { LOGIN_SUCESS } from "./auth.types"

export const LoginApi=(data)=>(dispatch)=>
{
  axios.post('https://reqres.in',data)
  .then((res)=>dispatch({type:LOGIN_SUCESS,payload:res.data}))
}