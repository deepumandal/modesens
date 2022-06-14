import { GET_CATEGORY, GET_MENS_DATA_SUCCESS } from "./menstype"
import axios from 'axios'

export const getmensAPI=()=>(dispatch)=>{

    axios.get("http://localhost:8080/Mensdata")
        .then((resp)=>{
        
            dispatch({type:GET_MENS_DATA_SUCCESS,payload:resp.data})
        })
}

export const getcat=()=>(dispatch)=>{
    axios.get("http://localhost:8080/Navbar/?categoryname=MEN ")
        .then((resp)=>{
            console.log("resp.data getcat",resp.data[0].subcateg)
            dispatch({type:GET_CATEGORY,payload:resp.data[0].subcateg})
        })
}