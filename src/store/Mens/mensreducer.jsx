import { GET_MENS_DATA_SUCCESS } from "./menstype";
let initialState={mdata:[],mloaderror:{loading:false,error:false}}
export const mensreducer=(state=initialState,action)=>{
switch (action.type)
{
    case GET_MENS_DATA_SUCCESS:
    {   console.log("payload in red",action.payload)
        return {...state,mdata:action.payload,mloaderr:{...state.mloaderror,loading:false,error:false}}
    }
    default:
       {
        return{...state}
       } 
}
}