import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduxer from "./profileReduxer";
import dialogsReduxer from "./dialogsReduxer";
import userReduxer from "./usersReduxer";
import authReduxer from "./authReduxer";
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer} from 'redux-form'



let reducers = combineReducers(
    {
        profilePage: profileReduxer,
        dialogsPage: dialogsReduxer,
        usersPage:  userReduxer,
        auth: authReduxer,
        form: formReducer

    }
)

let store = createStore(reducers, applyMiddleware(ReduxThunk))


export default store;