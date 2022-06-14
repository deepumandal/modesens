import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { navReducer } from "./Navbar/navReducer";


const rootReducer = combineReducers({
    navbar: navReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))