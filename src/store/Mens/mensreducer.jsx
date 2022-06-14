import { GET_CATEGORY, GET_MENS_DATA_SUCCESS } from "./menstype";
let initialState={catdata:[],mdata:[],mloaderror:{loading:false,error:false}}
export const mensreducer=(state=initialState,action)=>{
switch (action.type)
{   case GET_CATEGORY:{
    return {...state,catdata:action.payload}
}
    case GET_MENS_DATA_SUCCESS:
    { 
        return {...state,mdata:action.payload,mloaderr:{...state.mloaderror,loading:false,error:false}}
    }
    default:
       {
        return{...state}
       } 
}
}