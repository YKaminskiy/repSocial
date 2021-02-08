import {combineReducers, createStore} from "redux";
import profileReduxer from "./profileReduxer";
import dialogsReduxer from "./dialogsReduxer";
import userReduxer from "./usersReduxer";


let reducers = combineReducers(
    {
        profile: profileReduxer,
        dialogs: dialogsReduxer,
        usersPage:  userReduxer,
    }
)

let store = createStore(reducers)

export default store;