import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '6397f476-ecf7-4ee3-bb38-7ec52a1be1b9'}

})

export const ApiUsers = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    userAuth() {return instance.get(`auth/me`)    },

    login(email, password, rememberMe = false) {return instance.post(`auth/login`, {email, password, rememberMe})    },
    logout() {return instance.delete(`auth/login`)    },
}








export let ApiProfile = {
    getProfile(userId) {return instance.get('profile/' + userId)   },
    getUserStatus(userId) {return instance.get('/profile/status/' + userId)},
    updateProfileStatus(status) {return instance.put('/profile/status', {status: status})}
}