import {combineReducers, createStore} from "redux";
import profileReduxer from "./profileReduxer";
import dialogsReduxer from "./dialogsReduxer";
import userReduxer from "./usersReduxer";
import authReduxer from "./authReduxer";



let reducers = combineReducers(
    {
        profilePage: profileReduxer,
        dialogsPage: dialogsReduxer,
        usersPage:  userReduxer,
        auth: authReduxer,

    }
)

let store = createStore(reducers)

export default store;