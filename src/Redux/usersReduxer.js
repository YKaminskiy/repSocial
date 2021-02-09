
let initState = {

    users: [
    ]
}

const userReduxer = (state=initState, action) => {

        switch(action.type) {
            case "FOLLOW":
                return {
                    ...state,
                    users: state.users.map(user=> {
                        if (user.id === action.userId) {
                            return {...user, follow:true}
                        }
                        return user;
                    })
                }
            case "UNFOLLOW":
                    return {
            ...state,
                users: state.users.map(user=> {
                if (user.id === action.userId) {
                    return {...user, follow:false}
                }
                return user;
            })
        }
            case "SET-USERS":
                return {
                    ...state,
                    users: [ ...state.users, ...action.users ]
                }
            default:
                return state;
    }
};

export const followActionCreator = (userId) => {
    return{
        type: "FOLLOW", userId,
    }


};

export const unfollowActionCreator = (userId) => {
    return {
        type: "UNFOLLOW", userId,
    }
};

export const setUsersAC = (users) => {
    return{
        type:"SET-USERS", users
    }
}


export default userReduxer;