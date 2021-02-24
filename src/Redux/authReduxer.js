import {ApiUsers} from "../api/api";
import {stopSubmit} from "redux-form";

let initState = {

    id: null,
    email: null,
    login: null,
    isAuth: false

}

const authReduxer = (state = initState, action) => {
    switch (action.type) {

        case "SET-USER-DATA":

            return {
                ...state,
                ...action.payload,

                            }
        default:
            return state;
    }
}
export let setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            id,
            email,
            login,
            isAuth
        }
    }
}

export const authUser = () => {
    return(dispatch) => {
       return ApiUsers.userAuth()
            .then(response => {

                if (response.data.resultCode === 0) {

                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }})
    }

    }

export const login = (email, password, rememberMe) => {
    return(dispatch) => {
        ApiUsers.login(email, password, rememberMe)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(authUser())
                }else {
                    let message = response.data.messages[0]
                    dispatch(stopSubmit('login', {_error:message} ))

                }

            })
    }

}
export const logout = () => {
    return(dispatch) => {
        ApiUsers.logout()
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }})
    }

}


export default authReduxer;








