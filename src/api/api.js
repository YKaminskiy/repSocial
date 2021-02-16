import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '6397f476-ecf7-4ee3-bb38-7ec52a1be1b9'}

})

export const ApiUsers = {

    getUsers (currentPage, pageSize)  {
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

    userAuth(id, email, login) {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })

    }







}