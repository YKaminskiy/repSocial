
let initState = {

    users: [
        {id: 1, name: 'Yuriy', status: 'online', location: {city: 'Kiyv', country: 'Ukraine'}, follow: true, url: 'https://medialeaks.ru/wp-content/uploads/2019/07/s1200-1-600x375.jpg' },
        {id: 2, name: 'Hope', status: 'online', location: {city: 'Kiyv', country: 'Ukraine'}, follow: true, url: 'https://icdn.lenta.ru/images/2020/01/28/17/20200128170822958/square_320_9146846fb3b1bfae5672755bc1896214.jpg'  },
        {id: 3, name: 'Mike', status: 'offline', location: {city: 'Kiyv', country: 'Ukraine'}, follow: true, url: 'https://wuzzup.ru/wp-content/uploads/2019/05/43054392_2250627378549261_137207783997206054_n.jpg'  },
        {id: 4, name: 'Eve', status: 'online', location: {city: 'Kiyv', country: 'Ukraine'},follow: false, url: 'https://klike.net/uploads/posts/2019-07/1564314090_3.jpg'  },
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