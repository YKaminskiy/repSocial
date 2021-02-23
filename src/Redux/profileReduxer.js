import {ApiProfile} from "../api/api";


let initState = {
        ProfileMessagesDB: [
            {id: 1, message: "The generated Lorem Ipsum is therefore always free from repetition", likes: 53},
            {id: 2, message: "Contrary to popular belief, Lorem Ipsum is not simply random text", likes: 54},
            {id: 3, message: "It has survived not only five centuries, but also the leap into electronic typesetting",
                likes: 43
            },
        ],

    profile: null,
    status: '',
    };


const profileReduxer = (state = initState, action) => {

    switch (action.type) {
        case "POST-ADD":
            let newPost = {
                message: action.profileFormMessageText,
                id: "7",
                likes: "0"
            }
            return {
                ...state,
                ProfileMessagesDB: [...state.ProfileMessagesDB, newPost]
            }


        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET-USER-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;


    }
}

export let addPostActionCreator = (profileFormMessageText) => {
    return {
        type: "POST-ADD", profileFormMessageText
    }

};


export let setUserProfile = (profile) => {
    return {
        type: "SET-USER-PROFILE", profile
    }

};

export let setUserStatus = (status) => {
    return {
        type:"SET-USER-STATUS", status
    }
};


export const getUserProfileStatus = (userId) => {
    return(dispatch) => {
        ApiProfile.getUserStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data))
            } )
    }
};


export const updateUserProfileStatus = (status) => {
    return(dispatch) => {
        ApiProfile.updateProfileStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            } })
    }
};


export const getUserProfile = (userId) => {
    return(dispatch) => {
        ApiProfile.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })

    }
};





export default profileReduxer;








