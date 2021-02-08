import {connect} from "react-redux";
import {followActionCreator, setUsersAC, unfollowActionCreator} from "../Redux/usersReduxer";
import Users from "./Users";




let mapStateToProps =(state) => {
    return{
        users: state.usersPage.users
    }

}
let mapDispatchToProps =(dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }


    }

}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);



export default UsersContainer;