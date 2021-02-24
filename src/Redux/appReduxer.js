import {authUser} from "./authReduxer";


let initialState = {
    initialized: false
}

const appReduxer = (state = initialState, action) => {

    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }
            default: return state

    }
}

export const initSuccess = () => ({type: "SET-INITIALIZED"})

export const goInitializeApp = () => (dispatch)=> {
    const promise = dispatch(authUser())
    promise.then( ()=>{
        dispatch(initSuccess())
        } )


}



export default appReduxer