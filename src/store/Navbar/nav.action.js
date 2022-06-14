import axios  from "axios"
import { NAVBAR_DATA_ERROR, NAVBAR_DATA_LOADING, NAVBAR_DATA_SUCCESS } from "./nav.types"



export const getnavdataapi = () =>(dispatch)=>{
// LOADING HERE
    dispatch({type : NAVBAR_DATA_LOADING })

// DATA COMES HERE
axios
    .get('http://localhost:8080/Navbar')
    .then((r)=>(
        dispatch({type : NAVBAR_DATA_SUCCESS , payload : r.data })
        
    ))
    .catch((err)=>(
        // ERROR COMES HERE
        dispatch({type : NAVBAR_DATA_ERROR })
    ))



}