import { Login_L, Login_S, Login_E, Signup_E, Signup_L, Signup_S } from "./auth.types"

let tokenS = localStorage.getItem('tokenS');
let tokenL = localStorage.getItem('tokenL')
let initialState = {
    loading: false, error: false, isAuth: tokenS? true :false, tokenS: tokenS, tokenL: tokenL
}
export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case Signup_L:
            {
                return { ...state, loading: true, error: false, isAuth: false }
            }
        case Signup_S:
            {
                localStorage.setItem("tokenS", payload.token)
                return { ...state, loading: false, error: false, isAuth: true }
            }
        case Signup_E:
            {
                return { ...state, loading: false, error: true, isAuth: false }
            }
        case Login_L:
            {
                return { ...state, loading: true, error: false, isAuth: false }
            }
        case Login_S:
            {
                localStorage.setItem("tokenL", payload.token)
                return { ...state, loading: false, error: false, isAuth: true }
            }
        case Login_E:
            {
                return { ...state, loading: false, error: true, isAuth: false }
            }
        case "Logout": {
            return { ...state, isAuth: false }
        }
        case "check":{

        }
        default:
            {

                return { state }
            }
    }
}