import {ApiUsers} from "../api/api";

let initState = {

    users: [],
    pageSize: 15,
    totalUsersCount: 5,
    currentPage: 2,
    isFetching: false,
    followingInProgress: []
}

const userReduxer = (state = initState, action) => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user;
                })
            }
        case "SET-USERS": {
            return {...state, users: action.users}
        }

        case "SET-PAGINATION-PAGE": {
            return {...state, currentPage: action.currentPage}
        }

        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case "TOGGLE-LOADING-IMG": {
            return {...state, isFetching: action.isFetching}
        }

        case 'TOGGLER-FOLLOW-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id=>id != action.userId)
            }
        }

        default:
            return state;
    }
};

export const followSuccess = (userId) => {
    return {type: "FOLLOW", userId}
};
export const unfollowSuccess = (userId) => {
    return {type: "UNFOLLOW", userId}
};
export const setUsers = (users) => {
    return {type: "SET-USERS", users}
};
export const setPagination = (currentPage) => {
    return {type: "SET-PAGINATION-PAGE", currentPage}
};
export const setTotalCount = (totalUsersCount) => {
    return {type: "SET-TOTAL-COUNT", totalUsersCount}
};
export const toggleLoadingImg = (isFetching) => {
    return {type: "TOGGLE-LOADING-IMG", isFetching}
};

export const toglerFollowProgress = (isFetching, userId) => {
    return{type:'TOGGLER-FOLLOW-PROGRESS', isFetching, userId}
}


export const getUsers = (currentPage, pageSize)=> {
    return  (dispatch) =>     {

        dispatch(toggleLoadingImg(true));
        ApiUsers.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleLoadingImg(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        })
    }
}

export const unfollow = (id) => {
    return(dispatch) => {
        dispatch(toglerFollowProgress(true, id))
        ApiUsers.unfollow(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowSuccess(id))
            }
            dispatch(toglerFollowProgress(false, id))
        })
    }
}


export const follow = (id) => {
    return(dispatch) => {
        dispatch(toglerFollowProgress(true, id))
        ApiUsers.follow(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toglerFollowProgress(false, id))
        })

    }
}




export default userReduxer;