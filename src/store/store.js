import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Login/auth.reducer";
import { mensreducer } from "./Mens/mensreducer";
import { navReducer } from "./Navbar/navReducer";
import { composeWithDevTools } from 'redux-devtools-extension';



const rootReducer = combineReducers({
    navbar: navReducer,
    mens: mensreducer,
    auth: authReducer
})


export const store = legacy_createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
)
)