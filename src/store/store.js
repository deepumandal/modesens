import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { mensreducer } from "./Mens/mensreducer";
import { navReducer } from "./Navbar/navReducer";


const rootReducer = combineReducers({
    navbar: navReducer,
    mens:mensreducer,
    // auth:authReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))