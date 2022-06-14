import { NAVBAR_DATA_ERROR, NAVBAR_DATA_LOADING, NAVBAR_DATA_SUCCESS } from "./nav.types"



const initialstate = ({
      navdata : [],
      loading: false,
      error : false
})

export const navReducer =( state = initialstate, {type , payload} )=>{

switch(type){
    case NAVBAR_DATA_LOADING : {
        return {
            ...state, 
            loading : true,
            error : false
            }
    }

    case NAVBAR_DATA_SUCCESS:{
        // console.log(payload)
        return {
            ...state,
            navdata: payload,
            loading : false,
            error : false
        }
    }
    case NAVBAR_DATA_ERROR:{
        return {
            ...state, 
            error : true,
            loading : false 

        }
    }
    
    default : {
        return state
    }
}

    
}