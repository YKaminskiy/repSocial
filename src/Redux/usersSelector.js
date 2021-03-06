import {createSelector} from "reselect";


export const getUsersS = (state) => {
    return state.usersPage.users
}

export const getUsers = createSelector( getUsersS,(users) => {
    return users
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export const getIsAuth = (state) => {
    return state.auth.isAuth
}