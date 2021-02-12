let initState = {

    users: [],
    pageSize: 15,
    totalUsersCount: 5,
    currentPage: 2,
    isFetching: false,
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

        default:
            return state;
    }
};

export const follow = (userId) => {
    return {type: "FOLLOW", userId}
};
export const unfollow = (userId) => {
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

export default userReduxer;