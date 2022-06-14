import { GET_MENS_DATA_SUCCESS } from "./menstype"
import axios from 'axios'

export const getmensAPI=()=>(dispatch)=>{

    axios.get("http://localhost:8080/Mensdata")
        .then((resp)=>{
            console.log("resp.data",resp.data)
            dispatch({type:GET_MENS_DATA_SUCCESS,payload:resp.data})
        })
}