import {ApiUsers} from "../api/api";

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
                ...action.data,
                isAuth: true,

            }
        default:
            return state;
    }
}
export let setAuthUserData = (id, email, login) => {
    return {
        type: "SET-USER-DATA",
        data: {
            id,
            email,
            login
        }
    }
}

export const authUser = () => {
    return(dispatch) => {
        ApiUsers.userAuth()
            .then(response => {

                if (response.data.resultCode === 0) {

                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }})
    }

    }



export default authReduxer;








